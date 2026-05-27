<script setup>
    defineProps({
    busqueda: { type: String, required: true },
    puntuacion: { type: String, required: true }
    })
    defineEmits(['update:busqueda', 'update:puntuacion'])

</script>
<template>
    <div class="row g-3 mb-4">
        <div class="col-md-8">
            <input type="text"
            class="form-control"
            placeholder="Buscar pelicula..."
            :value="busqueda"
            @input="$emit('update:busqueda',$event.target.value)"
            />
        </div>
        <div class="col-md-4">
            <select
                class="form-select"
                :value="puntuacion"
                @change="$emit('update:puntuacion', $event.target.value)"
            >
            <option value="">Todas</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="9">9+</option>

            </select>
        </div>
    </div>
</template>