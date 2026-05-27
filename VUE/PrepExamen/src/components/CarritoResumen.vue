<script setup>
import { computed } from 'vue';

const props = defineProps({
    carrito: {type: Array, require: true}
})

//Botones
defineEmits(['vaciar'])

//Total del carrito
const total = computed(()=>{
    return props.carrito.reduce((tcarrito, p) => tcarrito + p.price,0)
})
</script>

<template>
    <div class="card mb-4 border-primary">
        <div class="card-body d-flex justify-content-between align-items-center">
            <div>
                <h5 class="mb-0">
                    Carrito 
                    <span class="badge bg-primary ms-2">{{ carrito.length }}</span>
                </h5>
                <p class="mb-0" v-if="carrito.length > 0">
                    Total: <strong>{{ total }}€</strong>
                </p>
                <p class="mb-0" v-else>El carrito esta vacio</p>
            </div>
            <button
            class="btn btn-outline-danger btn-sm"
            :disabled="carrito.length===0"
            @click="$emit('vaciar')"
            >
            Vaciar Carrito
            </button>
        </div>
    </div>

</template>