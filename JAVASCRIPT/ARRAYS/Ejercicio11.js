const ordenes = [
  { id: 1, cliente: "Ana", total: 150, estado: "entregada" },
  { id: 2, cliente: "Carlos", total: 80, estado: "pendiente" },
  { id: 3, cliente: "María", total: 320, estado: "entregada" },
  { id: 4, cliente: "Luis", total: 45, estado: "cancelada" },
  { id: 5, cliente: "Sofia", total: 200, estado: "entregada" }
]

// 1. Obtén el nombre de clientes con órdenes entregadas
const clientesEntregadas = ordenes.filter((o)=> o.estado === "entregada").map((o)=> o.cliente)

// 2. Obtén el total de dinero en órdenes entregadas (usa reduce)
const ingresoTotal = ordenes.filter((o)=> o.estado === "entregada").reduce((suma,o)=> suma + o.total,0)

// 3. ¿Hay alguna orden pendiente?
const hayPendientes = ordenes.some((o)=> o.estado==="pendiente")

// 4. Obtén las órdenes de valor mayor a 100, solo entregadas
const ordenesFuertes = ordenes.filter((o)=> o.estado==="entragada"&&o.total>100).map((o)=> o.id)

console.log(clientesEntregadas) // ["Ana", "María", "Sofia"]
console.log(ingresoTotal)       // 670
console.log(hayPendientes)      // true