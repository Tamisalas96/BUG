import Usuario from "./usuario.js"
// funcion bootstrap
(() => {
      const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
  // variables 
  let formlogin = document.getElementById('formlogin')
  let administrador = new Usuario("admin@admin.com", "contraseña")
  let usuario = new Usuario("user@user.com", "12345678")
  let perfilSeleccionado = JSON.parse(sessionStorage.getItem('perfil')) || JSON.parse(sessionStorage.getItem(usuario));
//eventos 
formlogin.addEventListener("submit", login)

//funciones
function login(e){
  e.preventDefault()
  if (email.value === administrador.email && inputPassword.value === administrador.contrasena){
    console.log("entrar")
    sessionStorage.setItem('perfil', JSON.stringify(administrador))
    perfilSeleccionado = JSON.parse(sessionStorage.getItem(administrador));
    window.location.href = window.location.origin + '/pages/admin.html';
  } else {
    console.log("no entrar")
    sessionStorage.setItem('perfil', JSON.stringify(usuario))
    perfilSeleccionado = JSON.parse(sessionStorage.getItem(usuario));
    window.location.href = window.location.origin + '/pages/login.html';
  }
}
