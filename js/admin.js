import Videojuego from "./classVideojuego.js"

function crearVideojuego(){
    let resumenErrores = sumarioValidaciones(nombre.value,descripcion.value,categoria.value,precio.value,imagen.value,desarrollador.value,requisitos.value)

    if (resumenErrores.length === 0){
        let nuevoJuego = new Videojuego(nombre.value,descripcion.value,categoria.value,precio.value,imagen.value,desarrollador.value,requisitos.value)
        console.log(nuevoJuego);
    }else{
        alert("todo mal")
    }

    function guardarLocal() {
        localStorage.setItem("listaVideojuegos", JSON.stringify(listaVideojuegos));
      }
}