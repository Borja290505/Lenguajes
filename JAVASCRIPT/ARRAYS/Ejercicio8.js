const usuarios = [
  { id: 1, nombre: "Ana", ciudad: "Madrid" },
  { id: 2, nombre: "Carlos", ciudad: "Barcelona" },
  { id: 3, nombre: "María", ciudad: "Valencia" }
]

// 1. Busca el usuario con id 2
const usuario2 = usuarios.find((u)=> u.id === 2)

// 2. Busca el usuario llamado "María"
const maria = usuarios.find((u)=> u.nombre=== "María")

// 3. Busca un usuario de Barcelona
const barcelonés = usuarios.find((u)=> u.ciudad === "Barcelona")

console.log(usuario2)    // { id: 2, nombre: "Carlos", ciudad: "Barcelona" }
console.log(maria)       // { id: 3, nombre: "María", ciudad: "Valencia" }
console.log(barcelonés)  // { id: 2, nombre: "Carlos", ciudad: "Barcelona" }