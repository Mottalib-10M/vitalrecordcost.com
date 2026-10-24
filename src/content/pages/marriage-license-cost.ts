import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

const lo = (r: Helpers['MARRIAGE'][number]) => r.feeState ?? r.feeMin;
const hi = (r: Helpers['MARRIAGE'][number]) => r.feeState ?? r.feeMax;
const span = (h: Helpers) => {
  const rs = h.MARRIAGE.filter((r) => lo(r) != null && hi(r) != null);
  const min = Math.min(...rs.map((r) => lo(r) as number)), max = Math.max(...rs.map((r) => hi(r) as number));
  const mids = rs.map((r) => ((lo(r) as number) + (hi(r) as number)) / 2);
  return { min, max, median: h.median(mids), minL: h.list(rs.filter((r) => lo(r) === min).map((r) => h.name(r.code))), maxL: h.list(rs.filter((r) => hi(r) === max).map((r) => h.name(r.code))), n: rs.length };
};

export default definePage({
  id: 'marriage-license-cost', group: 'marriage', order: 20,
  tool: { kind: 'mini:mlcost', props: { state: 'FL', course: 0 } },
  mini: { kind: 'mini:vsc', props: { state: 'OH' } },
  related: ['marriage-license', 'marriage-license-waiting', 'courthouse-wedding', 'ml-tx', 'ml-fl', 'ml-tn'],
  sources: [],
  en: {
    slug: 'marriage-license-cost', nav: 'Marriage license cost by state', card: 'The fee in every state, who sets it, and the states where a premarital course lowers it.',
    title: 'Marriage License Cost by State 2026: Fees and Discounts',
    description: 'Marriage license cost in 2026 in every state, DC and New York City: the fee set by law or the county range, and the states where a premarital course cuts it.',
    h1: 'Marriage license cost in every state',
    intro: 'Pick a state to see the license fee, who sets it and the discount for a premarital course. The table lists all 52 jurisdictions.',
    resume: (h) => {
      const s = span(h), st = h.MARRIAGE.filter((r) => r.setBy === 'state').length, disc = h.MARRIAGE.filter((r) => r.courseDiscount > 0);
      return `A marriage license costs between ${h.m(s.min)} and ${h.m(s.max)} in the United States in 2026, depending on the state and often on the county, with a typical fee around ${h.m(s.median)}. The lowest fees read for this site are in ${s.minL}, the highest in ${s.maxL}. In ${st} states the fee is written into state law and is the same in every county; elsewhere each county clerk, probate court, town or city clerk sets its own price within or above a state share, so two counties of the same state can differ by tens of dollars. ${disc.length} states lower the fee for couples who complete a premarital education course with a registered provider: ${h.list(disc.map((r) => `${h.name(r.code)} (${h.m(r.courseDiscount)} off)`))}. The license fee is only part of the cost: a civil ceremony at the clerk's office, certified copies of the marriage certificate afterwards and, in some places, a card surcharge come on top. Fees were read on the official state, county and city pages, with the date of reading for each; the license is always bought in person from the local office that issues it.`;
    },
    faqs: (h) => {
      const s = span(h), fl = h.ML('FL');
      return [
        { q: 'How much does a marriage license cost?', a: `Between ${h.m(s.min)} and ${h.m(s.max)} depending on the state and the county, with a typical fee around ${h.m(s.median)}. Florida, for example, charges ${fl.feeL} in every county, and ${fl.discL} less with a premarital course. Copies of the certificate and a ceremony at the courthouse cost extra.` },
        { q: 'Which states offer a discount for a premarital course?', a: `${h.list(h.MARRIAGE.filter((r) => r.courseDiscount > 0).map((r) => h.name(r.code)))}. Each requires a course of a set number of hours with a provider recognized by the state, completed within a time limit before the application. Some of these states also waive the waiting period for couples who took the course.` },
        { q: 'Why does the marriage license fee vary by county?', a: 'In about half of the states, the law fixes only part of the fee, often a share sent to the state to fund state programs, and each county adds its own clerk fee. Larger counties sometimes charge more for the same license. The county page is the reference for the exact amount.' },
        { q: 'Is the marriage license fee refundable?', a: 'Generally not. If the license expires before the ceremony, the fee is lost and a new license must be bought. Clerk fee schedules commonly state that fees are non-refundable, so ask before paying if the date is uncertain, and apply closer to the wedding.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j) => { const r = h.ML(j.code); return [h.sl(j.code, 'ml', r.nameL), r.feeL, r.setBy === 'state' ? 'State law' : r.setBy === 'county' ? 'County' : 'Local office', r.discL ?? '–']; });
      return `<h2>The fee in all 52 jurisdictions</h2>
<p>For states where counties set the fee, the range is that of the county pages read for this site; your county may differ.</p>
${h.table(['State', 'License fee', 'Set by', 'Course discount'], rows, undefined, ['l', 'r', 'l', 'r'])}
<h2>What else to budget</h2>
<ul><li><strong>Ceremony:</strong> a civil ceremony performed by the clerk or a judge has its own fee; see ${h.a('courthouse-wedding', 'courthouse wedding cost')}.</li><li><strong>Certified copies:</strong> needed for a name change, insurance and taxes, sold by the office that records the marriage; see ${h.a('marriage-copy', 'marriage certificate copies')}.</li><li><strong>Payment fees:</strong> some clerks add a percentage for cards.</li><li><strong>Course:</strong> the premarital course has its own price, paid to the provider, which can cancel out part of the discount.</li></ul>
<!--tool:mini:vsc|{"state":"OH"}-->
<h2>Dates matter as much as the fee</h2>
<p>A license that expires before the wedding is lost money. The ${h.a('marriage-license-waiting', 'waiting period and validity')} page gives the window for each state, and the ${h.a('marriage-license', 'license calculator')} gives the calendar dates.</p>`;
    },
  },
  es: {
    slug: 'costo-licencia-de-matrimonio', nav: 'Costo de la licencia por estado', card: 'La tarifa de cada estado, quién la fija y los estados donde un curso prematrimonial la rebaja.',
    title: 'Licencia de matrimonio costo por estado 2026: descuentos',
    description: 'Costo de la licencia de matrimonio en 2026 en cada estado, DC y Nueva York: tarifa fijada por ley o rango del condado, y los estados donde un curso la rebaja.',
    h1: 'Costo de la licencia de matrimonio en cada estado',
    intro: 'Elija un estado para ver la tarifa de la licencia, quién la fija y el descuento por curso prematrimonial. La tabla recoge las 52 jurisdicciones.',
    resume: (h) => {
      const s = span(h), st = h.MARRIAGE.filter((r) => r.setBy === 'state').length, disc = h.MARRIAGE.filter((r) => r.courseDiscount > 0);
      return `Una licencia de matrimonio cuesta entre ${h.m(s.min)} y ${h.m(s.max)} en Estados Unidos en 2026, según el estado y a menudo según el condado, con una tarifa típica de unos ${h.m(s.median)}. Las tarifas más bajas leídas para este sitio están en ${s.minL} y las más altas en ${s.maxL}. En ${st} estados la tarifa está escrita en la ley estatal y es la misma en todos los condados; en los demás, cada secretario de condado, tribunal testamentario o secretario municipal fija su propio precio dentro o por encima de una parte estatal, así que dos condados del mismo estado pueden diferir en decenas de dólares. ${disc.length} estados rebajan la tarifa a las parejas que completan un curso de educación prematrimonial con un proveedor registrado: ${h.list(disc.map((r) => `${h.name(r.code)} (${h.m(r.courseDiscount)} menos)`))}. La tarifa de la licencia es solo una parte del costo: una ceremonia civil en la oficina del secretario, las copias certificadas del acta después y, en algunos lugares, un recargo por tarjeta se suman. Las tarifas se leyeron en las páginas oficiales del estado, el condado y la ciudad, con la fecha de lectura de cada una; la licencia se compra siempre en persona en la oficina local que la emite.`;
    },
    faqs: (h) => {
      const s = span(h), fl = h.ML('FL');
      return [
        { q: '¿Cuánto cuesta una licencia de matrimonio?', a: `Entre ${h.m(s.min)} y ${h.m(s.max)} según el estado y el condado, con una tarifa típica de unos ${h.m(s.median)}. Florida, por ejemplo, cobra ${fl.feeL} en todos los condados, y ${fl.discL} menos con un curso prematrimonial. Las copias del acta y una ceremonia en el juzgado cuestan aparte.` },
        { q: '¿Qué estados dan descuento por curso prematrimonial?', a: `${h.list(h.MARRIAGE.filter((r) => r.courseDiscount > 0).map((r) => h.name(r.code)))}. Cada uno exige un curso de un número fijo de horas con un proveedor reconocido por el estado, completado dentro de un plazo antes de la solicitud. Algunos de estos estados también eliminan la espera para las parejas que tomaron el curso.` },
        { q: '¿Por qué la tarifa de la licencia cambia según el condado?', a: 'En cerca de la mitad de los estados, la ley fija solo una parte de la tarifa, a menudo una parte que se envía al estado para financiar programas estatales, y cada condado suma su propia tarifa de secretaría. Los condados grandes a veces cobran más por la misma licencia. La página del condado es la referencia del importe exacto.' },
        { q: '¿Se devuelve la tarifa de la licencia de matrimonio?', a: 'En general no. Si la licencia vence antes de la ceremonia, la tarifa se pierde y hay que comprar otra licencia. Las listas de tarifas de los secretarios suelen indicar que no son reembolsables, así que pregunte antes de pagar si la fecha es incierta y solicítela más cerca de la boda.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j) => { const r = h.ML(j.code); return [h.sl(j.code, 'ml', r.nameL), r.feeL, r.setBy === 'state' ? 'Ley estatal' : r.setBy === 'county' ? 'Condado' : 'Oficina local', r.discL ?? '–']; });
      return `<h2>La tarifa en las 52 jurisdicciones</h2>
<p>En los estados donde los condados fijan la tarifa, el rango es el de las páginas de los condados leídas para este sitio; su condado puede ser distinto.</p>
${h.table(['Estado', 'Tarifa de la licencia', 'Quién la fija', 'Descuento por curso'], rows, undefined, ['l', 'r', 'l', 'r'])}
<h2>Qué más presupuestar</h2>
<ul><li><strong>Ceremonia:</strong> una ceremonia civil oficiada por el secretario o un juez tiene su propia tarifa; vea ${h.a('courthouse-wedding', 'costo de la boda civil')}.</li><li><strong>Copias certificadas:</strong> necesarias para el cambio de apellido, el seguro y los impuestos, las vende la oficina que registra el matrimonio; vea ${h.a('marriage-copy', 'copias del acta de matrimonio')}.</li><li><strong>Cargos de pago:</strong> algunos secretarios suman un porcentaje por tarjeta.</li><li><strong>Curso:</strong> el curso prematrimonial tiene su propio precio, que se paga al proveedor y puede anular parte del descuento.</li></ul>
<!--tool:mini:vsc|{"state":"OH"}-->
<h2>Las fechas importan tanto como la tarifa</h2>
<p>Una licencia que vence antes de la boda es dinero perdido. La página de ${h.a('marriage-license-waiting', 'espera y vigencia')} da el plazo de cada estado, y la ${h.a('marriage-license', 'calculadora de la licencia')} da las fechas del calendario.</p>`;
    },
  },
});
