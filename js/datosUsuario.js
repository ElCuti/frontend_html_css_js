/*
JS PARA LA GESTION DE LOS DATOS DEL USER
*/
var nick;

function datosUsuario(nick) {
    sessionStorage.setItem("nick", nick.value);

}

function getDatosUsuario() {
    nick = sessionStorage.getItem("nick");
    console.log(nick);

}

function checkDatosUser() {
    if (nick == null) {
        sessionStorage.setItem("error", "No se ha rellenado correctamente el formulario")
        return false;
    }
    return true;

}