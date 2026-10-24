import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-tn', group: 'states', order: 209, state: 'TN',
  tool: { kind: 'marriage', props: { state: 'TN' } },
  mini: { kind: 'mini:mlcost', props: { state: 'TN', course: 1 } },
  related: ['marriage-license', 'marriage-license-cost', 'marriage-copy', 'name-change', 'ml-ga', 'ml-nc'],
  sources: [],
  en: {
    slug: 'marriage-license/tennessee', nav: 'Tennessee marriage license', card: 'County clerk fee, the premarital course discount, no wait and a 30-day license usable statewide.',
    title: 'Marriage License Tennessee 2026: County Clerk Fee and Course',
    description: 'Tennessee marriage license in 2026: the county clerk fee, what the premarital course takes off, no waiting period, 30 days to use it and the state copy later.',
    h1: 'Tennessee marriage license: county clerk fee, course and 30 days',
    intro: 'Tennessee pairs one of the higher license prices with one of the biggest course discounts, and gives couples only a short window to marry. The figures from the county clerks, the dates and the copy afterward.',
    resume: (h) => {
      const r = h.ML('TN'), t = h.J('TN');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return `A Tennessee marriage license is sold by the county clerk, and each county sets the amount: the clerks' pages read for this site ask ${r.feeL} for residents, for example ${r.exampleL}. Couples who complete a premarital preparation course of ${r.courseHours} hours and bring the certificate pay ${r.discL} less, which brings the same range down to ${lo} to ${hi}. Tennessee sets ${r.waitL}, so the ceremony can follow the issue of the license immediately. The license is valid for ${r.validL} and can be used anywhere in Tennessee, not only in the county that issued it, so a couple living in Clarksville can marry in the Smoky Mountains with a Montgomery County license. Once the ceremony has taken place, the signed license returns to the county clerk for recording, and the record then reaches the Tennessee Office of Vital Records, which sells certified copies at ${h.m(t.marr.first)} each and keeps the last 50 years of marriages; older ones are held by the Tennessee State Library and Archives. Fees were read on the county pages on ${h.date(r.retrievedAt)}, and this site is not a government office.`;
    },
    faqs: (h) => {
      const r = h.ML('TN'), t = h.J('TN');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return [
        { q: 'How much is a marriage license in Tennessee without the course?', a: `The county clerks read for this site ask ${r.feeL} for residents, with ${r.exampleL}. These are resident prices: a couple living outside Tennessee should ask the clerk for the amount that applies to them. The fee is paid when the license is issued, and certified copies of the record are bought separately later.` },
        { q: 'Is the Tennessee premarital course worth taking?', a: `On price alone, usually yes: the certificate takes ${r.discL} off the license, bringing the range read here to ${lo} to ${hi}. The course lasts ${r.courseHours} hours with a provider, and the certificate is presented to the county clerk when applying. Tennessee has no waiting period to remove, so the saving is the only effect.` },
        { q: 'Can a Tennessee license from one county be used in another?', a: `Yes. The license is good for ${r.validL} anywhere in Tennessee, as the Montgomery County clerk states. Couples can buy it near home and marry in another county, for example at a venue in the mountains. The signed license still returns to the clerk of the county that issued it.` },
        { q: 'Where do we order a copy of a Tennessee marriage certificate?', a: `From the Tennessee Office of Vital Records, which charges ${h.m(t.marr.first)} per certified copy and keeps marriages from the last 50 years. Older records are held by the Tennessee State Library and Archives. For a very recent wedding, the record must first be recorded by the county clerk and sent to the state, so allow some time before ordering.` },
      ];
    },
    body: (h) => {
      const r = h.ML('TN'), t = h.J('TN'), ga = h.ML('GA');
      const d = r.courseDiscount;
      const rows = [
        ['Lowest resident fee read', h.m(r.feeMin ?? 0), h.m((r.feeMin ?? 0) - d)],
        ['Highest resident fee read', h.m(r.feeMax ?? 0), h.m((r.feeMax ?? 0) - d)],
      ];
      return `<h2>Course or no course: the price gap</h2>
<p>Tennessee leaves the license fee to each county clerk, and the figures read for this site are among the higher ones in the country. The premarital course changes the picture: its certificate takes ${r.discL} off, more than half of the price. The table shows the range read on the clerks' pages, with and without the certificate.</p>
${h.table(['', 'Without the course', 'With a course certificate'], rows, 'Tennessee marriage license fees for residents, read on county clerk pages', ['l', 'r', 'r'])}
<p>The course lasts ${r.courseHours} hours. Georgia uses the same mechanism with a ${ga.discL} reduction: see the ${h.a('ml-ga', 'Georgia marriage license page')}. The ${h.a('marriage-license-cost', 'cost by state page')} ranks Tennessee among the others.</p>
<h2>${r.validL}, statewide</h2>
<p>Tennessee sets ${r.waitL}, so there is nothing to count before the ceremony. The constraint is the other way round: the license is good for only ${r.validL}. A couple who buys it too early, for instance to pair it with a course taken months before, may see it lapse before the wedding. The mini calculator gives the dates for Tennessee; apply within the last weeks before the ceremony. The license can be used in any Tennessee county, not just the one that issued it.</p>
<!--tool:mini:mlwait|{"state":"TN"}-->
<h2>Resident prices and what to ask the clerk</h2>
<p>The fees published by the clerks read for this site are resident prices. Couples coming from another state should ask the county clerk for the amount that applies to them before they travel, and confirm which documents each partner must bring. Both partners should plan to be present when the license is issued.</p>
<h2>Copies after the wedding</h2>
<p>After the ceremony, the signed license goes back to the county clerk who issued it to be recorded, and the record is then sent to the state. The Tennessee Office of Vital Records sells certified copies at ${h.m(t.marr.first)} each and keeps the last 50 years of marriages; earlier records are at the Tennessee State Library and Archives. The ${h.a('marriage-copy', 'marriage certificate copies page')} compares the states, and the ${h.a('name-change', 'name change checklist')} shows where the copy is needed first. North Carolina, next door, also has no wait but charges one fee in every county: see the ${h.a('ml-nc', 'North Carolina marriage license page')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/tennessee', nav: 'Licencia de matrimonio de Tennessee', card: 'Tarifa del secretario del condado, descuento por curso prematrimonial, sin espera y 30 días en todo el estado.',
    title: 'Licencia de matrimonio Tennessee 2026: tarifa y curso',
    description: 'Licencia de matrimonio en Tennessee en 2026: tarifa del secretario del condado, descuento del curso prematrimonial, sin espera, 30 días para usarla y la copia.',
    h1: 'Licencia de matrimonio en Tennessee: tarifa del condado, curso y 30 días',
    intro: 'Tennessee combina uno de los precios de licencia más altos con uno de los mayores descuentos por curso, y da a las parejas poco tiempo para casarse. Las cifras de los secretarios de condado, las fechas y la copia después de la boda.',
    resume: (h) => {
      const r = h.ML('TN'), t = h.J('TN');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return `La licencia de matrimonio de Tennessee la vende el secretario del condado, y cada condado fija el monto: las páginas de los secretarios leídas para este sitio piden ${r.feeL} a los residentes. Las parejas que completan un curso de preparación prematrimonial de ${r.courseHours} horas y presentan el certificado pagan ${r.discL} menos, lo que deja ese mismo rango en ${lo} a ${hi}. Tennessee no impone ninguna espera, así que la ceremonia puede celebrarse en cuanto se emite la licencia. La licencia vale ${r.validL} y puede usarse en cualquier lugar de Tennessee, no solo en el condado que la emitió, de modo que una pareja que vive en Clarksville puede casarse en las Smoky Mountains con una licencia del condado de Montgomery. Una vez celebrada la ceremonia, la licencia firmada vuelve al secretario del condado para su registro, y el registro llega después a la Oficina de Estadísticas Vitales de Tennessee, que vende copias certificadas a ${h.m(t.marr.first)} cada una y conserva los matrimonios de los últimos 50 años; los más antiguos están en la Biblioteca y Archivo del Estado de Tennessee. Las tarifas se leyeron en las páginas de los condados el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('TN'), t = h.J('TN');
      const d = r.courseDiscount, lo = h.m((r.feeMin ?? 0) - d), hi = h.m((r.feeMax ?? 0) - d);
      return [
        { q: '¿Cuánto cuesta la licencia de matrimonio en Tennessee sin el curso?', a: `Los secretarios de condado leídos para este sitio piden ${r.feeL} a los residentes. Son precios para residentes: una pareja que vive fuera de Tennessee debe preguntar al secretario el monto que le corresponde. La tarifa se paga cuando se emite la licencia, y las copias certificadas del acta se compran aparte más adelante.` },
        { q: '¿Vale la pena hacer el curso prematrimonial en Tennessee?', a: `Solo por el precio, casi siempre sí: el certificado descuenta ${r.discL} de la licencia y deja el rango leído aquí en ${lo} a ${hi}. El curso dura ${r.courseHours} horas con un proveedor, y el certificado se presenta al secretario del condado al hacer la solicitud. Tennessee no tiene espera que eliminar, así que el ahorro es el único efecto.` },
        { q: '¿Se puede usar en otro condado una licencia de Tennessee?', a: `Sí. La licencia vale ${r.validL} en cualquier lugar de Tennessee, como indica el secretario del condado de Montgomery. Las parejas pueden comprarla cerca de casa y casarse en otro condado, por ejemplo en un lugar de celebración en las montañas. La licencia firmada vuelve igualmente al secretario del condado que la emitió.` },
        { q: '¿Dónde se pide una copia del acta de matrimonio de Tennessee?', a: `A la Oficina de Estadísticas Vitales de Tennessee, que cobra ${h.m(t.marr.first)} por copia certificada y conserva los matrimonios de los últimos 50 años. Los registros más antiguos están en la Biblioteca y Archivo del Estado de Tennessee. Para una boda muy reciente, el registro debe primero inscribirlo el secretario del condado y enviarlo al estado, así que conviene esperar un tiempo antes de pedirla.` },
      ];
    },
    body: (h) => {
      const r = h.ML('TN'), t = h.J('TN'), ga = h.ML('GA');
      const d = r.courseDiscount;
      const rows = [
        ['Tarifa más baja leída (residentes)', h.m(r.feeMin ?? 0), h.m((r.feeMin ?? 0) - d)],
        ['Tarifa más alta leída (residentes)', h.m(r.feeMax ?? 0), h.m((r.feeMax ?? 0) - d)],
      ];
      return `<h2>Con o sin curso: la diferencia de precio</h2>
<p>Tennessee deja la tarifa de la licencia en manos de cada secretario de condado, y las cifras leídas para este sitio están entre las más altas del país. El curso prematrimonial cambia el panorama: su certificado descuenta ${r.discL}, más de la mitad del precio. La tabla muestra el rango leído en las páginas de los secretarios, con y sin el certificado.</p>
${h.table(['', 'Sin el curso', 'Con certificado del curso'], rows, 'Tarifas de la licencia de matrimonio de Tennessee para residentes, leídas en páginas de secretarios de condado', ['l', 'r', 'r'])}
<p>El curso dura ${r.courseHours} horas. Georgia aplica el mismo mecanismo con una rebaja de ${ga.discL}: vea la ${h.a('ml-ga', 'página de la licencia de matrimonio de Georgia')}. La ${h.a('marriage-license-cost', 'página del costo por estado')} sitúa a Tennessee entre los demás.</p>
<h2>${r.validL}, en todo el estado</h2>
<p>Tennessee no impone espera, así que no hay nada que contar antes de la ceremonia. La restricción va en sentido contrario: la licencia vale solo ${r.validL}. Una pareja que la compra demasiado pronto, por ejemplo para juntarla con un curso hecho meses antes, puede ver cómo caduca antes de la boda. La minicalculadora da las fechas para Tennessee; solicítela en las últimas semanas antes de la ceremonia. La licencia puede usarse en cualquier condado de Tennessee, no solo en el que la emitió.</p>
<!--tool:mini:mlwait|{"state":"TN"}-->
<h2>Precios para residentes y qué preguntar al secretario</h2>
<p>Las tarifas que publican los secretarios leídos para este sitio son precios para residentes. Las parejas que vienen de otro estado deben preguntar al secretario del condado el monto que les corresponde antes de viajar, y confirmar qué documentos debe llevar cada uno. Conviene que los dos contrayentes prevean estar presentes cuando se emita la licencia.</p>
<h2>Copias después de la boda</h2>
<p>Después de la ceremonia, la licencia firmada vuelve al secretario del condado que la emitió para su registro, y el registro se envía después al estado. La Oficina de Estadísticas Vitales de Tennessee vende copias certificadas a ${h.m(t.marr.first)} cada una y conserva los matrimonios de los últimos 50 años; los registros anteriores están en la Biblioteca y Archivo del Estado de Tennessee. La ${h.a('marriage-copy', 'página de las copias del acta de matrimonio')} compara los estados, y la ${h.a('name-change', 'lista para el cambio de apellido')} indica dónde se necesita la copia primero. Carolina del Norte, el estado vecino, tampoco tiene espera, pero cobra una sola tarifa en todos sus condados: vea la ${h.a('ml-nc', 'página de la licencia de matrimonio de Carolina del Norte')}.</p>`;
    },
  },
});
