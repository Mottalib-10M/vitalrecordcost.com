/**
 * Marriage license: fee (state-set, or the county's when the county sets it), premarital-course
 * discount, earliest ceremony day after the waiting period, expiry, and a check of the wedding date.
 * First render uses the build day (__BUILD_DAY__); today's date and a shared link come after mount (§17.5).
 */
import { useEffect, useMemo, useState } from 'react';
import SelectField from '../ui/SelectField';
import NumberField from '../ui/NumberField';
import Toggle from '../ui/Toggle';
import { sorted, nameOf, marriageOf, byCode, txt, MARRIAGE } from '../../lib/engine/data';
import { marriageLicense, addDays } from '../../lib/engine/marriage';
import { money, dateL } from '../../lib/format-l';
import { readParams, str, num, updateURL } from '../../lib/url-state';

declare const __BUILD_DAY__: string;
const T = {
  en: {
    state: 'State where you marry', county: 'Fee in your county', countyHelp: (r: string) => `Set by each county: ${r} on the pages we read. Enter your county's fee.`,
    course: 'Premarital course', yes: 'Yes', no: 'No', courseHelp: (d: string, h: number) => `Cuts the fee by ${d} with a course of at least ${h} hours.`,
    issue: 'Day you get the license', wedding: 'Wedding day',
    head: 'License fee', range: 'County range', unknown: 'county fee: enter it', earliest: 'Earliest ceremony', expires: 'License expires', never: 'does not expire', unknownV: 'validity not published',
    wait: 'Waiting period', none: 'none', hours: (h: number) => (h % 24 === 0 && h >= 72 ? `${h / 24} days` : `${h} hours`),
    ok: 'Your wedding day fits the license.', early: 'Too early: the waiting period is not over.', late: 'Too late: the license will have expired.', check: 'Check the validity with the issuing office.',
    discount: 'Course discount', src: 'Official page', after: (d: number) => `${d} days after the license`,
  },
  es: {
    state: 'Estado donde se casa', county: 'Tarifa de su condado', countyHelp: (r: string) => `La fija cada condado: ${r} en las páginas que leímos. Escriba la de su condado.`,
    course: 'Curso prematrimonial', yes: 'Sí', no: 'No', courseHelp: (d: string, h: number) => `Rebaja la tarifa en ${d} con un curso de al menos ${h} horas.`,
    issue: 'Día en que recibe la licencia', wedding: 'Día de la boda',
    head: 'Tarifa de la licencia', range: 'Rango de condados', unknown: 'tarifa del condado: escríbala', earliest: 'Primera fecha de ceremonia', expires: 'La licencia vence', never: 'no vence', unknownV: 'vigencia no publicada',
    wait: 'Periodo de espera', none: 'ninguno', hours: (h: number) => (h % 24 === 0 && h >= 72 ? `${h / 24} días` : `${h} horas`),
    ok: 'El día de su boda cabe en la licencia.', early: 'Demasiado pronto: el periodo de espera no ha terminado.', late: 'Demasiado tarde: la licencia habrá vencido.', check: 'Confirme la vigencia con la oficina que la emite.',
    discount: 'Descuento por curso', src: 'Página oficial', after: (d: number) => `${d} días después de la licencia`,
  },
} as const;

interface Props { lang?: 'en' | 'es'; state?: string; idPrefix?: string }

export default function MarriageCalc({ lang = 'en', state = 'TX', idPrefix = 'ml' }: Props) {
  const L = T[lang];
  const [code, setCode] = useState(state);
  const [countyFee, setCountyFee] = useState(0);
  const [course, setCourse] = useState('no');
  const [issue, setIssue] = useState(__BUILD_DAY__);
  const [wedding, setWedding] = useState(addDays(__BUILD_DAY__, 30));
  useEffect(() => {
    const t = new Date().toISOString().slice(0, 10);
    const u = readParams(window.location.search);
    const c = str(u, 'state', state); if (MARRIAGE.some((x) => x.code === c)) setCode(c);
    setCountyFee(num(u, 'fee', 0));
    const k = str(u, 'course', 'no'); if (k === 'yes' || k === 'no') setCourse(k);
    const i = str(u, 'issued', t); setIssue(/^\d{4}-\d{2}-\d{2}$/.test(i) ? i : t);
    const w = str(u, 'wedding', addDays(t, 30)); setWedding(/^\d{4}-\d{2}-\d{2}$/.test(w) ? w : addDays(t, 30));
  }, []);
  useEffect(() => { updateURL({ state: code, fee: countyFee || undefined, course: course === 'yes' ? 'yes' : undefined, issued: issue, wedding }); }, [code, countyFee, course, issue, wedding]);
  const rule = marriageOf(code);
  const countySet = rule.feeState == null;
  const hasCourse = rule.courseDiscount > 0;
  const okDate = (d: string) => /^\d{4}-\d{2}-\d{2}$/.test(d);
  const r = useMemo(() => okDate(issue) ? marriageLicense({ rule, issueDate: issue, weddingDate: okDate(wedding) ? wedding : undefined, tookCourse: hasCourse && course === 'yes', countyFee: countySet && countyFee > 0 ? countyFee : undefined }) : null, [rule, issue, wedding, course, countyFee, countySet, hasCourse]);
  const m = (x: number) => money(x, lang);
  const rangeL = rule.feeMin != null && rule.feeMax != null ? (rule.feeMin === rule.feeMax ? m(rule.feeMin) : `${m(rule.feeMin)}–${m(rule.feeMax)}`) : '';
  const inputCls = 'h-12 w-full rounded-lg border border-navy-300 bg-white px-3 text-navy-900 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20';
  const pick = (c: string) => { setCode(c); setCountyFee(0); };
  const verdict = !r || r.weddingOk === undefined ? null : r.reason === 'ok' ? L.ok : r.reason === 'too_early' ? L.early : r.reason === 'expired' ? L.late : !r.validityKnown ? L.check : null;
  const head = r?.fee != null ? m(r.fee) : r?.feeRange ? `${m(r.feeRange[0])}–${m(r.feeRange[1])}` : L.unknown;
  return (
    <div className="not-prose rechner grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
      <form className="grid content-start gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <SelectField id={`${idPrefix}-state`} label={L.state} value={code} onChange={pick} options={sorted(lang).map((s) => ({ value: s.code, label: nameOf(s, lang) }))} />
        {countySet
          ? <NumberField id={`${idPrefix}-fee`} label={L.county} value={countyFee} onChange={setCountyFee} unit="$" max={1000} decimals={2} help={L.countyHelp(rangeL)} />
          : hasCourse ? <Toggle id={`${idPrefix}-course`} label={L.course} value={course} onChange={setCourse} options={[{ value: 'no', label: L.no }, { value: 'yes', label: L.yes }]} /> : <span />}
        {countySet && hasCourse && <Toggle id={`${idPrefix}-course`} label={L.course} value={course} onChange={setCourse} options={[{ value: 'no', label: L.no }, { value: 'yes', label: L.yes }]} className="sm:col-span-2" />}
        <div className="grid grid-rows-subgrid row-span-3 content-start gap-y-0">
          <label htmlFor={`${idPrefix}-issue`} className="mb-1 block text-sm font-medium text-navy-700">{L.issue}</label>
          <input id={`${idPrefix}-issue`} type="date" value={issue} onChange={(e) => setIssue(e.target.value)} className={inputCls} />
          <span />
        </div>
        <div className="grid grid-rows-subgrid row-span-3 content-start gap-y-0">
          <label htmlFor={`${idPrefix}-wedding`} className="mb-1 block text-sm font-medium text-navy-700">{L.wedding}</label>
          <input id={`${idPrefix}-wedding`} type="date" value={wedding} onChange={(e) => setWedding(e.target.value)} className={inputCls} />
          <span />
        </div>
        {hasCourse && <p className="text-xs text-navy-600 sm:col-span-2">{L.courseHelp(m(rule.courseDiscount), rule.courseHours)}</p>}
      </form>
      <div data-resultat aria-live="polite" className="rounded-xl border border-accent-200 bg-accent-50/60 p-4">
        <p className="text-sm font-medium text-navy-600">{L.head} · {nameOf(byCode(code), lang)}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{head}</p>
        {r && <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
          {countySet && rangeL && <tr><td className="py-1.5 pr-2 text-navy-700">{L.range}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{rangeL}</td></tr>}
          {r.discountApplied > 0 && <tr><td className="py-1.5 pr-2 text-navy-700">{L.discount}</td><td className="tabular-nums py-1.5 text-right text-green-800">−{m(r.discountApplied)}</td></tr>}
          <tr><td className="py-1.5 pr-2 text-navy-700">{L.wait}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{rule.waitingHours ? L.hours(rule.waitingHours) : L.none}</td></tr>
          <tr><td className="py-1.5 pr-2 text-navy-700">{L.earliest}</td><td className="tabular-nums py-1.5 text-right font-semibold text-navy-900">{dateL(r.earliestCeremony, lang)}</td></tr>
          <tr><td className="py-1.5 pr-2 text-navy-700">{L.expires}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{!r.validityKnown ? L.unknownV : r.expires ? dateL(r.expires, lang) : L.never}</td></tr>
        </tbody></table>}
        {verdict && <p role="status" className={`mt-3 text-sm font-medium ${r?.weddingOk ? 'text-green-800' : 'text-amber-800'}`}>{verdict}</p>}
        <p className="mt-3 text-xs text-navy-600">{txt(rule.note, lang, '')} <a href={rule.source} target="_blank" rel="nofollow noopener noreferrer" className="underline">{L.src}</a></p>
      </div>
    </div>
  );
}
