/*
JS PARA LA GESTION DE LOS DATOS DEL USER
*/
var nick;
var geolocalizacionTxt;

function datosUsuario(nick, email, tamano) {
    sessionStorage.setItem("nick", nick.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("tamano", tamano.value);
    sessionStorage.setItem("geolocalizacion", geolocalizacionTxt);


}

function getDatosUsuario() {
    nick = sessionStorage.getItem("nick");
    email = sessionStorage.getItem("email");
    tamano = sessionStorage.getItem("ntamanok");
    geolocalizacion = sessionStorage.getItem("geolocalizacion");

}

function checkDatosUser() {
    if (nick == null) {
        sessionStorage.setItem("error", "No se ha rellenado correctamente el formulario")
        return false;
    }
    return true;

}

function datoGeolocalizacion() {
    if (!navigator.geolocation) {
        geolocalizacionTxt = "El navegador no es compatible con API Geolocation";
    }
    else {
        navigator.geolocation.getCurrentPosition(
            // Callback de Éxito
            (position) => {
                geolocalizacionTxt = 'Latitud: ' + position.coords.latitude + ', longitud: ' + position.coords.longitude;
            },
            // Callback de Error
            () => {
                geolocalizacionTxt = "La geolocalización no se ha podido realizar";
            }
        );
    }
}

function historicoUsuario(nick) {
    let historicoStorage = localStorage.getItem('historico');
    let historico;

    if (historicoStorage == null) {
        historico = [];
    } else {
        historico = JSON.parse(historicoStorage);
    }

    let registroUsurio = {
        nick: nick.value,
        fecha: Date.now()
    }

    historico.push(registroUsurio);
    localStorage.setItem('historico', JSON.stringify(historico));
}
