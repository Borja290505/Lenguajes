const numeros = [1, 2, 3, 4, 5]

// 1. Crea un array con los números multiplicados por 2
const dobles = numeros.map((num) => num*2)

// 2. Crea un array con los números elevados al cuadrado
const cuadrados = numeros.map((num)=> num*num)

// 3. Crea un array de strings con formato "Número: X"
const textos = numeros.map((num) => `Numero: ${num}`)

console.log(dobles)    // [2, 4, 6, 8, 10]
console.log(cuadrados) // [1, 4, 9, 16, 25]
console.log(textos)    // ["Número: 1", "Número: 2", ...]