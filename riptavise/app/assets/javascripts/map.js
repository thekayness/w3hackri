// TODO: Create a map variable
var map;
var markers = [];
var lines = [];
// TODO: Complete the following function to initialize the map
function initMap() {
// TODO: use a constructor to create a new map JS object. You can use the coordinates
// we used, 40.7413549, -73.99802439999996 or your own!
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.7001, lng: -71.4162},
		zoom: 10
	});
	// $.ajax({url: "/home/stops", success: function(results){
	// 	console.log(results);
	// }});

	 document.getElementById('show-stops').addEventListener('click', showStops);
     document.getElementById('hide-stops').addEventListener('click', hideStops);

     document.getElementById('show-routes').addEventListener('click', showRoutes);
     document.getElementById('hide-routes').addEventListener('click', hideRoutes);
     var route_input = $('#route_input');
     var authenticity_token = $();
     
     $("#route_form").submit(function(event){
       			event.preventDefault();
       			console.log(route_input.val());
       		$.post('/home/shape', {data: {
       				shape: {shape_id: route_input.value}
       			}}).done(function(results) {
       				console.log(route_input.val());
	       		}
       		);
	});
}
	$("#vehicle_form").submit(function(event){
       			event.preventDefault();
       			console.log(trip_input.val());
       		$.post({
       			url: "/home/shape",
       			type: "POST",

       			success: function(results) {
       				console.log(results);
       			// 	var route = new google.maps.Polyline({
			       //  path: lineCoords,
			       //  geodesic: true,
			       //  strokeColor: '#FF0000',
			       //  strokeOpacity: 1.0,
			       //  strokeWeight: 2
        		// });

       			route.setMap(map);
	       		}
       		});
	});

function populateInfoWindow(marker, infowindow) {
	// Check to make sure the infowindow is not already opened on this marker.
	if (infowindow.marker != marker) {
	  infowindow.marker = marker;
	  infowindow.setContent('<div>' + marker.title + '</div>');
	  infowindow.open(map, marker);
	  // Make sure the marker property is cleared if the infowindow is closed.
	  infowindow.addListener('closeclick',function(){
	    infowindow.setMarker(null);
	  });
	}
}

function showRoutes() {
	console.log("hiiiiiiiiii");
	$.ajax({
		url: "/home/shapes",
		success: function(results) {
			// console.log(results[0]);
			// console.log(results[Object.keys(results)[0]]);
			var keys = Object.keys(results);
			var line = [];	
			for(var i = 0, len = keys.length; i < len; i++ ) {
				lineArray = results[keys[i]];
				var lineCoords = [];
				for(var j = 0, leng = lineArray.length; j < leng; j++ ) {
					// console.log(results[keys[i]][j]);
						lineCoords.push({lat: lineArray[j].shape_pt_lat, lng: lineArray[j].shape_pt_lng});
			        }
				var route = new google.maps.Polyline({
			        path: lineCoords,
			        geodesic: true,
			        strokeColor: '#FF0000',
			        strokeOpacity: 1.0,
			        strokeWeight: 2
        		});

       			route.setMap(map);
       			lines.push(route);
			}
			var largeInfowindow = new google.maps.InfoWindow();
			for(var i = 0, len = results.length; i < len; i++) {
		    		routes.push({lat: results[i].lat, lng: results[i].lng});
		          // Create an onclick event to open an infowindow at each marker.
		        // marker.addListener('click', function() {
	         //    	populateInfoWindow(this, largeInfowindow);
	         //  	});
		};
			
      	}
	});
};

function showStops() {
	// console.log("hiiiiiiiiii");
	$.ajax({
		url: "/home/stops",
		success: function(results) {
			// console.log(results);
			var largeInfowindow = new google.maps.InfoWindow();
			for(var i = 0, len = results.length; i < len; i++) {
				var mapIcon = "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png";
				var marker = new google.maps.Marker({
		    		position: {lat: results[i].lat, lng: results[i].lng},
		    		map: map,
		    		icon: mapIcon,
		    		title: results[i].stop_name + " " + results[i].stop_id
	  			});

	  			markers.push(marker);
		          // Create an onclick event to open an infowindow at each marker.
		        marker.addListener('click', function() {
	            populateInfoWindow(this, largeInfowindow);
	          });
			}
		}
	});
};

function showStops() {
	// console.log("hiiiiiiiiii");
	$.ajax({
		url: "/home/stops",
		success: function(results) {
			// console.log(results);
			var largeInfowindow = new google.maps.InfoWindow();
			for(var i = 0, len = results.length; i < len; i++) {
				var mapIcon = "https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png";
				var marker = new google.maps.Marker({
		    		position: {lat: results[i].lat, lng: results[i].lng},
		    		map: map,
		    		icon: mapIcon,
		    		title: results[i].stop_name + " " + results[i].stop_id
	  			});

	  			markers.push(marker);
		          // Create an onclick event to open an infowindow at each marker.
		        marker.addListener('click', function() {
	            populateInfoWindow(this, largeInfowindow);
	          });
			}
		}
	});
};

	


        
// This function will loop through the listings and hide them all.
function hideStops() {
	for (var i = 0; i < markers.length; i++) {
 		markers[i].setMap(null);
	}
}

function hideRoutes() {
	console.log('whatup');
	console.log(lines.length);
	for (var i = 0; i < lines.length; i++) {
		// console.log(lines[i]);
 		lines[i].setMap(null);
	}
}