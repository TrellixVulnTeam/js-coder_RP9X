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

// Variables
let rtaTitle;
let rtaMedallones;
let rtaAderezo;
let rtaExtraCheddar;
let rtaPepinos;
let rtaExtraBacon;

const ver = (id) => {
  contenedorCards.remove();
  let tituloSeccion = document.getElementById("titulo-seccion");
  tituloSeccion.innerText = "HAMBURGUESA SELECCIONADA";
  let seleccionada = document.getElementById("cardSeleccionada");
  if (id === 0) {
    let div = document.createElement("div");
    div.className = "container-card-seleccionada";
    div.innerHTML = `
  <img src="${burgerGeneradas[id].url}" class="card-img-top " alt="cheeseburger">
  <div class="card-body">
    <h4 class="card-title text-center">${burgerGeneradas[id].nombre}</h4>
    <p class="card-text border-bottom pb-3"> ${burgerGeneradas[id].contenido}</p>
    <div class="container-inputs">
      <select class="form-select mt-3 mb-3" aria-label="Default select example">
        <option selected >Cantida de medallones</option>
        <option id="simple" value="simple">Simple</option>
        <option value="doble">Doble</option>
        <option value="triple">Triple</option>
      </select>
        <div class="form-check ">
          <input class="form-check-input" type="checkbox" onclick="salsa(${rtaAderezo})" id="salsa">
          <label class="form-check-label" for="salsa">
            Sin salsa
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="cheddar" >
          <label class="form-check-label" for="cheddar">
            Extra cheddar
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="pepinos" >
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
      <button class="btn btn-outline-success w-100" onclick="comprar(${rtaAderezo})">Enviar al carrito</button>
    </div>
  </div>
  <div class="container-enlaces-rapidos">
    <a href="menu.html" class="btn btn-outline-dark botones-menu-carrito">VOLVER AL MENU</a>
    <a href="carrito.html" class="btn btn-outline-dark botones-menu-carrito">IR AL CARRITO</a>
</div>
`;
    seleccionada.append(div);

    rtaTitle = "CHEESEBURGER";
    console.log(rtaTitle);
    let cheddar = document.getElementById("cheddar");
    cheddar.addEventListener("click", function () {
      if (cheddar.checked) {
        rtaExtraCheddar = "SI";
      } else {
        rtaExtraCheddar = "NO";
      }
    });
    let pepinos = document.getElementById("pepinos");
    pepinos.addEventListener("click", function () {
      if (pepinos.checked) {
        rtaPepinos = "SI";
      } else {
        rtaPepinos = "NO";
      }
    });
  }
};
const salsa = (rtaAderezo) => {
  let salsarta = document.getElementById("salsa");
  if (salsarta.checked) {
    rtaAderezo = "SI";
  } else {
    rtaAderezo = "NO";
  }
  console.log(rtaAderezo);
};

const comprar = (rtaAderezo) => {
  console.log(rtaAderezo);
};

/*
//Array de los productos comprados
const carrito = [];

//Constructor
class BurgerAñadida {
  constructor(
    rtaTitle,
    rtaMedallones,
    rtaAderezo,
    rtaExtraCheddar,
    rtaExtraBacon,
    rtaPepinos
  ) {
    this.hamburguesa = rtaTitle;
    this.medallones = rtaMedallones;
    this.salsa = rtaAderezo;
    this.extraCheddar = rtaExtraCheddar;
    this.pepinos = rtaPepinos;
    this.extraBacon = rtaExtraBacon;
    this.precio = 0;
  }
  adereso(rtaAderezo) {
    if (rtaAderezo == "SI") {
      this.salsa = "Sin salsa";
    } else {
      this.salsa = "Con salsa";
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

function comprar(
  rtaTitle,
  rtaMedallones,
  rtaAderezo,
  rtaExtraCheddar,
  rtaPepinos,
  rtaExtraBacon
) {
  console.log(rtaTitle);
  let pedido = new BurgerAñadida(rtaTitle, rtaMedallones);
  pedido.precioMedallones(rtaMedallones);
  pedido.adereso(rtaAderezo);
  pedido.cheddar(rtaExtraCheddar);
  pedido.pepino(rtaPepinos);
  pedido.bacon(rtaExtraBacon);
  carrito.push(pedido);
  console.log(carrito);
}*/
