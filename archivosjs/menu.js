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

// Creo las variables de precios
// Creo las variables que van a recibir las respuestas del usuario
let pedido;
let idCompra = 0;
let rtaTitle;
let rtaMedallones;
let rtaAderezo;
let rtaExtraCheddar;
let rtaPepinos;
let rtaExtraBacon;
const PrecioExtraCheddar = 100;
const PrecioExtraBacon = 100;
const PrecioPepinos = 50;

//Muestro en el DOM las opciones de la burger que quiere ver el usuario
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
        <p> valor $${burgerGeneradas[id].precioSimple}</p>
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
        <p> valor $${burgerGeneradas[id].precioSimple}</p>
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
        <p> valor $${burgerGeneradas[id].precioSimple}</p>
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
            <input class="form-check-input" type="checkbox" value="Con pepinos" id="pepinos" >
            <label class="form-check-label" for="pepinos">
              Con pepinos
            </label>
          </div>
      </div>
      <div class="mt-3">
        <div class="container-valor-cantidad">
          <p> valor $${burgerGeneradas[id].precioSimple}</p>
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
          <p> valor $${burgerGeneradas[id].precioSimple}</p>
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

  //Logica para guardar las respuestas del usuario y agregar la burger al carrito
  let selection = document.getElementById("selection");
  formulario.onsubmit = (e) => {
    let miFormulario = e.target;
    e.preventDefault();
    idCompra++;
    let salsa = document.getElementById("salsa");
    let cheddar = document.getElementById("cheddar");
    let bacon = document.getElementById("bacon");
    let pepino = document.getElementById("pepinos");
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
      console.log(carrito);
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
      console.log(carrito);
    } else if (
      Number(miFormulario.tipo.value) > 1 &&
      Number(miFormulario.tipo.value) < 5
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
      console.log(carrito);
    }
  };
};

//Array de los productos comprados
const carrito = [];

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
      this.precio += PrecioPepinos;
    } else {
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
