const formUser= document.querySelector('#formUser')
formUser.addEventListener('submit', (e)=>{
  e.preventDefault()
  const nombre = document.querySelector('#nombre').value
  const apellido = document.querySelector('#apellido').value
  console.log(apellido)
  const email = document.querySelector('#email2').value
  console.log(email)
  const usuario = document.querySelector('#usuario').value
  const contraseña = document.querySelector('#contraseña').value
   
  const Users= JSON.parse(localStorage.getItem('users')) || []
  const isUserRegistered = Users.find(user => user.usuario === usuario)
  const isEmailRegistered = Users.find(user => user.email === email)
  if(isUserRegistered){
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario ya esta registrado'
      })
  }else if(isEmailRegistered) {
    return Swal.fire({
        title: '<strong>Email ya registrado</strong>',
        icon: 'info',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
  }else{

   Users.push({nombre:nombre, apellido: apellido, email: email, usuario: usuario, contraseña: contraseña})
    localStorage.setItem('users', JSON.stringify(Users))
    Swal.fire(
        
        'Registro exitoso!',
        'question'
      ),
    window.location.href= 'login.html'
  }
  

})