import Videojuego from "./classVideojuego.js";
import { sumarioValidaciones } from "./helpers.js";

// variables globales 
let formJuegos = document.getElementById('formJuegos')
let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  descripcion = document.getElementById("descripcion"),
  categoria = document.getElementById("categoria"),
  precio = document.getElementById("precio"),
  imagen = document.getElementById("imagen"),
  desarrollador = document.getElementById("desarrollador"), 
  requisitos = document.getElementById("requisitos");

// let lista_de_juegos = JSON.parse(localStorage.getItem('lista_de_juegos')) || []

//si quiero trabajar con un array de objetos de tipo Videojuego
let lista_de_juegos = localStorage.getItem("lista_de_juegos");
// si lista_de_juegos esta vacio
if (!lista_de_juegos) {
  lista_de_juegos = [];
} else {
  lista_de_juegos = JSON.parse(lista_de_juegos).map(
    (videojuego) =>
      new Videojuego(
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
formJuegos.addEventListener('submit',prepararForm)


cargaInicial()
// funciones 
function cargaInicial() {
  if (lista_de_juegos.length > 0) {
    //dibujar las filas de la tabla
    lista_de_juegos.map((videojuego, indice) => crearFila(videojuego, indice + 1));
  }
  //le muestro el msj que no tengo elementos
}
function crearFila(videojuego, indice) {
  let tablaJuego = document.querySelector("tbody");
  tablaJuego.innerHTML += `<tr>
  <th scope="row">${indice}</th>
  <td>${videojuego.nombre}</td>
  <td class="text-truncate ancho pe-5">
    ${videojuego.descripcion}
  </td>
  <td class="text-truncate ancho pe-5">
    ${videojuego.precio}
  </td>
  <td>${videojuego.categoria}</td>
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

function prepararForm(e){
e.preventDefault() 
crearVideojuego() 
}

function crearVideojuego(){
      //validar el formulario
  let resumeErrores = sumarioValidaciones(nombre.value,
    descripcion.value,
    categoria.value,
    precio.value,
    imagen.value,
    desarrollador.value,
    requisitos.value)

  if (resumeErrores.length === 0) {
    mostrarAlert(false, '')
    let nuevoJuego = new Videojuego(nombre.value,
        descripcion.value,
        categoria.value,
        precio.value,
        imagen.value,
        desarrollador.value,
        requisitos.value)
        console.log(nuevoJuego)
// guardo el juego en un array
lista_de_juegos.push(nuevoJuego)
//guardar en local
localStorage.setItem('lista_de_juegos', JSON.stringify(lista_de_juegos))
limpiarForm()
  } else {
    mostrarAlert(true, resumeErrores)
  }
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

  function limpiarForm() {
    formJuegos.reset()
// mensaje de aprobacion

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Juego creado',
    showConfirmButton: false,
    timer: 1500
  })  
   /* Swal.fire({
    title: 'Juego creado!',
    imageUrl: 'https://i.pinimg.com/564x/ee/12/a9/ee12a906d097550141060360ccc54fd2.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  }) */
}