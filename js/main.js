var map = L.map("map");
map.setView([-1.0442421026359054, 37.084241245751855], 20);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Adding A route on path Plus demonstration of movement
// L.marker([-1.0466962831036657, 37.0854545942582]).addTo(map);
// L.marker([-1.045213268668465, 37.08471162235977]).addTo(map);
// map.on('click', function (e) {
// 	console.log(e)
// 	var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

// L.Routing.control({
// 	waypoints: [
// 	  L.latLng(-1.0466962831036657, 37.0854545942582),
// 	  L.latLng(e.latlng.lat, e.latlng.lng)
// 	]
// }).on('routesfound', function (e) {
				// var routes = e.routes;
				// console.log(routes);

				// e.routes[0].coordinates.forEach(function (coord, index) {
				// 	setTimeout(function () {
				// 		marker.setLatLng([coord.lat, coord.lng]);
				// 	}, 100 * index)
				// })
//   }).addTo(map);
// })

 //Adding Current Location of the user
navigator.geolocation.watchPosition(success, error);

function success(pos){

	const lat = pos.coords.latitude;
	const lng = pos.coords.longitude;

	L.marker([lat, lng]).addTo(map);
	L.circle([lat, lng], {radius: accuracy }).addTo(map);

	map.fitBounds(circle.getBounds());
}

function error(err) {

	if (err.code === 1){
		alert("Please allow geolocation access");
	} else{
		alert("Can't get current location");
	}
}

//This Block shows icons of Traffic Signs
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
L.marker([-1.0465645090217723, 37.0862287626064], { icon: greenIcon }).addTo(map);
L.marker([-1.0415388838627613, 37.079649304218336], { icon: anotherIcon }).addTo(map);
L.marker([-1.0382577761272127, 37.07732780933246], { icon: thirtyIcon }).addTo(map);
L.marker([-1.0386171331043699, 37.072290620882484], { icon: fortyIcon }).addTo(map);
L.marker([-1.0434872206470838, 37.069318733256964], { icon: sixtyIcon }).addTo(map);
L.marker([-1.0470539650233672, 37.05989881522708], { icon: eightyIcon }).addTo(map);
L.marker([-1.044050391088607, 37.071872196516686], { icon: seventyIcon }).addTo(map);
