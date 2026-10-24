import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'birth-how-long', group: 'birth', order: 40,
  tool: { kind: 'mini:processing', props: { state: 'NY' } },
  mini: { kind: 'mini:online', props: { state: 'MA' } },
  related: ['birth-certificate', 'birth-online', 'birth-passport', 'birth-replacement', 'vital-records-office', 'birth-ny'],
  sources: [],
  en: {
    slug: 'how-long-does-it-take-to-get-a-birth-certificate', nav: 'How long a birth certificate takes', card: 'The processing time each state office publishes, from the same day at a counter to three months by mail.',
    title: 'Birth Certificate Processing Time 2026: How Long by State',
    description: 'How long it takes to get a birth certificate in 2026: the processing time each state office publishes for mail, online and counter orders, plus delivery.',
    h1: 'How long does it take to get a birth certificate?',
    intro: 'Choose a state to read the time its office publishes. The table compares the longest mail delays, and the text explains how to get a copy faster.',
    resume: (h) => {
      const pub = h.JURS.filter((j) => j.processing);
      const long = h.JURS.filter((j) => (j.mailDaysMax ?? 0) >= 70).map((j) => h.name(j.code));
      return `The time to get a birth certificate depends far more on the channel than on the state. At a counter, at the state office or at a local registrar that issues copies, many states hand over the certificate the same day, often within an hour. By mail, the processing times published by state offices run from a few business days to about three months, and the postal time in both directions comes on top. Online orders through the state's authorized vendor are usually processed faster than mail, and the vendor offers express delivery at extra cost. Of the ${h.JURS.length} offices covered here, ${pub.length} publish a processing time on their own pages; the longest mail delays, around ten weeks or more, are announced by ${h.list(long)}. Times change with the season and with backlogs, so the figure shown is the one on the office's page when it was read, on ${h.date(h.META.dataAsOf)}. For an urgent need, a counter visit or a local registrar beats any mail order, and a passport appointment for urgent travel can sometimes be booked before the certificate arrives.`;
    },
    faqs: (h) => {
      const ny = h.J('NY'), fl = h.J('FL');
      return [
        { q: 'How long does it take to get a birth certificate by mail?', a: `It depends on the state. Florida, for example, states: ${fl.processingL}. New York State states: ${ny.processingL}. Add the postal time both ways, about a week in total, and a few days if the application is incomplete or the payment is wrong.` },
        { q: 'Can I get a birth certificate the same day?', a: 'Yes, in many states, at a counter. State offices with a public lobby and local registrars that issue certified copies usually print them while you wait, sometimes by appointment. Bring a valid photo ID, the details of the birth and the fee.' },
        { q: 'Is ordering online faster than mail?', a: 'Usually, because the order reaches the office the same day and the vendor offers express delivery. Processing at the state office can still take days or weeks; express shipping shortens only the delivery. A few states process online and mail orders in the same queue.' },
        { q: 'Why is my birth certificate taking longer than the published time?', a: 'Common causes are a missing signature or notarization, a photo ID that is expired or unreadable, a payment problem, a name that does not match the record, or a record that must be searched by hand. The office usually writes back; call if the published time has passed.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().filter((j) => j.processing).map((j0) => { const j = h.J(j0.code); return [j.nameL, j.processingL]; });
      return `<h2>What each office publishes</h2>
<p>The wording is the office's own, condensed. Where a state is missing, its page gives no processing time.</p>
${h.table(['State', 'Published processing time'], rows, undefined, ['l', 'l'])}
<h2>How to get it faster</h2>
<ol><li>Go to a counter when you can, at the state office or a local registrar that issues certified copies.</li><li>Order online through the state's authorized vendor rather than by mail, and pay for express delivery if the date matters.</li><li>Fill in every field and sign where required; some states need a notarized signature for mail orders.</li><li>Send a clear copy of a valid ID, front and back.</li><li>Order all the copies you need at once, so that you do not wait twice.</li></ol>
<!--tool:mini:online|{"state":"MA"}-->
<h2>When a date is fixed</h2>
<p>For a passport with travel within weeks, the State Department runs passport agencies by appointment for urgent travel; the ${h.a('birth-passport', 'passport page')} explains what the certificate must show. For a lost certificate needed quickly, see ${h.a('birth-replacement', 'replacement birth certificate')}. In New York, the city and the state publish different times: ${h.a('birth-ny', 'New York birth certificate')}.</p>`;
    },
  },
  es: {
    slug: 'cuanto-tarda-un-acta-de-nacimiento', nav: 'Cuánto tarda un acta de nacimiento', card: 'El plazo que publica cada oficina estatal, desde el mismo día en ventanilla hasta tres meses por correo.',
    title: 'Acta de nacimiento cuánto tarda 2026: plazos por estado',
    description: 'Cuánto tarda un acta de nacimiento en 2026: el plazo que publica cada oficina estatal para pedidos por correo, en línea y en ventanilla, más el tiempo de envío.',
    h1: '¿Cuánto tarda en llegar un acta de nacimiento?',
    intro: 'Elija un estado para leer el plazo que publica su oficina. La tabla compara las demoras por correo y el texto explica cómo obtener una copia más rápido.',
    resume: (h) => {
      const pub = h.JURS.filter((j) => j.processing);
      const long = h.JURS.filter((j) => (j.mailDaysMax ?? 0) >= 70).map((j) => h.name(j.code));
      return `El tiempo para obtener un acta de nacimiento depende mucho más del canal que del estado. En ventanilla, en la oficina estatal o en un registrador local que emite copias, muchos estados entregan el acta el mismo día, a menudo en menos de una hora. Por correo, los plazos que publican las oficinas estatales van de unos pocos días hábiles a unos tres meses, y el correo de ida y vuelta se suma. Los pedidos en línea con el proveedor autorizado del estado suelen tramitarse más rápido que los de correo, y el proveedor ofrece envío urgente con costo adicional. De las ${h.JURS.length} oficinas cubiertas aquí, ${pub.length} publican un plazo en sus propias páginas; las demoras por correo más largas, de unas diez semanas o más, las anuncian ${h.list(long)}. Los plazos cambian según la temporada y los atrasos, así que la cifra mostrada es la de la página de la oficina cuando se leyó, el ${h.date(h.META.dataAsOf)}. Ante una urgencia, una visita a la ventanilla o a un registrador local gana a cualquier pedido por correo, y una cita de pasaporte por viaje urgente a veces puede reservarse antes de que llegue el acta.`;
    },
    faqs: (h) => {
      const ny = h.J('NY'), fl = h.J('FL');
      return [
        { q: '¿Cuánto tarda un acta de nacimiento por correo?', a: `Depende del estado. Florida, por ejemplo, indica: ${fl.processingL}. El Estado de Nueva York indica: ${ny.processingL}. Sume el correo de ida y vuelta, alrededor de una semana en total, y unos días más si la solicitud está incompleta o el pago es incorrecto.` },
        { q: '¿Puedo obtener el acta de nacimiento el mismo día?', a: 'Sí, en muchos estados, en ventanilla. Las oficinas estatales con atención al público y los registradores locales que emiten copias certificadas suelen imprimirlas en el momento, a veces con cita. Lleve una identificación con foto vigente, los datos del nacimiento y la tarifa.' },
        { q: '¿Pedir en línea es más rápido que por correo?', a: 'Por lo general sí, porque el pedido llega a la oficina el mismo día y el proveedor ofrece envío urgente. La tramitación en la oficina estatal puede seguir tardando días o semanas; el envío urgente solo acorta la entrega. Unos pocos estados tramitan los pedidos en línea y por correo en la misma fila.' },
        { q: '¿Por qué mi acta tarda más que el plazo publicado?', a: 'Las causas habituales son una firma o una notarización que falta, una identificación vencida o ilegible, un problema con el pago, un nombre que no coincide con el registro o un registro que hay que buscar a mano. La oficina suele escribir; llame si ya pasó el plazo publicado.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().filter((j) => j.processing).map((j0) => { const j = h.J(j0.code); return [j.nameL, j.processingL]; });
      return `<h2>Lo que publica cada oficina</h2>
<p>El texto es el de la propia oficina, resumido. Si falta un estado, su página no da ningún plazo.</p>
${h.table(['Estado', 'Plazo publicado'], rows, undefined, ['l', 'l'])}
<h2>Cómo obtenerla más rápido</h2>
<ol><li>Vaya a una ventanilla cuando pueda, en la oficina estatal o en un registrador local que emite copias certificadas.</li><li>Pida en línea con el proveedor autorizado del estado en vez de por correo, y pague envío urgente si la fecha importa.</li><li>Llene todos los campos y firme donde se pide; algunos estados exigen firma notariada para los pedidos por correo.</li><li>Envíe una copia legible de una identificación vigente, por ambos lados.</li><li>Pida todas las copias que necesita a la vez, para no esperar dos veces.</li></ol>
<!--tool:mini:online|{"state":"MA"}-->
<h2>Cuando hay una fecha fija</h2>
<p>Para un pasaporte con viaje en pocas semanas, el Departamento de Estado tiene agencias de pasaportes con cita para viajes urgentes; la ${h.a('birth-passport', 'página del pasaporte')} explica lo que debe mostrar el acta. Para un acta perdida que se necesita pronto, vea ${h.a('birth-replacement', 'reemplazo del acta de nacimiento')}. En Nueva York, la ciudad y el estado publican plazos distintos: ${h.a('birth-ny', 'acta de nacimiento de Nueva York')}.</p>`;
    },
  },
});
