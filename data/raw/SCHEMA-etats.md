# Schéma d'une fiche État (collecte phase 1, 2026-10-24)

Une fiche par juridiction (50 États + DC + New York City), dans un tableau JSON. Chaque chiffre a sa source
officielle (.gov de l'État ou loi de l'État), une citation courte copiée de la page (≤ 25 mots) et la date de lecture.
Un chiffre introuvable sur une page officielle = `null` + `missing_reason`. Jamais un chiffre d'intermédiaire
(VitalChek, usbirthcertificates, blogs). CDC/NCHS « Where to Write » seulement en dernier recours, marqué
`"stale_cdc": true` avec sa date « Last reviewed ».

```json
{
  "code": "TX",
  "name": "Texas",
  "office": "Texas DSHS Vital Statistics Section",
  "office_url": "https://www.dshs.texas.gov/vital-statistics",
  "birth": {
    "first_copy_usd": 23,
    "additional_copy_usd": 23,
    "additional_rule": "same record, same order",
    "variants": "short form (abstract) and long form; note if prices differ",
    "where": "state; also local registrars / county clerks (true/false + note)",
    "processing": {"mail": "text as published", "online": "text", "in_person": "text", "mail_days_max": 25},
    "online_channel": "Texas.gov (state portal) / VitalChek (state-authorized vendor) / none",
    "vendor_fee_usd": null,
    "expedite_fee_usd": null,
    "source_url": "https://...",
    "quote": "...",
    "retrieved_at": "2026-10-24"
  },
  "death": { "same fields as birth": "" },
  "marriage_record": {"where": "state | county | both", "state_fee_usd": 20, "certified_from_state": false, "source_url": "", "quote": "", "retrieved_at": ""},
  "divorce_record": {"where": "state | county | both", "state_fee_usd": 20, "certified_from_state": false, "source_url": "", "quote": "", "retrieved_at": ""},
  "marriage_license": {
    "fee_usd": 82.5,
    "fee_set_by": "state statute | county",
    "fee_note": "e.g. $60 discount with 8-hour premarital course",
    "premarital_discount_usd": 60,
    "waiting_period_hours": 72,
    "waiting_note": "waivable for active military / court order",
    "validity_days": 90,
    "min_age": 18,
    "statute": "Tex. Fam. Code §2.204",
    "source_url": "https://...",
    "quote": "...",
    "retrieved_at": "2026-10-24"
  },
  "missing_reason": {"field.path": "why"}
}
```
