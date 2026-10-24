import { describe, expect, it } from 'vitest';
import { getSpec, SPEC_KINDS } from '../src/lib/mini-specs';
import { JURS } from '../src/lib/engine/data';

// Chaque mini-outil doit répondre pour chacune des 52 juridictions, dans les deux langues,
// sans NaN ni « undefined » dans le résultat affiché.
describe('mini-outils', () => {
  for (const lang of ['en', 'es'] as const) {
    for (const kind of SPEC_KINDS) {
      it(`${kind} (${lang}) répond pour chaque juridiction`, () => {
        const spec = getSpec(kind, lang);
        const stateInput = spec.inputs.find((i) => i.id === 'state');
        const n = stateInput?.options ? stateInput.options.length : 1;
        for (let i = 0; i < n; i++) {
          const v: Record<string, number> = {};
          for (const inp of spec.inputs) v[inp.id] = inp.def;
          if (stateInput?.options) v.state = Number(stateInput.options[i].value);
          const out = spec.run(v);
          const text = JSON.stringify(out);
          expect(text).not.toMatch(/NaN|undefined|Infinity/);
        }
      });
    }
  }
  it('52 juridictions', () => expect(JURS.length).toBe(52));
});
