<script setup>
import { computed, ref } from 'vue';


const productos = [
    { id: 1, nombre: 'Portátil', precio: 800, categoria: 'tecnologia' },
    { id: 2, nombre: 'Camiseta', precio: 20, categoria: 'ropa' },
    { id: 3, nombre: 'Teclado', precio: 50, categoria: 'tecnologia' },
    { id: 4, nombre: 'Pantalón', precio: 35, categoria: 'ropa' }
]

const buscador = ref('Todos');

const buscados = computed(() => {
    if (buscador.value === 'Todos') return productos
    return productos.filter(p => p.categoria === buscador.value)
})

</script>

<template>
    <div class="container">
        <h1 class="mb-3">Ejercicio 1- Borja Ros Perez</h1>
        <select v-model="buscador" class="form-select mb-3">
            <option value="Todos">Todos</option>
            <option value="ropa">Ropa</option>
            <option value="tecnologia">Tecnologia</option>
        </select>

        <div class="row">
            <div v-for="producto in buscados" :key="producto.id" class="col-md-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">{{ producto.nombre }}</h5>
                    <span class="fw-bold text-warning">{{ producto.precio }} €</span>
                </div>
            </div>
        </div>
    </div>
</template>