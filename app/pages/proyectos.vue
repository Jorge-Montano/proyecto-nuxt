<script setup>
const proyectos = [
  {
  titulo: 'Proyecto Películas',
  descripcion: 'Proyecto desarrollado con Nuxt.js y Vue.js que integra una API REST de TVMaze para mostrar películas y series dinámicamente.',
  tecnologias: ['Vue', 'Nuxt', 'API'],
  link: 'https://tecnostore-theta.vercel.app/app-store',
},
  {
  titulo: 'FIGURA 3D STL',
  descripcion: 'El presente proyecto tiene como objetivo el desarrollo de un visor de modelos tridimensionales en formato STL usando Three.js.',
  tecnologias: ['Three.js', 'Vue', '3D'],
  link: 'https://3-d-beryl.vercel.app/',
},
 {
  titulo: 'Ajedrez 3D',
  descripcion: 'Juego de ajedrez 3D interactivo desarrollado con Vue, Three.js y STLLoader, con reglas oficiales, movimiento de piezas y renderizado en tiempo real.',
  tecnologias: ['Vue', 'Three.js', 'Chess.js', 'Nuxt'],
  link: 'https://ajedrez-opal.vercel.app/',
},
   {
    titulo: 'Proyecto 4',
    descripcion: 'Descripción breve del proyecto.',
    tecnologias: ['Node', 'Express'],
    link: '#',
  },
]
</script>

<template>
  <div class="container">
    <section class="proyectos">

      <h1 class="proyectos__title">Mis Proyectos</h1>
      <p class="proyectos__subtitle">
        Algunos trabajos y proyectos personales.
      </p>

      <div class="proyectos__grid">
        <div
          v-for="(proyecto, index) in proyectos"
          :key="index"
          class="proyecto__card"
        >
          <div class="proyecto__content">
            <h2 class="proyecto__title">
              {{ proyecto.titulo }}
            </h2>

            <p class="proyecto__desc">
              {{ proyecto.descripcion }}
            </p>

            <div class="proyecto__tech">
              <span
                v-for="(tech, i) in proyecto.tecnologias"
                :key="i"
                class="tech"
              >
                {{ tech }}
              </span>
            </div>

            <a
              :href="proyecto.link"
              target="_blank"
              class="proyecto__link"
            >
              Ver proyecto →
            </a>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: #16001f;
}

.proyectos {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.proyectos__title {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 10px;
}

.proyectos__subtitle {
  color: #cbd5e1;
  margin-bottom: 40px;
}

.proyectos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}

.proyecto__card {
  background: #020617;
  border: 1px solid #1e293b;
  border-radius: 16px;
  padding: 20px;
  text-align: left;
}

.proyecto__title {
  color: #ffffff;
}

.proyecto__desc {
  color: #94a3b8;
}

.proyecto__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech {
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 8px;
  background: #1e293b;
  color: #cbd5e1;
}

.proyecto__link {
  color: #60a5fa;
}
</style>	