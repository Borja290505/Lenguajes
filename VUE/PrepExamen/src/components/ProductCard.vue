<script setup>
    defineProps({
        titulo: {type: String, required: true},
        precio: {type: Number, required: true},
        imagen: {type: String, required: true},
        categoria: {type: String, required: true}
    })

    defineEmits(['añadir'])

</script>

<template>
  <div class="card h-100">

    <img :src="imagen" 
      class="card-img-top p-3" 
      style="height: 200px; object-fit: contain;">

    <div class="card-body d-flex flex-column">

      <span class="bg-secondary mb-2 text-center">{{ categoria }}</span>

      <h5 class="card-title">{{ titulo }}</h5>
      <p class="card-text fw-bold mt-auto">{{ precio }}€</p>
      <button class="btn btn-primary" @click="$emit('añadir')">
        Añadir al carrito
      </button>
  </div>
</div>
</template>