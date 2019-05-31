// Create a map object
var myMap = L.map("myMap", {
  center: [40.7440, -74.0324],
  zoom: 13
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

var redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  // iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  // iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

d3.json("/starting_stations").then(station=> {
   
  for (var i = 0; i < station.length; i++) {

    L.marker(([station[i].startstationlatitude, station[i].startstationlongitude]), {icon: greenIcon})
// bind a popup containing its name and add it to the map
  .bindPopup("<h6>" + station[i].startstationname + "</h6>").addTo(myMap)
}
});


d3.json("/ending_stations").then(estation=> {

    for (var i = 0; i < estation.length; i++) {

      L.marker(([estation[i].endstationlatitude, estation[i].endstationlongitude]), {icon: redIcon})
  // bind a popup containing its name and add it to the map
    .bindPopup("<h6>" + estation[i].endstationname + "</h6>").addTo(myMap)
}
});


  