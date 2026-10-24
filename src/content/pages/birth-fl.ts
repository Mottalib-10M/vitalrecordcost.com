import { definePage } from '../../lib/guide-types';

const SOUTH = ['GA', 'AL', 'SC', 'TN'];

export default definePage({
  id: 'birth-fl', group: 'states', order: 102, state: 'FL',
  tool: { kind: 'order', props: { state: 'FL', copies: 3 } },
  mini: { kind: 'mini:together', props: { state: 'FL', copies: 3 } },
  related: ['home', 'ml-fl', 'death-copies', 'birth-online', 'birth-how-long', 'death-certificate'],
  sources: [],
  en: {
    slug: 'birth-certificate/florida', nav: 'Florida birth certificate', card: 'Among the lowest state fees, cheap extra copies, county health departments and VitalChek.',
    title: 'Birth Certificate Florida 2026: Fee, Extra Copies, Online',
    description: 'Florida birth certificate cost in 2026: the Bureau of Vital Statistics fee, the low price of extra copies, county health departments and the online charge.',
    h1: 'Florida birth certificate: one of the lowest fees in the country',
    intro: 'What the Bureau of Vital Statistics in Jacksonville charges, why extra copies cost so little, and what an online order adds on top.',
    resume: (h) => {
      const t = h.J('FL'), r = h.rank('birth').findIndex((x) => x.code === 'FL') + 1, s = h.stats('birth');
      return `A Florida birth certificate costs ${t.bFirst} for the first certified copy and ${t.bAdd} for each extra copy of the same record ordered at the same time, so three copies cost ${t.b3}. That puts Florida ${r} out of ${h.JURS.length} offices from the cheapest, against a national median of ${h.m(s.median)} for a single copy. The Bureau of Vital Statistics, part of the Florida Department of Health in Jacksonville, keeps every birth registered in the state and takes orders by mail and at its counter. County health departments in all 67 counties also issue birth certificates, usually while you wait, and online orders go through VitalChek, which adds ${t.vendorFeeL} plus shipping. Because extra copies are so cheap in Florida, ordering every copy you will need in one go is the main way to save: a second order later pays the first-copy price again. A Florida death certificate costs ${t.dFirst} for the first copy and ${t.dAdd} for each extra. Fees were read on the Department of Health page on ${h.date(t.retrievedAt)}.`;
    },
    faqs: (h) => {
      const t = h.J('FL');
      return [
        { q: 'How much does a Florida birth certificate cost?', a: `${t.bFirst} for the first certified copy and ${t.bAdd} for each additional copy of the same certificate in the same order. A rush option and shipping are extra. VitalChek, the online channel, adds ${t.vendorFeeL} to the order, and a county health department may add a small local charge.` },
        { q: 'Can a county health department give me a Florida birth certificate the same day?', a: 'Yes. County health department vital statistics offices print certified copies of Florida births at the counter, generally while you wait, for births anywhere in the state and not only in that county. Bring a valid photo ID and payment; some offices work by appointment, so check the county page first.' },
        { q: 'Who can order a Florida birth certificate?', a: 'Anyone 18 or older can order their own; parents listed on the record, a legal guardian, a legal representative or someone with a court order can order it too. Florida keeps birth records with personal details restricted for many decades, so other people cannot obtain them until they become public.' },
        { q: 'Is it cheaper to order Florida certificates in one order?', a: `Much cheaper. Three copies in one order cost ${t.b3}, against ${h.m(t.birth.first * 3)} in three separate orders, and each separate online order also pays the vendor fee again. Count every agency that will keep a copy before you order, then add one spare.` },
      ];
    },
    body: (h) => {
      const t = h.J('FL');
      const rows = ['FL', ...SOUTH].map((c) => { const j = h.J(c); return [c === 'FL' ? `<strong>${j.nameL}</strong>` : j.nameL, j.bFirst, j.bAdd, j.b3, j.dFirst]; });
      return `<h2>Why the extra copies matter more than the first</h2>
<p>Florida's pricing is built around the first search: the state charges ${t.bFirst} to find and certify the record, then only ${t.bAdd} for each copy printed in the same order. A family that needs one copy for a passport, one for school enrollment and one for a sports league pays ${t.b3} if it asks once, and close to three times the first-copy fee if it asks three times. The tool below shows the gap for any number of copies.</p>
<h2>Jacksonville, the county, or online</h2>
<ul><li><strong>Bureau of Vital Statistics, Jacksonville:</strong> mail orders with a copy of your ID, and counter service. Every Florida birth is in its files.</li><li><strong>County health departments:</strong> the fastest door for residents, with copies often printed while you wait.</li><li><strong>Online:</strong> ${t.vendorL}</li></ul>
<p>The fee of the state is the same through each door; what changes is the extra charge and the delay. For dates, see ${h.a('birth-how-long', 'how long a birth certificate takes')}.</p>
<h2>Florida beside the other southeastern offices</h2>
${h.table(['State', 'Birth, first copy', 'Each extra copy', '3 copies', 'Death, first copy'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<h2>Death certificates and the cause of death</h2>
<p>Florida issues death certificates with or without the cause of death. The version without it can be ordered by anyone; the version with the cause is restricted to the spouse, parents, children, siblings, people with an interest in the estate and a few others, and it is the one banks and insurers usually ask for. A first copy costs ${t.dFirst} and each extra copy ${t.dAdd}, so ten copies, a common count for an estate, cost ${t.d10}. Work out the number with the ${h.a('death-copies', 'death certificate copy planner')}.</p>
<!--tool:mini:deathcost|{"state":"FL","copies":8}-->
<h2>Marriage in Florida</h2>
<p>The marriage license is sold by the clerk of the circuit court of any county at a fee fixed by state law, with a reduction and no waiting period for residents who take a premarital course: see ${h.a('ml-fl', 'Florida marriage license')}.</p>`;
    },
  },
  es: {
    slug: 'acta-de-nacimiento/florida', nav: 'Acta de nacimiento de Florida', card: 'Una de las tarifas estatales más bajas, copias adicionales baratas, departamentos de salud y VitalChek.',
    title: 'Acta de nacimiento Florida 2026: tarifa, copias, en línea',
    description: 'Acta de nacimiento de Florida en 2026: tarifa de la Oficina de Estadísticas Vitales, el bajo precio de las copias adicionales, los condados y el cargo en línea.',
    h1: 'Acta de nacimiento de Florida: una de las tarifas más bajas del país',
    intro: 'Lo que cobra la Oficina de Estadísticas Vitales en Jacksonville, por qué las copias adicionales cuestan tan poco y lo que suma un pedido en línea.',
    resume: (h) => {
      const t = h.J('FL'), r = h.rank('birth').findIndex((x) => x.code === 'FL') + 1, s = h.stats('birth');
      return `Un acta de nacimiento de Florida cuesta ${t.bFirst} la primera copia certificada y ${t.bAdd} cada copia adicional de la misma acta pedida a la vez, así que tres copias cuestan ${t.b3}. Eso deja a Florida en el puesto ${r} de ${h.JURS.length} oficinas, de la más barata a la más cara, frente a una mediana nacional de ${h.m(s.median)} por una copia. La Oficina de Estadísticas Vitales, parte del Departamento de Salud de Florida en Jacksonville, guarda todos los nacimientos inscritos en el estado y recibe pedidos por correo y en ventanilla. Los departamentos de salud de los 67 condados también emiten actas de nacimiento, normalmente en el momento, y los pedidos en línea pasan por VitalChek, que suma ${t.vendorFeeL} más el envío. Como las copias adicionales son tan baratas en Florida, pedir de una vez todas las que necesitará es la principal forma de ahorrar: un segundo pedido vuelve a pagar el precio de la primera copia. Un acta de defunción de Florida cuesta ${t.dFirst} la primera copia y ${t.dAdd} cada adicional. Las tarifas se leyeron en la página del Departamento de Salud el ${h.date(t.retrievedAt)}.`;
    },
    faqs: (h) => {
      const t = h.J('FL');
      return [
        { q: '¿Cuánto cuesta un acta de nacimiento de Florida?', a: `${t.bFirst} la primera copia certificada y ${t.bAdd} cada copia adicional de la misma acta en el mismo pedido. El servicio urgente y el envío son aparte. VitalChek, el canal en línea, suma ${t.vendorFeeL} al pedido, y un departamento de salud del condado puede añadir un pequeño cargo local.` },
        { q: '¿Puede un departamento de salud del condado darme el acta el mismo día?', a: 'Sí. Las oficinas de estadísticas vitales de los departamentos de salud de los condados imprimen copias certificadas en ventanilla, por lo general en el momento, para nacimientos de cualquier lugar del estado y no solo de ese condado. Lleve identificación con foto y el pago; algunas oficinas atienden con cita, así que revise antes la página del condado.' },
        { q: '¿Quién puede pedir un acta de nacimiento de Florida?', a: 'Cualquier persona mayor de 18 años puede pedir la suya; también los padres que figuran en el acta, un tutor legal, un representante legal o alguien con orden judicial. Florida mantiene restringidas durante muchas décadas las actas con datos personales, así que otras personas no pueden obtenerlas hasta que se vuelven públicas.' },
        { q: '¿Sale más barato pedir las actas de Florida en un solo pedido?', a: `Mucho más barato. Tres copias en un pedido cuestan ${t.b3}, frente a ${h.m(t.birth.first * 3)} en tres pedidos separados, y cada pedido en línea separado vuelve a pagar el cargo del proveedor. Cuente todas las agencias que se quedarán con una copia antes de pedir.` },
      ];
    },
    body: (h) => {
      const t = h.J('FL');
      const rows = ['FL', ...SOUTH].map((c) => { const j = h.J(c); return [c === 'FL' ? `<strong>${j.nameL}</strong>` : j.nameL, j.bFirst, j.bAdd, j.b3, j.dFirst]; });
      return `<h2>Por qué importan más las copias adicionales que la primera</h2>
<p>La tarifa de Florida se basa en la primera búsqueda: el estado cobra ${t.bFirst} por encontrar y certificar el acta, y luego solo ${t.bAdd} por cada copia impresa en el mismo pedido. Una familia que necesita una copia para el pasaporte, otra para la inscripción escolar y otra para una liga deportiva paga ${t.b3} si la pide una vez, y casi el triple de la primera copia si la pide tres veces. La herramienta de abajo muestra la diferencia para cualquier número de copias.</p>
<h2>Jacksonville, el condado o en línea</h2>
<ul><li><strong>Oficina de Estadísticas Vitales, Jacksonville:</strong> pedidos por correo con copia de su identificación, y atención en ventanilla. Todos los nacimientos de Florida están en sus archivos.</li><li><strong>Departamentos de salud de los condados:</strong> la vía más rápida para los residentes, con copias impresas a menudo en el momento.</li><li><strong>En línea:</strong> ${t.vendorL}</li></ul>
<p>La tarifa del estado es la misma por cada vía; lo que cambia es el cargo adicional y la demora. Para las fechas, vea ${h.a('birth-how-long', 'cuánto tarda un acta de nacimiento')}.</p>
<h2>Florida junto a las demás oficinas del sureste</h2>
${h.table(['Estado', 'Nacimiento, primera copia', 'Cada copia adicional', '3 copias', 'Defunción, primera copia'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<h2>Actas de defunción y causa de muerte</h2>
<p>Florida emite actas de defunción con o sin la causa de muerte. La versión sin causa puede pedirla cualquiera; la versión con causa está reservada al cónyuge, los padres, los hijos, los hermanos, las personas con interés en la herencia y algunos otros, y es la que suelen pedir bancos y aseguradoras. La primera copia cuesta ${t.dFirst} y cada adicional ${t.dAdd}, así que diez copias, una cantidad habitual para una sucesión, cuestan ${t.d10}. Calcule el número con el ${h.a('death-copies', 'planificador de copias del acta de defunción')}.</p>
<!--tool:mini:deathcost|{"state":"FL","copies":8}-->
<h2>Matrimonio en Florida</h2>
<p>La licencia de matrimonio la vende el secretario del tribunal de circuito de cualquier condado a una tarifa fijada por la ley estatal, con rebaja y sin espera para los residentes que toman un curso prematrimonial: vea ${h.a('ml-fl', 'licencia de matrimonio de Florida')}.</p>`;
    },
  },
});
