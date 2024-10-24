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

    siteTitle: '',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Ayuda a Traducir Fedired', link: 'https://crowdin.com/project/fedired/' },
      { text: 'Referencia API', link: 'https://fedired.com/api-doc/' },
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
          { text: 'Introducción', link: '/project/introduction' },
          { text: 'Control de Versiones', link: '/project/versions' },
        ]
      },
      {
        text: 'Correr Fedired',
        items: [
          { text: 'Requisitos Previos', link: '/running-fedired/prerequisites' },
          { text: 'Instalación', link: '/running-fedired/installation' },
          { text: 'Actualización', link: '/running-fedired/update' },
        ]
      },
            {
        text: 'Ajustes Recomendados',
        items: [
          { text: 'Rotar Registros', link: '/configuration-fedired/rotate' },
          { text: 'Configuración de PostgreSQL', link: '/configuration-fedired/database' },
          { text: 'Personalización', link: '/configuration-fedired/personalization' },
          { text: 'Consejos y Trucos', link: '/configuration-fedired/tips' },
        ]
      },
      {
        text: 'Administradores',
        items: [
          { text: 'IMPORTANTE', link: '/for-admins/important' },
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
