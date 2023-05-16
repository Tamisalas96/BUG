import Videojuego from "./classVideojuego.js";

const filaJuegos = document.getElementById('filaJuegos');
const lista_de_juegos = JSON.parse(localStorage.getItem("lista_de_juegos") || "[]").map(
  (juego) => new Videojuego(...Object.values(juego))
);

cargaInicial();

function cargaInicial() {
  if (lista_de_juegos.length > 0) {
    filaJuegos.innerHTML = lista_de_juegos.map((juego) => `
    <aside class="col-md-6 col-lg-3 mb-3 juego">
    <article class="card w-100 h-100 rounded-0 border-0 cards-disenio">
      <img src="${juego.imagen}" class="card-img-top rounded-0"/>
      <div class="card-body">
        <h5 class="card-title">${juego.nombre}</h5>
        <p class="card-text">
          ${juego.categoria}
        </p>
        <button class="btn btn-red rounded-0 text-light">Ver mas</button>
      </div>
    </article>
  </aside>
    `).join("");
  } else {
    // Mostrar mensaje de que no hay elementos
  }
}

console.log('El local storage se cargó correctamente');

window.enviarDetalleJuego = (codigo) => {
  console.log(codigo);
  const url = `${window.location.origin}/pages/detalle.html?codigo=${codigo}`;
  console.log(url);
  window.location.href = url;
};