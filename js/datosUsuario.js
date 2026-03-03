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

function historicoUsuario(nick) {
    let historicoStorage = localStorage.getItem('historico');
    let historico;
    if (historicoStorage == null) {
        let historico = [];
    }
    else {
        historico = JSON.parse(historicoStorage);
    }
    let registroUsurio = {
        nick: nick.value,
        fecha: Date.now()
    }

    historico.push(registroUsurio);
    localStorage.setItem('historico', JSON.stringify(historico));
}