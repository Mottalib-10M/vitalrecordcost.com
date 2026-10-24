import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-fl', group: 'states', order: 202, state: 'FL',
  tool: { kind: 'marriage', props: { state: 'FL' } },
  mini: { kind: 'mini:mlwait', props: { state: 'FL' } },
  related: ['marriage-license', 'marriage-license-waiting', 'marriage-copy', 'birth-fl', 'name-change', 'ml-ga'],
  sources: [],
  en: {
    slug: 'marriage-license/florida', nav: 'Florida marriage license', card: 'A fee fixed by state law, the wait for residents, the premarital course and 60 days to marry.',
    title: 'Marriage License Florida 2026: Fee, Course and Residents',
    description: 'Florida marriage license in 2026: one fee set by state law, the wait that applies to residents only, the premarital course discount and the copy afterward.',
    h1: 'Florida marriage license: fee, residents, course and copies',
    intro: 'Florida treats residents and visitors differently, and the premarital course changes both the price and the date. What the clerk of court charges and what happens to the license after the wedding.',
    resume: (h) => {
      const r = h.ML('FL');
      const low = h.m((r.feeState ?? r.feeMin ?? 0) - r.courseDiscount);
      return `A Florida marriage license is sold by the clerk of court of each county, but the price is not a local decision: section 741.02 of the Florida Statutes fixes it, so every clerk read for this site asks ${r.feeL}. Couples who complete a premarital preparation course of ${r.courseHours} hours and hand the provider's certificate to the clerk pay ${r.discL} less, ${low} in all, and the course also lifts the waiting period. That wait concerns Florida residents only: without the course, they must let ${r.waitL} pass after the license is issued before the ceremony, while a couple in which neither partner lives in Florida can marry the same day. The license is valid for ${r.validL}; an unused license then lapses and a new application is needed. After the wedding, the signed license goes back to the clerk who issued it, who files and records it, then forwards it to the state Bureau of Vital Statistics, which can also sell certified copies once the record reaches it. Fees and rules were read on the clerks' pages on ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('FL'), t = h.J('FL');
      const low = h.m((r.feeState ?? r.feeMin ?? 0) - r.courseDiscount);
      return [
        { q: 'Do visitors from another state have to wait to marry in Florida?', a: `No. The waiting period in Florida law applies to residents of the state. When neither partner lives in Florida, the clerk issues a license that can be used the same day, which keeps a beach or resort wedding simple to schedule within the ${r.validL} of validity. Resident couples who skip the premarital course wait ${r.waitL}.` },
        { q: 'Why does a Florida license cost the same in Miami and Jacksonville?', a: `Because the amount is fixed by state statute rather than by each county. The clerks' pages read for this site, Duval and Miami-Dade among them, both show ${r.feeL}. What differs from one office to the next is the appointment system and the opening hours, so it is worth checking the county page before going.` },
        { q: 'What does the Florida premarital course save?', a: `${r.discL} on the license, bringing it to ${low}, and for residents it also removes the ${r.waitL} wait. The course lasts ${r.courseHours} hours and ends with a certificate that the couple presents to the clerk when applying. Without that certificate, the license costs the full ${r.feeL}.` },
        { q: 'Where do we get a certified copy of a Florida marriage record?', a: `Right after the wedding, from the clerk of court of the county that issued the license, which is the place to go when proof is needed quickly. Once the clerk has recorded the license and sent it on, a transfer the state puts at about 60 days, the Bureau of Vital Statistics can issue copies too, at ${h.m(t.marr.first)} for the first and ${h.m(t.marr.additional)} for each extra one.` },
      ];
    },
    body: (h) => {
      const r = h.ML('FL'), t = h.J('FL');
      const low = h.m((r.feeState ?? r.feeMin ?? 0) - r.courseDiscount);
      const rows = [
        ['Florida resident, no course certificate', r.waitL, r.feeL],
        ['Florida resident with a course certificate', 'None', low],
        ['Neither partner lives in Florida', 'None', r.feeL],
      ];
      return `<h2>Residents and visitors: who waits</h2>
<p>Florida sorts couples by residence, not by county. The clerk asks where each applicant lives, and the answer decides whether the license can be used at once. The table sums up the three situations described on the clerks' pages.</p>
${h.table(['Situation', 'Waiting period', 'License fee'], rows, undefined, ['l', 'l', 'r'])}
<p>The ${r.waitL} are counted from the issue of the license. A resident couple that applies on a Tuesday without a course certificate plans the ceremony for Friday or later. The ${h.a('marriage-license-waiting', 'waiting periods page')} sets Florida beside the states that impose none.</p>
<h2>The premarital course in practice</h2>
<p>The course lasts ${r.courseHours} hours and is taken before the application, with a provider chosen by the couple. The certificate it produces is shown to the clerk on the day the couple applies. For a resident couple it brings two gains at once: ${r.discL} off the price and no waiting period, which makes it worth booking a few weeks before the wedding.</p>
<h2>A fee written into state law</h2>
<p>Most states let counties set their own license price. Florida does not: the amount sits in section 741.02 of the Florida Statutes, so the ${r.feeL} asked in Jacksonville is the same in every other county. Comparing clerks on price is therefore pointless; what changes is how appointments are booked and when the office is open. The mini calculator below shows the figure with and without the course, and the ${h.a('marriage-license-cost', 'cost comparison by state')} places it among the others.</p>
<!--tool:mini:mlcost|{"state":"FL"}-->
<h2>From the clerk's file to the state copy</h2>
<p>Once the ceremony is over, the officiant completes the license and it returns to the clerk of court of the issuing county, who files and records it. The clerk then forwards it to the Bureau of Vital Statistics; the state says this transfer takes about 60 days. During that period, a certified copy comes only from the county clerk. Afterward the state can issue it as well, at ${h.m(t.marr.first)} for the first copy and ${h.m(t.marr.additional)} for each additional one: see ${h.a('marriage-copy', 'marriage certificate copies')}. That copy opens the ${h.a('name-change', 'name change steps')}, beginning with Social Security. A partner born in Florida who needs a birth certificate for another state's clerk pays ${t.bFirst}: ${h.a('birth-fl', 'Florida birth certificate')}. For a neighboring state where a course also cuts the fee, read the ${h.a('ml-ga', 'Georgia marriage license page')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/florida', nav: 'Licencia de matrimonio de Florida', card: 'Tarifa fijada por ley estatal, espera para residentes, curso prematrimonial y 60 días para casarse.',
    title: 'Licencia de matrimonio Florida 2026: tarifa, curso, espera',
    description: 'Licencia de matrimonio en Florida en 2026: tarifa única fijada por ley, espera solo para residentes, descuento por curso prematrimonial y la copia del acta.',
    h1: 'Licencia de matrimonio en Florida: tarifa, residentes, curso y copias',
    intro: 'Florida trata de forma distinta a residentes y visitantes, y el curso prematrimonial cambia el precio y la fecha. Lo que cobra el secretario del tribunal y qué pasa con la licencia después de la boda.',
    resume: (h) => {
      const r = h.ML('FL');
      const low = h.m((r.feeState ?? r.feeMin ?? 0) - r.courseDiscount);
      return `La licencia de matrimonio de Florida la vende el secretario del tribunal de cada condado, pero el precio no es una decisión local: la sección 741.02 de los Estatutos de Florida lo fija, así que todos los secretarios consultados para este sitio piden ${r.feeL}. Las parejas que completan un curso de preparación prematrimonial de ${r.courseHours} horas y entregan al secretario el certificado del proveedor pagan ${r.discL} menos, ${low} en total, y el curso también elimina el período de espera. Esa espera solo afecta a los residentes de Florida: sin el curso, deben dejar pasar ${r.waitL} desde la emisión de la licencia antes de la ceremonia, mientras que una pareja en la que ninguno de los dos vive en Florida puede casarse el mismo día. La licencia vale ${r.validL}. Después de la boda, la licencia firmada vuelve al secretario que la emitió, que la archiva y la registra, y luego la remite a la Oficina de Estadísticas Vitales del estado, que también puede vender copias certificadas una vez que recibe el registro. Las tarifas y reglas se leyeron en las páginas de los secretarios el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('FL'), t = h.J('FL');
      const low = h.m((r.feeState ?? r.feeMin ?? 0) - r.courseDiscount);
      return [
        { q: '¿Los visitantes de otro estado tienen que esperar para casarse en Florida?', a: `No. El período de espera de la ley de Florida se aplica a los residentes del estado. Cuando ninguno de los dos vive en Florida, el secretario emite una licencia que puede usarse el mismo día, lo que facilita organizar una boda en la playa o en un hotel dentro de los ${r.validL} de vigencia. Las parejas residentes que no hacen el curso esperan ${r.waitL}.` },
        { q: '¿Por qué la licencia cuesta lo mismo en Miami y en Jacksonville?', a: `Porque el monto lo fija una ley estatal y no cada condado. Las páginas de los secretarios leídas para este sitio, entre ellas las de Duval y Miami-Dade, muestran ${r.feeL}. Lo que cambia de una oficina a otra es el sistema de citas y el horario de atención, así que conviene revisar la página del condado antes de ir.` },
        { q: '¿Cuánto se ahorra con el curso prematrimonial en Florida?', a: `${r.discL} sobre la licencia, que queda en ${low}, y para los residentes también elimina la espera de ${r.waitL}. El curso dura ${r.courseHours} horas y termina con un certificado que la pareja presenta al secretario al hacer la solicitud. Sin ese certificado, la licencia cuesta los ${r.feeL} completos.` },
        { q: '¿Dónde se obtiene una copia certificada del acta de matrimonio de Florida?', a: `Justo después de la boda, con el secretario del tribunal del condado que emitió la licencia, que es la oficina indicada cuando se necesita la prueba con rapidez. Cuando el secretario ha registrado la licencia y la ha enviado, un traslado que el estado calcula en unos 60 días, la Oficina de Estadísticas Vitales también emite copias, a ${h.m(t.marr.first)} la primera y ${h.m(t.marr.additional)} cada copia adicional.` },
      ];
    },
    body: (h) => {
      const r = h.ML('FL'), t = h.J('FL');
      const low = h.m((r.feeState ?? r.feeMin ?? 0) - r.courseDiscount);
      const rows = [
        ['Residente de Florida, sin certificado del curso', r.waitL, r.feeL],
        ['Residente de Florida con certificado del curso', 'Ninguna', low],
        ['Ninguno de los dos vive en Florida', 'Ninguna', r.feeL],
      ];
      return `<h2>Residentes y visitantes: quién espera</h2>
<p>Florida clasifica a las parejas según su residencia, no según el condado. El secretario pregunta dónde vive cada solicitante, y la respuesta decide si la licencia puede usarse de inmediato. La tabla resume las tres situaciones que describen las páginas de los secretarios.</p>
${h.table(['Situación', 'Espera', 'Tarifa de la licencia'], rows, undefined, ['l', 'l', 'r'])}
<p>Los ${r.waitL} se cuentan desde la emisión de la licencia. Una pareja residente que la solicita un martes sin certificado del curso debe fijar la ceremonia para el viernes o más tarde. La ${h.a('marriage-license-waiting', 'página de los períodos de espera')} compara Florida con los estados que no imponen ninguno.</p>
<h2>El curso prematrimonial en la práctica</h2>
<p>El curso dura ${r.courseHours} horas y se hace antes de la solicitud, con un proveedor elegido por la pareja. El certificado que entrega se muestra al secretario el día en que la pareja presenta la solicitud. Para una pareja residente aporta dos ventajas a la vez: ${r.discL} menos en el precio y ninguna espera, por lo que conviene reservarlo unas semanas antes de la boda.</p>
<h2>Una tarifa escrita en la ley del estado</h2>
<p>La mayoría de los estados dejan que cada condado fije el precio de la licencia. Florida no: el monto figura en la sección 741.02 de los Estatutos de Florida, así que los ${r.feeL} que se piden en Jacksonville son los mismos en cualquier otro condado. Comparar secretarios por precio no tiene sentido; lo que cambia es la forma de reservar la cita y el horario de la oficina. La minicalculadora de abajo muestra la cifra con y sin el curso, y la ${h.a('marriage-license-cost', 'comparación de costos por estado')} la sitúa entre las demás.</p>
<!--tool:mini:mlcost|{"state":"FL"}-->
<h2>Del archivo del secretario a la copia del estado</h2>
<p>Terminada la ceremonia, el oficiante completa la licencia y esta vuelve al secretario del tribunal del condado emisor, que la archiva y la registra. Después, el secretario la remite a la Oficina de Estadísticas Vitales; el estado indica que ese traslado tarda unos 60 días. Durante ese tiempo, la copia certificada solo la entrega el secretario del condado. Más adelante también la emite el estado, a ${h.m(t.marr.first)} la primera copia y ${h.m(t.marr.additional)} cada copia adicional: vea ${h.a('marriage-copy', 'copias del acta de matrimonio')}. Esa copia abre los ${h.a('name-change', 'trámites del cambio de apellido')}, empezando por el Seguro Social. Un contrayente nacido en Florida que necesita su acta de nacimiento para el secretario de otro estado paga ${t.bFirst}: ${h.a('birth-fl', 'acta de nacimiento de Florida')}. Para un estado vecino donde un curso también rebaja la tarifa, lea la ${h.a('ml-ga', 'página de la licencia de matrimonio de Georgia')}.</p>`;
    },
  },
});
