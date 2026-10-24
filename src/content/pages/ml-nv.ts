import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'ml-nv', group: 'states', order: 203, state: 'NV',
  tool: { kind: 'marriage', props: { state: 'NV' } },
  mini: { kind: 'mini:vsc', props: { state: 'NV' } },
  related: ['marriage-license', 'courthouse-wedding', 'marriage-copy', 'marriage-license-waiting', 'name-change', 'ml-az'],
  sources: [],
  en: {
    slug: 'marriage-license/las-vegas', nav: 'Las Vegas marriage license', card: 'Clark County fee, no waiting period, a license valid one year and the copy from the recorder.',
    title: 'Marriage License Las Vegas 2026: Clark County Fee, No Wait',
    description: 'Las Vegas marriage license in 2026: the Clark County Marriage License Bureau fee, ID rules, no waiting period, one year of validity and the copy afterward.',
    h1: 'Las Vegas marriage license: Clark County fee, ID and dates',
    intro: 'How the Clark County Marriage License Bureau works for couples who live in Nevada or fly in for the wedding, what it charges, and which office sells the certificate afterward.',
    resume: (h) => {
      const r = h.ML('NV');
      return `In Las Vegas the marriage license comes from the Clark County Clerk's Marriage License Bureau, and Nevada leaves the price to each county: the pages read for this site range ${r.feeL}, with ${r.exampleL} at the top of that range. Nevada sets ${r.waitL}, so a couple can collect the license and hold the ceremony the same day, at a chapel, at the courthouse or at a hotel. The license remains usable for ${r.validL} from the date of issue. Both partners must come to the bureau together, each with an original government photo ID; the county refuses digital versions and photocopies. An online pre-application shortens the visit and stays on file for a year. Applicants must be at least 18, with a narrow court-order route for 17-year-old Clark County residents. After the ceremony, the marriage is recorded in the county, and certified copies come from the county recorder rather than from the state vital records office. This site is not a government office; figures were read on the county pages on ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('NV');
      return [
        { q: 'How much does a Las Vegas marriage license cost?', a: `The Clark County figure read for this site is ${r.exampleL}, the highest in the Nevada range of ${r.feeL}. Other counties, such as Washoe around Reno, sit lower in that range. The license fee does not cover the ceremony itself: a chapel, an officiant or a civil ceremony is paid separately, and so is each certified copy of the record later.` },
        { q: 'Can we get married in Las Vegas on the day we arrive?', a: `As far as the license goes, yes: Nevada imposes ${r.waitL}, so the license can be used as soon as it is issued. Both partners must be at the bureau at the same time with original photo IDs. Filling in the online pre-application before the trip saves time at the counter, and a chapel or officiant still has to be booked.` },
        { q: 'What ID does the Clark County Marriage License Bureau accept?', a: 'An original, government-issued photo ID for each partner. The county states that digital versions and photocopies are not accepted, so a picture of a license on a phone will not do. Applicants must be at least 18; a 17-year-old Clark County resident needs an order from a Nevada District Court judge before applying.' },
        { q: 'Who issues the marriage certificate after a Las Vegas wedding?', a: 'The county, not the state. In Nevada the county recorder keeps the marriage record and sells certified copies, while the state Office of Vital Records only refers requests to the county offices. For a wedding performed with a Clark County license, that means the Clark County Recorder. A certified copy is the document asked for a name change or as proof of marriage abroad.' },
      ];
    },
    body: (h) => {
      const r = h.ML('NV'), az = h.ML('AZ');
      return `<h2>The Marriage License Bureau in practice</h2>
<p>The Clark County Clerk runs a dedicated Marriage License Bureau, open to residents and visitors alike. The rule that trips up most couples is presence: both partners must stand at the counter at the same time to complete the process. The county allows a single applicant only in rare cases, such as a partner who is hospitalized or incarcerated. Each person brings an original government photo ID; a scan, a photocopy or a digital card on a phone is turned away.</p>
<p>The online pre-application is the useful step to take before traveling. Once submitted, it stays in the county's system for one year, so it can be filled in months ahead and confirmed at the bureau on the wedding trip.</p>
<h2>No wait, and a whole year to use it</h2>
<p>Nevada has ${r.waitL}, which is what made Las Vegas a destination for quick weddings. The other half of the rule matters as much: the license stays valid for ${r.validL}. A couple can collect it at the start of a stay and choose the ceremony day freely, or keep it for a later date within that year. The tool below gives the Nevada rule; the ${h.a('marriage-license-waiting', 'waiting periods page')} compares it with the states that make couples wait.</p>
<!--tool:mini:mlwait|{"state":"NV"}-->
<h2>Budgeting a destination wedding</h2>
<ul>
<li>The license: ${r.exampleL}, paid at the bureau.</li>
<li>The ceremony: a chapel package, a hired officiant or a civil ceremony, each priced by its provider.</li>
<li>Travel for both partners, since neither can apply on behalf of the other.</li>
<li>The certified copy, ordered from the county recorder once the marriage is recorded.</li>
</ul>
<p>The ${h.a('courthouse-wedding', 'courthouse wedding page')} adds up the license and a civil ceremony in the cities covered by this site. Couples comparing desert destinations can read the ${h.a('ml-az', 'Arizona marriage license page')}: there the license costs ${az.feeL} and also lasts ${az.validL}.</p>
<h2>After the ceremony: the county recorder</h2>
<p>The signed license is recorded in the county where it was issued, and from then on the Clark County Recorder is the office that sells certified copies. The Nevada Office of Vital Records does not issue them; it lists the county offices instead. Order at least one copy for each administration that will ask for it: Social Security and the DMV for a new surname, as the ${h.a('name-change', 'name change checklist')} explains, and sometimes a consulate when one partner lives abroad. The ${h.a('marriage-copy', 'marriage certificate copies page')} covers the other states.</p>`;
    },
  },
  es: {
    slug: 'licencia-de-matrimonio/las-vegas', nav: 'Licencia de matrimonio de Las Vegas', card: 'Tarifa del condado de Clark, sin espera, licencia válida un año y la copia del registrador.',
    title: 'Licencia de matrimonio Las Vegas 2026: Clark, sin espera',
    description: 'Licencia de matrimonio en Las Vegas en 2026: tarifa de la oficina del condado de Clark, identificación exigida, sin espera, un año de vigencia y copia del acta.',
    h1: 'Licencia de matrimonio en Las Vegas: tarifa de Clark, identificación y fechas',
    intro: 'Cómo funciona la oficina de licencias de matrimonio del condado de Clark para parejas que viven en Nevada o que viajan para la boda, lo que cobra y qué oficina vende el acta después.',
    resume: (h) => {
      const r = h.ML('NV');
      return `En Las Vegas, la licencia de matrimonio la entrega la oficina de licencias de matrimonio del secretario del condado de Clark, y Nevada deja el precio en manos de cada condado: las páginas leídas para este sitio van ${r.feeL}, con ${r.exampleL} en lo más alto de ese rango. No hay período de espera, así que una pareja puede recoger la licencia y celebrar la ceremonia el mismo día. La licencia sigue siendo válida ${r.validL} desde la fecha de emisión. Los dos contrayentes deben acudir juntos a la oficina, cada uno con una identificación oficial con foto en original; el condado rechaza las versiones digitales y las fotocopias. Una solicitud previa en línea acorta la visita y queda guardada durante un año. Los solicitantes deben tener al menos 18 años, con una vía limitada mediante orden judicial para residentes del condado de Clark de 17 años. Después de la ceremonia, el matrimonio se registra en el condado, y las copias certificadas las vende el registrador del condado y no la oficina estatal de estadísticas vitales. Las cifras se leyeron en las páginas del condado el ${h.date(r.retrievedAt)}.`;
    },
    faqs: (h) => {
      const r = h.ML('NV');
      return [
        { q: '¿Cuánto cuesta una licencia de matrimonio en Las Vegas?', a: `La cifra del condado de Clark leída para este sitio es ${r.exampleL}, la más alta del rango de Nevada, que va ${r.feeL}. Otros condados, como Washoe en la zona de Reno, quedan más abajo en ese rango. La tarifa de la licencia no incluye la ceremonia: la capilla, el oficiante o la boda civil se pagan aparte, igual que cada copia certificada del acta más adelante.` },
        { q: '¿Podemos casarnos en Las Vegas el mismo día en que llegamos?', a: `En lo que respecta a la licencia, sí: Nevada no exige espera, así que la licencia puede usarse en cuanto se emite. Los dos contrayentes deben estar en la oficina al mismo tiempo con su identificación con foto en original. Llenar la solicitud previa en línea antes del viaje ahorra tiempo en la ventanilla, y todavía hay que reservar una capilla o un oficiante.` },
        { q: '¿Qué identificación acepta la oficina de licencias del condado de Clark?', a: 'Una identificación oficial con foto, en original, para cada contrayente. El condado indica que no acepta versiones digitales ni fotocopias, así que una foto de la licencia de manejar en el teléfono no sirve. Los solicitantes deben tener al menos 18 años; un residente del condado de Clark de 17 años necesita antes una orden de un juez de un tribunal de distrito de Nevada.' },
        { q: '¿Quién emite el acta de matrimonio después de una boda en Las Vegas?', a: 'El condado, no el estado. En Nevada, el registrador del condado guarda el registro del matrimonio y vende las copias certificadas, mientras que la Oficina de Estadísticas Vitales del estado solo remite las solicitudes a los condados. Para una boda celebrada con una licencia del condado de Clark, eso significa el registrador del condado de Clark (Clark County Recorder). La copia certificada es el documento que se pide para cambiar de apellido o para probar el matrimonio en el extranjero.' },
      ];
    },
    body: (h) => {
      const r = h.ML('NV'), az = h.ML('AZ');
      return `<h2>La oficina de licencias de matrimonio en la práctica</h2>
<p>El secretario del condado de Clark tiene una oficina dedicada a las licencias de matrimonio, abierta tanto a residentes como a visitantes. La regla que más sorprende a las parejas es la presencia: los dos contrayentes deben estar en la ventanilla al mismo tiempo para completar el trámite. El condado solo admite a un solicitante sin el otro en casos poco frecuentes, como un contrayente hospitalizado o encarcelado. Cada persona lleva una identificación oficial con foto en original; un escaneo, una fotocopia o una tarjeta digital en el teléfono se rechazan.</p>
<p>La solicitud previa en línea es el paso útil antes de viajar. Una vez enviada, queda en el sistema del condado durante un año, así que puede llenarse con meses de antelación y confirmarse en la oficina durante el viaje de la boda.</p>
<h2>Sin espera y con un año entero para usarla</h2>
<p>Nevada no tiene período de espera, y eso es lo que convirtió a Las Vegas en un destino para bodas rápidas. La otra mitad de la regla importa igual: la licencia sigue vigente ${r.validL}. Una pareja puede recogerla al comienzo de su estancia y elegir libremente el día de la ceremonia, o guardarla para una fecha posterior dentro de ese año. La herramienta de abajo muestra la regla de Nevada; la ${h.a('marriage-license-waiting', 'página de los períodos de espera')} la compara con los estados que obligan a esperar.</p>
<!--tool:mini:mlwait|{"state":"NV"}-->
<h2>El presupuesto de una boda de destino</h2>
<ul>
<li>La licencia: ${r.exampleL}, que se paga en la oficina.</li>
<li>La ceremonia: un paquete de capilla, un oficiante contratado o una boda civil, cada uno con el precio de su proveedor.</li>
<li>El viaje de los dos contrayentes, ya que ninguno puede hacer la solicitud en nombre del otro.</li>
<li>La copia certificada, que se pide al registrador del condado una vez registrado el matrimonio.</li>
</ul>
<p>La ${h.a('courthouse-wedding', 'página de la boda civil en el juzgado')} suma la licencia y una ceremonia civil en las ciudades que cubre este sitio. Las parejas que comparan destinos del desierto pueden leer la ${h.a('ml-az', 'página de la licencia de matrimonio de Arizona')}: allí la licencia cuesta ${az.feeL} y también dura ${az.validL}.</p>
<h2>Después de la ceremonia: el registrador del condado</h2>
<p>La licencia firmada se registra en el condado que la emitió, y desde entonces el registrador del condado de Clark es la oficina que vende las copias certificadas. La Oficina de Estadísticas Vitales de Nevada no las emite; en su lugar, remite a las oficinas de los condados. Pida al menos una copia por cada administración que la vaya a exigir: el Seguro Social y el DMV para un nuevo apellido, como explica la ${h.a('name-change', 'lista para el cambio de apellido')}, y a veces un consulado cuando uno de los dos vive en el extranjero. La ${h.a('marriage-copy', 'página de las copias del acta de matrimonio')} cubre los demás estados.</p>`;
    },
  },
});
