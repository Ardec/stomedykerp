// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon','@nuxt/ui'],
  runtimeConfig: {
    public: {
      DATABASE_ID: process.env.API_DATA
    }
  },
  css: [
    'animate.css' 
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *; @use "~/assets/_fonts.scss" as *;@use "~/assets/_normalize.scss" as *;'
        }
      }
    }
  }
})

