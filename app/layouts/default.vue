<template>
  <div>
    <!-- FONDO -->
    <Background />

    <div class="container">
      <nav>
        <NuxtLink to="/">Inicio</NuxtLink> |
        <NuxtLink to="/contacto">Contacto</NuxtLink>
      </nav>

      <slot />
    </div>
  </div>
</template>

<script setup>
import Background from '../components/Background.vue'
</script>