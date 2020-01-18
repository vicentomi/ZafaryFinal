const email = window.document.querySelector('#email');
const password = window.document.querySelector('#password');
const mensaje = window.document.querySelector('#mensaje');
const boton = window.document.querySelector('#boton');
boton.addEventListener('click', validar);

function validar() {

  const emailValue = email.value;
  const passwordValue = password.value;
  
  if (emailValue == "ejemplo@gmail.com" && passwordValue == '123456') {
     console.log('Iniciando sesión');
     console.log('password: ' + passwordValue);
     email.value = '';
     password.value = '';
     email.focus();
     password.focus();

     
  } else {
    console.log('Datos incorrectos');
  }
}
