import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'vital-records-office', group: 'birth', order: 90,
  tool: { kind: 'mini:office', props: { state: 'NY' } },
  mini: { kind: 'mini:online', props: { state: 'GA' } },
  related: ['home', 'birth-certificate', 'birth-online', 'death-certificate', 'marriage-copy', 'birth-ny'],
  sources: [],
  en: {
    slug: 'vital-records-office', nav: 'Vital records office', card: 'The official office of every state, its ordering page, its online channel and its local counters.',
    title: 'Vital Records Office by State 2026: Official Pages, Fees',
    description: 'Vital records office of every state, DC and New York City in 2026: the official ordering page, the fees, the authorized online channel and local offices.',
    h1: 'Vital records office: the official office in each state',
    intro: 'Pick a state to see its office, its fees and its online channel. The table below links to the official ordering page of all 52 offices.',
    resume: (h) => {
      const local = h.JURS.filter((j) => j.local).length;
      return `Each state has one central vital records office, usually part of its health department, that registers births and deaths and sells certified copies: the Vital Statistics Section of the Texas Department of State Health Services, the California Department of Public Health, the Florida Bureau of Vital Statistics, and so on. New York City runs its own office, separate from New York State, and the District of Columbia has one too, which makes ${h.JURS.length} offices in all. In ${local} of them, county, city or town offices also issue certified copies, often the same day at the counter, at the state fee or a local one. The state office is the right one for the state where the birth or death took place, not the state where you live now. Each office takes orders by mail, and most sell online through one authorized vendor, named on the office's own page; websites that are not listed there are private services that charge extra. Marriage and divorce records are often held by counties rather than the state. The office pages linked below were read on ${h.date(h.META.dataAsOf)}.`;
    },
    faqs: (h) => [
      { q: 'What is a vital records office?', a: 'The state government office that registers births, deaths and, in many states, marriages and divorces, and issues certified copies of those records. It usually sits within the state health department, under names such as Vital Statistics, Vital Records or Health Statistics. Counties and cities often run local registrar offices too.' },
      { q: 'Which vital records office do I contact?', a: 'The one of the state where the event happened. A person born in Ohio and living in Arizona orders from Ohio. For births and deaths in the five boroughs, the office is the New York City Department of Health and Mental Hygiene, not the state office in Albany.' },
      { q: 'How do I know a website is the official ordering channel?', a: 'Start from the state office page linked in the table below. It names the vendor it has authorized, often VitalChek or a state portal. Sites reached any other way may be private services that forward your order and add their own charge on top of the state fee.' },
      { q: 'Can a local office issue my certificate?', a: `Often, yes. In ${h.JURS.filter((j) => j.local).length} of the ${h.JURS.length} offices covered here, county, city or town registrars also issue certified copies, sometimes for any birth in the state. Their counter is usually the fastest option, and the fee is either the state fee or a locally set one.` },
    ],
    body: (h) => {
      const rows = h.sorted().map((j0) => { const j = h.J(j0.code); return [j.nameL, h.ext(j.birthUrl, j.office), j.bFirst, j.local ? (j.local === 'town' ? 'Town or city' : 'County') : 'State only']; });
      return `<h2>The 52 offices and their official pages</h2>
<p>Each link opens the office's own page with its current fees and ordering options. Local offices are marked when they issue certified copies as well.</p>
${h.table(['State', 'Office (official page)', 'Birth, first copy', 'Local offices'], rows, undefined, ['l', 'l', 'r', 'l'])}
<h2>Mail, counter, online</h2>
<p>Every office takes mail orders: an application form, a copy of a photo ID and a check or money order. Counters, at the state capital or at local offices, are the fastest. Online orders go through the vendor named by the office and add a fee; the tool below shows it for any state that publishes it. See ${h.a('birth-online', 'ordering a birth certificate online')} for the comparison of channels.</p>
<!--tool:mini:online|{"state":"GA"}-->
<h2>What the office cannot do</h2>
<p>A vital records office issues copies of what was registered; it does not give legal advice, and it does not change a record without the documents that the law requires. It cannot issue a record held by another state. For births abroad to U.S. parents, the record is the Consular Report of Birth Abroad, ordered from the U.S. Department of State. For marriages and divorces, many states send applicants to the county: see ${h.a('marriage-copy', 'marriage certificate copies')}.</p>`;
    },
  },
  es: {
    slug: 'oficina-de-registros-vitales', nav: 'Oficina de registros vitales', card: 'La oficina oficial de cada estado, su página de pedidos, su canal en línea y sus ventanillas locales.',
    title: 'Oficina de registros vitales por estado 2026: dónde pedir',
    description: 'Oficina de registros vitales de cada estado, DC y Nueva York en 2026: página oficial de pedidos, tarifas, canal en línea autorizado y oficinas locales.',
    h1: 'Oficina de registros vitales: la oficina oficial de cada estado',
    intro: 'Elija un estado para ver su oficina, sus tarifas y su canal en línea. La tabla de abajo enlaza la página oficial de pedidos de las 52 oficinas.',
    resume: (h) => {
      const local = h.JURS.filter((j) => j.local).length;
      return `Cada estado tiene una oficina central de registros vitales, normalmente dentro de su departamento de salud, que inscribe nacimientos y defunciones y vende copias certificadas: la Sección de Estadísticas Vitales del Departamento Estatal de Servicios de Salud de Texas, el Departamento de Salud Pública de California, la Oficina de Estadísticas Vitales de Florida, etcétera. La Ciudad de Nueva York tiene su propia oficina, separada de la del Estado de Nueva York, y el Distrito de Columbia también, lo que da ${h.JURS.length} oficinas en total. En ${local} de ellas, oficinas de condado, ciudad o municipio también emiten copias certificadas, a menudo el mismo día en ventanilla, a la tarifa estatal o a una local. La oficina que corresponde es la del estado donde ocurrió el nacimiento o la defunción, no la del estado donde vive ahora. Cada oficina recibe pedidos por correo, y la mayoría vende en línea a través de un proveedor autorizado, nombrado en su propia página; los sitios que no figuran allí son servicios privados que cobran más. Las actas de matrimonio y divorcio suelen guardarlas los condados y no el estado. Las páginas de las oficinas enlazadas abajo se leyeron el ${h.date(h.META.dataAsOf)}.`;
    },
    faqs: (h) => [
      { q: '¿Qué es una oficina de registros vitales?', a: 'La oficina del gobierno estatal que inscribe los nacimientos, las defunciones y, en muchos estados, los matrimonios y divorcios, y emite copias certificadas de esos registros. Suele depender del departamento de salud del estado, con nombres como Vital Statistics, Vital Records o Health Statistics. Los condados y ciudades también suelen tener registradores locales.' },
      { q: '¿A qué oficina de registros vitales debo dirigirme?', a: 'A la del estado donde ocurrió el hecho. Una persona nacida en Ohio que vive en Arizona pide su acta a Ohio. Para nacimientos y defunciones en los cinco condados de la ciudad, la oficina es el Departamento de Salud e Higiene Mental de la Ciudad de Nueva York, no la oficina estatal de Albany.' },
      { q: '¿Cómo sé que un sitio web es el canal oficial de pedidos?', a: 'Empiece por la página de la oficina estatal enlazada en la tabla de abajo. Allí se nombra el proveedor autorizado, a menudo VitalChek o un portal del estado. Los sitios a los que llega por otra vía pueden ser servicios privados que reenvían su pedido y suman su propio cargo a la tarifa estatal.' },
      { q: '¿Puede una oficina local emitir mi acta?', a: `A menudo, sí. En ${h.JURS.filter((j) => j.local).length} de las ${h.JURS.length} oficinas cubiertas aquí, registradores de condado, ciudad o municipio también emiten copias certificadas, a veces para cualquier nacimiento del estado. Su ventanilla suele ser la opción más rápida, y la tarifa es la estatal o una fijada localmente.` },
    ],
    body: (h) => {
      const rows = h.sorted().map((j0) => { const j = h.J(j0.code); return [j.nameL, h.ext(j.birthUrl, j.office), j.bFirst, j.local ? (j.local === 'town' ? 'Municipio o ciudad' : 'Condado') : 'Solo el estado']; });
      return `<h2>Las 52 oficinas y sus páginas oficiales</h2>
<p>Cada enlace abre la página de la propia oficina con sus tarifas y formas de pedido vigentes. Se indican las oficinas locales cuando también emiten copias certificadas.</p>
${h.table(['Estado', 'Oficina (página oficial)', 'Nacimiento, primera copia', 'Oficinas locales'], rows, undefined, ['l', 'l', 'r', 'l'])}
<h2>Correo, ventanilla, en línea</h2>
<p>Todas las oficinas reciben pedidos por correo: un formulario, una copia de una identificación con foto y un cheque o giro postal. Las ventanillas, en la capital del estado o en oficinas locales, son las más rápidas. Los pedidos en línea pasan por el proveedor que nombra la oficina y suman un cargo; la herramienta de abajo lo muestra para los estados que lo publican. Vea ${h.a('birth-online', 'pedir un acta de nacimiento en línea')} para comparar los canales.</p>
<!--tool:mini:online|{"state":"GA"}-->
<h2>Lo que la oficina no puede hacer</h2>
<p>Una oficina de registros vitales emite copias de lo que se inscribió; no da asesoría legal y no modifica un registro sin los documentos que exige la ley. No puede emitir un registro que guarda otro estado. Para los nacimientos en el extranjero de padres estadounidenses, el registro es el Informe Consular de Nacimiento en el Extranjero, que se pide al Departamento de Estado. Para matrimonios y divorcios, muchos estados remiten al condado: vea ${h.a('marriage-copy', 'copias del acta de matrimonio')}.</p>`;
    },
  },
});
