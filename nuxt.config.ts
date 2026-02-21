export default defineNuxtConfig({
  css: ['~/css/main.css'],

  ssr: false,

  nitro: {
    preset: 'static'
  }
})