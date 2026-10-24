import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-ny', group: 'states', order: 207, state: 'NY',
  tool: { kind: 'marriage', props: { state: 'NY' } },
  mini: { kind: 'mini:vsc', props: { state: 'NY' } },
  related: ['marriage-license', 'marriage-license-waiting', 'marriage-copy', 'birth-ny', 'marriage-license-vs-certificate', 'courthouse-wedding'],
  sources: [],
  en: {
    slug: 'marriage-license/new-york', nav: 'New York marriage license', card: 'Town or city clerk fee, the 24-hour wait and its waiver, 60 days of validity and the separate NYC office.',
    title: 'Marriage License New York 2026: Clerk Fee, Wait and Waiver',
    description: 'New York marriage license in 2026: the town or city clerk fee, the 24-hour wait a judge can waive, 60 days of validity and the separate New York City office.',
    h1: 'New York marriage license: town clerk fee, 24-hour wait and NYC',
    intro: 'New York State splits marriage licenses between many local clerks and one separate office for the five boroughs. What the state fee covers, how the wait is counted and where the certified copy comes from.',
    resume: (h) => {
      const r = h.ML('NY'), t = h.J('NY');
      return `Outside New York City, a New York State marriage license is bought from a town or city clerk, and its price is set by state law at ${r.feeL}. The ceremony cannot take place until ${r.waitL} have passed since the license was issued; a judge can waive that wait by court order. The license is then valid for ${r.validL}, or 180 days for members of the armed forces. Inside the five boroughs, licenses are handled by a different office, the Office of the City Clerk of New York City, which runs its own fees and appointments, and the marriages it records stay out of the state health department's files. After a ceremony elsewhere in the state, the signed license goes back to the clerk who issued it, and certified copies can be ordered from that town or city clerk or from the New York State Department of Health, which charges ${h.m(t.marr.first)} per copy by mail; online orders cost more because a vendor fee is added. Couples married in Manhattan, Brooklyn, Queens, the Bronx or Staten Island order their copies from the City Clerk instead. Data read on ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('NY'), t = h.J('NY');
      return [
        { q: 'Can the 24-hour wait for a New York license be skipped?', a: `Only with a court order. The rule sets ${r.waitL} between the issue of the license and the ceremony. A judge can waive it by order when the timing does not work; without a waiver, plan the ceremony for the next day or later.` },
        { q: 'Why does New York City have its own marriage license office?', a: 'Because the five boroughs do not go through the town and city clerks of the rest of the state. Couples marrying there deal with the Office of the City Clerk, which sets its own procedures and keeps its own marriage records; the state health department does not hold New York City marriages. The state fee shown on this page applies outside the city.' },
        { q: 'How long is a New York State marriage license valid?', a: `${r.validL} from the day it is issued, which leaves about two months to hold the ceremony after the ${r.waitL} have passed. Members of the armed forces have 180 days. Once the license expires, a new application and a new fee are needed, so apply close to the wedding date.` },
        { q: 'Where do we order a certified copy of a New York marriage record?', a: `From the town or city clerk who issued the license, or from the New York State Department of Health, which charges ${h.m(t.marr.first)} per copy by mail; ordering online costs more, with a vendor fee on top. Marriages performed in New York City are not in the state files: request those copies from the City Clerk.` },
      ];
    },
    body: (h) => {
      const r = h.ML('NY'), t = h.J('NY');
      const rows = [
        ['Anywhere in New York State outside the five boroughs', 'Town or city clerk', r.feeL],
        ['Manhattan, Brooklyn, Queens, the Bronx, Staten Island', 'Office of the City Clerk of New York City', 'Set by the City Clerk'],
      ];
      return `<h2>Town clerk, city clerk or City Clerk</h2>
<p>In New York the word "clerk" can point to two very different systems. Across the state, each town and city has a clerk who sells marriage licenses at the state price. New York City, by contrast, has a single Office of the City Clerk with its own fees, booking system and records. The table shows which one a couple deals with.</p>
${h.table(['Where the license is bought', 'Issuing office', 'License fee'], rows, undefined, ['l', 'l', 'r'])}
<p>This site does not show a New York City fee because none was in the data read; the City Clerk's own page gives it.</p>
<h2>The 24 hours and the waiver</h2>
<p>New York requires ${r.waitL} between the moment the license is issued and the ceremony. A license collected at 3 p.m. on a Thursday can be used from 3 p.m. on Friday. When that timing does not work, a judge can grant a waiver by court order, which lets the ceremony take place sooner. The tool below shows the wait and the validity together; the ${h.a('marriage-license-waiting', 'waiting periods page')} lists the states with no wait at all.</p>
<!--tool:mini:mlwait|{"state":"NY"}-->
<h2>${r.validL}, or longer for the military</h2>
<p>The license lasts ${r.validL}. For members of the armed forces, the validity extends to 180 days, so a service member whose leave dates move has more room. Couples planning a ceremony at a city hall can compare total costs on the ${h.a('courthouse-wedding', 'courthouse wedding page')}.</p>
<h2>After the ceremony: two record systems</h2>
<p>Outside New York City, the officiant returns the signed license to the clerk who issued it. That clerk can sell certified copies, and the New York State Department of Health can too, at ${h.m(t.marr.first)} per copy by mail. Inside the city, the marriage is recorded by the City Clerk alone, and the state cannot supply a copy. The certificate is not the same document as the license; the ${h.a('marriage-license-vs-certificate', 'license and certificate page')} explains which one an agency wants, and the ${h.a('marriage-copy', 'marriage certificate copies page')} compares the states. A partner born in New York State who needs a birth certificate pays ${t.bFirst} to the state office: ${h.a('birth-ny', 'New York birth certificate')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/nueva-york', nav: 'Licencia de matrimonio de Nueva York', card: 'Tarifa del secretario municipal, espera de 24 horas y su dispensa, 60 días de vigencia y la oficina aparte de NYC.',
    title: 'Licencia de matrimonio Nueva York 2026: tarifa y dispensa',
    description: 'Licencia de matrimonio en Nueva York en 2026: tarifa del secretario municipal, espera de 24 horas que un juez puede dispensar, 60 días y la oficina de NYC.',
    h1: 'Licencia de matrimonio en Nueva York: tarifa municipal, 24 horas y NYC',
    intro: 'El estado de Nueva York reparte las licencias de matrimonio entre muchos secretarios locales y una oficina aparte para los cinco distritos de la ciudad. Lo que cubre la tarifa estatal, cómo se cuenta la espera y de dónde sale la copia certificada.',
    resume: (h) => {
      const r = h.ML('NY'), t = h.J('NY');
      return `Fuera de la ciudad de Nueva York, la licencia de matrimonio del estado de Nueva York se compra al secretario de un pueblo o de una ciudad, y su precio lo fija la ley estatal en ${r.feeL}. La ceremonia no puede celebrarse hasta que pasen ${r.waitL} desde la emisión de la licencia; un juez puede dispensar esa espera mediante una orden judicial. Después, la licencia vale ${r.validL}, o 180 días para los miembros de las fuerzas armadas. Dentro de los cinco distritos, las licencias las gestiona otra oficina, la Oficina del Secretario Municipal de la Ciudad de Nueva York, que tiene sus propias tarifas y citas, y los matrimonios que registra no figuran en los archivos del departamento de salud del estado. Tras una ceremonia en el resto del estado, la licencia firmada vuelve al secretario que la emitió, y las copias certificadas pueden pedirse a ese secretario o al Departamento de Salud del Estado de Nueva York, que cobra ${h.m(t.marr.first)} por copia por correo. Las parejas casadas en Manhattan, Brooklyn, Queens, el Bronx o Staten Island piden sus copias a la oficina del City Clerk. Datos leídos el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('NY'), t = h.J('NY');
      return [
        { q: '¿Se puede evitar la espera de 24 horas de la licencia de Nueva York?', a: `Solo con una orden judicial. La regla fija ${r.waitL} entre la emisión de la licencia y la ceremonia. Un juez puede dispensarla mediante una orden cuando el calendario no lo permite; sin dispensa, fije la ceremonia para el día siguiente o más tarde.` },
        { q: '¿Por qué la ciudad de Nueva York tiene su propia oficina de licencias de matrimonio?', a: 'Porque los cinco distritos no pasan por los secretarios de pueblos y ciudades del resto del estado. Las parejas que se casan allí tratan con la Oficina del Secretario Municipal (City Clerk), que fija sus propios procedimientos y guarda sus propios registros de matrimonio; el departamento de salud del estado no conserva los matrimonios de la ciudad de Nueva York. La tarifa estatal de esta página se aplica fuera de la ciudad.' },
        { q: '¿Cuánto tiempo vale una licencia de matrimonio del estado de Nueva York?', a: `${r.validL} desde el día de su emisión, lo que deja unos dos meses para celebrar la ceremonia una vez pasadas las ${r.waitL}. Los miembros de las fuerzas armadas disponen de 180 días. Cuando la licencia vence, hacen falta una nueva solicitud y una nueva tarifa, así que conviene solicitarla cerca de la fecha de la boda.` },
        { q: '¿Dónde se pide una copia certificada del acta de matrimonio de Nueva York?', a: `Al secretario del pueblo o de la ciudad que emitió la licencia, o al Departamento de Salud del Estado de Nueva York, que cobra ${h.m(t.marr.first)} por copia por correo; el pedido en línea cuesta más, con la tarifa de un proveedor encima. Los matrimonios celebrados en la ciudad de Nueva York no están en los archivos del estado: esas copias se piden al City Clerk.` },
      ];
    },
    body: (h) => {
      const r = h.ML('NY'), t = h.J('NY');
      const rows = [
        ['Cualquier lugar del estado fuera de los cinco distritos', 'Secretario del pueblo o de la ciudad', r.feeL],
        ['Manhattan, Brooklyn, Queens, el Bronx, Staten Island', 'Oficina del Secretario Municipal de la Ciudad de Nueva York', 'La fija el City Clerk'],
      ];
      return `<h2>Secretario del pueblo, de la ciudad o City Clerk</h2>
<p>En Nueva York la palabra «secretario» puede remitir a dos sistemas muy distintos. En todo el estado, cada pueblo y cada ciudad tiene un secretario que vende licencias de matrimonio al precio estatal. La ciudad de Nueva York, en cambio, tiene una sola Oficina del Secretario Municipal, con sus propias tarifas, su sistema de citas y sus registros. La tabla muestra con cuál trata cada pareja.</p>
${h.table(['Dónde se compra la licencia', 'Oficina emisora', 'Tarifa de la licencia'], rows, undefined, ['l', 'l', 'r'])}
<p>Este sitio no muestra una tarifa para la ciudad de Nueva York porque no figuraba en los datos leídos; la página del propio City Clerk la indica.</p>
<h2>Las 24 horas y la dispensa</h2>
<p>Nueva York exige ${r.waitL} entre el momento en que se emite la licencia y la ceremonia. Una licencia recogida un jueves a las 3 p. m. puede usarse desde el viernes a las 3 p. m. Cuando ese horario no funciona, un juez puede conceder una dispensa mediante una orden judicial, que permite adelantar la ceremonia. La herramienta de abajo muestra juntas la espera y la vigencia; la ${h.a('marriage-license-waiting', 'página de los períodos de espera')} enumera los estados que no imponen ninguna.</p>
<!--tool:mini:mlwait|{"state":"NY"}-->
<h2>${r.validL}, o más para los militares</h2>
<p>La licencia dura ${r.validL}. Para los miembros de las fuerzas armadas, la vigencia se amplía a 180 días, lo que da más margen a un militar cuyas fechas de permiso cambian. Las parejas que planean una ceremonia en un ayuntamiento pueden comparar el costo total en la ${h.a('courthouse-wedding', 'página de la boda civil')}.</p>
<h2>Después de la ceremonia: dos sistemas de registro</h2>
<p>Fuera de la ciudad de Nueva York, el oficiante devuelve la licencia firmada al secretario que la emitió. Ese secretario puede vender copias certificadas, y el Departamento de Salud del Estado de Nueva York también, a ${h.m(t.marr.first)} por copia por correo. Dentro de la ciudad, el matrimonio lo registra únicamente el City Clerk, y el estado no puede entregar una copia. El acta no es el mismo documento que la licencia; la ${h.a('marriage-license-vs-certificate', 'página sobre la licencia y el acta')} explica cuál pide cada organismo, y la ${h.a('marriage-copy', 'página de las copias del acta de matrimonio')} compara los estados. Un contrayente nacido en el estado de Nueva York que necesita su acta de nacimiento paga ${t.bFirst} a la oficina del estado: ${h.a('birth-ny', 'acta de nacimiento de Nueva York')}.</p>`;
    },
  },
});
