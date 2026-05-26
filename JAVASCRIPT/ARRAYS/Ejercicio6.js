const numeros = [5, 12, 8, 20, 3, 15, 9]

// 1. Obtén solo los números mayores a 10
const mayoresA10 = numeros.filter((num) => num>10)

// 2. Obtén solo los números pares
const pares = numeros.filter((num)=> num%2==0)

// 3. Obtén solo los números menores a 10
const menoresA10 = numeros.filter((num) => num<10)

console.log(mayoresA10)  // [12, 20, 15]
console.log(pares)       // [12, 8, 20]
console.log(menoresA10)  // [5, 8, 3, 9]