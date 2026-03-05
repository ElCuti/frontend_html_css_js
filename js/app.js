
// VARIABLES, OBJETOS y DOM
var nickInput;
var tamanoInput;
var formEntrada;
var email;
var error;
var avatarItems;
var itemImg;
var avatarCont;



// FUNCIONES DE EVENTO
function comprobarForm(event) {
    // COMPROBAR CAMBIOS
    if (nickInput.value.match(/(?<!\S)[0-9]/)) {
        event.preventDefault();
        nickInput.focus();
        error.innerText = "El campo nick no puede comenzar con un numero";
        return false;
    }
    if (tamanoInput.value == "0") {
        event.preventDefault();
        tamanoInput.focus();
        error.innerText = "El tamaño de juego debe estar definido";
        return false;
    }
    datosUsuario(nickInput, tamanoInput, email);
    historicoUsuario(nickInput);
    return true;
}
function moviendoImg(event) {
    itemImg = event.target;
}

function cambiarImg(event) {
    avatarCont.src = itemImg.src;
}


//Carga de objetos del DOM comprobaciones y eventos del formulario
function domCargado() {
    //Captura de todos los elementos necesarios
    nickInput = document.getElementById("nick");
    tamanoInput = document.getElementById("tamano");
    formEntrada = document.getElementById("formEntrada");
    email = document.getElementById("email");
    error = document.getElementById("error");


    //Comprobación de error de HTML
    if (sessionStorage.getItem("error") != null) {
        error.innerText = sessionStorage.getItem("error");
        sessionStorage.removeItem("error");
    }
    formEntrada.addEventListener('submit', comprobarForm);


    //EVENTOS DEL DRAG&DROP
    avatarItems = document.getElementsByClassName("avatarImgItem");
    for (let item of avatarItems) {
        item.addEventListener('dragstart', moviendoImg);
    }
    avatarCont = document.getElementById("avatarImg");
    avatarCont.addEventListener('dragover', e => { e.preventDefault() })
    avatarCont.addEventListener('drop', cambiarImg);
}

// INICIO DE CARGA DE EVENTO
document.addEventListener('DOMContentLoaded', domCargado);

//Geolocalizacion
datoGeolocalizacion();