<template>
  <div class="jp-matrix">
    <span v-for="n in 500" :key="n">
      {{ Math.random() > 0.5 ? '1' : '0' }}
    </span>
  </div>
</template>