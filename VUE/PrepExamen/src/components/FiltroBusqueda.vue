<script setup>
    defineProps({
        busqueda: {type: String, required: true},
        categoria: {type: String, required: true},
        categorias: {type: Array, required: true}
    })

    defineEmits(['update:busqueda','update:categoria'])
</script>
<template>

    <div class="row g-3 mb-4">
        <div class="col-md-8">
            <input 
                type="text"
                class="form-control"
                placeholder="Buscar producto"
                :value="busqueda"
                @input="$emit('update:busqueda',$event.target.value)"
            />
        </div>
        <div class="col-md-4">
            <select
                type="text"
                class="form-select"
                :value="categoria"
                @change="$emit('update:categoria',$event.target.value)"
            >

            <option value="">Todas las categorias</option>
            <option v-for="cat in categorias" :key="cat" :value="cat">{{ cat }}</option>

            </select>
        </div>
    </div>

</template>