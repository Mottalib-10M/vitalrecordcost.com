import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

const whereL = (h: Helpers, w: string | null | undefined) => (h.es
  ? { state: 'Oficina estatal', county: 'Condado o municipio', both: 'Estado o condado' }
  : { state: 'State office', county: 'County or town', both: 'State or county' })[w as 'state'] ?? h.nc;

export default definePage({
  id: 'marriage-copy', group: 'marriage', order: 50,
  tool: { kind: 'mini:marrcopy', props: { state: 'FL', copies: 2 } },
  mini: { kind: 'mini:vsc', props: { state: 'NC' } },
  related: ['marriage-license-vs-certificate', 'name-change', 'divorce-certificate', 'vital-records-office', 'marriage-license', 'death-copies'],
  sources: [],
  en: {
    slug: 'marriage-certificate-copy', nav: 'Marriage certificate copy', card: 'Where a certified copy comes from in each state, the state fee when there is one, and what to ask the county.',
    title: 'Marriage Certificate Copy 2026: Where to Order, State Fee',
    description: 'How to get a certified copy of a marriage certificate in 2026: the office that holds it in each state, county clerk or state office, and the fee per copy.',
    h1: 'Marriage certificate copy: where to order it and what it costs',
    intro: 'Pick the state of the wedding: the tool shows whether the state office, the county or both issue certified copies, and the state fee when the state sells them.',
    resume: (h) => {
      const all = h.JURS.filter((j) => j.marriageRecord);
      const county = all.filter((j) => j.marriageRecord?.where === 'county').length, state = all.filter((j) => j.marriageRecord?.where !== 'county');
      const fees = state.map((j) => j.marriageRecord?.first).filter((x): x is number => x != null);
      return `A certified copy of a marriage certificate is ordered from the office that recorded the marriage in the state where the wedding took place, not where the couple lives. The first stop is always the local office that issued the license: the county clerk, recorder, probate court, register of deeds, or town or city clerk, which receives the signed license from the officiant and records it. In ${county} of the ${all.length} jurisdictions covered here, that local office is the only source of certified copies; the state may keep an index and sell only a verification letter. In the other ${state.length}, the state vital records office also issues certified copies, usually for a range of years, at a state fee from ${h.m(Math.min(...fees))} to ${h.m(Math.max(...fees))} for the first copy. The county fee is set locally and published on the county page. Copies become available once the license has been returned and recorded, which can take a few weeks after the ceremony. Agencies ask for a certified copy, with the seal of the issuing office, to change a name, add a spouse to insurance or file taxes jointly. The state fees and notes here were read on official pages; the date is shown for each state.`;
    },
    faqs: (h) => {
      const fl = h.J('FL');
      return [
        { q: 'How do I get a copy of my marriage certificate?', a: 'Ask the county or town office that issued your license, by mail, in person or online when it offers it. In many states the state vital records office also sells certified copies for marriages recorded in certain years. Give both names, the date and the place of the marriage, and send a photo ID.' },
        { q: 'How much is a certified copy of a marriage certificate?', a: `It depends on the office. Florida's state office, for example, charges ${fl.marr?.first != null ? h.m(fl.marr.first) : h.nc} for the first copy. In Texas the state sends only a verification letter, so certified copies come from the county clerk at the county's fee. County fees are on each county's page.` },
        { q: 'How soon after the wedding can I order a copy?', a: 'Once the officiant has returned the license and the office has recorded it. Officiants have from a few days to a few weeks to return it, depending on the state, and recording takes a little longer. Many couples order copies about a month after the ceremony.' },
        { q: 'Is a marriage license the same as a marriage certificate?', a: 'No. The license is the permission bought before the wedding; the certificate is the record of the marriage once it has been performed and recorded. Only the certificate proves that you are married, and only certified copies of it are accepted by agencies.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j0) => { const j = h.J(j0.code); const mr = j.marr; return [j.nameL, whereL(h, mr?.where), mr?.first != null && mr.where !== 'county' ? h.m(mr.first) : '–', mr?.url ? h.ext(mr.url, h.es ? 'página oficial' : 'official page') : '–']; });
      return `<h2>Who issues certified copies, state by state</h2>
<p>“State fee” is the price of the first certified copy at the state vital records office, where it sells one. Where the county is the only source, the state fee is left blank.</p>
${h.table(['State', 'Issued by', 'State fee', 'Source'], rows, undefined, ['l', 'l', 'r', 'l'])}
<h2>What to give when ordering</h2>
<ul><li>The full names of both spouses as written on the license, including the names before marriage.</li><li>The date of the marriage and the county or town where the license was issued.</li><li>Your relationship to the couple, if the state restricts copies.</li><li>A copy of a photo ID and the fee.</li></ul>
<!--tool:mini:vsc|{"state":"NC"}-->
<h2>How many copies</h2>
<p>A name change usually takes one certified copy for Social Security, shown and returned, and one for the passport application, which is returned too; the motor vehicle office and banks often want to see one as well. Two or three copies cover most couples; see the ${h.a('name-change', 'name change checklist')}. After a death, the surviving spouse can need the marriage certificate for benefits, alongside the ${h.a('death-copies', 'death certificates')}.</p>`;
    },
  },
  es: {
    slug: 'copia-acta-de-matrimonio', nav: 'Copia del acta de matrimonio', card: 'De dónde viene una copia certificada en cada estado, la tarifa estatal cuando existe y qué pedir al condado.',
    title: 'Copia del acta de matrimonio 2026: dónde pedirla y costo',
    description: 'Cómo obtener una copia certificada del acta de matrimonio en 2026: la oficina que la guarda en cada estado, el condado o el estado, y la tarifa de cada copia.',
    h1: 'Copia del acta de matrimonio: dónde pedirla y cuánto cuesta',
    intro: 'Elija el estado de la boda: la herramienta muestra si emiten copias certificadas la oficina estatal, el condado o ambos, y la tarifa estatal cuando el estado las vende.',
    resume: (h) => {
      const all = h.JURS.filter((j) => j.marriageRecord);
      const county = all.filter((j) => j.marriageRecord?.where === 'county').length, state = all.filter((j) => j.marriageRecord?.where !== 'county');
      const fees = state.map((j) => j.marriageRecord?.first).filter((x): x is number => x != null);
      return `Una copia certificada del acta de matrimonio se pide a la oficina que registró el matrimonio en el estado donde se celebró la boda, no donde vive la pareja. La primera parada es siempre la oficina local que emitió la licencia: el secretario o registrador del condado, el tribunal testamentario, el registro de escrituras o el secretario municipal, que recibe del oficiante la licencia firmada y la registra. En ${county} de las ${all.length} jurisdicciones cubiertas aquí, esa oficina local es la única que emite copias certificadas; el estado puede guardar un índice y vender solo una carta de verificación. En las otras ${state.length}, la oficina estatal de registros vitales también emite copias certificadas, por lo general para ciertos años, a una tarifa estatal de ${h.m(Math.min(...fees))} a ${h.m(Math.max(...fees))} por la primera copia. La tarifa del condado se fija localmente y se publica en la página del condado. Las copias están disponibles cuando la licencia se ha devuelto y registrado, lo que puede tardar unas semanas tras la ceremonia. Las agencias piden una copia certificada, con el sello de la oficina emisora, para cambiar de apellido, añadir al cónyuge al seguro o declarar impuestos en conjunto. Las tarifas y notas estatales se leyeron en páginas oficiales; la fecha figura para cada estado.`;
    },
    faqs: (h) => {
      const fl = h.J('FL');
      return [
        { q: '¿Cómo obtengo una copia de mi acta de matrimonio?', a: 'Pídala a la oficina del condado o municipio que emitió su licencia, por correo, en persona o en línea cuando lo ofrezca. En muchos estados la oficina estatal de registros vitales también vende copias certificadas de los matrimonios registrados en ciertos años. Indique los dos nombres, la fecha y el lugar del matrimonio, y envíe una identificación con foto.' },
        { q: '¿Cuánto cuesta una copia certificada del acta de matrimonio?', a: `Depende de la oficina. La oficina estatal de Florida, por ejemplo, cobra ${fl.marr?.first != null ? h.m(fl.marr.first) : h.nc} por la primera copia. En Texas el estado envía solo una carta de verificación, así que las copias certificadas vienen del secretario del condado a la tarifa del condado. Las tarifas de cada condado están en su página.` },
        { q: '¿Cuánto después de la boda puedo pedir una copia?', a: 'Cuando el oficiante haya devuelto la licencia y la oficina la haya registrado. Los oficiantes tienen de unos días a unas semanas para devolverla, según el estado, y el registro tarda un poco más. Muchas parejas piden las copias alrededor de un mes después de la ceremonia.' },
        { q: '¿La licencia de matrimonio es lo mismo que el acta de matrimonio?', a: 'No. La licencia es el permiso que se compra antes de la boda; el acta es el registro del matrimonio una vez celebrado e inscrito. Solo el acta prueba que están casados, y solo sus copias certificadas son aceptadas por las agencias.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j0) => { const j = h.J(j0.code); const mr = j.marr; return [j.nameL, whereL(h, mr?.where), mr?.first != null && mr.where !== 'county' ? h.m(mr.first) : '–', mr?.url ? h.ext(mr.url, 'página oficial') : '–']; });
      return `<h2>Quién emite copias certificadas, estado por estado</h2>
<p>«Tarifa estatal» es el precio de la primera copia certificada en la oficina estatal de registros vitales, cuando la vende. Donde el condado es la única fuente, la tarifa estatal queda en blanco.</p>
${h.table(['Estado', 'La emite', 'Tarifa estatal', 'Fuente'], rows, undefined, ['l', 'l', 'r', 'l'])}
<h2>Qué indicar al pedirla</h2>
<ul><li>Los nombres completos de ambos cónyuges tal como figuran en la licencia, incluidos los apellidos de antes del matrimonio.</li><li>La fecha del matrimonio y el condado o municipio donde se emitió la licencia.</li><li>Su relación con la pareja, si el estado restringe las copias.</li><li>Una copia de una identificación con foto y la tarifa.</li></ul>
<!--tool:mini:vsc|{"state":"NC"}-->
<h2>Cuántas copias</h2>
<p>Un cambio de apellido suele requerir una copia certificada para el Seguro Social, que se muestra y se devuelve, y otra para la solicitud de pasaporte, que también se devuelve; la oficina de vehículos y los bancos a menudo quieren ver una. Dos o tres copias bastan para la mayoría de las parejas; vea la ${h.a('name-change', 'lista para el cambio de apellido')}. Tras un fallecimiento, el cónyuge sobreviviente puede necesitar el acta de matrimonio para los beneficios, junto con las ${h.a('death-copies', 'actas de defunción')}.</p>`;
    },
  },
});
