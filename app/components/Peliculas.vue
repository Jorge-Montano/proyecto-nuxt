<script setup>
// Importamos herramientas de Vue
import { ref, onMounted } from 'vue'

// Estado para guardar películas
const peliculas = ref([])

// Estado de carga
const loading = ref(true)

// Se ejecuta en el navegador (CSR)
onMounted(async () => {
  try {
    // Llamada a API externa
    const res = await fetch('https://api.tvmaze.com/shows')

    // Convertimos a JSON
    peliculas.value = await res.json()

  } catch (error) {
    console.error('Error al cargar películas:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container">

    <!-- TÍTULO -->
    <h1 class="titulo">Catálogo de Películas</h1>

    <!-- LOADING -->
    <p v-if="loading" class="loading">Cargando...</p>

    <!-- GRID DE TARJETAS -->
    <div class="grid">
      <div
        v-for="item in peliculas.slice(0, 12)"
        :key="item.id"
        class="card"
      >
        <!-- IMAGEN -->
        <img :src="item.image?.medium" alt="poster" />

        <!-- NOMBRE -->
        <h2>{{ item.name }}</h2>

        <!-- DESCRIPCIÓN -->
        <p v-html="item.summary"></p>
      </div>
    </div>

  </div>
</template>

<style scoped>

/* CONTENEDOR PRINCIPAL */
.container {
  width: 100%;
  max-width: 1200px;
  padding: 20px;

  margin: 0 auto; /* centra horizontal */
}

/* TÍTULO */
.titulo {
  text-align: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 20px;
}

/* LOADING */
.loading {
  text-align: center;
  color: white;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

/* TARJETA */
.card {
  background: #020617;
  border-radius: 12px;
  overflow: hidden;
  padding: 10px;

  transition: transform 0.3s ease;
}

/* EFECTO HOVER */
.card:hover {
  transform: scale(1.05);
}

/* IMAGEN */
.card img {
  width: 100%;
  border-radius: 10px;
}

/* TITULO CARD */
.card h2 {
  color: white;
  font-size: 1rem;
  margin: 10px 0;
}

/* DESCRIPCIÓN */
.card p {
  color: #94a3b8;
  font-size: 0.8rem;
}

</style>