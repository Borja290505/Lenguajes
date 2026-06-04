<script setup>
  import Ejercicio1 from './components/Ejercicio1.vue';
  import Ejercicio2 from './components/Ejercicio2.vue';
  import Ejercicio3 from './components/Ejercicio3.vue';
</script>

<template>
  <Ejercicio1/>
  <Ejercicio2/>
  <Ejercicio3/>
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
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
