import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

const groups = (h: Helpers) => {
  const g: Record<string, string[]> = {};
  for (const r of h.MARRIAGE) { const k = r.waitingHours == null ? 'nc' : String(r.waitingHours); (g[k] ??= []).push(h.name(r.code)); }
  return g;
};

export default definePage({
  id: 'marriage-license-waiting', group: 'marriage', order: 30,
  tool: { kind: 'marriage', props: { state: 'WI' } },
  mini: { kind: 'mini:mlwait', props: { state: 'MA' } },
  related: ['marriage-license', 'marriage-license-cost', 'ml-tx', 'ml-nv', 'ml-ny', 'courthouse-wedding'],
  sources: [],
  en: {
    slug: 'marriage-license-waiting-period', nav: 'Waiting period and validity', card: 'How long to wait after the license is issued, and how long it stays valid, state by state.',
    title: 'Marriage License Waiting Period 2026 and How Long It Lasts',
    description: 'Marriage license waiting period in 2026 in every state, from none to 4 days, and how long a license stays valid, from 30 days to a year, with the waivers.',
    h1: 'Marriage license waiting period and validity by state',
    intro: 'Enter the issue date: the calculator gives the first day you may marry and the last day the license is valid in the state you choose.',
    resume: (h) => {
      const g = groups(h), M = h.MARRIAGE;
      const v = (k: string, n?: number) => M.filter((r) => r.validity?.kind === k && (n == null || r.validity.value === n)).length;
      return `A marriage license waiting period is the time between the issue of the license and the first moment the ceremony may take place. In ${(g['0'] ?? []).length} of the ${M.length} jurisdictions covered here there is none, and the license can be used the same day. ${h.list(g['24'] ?? [])} impose 24 hours; ${h.list(g['48'] ?? [])} impose 48 hours; ${h.list(g['72'] ?? [])} impose three days; and ${h.list(g['96'] ?? [])} the longest wait read for this site, four days. Many states with a wait allow waivers: a judge's order, active military service, or, in some states, a premarital course. Validity is the other limit: a license expires if it is not used in time, and the fee is lost. The most common validity is 60 days (${v('days', 60)} jurisdictions); ${v('days', 30)} allow only 30 days, ${v('days', 90)} allow 90, and ${v('years')} allow a full year, while a few states set no expiry at all. Where the data show a state without a published figure, the calculator says so instead of guessing. Rules were read on official state and county pages, with the date for each state.`;
    },
    faqs: (h) => {
      const tx = h.ML('TX'), ny = h.ML('NY');
      return [
        { q: 'Which states have a waiting period for a marriage license?', a: `${h.list(h.MARRIAGE.filter((r) => (r.waitingHours ?? 0) > 0).map((r) => h.name(r.code)))}. The wait runs from 24 hours to four days. All other jurisdictions covered here let couples marry as soon as the license is issued.` },
        { q: 'Can the waiting period be waived?', a: `Often. In New York, the ${ny.waitL} wait can be waived by a judge. In Texas, the ${tx.waitL} wait does not apply to couples who completed the Twogether in Texas course or to active military members. Several states with a wait allow a court waiver for good cause, and Florida does not apply its wait to nonresidents.` },
        { q: 'What happens if our marriage license expires?', a: 'It can no longer be used, the fee is not refunded, and you apply and pay again. A marriage performed with an expired license may not be valid, so the officiant should refuse it. Check the date on the license and plan the ceremony well before it.' },
        { q: 'Does the waiting period count in hours or days?', a: 'In the states that state it in hours, the clock usually starts at the moment the license is issued. A Texas license issued at 3 p.m. on Monday can be used from 3 p.m. on Thursday. The calculator counts whole days, which gives the first calendar day possible.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j) => { const r = h.ML(j.code); return [h.sl(j.code, 'ml', r.nameL), r.waitL, r.validL]; });
      return `<h2>Waiting period and validity, state by state</h2>
${h.table(['State', 'Waiting period', 'Valid for'], rows, undefined, ['l', 'l', 'l'])}
<h2>Planning the two dates</h2>
<p>Count backward from the wedding: the license must be issued early enough for any waiting period to pass, and late enough to still be valid on the wedding day. In a 30-day state, apply within the month before the ceremony; in a one-year state, any time in the year works. Add a margin of a few days for an appointment and for the office's hours on the day of issue.</p>
<!--tool:mini:mlwait|{"state":"MA"}-->
<h2>Weddings far from home</h2>
<p>Destination weddings favor states with no wait and a long validity: Nevada is the best known, as the ${h.a('ml-nv', 'Las Vegas page')} shows. In a state with a waiting period, couples coming from elsewhere often buy the license on arrival and plan the ceremony several days later. Prices and courses are compared on ${h.a('marriage-license-cost', 'marriage license cost by state')}.</p>`;
    },
  },
  es: {
    slug: 'espera-licencia-de-matrimonio', nav: 'Espera y vigencia de la licencia', card: 'Cuánto esperar tras la emisión de la licencia y cuánto tiempo vale, estado por estado.',
    title: 'Licencia de matrimonio espera 2026: plazo y vigencia',
    description: 'Espera de la licencia de matrimonio en 2026 en cada estado, de ninguna a 4 días, y cuánto tiempo vale, de 30 días a un año, con las dispensas que existen.',
    h1: 'Espera y vigencia de la licencia de matrimonio por estado',
    intro: 'Indique la fecha de emisión: la calculadora da el primer día en que pueden casarse y el último día de vigencia de la licencia en el estado que elija.',
    resume: (h) => {
      const g = groups(h), M = h.MARRIAGE;
      const v = (k: string, n?: number) => M.filter((r) => r.validity?.kind === k && (n == null || r.validity.value === n)).length;
      return `La espera de la licencia de matrimonio es el tiempo entre la emisión de la licencia y el primer momento en que puede celebrarse la ceremonia. En ${(g['0'] ?? []).length} de las ${M.length} jurisdicciones cubiertas aquí no hay espera, y la licencia puede usarse el mismo día. ${h.list(g['24'] ?? [])} imponen 24 horas; ${h.list(g['48'] ?? [])} imponen 48 horas; ${h.list(g['72'] ?? [])} imponen tres días, y ${h.list(g['96'] ?? [])} la espera más larga leída para este sitio, cuatro días. Muchos estados con espera admiten dispensas: una orden judicial, el servicio militar activo o, en algunos estados, un curso prematrimonial. La vigencia es el otro límite: una licencia vence si no se usa a tiempo, y la tarifa se pierde. La vigencia más común es de 60 días (${v('days', 60)} jurisdicciones); ${v('days', 30)} permiten solo 30 días, ${v('days', 90)} permiten 90 y ${v('years')} un año entero, mientras que unos pocos estados no fijan vencimiento. Cuando los datos muestran un estado sin cifra publicada, la calculadora lo indica en vez de adivinar. Las reglas se leyeron en páginas oficiales de estados y condados, con la fecha de cada estado.`;
    },
    faqs: (h) => {
      const tx = h.ML('TX'), ny = h.ML('NY');
      return [
        { q: '¿Qué estados tienen espera para la licencia de matrimonio?', a: `${h.list(h.MARRIAGE.filter((r) => (r.waitingHours ?? 0) > 0).map((r) => h.name(r.code)))}. La espera va de 24 horas a cuatro días. Las demás jurisdicciones cubiertas aquí permiten casarse en cuanto se emite la licencia.` },
        { q: '¿Se puede dispensar la espera?', a: `A menudo. En Nueva York, un juez puede dispensar la espera de ${ny.waitL}. En Texas, la espera de ${tx.waitL} no se aplica a las parejas que completaron el curso Twogether in Texas ni a los militares en servicio activo. Varios estados con espera admiten una dispensa judicial por causa justificada, y Florida no aplica su espera a los no residentes.` },
        { q: '¿Qué pasa si nuestra licencia de matrimonio vence?', a: 'Ya no puede usarse, la tarifa no se devuelve y hay que solicitarla y pagarla de nuevo. Un matrimonio celebrado con una licencia vencida puede no ser válido, así que el oficiante debe negarse a celebrarlo. Revise la fecha de la licencia y planee la ceremonia mucho antes.' },
        { q: '¿La espera se cuenta en horas o en días?', a: 'En los estados que la fijan en horas, el reloj suele empezar en el momento de la emisión. Una licencia de Texas emitida el lunes a las 3 p. m. puede usarse desde el jueves a las 3 p. m. La calculadora cuenta días enteros, lo que da el primer día del calendario posible.' },
      ];
    },
    body: (h) => {
      const rows = h.sorted().map((j) => { const r = h.ML(j.code); return [h.sl(j.code, 'ml', r.nameL), r.waitL, r.validL]; });
      return `<h2>Espera y vigencia, estado por estado</h2>
${h.table(['Estado', 'Espera', 'Vigencia'], rows, undefined, ['l', 'l', 'l'])}
<h2>Planear las dos fechas</h2>
<p>Cuente hacia atrás desde la boda: la licencia debe emitirse con antelación suficiente para que pase la espera, y lo bastante tarde para que siga vigente el día de la boda. En un estado de 30 días, solicítela dentro del mes anterior a la ceremonia; en uno de un año, cualquier momento del año sirve. Añada unos días de margen para la cita y para el horario de la oficina el día de la emisión.</p>
<!--tool:mini:mlwait|{"state":"MA"}-->
<h2>Bodas lejos de casa</h2>
<p>Las bodas de destino prefieren los estados sin espera y con vigencia larga: Nevada es el más conocido, como muestra la ${h.a('ml-nv', 'página de Las Vegas')}. En un estado con espera, las parejas que llegan de fuera suelen comprar la licencia al llegar y programar la ceremonia unos días después. Los precios y los cursos se comparan en ${h.a('marriage-license-cost', 'costo de la licencia por estado')}.</p>`;
    },
  },
});
