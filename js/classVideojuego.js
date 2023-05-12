export default class Videojuego{
    #codigo;
    #nombre;
    #precio;
    #categoria;
    #imagen;
    #requisitos;
    #desarrollador;

    constructor(nombre,precio,categoria,imagen,requisitos,desarrollador){
        this.#codigo = uuidv4();
        this.#nombre = nombre;
        this.#precio = precio;
        this.#categoria = categoria;
        this.#imagen = imagen;
        this.#requisitos = requisitos;
        this.#desarrollador = desarrollador;
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

    set codigo(codigo){
        this.#codigo = codigo;
    }
    set nombre(nombre){
        this.#nombre = nombre;
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
            precio: this.precio,
            categoria: this.categoria,
            imagen: this.imagen,
            requisitos: this.requisitos,
            desarrollador: this.desarrollador,
        }
    }
}