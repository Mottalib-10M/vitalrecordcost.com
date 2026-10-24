import { definePage } from '../../lib/guide-types';

const NEIGHBORS = ['OK', 'LA', 'NM', 'AR'];

export default definePage({
  id: 'birth-tx', group: 'states', order: 100, state: 'TX',
  tool: { kind: 'order', props: { state: 'TX', copies: 2 } },
  mini: { kind: 'mini:apostille', props: { state: 'TX' } },
  related: ['home', 'ml-tx', 'birth-passport', 'birth-how-long', 'death-certificate', 'vital-records-office'],
  sources: [],
  en: {
    slug: 'birth-certificate/texas', nav: 'Texas birth certificate', card: 'State fee in Austin, local registrars, Texas.gov and copies ordered together.',
    title: 'Birth Certificate Texas 2026: State Fee, Copies, Online',
    description: 'Texas birth certificate cost in 2026: the DSHS fee per certified copy, local registrar counters, Texas.gov orders, death records and the apostille fee.',
    h1: 'Texas birth certificate: what a certified copy costs',
    intro: 'The fee of the Vital Statistics Section in Austin, what local registrars and Texas.gov add, and the total for the copies you need.',
    resume: (h) => {
      const t = h.J('TX'), r = h.rank('birth').findIndex((x) => x.code === 'TX') + 1;
      return `A certified copy of a Texas birth certificate costs ${t.bFirst} at the Vital Statistics Section of the Department of State Health Services, and ${t.bSame ? 'every extra copy of the same certificate costs the same' : `each extra copy ordered with it costs ${t.bAdd}`}, so two copies come to ${h.m(h.stateFees(t.birth, 2))}. That puts Texas ${r} out of ${h.JURS.length} offices from the cheapest. The state office in Austin takes orders by mail and at its counter, and online orders go through Texas.gov, the state portal, which adds its own processing charge shown before you pay. County clerks and local registrars across Texas also issue certified copies, and many hand them over the same day. A Texas death certificate costs ${t.dFirst} for the first copy and ${t.dAdd} for each additional one, which matters when an estate needs many. Fees were read on the DSHS fee page on ${h.date(t.retrievedAt)}.`;
    },
    faqs: (h) => {
      const t = h.J('TX');
      return [
        { q: 'How much does a Texas birth certificate cost in 2026?', a: `${t.bFirst} per certified copy at the DSHS Vital Statistics Section${t.bSame ? ', and the same for each extra copy' : `, then ${t.bAdd} for each extra copy in the same order`}. Ordering through Texas.gov adds a processing charge, and a local registrar may set a slightly different counter price. Express shipping is optional and extra.` },
        { q: 'Can I get my Texas birth certificate the same day?', a: 'Yes, at many county clerk and local registrar offices, which print certified copies at the counter while you wait. Bring a valid government photo ID. The state office in Austin also serves walk-in customers; mail and online orders take longer because of processing and delivery.' },
        { q: 'Who can order a Texas birth certificate?', a: 'The person named on it, once 18, and immediate family: parents, children, siblings, grandparents and a spouse, plus a legal guardian or legal representative with proof. Everyone must show a valid photo ID. Other people can obtain a certificate only after it becomes public, or with a court order.' },
        { q: 'I was born in Texas but live in another state. How do I order?', a: `Order from Texas, not from your current state: by mail to the Vital Statistics Section with a copy of your ID, or online through Texas.gov. The fee is the same ${t.bFirst} plus the online charge if you use the portal. Allow extra days for mail in both directions.` },
      ];
    },
    body: (h) => {
      const t = h.J('TX');
      const rows = ['TX', ...NEIGHBORS].map((c) => { const j = h.J(c); return [c === 'TX' ? `<strong>${j.nameL}</strong>` : j.nameL, j.bFirst, j.bAdd, h.m(h.stateFees(j.birth, 3)), j.dFirst]; });
      return `<h2>Austin, a county counter or Texas.gov</h2>
<p>Texas keeps every birth since 1903 in one statewide system, so the place you order from changes the wait more than the record. The state office in Austin handles mail orders and serves customers at its lobby. ${t.vendorL} Ordering on the portal is the simplest route for someone who lives outside Texas; it is not cheaper, because the processing charge comes on top of the state fee.</p>
<p>For a person who lives in Texas, a county clerk or city registrar is usually faster. Many of them can issue a certified copy for a birth anywhere in the state, not only in their county, and print it at the counter. Their fee is set locally and can differ by a dollar or two from the state's ${t.bFirst}; check the county page before you go.</p>
<h2>Texas next to its neighbors</h2>
<p>Fees of the offices of the four neighboring states, for comparison. Each figure comes from the state office's official fee page.</p>
${h.table(['State', 'Birth, first copy', 'Each extra copy', '3 copies', 'Death, first copy'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<h2>Long form or abstract</h2>
<p>Texas issues two versions of a birth record. The long-form certificate reproduces the original record, with the parents' names and the place of birth; the abstract, or short form, gives the main facts on a smaller card. For a U.S. passport, a dual citizenship file or a foreign marriage, ask for the long form: the ${h.a('birth-passport', 'passport page')} explains what the State Department checks. Ask at the counter if you are unsure, because the price is the same.</p>
<h2>Using a Texas certificate abroad</h2>
<p>A foreign school, employer or consulate may ask for an apostille, which the Texas Secretary of State adds to a certificate signed by the state registrar. The tool below adds the apostille fee to the copies. The ${h.a('birth-apostille', 'apostille guide')} explains the order of the steps.</p>
<!--tool:mini:together|{"state":"TX","copies":3}-->
<h2>Other Texas records</h2>
<p>A Texas ${h.a('death-certificate', 'death certificate')} costs ${t.dFirst} for the first copy and ${t.dAdd} for each extra copy ordered with it, so five copies cost ${t.d5}. Marriage licenses are sold by county clerks, not by the state; the ${h.a('ml-tx', 'Texas marriage license page')} gives the county prices, the 72-hour wait and the course that removes it.</p>`;
    },
  },
  es: {
    slug: 'acta-de-nacimiento/texas', nav: 'Acta de nacimiento de Texas', card: 'Tarifa estatal en Austin, registradores locales, Texas.gov y copias pedidas juntas.',
    title: 'Acta de nacimiento Texas 2026: tarifa, copias, en línea',
    description: 'Acta de nacimiento de Texas en 2026: tarifa del DSHS por copia certificada, ventanillas locales, pedidos en Texas.gov, actas de defunción y la apostilla.',
    h1: 'Acta de nacimiento de Texas: lo que cuesta una copia certificada',
    intro: 'La tarifa de la Sección de Estadísticas Vitales en Austin, lo que suman los registradores locales y Texas.gov, y el total de las copias que necesita.',
    resume: (h) => {
      const t = h.J('TX'), r = h.rank('birth').findIndex((x) => x.code === 'TX') + 1;
      return `Una copia certificada del acta de nacimiento de Texas cuesta ${t.bFirst} en la Sección de Estadísticas Vitales del Departamento Estatal de Servicios de Salud (DSHS), y ${t.bSame ? 'cada copia adicional de la misma acta cuesta lo mismo' : `cada copia adicional pedida con ella cuesta ${t.bAdd}`}, así que dos copias suman ${h.m(h.stateFees(t.birth, 2))}. Eso deja a Texas en el puesto ${r} de ${h.JURS.length} oficinas, de la más barata a la más cara. La oficina estatal de Austin recibe pedidos por correo y en su ventanilla, y los pedidos en línea pasan por Texas.gov, el portal del estado, que suma su propio cargo de trámite antes del pago. Los secretarios de condado y los registradores locales de todo Texas también emiten copias certificadas, muchas veces el mismo día. Un acta de defunción de Texas cuesta ${t.dFirst} la primera copia y ${t.dAdd} cada adicional, lo que importa cuando una sucesión necesita varias. Las tarifas se leyeron en la página del DSHS el ${h.date(t.retrievedAt)}.`;
    },
    faqs: (h) => {
      const t = h.J('TX');
      return [
        { q: '¿Cuánto cuesta un acta de nacimiento de Texas en 2026?', a: `${t.bFirst} por copia certificada en la Sección de Estadísticas Vitales del DSHS${t.bSame ? ', y lo mismo por cada copia extra' : `, y luego ${t.bAdd} por cada copia extra del mismo pedido`}. Pedirla en Texas.gov suma un cargo de trámite, y un registrador local puede fijar un precio de ventanilla algo distinto. El envío urgente es opcional y va aparte.` },
        { q: '¿Puedo obtener mi acta de Texas el mismo día?', a: 'Sí, en muchas oficinas de secretarios de condado y registradores locales, que imprimen la copia certificada en ventanilla mientras usted espera. Lleve una identificación oficial con foto vigente. La oficina estatal de Austin también atiende en persona; por correo o en línea tarda más por el trámite y la entrega.' },
        { q: '¿Quién puede pedir un acta de nacimiento de Texas?', a: 'La persona inscrita, desde los 18 años, y su familia inmediata: padres, hijos, hermanos, abuelos y cónyuge, además de un tutor o representante legal con prueba. Todos deben mostrar identificación con foto vigente. Otras personas solo pueden obtenerla cuando el acta se vuelve pública o con una orden judicial.' },
        { q: 'Nací en Texas pero vivo en otro estado, ¿cómo la pido?', a: `Pídala a Texas, no a su estado actual: por correo a la Sección de Estadísticas Vitales con copia de su identificación, o en línea en Texas.gov. La tarifa es la misma, ${t.bFirst}, más el cargo en línea si usa el portal. Cuente días extra por el correo de ida y vuelta.` },
      ];
    },
    body: (h) => {
      const t = h.J('TX');
      const rows = ['TX', ...NEIGHBORS].map((c) => { const j = h.J(c); return [c === 'TX' ? `<strong>${j.nameL}</strong>` : j.nameL, j.bFirst, j.bAdd, h.m(h.stateFees(j.birth, 3)), j.dFirst]; });
      return `<h2>Austin, la ventanilla del condado o Texas.gov</h2>
<p>Texas guarda todos los nacimientos desde 1903 en un sistema estatal único, así que el lugar donde pide cambia la espera más que el acta. La oficina estatal de Austin atiende los pedidos por correo y recibe al público en su vestíbulo. ${t.vendorL} Pedir en el portal es lo más sencillo para quien vive fuera de Texas; no es más barato, porque el cargo de trámite se suma a la tarifa del estado.</p>
<p>Para quien vive en Texas, un secretario de condado o un registrador municipal suele ser más rápido. Muchos pueden emitir una copia certificada de un nacimiento ocurrido en cualquier parte del estado, no solo en su condado, e imprimirla en ventanilla. Su tarifa se fija localmente y puede diferir en uno o dos dólares de los ${t.bFirst} del estado; revise la página del condado antes de ir.</p>
<h2>Texas frente a sus vecinos</h2>
<p>Tarifas de las oficinas de los cuatro estados vecinos, para comparar. Cada cifra sale de la página oficial de tarifas de la oficina estatal.</p>
${h.table(['Estado', 'Nacimiento, 1.ª copia', 'Cada copia extra', '3 copias', 'Defunción, 1.ª copia'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<h2>Versión larga o extracto</h2>
<p>Texas emite dos versiones del acta. El acta de versión larga reproduce el registro original, con los nombres de los padres y el lugar de nacimiento; el extracto, o versión corta, da los datos principales en una tarjeta más pequeña. Para un pasaporte estadounidense, un trámite de doble nacionalidad o un matrimonio en el extranjero, pida la versión larga: la ${h.a('birth-passport', 'página del pasaporte')} explica lo que revisa el Departamento de Estado. Si duda, pregunte en la ventanilla, porque el precio es el mismo.</p>
<h2>Usar un acta de Texas en el extranjero</h2>
<p>Una escuela, un empleador o un consulado extranjero puede pedir una apostilla, que el Secretario de Estado de Texas agrega a un acta firmada por el registrador estatal. La herramienta de abajo suma la tarifa de la apostilla a las copias. La ${h.a('birth-apostille', 'guía de la apostilla')} explica el orden de los pasos.</p>
<!--tool:mini:together|{"state":"TX","copies":3}-->
<h2>Otras actas de Texas</h2>
<p>Un ${h.a('death-certificate', 'acta de defunción')} de Texas cuesta ${t.dFirst} la primera copia y ${t.dAdd} cada copia extra pedida con ella, así que cinco copias cuestan ${t.d5}. Las licencias de matrimonio las venden los secretarios de condado, no el estado; la ${h.a('ml-tx', 'página de la licencia de matrimonio de Texas')} da los precios de los condados, la espera de 72 horas y el curso que la elimina.</p>`;
    },
  },
});
