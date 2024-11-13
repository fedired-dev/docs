import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-MX',
  title: "Documentación de Fedired",
  base: "/",
  description: "Documentación oficial de Fedired",
  themeConfig: {
    logo: {
      light: '/logo-black.png',
      dark: '/logo-white.png'
    },

    siteTitle: '',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Que es Fedired Dev', link: '/project/introduction'},
      { text: 'Ordo', link: '/ordo/ordo' },
      { text: 'Ayuda a Traducir Fedired', link: 'https://crowdin.com/project/fedired/' },
      { text: 'Fedired Social Oficial', link: 'https://fedired.com' },
    ],

    search: {
      provider: 'local'
    },

    i18nRouting: false,

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Que es Ordo?', link: '/ordo/ordo' },
          { text: 'Instalación', link: '/ordo/install' },
          { text: 'Interfaz', link: '/ordo/interface' },
          { text: 'Actualización', link: '/ordo/update' },
        ]
      },
      {
        text: 'Fedired',
        items: [
          { text: 'Instalación', link: '/running-fedired/installation' },
        ]
      },
      {
        text: 'Administradores',
        items: [
          { text: 'IMPORTANTE', link: '/for-admins/important' },
          { text: 'Cloudflare Proxy', link: '/for-admins/cloudflare' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fedired-dev' },
      { 
        icon: {
          svg: '<img src="/icon.svg" width="20" height="20" alt="Fedired">'
        }, 
        link: 'https://fedired.com/@fedired' 
      },
    ]
  },
  locales: {
    root: {
      label: 'Español',
      lang: 'es'
    },
  },
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon.png"}],
    ['link', { rel: "shortcut icon", href: "/assets/favicon.png"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
})
