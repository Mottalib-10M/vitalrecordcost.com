import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'death-certificate', group: 'death', order: 10,
  tool: { kind: 'order', props: { state: 'TX', kind: 'death', copies: 5 } },
  mini: { kind: 'mini:deathcost', props: { state: 'TX', copies: 5 } },
  related: ['death-copies', 'vital-records-office', 'home', 'birth-fl', 'marriage-copy', 'birth-certified-copy'],
  sources: [],
  en: {
    slug: 'death-certificate', nav: 'Death certificate cost', card: 'Price of a certified copy in every state, who may order and the cheapest way to order several.',
    title: 'Death Certificate Cost 2026: Fee by State, Who Can Order',
    description: 'Death certificate cost in 2026 in all 50 states, DC and New York City: first and extra copy fees, who may order, where to order and what 5 or 10 copies cost.',
    h1: 'Death certificate: what a certified copy costs in each state',
    intro: 'The fee of every state office for the first copy and the extra ones, the people allowed to order, and the order total for the number of copies an estate needs.',
    resume: (h) => {
      const s = h.stats('death'), s5 = h.stats('death', 5);
      return `A certified copy of a death certificate costs between ${h.m(s.min)} and ${h.m(s.max)} at the state vital records offices in 2026, with a median of ${h.m(s.median)} across the ${h.JURS.length} offices covered here (50 states, the District of Columbia and New York City). The cheapest first copy is in ${s.loL} and the most expensive in ${s.hiL}. Many states charge less for each extra copy ordered at the same time, which matters because settling an estate usually takes several copies: five copies in one order cost from ${h.m(s5.min)} to ${h.m(s5.max)} depending on the state. The funeral home normally orders the first copies right after the death and adds them to its bill; later copies come from the state office or a local registrar of the place of death, never of the place of residence. Most states limit certified copies to the spouse, close relatives, the executor and people with a legal interest, and some issue a version without the cause of death to everyone else. Fees were read on each office's official page; the date is shown for each state.`;
    },
    faqs: (h) => {
      const s = h.stats('death'), t = h.J('TX');
      return [
        { q: 'How much does a death certificate cost?', a: `From ${h.m(s.min)} to ${h.m(s.max)} for the first certified copy, depending on the state, with a median of ${h.m(s.median)}. In Texas, for example, the first copy costs ${t.dFirst} and each extra copy ${t.dAdd}. Online orders add the vendor's charge, and funeral homes pass on the state fee in their invoice.` },
        { q: 'Who can order a death certificate?', a: 'Usually the spouse, parents, children, siblings and grandparents, the executor or administrator of the estate, and people who prove a legal or property right, such as a beneficiary of an insurance policy. Several states sell an informational or cause-free copy to anyone; it is not accepted to settle accounts.' },
        { q: 'Where do I order a death certificate?', a: 'From the state where the death happened, not where the person lived. The funeral director files the record and normally orders the first copies. Afterwards, order from that state\'s vital records office, online through its authorized vendor, or at the local registrar or county office of the place of death.' },
        { q: 'How soon after a death can I get the certificate?', a: 'The record must first be completed by the funeral home and signed by the doctor or medical examiner, which takes from a few days to several weeks if the cause is pending. Copies ordered through the funeral home arrive once the record is registered; a pending cause can delay the final certificate.' },
        { q: 'Do I need the version with the cause of death?', a: 'For life insurance claims, and often for pensions and some banks, yes. Other organizations accept a copy without it. Where a state issues both, ordering a few full copies and a few without the cause keeps private information out of files that do not need it.' },
      ];
    },
    body: (h) => {
      const rows = h.rank('death', 5).map((x) => { const j = h.J(x.code); return [j.nameL, j.dFirst, j.dAdd, j.d5, j.d10]; });
      return `<h2>Death certificate fees in all 52 offices</h2>
<p>Sorted from the cheapest to the most expensive total for five copies in one order, the count many families end up needing. The figures are state fees, without the online charge or shipping.</p>
${h.table(['Office', 'First copy', 'Each extra copy', '5 copies', '10 copies'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<h2>The order of events</h2>
<ol><li>The funeral home collects the personal details from the family and files the record with the local registrar.</li><li>The doctor, coroner or medical examiner certifies the cause of death.</li><li>The record is registered, and the funeral home receives the copies the family asked for.</li><li>Banks, insurers, pension funds, motor vehicle offices and the probate court each keep or examine a copy.</li></ol>
<p>Ordering every copy at step 3 is the cheapest moment in states where extra copies cost less. The ${h.a('death-copies', 'copy planner')} counts how many you need from the list of accounts and assets.</p>
<!--tool:mini:together|{"state":"FL","kind":1,"copies":8}-->
<h2>When the cause of death is pending</h2>
<p>If an autopsy or toxicology report is awaited, the record can be registered with the cause marked as pending. Some institutions accept that version to freeze accounts or start a claim; life insurers usually wait for the final one. Once the cause is entered, order new copies: the pending ones are not updated.</p>
<h2>Death abroad or in another state</h2>
<p>A death outside the United States is not registered by any state; the U.S. embassy or consulate issues a Consular Report of Death of a U.S. Citizen Abroad, and the local foreign certificate remains the primary record. A death in another state is ordered from that state, whatever the residence, through the ${h.a('vital-records-office', 'vital records office')} of the place of death.</p>`;
    },
  },
  es: {
    slug: 'acta-de-defuncion', nav: 'Costo del acta de defunción', card: 'Precio de una copia certificada en cada estado, quién puede pedirla y la forma más barata de pedir varias.',
    title: 'Acta de defunción costo 2026: tarifa y copias por estado',
    description: 'Costo del acta de defunción en 2026 en los 50 estados, DC y Nueva York: primera copia, adicionales, quién puede pedirla, dónde, y el total de 5 o 10 copias.',
    h1: 'Acta de defunción: lo que cuesta una copia certificada en cada estado',
    intro: 'La tarifa de cada oficina estatal por la primera copia y las adicionales, quién puede pedirla y el total del pedido según las copias que necesita una sucesión.',
    resume: (h) => {
      const s = h.stats('death'), s5 = h.stats('death', 5);
      return `Una copia certificada del acta de defunción cuesta entre ${h.m(s.min)} y ${h.m(s.max)} en las oficinas estatales de registros vitales en 2026, con una mediana de ${h.m(s.median)} en las ${h.JURS.length} oficinas cubiertas aquí (los 50 estados, el Distrito de Columbia y la Ciudad de Nueva York). La primera copia más barata está en ${s.loL} y la más cara en ${s.hiL}. Muchos estados cobran menos por cada copia adicional pedida a la vez, lo que importa porque cerrar una sucesión suele requerir varias: cinco copias en un solo pedido cuestan de ${h.m(s5.min)} a ${h.m(s5.max)} según el estado. La funeraria suele pedir las primeras copias justo después del fallecimiento y las incluye en su factura; las copias posteriores se piden a la oficina estatal o a un registrador local del lugar del fallecimiento, nunca del lugar de residencia. La mayoría de los estados reservan las copias certificadas al cónyuge, los familiares cercanos, el albacea y quienes tienen un interés legal, y algunos emiten para los demás una versión sin la causa de muerte. Las tarifas se leyeron en la página oficial de cada oficina; la fecha figura para cada estado.`;
    },
    faqs: (h) => {
      const s = h.stats('death'), t = h.J('TX');
      return [
        { q: '¿Cuánto cuesta un acta de defunción?', a: `De ${h.m(s.min)} a ${h.m(s.max)} por la primera copia certificada, según el estado, con una mediana de ${h.m(s.median)}. En Texas, por ejemplo, la primera copia cuesta ${t.dFirst} y cada adicional ${t.dAdd}. Los pedidos en línea suman el cargo del proveedor, y las funerarias trasladan la tarifa estatal a su factura.` },
        { q: '¿Quién puede pedir un acta de defunción?', a: 'Por lo general el cónyuge, los padres, hijos, hermanos y abuelos, el albacea o administrador de la herencia y quienes prueban un derecho legal o patrimonial, como el beneficiario de un seguro. Varios estados venden a cualquiera una copia informativa o sin causa de muerte; no sirve para cerrar cuentas.' },
        { q: '¿Dónde se pide un acta de defunción?', a: 'En el estado donde ocurrió el fallecimiento, no donde vivía la persona. El director de la funeraria presenta el registro y normalmente pide las primeras copias. Después, pídalas a la oficina de registros vitales de ese estado, en línea con su proveedor autorizado o al registrador local o del condado del lugar del fallecimiento.' },
        { q: '¿Cuánto tiempo después del fallecimiento se obtiene el acta?', a: 'Primero la funeraria debe completar el registro y el médico o el médico forense debe firmarlo, lo que lleva de unos días a varias semanas si la causa está pendiente. Las copias pedidas por la funeraria llegan cuando el registro queda inscrito; una causa pendiente puede retrasar el acta definitiva.' },
        { q: '¿Necesito la versión con la causa de muerte?', a: 'Para cobrar un seguro de vida, y a menudo para pensiones y algunos bancos, sí. Otras entidades aceptan una copia sin ella. Donde un estado emite las dos, pedir unas pocas copias completas y otras sin la causa evita que datos privados acaben en expedientes que no los necesitan.' },
      ];
    },
    body: (h) => {
      const rows = h.rank('death', 5).map((x) => { const j = h.J(x.code); return [j.nameL, j.dFirst, j.dAdd, j.d5, j.d10]; });
      return `<h2>Tarifas del acta de defunción en las 52 oficinas</h2>
<p>Ordenadas del total más barato al más caro para cinco copias en un pedido, la cantidad que muchas familias acaban necesitando. Las cifras son tarifas estatales, sin el cargo en línea ni el envío.</p>
${h.table(['Oficina', 'Primera copia', 'Cada copia adicional', '5 copias', '10 copias'], rows, undefined, ['l', 'r', 'r', 'r', 'r'])}
<h2>El orden de los pasos</h2>
<ol><li>La funeraria recoge los datos personales con la familia y presenta el registro ante el registrador local.</li><li>El médico, el juez de instrucción o el médico forense certifica la causa de muerte.</li><li>El registro queda inscrito y la funeraria recibe las copias que pidió la familia.</li><li>Bancos, aseguradoras, fondos de pensiones, oficinas de vehículos y el tribunal testamentario se quedan o examinan cada uno una copia.</li></ol>
<p>Pedir todas las copias en el paso 3 es el momento más barato en los estados donde las copias adicionales cuestan menos. El ${h.a('death-copies', 'planificador de copias')} cuenta cuántas necesita a partir de la lista de cuentas y bienes.</p>
<!--tool:mini:together|{"state":"FL","kind":1,"copies":8}-->
<h2>Cuando la causa de muerte está pendiente</h2>
<p>Si se espera una autopsia o un informe toxicológico, el registro puede inscribirse con la causa marcada como pendiente. Algunas entidades aceptan esa versión para congelar cuentas o iniciar un reclamo; las aseguradoras de vida suelen esperar la definitiva. Cuando se anota la causa, pida copias nuevas: las pendientes no se actualizan.</p>
<h2>Fallecimiento en el extranjero o en otro estado</h2>
<p>Un fallecimiento fuera de Estados Unidos no lo inscribe ningún estado; la embajada o el consulado emite un Informe Consular de Defunción de un Ciudadano de EE. UU. en el Extranjero, y el acta local extranjera sigue siendo el registro principal. Un fallecimiento en otro estado se pide a ese estado, sea cual sea la residencia, en la ${h.a('vital-records-office', 'oficina de registros vitales')} del lugar del fallecimiento.</p>`;
    },
  },
});
