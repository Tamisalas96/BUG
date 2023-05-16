const parametroCodigo = new URLSearchParams(window.location.search);
const lista_de_juegos = JSON.parse(localStorage.getItem('lista_de_juegos')) || [];
const juegoBuscado = lista_de_juegos.find((juego)=> juego.codigo === parametroCodigo.get('codigo'))
const seccionDetalle =  document.getElementById('detalleJuego');


let usuarioLogeado = JSON.parse(sessionStorage.getItem("perfil")) || {};

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

if(usuarioLogeado.email){
    seccionDetalle.innerHTML = `
    <aside class="col-md-6 col-lg-6 mb-5">
      <article class="card h-100 card-login rounded-0 border-0">
        <div>
          <img src="${juegoBuscado.imagen}" class="card-img-top rounded-0"/>
        </div>
      </article>
    </aside>
    <aside class="col-md-6 col-lg-6 mb-5">
      <article class="card h-100 card-login rounded-0 border-0">
        <div class="card-body">
          <h5 class="card-title">${juegoBuscado.nombre}</h5>
          <p class="card-text">
            ${juegoBuscado.descripcion}
          </p>
          <hr>
          <p>
            Desarrollador: ${juegoBuscado.desarrollador}.
          </p>
          <hr>
          <p>
            Categoria: ${juegoBuscado.categoria}.
          </p>
        </div>
      </article>
    </aside>
    <aside>
      <article class="card h-100 card-login rounded-0 border-0">
        <div class="card-body">
          <h2 class="card-title">Jugar ${juegoBuscado.nombre}</h2>
            <h5 class="">$ ${juegoBuscado.precio}</h5>
            <button class="btn btn-red rounded-0 ms-1 text-light">Comprar</button>
        </div>
      </article>
    </aside>
    <aside class="col-md-6 col-lg-6 mb-3 mt-5">
      <article class="card card-login rounded-0 border-0 container h-100">
          <h2 class="mt-3">Reseña</h2>
          <hr>
          <form id="form-comentario">
              <div>
                <p class="form-label fw-bold">${usuarioLogeado.email}</p>
              </div>
              <hr>
              <div>
                <label for="comentario" class="form-label">Comentario:</label>
                <textarea class="form-control rounded-0" id="comentario" name="comentario" minlength ="5" required></textarea>
                <div class="valid-feedback"><i class="bi bi-person-check-fill"></i></i></div>
                <div class="invalid-feedback">Ingrese un comentario</div>
              </div>
              <div class="form-check mt-3">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
                Recomendaria este juego
              </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  No lo recomendaria
                </label>
              </div>
              <button class="btn btn-red rounded-0 text-light mt-3 mb-3" type="submit">Publicar comentario</button>
            </form>
      </article>
    </aside>
    <aside class="col-md-6 col-lg-6 mb-3 mt-5">
      <article class="card card-login border-0 rounded-0 h-100">
        <div class="card-body">
            <h2 class="card-title">Comentarios</h2>
            <hr>
            <div id="comentarios">
            </div>
        </div>
      </article>
     </aside>
    `
}else{
    seccionDetalle.innerHTML = `
        <aside class="col-md-6 col-lg-6 mb-3">
          <article class="card h-100 card-login rounded-0 border-0">
            <div>
              <img src="${juegoBuscado.imagen}" class="card-img-top rounded-0"/>
            </div>
          </article>
        </aside>
        <aside class="col-md-6 col-lg-6 mb-3">
          <article class="card h-100 card-login rounded-0 border-0">
            <div class="card-body">
              <h5 class="card-title">${juegoBuscado.nombre}</h5>
              <p class="card-text">
                ${juegoBuscado.descripcion}
              </p>
              <hr>
              <p>
                Desarrollador: ${juegoBuscado.desarrollador}.
              </p>
              <hr>
              <p>
                Categoria: ${juegoBuscado.categoria}.
              </p>
            </div>
          </article>
        </aside>
        <aside>
          <article class="card h-100 card-login rounded-0 border-0 mt-4">
            <div class="card-body">
              <h2 class="card-title">Jugar ${juegoBuscado.nombre}</h2>
                <h5 class="">$ ${juegoBuscado.precio}</h5>
                <a href="/pages/login.html" class="btn btn-red rounded-0 ms-1 text-light">Comprar</a>
            </div>
          </article>
        </aside>`

}

