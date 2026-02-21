export default defineNuxtConfig({
  css: ['~/app/css/main.css'],

  ssr: false,

  nitro: {
    preset: 'static'
  }
})