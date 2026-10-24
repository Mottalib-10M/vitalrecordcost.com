import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

const of = (h: Helpers, s: string) => h.sorted().filter((j) => j.code !== 'NYC' && j.commonLaw?.status === s);

export default definePage({
  id: 'common-law', group: 'marriage', order: 80,
  tool: { kind: 'mini:commonlaw', props: { state: 'TX' } },
  mini: { kind: 'mini:mlcost', props: { state: 'CO' } },
  related: ['marriage-license', 'ml-tx', 'marriage-copy', 'divorce-certificate', 'name-change', 'marriage-license-cost'],
  sources: (lang) => [
    { name: lang === 'es' ? 'Administración del Seguro Social, POMS GN 00305.075, leyes estatales sobre el matrimonio de hecho (revisión del 30 de mayo de 2023)' : 'Social Security Administration, POMS GN 00305.075, state laws on common-law marriage (revised May 30, 2023)', url: 'https://secure.ssa.gov/poms.nsf/lnx/0200305075' },
    { name: lang === 'es' ? 'Asamblea General de Connecticut, Office of Legislative Research, informe 2025-R-0165 (9 de octubre de 2025)' : 'Connecticut General Assembly, Office of Legislative Research, report 2025-R-0165 (October 9, 2025)', url: 'https://cga.ct.gov/2025/rpt/pdf/2025-R-0165.pdf' },
    { name: lang === 'es' ? 'Departamento de Ingresos de Carolina del Sur, SC Revenue Ruling 21-3 (Stone v. Thompson)' : 'South Carolina Department of Revenue, SC Revenue Ruling 21-3 (Stone v. Thompson)', url: 'https://dor.sc.gov/income-tax-common-law-marriage-tax-treatment-and-permitted-filing-statuses-light-stone-v-thompson' },
  ],
  en: {
    slug: 'common-law-marriage-states', nav: 'Common-law marriage states', card: 'Where an informal marriage is still created, where it was abolished and since when.',
    title: 'Common Law Marriage States 2026: Where It Is Recognized',
    description: 'Common-law marriage states in 2026: where an informal marriage can still be formed, the states that abolished it and the cutoff date, per the SSA digest.',
    h1: 'Common-law marriage: which states recognize it',
    intro: 'Pick a state to see whether a common-law marriage can be formed there today, and if it was abolished, from which date. Facts only, no legal advice.',
    resume: (h) => {
      const rec = of(h, 'recognized'), ab = of(h, 'abolished');
      return `A common-law marriage is a marriage formed without a license or ceremony, when a couple who may legally marry agree to be married, live together and present themselves to others as spouses. Living together for a number of years is not enough on its own, and no state creates a common-law marriage simply after seven years, a widespread myth. In 2026, the jurisdictions read for this site where a common-law marriage can still be formed are ${h.list(rec.map((j) => h.name(j.code)))}, each with its own conditions; some limit it, for example to inheritance cases. ${ab.length} states abolished it at a given date: a common-law marriage validly formed there before that date generally remains valid, but none can be formed after it. The other states do not recognize one formed on their soil, though several respect one formed validly elsewhere. A common-law marriage validly formed in one state is generally recognized by the others, and it ends only by divorce or death, like any marriage. Texas lets couples record an informal marriage with a declaration at the county clerk, which gives them a marriage record. Each status comes from the Social Security Administration's digest of state laws (POMS GN 00305.075, revised May 30, 2023), checked against a 2025 report of the Connecticut legislature and, for South Carolina, the state's own ruling. This page states what those official texts say; whether a particular relationship is a marriage is a question for a lawyer or a court.`;
    },
    faqs: (h) => {
      const rec = of(h, 'recognized');
      return [
        { q: 'Which states recognize common-law marriage?', a: `Among the jurisdictions covered here: ${h.list(rec.map((j) => h.name(j.code)))}. Conditions differ by state, and some recognize it only for limited purposes. All other states either abolished it at a set date or do not recognize it, though they generally respect one formed validly elsewhere.` },
        { q: 'How long do you have to live together for a common-law marriage?', a: 'No state sets a number of years. What counts is the agreement to be married, living together and presenting yourselves as married, for example by using the same last name or filing joint tax returns, in a state that allows it. Years of cohabitation alone do not create a marriage.' },
        { q: 'Do you need a divorce to end a common-law marriage?', a: 'Yes. A valid common-law marriage is a marriage, so it ends by divorce or death like any other. There is no informal way to undo it by moving out. A couple who are unsure whether they are married should seek legal advice before remarrying.' },
        { q: 'How do you prove a common-law marriage?', a: 'With evidence of the agreement and the conduct: joint tax returns, shared leases or deeds, insurance naming the partner as spouse, statements to others. Texas offers a declaration of informal marriage recorded by the county clerk, which creates a marriage record that can be copied like a licensed marriage.' },
      ];
    },
    body: (h) => {
      const label = (s?: string | null) => (s === 'recognized' ? 'Can still be formed' : s === 'abolished' ? 'Abolished' : s === 'never' ? 'Not recognized' : h.nc);
      const rows = h.sorted().filter((j) => j.code !== 'NYC').map((j0) => { const j = h.J(j0.code); return [j.nameL, label(j.cl?.status), j.cl?.date ?? '–', j.clNote || '–']; });
      return `<h2>The status in each state</h2>
<p>“Date” is the first day on which a new common-law marriage could no longer be formed, as given by the Social Security Administration's digest of state laws (POMS GN 00305.075, revised May 30, 2023, read on ${h.date('2026-10-24')}). “Not recognized” is the digest's wording: it does not say whether the state once allowed it. Alabama, Pennsylvania, Texas and Utah are checked against the Connecticut legislature's 2025 report, and South Carolina against its Department of Revenue ruling.</p>
${h.table(['State', 'Common-law marriage', 'Date', 'Note'], rows, undefined, ['l', 'l', 'l', 'l'])}
<h2>Where official sources disagree</h2>
<ul><li><strong>South Carolina</strong>: the Connecticut report of October 2025 still lists it among the states that allow common-law marriage. The state's Department of Revenue and the Social Security digest say the South Carolina Supreme Court ended it from July 24, 2019 (Stone v. Thompson). This page follows South Carolina's own ruling.</li><li><strong>Colorado</strong>: the Connecticut report's summary places it with the states that abolished it, but its own table only cites the age rule of 2006. The Social Security digest lists it as recognized, both partners 18 or older. This page shows it as recognized.</li><li><strong>Iowa and the District of Columbia</strong>: the Connecticut report says they recognize it for limited purposes (support in Iowa, a court action to affirm the marriage in DC); the Social Security digest lists both as recognized.</li><li><strong>Alaska</strong>: an older legislative guide said Alaska never allowed it; the Social Security digest says it was recognized from March 7, 1939 to December 31, 1963. This page follows the digest.</li></ul>
<h2>The usual conditions</h2>
<ul><li>Both partners are legally able to marry: of age, not married to someone else, not closely related.</li><li>They agree, now, to be married to each other.</li><li>They live together in a state that allows common-law marriage.</li><li>They hold themselves out as married to family, employers, tax authorities and others.</li></ul>
<h2>When a formal license is simpler</h2>
<p>A licensed marriage leaves a record that any office accepts, while a common-law marriage may have to be proven again for each benefit or inheritance. The cost of a license is low compared with that burden: see ${h.a('marriage-license-cost', 'marriage license cost by state')}. In Texas, the ${h.a('ml-tx', 'Texas page')} explains both routes.</p>
<!--tool:mini:mlcost|{"state":"CO"}-->`;
    },
  },
  es: {
    slug: 'estados-matrimonio-de-hecho', nav: 'Estados con matrimonio de hecho', card: 'Dónde todavía se forma un matrimonio informal, dónde se abolió y desde cuándo.',
    title: 'Matrimonio de hecho por estado 2026: dónde se reconoce',
    description: 'Matrimonio de hecho («common-law») en 2026: los estados donde todavía puede formarse, los que lo abolieron y la fecha de corte, con las fuentes oficiales.',
    h1: 'Matrimonio de hecho: qué estados lo reconocen',
    intro: 'Elija un estado para ver si allí todavía puede formarse un matrimonio de hecho y, si se abolió, desde qué fecha. Solo hechos, sin asesoría legal.',
    resume: (h) => {
      const rec = of(h, 'recognized'), ab = of(h, 'abolished');
      return `Un matrimonio de hecho, llamado en inglés «common-law marriage», es un matrimonio formado sin licencia ni ceremonia, cuando una pareja que puede casarse legalmente acuerda estar casada, vive junta y se presenta ante los demás como cónyuges. Vivir juntos unos años no basta por sí solo, y ningún estado crea un matrimonio de hecho simplemente a los siete años, un mito muy extendido. En 2026, las jurisdicciones leídas para este sitio donde todavía puede formarse un matrimonio de hecho son ${h.list(rec.map((j) => h.name(j.code)))}, cada una con sus condiciones; algunas lo limitan, por ejemplo a casos de herencia. ${ab.length} estados lo abolieron en una fecha determinada: un matrimonio de hecho formado válidamente allí antes de esa fecha suele seguir siendo válido, pero ninguno puede formarse después. Los demás estados no reconocen el que se forma en su territorio, aunque varios respetan uno formado válidamente en otro lugar. Un matrimonio de hecho formado válidamente en un estado suele ser reconocido por los demás, y solo termina por divorcio o fallecimiento, como cualquier matrimonio. Texas permite a las parejas registrar un matrimonio informal con una declaración ante el secretario del condado, lo que les da un acta de matrimonio. Cada situación procede del resumen de leyes estatales de la Administración del Seguro Social (POMS GN 00305.075, revisión del 30 de mayo de 2023), cotejado con un informe de 2025 de la legislatura de Connecticut y, para Carolina del Sur, con el fallo del propio estado. Esta página indica lo que dicen esos textos oficiales; si una relación concreta es un matrimonio es una cuestión para un abogado o un tribunal.`;
    },
    faqs: (h) => {
      const rec = of(h, 'recognized');
      return [
        { q: '¿Qué estados reconocen el matrimonio de hecho?', a: `Entre las jurisdicciones cubiertas aquí: ${h.list(rec.map((j) => h.name(j.code)))}. Las condiciones cambian según el estado, y algunos solo lo reconocen para fines limitados. Los demás estados lo abolieron en una fecha fija o no lo reconocen, aunque suelen respetar uno formado válidamente en otro lugar.` },
        { q: '¿Cuánto tiempo hay que vivir juntos para un matrimonio de hecho?', a: 'Ningún estado fija un número de años. Lo que cuenta es el acuerdo de estar casados, vivir juntos y presentarse como casados, por ejemplo usando el mismo apellido o declarando impuestos en conjunto, en un estado que lo permite. Los años de convivencia por sí solos no crean un matrimonio.' },
        { q: '¿Hace falta divorciarse para terminar un matrimonio de hecho?', a: 'Sí. Un matrimonio de hecho válido es un matrimonio, así que termina por divorcio o fallecimiento como cualquier otro. No hay forma informal de deshacerlo mudándose. Una pareja que duda de si está casada debería pedir asesoría legal antes de volver a casarse.' },
        { q: '¿Cómo se prueba un matrimonio de hecho?', a: 'Con pruebas del acuerdo y de la conducta: declaraciones de impuestos conjuntas, contratos de alquiler o escrituras compartidas, seguros que nombran a la pareja como cónyuge, lo que se dijo a otras personas. Texas ofrece una declaración de matrimonio informal registrada por el secretario del condado, que crea un acta que puede copiarse como la de un matrimonio con licencia.' },
      ];
    },
    body: (h) => {
      const label = (s?: string | null) => (s === 'recognized' ? 'Todavía puede formarse' : s === 'abolished' ? 'Abolido' : s === 'never' ? 'No reconocido' : h.nc);
      const rows = h.sorted().filter((j) => j.code !== 'NYC').map((j0) => { const j = h.J(j0.code); return [j.nameL, label(j.cl?.status), j.cl?.date ?? '–', j.clNote || '–']; });
      return `<h2>La situación en cada estado</h2>
<p>«Fecha» es el primer día en que ya no pudo formarse ningún matrimonio de hecho nuevo, según el resumen de leyes estatales de la Administración del Seguro Social (POMS GN 00305.075, revisión del 30 de mayo de 2023, leído el ${h.date('2026-10-24')}). «No reconocido» es la expresión del resumen: no dice si el estado lo permitió alguna vez. Alabama, Pensilvania, Texas y Utah se cotejan con el informe de 2025 de la legislatura de Connecticut, y Carolina del Sur con el fallo de su Departamento de Ingresos.</p>
${h.table(['Estado', 'Matrimonio de hecho', 'Fecha', 'Nota'], rows, undefined, ['l', 'l', 'l', 'l'])}
<h2>Cuando las fuentes oficiales no coinciden</h2>
<ul><li><strong>Carolina del Sur</strong>: el informe de Connecticut de octubre de 2025 todavía la cuenta entre los estados que permiten el matrimonio de hecho. El Departamento de Ingresos del estado y el resumen del Seguro Social indican que la Corte Suprema de Carolina del Sur lo eliminó a partir del 24 de julio de 2019 (Stone v. Thompson). Esta página sigue el fallo del propio estado.</li><li><strong>Colorado</strong>: el resumen del informe de Connecticut lo coloca con los estados que lo abolieron, pero su propia tabla solo cita la regla de edad de 2006. El resumen del Seguro Social lo da por reconocido, con los dos de 18 años o más. Esta página lo muestra como reconocido.</li><li><strong>Iowa y el Distrito de Columbia</strong>: el informe de Connecticut dice que lo reconocen para fines limitados (pensión alimenticia en Iowa, una acción judicial para confirmar el matrimonio en DC); el resumen del Seguro Social los da a ambos por reconocidos.</li><li><strong>Alaska</strong>: una guía legislativa antigua decía que Alaska nunca lo permitió; el resumen del Seguro Social indica que se reconoció del 7 de marzo de 1939 al 31 de diciembre de 1963. Esta página sigue el resumen.</li></ul>
<h2>Las condiciones habituales</h2>
<ul><li>Los dos pueden casarse legalmente: mayores de edad, no casados con otra persona, sin parentesco cercano.</li><li>Acuerdan, en el presente, estar casados entre sí.</li><li>Viven juntos en un estado que permite el matrimonio de hecho.</li><li>Se presentan como casados ante la familia, los empleadores, el fisco y los demás.</li></ul>
<h2>Cuando una licencia formal es más sencilla</h2>
<p>Un matrimonio con licencia deja un registro que cualquier oficina acepta, mientras que un matrimonio de hecho puede tener que probarse de nuevo para cada beneficio o herencia. El costo de una licencia es bajo frente a esa carga: vea ${h.a('marriage-license-cost', 'costo de la licencia por estado')}. En Texas, la ${h.a('ml-tx', 'página de Texas')} explica las dos vías.</p>
<!--tool:mini:mlcost|{"state":"CO"}-->`;
    },
  },
});
