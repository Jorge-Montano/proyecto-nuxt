export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode'],
  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'static'
  }
})