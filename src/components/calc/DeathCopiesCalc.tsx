/**
 * "How many death certificates do I need?": one certified copy per institution that keeps the
 * original, plus two spares, then the cost in the state of death, ordered together or one by one.
 * The method is ours and shown as an estimate; the fees come from the state data.
 */
import { useEffect, useMemo, useState } from 'react';
import SelectField from '../ui/SelectField';
import NumberField from '../ui/NumberField';
import Toggle from '../ui/Toggle';
import { sorted, nameOf, byCode, JURS } from '../../lib/engine/data';
import { deathCertificateCopies } from '../../lib/engine/deathCopies';
import { stateFees } from '../../lib/engine/vital';
import { money } from '../../lib/format-l';
import { readParams, str, num, updateURL } from '../../lib/url-state';

const T = {
  en: {
    state: 'State where the death occurred', banks: 'Banks and credit unions', life: 'Life insurance policies', ret: 'Retirement plans and pensions', brok: 'Brokerage or investment firms',
    veh: 'Vehicles to retitle', land: 'Counties with real estate', probate: 'Probate court case', va: 'VA burial or survivor benefits', other: 'Other (annuity, mortgage, utilities that ask)', spare: 'Keep two spares',
    yes: 'Yes', no: 'No', head: 'Certified copies to order', cost: 'Cost at the state office', later: 'Same copies ordered one at a time', est: 'Estimate: one copy for each institution that keeps an original; many others accept a photocopy. Ask before you send an original.',
    lines: { banks: 'Banks', life_insurance: 'Life insurance', retirement: 'Retirement plans', brokerage: 'Brokerage', vehicles: 'Vehicles', real_estate: 'Real estate', probate: 'Probate court', veterans: 'VA', other: 'Other' } as Record<string, string>,
    spares: 'Spares', more: 'More institutions',
  },
  es: {
    state: 'Estado donde ocurrió la defunción', banks: 'Bancos y cooperativas de crédito', life: 'Pólizas de seguro de vida', ret: 'Planes de jubilación y pensiones', brok: 'Casas de bolsa o inversión',
    veh: 'Vehículos a cambiar de titular', land: 'Condados con bienes inmuebles', probate: 'Juicio sucesorio (probate)', va: 'Beneficios de entierro o de sobreviviente del VA', other: 'Otros (anualidad, hipoteca, servicios que la pidan)', spare: 'Guardar dos de reserva',
    yes: 'Sí', no: 'No', head: 'Copias certificadas a pedir', cost: 'Costo en la oficina del estado', later: 'Las mismas copias pedidas una por una', est: 'Estimación: una copia por cada institución que se queda con un original; muchas otras aceptan una fotocopia. Pregunte antes de enviar un original.',
    lines: { banks: 'Bancos', life_insurance: 'Seguro de vida', retirement: 'Jubilación', brokerage: 'Inversiones', vehicles: 'Vehículos', real_estate: 'Inmuebles', probate: 'Tribunal sucesorio', veterans: 'VA', other: 'Otros' } as Record<string, string>,
    spares: 'Reserva', more: 'Más instituciones',
  },
} as const;

interface Props { lang?: 'en' | 'es'; state?: string; idPrefix?: string }

export default function DeathCopiesCalc({ lang = 'en', state = 'CA', idPrefix = 'dc' }: Props) {
  const L = T[lang];
  const [code, setCode] = useState(state);
  const [v, setV] = useState({ banks: 2, life: 1, ret: 1, brok: 0, veh: 1, land: 1, other: 0 });
  const [probate, setProbate] = useState('yes');
  const [va, setVa] = useState('no');
  const [spare, setSpare] = useState('yes');
  useEffect(() => {
    const u = readParams(window.location.search);
    const c = str(u, 'state', state); if (JURS.some((j) => j.code === c)) setCode(c);
    setV((o) => Object.fromEntries(Object.entries(o).map(([k, d]) => [k, num(u, k, d)])) as typeof o);
    setProbate(str(u, 'probate', 'yes') === 'no' ? 'no' : 'yes'); setVa(str(u, 'va', 'no') === 'yes' ? 'yes' : 'no'); setSpare(str(u, 'spare', 'yes') === 'no' ? 'no' : 'yes');
  }, []);
  useEffect(() => { updateURL({ state: code, ...v, probate, va, spare }); }, [code, v, probate, va, spare]);
  const set = (k: keyof typeof v) => (x: number) => setV((o) => ({ ...o, [k]: x }));
  const r = useMemo(() => deathCertificateCopies({ bankAccounts: v.banks, lifeInsurancePolicies: v.life, retirementAccounts: v.ret, brokerageAccounts: v.brok, vehicles: v.veh, realEstateCounties: v.land, probate: probate === 'yes', veteranBenefits: va === 'yes', annuitiesOrOther: v.other, keepSpare: spare === 'yes' }), [v, probate, va, spare]);
  const j = byCode(code);
  const cost = stateFees(j.death, r.recommended);
  const m = (x: number) => money(x, lang);
  const yn = [{ value: 'no', label: L.no }, { value: 'yes', label: L.yes }];
  return (
    <div className="not-prose rechner grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
      <form className="grid content-start gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <SelectField id={`${idPrefix}-state`} label={L.state} value={code} onChange={setCode} options={sorted(lang).map((s) => ({ value: s.code, label: nameOf(s, lang) }))} />
        <NumberField id={`${idPrefix}-banks`} label={L.banks} value={v.banks} onChange={set('banks')} max={30} />
        <NumberField id={`${idPrefix}-life`} label={L.life} value={v.life} onChange={set('life')} max={30} />
        <NumberField id={`${idPrefix}-ret`} label={L.ret} value={v.ret} onChange={set('ret')} max={30} />
        <NumberField id={`${idPrefix}-veh`} label={L.veh} value={v.veh} onChange={set('veh')} max={30} />
        <NumberField id={`${idPrefix}-land`} label={L.land} value={v.land} onChange={set('land')} max={30} />
        <Toggle id={`${idPrefix}-probate`} label={L.probate} value={probate} onChange={setProbate} options={yn} />
        <Toggle id={`${idPrefix}-spare`} label={L.spare} value={spare} onChange={setSpare} options={yn} />
        <details className="sm:col-span-2"><summary className="cursor-pointer text-sm font-medium text-accent-700">{L.more}</summary>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <NumberField id={`${idPrefix}-brok`} label={L.brok} value={v.brok} onChange={set('brok')} max={30} />
            <NumberField id={`${idPrefix}-other`} label={L.other} value={v.other} onChange={set('other')} max={30} />
            <Toggle id={`${idPrefix}-va`} label={L.va} value={va} onChange={setVa} options={yn} />
          </div>
        </details>
      </form>
      <div data-resultat aria-live="polite" className="rounded-xl border border-accent-200 bg-accent-50/60 p-4">
        <p className="text-sm font-medium text-navy-600">{L.head}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{r.recommended}</p>
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
          {r.lines.map((l) => <tr key={l.label}><td className="py-1.5 pr-2 text-navy-700">{L.lines[l.label]}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{l.copies}</td></tr>)}
          {r.spare > 0 && <tr><td className="py-1.5 pr-2 text-navy-700">{L.spares}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{r.spare}</td></tr>}
          <tr><td className="py-1.5 pr-2 text-navy-700">{L.cost} · {nameOf(j, lang)}</td><td className="tabular-nums py-1.5 text-right font-semibold text-navy-900">{m(cost)}</td></tr>
          {r.recommended > 1 && <tr><td className="py-1.5 pr-2 text-navy-700">{L.later}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{m(j.death.first * r.recommended)}</td></tr>}
        </tbody></table>
        <p className="mt-3 text-xs text-navy-600">{L.est}</p>
      </div>
    </div>
  );
}
