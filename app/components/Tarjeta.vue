<template>
  <div class="tarjeta">
    <!-- FOTO -->
    <img src="/images/perfil.jpg" class="foto-perfil" />

    <!-- NOMBRE -->
    <h2>Jorge Montaño</h2>

    <!-- PROFESIÓN -->
    <p>Ingeniero en TICS</p>

    <p>Especialista en desarrollo web.</p>

    <!-- CONTACTO -->
    <p>📧 jorge.alan.montano@gmail.com</p>
    <p>📱 +52 5612791223</p>

    <!-- REDES -->
    <p>
      <a href="#">GitHub</a> |
      <a href="#">LinkedIn</a>
    </p>

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

<style scoped>
.tarjeta {
  background: #1e1e1e;
  color: white;
  padding: 25px;
  border-radius: 15px;
  width: 320px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,.3);
}

/* 👇 IMAGEN ARREGLADA */
.foto-perfil {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

/* BOTÓN */
.btn {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 15px;
  background: #00b894;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.btn:hover {
  background: #019874;
}

/* MODO OSCURO */
.modo {
  margin-top: 10px;
}
</style>