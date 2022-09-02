let nombrePedido = localStorage.getItem("NombrePedido");

let aclaracionesPedido =
  localStorage.getItem("AclaracionesPedido") || "No hay aclaraciones";

let direccionPedido =
  localStorage.getItem("DireccionPedido") || "Retiro por el local";

let metodoPago = localStorage.getItem("MetodoPago");

let hamburguesasPedido = JSON.parse(localStorage.getItem("compras"));

let containerDatosPedido = document.getElementById("datos-pedido");

let valorPedido = localStorage.getItem("ValorPedido");

let contenidoDOM = "";
const verificarAgregadosDOM = (elemento) => {
  if (elemento.salsa != "Con salsa") {
    contenidoDOM = contenidoDOM + "(S.S)" + "  ";
  }
  if (elemento.extraCheddar != "Sin extra cheddar") {
    contenidoDOM = contenidoDOM + "(E.Ch)" + " ";
  }
  if (elemento.extraBacon != "Sin extra bacon") {
    contenidoDOM = contenidoDOM + "(E.B)" + "  ";
  }
  if (elemento.pepinos != "Sin pepinos" && elemento.hamburguesa != "BIG MC") {
    contenidoDOM = contenidoDOM + "(P)" + " ";
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
      contenidoDOM = contenidoDOM + "(S.P)" + " ";
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

let mostrarNombre = document.getElementById("nombre-pedido");
mostrarNombre.innerText = ` ${nombrePedido || " "}`;

let fechaYhora = document.getElementById("fecha-hora");

let obtenerFyH = new Date().toLocaleString();
let fyh = obtenerFyH.split(" ");
fechaYhora.innerText = `Fecha: ${fyh[0]} Hora: ${fyh[1]}`;

hamburguesasPedido.forEach((elemento) => {
  verificarAgregadosDOM(elemento);
  let datosPedido = document.createElement("tr");
  datosPedido.className = "fila-body";
  datosPedido.innerHTML = ` 
  <td class="cuerpo nombre">${elemento.hamburguesa}</td>
  <td class="cuerpo contenido">${contenidoDOM}</td>
  <td class="cuerpo precio">$${elemento.precio}</td>`;
  containerDatosPedido.append(datosPedido);
  contenidoDOM = " ";
});

let valorFinal = document.getElementById("valor-final");

let valorTotal = hamburguesasPedido.reduce(
  (acumulador, elemento) => acumulador + elemento.precio,
  0
);
valorFinal.innerText = "VALOR TOTAL: $" + valorTotal;

let volverAlMenu = document.getElementById("nuevo-pedido");
volverAlMenu.onclick = () => {
  localStorage.clear();
};

const btnImprimir = document.getElementById("imprimir");
const contenedorBtn = document.getElementById("contenedor-botones");
const imprimir = () => {
  contenedorBtn.remove();
  window.print();
};

btnImprimir.onclick = () => {
  imprimir();
};
