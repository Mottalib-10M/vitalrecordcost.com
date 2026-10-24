import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-tx', group: 'states', order: 200, state: 'TX',
  tool: { kind: 'marriage', props: { state: 'TX' } },
  mini: { kind: 'mini:mlcost', props: { state: 'TX', course: 1 } },
  related: ['marriage-license', 'marriage-license-cost', 'marriage-license-waiting', 'birth-tx', 'name-change', 'common-law'],
  sources: [],
  en: {
    slug: 'marriage-license/texas', nav: 'Texas marriage license', card: 'County fee, the 72-hour wait, Twogether in Texas and the 90 days of validity.',
    title: 'Marriage License Texas 2026: County Fee, 72 Hours, Course',
    description: 'Texas marriage license in 2026: the county clerk fee, the 72-hour wait that the Twogether in Texas course removes with a discount, and 90 days of validity.',
    h1: 'Texas marriage license: fee, waiting period and expiry',
    intro: 'What the county clerk charges, the day the ceremony may take place, the last day the license is valid, and what the premarital course saves.',
    resume: (h) => {
      const r = h.ML('TX');
      return `A Texas marriage license is bought from a county clerk, and each county sets its own price: the clerks' pages read for this site ask ${r.feeL} (${r.exampleL}). Couples who complete the Twogether in Texas premarital course, at least ${r.courseHours} hours with a registered provider, pay ${r.discL} less and skip the waiting period. Without the course the license cannot be used until ${r.waitL} have passed since it was issued, so a Friday license allows a Monday wedding at the earliest. The license stays valid for ${r.validL} after issue; after that it expires and a new one must be bought. Active-duty military members are exempt from the wait. Both partners apply together in person at the clerk's office with a photo ID, and the license can be used anywhere in Texas, not only in the county that sold it. After the ceremony, the officiant returns the signed license to the clerk who issued it, and that clerk records it and sells the certified copies.`;
    },
    faqs: (h) => {
      const r = h.ML('TX');
      return [
        { q: 'How much is a marriage license in Texas?', a: `Each county clerk sets the fee; the pages we read range ${r.feeL}, for example ${r.exampleL}. The Twogether in Texas certificate lowers it by ${r.discL}. Clerks accept cash and cards, sometimes with a card fee, so check the county page or call before you go.` },
        { q: 'Can we get married the same day in Texas?', a: `Not without an exemption. The ceremony may take place only after ${r.waitL} from the time the license was issued. The wait does not apply to couples who completed Twogether in Texas, to active-duty military members, or when a judge waives it.` },
        { q: 'How long is a Texas marriage license good for?', a: `${r.validL} from the day it is issued. If the ceremony has not taken place by then, the license expires and the fee is not refunded; you must apply again. The officiant then has a short time to return the signed license to the county clerk.` },
        { q: 'What does the Twogether in Texas course involve?', a: `At least ${r.courseHours} hours of premarital education with a provider registered with the state, in person or online, covering communication and conflict resolution. The provider gives a certificate that you present to the clerk within a year: it removes the waiting period and the discount applies to the license fee.` },
      ];
    },
    body: (h) => {
      const r = h.ML('TX'), t = h.J('TX');
      return `<h2>Choosing the county</h2>
<p>Any Texas county clerk can issue the license, whatever the county of residence or of the ceremony, so couples can pick the closest office or the one with online pre-applications. Prices differ because each commissioners court sets the local share: the examples read for this site run ${r.feeL}. The fee field of the calculator takes your county's figure.</p>
<h2>What to bring</h2>
<p>Both applicants appear in person with a valid government photo ID (driver's license, passport, military ID) and their Social Security numbers if they have one. Someone divorced within the last 30 days needs a court waiver, because Texas law sets a waiting time after a divorce decree before remarriage. Applicants under 18 need a court order removing the disabilities of minority; parental consent alone is no longer enough.</p>
<h2>The 72 hours, counted correctly</h2>
<p>The clock starts at the minute the license is issued, not at midnight. A license bought at 2 p.m. on a Tuesday can be used from 2 p.m. on Friday. The calculator counts in whole days, which gives the first calendar day the ceremony is possible; plan the ceremony after the hour of issue that day.</p>
<!--tool:mini:mlwait|{"state":"TX"}-->
<h2>After the wedding</h2>
<p>The officiant signs the license and returns it to the clerk within 30 days. The clerk records it and becomes the office that sells certified copies of the marriage record. The state's Vital Statistics Section keeps an index and issues verification letters, not certified copies: see ${h.a('marriage-copy', 'marriage certificate copies')}. To change a name, start with Social Security, then the driver's license: ${h.a('name-change', 'the ordered checklist')}.</p>
<h2>Common-law marriage in Texas</h2>
<p>Texas also recognizes informal marriage, often called common-law marriage, when a couple agrees to be married, lives together in Texas and presents themselves to others as married. It can be recorded with a declaration of informal marriage at the county clerk. The ${h.a('common-law', 'common-law marriage page')} compares Texas with the other states. A Texas birth certificate, often requested by clerks of other states, costs ${t.bFirst}: ${h.a('birth-tx', 'Texas birth certificate')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/texas', nav: 'Licencia de matrimonio de Texas', card: 'Tarifa del condado, espera de 72 horas, Twogether in Texas y 90 días de vigencia.',
    title: 'Licencia de matrimonio Texas 2026: tarifa, 72 horas, curso',
    description: 'Licencia de matrimonio en Texas en 2026: tarifa del condado, espera de 72 horas que el curso Twogether in Texas elimina con descuento, y 90 días de vigencia.',
    h1: 'Licencia de matrimonio en Texas: tarifa, espera y vencimiento',
    intro: 'Lo que cobra el secretario del condado, el día en que puede celebrarse la boda, el último día de vigencia y lo que ahorra el curso prematrimonial.',
    resume: (h) => {
      const r = h.ML('TX');
      return `La licencia de matrimonio de Texas se compra al secretario de un condado, y cada condado fija su precio: las páginas de los secretarios leídas para este sitio piden ${r.feeL} (${r.exampleL}). Las parejas que completan el curso prematrimonial Twogether in Texas, de al menos ${r.courseHours} horas con un proveedor registrado, pagan ${r.discL} menos y se saltan la espera. Sin el curso, la licencia no puede usarse hasta que pasen ${r.waitL} desde su emisión, así que una licencia del viernes permite casarse el lunes como pronto. La licencia vale ${r.validL} desde su emisión; después vence y hay que comprar otra. Los militares en servicio activo están exentos de la espera. Los dos solicitantes acuden juntos a la oficina del secretario con identificación con foto, y la licencia sirve en todo Texas, no solo en el condado que la vendió. Tras la ceremonia, el oficiante devuelve la licencia firmada al secretario que la emitió, que la registra y vende las copias certificadas.`;
    },
    faqs: (h) => {
      const r = h.ML('TX');
      return [
        { q: '¿Cuánto cuesta una licencia de matrimonio en Texas?', a: `Cada secretario de condado fija la tarifa; las páginas que leímos van ${r.feeL}, por ejemplo ${r.exampleL}. El certificado de Twogether in Texas la rebaja en ${r.discL}. Los secretarios aceptan efectivo y tarjeta, a veces con recargo, así que revise la página del condado o llame antes de ir.` },
        { q: '¿Podemos casarnos el mismo día en Texas?', a: `No sin una exención. La ceremonia solo puede celebrarse cuando pasan ${r.waitL} desde la emisión de la licencia. La espera no se aplica a las parejas que completaron Twogether in Texas, a los militares en servicio activo ni cuando un juez la dispensa.` },
        { q: '¿Cuánto tiempo vale la licencia de matrimonio de Texas?', a: `${r.validL} desde el día de su emisión. Si la ceremonia no se ha celebrado para entonces, la licencia vence y la tarifa no se devuelve; hay que solicitarla de nuevo. Después, el oficiante tiene poco tiempo para devolver la licencia firmada al secretario del condado.` },
        { q: '¿En qué consiste el curso Twogether in Texas?', a: `Al menos ${r.courseHours} horas de educación prematrimonial con un proveedor registrado ante el estado, en persona o en línea, sobre comunicación y manejo de conflictos. El proveedor entrega un certificado que se presenta al secretario dentro del año: elimina la espera y aplica el descuento a la tarifa de la licencia.` },
      ];
    },
    body: (h) => {
      const r = h.ML('TX'), t = h.J('TX');
      return `<h2>Elegir el condado</h2>
<p>Cualquier secretario de condado de Texas puede emitir la licencia, sea cual sea el condado de residencia o de la ceremonia, así que las parejas pueden elegir la oficina más cercana o la que acepta solicitudes previas en línea. Los precios cambian porque cada tribunal de comisionados fija la parte local: los ejemplos leídos para este sitio van ${r.feeL}. El campo de tarifa de la calculadora acepta la cifra de su condado.</p>
<h2>Qué llevar</h2>
<p>Los dos solicitantes se presentan en persona con identificación oficial con foto vigente (licencia de manejar, pasaporte, identificación militar) y su número de Seguro Social si lo tienen. Quien se divorció en los últimos 30 días necesita una dispensa judicial, porque la ley de Texas fija una espera tras la sentencia de divorcio antes de volver a casarse. Los menores de 18 años necesitan una orden judicial que les quite las restricciones de la minoría de edad; el permiso de los padres ya no basta.</p>
<h2>Las 72 horas, bien contadas</h2>
<p>El reloj empieza en el minuto en que se emite la licencia, no a medianoche. Una licencia comprada el martes a las 2 p. m. puede usarse desde el viernes a las 2 p. m. La calculadora cuenta en días enteros, lo que da el primer día del calendario en que la ceremonia es posible; ese día, programe la boda después de la hora de emisión.</p>
<!--tool:mini:mlwait|{"state":"TX"}-->
<h2>Después de la boda</h2>
<p>El oficiante firma la licencia y la devuelve al secretario en un plazo de 30 días. El secretario la registra y pasa a ser la oficina que vende las copias certificadas del acta de matrimonio. La Sección de Estadísticas Vitales del estado guarda un índice y emite cartas de verificación, no copias certificadas: vea ${h.a('marriage-copy', 'copias del acta de matrimonio')}. Para cambiar de apellido, empiece por el Seguro Social y siga con la licencia de manejar: ${h.a('name-change', 'la lista ordenada')}.</p>
<h2>Matrimonio de hecho en Texas</h2>
<p>Texas reconoce además el matrimonio informal, llamado a menudo matrimonio de hecho o «common-law», cuando la pareja acuerda estar casada, vive junta en Texas y se presenta ante otros como casada. Puede registrarse con una declaración de matrimonio informal ante el secretario del condado. La ${h.a('common-law', 'página del matrimonio de hecho')} compara Texas con los demás estados. El acta de nacimiento de Texas, que suelen pedir los secretarios de otros estados, cuesta ${t.bFirst}: ${h.a('birth-tx', 'acta de nacimiento de Texas')}.</p>`;
    },
  },
});
