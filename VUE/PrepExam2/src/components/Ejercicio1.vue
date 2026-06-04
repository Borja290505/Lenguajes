<script setup>
const productos = [
    {
        imagen: 'https://picsum.photos/300/200',
        nombre: 'Portátil',
        precio: 800,
        boton: 'Comprar'
    },
    {
        imagen: 'https://picsum.photos/300/200',
        nombre: 'Ratón'
    },
    {
        imagen: 'https://picsum.photos/300/200',
        nombre: 'Teclado',
        precio: 50,
        boton: 'Ver más'
    }
]
</script>

<template>
    <div class="container my-4">
        <div class="row justify-content-center g-4">
            <h1>Ejercicio 1- Borja Ros Perez</h1>
            <div v-for="(p, index) in productos" :key="index" class="col-md-4">
                <div class="card text-center h-100">
                    <img :src="p.imagen" class="card-img-top" alt="Producto">

                    <div class="card-body d-flex flex-column justify-content-between">
                        <h5 class="card-title">{{ p.nombre }}</h5>

                        <p v-if="p.precio" class="card-text fw-bold">{{ p.precio }} €</p>
                        <p v-else class="card-text text-muted">Precio no disponible</p>

                        <div class="mt-auto">
                            <button v-if="p.boton" class="btn btn-primary w-100">
                                {{ p.boton }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
