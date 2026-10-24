import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'birth-certificate', group: 'birth', order: 10,
  tool: { kind: 'order', props: { state: 'CA', copies: 1 } },
  mini: { kind: 'mini:office', props: { state: 'IL' } },
  related: ['home', 'birth-replacement', 'birth-online', 'birth-certified-copy', 'birth-how-long', 'vital-records-office'],
  sources: [],
  en: {
    slug: 'birth-certificate', nav: 'How to get a birth certificate', card: 'Four steps: the state of birth, the right to order, the ID to send, then the fee and the channel.',
    title: 'Birth Certificate: How to Get a Copy in 4 Steps, 2026 Fees',
    description: 'How to get a birth certificate in 2026: the office of the state of birth, who may order, the ID to send, and the fee by mail, at the counter or online.',
    h1: 'How to get a copy of your birth certificate',
    intro: 'Four steps that work in every state, with the fee of the state you pick in the calculator. Most people finish in one visit or one mail order.',
    resume: (h) => {
      const s = h.stats('birth');
      return `To get a copy of a birth certificate, order it from the vital records office of the state where the birth took place, or from a local registrar in that state, never from the state where you live now. Four steps cover nearly every case. First, identify the office: the state health department's vital records office, or for the five boroughs of New York City, the city's own office. Second, check that you may order a certified copy: the person named, once an adult, and parents named on the record can almost always order; spouses, children, siblings and legal representatives can in many states, sometimes with proof. Third, gather a valid government photo ID and the details of the birth: full name, date, city or county, and the parents' names. Fourth, choose the channel: mail, a counter, or the state's authorized online vendor, which adds a charge. The state fee for one certified copy runs from ${h.m(s.min)} in ${s.loL} to ${h.m(s.max)} in ${s.hiL}, with a median of ${h.m(s.median)}. Counter orders are often ready the same day; mail and online orders take from days to weeks depending on the state.`;
    },
    faqs: (h) => {
      const s = h.stats('birth');
      return [
        { q: 'How do I get a copy of my birth certificate?', a: 'Contact the vital records office of the state where you were born, or a local registrar there, and order a certified copy by mail, at a counter or through the state\'s authorized online vendor. Send or show a valid photo ID and pay the state fee. A copy cannot come from the state where you live now.' },
        { q: 'How much does a birth certificate cost?', a: `Between ${h.m(s.min)} and ${h.m(s.max)} for the first certified copy at the state office, depending on the state, with a median of ${h.m(s.median)}. Many states charge less for extra copies in the same order. Online vendors add their own fee, and express shipping costs extra.` },
        { q: 'What ID do I need to order a birth certificate?', a: 'A current government photo ID such as a driver\'s license, a state ID card, a passport or a military ID. Without one, many states accept two or more documents, for example a Social Security card with a utility bill or a pay stub. The list of accepted documents is on each state\'s application form.' },
        { q: 'Can someone else order my birth certificate for me?', a: 'Parents named on the certificate can. In many states a spouse, adult child, sibling or grandparent can too, with proof of the relationship. Others, including friends, need your signed authorization or must be your legal representative. An attorney acting for you usually needs a letter or court document.' },
      ];
    },
    body: (h) => {
      const rows = h.rank('birth').slice(0, 6).map((x) => { const j = h.J(x.code); return [j.nameL, j.bFirst, j.bAdd]; });
      const hi = h.rank('birth').slice(-6).reverse().map((x) => { const j = h.J(x.code); return [j.nameL, j.bFirst, j.bAdd]; });
      return `<h2>Step 1: the office of the state of birth</h2>
<p>Births are registered where they happen. Someone born in Illinois and living in Oregon orders from Illinois, through its state office or a county clerk in Illinois. The tool below shows the office, the fees and the online channel for any state; the ${h.a('vital-records-office', 'vital records office')} page links to all 52 official pages.</p>
<!--tool:mini:office|{"state":"IL"}-->
<h2>Step 2: the right to order</h2>
<p>Most states restrict certified birth copies to the person named and close relatives, and a handful treat birth records as public. Everyone can usually obtain an informational copy or a record that has become public after many decades, which is useful for family history but not for identity. If you are not eligible, ask the person named to order, or to sign an authorization.</p>
<h2>Step 3: what to send</h2>
<ul><li>The state application form, filled in and signed; some states require a notarized signature for mail orders.</li><li>A copy of a valid photo ID, front and back.</li><li>Proof of relationship when ordering for a relative, such as your own birth certificate showing the same parent.</li><li>The fee, by check or money order made out to the office, or by card online and at the counter.</li></ul>
<h2>Step 4: fee and channel</h2>
<p>The lowest and highest state fees for the first copy:</p>
${h.table(['Lowest fees', 'First copy', 'Each extra copy'], rows, undefined, ['l', 'r', 'r'])}
${h.table(['Highest fees', 'First copy', 'Each extra copy'], hi, undefined, ['l', 'r', 'r'])}
<p>The counter is the fastest; mail is the cheapest; online is the simplest from far away. The trade-offs are on ${h.a('birth-online', 'ordering online')}, the waits on ${h.a('birth-how-long', 'how long it takes')}, and the kind of copy to ask for on ${h.a('birth-certified-copy', 'certified copy')}.</p>`;
    },
  },
  es: {
    slug: 'acta-de-nacimiento', nav: 'Cómo obtener un acta de nacimiento', card: 'Cuatro pasos: el estado de nacimiento, el derecho a pedirla, la identificación y luego la tarifa y el canal.',
    title: 'Acta de nacimiento: cómo obtener una copia en 4 pasos, 2026',
    description: 'Cómo obtener un acta de nacimiento en 2026: la oficina del estado de nacimiento, quién la pide, la identificación y la tarifa por correo, ventanilla o en línea.',
    h1: 'Cómo obtener una copia de su acta de nacimiento',
    intro: 'Cuatro pasos que sirven en todos los estados, con la tarifa del estado que elija en la calculadora. La mayoría lo resuelve en una visita o un pedido por correo.',
    resume: (h) => {
      const s = h.stats('birth');
      return `Para obtener una copia de un acta de nacimiento, pídala a la oficina de registros vitales del estado donde ocurrió el nacimiento, o a un registrador local de ese estado, nunca al estado donde vive ahora. Cuatro pasos cubren casi todos los casos. Primero, identifique la oficina: la oficina de registros vitales del departamento de salud del estado o, para los cinco condados de la Ciudad de Nueva York, la oficina propia de la ciudad. Segundo, compruebe que puede pedir una copia certificada: la persona inscrita, ya adulta, y los padres que figuran en el acta casi siempre pueden; el cónyuge, los hijos, los hermanos y los representantes legales pueden en muchos estados, a veces con prueba. Tercero, reúna una identificación oficial con foto vigente y los datos del nacimiento: nombre completo, fecha, ciudad o condado y nombres de los padres. Cuarto, elija el canal: correo, ventanilla o el proveedor en línea autorizado del estado, que suma un cargo. La tarifa estatal de una copia certificada va de ${h.m(s.min)} en ${s.loL} a ${h.m(s.max)} en ${s.hiL}, con una mediana de ${h.m(s.median)}. Los pedidos en ventanilla suelen estar listos el mismo día; los pedidos por correo y en línea tardan de días a semanas según el estado.`;
    },
    faqs: (h) => {
      const s = h.stats('birth');
      return [
        { q: '¿Cómo obtengo una copia de mi acta de nacimiento?', a: 'Diríjase a la oficina de registros vitales del estado donde nació, o a un registrador local de allí, y pida una copia certificada por correo, en ventanilla o con el proveedor en línea autorizado del estado. Envíe o muestre una identificación con foto vigente y pague la tarifa estatal. La copia no puede venir del estado donde vive ahora.' },
        { q: '¿Cuánto cuesta un acta de nacimiento?', a: `Entre ${h.m(s.min)} y ${h.m(s.max)} por la primera copia certificada en la oficina estatal, según el estado, con una mediana de ${h.m(s.median)}. Muchos estados cobran menos por las copias adicionales del mismo pedido. Los proveedores en línea suman su propio cargo, y el envío urgente cuesta aparte.` },
        { q: '¿Qué identificación necesito para pedir un acta de nacimiento?', a: 'Una identificación oficial con foto vigente, como la licencia de manejar, una tarjeta de identificación estatal, el pasaporte o una identificación militar. Sin ella, muchos estados aceptan dos o más documentos, por ejemplo la tarjeta del Seguro Social con una factura de servicios o un talón de pago. La lista figura en el formulario de cada estado.' },
        { q: '¿Puede otra persona pedir mi acta de nacimiento por mí?', a: 'Los padres que figuran en el acta, sí. En muchos estados también el cónyuge, un hijo adulto, un hermano o un abuelo, con prueba del parentesco. Los demás, incluidos los amigos, necesitan su autorización firmada o deben ser su representante legal. Un abogado que actúa por usted suele necesitar una carta o un documento judicial.' },
      ];
    },
    body: (h) => {
      const rows = h.rank('birth').slice(0, 6).map((x) => { const j = h.J(x.code); return [j.nameL, j.bFirst, j.bAdd]; });
      const hi = h.rank('birth').slice(-6).reverse().map((x) => { const j = h.J(x.code); return [j.nameL, j.bFirst, j.bAdd]; });
      return `<h2>Paso 1: la oficina del estado de nacimiento</h2>
<p>Los nacimientos se inscriben donde ocurren. Una persona nacida en Illinois que vive en Oregón pide su acta a Illinois, en su oficina estatal o a un secretario de condado de Illinois. La herramienta de abajo muestra la oficina, las tarifas y el canal en línea de cualquier estado; la página de la ${h.a('vital-records-office', 'oficina de registros vitales')} enlaza las 52 páginas oficiales.</p>
<!--tool:mini:office|{"state":"IL"}-->
<h2>Paso 2: el derecho a pedirla</h2>
<p>La mayoría de los estados reservan las copias certificadas de nacimiento a la persona inscrita y a sus familiares cercanos, y unos pocos tratan las actas de nacimiento como públicas. Casi siempre cualquiera puede obtener una copia informativa o un registro que se volvió público tras muchas décadas, útil para la historia familiar pero no para acreditar identidad. Si no tiene derecho, pida a la persona inscrita que haga el pedido o que firme una autorización.</p>
<h2>Paso 3: qué enviar</h2>
<ul><li>El formulario del estado, completo y firmado; algunos estados exigen la firma notariada para los pedidos por correo.</li><li>Una copia de una identificación con foto vigente, por ambos lados.</li><li>Prueba del parentesco si la pide para un familiar, como su propia acta de nacimiento con el mismo padre o madre.</li><li>La tarifa, con cheque o giro postal a nombre de la oficina, o con tarjeta en línea y en ventanilla.</li></ul>
<h2>Paso 4: tarifa y canal</h2>
<p>Las tarifas estatales más bajas y más altas por la primera copia:</p>
${h.table(['Tarifas más bajas', 'Primera copia', 'Cada copia adicional'], rows, undefined, ['l', 'r', 'r'])}
${h.table(['Tarifas más altas', 'Primera copia', 'Cada copia adicional'], hi, undefined, ['l', 'r', 'r'])}
<p>La ventanilla es lo más rápido; el correo, lo más barato; el pedido en línea, lo más sencillo desde lejos. Las ventajas de cada canal están en ${h.a('birth-online', 'pedir en línea')}, las demoras en ${h.a('birth-how-long', 'cuánto tarda')} y el tipo de copia que debe pedir en ${h.a('birth-certified-copy', 'copia certificada')}.</p>`;
    },
  },
});
