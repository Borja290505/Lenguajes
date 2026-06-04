<script setup>
import { computed, ref } from 'vue';


const contadorLocal = ref(0);
const contadorVisitante = ref(0);
const arrayLocales = ref([]);
const arrayVisitantes = ref([]);
const mostrarResultado = ref(false);

//Dar puntos a equipos
const incrementar1L = () => contadorLocal.value += 1;
const incrementar2L = () => contadorLocal.value += 2;
const incrementar3L = () => contadorLocal.value += 3;
const incrementar1V = () => contadorVisitante.value += 1;
const incrementar2V = () => contadorVisitante.value += 2;
const incrementar3V = () => contadorVisitante.value += 3;

const añadirResultado = () => {
    arrayLocales.value.push(contadorLocal.value)
    arrayVisitantes.value.push(contadorVisitante.value)
    mostrarResultado.value = true;
    Resetear();
}

const Resetear = () => {
    contadorLocal.value = 0;
    contadorVisitante.value = 0
}

const bloqueoFinal = computed(() => {
    return contadorLocal.value === 0 && contadorVisitante.value === 0;
});

</script>
<template>
    <div class="container-fluid px-4 py-5">
        <div class="row text-center justify-content-center">

            <div class="col-12 mb-4">
                <h1>Borja - Ejercicio 2: Marcador de Baloncesto</h1>
            </div>

            <div class="col-md-5 mt-3">
                <h2>Local</h2>
                <h2 class="mb-3 display-4">{{ contadorLocal }}</h2>
                <div class="d-flex justify-content-center gap-2">
                    <button @click="incrementar1L" class="btn btn-primary">+1</button>
                    <button @click="incrementar2L" class="btn btn-primary">+2</button>
                    <button @click="incrementar3L" class="btn btn-primary">+3</button>
                </div>
            </div>


            <div class="col-md-2 col-6 d-flex align-items-center justify-content-center mt-3">
                <img src="../assets/basketball.png" alt="" class="img-fluid" style="max-height: 120px;">
            </div>

            <div class="col-md-5 mt-3">
                <h2>Visitante</h2>
                <h2 class="mb-3 display-4">{{ contadorVisitante }}</h2>
                <div class="d-flex justify-content-center gap-2">
                    <button @click="incrementar1V" class="btn btn-danger">+1</button>
                    <button @click="incrementar2V" class="btn btn-danger">+2</button>
                    <button @click="incrementar3V" class="btn btn-danger">+3</button>
                </div>
            </div>

            <div class="col-12 mt-4">
                <button @click="Resetear" class="btn btn-warning mx-2">Resetear</button>
                <button @click="añadirResultado" :disabled="bloqueoFinal" class="btn btn-success">Terminar
                    Partido</button>
            </div>

            <div v-if="mostrarResultado" class="mt-4 text-start">
                <h3>Resultador finales</h3>
                <ul class="list-group">
                    <li v-for="(Local, index) in arrayLocales" :key="index" class="list-group-item">
                        Reseultado final: Local: {{ Local }} vs {{ arrayVisitantes[index] }} :Visitante
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>