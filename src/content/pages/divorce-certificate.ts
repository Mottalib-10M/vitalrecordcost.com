import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'divorce-certificate', group: 'marriage', order: 60,
  tool: { kind: 'mini:divorce', props: { state: 'FL' } },
  mini: { kind: 'mini:marrcopy', props: { state: 'NY', copies: 1 } },
  related: ['marriage-copy', 'name-change', 'marriage-license', 'vital-records-office', 'birth-ny', 'common-law'],
  sources: [],
  en: {
    slug: 'divorce-certificate', nav: 'Divorce certificate', card: 'State certificate or court decree: which one you need, who issues it in each state and the fee.',
    title: 'Divorce Certificate 2026: Decree or State Copy, Fee',
    description: 'Divorce certificate in 2026: how it differs from the decree, the states whose vital records office issues one, its fee, and where the court decree is ordered.',
    h1: 'Divorce certificate or divorce decree: which one and where',
    intro: 'Pick the state where the divorce was granted: the tool shows whether the state issues a certificate and its fee, or whether only the court clerk can help.',
    resume: (h) => {
      const all = h.JURS.filter((j) => j.divorceRecord);
      const st = all.filter((j) => j.divorceRecord?.where === 'both');
      const fees = st.map((j) => j.divorceRecord?.first).filter((x): x is number => x != null);
      return `Two different documents prove a divorce. The divorce decree, or judgment of dissolution, is the court's order: it is several pages long, sets out the terms on property, support and children, and a certified copy comes only from the clerk of the court that granted it, in the county where the case was heard. The divorce certificate is a one-page abstract kept by some state vital records offices, giving the names, the date and the place of the divorce, without the terms. Of the ${all.length} jurisdictions covered here, ${st.length} have a state office that issues such a certificate, usually for divorces since a given year, at a first-copy fee from ${h.m(Math.min(...fees))} to ${h.m(Math.max(...fees))}; in the other ${all.length - st.length}, the court is the only source, and the state at most confirms that a divorce took place. The certificate is enough for many uses, such as remarrying in some states or updating records; a name change back to a former name, a property transfer or a support matter needs the certified decree. Both are ordered from the state where the divorce was granted, whatever your residence. Fees and rules were read on official pages, with the date for each state.`;
    },
    faqs: (h) => {
      const ny = h.J('NY');
      return [
        { q: 'What is the difference between a divorce certificate and a divorce decree?', a: 'The decree is the court\'s full judgment, with the terms of the divorce, issued by the clerk of court. The certificate is a short record kept by some state vital records offices, showing only that a divorce took place, between whom, when and where. Agencies that need the terms ask for the certified decree.' },
        { q: 'How do I get a copy of my divorce certificate?', a: `If the state issues one, order it from the state vital records office, by mail or through its online vendor. New York State, for example, issues divorce certificates by mail at ${ny.div?.first != null ? h.m(ny.div.first) : h.nc}. Elsewhere, order a certified copy of the decree from the clerk of the court that granted the divorce.` },
        { q: 'Do I need a divorce certificate to remarry?', a: 'Many marriage license offices ask only for the date the last marriage ended; some ask to see a copy of the divorce decree or certificate, especially if the divorce was recent. Check the county office that will issue the new license before the appointment.' },
        { q: 'Who can order a divorce record?', a: 'The divorced spouses can always order one. Many states also allow their adult children, parents and legal representatives, while others restrict certificates to the parties and their attorneys. Court decrees are often public records, but some parts, such as financial and child information, can be sealed.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j0) => { const j = h.J(j0.code); const d = j.div; return [j.nameL, d?.where === 'both' ? (h.es ? 'Estado y tribunal' : 'State and court') : (h.es ? 'Solo el tribunal' : 'Court only'), d?.first != null && d.where !== 'county' ? h.m(d.first) : '–', d?.url ? h.ext(d.url, h.es ? 'página oficial' : 'official page') : '–']; });
      return `<h2>Who issues divorce records, state by state</h2>
<p>“State fee” is the first-copy fee of the state vital records office for its divorce certificate; where the court is the only source, it is left blank. Court fees for a certified decree are set by each court.</p>
${h.table(['State', 'Issued by', 'State fee', 'Source'], rows, undefined, ['l', 'l', 'r', 'l'])}
<h2>Ordering a certified decree</h2>
<ol><li>Find the court: the county and the case number are on any paper from the case.</li><li>Ask the clerk of that court for a certified copy of the final decree or judgment.</li><li>Pay the copy fee, often per page, and the certification fee.</li><li>Allow for older files kept in archives, which take longer.</li></ol>
<!--tool:mini:marrcopy|{"state":"NY","copies":1}-->
<h2>Using it afterwards</h2>
<p>To return to a former name, the decree usually has to say so; then Social Security and the motor vehicle office accept it in the same way as a marriage certificate, as the ${h.a('name-change', 'name change page')} explains. To prove the earlier marriage, order a ${h.a('marriage-copy', 'marriage certificate copy')}. This page describes the records, not the legal effects of a divorce, which depend on each case.</p>`;
    },
  },
  es: {
    slug: 'acta-de-divorcio', nav: 'Acta de divorcio', card: 'Acta estatal o sentencia del tribunal: cuál necesita, quién la emite en cada estado y la tarifa.',
    title: 'Acta de divorcio 2026: sentencia o copia estatal, tarifa',
    description: 'Acta de divorcio en 2026: en qué se distingue de la sentencia, los estados cuya oficina de registros vitales la emite, su tarifa y dónde pedir la sentencia.',
    h1: 'Acta o sentencia de divorcio: cuál y dónde pedirla',
    intro: 'Elija el estado donde se concedió el divorcio: la herramienta muestra si el estado emite un acta y su tarifa, o si solo el secretario del tribunal puede ayudar.',
    resume: (h) => {
      const all = h.JURS.filter((j) => j.divorceRecord);
      const st = all.filter((j) => j.divorceRecord?.where === 'both');
      const fees = st.map((j) => j.divorceRecord?.first).filter((x): x is number => x != null);
      return `Dos documentos distintos prueban un divorcio. La sentencia de divorcio, o fallo de disolución, es la resolución del tribunal: tiene varias páginas, fija los términos sobre bienes, pensiones e hijos, y una copia certificada solo la emite el secretario del tribunal que la dictó, en el condado donde se vio el caso. El acta de divorcio es un extracto de una página que guardan algunas oficinas estatales de registros vitales, con los nombres, la fecha y el lugar del divorcio, sin los términos. De las ${all.length} jurisdicciones cubiertas aquí, ${st.length} tienen una oficina estatal que emite esa acta, por lo general para divorcios desde cierto año, a una tarifa por primera copia de ${h.m(Math.min(...fees))} a ${h.m(Math.max(...fees))}; en las otras ${all.length - st.length}, el tribunal es la única fuente, y el estado como mucho confirma que hubo un divorcio. El acta basta para muchos usos, como volver a casarse en algunos estados o actualizar registros; recuperar un apellido anterior, transferir un bien o un asunto de pensión necesitan la sentencia certificada. Ambos documentos se piden al estado donde se concedió el divorcio, sea cual sea su residencia. Las tarifas y reglas se leyeron en páginas oficiales, con la fecha de cada estado.`;
    },
    faqs: (h) => {
      const ny = h.J('NY');
      return [
        { q: '¿Qué diferencia hay entre el acta y la sentencia de divorcio?', a: 'La sentencia es el fallo completo del tribunal, con los términos del divorcio, que emite el secretario del tribunal. El acta es un registro breve que guardan algunas oficinas estatales de registros vitales y que solo muestra que hubo un divorcio, entre quiénes, cuándo y dónde. Las entidades que necesitan los términos piden la sentencia certificada.' },
        { q: '¿Cómo obtengo una copia de mi acta de divorcio?', a: `Si el estado la emite, pídala a la oficina estatal de registros vitales, por correo o con su proveedor en línea. El Estado de Nueva York, por ejemplo, emite actas de divorcio por correo a ${ny.div?.first != null ? h.m(ny.div.first) : h.nc}. En los demás casos, pida una copia certificada de la sentencia al secretario del tribunal que concedió el divorcio.` },
        { q: '¿Necesito el acta de divorcio para volver a casarme?', a: 'Muchas oficinas de licencias de matrimonio solo piden la fecha en que terminó el último matrimonio; algunas piden ver una copia de la sentencia o del acta de divorcio, sobre todo si el divorcio es reciente. Consulte a la oficina del condado que emitirá la nueva licencia antes de la cita.' },
        { q: '¿Quién puede pedir un registro de divorcio?', a: 'Los excónyuges siempre pueden pedirlo. Muchos estados también lo permiten a sus hijos adultos, padres y representantes legales, mientras que otros reservan las actas a las partes y sus abogados. Las sentencias suelen ser registros públicos, pero algunas partes, como los datos financieros y de los hijos, pueden estar selladas.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j0) => { const j = h.J(j0.code); const d = j.div; return [j.nameL, d?.where === 'both' ? 'Estado y tribunal' : 'Solo el tribunal', d?.first != null && d.where !== 'county' ? h.m(d.first) : '–', d?.url ? h.ext(d.url, 'página oficial') : '–']; });
      return `<h2>Quién emite los registros de divorcio, estado por estado</h2>
<p>«Tarifa estatal» es la tarifa de la primera copia del acta de divorcio en la oficina estatal de registros vitales; donde el tribunal es la única fuente, queda en blanco. Las tarifas de la sentencia certificada las fija cada tribunal.</p>
${h.table(['Estado', 'La emite', 'Tarifa estatal', 'Fuente'], rows, undefined, ['l', 'l', 'r', 'l'])}
<h2>Pedir una sentencia certificada</h2>
<ol><li>Identifique el tribunal: el condado y el número de caso figuran en cualquier papel del caso.</li><li>Pida al secretario de ese tribunal una copia certificada de la sentencia o fallo definitivo.</li><li>Pague la tarifa de copia, a menudo por página, y la de certificación.</li><li>Cuente con más demora para los expedientes antiguos guardados en archivos.</li></ol>
<!--tool:mini:marrcopy|{"state":"NY","copies":1}-->
<h2>Usarla después</h2>
<p>Para recuperar un apellido anterior, la sentencia suele tener que decirlo; entonces el Seguro Social y la oficina de vehículos la aceptan igual que un acta de matrimonio, como explica la ${h.a('name-change', 'página del cambio de apellido')}. Para probar el matrimonio anterior, pida una ${h.a('marriage-copy', 'copia del acta de matrimonio')}. Esta página describe los registros, no los efectos legales de un divorcio, que dependen de cada caso.</p>`;
    },
  },
});
