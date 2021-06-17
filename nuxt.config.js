export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sooman.Che',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-icon',
        sizes: '152x152',
        href: '/apple-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '36x36',
        href: '/android-icon-36x36',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/styles/main.pcss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    'nuxt-vite',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      // if you have bought the Pro packages
      // list the icons you want to add, not listed icons will be tree-shaked
      solid: [],
      // include all icons. But dont do this.
      brands: [],
      regular: [],
    },
  },

  googleFonts: {
    families: {
      'Open+Sans': [400, 500, 700],
      'Noto+Sans': [400, 500, 700],
      Montserrat: [400, 700, 900],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        features: {
          'nesting-rules': true,
          'custom-media-queries': {
            importFrom: 'assets/styles/media-query.pcss',
          },
        },
      },
    },
  },

  loading: {
    color: 'white',
    height: '5px',
  },
}
