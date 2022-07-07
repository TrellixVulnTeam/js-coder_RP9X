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

const burgerGeneradas = [];

burgerGeneradas.push(
  new GenerarBurger(
    "CHEESEBURGER",
    "Medallon de carne de 120grs, cheddar y salsa thousand island. Incluye papas.",
    700,
    800,
    900,
    "../multimedia/imagenes/cheese.png",
    0
  )
);

burgerGeneradas.push(
  new GenerarBurger(
    "BACON CHEESEBURGER",
    "Medallon de carne de 120grs, cheddar, panceta ahumada y salsa thousand island. Incluye papas.",
    700,
    800,
    900,
    "../multimedia/imagenes/bacon-menu.png",
    1
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "ROYALE",
    "Medallon de carne de 120grs, cheddar, cebolla brunoise y salsa 1/4 de libra. Incluye papas.",
    700,
    800,
    900,
    "../multimedia/imagenes/royale.png",
    2
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "BIG MC",
    "Medallon de carne de 120grs, cheddar, lechuga, cebolla picada, pepinos y salsa big mc. Incluye papas.",
    700,
    800,
    900,
    "../multimedia/imagenes/bg mc.png",
    3
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "FRIED ONION",
    "Medallon de carne de 100grs smasheado junto a la cebolla. Incluye papas.",
    700,
    800,
    900,
    "../multimedia/imagenes/onion .png",
    4
  )
);

// Muestro en el DOM las burger que hay en el menu
let contenedorCards = document.getElementById("container-hamburguesas-menu");
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

//Muestro en el DOM las opciones de la burger que quiere ver el usuario
//Funcion del evento onclick
const ver = (id) => {
  contenedorCards.remove();
  let tituloSeccion = document.getElementById("titulo-seccion");
  tituloSeccion.innerText = "HAMBURGUESA SELECCIONADA";
  let seleccionada = document.getElementById("cardSeleccionada");
  if (id === 0) {
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
  }
  if (id === 1) {
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
  }

  if (id === 2) {
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
  }

  if (id === 3) {
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
  }

  if (id === 4) {
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
  }

  //Variables que van a referenciar los inputs checkbox
  let selection = document.getElementById("selection");
  let salsa = document.getElementById("salsa");
  let cheddar = document.getElementById("cheddar");
  let bacon = document.getElementById("bacon");
  let pepino = document.getElementById("pepinos");
  let precioBurger = document.getElementById("precio");

  //En caso de que primero seleccione un checkbox
  if (selection.options[0].selected === true) {
    precio += 700;
  }

  // Logica obtener los valores de los inputs seleccionados y modificar el precio del DOM de la card (hamburguesa)
  if (id === 0) {
    selection.onchange = () => {
      precio = 0;
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
      }
      if (pepino.checked) {
        precio += PrecioPepinos;
      }
      if (selection.options[0].selected === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (selection.options[1].selected === true) {
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
    pepino.onclick = () => {
      if (pepino.checked) {
        precio += PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else {
        precio -= PrecioPepinos;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      }
    };
  } else if (id === 1) {
    selection.onchange = () => {
      precio = 0;
      if (cheddar.checked) {
        precio += PrecioExtraCheddar;
      }
      if (bacon.checked) {
        precio += PrecioExtraBacon;
      }
      if (selection.options[0].selected === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (selection.options[1].selected === true) {
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
  } else if (id === 2 || id === 4) {
    selection.onchange = () => {
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
      if (selection.options[0].selected === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (selection.options[1].selected === true) {
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
  } else if (id === 3) {
    selection.onchange = () => {
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
      if (selection.options[0].selected === true) {
        precio += 700;
        precioBurger.innerHTML = `<p id="precio"> valor $${precio}</p>`;
      } else if (selection.options[1].selected === true) {
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
  }

  //Logica para guardar las respuestas del usuario y agregar la burger al carrito
  formulario.onsubmit = (e) => {
    let miFormulario = e.target;
    e.preventDefault();
    idCompra++;
    localStorage.setItem("idCompra", idCompra);
    //Muestro en el DOM la cantidad de productos que hay en el carrito
    cantidadCarrito = document.getElementById("cantidad-carrito");
    cantidadCarrito.innerText = `${idCompra}`;
    rtaTitle = burgerGeneradas[id].nombre;
    if (Number(miFormulario.tipo.value) === 0) {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      if (salsa.checked) {
        rtaAderezo = miFormulario.children[1].children[1].children[0].value;
      } else {
        rtaAderezo = "Con salsa";
      }
      if (cheddar.checked) {
        rtaExtraCheddar =
          miFormulario.children[1].children[2].children[0].value;
      } else {
        rtaExtraCheddar = "Sin Extra Cheddar";
      }
      if (pepino.checked) {
        rtaPepinos = miFormulario.children[1].children[3].children[0].value;
      } else {
        rtaPepinos = "Sin Pepinos";
      }
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
    } else if (Number(miFormulario.tipo.value) === 1) {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      if (salsa.checked) {
        rtaAderezo = miFormulario.children[1].children[1].children[0].value;
      } else {
        rtaAderezo = "Con salsa";
      }
      if (cheddar.checked) {
        rtaExtraCheddar =
          miFormulario.children[1].children[2].children[0].value;
      } else {
        rtaExtraCheddar = "Sin Extra Cheddar";
      }
      if (bacon.checked) {
        rtaExtraBacon = miFormulario.children[1].children[3].children[0].value;
      } else {
        rtaExtraBacon = "Sin Extra Bacon";
      }
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
    } else if (
      Number(miFormulario.tipo.value) === 2 ||
      Number(miFormulario.tipo.value) === 4
    ) {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      if (salsa.checked) {
        rtaAderezo = miFormulario.children[1].children[1].children[0].value;
      } else {
        rtaAderezo = "Con salsa";
      }
      if (cheddar.checked) {
        rtaExtraCheddar =
          miFormulario.children[1].children[2].children[0].value;
      } else {
        rtaExtraCheddar = "Sin Extra Cheddar";
      }
      if (bacon.checked) {
        rtaExtraBacon = miFormulario.children[1].children[3].children[0].value;
      } else {
        rtaExtraBacon = "Sin Extra Bacon";
      }
      if (pepino.checked) {
        rtaPepinos = miFormulario.children[1].children[4].children[0].value;
      } else {
        rtaPepinos = "Sin Pepinos";
      }
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
    } else if (Number(miFormulario.tipo.value) === 3) {
      rtaMedallones =
        miFormulario.children[1].children[0].options[selection.selectedIndex]
          .value;
      if (salsa.checked) {
        rtaAderezo = miFormulario.children[1].children[1].children[0].value;
      } else {
        rtaAderezo = "Con salsa";
      }
      if (cheddar.checked) {
        rtaExtraCheddar =
          miFormulario.children[1].children[2].children[0].value;
      } else {
        rtaExtraCheddar = "Sin Extra Cheddar";
      }
      if (bacon.checked) {
        rtaExtraBacon = miFormulario.children[1].children[3].children[0].value;
      } else {
        rtaExtraBacon = "Sin Extra Bacon";
      }
      if (pepino.checked) {
        rtaPepinos = miFormulario.children[1].children[4].children[0].value;
      } else {
        rtaPepinos = "Con pepinos";
      }
      pedido = new BurgerAñadida(rtaTitle, rtaMedallones, idCompra);
      pedido.precioMedallones(rtaMedallones);
      pedido.adereso(rtaAderezo);
      pedido.cheddar(rtaExtraCheddar);
      pedido.pepino(rtaPepinos);
      pedido.bacon(rtaExtraBacon);
      carrito.push(pedido);
      localStorage.setItem("compras", JSON.stringify(carrito));
    }
    Toastify({
      text: "TU HAMBURGUESA FUE AGREGADA AL CARRITO",
      duration: 3000,
      className: "confirmacion",
    }).showToast();
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
