const tareas = [
  { id: 1, titulo: "Comprar pan", completada: true },
  { id: 2, titulo: "Hacer ejercicio", completada: false },
  { id: 3, titulo: "Estudiar", completada: true }
]

// 1. ¿Hay alguna tarea completada?
const hayCompletadas = tareas.some((t)=> t.completada === true)

// 2. ¿Hay alguna tarea no completada?
const hayPendientes = tareas.some((t)=> t.completada === true)

// 3. ¿Hay alguna tarea con id > 5?
const hayIdMayor5 = tareas.some((t)=> t.id > 5)

console.log(hayCompletadas)  // true
console.log(hayPendientes)   // true
console.log(hayIdMayor5)     // false