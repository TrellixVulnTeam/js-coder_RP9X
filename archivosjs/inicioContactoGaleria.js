const cantidadCarrito = localStorage.getItem("idCompra") || 0;
const mostrarCantidad = document.getElementById("cantidad-carrito");

mostrarCantidad.innerText = `${cantidadCarrito}`;