class GenerarBurger {
  constructor(nombre, contenido, precio, url) {
    this.nombre = nombre;
    this.contenido = contenido;
    this.precio = precio;
    this.url = url;
  }
}

const burgerGeneradas = [];

burgerGeneradas.push(
  new GenerarBurger(
    "CHEESEBURGER",
    "Medallon de carne de 120grs, cheddar y salsa thousand island. Incluye papas.",
    800,
    "./imagenes/cheese.png"
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "BACON CHEESEBURGER",
    "Medallon de carne de 120grs, cheddar, panceta ahumada y salsa thousand island. Incluye papas.",
    800,
    "./imagenes/bacon-menu.png"
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "ROYALE",
    "Medallon de carne de 120grs, cheddar, cebolla brunoise y salsa 1/4 de libra. Incluye papas.",
    800,
    "./imagenes/royale.png"
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "BIG MC",
    "Medallon de carne de 120grs, cheddar, lechuga, cebolla picada, pepinos y salsa big mc. Incluye papas.",
    800,
    "./imagenes/bg mc.png"
  )
);
burgerGeneradas.push(
  new GenerarBurger(
    "FRIED ONION",
    "Medallon de carne de 100grs smasheado junto a la cebolla. Incluye papas.",
    800,
    "./imagenes/onion .png"
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
                    <a href="#" class="btn btn-outline-dark w-100">Ver opciones</a>
                    `;
  contenedorCards.append(card);
});
