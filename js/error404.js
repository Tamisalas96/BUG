let usuarioLogeado = JSON.parse(sessionStorage.getItem("perfil")) || {} ;

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
window.borrarSessionStorage = () => {
    sessionStorage.clear();
  }
  