function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:17.5553, lng: 78.3487};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hyderabad, India' // Title Location
    });
}