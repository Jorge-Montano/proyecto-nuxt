export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/app/css/main.css'],

  ssr: false,

  nitro: {
    preset: 'netlify'
  }
})