// Constructor de burger que hay en el menu
class GenerarBurger {
  constructor(nombre, contenido, precioSimple, url, id) {
    this.nombre = nombre;
    this.contenido = contenido;
    this.precioSimple = precioSimple;
    this.url = url;
    this.id = id;
  }
}

const burgerGeneradas = [];

const ObtenerBurgers = async () => {
  console.log("aca");
  const resp = await fetch("../public/data.json");
  const data = await resp.json();
  data.forEach((el) => {
    burgerGeneradas.push(
      new GenerarBurger(el.nombre, el.contenido, el.precioSimple, el.url, el.id)
    );
  });
  probando();
};

// Muestro en el DOM las burger que hay en el menu
let contenedorCards = document.getElementById("container-hamburguesas-menu");
const probando = () => {
  burgerGeneradas.forEach((elemento) => {
    let card = document.createElement(`div`);
    card.className = "container-card";
    card.innerHTML = `<img src="${elemento.url}" class="card-img-top ">
                      <div class="card-body">
                      <h3 class="titulo-card text-center">
                      ${elemento.nombre} </h3>
                      <p class="card-text">${elemento.contenido}</p>
                      <p class="card-text">Desde $${elemento.precioSimple} </p>
                      <button class="btn btn-outline-dark w-100" onclick="ver(${elemento.id})">Ver opciones</button>
                      `;
    contenedorCards.append(card);
  });
};

// Creo las variables de precios de extras
// Creo las variables que van a recibir las respuestas del usuario
let idCompra;
idCompra = localStorage.getItem("idCompra") || 0;
let pedido;
let precio = 0;
let rtaTitle;
let rtaMedallones;
let rtaAderezo;
let rtaExtraCheddar;
let rtaPepinos;
let rtaExtraBacon;
const PrecioExtraCheddar = 100;
const PrecioExtraBacon = 100;
const PrecioPepinos = 50;
//Muestro en el DOM la cantidad de productos que hay en el carrito
let cantidadCarrito = document.getElementById("cantidad-carrito");
cantidadCarrito.innerText = `${idCompra}`;

//Funciones que me generan las cardSeleccionadas en el DOM
const crearCheeseCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <img src="${burgerGeneradas[id].url}" class="card-img-top " alt="Cheeseburger">
  <div class="card-body">
    <h4 class="card-title text-center">${burgerGeneradas[id].nombre}</h4>
    <p class="card-text border-bottom pb-3"> ${burgerGeneradas[id].contenido}</p>
    <form class="container-inputs" id="formulario">
    <input id="tipo" type="hidden" name="tipo" value="0" />
    <div>
      <select class="form-select mt-3 mb-3" aria-label="Default select example" id="selection">
        <option value="Simple">Simple</option>
        <option value="Doble">Doble</option>
        <option value="Triple">Triple</option>
      </select>
        <div class="form-check ">
          <input class="form-check-input" type="checkbox" value="Sin salsa" id="salsa">
          <label class="form-check-label" for="salsa">
            Sin salsa
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Extra cheddar" id="cheddar" >
          <label class="form-check-label" for="cheddar">
            Extra cheddar
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Con pepinos" id="pepinos" >
          <label class="form-check-label" for="pepinos">
            Con pepinos
          </label>
        </div>
    </div>
    <div class="mt-3">
      <div class="container-valor-cantidad">
        <p id="precio"> valor $${burgerGeneradas[id].precioSimple}</p>
        <div class="container-number">
          <label class="p-2" for="contador">
            Cantidad
          </label>
          <input type="number" class="input-number text-center" id="contador" name="cantidad">
        </div>
      </div>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100">
    </div>
  </div>
  </form>
  <div class="container-enlaces-rapidos">
    <a href="menu.html" class="btn btn-outline-dark botones-menu-carrito">VOLVER AL MENU</a>
    <a href="carrito.html" class="btn btn-outline-dark botones-menu-carrito">IR AL CARRITO</a>
</div>
`;
  seleccionada.append(div);
};

const crearBaconCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <img src="${burgerGeneradas[id].url}" class="card-img-top " alt="Bacon Cheeseburger">
  <div class="card-body">
    <h4 class="card-title text-center">${burgerGeneradas[id].nombre}</h4>
    <p class="card-text border-bottom pb-3"> ${burgerGeneradas[id].contenido}</p>
    <form class="container-inputs" id="formulario">
    <input id="tipo" type="hidden" name="tipo" value="1" />
    <div>
      <select class="form-select mt-3 mb-3" aria-label="Default select example" id="selection">
        <option value="Simple">Simple</option>
        <option value="Doble">Doble</option>
        <option value="Triple">Triple</option>
      </select>
        <div class="form-check ">
          <input class="form-check-input" type="checkbox" value="Sin salsa" id="salsa">
          <label class="form-check-label" for="salsa">
            Sin salsa
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Extra cheddar" id="cheddar" >
          <label class="form-check-label" for="cheddar">
            Extra cheddar
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
          <label class="form-check-label" for="bacon">
            Extra bacon
          </label>
        </div>
    </div>
    <div class="mt-3">
      <div class="container-valor-cantidad">
        <p id="precio"> valor $${burgerGeneradas[id].precioSimple}</p>
        <div class="container-number">
          <label class="p-2" for="contador">
            Cantidad
          </label>
          <input type="number" class="input-number text-center" id="contador" name="cantidad">
        </div>
      </div>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100">
    </div>
  </div>
  </form>
  <div class="container-enlaces-rapidos">
    <a href="menu.html" class="btn btn-outline-dark botones-menu-carrito">VOLVER AL MENU</a>
    <a href="carrito.html" class="btn btn-outline-dark botones-menu-carrito">IR AL CARRITO</a>
</div>
`;
  seleccionada.append(div);
};

const crearRoyaleCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <img src="${burgerGeneradas[id].url}" class="card-img-top " alt="Royale">
  <div class="card-body">
    <h4 class="card-title text-center">${burgerGeneradas[id].nombre}</h4>
    <p class="card-text border-bottom pb-3"> ${burgerGeneradas[id].contenido}</p>
    <form class="container-inputs" id="formulario">
    <input id="tipo" type="hidden" name="tipo" value="2" />
    <div>
      <select class="form-select mt-3 mb-3" aria-label="Default select example" id="selection">
        <option value="Simple">Simple</option>
        <option value="Doble">Doble</option>
        <option value="Triple">Triple</option>
      </select>
        <div class="form-check ">
          <input class="form-check-input" type="checkbox" value="Sin salsa" id="salsa">
          <label class="form-check-label" for="salsa">
            Sin salsa
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Extra cheddar" id="cheddar" >
          <label class="form-check-label" for="cheddar">
            Extra cheddar
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
          <label class="form-check-label" for="bacon">
            Extra bacon
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="Con pepinos" id="pepinos" >
          <label class="form-check-label" for="pepinos">
            Con pepinos
          </label>
        </div>
    </div>
    <div class="mt-3">
      <div class="container-valor-cantidad">
        <p id="precio"> valor $${burgerGeneradas[id].precioSimple}</p>
        <div class="container-number">
          <label class="p-2" for="contador">
            Cantidad
          </label>
          <input type="number" class="input-number text-center" id="contador" name="cantidad">
        </div>
      </div>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100">
    </div>
  </div>
  </form>
  <div class="container-enlaces-rapidos">
    <a href="menu.html" class="btn btn-outline-dark botones-menu-carrito">VOLVER AL MENU</a>
    <a href="carrito.html" class="btn btn-outline-dark botones-menu-carrito">IR AL CARRITO</a>
</div>
`;
  seleccionada.append(div);
};

const crearBigMcCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
    <img src="${burgerGeneradas[id].url}" class="card-img-top " alt="BigMc">
    <div class="card-body">
      <h4 class="card-title text-center">${burgerGeneradas[id].nombre}</h4>
      <p class="card-text border-bottom pb-3"> ${burgerGeneradas[id].contenido}</p>
      <form class="container-inputs" id="formulario">
      <input id="tipo" type="hidden" name="tipo" value="3" />
      <div>
        <select class="form-select mt-3 mb-3" aria-label="Default select example" id="selection">
          <option value="Simple">Simple</option>
          <option value="Doble">Doble</option>
          <option value="Triple">Triple</option>
        </select>
          <div class="form-check ">
            <input class="form-check-input" type="checkbox" value="Sin salsa" id="salsa">
            <label class="form-check-label" for="salsa">
              Sin salsa
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Extra cheddar" id="cheddar" >
            <label class="form-check-label" for="cheddar">
              Extra cheddar
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
            <label class="form-check-label" for="bacon">
              Extra bacon
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Sin pepinos" id="pepinos" >
            <label class="form-check-label" for="pepinos">
              Sin pepinos
            </label>
          </div>
      </div>
      <div class="mt-3">
        <div class="container-valor-cantidad">
          <p id="precio"> valor $${burgerGeneradas[id].precioSimple}</p>
          <div class="container-number">
            <label class="p-2" for="contador">
              Cantidad
            </label>
            <input type="number" class="input-number text-center" id="contador" name="cantidad">
          </div>
        </div>
        <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100">
      </div>
    </div>
    </form>
    <div class="container-enlaces-rapidos">
      <a href="menu.html" class="btn btn-outline-dark botones-menu-carrito">VOLVER AL MENU</a>
      <a href="carrito.html" class="btn btn-outline-dark botones-menu-carrito">IR AL CARRITO</a>
  </div>
  `;
  seleccionada.append(div);
};

const crearOnionCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
    <img src="${burgerGeneradas[id].url}" class="card-img-top " alt="Fried Onion">
    <div class="card-body">
      <h4 class="card-title text-center">${burgerGeneradas[id].nombre}</h4>
      <p class="card-text border-bottom pb-3"> ${burgerGeneradas[id].contenido}</p>
      <form class="container-inputs" id="formulario">
      <input id="tipo" type="hidden" name="tipo" value="4" />
      <div>
        <select class="form-select mt-3 mb-3" aria-label="Default select example" id="selection">
          <option value="Simple">Simple</option>
          <option value="Doble">Doble</option>
          <option value="Triple">Triple</option>
        </select>
          <div class="form-check ">
            <input class="form-check-input" type="checkbox" value="Sin salsa" id="salsa">
            <label class="form-check-label" for="salsa">
              Sin salsa
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Extra cheddar" id="cheddar" >
            <label class="form-check-label" for="cheddar">
              Extra cheddar
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
            <label class="form-check-label" for="bacon">
              Extra bacon
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Con pepinos" id="pepinos" >
            <label class="form-check-label" for="pepinos">
              Con pepinos
            </label>
          </div>
      </div>
      <div class="mt-3">
        <div class="container-valor-cantidad">
          <p id="precio"> valor $${burgerGeneradas[id].precioSimple}</p>
          <div class="container-number">
            <label class="p-2" for="contador">
              Cantidad
            </label>
            <input type="number" class="input-number text-center" id="contador" name="cantidad">
          </div>
        </div>
        <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100">
      </div>
    </div>
    </form>
    <div class="container-enlaces-rapidos">
      <a href="menu.html" class="btn btn-outline-dark botones-menu-carrito">VOLVER AL MENU</a>
      <a href="carrito.html" class="btn btn-outline-dark botones-menu-carrito">IR AL CARRITO</a>
  </div>
  `;
  seleccionada.append(div);
};

//Funciones para mostrar en el DOM las opciones de la burger que quiere ver el usuario
//Funcion del evento onclick
const ver = (id) => {
  contenedorCards.remove();
  let tituloSeccion = document.getElementById("titulo-seccion");
  tituloSeccion.innerText = "HAMBURGUESA SELECCIONADA";
  let seleccionada = document.getElementById("cardSeleccionada");
  id === 0
    ? crearCheeseCard(id, seleccionada)
    : id === 1
    ? crearBaconCard(id, seleccionada)
    : id === 2
    ? crearRoyaleCard(id, seleccionada)
    : id === 3
    ? crearBigMcCard(id, seleccionada)
    : crearOnionCard(id, seleccionada);

  //Variables que van a referenciar los inputs checkbox
  let selection = document.getElementById("selection");
  let salsa = document.getElementById("salsa");
  let cheddar = document.getElementById("cheddar");
  let bacon = document.getElementById("bacon");
  let pepino = document.getElementById("pepinos");
  let precioBurger = document.getElementById("precio");

  // Funciones obtener los valores de los inputs seleccionados y modificar el precio del DOM de la card (hamburguesa)
  const inputsCheese = () => {
    selection.onchange = () => {
      let simple = selection.options[0].selected;
      let doble = selection.options[1].selected;
      let triple = selection.options[2].selected;
      precio = 0;
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
      }
      if (pepino.checked) {
        precio += PrecioPepinos;
      }
      if (simple === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (triple === true) {
        precio += 900;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };

    cheddar.onclick = () => {
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
    pepino.onclick = () => {
      if (pepino.checked) {
        precio += PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
  };

  const inputsBacon = () => {
    selection.onchange = () => {
      let simple = selection.options[0].selected;
      let doble = selection.options[1].selected;
      let triple = selection.options[2].selected;
      precio = 0;
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
      }
      if (bacon.checked) {
        precio += PrecioExtraBacon;
      }
      if (simple === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (selection.options[2].selected === true) {
        precio += 900;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };

    cheddar.onclick = () => {
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
    bacon.onclick = () => {
      if (bacon.checked) {
        precio += PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
  };

  const inputsRoyaleAndOnion = () => {
    selection.onchange = () => {
      let simple = selection.options[0].selected;
      let doble = selection.options[1].selected;
      let triple = selection.options[2].selected;
      precio = 0;
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
      }
      if (bacon.checked) {
        precio += PrecioExtraBacon;
      }
      if (pepino.checked) {
        precio += PrecioPepinos;
      }
      if (simple === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (triple === true) {
        precio += 900;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };

    cheddar.onclick = () => {
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
    pepino.onclick = () => {
      if (pepino.checked) {
        precio += PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
    bacon.onclick = () => {
      if (bacon.checked) {
        precio += PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
  };

  const inputsBigMc = () => {
    selection.onchange = () => {
      let simple = selection.options[0].selected;
      let doble = selection.options[1].selected;
      let triple = selection.options[2].selected;
      precio = 0;
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
      }
      if (bacon.checked) {
        precio += PrecioExtraBacon;
      }
      if (pepino.checked) {
        precio += PrecioPepinos;
      }
      if (simple === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (triple === true) {
        precio += 900;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };

    cheddar.onclick = () => {
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
    pepino.onclick = () => {
      if (pepino.checked) {
        precio -= PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
    bacon.onclick = () => {
      if (bacon.checked) {
        precio += PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
  };
  //En caso de que primero seleccione un checkbox
  if (selection.options[0].selected === true) {
    precio += 700;
  }
  // Logica obtener los valores de los inputs seleccionados y modificar el precio del DOM de la card (hamburguesa)
  id === 0
    ? inputsCheese()
    : id === 1
    ? inputsBacon()
    : id === 2 || id === 4
    ? inputsRoyaleAndOnion()
    : inputsBigMc();

  //Logica para guardar las respuestas del usuario y agregar las burger al carrito
  formulario.onsubmit = (e) => {
    let miFormulario = e.target;
    e.preventDefault();
    idCompra++;
    localStorage.setItem("idCompra", idCompra);
    //Muestro en el DOM la cantidad de productos que hay en el carrito
    cantidadCarrito = document.getElementById("cantidad-carrito");
    cantidadCarrito.innerText = `${idCompra}`;
    rtaTitle = burgerGeneradas[id].nombre;
    //Funciones obteniendo submit
    const añadirCheese = () => {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      salsa.checked
        ? (rtaAderezo = miFormulario.children[1].children[1].children[0].value)
        : (rtaAderezo = "Con salsa");
      cheddar.checked
        ? (rtaExtraCheddar =
            miFormulario.children[1].children[2].children[0].value)
        : (rtaExtraCheddar = "Sin Extra Cheddar");
      pepino.checked
        ? (rtaPepinos = miFormulario.children[1].children[3].children[0].value)
        : (rtaPepinos = "Sin Pepinos");
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
      Toastify({
        text: "TU HAMBURGUESA FUE AGREGADA AL CARRITO",
        duration: 3000,
        className: "confirmacion",
      }).showToast();
    };

    const añadirBacon = () => {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      salsa.checked
        ? (rtaAderezo = miFormulario.children[1].children[1].children[0].value)
        : (rtaAderezo = "Con salsa");
      cheddar.checked
        ? (rtaExtraCheddar =
            miFormulario.children[1].children[2].children[0].value)
        : (rtaExtraCheddar = "Sin Extra Cheddar");
      bacon.checked
        ? (rtaExtraBacon =
            miFormulario.children[1].children[3].children[0].value)
        : (rtaExtraBacon = "Sin Extra Bacon");
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
      Toastify({
        text: "TU HAMBURGUESA FUE AGREGADA AL CARRITO",
        duration: 3000,
        className: "confirmacion",
      }).showToast();
    };

    const añadirRoyaleAndOnion = () => {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      salsa.checked
        ? (rtaAderezo = miFormulario.children[1].children[1].children[0].value)
        : (rtaAderezo = "Con salsa");
      cheddar.checked
        ? (rtaExtraCheddar =
            miFormulario.children[1].children[2].children[0].value)
        : (rtaExtraCheddar = "Sin Extra Cheddar");
      bacon.checked
        ? (rtaExtraBacon =
            miFormulario.children[1].children[3].children[0].value)
        : (rtaExtraBacon = "Sin Extra Bacon");
      pepino.checked
        ? (rtaPepinos = miFormulario.children[1].children[4].children[0].value)
        : (rtaPepinos = "Sin Pepinos");
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
      Toastify({
        text: "TU HAMBURGUESA FUE AGREGADA AL CARRITO",
        duration: 3000,
        className: "confirmacion",
      }).showToast();
    };

    const añadirBigMc = () => {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      salsa.checked
        ? (rtaAderezo = miFormulario.children[1].children[1].children[0].value)
        : (rtaAderezo = "Con salsa");
      cheddar.checked
        ? (rtaExtraCheddar =
            miFormulario.children[1].children[2].children[0].value)
        : (rtaExtraCheddar = "Sin Extra Cheddar");
      bacon.checked
        ? (rtaExtraBacon =
            miFormulario.children[1].children[3].children[0].value)
        : (rtaExtraBacon = "Sin Extra Bacon");
      pepino.checked
        ? (rtaPepinos = miFormulario.children[1].children[4].children[0].value)
        : (rtaPepinos = "Con pepinos");
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
      Toastify({
        text: "TU HAMBURGUESA FUE AGREGADA AL CARRITO",
        duration: 3000,
        className: "confirmacion",
      }).showToast();
    };

    //Obtengo resultados de la cheese
    Number(miFormulario.tipo.value) === 0
      ? añadirCheese()
      : Number(miFormulario.tipo.value) === 1
      ? añadirBacon()
      : Number(miFormulario.tipo.value) === 2 ||
        Number(miFormulario.tipo.value) === 4
      ? añadirRoyaleAndOnion()
      : Number(miFormulario.tipo.value) === 3;
    añadirBigMc();
  };
};

//Array de los productos comprados
let carrito;
carrito = JSON.parse(localStorage.getItem("compras")) || [];
console.log(carrito);

//Constructor para guardar la burger y los agregados que quiere el usuario
class BurgerAñadida {
  constructor(
    rtaTitle,
    rtaMedallones,
    idCompra,
    rtaAderezo,
    rtaExtraCheddar,
    rtaPepinos,
    rtaExtraBacon
  ) {
    this.hamburguesa = rtaTitle;
    this.medallones = rtaMedallones;
    this.idCompra = idCompra;
    this.salsa = rtaAderezo;
    this.extraCheddar = rtaExtraCheddar;
    this.pepinos = rtaPepinos;
    this.extraBacon = rtaExtraBacon;
    this.precio = 0;
  }
  adereso(rtaAderezo) {
    if (rtaAderezo == "Sin salsa") {
      this.salsa = "Sin salsa";
    } else {
      this.salsa = "Con salsa";
    }
  }
  cheddar(rtaExtraCheddar) {
    if (rtaExtraCheddar == "Extra cheddar") {
      this.extraCheddar = "Con Extra Cheddar";
      this.precio += PrecioExtraCheddar;
    } else {
      this.extraCheddar = "Sin Extra Cheddar";
    }
  }
  precioMedallones(rtaMedallones) {
    if (rtaMedallones === "Simple") {
      this.precio += 700;
    } else if (rtaMedallones === "Doble") {
      this.precio += 800;
    } else if (rtaMedallones === "Triple") {
      this.precio += 900;
    }
  }
  pepino(rtaPepinos) {
    if (rtaPepinos == "Con pepinos") {
      this.pepinos = "Con Pepinos";
      if (rtaTitle != "BIG MC") {
        this.precio += PrecioPepinos;
      }
    } else {
      if (rtaTitle == "BIG MC") {
        this.precio -= PrecioPepinos;
      }
      this.pepinos = "Sin Pepinos";
    }
  }
  bacon(rtaExtraBacon) {
    if (rtaExtraBacon == "Extra bacon") {
      this.extraBacon = "Con Extra Bacon";
      this.precio += PrecioExtraBacon;
    } else {
      this.extraBacon = "Sin Extra Bacon";
    }
  }
}
ObtenerBurgers();
/* fetch(url, config); */

/* fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(res => {
  console.log(res[0].title);
  console.log(res[0].body);
}); */

/* const lista = document.getElementById("listado");
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(res => {
  res.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;
    lista.append(li);
  });
}); */

/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: "Mi post",
    body: "Estamos conectando con una api",
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(response => console.log(response)) */

/* fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `;
      lista.append(li);
    });
  }); */
