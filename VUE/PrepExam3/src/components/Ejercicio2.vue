<script setup>
import { ref } from 'vue'

const visible = ref(false)

const toggle = () => {
  visible.value = !visible.value
}
</script>

<template>
  <div class="text-center">

    <button @click="toggle" class="btn btn-primary">
      {{ visible ? 'Ocultar' : 'Mostrar' }}
    </button>

    <p v-if="visible" class="mt-3">
      Este es el contenido oculto
    </p>

  </div>
</template>