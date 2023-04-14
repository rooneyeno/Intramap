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
var popup = L.popup()
    .setLatLng([-1.0468652041580178, 37.08547070384408])
    .setContent("ALUMNI PLAZA")
    .openOn(map);
var popup = L.popup()
    .setLatLng([-1.0451113317843883, 37.08455875278159])
    .setContent("FLT")
    .openOn(map);
var popup = L.popup()
    .setLatLng([-1.046302034239734, 37.085122016674404])
    .setContent("BL5")
    .openOn(map);

	// create a red polyline from an array of LatLng points
var latlngs = [
		[-1.04666,37.08544],
		[-1.04644,37.08514],
		[-1.04632,37.08517],
		[-1.04569,37.08540],
		[-1.04542,37.08470]
	];
	
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
	
	// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

// Adding A route on path Plus demonstration of movement
//L.marker([-1.045213268668465, 37.08471162235977]).addTo(map);
var startIcon = L.icon({
	iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|e85141&chf=a,s,ee00FFFF',
	iconSize: [30, 50],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});
// var endIcon = L.icon({
// 	iconUrl: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
// 	iconSize: [30, 50],
// 	iconAnchor: [22, 64],
// 	popupAnchor: [-3, -76],
// });
var marker = L.marker([-1.0466962831036657, 37.0854545942582], {icon: startIcon}).addTo(map);
// var marker = L.marker([-1.0466962831036657, 37.0854545942582]).addTo(map);
map.on('click', function (e) {
	console.log(e)
	// var newmarker = L.marker([e.latlng.lat, e.latlng.lng], {icon: endIcon}).addTo(map);
	var newmarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

	L.Routing.control({
		waypoints: [
		L.latLng(-1.0466962831036657, 37.0854545942582),
		L.latLng(e.latlng.lat, e.latlng.lng)
		]
	}).on('routesfound', function (e) {
					var routes = e.routes;
					console.log(routes);

					e.routes[0].coordinates.forEach(function (coord, index) {
						setTimeout(function () {
							marker.setLatLng([coord.lat, coord.lng]);
						}, 100 * index)
					})
	}).addTo(map);
})

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
