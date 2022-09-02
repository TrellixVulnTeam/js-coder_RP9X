//Variables donde obtengo el array de las compras y el total de burger que hay en el carrito
let compras = JSON.parse(localStorage.getItem("compras")) || [];
let IDCompra = Number(localStorage.getItem("idCompra")) || 0;
console.log(compras);

//Muestro en el DOM la cantidad de productos que hay en el carrito
let cantidadCarritoDesktop = document.getElementById("cantidad-carritoD");
let cantidadCarritoMobile = document.getElementById("cantidad-carritoM");
cantidadCarritoDesktop.innerText = `${IDCompra}`;
cantidadCarritoMobile.innerText = `${IDCompra}`;
//Variable que hace referencia al boton enviar pedido
let botonEnviarPedido = document.getElementById("btn-enviar-pedido");
//Funcion que modifico el DOM en caso de que el carrito este vacio
carritoVacio = () => {
  burgerCarrito.innerHTML = `<p>Tu carrito esta vacio</p>`;
  botonEnviarPedido.remove();
  containerBurgerElegidas.append(burgerCarrito);
};

//Verificar agregados
let contenidoDOM = "";
const verificarAgregadosDOM = (elemento) => {
  if (elemento.salsa != "Con salsa") {
    contenidoDOM = contenidoDOM + elemento.salsa + "  ";
  }
  if (elemento.extraCheddar != "Sin extra cheddar") {
    contenidoDOM = contenidoDOM + elemento.extraCheddar + "  ";
  }
  if (elemento.extraBacon != "Sin extra bacon") {
    contenidoDOM = contenidoDOM + elemento.extraBacon + "  ";
  }
  if (elemento.pepinos != "Sin pepinos" && elemento.hamburguesa != "BIG MC") {
    contenidoDOM = contenidoDOM + elemento.pepinos + "  ";
  }
  if (elemento.hamburguesa == "BIG MC") {
    if (
      elemento.salsa == "Con salsa" &&
      elemento.extraCheddar == "Sin extra cheddar" &&
      elemento.extraBacon == "Sin extra bacon" &&
      elemento.pepinos == "Con pepinos"
    ) {
      contenidoDOM = "Clasica";
    } else if (elemento.pepinos == "Sin pepinos") {
      contenidoDOM = contenidoDOM + elemento.pepinos + " ";
    }
  } else if (elemento.hamburguesa != "BIG MC") {
    if (
      elemento.salsa == "Con salsa" &&
      elemento.extraCheddar == "Sin extra cheddar" &&
      elemento.extraBacon == "Sin extra bacon" &&
      elemento.pepinos == "Sin pepinos"
    ) {
      contenidoDOM = "Clasica";
    }
  }
};

//Variables que hacen referencia a las etiquetas donde tengo que mostrar el las burgers elegidas
let containerBurgerElegidas = document.getElementById("burger-elegidas");
let burgerCarrito = document.createElement("div");
if (compras.length === 0) {
  carritoVacio();
} else {
  //Recorre los elementos del array y muestra los productos seleccionados en el documento
  for (const elemento of compras) {
    verificarAgregadosDOM(elemento);
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
        <p class="resumen-contenido">${contenidoDOM}. 
        <span class="precio-burger">Valor $${elemento.precio}</span></p>
      `;
    containerBurgerElegidas.append(burgerCarrito);
    contenidoDOM = " ";
  }
}

//Variables que hacen referencia a las etiquetas donde tengo que mostrar el valor total
let valorFinal = document.getElementById("valor-final");

//Funcion calcular VALOR TOTAL
let valorTotal;
const calcularValorTotal = () => {
  valorTotal = compras.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );
  valorFinal.innerText = "VALOR TOTAL $" + valorTotal;
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
  cantidadCarritoDesktop.innerText = `${IDCompra}`;
  cantidadCarritoMobile.innerText = `${IDCompra}`;

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
  direccion.innerHTML = `
    <label for="enviar">Direccion</label>
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
let retiroLocal;
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
  } else {
    retiroLocal = "Retiro por el local";
  }
  miFormulario.children[3].children[1].children[0].checked === true
    ? (metodoPago = "Efectivo")
    : (metodoPago = "Mercado Pago");
  localStorage.setItem("MetodoPago", metodoPago);
  localStorage.setItem("ValorPedido", valorTotal);

  let replicaCart = [];
  const salto = "%0A";
  let hamburguesa;
  let precio;

  compras.forEach((element) => {
    verificarAgregadosDOM(element);
    hamburguesa = ` ${element.hamburguesa} (${element.medallones}): `;
    precio = element.precio;
    replicaCart.push(
      `${hamburguesa} ${contenidoDOM} ${salto}*Valor: $${precio}* ${salto}${salto}`
    );
    contenidoDOM = " ";
  });

  let mostrarComoObtener;
  if (retiroLocal == "Retiro por el local") {
    mostrarComoObtener = `*Como lo obtengo:* ${retiroLocal}`;
  } else if (direccionPedido != null) {
    mostrarComoObtener = `*Direccion:* ${direccionPedido}`;
  }

  let url = `https://api.whatsapp.com/send?phone=xxxxxxxx&text=*Nombre del pedido:* ${nombrePedido} %0A%0A *Aclaraciones:* ${aclaracionesPedido} %0A%0A ${mostrarComoObtener} %0A%0A *Metodo de pago:* ${metodoPago} %0A%0A *Detalles del pedido:* %0A%0A ${replicaCart.join(
    " "
  )} %0A%0A *Valor total: $${valorTotal}*`;
  window.open(url);

  Toastify({
    text: "TU PEDIDO FUE ENVIADO",
    duration: 2000,
    className: "confirmacion",
  }).showToast();
  setTimeout(() => {
    location.href = "./resumenPedido.html";
  }, 2000);
};
