import Videojuego from "./classVideojuego.js";

const filaJuegos = document.getElementById('filaJuegos');
const lista_de_juegos = JSON.parse(localStorage.getItem("lista_de_juegos") || "[]").map(
  (juego) => new Videojuego(...Object.values(juego))
);
let usuarioLogeado = JSON.parse(sessionStorage.getItem("perfil")) || {} ;

if(usuarioLogeado.email){

    let logout = document.querySelector("#logout")
    let login = document.querySelector("#login")
    let admin = document.querySelector("#admin")
    let nosotros = document.querySelector("#nosotros")
    logout.classList.toggle("d-none")
    login.classList.toggle("d-none")
    if(usuarioLogeado.email === "admin@admin.com"){
      admin.classList.toggle("d-none")
      nosotros.classList.toggle("d-none")
    }
}
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
        <button class="btn btn-red rounded-0 text-light" onclick="enviarDetalleJuego('${juego.codigo}')">Detalles</button>
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
  const url = `${window.location.origin}/BUG/pages/detalles.html?codigo=${codigo}`;
  window.location.href = url;
};

window.borrarSessionStorage = () => {
  sessionStorage.clear();
}

  