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