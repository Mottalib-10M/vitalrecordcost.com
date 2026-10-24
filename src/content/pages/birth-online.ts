import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'birth-online', group: 'birth', order: 30,
  tool: { kind: 'order', props: { state: 'NC', copies: 1 } },
  mini: { kind: 'mini:online', props: { state: 'NC' } },
  related: ['birth-certificate', 'vital-records-office', 'birth-how-long', 'birth-ny', 'home', 'birth-replacement'],
  sources: [],
  en: {
    slug: 'order-birth-certificate-online', nav: 'Order a birth certificate online', card: 'The state\'s authorized vendor, its published fee, and how to spot a private service that adds more.',
    title: 'Order Birth Certificate Online 2026: Real Fees by State',
    description: 'Order a birth certificate online in 2026: the authorized vendor of each state, the online fee it publishes, and how a private service changes the total.',
    h1: 'Order a birth certificate online: what it really costs',
    intro: 'The calculator separates the state fee, the vendor fee and shipping, and lets you enter a price quoted by any other website to see the difference.',
    resume: (h) => {
      const pub = h.JURS.filter((j) => j.vendorFee != null);
      const fees = pub.map((j) => j.vendorFee as number);
      return `Every state lets you order a birth certificate online, but the order is fulfilled by the state's vital records office, and the online part is handled by one vendor the state has authorized, most often VitalChek, or by a state portal such as Texas.gov or Georgia's own service. The vendor adds a processing fee on top of the state fee, and shipping is extra. Of the ${h.JURS.length} offices covered here, ${pub.length} publish that processing fee on their own page, from ${h.m(Math.min(...fees))} to ${h.m(Math.max(...fees))} per order; the others show it only at checkout. Many other websites also offer to order birth certificates. They are private services: they fill in the same state application for you, then charge their own fee in addition to the state fee and sometimes the vendor fee too, so the same certificate can cost far more than the state price. Ordering by mail directly from the state office costs only the state fee and a stamp, but takes longer. To be sure you are on the authorized channel, start from the link on the state office's page.`;
    },
    faqs: (h) => {
      const n = h.J('NC');
      return [
        { q: 'Can I order a birth certificate online?', a: 'Yes, in every state, through the vendor or portal the state vital records office has authorized. The state still produces and certifies the copy. You pay the state fee, a processing fee and shipping, and you prove your identity online or by uploading a copy of your ID.' },
        { q: 'How much does it cost to order a birth certificate online?', a: `The state fee plus the vendor's processing fee plus shipping. In North Carolina, for example, the state fee is ${n.bFirst} and the published online fee ${n.vendorFeeL}, before shipping. Express delivery by courier can add more than the certificate itself. The calculator above separates each part of the total.` },
        { q: 'Is VitalChek the official site?', a: 'VitalChek is a private company that many state and local vital records offices have contracted as their authorized online vendor. It is official in those states because the state office names it. Some states use another vendor or their own portal, so check the link on your state office page.' },
        { q: 'Why did a website charge me much more than the state fee?', a: 'It was likely a private ordering service, not the state\'s authorized vendor. Such services are legal but add their own fee. If the certificate has not been processed, contact the service to cancel; if it has, the copy is genuine, issued by the state, only more expensive.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().filter((j) => j.vendorFee != null).map((j0) => { const j = h.J(j0.code); return [j.nameL, j.bFirst, j.vendorFeeL, h.m(j.birth.first + (j.vendorFee as number))]; });
      return `<h2>States that publish their online fee</h2>
<p>State fee for one copy, the processing fee published on the state page, and the total before shipping.</p>
${h.table(['State', 'State fee', 'Online fee', 'Online total'], rows, undefined, ['l', 'r', 'r', 'r'])}
<p>For the others, the fee appears in the vendor's checkout before payment. The tool below shows mail and online side by side for any state.</p>
<!--tool:mini:online|{"state":"OR"}-->
<h2>Three ways to order, compared</h2>
<ul><li><strong>Mail to the state office:</strong> the state fee only, paid by check or money order, plus postage. The slowest, because of the post in both directions.</li><li><strong>The state's authorized online vendor:</strong> state fee, processing fee and shipping, paid by card, with identity checked online. Faster and trackable.</li><li><strong>A private ordering service:</strong> its own fee on top of the others, for help filling in the form. The certificate still comes from the state, at the same speed or slower.</li></ul>
<h2>How to recognize the authorized channel</h2>
<p>Open the state office from the ${h.a('vital-records-office', 'vital records office list')} and follow its own link to online ordering. The page you land on states the processing fee before payment and names the state office as the issuer. Be cautious with sites that ask for a flat package price without showing the state fee separately. If you want the certificate fast, a local counter is often quicker than any website; see ${h.a('birth-how-long', 'how long it takes')}.</p>`;
    },
  },
  es: {
    slug: 'pedir-acta-de-nacimiento-en-linea', nav: 'Pedir el acta de nacimiento en línea', card: 'El proveedor autorizado del estado, el cargo que publica y cómo reconocer un servicio privado que cobra más.',
    title: 'Pedir acta de nacimiento en línea 2026: cargos por estado',
    description: 'Pedir un acta de nacimiento en línea en 2026: el proveedor autorizado de cada estado, el cargo que publica y cómo cambia el total un servicio privado.',
    h1: 'Pedir un acta de nacimiento en línea: lo que cuesta de verdad',
    intro: 'La calculadora separa la tarifa estatal, el cargo del proveedor y el envío, y le permite ingresar el precio que le cotizó otro sitio web para ver la diferencia.',
    resume: (h) => {
      const pub = h.JURS.filter((j) => j.vendorFee != null);
      const fees = pub.map((j) => j.vendorFee as number);
      return `Todos los estados permiten pedir el acta de nacimiento en línea, pero el pedido lo cumple la oficina de registros vitales del estado, y la parte en línea la gestiona un proveedor que el estado autorizó, casi siempre VitalChek, o un portal estatal como Texas.gov o el servicio propio de Georgia. El proveedor suma un cargo de trámite a la tarifa estatal, y el envío es aparte. De las ${h.JURS.length} oficinas cubiertas aquí, ${pub.length} publican ese cargo en su propia página, de ${h.m(Math.min(...fees))} a ${h.m(Math.max(...fees))} por pedido; las demás lo muestran solo al pagar. Muchos otros sitios web ofrecen también pedir actas de nacimiento. Son servicios privados: llenan por usted la misma solicitud del estado y cobran su propia tarifa además de la estatal y a veces también la del proveedor, así que la misma acta puede costar mucho más que el precio del estado. Pedirla por correo directamente a la oficina estatal cuesta solo la tarifa estatal y un sello, pero tarda más. Para estar seguro de usar el canal autorizado, empiece por el enlace de la página de la oficina estatal.`;
    },
    faqs: (h) => {
      const n = h.J('NC');
      return [
        { q: '¿Se puede pedir un acta de nacimiento en línea?', a: 'Sí, en todos los estados, a través del proveedor o portal que autorizó la oficina estatal de registros vitales. El estado sigue produciendo y certificando la copia. Usted paga la tarifa estatal, un cargo de trámite y el envío, y acredita su identidad en línea o subiendo una copia de su identificación.' },
        { q: '¿Cuánto cuesta pedir un acta de nacimiento en línea?', a: `La tarifa estatal más el cargo de trámite del proveedor más el envío. En Carolina del Norte, por ejemplo, la tarifa estatal es ${n.bFirst} y el cargo en línea publicado ${n.vendorFeeL}, antes del envío. La entrega urgente por mensajería puede costar más que el acta misma.` },
        { q: '¿VitalChek es el sitio oficial?', a: 'VitalChek es una empresa privada que muchas oficinas estatales y locales de registros vitales contrataron como proveedor en línea autorizado. Es oficial en esos estados porque la oficina estatal lo nombra. Algunos estados usan otro proveedor o su propio portal, así que revise el enlace de la página de la oficina de su estado.' },
        { q: '¿Por qué un sitio web me cobró mucho más que la tarifa estatal?', a: 'Probablemente era un servicio privado de pedidos, no el proveedor autorizado del estado. Estos servicios son legales pero suman su propia tarifa. Si el acta no se ha tramitado, contacte al servicio para cancelar; si ya se tramitó, la copia es auténtica, emitida por el estado, solo que más cara.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().filter((j) => j.vendorFee != null).map((j0) => { const j = h.J(j0.code); return [j.nameL, j.bFirst, j.vendorFeeL, h.m(j.birth.first + (j.vendorFee as number))]; });
      return `<h2>Estados que publican su cargo en línea</h2>
<p>Tarifa estatal por una copia, cargo de trámite publicado en la página del estado y total antes del envío.</p>
${h.table(['Estado', 'Tarifa estatal', 'Cargo en línea', 'Total en línea'], rows, undefined, ['l', 'r', 'r', 'r'])}
<p>En los demás, el cargo aparece en el pago del proveedor antes de confirmar. La herramienta de abajo muestra correo y en línea lado a lado para cualquier estado.</p>
<!--tool:mini:online|{"state":"OR"}-->
<h2>Tres formas de pedir, comparadas</h2>
<ul><li><strong>Correo a la oficina estatal:</strong> solo la tarifa estatal, pagada con cheque o giro postal, más el franqueo. La más lenta, por el correo de ida y vuelta.</li><li><strong>El proveedor en línea autorizado del estado:</strong> tarifa estatal, cargo de trámite y envío, pagados con tarjeta, con verificación de identidad en línea. Más rápida y con seguimiento.</li><li><strong>Un servicio privado de pedidos:</strong> su propia tarifa sobre las demás, por la ayuda para llenar el formulario. El acta sigue viniendo del estado, a la misma velocidad o más lenta.</li></ul>
<h2>Cómo reconocer el canal autorizado</h2>
<p>Abra la oficina estatal desde la ${h.a('vital-records-office', 'lista de oficinas de registros vitales')} y siga su propio enlace al pedido en línea. La página a la que llega indica el cargo de trámite antes del pago y nombra a la oficina estatal como emisora. Desconfíe de los sitios que piden un precio fijo por paquete sin mostrar aparte la tarifa estatal. Si necesita el acta rápido, una ventanilla local suele ser más rápida que cualquier sitio web; vea ${h.a('birth-how-long', 'cuánto tarda')}.</p>`;
    },
  },
});
