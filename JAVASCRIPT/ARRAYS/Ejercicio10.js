const productos = [
  { nombre: "Mouse", precio: 15, stock: true },
  { nombre: "Teclado", precio: 45, stock: true },
  { nombre: "Monitor", precio: 250, stock: false },
  { nombre: "Webcam", precio: 60, stock: true }
]

// 1. Obtén los nombres de productos con stock
const conStock = productos.filter((p)=>p.stock === true).map((p)=> p.nombre)

// 2. Obtén nombres de productos caros (> 40) con stock
const carosConStock = productos.filter((p)=>p.precio>40 && p.stock === true).map((p)=> p.nombre)

// 3. Obtén nombres de todos los productos ordenados por precio (caro primero)
// Hint: primero ordena con sort
const porPrecio = productos.sort((a,b)=> b.precio-a.precio).map((p)=> p.nombre)

console.log(conStock)         // ["Mouse", "Teclado", "Webcam"]
console.log(carosConStock)    // ["Teclado", "Webcam"]