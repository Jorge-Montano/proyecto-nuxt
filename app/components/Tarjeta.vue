<template>
  <div class="tarjeta">

    <!-- PERFIL -->
    <Perfil
      nombre="Jorge Montaño"
      titulo="Ingeniero en TICS"
      descripcion="Especialista en desarrollo web."
    />

    <!-- REDES -->
    <Redes />

    <!-- BOTÓN -->
    <NuxtLink to="/contacto" class="btn">
      Contacto
    </NuxtLink>

    <!-- MODO OSCURO -->
    <div class="modo">
      <ColorModeButton />
    </div>

  </div>
</template>

<script setup>
import Perfil from './Perfil.vue'
import Redes from './Redes.vue'
import ColorModeButton from './ColorModeButton.vue'
</script>