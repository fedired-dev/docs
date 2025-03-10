import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'es-MX',
  title: "Documentacion Ofical de Fedired Project",
  base: "/",
  description: " Documentacion Oficial de Fedired Project",
  themeConfig: {
    logo: {
      light: '/logo-black.png',
      dark: '/logo-white.png'
    },

    siteTitle: 'Docs',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Instalar Aplicacion de Fedired Social', link: '/project/fedired' },
    ],

    search: {
      provider: 'local'
    },

    i18nRouting: false,

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Que es Fedired Social', link: '/project/fedired' },
          { text: 'Codigo de Conducta', link: '/cod/cod' },
        ]
      },
      {
        text: 'Instalar Servidor de Fedired Social',
        items: [
          { text: 'Requisitos', link: '/project/requisitos' },
          { text: 'Instalacion', link: '/project/install' },
          { text: 'Actualizar', link: '/project/upgrade' },
          { text: 'Tips Utiles', link: '/manual/utils' },
          { text: 'Control de Versiones', link: '/project/versions' },
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Creditos', link: '/legal/creditos' },
          { text: 'Licencias', link: '/legal/licencias' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fedired-dev' },
      
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
