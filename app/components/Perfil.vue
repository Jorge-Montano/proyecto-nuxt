<template>
  <div class="perfil">
    <img src="/images/perfil.jpg" class="foto-perfil" />

    <h1 class="nombre">{{ nombre }}</h1>
    <h2>{{ titulo }}</h2>

    <p class="descripcion">
      {{ descripcion }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  nombre: String,
  titulo: String,
  descripcion: String
})
</script>