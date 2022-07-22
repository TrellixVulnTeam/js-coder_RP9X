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
let burgerGeneradas = [];

const ObtenerBurgers = async () => {
  const resp = await fetch("../public/data.json");
  const data = await resp.json();
  data.forEach((el) => {
    burgerGeneradas.push(
      new GenerarBurger(el.nombre, el.contenido, el.precioSimple, el.url, el.id)
    );
  });
  mostrarCards();
};
ObtenerBurgers();

// Muestro en el DOM las burger que hay en el menu
let contenedorCards = document.getElementById("container-hamburguesas-menu");
const mostrarCards = () => {
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
let idCompra = localStorage.getItem("idCompra") || 0;
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
//Array de los productos que se añaden al carrito
let carrito = JSON.parse(localStorage.getItem("compras")) || [];
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
    <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
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
    <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
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
        <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
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
        <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
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
          <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
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
  const clickSalsa = () => {
    salsa.onclick = () => {
      if (salsa.checked) {
        rtaAderezo = "Sin salsa";
      } else {
        rtaAderezo = "Con salsa";
      }
    };
  };
  const clickCheddar = () => {
    cheddar.onclick = () => {
      if (cheddar.checked) {
        rtaExtraCheddar = "Extra cheddar";
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else {
        rtaExtraCheddar = "";
        precio -= PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };
  const clickBacon = () => {
    bacon.onclick = () => {
      if (bacon.checked) {
        rtaExtraBacon = "Extra bacon";
        precio += PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else {
        rtaExtraBacon = "";
        precio -= PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };
  const clickPepino = () => {
    pepino.onclick = () => {
      if (pepino.checked) {
        precio += PrecioPepinos;
        rtaPepinos = "Con pepinos";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else {
        precio -= PrecioPepinos;
        rtaPepinos = "";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };

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
        rtaMedallones = "Simple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        rtaMedallones = "Doble";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (triple === true) {
        precio += 900;
        rtaMedallones = "Triple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
    clickSalsa();
    clickCheddar();
    clickPepino();
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
        rtaMedallones = "Simple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        rtaMedallones = "Doble";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (triple === true) {
        precio += 900;
        rtaMedallones = "Triple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
    clickSalsa();
    clickCheddar();
    clickBacon();
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
        rtaMedallones = "Simple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        rtaMedallones = "Doble";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (triple === true) {
        precio += 900;
        rtaMedallones = "Triple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
    clickSalsa();
    clickCheddar();
    clickPepino();
    clickBacon();
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
        rtaMedallones = "Simple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (doble === true) {
        precio += 800;
        rtaMedallones = "Doble";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (triple === true) {
        precio += 900;
        rtaMedallones = "Triple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
    clickSalsa();
    clickCheddar();
    rtaPepinos = "Con pepinos";
    pepino.onclick = () => {
      if (pepino.checked) {
        rtaPepinos = "Sin Pepinos";
        precio -= PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
    clickBacon();
  };

  //En caso de que primero seleccione un checkbox
  if (selection.options[0].selected === true) {
    rtaMedallones = "Simple";
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

  //Funcion para enviar los valores al constructor y cargar el array de burgers pedidas
  const armarPedido = () => {
    pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
    pedido.precioMedallones(rtaMedallones);
    pedido.adereso(rtaAderezo);
    pedido.cheddar(rtaExtraCheddar);
    pedido.pepino(rtaPepinos);
    pedido.bacon(rtaExtraBacon);
    carrito.push(pedido);
    localStorage.setItem("compras", JSON.stringify(carrito));
  };
  //Funcion para mostrar el cartel
  const mostrarCartel = () => {
    Toastify({
      text: "TU HAMBURGUESA FUE AGREGADA AL CARRITO",
      duration: 3000,
      className: "confirmacion",
    }).showToast();
  };

  //Logica para guardar las respuestas del usuario y agregar las burger al carrito
  formulario.onsubmit = (e) => {
    e.preventDefault();
    idCompra++;
    localStorage.setItem("idCompra", idCompra);
    //Muestro en el DOM la cantidad de productos que hay en el carrito
    cantidadCarrito = document.getElementById("cantidad-carrito");
    cantidadCarrito.innerText = `${idCompra}`;
    rtaTitle = burgerGeneradas[id].nombre;

    armarPedido();
    mostrarCartel();
  };
};

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
      this.extraCheddar = "Extra Cheddar";
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
      this.pepinos = "Sin Pepinos";
      if (rtaTitle == "BIG MC") {
        this.precio -= PrecioPepinos;
      }
    }
  }
  bacon(rtaExtraBacon) {
    if (rtaExtraBacon == "Extra bacon") {
      this.extraBacon = "Extra Bacon";
      this.precio += PrecioExtraBacon;
    } else {
      this.extraBacon = "Sin Extra Bacon";
    }
  }
}
