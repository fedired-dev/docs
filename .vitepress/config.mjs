import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-MX',
  title: "Documentación de Fedired",
  base: "/",
  description: "La documentación oficial de Fedired",
  themeConfig: {
    logo: {
      light: '/logo-black.png',
      dark: '/logo-white.png'
    },

    siteTitle: 'Docs',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'fedired.com', link: 'https://fedired.com' },
    ],

    search: {
      provider: 'local'
    },

    i18nRouting: false,

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Introducción', link: '/project/introduction' },
        ]
      },
      {
        text: 'Correr Fedired',
        items: [
          { text: 'Requisitos Previos', link: '/running-pixelfed/prerequisites' },
          { text: 'Instalación', link: '/running-pixelfed/installation' },
          { text: 'Actualización', link: '/running-pixelfed/upgrade' },
        ]
      },
      {
        text: 'API REST',
        items: [
          { text: 'API de Fedired', link: 'https://fedired.com/api-doc/' },
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
