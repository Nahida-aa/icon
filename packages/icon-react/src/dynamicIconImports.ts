const dynamicIconImports = {
  'a-arrow-down': () => import('./icons/a-arrow-down'),
  'layout-bottom-bar-filled': () => import('./icons/layout-bottom-bar-filled'),
  'layout-bottom-bar': () => import('./icons/layout-bottom-bar'),
  'user-group': () => import('./icons/user-group'),
  'sparkles': () => import('./icons/sparkles'),
  'mix': () => import('./icons/mix'),
  'document-text': () => import('./icons/document-text'),
  'fingerprint-pattern': () => import('./icons/fingerprint-pattern'),
  'fingerprint': () => import('./icons/fingerprint-pattern'),
};
export default dynamicIconImports;
