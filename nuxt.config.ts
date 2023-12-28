// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      DATABASE_ID: process.env.QUASAR_DATA
    }
  }
})
