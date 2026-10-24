import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

const am = (h: Helpers) => h.sorted().filter((j) => h.x(`amended_${j.code.toLowerCase()}_fee`) != null);
const fee = (h: Helpers, code: string) => h.x(`amended_${code.toLowerCase()}_fee`) as number;

export default definePage({
  id: 'birth-amended', group: 'birth', order: 70,
  tool: { kind: 'mini:amended', props: { copies: 1 } },
  mini: { kind: 'mini:pair', props: { state: 'CA' } },
  related: ['birth-certified-copy', 'birth-ca', 'birth-certificate', 'birth-passport', 'name-change', 'vital-records-office'],
  sources: [],
  en: {
    slug: 'amended-birth-certificate', nav: 'Amended birth certificate', card: 'Correcting or amending a birth record: the state fee for the change and for the new certified copy.',
    title: 'Amended Birth Certificate 2026: Correction Fee by State',
    description: 'Amended birth certificate in 2026: the fee to correct or amend a birth record in the states that publish it, the new certified copy and the usual documents.',
    h1: 'Amended birth certificate: what a correction costs',
    intro: 'Choose a state that publishes its amendment fee: the tool adds the fee for the change and the new certified copies of the corrected record.',
    resume: (h) => {
      const a = am(h), fees = a.map((j) => fee(h, j.code));
      return `An amended birth certificate is a birth record that the state vital records office has changed after registration, to correct an error or to reflect a later fact. Two kinds of change exist. A correction fixes a mistake made when the record was filed, such as a misspelled name or a wrong date, usually with an affidavit and documents created near the time of birth. An amendment records something that happened later: a legal name change by court order, an acknowledgment or court finding of paternity, an adoption, or a change of the sex marker where the state allows it. In both cases the office charges a fee for processing the change and then sells certified copies of the amended record at its normal copy fee; in some states the first copy is included. Of the jurisdictions read for this site, ${a.length} publish an amendment fee, from ${h.m(Math.min(...fees))} to ${h.m(Math.max(...fees))}. Many amended certificates show that the record was changed and the date; after an adoption, the state usually issues a new certificate and seals the original. The documents required are set by each state; this page lists the fees, not legal advice on a particular change.`;
    },
    faqs: (h) => {
      const tx = h.J('TX');
      return [
        { q: 'How much does it cost to amend a birth certificate?', a: `It depends on the state. Texas, for example, charges ${h.m(fee(h, 'TX'))} for a correction, and then ${tx.bFirst} for each new certified copy of the corrected record. Court costs are extra when the change needs a court order, such as a legal name change.` },
        { q: 'What is the difference between a correction and an amendment?', a: 'A correction fixes an error made when the birth was registered, such as a typo in a name or a wrong time of birth. An amendment adds or changes information because of a later event, such as paternity, adoption or a court-ordered name change. Both go through the state vital records office.' },
        { q: 'What documents do I need to correct a birth certificate?', a: 'Usually the state\'s affidavit or application form, a photo ID, and documents that show the correct information, ideally created early in life: hospital, baptism, school or census records. A change based on a court decision needs a certified copy of the court order.' },
        { q: 'Will the amended birth certificate show that it was changed?', a: 'Often, yes. Many states mark the corrected item or note that the record was amended and when. After an adoption or some paternity changes, the state usually issues a new certificate that does not show the change, and seals the original record.' },
      ];
    },
    body: (h) => {
      const rows = am(h).map((j0) => { const j = h.J(j0.code), f = fee(h, j.code); return [j.nameL, h.m(f), j.bFirst, h.m(f + j.birth.first), h.xUrl(`amended_${j.code.toLowerCase()}_fee`) ? h.ext(h.xUrl(`amended_${j.code.toLowerCase()}_fee`), 'official page') : '–']; });
      return `<h2>Amendment fees published by the states</h2>
<p>Fee for the change, price of one new certified copy, and the total when that copy is not included. Several states charge different amounts depending on the type of change; the figure shown is the one on the state page for a standard correction.</p>
${h.table(['State', 'Amendment fee', 'New copy', 'Total', 'Source'], rows, undefined, ['l', 'r', 'r', 'r', 'l'])}
<h2>The usual steps</h2>
<ol><li>Find the right form on the state vital records office page: correction affidavit, paternity acknowledgment, court-order amendment.</li><li>Gather the supporting documents and have the form notarized if required.</li><li>Send the form, the documents and the amendment fee, with the fee for the new copies.</li><li>Receive the certified copies of the amended record.</li></ol>
<!--tool:mini:pair|{"state":"CA"}-->
<h2>After the change</h2>
<p>Update the other records that rely on the birth certificate: Social Security, the passport and the driver's license, using the new certified copy. The ${h.a('birth-passport', 'passport page')} explains what the State Department checks, and the ${h.a('birth-ca', 'California page')} describes one state's affidavit process.</p>`;
    },
  },
  es: {
    slug: 'acta-de-nacimiento-enmendada', nav: 'Acta de nacimiento enmendada', card: 'Corregir o enmendar un acta de nacimiento: la tarifa estatal del cambio y la de la nueva copia certificada.',
    title: 'Acta de nacimiento enmendada 2026: tarifa de corrección',
    description: 'Acta de nacimiento enmendada en 2026: la tarifa para corregir un acta en los estados que la publican, la nueva copia certificada y los documentos habituales.',
    h1: 'Acta de nacimiento enmendada: lo que cuesta una corrección',
    intro: 'Elija un estado que publique su tarifa de enmienda: la herramienta suma la tarifa del cambio y las nuevas copias certificadas del acta corregida.',
    resume: (h) => {
      const a = am(h), fees = a.map((j) => fee(h, j.code));
      return `Un acta de nacimiento enmendada es un registro de nacimiento que la oficina estatal de registros vitales modificó después de inscribirlo, para corregir un error o reflejar un hecho posterior. Hay dos tipos de cambio. Una corrección arregla un error cometido al inscribir el registro, como un nombre mal escrito o una fecha equivocada, normalmente con una declaración jurada y documentos de la época del nacimiento. Una enmienda registra algo ocurrido después: un cambio legal de nombre por orden judicial, un reconocimiento o una declaración judicial de paternidad, una adopción o un cambio del marcador de sexo donde el estado lo permite. En ambos casos la oficina cobra una tarifa por tramitar el cambio y luego vende copias certificadas del acta enmendada a su tarifa habitual; en algunos estados la primera copia está incluida. De las jurisdicciones leídas para este sitio, ${a.length} publican una tarifa de enmienda, de ${h.m(Math.min(...fees))} a ${h.m(Math.max(...fees))}. Muchas actas enmendadas indican que el registro se modificó y la fecha; tras una adopción, el estado suele emitir una nueva acta y sellar la original. Los documentos exigidos los fija cada estado; esta página indica las tarifas, no da asesoría legal sobre un cambio concreto.`;
    },
    faqs: (h) => {
      const tx = h.J('TX');
      return [
        { q: '¿Cuánto cuesta enmendar un acta de nacimiento?', a: `Depende del estado. Texas, por ejemplo, cobra ${h.m(fee(h, 'TX'))} por una corrección, y luego ${tx.bFirst} por cada copia certificada nueva del acta corregida. Las costas judiciales son aparte cuando el cambio necesita una orden judicial, como un cambio legal de nombre.` },
        { q: '¿Qué diferencia hay entre una corrección y una enmienda?', a: 'Una corrección arregla un error cometido al inscribir el nacimiento, como una errata en un nombre o una hora de nacimiento equivocada. Una enmienda añade o cambia información por un hecho posterior, como la paternidad, la adopción o un cambio de nombre ordenado por un juez. Las dos se tramitan ante la oficina estatal de registros vitales.' },
        { q: '¿Qué documentos necesito para corregir un acta de nacimiento?', a: 'Por lo general el formulario o la declaración jurada del estado, una identificación con foto y documentos que muestren la información correcta, de preferencia de los primeros años de vida: registros del hospital, de bautismo, escolares o del censo. Un cambio basado en una decisión judicial necesita una copia certificada de la orden.' },
        { q: '¿El acta enmendada mostrará que fue modificada?', a: 'A menudo, sí. Muchos estados marcan el dato corregido o indican que el registro se enmendó y cuándo. Tras una adopción o algunos cambios de paternidad, el estado suele emitir una nueva acta que no muestra el cambio y sella el registro original.' },
      ];
    },
    body: (h) => {
      const rows = am(h).map((j0) => { const j = h.J(j0.code), f = fee(h, j.code); return [j.nameL, h.m(f), j.bFirst, h.m(f + j.birth.first), h.xUrl(`amended_${j.code.toLowerCase()}_fee`) ? h.ext(h.xUrl(`amended_${j.code.toLowerCase()}_fee`), 'página oficial') : '–']; });
      return `<h2>Tarifas de enmienda que publican los estados</h2>
<p>Tarifa del cambio, precio de una copia certificada nueva y total cuando esa copia no está incluida. Varios estados cobran importes distintos según el tipo de cambio; la cifra mostrada es la de la página del estado para una corrección estándar.</p>
${h.table(['Estado', 'Tarifa de enmienda', 'Copia nueva', 'Total', 'Fuente'], rows, undefined, ['l', 'r', 'r', 'r', 'l'])}
<h2>Los pasos habituales</h2>
<ol><li>Busque el formulario correcto en la página de la oficina estatal de registros vitales: declaración de corrección, reconocimiento de paternidad, enmienda por orden judicial.</li><li>Reúna los documentos de respaldo y haga notariar el formulario si se exige.</li><li>Envíe el formulario, los documentos y la tarifa de enmienda, junto con la tarifa de las copias nuevas.</li><li>Reciba las copias certificadas del acta enmendada.</li></ol>
<!--tool:mini:pair|{"state":"CA"}-->
<h2>Después del cambio</h2>
<p>Actualice los demás registros que dependen del acta de nacimiento: el Seguro Social, el pasaporte y la licencia de manejar, con la nueva copia certificada. La ${h.a('birth-passport', 'página del pasaporte')} explica lo que revisa el Departamento de Estado, y la ${h.a('birth-ca', 'página de California')} describe el trámite de declaración de un estado.</p>`;
    },
  },
});
