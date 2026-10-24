import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'birth-ny', group: 'states', order: 103, state: 'NY',
  tool: { kind: 'order', props: { state: 'NYC', copies: 1 } },
  mini: { kind: 'mini:online', props: { state: 'NY' } },
  related: ['home', 'ml-ny', 'birth-online', 'birth-apostille', 'death-certificate', 'vital-records-office'],
  sources: [],
  en: {
    slug: 'birth-certificate/new-york', nav: 'New York birth certificate', card: 'New York City or the rest of the state: two offices, two fees, two online channels.',
    title: 'Birth Certificate New York 2026: NYC or State Fee, Online',
    description: 'New York birth certificate cost in 2026: the city fee for the five boroughs, the state fee for the rest of New York, online charges and local registrars.',
    h1: 'New York birth certificate: city office or state office',
    intro: 'Born in the five boroughs or elsewhere in New York? The answer picks the office, the fee and the online charge, and the calculator below starts on the city.',
    resume: (h) => {
      const s = h.J('NY'), c = h.J('NYC');
      return `New York has two separate birth record systems. A birth in Manhattan, Brooklyn, Queens, the Bronx or Staten Island is held by the New York City Department of Health and Mental Hygiene, which charges ${c.bFirst} per certified copy. A birth anywhere else in New York State is held by the New York State Department of Health in Albany, which charges ${s.bFirst} per copy by mail, and by the local registrar of the town or city of birth, which can also issue copies. Neither office covers the other: the state cannot issue a certificate for a Brooklyn birth, and the city cannot issue one for a Buffalo birth. Online orders for both go through VitalChek, which adds ${c.vendorFeeL} to each city order. State orders online cost more: ${s.vendorL} A death certificate costs ${c.dFirst} in the city and ${s.dFirst} from the state. Fees were read on the official city and state pages on ${h.date(s.retrievedAt)}.`;
    },
    faqs: (h) => {
      const s = h.J('NY'), c = h.J('NYC');
      return [
        { q: 'How much is a birth certificate in New York City?', a: `${c.bFirst} per certified copy from the NYC Department of Health and Mental Hygiene, for births in the five boroughs. Ordering online through VitalChek adds ${c.vendorFeeL} plus the shipping you choose. For a passport, ask for the long form with the parents' names, which the city issues as its standard certified copy.` },
        { q: 'How much is a New York State birth certificate outside the city?', a: `${s.bFirst} per certified copy from the State Department of Health by mail. The local registrar of the town or city of birth also issues copies, at a fee set locally and often faster. Online orders cost more because they include priority handling and a per-order charge.` },
        { q: 'I was born in New York City. Can Albany send my certificate?', a: 'No. New York State does not hold certificates for births in the five boroughs, so an application sent to Albany is returned. Order from the NYC Department of Health and Mental Hygiene, by mail, online through VitalChek, or in person by appointment in Manhattan.' },
        { q: 'Does a New York birth certificate need an apostille abroad?', a: 'For countries of the Hague Apostille Convention, yes, in most cases. A city certificate needs an extra step first: authentication of the signature by the county clerk, then the apostille from the New York Department of State. A state certificate goes directly to the Department of State.' },
      ];
    },
    body: (h) => {
      const s = h.J('NY'), c = h.J('NYC');
      const rows = [['New York City (5 boroughs)', c.bFirst, c.bAdd, c.vendorFeeL, c.dFirst], ['New York State (rest of the state)', s.bFirst, s.bAdd, s.vendorFeeL, s.dFirst]];
      return `<h2>Two offices, side by side</h2>
${h.table(['Office', 'Birth, per copy', 'Each extra copy', 'Online charge per order', 'Death, per copy'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<p>The state's online price is not a simple add-on: through VitalChek a state copy is sold with priority handling included, so the online total runs well above the ${s.bFirst} mail fee. The city's online channel adds a fixed charge to the city fee. The tool below compares mail and online for either office.</p>
<!--tool:mini:online|{"state":"NYC"}-->
<h2>Outside the city: the local registrar</h2>
<p>Every town, village and city in New York outside the five boroughs has a local registrar, usually in the town or city clerk's office, who keeps the births that took place there. Local registrars can issue certified copies, often the same day for a person who appears with ID, and some issue them for genealogy after a period of restriction. Their fee is set by the municipality, so it can differ from the state's ${s.bFirst}; the state office remains the place to order when the town of birth is unknown.</p>
<h2>Who may order</h2>
<p>In both systems the person named, once 18, and a parent named on the certificate may order a certified copy. Others need a documented lawful right or a court order. A spouse, child or sibling ordering for a deceased person attaches proof of the relationship. Every applicant sends or shows a government photo ID.</p>
<h2>Abroad and for a passport</h2>
<p>A U.S. passport application needs a certified long-form copy with the parents' names; both offices issue one. For use abroad, the order of steps differs between city and state certificates, as the FAQ explains, and the ${h.a('birth-apostille', 'apostille guide')} gives the fees. New York State also runs its own marriage license rules, with a 24-hour wait: see ${h.a('ml-ny', 'New York marriage license')}. For death records and the number of copies an estate needs, see ${h.a('death-certificate', 'death certificate cost')}.</p>`;
    },
  },
  es: {
    slug: 'acta-de-nacimiento/nueva-york', nav: 'Acta de nacimiento de Nueva York', card: 'Ciudad de Nueva York o resto del estado: dos oficinas, dos tarifas, dos canales en línea.',
    title: 'Acta de nacimiento Nueva York 2026: ciudad o estado, costo',
    description: 'Acta de nacimiento de Nueva York en 2026: tarifa de la ciudad para los cinco condados, tarifa estatal para el resto, cargos en línea y registradores locales.',
    h1: 'Acta de nacimiento de Nueva York: oficina de la ciudad o del estado',
    intro: '¿Nació en los cinco condados de la ciudad o en otro lugar de Nueva York? La respuesta decide la oficina, la tarifa y el cargo en línea; la calculadora empieza por la ciudad.',
    resume: (h) => {
      const s = h.J('NY'), c = h.J('NYC');
      return `Nueva York tiene dos sistemas de actas de nacimiento separados. Un nacimiento en Manhattan, Brooklyn, Queens, el Bronx o Staten Island lo guarda el Departamento de Salud e Higiene Mental de la Ciudad de Nueva York, que cobra ${c.bFirst} por copia certificada. Un nacimiento en cualquier otro lugar del estado lo guarda el Departamento de Salud del Estado de Nueva York en Albany, que cobra ${s.bFirst} por copia por correo, y el registrador local del pueblo o ciudad de nacimiento, que también puede emitir copias. Ninguna oficina cubre a la otra: el estado no puede emitir un acta de un nacimiento en Brooklyn, y la ciudad no puede emitir una de Buffalo. Los pedidos en línea de ambas pasan por VitalChek. Para la ciudad suma ${c.vendorFeeL} a cada pedido; para el estado, la copia en línea se vende con tramitación prioritaria incluida y un cargo por pedido. Un acta de defunción cuesta ${c.dFirst} en la ciudad y ${s.dFirst} en el estado. Las tarifas se leyeron en las páginas oficiales de la ciudad y del estado el ${h.date(s.retrievedAt)}.`;
    },
    faqs: (h) => {
      const s = h.J('NY'), c = h.J('NYC');
      return [
        { q: '¿Cuánto cuesta un acta de nacimiento en la Ciudad de Nueva York?', a: `${c.bFirst} por copia certificada del Departamento de Salud e Higiene Mental de la ciudad, para nacimientos en los cinco condados. Pedirla en línea con VitalChek suma ${c.vendorFeeL} más el envío que elija. Para el pasaporte, pida el formato largo con los nombres de los padres, que la ciudad emite como copia certificada habitual.` },
        { q: '¿Cuánto cuesta un acta del Estado de Nueva York fuera de la ciudad?', a: `${s.bFirst} por copia certificada del Departamento de Salud del estado por correo. El registrador local del pueblo o ciudad de nacimiento también emite copias, a una tarifa fijada localmente y a menudo más rápido. Los pedidos en línea cuestan más porque incluyen tramitación prioritaria y un cargo por pedido.` },
        { q: 'Nací en la Ciudad de Nueva York. ¿Puede Albany enviarme el acta?', a: 'No. El Estado de Nueva York no guarda las actas de los nacimientos en los cinco condados, así que una solicitud enviada a Albany se devuelve. Pídala al Departamento de Salud e Higiene Mental de la ciudad, por correo, en línea con VitalChek o en persona con cita en Manhattan.' },
        { q: '¿Necesita apostilla un acta de Nueva York para el extranjero?', a: 'Para los países del Convenio de La Haya, sí, en la mayoría de los casos. Un acta de la ciudad necesita antes un paso más: la autenticación de la firma por el secretario del condado, y luego la apostilla del Departamento de Estado de Nueva York. Un acta del estado va directamente al Departamento de Estado.' },
      ];
    },
    body: (h) => {
      const s = h.J('NY'), c = h.J('NYC');
      const rows = [['Ciudad de Nueva York (5 condados)', c.bFirst, c.bAdd, c.vendorFeeL, c.dFirst], ['Estado de Nueva York (resto del estado)', s.bFirst, s.bAdd, s.vendorFeeL, s.dFirst]];
      return `<h2>Dos oficinas, lado a lado</h2>
${h.table(['Oficina', 'Nacimiento, por copia', 'Cada copia adicional', 'Cargo en línea por pedido', 'Defunción, por copia'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<p>El precio en línea del estado no es un simple recargo: con VitalChek una copia estatal se vende con tramitación prioritaria incluida, así que el total en línea supera con creces la tarifa de ${s.bFirst} por correo. El canal en línea de la ciudad suma un cargo fijo a la tarifa de la ciudad. La herramienta de abajo compara correo y en línea para cualquiera de las dos oficinas.</p>
<!--tool:mini:online|{"state":"NYC"}-->
<h2>Fuera de la ciudad: el registrador local</h2>
<p>Cada pueblo, villa y ciudad de Nueva York fuera de los cinco condados tiene un registrador local, normalmente en la oficina del secretario municipal, que guarda los nacimientos ocurridos allí. Los registradores locales pueden emitir copias certificadas, a menudo el mismo día para quien se presenta con identificación, y algunos las emiten para genealogía tras un periodo de restricción. Su tarifa la fija el municipio, así que puede diferir de los ${s.bFirst} del estado; la oficina estatal sigue siendo el lugar para pedir cuando no se sabe el pueblo de nacimiento.</p>
<h2>Quién puede pedirla</h2>
<p>En los dos sistemas pueden pedir una copia certificada la persona inscrita, a partir de los 18 años, y el padre o la madre que figuran en el acta. Los demás necesitan un derecho legal documentado o una orden judicial. El cónyuge, un hijo o un hermano que la pide para una persona fallecida adjunta la prueba del parentesco. Todo solicitante envía o muestra una identificación oficial con foto.</p>
<h2>En el extranjero y para el pasaporte</h2>
<p>La solicitud de pasaporte de EE. UU. requiere una copia certificada de formato largo con los nombres de los padres; las dos oficinas la emiten. Para usarla en el extranjero, el orden de los pasos difiere entre actas de la ciudad y del estado, como explica la pregunta frecuente, y la ${h.a('birth-apostille', 'guía de la apostilla')} da las tarifas. El Estado de Nueva York tiene además sus propias reglas de licencia de matrimonio, con 24 horas de espera: vea ${h.a('ml-ny', 'licencia de matrimonio de Nueva York')}. Para las actas de defunción y las copias que necesita una sucesión, vea ${h.a('death-certificate', 'costo del acta de defunción')}.</p>`;
    },
  },
});
