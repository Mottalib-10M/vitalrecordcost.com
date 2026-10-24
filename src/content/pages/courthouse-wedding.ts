import { definePage } from '../../lib/guide-types';
import { courtPlaces } from '../../lib/mini-specs';
import type { Helpers } from '../../lib/helpers';

const places = (h: Helpers) => courtPlaces(h.lang as 'en' | 'es');
const priced = (h: Helpers) => places(h).filter((p) => p.cer != null && p.lic != null);

export default definePage({
  id: 'courthouse-wedding', group: 'marriage', order: 65,
  tool: { kind: 'mini:courthouse', props: {} },
  mini: { kind: 'mini:mlwait', props: { state: 'NV' } },
  related: ['marriage-license', 'marriage-license-cost', 'ml-nv', 'ml-ca', 'marriage-copy', 'name-change'],
  sources: [],
  en: {
    slug: 'courthouse-wedding-cost', nav: 'Courthouse wedding cost', card: 'License plus civil ceremony in large counties: what a wedding at the clerk\'s office costs.',
    title: 'Courthouse Wedding Cost 2026: License and Ceremony Fees',
    description: 'Courthouse wedding cost in 2026: the marriage license plus the civil ceremony fee in large U.S. counties, how to book, who can attend and what to bring.',
    h1: 'Courthouse wedding cost: license plus ceremony',
    intro: 'Pick a county: the tool adds the license and the civil ceremony fee published by its clerk or court. Certified copies of the certificate come later.',
    resume: (h) => {
      const p = priced(h), tot = p.map((x) => (x.cer as number) + (x.lic as number));
      return `A courthouse wedding is a civil ceremony performed by a judge, a clerk or a deputy commissioner of civil marriages, usually at the county clerk's or recorder's office, sometimes at the courthouse itself. It is the least expensive way to marry legally: you pay the marriage license, then a ceremony fee set by the county, and later the certified copies of the marriage certificate. In the large counties read for this site that publish both figures, a license and ceremony together cost from ${h.m(Math.min(...tot))} to ${h.m(Math.max(...tot))}; some offices perform the ceremony for free for couples who bought their license there. Most offices require an appointment, limit the number of guests, and ask for one or two witnesses, who may have to be brought by the couple. The license must be valid on the day, so the state's waiting period and validity apply as for any wedding: in Nevada, for example, there is no wait, while in Texas the license can only be used ${h.ML("TX").waitL} after it was issued. Ceremony slots fill up around popular dates, so book as soon as the date is known, and check whether the office accepts cards or only exact cash for the ceremony fee.`;
    },
    faqs: (h) => {
      const p = priced(h), tot = p.map((x) => (x.cer as number) + (x.lic as number));
      return [
        { q: 'How much does a courthouse wedding cost?', a: `The marriage license plus the ceremony fee. In the large counties we read, the two together cost from ${h.m(Math.min(...tot))} to ${h.m(Math.max(...tot))}. Add certified copies of the marriage certificate afterwards, and possibly parking, photos or a small fee for witnesses provided by the office.` },
        { q: 'Do we need witnesses for a courthouse wedding?', a: 'Most states require one or two adult witnesses at the ceremony. Some clerk offices can provide a witness, sometimes for a fee; others ask the couple to bring them. A few states require no witness at all. The county page states the rule for its ceremonies.' },
        { q: 'Can we get the license and marry at the courthouse on the same day?', a: 'Yes in states with no waiting period, such as Nevada, California or Arizona, provided a ceremony slot is free. In states with a wait, such as Texas or Florida for residents without the course, the ceremony must be booked after the wait has passed.' },
        { q: 'What should we bring to a courthouse wedding?', a: 'The marriage license, valid photo IDs for both partners, the witnesses if the office does not provide them, the ceremony fee in an accepted form of payment, and the appointment confirmation. Rings and vows are optional; the legal words are said by the officiant.' },
      ];
    },
    body: (h) => {
      const rows = places(h).map((p) => [p.label, p.lic != null ? h.m(p.lic) : h.nc, p.cer != null ? (p.cer === 0 ? 'Free' : h.m(p.cer)) : h.nc, p.cer != null && p.lic != null ? h.m(p.cer + p.lic) : '–', p.url ? h.ext(p.url, 'official page') : '–']);
      return `<h2>License and ceremony in large counties</h2>
<p>Figures published by each county's clerk or court. “Not published” means the office does not state a ceremony fee online or does not perform ceremonies.</p>
${h.table(['County', 'License', 'Ceremony', 'Total', 'Source'], rows, undefined, ['l', 'r', 'r', 'r', 'l'])}
<h2>Booking, step by step</h2>
<ol><li>Buy the license from the office that will perform the ceremony, or any office of the state.</li><li>Book a ceremony slot online or by phone, often weeks ahead for Fridays and popular dates.</li><li>Check the waiting period and the license expiry against the date.</li><li>Arrive early with IDs, the license, witnesses and payment.</li><li>After the ceremony, order certified copies of the marriage certificate once it is recorded.</li></ol>
<!--tool:mini:mlwait|{"state":"NV"}-->
<h2>Beyond the courthouse</h2>
<p>In Las Vegas, the county runs a civil marriage office next to the license bureau: see the ${h.a('ml-nv', 'Las Vegas page')}. In California, couples can choose a public or a confidential license, which changes the witnesses: ${h.a('ml-ca', 'California marriage license')}. After the wedding, the ${h.a('name-change', 'name change checklist')} gives the order of the next steps.</p>`;
    },
  },
  es: {
    slug: 'costo-boda-civil-en-la-corte', nav: 'Costo de la boda civil', card: 'Licencia más ceremonia civil en condados grandes: lo que cuesta casarse en la oficina del secretario.',
    title: 'Boda civil en la corte 2026: costo de licencia y ceremonia',
    description: 'Costo de una boda civil en la corte en 2026: licencia más ceremonia civil en condados grandes de EE. UU., cómo reservar, quién puede asistir y qué llevar.',
    h1: 'Costo de la boda civil en la corte: licencia más ceremonia',
    intro: 'Elija un condado: la herramienta suma la licencia y la tarifa de la ceremonia civil que publica su secretario o tribunal. Las copias certificadas del acta vienen después.',
    resume: (h) => {
      const p = priced(h), tot = p.map((x) => (x.cer as number) + (x.lic as number));
      return `Una boda civil en la corte es una ceremonia oficiada por un juez, un secretario o un comisionado de matrimonios civiles, por lo general en la oficina del secretario o del registrador del condado y a veces en el propio juzgado. Es la forma más barata de casarse legalmente: se paga la licencia de matrimonio, luego una tarifa de ceremonia fijada por el condado y más tarde las copias certificadas del acta de matrimonio. En los condados grandes leídos para este sitio que publican las dos cifras, licencia y ceremonia juntas cuestan de ${h.m(Math.min(...tot))} a ${h.m(Math.max(...tot))}; algunas oficinas celebran la ceremonia gratis para las parejas que compraron allí su licencia. La mayoría de las oficinas exigen cita, limitan el número de invitados y piden uno o dos testigos, que a veces debe traer la pareja. La licencia debe estar vigente ese día, así que la espera y la vigencia del estado se aplican como en cualquier boda: en Nevada, por ejemplo, no hay espera, mientras que en Texas la licencia solo puede usarse ${h.ML("TX").waitL} después de emitida. Los turnos se llenan en las fechas populares, así que reserve en cuanto sepa la fecha y pregunte si la oficina acepta tarjeta o solo efectivo exacto para la ceremonia.`;
    },
    faqs: (h) => {
      const p = priced(h), tot = p.map((x) => (x.cer as number) + (x.lic as number));
      return [
        { q: '¿Cuánto cuesta una boda civil en la corte?', a: `La licencia de matrimonio más la tarifa de la ceremonia. En los condados grandes que leímos, las dos juntas cuestan de ${h.m(Math.min(...tot))} a ${h.m(Math.max(...tot))}. Sume después las copias certificadas del acta de matrimonio y, quizá, el estacionamiento, las fotos o una pequeña tarifa por los testigos que pone la oficina.` },
        { q: '¿Hacen falta testigos en una boda civil en la corte?', a: 'La mayoría de los estados exigen uno o dos testigos adultos en la ceremonia. Algunas oficinas pueden poner un testigo, a veces con costo; otras piden a la pareja que los traiga. Unos pocos estados no exigen ningún testigo. La página del condado indica la regla de sus ceremonias.' },
        { q: '¿Podemos sacar la licencia y casarnos en la corte el mismo día?', a: 'Sí en los estados sin espera, como Nevada, California o Arizona, si hay un turno libre. En los estados con espera, como Texas, o Florida para los residentes sin curso, la ceremonia debe reservarse para después de la espera. Confirme el turno antes de comprar la licencia.' },
        { q: '¿Qué hay que llevar a una boda civil en la corte?', a: 'La licencia de matrimonio, identificaciones con foto vigentes de los dos, los testigos si la oficina no los pone, la tarifa de la ceremonia en una forma de pago aceptada y la confirmación de la cita. Los anillos y los votos son opcionales; las palabras legales las dice el oficiante.' },
      ];
    },
    body: (h) => {
      const rows = places(h).map((p) => [p.label, p.lic != null ? h.m(p.lic) : h.nc, p.cer != null ? (p.cer === 0 ? 'Gratis' : h.m(p.cer)) : h.nc, p.cer != null && p.lic != null ? h.m(p.cer + p.lic) : '–', p.url ? h.ext(p.url, 'página oficial') : '–']);
      return `<h2>Licencia y ceremonia en condados grandes</h2>
<p>Cifras publicadas por el secretario o el tribunal de cada condado. «No publicado» significa que la oficina no indica en línea una tarifa de ceremonia o no celebra ceremonias.</p>
${h.table(['Condado', 'Licencia', 'Ceremonia', 'Total', 'Fuente'], rows, undefined, ['l', 'r', 'r', 'r', 'l'])}
<h2>Reservar, paso a paso</h2>
<ol><li>Compre la licencia en la oficina que celebrará la ceremonia, o en cualquier oficina del estado.</li><li>Reserve un turno de ceremonia en línea o por teléfono, a menudo con semanas de antelación para los viernes y las fechas populares.</li><li>Compare la espera y el vencimiento de la licencia con la fecha.</li><li>Llegue temprano con las identificaciones, la licencia, los testigos y el pago.</li><li>Tras la ceremonia, pida copias certificadas del acta de matrimonio cuando se haya registrado.</li></ol>
<!--tool:mini:mlwait|{"state":"NV"}-->
<h2>Más allá de la corte</h2>
<p>En Las Vegas, el condado tiene una oficina de matrimonios civiles junto a la oficina de licencias: vea la ${h.a('ml-nv', 'página de Las Vegas')}. En California, las parejas pueden elegir una licencia pública o confidencial, lo que cambia los testigos: ${h.a('ml-ca', 'licencia de matrimonio de California')}. Después de la boda, la ${h.a('name-change', 'lista para el cambio de apellido')} da el orden de los pasos siguientes.</p>`;
    },
  },
});
