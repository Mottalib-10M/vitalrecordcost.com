import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-nc', group: 'states', order: 206, state: 'NC',
  tool: { kind: 'marriage', props: { state: 'NC' } },
  mini: { kind: 'mini:marrcopy', props: { state: 'NC' } },
  related: ['marriage-license', 'marriage-copy', 'marriage-license-waiting', 'name-change', 'ml-oh', 'ml-tn'],
  sources: [],
  en: {
    slug: 'marriage-license/north-carolina', nav: 'North Carolina marriage license', card: 'One statewide fee at the Register of Deeds, same-day use, 60 days to marry and the copy afterward.',
    title: 'Marriage License North Carolina 2026: Register of Deeds Fee',
    description: 'North Carolina marriage license in 2026: one fee at every Register of Deeds, documents to bring, use on the day of issue, 60 days to marry and the copies.',
    h1: 'North Carolina marriage license: Register of Deeds, fee and dates',
    intro: 'North Carolina hands marriage licenses to the county Register of Deeds and charges the same price everywhere. What to bring to the counter, how long the license lasts and which office is quicker for the certified copy.',
    resume: (h) => {
      const r = h.ML('NC');
      return `A North Carolina marriage license is issued by the Register of Deeds of a county, and the price does not move from one county to another: it is ${r.feeL} everywhere in the state. The license can be used as soon as it is handed over, since North Carolina sets ${r.waitL}, and the ceremony must take place in North Carolina within ${r.validL} of issue. Both partners appear in person at the Register of Deeds with a valid government ID and proof of a Social Security number or an ITIN; applicants aged 16 to 20 also bring a certified birth certificate, and anyone divorced within the last 30 days brings a certified copy of the decree, as the Wake County office lists. After the wedding, the officiant returns the completed license to the Register of Deeds that issued it, within 10 days according to Nash County, and the marriage is recorded there. Certified copies can then be bought from that county office or from NC Vital Records, which holds marriages since 1962 but was taking about nine months to process requests in October 2026. Data read on ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('NC'), t = h.J('NC');
      return [
        { q: 'Is the marriage license price the same in every North Carolina county?', a: `Yes. North Carolina fixes the amount at the state level, so the Register of Deeds in Wake, Mecklenburg or a small mountain county asks the same ${r.feeL}. What varies is practical, such as opening hours and how the visit is booked, so check the county page before going.` },
        { q: 'Can we marry the same day we get a North Carolina license?', a: `Yes. North Carolina has ${r.waitL}: the license can be used immediately upon issuance. The ceremony must then take place in North Carolina within ${r.validL}. A couple planning a distant date should therefore apply in the weeks before the wedding rather than months ahead.` },
        { q: 'What documents does the Register of Deeds ask for?', a: 'For each partner, a valid government-issued ID and proof of a Social Security number or an ITIN. Applicants aged 16 to 20 add a certified birth certificate. Someone whose divorce was finalized within the last 30 days brings a certified copy of the decree. Both partners must be present to apply and to receive the license.' },
        { q: 'Should we order our North Carolina marriage certificate from the county or the state?', a: `From the county Register of Deeds when you need it soon: it records the license and sells copies directly. NC Vital Records also issues them, at ${h.m(t.marr.first)} for the first and ${h.m(t.marr.additional)} for each extra copy, for marriages since 1962, but its processing time was about nine months in October 2026.` },
      ];
    },
    body: (h) => {
      const r = h.ML('NC'), t = h.J('NC'), oh = h.ML('OH');
      const rows = [
        ['County Register of Deeds', 'Fee on the county page', 'Records the license; the quick option'],
        ['NC Vital Records (state)', `${h.m(t.marr.first)}, then ${h.m(t.marr.additional)}`, 'Marriages since 1962; about nine months of processing (October 2026)'],
      ];
      return `<h2>One price for the whole state</h2>
<p>Many states leave license fees to their counties: in Ohio, for example, probate courts ask ${oh.feeL}, as the ${h.a('ml-oh', 'Ohio marriage license page')} shows. North Carolina does the opposite. The fee is ${r.feeL} at every Register of Deeds, from the coast to the mountains, so couples can apply at whichever office is most convenient. The Register of Deeds is the county office that also records land deeds, which is why weddings and property records share a counter.</p>
<p>The flat fee also simplifies budgeting. The license line is ${r.feeL} whichever office the couple chooses, so the only amounts that change are the ceremony and the number of certified copies ordered afterward. At the state office, three copies would come to ${h.m((t.marr.first ?? 0) + 2 * (t.marr.additional ?? 0))}.</p>
<h2>What to bring to the Register of Deeds</h2>
<ul>
<li>Both partners, in person, to apply and again to receive the license.</li>
<li>A valid government-issued ID for each applicant.</li>
<li>Proof of a Social Security number or of an ITIN.</li>
<li>A certified birth certificate for any applicant aged 16 to 20.</li>
<li>A certified copy of the decree if a divorce was finalized within the last 30 days.</li>
</ul>
<h2>Use it today, marry within ${r.validL}</h2>
<p>With ${r.waitL}, North Carolina is one of the states where a license bought in the morning can serve the same afternoon. The limit is on the other side: the ceremony must take place in North Carolina within ${r.validL}. After it, the officiant has a short window to return the completed license; Nash County gives 10 days. The ${h.a('marriage-license-waiting', 'waiting periods page')} compares these dates across the states.</p>
<!--tool:mini:mlwait|{"state":"NC"}-->
<h2>Getting the certificate: county or state</h2>
${h.table(['Office', 'Certified copy', 'Notes'], rows, 'Where to order a North Carolina marriage certificate', ['l', 'l', 'l'])}
<p>For a recent wedding, the county is almost always faster, because it holds the recorded license from the start. The state office suits older marriages or couples who no longer live near the county. Either copy works for the ${h.a('name-change', 'name change steps')}; the ${h.a('marriage-copy', 'marriage certificate copies page')} compares the other states. Tennessee, just west, also issues licenses with no wait but at county prices: see the ${h.a('ml-tn', 'Tennessee marriage license page')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/carolina-del-norte', nav: 'Licencia de matrimonio de Carolina del Norte', card: 'Tarifa única en el Registro de Escrituras, uso el mismo día, 60 días para casarse y la copia.',
    title: 'Licencia de matrimonio Carolina del Norte 2026: tarifa única',
    description: 'Licencia de matrimonio en Carolina del Norte en 2026: tarifa igual en cada Registro de Escrituras, documentos, uso el mismo día, 60 días de vigencia y copias.',
    h1: 'Licencia de matrimonio en Carolina del Norte: Registro de Escrituras, tarifa y fechas',
    intro: 'Carolina del Norte confía las licencias de matrimonio al Registro de Escrituras (Register of Deeds) de cada condado y cobra el mismo precio en todas partes. Qué llevar a la ventanilla, cuánto dura la licencia y qué oficina entrega antes la copia certificada.',
    resume: (h) => {
      const r = h.ML('NC');
      return `La licencia de matrimonio de Carolina del Norte la emite el Registro de Escrituras (Register of Deeds) de un condado, y el precio no cambia de un condado a otro: son ${r.feeL} en todo el estado. La licencia puede usarse en cuanto se entrega, porque Carolina del Norte no impone ninguna espera, y la ceremonia debe celebrarse en Carolina del Norte dentro de los ${r.validL} siguientes a la emisión. Los dos contrayentes se presentan en persona en el Registro de Escrituras con una identificación oficial vigente y un comprobante de su número de Seguro Social o de su ITIN; los solicitantes de 16 a 20 años llevan además un acta de nacimiento certificada, y quien se divorció en los últimos 30 días lleva una copia certificada de la sentencia. Después de la boda, el oficiante devuelve la licencia completada al Registro de Escrituras que la emitió, dentro de 10 días según el condado de Nash. Las copias certificadas pueden comprarse después en esa oficina del condado o en NC Vital Records, que guarda los matrimonios desde 1962 pero tardaba unos nueve meses en tramitar las solicitudes en octubre de 2026. Datos leídos el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('NC'), t = h.J('NC');
      return [
        { q: '¿La licencia de matrimonio cuesta lo mismo en todos los condados de Carolina del Norte?', a: `Sí. Carolina del Norte fija el monto a nivel estatal, así que el Registro de Escrituras de Wake, de Mecklenburg o de un pequeño condado de montaña pide los mismos ${r.feeL}. Lo que cambia es lo práctico, como el horario o la forma de organizar la visita, así que conviene revisar la página del condado antes de ir.` },
        { q: '¿Podemos casarnos el mismo día en que obtenemos la licencia en Carolina del Norte?', a: `Sí. Carolina del Norte no exige espera: la licencia puede usarse en cuanto se emite. La ceremonia debe celebrarse después en Carolina del Norte dentro de los ${r.validL}. Una pareja con una fecha lejana debe, por lo tanto, solicitarla en las semanas previas a la boda y no con meses de antelación.` },
        { q: '¿Qué documentos pide el Registro de Escrituras?', a: 'Para cada contrayente, una identificación oficial vigente y un comprobante del número de Seguro Social o del ITIN. Los solicitantes de 16 a 20 años añaden un acta de nacimiento certificada. Quien tiene un divorcio que quedó firme en los últimos 30 días lleva una copia certificada de la sentencia. Los dos deben estar presentes para solicitar la licencia y para recibirla.' },
        { q: '¿Conviene pedir el acta de matrimonio al condado o al estado?', a: `Al Registro de Escrituras del condado cuando se necesita pronto: registra la licencia y vende las copias directamente. NC Vital Records también las emite, a ${h.m(t.marr.first)} la primera y ${h.m(t.marr.additional)} cada copia adicional, para matrimonios desde 1962, pero su plazo de tramitación era de unos nueve meses en octubre de 2026.` },
      ];
    },
    body: (h) => {
      const r = h.ML('NC'), t = h.J('NC'), oh = h.ML('OH');
      const rows = [
        ['Registro de Escrituras del condado', 'Tarifa en la página del condado', 'Registra la licencia; la opción rápida'],
        ['NC Vital Records (estado)', `${h.m(t.marr.first)}, luego ${h.m(t.marr.additional)}`, 'Matrimonios desde 1962; unos nueve meses de trámite (octubre de 2026)'],
      ];
      return `<h2>Un solo precio para todo el estado</h2>
<p>Muchos estados dejan las tarifas de la licencia en manos de sus condados: en Ohio, por ejemplo, los tribunales testamentarios piden ${oh.feeL}, como muestra la ${h.a('ml-oh', 'página de la licencia de matrimonio de Ohio')}. Carolina del Norte hace lo contrario. La tarifa es de ${r.feeL} en cada Registro de Escrituras, de la costa a las montañas, así que las parejas pueden presentar la solicitud en la oficina que les quede más cómoda. El Registro de Escrituras es la oficina del condado que también inscribe las escrituras de propiedad, por eso las bodas y los registros de inmuebles comparten ventanilla.</p>
<p>La tarifa única también simplifica el presupuesto. La línea de la licencia es de ${r.feeL} sea cual sea la oficina elegida, así que lo único que cambia es la ceremonia y el número de copias certificadas que se pidan después. En la oficina del estado, tres copias sumarían ${h.m((t.marr.first ?? 0) + 2 * (t.marr.additional ?? 0))}.</p>
<h2>Qué llevar al Registro de Escrituras</h2>
<ul>
<li>Los dos contrayentes, en persona, para la solicitud y de nuevo para recibir la licencia.</li>
<li>Una identificación oficial vigente para cada solicitante.</li>
<li>Un comprobante del número de Seguro Social o del ITIN.</li>
<li>Un acta de nacimiento certificada para cualquier solicitante de 16 a 20 años.</li>
<li>Una copia certificada de la sentencia si un divorcio quedó firme en los últimos 30 días.</li>
</ul>
<h2>Usarla hoy y casarse dentro de ${r.validL}</h2>
<p>Sin espera, Carolina del Norte es uno de los estados donde una licencia comprada por la mañana puede servir esa misma tarde. El límite está del otro lado: la ceremonia debe celebrarse en Carolina del Norte dentro de los ${r.validL}. Después, el oficiante tiene un plazo corto para devolver la licencia completada; el condado de Nash indica 10 días. La ${h.a('marriage-license-waiting', 'página de los períodos de espera')} compara estas fechas entre los estados.</p>
<!--tool:mini:mlwait|{"state":"NC"}-->
<h2>Obtener el acta: condado o estado</h2>
${h.table(['Oficina', 'Copia certificada', 'Notas'], rows, 'Dónde pedir un acta de matrimonio de Carolina del Norte', ['l', 'l', 'l'])}
<p>Para una boda reciente, el condado casi siempre es más rápido, porque tiene la licencia registrada desde el principio. La oficina del estado conviene para matrimonios antiguos o para parejas que ya no viven cerca del condado. Cualquiera de las dos copias sirve para los ${h.a('name-change', 'trámites del cambio de apellido')}; la ${h.a('marriage-copy', 'página de las copias del acta de matrimonio')} compara los demás estados. Tennessee, justo al oeste, también emite licencias sin espera, pero con precios de condado: vea la ${h.a('ml-tn', 'página de la licencia de matrimonio de Tennessee')}.</p>`;
    },
  },
});
