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
    return alert('Nombre de usuario ya registrado!')
  }else if(isEmailRegistered) {
    return alert('El email ya fue registrado')
  }else{
   Users.push({nombre:nombre, apellido: apellido, email: email, usuario: usuario, contraseña: contraseña})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('REGISTRO EXITOSO!')
   window.location.href = 'login.html'
  }
  

})