// TODO: Create a map variable
var map;
// TODO: Complete the following function to initialize the map
function initMap() {
// TODO: use a constructor to create a new map JS object. You can use the coordinates
// we used, 40.7413549, -73.99802439999996 or your own!
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.7001, lng: -71.4162},
		zoom: 10
	});
	
}