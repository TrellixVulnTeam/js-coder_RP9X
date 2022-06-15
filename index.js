//Constructor
class Burger {
  constructor(title, medallones) {
    this.title = title;
    this.medallones = medallones;
    this.salsa = "Sin salsa";
    this.extraCheddar = "Sin Extra Cheddar";
    this.extraBacon = "Sin Extra Bacon";
    this.precio = 0;
  }
  adereso(params) {
    if (params == "SI") {
      this.salsa = "Con salsa";
    } else {
      this.salsa = "Sin salsa";
    }
  }
  cheddar(params) {
    if (params == "SI") {
      this.extraCheddar = "Con Extra Cheddar";
      this.precio += 100;
    } else {
      this.extraCheddar = "Sin Extra Cheddar";
    }
  }
  precioMedallones(params) {
    if (params === 1) {
      this.precio += 700;
    } else if (params === 2) {
      this.precio += 800;
    } else if (params === 3) {
      this.precio += 900;
    }
  }
  pepinos(params) {
    if (params == "SI") {
      this.extraPepinos = "Con Pepinos";
      this.precio += 50;
    } else {
      this.extraPepinos = "Sin Pepinos";
    }
  }
  bacon(params) {
    if (params == "SI") {
      this.extraBacon = "Con Extra Bacon";
      this.precio += 100;
    } else {
      this.extraBacon = "Sin Extra Bacon";
    }
  }
}

//Funcion para agrregar los objetos al array

function pedidoBurger(title, medallones, salsa, cheddar, pepinos, bacon) {
  let pedido = new Burger(title, medallones);
  pedido.precioMedallones(medallones);
  pedido.adereso(salsa);
  pedido.cheddar(cheddar);
  pedido.pepinos(pepinos);
  pedido.bacon(bacon);
  carrito.push(pedido);
}

//Funcion de los prompt

function burgerInput() {
  inputMedallones = Number(prompt("Ingrese la cantidad de medallones"));
  inputSalsa = prompt(
    "Ingrese (Si) en caso de querer salsa\nIngrese (No) en caso de no querer salsa"
  ).toUpperCase();
  inputCheddar = prompt(
    "Ingrese (Si) en caso de querer EXTRA CHEDDAR\nIngrese (No) En caso de no querer EXTRA CHEDDAR"
  ).toUpperCase();
}

//Array de los productos comprados
const carrito = [];

// Variables
let inputMedallones;
let inputSalsa;
let inputCheddar;
let inputPepinos = "NO";
let inputBacon = "NO";
let inputTitle;

//While para elegir hamburguesa y sus agregados
while (true) {
  let pedido = Number(
    prompt(
      "Selecciona tu hamburguesa\n Ingresa 1: Para seleccionar CheeseBurger\n Ingresa 2: Para seleccionar BaconCheeseBurger\n Ingresa -1: Para salir"
    )
  );
  if (pedido == 1) {
    inputTitle = "CheeseBurger";
    inputBacon = "NO";
    burgerInput();
    inputPepinos = prompt(
      "Ingrese (Si) en caso de querer PEPINOS\nIngrese (No) en caso de no querer PEPINOS"
    ).toUpperCase();
    pedidoBurger(
      inputTitle,
      inputMedallones,
      inputSalsa,
      inputCheddar,
      inputPepinos,
      inputBacon
    );
  } else if (pedido == 2) {
    inputTitle = "BaconCheeseBurger";
    inputPepinos = "NO";
    burgerInput();
    inputBacon = prompt(
      "Ingrese (Si) en caso de querer EXTRA BACON\nIngrese (No) en caso de no querer EXTRA BACON"
    ).toUpperCase();
    pedidoBurger(
      inputTitle,
      inputMedallones,
      inputSalsa,
      inputCheddar,
      inputPepinos,
      inputBacon
    );
  } else {
    break;
  }
}

//Recorre los elementos del array y muestra la informacion en el documento
carrito.forEach((elemento) => {
  document.write(
    `Nombre: ${elemento.title} </br> Precio: $${elemento.precio}</br><br>`
  );
  console.log(elemento);
});

const valorTotal = carrito.reduce(
  (acumulador, elemento) => acumulador + elemento.precio,
  0
);
document.write(`El valor total de tu compra es: $${valorTotal}`);
