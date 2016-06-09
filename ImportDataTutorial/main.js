//Create and configure the map
function initMap() {

  // A reference to the div that the map will be loaded in (getElementById)
  var mapDiv = document.getElementById('map');
  // Here we create a new Goggle Maps object
  var map = new google.maps.Map(mapDiv , {
    // Options for the map: center and zoom
    center: {lat: 51.508742, lng: -0.120850},
    zoom: 8
  });
}