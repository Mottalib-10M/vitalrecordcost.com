/**
 * Honest link text for a source URL (audit of 2026-10-24, rule 1). A link is only called an
 * "official page" when it points to the office's own site: an archived copy says so with the date
 * of the copy, a file hosted on Google Drive says where it is hosted, and the CDC directory is
 * named as the CDC directory.
 */
import { dateL } from './format-l';
type Lang = 'en' | 'es';
const OFFICIAL = /official|oficial/i;
export function srcKind(url: string): 'archive' | 'drive' | 'cdc' | 'official' {
  if (/^https?:\/\/web\.archive\.org\/web\/\d{8}/.test(url)) return 'archive';
  if (/^https?:\/\/(drive|docs)\.google\.com\//.test(url)) return 'drive';
  if (/^https?:\/\/www\.cdc\.gov\/nchs\/w2w\//.test(url)) return 'cdc';
  return 'official';
}
/** Date (ISO) of an archived copy, from its Wayback address. */
export const archiveDate = (url: string) => { const m = url.match(/web\.archive\.org\/web\/(\d{4})(\d{2})(\d{2})/); return m ? `${m[1]}-${m[2]}-${m[3]}` : null; };
export function srcText(url: string, text: string, lang: Lang): string {
  const es = lang === 'es';
  switch (srcKind(url)) {
    case 'archive': {
      const d = archiveDate(url)!;
      return es ? `${text} (copia archivada del ${dateL(d, lang)})` : `${text} (archived copy of ${dateL(d, lang)})`;
    }
    case 'drive':
      return OFFICIAL.test(text) ? (es ? 'archivo de tarifas alojado en Google Drive' : 'fee file hosted on Google Drive') : `${text} (Google Drive)`;
    case 'cdc':
      return OFFICIAL.test(text) ? (es ? 'directorio de los CDC (Where to Write)' : 'CDC directory (Where to Write)') : `${text} (${es ? 'directorio de los CDC' : 'CDC directory'})`;
    default:
      return text;
  }
}
