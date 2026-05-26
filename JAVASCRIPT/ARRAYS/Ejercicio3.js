const colores = ["rojo", "azul", "verde", "amarillo"]

// 1. Usa forEach para mostrar cada color
colores.forEach((color) => {
  console.log(color)
})

// 2. Usa forEach con índice para mostrar "Posición: color"
colores.forEach((color, indice) => {
  console.log(`Posicion ${indice}:${color}`)
})

