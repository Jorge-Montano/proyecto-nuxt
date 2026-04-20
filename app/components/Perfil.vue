<template>
  <div>
    <img src="/images/perfil.jpg" class="foto-perfil" />

    <h2 class="nombre">{{ nombre }}</h2>
    <h3>{{ titulo }}</h3>
    <p>{{ descripcion }}</p>
  </div>
</template>

<script setup>
defineProps({
  nombre: String,
  titulo: String,
  descripcion: String
})
</script>