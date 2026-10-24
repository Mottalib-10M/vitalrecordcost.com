import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-oh', group: 'states', order: 205, state: 'OH',
  tool: { kind: 'marriage', props: { state: 'OH' } },
  mini: { kind: 'mini:vsc', props: { state: 'OH' } },
  related: ['marriage-license', 'marriage-license-vs-certificate', 'marriage-copy', 'birth-oh', 'name-change', 'ml-nc'],
  sources: [],
  en: {
    slug: 'marriage-license/ohio', nav: 'Ohio marriage license', card: 'Probate court fee by county, which county to apply in, both partners present and 60 days of validity.',
    title: 'Marriage License Ohio 2026: Probate Court, County Fee, Rules',
    description: 'Ohio marriage license in 2026: probate court fees by county, the county you must apply in, both partners in person, 60 days to marry and the abstract afterward.',
    h1: 'Ohio marriage license: probate court, county fee and the abstract',
    intro: 'Ohio ties the license to a county probate court chosen by residence. Which court to visit, what it charges, what both partners bring, and how the marriage abstract is obtained once the officiant has signed.',
    resume: (h) => {
      const r = h.ML('OH');
      return `In Ohio a marriage license is issued by the probate court of a county, and each court sets its own price: the courts read for this site ask ${r.feeL}, for example ${r.exampleL}. The county is not a free choice. Ohio residents apply in the county where either partner lives, while a couple living outside Ohio applies in the county where the ceremony will be held, as the Franklin County court explains. Both partners must appear in person, each with an unexpired photo ID that shows the date of birth. Once the court accepts the application, adults face ${r.waitL}, and the license is valid for ${r.validL}. Applicants under 18 need the consent of the juvenile court first. After the wedding, the officiant signs the certification and returns it to the probate court; only then can the court issue the marriage abstract, the certified record couples use afterward. The Ohio Department of Health does not issue marriage records, so every copy comes from the probate court of the county that issued the license. Fees were read on the court pages on ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('OH');
      return [
        { q: 'In which Ohio county do we apply for the marriage license?', a: 'If at least one partner lives in Ohio, in the county where either of you resides. If neither of you lives in Ohio, apply in the county where the wedding will be held. The probate court may ask for proof of address when the photo ID does not show a current one.' },
        { q: 'Do both partners have to go to the Ohio probate court?', a: 'Yes. Both applicants appear together in person, and the Franklin County court allows remote appointments only in very limited circumstances. Each brings an unexpired photo ID showing the date of birth. In Franklin County the application starts online, and the online form and the in-person visit must fall within 30 days of each other.' },
        { q: 'Why do Ohio license fees differ by county?', a: `Each probate court sets its own amount. The pages read for this site run ${r.feeL}, with ${r.exampleL}. The gap is small, and since the county is fixed by residence, it rarely changes where a couple applies; it matters more when budgeting the license together with the certified abstracts ordered afterward.` },
        { q: 'What is a marriage abstract in Ohio?', a: 'The certified record of the marriage issued by the probate court once the officiant has signed and returned the certification. It is the document asked for a name change, insurance or benefits. If the license was issued in another county, the abstract must be requested from that county\'s probate court; the state health department does not hold marriage records.' },
      ];
    },
    body: (h) => {
      const r = h.ML('OH'), t = h.J('OH'), nc = h.ML('NC');
      return `<h2>Choosing the right probate court</h2>
<p>Ohio does not let couples shop between counties. The residence rule decides:</p>
<ul>
<li>At least one partner lives in Ohio: apply in the county where either partner resides.</li>
<li>Neither partner lives in Ohio: apply in the county where the ceremony will take place.</li>
<li>One partner is under 18: obtain the consent of the juvenile court before the probate court can act; in Franklin County, the license cannot be issued until 14 days after the juvenile court's final order is filed.</li>
</ul>
<h2>The appointment, with both partners</h2>
<p>Both applicants appear in person at the same time. Each brings an unexpired photo ID showing the date of birth; if that ID does not carry a current address in the county, Franklin County asks for another proof of residence dated within the last 30 days. In Franklin County, couples fill in the application online first, then complete it at the court, and the license is handed over once the court accepts the application. For adults there is ${r.waitL} between acceptance and issue.</p>
<h2>What the license costs from one county to the next</h2>
<p>Each probate court publishes its own fee. The pages read for this site give ${r.exampleL}, that is ${r.feeL} across the courts consulted. The license is valid for ${r.validL}, which leaves room to apply a few weeks before the wedding. North Carolina, by contrast, charges ${nc.feeL} in every county: see the ${h.a('ml-nc', 'North Carolina marriage license page')}.</p>
<!--tool:mini:mlcost|{"state":"OH"}-->
<h2>The certification, then the abstract</h2>
<p>After the ceremony, the officiant signs the certification on the license and returns it to the probate court. The court cannot issue a marriage abstract until that certification is back; in Franklin County, couples can check the marriage license index to see whether it has been returned, and contact the officiant if it has not. The abstract is the certified record, not the license itself: the ${h.a('marriage-license-vs-certificate', 'license and certificate page')} explains the difference. Because the Ohio Department of Health does not issue marriage records, every copy is requested from the probate court of the county that issued the license; the ${h.a('marriage-copy', 'marriage certificate copies page')} covers the other states. With the abstract in hand, follow the ${h.a('name-change', 'name change checklist')}. An Ohio birth certificate, sometimes requested from a partner born in the state, costs ${t.bFirst}: ${h.a('birth-oh', 'Ohio birth certificate')}.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/ohio', nav: 'Licencia de matrimonio de Ohio', card: 'Tarifa del tribunal testamentario por condado, en qué condado solicitarla, presencia de ambos y 60 días.',
    title: 'Licencia de matrimonio Ohio 2026: tribunal, condado y reglas',
    description: 'Licencia de matrimonio en Ohio en 2026: tarifa del tribunal testamentario por condado, dónde solicitarla, ambos en persona, 60 días para casarse y el acta.',
    h1: 'Licencia de matrimonio en Ohio: tribunal testamentario, tarifa y acta',
    intro: 'Ohio vincula la licencia a un tribunal testamentario de condado elegido según la residencia. A qué tribunal acudir, cuánto cobra, qué llevan los dos contrayentes y cómo se obtiene el acta de matrimonio cuando el oficiante ha firmado.',
    resume: (h) => {
      const r = h.ML('OH');
      return `En Ohio, la licencia de matrimonio la emite el tribunal testamentario (probate court) de un condado, y cada tribunal fija su propio precio: los consultados para este sitio piden ${r.feeL}, por ejemplo ${r.exampleL}. El condado no se elige libremente. Los residentes de Ohio la solicitan en el condado donde vive cualquiera de los dos, mientras que una pareja que vive fuera de Ohio la solicita en el condado donde se celebrará la ceremonia. Los dos contrayentes deben presentarse en persona, cada uno con una identificación con foto vigente que muestre la fecha de nacimiento. Una vez aceptada la solicitud, los adultos no tienen que esperar, y la licencia vale ${r.validL}. Los menores de 18 años necesitan antes el consentimiento del tribunal de menores. Después de la boda, el oficiante firma la certificación y la devuelve al tribunal testamentario; solo entonces el tribunal puede emitir el extracto del matrimonio (marriage abstract). El Departamento de Salud de Ohio no emite registros de matrimonio, así que todas las copias provienen del tribunal testamentario del condado que emitió la licencia. Las tarifas se leyeron en las páginas de los tribunales el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('OH');
      return [
        { q: '¿En qué condado de Ohio se solicita la licencia de matrimonio?', a: 'Si al menos uno de los dos vive en Ohio, en el condado donde reside cualquiera de ustedes. Si ninguno vive en Ohio, la solicitud se hace en el condado donde se celebrará la boda. El tribunal testamentario puede pedir un comprobante de domicilio cuando la identificación con foto no muestra la dirección actual.' },
        { q: '¿Tienen que ir los dos contrayentes al tribunal testamentario de Ohio?', a: 'Sí. Los dos solicitantes se presentan juntos en persona, y el tribunal del condado de Franklin solo admite citas a distancia en circunstancias muy limitadas. Cada uno lleva una identificación con foto vigente que muestre la fecha de nacimiento. En el condado de Franklin la solicitud empieza en línea, y el formulario en línea y la visita en persona deben hacerse con menos de 30 días de diferencia.' },
        { q: '¿Por qué cambian las tarifas de la licencia según el condado de Ohio?', a: `Cada tribunal testamentario fija su propio monto. Las páginas leídas para este sitio van ${r.feeL}, con ${r.exampleL}. La diferencia es pequeña y, como el condado lo determina la residencia, rara vez cambia el lugar de la solicitud; cuenta más al calcular el presupuesto de la licencia junto con los extractos certificados que se piden después.` },
        { q: '¿Qué es el extracto de matrimonio (marriage abstract) en Ohio?', a: 'Es el registro certificado del matrimonio que emite el tribunal testamentario cuando el oficiante ha firmado y devuelto la certificación. Es el documento que se pide para un cambio de apellido, un seguro o una prestación. Si la licencia se emitió en otro condado, el extracto se solicita al tribunal testamentario de ese condado; el departamento de salud del estado no guarda registros de matrimonio.' },
      ];
    },
    body: (h) => {
      const r = h.ML('OH'), t = h.J('OH'), nc = h.ML('NC');
      return `<h2>Elegir el tribunal testamentario correcto</h2>
<p>Ohio no deja que las parejas comparen condados para elegir. Decide la regla de residencia:</p>
<ul>
<li>Al menos uno de los dos vive en Ohio: la solicitud se presenta en el condado donde reside cualquiera de los dos.</li>
<li>Ninguno vive en Ohio: la solicitud se presenta en el condado donde se celebrará la ceremonia.</li>
<li>Uno de los dos es menor de 18 años: hace falta el consentimiento del tribunal de menores antes de que actúe el tribunal testamentario; en el condado de Franklin, la licencia no puede emitirse hasta 14 días después de que se registre la orden final del tribunal de menores.</li>
</ul>
<h2>La cita, con los dos contrayentes</h2>
<p>Los dos solicitantes se presentan en persona al mismo tiempo. Cada uno lleva una identificación con foto vigente que muestre la fecha de nacimiento; si esa identificación no tiene una dirección actual en el condado, el condado de Franklin pide otro comprobante de domicilio con fecha de los últimos 30 días. En el condado de Franklin, las parejas llenan primero la solicitud en línea y la completan después en el tribunal, que entrega la licencia una vez aceptada la solicitud. Para los adultos no hay espera entre la aceptación y la emisión.</p>
<h2>Lo que cuesta la licencia de un condado a otro</h2>
<p>Cada tribunal testamentario publica su propia tarifa. Las páginas leídas para este sitio indican ${r.exampleL}, es decir, de ${r.feeL} entre los tribunales consultados. La licencia vale ${r.validL}, lo que permite solicitarla unas semanas antes de la boda. Carolina del Norte, en cambio, cobra ${nc.feeL} en todos sus condados: vea la ${h.a('ml-nc', 'página de la licencia de matrimonio de Carolina del Norte')}.</p>
<!--tool:mini:mlcost|{"state":"OH"}-->
<h2>La certificación y después el extracto</h2>
<p>Después de la ceremonia, el oficiante firma la certificación de la licencia y la devuelve al tribunal testamentario. El tribunal no puede emitir el extracto del matrimonio hasta recibir esa certificación; en el condado de Franklin, la pareja puede consultar el índice de licencias de matrimonio para ver si ya se devolvió y, si no, contactar al oficiante. El extracto es el registro certificado, no la licencia: la ${h.a('marriage-license-vs-certificate', 'página sobre la licencia y el acta')} explica la diferencia. Como el Departamento de Salud de Ohio no emite registros de matrimonio, todas las copias se piden al tribunal testamentario del condado que emitió la licencia; la ${h.a('marriage-copy', 'página de las copias del acta de matrimonio')} cubre los demás estados. Con el extracto en la mano, siga la ${h.a('name-change', 'lista para el cambio de apellido')}. El acta de nacimiento de Ohio, que a veces se pide a un contrayente nacido en el estado, cuesta ${t.bFirst}: ${h.a('birth-oh', 'acta de nacimiento de Ohio')}.</p>`;
    },
  },
});
