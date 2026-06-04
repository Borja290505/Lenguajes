<script setup>
import { computed, ref } from 'vue';

    const contador = ref(0)

    const sumar = () => {
        if(contador.value < 10){
            contador.value += 1
        }
    }

    const restar = () => {
        if(contador.value > 0){
            contador.value -= 1
        }
    }

</script>

<template>
    <div class="text-center">
        <h1>Ejercicio 3- Borja Ros Perez</h1>
        <h2>{{ contador }}</h2>
        <button class="btn btn-success m-3" @click="sumar">Sumar</button>
        <button class="btn btn-danger m-3" @click="restar">Restar</button>

        <div v-if="contador===10 || contador === 0" class="text-danger">
            LIMITE ALCANZADO
        </div>
    </div>
</template>