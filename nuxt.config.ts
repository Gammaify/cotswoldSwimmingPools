// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  security: {
    headers:{
      contentSecurityPolicy: {
        "img-src": ["'self'", "data:", "https://admin.cotswoldswimmingpools.co.uk", "http://front-end-noobs.com"]
      }
    },
    basicAuth: {
      name: "csp",
      pass: "csp1768422",
      enabled: true,
      message: "Please Login to view website",
      include: ["/"]
    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/app.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    global: true,
    dirs: ['~/components']
},
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  turnstile: {
    siteKey: '0x4AAAAAAA0ggsrIdD6SUCoV',
    secretKey: '0x4AAAAAAA0ggptKCoeOah6Tyf4mWya8iEw',
    addValidateEndpoint: true
  },
  modules: ['nuxt-security', "@nuxtjs/turnstile"]
})