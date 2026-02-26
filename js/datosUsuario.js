/*
JS PARA LA GESTION DE LOS DATOS DEL USER
*/

function datosUsuario(nick) {
    sessionStorage.setItem("nick", nick.value)
}

function mostrarDatosUsuario() {
    let nick = sessionStorage.getItem("nick")
    console.log(nick);
}