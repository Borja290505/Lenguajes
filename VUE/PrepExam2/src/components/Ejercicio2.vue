<script setup>
import { computed, ref } from 'vue';

    const contadorLocal = ref(0);
    const contadorVisitante = ref(0);

    const incrementar1L = () => contadorLocal.value += 1
    const incrementar5L = () => contadorLocal.value += 5
    const incrementar1V = () => contadorVisitante.value += 1
    const incrementar5V = () => contadorVisitante.value += 5

    const historialLocal = ref([]);
    const historialVisitante = ref([]);

    const finalizar = () => {
        historialLocal.value.push(contadorLocal.value);
        historialVisitante.value.push(contadorVisitante.value)

        contadorLocal.value=0;
        contadorVisitante.value=0;
    }

    const bloqueo = computed(() => {
        return contadorLocal.value===0 && contadorVisitante.value===0
    })
</script>

<template>
    <div class="container py-4 text-center">
        <div>
            <h1>Ejercicio 2- Borja Ros Perez</h1>
            <div class="row">
                <div class="col">
                <h3 class="text-danger">LOCAL: {{ contadorLocal }}</h3>
                <button @click="incrementar1L" class="btn btn-primary m-2 p-2">+1</button>
                <button @click="incrementar5L" class="btn btn-primary m-2 p-2">+5</button>

                <h3 class="text-danger">VISITANTE: {{ contadorVisitante }}</h3>
                <button @click="incrementar1V" class="btn btn-primary m-2 p-2">+1</button>
                <button @click="incrementar5V" class="btn btn-primary m-2 p-2">+5</button>
            </div>
            </div>
            <div class="container">
                <button @click="finalizar" :disabled="bloqueo" class="btn btn-success p-3">FINALIZAR</button>
                <ul class="list-group m-2">
                    <li v-for="(equipoLocal, index) in historialLocal" :key="index" class="list-group-item">
                        {{ equipoLocal }} -- {{ historialVisitante[index] }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>