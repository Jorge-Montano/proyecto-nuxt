<template>
  <nav class="menu">
    <NuxtLink to="/perfil">Perfil</NuxtLink>
    <NuxtLink to="/sobre-mi">Sobre mí</NuxtLink>
    <NuxtLink to="/contacto">Contáctame</NuxtLink>
    <NuxtLink to="/proyectos">Proyectos</NuxtLink>
    <NuxtLink to="/peliculas">Películas</NuxtLink>
  </nav>
</template>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);

  padding: 15px;

  display: flex;
  justify-content: center;
  gap: 30px;
}

.menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.menu a:hover {
  color: #00b894;
}
</style>