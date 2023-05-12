import Videojuego from "./classVideojuego.js";
import { sumarioValidaciones } from "./helpers.js";

// variables globales 
let formJuegos = document.getElementById('formJuegos')
let codigo = document.getElementById("codigo"),
  nombre = document.getElementById("nombre"),
  precio = document.getElementById("precio"),
  categoria = document.getElementById("categoria"),
  imagen = document.getElementById("imagen"),
  requisitos = document.getElementById("requisitos"),
  desarrollador = document.getElementById("desarrollador") 
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
  let resumeErrores = sumarioValidaciones(nombre.value,categoria.value,requisitos.value,desarrollador.value);

  if (resumeErrores.length === 0) {

    let nuevoJuego = new Videojuego(nombre.value,precio.value,categoria.value,imagen.value,requisitos.value,desarrollador.value)
console.log(nuevoJuego)
// guardo el juego en un array
lista_de_juegos.push(nuevoJuego)
// guaradr en local storage
  } else {
    let alerta = document.getElementById("alertError")
    alerta.className = "alert alert-danger";
    alerta.innerHTML = resumeErrores;
  }
}