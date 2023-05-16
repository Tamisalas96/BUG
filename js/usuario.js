export default class Usuario{
    #email;
    #contrasena;

    constructor(email, contrasena){
        this.#email = email;
        this.#contrasena = contrasena;
    }
// getters
    get email(){
        return this.#email;
    }
    get contrasena(){
        return this.#contrasena;
    }
//setters
    set email(email){
        this.#email = email;
    }
    set contrasena(contrasena){
        this.#contrasena = contrasena;
    }

    toJSON(){
        return{
            email: this.email,
            contrasena: this.contrasena
        }
    }
}