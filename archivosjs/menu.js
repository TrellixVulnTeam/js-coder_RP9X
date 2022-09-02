// Constructor de burger que hay en el menu
class GenerarBurger {
  constructor(
    nombre,
    contenido,
    precioSimple,
    precioDoble,
    precioTriple,
    url,
    id
  ) {
    this.nombre = nombre;
    this.contenido = contenido;
    this.precioSimple = precioSimple;
    this.precioDoble = precioDoble;
    this.precioTriple = precioTriple;
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
      new GenerarBurger(
        el.nombre,
        el.contenido,
        el.precioSimple,
        el.precioDoble,
        el.precioTriple,
        el.url,
        el.id
      )
    );
  });
  mostrarCards();
};
ObtenerBurgers();

// Muestro en el DOM las burger que obtuve con el fetch
let contenedorCards = document.getElementById("container-hamburguesas-menu");
const mostrarCards = () => {
  burgerGeneradas.forEach((elemento) => {
    let card = document.createElement(`div`);
    card.className = "container-card";
    card.innerHTML = `
    <img src="${elemento.url}" class="card-img-top ">
    <div class="card-body">
      <h3 class="titulo-card text-center">${elemento.nombre} </h3>
      <p class="card-text">${elemento.contenido}</p>
      <p class="card-text">Desde $${elemento.precioSimple} </p>
      <button class="btn btn-outline-dark w-100" onclick="ver(${elemento.id})">Ver opciones</button>
    </div>`;
    contenedorCards.append(card);
  });
};

// Creo las variables que van a recibir las respuestas del usuario
// Creo las variables de precios de extras
let idCompra = Number(localStorage.getItem("idCompra")) || 0;
let pedido;
let precio = 0;
let rtaTitle;
let rtaMedallones;
let rtaAderezo;
let rtaExtraCheddar;
let rtaPepinos;
let rtaExtraBacon;
let cantExCh = 0;
let cantExB = 0;
const PrecioExtraCheddar = 100;
const PrecioExtraBacon = 100;
const PrecioPepinos = 50;
//Array de los productos que se añaden al carrito
let carrito = JSON.parse(localStorage.getItem("compras")) || [];
//Muestro en el DOM la cantidad de productos que hay en el carrito
let cantidadCarritoDesktop = document.getElementById("cantidad-carritoD");
let cantidadCarritoMobile = document.getElementById("cantidad-carritoM");
cantidadCarritoDesktop.innerText = `${idCompra}`;
cantidadCarritoMobile.innerText = `${idCompra}`;

//Funcion para no mostrar el boton enviar al carrito en caso de que este cerrado
const DateTime = luxon.DateTime;
const dt = DateTime.now();
const diaSemana = dt.weekday;
const cerrado = () => {
  let cerrar = document.getElementById("cerrar");
  let textoCerrado = document.getElementById("mostrar-cerrado");
  if (diaSemana < 4) {
    cerrar.remove();
    textoCerrado.innerText = "CERRADO";
  }
};
//Funciones que me generan las cardSeleccionadas en el DOM
const crearCheeseCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <div class="header-card">
    <div class="container-enlaces-rapidos">
      <h4 class="card-title">${burgerGeneradas[id].nombre}</h4>
      <div>
        <a href="menu.html" class="volver">VOLVER</a>
        <a href="carrito.html" class="carrito">CARRITO</a>
      </div>
    </div>
  </div>
  <form class="container-inputs" id="formulario">
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
      <button type="button" class="disabled-add-dec" id="dec-cheddar">-1</button> <label class="text-add-dec" id="extra-cheddar">x ${cantExCh}</label>
      <button type="button" class="disabled-add-dec" id="add-cheddar">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Con pepinos" id="pepinos" >
      <label class="form-check-label" for="pepinos">
        Con pepinos
      </label>
    </div>
    <div class="mt-3">      
      <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100"
      id="cerrar">
      <p id="mostrar-cerrado"></p>
    </div>
  </form>
`;
  seleccionada.append(div);
  cerrado();
};

const crearBaconCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <div class="header-card">
    <div class="container-enlaces-rapidos">
      <h4 class="card-title">${burgerGeneradas[id].nombre}</h4>
      <div class="div-title-largo">
        <a href="menu.html" class="volver">VOLVER</a>
        <a href="carrito.html" class="carrito">CARRITO</a>
      </div>
    </div>
  </div>
  <form class="container-inputs" id="formulario">
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
      <button type="button" class="disabled-add-dec dec" id="dec-cheddar">-1</button> <label class="text-add-dec" id="extra-cheddar">x ${cantExCh}</label>
      <button type="button" class="disabled-add-dec" id="add-cheddar">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
      <label class="form-check-label" for="bacon">
        Extra bacon
      </label>
      <button type="button" class="disabled-add-dec" id="dec-bacon">-1</button> <label class="text-add-dec" id="extra-bacon">x ${cantExB}</label>
      <button type="button" class="disabled-add-dec" id="add-bacon">+1</button>
    </div>
    <div class="mt-3">      
      <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100" id="cerrar">
      <p id="mostrar-cerrado"></p>
    </div>
  </form>
`;
  seleccionada.append(div);
  cerrado();
};

const crearRoyaleCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <div class="header-card">
    <div class="container-enlaces-rapidos">
      <h4 class="card-title">${burgerGeneradas[id].nombre}</h4>
      <div>
        <a href="menu.html" class="volver">VOLVER</a>
        <a href="carrito.html" class="carrito">CARRITO</a>
      </div>
    </div>
  </div>
  <form class="container-inputs" id="formulario">
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
      <button type="button" class="disabled-add-dec" id="dec-cheddar">-1</button> <label class="text-add-dec" id="extra-cheddar">x ${cantExCh}</label>
      <button type="button" class="disabled-add-dec" id="add-cheddar">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
      <label class="form-check-label" for="bacon">
        Extra bacon
      </label>
      <button type="button" class="disabled-add-dec" id="dec-bacon">-1</button> <label class="text-add-dec" id="extra-bacon">x ${cantExB}</label>
      <button type="button" class="disabled-add-dec" id="add-bacon">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Con pepinos" id="pepinos" >
      <label class="form-check-label" for="pepinos">
        Con pepinos
      </label>
    </div>
    <div class="mt-3">      
      <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100" id="cerrar">
      <p id="mostrar-cerrado"></p>
    </div>
  </form>
`;
  seleccionada.append(div);
  cerrado();
};

const crearBigMcCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <div class="header-card">
    <div class="container-enlaces-rapidos">
      <h4 class="card-title">${burgerGeneradas[id].nombre}</h4>
      <div>
        <a href="menu.html" class="volver">VOLVER</a>
        <a href="carrito.html" class="carrito">CARRITO</a>
      </div>
    </div>
  </div>
  <form class="container-inputs" id="formulario">
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
      <button type="button" class="disabled-add-dec" id="dec-cheddar">-1</button> <label class="text-add-dec" id="extra-cheddar">x ${cantExCh}</label>
      <button type="button" class="disabled-add-dec" id="add-cheddar">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
      <label class="form-check-label" for="bacon">
        Extra bacon
      </label>
      <button type="button" class="disabled-add-dec" id="dec-bacon">-1</button> <label class="text-add-dec" id="extra-bacon">x ${cantExB}</label>
      <button type="button" class="disabled-add-dec" id="add-bacon">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Sin pepinos" id="pepinos" >
      <label class="form-check-label" for="pepinos">
        Sin pepinos
      </label>
    </div>
    <div class="mt-3">      
      <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100" id="cerrar">
      <p id="mostrar-cerrado"></p>
    </div>
  </form>  
  `;
  seleccionada.append(div);
  cerrado();
};

const crearOnionCard = (id, seleccionada) => {
  let div = document.createElement("div");
  div.className = "container-card-seleccionada";
  div.innerHTML = `
  <div class="header-card">
    <div class="container-enlaces-rapidos">
      <h4 class="card-title">${burgerGeneradas[id].nombre}</h4>
      <div>
        <a href="menu.html" class="volver">VOLVER</a>
        <a href="carrito.html" class="carrito">CARRITO</a>
      </div>
    </div>
  </div>
  <form class="container-inputs" id="formulario">
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
      <button type="button" class="disabled-add-dec" id="dec-cheddar">-1</button> <label class="text-add-dec" id="extra-cheddar">x ${cantExCh}</label>
      <button type="button" class="disabled-add-dec" id="add-cheddar">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Extra bacon" id="bacon" >
      <label class="form-check-label" for="bacon">
        Extra bacon
      </label>
      <button type="button" class="disabled-add-dec" id="dec-bacon">-1</button> <label class="text-add-dec" id="extra-bacon">x ${cantExB}</label>
      <button type="button" class="disabled-add-dec" id="add-bacon">+1</button>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="Con pepinos" id="pepinos" >
      <label class="form-check-label" for="pepinos">
        Con pepinos
      </label>
    </div>
    <div class="mt-3">      
      <p id="precio"> Valor $${burgerGeneradas[id].precioSimple}</p>
      <input type="submit" value="Enviar al carrito" class="btn btn-outline-success w-100" id="cerrar">
      <p id="mostrar-cerrado"></p>
    </div>
  </form>
  `;
  seleccionada.append(div);
  cerrado();
};

//Funciones para mostrar en el DOM las opciones de la burger que quiere ver el usuario
const ver = (id) => {
  contenedorCards.remove();
  let tituloSeccion = document.getElementById("titulo-seccion");
  tituloSeccion.innerText = "HAMBURGUESA SELECCIONADA";
  let seleccionada = document.getElementById("cardSeleccionada");
  if (id === 0) {
    crearCheeseCard(id, seleccionada);
  } else if (id === 1) {
    crearBaconCard(id, seleccionada);
  } else if (id === 2) {
    crearRoyaleCard(id, seleccionada);
  } else if (id === 3) {
    crearBigMcCard(id, seleccionada);
  } else if (id === 4) {
    crearOnionCard(id, seleccionada);
  }

  //Variables que van a referenciar los inputs checkbox
  let selection = document.getElementById("selection");
  let salsa = document.getElementById("salsa");
  let cheddar = document.getElementById("cheddar");
  let bacon = document.getElementById("bacon");
  let pepino = document.getElementById("pepinos");
  let precioBurger = document.getElementById("precio");
  // Variables que van a referenciar los botones de cantidad de extras
  const mostrarCantExCh = document.getElementById("extra-cheddar");
  let decCheddar = document.getElementById("dec-cheddar");
  let addCheddar = document.getElementById("add-cheddar");
  const mostrarCantExB = document.getElementById("extra-bacon");
  let decBacon = document.getElementById("dec-bacon");
  let addBacon = document.getElementById("add-bacon");
  // Funciones obtener las cantidades de los extras
  const cantidadExtraCheddar = () => {
    addCheddar.onclick = () => {
      if (cantExCh > 0 && cantExCh < 2) {
        cantExCh++;
        mostrarCantExCh.innerText = `x ${cantExCh}`;
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
    decCheddar.onclick = () => {
      if (cantExCh >= 2) {
        cantExCh--;
        mostrarCantExCh.innerText = `x ${cantExCh}`;
        precio -= PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };
  const cantidadExtraBacon = () => {
    addBacon.onclick = () => {
      if (cantExB > 0 && cantExB < 2) {
        cantExB++;
        mostrarCantExB.innerText = `x ${cantExB}`;
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
    decBacon.onclick = () => {
      if (cantExB >= 2) {
        cantExB--;
        mostrarCantExB.innerText = `x ${cantExB}`;
        precio -= PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };

  // Funciones obtener los valores de los inputs seleccionados y modificar el precio del DOM de la card (hamburguesa)
  const seleccionTamañoBurger = () => {
    //En caso de que primero seleccione un checkbox
    if (selection.options[0].selected === true) {
      rtaMedallones = "Simple";
      precio += burgerGeneradas[id].precioSimple;
    }
    selection.onchange = () => {
      let simple = selection.options[0].selected;
      let doble = selection.options[1].selected;
      let triple = selection.options[2].selected;
      precio = 0;
      if (cheddar.checked) {
        precio += PrecioExtraCheddar * cantExCh;
      }
      if (id === 1 || id === 2 || id === 3 || id === 4) {
        if (bacon.checked) {
          precio += PrecioExtraBacon;
        }
      }
      if (id === 0 || id === 2 || id === 4) {
        if (pepino.checked) {
          precio += PrecioPepinos;
        }
      }
      if (id === 3) {
        if (pepino.checked) {
          precio -= PrecioPepinos;
        }
      }
      if (simple === true) {
        precio += burgerGeneradas[id].precioSimple;
        rtaMedallones = "Simple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (doble === true) {
        precio += burgerGeneradas[id].precioDoble;
        rtaMedallones = "Doble";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else if (triple === true) {
        precio += burgerGeneradas[id].precioTriple;
        rtaMedallones = "Triple";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };

  const clickSalsa = () => {
    salsa.onclick = () => {
      salsa.checked ? (rtaAderezo = "Sin salsa") : (rtaAderezo = "Con salsa");
    };
  };
  const clickCheddar = () => {
    cheddar.onclick = () => {
      if (cheddar.checked) {
        cantExCh++;
        addCheddar.className = "add-dec";
        decCheddar.className = "add-dec";
        mostrarCantExCh.innerText = `x ${cantExCh}`;
        rtaExtraCheddar = "Extra cheddar";
        precio += PrecioExtraCheddar;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else {
        rtaExtraCheddar = "";
        precio -= PrecioExtraCheddar * cantExCh;
        cantExCh = 0;
        mostrarCantExCh.innerText = `x ${cantExCh}`;
        addCheddar.className = "disabled-add-dec";
        decCheddar.className = "disabled-add-dec";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };
  const clickBacon = () => {
    bacon.onclick = () => {
      if (bacon.checked) {
        cantExB++;
        addBacon.className = "add-dec";
        decBacon.className = "add-dec";
        mostrarCantExB.innerText = `x ${cantExB}`;
        rtaExtraBacon = "Extra bacon";
        precio += PrecioExtraBacon;
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      } else {
        rtaExtraBacon = "";
        precio -= PrecioExtraBacon;
        cantExB = 0;
        mostrarCantExB.innerText = `x ${cantExB}`;
        addBacon.className = "disabled-add-dec";
        decBacon.className = "disabled-add-dec";
        precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
      }
    };
  };
  const clickPepino = () => {
    pepino.onclick = () => {
      if (burgerGeneradas[id].nombre != "BIG MC") {
        if (pepino.checked) {
          precio += PrecioPepinos;
          rtaPepinos = "Con pepinos";
          precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
        } else {
          precio -= PrecioPepinos;
          rtaPepinos = "";
          precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
        }
      } else {
        if (pepino.checked) {
          rtaPepinos = "Sin Pepinos";
          precio -= PrecioPepinos;
          precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
        } else {
          rtaPepinos = "Con pepinos";
          precio += PrecioPepinos;
          precioBurger.innerHTML = `<p id="precio"> Valor $${precio}</p>`;
        }
      }
    };
  };

  const inputsCheese = () => {
    seleccionTamañoBurger();
    clickSalsa();
    clickCheddar();
    clickPepino();
    cantidadExtraCheddar();
  };

  const inputsBacon = () => {
    seleccionTamañoBurger();
    clickSalsa();
    clickCheddar();
    clickBacon();
    cantidadExtraCheddar();
    cantidadExtraBacon();
  };

  const inputsRoyaleAndBigMcAndOnion = () => {
    seleccionTamañoBurger();
    clickSalsa();
    clickCheddar();
    if (id === 3) {
      rtaPepinos = "Con pepinos";
    }
    clickPepino();
    clickBacon();
    cantidadExtraCheddar();
    cantidadExtraBacon();
  };

  // Logica obtener los valores de los inputs seleccionados y modificar el precio del DOM de la card (hamburguesa)
  if (id === 0) {
    inputsCheese();
  } else if (id === 1) {
    inputsBacon();
  } else if (id === 2 || id === 3 || id === 4) {
    inputsRoyaleAndBigMcAndOnion();
  }
  //Funcion para enviar los valores al constructor y cargar el array de burgers pedidas
  const armarPedido = () => {
    pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra, precio);
    pedido.adereso(rtaAderezo);
    pedido.cheddar(rtaExtraCheddar, cantExCh);
    pedido.bacon(rtaExtraBacon, cantExB);
    pedido.pepino(rtaPepinos);
    carrito.push(pedido);
    localStorage.setItem("compras", JSON.stringify(carrito));
  };
  //Funcion para mostrar el cartel
  const mostrarCartel = () => {
    Toastify({
      text: "TU HAMBURGUESA FUE AGREGADA AL CARRITO",
      duration: 2000,
      className: "confirmacion",
    }).showToast();
  };

  //Logica para guardar las respuestas del usuario y agregar las burger al carrito
  formulario.onsubmit = (e) => {
    e.preventDefault();
    idCompra++;
    localStorage.setItem("idCompra", idCompra);
    //Muestro en el DOM la cantidad de productos que hay en el carrito
    cantidadCarritoDesktop.innerText = `${idCompra}`;
    cantidadCarritoMobile.innerText = `${idCompra}`;
    rtaTitle = burgerGeneradas[id].nombre;

    armarPedido();
    mostrarCartel();
  };
};

//Constructor para guardar la burger y los agregados que quiere el usuario
class BurgerAñadida {
  constructor(rtaTitle, rtaMedallones, idCompra, precio) {
    this.hamburguesa = rtaTitle;
    this.medallones = rtaMedallones;
    this.idCompra = idCompra;
    this.precio = precio;
    this.salsa = String;
    this.extraCheddar = String;
    this.pepinos = String;
    this.extraBacon = String;
  }
  adereso(rtaAderezo) {
    rtaAderezo == "Sin salsa"
      ? (this.salsa = "Sin salsa")
      : (this.salsa = "Con salsa");
  }
  cheddar(rtaExtraCheddar, cantExCh) {
    rtaExtraCheddar == "Extra cheddar"
      ? (this.extraCheddar = `Extra cheddar (x${cantExCh})`)
      : (this.extraCheddar = "Sin extra cheddar");
  }
  bacon(rtaExtraBacon, cantExB) {
    rtaExtraBacon == "Extra bacon"
      ? (this.extraBacon = `Extra bacon (x${cantExB})`)
      : (this.extraBacon = "Sin extra bacon");
  }
  pepino(rtaPepinos) {
    rtaPepinos == "Con pepinos"
      ? (this.pepinos = "Con pepinos")
      : (this.pepinos = "Sin pepinos");
  }
}
