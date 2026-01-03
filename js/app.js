
// VARIABLES, OBJETOS y DOM
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");
const error = document.getElementById("error");

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

}

// INICIO DE CARGA DE EVENTO
formEntrada.addEventListener('submit', comprobarForm)