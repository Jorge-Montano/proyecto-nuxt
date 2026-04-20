export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],

  css: ['~/assets/main.css'],

  nitro: {
    preset: 'static'
  }
})