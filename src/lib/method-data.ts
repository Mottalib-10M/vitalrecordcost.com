/** Figures of the method and about pages, computed from the data files. */
import { JURS, MARRIAGE, META, EXTRAS } from './engine/data';
const urls = new Set<string>();
for (const j of JURS) [j.sources.birth, j.sources.death, j.processingUrl, j.marriageRecord?.url, j.divorceRecord?.url, j.apostille?.url, j.commonLaw?.url].forEach((u) => u && urls.add(u));
for (const m of MARRIAGE) if (m.source) urls.add(m.source);
for (const i of Object.values(EXTRAS.items)) if (i.url) urls.add(i.url);
export const M = {
  jurs: JURS.length,
  high: JURS.filter((j) => j.confidence === 'high').length,
  medium: JURS.filter((j) => j.confidence === 'medium').length,
  low: JURS.filter((j) => j.confidence === 'low').length,
  vendorFee: JURS.filter((j) => j.vendorFee != null).length,
  processing: JURS.filter((j) => j.processing).length,
  marriageState: MARRIAGE.filter((m) => m.feeState != null).length,
  marriageCounty: MARRIAGE.filter((m) => m.feeState == null).length,
  validity: MARRIAGE.filter((m) => m.validity).length,
  waiting: MARRIAGE.filter((m) => (m.waitingHours ?? 0) > 0).length,
  course: MARRIAGE.filter((m) => m.courseDiscount > 0).length,
  marrRec: JURS.filter((j) => j.marriageRecord?.first != null).length,
  apostille: JURS.filter((j) => j.apostille?.fee != null).length,
  urls: urls.size,
  asOf: META.dataAsOf,
};
