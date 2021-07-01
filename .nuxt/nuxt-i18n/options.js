

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"fr","file":"fr-FR.js"},{"code":"en","file":"en-EN.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/Users/alexandre.uy/Desktop/Portfolio/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"fr","file":"fr-FR.js"},{"code":"en","file":"en-EN.js"}],
  localeCodes: ["fr","en"],
}

export const localeMessages = {
  'fr-FR.js': () => import('../../lang/fr-FR.js' /* webpackChunkName: "lang-fr-FR.js" */),
  'en-EN.js': () => import('../../lang/en-EN.js' /* webpackChunkName: "lang-en-EN.js" */),
}
