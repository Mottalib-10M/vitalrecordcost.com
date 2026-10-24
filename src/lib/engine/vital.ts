// Moteur principal : coût réel d'une commande de copies certifiées (naissance, décès), par juridiction.
// Fonctions pures, aucune donnée en dur : les barèmes viennent de data/vital-records.json.

export type RecordKind = 'birth' | 'death';
export type Channel = 'mail' | 'online' | 'in_person';

export interface FeePair {
  first: number;
  additional: number | null;
}

export interface JurisdictionFees {
  code: string;
  name: string;
  birth: FeePair;
  death: FeePair;
}

export interface OrderInput {
  fees: JurisdictionFees;
  kind: RecordKind;
  copies: number;
  channel: Channel;
  /** Frais du prestataire agréé par l'État (VitalChek, portail…), saisis ou repris de la fiche ; 0 au guichet ou par courrier. */
  processingFee?: number;
  /** Supplément d'expédition rapide choisi par l'usager. */
  shippingFee?: number;
  /** Prix total annoncé par un intermédiaire privé, pour comparaison (facultatif). */
  intermediaryTotal?: number;
}

export interface OrderResult {
  copies: number;
  stateFees: number;
  firstCopy: number;
  additionalEach: number;
  processingFee: number;
  shippingFee: number;
  total: number;
  perCopy: number;
  /** Écart avec l'intermédiaire : positif = l'intermédiaire coûte plus cher. */
  intermediaryExtra: number | null;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

export function clampCopies(n: number): number {
  if (!Number.isFinite(n)) return 1;
  return Math.min(50, Math.max(1, Math.round(n)));
}

/** Frais d'État seuls : première copie + copies supplémentaires du même acte commandées en même temps. */
export function stateFees(pair: FeePair, copies: number): number {
  const n = clampCopies(copies);
  const add = pair.additional ?? pair.first;
  return round2(pair.first + add * (n - 1));
}

export function orderCost(input: OrderInput): OrderResult {
  const copies = clampCopies(input.copies);
  const pair = input.fees[input.kind];
  const sf = stateFees(pair, copies);
  const processingFee = input.channel === 'online' ? Math.max(0, input.processingFee ?? 0) : 0;
  const shippingFee = Math.max(0, input.shippingFee ?? 0);
  const total = round2(sf + processingFee + shippingFee);
  const extra =
    input.intermediaryTotal !== undefined && input.intermediaryTotal > 0 ? round2(input.intermediaryTotal - total) : null;
  return {
    copies,
    stateFees: sf,
    firstCopy: pair.first,
    additionalEach: pair.additional ?? pair.first,
    processingFee,
    shippingFee,
    total,
    perCopy: round2(total / copies),
    intermediaryExtra: extra,
  };
}

/** Classement des juridictions de la moins chère à la plus chère pour N copies (pages « par État » et carte). */
export function rankByCost(all: JurisdictionFees[], kind: RecordKind, copies = 1): { code: string; name: string; total: number }[] {
  return all
    .map((f) => ({ code: f.code, name: f.name, total: stateFees(f[kind], copies) }))
    .sort((a, b) => a.total - b.total || a.name.localeCompare(b.name));
}
