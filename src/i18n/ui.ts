import type { Locale } from './routes';
const en = {
  updatedOn: 'Fees checked on', editorialPolicy: 'Editorial policy', contactLabel: 'Contact', reviewedBy: 'Fees and rules read on official pages by',
  skipToContent: 'Skip to content', mainNav: 'Main navigation', breadcrumbLabel: 'Breadcrumb', breadcrumbHome: 'Home', menuOpen: 'Open menu',
  faqTitle: 'Questions people ask before ordering', relatedCalculators: 'Related pages', sourcesTitle: 'Official pages behind the figures', writtenBy: 'Written by',
  asOf: 'Fees of state and city vital records offices for', lastUpdated: 'last checked on',
  footerValidated: 'Every fee links to the official page it was read on',
  footerBrowser: 'Calculations run in your browser · nothing you type is sent · free, no account, no email',
  footerDisclaimer: 'Vital Record Cost is an independent site published by Radif Partners. It is not a government agency, a vital records office or an ordering service: it cannot order, issue or certify any record. Fees and rules change; confirm them with the office before you pay. Nothing here is legal advice.',
  footerPopular: 'Records by state',
  notFound: 'There is no page at this address. The birth certificate fee of every state is on the home page.',
  readMore: 'Read more', back: 'Home',
};
const es: typeof en = {
  updatedOn: 'Tarifas revisadas el', editorialPolicy: 'Política editorial', contactLabel: 'Contacto', reviewedBy: 'Tarifas y reglas leídas en páginas oficiales por',
  skipToContent: 'Ir al contenido', mainNav: 'Navegación principal', breadcrumbLabel: 'Ruta de navegación', breadcrumbHome: 'Inicio', menuOpen: 'Abrir menú',
  faqTitle: 'Preguntas antes de hacer el pedido', relatedCalculators: 'Páginas relacionadas', sourcesTitle: 'Páginas oficiales de donde salen las cifras', writtenBy: 'Escrito por',
  asOf: 'Tarifas de las oficinas estatales y municipales de registros vitales de', lastUpdated: 'última revisión el',
  footerValidated: 'Cada tarifa enlaza a la página oficial donde se leyó',
  footerBrowser: 'Los cálculos se hacen en su navegador · nada de lo que escribe se envía · gratis, sin cuenta, sin correo',
  footerDisclaimer: 'Costo de Actas por Estado es un sitio independiente publicado por Radif Partners. No es una agencia del gobierno, ni una oficina de registros vitales, ni un servicio de pedidos: no puede pedir, emitir ni certificar ningún acta. Las tarifas y las reglas cambian; confírmelas con la oficina antes de pagar. Nada de lo que aquí se dice es asesoría legal.',
  footerPopular: 'Actas por estado',
  notFound: 'No hay ninguna página en esta dirección. La tarifa del acta de nacimiento de cada estado está en la página de inicio.',
  readMore: 'Leer más', back: 'Inicio',
};
export function t(lang: Locale) { return lang === 'es' ? es : en; }
