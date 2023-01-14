// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  ssr: false,
  runtimeConfig: {
    public: {
      myDomain: process.env.NUXT_MY_DOMAIN,
      apiKey: process.env.NUXT_API_KEY,
    },
  },
});
