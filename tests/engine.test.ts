import { describe, expect, it } from 'vitest';
import vital from '../data/vital-records.json';
import marriage from '../data/marriage-license.json';
import { orderCost, rankByCost, stateFees, type JurisdictionFees } from '../src/lib/engine/vital';
import { deathCertificateCopies } from '../src/lib/engine/deathCopies';
import { addMonths, expiryDate, marriageLicense, type MarriageRule } from '../src/lib/engine/marriage';

const fees = vital.records as unknown as JurisdictionFees[];
const byCode = (c: string) => fees.find((f) => f.code === c)!;
const rule = (c: string) => (marriage.records as unknown as MarriageRule[]).find((m) => m.code === c)!;

describe('données', () => {
  it('couvre 50 États + DC + NYC, chaque fiche avec ses deux sources https', () => {
    expect(fees).toHaveLength(52);
    for (const r of vital.records) {
      expect(r.sources.birth).toMatch(/^https:\/\//);
      expect(r.sources.death).toMatch(/^https:\/\//);
      expect(r.birth.first).toBeGreaterThan(0);
    }
  });
});

describe('frais d’État (cas lus sur les pages officielles le 2026-10-24)', () => {
  it('Texas : 22 $ la naissance, décès 20 $ puis 3 $', () => {
    expect(stateFees(byCode('TX').birth, 1)).toBe(22);
    expect(stateFees(byCode('TX').death, 5)).toBe(32);
  });
  it('Géorgie : 25 $ + 5 $ par copie supplémentaire (1 + 2 copies = 35 $, exemple du formulaire)', () => {
    expect(stateFees(byCode('GA').birth, 3)).toBe(35);
  });
  it('Californie : 31 $ la copie de naissance depuis le 1er janvier 2026', () => {
    expect(stateFees(byCode('CA').birth, 2)).toBe(62);
  });
  it('Utah : décès 35 $ puis 10 $ (barème du 1er juillet 2026)', () => {
    expect(stateFees(byCode('UT').death, 4)).toBe(65);
  });
  it('New Jersey : 25 $ puis 2 $', () => {
    expect(stateFees(byCode('NJ').death, 10)).toBe(43);
  });
  it('Ohio : 21,50 $ par copie', () => {
    expect(stateFees(byCode('OH').birth, 2)).toBe(43);
  });
});

describe('orderCost', () => {
  it('ajoute les frais du prestataire en ligne seulement pour une commande en ligne', () => {
    const online = orderCost({ fees: byCode('NYC'), kind: 'birth', copies: 2, channel: 'online', processingFee: 9.3 });
    expect(online.total).toBe(39.3);
    const mail = orderCost({ fees: byCode('NYC'), kind: 'birth', copies: 2, channel: 'mail', processingFee: 9.3 });
    expect(mail.total).toBe(30);
  });
  it('mesure l’écart avec un intermédiaire à 59 $', () => {
    const r = orderCost({ fees: byCode('KY'), kind: 'birth', copies: 1, channel: 'mail', intermediaryTotal: 59 });
    expect(r.intermediaryExtra).toBe(49);
  });
  it('borne le nombre de copies entre 1 et 50', () => {
    expect(orderCost({ fees: byCode('AL'), kind: 'birth', copies: 0, channel: 'mail' }).copies).toBe(1);
    expect(orderCost({ fees: byCode('AL'), kind: 'birth', copies: 900, channel: 'mail' }).copies).toBe(50);
  });
  it('classe les juridictions de la moins chère à la plus chère', () => {
    const r = rankByCost(fees, 'death', 1);
    expect(r[0].total).toBeLessThanOrEqual(r.at(-1)!.total);
  });
});

describe('deathCertificateCopies', () => {
  it('une copie par organisme qui garde l’original, plus deux de réserve', () => {
    const r = deathCertificateCopies({
      bankAccounts: 2, lifeInsurancePolicies: 1, retirementAccounts: 1, brokerageAccounts: 0, vehicles: 1,
      realEstateCounties: 1, probate: true, veteranBenefits: false, annuitiesOrOther: 0, keepSpare: true,
    });
    expect(r.certifiedNeeded).toBe(7);
    expect(r.recommended).toBe(9);
  });
  it('jamais moins d’une copie', () => {
    const r = deathCertificateCopies({
      bankAccounts: 0, lifeInsurancePolicies: 0, retirementAccounts: 0, brokerageAccounts: 0, vehicles: 0,
      realEstateCounties: 0, probate: false, veteranBenefits: false, annuitiesOrOther: 0, keepSpare: false,
    });
    expect(r.recommended).toBe(1);
  });
});

describe('licence de mariage', () => {
  it('Floride : 86 $, 61 $ avec le cours, délai de 3 jours levé par le cours, 60 jours de validité', () => {
    const sans = marriageLicense({ rule: rule('FL'), issueDate: '2026-11-02' });
    expect(sans.fee).toBe(86);
    expect(sans.earliestCeremony).toBe('2026-11-05');
    expect(sans.expires).toBe('2027-01-01');
    const avec = marriageLicense({ rule: rule('FL'), issueDate: '2026-11-02', tookCourse: true });
    expect(avec.fee).toBe(61);
    expect(avec.earliestCeremony).toBe('2026-11-02');
  });
  it('Minnesota : 125 $ ou 50 $ avec 12 h de préparation, valable 6 mois', () => {
    expect(marriageLicense({ rule: rule('MN'), issueDate: '2026-08-31', tookCourse: true }).fee).toBe(50);
    expect(marriageLicense({ rule: rule('MN'), issueDate: '2026-08-31' }).expires).toBe('2027-02-28');
  });
  it('Connecticut : 48 h depuis le 1er octobre 2026', () => {
    expect(marriageLicense({ rule: rule('CT'), issueDate: '2026-10-26' }).earliestCeremony).toBe('2026-10-28');
  });
  it('DC : la licence n’expire pas', () => {
    const r = marriageLicense({ rule: rule('DC'), issueDate: '2026-10-26', weddingDate: '2028-01-01' });
    expect(r.expires).toBeNull();
    expect(r.weddingOk).toBe(true);
  });
  it('Nevada (Clark) : comté fixe le prix, mariage trop tard refusé', () => {
    const r = marriageLicense({ rule: rule('NV'), issueDate: '2026-10-26', countyFee: 102, weddingDate: '2027-11-01' });
    expect(r.fee).toBe(102);
    expect(r.reason).toBe('expired');
  });
  it('validité inconnue : pas de verdict', () => {
    const r = marriageLicense({ rule: rule('SC'), issueDate: '2026-10-26', weddingDate: '2026-12-01' });
    expect(r.validityKnown).toBe(false);
    expect(r.weddingOk).toBeNull();
  });
  it('addMonths garde la fin de mois', () => {
    expect(addMonths('2026-01-31', 1)).toBe('2026-02-28');
    expect(expiryDate('2026-03-01', { kind: 'years', value: 1 })).toBe('2027-03-01');
  });
});
