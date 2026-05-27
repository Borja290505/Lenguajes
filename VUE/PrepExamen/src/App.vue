<script setup>
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import ProductCard from './components/ProductCard.vue';
import CarritoResumen from './components/CarritoResumen.vue';
import FiltroBusqueda from './components/FiltroBusqueda.vue';

  const productos = ref([])
  const error = ref(null)
  const cargando = ref(true)
  const busqueda = ref('')
  const categoriaSelect = ref('')
  const carrito = ref([])

  const categorias = computed(() =>{
    return [...new Set(productos.value.map(p => p.category))]
  })

  const productosFiltrados = computed(()=>{
    return productos.value
      .filter(p => p.title.toLowerCase().includes(busqueda.value.toLocaleLowerCase()))
      .filter(p => categoriaSelect.value ? p.category === categoriaSelect : true)
  })

  const cargarProductos = async () =>{
    try{
      const response = await axios.get('https://fakestoreapi.com/products/')
      productos.value = response.data;
    }catch(error){
      error.value = 'Error al cargar los productos'
    }finally{
      cargando.value = false
    }
  }

  const añadirAlCarrito = (producto) => {
    const yaExiste = carrito.value.some(p => p.id === producto.id)
    if(!yaExiste){
      carrito.value = [...carrito.value,producto]
    }
  }

  const vaciarCarrito = () => {
    carrito.value = []
  }

  onMounted(() =>{
    cargarProductos()
  })

</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">🛒 TechShop</h1>

    <CarritoResumen
      :carrito="carrito"
      @vaciar="vaciarCarrito"
    />

    <FiltroBusqueda
      v-model:busqueda="busqueda"
      v-model:categoria="categoriaSelect"
      :categorias="categorias"
    />

    

    <!--Muestra texto mientras carga la info-->
  <div v-if="cargando" class="text-center my-5">
    <div class="text-primary"></div>
    <p class="mt-2">Cargando productos...</p>
  </div>

  <div v-else class="row row-cols-1 row-cols-md-3 g-4 mt-2">
    <div v-for="producto in productosFiltrados" :key="producto.id" class="col">
      <ProductCard
        :titulo="producto.title"
        :precio="producto.price"
        :imagen="producto.image"
        :categoria="producto.category"
        @añadir="añadirAlCarrito(producto)"
      />
    </div>

  </div>
  <div v-show="cargando" class="text-center text-muted my-5">
    No se encontraron productos
  </div>
  </div> 
</template>

<style scoped></style>
