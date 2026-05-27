<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import PeliCard from './components/PeliCard.vue';
import ListaFavoritos from './components/ListaFavoritos.vue';
import FiltroBusqueda from './components/FiltroBusqueda.vue';

  const peliculas = ref([])
  const favoritos = ref([])
  const busqueda = ref('')
  const puntuacionMinima = ref('')
  const cargando = ref(true)
  const error = ref(null)


  const cargarPeliculas = async () => {
    try{
      const response = await axios.get('https://api.tvmaze.com/shows')
      peliculas.value = response.data;
    }catch(error){
      error.value = "Error al cargar los productos"
    }finally{
      cargando.value=false
    }
  }

  const peliculasFiltradas = computed(()=>{
    return peliculas.value
      .filter(p => p.name && p.name.toLowerCase().includes(busqueda.value.toLowerCase()))
      .filter(p =>{
        if(!puntuacionMinima.value) return true
        return p.rating?.average >= Number(puntuacionMinima.value)
      })
  })

  const añadirFavorito = (pelicula) =>{
    const yaExiste = favoritos.value.some(p => p.id === pelicula.id)
    if(!yaExiste){
      favoritos.value = [...favoritos.value,pelicula]
    }
  }

  const eliminarFavorito = (pelicula) => {
    favoritos.value = favoritos.value.filter(p => p.id !== pelicula.id)
  }

  onMounted(()=>{
    cargarPeliculas()
  })

</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">🎬 CineApp</h1>
    <div class="row">

      <!--Columna peliculas-->
      <div class="col-md-9">

        <FiltroBusqueda
        v-model:busqueda="busqueda"
        v-model:puntuacion="puntuacionMinima"
      />

        <div v-if="cargando" class="text-center my-5">
          <p class="mt-2">Cargando peliculas...</p>
        </div>

        <div v-if="error" class="alert alert-danger">
          {{ error }}
        </div>

        <div v-else class="row row-cols-1 row-cols-1 row-cols-md-3 g-4">
          <div v-for="peli in peliculasFiltradas" :key="peli.id" class="col">
            <PeliCard
              :nombre="peli.name"
              :image="peli.image?.medium"
              :puntuacion="peli.rating?.average"
              @añadir="añadirFavorito(peli)"
            />
          </div>
        </div>

        <div v-show="!cargando && peliculasFiltradas.length === 0" class="text-center my-5">
          No se encontraron peliculas
        </div>
      </div>

      <!--Panel de favoritos-->
      <div class="col-md-3">
        <ListaFavoritos
          :favoritos="favoritos"
          @eliminar="eliminarFavorito"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
