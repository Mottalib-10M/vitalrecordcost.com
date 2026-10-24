/**
 * Home page text, one block per language. Every figure is read through the helpers (`h`), never typed.
 * Layout and order of the blocks: components/HomePage.astro.
 */
import type { Helpers } from '../lib/helpers';
import type { FAQ } from '../lib/guide-types';
import { stateFees } from '../lib/engine/vital';

export interface HomeText {
  title: string; description: string; h1: string; intro: string;
  resume: (h: Helpers) => string;
  tableIntro: (h: Helpers) => string;
  tableHead: string[];
  tableCaption: (h: Helpers) => string;
  body: (h: Helpers) => string;
  faqs: (h: Helpers) => FAQ[];
}

const cheaperExtra = (h: Helpers) => h.JURS.filter((j) => j.birth.additional != null && j.birth.additional < j.birth.first);
const vendorKnown = (h: Helpers) => h.JURS.filter((j) => j.vendorFee != null).sort((a, b) => (a.vendorFee ?? 0) - (b.vendorFee ?? 0));
const localIssue = (h: Helpers) => h.JURS.filter((j) => j.local);

export const HOME: Record<'en' | 'es', HomeText> = {
  en: {
    title: 'Birth Certificate Cost by State 2026: Every Office Fee',
    description: 'Birth certificate cost in all 50 states, DC and NYC: state fee per certified copy, cheaper extra copies, online vendor charges and official processing times.',
    h1: 'Birth certificate cost by state in 2026',
    intro: 'The fee each state office charges for a certified copy, the price of the extra copies you order with it, and what ordering online adds.',
    resume: (h) => {
      const s = h.stats('birth'), d = h.stats('death'), c = cheaperExtra(h), v = vendorKnown(h);
      return `A certified copy of a birth certificate costs between ${h.m(s.min)} and ${h.m(s.max)} at the office of the state or city where the birth was recorded, and the office in the middle of the list of ${h.JURS.length} charges ${h.m(s.median)}. The lowest fee is in ${s.loL}; the highest is in ${s.hiL}. That price buys the first copy. In ${c.length} jurisdictions each additional copy of the same certificate costs less when it is ordered at the same time, which is why a family that needs one copy for a passport and one for school pays less by ordering both now. Ordering online adds the charge of the vendor the state has chosen: where the office publishes it, it ranges from ${h.m(v[0].vendorFee!)} to ${h.m(v[v.length - 1].vendorFee!)}. A death certificate follows the same pattern, from ${h.m(d.min)} to ${h.m(d.max)} for the first copy. Every fee on this page links to the official page it was read on.`;
    },
    tableIntro: (h) => `The table lists the fee of every state office for one certified copy, each additional copy ordered with it, three copies of the same birth certificate, and the first copy of a death certificate. ${h.a('vital-records-office', 'The office of each state')} and its online channel are on their own page.`,
    tableHead: ['State or city', 'Birth, first copy', 'Each extra copy', '3 birth copies', 'Death, first copy'],
    tableCaption: (h) => `Fees of the state vital records offices read on their official pages, as of ${h.date(h.META.dataAsOf)}. New York State is listed without New York City, which has its own office.`,
    body: (h) => {
      const c = cheaperExtra(h), v = vendorKnown(h), loc = localIssue(h);
      const ga = h.J('GA'), nj = h.J('NJ'), il = h.J('IL'), ca = h.J('CA'), ny = h.J('NY'), nyc = h.J('NYC'), tx = h.J('TX'), fl = h.J('FL'), ma = h.J('MA');
      const biggest = [...c].sort((a, b) => (b.birth.first - (b.birth.additional ?? 0)) - (a.birth.first - (a.birth.additional ?? 0))).slice(0, 4);
      return `<h2>Why the second copy is the one to buy now</h2>
<p>Most people order one copy, use it for a passport or a driver's license, and come back a year later for school enrollment, a Social Security card or a marriage license. The second visit costs the full first-copy fee again. In ${c.length} jurisdictions the extra copies of the same record are cheaper when they are part of the same order: ${h.list(biggest.map((j) => `${h.name(j.code)} (${h.m(j.birth.first)} then ${h.m(j.birth.additional ?? j.birth.first)})`))}. In Georgia, three copies ordered together cost ${ga.b3}, against ${h.m(ga.birth.first * 3)} in three separate orders. New Jersey charges ${nj.bFirst} for the first copy and ${nj.bAdd} for each extra one, so ten copies of a death certificate cost ${h.m(stateFees(nj.death, 10))}.</p>
<p>The other offices charge the same price for every copy. California asks ${ca.bFirst} per birth certificate however many you order, New York State ${ny.bFirst} and Texas ${tx.bFirst}. There, ordering several copies at once saves only the second shipping fee and the second wait.</p>
<!--tool:mini:together|{"state":"GA","copies":3}-->
<h2>What ordering online really adds</h2>
<p>Almost every state sells copies online, but rarely itself: it signs a contract with a vendor that collects the state fee, adds its own charge and forwards the order. ${v.length} offices publish that charge as a single figure. It runs from ${h.m(v[0].vendorFee!)} in ${h.name(v[0].code)} to ${h.m(v[v.length - 1].vendorFee!)} in ${h.name(v[v.length - 1].code)}. In Massachusetts the online price of the first copy is ${h.m(ma.birth.first + (ma.vendorFee ?? 0))} instead of ${ma.bFirst} by mail. New York City adds ${nyc.vendorFeeL} to an online order and New York State charges priority handling on every online copy. Express shipping by courier comes on top and is optional.</p>
<p>The calculator above fills in the vendor charge when the office publishes it. When the office does not, the field is empty and you type the amount shown on the last screen before payment, so the total matches what you will actually pay. Mail and counter orders carry no vendor fee: you pay the state fee by check, money order or card at the office.</p>
<h2>State office, county office or city hall</h2>
<p>A birth certificate is kept by the state where the birth took place, not the state where you live now. In ${loc.length} jurisdictions a county, city or town office can also print certified copies from the same statewide database, often the same day at the counter. The fee may differ: Texas county and local registrars may charge a little more or less than the state's ${tx.bFirst}, Florida county health departments add their own charges to the state's ${fl.bFirst}, and in Ohio local health departments often charge more than the state office. In Massachusetts, Connecticut, Maine, New Hampshire and Vermont the town or city clerk is the usual counter.</p>
<p>New York is the case that sends the most orders to the wrong place. A person born in the Bronx, Brooklyn, Manhattan, Queens or Staten Island orders from the New York City health department (${nyc.bFirst} a copy). A person born anywhere else in the state orders from the New York State Department of Health (${ny.bFirst}) or the local registrar of the town of birth. The two offices do not hold each other's records.</p>
<h2>Certified copy, informational copy, short and long form</h2>
<p>For a passport, a REAL ID driver's license, Social Security, school enrollment or a foreign visa you need a certified copy: printed on security paper, with the raised or multicolored seal of the issuing office and the registrar's signature. An informational or "not for official use" copy carries the same details but cannot be used as identity proof; some states sell it to anyone, while certified copies are limited to the person named, close family and legal representatives. Several states also issue a short form (an abstract, sometimes wallet-sized) and a long form with the parents' names; the State Department asks for the parents' names, so a long-form copy is the safe choice for a passport. The ${h.a('birth-certified-copy', 'certified copy guide')} explains which form each use requires.</p>
<h2>Who may order a birth certificate</h2>
<p>Every state limits certified copies. The person named on the certificate, once an adult, can always order. So can a parent named on it, and a legal guardian or attorney with proof. Many states add the spouse, children, siblings and grandparents; some require a notarized sworn statement with mail orders. You will be asked for a government photo ID, and an order without it is returned. Old birth records open to the public only after a period that each state sets by law, and many then move to the state archives. The ${h.a('birth-certificate', 'step-by-step guide')} walks through the identity documents each channel accepts.</p>
<h2>How long it takes</h2>
<p>Counter service is often the same day. Mail orders take from a few days to several weeks, plus mail time both ways, and some offices publish their current backlog. The ${h.a('birth-how-long', 'processing time page')} gives the time each office states and works out an arrival date.</p>
<h2>Death and marriage records</h2>
<p>A ${h.a('death-certificate', 'death certificate')} costs from ${h.m(h.stats('death').min)} to ${h.m(h.stats('death').max)} for the first copy, and an estate usually needs several: the ${h.a('death-copies', 'copy counter')} estimates how many. A ${h.a('marriage-license', 'marriage license')} is a different document, bought before the wedding from a county or town clerk, with a waiting period in some states and an expiry date in most; the ${h.a('marriage-license-vs-certificate', 'license and certificate page')} explains how one becomes the other.</p>`;
    },
    faqs: (h) => {
      const s = h.stats('birth'), ca = h.J('CA'), tx = h.J('TX'), fl = h.J('FL'), ga = h.J('GA');
      return [
        { q: 'How much is a birth certificate in my state?', a: `It depends on the state of birth: from ${h.m(s.min)} in ${s.loL} to ${h.m(s.max)} in ${s.hiL} for the first certified copy at the state office. California charges ${ca.bFirst}, Texas ${tx.bFirst} and Florida ${fl.bFirst}. The calculator above gives the exact figure for each of the 52 offices, with extra copies and the online fee.` },
        { q: 'Why does the online price differ from the fee on the state website?', a: `The state fee pays for the copy. When you order online, the vendor the state works with adds its own charge, and express shipping is extra. Where the office publishes that charge, the calculator adds it for you; otherwise type the amount shown before payment. Mail and counter orders pay the state fee only.` },
        { q: 'Is it cheaper to order several copies at once?', a: `In ${cheaperExtra(h).length} jurisdictions, yes: extra copies of the same record ordered together cost less than the first. Georgia, for example, charges ${ga.bFirst} and then ${ga.bAdd} per extra copy. In the other states every copy costs the same, and ordering together saves only on shipping.` },
        { q: 'Can I order a birth certificate from the state where I live now?', a: 'No. Only the state, county or city where the birth was recorded holds the record. If you were born in another state, order from that state\'s office, by mail or online; your current state cannot print it. A person born abroad to American parents uses a Consular Report of Birth Abroad from the State Department instead.' },
        { q: 'Do I need a certified copy or a photocopy?', a: 'Passports, REAL ID, Social Security, schools and foreign consulates want a certified copy with the issuing office\'s seal and the registrar\'s signature. A photocopy, even notarized, and an informational copy are refused for identity. Hospital souvenir certificates with footprints are not birth certificates.' },
        { q: 'Are there free birth certificates?', a: 'Some states waive the fee in specific cases: certain veterans and their families, people experiencing homelessness, survivors of domestic violence, or a first copy for a voter ID card, depending on the state. Each waiver needs a form or proof; ask the office before ordering, because the waiver is rarely available online.' },
      ];
    },
  },
  es: {
    title: 'Acta de nacimiento costo por estado 2026: tarifa oficial',
    description: 'Costo del acta de nacimiento en los 50 estados, DC y Nueva York: tarifa estatal por copia, copias extra más baratas, cargos en línea y plazos oficiales.',
    h1: 'Costo del acta de nacimiento por estado en 2026',
    intro: 'La tarifa que cobra cada oficina estatal por una copia certificada, el precio de las copias extra que pide con ella y lo que suma el pedido en línea.',
    resume: (h) => {
      const s = h.stats('birth'), d = h.stats('death'), c = cheaperExtra(h), v = vendorKnown(h);
      return `Una copia certificada del acta de nacimiento cuesta entre ${h.m(s.min)} y ${h.m(s.max)} en la oficina del estado o de la ciudad donde se registró el nacimiento, y la oficina situada en medio de la lista de ${h.JURS.length} cobra ${h.m(s.median)}. La tarifa más baja está en ${s.loL}; la más alta, en ${s.hiL}. Ese precio paga la primera copia. En ${c.length} jurisdicciones, cada copia adicional de la misma acta cuesta menos si se pide al mismo tiempo; por eso una familia que necesita una copia para el pasaporte y otra para la escuela paga menos si las pide juntas. El pedido en línea suma el cargo del proveedor que eligió el estado: donde la oficina lo publica, va de ${h.m(v[0].vendorFee!)} a ${h.m(v[v.length - 1].vendorFee!)}. El acta de defunción sigue la misma lógica, de ${h.m(d.min)} a ${h.m(d.max)} la primera copia. Cada tarifa de esta página enlaza a la página oficial donde se leyó.`;
    },
    tableIntro: (h) => `La tabla da la tarifa de cada oficina estatal por una copia certificada, por cada copia adicional pedida con ella, por tres copias de la misma acta de nacimiento y por la primera copia de un acta de defunción. ${h.a('vital-records-office', 'La oficina de cada estado')} y su canal en línea tienen su propia página.`,
    tableHead: ['Estado o ciudad', 'Nacimiento, 1.ª copia', 'Cada copia extra', '3 copias de nacimiento', 'Defunción, 1.ª copia'],
    tableCaption: (h) => `Tarifas de las oficinas estatales de registros vitales leídas en sus páginas oficiales, al ${h.date(h.META.dataAsOf)}. El estado de Nueva York aparece sin la Ciudad de Nueva York, que tiene su propia oficina.`,
    body: (h) => {
      const c = cheaperExtra(h), v = vendorKnown(h), loc = localIssue(h);
      const ga = h.J('GA'), nj = h.J('NJ'), ca = h.J('CA'), ny = h.J('NY'), nyc = h.J('NYC'), tx = h.J('TX'), fl = h.J('FL'), ma = h.J('MA');
      const biggest = [...c].sort((a, b) => (b.birth.first - (b.birth.additional ?? 0)) - (a.birth.first - (a.birth.additional ?? 0))).slice(0, 4);
      return `<h2>Por qué conviene comprar ya la segunda copia</h2>
<p>Casi todos piden una copia, la usan para el pasaporte o la licencia de manejar y vuelven un año después para la inscripción escolar, la tarjeta del Seguro Social o la licencia de matrimonio. Ese segundo pedido vuelve a costar la tarifa completa de la primera copia. En ${c.length} jurisdicciones las copias adicionales de la misma acta salen más baratas si van en el mismo pedido: ${h.list(biggest.map((j) => `${h.name(j.code)} (${h.m(j.birth.first)} y luego ${h.m(j.birth.additional ?? j.birth.first)})`))}. En Georgia, tres copias pedidas juntas cuestan ${ga.b3}, frente a ${h.m(ga.birth.first * 3)} en tres pedidos separados. Nueva Jersey cobra ${nj.bFirst} por la primera copia y ${nj.bAdd} por cada adicional, así que diez copias de un acta de defunción cuestan ${h.m(stateFees(nj.death, 10))}.</p>
<p>Las demás oficinas cobran lo mismo por cada copia. California pide ${ca.bFirst} por acta de nacimiento, pida las que pida; el estado de Nueva York, ${ny.bFirst}, y Texas, ${tx.bFirst}. Allí, pedir varias copias a la vez solo ahorra el segundo envío y la segunda espera.</p>
<!--tool:mini:together|{"state":"GA","copies":3}-->
<h2>Lo que suma de verdad el pedido en línea</h2>
<p>Casi todos los estados venden copias en línea, pero pocas veces lo hacen ellos mismos: firman un contrato con un proveedor que cobra la tarifa del estado, añade su propio cargo y transmite el pedido. ${v.length} oficinas publican ese cargo como una sola cifra. Va de ${h.m(v[0].vendorFee!)} en ${h.name(v[0].code)} a ${h.m(v[v.length - 1].vendorFee!)} en ${h.name(v[v.length - 1].code)}. En Massachusetts, la primera copia en línea cuesta ${h.m(ma.birth.first + (ma.vendorFee ?? 0))} en vez de ${ma.bFirst} por correo. La Ciudad de Nueva York suma ${nyc.vendorFeeL} a un pedido en línea y el estado de Nueva York cobra un trámite prioritario por cada copia en línea. El envío urgente por mensajería va aparte y es opcional.</p>
<p>La calculadora de arriba completa el cargo del proveedor cuando la oficina lo publica. Cuando no, el campo queda vacío y usted escribe el importe que aparece en la última pantalla antes de pagar, para que el total coincida con lo que pagará. Los pedidos por correo o en ventanilla no llevan cargo de proveedor: se paga la tarifa del estado con cheque, giro postal o tarjeta en la oficina.</p>
<h2>Oficina estatal, del condado o municipal</h2>
<p>El acta de nacimiento la guarda el estado donde ocurrió el nacimiento, no el estado donde usted vive hoy. En ${loc.length} jurisdicciones, una oficina de condado, ciudad o municipio también puede imprimir copias certificadas de la misma base estatal, a menudo el mismo día en ventanilla. La tarifa puede variar: los registradores de condado de Texas pueden cobrar un poco más o menos que los ${tx.bFirst} del estado, los departamentos de salud de los condados de Florida suman sus propios cargos a los ${fl.bFirst} del estado y en Ohio los departamentos de salud locales suelen cobrar más que la oficina estatal. En Massachusetts, Connecticut, Maine, Nueva Hampshire y Vermont la ventanilla habitual es la del secretario municipal.</p>
<p>Nueva York es el caso que más pedidos manda al lugar equivocado. Quien nació en el Bronx, Brooklyn, Manhattan, Queens o Staten Island pide al departamento de salud de la Ciudad de Nueva York (${nyc.bFirst} la copia). Quien nació en cualquier otro lugar del estado pide al Departamento de Salud del Estado de Nueva York (${ny.bFirst}) o al registrador local del municipio de nacimiento. Ninguna de las dos oficinas tiene las actas de la otra.</p>
<h2>Copia certificada, informativa, versión corta y larga</h2>
<p>Para el pasaporte, la licencia REAL ID, el Seguro Social, la escuela o una visa extranjera se necesita una copia certificada: impresa en papel de seguridad, con el sello en relieve o multicolor de la oficina y la firma del registrador. Una copia informativa, marcada «no válida para fines oficiales», trae los mismos datos pero no sirve como prueba de identidad; algunos estados la venden a cualquiera, mientras que la certificada se reserva a la persona inscrita, su familia cercana y sus representantes legales. Varios estados emiten además una versión corta (un extracto, a veces de tamaño cartera) y una larga con los nombres de los padres; el Departamento de Estado pide esos nombres, así que la versión larga es la opción segura para el pasaporte. La ${h.a('birth-certified-copy', 'guía de la copia certificada')} explica qué versión pide cada trámite.</p>
<h2>Quién puede pedir un acta de nacimiento</h2>
<p>Todos los estados limitan las copias certificadas. La persona inscrita, ya adulta, siempre puede pedirla. También un padre o una madre que figure en el acta, y un tutor legal o un abogado con prueba. Muchos estados agregan al cónyuge, los hijos, los hermanos y los abuelos; algunos exigen una declaración jurada ante notario en los pedidos por correo. Le pedirán una identificación oficial con foto, y un pedido sin ella se devuelve. Las actas antiguas solo se abren al público tras un plazo que fija la ley de cada estado, y muchas pasan después al archivo estatal. La ${h.a('birth-certificate', 'guía paso a paso')} detalla los documentos de identidad que acepta cada canal.</p>
<h2>Cuánto tarda</h2>
<p>En ventanilla suele entregarse el mismo día. Por correo tarda de unos días a varias semanas, más el correo de ida y vuelta, y algunas oficinas publican su retraso actual. La ${h.a('birth-how-long', 'página de plazos')} da el plazo que indica cada oficina y calcula una fecha de llegada.</p>
<h2>Actas de defunción y de matrimonio</h2>
<p>Un ${h.a('death-certificate', 'acta de defunción')} cuesta de ${h.m(h.stats('death').min)} a ${h.m(h.stats('death').max)} la primera copia, y una sucesión suele necesitar varias: el ${h.a('death-copies', 'contador de copias')} estima cuántas. La ${h.a('marriage-license', 'licencia de matrimonio')} es otro documento: se compra antes de la boda al secretario del condado o del municipio, con una espera en algunos estados y una fecha de vencimiento en casi todos; la ${h.a('marriage-license-vs-certificate', 'página sobre licencia y acta')} explica cómo una se convierte en la otra.</p>`;
    },
    faqs: (h) => {
      const s = h.stats('birth'), ca = h.J('CA'), tx = h.J('TX'), fl = h.J('FL'), ga = h.J('GA');
      return [
        { q: '¿Cuánto cuesta un acta de nacimiento en mi estado?', a: `Depende del estado de nacimiento: de ${h.m(s.min)} en ${s.loL} a ${h.m(s.max)} en ${s.hiL} por la primera copia certificada en la oficina estatal. California cobra ${ca.bFirst}, Texas ${tx.bFirst} y Florida ${fl.bFirst}. La calculadora de arriba da la cifra exacta de cada una de las 52 oficinas, con las copias extra y el cargo en línea.` },
        { q: '¿Por qué el precio en línea no coincide con la tarifa del sitio del estado?', a: `La tarifa del estado paga la copia. Al pedir en línea, el proveedor con el que trabaja el estado suma su propio cargo, y el envío urgente va aparte. Donde la oficina publica ese cargo, la calculadora lo suma por usted; si no, escriba el importe que aparece antes de pagar. Por correo o en ventanilla solo se paga la tarifa del estado.` },
        { q: '¿Sale más barato pedir varias copias a la vez?', a: `En ${cheaperExtra(h).length} jurisdicciones, sí: las copias extra de la misma acta pedidas juntas cuestan menos que la primera. Georgia, por ejemplo, cobra ${ga.bFirst} y luego ${ga.bAdd} por cada copia extra. En los demás estados cada copia cuesta lo mismo y pedirlas juntas solo ahorra en el envío.` },
        { q: '¿Puedo pedir el acta en el estado donde vivo ahora?', a: 'No. Solo el estado, el condado o la ciudad donde se registró el nacimiento guarda el acta. Si nació en otro estado, pídala a la oficina de ese estado, por correo o en línea; su estado actual no puede imprimirla. Quien nació en el extranjero de padres estadounidenses usa el Informe Consular de Nacimiento en el Extranjero del Departamento de Estado.' },
        { q: '¿Necesito una copia certificada o basta una fotocopia?', a: 'El pasaporte, la REAL ID, el Seguro Social, las escuelas y los consulados extranjeros piden una copia certificada con el sello de la oficina y la firma del registrador. Una fotocopia, aunque esté notariada, y una copia informativa se rechazan como prueba de identidad. El certificado de recuerdo del hospital con las huellas no es un acta de nacimiento.' },
        { q: '¿Hay actas de nacimiento gratis?', a: 'Algunos estados eximen de la tarifa en casos concretos: ciertos veteranos y sus familias, personas sin hogar, sobrevivientes de violencia doméstica o una primera copia para la identificación de votante, según el estado. Cada exención pide un formulario o una prueba; pregunte a la oficina antes de pedir, porque rara vez se ofrece en línea.' },
      ];
    },
  },
};
