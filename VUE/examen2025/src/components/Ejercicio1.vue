<script setup>
const servicios = [
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Diseño Web',
        descripcion: 'Creamos sitios web modernos y adaptativos.',
        texto_boton: 'Solicitar'
    },
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Mantenimiento',
    },
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Posicionamiento SEO',
        descripcion: 'Mejoramos la visibilidad en buscadores.',
        texto_boton: 'Más info'
    },
    {
        imagen_url: 'https://picsum.photos/300/200',
        titulo: 'Consultoría',
    }
]

</script>

<template>
    <div class="container-fluid px-4">
        <div class="row justify-content-center g-4">
            <div class="col-12">
                <h1 class="text-center mb-4">Borja - Ejercicio 1: Servicios</h1>
            </div>
            <div v-for="(servicio, index) in servicios" :key="index" class="col-md-6 col-lg-3 col-12">
                <div class="card h-100">  <!-- 👈 quita el max-width: 220px y el w-100 -->
                    <img :src="servicio.imagen_url" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">{{ servicio.titulo }}</h5>
                        <p v-if="servicio.descripcion" class="card-text">{{ servicio.descripcion }}</p>
                        <button v-if="servicio.texto_boton" class="btn btn-primary">{{ servicio.texto_boton }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>