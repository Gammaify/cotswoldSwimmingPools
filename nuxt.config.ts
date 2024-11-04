// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  security: {
    basicAuth: {
      name: "csp",
      pass: "csp1768422",
      enabled: true,
      message: "Please Login to view website",
      include: ["/"]
    }
  },
  modules: ['nuxt-security']
})