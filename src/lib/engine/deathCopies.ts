// Mini-simulateur « how many death certificates do I need » : méthode écrite par nous, présentée comme une
// estimation. Chaque organisme qui garde l'original certifié compte pour une copie ; ceux qui acceptent
// une photocopie ou une simple consultation ne comptent pas. Une copie pour le dossier familial et une
// de réserve s'ajoutent (option).

export interface DeathEstateInput {
  bankAccounts: number; // banques distinctes (une copie par établissement, pas par compte)
  lifeInsurancePolicies: number;
  retirementAccounts: number; // 401(k), IRA, pension : un administrateur = une copie
  brokerageAccounts: number;
  vehicles: number; // titre de propriété à transférer au DMV
  realEstateCounties: number; // un acte par comté où se trouve un bien
  probate: boolean; // succession ouverte au tribunal
  veteranBenefits: boolean; // demande de prestations VA (burial, survivor)
  annuitiesOrOther: number;
  keepSpare: boolean;
}

export interface DeathCopiesResult {
  certifiedNeeded: number;
  spare: number;
  recommended: number;
  lines: { label: string; copies: number }[];
}

const n = (v: number) => (Number.isFinite(v) ? Math.min(30, Math.max(0, Math.round(v))) : 0);

export function deathCertificateCopies(i: DeathEstateInput): DeathCopiesResult {
  const lines = [
    { label: 'banks', copies: n(i.bankAccounts) },
    { label: 'life_insurance', copies: n(i.lifeInsurancePolicies) },
    { label: 'retirement', copies: n(i.retirementAccounts) },
    { label: 'brokerage', copies: n(i.brokerageAccounts) },
    { label: 'vehicles', copies: n(i.vehicles) },
    { label: 'real_estate', copies: n(i.realEstateCounties) },
    { label: 'probate', copies: i.probate ? 1 : 0 },
    { label: 'veterans', copies: i.veteranBenefits ? 1 : 0 },
    { label: 'other', copies: n(i.annuitiesOrOther) },
  ].filter((l) => l.copies > 0);
  const certifiedNeeded = lines.reduce((s, l) => s + l.copies, 0);
  const spare = i.keepSpare ? 2 : 0; // une pour le dossier familial, une de réserve
  return { certifiedNeeded, spare, recommended: Math.max(1, certifiedNeeded + spare), lines };
}
