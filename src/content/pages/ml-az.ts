import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-az', group: 'states', order: 208, state: 'AZ',
  tool: { kind: 'marriage', props: { state: 'AZ' } },
  mini: { kind: 'mini:mlcost', props: { state: 'AZ' } },
  related: ['marriage-license', 'marriage-copy', 'marriage-license-vs-certificate', 'name-change', 'ml-nv', 'courthouse-wedding'],
  sources: [],
  en: {
    slug: 'marriage-license/arizona', nav: 'Arizona marriage license', card: 'Clerk of the superior court fee, no wait, no blood test, one year of validity and the copy from the clerk.',
    title: 'Marriage License Arizona 2026: Superior Court Clerk Fees',
    description: 'Arizona marriage license in 2026: the clerk of the superior court fee, no waiting period or blood test, a full year to marry and where the copy is sold.',
    h1: 'Arizona marriage license: superior court clerk, fee and one year',
    intro: 'In Arizona the license and the certified copy both come from the clerk of the superior court of a county. What the clerk charges, why the license lasts so long, and how it compares with other states that set no wait.',
    resume: (h) => {
      const r = h.ML('AZ');
      return `In Arizona the marriage license is issued by the clerk of the superior court in each county, and the clerk sets the fee: the pages read for this site range ${r.feeL}, with ${r.exampleL}, and most counties sit at the top of that range. Arizona sets ${r.waitL} and requires no blood test, so the license can serve for a ceremony on the very day it is issued. Once issued, it remains valid for ${r.validL}, which lets couples apply well ahead of the wedding instead of racing a short deadline. After the ceremony, the signed license is returned to the clerk's office that issued it, where the marriage is recorded. Certified copies of the marriage record are sold by that same clerk of the superior court: the Bureau of Vital Records of the Arizona Department of Health Services does not issue marriage records, so a couple married with a Pima County license orders the copy from the Pima County clerk, and likewise in every other county. Fees and rules were read on the county pages on ${h.date(r.retrievedAt)}; this site is not a government office.`;
    },
    faqs: (h) => {
      const r = h.ML('AZ');
      return [
        { q: 'Which office issues marriage licenses in Arizona?', a: `The clerk of the superior court of a county, the office that also keeps the court's records. Each clerk publishes its fee; the pages read for this site range ${r.feeL}, with ${r.exampleL}. Check the hours and the documents requested on the county clerk page before going.` },
        { q: 'Do we need a blood test or a waiting period in Arizona?', a: `Neither. Arizona sets ${r.waitL} and no blood test, as the Pima County clerk states. A couple can therefore obtain the license and hold the ceremony on the same day, provided an officiant is available. The license then stays usable for ${r.validL}, so there is no pressure to marry quickly either.` },
        { q: 'What happens if our Arizona license is not used within the year?', a: `It expires once ${r.validL} have passed since it was issued,: the couple applies again and pays the fee a second time. Because the validity is long, the usual risk is not expiry but forgetting where the license was kept, so store it with the wedding documents.` },
        { q: 'Where do we get a certified copy of an Arizona marriage certificate?', a: 'From the clerk of the superior court of the county that issued the license, not from the state. The Arizona Department of Health Services, Bureau of Vital Records, does not issue marriage records. Each clerk sets its own copy fee and ordering method; ask for certified copies, which are what agencies accept for a name change.' },
      ];
    },
    body: (h) => {
      const r = h.ML('AZ'), nv = h.ML('NV'), nc = h.ML('NC'), tn = h.ML('TN');
      const rows = [
        [h.name('AZ'), r.feeL, r.waitL, r.validL],
        [h.sl('NV', 'ml'), nv.feeL, nv.waitL, nv.validL],
        [h.sl('NC', 'ml'), nc.feeL, nc.waitL, nc.validL],
        [h.sl('TN', 'ml'), tn.feeL, tn.waitL, tn.validL],
      ];
      return `<h2>The clerk of the superior court</h2>
<p>Arizona routes marriage licenses through its court system. The clerk of the superior court of each county issues them and sets the price, which explains the spread of ${r.feeL} read for this site. Most counties charge the higher figure, ${r.exampleL}. The clerk is also the office that keeps the marriage record once the ceremony is done, so a couple deals with a single counter from application to certified copy.</p>
<p>Between the lowest and the highest county fee read for this site, the gap is ${h.m((r.feeMax ?? 0) - (r.feeMin ?? 0))}. Since the copy is ordered later from the clerk who issued the license, it is practical to apply at an office that will be easy to reach again.</p>
<h2>A year to use it, nothing to wait for</h2>
<p>Two features set Arizona apart from most states: ${r.waitL} and a validity of ${r.validL}. Arizona gives a full year, longer than the other no-wait states in the table below. A couple living in Phoenix can apply during a free afternoon in spring for an autumn wedding. Arizona also requires no blood test, as the Pima County clerk points out.</p>
${h.table(['State', 'License fee', 'Waiting period', 'Valid for'], rows, 'Arizona beside other states with no waiting period', ['l', 'r', 'l', 'l'])}
<p>Reading the table, Arizona's fee sits close to Nevada's, North Carolina's single statewide fee is lower, and Tennessee's resident range is higher before its course discount.</p>
<p>Nevada matches Arizona on both points, which makes the two states easy to compare for a destination wedding: see the ${h.a('ml-nv', 'Las Vegas marriage license page')}. Tennessee and North Carolina also impose no wait but give far less time to marry.</p>
<h2>Copies come from the clerk, not the state</h2>
<p>The Bureau of Vital Records of the Arizona Department of Health Services issues birth and death certificates, but it does not issue marriage records. Every certified copy is ordered from the clerk of the superior court of the county that issued the license. The calculator below shows where to order and what the state office can or cannot provide.</p>
<!--tool:mini:marrcopy|{"state":"AZ"}-->
<p>Remember that the license and the certificate are different papers: the ${h.a('marriage-license-vs-certificate', 'license and certificate page')} explains which one agencies ask for. With a certified copy, the ${h.a('name-change', 'name change checklist')} gives the order of the steps, and the ${h.a('marriage-copy', 'marriage certificate copies page')} covers the other states. For a civil ceremony at a courthouse, the ${h.a('courthouse-wedding', 'courthouse wedding page')} adds up the costs.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/arizona', nav: 'Licencia de matrimonio de Arizona', card: 'Tarifa del secretario del tribunal superior, sin espera ni análisis de sangre, un año de vigencia y la copia.',
    title: 'Licencia de matrimonio Arizona 2026: tarifas del secretario',
    description: 'Licencia de matrimonio en Arizona en 2026: tarifa del secretario del tribunal superior, sin espera ni análisis de sangre, un año de vigencia y la copia.',
    h1: 'Licencia de matrimonio en Arizona: secretario del tribunal superior, tarifa y un año',
    intro: 'En Arizona, la licencia y la copia certificada salen del secretario del tribunal superior (clerk of the superior court) de un condado. Lo que cobra el secretario, por qué la licencia dura tanto y cómo se compara con otros estados sin espera.',
    resume: (h) => {
      const r = h.ML('AZ');
      return `En Arizona, la licencia de matrimonio la emite el secretario del tribunal superior de cada condado, y el secretario fija la tarifa: las páginas leídas para este sitio van ${r.feeL}, con ${r.exampleL}, y la mayoría de los condados se sitúan en lo más alto de ese rango. Arizona no impone ninguna espera ni exige análisis de sangre, así que la licencia puede servir para una ceremonia el mismo día de su emisión. Una vez emitida, sigue siendo válida ${r.validL}, lo que permite solicitarla con mucha antelación en lugar de correr contra un plazo corto. Después de la ceremonia, la licencia firmada vuelve a la oficina del secretario que la emitió, donde se registra el matrimonio. Las copias certificadas del acta las vende ese mismo secretario del tribunal superior: la Oficina de Estadísticas Vitales del Departamento de Servicios de Salud de Arizona no emite registros de matrimonio, así que una pareja casada con una licencia del condado de Pima pide la copia al secretario del condado de Pima, y lo mismo en cualquier otro condado. Las tarifas y reglas se leyeron en las páginas de los condados el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('AZ');
      return [
        { q: '¿Qué oficina emite las licencias de matrimonio en Arizona?', a: `El secretario del tribunal superior de un condado, la oficina que también guarda los expedientes del tribunal. Cada secretario publica su tarifa; las páginas leídas para este sitio van ${r.feeL}, con ${r.exampleL}. Conviene revisar el horario y los documentos exigidos en la página del secretario del condado antes de ir.` },
        { q: '¿Hace falta un análisis de sangre o una espera en Arizona?', a: `Ninguna de las dos cosas. Arizona no impone espera ni análisis de sangre, como indica el secretario del condado de Pima. Por eso una pareja puede obtener la licencia y celebrar la ceremonia el mismo día, si hay un oficiante disponible. La licencia sigue vigente ${r.validL}, así que tampoco hay prisa por casarse.` },
        { q: '¿Qué pasa si no usamos la licencia de Arizona dentro del año?', a: `Vence cuando ha pasado ${r.validL} desde su emisión: la pareja debe solicitarla de nuevo y pagar la tarifa otra vez. Como la vigencia es larga, el riesgo habitual no es el vencimiento sino olvidar dónde se guardó la licencia, así que conviene archivarla con los documentos de la boda.` },
        { q: '¿Dónde se obtiene una copia certificada del acta de matrimonio de Arizona?', a: 'En el secretario del tribunal superior del condado que emitió la licencia, no en el estado. La Oficina de Estadísticas Vitales del Departamento de Servicios de Salud de Arizona no emite registros de matrimonio. Cada secretario fija su propia tarifa por copia y su forma de pedirla; solicite copias certificadas, que son las que aceptan los organismos para un cambio de apellido.' },
      ];
    },
    body: (h) => {
      const r = h.ML('AZ'), nv = h.ML('NV'), nc = h.ML('NC'), tn = h.ML('TN');
      const rows = [
        [h.name('AZ'), r.feeL, r.waitL, r.validL],
        [h.sl('NV', 'ml'), nv.feeL, nv.waitL, nv.validL],
        [h.sl('NC', 'ml'), nc.feeL, nc.waitL, nc.validL],
        [h.sl('TN', 'ml'), tn.feeL, tn.waitL, tn.validL],
      ];
      return `<h2>El secretario del tribunal superior</h2>
<p>Arizona canaliza las licencias de matrimonio a través de su sistema judicial. El secretario del tribunal superior de cada condado las emite y fija el precio, lo que explica la diferencia de ${r.feeL} leída para este sitio. La mayoría de los condados cobran la cifra más alta, ${r.exampleL}. El secretario es también la oficina que guarda el registro del matrimonio una vez celebrada la ceremonia, así que la pareja trata con una sola ventanilla desde la solicitud hasta la copia certificada.</p>
<p>Entre la tarifa de condado más baja y la más alta leídas para este sitio, la diferencia es de ${h.m((r.feeMax ?? 0) - (r.feeMin ?? 0))}. Como la copia se pide después al secretario que emitió la licencia, conviene hacer el trámite en una oficina a la que sea fácil volver.</p>
<h2>Un año para usarla, ningún día de espera</h2>
<p>Dos rasgos distinguen a Arizona de la mayoría de los estados: no hay espera y la licencia vale ${r.validL}. Arizona da un año entero, más que los demás estados sin espera de la tabla de abajo. Una pareja que vive en Phoenix puede hacer el trámite una tarde libre de primavera para una boda en otoño. Arizona tampoco exige análisis de sangre, como señala el secretario del condado de Pima.</p>
${h.table(['Estado', 'Tarifa de la licencia', 'Espera', 'Vigencia'], rows, 'Arizona junto a otros estados sin período de espera', ['l', 'r', 'l', 'l'])}
<p>Al leer la tabla, la tarifa de Arizona queda cerca de la de Nevada, la tarifa única de Carolina del Norte es más baja y el rango para residentes de Tennessee es más alto antes de su descuento por curso.</p>
<p>Nevada coincide con Arizona en los dos puntos, lo que facilita comparar ambos estados para una boda de destino: vea la ${h.a('ml-nv', 'página de la licencia de matrimonio de Las Vegas')}. Tennessee y Carolina del Norte tampoco imponen espera, pero dan mucho menos tiempo para casarse.</p>
<h2>Las copias las da el secretario, no el estado</h2>
<p>La Oficina de Estadísticas Vitales del Departamento de Servicios de Salud de Arizona emite actas de nacimiento y de defunción, pero no emite registros de matrimonio. Toda copia certificada se pide al secretario del tribunal superior del condado que emitió la licencia. La calculadora de abajo muestra dónde pedirla y lo que la oficina del estado puede o no puede entregar.</p>
<!--tool:mini:marrcopy|{"state":"AZ"}-->
<p>Recuerde que la licencia y el acta son documentos distintos: la ${h.a('marriage-license-vs-certificate', 'página sobre la licencia y el acta')} explica cuál piden los organismos. Con una copia certificada, la ${h.a('name-change', 'lista para el cambio de apellido')} da el orden de los pasos, y la ${h.a('marriage-copy', 'página de las copias del acta de matrimonio')} cubre los demás estados. Para una ceremonia civil en el juzgado, la ${h.a('courthouse-wedding', 'página de la boda civil')} suma los costos.</p>`;
    },
  },
});
