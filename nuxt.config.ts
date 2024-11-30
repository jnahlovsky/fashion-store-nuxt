export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  app: {
    head: {
      title: 'Fashion Store',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },
  runtimeConfig: {
    mailjet: {
      apiKey: 'c924b2ea74e22675c62a210d94d5a4fc',
      apiSecret: 'cb7cdf4e13c45ffd15fe97bc8ceba3cf',
      adminEmail: 'nahlovsky.j@gmail.com'
    },
    smtp: {
      user: 'nahlovsky.j@gmail.com',
      pass: 'jily ogtz tksq tzab'
    },
    public: {
      vendureApi: process.env.VENDURE_API_URL || 'http://localhost:3000/shop-api'
    }
  },
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  tailwindcss: {
    config: {
      darkMode: 'class'
    }
  }
})