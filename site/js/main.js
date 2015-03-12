function initialize() {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(-42.342305, 173.803711),
    styles: [{"featureType": "road","elementType": "geometry","stylers": [{"color": "#b1ab85"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#8cc0c3"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#cde6cf"}]},{"featureType": "landscape.man_made","elementType": "geometry","stylers": [{"color": "#efede8"}]}]
    }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  setMarkers(map, markers);
  var resetMapButton = document.createElement("div");
    resetMapButton.innerHTML = "<button>Show all Restaurants</button>";
    map.controls[google.maps.ControlPosition.TOP].push(resetMapButton);
    resetMapButton.addEventListener("click", function(){
      // deselectAllMarkers();
      map.setCenter(mapOptions.center);
      map.setZoom(mapOptions.zoom);
    })
}

var markers = [
  ['Strawberry Fare, Wellington', -41.295344, 174.783509, 1],
  ['Strawberry Fare, Christchurch', -43.520266, 172.626249, 2]
];

function setMarkers(map, locations) {
  var image = 'img/map-marker-icon.png';
  for (var i = 0; i < locations.length; i++) {
    var marker = locations[i];
    var myLatLng = new google.maps.LatLng(marker[1], marker[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
      google.maps.event.addListener(marker, 'click', function() {
      map.panTo(this.getPosition());
      map.setZoom(map.getZoom() + 7);
      map.setCenter(this.getPosition());
      });
  }
}


google.maps.event.addDomListener(window, 'load', initialize);