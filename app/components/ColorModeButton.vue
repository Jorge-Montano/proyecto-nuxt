<script setup>
import { computed } from 'vue'
import { useColorMode } from '#imports'

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
  <label class="switch">
    <input type="checkbox" v-model="isDark" />
    <span>Modo oscuro</span>
  </label>
</template>

<style scoped>
.switch {
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: center;
}
</style>