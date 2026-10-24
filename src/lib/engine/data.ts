/**
 * The 52 jurisdictions (50 states, DC and New York City) as the site uses them, read from the JSON files
 * built by `scripts/update-data.mjs` out of the hand-kept sheets in `data/source/`. Nothing is typed here:
 * every fee, date and rule comes from the data, with the official page it was read on.
 */
import V from '../../../data/vital-records.json';
import ML from '../../../data/marriage-license.json';
import X from '../../../data/extras.json';
import type { JurisdictionFees } from './vital';
import type { MarriageRule } from './marriage';

export type Lang = 'en' | 'es';
export interface Txt { en: string; es: string }
export interface RecordCopy { where: 'state' | 'county' | 'both' | null; first: number | null; additional: number | null; note: Txt | null; url: string | null }
export interface Jur extends JurisdictionFees {
  nameEs: string;
  office: string;
  vendor: string | null;
  vendorFee: number | null;
  vendorText: Txt | null;
  local: string | null;
  sources: { birth: string; death: string };
  retrievedAt: string;
  confidence: 'high' | 'medium' | 'low';
  processing: Txt | null;
  mailDaysMax: number | null;
  processingUrl: string | null;
  marriageRecord: RecordCopy | null;
  divorceRecord: RecordCopy | null;
  apostille: { fee: number | null; note: Txt | null; url: string | null } | null;
  commonLaw: { status: 'recognized' | 'abolished' | 'never' | null; date: string | null; note: Txt | null; url: string | null } | null;
}
export interface MarriageRec extends MarriageRule {
  example: string | null;
  setBy: string;
  confidence: string;
  note: Txt | null;
  source: string;
  retrievedAt: string;
}

export const JURS = V.records as unknown as Jur[];
export const MARRIAGE = ML.records as unknown as MarriageRec[];
export const META = V.meta as { dataAsOf: string; generatedAt: string; count: number };
export const EXTRAS = X as unknown as { items: Record<string, { value: number | null; unit: string; note: string; url: string; retrieved: string }>; dataAsOf: string };

/** Alphabetical order of the names in the page language (New York City right after New York State). */
export function sorted(lang: Lang): Jur[] {
  return [...JURS].sort((a, b) => nameOf(a, lang).localeCompare(nameOf(b, lang), lang));
}
export const byCode = (code: string): Jur => {
  const j = JURS.find((x) => x.code === code);
  if (!j) throw new Error(`Unknown jurisdiction ${code}`);
  return j;
};
export const marriageOf = (code: string): MarriageRec => {
  const m = MARRIAGE.find((x) => x.code === code);
  if (!m) throw new Error(`No marriage rule for ${code}`);
  return m;
};
export const nameOf = (j: Pick<Jur, 'name' | 'nameEs'>, lang: Lang) => (lang === 'es' ? j.nameEs : j.name);
export const txt = (t: Txt | null | undefined, lang: Lang, fallback = '') => (t ? t[lang] || t.en || fallback : fallback);
export const extra = (key: string) => EXTRAS.items[key]?.value ?? null;
export const extraUrl = (key: string) => EXTRAS.items[key]?.url ?? null;
