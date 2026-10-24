import type { Locale } from './routes';
const en = {
  updatedOn: 'Fees checked and updated on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Fees and rules read on official pages by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Questions people ask before ordering', relatedCalculators: 'Related pages', sourcesTitle: 'Official pages behind the figures', writtenBy: 'Written by',
  asOf: 'Fees of state and city vital records offices for', lastUpdated: 'last checked on',
  footerValidated: 'Every fee links to the page it was read on: the office\'s own page or a dated archived copy',
  footerCdcPre: 'Office directory partly based on', footerCdcPost: 'by CDC/NCHS, available free on cdc.gov (public domain,', footerCdcTerms: 'CDC terms', footerCdcEnd: '). Its use does not imply endorsement by CDC, NCHS or HHS.',
  footerBrowser: 'Calculations run in your browser · nothing you type is sent · free, no account, no email',
  footerDisclaimer: 'Vital Record Cost is an independent site published by Radif Partners. It is not a government agency, a vital records office or an ordering service: it cannot order, issue or certify any record. Fees and rules change; confirm them with the office before you pay. This information is not legal advice.',
  footerPopular: 'Records by state',
  notFound: 'There is no page at this address. The birth certificate fee of every state is on the home page.',
  readMore: 'Read more', back: 'Home',
};
const es: typeof en = {
  updatedOn: 'Tarifas revisadas y actualizadas el', editorialPolicy: 'Política editorial', contactLabel: 'Contacto', reviewedBy: 'Tarifas y reglas leídas en páginas oficiales por',
  skipToContent: 'Ir al contenido', mainNav: 'Navegación principal', breadcrumbLabel: 'Ruta de navegación', breadcrumbHome: 'Inicio', menuOpen: 'Abrir menú',
  faqTitle: 'Preguntas antes de hacer el pedido', relatedCalculators: 'Páginas relacionadas', sourcesTitle: 'Páginas oficiales de donde salen las cifras', writtenBy: 'Escrito por',
  asOf: 'Tarifas de las oficinas estatales y municipales de registros vitales de', lastUpdated: 'última revisión el',
  footerValidated: 'Cada tarifa enlaza a la página donde se leyó: la de la oficina o una copia archivada fechada',
  footerCdcPre: 'Directorio de oficinas basado en parte en', footerCdcPost: 'de CDC/NCHS, disponible gratis en cdc.gov (dominio público,', footerCdcTerms: 'condiciones de los CDC', footerCdcEnd: '). Su uso no implica que los CDC, el NCHS o el HHS respalden este sitio.',
  footerBrowser: 'Los cálculos se hacen en su navegador · nada de lo que escribe se envía · gratis, sin cuenta, sin correo',
  footerDisclaimer: 'Costo de Actas por Estado es un sitio independiente publicado por Radif Partners. No es una agencia del gobierno, ni una oficina de registros vitales, ni un servicio de pedidos: no puede pedir, emitir ni certificar ningún acta. Las tarifas y las reglas cambian; confírmelas con la oficina antes de pagar. Esta información no sustituye la asesoría legal.',
  footerPopular: 'Actas por estado',
  notFound: 'No hay ninguna página en esta dirección. La tarifa del acta de nacimiento de cada estado está en la página de inicio.',
  readMore: 'Leer más', back: 'Inicio',
};
export function t(lang: Locale) { return lang === 'es' ? es : en; }
