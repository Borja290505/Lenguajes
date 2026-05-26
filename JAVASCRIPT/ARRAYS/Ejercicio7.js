const alumnos = [
  { nombre: "Javi", nota: 8 },
  { nombre: "Alberto", nota: 5 },
  { nombre: "Quiles", nota: 9 },
  { nombre: "Hector", nota: 4 }
]

// 1. Obtén solo los aprobados (nota >= 5)
const aprobados = alumnos.filter((a)=> a.nota>=5)

// 2. Obtén solo los que tienen nota mayor a 7
const sobresalientes = alumnos.filter((a)=> a.nota>7)

// 3. Obtén solo los que tienen nota menor a 5
const suspendidos = alumnos.filter((a)=> a.nota<5)

console.log(aprobados)        // 3 alumnos
console.log(sobresalientes)   // Javi y Quiles
console.log(suspendidos)      // Solo Hector