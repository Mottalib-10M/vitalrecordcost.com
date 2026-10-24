import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

const f = (h: Helpers, k: string) => (h.x(k) != null ? h.m(h.x(k) as number) : h.nc);
/** Adult passport book by renewal (DS-82): same book fee as a first adult book, no acceptance fee. */
const ren = (h: Helpers) => f(h, h.x('passport_renewal_adult_fee') != null ? 'passport_renewal_adult_fee' : 'passport_book_adult_fee');

export default definePage({
  id: 'name-change', group: 'marriage', order: 70,
  tool: { kind: 'mini:namechange', props: { state: 'FL', copies: 3 } },
  mini: { kind: 'mini:marrcopy', props: { state: 'NC', copies: 3 } },
  related: ['marriage-copy', 'marriage-license-vs-certificate', 'birth-passport', 'divorce-certificate', 'marriage-license', 'birth-certified-copy'],
  sources: (lang) => [
    { name: lang === 'es' ? 'Seguro Social: cambiar el nombre en la tarjeta' : 'Social Security: change your name on your card', url: 'https://www.ssa.gov/personal-record/change-name' },
    { name: lang === 'es' ? 'Departamento de Estado: tarifas de pasaporte' : 'U.S. Department of State: passport fees', url: 'https://travel.state.gov/content/travel/en/passports/how-apply/fees.html' },
  ],
  en: {
    slug: 'name-change-after-marriage', nav: 'Name change after marriage', card: 'The order that works: certificate copies, Social Security, driver\'s license, passport, then the rest.',
    title: 'Name Change After Marriage 2026: Checklist and Costs',
    description: 'How to change your name after marriage in 2026: the order of the steps, the marriage certificate copies to order, and what Social Security and a passport cost.',
    h1: 'Name change after marriage: the checklist, in order',
    intro: 'The tool totals the certified copies of the marriage certificate and the passport fee for the state of the wedding. Social Security is free.',
    resume: (h) => {
      const ssa = h.x('ssa_name_change_fee');
      return `Changing your name after marriage follows one order that avoids being turned away: first the certified marriage certificate, then Social Security, then the driver's license or state ID, then the passport, and only then banks, employer, insurers and everything else. The marriage certificate is the legal link between the old and the new name; order certified copies from the office that recorded the marriage, two or three being enough for most people, since several agencies only examine and return them. Social Security comes second because employers, the IRS and motor vehicle offices check names against its records; a new card with the same number ${ssa === 0 ? 'is free' : `costs ${f(h, 'ssa_name_change_fee')}`}, applied for online in some states or with form SS-5 and the certified certificate. The motor vehicle office of your state then issues a corrected license, at its own fee, and usually wants the Social Security record updated first. The passport changes last: free within a year of issue, otherwise through a renewal at ${ren(h)} for an adult book. Nothing obliges anyone to change their name after marriage; the steps are the same for a hyphenated name, and a return to a former name after divorce uses the divorce decree instead.`;
    },
    faqs: (h) => [
      { q: 'What is the first step to change my name after marriage?', a: 'Get certified copies of the marriage certificate from the office that recorded the marriage. Every other step uses it. Then apply to Social Security, before the driver\'s license, because motor vehicle offices check your name against the Social Security record.' },
      { q: 'How much does it cost to change your name after marriage?', a: `Social Security charges nothing for a corrected card. You pay for certified copies of the marriage certificate, the motor vehicle office's fee for a new license, and a passport renewal at ${ren(h)} if your passport is more than a year old. The tool above totals these for your state.` },
      { q: 'How many marriage certificate copies do I need for a name change?', a: 'Two or three certified copies are usually enough, because Social Security and the passport office return them after examining them. Some banks or motor vehicle offices keep a copy. Order them at the same time to save on the per-order fee.' },
      { q: 'Do I need to change my name on my passport right away?', a: 'Not to travel, but the name on your airline ticket must match the passport you use. If you book travel in your new name, update the passport first. Within a year of issue the correction is free; later it is a normal renewal with the marriage certificate.' },
    ],
    body: (h) => {
      const rows = [['1', 'Certified marriage certificate copies', 'Office that recorded the marriage', 'Per copy, see the tool'], ['2', 'Social Security card', 'Social Security Administration', h.x('ssa_name_change_fee') === 0 ? 'Free' : f(h, 'ssa_name_change_fee')], ['3', 'Driver\'s license or state ID', 'State motor vehicle office', 'State fee'], ['4', 'Passport', 'U.S. Department of State', `Free within 1 year, else ${ren(h)}`], ['5', 'Bank, employer, payroll, insurers, voter registration', 'Each organization', 'Usually free']];
      return `<h2>The checklist with its costs</h2>
${h.table(['Step', 'Document', 'Where', 'Cost'], rows, undefined, ['l', 'l', 'l', 'l'])}
<h2>Social Security, in practice</h2>
<p>Bring or mail the completed SS-5 form, the certified marriage certificate, and proof of identity showing your old name, such as a driver's license, plus proof of citizenship if it is not already on file. The card keeps the same number. Wait until the update has reached the Social Security record before going to the motor vehicle office, which checks it.</p>
<h2>Copies of the marriage certificate</h2>
<p>Where the state vital records office sells marriage copies, its fee is shown by the tool below; elsewhere, the county that issued the license sets it. The ${h.a('marriage-copy', 'marriage certificate copy')} page lists the office in each state.</p>
<!--tool:mini:marrcopy|{"state":"NC","copies":3}-->
<h2>Passport and travel</h2>
<p>A first passport in the new name needs the certified birth certificate and the marriage certificate linking the two names: see ${h.a('birth-passport', 'birth certificate for a passport')}. After a divorce, the decree that restores a former name plays the role of the marriage certificate: see ${h.a('divorce-certificate', 'divorce certificate')}.</p>`;
    },
  },
  es: {
    slug: 'cambio-de-apellido-tras-el-matrimonio', nav: 'Cambio de apellido tras el matrimonio', card: 'El orden que funciona: copias del acta, Seguro Social, licencia de manejar, pasaporte y luego lo demás.',
    title: 'Cambio de apellido tras el matrimonio 2026: pasos y costos',
    description: 'Cómo cambiar de apellido tras casarse en 2026: el orden de los pasos, las copias del acta de matrimonio y lo que cuestan el Seguro Social y el pasaporte.',
    h1: 'Cambio de apellido tras el matrimonio: la lista, en orden',
    intro: 'La herramienta suma las copias certificadas del acta de matrimonio y la tarifa del pasaporte para el estado de la boda. El Seguro Social es gratis.',
    resume: (h) => {
      const ssa = h.x('ssa_name_change_fee');
      return `Cambiar de apellido tras el matrimonio sigue un orden que evita que lo rechacen: primero el acta de matrimonio certificada, después el Seguro Social, luego la licencia de manejar o la identificación estatal, después el pasaporte y solo entonces bancos, empleador, aseguradoras y todo lo demás. El acta de matrimonio es el vínculo legal entre el nombre anterior y el nuevo; pida copias certificadas a la oficina que registró el matrimonio, y dos o tres bastan a la mayoría, porque varias agencias solo las examinan y las devuelven. El Seguro Social va segundo porque los empleadores, el IRS y las oficinas de vehículos comparan los nombres con sus registros; una tarjeta nueva con el mismo número ${ssa === 0 ? 'es gratis' : `cuesta ${f(h, 'ssa_name_change_fee')}`}, y se pide en línea en algunos estados o con el formulario SS-5 y el acta certificada. La oficina de vehículos de su estado emite después una licencia corregida, con su propia tarifa, y suele exigir que el registro del Seguro Social ya esté actualizado. El pasaporte se cambia al final: gratis dentro del año de su emisión, y si no, con una renovación de ${ren(h)} por una libreta de adulto. Nada obliga a cambiar de apellido tras casarse; los pasos son los mismos para un apellido compuesto, y para recuperar un apellido anterior tras un divorcio se usa la sentencia de divorcio.`;
    },
    faqs: (h) => [
      { q: '¿Cuál es el primer paso para cambiar de apellido tras casarse?', a: 'Obtener copias certificadas del acta de matrimonio de la oficina que registró el matrimonio. Todos los demás pasos la usan. Después, solicite el cambio al Seguro Social antes que la licencia de manejar, porque las oficinas de vehículos comparan su nombre con el registro del Seguro Social.' },
      { q: '¿Cuánto cuesta cambiar de apellido tras el matrimonio?', a: `El Seguro Social no cobra nada por una tarjeta corregida. Usted paga las copias certificadas del acta de matrimonio, la tarifa de la oficina de vehículos por una nueva licencia y una renovación de pasaporte de ${ren(h)} si su pasaporte tiene más de un año. La herramienta de arriba suma estos costos para su estado.` },
      { q: '¿Cuántas copias del acta de matrimonio necesito para el cambio de apellido?', a: 'Dos o tres copias certificadas suelen bastar, porque el Seguro Social y la oficina de pasaportes las devuelven tras examinarlas. Algunos bancos u oficinas de vehículos se quedan con una. Pídalas a la vez para ahorrar el cargo por pedido.' },
      { q: '¿Debo cambiar el apellido en el pasaporte de inmediato?', a: 'No para viajar, pero el nombre del boleto de avión debe coincidir con el pasaporte que use. Si reserva un viaje con su nuevo nombre, actualice antes el pasaporte. Dentro del año de su emisión la corrección es gratis; después es una renovación normal con el acta de matrimonio.' },
    ],
    body: (h) => {
      const rows = [['1', 'Copias certificadas del acta de matrimonio', 'Oficina que registró el matrimonio', 'Por copia, vea la herramienta'], ['2', 'Tarjeta del Seguro Social', 'Administración del Seguro Social', h.x('ssa_name_change_fee') === 0 ? 'Gratis' : f(h, 'ssa_name_change_fee')], ['3', 'Licencia de manejar o identificación estatal', 'Oficina de vehículos del estado', 'Tarifa estatal'], ['4', 'Pasaporte', 'Departamento de Estado de EE. UU.', `Gratis dentro de 1 año; si no, ${ren(h)}`], ['5', 'Banco, empleador, nómina, aseguradoras, registro electoral', 'Cada entidad', 'Por lo general gratis']];
      return `<h2>La lista con sus costos</h2>
${h.table(['Paso', 'Documento', 'Dónde', 'Costo'], rows, undefined, ['l', 'l', 'l', 'l'])}
<h2>El Seguro Social, en la práctica</h2>
<p>Lleve o envíe el formulario SS-5 completo, el acta de matrimonio certificada y una prueba de identidad con su nombre anterior, como la licencia de manejar, además de la prueba de ciudadanía si no está ya archivada. La tarjeta conserva el mismo número. Espere a que el cambio llegue al registro del Seguro Social antes de ir a la oficina de vehículos, que lo comprueba.</p>
<h2>Copias del acta de matrimonio</h2>
<p>Donde la oficina estatal de registros vitales vende copias del acta de matrimonio, la herramienta de abajo muestra su tarifa; en los demás estados la fija el condado que emitió la licencia. La página de la ${h.a('marriage-copy', 'copia del acta de matrimonio')} indica la oficina de cada estado.</p>
<!--tool:mini:marrcopy|{"state":"NC","copies":3}-->
<h2>Pasaporte y viajes</h2>
<p>Un primer pasaporte con el nuevo apellido necesita el acta de nacimiento certificada y el acta de matrimonio que une los dos nombres: vea ${h.a('birth-passport', 'acta de nacimiento para el pasaporte')}. Tras un divorcio, la sentencia que devuelve un apellido anterior cumple el papel del acta de matrimonio: vea ${h.a('divorce-certificate', 'acta de divorcio')}.</p>`;
    },
  },
});
