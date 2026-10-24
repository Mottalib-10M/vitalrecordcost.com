/** llms.txt (RECETTE §21): what the site is, where its figures come from, its main pages. Built from the data. */
import type { APIRoute } from 'astro';
import { PAGES } from '../lib/guides';
import { route } from '../i18n/routes';
import { SITE_URL } from '../data/site-config';
import { M } from '../lib/method-data';
export const GET: APIRoute = () => {
  const lines = [
    '# Vital Record Cost',
    '',
    `> State fees for certified copies of birth and death certificates in the ${M.jurs} US vital records jurisdictions (50 states, DC and New York City), the price of additional copies ordered together, the online fee of each state-authorized vendor when published, processing times, and marriage license fees, waiting periods and validity by state, in English and Spanish. Every figure was read on the official page of the office that charges it (${M.urls} pages, last read ${M.asOf}); figures not found on an official page are shown as not published. Calculators run in the browser. Published by Radif Partners, an independent publisher; not a government agency and not an ordering service.`,
    '',
    '## Tools and guides (English)',
    `- [Birth certificate cost by state](${SITE_URL}${route('home', 'en')}): calculator for the 52 offices.`,
    ...PAGES.map((p) => `- [${p.en.nav}](${SITE_URL}${route(p.id, 'en')}): ${p.en.card}`),
    '',
    '## En español',
    `- [Costo del acta de nacimiento por estado](${SITE_URL}${route('home', 'es')})`,
    ...PAGES.map((p) => `- [${p.es.nav}](${SITE_URL}${route(p.id, 'es')}): ${p.es.card}`),
    '',
    '## Method',
    `- [How each fee and date is checked](${SITE_URL}${route('method', 'en')})`,
    `- [About](${SITE_URL}${route('about', 'en')})`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
