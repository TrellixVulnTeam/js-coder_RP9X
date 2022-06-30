//Recorre los elementos del array y muestra los productos seleccionados en el documento
let containerBurgerElegidas = document.getElementById("burger-elegidas");
let burgerCarrito = document.createElement("div");
burgerCarrito.className = "eliminar-burger";
if (compras.length === 0) {
  burgerCarrito.innerHTML = `<p>Tu carrito esta vacio</p>`;
  containerBurgerElegidas.append(burgerCarrito);
} else {
  for (const elemento of compras) {
    burgerCarrito = document.createElement("div");
    burgerCarrito.className = "eliminar-burger";
    burgerCarrito.innerHTML = `<p class="valortotal">
                               ${elemento.hamburguesa}: ${elemento.salsa} - ${elemento.extraCheddar} - ${elemento.extraBacon} - ${elemento.pepinos}. Precio $${elemento.precio}  </p>
                               <button id="delete">X</button>`;
    containerBurgerElegidas.append(burgerCarrito);
  }
}

//Recorre los elementos del array y calcula el valor total de la compra
// Muestro el valor total de la compra
let containerValorFinal = document.getElementById("valor-final");
const valorTotal = compras.reduce(
  (acumulador, elemento) => acumulador + elemento.precio,
  0
);
let valorFinal = document.createElement("p");
valorFinal.innerText = "VALOR TOTAL $" + valorTotal;
containerValorFinal.append(valorFinal);

// Agrego input direccion en caso de tener que enviar el pedido
let obtenerPedido = document.getElementById("obtener-pedido");
let enviar = document.getElementById("envio");
let direccion = document.createElement("div");
enviar.onclick = () => {
  direccion.setAttribute("id", "direccion");
  direccion.className = "container-label-input";
  direccion.innerHTML = `<label for="enviar">Direccion</label>
                         <input type="text" id="enviar"  name="direccion" required>`;
  obtenerPedido.append(direccion);
};

let retirar = document.getElementById("retiro");
retirar.onclick = () => {
  direccion.remove();
};
