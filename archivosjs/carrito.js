//Variables donde obtengo el array de las compras y el total de burger que hay en el carrito
let compras = JSON.parse(localStorage.getItem("compras")) || [];
let IDCompra = localStorage.getItem("idCompra") || 0;

//Muestro en el DOM la cantidad de productos que hay en el carrito
let cantidadCarrito = document.getElementById("cantidad-carrito");
cantidadCarrito.innerText = `${IDCompra}`;
//Variable que hace referencia al boton enviar pedido
let botonEnviarPedido = document.getElementById("btn-enviar-pedido");
//Funcion que modifico el DOM en caso de que el carrito este vacio
carritoVacio = () => {
  burgerCarrito.innerHTML = `<p>Tu carrito esta vacio</p>`;
  botonEnviarPedido.remove();
  containerBurgerElegidas.append(burgerCarrito);
};

//Variables que hacen referencia a las etiquetas donde tengo que mostrar el las burgers elegidas
let containerBurgerElegidas = document.getElementById("burger-elegidas");
let burgerCarrito = document.createElement("div");
burgerCarrito.className = "eliminar-burger";

if (compras.length === 0) {
  carritoVacio();
} else {
  //Recorre los elementos del array y muestra los productos seleccionados en el documento
  for (const elemento of compras) {
    burgerCarrito = document.createElement("div");
    burgerCarrito.className = "resumen-burger-a-comprar";
    burgerCarrito.id = `${elemento.idCompra}`;
    burgerCarrito.innerHTML = `
    <div class="container-burgerTamaño-botonDelete">
    <p class="burger-tamaño">
    ${elemento.hamburguesa}: ${elemento.medallones}
    </p>
    <button id="delete" onclick="eliminar(${elemento.idCompra})">X</button>
    </div>
    <p class="resumen-contenido">                     
    ${elemento.salsa} - ${elemento.extraCheddar} - ${elemento.extraBacon} - ${elemento.pepinos}. 
    <label class="precio-burger">Valor $${elemento.precio}</label>
    </p>`;
    containerBurgerElegidas.append(burgerCarrito);
  }
}

//Variables que hacen referencia a las etiquetas donde tengo que mostrar el valor total
let containerValorFinal = document.getElementById("valor-final");
let valorFinal = document.createElement("p");
let resumenPedido = document.getElementById("resumen-pedido");
let valorFinalResumen = document.createElement("p");
valorFinalResumen.className = "valor-total";

//Funcion calcular VALOR TOTAL
let valorTotal;
const calcularValorTotal = () => {
  valorTotal = compras.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );
  valorFinal.innerText = "VALOR TOTAL $" + valorTotal;
  containerValorFinal.append(valorFinal);
  valorFinalResumen.innerText = "VALOR TOTAL $" + valorTotal;
  resumenPedido.append(valorFinalResumen);
};

//Calculo el valor total cuando entro a la seccion carrito
calcularValorTotal();

//Funcion eliminar elemento del carrito
const eliminar = (idEliminar) => {
  const eliminar = document.getElementById(idEliminar);
  eliminar.remove();
  compras = compras.filter((el) => el.idCompra !== idEliminar);
  localStorage.setItem("compras", JSON.stringify(compras));
  IDCompra--;
  localStorage.setItem("idCompra", IDCompra);
  cantidadCarrito = document.getElementById("cantidad-carrito");
  cantidadCarrito.innerText = `${IDCompra}`;

  if (compras.length === 0) {
    carritoVacio();
  }
  //Calculo el valor total cuando elimino una burger
  calcularValorTotal();
};

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

//Variables donde guardo los datos del formulario
let nombrePedido;
let aclaracionesPedido;
let direccionPedido;
let metodoPago;

//Obtengo los datos del formulario y los guardo para enviarlos
formulario.onsubmit = (e) => {
  let miFormulario = e.target;
  e.preventDefault();
  nombrePedido = miFormulario.children[0].children[1].value;
  localStorage.setItem("NombrePedido", nombrePedido);
  aclaracionesPedido = miFormulario.children[1].children[1].value;
  localStorage.setItem("AclaracionesPedido", aclaracionesPedido);
  if (miFormulario.children[2].children[1].children[0].checked === true) {
    direccionPedido = miFormulario.children[2].children[3].children[1].value;
    localStorage.setItem("DireccionPedido", direccionPedido);
  }
  if (miFormulario.children[3].children[1].children[0].checked === true) {
    metodoPago = "Efectivo";
  } else {
    metodoPago = "Mercado Pago";
  }
  localStorage.setItem("MetodoPago", metodoPago);
  localStorage.setItem("ValorPedido", valorTotal);
  Toastify({
    text: "TU PEDIDO FUE ENVIADO",
    duration: 2000,
    className: "confirmacion",
  }).showToast();
  setTimeout(() => {
    location.href = "./resumenPedido.html";
    //window.open("https://wa.me/+542241584323?text=Nombre del pedido:");
  }, 2000);
};
