<script setup>
    defineProps({
        favoritos: {type: Array, required:true}
    })
    defineEmits(['eliminar'])
</script>

<template>

    <div class=" card border-danger">
        <div class="card-header bg-danger text-white">
            ❤️ Favoritos ({{ favoritos.length }})
        </div>

        <div class="card-body p-2">
            <p v-if="favoritos.length === 0" class="text-center mt-2">
                No hay favoritos aun
            </p>
            <ul v-else class="list-group list-group-flush">
                <li v-for="fav in favoritos" :key="fav.id"
                    class="list-group-item d-flex justify-content-between aling-items-center">
                    <span>{{ fav.name }}</span>
                    <button class="btn btn-outline-danger" @click="$emit('eliminar',fav)">
                        X
                    </button>
                </li>
            </ul>
        </div>
    </div>

</template>