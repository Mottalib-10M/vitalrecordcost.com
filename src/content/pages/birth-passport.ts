import { definePage } from '../../lib/guide-types';

const fee = (h: any, k: string) => (h.x(k) != null ? h.m(h.x(k)) : h.nc);

export default definePage({
  id: 'birth-passport', group: 'birth', order: 50,
  tool: { kind: 'order', props: { state: 'TX', copies: 1 } },
  mini: { kind: 'mini:passport', props: { state: 'CA' } },
  related: ['birth-certified-copy', 'birth-how-long', 'birth-certificate', 'birth-apostille', 'birth-tx', 'name-change'],
  sources: (lang) => [{ name: lang === 'es' ? 'Departamento de Estado: prueba de ciudadanía' : 'U.S. Department of State: citizenship evidence', url: 'https://travel.state.gov/content/travel/en/passports/how-apply/citizenship-evidence.html' }],
  en: {
    slug: 'birth-certificate-for-passport', nav: 'Birth certificate for a passport', card: 'What the State Department checks on the certificate, which copy to order and the cost with the passport.',
    title: 'Birth Certificate for Passport 2026: What Is Accepted',
    description: 'Birth certificate for a passport in 2026: the details the State Department checks, why a short abstract can be refused, and the cost with the passport.',
    h1: 'Birth certificate for a passport: what is accepted',
    intro: 'A first U.S. passport needs proof of citizenship, usually a certified birth certificate. Here is what it must show, and the full cost with the passport fees.',
    resume: (h) => {
      const t = h.J('TX');
      return `A first U.S. passport application, made in person with form DS-11, needs primary evidence of U.S. citizenship, and for people born in the United States that is usually a certified birth certificate issued by the state, county or city of birth. The State Department lists what the certificate must show: the applicant's full name, date and place of birth, the full names of the parents, the signature of the city, county or state registrar, the date the record was filed with the registrar's office, and the seal of the issuing authority. A birth record filed more than one year after the birth can still be used but needs supporting documents. Hospital certificates, souvenir copies, photocopies and notarized copies are refused, and so are many short-form abstracts that leave out the parents' names. The certificate is sent with the application and returned, usually separately from the new passport. In Texas, a certified copy costs ${t.bFirst}; for an adult, the passport book costs ${fee(h, 'passport_book_adult_fee')} plus a ${fee(h, 'passport_execution_fee')} acceptance fee paid to the facility. The tool below adds them for any state.`;
    },
    faqs: (h) => [
      { q: 'What kind of birth certificate do I need for a passport?', a: 'A certified copy issued by the vital records office of the state, county or city of birth, showing your full name, date and place of birth, both parents\' full names, the registrar\'s signature, the filing date and the official seal. Order the long form when the state offers a choice.' },
      { q: 'Will the passport office keep my birth certificate?', a: 'No. The certificate is mailed with the application to the State Department, examined and returned to you, usually in a separate envelope from the new passport. It can arrive a few days before or after the passport. Keep a photocopy, which is also required with the application.' },
      { q: 'Can I use a hospital birth certificate for a passport?', a: 'No. A hospital certificate, often with footprints, is a souvenir and not an official record. Only a certified copy from a government vital records office is accepted as primary evidence of citizenship. Order one from the state of birth before the passport appointment.' },
      { q: 'How much do the birth certificate and passport cost together?', a: `The state fee for the certified copy, between ${h.m(h.stats('birth').min)} and ${h.m(h.stats('birth').max)}, plus ${fee(h, 'passport_book_adult_fee')} for an adult passport book and ${fee(h, 'passport_execution_fee')} for the acceptance facility. Expedited service and faster return delivery of the passport are optional and extra. The tool below adds them up for your state.` },
    ],
    body: (h) => {
      const rows = [['Full name of the applicant', 'Yes'], ['Date and place of birth', 'Yes'], ['Full names of the parents', 'Yes'], ['Signature of the registrar', 'Yes'], ['Date filed with the registrar', 'Yes, within one year of birth, or extra evidence'], ['Seal of the issuing authority', 'Yes (raised, embossed, impressed or multicolored)']];
      return `<h2>The checklist the certificate must pass</h2>
${h.table(['Item on the certificate', 'Required'], rows, undefined, ['l', 'l'])}
<p>Most state long-form copies pass easily. Problems come from short abstracts without parents' names, very old certificates without a filing date, and records filed late. When the state offers a long and a short version, ask for the long one: the ${h.a('birth-certified-copy', 'certified copy page')} explains the difference.</p>
<h2>Adult, child, renewal</h2>
<p>An adult's first passport and every passport for a child under 16 need the certificate. Renewals by mail use the old passport instead, so no birth certificate is needed. For a child, the certificate must also show the parents, because both usually have to consent to the application. The tool below gives the total for an adult or a child in any state.</p>
<!--tool:mini:passport|{"state":"FL"}-->
<h2>Timing the two orders</h2>
<p>Order the certificate first, then book the passport appointment once it has arrived. If your state's mail delay is long, use a counter or an online order with express delivery: see ${h.a('birth-how-long', 'how long a birth certificate takes')}. A certificate with a name that differs from your current name works with a document linking the two, such as a marriage certificate; see ${h.a('name-change', 'name change after marriage')}.</p>`;
    },
  },
  es: {
    slug: 'acta-de-nacimiento-para-pasaporte', nav: 'Acta de nacimiento para el pasaporte', card: 'Lo que revisa el Departamento de Estado en el acta, qué copia pedir y el costo junto con el pasaporte.',
    title: 'Acta de nacimiento para pasaporte 2026: qué se acepta',
    description: 'Acta de nacimiento para el pasaporte en 2026: los datos que revisa el Departamento de Estado, por qué se rechaza un extracto corto y el costo con el pasaporte.',
    h1: 'Acta de nacimiento para el pasaporte: qué se acepta',
    intro: 'Un primer pasaporte de EE. UU. requiere prueba de ciudadanía, casi siempre un acta de nacimiento certificada. Lo que debe mostrar y el costo total con las tarifas del pasaporte.',
    resume: (h) => {
      const t = h.J('TX');
      return `Una primera solicitud de pasaporte de EE. UU., hecha en persona con el formulario DS-11, requiere una prueba principal de ciudadanía, y para quienes nacieron en Estados Unidos suele ser un acta de nacimiento certificada emitida por el estado, el condado o la ciudad de nacimiento. El Departamento de Estado enumera lo que debe mostrar el acta: el nombre completo del solicitante, la fecha y el lugar de nacimiento, los nombres completos de los padres, la firma del registrador de la ciudad, el condado o el estado, la fecha en que el registro se presentó ante la oficina del registrador y el sello de la autoridad emisora. Un acta presentada más de un año después del nacimiento puede usarse, pero necesita documentos de respaldo. Se rechazan los certificados del hospital, las copias de recuerdo, las fotocopias y las copias notariadas, así como muchos extractos cortos que omiten los nombres de los padres. El acta se envía con la solicitud y se devuelve, normalmente aparte del nuevo pasaporte. En Texas, una copia certificada cuesta ${t.bFirst}; para un adulto, la libreta de pasaporte cuesta ${fee(h, 'passport_book_adult_fee')} más una tarifa de aceptación de ${fee(h, 'passport_execution_fee')} que se paga al centro. La herramienta de abajo las suma para cualquier estado.`;
    },
    faqs: (h) => [
      { q: '¿Qué tipo de acta de nacimiento necesito para el pasaporte?', a: 'Una copia certificada emitida por la oficina de registros vitales del estado, el condado o la ciudad de nacimiento, con su nombre completo, fecha y lugar de nacimiento, los nombres completos de ambos padres, la firma del registrador, la fecha de presentación y el sello oficial. Pida el formato largo cuando el estado ofrezca elegir.' },
      { q: '¿La oficina de pasaportes se queda con mi acta de nacimiento?', a: 'No. El acta se envía con la solicitud al Departamento de Estado, se examina y se le devuelve, normalmente en un sobre aparte del nuevo pasaporte. Puede llegar unos días antes o después que el pasaporte. Guarde una fotocopia, que también se exige con la solicitud.' },
      { q: '¿Puedo usar el certificado del hospital para el pasaporte?', a: 'No. El certificado del hospital, a menudo con las huellas de los pies, es un recuerdo y no un registro oficial. Solo se acepta como prueba principal de ciudadanía una copia certificada de una oficina gubernamental de registros vitales. Pídala al estado de nacimiento antes de la cita del pasaporte.' },
      { q: '¿Cuánto cuestan juntos el acta y el pasaporte?', a: `La tarifa estatal de la copia certificada, entre ${h.m(h.stats('birth').min)} y ${h.m(h.stats('birth').max)}, más ${fee(h, 'passport_book_adult_fee')} por la libreta de pasaporte de un adulto y ${fee(h, 'passport_execution_fee')} para el centro de aceptación. El servicio acelerado y la devolución más rápida del pasaporte son opcionales y se pagan aparte.` },
    ],
    body: (h) => {
      const rows = [['Nombre completo del solicitante', 'Sí'], ['Fecha y lugar de nacimiento', 'Sí'], ['Nombres completos de los padres', 'Sí'], ['Firma del registrador', 'Sí'], ['Fecha de presentación ante el registrador', 'Sí, dentro del año del nacimiento, o pruebas adicionales'], ['Sello de la autoridad emisora', 'Sí (en relieve, estampado o multicolor)']];
      return `<h2>La lista que debe superar el acta</h2>
${h.table(['Dato del acta', 'Exigido'], rows, undefined, ['l', 'l'])}
<p>La mayoría de las copias de formato largo de los estados la superan sin problema. Los problemas vienen de los extractos cortos sin los nombres de los padres, de las actas muy antiguas sin fecha de presentación y de los registros presentados tarde. Cuando el estado ofrece una versión larga y una corta, pida la larga: la ${h.a('birth-certified-copy', 'página de la copia certificada')} explica la diferencia.</p>
<h2>Adulto, menor, renovación</h2>
<p>El primer pasaporte de un adulto y todo pasaporte de un menor de 16 años necesitan el acta. Las renovaciones por correo usan el pasaporte anterior, así que no hace falta el acta. Para un menor, el acta también debe mostrar a los padres, porque ambos suelen tener que dar su consentimiento. La herramienta de abajo da el total para un adulto o un menor en cualquier estado.</p>
<!--tool:mini:passport|{"state":"FL"}-->
<h2>Coordinar los dos pedidos</h2>
<p>Pida primero el acta y reserve la cita del pasaporte cuando haya llegado. Si la demora por correo de su estado es larga, use una ventanilla o un pedido en línea con envío urgente: vea ${h.a('birth-how-long', 'cuánto tarda un acta de nacimiento')}. Un acta con un nombre distinto del actual sirve junto con un documento que vincule los dos, como el acta de matrimonio; vea ${h.a('name-change', 'cambio de apellido tras el matrimonio')}.</p>`;
    },
  },
});
