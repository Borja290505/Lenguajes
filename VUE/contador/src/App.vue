<script setup>
import { computed, ref } from 'vue';

  //Definimos la variable
  const contador = ref(0)
  const favoritos = ref([])
  const ClaseContador = computed(() =>{
    if(contador.value===0){
      return 'zero'
    }
    return contador.value > 0 ? 'verde' : 'rojo'
  })

  //Definimos el boton de incrementar
  const incrementar = () => {
    contador.value++
  }

  //Definimos el boton de disminuir
  const disminuir = () => {
    contador.value--
  }

  //Definimos el valor de resetear
  const resetear = () => {
    contador.value = 0
  }

  //Añadir a favoritos
  const favorito = () => {
    if(!favoritos.value.includes(contador.value)){
      favoritos.value.push(contador.value)
    }
    
  }
</script>

<template>
  <div class="container">
    <h1>Contador Interactivo</h1>
    <h2 :class="ClaseContador">{{ contador }}</h2>

    <!--Botones-->
    <div class="mt-3">
      <button class="btn btn-success me-2" @click="incrementar">
        incrementar
      </button>
      <button class="btn btn-danger me-2" @click="disminuir">
        disminuir
      </button>
      <button class="btn btn-secondary me-2" @click="resetear">
        resetear
      </button>
      <button class="btn btn-primary me-2" @click="favorito">
        favorito
      </button>
    </div>

    <!--Lista de favoritos-->
    <ul>
      <li v-for="(favorito,index) in favoritos" :key="index">
        {{ favorito }}
      </li>
    </ul>
  </div>
</template>

<!--Color del contador-->
<style>
  .rojo{
    color: red;
  }
  .verde{
    color: green;
  }
  .zero{
    color: yellow;
  }
</style>