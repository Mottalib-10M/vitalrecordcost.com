# Adding or editing a page

One page = one file `src/content/pages/<id>.ts` exporting `definePage({...})` (types in
`src/lib/guide-types.ts`). The file name must equal `id`. Models: `birth-tx.ts` (state birth page),
`ml-tx.ts` (state marriage license page), `death-copies.ts` (guide with its own tool). The page is built
at `/en/<en.slug>/` and `/es/<es.slug>/`; hreflang, menus, home cards and sitemap follow by themselves.

## Fields

- `group`: `birth`, `death`, `marriage` or `states`; `order`: position in the group (states 100+).
- `state`: two-letter code on a state page (`NYC` exists for New York City).
- `tool`: main tool under the H1 (first screen): `order` (copy cost), `marriage` (license dates),
  `deathcopies`, or `mini:<spec>`. Props: `{ state: 'TX', kind: 'death', copies: 5 }`.
- `mini`: second tool under the citable block. Specs in `src/lib/mini-specs.ts`: `pair`, `together`,
  `online`, `processing`, `passport`, `apostille`, `amended`, `deathcost`, `mlcost`, `mlwait`, `vsc`,
  `marrcopy`, `divorce`, `namechange`, `courthouse`, `commonlaw`, `office`, `rank`.
- In a body, `<!--tool:mini:mlwait|{"state":"WI"}-->` places a tool between paragraphs.
- `related`: 4 to 6 page ids. `sources`: extra `{ name, url }` beyond the state pages added automatically.

## Text rules (checked by `npm run check`)

- `title` 50–60 characters, key term first; `description` 150–160 characters; both unique.
- `resume(h)`: one paragraph, 130+ words, answering the page's question with figures.
- `faqs(h)`: 3–5 questions unique to the page, answers 40–90 words.
- No em dash; American spelling; Spanish in neutral US Spanish, adapted, not shorter.
- Pages must read differently (check-unique fails above 30 % shared sentences).
- Only official sources as outbound links. Never present the site as a government office, never give
  legal advice, no official seal or logo, no ordering service or affiliate link.

## Figures

Never type a fee or a delay: read it through `h` (`src/lib/helpers.ts`): `h.J('TX')` (birth/death fees,
online channel, processing, marriage and divorce record office, apostille, common-law),
`h.ML('TX')` (license fee, wait, validity, course discount), `h.stats(kind, copies)`, `h.rank`,
`h.x(key)` (extras: passport, SSA, ceremony and amended-certificate fees), `h.table`, `h.m`, `h.a`, `h.sl`.
A missing figure reads as `h.nc` ("not published"); test it before writing a sentence around it.

## Data

Sheets in `data/source/*.tsv`, one row per jurisdiction, each with its official URL, a quote and the
date read. `node scripts/update-data.mjs` rebuilds `data/*.json`; every English note needs its Spanish
wording in `data/source/translations-es.tsv`. `--check-sources` hashes each official page (weekly
workflow `.github/workflows/update-data.yml`) and opens an issue when one changes.
