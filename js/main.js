// This code is written in JavaScript and uses the Leaflet.js library to create a map with various functionalities. 
// It sets up a map object and adds a tile layer from OpenStreetMap. 
// It also adds three markers on the map using L.popup(), as well as a red polyline between five points. 
// Additionally, it adds a marker with a custom icon to serve as a starting point for a route, 
// and then listens for clicks on the map to generate an endpoint for a route. 
// When a route is generated, it animates the marker along the path using setTimeout().

// There are also sections of code that are commented out, 
// which would add functionality for displaying the user's current location on the map and 
// for showing traffic sign icons with custom markers.
var map = L.map("map");
map.setView([-1.0442421026359054, 37.084241245751855], 19);
// L.control.locate().addTo(map);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Added live location
 var lc = L.control.locate().addTo(map);
 lc.start();
//  Option to start or stop at will
//  lc.stopFollowing()
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
var popup1 = L.popup()
    .setLatLng([-1.0468652041580178, 37.08547070384408])
    .setContent("ALUMNI PLAZA");
    // .openOn(map);
var popup2 = L.popup()
    .setLatLng([-1.0451113317843883, 37.08455875278159])
    .setContent("FLT");
    // .openOn(map);
var popup3 = L.popup()
    .setLatLng([-1.046302034239734, 37.085122016674404])
    .setContent("BL5");
    // .openOn(map);
var popup4 = L.popup()
    .setLatLng([-1.04643,37.08536])
    .setContent("LT");
var popup5 = L.popup()
    .setLatLng([-1.04613,37.08542])
    .setContent("LIBRARY");
var popup6 = L.popup()
    .setLatLng([-1.04560,37.08525])
    .setContent("PARKING SPOT");
var popup7 = L.popup()
    .setLatLng([-1.04593,37.08476])
    .setContent("BASKETBALL COURT");
var popup8 = L.popup()
    .setLatLng([-1.04703,37.08598])
    .setContent("MAIN GATE");
var popup9 = L.popup()
    .setLatLng([-1.04640,37.08471])
    .setContent("LADIES HOSTEL");
var popup10 = L.popup()
    .setLatLng([-1.04570,37.08506])
    .setContent("MLT");
var popup11 = L.popup()
    .setLatLng([-1.04712,37.08572])
    .setContent("BOOKSHOP");
var popup12 = L.popup()
    .setLatLng([-1.04709,37.08530])
    .setContent("PARKING SPOT");
popup1.addTo(map);
popup2.addTo(map);
popup3.addTo(map);
popup4.addTo(map);
popup5.addTo(map);
popup6.addTo(map);
popup7.addTo(map);
popup8.addTo(map);
popup9.addTo(map);
popup10.addTo(map);
popup11.addTo(map);
popup12.addTo(map);


	// create a red polyline from an array of LatLng points
var latlngs = [
		[-1.04666,37.08544],
		[-1.04644,37.08514],
		[-1.04632,37.08517],
		[-1.04569,37.08540],
		[-1.04542,37.08470]
	];
	
var polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
	
	// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

// Adding A route on path Plus demonstration of movement
var startIcon = L.icon({
	iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|e85141&chf=a,s,ee00FFFF',
	iconSize: [30, 50],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
  });
  
  var endIcon = L.icon({
	iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
	iconSize: [30, 50],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
  });
  
  var startMarker = null; // To keep track of the starting point
  var endMarker = null;   // To keep track of the destination point
  
  map.on('click', function (e) {
	if (!startMarker) {
	  // Create the start marker
	  startMarker = L.marker(e.latlng, { icon: startIcon }).addTo(map);
	} else if (!endMarker) {
	  // Create the destination marker
	  endMarker = L.marker(e.latlng, { icon: endIcon }).addTo(map);
  
	  // Create a route between start and destination
	  L.Routing.control({
		waypoints: [
		  L.latLng(startMarker.getLatLng().lat, startMarker.getLatLng().lng),
		  L.latLng(endMarker.getLatLng().lat, endMarker.getLatLng().lng)
		]
	  }).addTo(map);
	}
  });

//  //Adding Current Location of the user
// navigator.geolocation.watchPosition(success, error);

// //Remove circle or marker after shifting location
// // let marker, circle;
// function success(pos){

// 	const lat = pos.coords.latitude;
// 	const lng = pos.coords.longitude;
// 	const accuracy = pos.coords.accuracy;

// 	// if (marker) {
// 	// 	map.removeLayer(marker);
// 	// 	map.removeLayer(circle);
// 	// }

// 	L.marker([lat, lng]).addTo(map);
// 	L.circle([lat, lng], {radius: accuracy }).addTo(map);

// 	map.fitBounds(circle.getBounds());
// }

// function error(err) {

// 	if (err.code === 1){
// 		alert("Please allow geolocation access");
// 	} else{
// 		alert("Can't get current location");
// 	}
// }

//This Block shows icons of Traffic Signs
var fiveIcon = L.icon({
	iconUrl: "5.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});
var greenIcon = L.icon({
	iconUrl: "20.png",
	iconSize: [38, 45], // size of the icon
	iconAnchor: [22, 64], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	//iconSize: [65, 50], // size of the icon
	//iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	//popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
var anotherIcon = L.icon({
	iconUrl: "10.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
	
});
var thirtyIcon = L.icon({
	iconUrl: "30.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});
var fortyIcon = L.icon({
	iconUrl: "40.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});
var sixtyIcon = L.icon({
	iconUrl: "60.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});
var eightyIcon = L.icon({
	iconUrl: "80.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});
var seventyIcon = L.icon({
	iconUrl: "70.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});

// Each marker/icon  is placed to designated latitude and longitude 
L.marker([-1.04572,37.08529], { icon: fiveIcon }).addTo(map);
L.marker([-1.0455042145625537, 37.08462582394026], { icon: fiveIcon }).addTo(map);
L.marker([-1.0446567775084865, 37.08472506566978], { icon: fiveIcon }).addTo(map);
L.marker([-1.0465645090217723, 37.0862287626064], { icon: greenIcon }).addTo(map);
L.marker([-1.0415388838627613, 37.079649304218336], { icon: anotherIcon }).addTo(map);
L.marker([-1.0382577761272127, 37.07732780933246], { icon: thirtyIcon }).addTo(map);
L.marker([-1.0386171331043699, 37.072290620882484], { icon: fortyIcon }).addTo(map);
L.marker([-1.0434872206470838, 37.069318733256964], { icon: sixtyIcon }).addTo(map);
L.marker([-1.0470539650233672, 37.05989881522708], { icon: eightyIcon }).addTo(map);
L.marker([-1.044050391088607, 37.071872196516686], { icon: seventyIcon }).addTo(map);