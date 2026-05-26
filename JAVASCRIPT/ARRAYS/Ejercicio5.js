const personas = [
  { nombre: "Ana", edad: 28 },
  { nombre: "Carlos", edad: 35 },
  { nombre: "María", edad: 22 }
]

// 1. Extrae solo los nombres
const nombres = personas.map((persona) => persona.nombre)

// 2. Crea un array con los años de nacimiento (usa edad y resta de 2024)
const anoNacimiento = personas.map((persona)=> 2024-persona.edad)

// 3. Crea un array de objetos con nombre y esAdulto (edad >= 18)
const conEstado = personas.map((persona)=>({
    nombre: persona.nombre,
    esAdulto: persona.edad >= 18
}))

console.log(nombres)      // ["Ana", "Carlos", "María"]
console.log(anoNacimiento) // [1996, 1989, 2002]
console.log(conEstado)    // [{ nombre: "Ana", esAdulto: true }, ...]