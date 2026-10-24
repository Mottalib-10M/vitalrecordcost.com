import { definePage } from '../../lib/guide-types';
import type { Helpers } from '../../lib/helpers';

const ap = (h: Helpers) => h.sorted().filter((j) => j.code !== 'NYC' && j.apostille?.fee != null);

export default definePage({
  id: 'birth-apostille', group: 'birth', order: 60,
  tool: { kind: 'mini:apostille', props: { state: 'CA', copies: 1 } },
  mini: { kind: 'mini:pair', props: { state: 'NY' } },
  related: ['birth-certified-copy', 'birth-passport', 'birth-ny', 'birth-tx', 'marriage-copy', 'vital-records-office'],
  sources: (lang) => [{ name: lang === 'es' ? 'Departamento de Estado: autenticaciones y apostillas' : 'U.S. Department of State: authentications and apostilles', url: 'https://travel.state.gov/content/travel/en/replace-certify-docs/authenticate-your-document.html' }],
  en: {
    slug: 'apostille-birth-certificate', nav: 'Apostille on a birth certificate', card: 'The Secretary of State fee in each state, the order of the steps and the total with the certified copy.',
    title: 'Apostille Birth Certificate 2026: State Fee and Steps',
    description: 'Apostille on a birth certificate in 2026: the fee of each state\'s Secretary of State, the steps in order, and the total with the certified copy for use abroad.',
    h1: 'Apostille on a birth certificate: fee and steps by state',
    intro: 'Choose the state of birth and the number of certificates: the tool adds the certified copies and the apostilles issued by that state.',
    resume: (h) => {
      const a = ap(h), fees = a.map((j) => j.apostille?.fee as number);
      return `An apostille is a certificate attached to a public document so that it is accepted in another country that has joined the Hague Apostille Convention. For a U.S. birth certificate, it is issued by the state where the birth was registered, usually by the Secretary of State or an equivalent office, not by the federal government and not by the state where you live. The apostille certifies the signature of the official on the certificate, so the state checks that the copy bears a registrar signature it has on file; many offices require a recent certified copy, sometimes signed by the current state registrar, and refuse county copies or old ones. Of the ${h.JURS.length - 1} states and DC covered here, ${a.length} publish their apostille fee, from ${h.m(Math.min(...fees))} to ${h.m(Math.max(...fees))} per document, paid on top of the certified copy. For a country outside the convention, the document instead needs an authentication from the state and then from the U.S. Department of State, followed by legalization at that country's embassy. Translations, when required, are a separate step done after the apostille. Fees were read on each state's official page, with the date.`;
    },
    faqs: (h) => {
      const tx = h.J('TX'), ca = h.J('CA');
      return [
        { q: 'How do I get an apostille on a birth certificate?', a: 'Order a certified copy from the vital records office of the state of birth, then send it to that state\'s apostille office, usually the Secretary of State, with its request form and fee, stating the country where it will be used. The office attaches the apostille and returns the document.' },
        { q: 'How much does an apostille on a birth certificate cost?', a: `It depends on the state of birth: ${tx.apostilleL} per document in Texas and ${ca.apostilleL} in California, for example, plus the certified copy itself. Expedited service, courier delivery or walk-in service can cost extra where offered. The table below gives the fee in every state that publishes it.` },
        { q: 'Can I get an apostille from the state where I live now?', a: 'No. Only the state where the birth was registered can apostille its own birth certificate, because it certifies the signature of its own registrar. Someone born in Ohio and living in Florida sends the Ohio certificate to the Ohio Secretary of State.' },
        { q: 'Does the birth certificate need to be recent?', a: 'Often, yes. Several states only apostille a copy signed by a registrar whose signature they hold, which can exclude old copies, and some foreign authorities want a certificate issued within the last months. Ordering a new certified copy for the apostille avoids a refusal.' },
      ];
    },
    body: (h) => {
      const rows = ap(h).map((j0) => { const j = h.J(j0.code); return [j.nameL, j.apostilleL, j.bFirst, h.m((j.apostille?.fee ?? 0) + j.birth.first), j.apostille?.url ? h.ext(j.apostille.url, 'official page') : '–']; });
      return `<h2>Apostille fee and total in each state</h2>
<p>Total = one certified birth certificate at the state vital records fee plus one apostille. New York City births are apostilled by New York State after a county clerk step.</p>
${h.table(['State', 'Apostille', 'Certified copy', 'Total', 'Source'], rows, undefined, ['l', 'r', 'r', 'r', 'l'])}
<h2>The steps in order</h2>
<ol><li>Check that the destination country is a party to the Hague Apostille Convention; otherwise ask about authentication and legalization.</li><li>Order a new certified copy from the state vital records office, ideally the long form.</li><li>Fill in the apostille request of the state's Secretary of State, naming the country.</li><li>Send the certificate, the form and the fee, or go in person where walk-in service exists.</li><li>Have the apostilled certificate translated if the destination requires it.</li></ol>
<!--tool:mini:pair|{"state":"NY"}-->
<h2>Marriage and death certificates</h2>
<p>The same office apostilles marriage and death certificates issued in the state, often at the same fee; a county marriage certificate sometimes needs a county clerk certification first. See ${h.a('marriage-copy', 'marriage certificate copies')} for who issues them, and ${h.a('birth-certified-copy', 'certified copy')} for the version to order.</p>`;
    },
  },
  es: {
    slug: 'apostilla-acta-de-nacimiento', nav: 'Apostilla del acta de nacimiento', card: 'La tarifa del Secretario de Estado en cada estado, el orden de los pasos y el total con la copia certificada incluida.',
    title: 'Apostilla acta de nacimiento 2026: tarifa y pasos por estado',
    description: 'Apostilla del acta de nacimiento en 2026: la tarifa del Secretario de Estado de cada estado, los pasos en orden y el total con la copia certificada incluida.',
    h1: 'Apostilla del acta de nacimiento: tarifa y pasos por estado',
    intro: 'Elija el estado de nacimiento y el número de actas: la herramienta suma las copias certificadas y las apostillas que emite ese estado.',
    resume: (h) => {
      const a = ap(h), fees = a.map((j) => j.apostille?.fee as number);
      return `La apostilla es un certificado que se añade a un documento público para que sea aceptado en otro país que forma parte del Convenio de La Haya sobre la Apostilla. Para un acta de nacimiento de EE. UU., la emite el estado donde se inscribió el nacimiento, normalmente el Secretario de Estado u oficina equivalente, no el gobierno federal ni el estado donde usted vive. La apostilla certifica la firma del funcionario que firma el acta, así que el estado comprueba que la copia lleve la firma de un registrador que tiene archivada; muchas oficinas exigen una copia certificada reciente, a veces firmada por el registrador estatal actual, y rechazan copias del condado o antiguas. De los ${h.JURS.length - 1} estados y DC cubiertos aquí, ${a.length} publican su tarifa de apostilla, de ${h.m(Math.min(...fees))} a ${h.m(Math.max(...fees))} por documento, que se paga además de la copia certificada. Para un país fuera del convenio, el documento necesita en cambio una autenticación del estado y luego del Departamento de Estado de EE. UU., seguida de la legalización en la embajada de ese país. Las traducciones, cuando se exigen, son un paso aparte que se hace después de la apostilla. Las tarifas se leyeron en la página oficial de cada estado, con la fecha.`;
    },
    faqs: (h) => {
      const tx = h.J('TX'), ca = h.J('CA');
      return [
        { q: '¿Cómo se apostilla un acta de nacimiento?', a: 'Pida una copia certificada a la oficina de registros vitales del estado de nacimiento y envíela a la oficina de apostillas de ese estado, normalmente el Secretario de Estado, con su formulario y la tarifa, indicando el país donde se usará. La oficina añade la apostilla y devuelve el documento.' },
        { q: '¿Cuánto cuesta apostillar un acta de nacimiento?', a: `Depende del estado de nacimiento: ${tx.apostilleL} por documento en Texas y ${ca.apostilleL} en California, por ejemplo, más la propia copia certificada. El servicio urgente, la mensajería o la atención en ventanilla pueden costar más donde se ofrecen. La tabla de abajo da la tarifa de cada estado.` },
        { q: '¿Puedo apostillarla en el estado donde vivo ahora?', a: 'No. Solo el estado donde se inscribió el nacimiento puede apostillar su propia acta, porque certifica la firma de su propio registrador. Una persona nacida en Ohio que vive en Florida envía el acta de Ohio al Secretario de Estado de Ohio.' },
        { q: '¿El acta de nacimiento debe ser reciente?', a: 'A menudo, sí. Varios estados solo apostillan una copia firmada por un registrador cuya firma tienen archivada, lo que puede excluir copias antiguas, y algunas autoridades extranjeras quieren un acta emitida en los últimos meses. Pedir una copia certificada nueva para la apostilla evita un rechazo.' },
      ];
    },
    body: (h) => {
      const rows = ap(h).map((j0) => { const j = h.J(j0.code); return [j.nameL, j.apostilleL, j.bFirst, h.m((j.apostille?.fee ?? 0) + j.birth.first), j.apostille?.url ? h.ext(j.apostille.url, 'página oficial') : '–']; });
      return `<h2>Tarifa de apostilla y total en cada estado</h2>
<p>Total = un acta de nacimiento certificada a la tarifa estatal de registros vitales más una apostilla. Los nacimientos de la Ciudad de Nueva York los apostilla el Estado de Nueva York tras un paso ante el secretario del condado.</p>
${h.table(['Estado', 'Apostilla', 'Copia certificada', 'Total', 'Fuente'], rows, undefined, ['l', 'r', 'r', 'r', 'l'])}
<h2>Los pasos en orden</h2>
<ol><li>Compruebe que el país de destino es parte del Convenio de La Haya sobre la Apostilla; si no, pregunte por la autenticación y la legalización.</li><li>Pida una copia certificada nueva a la oficina estatal de registros vitales, de preferencia de formato largo.</li><li>Llene la solicitud de apostilla del Secretario de Estado del estado, indicando el país.</li><li>Envíe el acta, el formulario y la tarifa, o vaya en persona donde haya atención en ventanilla.</li><li>Haga traducir el acta apostillada si el destino lo exige.</li></ol>
<!--tool:mini:pair|{"state":"NY"}-->
<h2>Actas de matrimonio y de defunción</h2>
<p>La misma oficina apostilla las actas de matrimonio y de defunción emitidas en el estado, a menudo a la misma tarifa; un acta de matrimonio del condado a veces necesita antes una certificación del secretario del condado. Vea ${h.a('marriage-copy', 'copias del acta de matrimonio')} para saber quién las emite, y ${h.a('birth-certified-copy', 'copia certificada')} para la versión que debe pedir.</p>`;
    },
  },
});
