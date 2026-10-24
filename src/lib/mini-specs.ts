/**
 * Mini-tools of the guides (RECETTE §9.3): one subject = one calculation, always from the state data
 * and the engine (`engine/vital`, `engine/marriage`), never a second formula. Both languages here.
 */
import type { MiniSpec, MiniOut } from './mini-types';
import { JURS, sorted, nameOf, txt, marriageOf, byCode, EXTRAS, type Jur } from './engine/data';
import { stateFees, rankByCost } from './engine/vital';
import { money, formatNumberL } from './format-l';

type L = 'en' | 'es';
const ORDER: Record<L, Jur[]> = { en: sorted('en'), es: sorted('es') };
const opts = (lang: L, f: (j: Jur) => boolean = () => true) => ORDER[lang].map((j, i) => ({ j, i })).filter(({ j }) => f(j)).map(({ j, i }) => ({ value: String(i), label: nameOf(j, lang) }));
const at = (lang: L, v: Record<string, number>, k = 'state') => ORDER[lang][Math.max(0, Math.min(ORDER[lang].length - 1, Math.round(v[k] ?? 0)))];
/** Index of a jurisdiction in the option list of a language (page defaults). */
export const stateIdx = (code: string, lang: L = 'en') => Math.max(0, ORDER[lang].findIndex((j) => j.code === code));
const W = (lang: L) => (lang === 'es'
  ? { nc: 'no publicado', state: 'Estado', yes: 'Sí', no: 'No', copies: 'Copias', birth: 'Nacimiento', death: 'Defunción', record: 'Acta' }
  : { nc: 'not published', state: 'State', yes: 'Yes', no: 'No', copies: 'Copies', birth: 'Birth', death: 'Death', record: 'Record' });
const x = (k: string) => EXTRAS.items[k]?.value ?? null;
const n = (v: Record<string, number>, k: string, d: number) => Math.max(1, Math.min(50, Math.round(v[k] ?? d)));
const kindOpts = (lang: L) => [{ value: '0', label: W(lang).birth }, { value: '1', label: W(lang).death }];
const kindOf = (v: Record<string, number>) => ((v.kind ?? 0) >= 1 ? 'death' : 'birth') as 'birth' | 'death';
const AMENDED = ['CA', 'TX', 'FL', 'NY', 'NYC', 'PA', 'IL', 'OH', 'GA', 'NC', 'MI', 'NJ', 'VA', 'WA', 'AZ'].filter((c) => x(`amended_${c.toLowerCase()}_fee`) != null);
const COURT = Object.keys(EXTRAS.items).filter((k) => /^ceremony_.+_fee$/.test(k)).map((k) => k.slice(9, -4));
const PLACE: Record<string, string> = {
  fulton_county: 'Fulton County (Atlanta), GA', cook_county: 'Cook County (Chicago), IL', la_county: 'Los Angeles County, CA',
  nyc: 'New York City, NY', clark_county: 'Clark County (Las Vegas), NV', miami_dade: 'Miami-Dade County, FL',
  harris_county: 'Harris County (Houston), TX', travis_county: 'Travis County (Austin), TX', maricopa: 'Maricopa County (Phoenix), AZ',
  king_county: 'King County (Seattle), WA', franklin_county: 'Franklin County (Columbus), OH', davidson_county: 'Davidson County (Nashville), TN',
  mecklenburg: 'Mecklenburg County (Charlotte), NC',
};
const courtLabel = (k: string, lang: L = 'en') => { const l = PLACE[k] ?? k.split('_').map((w) => w[0].toUpperCase() + w.slice(1)).join(' '); return lang === 'es' ? l.replace('New York City', 'Ciudad de Nueva York').replace(/^(.+?) County(.*)$/, 'Condado de $1$2').replace('Los Angeles', 'Los Ángeles') : l; };
/** Places with a published courthouse ceremony or license fee (extras), for the courthouse page. */
export const courtPlaces = (lang: L) => COURT.map((k) => ({ k, label: courtLabel(k, lang), cer: x(`ceremony_${k}_fee`), lic: x(`license_${k}_fee`) ?? x(`license_${k}_public_fee`), url: EXTRAS.items[`ceremony_${k}_fee`]?.url ?? '' }));

const SPECS: Record<string, (lang: L) => MiniSpec> = {
  /** Birth and death fees of one state side by side. */
  pair: (lang) => ({
    title: lang === 'es' ? 'Acta de nacimiento y de defunción en su estado' : 'Birth and death certificate fees in your state', cta: lang === 'es' ? 'Calcular un pedido completo' : 'Price a full order', ctaPage: 'home',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang) }],
    run: (v) => {
      const j = at(lang, v), m = (z: number) => money(z, lang);
      return {
        head: [lang === 'es' ? `Primera copia de nacimiento · ${nameOf(j, lang)}` : `First birth certificate copy · ${nameOf(j, lang)}`, m(j.birth.first)],
        rows: [
          [lang === 'es' ? 'Copia adicional de nacimiento' : 'Extra birth copy, same order', m(j.birth.additional ?? j.birth.first)],
          [lang === 'es' ? 'Primera copia de defunción' : 'First death certificate copy', m(j.death.first)],
          [lang === 'es' ? 'Copia adicional de defunción' : 'Extra death copy, same order', m(j.death.additional ?? j.death.first)],
        ],
      };
    },
  }),
  /** Copies ordered together or one at a time. */
  together: (lang) => ({
    title: lang === 'es' ? '¿Cuánto ahorra al pedir todas las copias juntas?' : 'How much do you save by ordering all copies at once?', cta: lang === 'es' ? 'Calcular el pedido' : 'Price the order', ctaPage: 'home',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang) }, { id: 'kind', label: W(lang).record, def: 0, options: kindOpts(lang) }, { id: 'copies', label: W(lang).copies, def: 3, max: 50 }],
    run: (v) => {
      const j = at(lang, v), k = kindOf(v), c = n(v, 'copies', 3), m = (z: number) => money(z, lang);
      const tog = stateFees(j[k], c), sep = j[k].first * c;
      return {
        head: [lang === 'es' ? `${c} copias en un solo pedido` : `${c} copies in one order`, m(tog)],
        rows: [
          [lang === 'es' ? 'Pedidas una por una' : 'Ordered one at a time', m(sep)],
          [lang === 'es' ? 'Ahorro' : 'Saved', m(sep - tog)],
          [lang === 'es' ? 'Precio por copia en un solo pedido' : 'Price per copy in one order', m(tog / c)],
        ],
        note: sep === tog ? (lang === 'es' ? 'Este estado cobra lo mismo por cada copia: pedirlas juntas no rebaja el precio, solo el envío.' : 'This state charges the same for every copy: ordering together saves only on shipping.') : undefined,
      };
    },
  }),
  /** Mail versus online through the authorized vendor. */
  online: (lang) => ({
    title: lang === 'es' ? 'Por correo o en línea: la diferencia en su estado' : 'Mail or online: the difference in your state', cta: lang === 'es' ? 'Calcular con su cargo exacto' : 'Price it with your exact fee', ctaPage: 'home',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('NYC', lang), options: opts(lang) }, { id: 'copies', label: W(lang).copies, def: 1, max: 50 }],
    run: (v) => {
      const j = at(lang, v), c = n(v, 'copies', 1), m = (z: number) => money(z, lang), w = W(lang);
      const base = stateFees(j.birth, c);
      return {
        head: [lang === 'es' ? 'En línea con el cargo publicado' : 'Online with the published fee', j.vendorFee != null ? m(base + j.vendorFee) : w.nc],
        rows: [
          [lang === 'es' ? 'Por correo o en ventanilla' : 'By mail or at the counter', m(base)],
          [lang === 'es' ? 'Cargo en línea publicado' : 'Published online fee', j.vendorFee != null ? m(j.vendorFee) : w.nc],
          [lang === 'es' ? 'Canal en línea' : 'Online channel', txt(j.vendorText, lang, w.nc)],
        ],
      };
    },
  }),
  /** Published processing time. */
  processing: (lang) => ({
    title: lang === 'es' ? 'Plazo publicado por la oficina de su estado' : 'Processing time published by your state office', cta: lang === 'es' ? 'Calcular el costo' : 'Work out the cost', ctaPage: 'home',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang) }],
    run: (v) => {
      const j = at(lang, v), w = W(lang);
      return {
        head: [lang === 'es' ? `Pedido por correo · ${nameOf(j, lang)}` : `Mail order · ${nameOf(j, lang)}`, j.mailDaysMax != null ? (lang === 'es' ? `hasta ${j.mailDaysMax} días` : `up to ${j.mailDaysMax} days`) : w.nc],
        rows: [
          [lang === 'es' ? 'Lo que dice la oficina' : 'What the office says', txt(j.processing, lang, w.nc)],
          [lang === 'es' ? 'Oficina' : 'Office', j.office],
        ],
        note: lang === 'es' ? 'Al plazo de trámite se suma el correo de ida y vuelta.' : 'Mail time both ways comes on top of the processing time.',
      };
    },
  }),
  /** Birth certificate plus a first passport. */
  passport: (lang) => ({
    title: lang === 'es' ? 'Acta de nacimiento más pasaporte: el total' : 'Birth certificate plus passport: the total', cta: lang === 'es' ? 'Ver la guía del pasaporte' : 'Read the passport guide', ctaPage: 'birth-passport',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('CA', lang), options: opts(lang) }, { id: 'who', label: lang === 'es' ? 'Solicitante' : 'Applicant', def: 0, options: [{ value: '0', label: lang === 'es' ? 'Adulto (16 o más)' : 'Adult (16 or older)' }, { value: '1', label: lang === 'es' ? 'Menor de 16' : 'Under 16' }] }],
    run: (v) => {
      const j = at(lang, v), m = (z: number) => money(z, lang), w = W(lang);
      const book = (v.who ?? 0) >= 1 ? x('passport_book_child_fee') : x('passport_book_adult_fee');
      const exe = x('passport_execution_fee');
      const tot = book != null && exe != null ? j.birth.first + book + exe : null;
      return {
        head: [lang === 'es' ? 'Total del primer pasaporte (libreta)' : 'First passport book, total', tot != null ? m(tot) : w.nc],
        rows: [
          [lang === 'es' ? 'Copia certificada del acta' : 'Certified birth certificate', m(j.birth.first)],
          [lang === 'es' ? 'Tarifa de solicitud (Departamento de Estado)' : 'Application fee (State Department)', book != null ? m(book) : w.nc],
          [lang === 'es' ? 'Tarifa de aceptación (oficina de aceptación)' : 'Execution fee (acceptance facility)', exe != null ? m(exe) : w.nc],
        ],
        note: lang === 'es' ? 'Las tarifas del pasaporte son federales y salen de travel.state.gov; la del acta, de la oficina del estado.' : 'Passport fees are federal, from travel.state.gov; the certificate fee is the state office\'s.',
      };
    },
  }),
  /** Certified copies plus apostille. */
  apostille: (lang) => ({
    title: lang === 'es' ? 'Acta con apostilla para usarla en el extranjero' : 'Certificate with an apostille for use abroad', cta: lang === 'es' ? 'Calcular las copias' : 'Price the copies', ctaPage: 'home',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang) }, { id: 'copies', label: lang === 'es' ? 'Actas apostilladas' : 'Apostilled certificates', def: 1, max: 20 }],
    run: (v) => {
      const j = at(lang, v), c = n(v, 'copies', 1), m = (z: number) => money(z, lang), w = W(lang);
      const fee = j.apostille?.fee ?? null;
      const certs = stateFees(j.birth, c);
      return {
        head: [lang === 'es' ? `Actas + apostillas · ${nameOf(j, lang)}` : `Certificates + apostilles · ${nameOf(j, lang)}`, fee != null ? m(certs + fee * c) : w.nc],
        rows: [
          [lang === 'es' ? 'Copias certificadas' : 'Certified copies', m(certs)],
          [lang === 'es' ? 'Apostilla por documento' : 'Apostille per document', fee != null ? m(fee) : w.nc],
          [lang === 'es' ? 'Apostillas' : 'Apostilles', fee != null ? m(fee * c) : w.nc],
        ],
        note: txt(j.apostille?.note, lang, '') || undefined,
      };
    },
  }),
  /** Amending a birth certificate. */
  amended: (lang) => ({
    title: lang === 'es' ? 'Costo de enmendar un acta de nacimiento' : 'Cost of amending a birth certificate', cta: lang === 'es' ? 'Calcular las copias nuevas' : 'Price the new copies', ctaPage: 'home',
    inputs: [{ id: 'state', label: W(lang).state, def: Math.max(0, stateIdx(AMENDED[0] ?? 'CA', lang)), options: opts(lang, (j) => AMENDED.includes(j.code)) }, { id: 'copies', label: lang === 'es' ? 'Copias nuevas' : 'New copies', def: 1, max: 20 }],
    run: (v) => {
      const j = at(lang, v), c = n(v, 'copies', 1), m = (z: number) => money(z, lang), w = W(lang);
      const key = `amended_${j.code.toLowerCase()}_fee`, fee = x(key), note = EXTRAS.items[key]?.note ?? '';
      const incl = /includes? (one|a|1) (certified )?copy/i.test(note);
      const paid = incl ? c - 1 : c;
      const copies = paid > 0 ? stateFees(j.birth, paid) : 0;
      return {
        head: [lang === 'es' ? `Enmienda + copias · ${nameOf(j, lang)}` : `Amendment + copies · ${nameOf(j, lang)}`, fee != null ? m(fee + copies) : w.nc],
        rows: [
          [lang === 'es' ? 'Tarifa de enmienda' : 'Amendment fee', fee != null ? m(fee) : w.nc],
          [lang === 'es' ? 'Copias certificadas nuevas' : 'New certified copies', incl && c === 1 ? (lang === 'es' ? 'incluida' : 'included') : m(copies)],
        ],
      };
    },
  }),
  /** Death certificate order cost and rank. */
  deathcost: (lang) => ({
    title: lang === 'es' ? 'Lo que cuestan sus actas de defunción' : 'What your death certificates cost', cta: lang === 'es' ? '¿Cuántas copias necesita?' : 'How many copies do you need?', ctaPage: 'death-copies',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('FL', lang), options: opts(lang) }, { id: 'copies', label: W(lang).copies, def: 6, max: 50 }],
    run: (v) => {
      const j = at(lang, v), c = n(v, 'copies', 6), m = (z: number) => money(z, lang);
      const r = rankByCost(JURS, 'death', c), pos = r.findIndex((z) => z.code === j.code) + 1;
      return {
        head: [lang === 'es' ? `${c} actas de defunción · ${nameOf(j, lang)}` : `${c} death certificates · ${nameOf(j, lang)}`, m(stateFees(j.death, c))],
        rows: [
          [lang === 'es' ? 'Primera copia' : 'First copy', m(j.death.first)],
          [lang === 'es' ? 'Cada copia adicional' : 'Each extra copy', m(j.death.additional ?? j.death.first)],
          [lang === 'es' ? 'Puesto (1 = el más barato)' : 'Rank (1 = cheapest)', `${pos} / ${r.length}`],
        ],
      };
    },
  }),
  /** Marriage license fee with or without the course. */
  mlcost: (lang) => ({
    title: lang === 'es' ? 'Tarifa de la licencia de matrimonio en su estado' : 'Marriage license fee in your state', cta: lang === 'es' ? 'Calcular las fechas de la licencia' : 'Work out the license dates', ctaPage: 'marriage-license',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('FL', lang), options: opts(lang) }, { id: 'course', label: lang === 'es' ? 'Curso prematrimonial' : 'Premarital course', def: 0, options: [{ value: '0', label: W(lang).no }, { value: '1', label: W(lang).yes }] }],
    run: (v) => {
      const j = at(lang, v), r = marriageOf(j.code), m = (z: number) => money(z, lang), w = W(lang);
      const d = (v.course ?? 0) >= 1 ? r.courseDiscount : 0;
      const head = r.feeState != null ? m(Math.max(0, r.feeState - d)) : r.feeMin != null && r.feeMax != null ? (r.feeMin === r.feeMax ? m(r.feeMin - d) : `${m(Math.max(0, r.feeMin - d))}–${m(Math.max(0, r.feeMax - d))}`) : w.nc;
      return {
        head: [lang === 'es' ? `Licencia · ${nameOf(j, lang)}` : `License · ${nameOf(j, lang)}`, head],
        rows: [
          [lang === 'es' ? 'Quién fija la tarifa' : 'Who sets the fee', r.setBy === 'state' ? (lang === 'es' ? 'la ley del estado' : 'state law') : (lang === 'es' ? 'cada condado o municipio' : 'each county or town')],
          [lang === 'es' ? 'Descuento por curso' : 'Course discount', r.courseDiscount > 0 ? `${m(r.courseDiscount)} (${r.courseHours} h)` : (lang === 'es' ? 'ninguno' : 'none')],
          [lang === 'es' ? 'Ejemplo' : 'Example', txt(r.example, lang, '–')],
        ],
      };
    },
  }),
  /** Waiting period and validity. */
  mlwait: (lang) => ({
    title: lang === 'es' ? 'Espera y vigencia de la licencia' : 'License waiting period and validity', cta: lang === 'es' ? 'Calcular con sus fechas' : 'Check your dates', ctaPage: 'marriage-license',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang) }],
    run: (v) => {
      const j = at(lang, v), r = marriageOf(j.code), w = W(lang), es = lang === 'es';
      const h = r.waitingHours, val = r.validity;
      const waitL = h == null ? w.nc : h === 0 ? (es ? 'sin espera' : 'none') : es ? `${h} horas` : `${h} hours`;
      const valL = !val ? w.nc : val.kind === 'none' ? (es ? 'no vence' : 'does not expire') : `${val.value} ${es ? { days: 'días', months: 'meses', years: val.value === 1 ? 'año' : 'años' }[val.kind] : { days: 'days', months: 'months', years: val.value === 1 ? 'year' : 'years' }[val.kind]}`;
      return {
        head: [es ? `Espera · ${nameOf(j, lang)}` : `Waiting period · ${nameOf(j, lang)}`, waitL],
        rows: [[es ? 'Vigencia' : 'Valid for', valL], [es ? 'Regla' : 'Rule', txt(r.note, lang, '–')]],
      };
    },
  }),
  /** License, then certificate. */
  vsc: (lang) => ({
    title: lang === 'es' ? 'De la licencia al acta: lo que paga en cada paso' : 'From license to certificate: what you pay at each step', cta: lang === 'es' ? 'Calcular las fechas' : 'Work out the dates', ctaPage: 'marriage-license',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('OH', lang), options: opts(lang) }, { id: 'copies', label: lang === 'es' ? 'Copias del acta' : 'Certificate copies', def: 2, max: 20 }],
    run: (v) => {
      const j = at(lang, v), r = marriageOf(j.code), c = n(v, 'copies', 2), m = (z: number) => money(z, lang), w = W(lang), es = lang === 'es';
      const lic = r.feeState ?? r.feeMin;
      const mr = j.marriageRecord;
      const copy = mr?.first != null && mr.where !== 'county' ? mr.first + (mr.additional ?? mr.first) * (c - 1) : null;
      return {
        head: [es ? 'Licencia + copias del acta' : 'License + certificate copies', lic != null && copy != null ? m(lic + copy) : lic != null ? `${m(lic)} + ${es ? 'copias' : 'copies'}` : w.nc],
        rows: [
          [es ? 'Licencia (antes de la boda)' : 'License (before the wedding)', lic != null ? (r.feeState == null ? `${es ? 'desde' : 'from'} ${m(lic)}` : m(lic)) : w.nc],
          [es ? `Copias certificadas del acta (${c})` : `Certified certificate copies (${c})`, copy != null ? m(copy) : (es ? 'las emite el condado' : 'issued by the county')],
          [es ? 'Quién emite el acta' : 'Who issues the certificate', mr?.where === 'state' ? (es ? 'el estado' : 'the state') : mr?.where === 'both' ? (es ? 'el estado y el condado' : 'state and county') : mr?.where === 'county' ? (es ? 'el condado' : 'the county') : w.nc],
        ],
      };
    },
  }),
  /** Marriage certificate copy. */
  marrcopy: (lang) => ({
    title: lang === 'es' ? 'Copia certificada del acta de matrimonio' : 'Certified copy of a marriage certificate', cta: lang === 'es' ? 'Ver dónde pedirla' : 'See where to order it', ctaPage: 'marriage-copy',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang) }, { id: 'copies', label: W(lang).copies, def: 2, max: 20 }],
    run: (v) => {
      const j = at(lang, v), c = n(v, 'copies', 2), m = (z: number) => money(z, lang), w = W(lang), es = lang === 'es', mr = j.marriageRecord;
      const cost = mr?.first != null && mr.where !== 'county' ? mr.first + (mr.additional ?? mr.first) * (c - 1) : null;
      return {
        head: [es ? `${c} copias en la oficina del estado` : `${c} copies from the state office`, cost != null ? m(cost) : (es ? 'la emite el condado' : 'county issues it')],
        rows: [
          [es ? 'Dónde pedirla' : 'Where to order', mr?.where === 'state' ? (es ? 'oficina estatal' : 'state office') : mr?.where === 'both' ? (es ? 'estado o condado' : 'state or county') : mr?.where === 'county' ? (es ? 'secretario del condado' : 'county clerk') : w.nc],
          [es ? 'Primera copia (estado)' : 'First copy (state)', mr?.first != null && mr.where !== 'county' ? m(mr.first) : '–'],
          [es ? 'Nota' : 'Note', txt(mr?.note, lang, '–')],
        ],
      };
    },
  }),
  /** Divorce certificate or decree. */
  divorce: (lang) => ({
    title: lang === 'es' ? 'Acta o sentencia de divorcio: dónde y cuánto' : 'Divorce certificate or decree: where and how much', cta: lang === 'es' ? 'Ver la guía' : 'Read the guide', ctaPage: 'divorce-certificate',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('FL', lang), options: opts(lang) }],
    run: (v) => {
      const j = at(lang, v), m = (z: number) => money(z, lang), w = W(lang), es = lang === 'es', d = j.divorceRecord;
      return {
        head: [es ? `Oficina del estado · ${nameOf(j, lang)}` : `State office · ${nameOf(j, lang)}`, d?.first != null && d.where !== 'county' ? m(d.first) : (es ? 'solo el tribunal del condado' : 'county court only')],
        rows: [
          [es ? 'Dónde pedirla' : 'Where to order', d?.where === 'state' ? (es ? 'oficina estatal' : 'state office') : d?.where === 'both' ? (es ? 'estado (acta) o tribunal (sentencia)' : 'state (certificate) or court (decree)') : d?.where === 'county' ? (es ? 'secretario del tribunal del condado' : 'county court clerk') : w.nc],
          [es ? 'Nota' : 'Note', txt(d?.note, lang, '–')],
        ],
      };
    },
  }),
  /** Name change after marriage. */
  namechange: (lang) => ({
    title: lang === 'es' ? 'Cambio de apellido tras la boda: lo que cuesta' : 'Name change after marriage: what it costs', cta: lang === 'es' ? 'Ver la lista ordenada' : 'See the ordered checklist', ctaPage: 'name-change',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang) }, { id: 'copies', label: lang === 'es' ? 'Copias del acta de matrimonio' : 'Marriage certificate copies', def: 3, max: 20 },
      { id: 'pp', label: lang === 'es' ? 'Pasaporte' : 'Passport', def: 0, options: [{ value: '0', label: lang === 'es' ? 'Sin pasaporte' : 'No passport' }, { value: '1', label: lang === 'es' ? 'Renovar (libreta adulto)' : 'Renew (adult book)' }] }],
    run: (v) => {
      const j = at(lang, v), c = n(v, 'copies', 3), m = (z: number) => money(z, lang), w = W(lang), es = lang === 'es', mr = j.marriageRecord;
      const copy = mr?.first != null && mr.where !== 'county' ? mr.first + (mr.additional ?? mr.first) * (c - 1) : null;
      const pp = (v.pp ?? 0) >= 1 ? x('passport_renewal_adult_fee') ?? x('passport_book_adult_fee') : 0;
      return {
        head: [es ? 'Total estimado' : 'Estimated total', copy != null && pp != null ? m(copy + pp) : w.nc],
        rows: [
          [es ? `Copias del acta (${c})` : `Certificate copies (${c})`, copy != null ? m(copy) : (es ? 'tarifa del condado' : 'county fee')],
          [es ? 'Tarjeta del Seguro Social' : 'Social Security card', x('ssa_name_change_fee') === 0 ? (es ? 'gratis' : 'free') : w.nc],
          [es ? 'Pasaporte' : 'Passport', pp == null ? w.nc : pp === 0 ? '–' : m(pp)],
        ],
      };
    },
  }),
  /** Courthouse wedding total. */
  courthouse: (lang) => ({
    title: lang === 'es' ? 'Boda civil en la corte: licencia más ceremonia' : 'Courthouse wedding: license plus ceremony', cta: lang === 'es' ? 'Calcular la licencia' : 'Work out the license', ctaPage: 'marriage-license',
    inputs: [{ id: 'place', label: lang === 'es' ? 'Lugar' : 'Place', def: 0, options: COURT.map((k, i) => ({ value: String(i), label: courtLabel(k, lang) })) }],
    run: (v) => {
      const k = COURT[Math.max(0, Math.min(COURT.length - 1, Math.round(v.place ?? 0)))], m = (z: number) => money(z, lang), w = W(lang), es = lang === 'es';
      const cer = k ? x(`ceremony_${k}_fee`) : null, lic = k ? x(`license_${k}_fee`) ?? x(`license_${k}_public_fee`) : null;
      return {
        head: [es ? 'Licencia + ceremonia' : 'License + ceremony', cer != null && lic != null ? m(cer + lic) : w.nc],
        rows: [[es ? 'Licencia' : 'License', lic != null ? m(lic) : w.nc], [es ? 'Ceremonia civil' : 'Civil ceremony', cer != null ? m(cer) : w.nc]],
      };
    },
  }),
  /** Common-law marriage status. */
  commonlaw: (lang) => ({
    title: lang === 'es' ? '¿Reconoce su estado el matrimonio de hecho?' : 'Does your state recognize common-law marriage?', cta: lang === 'es' ? 'Ver la licencia de matrimonio' : 'See the marriage license rules', ctaPage: 'marriage-license',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('TX', lang), options: opts(lang, (j) => j.code !== 'NYC') }],
    run: (v) => {
      const j = at(lang, v), c = j.commonLaw, w = W(lang), es = lang === 'es';
      const st = c?.status === 'recognized' ? (es ? 'Sí, todavía' : 'Yes, still') : c?.status === 'abolished' ? (es ? 'Ya no' : 'No longer') : c?.status === 'never' ? 'No' : w.nc;
      return {
        head: [es ? `Matrimonio de hecho · ${nameOf(j, lang)}` : `Common-law marriage · ${nameOf(j, lang)}`, st],
        rows: [
          [c?.status === 'abolished' ? (es ? 'Válido si se formó antes del' : 'Valid if formed before') : (es ? 'Fecha' : 'Date'), c?.date ?? '–'],
          [es ? 'Nota' : 'Note', txt(c?.note, lang, '–')],
        ],
      };
    },
  }),
  /** The office of a state. */
  office: (lang) => ({
    title: lang === 'es' ? 'La oficina de registros vitales de su estado' : 'Your state\'s vital records office', cta: lang === 'es' ? 'Calcular un pedido' : 'Price an order', ctaPage: 'home',
    inputs: [{ id: 'state', label: W(lang).state, def: stateIdx('NY', lang), options: opts(lang) }],
    run: (v) => {
      const j = at(lang, v), m = (z: number) => money(z, lang), es = lang === 'es';
      return {
        head: [es ? 'Oficina' : 'Office', j.office],
        rows: [
          [es ? 'Acta de nacimiento' : 'Birth certificate', m(j.birth.first)],
          [es ? 'Acta de defunción' : 'Death certificate', m(j.death.first)],
          [es ? 'En línea' : 'Online', txt(j.vendorText, lang, '–')],
        ],
      };
    },
  }),
  /** National ranking for N copies. */
  rank: (lang) => ({
    title: lang === 'es' ? 'Del estado más barato al más caro' : 'From the cheapest state to the most expensive', cta: lang === 'es' ? 'Calcular su pedido' : 'Price your order', ctaPage: 'home',
    inputs: [{ id: 'kind', label: W(lang).record, def: 0, options: kindOpts(lang) }, { id: 'copies', label: W(lang).copies, def: 3, max: 50 }],
    run: (v) => {
      const k = kindOf(v), c = n(v, 'copies', 3), r = rankByCost(JURS, k, c), m = (z: number) => money(z, lang);
      const mid = r[Math.floor(r.length / 2)];
      return {
        head: [lang === 'es' ? `${c} copias en el estado más barato` : `${c} copies in the cheapest state`, `${m(r[0].total)}`],
        rows: [
          [lang === 'es' ? 'Más barato' : 'Cheapest', nameOf(byCode(r[0].code), lang)],
          [lang === 'es' ? 'Valor central' : 'Middle of the list', `${m(mid.total)} (${nameOf(byCode(mid.code), lang)})`],
          [lang === 'es' ? 'Más caro' : 'Most expensive', `${m(r[r.length - 1].total)} (${nameOf(byCode(r[r.length - 1].code), lang)})`],
        ],
      };
    },
  }),
};

export function getSpec(kind: string, lang: string): MiniSpec & { ctaPage?: string } {
  const f = SPECS[kind];
  if (!f) throw new Error(`Unknown mini-spec: ${kind}`);
  return f((lang === 'es' ? 'es' : 'en') as L);
}
export const SPEC_KINDS = Object.keys(SPECS);
export type { MiniOut };
