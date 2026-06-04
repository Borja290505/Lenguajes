<script setup>
import { ref } from 'vue'
const compras = ref([
    { id: 1, nombre: 'Pan', comprado: false },
    { id: 2, nombre: 'Leche', comprado: true },
    { id: 3, nombre: 'Huevos', comprado: false }
])

const estado = (id) => {
    const item = compras.value.find(c => c.id === id)
    if (item) {
        item.comprado = !item.comprado
    }
}

</script>

<template>
    <div class="container mt-4">
        <h1 class="text-center mb-3">Ejercicio 3 - Borja Ros Perez</h1>
        <h2 class="text-center mb-3">LISTA DE LA COMPRA</h2>
        <ul class="list-group ">
            <li v-for="compra in compras" :key="compra.id" class="list-group-item d-flex justify-content-between align-items-center" :class="{'text-decoration':compra.comprado}">
                {{ compra.nombre }}

                <button @click="estado(compra.id)" :class="['btn', 'btn-sm', compra.comprado ? 'btn-success' : 'btn-warning']">
                    {{ compra.comprado ? 'Comprado' : 'Pendiente' }}
                </button>
            </li>
        </ul>
    </div>

</template>

<style>
    .text-decoration{
        text-decoration: line-through;
    }
</style>