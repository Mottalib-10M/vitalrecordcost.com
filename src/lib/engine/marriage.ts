// Licence de mariage : date à partir de laquelle la cérémonie est permise, dernière date avant expiration,
// prix avec ou sans cours prénuptial. Dates en ISO (AAAA-MM-JJ), calcul en UTC pour éviter les décalages.

export type Validity = { kind: 'none' } | { kind: 'days' | 'months' | 'years'; value: number } | null;

export interface MarriageRule {
  code: string;
  feeState: number | null;
  feeMin: number | null;
  feeMax: number | null;
  waitingHours: number | null;
  validity: Validity;
  courseDiscount: number;
  courseHours: number;
}

export interface MarriageInput {
  rule: MarriageRule;
  issueDate: string; // date de délivrance (ou de demande quand le délai court dès la demande)
  weddingDate?: string;
  tookCourse?: boolean;
  /** Prix du comté saisi par l'usager quand l'État laisse le comté fixer le tarif. */
  countyFee?: number;
}

export interface MarriageResult {
  fee: number | null;
  feeRange: [number, number] | null;
  discountApplied: number;
  earliestCeremony: string;
  expires: string | null; // null = n'expire pas ; 'unknown' traité par le caller via validityKnown
  validityKnown: boolean;
  weddingOk: boolean | null;
  reason: 'ok' | 'too_early' | 'expired' | null;
}

const toDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
};
const iso = (dt: Date) => dt.toISOString().slice(0, 10);

export function addDays(isoDate: string, days: number): string {
  const d = toDate(isoDate);
  d.setUTCDate(d.getUTCDate() + days);
  return iso(d);
}

export function addMonths(isoDate: string, months: number): string {
  const d = toDate(isoDate);
  const day = d.getUTCDate();
  d.setUTCDate(1);
  d.setUTCMonth(d.getUTCMonth() + months);
  const last = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  d.setUTCDate(Math.min(day, last));
  return iso(d);
}

export function expiryDate(issue: string, v: Validity): string | null {
  if (!v || v.kind === 'none') return null;
  if (v.kind === 'days') return addDays(issue, v.value);
  if (v.kind === 'months') return addMonths(issue, v.value);
  return addMonths(issue, 12 * v.value);
}

export function marriageLicense(input: MarriageInput): MarriageResult {
  const r = input.rule;
  const discount = input.tookCourse ? r.courseDiscount : 0;
  let fee: number | null = null;
  if (input.countyFee !== undefined && input.countyFee > 0) fee = Math.max(0, input.countyFee - discount);
  else if (r.feeState !== null) fee = Math.max(0, r.feeState - discount);
  const feeRange: [number, number] | null =
    r.feeMin !== null && r.feeMax !== null ? [Math.max(0, r.feeMin - discount), Math.max(0, r.feeMax - discount)] : null;
  const waitDays = Math.ceil((r.waitingHours ?? 0) / 24);
  // Un cours prénuptial supprime le délai là où la loi le prévoit (Floride, Texas) : porté par la règle via courseDiscount > 0 et waitingHours.
  const waives = input.tookCourse && (r.code === 'FL' || r.code === 'TX');
  const earliestCeremony = addDays(input.issueDate, waives ? 0 : waitDays);
  const validityKnown = r.validity !== null;
  const expires = expiryDate(input.issueDate, r.validity);
  let weddingOk: boolean | null = null;
  let reason: MarriageResult['reason'] = null;
  if (input.weddingDate) {
    if (input.weddingDate < earliestCeremony) {
      weddingOk = false;
      reason = 'too_early';
    } else if (expires && input.weddingDate > expires) {
      weddingOk = false;
      reason = 'expired';
    } else if (!validityKnown) {
      weddingOk = null;
    } else {
      weddingOk = true;
      reason = 'ok';
    }
  }
  return { fee, feeRange, discountApplied: discount, earliestCeremony, expires, validityKnown, weddingOk, reason };
}
