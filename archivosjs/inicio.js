const abiertoCerrado = document.getElementById("section-abierto-cerrado");
const mostrarAbiertoCerrado = document.getElementById("abierto-cerrado");

const DateTime = luxon.DateTime;
const dt = DateTime.now();
const diaSemana = dt.weekday;
if (diaSemana >= 4) {
  mostrarAbiertoCerrado.className = "abierto";
  mostrarAbiertoCerrado.innerText = "ABIERTO";
} else {
  mostrarAbiertoCerrado.className = "cerrado";
  mostrarAbiertoCerrado.innerText = "CERRADO";
}

const cantidadCarrito = Number(localStorage.getItem("idCompra")) || 0;
const mostrarCantidad = document.getElementById("cantidad-carrito");

mostrarCantidad.innerText = `${cantidadCarrito}`;
