export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap&subset=cyrillic' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff7623' },
  /*
  ** Global CSS
  */
  css: ['normalize.css', '~/assets/main.sass'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/device',
    '@nuxtjs/auth',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://my-json-server.typicode.com/irbis999/media-admin',
  },
  auth: {
    redirect: {
      logout: '/login',
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'get', propertyName: 'token' },
          logout: { url: '/logout', method: 'get' },
          user: { url: '/user', method: 'get', propertyName: 'user' },
        },
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
}
