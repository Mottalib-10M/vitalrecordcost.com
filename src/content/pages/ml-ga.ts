import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-ga', group: 'states', order: 204, state: 'GA',
  tool: { kind: 'marriage', props: { state: 'GA' } },
  mini: { kind: 'mini:mlcost', props: { state: 'GA', course: 1 } },
  related: ['marriage-license', 'marriage-license-cost', 'marriage-copy', 'name-change', 'ml-tn', 'ml-fl'],
  sources: [],
  en: {
    slug: 'marriage-license/georgia', nav: 'Georgia marriage license', card: 'Probate court fees by county, the premarital program discount, no wait and where copies come from.',
    title: 'Marriage License Georgia 2026: Probate Court and Discount',
    description: 'Georgia marriage license in 2026: probate court fees county by county, the large discount for premarital education, no waiting period and the certified copy.',
    h1: 'Georgia marriage license: probate court fees and the premarital discount',
    intro: 'In Georgia the license comes from the probate court, and a premarital education program cuts its price sharply. What each court charges, what the program changes and where the record is kept.',
    resume: (h) => {
      const r = h.ML('GA');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return `A Georgia marriage license is issued by the probate court of a county, and each court sets its own price: the courts read for this site ask ${r.feeL} without premarital education, for example ${r.exampleL}. A premarital education program of ${r.courseHours} hours lowers the fee by ${r.discL}, which brings the same range down to ${lo} to ${hi}, so the course pays for a large share of the license. Georgia sets ${r.waitL}: once the court has issued the license, the ceremony can take place. The pages read do not publish a single expiry period for the whole state, so the date by which the license must be used is a question to put to the probate court that issues it. After the ceremony, the signed license is filed with that probate court, which records the marriage and issues certified copies. The state Office of Vital Records holds marriage records only from June 1952 to August 1996; for every other year, the county probate court is the only source. Fees were read on the court pages on ${h.date(r.retrievedAt)}, and this site is not a government office.`;
    },
    faqs: (h) => {
      const r = h.ML('GA'), t = h.J('GA');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return [
        { q: 'Which office sells marriage licenses in Georgia?', a: `The probate court of the county, not a county clerk or a recorder. Each probate court publishes its own fee; the ones read for this site range ${r.feeL}, such as ${r.exampleL}. Both partners should check the court page for hours and documents before going in person.` },
        { q: 'How much does premarital education save on a Georgia license?', a: `${r.discL}. With a certificate from a program of ${r.courseHours} hours, the fees read for this site fall to ${lo} to ${hi}. The certificate is handed to the probate court with the application. Georgia's reduction is larger than the one in Florida and comparable in spirit to Tennessee's.` },
        { q: 'Is there a waiting period after getting a Georgia license?', a: `No. Georgia sets ${r.waitL}, so the ceremony can follow the issue of the license the same day if an officiant is available. How long the license remains usable is not published in the data read here; confirm the expiry rule with the probate court before planning a distant date.` },
        { q: 'Can the Georgia state office send us a copy of our marriage record?', a: `Only for marriages from June 1952 to August 1996, at ${h.m(t.marr.first)} for the first copy and ${h.m(t.marr.additional)} for each additional one ordered at the same time. For a recent wedding, and for any other year, request the certified copy from the probate court of the county that issued the license.` },
      ];
    },
    body: (h) => {
      const r = h.ML('GA'), t = h.J('GA'), tn = h.ML('TN'), fl = h.ML('FL');
      const d = r.courseDiscount;
      const rows = [
        ['Lowest fee read', h.m(r.feeMin ?? 0), h.m((r.feeMin ?? 0) - d)],
        ['Highest fee read', h.m(r.feeMax ?? 0), h.m((r.feeMax ?? 0) - d)],
      ];
      return `<h2>A probate court matter</h2>
<p>Georgia gives marriage licenses to its probate courts, the same courts that handle wills and estates. That is why the fee varies: each court publishes its own, and the pages read for this site go from ${h.m(r.feeMin ?? 0)} to ${h.m(r.feeMax ?? 0)}. The court page is also the place to check the hours and the documents requested.</p>
${h.table(['', 'Without the program', 'With a program certificate'], rows, 'Georgia marriage license fees read on probate court pages', ['l', 'r', 'r'])}
<p>In money terms, the program discount of ${r.discL} is larger than the whole gap between the cheapest and the most expensive court read, which is ${h.m((r.feeMax ?? 0) - (r.feeMin ?? 0))}. The certificate therefore weighs more on the final price than the fee level of the county itself.</p>
<h2>What the premarital program changes</h2>
<p>The discount is the point of the program in Georgia. A course of ${r.courseHours} hours with a provider earns a certificate, and the probate court then takes ${r.discL} off the license. In the cheapest counties read here, the license falls to under a third of its usual price. Nearby states use the same lever with other amounts: the ${h.a('ml-fl', 'Florida course')} saves ${fl.discL}, and the ${h.a('ml-tn', 'Tennessee course')} saves ${tn.discL}. The mini calculator compares the license with the certificate copies a couple will order afterward.</p>
<!--tool:mini:vsc|{"state":"GA"}-->
<h2>Dates to keep in mind</h2>
<ul>
<li>Waiting period: ${r.waitL}, so the license can be used as soon as it is issued.</li>
<li>Expiry: not published in the data read for this site; ask the issuing probate court.</li>
<li>Recording: the signed license returns to the same court, which records the marriage.</li>
</ul>
<h2>Copies depend on the year of the wedding</h2>
<p>For a marriage celebrated now, the certified copy comes from the probate court of the county that issued the license. The state Office of Vital Records keeps only the marriages from June 1952 to August 1996 and sells those copies at ${h.m(t.marr.first)}, then ${h.m(t.marr.additional)} for each extra one. The ${h.a('marriage-copy', 'marriage certificate copies page')} explains how other states split the work, and the ${h.a('name-change', 'name change checklist')} lists where to present the copy first. Before ordering, count the offices that will want a certified copy, such as Social Security, the driver's license office, a bank or an employer's benefits department: ordering them together is simpler than going back to the court later. The ${h.a('marriage-license-cost', 'cost by state')} page shows where Georgia's fees sit nationally.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/georgia', nav: 'Licencia de matrimonio de Georgia', card: 'Tarifas del tribunal testamentario por condado, descuento por educación prematrimonial, sin espera y copias.',
    title: 'Licencia de matrimonio Georgia 2026: tribunal y descuento',
    description: 'Licencia de matrimonio en Georgia en 2026: tarifas del tribunal testamentario por condado, gran descuento por educación prematrimonial, sin espera y la copia.',
    h1: 'Licencia de matrimonio en Georgia: tarifas del tribunal y descuento prematrimonial',
    intro: 'En Georgia la licencia la emite el tribunal testamentario (probate court), y un programa de educación prematrimonial rebaja mucho su precio. Lo que cobra cada tribunal, lo que cambia el programa y dónde se guarda el registro.',
    resume: (h) => {
      const r = h.ML('GA');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return `La licencia de matrimonio de Georgia la emite el tribunal testamentario (probate court) de un condado, y cada tribunal fija su propio precio: los tribunales consultados para este sitio piden ${r.feeL} sin educación prematrimonial. Un programa de educación prematrimonial de ${r.courseHours} horas rebaja la tarifa en ${r.discL}, lo que deja ese mismo rango en ${lo} a ${hi}, de modo que el curso cubre buena parte del costo de la licencia. En Georgia no hay período de espera: una vez que el tribunal emite la licencia, la ceremonia puede celebrarse. Las páginas leídas no publican un plazo de vencimiento único para todo el estado, así que la fecha límite para usar la licencia hay que consultarla con el tribunal testamentario que la emite. Después de la ceremonia, la licencia firmada se presenta ante ese mismo tribunal, que registra el matrimonio y emite las copias certificadas. La Oficina de Estadísticas Vitales del estado solo conserva los matrimonios de junio de 1952 a agosto de 1996; para cualquier otro año, el tribunal testamentario del condado es la única fuente. Las tarifas se leyeron en las páginas de los tribunales el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('GA'), t = h.J('GA');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return [
        { q: '¿Qué oficina vende las licencias de matrimonio en Georgia?', a: `El tribunal testamentario del condado, no un secretario de condado ni un registrador. Cada tribunal publica su propia tarifa; las consultadas para este sitio van ${r.feeL}. Conviene revisar en la página del tribunal el horario y los documentos antes de presentarse en persona.` },
        { q: '¿Cuánto se ahorra con la educación prematrimonial en Georgia?', a: `${r.discL}. Con el certificado de un programa de ${r.courseHours} horas, las tarifas leídas para este sitio bajan a ${lo} a ${hi}. El certificado se entrega al tribunal testamentario junto con la solicitud. La rebaja de Georgia es mayor que la de Florida y sigue la misma lógica que la de Tennessee.` },
        { q: '¿Hay que esperar después de obtener una licencia en Georgia?', a: `No. Georgia no impone ninguna espera, así que la ceremonia puede celebrarse el mismo día de la emisión si hay un oficiante disponible. El tiempo durante el cual la licencia sigue siendo válida no figura en los datos leídos aquí; confirme la regla de vencimiento con el tribunal antes de fijar una fecha lejana.` },
        { q: '¿La oficina del estado de Georgia puede enviarnos una copia del acta de matrimonio?', a: `Solo para matrimonios celebrados entre junio de 1952 y agosto de 1996, a ${h.m(t.marr.first)} la primera copia y ${h.m(t.marr.additional)} cada copia adicional pedida a la vez. Para una boda reciente, o para cualquier otro año, solicite la copia certificada al tribunal testamentario del condado que emitió la licencia.` },
      ];
    },
    body: (h) => {
      const r = h.ML('GA'), t = h.J('GA'), tn = h.ML('TN'), fl = h.ML('FL');
      const d = r.courseDiscount;
      const rows = [
        ['Tarifa más baja leída', h.m(r.feeMin ?? 0), h.m((r.feeMin ?? 0) - d)],
        ['Tarifa más alta leída', h.m(r.feeMax ?? 0), h.m((r.feeMax ?? 0) - d)],
      ];
      return `<h2>Un asunto del tribunal testamentario</h2>
<p>Georgia confía las licencias de matrimonio a sus tribunales testamentarios, los mismos que se ocupan de testamentos y sucesiones. Por eso la tarifa varía: cada tribunal publica la suya, y las páginas leídas para este sitio van de ${h.m(r.feeMin ?? 0)} a ${h.m(r.feeMax ?? 0)}. La página del tribunal es también donde se consultan el horario y los documentos exigidos.</p>
${h.table(['', 'Sin el programa', 'Con certificado del programa'], rows, 'Tarifas de la licencia de matrimonio de Georgia leídas en páginas de tribunales testamentarios', ['l', 'r', 'r'])}
<p>En dinero, el descuento del programa, de ${r.discL}, supera toda la diferencia entre el tribunal más barato y el más caro de los leídos, que es de ${h.m((r.feeMax ?? 0) - (r.feeMin ?? 0))}. Por eso el certificado pesa más en el precio final que el nivel de tarifa del propio condado.</p>
<h2>Lo que cambia el programa prematrimonial</h2>
<p>En Georgia, el descuento es la razón de ser del programa. Un curso de ${r.courseHours} horas con un proveedor da derecho a un certificado, y el tribunal testamentario descuenta entonces ${r.discL} de la licencia. En los condados más baratos leídos aquí, la licencia queda por debajo de la tercera parte de su precio habitual. Los estados vecinos usan la misma palanca con otros montos: el ${h.a('ml-fl', 'curso de Florida')} ahorra ${fl.discL}, y el ${h.a('ml-tn', 'curso de Tennessee')} ahorra ${tn.discL}. La minicalculadora compara la licencia con las copias del acta que la pareja pedirá después.</p>
<!--tool:mini:vsc|{"state":"GA"}-->
<h2>Fechas que conviene tener en cuenta</h2>
<ul>
<li>Período de espera: ninguno, así que la licencia puede usarse en cuanto se emite.</li>
<li>Vencimiento: no publicado en los datos leídos para este sitio; pregunte al tribunal que la emite.</li>
<li>Registro: la licencia firmada vuelve al mismo tribunal, que registra el matrimonio.</li>
</ul>
<h2>Las copias dependen del año de la boda</h2>
<p>Para un matrimonio celebrado hoy, la copia certificada la emite el tribunal testamentario del condado que expidió la licencia. La Oficina de Estadísticas Vitales del estado solo conserva los matrimonios de junio de 1952 a agosto de 1996 y vende esas copias a ${h.m(t.marr.first)}, y luego ${h.m(t.marr.additional)} cada copia adicional. La ${h.a('marriage-copy', 'página de las copias del acta de matrimonio')} explica cómo reparten el trabajo los demás estados, y la ${h.a('name-change', 'lista para el cambio de apellido')} indica dónde presentar la copia primero. Antes de pedirlas, cuente las oficinas que querrán una copia certificada, como el Seguro Social, la oficina de licencias de manejar, un banco o el departamento de prestaciones de un empleador: pedirlas juntas es más sencillo que volver al tribunal después. La página del ${h.a('marriage-license-cost', 'costo por estado')} muestra dónde se sitúan las tarifas de Georgia a nivel nacional.</p>`;
    },
  },
});
