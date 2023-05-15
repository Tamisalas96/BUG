import Videojuego from "./classVideojuego.js";
import { sumarioValidaciones } from "./helpers.js";
// variables
let formJuegos = document.getElementById("formJuegos");
let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  descripcion = document.getElementById("descripcion"),
  categoria = document.getElementById("categoria"),
  precio = document.getElementById("precio"),
  imagen = document.getElementById("imagen"),
  desarrollador = document.getElementById("desarrollador"),
  requisitos = document.getElementById("requisitos");
//array de objetos de tipo Videojuego
let lista_de_juegos = localStorage.getItem("lista_de_juegos");
if (!lista_de_juegos) {
  lista_de_juegos = [];
} else {
  lista_de_juegos = JSON.parse(lista_de_juegos).map(
    (videojuego) =>
      new Videojuego(
        videojuego.codigo,
        videojuego.nombre,
        videojuego.descripcion,
        videojuego.categoria,
        videojuego.precio,
        videojuego.imagen,
        videojuego.desarrollador,
        videojuego.requisitos
      )
  );
}
// eventos
formJuegos.addEventListener("submit", prepararForm);
//
cargaInicial();
// funciones
function guardarLocal() {
  localStorage.setItem("lista_de_juegos", JSON.stringify(lista_de_juegos));
}
function cargaInicial() {
  if (lista_de_juegos.length > 0) {
    //dibujar las filas de la tabla
    lista_de_juegos.map((videojuego, indice) =>
      crearFila(videojuego, indice + 1)
    );
  } else {
    //mostrar mensaje de tabla vacia
  }
}
function crearFila(videojuego, indice) {
  let tablaJuego = document.querySelector("tbody");
  tablaJuego.innerHTML += `<tr>
  <th scope="row">${indice}</th>
  <td class="text-truncate">${videojuego.nombre}</td>
  <td class="text-truncate ancho pe-3">
    ${videojuego.descripcion}
  </td>
  <td>
    $${videojuego.precio}
  </td> 
  <td>${videojuego.categoria}</td>
  <td>${videojuego.desarrollador}</td>
  <td> 
  <button type="button" 
  class="btn btn-success mx-1" 
  onclick="prepararJuego('${videojuego.codigo}')">
  <i class="bi bi-pencil-fill"></i></button
><button
  type="button"
  class="btn btn-red w-auto text-light mx-1"
  onclick="borrarJuego('${videojuego.codigo}')">
  <i class="bi bi-trash-fill"></i>
</button>
</td>
</tr>`;
}
function limpiarForm() {
  formJuegos.reset();
}
function mostrarAlert(estado, resumeErrores) {
  //estado = true muestro el alert, caso contrario oculto
  let alerta = document.getElementById("alertError");
  if (estado) {
    alerta.className = "alert alert-danger";
    alerta.innerHTML = resumeErrores;
  } else {
    alerta.className = "alert alert-danger d-none";
  }
}
function crearVideojuego() {
  // validaciones en el form
  let resumenErrores = sumarioValidaciones(
    nombre.value,
    descripcion.value,
    categoria.value,
    precio.value,
    imagen.value,
    desarrollador.value,
    requisitos.value
  );
  // si no hay errores creo el juego, guardo en array, subo al local limpio el form y creo la nueva fila
  if (resumenErrores.length === 0) {
    let nuevoJuego = new Videojuego(
      undefined,
      nombre.value,
      descripcion.value,
      categoria.value,
      precio.value,
      imagen.value,
      desarrollador.value,
      requisitos.value
    );
    lista_de_juegos.push(nuevoJuego);
    guardarLocal();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Juego creado",
      showConfirmButton: false,
      timer: 1500,
    });
    mostrarAlert(false,resumenErrores)
    limpiarForm();
    crearFila(nuevoJuego, lista_de_juegos.length);
  } else { // si hay errores, muestro el alert debajo del formulario
    mostrarAlert(true, resumenErrores);
  }
}
function prepararForm(e) {
  e.preventDefault();
  crearVideojuego();
}

