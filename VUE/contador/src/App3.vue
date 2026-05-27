<script setup>
    const nombre = "vue 3"
    const arrayFrutas = ["🍇", "🍉", "🍐", "🍎", "🍒", "🫐"]
    const descargaFrutas = [
        {
        name: "Manzana",
        price: "1.00€",
        description: "Manzana Golden",
        stock: 67
        },
    
        {
        name: "Pera",
        price: "2.00€",
        description: "Pera Conferencia",
        stock: 5
        },

        {
        name: "Naranja",
        price: "3.00€",
        description: "Naranja de valencia",
        stock: 6
        }

    ]
    const freson = {
        name: "Freson",
        price: "2.00€",
        description: "Freson de palos",
        stock: 19
    }

    const uva = {
        name: "Uva",
        price: "0.80€",
        description: "Uva de dani",
        stock: 30
    }
</script>

<template>

    <h1>Hola</h1>
    <hr>
    <h3>Directivas v-for</h3>
    <p>{{ arrayFrutas }}</p>

    <!--Info de la contante uva-->
    <ul>
        <li v-for="(fruta,index) in uva" :key="index">
            {{ index }} - {{ fruta }}
        </li>
    </ul>

    <!--Info recorriendo un array-->
    <ul>
        <li v-for="(fruta,index) in descargaFrutas" :key="index">
            {{index}}-{{ fruta.name }}-{{ fruta.price }}-{{fruta.stock}}-{{ fruta.description }}
        </li>
    </ul>

    <!-- Recorrido de un objeto mostrando valor, clave e índice -->
    <ul>
        <li v-for="(val,ap,ind) in freson">
            {{ ind }} - {{ ap }} - {{ val }}
        </li>
    </ul>

</template>