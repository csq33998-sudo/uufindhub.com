export const languages = [
  {
    "code": "en",
    "label": "English",
    "dir": "ltr"
  },
  {
    "code": "de",
    "label": "Deutsch",
    "dir": "ltr"
  },
  {
    "code": "es",
    "label": "Español",
    "dir": "ltr"
  },
  {
    "code": "fr",
    "label": "Français",
    "dir": "ltr"
  },
  {
    "code": "it",
    "label": "Italiano",
    "dir": "ltr"
  },
  {
    "code": "pl",
    "label": "Polski",
    "dir": "ltr"
  },
  {
    "code": "pt",
    "label": "Português",
    "dir": "ltr"
  },
  {
    "code": "ro",
    "label": "Română",
    "dir": "ltr"
  },
  {
    "code": "sv",
    "label": "Svenska",
    "dir": "ltr"
  },
  {
    "code": "nl",
    "label": "Nederlands",
    "dir": "ltr"
  },
  {
    "code": "da",
    "label": "Dansk",
    "dir": "ltr"
  },
  {
    "code": "fi",
    "label": "Suomi",
    "dir": "ltr"
  },
  {
    "code": "el",
    "label": "Ελληνικά",
    "dir": "ltr"
  },
  {
    "code": "cs",
    "label": "Čeština",
    "dir": "ltr"
  },
  {
    "code": "hu",
    "label": "Magyar",
    "dir": "ltr"
  },
  {
    "code": "bg",
    "label": "Български",
    "dir": "ltr"
  },
  {
    "code": "sk",
    "label": "Slovenčina",
    "dir": "ltr"
  },
  {
    "code": "hr",
    "label": "Hrvatski",
    "dir": "ltr"
  },
  {
    "code": "sl",
    "label": "Slovenščina",
    "dir": "ltr"
  },
  {
    "code": "lt",
    "label": "Lietuvių",
    "dir": "ltr"
  },
  {
    "code": "lv",
    "label": "Latviešu",
    "dir": "ltr"
  },
  {
    "code": "et",
    "label": "Eesti",
    "dir": "ltr"
  },
  {
    "code": "ga",
    "label": "Gaeilge",
    "dir": "ltr"
  },
  {
    "code": "mt",
    "label": "Malti",
    "dir": "ltr"
  }
] as const;

export type LanguageCode = (typeof languages)[number]["code"];
