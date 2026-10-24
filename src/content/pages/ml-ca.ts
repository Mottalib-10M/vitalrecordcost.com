import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-ca', group: 'states', order: 201, state: 'CA',
  tool: { kind: 'marriage', props: { state: 'CA' } },
  mini: { kind: 'mini:vsc', props: { state: 'CA' } },
  related: ['marriage-license', 'marriage-license-cost', 'marriage-copy', 'courthouse-wedding', 'birth-ca', 'name-change'],
  sources: [],
  en: {
    slug: 'marriage-license/california', nav: 'California marriage license', card: 'Public or confidential license, county prices, no wait and 90 days to marry.',
    title: 'Marriage License California 2026: Public or Confidential',
    description: 'California marriage license in 2026: county fees for a public or a confidential license, no waiting period, 90 days of validity and the officiant\'s 10 days.',
    h1: 'California marriage license: public or confidential, and what it costs',
    intro: 'California sells two kinds of license, a rare arrangement among the states. Here is what each costs at the county clerk, who may use the confidential one, and the dates to respect.',
    resume: (h) => {
      const r = h.ML('CA');
      return `A California marriage license is issued by the county clerk, and each county sets its fee: the pages read for this site range ${r.feeL}, for example ${r.exampleL}. California offers two kinds. The public license is the usual one: it needs at least one witness at the ceremony, the marriage can take place anywhere in California, and the record is public. The confidential license is reserved for couples who already live together; it needs no witness, the ceremony must take place in the county that issued it, and only the spouses can obtain copies of the record. There is ${r.waitL}: the license can be used the day it is issued. It is valid for ${r.validL}, and after the ceremony the officiant has 10 days to return it to the county recorder, who registers the marriage and sells certified copies. Both partners appear together at the clerk's office with a valid photo ID; no blood test is required. Fees were read on the county pages on ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('CA');
      return [
        { q: 'How much is a marriage license in California?', a: `It depends on the county and the type: the clerk pages read here range ${r.feeL}, for example ${r.exampleL}. A civil ceremony performed by the clerk's office costs extra, and so does each certified copy of the marriage record after the wedding. Check your county's fee schedule before you go.` },
        { q: 'What is a confidential marriage license in California?', a: 'A license for couples who already live together and are both at least 18. No witness is needed, the ceremony must take place in the issuing county, and the record is not open to the public: only the spouses, or someone with a court order, can obtain copies of the certificate.' },
        { q: 'Is there a waiting period to get married in California?', a: `No. A California license can be used immediately after it is issued, including for a ceremony the same day at the clerk's office if a slot is free. It expires after ${r.validL}, so a couple planning a date further away should apply later rather than earlier.` },
        { q: 'Can we get our California marriage license online?', a: 'Several large counties let couples fill in the application online and then complete it at an appointment, in person or by video call in some counties. The license itself is issued by the clerk after identity checks. A ceremony performed in a county other than the one that issued a public license is still valid within California.' },
      ];
    },
    body: (h) => {
      const r = h.ML('CA'), t = h.J('CA');
      const rows = [
        ['Who can use it', 'Any couple', 'Couples already living together'],
        ['Witnesses', 'At least one', 'None'],
        ['Where the ceremony takes place', 'Anywhere in California', 'The county that issued it'],
        ['Who can get copies', 'Anyone (public record)', 'The spouses only'],
      ];
      return `<h2>Public and confidential licenses compared</h2>
${h.table(['', 'Public license', 'Confidential license'], rows, undefined, ['l', 'l', 'l'])}
<p>The price gap between the two is small in most counties, so the choice rests on privacy and on where the wedding will be. Couples who marry in another county, for example at a family home, need the public license. Those who want the record kept out of public indexes choose the confidential one, and accept that genealogists and agencies will not see it without their consent.</p>
<h2>The dates, counted from the day of issue</h2>
<p>Day 0: the clerk issues the license. From the same day: the ceremony can take place. Day ${r.validity?.kind === 'days' ? r.validity.value : 90}: the last day to marry. Within 10 days of the ceremony: the officiant returns the signed license to the county recorder. A few weeks later: the recorder has registered the marriage and certified copies can be ordered. The calculator above gives the calendar dates from the issue date you enter.</p>
<!--tool:mini:mlcost|{"state":"CA"}-->
<h2>After the wedding</h2>
<p>The recorder of the county where the license was issued sells certified copies of the marriage certificate; a copy is needed to change a name with Social Security and the DMV, as the ${h.a('name-change', 'name change checklist')} explains. For a ceremony at the county clerk's office, the ${h.a('courthouse-wedding', 'courthouse wedding page')} adds up the license, the ceremony and the copy. A California birth certificate, sometimes asked of a partner born in the state, costs ${t.bFirst}: ${h.a('birth-ca', 'California birth certificate')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/california', nav: 'Licencia de matrimonio de California', card: 'Licencia pública o confidencial, precios de los condados, sin espera y 90 días para casarse.',
    title: 'Licencia de matrimonio California 2026: tipos y tarifas',
    description: 'Licencia de matrimonio en California en 2026: tarifa del condado de la licencia pública o confidencial, sin espera, 90 días de vigencia y plazo del oficiante.',
    h1: 'Licencia de matrimonio en California: pública o confidencial, y su costo',
    intro: 'California vende dos tipos de licencia, algo poco común entre los estados. Lo que cuesta cada una ante el secretario del condado, quién puede usar la confidencial y las fechas que hay que respetar.',
    resume: (h) => {
      const r = h.ML('CA');
      return `La licencia de matrimonio de California la emite el secretario del condado, y cada condado fija su tarifa: las páginas leídas para este sitio van ${r.feeL}, por ejemplo ${r.exampleL}. California ofrece dos tipos. La licencia pública es la habitual: requiere al menos un testigo en la ceremonia, la boda puede celebrarse en cualquier lugar de California y el registro es público. La licencia confidencial está reservada a parejas que ya viven juntas; no requiere testigos, la ceremonia debe celebrarse en el condado que la emitió y solo los cónyuges pueden obtener copias del registro. No hay espera: la licencia puede usarse el mismo día de su emisión. Vale ${r.validL}, y tras la ceremonia el oficiante tiene 10 días para devolverla al registrador del condado, que inscribe el matrimonio y vende las copias certificadas. Los dos solicitantes acuden juntos a la oficina del secretario con identificación con foto vigente; no se exige análisis de sangre. Las tarifas se leyeron en las páginas de los condados el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('CA');
      return [
        { q: '¿Cuánto cuesta una licencia de matrimonio en California?', a: `Depende del condado y del tipo: las páginas de los secretarios leídas aquí van ${r.feeL}, por ejemplo ${r.exampleL}. Una ceremonia civil oficiada por la oficina del secretario cuesta aparte, igual que cada copia certificada del acta de matrimonio después de la boda. Revise la lista de tarifas de su condado antes de ir.` },
        { q: '¿Qué es una licencia de matrimonio confidencial en California?', a: 'Una licencia para parejas que ya viven juntas y que tienen ambas al menos 18 años. No requiere testigos, la ceremonia debe celebrarse en el condado que la emitió y el registro no es público: solo los cónyuges, o alguien con orden judicial, pueden obtener copias del acta.' },
        { q: '¿Hay que esperar para casarse en California?', a: `No. Una licencia de California puede usarse en cuanto se emite, incluso para una ceremonia el mismo día en la oficina del secretario si hay un turno libre. Vence a los ${r.validL}, así que una pareja con una fecha lejana debe solicitarla más tarde y no antes.` },
        { q: '¿Se puede obtener la licencia de California en línea?', a: 'Varios condados grandes permiten llenar la solicitud en línea y completarla después en una cita, en persona o por videollamada en algunos condados. La licencia la emite el secretario tras verificar la identidad. Una ceremonia celebrada en otro condado distinto del que emitió una licencia pública sigue siendo válida dentro de California.' },
      ];
    },
    body: (h) => {
      const r = h.ML('CA'), t = h.J('CA');
      const rows = [
        ['Quién puede usarla', 'Cualquier pareja', 'Parejas que ya viven juntas'],
        ['Testigos', 'Al menos uno', 'Ninguno'],
        ['Dónde se celebra la ceremonia', 'En cualquier lugar de California', 'En el condado que la emitió'],
        ['Quién obtiene copias', 'Cualquiera (registro público)', 'Solo los cónyuges'],
      ];
      return `<h2>Licencia pública y confidencial, comparadas</h2>
${h.table(['', 'Licencia pública', 'Licencia confidencial'], rows, undefined, ['l', 'l', 'l'])}
<p>La diferencia de precio entre las dos es pequeña en la mayoría de los condados, así que la elección depende de la privacidad y del lugar de la boda. Las parejas que se casan en otro condado, por ejemplo en una casa familiar, necesitan la licencia pública. Quienes quieren que el registro no aparezca en los índices públicos eligen la confidencial, y aceptan que genealogistas y agencias no lo vean sin su consentimiento.</p>
<h2>Las fechas, contadas desde el día de emisión</h2>
<p>Día 0: el secretario emite la licencia. Desde ese mismo día: puede celebrarse la ceremonia. Día ${r.validity?.kind === 'days' ? r.validity.value : 90}: último día para casarse. Dentro de los 10 días siguientes a la ceremonia: el oficiante devuelve la licencia firmada al registrador del condado. Unas semanas después: el registrador ha inscrito el matrimonio y se pueden pedir copias certificadas. La calculadora de arriba da las fechas del calendario a partir de la fecha de emisión que indique.</p>
<!--tool:mini:mlcost|{"state":"CA"}-->
<h2>Después de la boda</h2>
<p>El registrador del condado que emitió la licencia vende las copias certificadas del acta de matrimonio; se necesita una para cambiar el apellido ante el Seguro Social y el DMV, como explica la ${h.a('name-change', 'lista para el cambio de apellido')}. Para una ceremonia en la oficina del secretario del condado, la ${h.a('courthouse-wedding', 'página de la boda civil')} suma la licencia, la ceremonia y la copia. Un acta de nacimiento de California, que a veces se pide a un contrayente nacido en el estado, cuesta ${t.bFirst}: ${h.a('birth-ca', 'acta de nacimiento de California')}.</p>`;
    },
  },
});
