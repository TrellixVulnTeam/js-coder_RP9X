let compras = JSON.parse(localStorage.getItem("compras"));
let IDCompra;
IDCompra = localStorage.getItem("idCompra") || 0;
//Muestro en el DOM la cantidad de productos que hay en el carrito
let cantidadCarrito = document.getElementById("cantidad-carrito");
cantidadCarrito.innerText = `${IDCompra}`;

//Recorre los elementos del array y muestra los productos seleccionados en el documento
let containerBurgerElegidas = document.getElementById("burger-elegidas");
let burgerCarrito = document.createElement("div");
burgerCarrito.className = "eliminar-burger";
if (compras === null) {
  burgerCarrito.innerHTML = `<p>Tu carrito esta vacio</p>`;
  containerBurgerElegidas.append(burgerCarrito);
} else {
  for (const elemento of compras) {
    burgerCarrito = document.createElement("div");
    burgerCarrito.className = "eliminar-burger";
    burgerCarrito.id = `${elemento.idCompra}`;
    burgerCarrito.innerHTML = `
    <p class="valortotal">                     
    ${elemento.hamburguesa}: ${elemento.salsa} - ${elemento.extraCheddar} - ${elemento.extraBacon} - ${elemento.pepinos}. Precio $${elemento.precio}
    </p>
    <button id="delete" onclick="eliminar(${elemento.idCompra})">X</button>`;
    containerBurgerElegidas.append(burgerCarrito);
  }
}

//Recorre los elementos del array y calcula el valor total de la compra
// Muestro el valor total de la compra
let containerValorFinal = document.getElementById("valor-final");
let valorFinal = document.createElement("p");

const eliminar = (idEliminar) => {
  const eliminar = document.getElementById(idEliminar);
  eliminar.remove();
  compras = compras.filter((el) => el.idCompra !== idEliminar);
  localStorage.setItem("compras", JSON.stringify(compras));
  IDCompra--;
  localStorage.setItem("idCompra", IDCompra);
  cantidadCarrito = document.getElementById("cantidad-carrito");
  cantidadCarrito.innerText = `${IDCompra}`;

  if (IDCompra === 0) {
    burgerCarrito.innerHTML = `<p>Tu carrito esta vacio</p>`;
    containerBurgerElegidas.append(burgerCarrito);
  }
  if (compras !== null) {
    const valorTotal = compras.reduce(
      (acumulador, elemento) => acumulador + elemento.precio,
      0
    );
    valorFinal.innerText = "VALOR TOTAL $" + valorTotal;
    containerValorFinal.append(valorFinal);
  }
};

if (compras !== null) {
  const valorTotal = compras.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );
  valorFinal.innerText = "VALOR TOTAL $" + valorTotal;
  containerValorFinal.append(valorFinal);
}

// Agrego input direccion en caso de tener que enviar el pedido
let obtenerPedido = document.getElementById("obtener-pedido");
let enviar = document.getElementById("envio");
let direccion = document.createElement("div");
enviar.onclick = () => {
  direccion.id = "direccion";
  direccion.className = "container-label-input";
  direccion.innerHTML = `<label for="enviar">Direccion</label>
                         <input type="text" id="enviar"  name="direccion" required>`;
  obtenerPedido.append(direccion);
};

let retirar = document.getElementById("retiro");
retirar.onclick = () => {
  direccion.remove();
};
