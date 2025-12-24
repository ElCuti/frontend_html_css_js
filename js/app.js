
// VARIABLES, OBJETOS y DOM
const nickInput = document.getElementById("nick");
const tamanoInput = document.getElementById("tamano");
const formEntrada = document.getElementById("formEntrada");

// FUNCIONES DE EVENTO
function comprobarForm(event) {
    // COMPROBAR CAMBIOS
    if (nickInput.value == "") {
        alert("FALTA UN NICK");
        event.preventDefault();
        nickInput.focus();
        return false;

    }
    else if (tamanoInput.value == "0") {
        alert("FALTA EL TAMAÑO DE JUEGO");
        event.preventDefault();
        tamanoInput.focus();
        return false;
    }
}

// INICIO DE CARGA DE EVENTO
formEntrada.addEventListener('submit', comprobarForm)