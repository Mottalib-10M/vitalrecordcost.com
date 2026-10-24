/**
 * Main calculator: what an order of certified birth or death certificates costs in one of the 52
 * jurisdictions, by mail or at the counter, or online through the vendor the state authorizes.
 * First render = page defaults (RECETTE §17.5); a shared link is applied after mount.
 */
import { useEffect, useMemo, useState } from 'react';
import SelectField from '../ui/SelectField';
import NumberField from '../ui/NumberField';
import Toggle from '../ui/Toggle';
import StackedBar from '../ui/StackedBar';
import { sorted, byCode, nameOf, txt, JURS } from '../../lib/engine/data';
import { orderCost, stateFees, type Channel, type RecordKind } from '../../lib/engine/vital';
import { money } from '../../lib/format-l';
import { readParams, str, num, updateURL } from '../../lib/url-state';

const T = {
  en: {
    state: 'State or city of the record', kind: 'Record', birth: 'Birth', death: 'Death', copies: 'Certified copies', copiesHelp: 'Copies of the same record, ordered together.',
    channel: 'How you order', mail: 'Mail or counter', online: 'Online', vendor: 'Online vendor or processing fee', vendorHelpKnown: 'Published by the state for its authorized vendor.', vendorHelp: 'Not published as one figure: enter the fee shown at checkout.',
    ship: 'Express shipping (optional)', quote: 'Price quoted elsewhere (optional)', quoteHelp: 'Total another service asked for the same copies.',
    head: 'Total for your order', perCopy: 'per copy', first: 'First certified copy', extra: (n: number) => `${n} more ${n === 1 ? 'copy' : 'copies'} at`, extraL: 'Additional copies', vendorL: 'Vendor or processing fee', shipL: 'Express shipping',
    later: 'Same copies ordered one at a time', save: 'saved by ordering them together', quoteL: 'The other price is higher by', quoteLow: 'The other price is lower by',
    office: 'Office', processing: 'Published processing time', notPub: 'not published by the office', bar: 'Cost split',
    online2: 'Online ordering', src: 'Official fee page',
  },
  es: {
    state: 'Estado o ciudad del acta', kind: 'Acta', birth: 'Nacimiento', death: 'Defunción', copies: 'Copias certificadas', copiesHelp: 'Copias de la misma acta, pedidas a la vez.',
    channel: 'Cómo la pide', mail: 'Correo u oficina', online: 'En línea', vendor: 'Cargo del proveedor en línea o de trámite', vendorHelpKnown: 'Publicado por el estado para su proveedor autorizado.', vendorHelp: 'No se publica como una sola cifra: escriba el cargo que aparece al pagar.',
    ship: 'Envío urgente (opcional)', quote: 'Precio cotizado en otro lugar (opcional)', quoteHelp: 'Total que otro servicio le pidió por las mismas copias.',
    head: 'Total de su pedido', perCopy: 'por copia', first: 'Primera copia certificada', extra: (n: number) => `${n} ${n === 1 ? 'copia más' : 'copias más'} a`, extraL: 'Copias adicionales', vendorL: 'Cargo del proveedor o de trámite', shipL: 'Envío urgente',
    later: 'Las mismas copias pedidas una por una', save: 'que se ahorra al pedirlas juntas', quoteL: 'El otro precio es mayor en', quoteLow: 'El otro precio es menor en',
    office: 'Oficina', processing: 'Plazo de trámite publicado', notPub: 'la oficina no lo publica', bar: 'Reparto del costo',
    online2: 'Pedido en línea', src: 'Página oficial de tarifas',
  },
} as const;

interface Props { lang?: 'en' | 'es'; state?: string; kind?: RecordKind; copies?: number; idPrefix?: string }

export default function OrderCalc({ lang = 'en', state = 'TX', kind: kind0 = 'birth', copies: copies0 = 2, idPrefix = 'o' }: Props) {
  const L = T[lang];
  const [code, setCode] = useState(state);
  const [kind, setKind] = useState<RecordKind>(kind0);
  const [copies, setCopies] = useState(copies0);
  const [channel, setChannel] = useState<Channel>('mail');
  const [vendor, setVendor] = useState(byCode(state).vendorFee ?? 0);
  const [ship, setShip] = useState(0);
  const [quote, setQuote] = useState(0);
  useEffect(() => {
    const u = readParams(window.location.search);
    const c = str(u, 'state', state);
    if (JURS.some((j) => j.code === c)) { setCode(c); setVendor(byCode(c).vendorFee ?? 0); }
    const k = str(u, 'record', kind0); if (k === 'birth' || k === 'death') setKind(k);
    setCopies(num(u, 'copies', copies0));
    const ch = str(u, 'via', 'mail'); if (ch === 'mail' || ch === 'online') setChannel(ch);
    if (u.has('fee')) setVendor(num(u, 'fee', 0));
    setShip(num(u, 'ship', 0)); setQuote(num(u, 'quote', 0));
  }, []);
  useEffect(() => { updateURL({ state: code, record: kind, copies, via: channel, fee: channel === 'online' ? vendor : undefined, ship: ship || undefined, quote: quote || undefined }); }, [code, kind, copies, channel, vendor, ship, quote]);
  const j = byCode(code);
  const pickState = (c: string) => { setCode(c); setVendor(byCode(c).vendorFee ?? 0); };
  const r = useMemo(() => orderCost({ fees: j, kind, copies, channel, processingFee: vendor, shippingFee: ship, intermediaryTotal: quote || undefined }), [j, kind, copies, channel, vendor, ship, quote]);
  const oneByOne = j[kind].first * r.copies;
  const saved = oneByOne - stateFees(j[kind], r.copies);
  const m = (x: number) => money(x, lang);
  const segs = [
    { label: L.first, value: r.firstCopy, color: '#2F4A3A' },
    { label: L.extraL, value: r.stateFees - r.firstCopy, color: '#7cac8f' },
    { label: L.vendorL, value: r.processingFee, color: '#b45309' },
    { label: L.shipL, value: r.shippingFee, color: '#64748b' },
  ].filter((s) => s.value > 0);
  return (
    <div className="not-prose rechner grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
      <form className="grid content-start gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <SelectField id={`${idPrefix}-state`} label={L.state} value={code} onChange={pickState} options={sorted(lang).map((s) => ({ value: s.code, label: nameOf(s, lang) }))} />
        <Toggle id={`${idPrefix}-kind`} label={L.kind} value={kind} onChange={(v) => setKind(v as RecordKind)} options={[{ value: 'birth', label: L.birth }, { value: 'death', label: L.death }]} />
        <NumberField id={`${idPrefix}-copies`} label={L.copies} value={copies} onChange={setCopies} max={50} help={L.copiesHelp} />
        <Toggle id={`${idPrefix}-channel`} label={L.channel} value={channel} onChange={(v) => setChannel(v as Channel)} options={[{ value: 'mail', label: L.mail }, { value: 'online', label: L.online }]} />
        {channel === 'online' && <NumberField id={`${idPrefix}-vendor`} label={L.vendor} value={vendor} onChange={setVendor} unit="$" max={500} decimals={2} help={j.vendorFee != null ? L.vendorHelpKnown : L.vendorHelp} className="sm:col-span-2" />}
        <NumberField id={`${idPrefix}-ship`} label={L.ship} value={ship} onChange={setShip} unit="$" max={500} decimals={2} />
        <NumberField id={`${idPrefix}-quote`} label={L.quote} value={quote} onChange={setQuote} unit="$" max={5000} decimals={2} help={L.quoteHelp} />
      </form>
      <div data-resultat aria-live="polite" className="rounded-xl border border-accent-200 bg-accent-50/60 p-4">
        <p className="text-sm font-medium text-navy-600">{L.head} · {nameOf(j, lang)}</p>
        <p className="tabular-nums mt-1 text-4xl font-bold text-navy-900">{m(r.total)}</p>
        <p className="text-sm text-navy-700">{m(r.perCopy)} {L.perCopy}</p>
        <table className="mt-3 w-full text-sm"><tbody className="divide-y divide-navy-200">
          <tr><td className="py-1.5 pr-2 text-navy-700">{L.first}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{m(r.firstCopy)}</td></tr>
          {r.copies > 1 && <tr><td className="py-1.5 pr-2 text-navy-700">{L.extra(r.copies - 1)} {m(r.additionalEach)}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{m(r.stateFees - r.firstCopy)}</td></tr>}
          {r.processingFee > 0 && <tr><td className="py-1.5 pr-2 text-navy-700">{L.vendorL}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{m(r.processingFee)}</td></tr>}
          {r.shippingFee > 0 && <tr><td className="py-1.5 pr-2 text-navy-700">{L.shipL}</td><td className="tabular-nums py-1.5 text-right text-navy-900">{m(r.shippingFee)}</td></tr>}
          {r.copies > 1 && saved > 0 && <tr><td className="py-1.5 pr-2 text-navy-700">{L.later}: {m(oneByOne)}</td><td className="tabular-nums py-1.5 text-right font-semibold text-green-800">{m(saved)} {L.save}</td></tr>}
          {r.intermediaryExtra != null && <tr><td className="py-1.5 pr-2 text-navy-700">{r.intermediaryExtra >= 0 ? L.quoteL : L.quoteLow}</td><td className="tabular-nums py-1.5 text-right font-semibold text-navy-900">{m(Math.abs(r.intermediaryExtra))}</td></tr>}
        </tbody></table>
        <div className="mt-3"><StackedBar segments={segs} total={r.total} ariaPrefix={L.bar} /></div>
        <p className="mt-3 text-xs text-navy-600">{L.office}: {j.office}. {channel === 'online' ? `${L.online2}: ${txt(j.vendorText, lang, '')}` : `${L.processing}: ${txt(j.processing, lang, L.notPub)}.`} <a href={j.sources[kind]} target="_blank" rel="nofollow noopener noreferrer" className="underline">{L.src}</a></p>
      </div>
    </div>
  );
}
