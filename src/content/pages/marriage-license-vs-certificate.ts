import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'marriage-license-vs-certificate', group: 'marriage', order: 40,
  tool: { kind: 'mini:vsc', props: { state: 'TX', copies: 2 } },
  mini: { kind: 'mini:mlwait', props: { state: 'CA' } },
  related: ['marriage-license', 'marriage-copy', 'name-change', 'ml-ca', 'marriage-license-cost', 'divorce-certificate'],
  sources: [],
  en: {
    slug: 'marriage-license-vs-marriage-certificate', nav: 'License vs certificate', card: 'The permit before the wedding and the record after it: who issues each, when, and what each costs.',
    title: 'Marriage License vs Marriage Certificate: Cost, Timeline',
    description: 'Marriage license vs marriage certificate: the permit bought before the wedding and the record issued after it. Who issues each, when, and what each one costs.',
    h1: 'Marriage license vs marriage certificate',
    intro: 'One document comes before the wedding, the other after. The tool adds up both costs for the state you choose: the license, then the certified copies.',
    resume: (h) => {
      const tx = h.ML('TX'), t = h.J('TX');
      return `A marriage license and a marriage certificate are two stages of the same file. The license is the permit to marry: the couple buys it before the wedding from the county clerk or other local office, it is valid for a limited time, and it has no use after the ceremony except to be completed. At the ceremony, the officiant, the couple and, where required, the witnesses sign it; the officiant then returns it to the issuing office within the deadline set by the state. Once that office records it, the marriage exists in the public record, and what the office issues from then on is the marriage certificate, a certified copy of the recorded marriage. Agencies ask for the certificate: Social Security, the passport office, motor vehicle offices, employers and insurers. In Texas, for example, the license costs ${tx.feeL} at the county clerk, while certified copies of the recorded marriage come from the same county clerk afterwards, because the state only issues verification letters. The two costs are separate, and so are the dates: the license expires after ${tx.validL} there, while a certificate never expires. Some keepsake certificates handed out at weddings are decorative; only the copy from the recording office is certified. A Texas birth certificate, often needed to apply, costs ${t.bFirst}.`;
    },
    faqs: (h) => [
      { q: 'What is the difference between a marriage license and a marriage certificate?', a: 'The license is permission to marry, bought before the wedding from a local office, and it expires if unused. The certificate is the official record of the marriage once performed and recorded, and certified copies of it prove the marriage for the rest of your life.' },
      { q: 'Do I get a marriage certificate automatically?', a: 'Not always. Some offices mail one certified copy after recording the license; many only record the marriage and wait for you to order copies. Ask when you buy the license, and order the number of certified copies you will need for name changes and benefits.' },
      { q: 'Who signs the marriage license?', a: 'The couple, the officiant and, in states that require them, one or two witnesses. The officiant completes the details of the ceremony and is responsible for returning the license to the issuing office on time. A license not returned can delay or prevent the recording of the marriage.' },
      { q: 'Is the decorative certificate from the ceremony valid?', a: 'No. Many officiants and venues hand the couple a decorative certificate on the day, which is a keepsake. Only a certified copy issued by the county or state office that recorded the marriage, with its seal, is accepted as proof.' },
    ],
    body: (h) => {
      const rows = [['When', 'Before the wedding', 'After the license is recorded'], ['Issued by', 'County clerk or local office', 'The office that recorded the marriage'], ['Expires', 'Yes, after a set time', 'No'], ['Used for', 'Authorizing the ceremony', 'Proving the marriage'], ['Fee', 'License fee, once', 'Fee per certified copy']];
      return `<h2>Side by side</h2>
${h.table(['', 'Marriage license', 'Marriage certificate'], rows, undefined, ['l', 'l', 'l'])}
<h2>The timeline</h2>
<ol><li>Apply together and buy the license.</li><li>Wait out any waiting period: from none to a few days depending on the state.</li><li>Marry before the license expires.</li><li>The officiant returns the signed license.</li><li>The office records the marriage.</li><li>Order certified copies of the marriage certificate.</li></ol>
<p>The calculator above shows the cost of steps 1 and 6 for any state. The tool below shows the waiting period and validity.</p>
<!--tool:mini:mlwait|{"state":"CA"}-->
<h2>California's two licenses</h2>
<p>California adds a twist: a confidential license produces a confidential certificate that only the spouses can order. The ${h.a('ml-ca', 'California page')} explains the choice. Everywhere else, the certificate is the record to order once married; see ${h.a('marriage-copy', 'marriage certificate copies')} for the office in each state and ${h.a('name-change', 'name change after marriage')} for the next steps.</p>`;
    },
  },
  es: {
    slug: 'licencia-vs-acta-de-matrimonio', nav: 'Licencia frente a acta', card: 'El permiso antes de la boda y el registro después: quién emite cada uno, cuándo y cuánto cuesta.',
    title: 'Licencia de matrimonio vs acta de matrimonio: costo y pasos',
    description: 'Licencia de matrimonio frente a acta de matrimonio: el permiso previo a la boda y el registro posterior. Quién emite cada uno, cuándo y cuánto cuesta.',
    h1: 'Licencia de matrimonio frente a acta de matrimonio',
    intro: 'Un documento viene antes de la boda y el otro después. La herramienta suma los dos costos para el estado que elija: la licencia y luego las copias certificadas.',
    resume: (h) => {
      const tx = h.ML('TX'), t = h.J('TX');
      return `La licencia de matrimonio y el acta de matrimonio son dos etapas del mismo expediente. La licencia es el permiso para casarse: la pareja la compra antes de la boda al secretario del condado u otra oficina local, vale por un tiempo limitado y, tras la ceremonia, no sirve más que para completarla. En la ceremonia la firman el oficiante, la pareja y, donde se exigen, los testigos; el oficiante la devuelve luego a la oficina emisora dentro del plazo que fija el estado. Cuando esa oficina la registra, el matrimonio existe en el registro público, y lo que la oficina emite desde entonces es el acta de matrimonio, una copia certificada del matrimonio registrado. Las agencias piden el acta: el Seguro Social, la oficina de pasaportes, las oficinas de vehículos, los empleadores y las aseguradoras. En Texas, por ejemplo, la licencia cuesta ${tx.feeL} en el secretario del condado, y las copias certificadas del matrimonio registrado las emite después el mismo secretario, porque el estado solo emite cartas de verificación. Los dos costos son independientes, igual que las fechas: allí la licencia vence a los ${tx.validL}, mientras que un acta nunca vence. Algunos certificados de recuerdo que se entregan en las bodas son decorativos; solo la copia de la oficina que registró el matrimonio es certificada. Un acta de nacimiento de Texas, que suele pedirse para la solicitud, cuesta ${t.bFirst}.`;
    },
    faqs: (h) => [
      { q: '¿Qué diferencia hay entre la licencia y el acta de matrimonio?', a: 'La licencia es el permiso para casarse, que se compra antes de la boda en una oficina local y vence si no se usa. El acta es el registro oficial del matrimonio una vez celebrado e inscrito, y sus copias certificadas prueban el matrimonio de por vida.' },
      { q: '¿Recibo el acta de matrimonio automáticamente?', a: 'No siempre. Algunas oficinas envían una copia certificada por correo tras registrar la licencia; muchas solo registran el matrimonio y esperan a que usted pida las copias. Pregunte al comprar la licencia y pida las copias certificadas que necesitará para el cambio de apellido y los beneficios.' },
      { q: '¿Quién firma la licencia de matrimonio?', a: 'La pareja, el oficiante y, en los estados que los exigen, uno o dos testigos. El oficiante completa los datos de la ceremonia y es responsable de devolver la licencia a tiempo a la oficina emisora. Una licencia no devuelta puede retrasar o impedir el registro del matrimonio.' },
      { q: '¿Vale el certificado decorativo de la ceremonia?', a: 'No. Muchos oficiantes y lugares de bodas entregan a la pareja un certificado decorativo el mismo día, que es un recuerdo. Solo se acepta como prueba una copia certificada emitida por la oficina del condado o del estado que registró el matrimonio, con su sello.' },
    ],
    body: (h) => {
      const rows = [['Cuándo', 'Antes de la boda', 'Después de registrar la licencia'], ['Quién la emite', 'Secretario del condado u oficina local', 'La oficina que registró el matrimonio'], ['Vence', 'Sí, tras un plazo fijo', 'No'], ['Para qué sirve', 'Autorizar la ceremonia', 'Probar el matrimonio'], ['Tarifa', 'Tarifa de la licencia, una vez', 'Tarifa por copia certificada']];
      return `<h2>Lado a lado</h2>
${h.table(['', 'Licencia de matrimonio', 'Acta de matrimonio'], rows, undefined, ['l', 'l', 'l'])}
<h2>La secuencia</h2>
<ol><li>Soliciten juntos y compren la licencia.</li><li>Esperen el plazo, si lo hay: de ninguno a unos días según el estado.</li><li>Cásense antes de que la licencia venza.</li><li>El oficiante devuelve la licencia firmada.</li><li>La oficina registra el matrimonio.</li><li>Pidan copias certificadas del acta de matrimonio.</li></ol>
<p>La calculadora de arriba muestra el costo de los pasos 1 y 6 para cualquier estado. La herramienta de abajo muestra la espera y la vigencia.</p>
<!--tool:mini:mlwait|{"state":"CA"}-->
<h2>Las dos licencias de California</h2>
<p>California añade un matiz: una licencia confidencial produce un acta confidencial que solo los cónyuges pueden pedir. La ${h.a('ml-ca', 'página de California')} explica la elección. En todos los demás casos, el acta es el registro que hay que pedir una vez casados; vea ${h.a('marriage-copy', 'copias del acta de matrimonio')} para la oficina de cada estado y ${h.a('name-change', 'cambio de apellido tras el matrimonio')} para los pasos siguientes.</p>`;
    },
  },
});
