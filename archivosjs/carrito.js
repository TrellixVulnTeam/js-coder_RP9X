//Constructor
class Burger {
  constructor(rtaTitle, rtaMedallones, id) {
    this.hamburguesa = rtaTitle;
    this.medallones = rtaMedallones;
    this.id = id;
    this.salsa = "Sin salsa";
    this.extraCheddar = "Sin Extra Cheddar";
    this.extraBacon = "Sin Extra Bacon";
    this.pepinos = "Sin pepinos";
    this.precio = 0;
  }
  adereso(rtaAderezo) {
    if (rtaAderezo == "SI") {
      this.salsa = "Con salsa";
    } else {
      this.salsa = "Sin salsa";
    }
  }
  cheddar(rtaExtraCheddar) {
    if (rtaExtraCheddar == "SI") {
      this.extraCheddar = "Con Extra Cheddar";
      this.precio += 100;
    } else {
      this.extraCheddar = "Sin Extra Cheddar";
    }
  }
  precioMedallones(rtaMedallones) {
    if (rtaMedallones === 1) {
      this.precio += 700;
    } else if (rtaMedallones === 2) {
      this.precio += 800;
    } else if (rtaMedallones === 3) {
      this.precio += 900;
    }
  }
  pepino(rtaPepinos) {
    if (rtaPepinos == "SI") {
      this.pepinos = "Con Pepinos";
      this.precio += 50;
    } else {
      this.pepinos = "Sin Pepinos";
    }
  }
  bacon(rtaExtraBacon) {
    if (rtaExtraBacon == "SI") {
      this.extraBacon = "Con Extra Bacon";
      this.precio += 100;
    } else {
      this.extraBacon = "Sin Extra Bacon";
    }
  }
}

//Funcion para agrregar los objetos al array

function pedidoBurger(
  rtaTitle,
  rtaMedallones,
  id,
  rtaAderezo,
  rtaExtraCheddar,
  rtaPepinos,
  rtaExtraBacon
) {
  let pedido = new Burger(rtaTitle, rtaMedallones, id);
  pedido.precioMedallones(rtaMedallones);
  pedido.adereso(rtaAderezo);
  pedido.cheddar(rtaExtraCheddar);
  pedido.pepino(rtaPepinos);
  pedido.bacon(rtaExtraBacon);
  carrito.push(pedido);
}

//Funcion de los prompt

function burgerInput() {
  rtaMedallones = Number(prompt("Ingrese la cantidad de medallones"));
  rtaAderezo = prompt(
    "Ingrese (Si) en caso de querer salsa\nIngrese (No) en caso de no querer salsa"
  ).toUpperCase();
  rtaExtraCheddar = prompt(
    "Ingrese (Si) en caso de querer EXTRA CHEDDAR\nIngrese (No) En caso de no querer EXTRA CHEDDAR"
  ).toUpperCase();
}

//Array de los productos comprados
const carrito = [];

// Variables
let rtaTitle;
let rtaMedallones;
let rtaAderezo;
let rtaExtraCheddar;
let rtaPepinos;
let rtaExtraBacon;
let id = 0;

//While para elegir hamburguesa y sus agregados
while (true) {
  id++;
  let pedido = Number(
    prompt(
      "Selecciona tu hamburguesa\n Ingresa 1: Para seleccionar CheeseBurger\n Ingresa 2: Para seleccionar BaconCheeseBurger\n Ingresa -1: Para salir"
    )
  );
  if (pedido == 1) {
    rtaTitle = "CheeseBurger";
    rtaExtraBacon = "NO";
    burgerInput();
    rtaPepinos = prompt(
      "Ingrese (Si) en caso de querer PEPINOS\nIngrese (No) en caso de no querer PEPINOS"
    ).toUpperCase();
    pedidoBurger(
      rtaTitle,
      rtaMedallones,
      id,
      rtaAderezo,
      rtaExtraCheddar,
      rtaPepinos,
      rtaExtraBacon
    );
  } else if (pedido == 2) {
    rtaTitle = "BaconCheeseBurger";
    rtaPepinos = "NO";
    burgerInput();
    rtaExtraBacon = prompt(
      "Ingrese (Si) en caso de querer EXTRA BACON\nIngrese (No) en caso de no querer EXTRA BACON"
    ).toUpperCase();
    pedidoBurger(
      rtaTitle,
      rtaMedallones,
      id,
      rtaAderezo,
      rtaExtraCheddar,
      rtaPepinos,
      rtaExtraBacon
    );
  } else {
    break;
  }
}

//Recorre los elementos del array y muestra los productos seleccionados en el documento
let containerBurgerElegidas = document.getElementById("burger-elegidas");
let burgerCarrito = document.createElement("div");
burgerCarrito.className = "eliminar-burger";
if (carrito.length === 0) {
  burgerCarrito.innerHTML = `<p>Tu carrito esta vacio</p>`;
  containerBurgerElegidas.append(burgerCarrito);
} else {
  for (const elemento of carrito) {
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
const valorTotal = carrito.reduce(
  (acumulador, elemento) => acumulador + elemento.precio,
  0
);
let valorFinal = document.createElement("p");
valorFinal.innerText = "VALOR TOTAL $" + valorTotal;
containerValorFinal.append(valorFinal);

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
