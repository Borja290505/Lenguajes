<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

    
    const pokemones = ref([]);
    const n_pokemones = ref(0);

    const getData = async() => {
        try{

            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
            pokemones.value = response.data.results;
            n_pokemones.value = response.data.count;

        }catch{
            console.log('Error al obtener Pokemones: ', error )
        }
    }
    getData();

</script>

<template>
    <div>
        <h1>Nº de Pokemones: {{ n_pokemones }}</h1>
        <ul>
            <li v-for="poke in pokemones" :key="poke.name">
                <RouterLink :to="`/pokemones/${poke.name}`">
                    {{ poke.name }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>