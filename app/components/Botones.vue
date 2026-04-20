<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  darkMode: Boolean
})

const irContacto = () => {
  router.push('/contacto')
}
</script>

<template>
  <div class="botones">
    <button @click="$emit('saludo')">
      Contacto
    </button>

    <button @click="irContacto">
      Ir a contacto
    </button>

    <button @click="$emit('toggle')">
      {{ darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro' }}
    </button>
  </div>
</template>