let nombrePedido = localStorage.getItem("NombrePedido");

let aclaracionesPedido =
  localStorage.getItem("AclaracionesPedido") || "No hay aclaraciones";

let direccionPedido =
  localStorage.getItem("DireccionPedido") || "Retiro por el local";

let metodoPago = localStorage.getItem("MetodoPago");

let hamburguesasPedido = JSON.parse(localStorage.getItem("compras"));

let containerDatosPedido = document.getElementById("datos-pedido");

let valorPedido = localStorage.getItem("ValorPedido");

datosPedido = document.createElement("div");
datosPedido.innerHTML = `
  <h3>Nombre del pedido:</h3>
  <h4>${nombrePedido}</h4>
  <h3>Aclaraciones</h3>
  <p>${aclaracionesPedido}</p>
  <h3>Direccion:</h3>
  <p>${direccionPedido}</p>
  <h3>Metodo de pago:</h3>
  <p>${metodoPago}</p>
  <h3>Valor total:</h3>
  <p>$${valorPedido}</p>
`;
containerDatosPedido.append(datosPedido);

let resumenHamburguesasPedido = document.getElementById(
  "resumen-hamburguesas-pedido"
);
for (const elemento of hamburguesasPedido) {
  resumenCompra = document.createElement("div");
  resumenCompra.innerHTML = `
    <p>
    ${elemento.hamburguesa}: ${elemento.medallones}
    </p>
    <p>                     
    ${elemento.salsa} - ${elemento.extraCheddar} - ${elemento.extraBacon} - ${elemento.pepinos}. 
    </p>`;
  resumenHamburguesasPedido.append(resumenCompra);
}

let volverAlMenu = document.getElementById("hacer-nuevo-pedido");

volverAlMenu.onclick = () => {
  localStorage.clear();
};
