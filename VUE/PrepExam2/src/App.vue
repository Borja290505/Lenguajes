<script setup>
import Ejercicio1 from './components/Ejercicio1.vue';
import Ejercicio2 from './components/Ejercicio2.vue';
import Ejercicio3 from './components/Ejercicio3.vue';
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-5"><Ejercicio1/></div>
      <div class="col-12 mb-5"><Ejercicio2/></div>
      <div class="col-12 mb-5"><Ejercicio3/></div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
