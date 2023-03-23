var map = L.map("map");
map.setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var greenIcon = L.icon({
	iconUrl: "../img/leaf-green.jpg",
	iconSize: [38, 95], // size of the icon
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
var anotherIcon = L.icon({
	iconUrl:
		"../img/png-transparent-landmark-map-marker-green-location-google-maps-green-google-green-map.png",
	iconSize: [38, 45],
	iconAnchor: [22, 64],
	popupAnchor: [-3, -76],
});
L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);
L.marker([51.49, -0.08], { icon: anotherIcon }).addTo(map);
