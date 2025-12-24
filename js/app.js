const botonJugar = document.getElementById("jugar");

function comprobarForm() {
    alert("TEST")
}
function ejecutarAccion() {
    alert("Doble TEST")
    botonJugar.removeEventListener('click', ejecutarAccion);
}

botonJugar.addEventListener('click', comprobarForm);
botonJugar.addEventListener('click', ejecutarAccion);