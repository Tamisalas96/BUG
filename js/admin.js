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
let lista_de_juegos = []

// eventos 
formJuegos.addEventListener('submit',prepararForm)

// funciones 
function prepararForm(e){
e.preventDefault() 
CrearJuego() 
}

function CrearJuego(){
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
  }