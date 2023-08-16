let marker, map

// const newLocal = _xdc_._exuz && _xdc_._exuz([0, null, 1, null, null, [1]]);

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    })

    const marker = new google.maps.Marker({
        posicion: posicion,
        map,
        title: "Posición Inicial"
    })
    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })

    geoPosition()

}

// Agregar el event listener al evento 'touchmove' de manera sencilla
document.addEventListener('touchmove', () => {
    // Tu código para manejar el evento 'touchmove' aquí
console.log('Se ha detectado un movimiento táctil.');
}, { passive: true });

function geoPosition() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition() 
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(posicion) {
    const nuevaPos = {
        lat: posicion.coords.latitud,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPosS)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.log(error)
}