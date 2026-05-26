const productos = [
  { id: 1, nombre: "Laptop", categoria: "electrónica", precio: 1200, vendidos: 5 },
  { id: 2, nombre: "Mouse", categoria: "accesorios", precio: 25, vendidos: 120 },
  { id: 3, nombre: "Monitor", categoria: "electrónica", precio: 300, vendidos: 12 },
  { id: 4, nombre: "Teclado", categoria: "accesorios", precio: 80, vendidos: 45 },
  { id: 5, nombre: "Cable USB", categoria: "accesorios", precio: 5, vendidos: 300 }
]

// 1. Obtén los nombres de productos de la categoría "accesorios"
const accesorios = productos.filter((p)=> p.categoria==="accesorios").map((p)=> p.nombre)

// 2. Obtén productos que hayan vendido más de 50 unidades
const bestsellers = productos.filter((p)=> p.vendidos>50).map((p)=> ({nombre: p.nombre, vendidos: p.vendidos}))


// 3. Calcula el ingreso total (precio * vendidos)
const ingresoTotal = productos.reduce((suma,p)=> suma + (p.precio*p.vendidos),0)

// 4. Obtén el producto más vendido
const masCaro = productos.find((p)=> p.vendidos === Math.max(...productos.map(x => x.vendidos)))

// 5. Crea un resumen: "Hay X productos, con ingreso totasumal de $Y"
const resumen = () => {
  return `Hay ${productos.length} productos, con ingreso total de $${ingresoTotal}`
}

console.log(accesorios)   // ["Mouse", "Teclado", "Cable USB"]
console.log(bestsellers)  // Productos vendidos > 50
console.log(ingresoTotal) // 77,625
console.log(masCaro)      // { id: 2, nombre: "Mouse", ... }
console.log(resumen())