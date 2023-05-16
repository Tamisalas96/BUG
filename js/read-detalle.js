const parametroCodigo = new URLSearchParams(window.location.search);
const lista_de_juegos = JSON.parse(localStorage.getItem('lista_de_juegos')) || [];
const juegoBuscado = lista_de_juegos.find((juego)=> juego.codigo === parametroCodigo.get('codigo'))
const seccionDetalle =  document.getElementById('detalleJuego');


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
          <article class="card h-100 card-login rounded-0 border-0">
            <div class="card-body">
              <h2 class="card-title">Jugar ${juegoBuscado.nombre}</h2>
                <h5 class="">$ ${juegoBuscado.precio}</h5>
                <button class="btn btn-red rounded-0 ms-1 text-light" data-bs-toggle="modal" data-bs-target="#modalProducto1">Comprar</button>
            </div>
          </article>
        </aside>`