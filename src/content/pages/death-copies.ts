import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'death-copies', group: 'death', order: 20,
  tool: { kind: 'deathcopies', props: { state: 'CA' } },
  mini: { kind: 'mini:together', props: { state: 'NC', kind: 1, copies: 6 } },
  related: ['death-certificate', 'vital-records-office', 'home', 'birth-fl', 'marriage-copy', 'name-change'],
  sources: [],
  en: {
    slug: 'how-many-death-certificates-do-i-need', nav: 'How many death certificates', card: 'One copy per institution that keeps an original: count them and see the cost in your state.',
    title: 'Death Certificates Needed: How Many Copies to Order',
    description: 'How many death certificates you need: one certified copy per bank, insurer, pension, vehicle and county with property, plus spares, priced in your state.',
    h1: 'How many death certificates do you need?',
    intro: 'Tick the accounts and assets of the estate: the planner counts the certified copies that institutions will keep and prices them at the state office.',
    resume: (h) => {
      const s5 = h.stats('death', 5), s10 = h.stats('death', 10);
      return `Most estates need between five and ten certified copies of the death certificate, but the right number is the count of institutions that will keep an original rather than look at one and hand it back. Each bank or credit union usually keeps one, whatever the number of accounts held there; each life insurance company asks for one per claim; each pension plan, 401(k) or IRA administrator and brokerage firm wants its own; the motor vehicle office keeps one for every vehicle retitled; and each county where real estate is recorded needs one to clear the title. A probate case adds one for the court, and a claim for veterans' burial or survivor benefits adds another. Social Security usually only needs the funeral home's report. Add one or two spares for documents nobody expected. Ordering all of them at once is cheaper in states where extra copies cost less: five copies in one order cost between ${h.m(s5.min)} and ${h.m(s5.max)} across the ${h.JURS.length} offices, ten between ${h.m(s10.min)} and ${h.m(s10.max)}. This count is an estimate written by Radif Partners, not a legal rule; ask each institution before sending an original.`;
    },
    faqs: (h) => {
      const t = h.J('NC');
      return [
        { q: 'How many death certificates should I order?', a: 'Count one for each bank, life insurer, retirement plan and brokerage, one per vehicle and per county with real estate, one for the probate court if there is a case, and one for veterans benefits if claimed. Most families land between five and ten, plus one or two spares.' },
        { q: 'Does Social Security need a certified death certificate?', a: 'Usually not. The funeral home reports the death to Social Security electronically in most cases, and survivor benefits are claimed by phone or at an office. Social Security may ask to see a certified copy in some situations, then returns it.' },
        { q: 'Can I use a photocopy of the death certificate?', a: 'Many organizations accept a photocopy or a scan, for example utilities, mobile phone carriers, credit card issuers and subscription services. Banks, insurers, pension plans, motor vehicle offices and county recorders generally require a certified copy with the raised or colored seal, and keep it.' },
        { q: 'What does it cost to order more copies later?', a: `A second order pays the first-copy fee again, plus any online charge and shipping. In North Carolina, for example, the first copy costs ${t.dFirst} and each extra one ordered at the same time ${t.dAdd}, so copies bought one by one later cost noticeably more than in one order.` },
      ];
    },
    body: (h) => {
      const r = h.rank('death', 8).slice(0, 5).map((x) => [h.J(x.code).nameL, h.m(x.total)]);
      const hi = h.rank('death', 8).slice(-5).reverse().map((x) => [h.J(x.code).nameL, h.m(x.total)]);
      return `<h2>Who keeps an original, who looks and returns it</h2>
<ul><li><strong>Keep a certified copy:</strong> banks and credit unions, life insurance companies, retirement plan and pension administrators, brokerage firms, the motor vehicle office, the county recorder for a real estate deed, the probate court, the Department of Veterans Affairs.</li><li><strong>Usually accept a photocopy:</strong> utilities, phone and internet providers, credit card issuers, subscription services, voter registration, professional associations.</li><li><strong>Usually need nothing from the family:</strong> Social Security, informed by the funeral home in most cases.</li></ul>
<p>When unsure, call and ask whether the institution will return the certified copy after inspection. Several do, which saves a copy.</p>
<h2>Eight copies: the cheapest and the dearest states</h2>
<p>Eight certified copies ordered together, an ordinary count for an estate with a home, a car and a few accounts.</p>
${h.table(['Lowest total', '8 copies'], r, undefined, ['l', 'r'])}
${h.table(['Highest total', '8 copies'], hi, undefined, ['l', 'r'])}
<h2>Why the state of death decides the price</h2>
<p>The copies are sold only by the state where the death took place, so a parent who lived in Florida and died during a stay in Pennsylvania has a Pennsylvania death certificate at Pennsylvania's fee. The full table of fees is on the ${h.a('death-certificate', 'death certificate cost page')}, and the ${h.a('vital-records-office', 'vital records office')} finder gives each state's ordering page.</p>
<!--tool:mini:deathcost|{"state":"PA","copies":8}-->
<h2>Keeping track of the copies</h2>
<p>Write on a list which institution received a copy and on which date. If the estate takes months, some institutions ask for a copy issued recently; a fresh copy then counts as a new order. Executors also need copies of their letters testamentary from the probate court, which the court sells separately; the marriage record of the surviving spouse can be needed too, see ${h.a('marriage-copy', 'marriage certificate copies')}.</p>`;
    },
  },
  es: {
    slug: 'cuantas-actas-de-defuncion-necesito', nav: 'Cuántas actas de defunción', card: 'Una copia por cada institución que se queda con un original: cuéntelas y vea el costo en su estado.',
    title: 'Actas de defunción necesarias: cuántas copias pedir',
    description: 'Cuántas actas de defunción necesita: una copia por banco, aseguradora, pensión, vehículo y condado con inmuebles, más reservas, al precio de su estado.',
    h1: '¿Cuántas actas de defunción necesita?',
    intro: 'Marque las cuentas y los bienes de la herencia: el planificador cuenta las copias certificadas que se quedarán las instituciones y les pone el precio de la oficina estatal.',
    resume: (h) => {
      const s5 = h.stats('death', 5), s10 = h.stats('death', 10);
      return `La mayoría de las sucesiones necesitan entre cinco y diez copias certificadas del acta de defunción, pero el número correcto es el de las instituciones que se quedarán con un original en vez de mirarlo y devolverlo. Cada banco o cooperativa de crédito suele quedarse con una, sea cual sea el número de cuentas; cada aseguradora de vida pide una por reclamo; cada administrador de pensión, 401(k) o IRA y cada casa de bolsa quiere la suya; la oficina de vehículos se queda con una por cada vehículo que cambia de titular, y cada condado donde hay inmuebles inscritos necesita una para limpiar el título. Un juicio sucesorio suma una para el tribunal, y un reclamo de beneficios de entierro o de sobreviviente para veteranos suma otra. El Seguro Social suele necesitar solo el aviso de la funeraria. Añada una o dos de reserva para los trámites imprevistos. Pedirlas todas a la vez es más barato en los estados donde las copias adicionales cuestan menos: cinco copias en un pedido cuestan entre ${h.m(s5.min)} y ${h.m(s5.max)} en las ${h.JURS.length} oficinas, diez entre ${h.m(s10.min)} y ${h.m(s10.max)}. Este cálculo es una estimación de Radif Partners, no una regla legal; pregunte a cada institución antes de enviar un original.`;
    },
    faqs: (h) => {
      const t = h.J('NC');
      return [
        { q: '¿Cuántas actas de defunción debo pedir?', a: 'Cuente una por cada banco, aseguradora de vida, plan de jubilación y casa de bolsa, una por vehículo y por condado con inmuebles, una para el tribunal testamentario si hay juicio, y una para los beneficios de veteranos si se reclaman. La mayoría de las familias llegan a entre cinco y diez, más una o dos de reserva.' },
        { q: '¿El Seguro Social necesita un acta de defunción certificada?', a: 'Normalmente no. En la mayoría de los casos la funeraria informa el fallecimiento al Seguro Social por vía electrónica, y los beneficios de sobreviviente se piden por teléfono o en una oficina. El Seguro Social puede pedir ver una copia certificada en algunos casos y luego la devuelve.' },
        { q: '¿Puedo usar una fotocopia del acta de defunción?', a: 'Muchas entidades aceptan una fotocopia o un escaneo, por ejemplo las empresas de servicios, las compañías de teléfono, los emisores de tarjetas y los servicios de suscripción. Bancos, aseguradoras, planes de pensión, oficinas de vehículos y registradores de condado suelen exigir una copia certificada con el sello en relieve o de color, y se la quedan.' },
        { q: '¿Cuánto cuesta pedir más copias después?', a: `Un segundo pedido vuelve a pagar la tarifa de la primera copia, más el cargo en línea y el envío. En Carolina del Norte, por ejemplo, la primera copia cuesta ${t.dFirst} y cada adicional pedida a la vez ${t.dAdd}, así que las copias compradas una por una más tarde cuestan bastante más que en un solo pedido.` },
      ];
    },
    body: (h) => {
      const r = h.rank('death', 8).slice(0, 5).map((x) => [h.J(x.code).nameL, h.m(x.total)]);
      const hi = h.rank('death', 8).slice(-5).reverse().map((x) => [h.J(x.code).nameL, h.m(x.total)]);
      return `<h2>Quién se queda con un original y quién lo mira y lo devuelve</h2>
<ul><li><strong>Se quedan con una copia certificada:</strong> bancos y cooperativas de crédito, aseguradoras de vida, administradores de planes de jubilación y pensiones, casas de bolsa, la oficina de vehículos, el registrador del condado para una escritura de inmueble, el tribunal testamentario y el Departamento de Asuntos de Veteranos.</li><li><strong>Suelen aceptar una fotocopia:</strong> empresas de servicios, proveedores de teléfono e internet, emisores de tarjetas, servicios de suscripción, el registro electoral y las asociaciones profesionales.</li><li><strong>No suelen pedir nada a la familia:</strong> el Seguro Social, informado por la funeraria en la mayoría de los casos.</li></ul>
<p>Si tiene dudas, llame y pregunte si la institución devolverá la copia certificada tras revisarla. Varias lo hacen, y eso ahorra una copia.</p>
<h2>Ocho copias: los estados más baratos y los más caros</h2>
<p>Ocho copias certificadas pedidas juntas, una cantidad habitual para una herencia con una casa, un auto y algunas cuentas.</p>
${h.table(['Total más bajo', '8 copias'], r, undefined, ['l', 'r'])}
${h.table(['Total más alto', '8 copias'], hi, undefined, ['l', 'r'])}
<h2>Por qué el estado del fallecimiento decide el precio</h2>
<p>Las copias solo las vende el estado donde ocurrió el fallecimiento, así que un padre que vivía en Florida y falleció durante una estancia en Pensilvania tiene un acta de defunción de Pensilvania a la tarifa de Pensilvania. La tabla completa de tarifas está en la ${h.a('death-certificate', 'página del costo del acta de defunción')}, y el buscador de la ${h.a('vital-records-office', 'oficina de registros vitales')} da la página de pedidos de cada estado.</p>
<!--tool:mini:deathcost|{"state":"PA","copies":8}-->
<h2>Llevar la cuenta de las copias</h2>
<p>Anote en una lista qué institución recibió una copia y en qué fecha. Si la sucesión dura meses, algunas instituciones piden una copia emitida hace poco; una copia nueva cuenta entonces como un pedido nuevo. Los albaceas necesitan además copias de sus cartas testamentarias del tribunal, que el tribunal vende aparte; también puede necesitarse el acta de matrimonio del cónyuge sobreviviente, vea ${h.a('marriage-copy', 'copias del acta de matrimonio')}.</p>`;
    },
  },
});
