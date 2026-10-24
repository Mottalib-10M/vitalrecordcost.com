import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'marriage-license', group: 'marriage', order: 10,
  tool: { kind: 'marriage', props: { state: 'FL' } },
  mini: { kind: 'mini:mlwait', props: { state: 'WI' } },
  related: ['marriage-license-cost', 'marriage-license-waiting', 'marriage-license-vs-certificate', 'courthouse-wedding', 'ml-tx', 'ml-nv'],
  sources: [],
  en: {
    slug: 'marriage-license', nav: 'How to get a marriage license', card: 'Where to apply, what to bring, the fee, the waiting period and the date the license expires.',
    title: 'Marriage License 2026: How to Get One, Fee, Wait, Expiry',
    description: 'How to get a marriage license in 2026: where to apply, the ID to bring, the fee, the waiting period and the expiry date in every state, with a date calculator.',
    h1: 'Marriage license: how to get one and the dates to respect',
    intro: 'Pick the state and the day you will get the license: the calculator gives the fee, the first day you can marry and the last day the license is valid.',
    resume: (h) => {
      const M = h.MARRIAGE, none = M.filter((r) => r.waitingHours === 0).length;
      return `A marriage license is the permit to marry, bought before the wedding from the local office of the state where the ceremony will take place: a county clerk in most states, a probate court in some, a town or city clerk in Connecticut, Massachusetts and New York, the circuit court clerk in Virginia. Both partners usually apply together in person, with a valid photo ID showing their age; some offices take an online pre-application first. Applicants must be at least 18 in most states; earlier marriage, where still allowed, needs parental consent or a court order. Someone previously married gives the date the last marriage ended and, in some states, a copy of the divorce decree or death certificate. The fee is set by state law or by the county. In ${none} of the ${M.length} jurisdictions covered here the license can be used the day it is issued; elsewhere a waiting period of 24 hours to a few days applies. Each license also expires, from 30 days to a year after issue, or never in a few states. After the ceremony the officiant returns the signed license, and the marriage is recorded: that record is the marriage certificate.`;
    },
    faqs: (h) => {
      const fl = h.ML('FL');
      return [
        { q: 'How do I get a marriage license?', a: 'Go together to the county clerk, probate court or local clerk that issues licenses where you will marry, with valid photo IDs and, if you were married before, the date the marriage ended. Pay the fee, sign the application under oath, and receive the license, which the officiant completes at the ceremony.' },
        { q: 'What documents do I need for a marriage license?', a: 'A government photo ID with your date of birth for each partner, such as a driver\'s license or passport, and your Social Security number where the state asks for it. Some offices also want a birth certificate, and those previously married may need the divorce decree or death certificate.' },
        { q: 'Can we get married in a different state from where we live?', a: 'Yes. You buy the license in the state where the ceremony will take place, whatever your residence, and the marriage is valid everywhere in the United States. A license from one state cannot be used in another, so a destination wedding needs a license from the destination.' },
        { q: 'How long does it take to get a marriage license?', a: `The license itself is usually issued at the appointment, in under an hour. What takes time is the waiting period in some states, for example ${fl.waitL} in Florida for residents without the course, and the appointment slot in busy counties. Book early, but not so early that the license expires.` },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j) => { const r = h.ML(j.code); return [h.sl(j.code, 'ml', r.nameL), r.feeL, r.waitL, r.validL]; });
      return `<h2>Fee, wait and validity in every state</h2>
${h.table(['State', 'Fee', 'Waiting period', 'Valid for'], rows, undefined, ['l', 'r', 'l', 'l'])}
<p>Where counties set the fee, the range shown is that of the county pages read for this site. The detailed comparison is on ${h.a('marriage-license-cost', 'marriage license cost by state')}, and the dates on ${h.a('marriage-license-waiting', 'waiting period and validity')}.</p>
<h2>The steps, in order</h2>
<ol><li>Choose the county or town of the ceremony and check its office's hours, appointment system and accepted payments.</li><li>Fill in the online pre-application if the office offers one.</li><li>Appear together with your IDs and documents; sign the application.</li><li>Pay the fee and receive the license.</li><li>Wait out the waiting period, if any, and marry before the license expires.</li><li>The officiant returns the signed license within the state's deadline; the office records the marriage.</li><li>Order certified copies of the marriage certificate.</li></ol>
<!--tool:mini:mlwait|{"state":"WI"}-->
<h2>License and certificate are two documents</h2>
<p>The license authorizes the wedding; the certificate proves it happened. Agencies, employers and Social Security ask for the certificate, not the license. The difference and the costs are on ${h.a('marriage-license-vs-certificate', 'license versus certificate')}; a wedding at the clerk's office is priced on ${h.a('courthouse-wedding', 'courthouse wedding cost')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio', nav: 'Cómo obtener una licencia de matrimonio', card: 'Dónde solicitarla, qué llevar, la tarifa, la espera y la fecha en que vence la licencia.',
    title: 'Licencia de matrimonio 2026: cómo obtenerla, costo y plazos',
    description: 'Cómo obtener una licencia de matrimonio en 2026: dónde pedirla, qué llevar, la tarifa, la espera y el vencimiento en cada estado, con calculadora de fechas.',
    h1: 'Licencia de matrimonio: cómo obtenerla y las fechas que hay que respetar',
    intro: 'Elija el estado y el día en que obtendrá la licencia: la calculadora da la tarifa, el primer día en que pueden casarse y el último día de vigencia.',
    resume: (h) => {
      const M = h.MARRIAGE, none = M.filter((r) => r.waitingHours === 0).length;
      return `La licencia de matrimonio es el permiso para casarse, que se compra antes de la boda en la oficina local del estado donde se celebrará la ceremonia: el secretario del condado en la mayoría de los estados, un tribunal testamentario en algunos, el secretario municipal en Connecticut, Massachusetts y Nueva York, y el secretario del tribunal de circuito en Virginia. Por lo general los dos contrayentes la solicitan juntos y en persona, con una identificación con foto vigente que muestre su edad; algunas oficinas aceptan antes una solicitud previa en línea. En la mayoría de los estados hay que tener al menos 18 años; casarse antes, donde aún se permite, exige consentimiento de los padres u orden judicial. Quien estuvo casado indica la fecha en que terminó el matrimonio anterior y, en algunos estados, aporta copia de la sentencia de divorcio o del acta de defunción. La tarifa la fija la ley estatal o el condado. En ${none} de las ${M.length} jurisdicciones cubiertas aquí la licencia puede usarse el mismo día de su emisión; en las demás rige una espera de 24 horas a unos días. Toda licencia vence además entre 30 días y un año después de emitida, o nunca en unos pocos estados. Tras la ceremonia, el oficiante devuelve la licencia firmada y el matrimonio se registra: ese registro es el acta de matrimonio.`;
    },
    faqs: (h) => {
      const fl = h.ML('FL');
      return [
        { q: '¿Cómo se obtiene una licencia de matrimonio?', a: 'Acudan juntos al secretario del condado, al tribunal testamentario o al secretario local que emite licencias donde se van a casar, con identificaciones con foto vigentes y, si estuvieron casados antes, la fecha en que terminó ese matrimonio. Paguen la tarifa, firmen la solicitud bajo juramento y reciban la licencia, que el oficiante completa en la ceremonia.' },
        { q: '¿Qué documentos necesito para la licencia de matrimonio?', a: 'Una identificación oficial con foto y fecha de nacimiento de cada contrayente, como la licencia de manejar o el pasaporte, y el número de Seguro Social donde el estado lo pide. Algunas oficinas piden también el acta de nacimiento, y quienes estuvieron casados pueden necesitar la sentencia de divorcio o el acta de defunción.' },
        { q: '¿Podemos casarnos en un estado distinto del que vivimos?', a: 'Sí. La licencia se compra en el estado donde se celebra la ceremonia, sea cual sea la residencia, y el matrimonio es válido en todo Estados Unidos. Una licencia de un estado no sirve en otro, así que una boda de destino necesita una licencia del lugar de destino.' },
        { q: '¿Cuánto se tarda en obtener la licencia de matrimonio?', a: `La licencia suele emitirse en la misma cita, en menos de una hora. Lo que lleva tiempo es la espera en algunos estados, por ejemplo ${fl.waitL} en Florida para los residentes sin curso, y conseguir turno en los condados con mucha demanda. Reserven con tiempo, pero no tan pronto que la licencia venza.` },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j) => { const r = h.ML(j.code); return [h.sl(j.code, 'ml', r.nameL), r.feeL, r.waitL, r.validL]; });
      return `<h2>Tarifa, espera y vigencia en cada estado</h2>
${h.table(['Estado', 'Tarifa', 'Espera', 'Vigencia'], rows, undefined, ['l', 'r', 'l', 'l'])}
<p>Donde los condados fijan la tarifa, el rango es el de las páginas de los condados leídas para este sitio. La comparación detallada está en ${h.a('marriage-license-cost', 'costo de la licencia por estado')}, y las fechas en ${h.a('marriage-license-waiting', 'espera y vigencia')}.</p>
<h2>Los pasos, en orden</h2>
<ol><li>Elijan el condado o municipio de la ceremonia y revisen el horario, el sistema de citas y los pagos que acepta la oficina.</li><li>Llenen la solicitud previa en línea si la oficina la ofrece.</li><li>Preséntense juntos con sus identificaciones y documentos; firmen la solicitud.</li><li>Paguen la tarifa y reciban la licencia.</li><li>Esperen el plazo, si lo hay, y cásense antes de que la licencia venza.</li><li>El oficiante devuelve la licencia firmada dentro del plazo del estado; la oficina registra el matrimonio.</li><li>Pidan copias certificadas del acta de matrimonio.</li></ol>
<!--tool:mini:mlwait|{"state":"WI"}-->
<h2>Licencia y acta son dos documentos</h2>
<p>La licencia autoriza la boda; el acta prueba que se celebró. Las agencias, los empleadores y el Seguro Social piden el acta, no la licencia. La diferencia y los costos están en ${h.a('marriage-license-vs-certificate', 'licencia frente a acta')}; una boda en la oficina del secretario se calcula en ${h.a('courthouse-wedding', 'costo de la boda civil')}.</p>`;
    },
  },
});
