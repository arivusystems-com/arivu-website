export const HELP_EMBED_API_ORIGIN = 'https://app.arivusystems.com'
export const HELP_EMBED_ORG = 'art_pub_ee6d481a167b1b88ffd36ce13ec9a842'
export const HELP_EMBED_CSS = `${HELP_EMBED_API_ORIGIN}/embed/headless-blocks.css`
export const HELP_EMBED_SCRIPT = `${HELP_EMBED_API_ORIGIN}/embed/headless-help.js`

export const HELP_EMBED_MOUNT_CONFIG = {
  org: HELP_EMBED_ORG,
  target: '#arivu-help',
  apiOrigin: HELP_EMBED_API_ORIGIN,
  pathPrefix: '/help/',
  title: 'Help Center',
  searchEnabled: true,
  showSidebar: true,
  showBreadcrumbs: true,
} as const
