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
const mostrarCantidadDesktop = document.getElementById("cantidad-carritoD");
const mostrarCantidadMobile = document.getElementById("cantidad-carritoM");

mostrarCantidadDesktop.innerText = `${cantidadCarrito}`;
mostrarCantidadMobile.innerText = `${cantidadCarrito}`;
