const cantidadCarrito = Number(localStorage.getItem("idCompra")) || 0;
const mostrarCantidadDesktop = document.getElementById("cantidad-carritoD");
const mostrarCantidadMobile = document.getElementById("cantidad-carritoM");

mostrarCantidadDesktop.innerText = `${cantidadCarrito}`;
mostrarCantidadMobile.innerText = `${cantidadCarrito}`;
