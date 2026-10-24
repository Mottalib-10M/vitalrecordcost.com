/** Writing helpers handed to every page: links, figures read from the data, tables, rankings. */
import { route, hasRoute, ROUTES, type Locale } from '../i18n/routes';
import { JURS, MARRIAGE, META, EXTRAS, byCode, marriageOf, nameOf, txt, sorted, type Jur, type MarriageRec } from './engine/data';
import { stateFees, rankByCost, type RecordKind } from './engine/vital';
import { formatNumberL, money, pct, dateL } from './format-l';
import { srcText } from './src-label';

const esc = (s: string | number) => String(s).replace(/&(?!(?:[a-z]+|#\d+);)/g, '&amp;').replace(/</g, '&lt;');
export function table(headers: string[], rows: Array<Array<string | number>>, caption?: string, align: Array<'l' | 'r'> = [], lang: Locale = 'en') {
  const al = (i: number) => (align[i] === 'r' ? 'text-right' : 'text-left');
  return `<div class="not-prose my-6 overflow-x-auto"><table class="journal w-full text-sm">${caption ? `<caption class="mb-2 text-left text-sm text-navy-600">${caption}</caption>` : ''}<thead><tr>${headers.map((h, i) => `<th scope="col" class="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-navy-700 ${al(i)}">${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="tabular-nums border-b border-navy-100 px-3 py-2 text-navy-800 ${al(i)}">${typeof c === 'number' ? esc(formatNumberL(c, lang)) : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

const median = (xs: number[]) => { const s = [...xs].sort((a, b) => a - b); const n = s.length; return n ? (n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2) : 0; };

export function helpers(lang: Locale, strict = false) {
  const es = lang === 'es';
  const a = (id: string, text: string) => {
    if (!ROUTES.some((r) => r.id === id)) { if (strict && !process.env.PAGES_DRAFT) throw new Error(`Unknown page id in a link: ${id}`); return text; }
    return `<a href="${route(id, lang)}">${text}</a>`;
  };
  const ext = (url: string, text: string) => `<a href="${url}" target="_blank" rel="nofollow noopener noreferrer">${srcText(url, text, es ? 'es' : 'en')}</a>`;
  const m = (n: number) => money(n, lang);
  const num = (n: number, d = 0) => formatNumberL(n, lang, d);
  const pc = (x: number, d = 0) => pct(x, lang, d);
  const nc = es ? 'no publicado' : 'not published';
  const name = (code: string) => nameOf(byCode(code), lang);
  /** Link to a state page of the site when it exists (`birth-tx`, `ml-tx`), else the name. */
  const sl = (code: string, prefix: 'birth' | 'ml' = 'birth', text?: string) => { const id = `${prefix}-${code.toLowerCase()}`; const n = text ?? name(code); return hasRoute(id, lang) ? a(id, n) : n; };
  /** A jurisdiction with its figures already written in the page language. */
  const J = (code: string) => {
    const j = byCode(code);
    const ba = j.birth.additional ?? j.birth.first, da = j.death.additional ?? j.death.first;
    return {
      ...j, j, nameL: nameOf(j, lang),
      bFirst: m(j.birth.first), bAdd: m(ba), dFirst: m(j.death.first), dAdd: m(da),
      bSame: ba === j.birth.first, dSame: da === j.death.first,
      b3: m(stateFees(j.birth, 3)), d5: m(stateFees(j.death, 5)), d10: m(stateFees(j.death, 10)),
      vendorL: txt(j.vendorText, lang, nc), vendorFeeL: j.vendorFee != null ? m(j.vendorFee) : nc,
      processingL: txt(j.processing, lang, nc), office: j.office,
      birthUrl: j.sources.birth, deathUrl: j.sources.death,
      offLink: (text?: string) => ext(j.sources.birth, text ?? j.office),
      marr: j.marriageRecord, div: j.divorceRecord,
      marrNote: txt(j.marriageRecord?.note, lang, ''), divNote: txt(j.divorceRecord?.note, lang, ''),
      apostilleL: j.apostille?.fee != null ? m(j.apostille.fee) : nc, apostilleNote: txt(j.apostille?.note, lang, ''),
      cl: j.commonLaw, clNote: txt(j.commonLaw?.note, lang, ''),
    };
  };
  /** Marriage license rule with its labels. */
  const ML = (code: string) => {
    const r = marriageOf(code);
    const range = r.feeMin != null && r.feeMax != null && r.feeMin !== r.feeMax ? (es ? `${m(r.feeMin)} a ${m(r.feeMax)}` : `${m(r.feeMin)} to ${m(r.feeMax)}`) : null;
    const feeL = r.feeState != null && (r.setBy === 'state' || !range) ? m(r.feeState) : range ?? (r.feeMin != null ? m(r.feeMin) : nc);
    const h = r.waitingHours;
    const waitL = h == null ? nc : h === 0 ? (es ? 'sin espera' : 'no waiting period') : h % 24 === 0 && h >= 72 ? (es ? `${h / 24} días` : `${h / 24} days`) : (es ? `${h} horas` : `${h} hours`);
    const v = r.validity;
    const validL = !v ? nc : v.kind === 'none' ? (es ? 'no vence' : 'does not expire') : es
      ? `${v.value} ${v.kind === 'days' ? 'días' : v.kind === 'months' ? (v.value === 1 ? 'mes' : 'meses') : v.value === 1 ? 'año' : 'años'}`
      : `${v.value} ${v.kind === 'days' ? 'days' : v.kind === 'months' ? (v.value === 1 ? 'month' : 'months') : v.value === 1 ? 'year' : 'years'}`;
    const discL = r.courseDiscount > 0 ? m(r.courseDiscount) : null;
    return { ...r, r, nameL: name(code), feeL, range, waitL, validL, discL, noteL: txt(r.note, lang, ''), exampleL: txt(r.example, lang, ''), srcLink: (t: string) => ext(r.source, t), countySet: r.setBy !== 'state' && r.feeState == null };
  };
  const list = (items: string[]) => { if (items.length < 2) return items.join(''); const last = items[items.length - 1]; return `${items.slice(0, -1).join(', ')} ${es ? 'y' : 'and'} ${last}`; };
  const rank = (kind: RecordKind, copies = 1) => rankByCost(JURS, kind, copies);
  const stats = (kind: RecordKind, copies = 1) => {
    const r = rank(kind, copies);
    const totals = r.map((x) => x.total);
    const lo = r.filter((x) => x.total === totals[0]).map((x) => name(x.code));
    const hi = r.filter((x) => x.total === totals[totals.length - 1]).map((x) => name(x.code));
    return { r, min: totals[0], max: totals[totals.length - 1], median: median(totals), lo, hi, loL: list(lo), hiL: list(hi) };
  };
  return {
    lang, es, a, sl, ext, m, num, pc, nc, J, ML, name, list, rank, stats, median, table: (h: string[], r: Array<Array<string | number>>, c?: string, al: Array<'l' | 'r'> = []) => table(h, r, c, al, lang),
    date: (iso: string) => dateL(iso, lang), JURS, MARRIAGE, META, EXTRAS, sorted: () => sorted(lang),
    x: (key: string) => EXTRAS.items[key]?.value ?? null, xUrl: (key: string) => EXTRAS.items[key]?.url ?? '',
    stateFees,
  };
}
export type Helpers = ReturnType<typeof helpers>;
export type { Jur, MarriageRec };
