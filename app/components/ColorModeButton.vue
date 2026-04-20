<script setup>
import { computed } from 'vue'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(v) {
    colorMode.preference = v ? 'dark' : 'light'
  }
})
</script>

<template>
  <label style="cursor:pointer;">
    <input type="checkbox" v-model="isDark" />
    Modo oscuro
  </label>
</template>