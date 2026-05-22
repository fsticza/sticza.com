const pkg = require('./package')

module.exports = {
  mode: 'universal',

  router: {
    // base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/sticza.com/' : '',
    linkExactActiveClass: 'active',
    linkActiveClass: ''
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Ferenc Sticza | Senior Full-Stack JavaScript/TypeScript Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'sticza.com'
      },
      { name: 'msapplication-TileColor', content: '#2d2d2d' },
      { name: 'theme-color', content: '#2d2d2d' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/android-chrome-512x512.png'
      },
      { hid: 'og:image:width', property: 'og:image:width', content: '512' },
      { hid: 'og:image:height', property: 'og:image:height', content: '512' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ferenc Sticza | Senior Full-Stack JavaScript/TypeScript Engineer'
      },
      { hid: 'og:url', property: 'og:url', content: 'https://sticza.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffea7d' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    //
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [['@nuxtjs/pwa', { icon: false }]],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
