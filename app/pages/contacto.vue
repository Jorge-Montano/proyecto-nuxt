<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
})

const loading = ref(false)
const enviado = ref(false)
const errorMsg = ref('')

const handleSubmit = async () => {
  errorMsg.value = ''
  enviado.value = false

  if (!form.nombre || !form.email || !form.asunto || !form.mensaje) {
    errorMsg.value = 'Por favor completa todos los campos.'
    return
  }

  loading.value = true

  try {
    await new Promise((resolve) => setTimeout(resolve, 800))
    enviado.value = true

    form.nombre = ''
    form.email = ''
    form.asunto = ''
    form.mensaje = ''
  } catch (error) {
    errorMsg.value = 'Ocurrió un error al enviar el mensaje.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <section class="contacto">
      <div class="contacto__card">

        <p class="contacto__tag">Contáctame</p>
        <h1 class="contacto__title">Hablemos de tu proyecto</h1>

        <!-- MODO OSCURO -->
        <ColorModeButton />

        <p class="contacto__text">
          Si tienes una idea, una propuesta o quieres trabajar conmigo, mándame un mensaje.
        </p>

        <form class="contacto__form" @submit.prevent="handleSubmit">

          <div class="contacto__group">
            <label>Nombre</label>
            <input v-model="form.nombre" type="text" placeholder="Tu nombre" />
          </div>

          <div class="contacto__group">
            <label>Correo</label>
            <input v-model="form.email" type="email" placeholder="correo@email.com" />
          </div>

          <div class="contacto__group">
            <label>Asunto</label>
            <input v-model="form.asunto" type="text" placeholder="Asunto" />
          </div>

          <div class="contacto__group">
            <label>Mensaje</label>
            <textarea v-model="form.mensaje" rows="5" placeholder="Escribe tu mensaje..."></textarea>
          </div>

          <button class="contacto__button" :disabled="loading">
            {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
          </button>

          <p v-if="enviado" class="success">
            ✅ Mensaje enviado correctamente
          </p>

          <p v-if="errorMsg" class="error">
            {{ errorMsg }}
          </p>

        </form>

      </div>
    </section>
  </div>
</template>

<style scoped>

/* CONTENEDOR */
.container {
  min-height: 100vh;
  padding: 100px 20px 40px;
  display: flex;
  justify-content: center;
}

/* TARJETA */
.contacto__card {
  width: 100%;
  max-width: 500px;
  padding: 25px;
  border-radius: 16px;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
}

/* TEXTOS */
.contacto__tag {
  text-align: center;
  color: #38bdf8;
  margin-bottom: 5px;
}

.contacto__title {
  text-align: center;
  color: white;
  margin-bottom: 10px;
}

.contacto__text {
  text-align: center;
  color: #e2e8f0;
  margin-bottom: 20px;
}

/* FORM */
.contacto__form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* GROUP */
.contacto__group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

/* LABEL */
.contacto__group label {
  color: #ffffff;
  font-weight: bold;
}

/* INPUTS */
.contacto__group input,
.contacto__group textarea {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #334155;

  background: #0f172a;
  color: white;

  outline: none;
}

/* PLACEHOLDER */
.contacto__group input::placeholder,
.contacto__group textarea::placeholder {
  color: #94a3b8;
}

/* FOCUS */
.contacto__group input:focus,
.contacto__group textarea:focus {
  border-color: #00b894;
}

/* BOTÓN */
.contacto__button {
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 10px;

  background: #00b894;
  color: white;
  font-weight: bold;

  cursor: pointer;
}

.contacto__button:hover {
  background: #019874;
}

/* MENSAJES */
.success {
  color: #4ade80;
  text-align: center;
}

.error {
  color: #f87171;
  text-align: center;
}
</style>