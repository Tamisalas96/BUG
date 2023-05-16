export default class Videojuego{
    #codigo;
    #nombre;
    #descripcion;
    #categoria;
    #precio;
    #imagen;
    #desarrollador;
    #requisitos;

    constructor(codigo = uuidv4(), nombre,descripcion,categoria,precio,imagen,desarrollador,requisitos){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#categoria = categoria;
        this.#precio = precio;
        this.#imagen = imagen;
        this.#desarrollador = desarrollador;
        this.#requisitos = requisitos;
    }
// getters
    get codigo(){
        return this.#codigo;
    }
    get nombre(){
        return this.#nombre;
    }
    get descripcion(){
        return this.#descripcion;
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
//setters
    set codigo(codigo){
        this.#codigo = codigo;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    set descripcion(descripcion){
        this.#descripcion = descripcion;
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

    imprimirCard(){
        let contenedorCards = document.getElementById('filaJuegos')
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
      contenedorCards.appendChild(card)
      }

    toJSON(){
        return{
            codigo: this.codigo,
            nombre: this.nombre,
            descripcion: this.descripcion,
            categoria: this.categoria,
            precio: this.precio,
            imagen: this.imagen,
            desarrollador: this.desarrollador,
            requisitos: this.requisitos,
        }
    }
}