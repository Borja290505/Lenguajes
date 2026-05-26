const carrito = [
  { producto: "Mouse", precio: 15 },
  { producto: "Teclado", precio: 45 }
]

// 1. Añade un monitor al final
carrito.push({producto:"Monitor", precio:250})

// 2. Elimina el último elemento
carrito.pop()

// 3. Añade una webcam al principio
carrito.unshift({producto:"Webcam",precio: 60})

// 4. Elimina el primer elemento
carrito.shift()

// Muestra el array final
console.log(carrito)