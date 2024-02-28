// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  pages: true,
  nitro: {

  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || '127.0.0.1',
    },
  },
  modules: ['nuxt-icon']
})