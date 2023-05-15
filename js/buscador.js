const juegosElements = document.querySelectorAll(".juego");

const juegosObj = Array.from(juegosElements).map(juegoElement => {
  const nombre = juegoElement.querySelector(".card-title").textContent;
  const imagen = juegoElement.querySelector(".card-img-top").src;
  const descripcion = juegoElement.querySelector(".card-text").textContent;
  const generos = Array.from(juegoElement.querySelectorAll(".card-text")).map(generoElement => generoElement.textContent);
  return {
    nombre,
    imagen,
    descripcion,
    generos,
    getElement: function() {
      juegoElement.querySelector(".card-title").textContent = this.nombre;
      juegoElement.querySelector(".card-img-top").src = this.imagen;
      juegoElement.querySelector(".card-text").textContent = this.descripcion;
      return juegoElement;
    }
  };
});


function buscarJuegos(event) {
  event.preventDefault();
  const busqueda = document.querySelector("#searchbar").value.toLowerCase().trim();
  const resultados = juegosObj.filter(juego => {
    const nombreIncluido = juego.nombre.toLowerCase().includes(busqueda);
    const generoIncluido = juego.generos.some(genero => genero.toLowerCase().includes(busqueda));
    return nombreIncluido || generoIncluido;
  });
  const contenedorResultados = document.querySelector("#resultados");
  contenedorResultados.innerHTML = "";
  contenedorResultados.classList.add("container-fluid", "mt-3", "row")
  if (resultados.length > 0) {
    resultados.forEach(resultado => {
      contenedorResultados.appendChild(resultado.getElement());
    });
  } else {
    const mensajeError = document.createElement("div");
    mensajeError.classList.add("alert", "alert-danger", "container");
    mensajeError.textContent = "No se encontraron resultados";
    contenedorResultados.appendChild(mensajeError);
  }
}

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", buscarJuegos);