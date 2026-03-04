/*
JS PARA LA GESTION DE LOS DATOS DEL USER
*/
var nick;
var geolocalizacionTxt;

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