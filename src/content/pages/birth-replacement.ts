import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'birth-replacement', group: 'birth', order: 20,
  tool: { kind: 'order', props: { state: 'GA', copies: 2 } },
  mini: { kind: 'mini:together', props: { state: 'GA', copies: 3 } },
  related: ['birth-certificate', 'birth-online', 'birth-how-long', 'birth-passport', 'birth-oh', 'home'],
  sources: [],
  en: {
    slug: 'replacement-birth-certificate', nav: 'Replacement birth certificate', card: 'Lost, stolen or damaged: a new certified copy at the normal fee, and why to order a spare.',
    title: 'Replacement Birth Certificate 2026: Cost and What to Do',
    description: 'Replacement birth certificate in 2026: a lost, stolen or damaged copy is replaced by a new certified copy at the normal fee; the cost and why to order a spare.',
    h1: 'Replacement birth certificate: lost, stolen or damaged',
    intro: 'There is no special replacement form or fee: you order a new certified copy. What changes is how many to order now, so that the next loss costs less.',
    resume: (h) => {
      const g = h.J('GA'), s = h.stats('birth');
      return `A replacement birth certificate is simply a new certified copy of the original record, ordered from the vital records office of the state of birth at the normal fee. None of the fee pages read for this site lists a separate replacement fee or asks for a police report for a lost copy, and the old copy is not cancelled: if it turns up, it can still be used. The first copy costs between ${h.m(s.min)} and ${h.m(s.max)} depending on the state, and in many states each extra copy ordered at the same time costs much less. In Georgia, for example, the first copy is ${g.bFirst} and each extra one ${g.bAdd}, so ordering a spare with the replacement costs ${g.bAdd} now instead of ${g.bFirst} after the next loss. The order is the same as a first request: the application form, a copy of your photo ID, and the fee, by mail, at a counter or online. If the certificate was stolen along with your driver's license or passport, deal with those first, because you will need a valid ID to order the birth certificate. A damaged certificate that is torn, laminated or illegible may be refused by agencies; replace it the same way.`;
    },
    faqs: (h) => {
      const g = h.J('GA');
      return [
        { q: 'How do I replace a lost birth certificate?', a: 'Order a new certified copy from the vital records office of the state where you were born, by mail, at a counter or through its authorized online vendor. Use the ordinary application form; there is no separate replacement procedure. Include a copy of your photo ID and the fee.' },
        { q: 'How much is a replacement birth certificate?', a: `The same as any certified copy: the state's normal fee, for example ${g.bFirst} in Georgia, plus the vendor charge if you order online. Ordering extra copies at the same time costs ${g.bAdd} each there, far less than a second order later.` },
        { q: 'My birth certificate was stolen. Do I need a police report?', a: 'Not to order a new copy. A police report helps if other documents were taken and you suspect identity theft, and the Federal Trade Commission runs a recovery site for that. Replace your photo ID first, since the birth certificate application requires one.' },
        { q: 'Is a laminated birth certificate still valid?', a: 'Many agencies, including passport offices, refuse a laminated certificate because the seal and security features can no longer be checked. The record itself is unaffected; order a new certified copy and keep it flat, unlaminated, in a folder with your other originals.' },
      ];
    },
    body: (h) => {
      const rows = h.rank('birth', 3).slice(0, 10).map((x) => { const j = h.J(x.code); return [j.nameL, j.bFirst, j.bAdd, h.m(j.birth.first - (j.birth.additional ?? j.birth.first))]; }).filter((r) => r[3] !== h.m(0)).slice(0, 6);
      return `<h2>Order the replacement and one spare</h2>
<p>In states where the extra copy is cheaper than the first, a spare bought with the replacement is the cheapest insurance against the next loss. The saving per spare, in some of the low-cost states:</p>
${h.table(['State', 'First copy', 'Extra copy', 'Saved per spare'], rows, undefined, ['l', 'r', 'r', 'r'])}
<p>The tool below gives the total for any state and number of copies. In states that charge the same for every copy, a spare still saves the second round of postage or online charges.</p>
<!--tool:mini:together|{"state":"FL","copies":3}-->
<h2>When the replacement is urgent</h2>
<p>For a trip or a job start, go to a counter: the state office or a local registrar that issues copies the same day. If you live far from your state of birth, an online order with express shipping is the quicker option; the ${h.a('birth-how-long', 'processing times')} page shows what each state publishes. A U.S. passport application with an urgent travel date can use other evidence of citizenship in some cases; see ${h.a('birth-passport', 'birth certificate for a passport')}.</p>
<h2>Keeping the new copy safe</h2>
<ul><li>Store originals flat in a folder, away from damp and heat.</li><li>Do not laminate the certificate or punch holes in it.</li><li>Send a certified copy only when an agency requires one; many accept a photocopy for a first check.</li><li>Keep a scan for your own records, knowing that it has no legal value.</li></ul>`;
    },
  },
  es: {
    slug: 'reemplazo-acta-de-nacimiento', nav: 'Reemplazo del acta de nacimiento', card: 'Perdida, robada o dañada: una nueva copia certificada a la tarifa normal, y por qué pedir una de reserva.',
    title: 'Reemplazo de acta de nacimiento 2026: costo y qué hacer',
    description: 'Reemplazo del acta de nacimiento en 2026: una copia perdida, robada o dañada se sustituye por otra certificada a la tarifa normal; costo y copia de reserva.',
    h1: 'Reemplazo del acta de nacimiento: perdida, robada o dañada',
    intro: 'No existe un formulario ni una tarifa especial de reemplazo: se pide una nueva copia certificada. Lo que cambia es cuántas pedir ahora, para que la próxima pérdida cueste menos.',
    resume: (h) => {
      const g = h.J('GA'), s = h.stats('birth');
      return `Un reemplazo del acta de nacimiento es simplemente una nueva copia certificada del registro original, pedida a la oficina de registros vitales del estado de nacimiento a la tarifa normal. Ninguna de las páginas de tarifas leídas para este sitio indica una tarifa de reemplazo aparte ni pide un informe policial por una copia perdida, y la copia anterior no se anula: si aparece, puede seguir usándose. La primera copia cuesta entre ${h.m(s.min)} y ${h.m(s.max)} según el estado, y en muchos estados cada copia adicional pedida a la vez cuesta mucho menos. En Georgia, por ejemplo, la primera copia cuesta ${g.bFirst} y cada adicional ${g.bAdd}, así que pedir una de reserva con el reemplazo cuesta ${g.bAdd} ahora en lugar de ${g.bFirst} tras la próxima pérdida. El pedido es igual que una primera solicitud: el formulario, una copia de su identificación con foto y la tarifa, por correo, en ventanilla o en línea. Si el acta fue robada junto con su licencia de manejar o su pasaporte, ocúpese primero de esos documentos, porque necesitará una identificación vigente para pedir el acta. Un acta dañada, rota, plastificada o ilegible puede ser rechazada por las agencias; reemplácela del mismo modo.`;
    },
    faqs: (h) => {
      const g = h.J('GA');
      return [
        { q: '¿Cómo reemplazo un acta de nacimiento perdida?', a: 'Pida una nueva copia certificada a la oficina de registros vitales del estado donde nació, por correo, en ventanilla o con su proveedor en línea autorizado. Use el formulario habitual; no hay un trámite de reemplazo aparte. Incluya una copia de su identificación con foto y la tarifa.' },
        { q: '¿Cuánto cuesta reemplazar un acta de nacimiento?', a: `Lo mismo que cualquier copia certificada: la tarifa normal del estado, por ejemplo ${g.bFirst} en Georgia, más el cargo del proveedor si pide en línea. Allí, las copias adicionales pedidas a la vez cuestan ${g.bAdd} cada una, mucho menos que un segundo pedido después.` },
        { q: 'Me robaron el acta de nacimiento. ¿Necesito un informe policial?', a: 'No para pedir una copia nueva. Un informe policial ayuda si se llevaron otros documentos y sospecha un robo de identidad, y la Comisión Federal de Comercio tiene un sitio de recuperación para eso. Reemplace primero su identificación con foto, porque la solicitud del acta la exige.' },
        { q: '¿Sigue siendo válida un acta de nacimiento plastificada?', a: 'Muchas agencias, incluidas las oficinas de pasaportes, rechazan un acta plastificada porque ya no se pueden comprobar el sello y los elementos de seguridad. El registro no cambia; pida una nueva copia certificada y guárdela plana, sin plastificar, en una carpeta con sus demás originales.' },
      ];
    },
    body: (h) => {
      const rows = h.rank('birth', 3).slice(0, 10).map((x) => { const j = h.J(x.code); return [j.nameL, j.bFirst, j.bAdd, h.m(j.birth.first - (j.birth.additional ?? j.birth.first))]; }).filter((r) => r[3] !== h.m(0)).slice(0, 6);
      return `<h2>Pida el reemplazo y una de reserva</h2>
<p>En los estados donde la copia adicional es más barata que la primera, una copia de reserva comprada con el reemplazo es el seguro más barato contra la próxima pérdida. El ahorro por cada copia de reserva, en algunos de los estados de tarifa baja:</p>
${h.table(['Estado', 'Primera copia', 'Copia adicional', 'Ahorro por reserva'], rows, undefined, ['l', 'r', 'r', 'r'])}
<p>La herramienta de abajo da el total para cualquier estado y número de copias. En los estados que cobran lo mismo por cada copia, una de reserva ahorra igual el segundo envío o el segundo cargo en línea.</p>
<!--tool:mini:together|{"state":"FL","copies":3}-->
<h2>Cuando el reemplazo es urgente</h2>
<p>Para un viaje o el inicio de un trabajo, vaya a una ventanilla: la oficina estatal o un registrador local que entrega copias el mismo día. Si vive lejos de su estado de nacimiento, un pedido en línea con envío urgente es la opción más rápida; la página de ${h.a('birth-how-long', 'plazos de tramitación')} muestra lo que publica cada estado. Una solicitud de pasaporte con fecha de viaje urgente puede usar otras pruebas de ciudadanía en algunos casos; vea ${h.a('birth-passport', 'acta de nacimiento para el pasaporte')}.</p>
<h2>Guardar bien la nueva copia</h2>
<ul><li>Guarde los originales planos en una carpeta, lejos de la humedad y el calor.</li><li>No plastifique el acta ni la perfore.</li><li>Envíe una copia certificada solo cuando una agencia la exige; muchas aceptan una fotocopia para una primera revisión.</li><li>Conserve un escaneo para usted, sabiendo que no tiene valor legal.</li></ul>`;
    },
  },
});
