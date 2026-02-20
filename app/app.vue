<template>
<div class="tarjeta">

  <img src="/images/perfil.jpg" class="foto-perfil" />

  <h1 class="nombre">Jorge Montaño</h1>
  <h2>Ingeniero en TICS</h2>
    <p class="descripcion">
      Especialista en desarrollo web.
    </p>

    <div class="contacto">
      <p>📧 jorge.alan.montano@gmial.com </p>
      <p>📱 +52 5612791223</p>
    </div>

    <div class="redes">
  <a href="#">GitHub</a>
  <a href="#">LinkedIn</a>
  <a href="#">Correo</a>
</div>

    <div class="botones">
      <button @click="saludar">Contacto</button>

      <button @click="toggleTheme">
        {{ darkMode ? '☀️ Modo claro' : '🌙 Modo oscuro' }}
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const darkMode = ref(false)

const saludar = () => {
  alert("Gracias por contactarme 👍")
}

const toggleTheme = () => {
  darkMode.value = !darkMode.value
  document.body.classList.toggle("oscuro")
}
</script>