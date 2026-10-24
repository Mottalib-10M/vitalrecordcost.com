#!/usr/bin/env node
// Régénère les JSON du site à partir des fiches relevées à la main sur les pages officielles.
//
//   node scripts/update-data.mjs                 -> data/vital-records.json + data/marriage-license.json
//   node scripts/update-data.mjs --check-sources -> relit chaque page source et signale celles qui ont changé
//
// Les barèmes d'état civil sont publiés par 57 bureaux différents, chacun dans sa mise en page : aucun
// format commun, aucune API. Le chiffre n'est donc jamais extrait automatiquement. La fiche
// (data/source/*.tsv) est tenue à la main, avec l'URL officielle, une citation courte et la date de lecture.
// Le mode --check-sources sert de veille : il télécharge chaque page (sans contourner aucun blocage),
// compare l'empreinte au dernier passage et liste les pages à relire. Le cron GitHub Actions le lance
// chaque semaine et ouvre la liste dans le journal du workflow ; un humain relit et corrige la fiche.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'data', 'source');
const OUT = join(ROOT, 'data');

function readTsv(file) {
  const [head, ...lines] = readFileSync(join(SRC, file), 'utf8').trim().split('\n');
  const cols = head.split('\t');
  return lines.map((l) => {
    const cells = l.split('\t');
    return Object.fromEntries(cols.map((c, i) => [c, (cells[i] ?? '').trim()]));
  });
}

const num = (v, field, code) => {
  if (v === '') return null;
  const n = Number(v);
  if (!Number.isFinite(n) || n < 0 || n > 500) throw new Error(`${code}.${field} : valeur invalide « ${v} »`);
  return n;
};

const LICENCE = {
  facts:
    'Montants et délais = faits publiés par les administrations des États, des comtés et des villes (pages officielles citées une à une). Les faits ne sont pas protégés ; aucun tableau ni texte n’est recopié.',
  cdc:
    'CDC/NCHS « Where to Write for Vital Records » : « Most of the information on the CDC and ATSDR websites is not subject to copyright, is in the public domain » (cdc.gov/other/agencymaterials.html). Attribution : développé par CDC/HHS, disponible gratuitement sur cdc.gov. Utilisé seulement comme annuaire de repli ; ses montants (revus en 2019-2022) ne sont pas repris. Attribution affichée en pied de page : « Source: CDC/NCHS … ; use does not imply endorsement by CDC or HHS ».',
  commonLaw:
    'Statuts du mariage de fait : SSA, POMS GN 00305.075 (révision du 2023-05-30, domaine public fédéral), complété par le rapport OLR 2025-R-0165 du Connecticut General Assembly (2025-10-09) et la SC Revenue Ruling 21-3 ; le guide législatif de l’Iowa de 2005 n’est plus utilisé.',
};

// Short notes are written in English in the sheets; their Spanish wording lives in
// data/source/translations-es.tsv (column en = the exact English text). A note without its
// Spanish wording stops the build: a Spanish page never shows an English sentence.
const ES = existsSync(join(SRC, 'translations-es.tsv'))
  ? new Map(readTsv('translations-es.tsv').map((r) => [r.en, r.es]))
  : new Map();
const missingEs = new Set();
const T = (en) => {
  if (!en) return null;
  const es = ES.get(en);
  if (!es) missingEs.add(en);
  return { en, es: es ?? '' };
};
const opt = (file) => (existsSync(join(SRC, file)) ? readTsv(file) : []);
const where = (v) => (['state', 'county', 'both'].includes(v) ? v : null);

function build() {
  const extra = new Map(readTsv('fees-extra.tsv').map((r) => [r.code, r]));
  const md = new Map(opt('records-md.tsv').map((r) => [r.code, r]));
  const proc = new Map(opt('processing.tsv').map((r) => [r.code, r]));
  const apo = new Map(opt('apostille.tsv').map((r) => [r.code, r]));
  const cl = new Map(opt('common-law.tsv').map((r) => [r.code, r]));
  const fees = readTsv('fees.tsv').map((r) => {
    const x = extra.get(r.code);
    if (!x) throw new Error(`${r.code} : ligne manquante dans fees-extra.tsv`);
    const m = md.get(r.code);
    const p = proc.get(r.code);
    const a = apo.get(r.code === 'NYC' ? 'NY' : r.code);
    const c = cl.get(r.code === 'NYC' ? 'NY' : r.code);
    const rec = {
      code: r.code,
      name: r.name,
      nameEs: x.name_es,
      office: x.office,
      birth: { first: num(r.birth_first, 'birth_first', r.code), additional: num(r.birth_add, 'birth_add', r.code) },
      death: { first: num(r.death_first, 'death_first', r.code), additional: num(r.death_add, 'death_add', r.code) },
      vendor: x.vendor || null,
      vendorFee: num(x.vendor_fee, 'vendor_fee', r.code),
      vendorText: x.vendor_en ? { en: x.vendor_en, es: x.vendor_es } : null,
      local: x.local || null,
      sources: { birth: r.source_birth, death: r.source_death },
      quote: r.quote,
      retrievedAt: r.retrieved,
      confidence: r.confidence,
      processing: p && p.birth_mail ? T([p.birth_mail && `Mail: ${p.birth_mail}`, p.birth_online && `online: ${p.birth_online}`, p.birth_inperson && `in person: ${p.birth_inperson}`].filter(Boolean).join('; ')) : null,
      mailDaysMax: p ? num(p.mail_days_max, 'mail_days_max', r.code) : null,
      processingUrl: p && p.url ? p.url : null,
      marriageRecord: m ? { where: where(m.marr_where), first: num(m.marr_state_first, 'marr_state_first', r.code), additional: num(m.marr_state_add, 'marr_state_add', r.code), note: T(m.marr_note), url: m.marr_url || null } : null,
      divorceRecord: m ? { where: where(m.div_where), first: num(m.div_state_first, 'div_state_first', r.code), additional: num(m.div_state_add, 'div_state_add', r.code), note: T(m.div_note), url: m.div_url || null } : null,
      apostille: a ? { fee: num(a.fee, 'apostille', r.code), note: T(a.note), url: a.url || null } : null,
      commonLaw: c ? { status: ['recognized', 'abolished', 'never'].includes(c.status) ? c.status : null, date: c.since_or_until || null, note: T(c.note), url: c.url || null } : null,
    };
    for (const k of ['birth', 'death']) {
      if (rec[k].first === null) throw new Error(`${r.code} : ${k}.first manquant`);
      if (!/^https:\/\//.test(rec.sources[k])) throw new Error(`${r.code} : source ${k} non https`);
    }
    return rec;
  });

  const marriage = readTsv('marriage.tsv').map((r) => {
    const v = r.validity;
    let validity = null;
    if (v === 'none') validity = { kind: 'none' };
    else if (/^\d+d$/.test(v)) validity = { kind: 'days', value: Number(v.slice(0, -1)) };
    else if (/^\d+m$/.test(v)) validity = { kind: 'months', value: Number(v.slice(0, -1)) };
    else if (/^\d+y$/.test(v)) validity = { kind: 'years', value: Number(v.slice(0, -1)) };
    else if (v !== '') throw new Error(`${r.code} : validité « ${v} »`);
    return {
      code: r.code,
      feeState: num(r.fee_state, 'fee_state', r.code),
      feeMin: num(r.fee_min, 'fee_min', r.code),
      feeMax: num(r.fee_max, 'fee_max', r.code),
      example: T(r.example_en || ''),
      setBy: r.set_by,
      waitingHours: num(r.waiting_hours, 'waiting_hours', r.code),
      validity,
      courseDiscount: num(r.course_discount, 'course_discount', r.code) || 0,
      courseHours: num(r.course_hours, 'course_hours', r.code) || 0,
      confidence: r.confidence,
      note: T(r.note_en || ''),
      source: r.source,
      quote: r.quote,
      retrievedAt: r.retrieved,
    };
  });

  const extrasRows = opt('extras.tsv');
  const items = Object.fromEntries(extrasRows.map((r) => [r.key, { value: r.value === '' ? null : Number.isFinite(Number(r.value)) ? Number(r.value) : null, unit: r.unit, note: r.note, url: r.url, retrieved: r.retrieved, ...(r.unconfirmed === 'yes' ? { unconfirmed: true } : {}) }]));

  const codes = new Set(fees.map((f) => f.code));
  for (const m of marriage) if (!codes.has(m.code)) throw new Error(`mariage ${m.code} sans fiche état civil`);
  if (fees.length !== 52 || marriage.length !== 52) throw new Error(`52 juridictions attendues (${fees.length}/${marriage.length})`);
  if (missingEs.size && !process.env.ALLOW_MISSING_ES) {
    console.error(`${missingEs.size} note(s) sans traduction espagnole dans translations-es.tsv :`);
    for (const t of missingEs) console.error(`  ${t}`);
    process.exit(1);
  }

  const lastRetrieved = [...fees, ...marriage].map((x) => x.retrievedAt).sort().at(-1);
  const meta = { generatedAt: lastRetrieved, dataAsOf: lastRetrieved, licence: LICENCE, count: fees.length };
  writeFileSync(join(OUT, 'vital-records.json'), JSON.stringify({ meta, records: fees }, null, 1) + '\n');
  writeFileSync(join(OUT, 'marriage-license.json'), JSON.stringify({ meta, records: marriage }, null, 1) + '\n');
  writeFileSync(join(OUT, 'extras.json'), JSON.stringify({ dataAsOf: lastRetrieved, items }, null, 1) + '\n');
  console.log(`OK : ${fees.length} fiches état civil, ${marriage.length} fiches licence de mariage, ${extrasRows.length} faits annexes, données au ${lastRetrieved}`);
  return { fees, marriage, items };
}

async function checkSources({ fees, marriage, items }) {
  const urls = [...new Set([...fees.flatMap((f) => [f.sources.birth, f.sources.death, f.processingUrl, f.marriageRecord?.url, f.divorceRecord?.url, f.apostille?.url, f.commonLaw?.url]), ...marriage.map((m) => m.source), ...Object.values(items).map((i) => i.url)].filter(Boolean))];
  const hashFile = join(SRC, 'hashes.json');
  const prev = existsSync(hashFile) ? JSON.parse(readFileSync(hashFile, 'utf8')) : {};
  const next = {};
  const changed = [];
  const unreachable = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': 'vital-records-data-check/1.0 (weekly source review)' }, redirect: 'follow' });
      if (!res.ok) {
        unreachable.push(`${res.status} ${url}`);
        next[url] = prev[url] ?? null;
        continue;
      }
      const text = (await res.text()).replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      const h = createHash('sha256').update(text).digest('hex').slice(0, 16);
      next[url] = h;
      if (prev[url] && prev[url] !== h) changed.push(url);
    } catch (e) {
      unreachable.push(`ERR ${url} (${e.message})`);
      next[url] = prev[url] ?? null;
    }
    await new Promise((r) => setTimeout(r, 400));
  }
  writeFileSync(hashFile, JSON.stringify(next, null, 1) + '\n');
  console.log(`${urls.length} pages sources, ${changed.length} changées, ${unreachable.length} illisibles par robot`);
  for (const u of changed) console.log(`À RELIRE : ${u}`);
  for (const u of unreachable) console.log(`à vérifier à la main : ${u}`);
  writeFileSync(join(SRC, 'changes.txt'), [`Contrôle du ${new Date().toISOString().slice(0, 10)}`, ...changed.map((u) => `À RELIRE : ${u}`), ...unreachable.map((u) => `à vérifier à la main : ${u}`)].join('\n') + '\n');
  // Code 2 = au moins une page officielle a changé : le workflow ouvre un ticket de relecture.
  if (changed.length) process.exitCode = 2;
}

const data = build();
if (process.argv.includes('--check-sources')) await checkSources(data);
