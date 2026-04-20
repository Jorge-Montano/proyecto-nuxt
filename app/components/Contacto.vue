<template>
  <div class="contacto">
    <p>📧 {{ email }}</p>
    <p>📱 {{ telefono }}</p>
  </div>
</template>

<script setup>
defineProps({
  email: String,
  telefono: String
})
</script>