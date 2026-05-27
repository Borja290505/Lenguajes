<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';


    const route = useRoute();
    const router = useRouter();

    const poke = ref({});

    const getData = async() => {
        try{
            
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
            poke.value = response.data;

        }catch(error){
            console.log("Error al obtener info de pokemon: ", error );
        }
    }
    const back = () => {
        router.back();
    }

    getData();

</script>

<template>
    <div v-if="poke.name">
        <h1>Poke detalle: {{ route.params.name }}</h1>
        <img :src="poke.sprites.front_default" :alt="poke.name">
        <button class="btn btn-primary" @click="back">Atras</button>
    </div>
</template>