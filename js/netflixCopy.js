const btnCallLogin = document.getElementById('callLogin');
const divLogin = document.getElementById('divLogin');
const btnLogin = document.getElementById('btnLogin');
const emailLogin = document.getElementById('inputEmailLogin');
const passwordLogin = document.getElementById('inputPasswordLogin');
const divRegister = document.getElementById('divRegister');
const btnCallRegister = document.getElementById('callRegister');
const btnRegister = document.getElementById('btnRegister');
const nombreUser = document.getElementById('inputNombre');
const correoUser = document.getElementById('inputCorreo');
const passwordUser = document.getElementById('inputPassword');
const usuarios = [
    {
        nombre: "Yoiner",
        correo: "yjsantiago15@gmail.com",
        password: "123"
    }
];
btnCallLogin.addEventListener('click', () => {
    // callDivLogin();
    divRegister.style.display = 'none';
    divLogin.style.display = 'block';
});

btnCallRegister.addEventListener('click', () => {
    divLogin.style.display = 'none';
    divRegister.style.display = 'block';
});
btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    usuarios.push({ nombre: nombreUser.value, correo: correoUser.value, password: passwordUser.value });
    alert('Registro Completado');
    // callDivLogin();
    divRegister.style.display = 'none';
    divLogin.style.display = 'block';
});
console.log(usuarios);

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    for (const element of usuarios) {
        if (element.correo === emailLogin.value  &&  element.password === passwordLogin.value) {
         alert('Iniciaste sesion correctamente, Bienvenido ' + element.nombre);
         window.location.href = "./netflix_perfiles.html"
    } else {
         alert('Credenciales incorrectas');
    }
    }
    
} );

// function callDivLogin(){
//     divRegister.style.display = 'none';
//     divLogin.style.display = 'block';
// }

//Datos de la pagina netflix_perfiles.html
// const btnPerfil = document.getElementById('perfilImg');

// btnPerfil.addEventListener('click', () => {
//     console.log('hola estas aca');
//     window.location.href = "./netflixPerfil.html"
// });