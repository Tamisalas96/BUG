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
let formularioBusqueda = document.querySelector("#formulario")
let campoBusqueda = document.querySelector("#searchbar");

formularioBusqueda.addEventListener("submit", (eventito)=>{
  eventito.preventDefault();
  if(campoBusqueda.value != null) {
      let contenedor = document.querySelector("#filaJuegos");
      let resultados = 0;
      contenedor.innerHTML = "";
      lista_de_juegos.forEach(Videojuego => {
          console.log(Videojuego)
          if( Videojuego.nombre.toUpperCase().trim().includes(campoBusqueda.value.toUpperCase()) || 
              Videojuego.categoria.toUpperCase().trim().includes(campoBusqueda.value.toUpperCase())){

              Videojuego.imprimirCard();
              resultados++
          }
      });
      if(resultados === 0) contenedor.innerHTML = '<h1 class="text-center p-2">La busqueda no dio resultados</h1>';
  }

});