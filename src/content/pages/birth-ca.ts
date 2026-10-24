import { definePage } from '../../lib/guide-types';

const NEIGHBORS = ['OR', 'NV', 'AZ'];

export default definePage({
  id: 'birth-ca', group: 'states', order: 101, state: 'CA',
  tool: { kind: 'order', props: { state: 'CA', copies: 1 } },
  mini: { kind: 'mini:pair', props: { state: 'CA' } },
  related: ['home', 'ml-ca', 'birth-certified-copy', 'birth-replacement', 'death-certificate', 'birth-amended'],
  sources: [],
  en: {
    slug: 'birth-certificate/california', nav: 'California birth certificate', card: 'CDPH fee, county recorders, authorized or informational copy and the sworn statement.',
    title: 'Birth Certificate California 2026: CDPH Fee, County Copy',
    description: 'California birth certificate cost in 2026: the CDPH fee per copy, county recorder counters, authorized versus informational copies and the sworn statement.',
    h1: 'California birth certificate: fee, county office and copy type',
    intro: 'The state fee, why a county recorder is often the faster door, and the one choice that decides whether the copy will be accepted: authorized or informational.',
    resume: (h) => {
      const t = h.J('CA'), s = h.stats('birth');
      return `California charges ${t.bFirst} for each certified copy of a birth certificate, the same price for every copy, whether the order goes to the California Department of Public Health (CDPH) in Sacramento or to the county recorder of the county of birth. That is one of the higher fees in the country: the median of the ${h.JURS.length} offices is ${h.m(s.median)}. The figure that matters as much as the price is the type of copy. An authorized certified copy is the one accepted for a passport, a driver's license or Social Security; only the person named, close family and a few others may obtain it, and they sign a sworn statement under penalty of perjury. Anyone may order an informational certified copy, stamped as not valid to establish identity, which is useful for genealogy but refused by agencies. County recorders hold births registered in their county and often issue copies at the counter, while the state office mainly works by mail. A California death certificate costs ${t.dFirst} per copy. Fees were read on the CDPH fee page on ${h.date(t.retrievedAt)}.`;
    },
    faqs: (h) => {
      const t = h.J('CA');
      return [
        { q: 'How much is a California birth certificate in 2026?', a: `${t.bFirst} per certified copy, and every copy costs the same, so three copies cost ${t.b3}. The fee is set by state law and charged by CDPH and by county recorders alike. Ordering online through an approved vendor adds the vendor's charge, and express delivery is extra.` },
        { q: 'What is the difference between an authorized and an informational copy?', a: 'Both are certified, but only the authorized copy can establish identity. The informational copy carries a printed line saying it is not valid for that purpose, so a passport office or the DMV will refuse it. Order the authorized copy for any official use, and the informational copy only for research or family history.' },
        { q: 'Do I need a notarized form to order a California birth certificate?', a: 'For an authorized copy ordered by mail, yes: the sworn statement on the application must be signed in front of a notary unless you sign it in person at a county counter. Online vendors replace the notary with an identity check. An informational copy requires no sworn statement.' },
        { q: 'Should I order from CDPH or from the county?', a: 'From the county recorder of the county of birth when you can. Counties hold the records registered locally and usually serve faster, often the same day at the counter. CDPH holds every California birth and is the fallback when you do not know the county or the record is very old.' },
      ];
    },
    body: (h) => {
      const t = h.J('CA');
      const rows = ['CA', ...NEIGHBORS].map((c) => { const j = h.J(c); return [c === 'CA' ? `<strong>${j.nameL}</strong>` : j.nameL, j.bFirst, j.bAdd, j.b3, j.dFirst]; });
      return `<h2>Sacramento or the county recorder</h2>
<p>California runs two layers of offices that sell the same certified copy at the same price. The county recorder, or in some counties the health department, keeps the births registered in that county and is the faster door for most people: counter service, local mail, sometimes an appointment system. The state office of CDPH keeps a copy of every birth registered since 1905 and serves everyone else, mostly by mail. ${t.vendorL}</p>
<p>A practical rule: if you were born in Los Angeles, order from Los Angeles County; if you were born in a small county far from where you live, compare that county's mail service with an online order before choosing CDPH.</p>
<h2>The sworn statement, step by step</h2>
<ol><li>Fill in the application and tick authorized copy.</li><li>Sign the sworn statement saying you are the person named or an eligible relative.</li><li>Have the signature notarized if you mail the form; at a counter, the clerk witnesses it.</li><li>Pay ${t.bFirst} per copy by check or money order, or by card at the counter.</li></ol>
<p>Eligible people include the registrant, parents and legal guardians, children, grandparents, grandchildren, siblings, a spouse or domestic partner, and some attorneys and agencies. Anyone else receives the informational version.</p>
<h2>California and the other western offices</h2>
${h.table(['State', 'Birth, first copy', 'Each extra copy', '3 copies', 'Death, first copy'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<p>Every California copy costs the full fee, so the saving of ordering several at once that exists in many states is absent here; the tool below ranks every office for the number of copies you need. See ${h.a('birth-certified-copy', 'certified copy or not')} for the wording agencies look for.</p>
<!--tool:mini:rank|{"copies":3}-->
<h2>Corrections and other records</h2>
<p>A wrong letter in a name or a missing parent is fixed with an affidavit to amend a record filed with CDPH, which has its own fee; the ${h.a('birth-amended', 'amended certificate page')} explains it. A California ${h.a('death-certificate', 'death certificate')} costs ${t.dFirst} a copy, also with an authorized and an informational version. Marriage licenses are sold by the county clerk: see ${h.a('ml-ca', 'California marriage license')}.</p>`;
    },
  },
  es: {
    slug: 'acta-de-nacimiento/california', nav: 'Acta de nacimiento de California', card: 'Tarifa del CDPH, registradores de condado, copia autorizada o informativa y declaración jurada.',
    title: 'Acta de nacimiento California 2026: tarifa CDPH y condado',
    description: 'Acta de nacimiento de California en 2026: tarifa del CDPH por copia, el registrador del condado, copia autorizada o informativa y la declaración jurada.',
    h1: 'Acta de nacimiento de California: tarifa, oficina y tipo de copia',
    intro: 'La tarifa estatal, por qué el registrador del condado suele ser la vía más rápida y la elección que decide si la copia será aceptada: autorizada o informativa.',
    resume: (h) => {
      const t = h.J('CA'), s = h.stats('birth');
      return `California cobra ${t.bFirst} por cada copia certificada del acta de nacimiento, el mismo precio para todas las copias, tanto si el pedido va al Departamento de Salud Pública de California (CDPH) en Sacramento como al registrador del condado de nacimiento. Es una de las tarifas más altas del país: la mediana de las ${h.JURS.length} oficinas es ${h.m(s.median)}. Tan importante como el precio es el tipo de copia. La copia certificada autorizada es la que se acepta para el pasaporte, la licencia de manejar o el Seguro Social; solo pueden obtenerla la persona inscrita, sus familiares cercanos y algunos otros, que firman una declaración jurada bajo pena de perjurio. Cualquiera puede pedir una copia certificada informativa, sellada como no válida para acreditar identidad, útil para la genealogía pero rechazada por las agencias. Los registradores de condado guardan los nacimientos inscritos en su condado y a menudo entregan copias en ventanilla, mientras que la oficina estatal trabaja sobre todo por correo. Un acta de defunción de California cuesta ${t.dFirst} por copia. Las tarifas se leyeron en la página del CDPH el ${h.date(t.retrievedAt)}.`;
    },
    faqs: (h) => {
      const t = h.J('CA');
      return [
        { q: '¿Cuánto cuesta un acta de nacimiento de California en 2026?', a: `${t.bFirst} por copia certificada, y todas las copias cuestan lo mismo, así que tres copias cuestan ${t.b3}. La tarifa la fija la ley estatal y la cobran igual el CDPH y los registradores de condado. Pedir en línea con un proveedor aprobado suma su cargo, y el envío urgente es aparte.` },
        { q: '¿Qué diferencia hay entre una copia autorizada y una informativa?', a: 'Las dos son certificadas, pero solo la autorizada sirve para acreditar identidad. La informativa lleva impresa una línea que dice que no es válida para ese fin, así que la oficina de pasaportes o el DMV la rechazan. Pida la autorizada para cualquier trámite oficial y la informativa solo para investigación o historia familiar.' },
        { q: '¿Necesito un formulario notariado para pedir el acta en California?', a: 'Para una copia autorizada pedida por correo, sí: la declaración jurada de la solicitud debe firmarse ante notario, salvo que la firme en persona en la ventanilla del condado. Los proveedores en línea sustituyen al notario por una verificación de identidad. La copia informativa no requiere declaración jurada.' },
        { q: '¿Conviene pedirla al CDPH o al condado?', a: 'Al registrador del condado de nacimiento cuando sea posible. Los condados guardan los registros inscritos localmente y suelen atender más rápido, a menudo el mismo día en ventanilla. El CDPH guarda todos los nacimientos de California y es la opción cuando no sabe el condado o el registro es muy antiguo.' },
      ];
    },
    body: (h) => {
      const t = h.J('CA');
      const rows = ['CA', ...NEIGHBORS].map((c) => { const j = h.J(c); return [c === 'CA' ? `<strong>${j.nameL}</strong>` : j.nameL, j.bFirst, j.bAdd, j.b3, j.dFirst]; });
      return `<h2>Sacramento o el registrador del condado</h2>
<p>California tiene dos niveles de oficinas que venden la misma copia certificada al mismo precio. El registrador del condado, o en algunos condados el departamento de salud, guarda los nacimientos inscritos en ese condado y es la vía más rápida para la mayoría: atención en ventanilla, correo local y a veces citas. La oficina estatal del CDPH guarda una copia de cada nacimiento inscrito desde 1905 y atiende a todos los demás, sobre todo por correo. ${t.vendorL}</p>
<p>Una regla práctica: si nació en Los Ángeles, pídala al condado de Los Ángeles; si nació en un condado pequeño lejos de donde vive, compare el servicio por correo de ese condado con un pedido en línea antes de elegir el CDPH.</p>
<h2>La declaración jurada, paso a paso</h2>
<ol><li>Llene la solicitud y marque copia autorizada.</li><li>Firme la declaración jurada que dice que usted es la persona inscrita o un familiar con derecho.</li><li>Haga notariar la firma si envía el formulario por correo; en ventanilla, el empleado la presencia.</li><li>Pague ${t.bFirst} por copia con cheque o giro postal, o con tarjeta en ventanilla.</li></ol>
<p>Tienen derecho la persona inscrita, los padres y tutores legales, los hijos, abuelos, nietos, hermanos, el cónyuge o pareja de hecho registrada, y algunos abogados y agencias. Cualquier otra persona recibe la versión informativa.</p>
<h2>California y las demás oficinas del oeste</h2>
${h.table(['Estado', 'Nacimiento, primera copia', 'Cada copia adicional', '3 copias', 'Defunción, primera copia'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<p>En California cada copia paga la tarifa completa, así que el ahorro por pedir varias a la vez que existe en muchos estados aquí no existe; la herramienta de abajo ordena todas las oficinas según las copias que necesite. Vea ${h.a('birth-certified-copy', 'copia certificada o no')} para el texto que buscan las agencias.</p>
<!--tool:mini:rank|{"copies":3}-->
<h2>Correcciones y otras actas</h2>
<p>Una letra equivocada en un nombre o un padre que falta se corrigen con una declaración para enmendar el registro presentada ante el CDPH, que tiene su propia tarifa; la ${h.a('birth-amended', 'página del acta enmendada')} lo explica. Un ${h.a('death-certificate', 'acta de defunción')} de California cuesta ${t.dFirst} por copia, también en versión autorizada o informativa. Las licencias de matrimonio las vende el secretario del condado: vea ${h.a('ml-ca', 'licencia de matrimonio de California')}.</p>`;
    },
  },
});
