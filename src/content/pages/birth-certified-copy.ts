import { definePage } from '../../lib/guide-types';

export default definePage({
  id: 'birth-certified-copy', group: 'birth', order: 45,
  tool: { kind: 'order', props: { state: 'OH', copies: 1 } },
  mini: { kind: 'mini:pair', props: { state: 'MI' } },
  related: ['birth-passport', 'birth-ca', 'birth-certificate', 'birth-apostille', 'birth-replacement', 'birth-oh'],
  sources: [],
  en: {
    slug: 'certified-copy-birth-certificate', nav: 'Certified copy of a birth certificate', card: 'Certified, informational, long form or abstract: which one agencies accept, and at what price.',
    title: 'Certified Copy of Birth Certificate 2026: Which to Order',
    description: 'Certified copy of a birth certificate in 2026: how it differs from an informational copy, an abstract or a photocopy, which one agencies accept, and its fee.',
    h1: 'Certified copy of a birth certificate: which one to order',
    intro: 'A certified copy is the only version an agency accepts as proof. The table matches each use with the version to ask for; the calculator gives the price.',
    resume: (h) => {
      const s = h.stats('birth');
      return `A certified copy of a birth certificate is a copy issued by a government vital records office and certified by the registrar as a true copy of the record on file. It carries the registrar's signature, the issuing office and a seal, which may be raised, embossed, impressed or multicolored, and it is printed on security paper that shows tampering. Agencies accept only this version as proof of age, citizenship or identity: the passport office, the motor vehicle office for a REAL ID card, Social Security, schools and sports leagues. An informational copy, sold in many states to anyone, carries a printed statement that it cannot be used to establish identity. A short-form abstract or birth card lists the main facts without the parents' names and is refused for a passport in many cases. Photocopies, notarized copies and hospital certificates are never certified copies. The price is the same whichever version you ask for: between ${h.m(s.min)} and ${h.m(s.max)} for the first copy depending on the state, median ${h.m(s.median)}. When in doubt, order the certified long form: it is accepted for every use.`;
    },
    faqs: (h) => [
      { q: 'What is a certified copy of a birth certificate?', a: 'A copy issued by a state, county or city vital records office, signed or stamped by the registrar and bearing the office\'s seal, printed on security paper. It certifies that the copy matches the record on file. It is the only version agencies accept as legal proof of birth.' },
      { q: 'Is a notarized copy of a birth certificate a certified copy?', a: 'No. A notary can certify a signature, not a vital record. A photocopy with a notary stamp has no value as a birth certificate. Only the vital records office of the state, county or city of birth can issue a certified copy.' },
      { q: 'What is the difference between a long form and a short form?', a: 'The long form reproduces the full record, with the parents\' names, birthplaces and often the hospital. The short form, abstract or birth card, gives the name, date, place and sometimes parents, in a smaller format. Both can be certified, but the long form is the safer choice for a passport, dual citizenship or use abroad.' },
      { q: 'Does a REAL ID need a certified birth certificate?', a: 'A REAL ID requires proof of identity and lawful status, and a certified birth certificate is one of the accepted documents, alongside a valid U.S. passport. Motor vehicle offices do not accept photocopies or informational copies. If your name changed, also bring the marriage certificate or court order.' },
    ],
    body: (h) => {
      const rows = [['U.S. passport', 'Certified long form', 'Yes'], ['REAL ID driver\'s license', 'Certified copy, long or short', 'Yes'], ['Social Security card', 'Certified copy', 'Yes'], ['School or sports enrollment', 'Certified copy, sometimes a photocopy', 'Often'], ['Dual citizenship, foreign marriage', 'Certified long form, often with apostille', 'Yes'], ['Family history', 'Informational copy is enough', 'No']];
      return `<h2>Which version for which use</h2>
${h.table(['Use', 'Version to order', 'Must be certified'], rows, undefined, ['l', 'l', 'l'])}
<h2>How to recognize a certified copy</h2>
<ul><li>The seal of the issuing office, raised, embossed, impressed or multicolored.</li><li>The signature of the state or local registrar, printed or original.</li><li>Security paper, often with a background pattern, watermark or color change when copied.</li><li>The date the copy was issued and, on long forms, the date the record was filed.</li></ul>
<p>A copy that lacks the seal, or a copy made on a home printer from a scan, is not certified, even if it came from a family file. A ${h.a('birth-replacement', 'replacement')} costs the same as any copy.</p>
<h2>States that sell informational copies</h2>
<p>California, for example, issues authorized and informational certified copies; only the authorized one establishes identity, as the ${h.a('birth-ca', 'California page')} explains. Ohio treats birth records as public but still issues certified copies to anyone who asks: ${h.a('birth-oh', 'Ohio birth certificate')}. The tool below shows a state's fees for birth and death copies.</p>
<!--tool:mini:pair|{"state":"WA"}-->
<h2>For use abroad</h2>
<p>A foreign authority usually wants a certified long form issued recently, with an apostille from the secretary of state of the state of birth: see ${h.a('birth-apostille', 'apostille on a birth certificate')}. For a U.S. passport, the ${h.a('birth-passport', 'passport checklist')} lists each item the State Department checks.</p>`;
    },
  },
  es: {
    slug: 'copia-certificada-acta-de-nacimiento', nav: 'Copia certificada del acta de nacimiento', card: 'Certificada, informativa, formato largo o extracto: cuál aceptan las agencias y a qué precio.',
    title: 'Copia certificada del acta de nacimiento 2026: cuál pedir',
    description: 'Copia certificada del acta de nacimiento en 2026: en qué se diferencia de la informativa, un extracto o una fotocopia, cuál acepta cada agencia y su tarifa.',
    h1: 'Copia certificada del acta de nacimiento: cuál pedir',
    intro: 'Una copia certificada es la única versión que una agencia acepta como prueba. La tabla asigna a cada uso la versión que hay que pedir; la calculadora da el precio.',
    resume: (h) => {
      const s = h.stats('birth');
      return `Una copia certificada del acta de nacimiento es una copia emitida por una oficina gubernamental de registros vitales y certificada por el registrador como copia fiel del registro archivado. Lleva la firma del registrador, el nombre de la oficina emisora y un sello, que puede ser en relieve, estampado o multicolor, y se imprime en papel de seguridad que delata cualquier alteración. Las agencias solo aceptan esta versión como prueba de edad, ciudadanía o identidad: la oficina de pasaportes, la oficina de vehículos para la tarjeta REAL ID, el Seguro Social, las escuelas y las ligas deportivas. Una copia informativa, que muchos estados venden a cualquiera, lleva impresa una advertencia de que no sirve para acreditar identidad. Un extracto corto o tarjeta de nacimiento recoge los datos principales sin los nombres de los padres y en muchos casos se rechaza para el pasaporte. Las fotocopias, las copias notariadas y los certificados del hospital nunca son copias certificadas. El precio es el mismo sea cual sea la versión: entre ${h.m(s.min)} y ${h.m(s.max)} por la primera copia según el estado, con una mediana de ${h.m(s.median)}. Ante la duda, pida la copia certificada de formato largo: se acepta para todos los usos.`;
    },
    faqs: (h) => [
      { q: '¿Qué es una copia certificada del acta de nacimiento?', a: 'Una copia emitida por una oficina de registros vitales estatal, de condado o de ciudad, firmada o sellada por el registrador y con el sello de la oficina, impresa en papel de seguridad. Certifica que la copia coincide con el registro archivado. Es la única versión que las agencias aceptan como prueba legal del nacimiento.' },
      { q: '¿Una copia notariada del acta de nacimiento es una copia certificada?', a: 'No. Un notario puede certificar una firma, no un registro vital. Una fotocopia con sello de notario no tiene valor como acta de nacimiento. Solo la oficina de registros vitales del estado, el condado o la ciudad de nacimiento puede emitir una copia certificada.' },
      { q: '¿Qué diferencia hay entre el formato largo y el corto?', a: 'El formato largo reproduce el registro completo, con los nombres de los padres, sus lugares de nacimiento y a menudo el hospital. El corto, extracto o tarjeta de nacimiento, da el nombre, la fecha, el lugar y a veces los padres, en un formato más pequeño. Los dos pueden ser certificados, pero el largo es la opción segura para el pasaporte, la doble ciudadanía o el uso en el extranjero.' },
      { q: '¿La REAL ID exige un acta de nacimiento certificada?', a: 'La REAL ID exige prueba de identidad y de estatus legal, y el acta de nacimiento certificada es uno de los documentos aceptados, junto con un pasaporte de EE. UU. vigente. Las oficinas de vehículos no aceptan fotocopias ni copias informativas. Si cambió de apellido, lleve también el acta de matrimonio o la orden judicial.' },
    ],
    body: (h) => {
      const rows = [['Pasaporte de EE. UU.', 'Copia certificada de formato largo', 'Sí'], ['Licencia de manejar REAL ID', 'Copia certificada, larga o corta', 'Sí'], ['Tarjeta del Seguro Social', 'Copia certificada', 'Sí'], ['Inscripción escolar o deportiva', 'Copia certificada, a veces una fotocopia', 'A menudo'], ['Doble ciudadanía, matrimonio en el extranjero', 'Formato largo certificado, a menudo con apostilla', 'Sí'], ['Historia familiar', 'Basta una copia informativa', 'No']];
      return `<h2>Qué versión para cada uso</h2>
${h.table(['Uso', 'Versión que hay que pedir', 'Debe ser certificada'], rows, undefined, ['l', 'l', 'l'])}
<h2>Cómo reconocer una copia certificada</h2>
<ul><li>El sello de la oficina emisora, en relieve, estampado o multicolor.</li><li>La firma del registrador estatal o local, impresa u original.</li><li>Papel de seguridad, a menudo con un fondo de dibujo, una marca de agua o un cambio de color al fotocopiarlo.</li><li>La fecha de emisión de la copia y, en el formato largo, la fecha de presentación del registro.</li></ul>
<p>Una copia sin sello, o una copia impresa en casa a partir de un escaneo, no es certificada, aunque venga de un archivo familiar. Un ${h.a('birth-replacement', 'reemplazo')} cuesta lo mismo que cualquier copia.</p>
<h2>Estados que venden copias informativas</h2>
<p>California, por ejemplo, emite copias certificadas autorizadas e informativas; solo la autorizada acredita identidad, como explica la ${h.a('birth-ca', 'página de California')}. Ohio trata las actas de nacimiento como públicas pero emite igualmente copias certificadas a quien las pide: ${h.a('birth-oh', 'acta de nacimiento de Ohio')}. La herramienta de abajo muestra las tarifas de un estado para copias de nacimiento y de defunción.</p>
<!--tool:mini:pair|{"state":"WA"}-->
<h2>Para el extranjero</h2>
<p>Una autoridad extranjera suele pedir un formato largo certificado y reciente, con la apostilla del secretario de estado del estado de nacimiento: vea ${h.a('birth-apostille', 'apostilla del acta de nacimiento')}. Para un pasaporte de EE. UU., la ${h.a('birth-passport', 'lista del pasaporte')} enumera cada dato que revisa el Departamento de Estado.</p>`;
    },
  },
});
