export default class Videojuego{
    #codigo;
    #nombre;
    #precio;
    #categoria;
    #imagen;
    #requisitos;
    #desarrollador;
    #reseñas;

    constructor(codigo = uuidv4(),nombre,precio,categoria,imagen,requisitos,desarrollador,reseñas){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#requisitos = requisitos;
        this.#desarrollador = desarrollador;
        this.#resenias = resenias;
    }

    get codigo(){
        return this.#codigo;
    }
    get nombre(){
        return this.#nombre;
    }
    get precio(){
        return this.#precio;
    }
    get categoria(){
        return this.#categoria;
    }
    get imagen(){
        return this.#imagen;
    }
    get requisitos(){
        return this.#requisitos;
    }
    get desarrollador(){
        return this.#desarrollador;
    }
    get resenias(){
        return this.#resenias;
    }

    set codigo(codigo){
        this.#codigo = codigo;
    }
    set nombre(nombre){
        this.#codigo = codigo;
    }
    set precio(precio){
        this.#precio = precio;
    }
    set categoria(categoria){
        this.#categoria = categoria;
    }
    set imagen(imagen){
        this.#imagen = imagen;
    }
    set requisitos(requisitos){
        this.#requisitos = requisitos;
    }
    set desarrollador(desarrollador){
        this.#desarrollador = desarrollador;
    }
    set resenias(resenias){
        this.#resenias = resenias;
    }

    imprimirCard(){
        let contenedorCards = document.getElementById('filaJuegos')
        console.log(contenedorCards)
        let card = document.createElement('aside')
        card.className='col-12 col-md-4 d-flex justify-content-center mb-5'
        card.innerHTML = `
        <div class="card">
        <img src="${this.imagen}" class="card-img-top d-inline-block" alt="...">
        <div class="card-body d-flex flex-column justify-content-between ">
          <h5 class="card-title">${this.nombre}</h5>
          <p class="card-text card-description">${this.descripcion}</p>
          <p class="card-text text-start"><small class="text-body-secondary"><i class="bi bi-clock text-danger"></i>${this.categoria}</small></p>
          <a href="../pages/${this.codigo}.html" class="btn css-button-sliding-to-left--red align-self-start">Ver mas</a>
        </div>
        </div>`    
        console.log(card)
      contenedorCards.appendChild(card)
      }

    toJSON(){
        return{
            codigo: this.codigo,
            nombre: this.nombre,
            precio: this.precio,
            categoria: this.categoria,
            imagen: this.imagen,
            requisitos: this.requisitos,
            desarrollador: this.desarrollador,
            resenias: this.resenias
        }
    }
}