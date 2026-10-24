/** Configuration centrale du site (générée par new-site.py). */
export const SITE_URL = "https://us-vital-records.example";
export const SITE_NAMES: Record<string, string> = {"en": "Vital Record Cost", "es": "Costo de Actas por Estado"};
export const LANG_TAGS: Record<string, string> = {"en": "en-US", "es": "es-US"};
export const OG_LOCALES: Record<string, string> = {"en": "en_US", "es": "es_US"};
export const LOCALE_TAG = 'en-US';
export const CURRENCY = 'USD';
export const YEAR = 2026;
/** Année de création du site — signal d'ancienneté (RECETTE §8.0). */
export const SITE_FOUNDED = '2026';
export const LAST_UPDATED = '2026-10-24';
export const AUTHOR_NAME = 'Radif Partners';
export const AUTHOR_ROLE: Record<string, string> = {"en": "Independent publisher of state-by-state costs and rules for birth, death and marriage records in the United States", "es": "Editor independiente de los costos y las reglas de las actas de nacimiento, defunción y matrimonio en cada estado de Estados Unidos"};
export const AUTHOR_DESC: Record<string, string> = {"en": "Radif Partners reads the fee page of every state vital records office, of New York City and of the county clerks that issue marriage licenses, and records for each one the price of the first certified copy, the price of each extra copy ordered at the same time, the online vendor charge, the waiting period, how long a marriage license stays valid and the premarital-course discount, each with the official page it came from and the date it was read. The calculators add these up in your browser, without an account, and show what a private ordering service charges on top.", "es": "Radif Partners lee la página de tarifas de cada oficina estatal de registros vitales, de la Ciudad de Nueva York y de los secretarios de condado que emiten licencias de matrimonio, y anota para cada una el precio de la primera copia certificada, el de cada copia adicional pedida al mismo tiempo, el cargo del proveedor en línea, el periodo de espera, la vigencia de la licencia de matrimonio y el descuento por curso prematrimonial, con la página oficial de origen y la fecha de lectura. Las calculadoras suman todo en su navegador, sin cuenta, y muestran cuánto cobra de más un servicio privado de pedidos."};
/** Sujets sur lesquels l'editeur est competent (schema.org knowsAbout). Ce sont les
 *  themes reellement traites par le site, pas une liste de mots-cles : un sujet
 *  declare ici sans page qui le couvre est une declaration fausse. */
export const KNOWS_ABOUT: Record<string, string[]> = {"en": ["Certified copies of birth certificates in US states", "Death certificate fees and how many copies an estate needs", "Marriage license fees, waiting periods and validity by state", "Marriage and divorce certificate copies", "State-authorized online vital record vendors and their fees", "Amended birth certificates and apostilles"], "es": ["Copias certificadas de actas de nacimiento en los estados de EE. UU.", "Tarifas de actas de defunción y cuántas copias necesita una sucesión", "Tarifas, espera y vigencia de la licencia de matrimonio por estado", "Copias de actas de matrimonio y de divorcio", "Proveedores en línea autorizados por los estados y sus cargos", "Actas de nacimiento enmendadas y apostillas"]};
export const CONTACT_EMAIL = "contact@us-vital-records.example";
export const THEME_COLOR = '#2F4A3A';
export const LOGO_SYMBOL = 'VR';
export const BING_VERIFY_CODE = '';
export const GOOGLE_VERIFY_CODE = '';
/** Régime : 'none' pour tous les sites (RECETTE §15.6, décision de l'éditeur du 2026-10-06) :
 *  aucun bandeau ; Clarity chargé en mode sans cookie (consentv2 denied) ; GA4 avec cookies si GA4_ID.
 *  'opt-in' / 'notice' ne servent plus qu'aux sites anciens qui les portent encore. */
export const CONSENT_MODE: 'opt-in' | 'notice' | 'none' = 'none';
/** Propriété Google Analytics 4 (décision de l'éditeur du 2026-10-17, RECETTE §15.6) : GA4 normal,
 *  avec cookies _ga / _ga_<ID> (390 jours), sans bandeau, publicité refusée. Créée par
 *  `seo-platform/scripts/create-ga4.ts accounts/372759688` (RECETTE §15.3, étape 15), puis
 *  pages légales régénérées : `python3 scripts/gen-legal-pages.py .`. Vide = pas de GA4. */
export const GA4_ID = '';
/** Projet Microsoft Clarity (compte amradif), chargé sans cookie. Vide = aucune mesure. */
export const CLARITY_ID = '';
export const INDEXNOW_KEY = '05c05051592b164ddd8a01a3b1402f7f';

/* ------------------------------------------------------------------------- *
 * IDENTITÉ LÉGALE — À COMPLÉTER AVANT LA MISE EN LIGNE
 * Ces champs alimentent la mention légale du pays, la politique de confidentialité,
 * la page contact et le schema Organization. Un champ vide s'affiche en jaune
 * sur le site. Contrôle : `npm run check:legal`.
 * ------------------------------------------------------------------------- */
export interface LegalHosting { name: string; address: string; phone: string; url: string }
export interface LegalIdentity {
  entityName: string; legalForm: string; street: string; postalCode: string; city: string;
  country: string; phone: string; registerLabel: string; registerNumber: string;
  vatLabel: string; vatNumber: string; jurisdiction: string;
  supervisoryAuthority: string; supervisoryAuthorityUrl: string; hosting: LegalHosting;
}
export const LEGAL: LegalIdentity = {
  entityName: 'Radif Partners',            // raison sociale ou nom commercial exploité
  legalForm: '',             // ex. entreprise individuelle, SASU, GmbH, eenmanszaak
  street: '49 rue du Ressort',
  postalCode: '63000',
  city: 'Clermont-Ferrand',
  country: "France",
  phone: '',                 // ligne de contact publiée
  registerLabel: "SIREN",
  registerNumber: '',
  vatLabel: "VAT",
  vatNumber: '',             // laisser vide si non assujetti
  jurisdiction: "France",
  supervisoryAuthority: "Commission nationale de l'informatique et des libertés (CNIL)",
  supervisoryAuthorityUrl: "https://www.cnil.fr",
  hosting: { name: 'GitHub, Inc. (GitHub Pages)', address: '88 Colin P Kelly Jr Street, San Francisco, CA 94107, United States', phone: '', url: 'https://pages.github.com' },
};

/** Champs sans lesquels le site ne doit pas être mis en ligne. */
export const LEGAL_REQUIRED: Array<keyof LegalIdentity> = ['entityName', 'street', 'postalCode', 'city'];  // forme juridique non publiée, comme sur les autres sites du portefeuille

/** Profils publics de l'auteur (schema.org sameAs). Laisser vide si aucun. */
export const AUTHOR_SAME_AS: string[] = [];

/** Rythme de revue éditoriale annoncé sur le site, en mois. */
export const REVIEW_CYCLE_MONTHS = 12;
