const mapLocation = {
    items:{
        latitud: undefined,
        longitud: undefined,
        map: undefined
    },
    init: function (){
        mapLocation.items.map = new google.maps.Map(document.getElementById("map"), {
            zoom: 5,
            center: { lat: -9.1191427, lng: -77.0349046 },
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        });
        mapLocation.setUp();
    } ,
    setUp: function(){
        document.getElementById("encuentrame").addEventListener("click", mapLocation.buscar);
    },
    buscar :function(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(mapLocation.exito, mapLocation.error);
        }
    },

    exito: function(posicion){
        
        mapLocation.items.latitud = posicion.coords.latitude;
        mapLocation.items.longitud = posicion.coords.longitude;

        var miUbicacion = new google.maps.Marker({
            position: { lat: mapLocation.items.latitud, lng: mapLocation.items.longitud },
            animation: google.maps.Animation.DROP,
            map: mapLocation.items.map
        });
        mapLocation.items.map.setZoom(17);
        mapLocation.items.map.setCenter({ lat: mapLocation.items.latitud, lng: mapLocation.items.longitud });
    },

    error: function(){
        alert("Tenemos un  problema con encontrar tu ubicación");
    }
    
}

$(document).ready(mapLocation.init);


