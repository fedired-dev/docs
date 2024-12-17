import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config

export default defineConfig({
  lang: 'es-MX',
  title: "Centro de Ayuda Fedired",
  base: "/",
  description: "Centro de ayuda y soporte para fedired",
  themeConfig: {
    logo: {
      light: '/logo-black.png',
      dark: '/logo-white.png'
    },


    siteTitle: '',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Aplicacion de Fedired', link: 'https://help.fedired.com/manual/pwa' },
      { text: 'Que es Fedired Social', link: '/project/fedired'},
    ],

    search: {
      provider: 'local'
    },

    i18nRouting: false,

    sidebar: [
      {
        text: '',
        items: [
          { text: 'Que es Fedired?', link: '/project/fedired' },
        ]
      },
      {
        text: 'Para usuarios de Fedired',
        items: [
          { text: 'Que es el Fediverso', link: '/tutorial/basics' },
          { text: 'Reglas de la Comunidad', link: '/manual/vocab' },
          { text: 'Limitaciones de Uso', link: '/cuentas/limitaciones' },
          { text: 'Verificación', link: '/cuentas/verified' },

        ]
      },
      {
        text: 'Para administradores de servidores',
        items: [
          { text: 'Instalar en Docker', link: '/project/install-container' },
          { text: 'Instalar Fedired', link: '/project/install' },
          { text: 'Actualizar Fedired', link: '/project/upgrade' },
          { text: 'Tips Utiles', link: '/manual/utils' },
          { text: 'Control de Versiones', link: '/project/versions' },

        ]
       },
       {
        text: 'Legal',
        items: [
          { text: 'Creditos', link: '/legal/creditos' },
          { text: 'Licencias', link: '/legal/licencias' },
          { text: 'Terminos', link: '/legal/terms' },

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
