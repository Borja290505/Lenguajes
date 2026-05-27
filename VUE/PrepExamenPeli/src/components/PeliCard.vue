<script setup>
    defineProps({
        nombre: {type: String, required: true},
        image: {type: String, required: true},
        puntuacion: {type: Number, required: true}
        })
    defineEmits(['añadir'])
</script>
<template>
  <div class="card h-100">
    <img 
      :src="image" 
      class="card-img-top" 
      style="height: 300px; object-fit: cover;"
      :alt="nombre"
    />
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between aling-items-start mb-2">
        <h6 class="card-title mb-0">{{ nombre }}</h6>
        <span v-if="puntuacion>7" class="badge bg-warning text-dark">
          Mejor Valorados
        </span>
      </div>
      <p class="card-text">⭐ {{ puntuacion }}</p>
      <button
        class="btn btn-outline-danger mt-auto"
        @click="$emit('añadir')">
          ❤️ Favorito
      </button>
    </div>
  </div>
</template>