class GenerarBurger {
  constructor(nombre, contenido, precio, url, id) {
    this.nombre = nombre;
    this.contenido = contenido;
    this.precio = precio;
    this.url = url;
    this.id = id;
  }
}

const burgerGeneradas = [];

burgerGeneradas.push(
  new GenerarBurger(
    "CHEESEBURGER",
    "Medallon de carne de 120grs, cheddar y salsa thousand island. Incluye papas.",
    800,
    "./imagenes/cheese.png",
    1
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "BACON CHEESEBURGER",
    "Medallon de carne de 120grs, cheddar, panceta ahumada y salsa thousand island. Incluye papas.",
    800,
    "./imagenes/bacon-menu.png",
    2
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "ROYALE",
    "Medallon de carne de 120grs, cheddar, cebolla brunoise y salsa 1/4 de libra. Incluye papas.",
    800,
    "./imagenes/royale.png",
    3
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "BIG MC",
    "Medallon de carne de 120grs, cheddar, lechuga, cebolla picada, pepinos y salsa big mc. Incluye papas.",
    800,
    "./imagenes/bg mc.png",
    4
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "FRIED ONION",
    "Medallon de carne de 100grs smasheado junto a la cebolla. Incluye papas.",
    800,
    "./imagenes/onion .png",
    5
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
                    <p class="card-text">Desde $${elemento.precio} </p>
                    <button class="btn btn-outline-dark w-100" onclick="comprar(${elemento.id})">Comprar</button>
                    `;
  contenedorCards.append(card);
});

let carrito = [];
let cantidadCarrito = document.getElementById("numeroCarrito");

const comprar = (id) => {
  const burger = burgerGeneradas.find((el) => el.id === id);
  carrito.push(burger);
  cantidadCarrito.innerHTML = carrito.length;
  agregarCarrito(carrito.length - 1);
};

let carritoDom = document.getElementById("carrito");

const agregarCarrito = (longitud) => {
  let div = document.createElement("div");
  div.id = `carrito-${carrito[longitud].id}`;
  div.innerHTML = `
  <p class="valortotal">${carrito[longitud].nombre}
  ${carrito[longitud].precio}</p>
  <button onclick="eliminar(${carrito[longitud].id})">Eliminar</button>
  `;
  carritoDom.append(div);
};

const eliminar = (idEliminar) => {
  const eliminar = document.getElementById(`carrito-${idEliminar}`);
  eliminar.remove();
  carrito = carrito.filter((el) => el.id !== idEliminar);
  cantidadCarrito.innerHTML = carrito.length;
};
