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

var stops = {
	{
	   "type": "FeatureCollection",
	   "features": [
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.829771,41.377 ]
	    },
	    "properties": {
	    "stop_id":"5",
	    "stop_name":"WESTERLY TOWN HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.82668,41.378328 ]
	    },
	    "properties": {
	    "stop_id":"10",
	    "stop_name":"GROVE NS WILCOX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.829808,41.381108 ]
	    },
	    "properties": {
	    "stop_id":"20",
	    "stop_name":"WESTERLY RAILROAD STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.82572,41.381038 ]
	    },
	    "properties": {
	    "stop_id":"25",
	    "stop_name":"HIGH FS GROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46062,41.424357 ]
	    },
	    "properties": {
	    "stop_id":"50",
	    "stop_name":"BOON OPP PERKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460504,41.424363 ]
	    },
	    "properties": {
	    "stop_id":"55",
	    "stop_name":"BOON FS PERKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461892,41.424339 ]
	    },
	    "properties": {
	    "stop_id":"60",
	    "stop_name":"S PIER OPP SUMMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462071,41.424602 ]
	    },
	    "properties": {
	    "stop_id":"65",
	    "stop_name":"S PIER FS SUMMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464052,41.425304 ]
	    },
	    "properties": {
	    "stop_id":"75",
	    "stop_name":"S PIER NS FRANK LOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463625,41.425305 ]
	    },
	    "properties": {
	    "stop_id":"80",
	    "stop_name":"S PIER NS FRANK LOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459991,41.425489 ]
	    },
	    "properties": {
	    "stop_id":"85",
	    "stop_name":"BOON NS CONGDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460099,41.425519 ]
	    },
	    "properties": {
	    "stop_id":"90",
	    "stop_name":"BOON NS CONGDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467536,41.426203 ]
	    },
	    "properties": {
	    "stop_id":"95",
	    "stop_name":"S PIER OPP 172 S PIER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459391,41.427019 ]
	    },
	    "properties": {
	    "stop_id":"110",
	    "stop_name":"BOON AT 126 BOON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467565,41.426116 ]
	    },
	    "properties": {
	    "stop_id":"115",
	    "stop_name":"S PIER FS 172 S PIER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45946,41.427138 ]
	    },
	    "properties": {
	    "stop_id":"120",
	    "stop_name":"BOON FS RODMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472088,41.427791 ]
	    },
	    "properties": {
	    "stop_id":"125",
	    "stop_name":"S PIER AT NARRAGANSETT MIDDLE SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483315,41.428327 ]
	    },
	    "properties": {
	    "stop_id":"130",
	    "stop_name":"SALT POND SHOPPING PLAZA (STOP&SHOP)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458762,41.42863 ]
	    },
	    "properties": {
	    "stop_id":"135",
	    "stop_name":"BOON NS CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458806,41.429057 ]
	    },
	    "properties": {
	    "stop_id":"140",
	    "stop_name":"BOON NS CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471847,41.42755 ]
	    },
	    "properties": {
	    "stop_id":"150",
	    "stop_name":"S PIER OPP NARRAGANSETT MIDDLE SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47616,41.42984 ]
	    },
	    "properties": {
	    "stop_id":"155",
	    "stop_name":"S PIER NS LAKEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479041,41.430334 ]
	    },
	    "properties": {
	    "stop_id":"170",
	    "stop_name":"S PIER OPP AVICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460005,41.431188 ]
	    },
	    "properties": {
	    "stop_id":"185",
	    "stop_name":"KINGSTOWN AT LIBRARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460146,41.431088 ]
	    },
	    "properties": {
	    "stop_id":"190",
	    "stop_name":"KINGSTOWN FS CASWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456388,41.435122 ]
	    },
	    "properties": {
	    "stop_id":"250",
	    "stop_name":"BOSTON NECK AT TOWN BEACH SOUTH PAVILION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456552,41.435296 ]
	    },
	    "properties": {
	    "stop_id":"255",
	    "stop_name":"BOSTON NECK - NORTH BEACH SOUTH PAVILION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454786,41.43684 ]
	    },
	    "properties": {
	    "stop_id":"290",
	    "stop_name":"BOSTON NECK AT NARR TOWN BEACH NORTH LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454592,41.437274 ]
	    },
	    "properties": {
	    "stop_id":"295",
	    "stop_name":"BOSTON NECK - NORTH BEACH ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450822,41.440814 ]
	    },
	    "properties": {
	    "stop_id":"300",
	    "stop_name":"BOSTON NECK OPP WOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453131,41.438177 ]
	    },
	    "properties": {
	    "stop_id":"305",
	    "stop_name":"BOSTON NECK - NORTH BEACH CABANAS GATE 7"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501033,41.437288 ]
	    },
	    "properties": {
	    "stop_id":"310",
	    "stop_name":"MAIN AT 399 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500964,41.437213 ]
	    },
	    "properties": {
	    "stop_id":"315",
	    "stop_name":"MAIN AT 396 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49728,41.440297 ]
	    },
	    "properties": {
	    "stop_id":"335",
	    "stop_name":"MAIN OPP 249-255 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498868,41.438867 ]
	    },
	    "properties": {
	    "stop_id":"340",
	    "stop_name":"MAIN OPP ROBINSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493886,41.440945 ]
	    },
	    "properties": {
	    "stop_id":"370",
	    "stop_name":"MAIN OPP CLEVELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.490843,41.441236 ]
	    },
	    "properties": {
	    "stop_id":"375",
	    "stop_name":"MAIN NS CHAPPELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451033,41.440426 ]
	    },
	    "properties": {
	    "stop_id":"380",
	    "stop_name":"BOSTON NECK FS WOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49579,41.440837 ]
	    },
	    "properties": {
	    "stop_id":"390",
	    "stop_name":"MAIN FS COLUMBIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494115,41.440996 ]
	    },
	    "properties": {
	    "stop_id":"395",
	    "stop_name":"MAIN FS CLEVELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489655,41.441449 ]
	    },
	    "properties": {
	    "stop_id":"405",
	    "stop_name":"MAIN NS HOLLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489258,41.441356 ]
	    },
	    "properties": {
	    "stop_id":"415",
	    "stop_name":"MAIN NS RT 108"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486656,41.441867 ]
	    },
	    "properties": {
	    "stop_id":"425",
	    "stop_name":"OLD TOWER HILL NS RT 108"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.484458,41.441923 ]
	    },
	    "properties": {
	    "stop_id":"430",
	    "stop_name":"OLD TOWER HILL FS NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480573,41.442563 ]
	    },
	    "properties": {
	    "stop_id":"435",
	    "stop_name":"OLD TOWER HILL NS KELLY WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480569,41.44239 ]
	    },
	    "properties": {
	    "stop_id":"440",
	    "stop_name":"OLD TOWER HILL OPP CHAMBER OF COMMERCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502313,41.441832 ]
	    },
	    "properties": {
	    "stop_id":"445",
	    "stop_name":"HIGH AT 180 HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450569,41.444056 ]
	    },
	    "properties": {
	    "stop_id":"450",
	    "stop_name":"BOSTON NECK OPP STARR DR W"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483301,41.443701 ]
	    },
	    "properties": {
	    "stop_id":"455",
	    "stop_name":"WAKEFIELD MALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451148,41.446304 ]
	    },
	    "properties": {
	    "stop_id":"460",
	    "stop_name":"BOSTON NECK FS CASTLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450734,41.444039 ]
	    },
	    "properties": {
	    "stop_id":"465",
	    "stop_name":"BOSTON NECK NS STARR DR WEST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502806,41.445317 ]
	    },
	    "properties": {
	    "stop_id":"475",
	    "stop_name":"HIGH FS TUCKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451315,41.446272 ]
	    },
	    "properties": {
	    "stop_id":"480",
	    "stop_name":"BOSTON NECK NS CASTLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502613,41.446838 ]
	    },
	    "properties": {
	    "stop_id":"485",
	    "stop_name":"HIGH FS OAKDELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472449,41.449051 ]
	    },
	    "properties": {
	    "stop_id":"495",
	    "stop_name":"RT 1 OPP WAKEFIELD MEADOWS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451146,41.447528 ]
	    },
	    "properties": {
	    "stop_id":"500",
	    "stop_name":"BOSTON NECK FS STARR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501386,41.449313 ]
	    },
	    "properties": {
	    "stop_id":"505",
	    "stop_name":"HIGH NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47328,41.448753 ]
	    },
	    "properties": {
	    "stop_id":"520",
	    "stop_name":"RT 1 FS HAMPTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440324,41.455159 ]
	    },
	    "properties": {
	    "stop_id":"525",
	    "stop_name":"BOSTON NECK OPP 483 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.78608,41.450174 ]
	    },
	    "properties": {
	    "stop_id":"535",
	    "stop_name":"ASHAWAY PARK & RIDE (HOPKINTON)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500738,41.450552 ]
	    },
	    "properties": {
	    "stop_id":"540",
	    "stop_name":"HIGH FS RT 108"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500577,41.4506 ]
	    },
	    "properties": {
	    "stop_id":"545",
	    "stop_name":"HIGH NS RT 108"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501864,41.452806 ]
	    },
	    "properties": {
	    "stop_id":"550",
	    "stop_name":"KINGSTOWN NS KERSEY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442541,41.453323 ]
	    },
	    "properties": {
	    "stop_id":"560",
	    "stop_name":"BOSTON NECK FS OLD BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43584,41.458531 ]
	    },
	    "properties": {
	    "stop_id":"565",
	    "stop_name":"BOSTON NECK NS OLD BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.505059,41.454184 ]
	    },
	    "properties": {
	    "stop_id":"570",
	    "stop_name":"KINGSTOWN OPP 1428 KINGSTOWN RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.508331,41.45675 ]
	    },
	    "properties": {
	    "stop_id":"585",
	    "stop_name":"KINGSTOWN NS MEADOWBROOK WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.508756,41.459516 ]
	    },
	    "properties": {
	    "stop_id":"595",
	    "stop_name":"KINGSTOWN NS SAMUEL RODMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306669,41.46253 ]
	    },
	    "properties": {
	    "stop_id":"605",
	    "stop_name":"BELLEVUE OPP MARBLE HOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509323,41.462169 ]
	    },
	    "properties": {
	    "stop_id":"615",
	    "stop_name":"KINGSTOWN NS SAUGUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440326,41.454983 ]
	    },
	    "properties": {
	    "stop_id":"630",
	    "stop_name":"BOSTON NECK AT 483 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433642,41.461219 ]
	    },
	    "properties": {
	    "stop_id":"635",
	    "stop_name":"BOSTON NECK OPP ANAWAN CLIFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432912,41.464374 ]
	    },
	    "properties": {
	    "stop_id":"640",
	    "stop_name":"BOSTON NECK OPP HILLVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433588,41.46719 ]
	    },
	    "properties": {
	    "stop_id":"645",
	    "stop_name":"BOSTON NECK AT 750 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306883,41.465772 ]
	    },
	    "properties": {
	    "stop_id":"650",
	    "stop_name":"BELLEVUE OPP 541 BELLEVUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306933,41.465496 ]
	    },
	    "properties": {
	    "stop_id":"655",
	    "stop_name":"BELLEVUE OPP ROSECLIFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433902,41.469251 ]
	    },
	    "properties": {
	    "stop_id":"665",
	    "stop_name":"BOSTON NECK NS WEST BAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.512248,41.467617 ]
	    },
	    "properties": {
	    "stop_id":"670",
	    "stop_name":"KINGSTOWN NS GREENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.512128,41.467638 ]
	    },
	    "properties": {
	    "stop_id":"685",
	    "stop_name":"KINGSTOWN OPP GREENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.305747,41.468123 ]
	    },
	    "properties": {
	    "stop_id":"730",
	    "stop_name":"RUGGLES OPP STONEACRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.304332,41.468284 ]
	    },
	    "properties": {
	    "stop_id":"735",
	    "stop_name":"RUGGLES OPP 204 RUGGLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30565,41.468206 ]
	    },
	    "properties": {
	    "stop_id":"740",
	    "stop_name":"RUGGLES AT STONEACRE HOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302933,41.468379 ]
	    },
	    "properties": {
	    "stop_id":"745",
	    "stop_name":"RUGGLES AT WETMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.304343,41.468328 ]
	    },
	    "properties": {
	    "stop_id":"750",
	    "stop_name":"RUGGLES OPP CAREY MANSION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302897,41.46851 ]
	    },
	    "properties": {
	    "stop_id":"755",
	    "stop_name":"RUGGLES OPP WETMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299664,41.468628 ]
	    },
	    "properties": {
	    "stop_id":"760",
	    "stop_name":"RUGGLES NS OCHRE POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299495,41.468826 ]
	    },
	    "properties": {
	    "stop_id":"775",
	    "stop_name":"OCHRE POINT NS RUGGLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434068,41.473036 ]
	    },
	    "properties": {
	    "stop_id":"780",
	    "stop_name":"BOSTON NECK FS MARIAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433526,41.467493 ]
	    },
	    "properties": {
	    "stop_id":"785",
	    "stop_name":"BOSTON NECK NS BROWNING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299707,41.469948 ]
	    },
	    "properties": {
	    "stop_id":"790",
	    "stop_name":"OCHRE POINT NS VICTORIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513576,41.469874 ]
	    },
	    "properties": {
	    "stop_id":"805",
	    "stop_name":"KINGSTOWN NS ROLENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513763,41.46997 ]
	    },
	    "properties": {
	    "stop_id":"815",
	    "stop_name":"KINGSTOWN OPP ROLENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29975,41.470592 ]
	    },
	    "properties": {
	    "stop_id":"820",
	    "stop_name":"OCHRE POINT NS OHARE CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299939,41.470963 ]
	    },
	    "properties": {
	    "stop_id":"830",
	    "stop_name":"OCHRE POINT OPP OHARE CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300172,41.472293 ]
	    },
	    "properties": {
	    "stop_id":"845",
	    "stop_name":"OCHRE PONT OPP MCAULEY HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300024,41.472223 ]
	    },
	    "properties": {
	    "stop_id":"850",
	    "stop_name":"OCHRE PONT AT MCAULEY HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300161,41.473046 ]
	    },
	    "properties": {
	    "stop_id":"875",
	    "stop_name":"OCHRE POINT AT LEROY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300316,41.473187 ]
	    },
	    "properties": {
	    "stop_id":"880",
	    "stop_name":"OCHRE POINT NS LEROY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433888,41.4731 ]
	    },
	    "properties": {
	    "stop_id":"885",
	    "stop_name":"BOSTON NECK OPP MARIAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435242,41.475633 ]
	    },
	    "properties": {
	    "stop_id":"890",
	    "stop_name":"BOSTON NECK AT 904 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51468,41.47106 ]
	    },
	    "properties": {
	    "stop_id":"905",
	    "stop_name":"KINGSTOWN NS WESTWIND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300124,41.474144 ]
	    },
	    "properties": {
	    "stop_id":"910",
	    "stop_name":"OCHRE POINT NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300226,41.474556 ]
	    },
	    "properties": {
	    "stop_id":"915",
	    "stop_name":"OCHRE POINT NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517515,41.474617 ]
	    },
	    "properties": {
	    "stop_id":"925",
	    "stop_name":"KINGSTOWN OPP WAYSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51562,41.472152 ]
	    },
	    "properties": {
	    "stop_id":"935",
	    "stop_name":"KINGSTOWN OPP EAST FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.307904,41.475496 ]
	    },
	    "properties": {
	    "stop_id":"940",
	    "stop_name":"BELLEVUE NS NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.307231,41.475348 ]
	    },
	    "properties": {
	    "stop_id":"950",
	    "stop_name":"NARRAGANSETT NS BELLEVUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300055,41.475545 ]
	    },
	    "properties": {
	    "stop_id":"955",
	    "stop_name":"OCHRE POINT NS NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302747,41.475517 ]
	    },
	    "properties": {
	    "stop_id":"965",
	    "stop_name":"NARRAGANSETT AVE OPP NEWPORT HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.304955,41.475495 ]
	    },
	    "properties": {
	    "stop_id":"970",
	    "stop_name":"NARRAGANSETT AT CHEPSTOW HOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435953,41.478025 ]
	    },
	    "properties": {
	    "stop_id":"975",
	    "stop_name":"BOSTON NECK NS EMERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435073,41.475666 ]
	    },
	    "properties": {
	    "stop_id":"980",
	    "stop_name":"BOSTON NECK AT 909 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302763,41.475598 ]
	    },
	    "properties": {
	    "stop_id":"985",
	    "stop_name":"NARRAGANSETT AT NARRAGANSETT HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308055,41.477153 ]
	    },
	    "properties": {
	    "stop_id":"1010",
	    "stop_name":"BELLEVUE FS DIXON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.518739,41.476133 ]
	    },
	    "properties": {
	    "stop_id":"1030",
	    "stop_name":"KINGSTOWN AT 2327 KINGSTOWN RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517491,41.474451 ]
	    },
	    "properties": {
	    "stop_id":"1035",
	    "stop_name":"KINGSTOWN FS WAYSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308596,41.479251 ]
	    },
	    "properties": {
	    "stop_id":"1040",
	    "stop_name":"BELLEVUE NS PERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436179,41.479319 ]
	    },
	    "properties": {
	    "stop_id":"1055",
	    "stop_name":"BOSTON NECK OPP CONANICUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436402,41.479532 ]
	    },
	    "properties": {
	    "stop_id":"1060",
	    "stop_name":"BOSTON NECK NS CONANICUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.518724,41.475945 ]
	    },
	    "properties": {
	    "stop_id":"1070",
	    "stop_name":"KINGSTOWN AT 2318 KINGSTOWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522949,41.480003 ]
	    },
	    "properties": {
	    "stop_id":"1075",
	    "stop_name":"KINGSTOWN FS NORTH RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520794,41.479607 ]
	    },
	    "properties": {
	    "stop_id":"1080",
	    "stop_name":"KINGSTOWN FS RT 138"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.524366,41.480197 ]
	    },
	    "properties": {
	    "stop_id":"1085",
	    "stop_name":"KINGSTOWN AT 2579 KINGSTOWN RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308547,41.480894 ]
	    },
	    "properties": {
	    "stop_id":"1095",
	    "stop_name":"BELLEVUE FS BOWERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308429,41.481051 ]
	    },
	    "properties": {
	    "stop_id":"1100",
	    "stop_name":"BELLEVUE FS E BOWERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.525551,41.48119 ]
	    },
	    "properties": {
	    "stop_id":"1120",
	    "stop_name":"UPPER COLLEGE NS RT 138"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.535882,41.482005 ]
	    },
	    "properties": {
	    "stop_id":"1125",
	    "stop_name":"KINGSTOWN AT GRAD VILLAGE APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529691,41.482182 ]
	    },
	    "properties": {
	    "stop_id":"1140",
	    "stop_name":"LOWER COLLEGE NS BAYBERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308563,41.482559 ]
	    },
	    "properties": {
	    "stop_id":"1145",
	    "stop_name":"BELLEVUE OPP TENNIS HALL OF FAME"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308448,41.48295 ]
	    },
	    "properties": {
	    "stop_id":"1150",
	    "stop_name":"BELLEVUE AT TENNIS HALL OF FAME"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529871,41.481905 ]
	    },
	    "properties": {
	    "stop_id":"1155",
	    "stop_name":"LOWER COLLEGE OPP ST AUGUSTINES CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436962,41.483023 ]
	    },
	    "properties": {
	    "stop_id":"1165",
	    "stop_name":"BOSTON NECK NS MOUNTVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.540778,41.482871 ]
	    },
	    "properties": {
	    "stop_id":"1175",
	    "stop_name":"KINGSTOWN FS W INDEPENDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.525703,41.482731 ]
	    },
	    "properties": {
	    "stop_id":"1180",
	    "stop_name":"UPPER COLLEGE NS CAMPUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.525816,41.482725 ]
	    },
	    "properties": {
	    "stop_id":"1185",
	    "stop_name":"UPPER COLLEGE FS CAMPUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528164,41.483487 ]
	    },
	    "properties": {
	    "stop_id":"1190",
	    "stop_name":"CAMPUS AT COLLEGE OF PHARMACY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.551555,41.482979 ]
	    },
	    "properties": {
	    "stop_id":"1205",
	    "stop_name":"KINGSTOWN NS WAITES CORNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308748,41.485734 ]
	    },
	    "properties": {
	    "stop_id":"1210",
	    "stop_name":"BELLEVUE FS DOWNING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308774,41.485142 ]
	    },
	    "properties": {
	    "stop_id":"1215",
	    "stop_name":"BELLEVUE FS PELHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529311,41.484315 ]
	    },
	    "properties": {
	    "stop_id":"1225",
	    "stop_name":"URI STUDENT UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.560243,41.484102 ]
	    },
	    "properties": {
	    "stop_id":"1230",
	    "stop_name":"KINGSTON RAILROAD STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437187,41.485199 ]
	    },
	    "properties": {
	    "stop_id":"1245",
	    "stop_name":"BOSTON NECK OPP GARDENIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437117,41.485433 ]
	    },
	    "properties": {
	    "stop_id":"1250",
	    "stop_name":"BOSTON NECK FS GARDENIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437646,41.488035 ]
	    },
	    "properties": {
	    "stop_id":"1295",
	    "stop_name":"BOSTON NECK OPP 1141 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309318,41.487185 ]
	    },
	    "properties": {
	    "stop_id":"1300",
	    "stop_name":"BELLEVUE NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309422,41.487638 ]
	    },
	    "properties": {
	    "stop_id":"1305",
	    "stop_name":"BELLEVUE NS ZION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.311134,41.488671 ]
	    },
	    "properties": {
	    "stop_id":"1315",
	    "stop_name":"TOURO NS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.314371,41.489805 ]
	    },
	    "properties": {
	    "stop_id":"1330",
	    "stop_name":"TOURO NS TOURO CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.315476,41.490822 ]
	    },
	    "properties": {
	    "stop_id":"1340",
	    "stop_name":"MARLBOROUGH NS THAMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.315198,41.49095 ]
	    },
	    "properties": {
	    "stop_id":"1345",
	    "stop_name":"MARLBOROUGH OPP DUKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313491,41.491325 ]
	    },
	    "properties": {
	    "stop_id":"1365",
	    "stop_name":"MARLBOROUGH NS FAREWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.31281,41.491412 ]
	    },
	    "properties": {
	    "stop_id":"1370",
	    "stop_name":"MARLBOROUGH FS BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.311566,41.491852 ]
	    },
	    "properties": {
	    "stop_id":"1375",
	    "stop_name":"NEWPORT CITY HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317804,41.491412 ]
	    },
	    "properties": {
	    "stop_id":"1380",
	    "stop_name":"GATEWAY CENTER AT 60 BUS BERTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317621,41.491752 ]
	    },
	    "properties": {
	    "stop_id":"1381",
	    "stop_name":"GATEWAY CENTER AT TROLLEY STOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.318003,41.491053 ]
	    },
	    "properties": {
	    "stop_id":"1382",
	    "stop_name":"GATEWAY CENTER AT 63 BUS BERTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317772,41.491485 ]
	    },
	    "properties": {
	    "stop_id":"1383",
	    "stop_name":"GATEWAY CENTER AT 64 BUS BERTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.31775,41.491545 ]
	    },
	    "properties": {
	    "stop_id":"1384",
	    "stop_name":"GATEWAY CENTER AT 14 BUS BERTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437984,41.492364 ]
	    },
	    "properties": {
	    "stop_id":"1395",
	    "stop_name":"BOSTON NECK FS S FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43815,41.492409 ]
	    },
	    "properties": {
	    "stop_id":"1400",
	    "stop_name":"BOSTON NECK NS BRIDGETOWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.318642,41.492298 ]
	    },
	    "properties": {
	    "stop_id":"1420",
	    "stop_name":"THIRD FS BRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.310805,41.492751 ]
	    },
	    "properties": {
	    "stop_id":"1430",
	    "stop_name":"BROADWAY BETWEEN COLLINS & MANN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309679,41.493536 ]
	    },
	    "properties": {
	    "stop_id":"1435",
	    "stop_name":"BROADWAY FS AYRAULT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437896,41.494846 ]
	    },
	    "properties": {
	    "stop_id":"1450",
	    "stop_name":"BOSTON LAKE NS EDGEWATER RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437764,41.494793 ]
	    },
	    "properties": {
	    "stop_id":"1455",
	    "stop_name":"BOSTON NECK OPP EDGEWATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456464,41.495043 ]
	    },
	    "properties": {
	    "stop_id":"1460",
	    "stop_name":"TOWER HILL PARK N RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.318955,41.49467 ]
	    },
	    "properties": {
	    "stop_id":"1465",
	    "stop_name":"THIRD AT WALNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308822,41.49503 ]
	    },
	    "properties": {
	    "stop_id":"1475",
	    "stop_name":"BROADWAY NS CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30915,41.494471 ]
	    },
	    "properties": {
	    "stop_id":"1480",
	    "stop_name":"BROADWAY NS EQUALITY PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371722,41.496192 ]
	    },
	    "properties": {
	    "stop_id":"1495",
	    "stop_name":"NARRAGANSETT FS HOWLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374702,41.496551 ]
	    },
	    "properties": {
	    "stop_id":"1505",
	    "stop_name":"NORTH NS AT 1 NORTH RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308343,41.496347 ]
	    },
	    "properties": {
	    "stop_id":"1510",
	    "stop_name":"BROADWAY NS CLINTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368745,41.49637 ]
	    },
	    "properties": {
	    "stop_id":"1515",
	    "stop_name":"NARRAGANSETT AT 20 NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371732,41.496315 ]
	    },
	    "properties": {
	    "stop_id":"1520",
	    "stop_name":"NARRAGANSETT FS GRINNELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367405,41.496382 ]
	    },
	    "properties": {
	    "stop_id":"1525",
	    "stop_name":"NARRAGANSETT FS E SHORE RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367009,41.496595 ]
	    },
	    "properties": {
	    "stop_id":"1526",
	    "stop_name":"CONANICUS FS NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319305,41.497507 ]
	    },
	    "properties": {
	    "stop_id":"1530",
	    "stop_name":"THIRD NS LASALLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4363,41.497986 ]
	    },
	    "properties": {
	    "stop_id":"1535",
	    "stop_name":"BOSTON NECK FS BANFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30734,41.49799 ]
	    },
	    "properties": {
	    "stop_id":"1540",
	    "stop_name":"BROADWAY NS FRIENDSHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436521,41.497967 ]
	    },
	    "properties": {
	    "stop_id":"1545",
	    "stop_name":"BOSTON NECK NS PETTAQUAMSCUTT LAKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30741,41.498142 ]
	    },
	    "properties": {
	    "stop_id":"1555",
	    "stop_name":"BROADWAY OPP FRIENDSHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374589,41.498233 ]
	    },
	    "properties": {
	    "stop_id":"1565",
	    "stop_name":"NORTH NS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367143,41.496757 ]
	    },
	    "properties": {
	    "stop_id":"1575",
	    "stop_name":"CONANICUS FS KNOWLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306406,41.499798 ]
	    },
	    "properties": {
	    "stop_id":"1590",
	    "stop_name":"BROADWAY NS SUMMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306139,41.499862 ]
	    },
	    "properties": {
	    "stop_id":"1595",
	    "stop_name":"BROADWAY NS GIBBS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319747,41.499988 ]
	    },
	    "properties": {
	    "stop_id":"1600",
	    "stop_name":"THIRD FS CYPRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319726,41.500429 ]
	    },
	    "properties": {
	    "stop_id":"1605",
	    "stop_name":"THIRD OPP CYPRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433596,41.500947 ]
	    },
	    "properties": {
	    "stop_id":"1610",
	    "stop_name":"BOSTON NECK OPP RIVERDELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433797,41.500993 ]
	    },
	    "properties": {
	    "stop_id":"1615",
	    "stop_name":"BOSTON NECK NS RIVERDELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.305113,41.501178 ]
	    },
	    "properties": {
	    "stop_id":"1625",
	    "stop_name":"BROADWAY NS BROOKS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30471,41.501871 ]
	    },
	    "properties": {
	    "stop_id":"1635",
	    "stop_name":"BROADWAY NS GREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319844,41.501716 ]
	    },
	    "properties": {
	    "stop_id":"1645",
	    "stop_name":"THIRD AT BAYSIDE VILLAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.320017,41.501766 ]
	    },
	    "properties": {
	    "stop_id":"1650",
	    "stop_name":"THIRD OPP BAYSIDE VILLAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43213,41.502256 ]
	    },
	    "properties": {
	    "stop_id":"1660",
	    "stop_name":"BOSTON NECK NS INDIAN TRAIL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.303693,41.502906 ]
	    },
	    "properties": {
	    "stop_id":"1665",
	    "stop_name":"BROADWAY NS COUNTY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.303639,41.503163 ]
	    },
	    "properties": {
	    "stop_id":"1670",
	    "stop_name":"BROADWAY NS THURSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45929,41.50376 ]
	    },
	    "properties": {
	    "stop_id":"1685",
	    "stop_name":"RT 1 NS WALMSLEY LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.320243,41.503582 ]
	    },
	    "properties": {
	    "stop_id":"1695",
	    "stop_name":"THIRD OPP DYERS GATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302835,41.503961 ]
	    },
	    "properties": {
	    "stop_id":"1705",
	    "stop_name":"BROADWAY NS VERNON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.320194,41.504382 ]
	    },
	    "properties": {
	    "stop_id":"1715",
	    "stop_name":"THIRD OPP NAVAL HEALTH CLINIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301968,41.505017 ]
	    },
	    "properties": {
	    "stop_id":"1720",
	    "stop_name":"BROADWAY OPP CANONICUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428414,41.504953 ]
	    },
	    "properties": {
	    "stop_id":"1725",
	    "stop_name":"BOSTON NECK FS MINER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42862,41.505015 ]
	    },
	    "properties": {
	    "stop_id":"1730",
	    "stop_name":"BOSTON NECK NS MINER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302186,41.505043 ]
	    },
	    "properties": {
	    "stop_id":"1735",
	    "stop_name":"BROADWAY NS CANONICUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364472,41.504757 ]
	    },
	    "properties": {
	    "stop_id":"1745",
	    "stop_name":"CONANICUS NS MT HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319325,41.506695 ]
	    },
	    "properties": {
	    "stop_id":"1755",
	    "stop_name":"ADM KALBFUS AT AT ADMIRAL'S GATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302662,41.50619 ]
	    },
	    "properties": {
	    "stop_id":"1760",
	    "stop_name":"ADMIRAL KALBUS NS ROWLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302274,41.506187 ]
	    },
	    "properties": {
	    "stop_id":"1770",
	    "stop_name":"ADM KALBFUS OPP ROWLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317696,41.507682 ]
	    },
	    "properties": {
	    "stop_id":"1775",
	    "stop_name":"CONNELL HWAY AT NEWPORT TIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364623,41.50488 ]
	    },
	    "properties": {
	    "stop_id":"1776",
	    "stop_name":"CONANICUS NS MT HOPE AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36526,41.5111 ]
	    },
	    "properties": {
	    "stop_id":"1777",
	    "stop_name":"EAST SHORE NS FREEBODY (RI TURNPIKE AUTHORITY)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.304989,41.506806 ]
	    },
	    "properties": {
	    "stop_id":"1780",
	    "stop_name":"ADM KALBFUS NS SAGAMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313161,41.507618 ]
	    },
	    "properties": {
	    "stop_id":"1810",
	    "stop_name":"ADM KALBFUS AT NEWPORT GRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301742,41.507228 ]
	    },
	    "properties": {
	    "stop_id":"1820",
	    "stop_name":"W MAIN NS DUDLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.312605,41.507898 ]
	    },
	    "properties": {
	    "stop_id":"1830",
	    "stop_name":"ADM KALBFUS OPP NEWPORT GRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317583,41.508102 ]
	    },
	    "properties": {
	    "stop_id":"1835",
	    "stop_name":"CONNELL HWAY OPP NISSAN VOLVO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.311638,41.508148 ]
	    },
	    "properties": {
	    "stop_id":"1850",
	    "stop_name":"GIRARD NS ADM KALBFUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.31328,41.51296 ]
	    },
	    "properties": {
	    "stop_id":"1860",
	    "stop_name":"GIRARD NS SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.318059,41.511545 ]
	    },
	    "properties": {
	    "stop_id":"1865",
	    "stop_name":"CONNELL  HWAY AT NEWPORT ADULTS VIDEO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317415,41.511926 ]
	    },
	    "properties": {
	    "stop_id":"1870",
	    "stop_name":"NEWPORT TOWNE CENTER (LAUNDROMAT)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42496,41.507607 ]
	    },
	    "properties": {
	    "stop_id":"1875",
	    "stop_name":"BOSTON NECK NS FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425119,41.507661 ]
	    },
	    "properties": {
	    "stop_id":"1880",
	    "stop_name":"BOSTON NECK FS FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.316887,41.510625 ]
	    },
	    "properties": {
	    "stop_id":"1890",
	    "stop_name":"NEWPORT TOWNE CENTER (WALMART)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.31643,41.508474 ]
	    },
	    "properties": {
	    "stop_id":"1895",
	    "stop_name":"NEWPORT TOWNE CENTER (STOP&SHOP)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301524,41.506577 ]
	    },
	    "properties": {
	    "stop_id":"1900",
	    "stop_name":"W MAIN AT RODEWAY INN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.307751,41.509678 ]
	    },
	    "properties": {
	    "stop_id":"1905",
	    "stop_name":"HILLSIDE NS EISENHOWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308767,41.511967 ]
	    },
	    "properties": {
	    "stop_id":"1915",
	    "stop_name":"HILLSIDE NS BEACON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301921,41.509392 ]
	    },
	    "properties": {
	    "stop_id":"1920",
	    "stop_name":"W MAIN NS STOCKTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302368,41.511214 ]
	    },
	    "properties": {
	    "stop_id":"1940",
	    "stop_name":"W MAIN FS ROSEDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.689832,41.511973 ]
	    },
	    "properties": {
	    "stop_id":"1945",
	    "stop_name":"WYOMING PARK & RIDE (RICHMOND)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.302233,41.511411 ]
	    },
	    "properties": {
	    "stop_id":"1955",
	    "stop_name":"W MAIN AT 211 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309615,41.51288 ]
	    },
	    "properties": {
	    "stop_id":"1975",
	    "stop_name":"HILLSIDE OPP SGT GREENE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309741,41.514642 ]
	    },
	    "properties": {
	    "stop_id":"1976",
	    "stop_name":"HILLSIDE OPP 218 HILLSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301747,41.513742 ]
	    },
	    "properties": {
	    "stop_id":"1980",
	    "stop_name":"W MAIN FS BEACON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301579,41.513881 ]
	    },
	    "properties": {
	    "stop_id":"1990",
	    "stop_name":"W MAIN FS BEACON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309865,41.514646 ]
	    },
	    "properties": {
	    "stop_id":"2005",
	    "stop_name":"HILLSIDE AT 216 HILLSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313096,41.511682 ]
	    },
	    "properties": {
	    "stop_id":"2010",
	    "stop_name":"GIRARD FS FESTIVAL FIELD APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301354,41.515144 ]
	    },
	    "properties": {
	    "stop_id":"2015",
	    "stop_name":"W MAIN AT MOBIL STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.316041,41.515053 ]
	    },
	    "properties": {
	    "stop_id":"2020",
	    "stop_name":"CONNELL HWAY NS MAPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.316217,41.515038 ]
	    },
	    "properties": {
	    "stop_id":"2025",
	    "stop_name":"CONNELL OPP HILLMART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30103,41.51556 ]
	    },
	    "properties": {
	    "stop_id":"2035",
	    "stop_name":"W MAIN FS SMYTHE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309734,41.515906 ]
	    },
	    "properties": {
	    "stop_id":"2045",
	    "stop_name":"HILLSIDE NS MAPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.312682,41.515894 ]
	    },
	    "properties": {
	    "stop_id":"2055",
	    "stop_name":"MAPLE NS JOHN CHAFFEE BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.312361,41.516108 ]
	    },
	    "properties": {
	    "stop_id":"2060",
	    "stop_name":"MAPLE AT HEAD START CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423412,41.516748 ]
	    },
	    "properties": {
	    "stop_id":"2065",
	    "stop_name":"BOSTON NECK OPP CHARLOTTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42324,41.516702 ]
	    },
	    "properties": {
	    "stop_id":"2070",
	    "stop_name":"BOSTON NECK FS CHARLOTTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300606,41.517222 ]
	    },
	    "properties": {
	    "stop_id":"2075",
	    "stop_name":"W MAIN AT BANK OF NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299326,41.517093 ]
	    },
	    "properties": {
	    "stop_id":"2080",
	    "stop_name":"E MAIN OPP NEWPORT MART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299285,41.517257 ]
	    },
	    "properties": {
	    "stop_id":"2085",
	    "stop_name":"E MAIN AT NEWPORT MARKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313698,41.518131 ]
	    },
	    "properties": {
	    "stop_id":"2090",
	    "stop_name":"CODDINGTON NS JOHN CHAFEE BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.297004,41.517743 ]
	    },
	    "properties": {
	    "stop_id":"2100",
	    "stop_name":"E MAIN OPP 114 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.300648,41.518233 ]
	    },
	    "properties": {
	    "stop_id":"2105",
	    "stop_name":"CODDINGTON NS W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.294068,41.518568 ]
	    },
	    "properties": {
	    "stop_id":"2125",
	    "stop_name":"E MAIN AT SHELL GAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.311716,41.519375 ]
	    },
	    "properties": {
	    "stop_id":"2140",
	    "stop_name":"CODDINGTON OPP HARBOR BASE INN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30307,41.518598 ]
	    },
	    "properties": {
	    "stop_id":"2145",
	    "stop_name":"CODDINGTON NS NIAGRA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.304618,41.518765 ]
	    },
	    "properties": {
	    "stop_id":"2150",
	    "stop_name":"CODDINGTON NS JONES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306072,41.518855 ]
	    },
	    "properties": {
	    "stop_id":"2155",
	    "stop_name":"CODDINGTON NS SHERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.307398,41.519018 ]
	    },
	    "properties": {
	    "stop_id":"2165",
	    "stop_name":"CODDINGTON AT BAYVIEW PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.305795,41.519007 ]
	    },
	    "properties": {
	    "stop_id":"2170",
	    "stop_name":"CODDINGTON OPP SHERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309746,41.519275 ]
	    },
	    "properties": {
	    "stop_id":"2175",
	    "stop_name":"CODDINGTON AT RIPTA GARAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.307064,41.519162 ]
	    },
	    "properties": {
	    "stop_id":"2180",
	    "stop_name":"CODDINGTON OPP BAYVIEW TRAILER PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.293092,41.5191 ]
	    },
	    "properties": {
	    "stop_id":"2185",
	    "stop_name":"E MAIN NS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299718,41.519281 ]
	    },
	    "properties": {
	    "stop_id":"2195",
	    "stop_name":"W MAIN NS MAPLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309638,41.519474 ]
	    },
	    "properties": {
	    "stop_id":"2200",
	    "stop_name":"CODDINGTON OPP RIPTA GARAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.290906,41.519548 ]
	    },
	    "properties": {
	    "stop_id":"2205",
	    "stop_name":"E MAIN NS ENTERPRISE DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291209,41.519676 ]
	    },
	    "properties": {
	    "stop_id":"2210",
	    "stop_name":"E MAIN FS ENTERPRISE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.288675,41.520224 ]
	    },
	    "properties": {
	    "stop_id":"2215",
	    "stop_name":"E MAIN AT 351 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.294159,41.520791 ]
	    },
	    "properties": {
	    "stop_id":"2230",
	    "stop_name":"VALLEY OPP CHESTNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.298915,41.521651 ]
	    },
	    "properties": {
	    "stop_id":"2235",
	    "stop_name":"W MAIN NS OAKWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.285532,41.521046 ]
	    },
	    "properties": {
	    "stop_id":"2240",
	    "stop_name":"E MAIN NS FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424046,41.521254 ]
	    },
	    "properties": {
	    "stop_id":"2245",
	    "stop_name":"BOSTON NECK FS HOMESTEAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423628,41.52242 ]
	    },
	    "properties": {
	    "stop_id":"2250",
	    "stop_name":"BOSTON NECK OPP SNUFF MILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.285845,41.521104 ]
	    },
	    "properties": {
	    "stop_id":"2255",
	    "stop_name":"E MAIN NS FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461385,41.51492 ]
	    },
	    "properties": {
	    "stop_id":"2260",
	    "stop_name":"RT 1 AT 2299 TOWER HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.283372,41.521684 ]
	    },
	    "properties": {
	    "stop_id":"2265",
	    "stop_name":"E MAIN NS AQUIDNECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.28407,41.521665 ]
	    },
	    "properties": {
	    "stop_id":"2270",
	    "stop_name":"E MAIN FS AQUIDNECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4648,41.52401 ]
	    },
	    "properties": {
	    "stop_id":"2275",
	    "stop_name":"RT 1 FS SHERMANTOWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29474,41.521838 ]
	    },
	    "properties": {
	    "stop_id":"2280",
	    "stop_name":"VALLEY OPP NAPA AUTO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279173,41.52421 ]
	    },
	    "properties": {
	    "stop_id":"2285",
	    "stop_name":"E MAIN AT 644 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281137,41.52286 ]
	    },
	    "properties": {
	    "stop_id":"2290",
	    "stop_name":"E MAIN FS WYATT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299019,41.521907 ]
	    },
	    "properties": {
	    "stop_id":"2295",
	    "stop_name":"W MAIN AT MIDDLETOWN PUBLIC LIBRARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.298232,41.523402 ]
	    },
	    "properties": {
	    "stop_id":"2300",
	    "stop_name":"W MAIN NS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.297541,41.523824 ]
	    },
	    "properties": {
	    "stop_id":"2305",
	    "stop_name":"VALLEY NS W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.298223,41.52402 ]
	    },
	    "properties": {
	    "stop_id":"2310",
	    "stop_name":"W MAIN OPP VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29768,41.524878 ]
	    },
	    "properties": {
	    "stop_id":"2315",
	    "stop_name":"W MAIN FS WOOLSEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423991,41.524558 ]
	    },
	    "properties": {
	    "stop_id":"2320",
	    "stop_name":"BOSTON NECK OPP 1865 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424082,41.524298 ]
	    },
	    "properties": {
	    "stop_id":"2325",
	    "stop_name":"BOSTON NECK NS BARBERS HEIGHTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.297526,41.525923 ]
	    },
	    "properties": {
	    "stop_id":"2335",
	    "stop_name":"W MAIN NS CHASES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.276159,41.52588 ]
	    },
	    "properties": {
	    "stop_id":"2340",
	    "stop_name":"E MAIN NS TURNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.276117,41.526101 ]
	    },
	    "properties": {
	    "stop_id":"2345",
	    "stop_name":"E MAIN OPP TURNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425556,41.526992 ]
	    },
	    "properties": {
	    "stop_id":"2360",
	    "stop_name":"RT 1A & RT 138 PARK&RIDE (curbside)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.385276,41.525592 ]
	    },
	    "properties": {
	    "stop_id":"2361",
	    "stop_name":"TASHTASSUCK FS HELM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.296415,41.527304 ]
	    },
	    "properties": {
	    "stop_id":"2365",
	    "stop_name":"W MAIN AT ALL SAINTS ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428171,41.530551 ]
	    },
	    "properties": {
	    "stop_id":"2370",
	    "stop_name":"BOSTON NECK NS RT-138 WEST [ON-RAMP]"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.307644,41.529203 ]
	    },
	    "properties": {
	    "stop_id":"2380",
	    "stop_name":"NUWC GATE 17"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.296217,41.528018 ]
	    },
	    "properties": {
	    "stop_id":"2385",
	    "stop_name":"W MAIN AT 936 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.272856,41.530294 ]
	    },
	    "properties": {
	    "stop_id":"2390",
	    "stop_name":"E MAIN OPP CHAVES GARDENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.273136,41.529703 ]
	    },
	    "properties": {
	    "stop_id":"2395",
	    "stop_name":"E MAIN NS MEADOW LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.294749,41.529581 ]
	    },
	    "properties": {
	    "stop_id":"2405",
	    "stop_name":"W MAIN AT 999 W MAIN (PLAZA)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.294937,41.529655 ]
	    },
	    "properties": {
	    "stop_id":"2410",
	    "stop_name":"W MAIN OPP 999 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.293986,41.530666 ]
	    },
	    "properties": {
	    "stop_id":"2415",
	    "stop_name":"W MAIN NS FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.293965,41.53102 ]
	    },
	    "properties": {
	    "stop_id":"2425",
	    "stop_name":"W MAIN OPP FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.271331,41.53186 ]
	    },
	    "properties": {
	    "stop_id":"2430",
	    "stop_name":"E MAIN NS OLIPHANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.271246,41.532157 ]
	    },
	    "properties": {
	    "stop_id":"2435",
	    "stop_name":"E MAIN NS OLIPHANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.293429,41.532627 ]
	    },
	    "properties": {
	    "stop_id":"2440",
	    "stop_name":"W MAIN NS VANICEK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29307,41.533073 ]
	    },
	    "properties": {
	    "stop_id":"2445",
	    "stop_name":"W MAIN AT CARDI'S FURNITURE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.292692,41.534933 ]
	    },
	    "properties": {
	    "stop_id":"2455",
	    "stop_name":"W MAIN NS BRIGHT IDEAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.292583,41.534557 ]
	    },
	    "properties": {
	    "stop_id":"2460",
	    "stop_name":"W MAIN AT MIDDLETOWN SQUARE PLAZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291856,41.53788 ]
	    },
	    "properties": {
	    "stop_id":"2470",
	    "stop_name":"W MAIN NS BROWNS LANE SHOPPING CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.293336,41.536636 ]
	    },
	    "properties": {
	    "stop_id":"2475",
	    "stop_name":"STOP&SHOP (WEST MAIN ROAD - MIDDLETOWN)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291786,41.537387 ]
	    },
	    "properties": {
	    "stop_id":"2480",
	    "stop_name":"W MAIN AT 1397 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468498,41.538606 ]
	    },
	    "properties": {
	    "stop_id":"2490",
	    "stop_name":"RT 1 NS SHADY LEA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265849,41.538183 ]
	    },
	    "properties": {
	    "stop_id":"2495",
	    "stop_name":"E MAIN OPP MITCHELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265797,41.537955 ]
	    },
	    "properties": {
	    "stop_id":"2500",
	    "stop_name":"E MAIN NS MITCHELLS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438657,41.538758 ]
	    },
	    "properties": {
	    "stop_id":"2505",
	    "stop_name":"BOSTON NECK OPP GILBERT STUART RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438993,41.538893 ]
	    },
	    "properties": {
	    "stop_id":"2510",
	    "stop_name":"BOSTON NECK NS GILBERT STUART RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291406,41.539573 ]
	    },
	    "properties": {
	    "stop_id":"2515",
	    "stop_name":"W MAIN OPP 1522 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291684,41.540951 ]
	    },
	    "properties": {
	    "stop_id":"2520",
	    "stop_name":"W MAIN NS SQUANTUM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.263527,41.541306 ]
	    },
	    "properties": {
	    "stop_id":"2525",
	    "stop_name":"E MAIN NS WOODLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.264004,41.540815 ]
	    },
	    "properties": {
	    "stop_id":"2530",
	    "stop_name":"E MAIN OPP RANDALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291483,41.540978 ]
	    },
	    "properties": {
	    "stop_id":"2535",
	    "stop_name":"W MAIN OPP SQUANTUM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.261351,41.544789 ]
	    },
	    "properties": {
	    "stop_id":"2540",
	    "stop_name":"E MAIN FS PAQUINS LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.260693,41.545417 ]
	    },
	    "properties": {
	    "stop_id":"2545",
	    "stop_name":"E MAIN FS SELINA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29165,41.543549 ]
	    },
	    "properties": {
	    "stop_id":"2550",
	    "stop_name":"W MAIN NS THELMA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441227,41.543739 ]
	    },
	    "properties": {
	    "stop_id":"2555",
	    "stop_name":"BOSTON NECK FS WEAVER (southern intersection)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441132,41.54407 ]
	    },
	    "properties": {
	    "stop_id":"2560",
	    "stop_name":"BOSTON NECK OPP WEAVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291846,41.545131 ]
	    },
	    "properties": {
	    "stop_id":"2565",
	    "stop_name":"W MAIN FS MARSHALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.292799,41.543701 ]
	    },
	    "properties": {
	    "stop_id":"2570",
	    "stop_name":"OXBOW APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.259947,41.546435 ]
	    },
	    "properties": {
	    "stop_id":"2575",
	    "stop_name":"E MAIN AT AQUIDNECK CHRISTIAN ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477161,41.545561 ]
	    },
	    "properties": {
	    "stop_id":"2585",
	    "stop_name":"RT 4 FS W ALLENTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.292033,41.546547 ]
	    },
	    "properties": {
	    "stop_id":"2595",
	    "stop_name":"W MAIN AT 1776 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291778,41.546223 ]
	    },
	    "properties": {
	    "stop_id":"2600",
	    "stop_name":"W MAIN AT 1761 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29217,41.548501 ]
	    },
	    "properties": {
	    "stop_id":"2605",
	    "stop_name":"W MAIN NS GREEN LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441464,41.548185 ]
	    },
	    "properties": {
	    "stop_id":"2610",
	    "stop_name":"BOSTON NECK FS WEAVER & HAMILTON ALLENTON RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441313,41.548244 ]
	    },
	    "properties": {
	    "stop_id":"2615",
	    "stop_name":"BOSTON NECK NS SALISBURY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291973,41.54818 ]
	    },
	    "properties": {
	    "stop_id":"2620",
	    "stop_name":"W MAIN NS PASTURE FARMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25766,41.550809 ]
	    },
	    "properties": {
	    "stop_id":"2625",
	    "stop_name":"E MAIN NS SANDY POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.257789,41.550787 ]
	    },
	    "properties": {
	    "stop_id":"2630",
	    "stop_name":"E MAIN OPP SANDY PT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44077,41.552523 ]
	    },
	    "properties": {
	    "stop_id":"2640",
	    "stop_name":"BOSTON NECK NS WALDRON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441097,41.55469 ]
	    },
	    "properties": {
	    "stop_id":"2650",
	    "stop_name":"BOSTON NECK OPP EARL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443037,41.557389 ]
	    },
	    "properties": {
	    "stop_id":"2660",
	    "stop_name":"BOSTON NECK OPP DUCK COVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25534,41.558025 ]
	    },
	    "properties": {
	    "stop_id":"2665",
	    "stop_name":"E MAIN NS UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.255379,41.558492 ]
	    },
	    "properties": {
	    "stop_id":"2670",
	    "stop_name":"E MAIN AT 880 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440886,41.554835 ]
	    },
	    "properties": {
	    "stop_id":"2675",
	    "stop_name":"BOSTON NECK FS EARLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443893,41.558566 ]
	    },
	    "properties": {
	    "stop_id":"2680",
	    "stop_name":"BOSTON NECK AT 429 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.287668,41.558869 ]
	    },
	    "properties": {
	    "stop_id":"2685",
	    "stop_name":"W MAIN NS UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442932,41.557597 ]
	    },
	    "properties": {
	    "stop_id":"2695",
	    "stop_name":"BOSTON NECK FS DUCK COVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444361,41.559494 ]
	    },
	    "properties": {
	    "stop_id":"2700",
	    "stop_name":"BOSTON NECK AT 392 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445238,41.560442 ]
	    },
	    "properties": {
	    "stop_id":"2705",
	    "stop_name":"BOSTON NECK NS FAIRWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.286754,41.560639 ]
	    },
	    "properties": {
	    "stop_id":"2710",
	    "stop_name":"W MAIL OPP MAIL COACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25419,41.561009 ]
	    },
	    "properties": {
	    "stop_id":"2715",
	    "stop_name":"E MAIN NS GLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446391,41.562044 ]
	    },
	    "properties": {
	    "stop_id":"2720",
	    "stop_name":"BOSTON NECK OPP 270 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448756,41.565576 ]
	    },
	    "properties": {
	    "stop_id":"2725",
	    "stop_name":"BOSTON NECK FS BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446428,41.562423 ]
	    },
	    "properties": {
	    "stop_id":"2730",
	    "stop_name":"BOSTON NECK AT 270 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.286128,41.562712 ]
	    },
	    "properties": {
	    "stop_id":"2735",
	    "stop_name":"W MAIN AT 2243 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.254288,41.561224 ]
	    },
	    "properties": {
	    "stop_id":"2740",
	    "stop_name":"E MAIN OPP GLEN RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449903,41.56659 ]
	    },
	    "properties": {
	    "stop_id":"2745",
	    "stop_name":"BOSTON NECK OPP REYNOLDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448489,41.565429 ]
	    },
	    "properties": {
	    "stop_id":"2750",
	    "stop_name":"BOSTON NECK NS BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.286129,41.562254 ]
	    },
	    "properties": {
	    "stop_id":"2755",
	    "stop_name":"W MAIN OPP 2243 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.284734,41.565974 ]
	    },
	    "properties": {
	    "stop_id":"2760",
	    "stop_name":"BAYVIEW APARTMENTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449809,41.566631 ]
	    },
	    "properties": {
	    "stop_id":"2765",
	    "stop_name":"BOSTON NECK NS REYNOLDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251127,41.568236 ]
	    },
	    "properties": {
	    "stop_id":"2770",
	    "stop_name":"E MAIN NS EYLER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25262,41.565429 ]
	    },
	    "properties": {
	    "stop_id":"2775",
	    "stop_name":"E MAIN NS BEAUPRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451148,41.567678 ]
	    },
	    "properties": {
	    "stop_id":"2780",
	    "stop_name":"BOSTON NECK AT 45 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.277513,41.56988 ]
	    },
	    "properties": {
	    "stop_id":"2785",
	    "stop_name":"W MAIN FS RAYTHEON ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.276863,41.570219 ]
	    },
	    "properties": {
	    "stop_id":"2810",
	    "stop_name":"W MAIN OPP RAYTHEON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454952,41.568111 ]
	    },
	    "properties": {
	    "stop_id":"2815",
	    "stop_name":"PHILLIPS AT 84 PHILLIPS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49305,41.57158 ]
	    },
	    "properties": {
	    "stop_id":"2850",
	    "stop_name":"RT 4 NS LAFAYETTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.250954,41.572289 ]
	    },
	    "properties": {
	    "stop_id":"2870",
	    "stop_name":"E MAIN NS MCCORRIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251185,41.57263 ]
	    },
	    "properties": {
	    "stop_id":"2875",
	    "stop_name":"E MAIN OPP MCCORRIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.271663,41.575695 ]
	    },
	    "properties": {
	    "stop_id":"2890",
	    "stop_name":"W MAIN OPP SCOTTY DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462092,41.572506 ]
	    },
	    "properties": {
	    "stop_id":"2900",
	    "stop_name":"POST FS SUMMIT VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251429,41.575163 ]
	    },
	    "properties": {
	    "stop_id":"2910",
	    "stop_name":"E MAIN OPP MARTENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.271918,41.575644 ]
	    },
	    "properties": {
	    "stop_id":"2915",
	    "stop_name":"W MAIN NS JOHN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461085,41.575557 ]
	    },
	    "properties": {
	    "stop_id":"2920",
	    "stop_name":"POST OPP JUNIPER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461147,41.575742 ]
	    },
	    "properties": {
	    "stop_id":"2925",
	    "stop_name":"POST NS JUNIPER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.270929,41.577688 ]
	    },
	    "properties": {
	    "stop_id":"2930",
	    "stop_name":"W MAIN OPP STRINGHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460353,41.577911 ]
	    },
	    "properties": {
	    "stop_id":"2935",
	    "stop_name":"POST NS INTREPID"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.271286,41.577411 ]
	    },
	    "properties": {
	    "stop_id":"2940",
	    "stop_name":"W MAIN AT 1575 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460236,41.577687 ]
	    },
	    "properties": {
	    "stop_id":"2945",
	    "stop_name":"POST FS INTREPID"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.270422,41.57916 ]
	    },
	    "properties": {
	    "stop_id":"2950",
	    "stop_name":"W MAIN NS MILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251991,41.578243 ]
	    },
	    "properties": {
	    "stop_id":"2960",
	    "stop_name":"E MAIN FS SHERWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.270591,41.579202 ]
	    },
	    "properties": {
	    "stop_id":"2965",
	    "stop_name":"W MAIN OPP MILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251519,41.574725 ]
	    },
	    "properties": {
	    "stop_id":"2970",
	    "stop_name":"E MAIN NS MARVEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252284,41.579942 ]
	    },
	    "properties": {
	    "stop_id":"2975",
	    "stop_name":"E MAIN NS FAIRVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516335,41.574248 ]
	    },
	    "properties": {
	    "stop_id":"2980",
	    "stop_name":"RT 2 AT BALD HILL GARDEN CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500866,41.584437 ]
	    },
	    "properties": {
	    "stop_id":"2995",
	    "stop_name":"RT 2 FS HOME DEPOT ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500986,41.584441 ]
	    },
	    "properties": {
	    "stop_id":"29966",
	    "stop_name":"RT 2 NS HOME DEPOT ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252218,41.583748 ]
	    },
	    "properties": {
	    "stop_id":"3000",
	    "stop_name":"E MAIN BETWEEN ETHEL & PINE TREE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252424,41.583889 ]
	    },
	    "properties": {
	    "stop_id":"3005",
	    "stop_name":"E MAIN AT 1944 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458818,41.58539 ]
	    },
	    "properties": {
	    "stop_id":"3010",
	    "stop_name":"POST NS HULING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252806,41.587071 ]
	    },
	    "properties": {
	    "stop_id":"3020",
	    "stop_name":"E MAIN AT 2050 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.269433,41.583198 ]
	    },
	    "properties": {
	    "stop_id":"3030",
	    "stop_name":"W MAIN OPP MELVILLE ELEMENTARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252207,41.585827 ]
	    },
	    "properties": {
	    "stop_id":"3035",
	    "stop_name":"E MAIN FS LEPES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458554,41.585783 ]
	    },
	    "properties": {
	    "stop_id":"3040",
	    "stop_name":"POST OPP 7805 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45845,41.586855 ]
	    },
	    "properties": {
	    "stop_id":"3045",
	    "stop_name":"POST OPP 7760 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.269629,41.583362 ]
	    },
	    "properties": {
	    "stop_id":"3055",
	    "stop_name":"W MAIN NS BRADFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457887,41.588263 ]
	    },
	    "properties": {
	    "stop_id":"3060",
	    "stop_name":"POST AT 7708 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.266769,41.59131 ]
	    },
	    "properties": {
	    "stop_id":"3070",
	    "stop_name":"W MAIN FS KING CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.266927,41.591357 ]
	    },
	    "properties": {
	    "stop_id":"3075",
	    "stop_name":"W MAIN NS KING CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457417,41.590047 ]
	    },
	    "properties": {
	    "stop_id":"3080",
	    "stop_name":"POST NS OAKDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457545,41.59032 ]
	    },
	    "properties": {
	    "stop_id":"3085",
	    "stop_name":"POST NS OAKDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252631,41.587144 ]
	    },
	    "properties": {
	    "stop_id":"3090",
	    "stop_name":"E MAIN NS SEA MEADOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.253728,41.59042 ]
	    },
	    "properties": {
	    "stop_id":"3095",
	    "stop_name":"E MAIN ND HEDLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.253521,41.592158 ]
	    },
	    "properties": {
	    "stop_id":"3100",
	    "stop_name":"E MAIN AT PORTSMOUTH POLICE HQ"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.253504,41.590066 ]
	    },
	    "properties": {
	    "stop_id":"3105",
	    "stop_name":"E MAIN NS HEDLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456677,41.592592 ]
	    },
	    "properties": {
	    "stop_id":"3110",
	    "stop_name":"POST AT 1540 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456803,41.592667 ]
	    },
	    "properties": {
	    "stop_id":"3115",
	    "stop_name":"POST OPP 7540 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.264963,41.594099 ]
	    },
	    "properties": {
	    "stop_id":"3120",
	    "stop_name":"W MAIN OPP HEDLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455897,41.595082 ]
	    },
	    "properties": {
	    "stop_id":"3130",
	    "stop_name":"POST AT 7440 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251729,41.596872 ]
	    },
	    "properties": {
	    "stop_id":"3145",
	    "stop_name":"E MAIN AT RITE AID"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251507,41.596877 ]
	    },
	    "properties": {
	    "stop_id":"3150",
	    "stop_name":"E MAIN AT 2451 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455157,41.5976 ]
	    },
	    "properties": {
	    "stop_id":"3155",
	    "stop_name":"POST FS CAMP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454724,41.599779 ]
	    },
	    "properties": {
	    "stop_id":"3170",
	    "stop_name":"POST AT 7260 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.250171,41.600347 ]
	    },
	    "properties": {
	    "stop_id":"3175",
	    "stop_name":"E MAIN AT 2588 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454867,41.60079 ]
	    },
	    "properties": {
	    "stop_id":"3180",
	    "stop_name":"POST AT 7277 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.249393,41.601115 ]
	    },
	    "properties": {
	    "stop_id":"3185",
	    "stop_name":"E MAIN FS TURNPIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.249489,41.601241 ]
	    },
	    "properties": {
	    "stop_id":"3190",
	    "stop_name":"E MAIN FS FREEBORN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.248235,41.6019 ]
	    },
	    "properties": {
	    "stop_id":"3195",
	    "stop_name":"E MAIN NS CHURCH LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258605,41.604163 ]
	    },
	    "properties": {
	    "stop_id":"3210",
	    "stop_name":"W MAIN FS FREEBORN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.247628,41.602887 ]
	    },
	    "properties": {
	    "stop_id":"3215",
	    "stop_name":"E MAIN AT 2708 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.247038,41.606115 ]
	    },
	    "properties": {
	    "stop_id":"3225",
	    "stop_name":"E MAIN NS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.247176,41.606127 ]
	    },
	    "properties": {
	    "stop_id":"3230",
	    "stop_name":"E MAIN OPP POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.492429,41.611758 ]
	    },
	    "properties": {
	    "stop_id":"3235",
	    "stop_name":"RT 2 & RT 4 PARK&RIDE (curbside)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455929,41.607345 ]
	    },
	    "properties": {
	    "stop_id":"3250",
	    "stop_name":"POST NS DEVILS FOOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258807,41.604075 ]
	    },
	    "properties": {
	    "stop_id":"3265",
	    "stop_name":"W MAIN OPP FREEBORN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246461,41.610542 ]
	    },
	    "properties": {
	    "stop_id":"3280",
	    "stop_name":"E MAIN NS VILLAGE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25901,41.605575 ]
	    },
	    "properties": {
	    "stop_id":"3285",
	    "stop_name":"W MAIN OPP 372 W MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246584,41.610829 ]
	    },
	    "properties": {
	    "stop_id":"3290",
	    "stop_name":"E MAIN OPP VILLAGE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457249,41.611184 ]
	    },
	    "properties": {
	    "stop_id":"3295",
	    "stop_name":"POST AT 6851 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456226,41.608966 ]
	    },
	    "properties": {
	    "stop_id":"3300",
	    "stop_name":"POST NS 6946 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.569583,41.495237 ]
	    },
	    "properties": {
	    "stop_id":"3310",
	    "stop_name":"RT 2 NS WAITES CORNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.260148,41.611053 ]
	    },
	    "properties": {
	    "stop_id":"3315",
	    "stop_name":"W MAIN OPP ANSELMO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258178,41.613465 ]
	    },
	    "properties": {
	    "stop_id":"3320",
	    "stop_name":"W MAIN OPP WILLOW LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457702,41.614106 ]
	    },
	    "properties": {
	    "stop_id":"3325",
	    "stop_name":"POST NS KING PHILLIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258247,41.61356 ]
	    },
	    "properties": {
	    "stop_id":"3330",
	    "stop_name":"W MAIN NS WILLOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457048,41.611386 ]
	    },
	    "properties": {
	    "stop_id":"3335",
	    "stop_name":"POST AT 6854 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.245837,41.614854 ]
	    },
	    "properties": {
	    "stop_id":"3340",
	    "stop_name":"E MAIN OPP SPRAGUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246113,41.613898 ]
	    },
	    "properties": {
	    "stop_id":"3345",
	    "stop_name":"E MAIN AT 3124 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246125,41.617523 ]
	    },
	    "properties": {
	    "stop_id":"3355",
	    "stop_name":"E MAIN OPP IRVING GAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256218,41.615384 ]
	    },
	    "properties": {
	    "stop_id":"3360",
	    "stop_name":"BRISTOL FERRY FS SPRAGUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246244,41.617327 ]
	    },
	    "properties": {
	    "stop_id":"3370",
	    "stop_name":"E MAIN OPP 3281 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457993,41.616003 ]
	    },
	    "properties": {
	    "stop_id":"3375",
	    "stop_name":"POST FS KINGSTOWN PLAZA ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457551,41.61389 ]
	    },
	    "properties": {
	    "stop_id":"3380",
	    "stop_name":"POST NS CHADSEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256829,41.618021 ]
	    },
	    "properties": {
	    "stop_id":"3385",
	    "stop_name":"BRISTOL FERRY FS BROWNELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457783,41.616754 ]
	    },
	    "properties": {
	    "stop_id":"3400",
	    "stop_name":"POST AT 6669 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.245345,41.620046 ]
	    },
	    "properties": {
	    "stop_id":"3415",
	    "stop_name":"E MAIN NS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.245481,41.62006 ]
	    },
	    "properties": {
	    "stop_id":"3420",
	    "stop_name":"E MAIN FS BASIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458086,41.620094 ]
	    },
	    "properties": {
	    "stop_id":"3430",
	    "stop_name":"POST AT KINGSTOWN MOTEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458508,41.621529 ]
	    },
	    "properties": {
	    "stop_id":"3435",
	    "stop_name":"POST OPP PEACHTREE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458258,41.621954 ]
	    },
	    "properties": {
	    "stop_id":"3440",
	    "stop_name":"POST FS PEACHTREE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.244826,41.621496 ]
	    },
	    "properties": {
	    "stop_id":"3445",
	    "stop_name":"E MAIN NS ECHO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.244379,41.621968 ]
	    },
	    "properties": {
	    "stop_id":"3450",
	    "stop_name":"E MAIN OPP 66 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256794,41.619745 ]
	    },
	    "properties": {
	    "stop_id":"3455",
	    "stop_name":"BRISTOL FERRY OPP CORY CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256983,41.617924 ]
	    },
	    "properties": {
	    "stop_id":"3460",
	    "stop_name":"BRISTOL FERRY NS BROWNELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256959,41.619542 ]
	    },
	    "properties": {
	    "stop_id":"3465",
	    "stop_name":"BRISTOL FERRY FS CORY CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.243862,41.623382 ]
	    },
	    "properties": {
	    "stop_id":"3470",
	    "stop_name":"E MAIN FS FOUNDERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.243716,41.623309 ]
	    },
	    "properties": {
	    "stop_id":"3475",
	    "stop_name":"E MAIN OPP FOUNDERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256892,41.621112 ]
	    },
	    "properties": {
	    "stop_id":"3485",
	    "stop_name":"BRISTOL FERRY OPP SCHOONER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256236,41.624208 ]
	    },
	    "properties": {
	    "stop_id":"3490",
	    "stop_name":"BRISTOL FERRY OPP BOTELHO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459199,41.624623 ]
	    },
	    "properties": {
	    "stop_id":"3495",
	    "stop_name":"POST OPP MEMORIAL CEMETARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.242659,41.625488 ]
	    },
	    "properties": {
	    "stop_id":"3505",
	    "stop_name":"E MAIN OPP SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.242934,41.625436 ]
	    },
	    "properties": {
	    "stop_id":"3510",
	    "stop_name":"E MAIN FS SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.256264,41.623391 ]
	    },
	    "properties": {
	    "stop_id":"3515",
	    "stop_name":"BRISTOL FERRY AT 309 BRISTOL FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.255615,41.626572 ]
	    },
	    "properties": {
	    "stop_id":"3520",
	    "stop_name":"BRISTOL FERRY FS MITCHELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461362,41.627417 ]
	    },
	    "properties": {
	    "stop_id":"3525",
	    "stop_name":"POST OPP ESSEX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460971,41.627133 ]
	    },
	    "properties": {
	    "stop_id":"3530",
	    "stop_name":"POST NS ESSEX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.254782,41.628846 ]
	    },
	    "properties": {
	    "stop_id":"3535",
	    "stop_name":"BRISTOL FERRY AT 531 BRISTOL FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.245619,41.630135 ]
	    },
	    "properties": {
	    "stop_id":"3545",
	    "stop_name":"BOYDS LANE OPP OLD BOYDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.243603,41.627633 ]
	    },
	    "properties": {
	    "stop_id":"3550",
	    "stop_name":"BOYDS LANE FS RTE. 24"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46335,41.62958 ]
	    },
	    "properties": {
	    "stop_id":"3555",
	    "stop_name":"POST AT 6145 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464234,41.630653 ]
	    },
	    "properties": {
	    "stop_id":"3560",
	    "stop_name":"POST FS AUSTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.249659,41.631401 ]
	    },
	    "properties": {
	    "stop_id":"3565",
	    "stop_name":"BOYDS LANE OPP LINDA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252939,41.632202 ]
	    },
	    "properties": {
	    "stop_id":"3570",
	    "stop_name":"BOYDS LANE FS BRISTOL FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.254268,41.630756 ]
	    },
	    "properties": {
	    "stop_id":"3575",
	    "stop_name":"BRISTOL FERRY NS PORTERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.253824,41.631742 ]
	    },
	    "properties": {
	    "stop_id":"3580",
	    "stop_name":"BRISTOL FERRY FS SHORELINE TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46607,41.63205 ]
	    },
	    "properties": {
	    "stop_id":"3585",
	    "stop_name":"POST AT 6000 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466835,41.63225 ]
	    },
	    "properties": {
	    "stop_id":"3595",
	    "stop_name":"POST OPP JT'S BUILDING SUPPLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467982,41.635455 ]
	    },
	    "properties": {
	    "stop_id":"3600",
	    "stop_name":"POST OPP FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468373,41.633667 ]
	    },
	    "properties": {
	    "stop_id":"3605",
	    "stop_name":"POST NS FRENCHTOWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468383,41.637661 ]
	    },
	    "properties": {
	    "stop_id":"3610",
	    "stop_name":"POST FS 5804 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46826,41.63559 ]
	    },
	    "properties": {
	    "stop_id":"3615",
	    "stop_name":"POST NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468649,41.637543 ]
	    },
	    "properties": {
	    "stop_id":"3620",
	    "stop_name":"POST AT 5805 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468654,41.639642 ]
	    },
	    "properties": {
	    "stop_id":"3630",
	    "stop_name":"POST AT 5732 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46582,41.643157 ]
	    },
	    "properties": {
	    "stop_id":"3635",
	    "stop_name":"POST FS VICTORY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468924,41.639686 ]
	    },
	    "properties": {
	    "stop_id":"3637",
	    "stop_name":"POST FS GRANDVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463324,41.645987 ]
	    },
	    "properties": {
	    "stop_id":"3640",
	    "stop_name":"POST NS OVERFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467425,41.641866 ]
	    },
	    "properties": {
	    "stop_id":"3642",
	    "stop_name":"POST AT 5627 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466082,41.642591 ]
	    },
	    "properties": {
	    "stop_id":"3645",
	    "stop_name":"POST NS S PIERCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461489,41.647525 ]
	    },
	    "properties": {
	    "stop_id":"3650",
	    "stop_name":"POST FS CROSSWAYS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463222,41.64589 ]
	    },
	    "properties": {
	    "stop_id":"3655",
	    "stop_name":"POST FS OVERFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.26214,41.647682 ]
	    },
	    "properties": {
	    "stop_id":"3660",
	    "stop_name":"FERRY RD FS LOW LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459995,41.648469 ]
	    },
	    "properties": {
	    "stop_id":"3665",
	    "stop_name":"POST NS 5329 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.261906,41.647994 ]
	    },
	    "properties": {
	    "stop_id":"3670",
	    "stop_name":"FERRY RD AT ROGER WILLIAMS UNIV"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45979,41.6484 ]
	    },
	    "properties": {
	    "stop_id":"3675",
	    "stop_name":"POST NS FORGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457277,41.650908 ]
	    },
	    "properties": {
	    "stop_id":"3690",
	    "stop_name":"MAIN OPP 1001 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457636,41.650827 ]
	    },
	    "properties": {
	    "stop_id":"3695",
	    "stop_name":"MAIN FS 1003 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455939,41.652498 ]
	    },
	    "properties": {
	    "stop_id":"3715",
	    "stop_name":"MAIN FS SIXTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456194,41.652498 ]
	    },
	    "properties": {
	    "stop_id":"3720",
	    "stop_name":"MAIN NS SIXTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.264463,41.653555 ]
	    },
	    "properties": {
	    "stop_id":"3725",
	    "stop_name":"FERRY RD NS AMBROSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.264526,41.653477 ]
	    },
	    "properties": {
	    "stop_id":"3730",
	    "stop_name":"FERRY OPP AMBROSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454834,41.654247 ]
	    },
	    "properties": {
	    "stop_id":"3740",
	    "stop_name":"MAIN NS THIRD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454768,41.654053 ]
	    },
	    "properties": {
	    "stop_id":"3745",
	    "stop_name":"MAIN NS THIRD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265123,41.655351 ]
	    },
	    "properties": {
	    "stop_id":"3750",
	    "stop_name":"FERRY RD FS SIDNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265166,41.655229 ]
	    },
	    "properties": {
	    "stop_id":"3755",
	    "stop_name":"FERRY OPP SIDNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45357,41.655663 ]
	    },
	    "properties": {
	    "stop_id":"3760",
	    "stop_name":"MAIN AT 640 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453711,41.655687 ]
	    },
	    "properties": {
	    "stop_id":"3765",
	    "stop_name":"MAIN NS FIRST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455198,41.65591 ]
	    },
	    "properties": {
	    "stop_id":"3775",
	    "stop_name":"FIRST OPP CLIFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452678,41.656561 ]
	    },
	    "properties": {
	    "stop_id":"3800",
	    "stop_name":"MAIN FS VINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452515,41.65688 ]
	    },
	    "properties": {
	    "stop_id":"3805",
	    "stop_name":"MAIN OPP BRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.551366,41.656876 ]
	    },
	    "properties": {
	    "stop_id":"3810",
	    "stop_name":"EXIT 7 PARK 'N' RIDE (WEST GREENWICH)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265976,41.65738 ]
	    },
	    "properties": {
	    "stop_id":"3815",
	    "stop_name":"FERRY AT 133 FERRY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265835,41.657236 ]
	    },
	    "properties": {
	    "stop_id":"3820",
	    "stop_name":"FERRY RD NS GRISWOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451207,41.657862 ]
	    },
	    "properties": {
	    "stop_id":"3835",
	    "stop_name":"MAIN NS UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451392,41.657919 ]
	    },
	    "properties": {
	    "stop_id":"3840",
	    "stop_name":"MAIN OPP UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258745,41.65903 ]
	    },
	    "properties": {
	    "stop_id":"3855",
	    "stop_name":"METACOM NS GRISWOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450137,41.658912 ]
	    },
	    "properties": {
	    "stop_id":"3860",
	    "stop_name":"MAIN FS LONDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.266562,41.659269 ]
	    },
	    "properties": {
	    "stop_id":"3865",
	    "stop_name":"FERRY RD NS FAIRVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258791,41.659357 ]
	    },
	    "properties": {
	    "stop_id":"3870",
	    "stop_name":"METACOM NS GRISWOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450268,41.658974 ]
	    },
	    "properties": {
	    "stop_id":"3885",
	    "stop_name":"MAIN NS PIERCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449877,41.660847 ]
	    },
	    "properties": {
	    "stop_id":"3890",
	    "stop_name":"MAIN FS QUEEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.26801,41.660493 ]
	    },
	    "properties": {
	    "stop_id":"3900",
	    "stop_name":"HOPE NS 10 HOPE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.270375,41.661275 ]
	    },
	    "properties": {
	    "stop_id":"3910",
	    "stop_name":"HOPE OPP HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.270113,41.661259 ]
	    },
	    "properties": {
	    "stop_id":"3915",
	    "stop_name":"HOPE NS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450069,41.661607 ]
	    },
	    "properties": {
	    "stop_id":"3920",
	    "stop_name":"MAIN FS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449917,41.66175 ]
	    },
	    "properties": {
	    "stop_id":"3930",
	    "stop_name":"MAIN FS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25708,41.662644 ]
	    },
	    "properties": {
	    "stop_id":"3975",
	    "stop_name":"METACOM AT 205 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.257001,41.662479 ]
	    },
	    "properties": {
	    "stop_id":"3980",
	    "stop_name":"METACOM OPP 205 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450203,41.663729 ]
	    },
	    "properties": {
	    "stop_id":"4015",
	    "stop_name":"MAIN FS POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.273609,41.664018 ]
	    },
	    "properties": {
	    "stop_id":"4020",
	    "stop_name":"HOPE FS BURTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45002,41.663764 ]
	    },
	    "properties": {
	    "stop_id":"4025",
	    "stop_name":"MAIN NS DIVISION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.273758,41.663975 ]
	    },
	    "properties": {
	    "stop_id":"4030",
	    "stop_name":"HOPE OPP BURTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450107,41.66539 ]
	    },
	    "properties": {
	    "stop_id":"4035",
	    "stop_name":"POST FS LADD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.274621,41.665457 ]
	    },
	    "properties": {
	    "stop_id":"4040",
	    "stop_name":"HOPE NS UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.257471,41.665677 ]
	    },
	    "properties": {
	    "stop_id":"4045",
	    "stop_name":"METACOM NS WOODLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.257361,41.665922 ]
	    },
	    "properties": {
	    "stop_id":"4050",
	    "stop_name":"METACOM FS WOODLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450005,41.666283 ]
	    },
	    "properties": {
	    "stop_id":"4055",
	    "stop_name":"POST AT 4575 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.275187,41.667033 ]
	    },
	    "properties": {
	    "stop_id":"4060",
	    "stop_name":"HOPE NS CONSTITUTION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.274712,41.66539 ]
	    },
	    "properties": {
	    "stop_id":"4065",
	    "stop_name":"HOPE FS UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449485,41.667295 ]
	    },
	    "properties": {
	    "stop_id":"4070",
	    "stop_name":"POST OPP COREY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.275826,41.668694 ]
	    },
	    "properties": {
	    "stop_id":"4085",
	    "stop_name":"HOPE NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.27602,41.668831 ]
	    },
	    "properties": {
	    "stop_id":"4090",
	    "stop_name":"HOPE NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.276445,41.670306 ]
	    },
	    "properties": {
	    "stop_id":"4095",
	    "stop_name":"HOPE NS STATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.276669,41.670508 ]
	    },
	    "properties": {
	    "stop_id":"4100",
	    "stop_name":"HOPE NS STATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448286,41.670154 ]
	    },
	    "properties": {
	    "stop_id":"4105",
	    "stop_name":"POST NS BAY VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258519,41.670746 ]
	    },
	    "properties": {
	    "stop_id":"4115",
	    "stop_name":"METACOM FS MT HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258409,41.670884 ]
	    },
	    "properties": {
	    "stop_id":"4120",
	    "stop_name":"METACOM OPP MT HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.277277,41.672162 ]
	    },
	    "properties": {
	    "stop_id":"4130",
	    "stop_name":"HOPE AT 573 HOPE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447974,41.672056 ]
	    },
	    "properties": {
	    "stop_id":"4135",
	    "stop_name":"POST AT 4372 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.591296,41.672429 ]
	    },
	    "properties": {
	    "stop_id":"4140",
	    "stop_name":"WOODLAND AT 210 WOODLAND MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.258946,41.672632 ]
	    },
	    "properties": {
	    "stop_id":"4150",
	    "stop_name":"METACOM FS WOBURN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25896,41.673363 ]
	    },
	    "properties": {
	    "stop_id":"4160",
	    "stop_name":"METACOM NS TOWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.277663,41.673613 ]
	    },
	    "properties": {
	    "stop_id":"4175",
	    "stop_name":"HOPE NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.277862,41.673858 ]
	    },
	    "properties": {
	    "stop_id":"4180",
	    "stop_name":"HOPE NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.594275,41.673582 ]
	    },
	    "properties": {
	    "stop_id":"4190",
	    "stop_name":"WOODLAND MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.591534,41.67446 ]
	    },
	    "properties": {
	    "stop_id":"4195",
	    "stop_name":"WOODTHRUSH OPP GOLDFINCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448218,41.674528 ]
	    },
	    "properties": {
	    "stop_id":"4200",
	    "stop_name":"POST FS WOLVERSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448359,41.674469 ]
	    },
	    "properties": {
	    "stop_id":"4205",
	    "stop_name":"POST NS WOLVERSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278255,41.675257 ]
	    },
	    "properties": {
	    "stop_id":"4215",
	    "stop_name":"HOPE NS OLIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.27822,41.674894 ]
	    },
	    "properties": {
	    "stop_id":"4220",
	    "stop_name":"HOPE AT 711 HOPE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.259564,41.676217 ]
	    },
	    "properties": {
	    "stop_id":"4230",
	    "stop_name":"METACOM AT 370 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.592809,41.675236 ]
	    },
	    "properties": {
	    "stop_id":"4235",
	    "stop_name":"TIOGUE AT 1395 TIOGUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278625,41.677398 ]
	    },
	    "properties": {
	    "stop_id":"4240",
	    "stop_name":"HOPE FS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278791,41.677305 ]
	    },
	    "properties": {
	    "stop_id":"4250",
	    "stop_name":"HOPE NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448458,41.676845 ]
	    },
	    "properties": {
	    "stop_id":"4255",
	    "stop_name":"POST FS NEPTUNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448622,41.676913 ]
	    },
	    "properties": {
	    "stop_id":"4260",
	    "stop_name":"POST AT HIGHPOINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.259808,41.676732 ]
	    },
	    "properties": {
	    "stop_id":"4265",
	    "stop_name":"METACOM FS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.588267,41.6779 ]
	    },
	    "properties": {
	    "stop_id":"4275",
	    "stop_name":"NOOSENECK OPP WISTERIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.588632,41.677895 ]
	    },
	    "properties": {
	    "stop_id":"4290",
	    "stop_name":"TIOGUE FS WISTERIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.585379,41.67887 ]
	    },
	    "properties": {
	    "stop_id":"4295",
	    "stop_name":"1193 TIOGUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.579319,41.679127 ]
	    },
	    "properties": {
	    "stop_id":"4300",
	    "stop_name":"TIOGUE AT 1072 TIOGUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.27855,41.679288 ]
	    },
	    "properties": {
	    "stop_id":"4305",
	    "stop_name":"HOPE NS SILVER CREEK MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278734,41.679251 ]
	    },
	    "properties": {
	    "stop_id":"4310",
	    "stop_name":"HOPE AT 837 HOPE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.260513,41.680805 ]
	    },
	    "properties": {
	    "stop_id":"4315",
	    "stop_name":"METACOM NS HOPEWORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.579574,41.679195 ]
	    },
	    "properties": {
	    "stop_id":"4325",
	    "stop_name":"TIOGUE OPP 1100 TIOGUE AVE (MCDONALD'S)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.260486,41.679963 ]
	    },
	    "properties": {
	    "stop_id":"4330",
	    "stop_name":"METACOM NS BAYVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449273,41.679097 ]
	    },
	    "properties": {
	    "stop_id":"4335",
	    "stop_name":"POST FS CRESTWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.582986,41.680522 ]
	    },
	    "properties": {
	    "stop_id":"4345",
	    "stop_name":"TIOGUE - JOBLOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.583607,41.678893 ]
	    },
	    "properties": {
	    "stop_id":"4346",
	    "stop_name":"TIOGUE OPP JOBLOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449123,41.679114 ]
	    },
	    "properties": {
	    "stop_id":"4350",
	    "stop_name":"POST AT 4100 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.574417,41.680398 ]
	    },
	    "properties": {
	    "stop_id":"4360",
	    "stop_name":"S MAIN FS LOWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.573586,41.680537 ]
	    },
	    "properties": {
	    "stop_id":"4365",
	    "stop_name":"S MAIN OPP NAPA AUTO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449817,41.680679 ]
	    },
	    "properties": {
	    "stop_id":"4370",
	    "stop_name":"POST AT 4042 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278813,41.681233 ]
	    },
	    "properties": {
	    "stop_id":"4375",
	    "stop_name":"HOPE AT 889 HOPE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.260868,41.681696 ]
	    },
	    "properties": {
	    "stop_id":"4380",
	    "stop_name":"METACOM OPP ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.571584,41.681041 ]
	    },
	    "properties": {
	    "stop_id":"4385",
	    "stop_name":"S MAIN OPP IAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278668,41.681267 ]
	    },
	    "properties": {
	    "stop_id":"4395",
	    "stop_name":"HOPE NS HILLSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449851,41.680266 ]
	    },
	    "properties": {
	    "stop_id":"4400",
	    "stop_name":"POST OPP 4060 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.568912,41.682147 ]
	    },
	    "properties": {
	    "stop_id":"4420",
	    "stop_name":"S MAIN NS HOPKINS HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451006,41.682586 ]
	    },
	    "properties": {
	    "stop_id":"4435",
	    "stop_name":"POST FS HIGHLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450953,41.68282 ]
	    },
	    "properties": {
	    "stop_id":"4440",
	    "stop_name":"POST OPP HIGHLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278884,41.683127 ]
	    },
	    "properties": {
	    "stop_id":"4445",
	    "stop_name":"HOPE OPP SHEFFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278758,41.682845 ]
	    },
	    "properties": {
	    "stop_id":"4450",
	    "stop_name":"HOPE OPP USHER TER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.567778,41.683521 ]
	    },
	    "properties": {
	    "stop_id":"4460",
	    "stop_name":"S MAIN OPP RATHBUN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452354,41.684262 ]
	    },
	    "properties": {
	    "stop_id":"4465",
	    "stop_name":"POST NS ISLAND VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520432,41.684489 ]
	    },
	    "properties": {
	    "stop_id":"4470",
	    "stop_name":"COWESETT NS ASHTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523411,41.685069 ]
	    },
	    "properties": {
	    "stop_id":"4475",
	    "stop_name":"MAIN FS COWESETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520431,41.684544 ]
	    },
	    "properties": {
	    "stop_id":"4480",
	    "stop_name":"COWESSET FS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516388,41.684617 ]
	    },
	    "properties": {
	    "stop_id":"4485",
	    "stop_name":"COWESETT OPP DOUNETOS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.567541,41.684236 ]
	    },
	    "properties": {
	    "stop_id":"4495",
	    "stop_name":"S MAIN OPP MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453747,41.685612 ]
	    },
	    "properties": {
	    "stop_id":"4500",
	    "stop_name":"POST FS VALENTINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.261429,41.684929 ]
	    },
	    "properties": {
	    "stop_id":"4505",
	    "stop_name":"METACOM OPP 467 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.261669,41.685189 ]
	    },
	    "properties": {
	    "stop_id":"4510",
	    "stop_name":"METACOM OPP VETERANS HOME"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509016,41.684817 ]
	    },
	    "properties": {
	    "stop_id":"4515",
	    "stop_name":"COWESETT OPP 242 COWESETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513772,41.684709 ]
	    },
	    "properties": {
	    "stop_id":"4525",
	    "stop_name":"COWESETT OPP HIGHVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.506237,41.684882 ]
	    },
	    "properties": {
	    "stop_id":"4530",
	    "stop_name":"COWESETT NS TINA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502908,41.684951 ]
	    },
	    "properties": {
	    "stop_id":"4535",
	    "stop_name":"COWESETT OPP 328 COWESETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.514106,41.684756 ]
	    },
	    "properties": {
	    "stop_id":"4540",
	    "stop_name":"COWESSET OPP HOLLOW CIRCLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278928,41.68518 ]
	    },
	    "properties": {
	    "stop_id":"4545",
	    "stop_name":"HOPE FS VANTAGE PT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.503179,41.68501 ]
	    },
	    "properties": {
	    "stop_id":"4550",
	    "stop_name":"COWESETT AT 328 COWESETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.567241,41.685943 ]
	    },
	    "properties": {
	    "stop_id":"4555",
	    "stop_name":"S MAIN NS STONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.508437,41.684908 ]
	    },
	    "properties": {
	    "stop_id":"4560",
	    "stop_name":"COWESETT AT 250 COWESETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278854,41.685491 ]
	    },
	    "properties": {
	    "stop_id":"4570",
	    "stop_name":"HOPE AT BENJAMIN CHURCH SENIOR CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453689,41.685728 ]
	    },
	    "properties": {
	    "stop_id":"4575",
	    "stop_name":"POST OPP COWESETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454709,41.686872 ]
	    },
	    "properties": {
	    "stop_id":"4580",
	    "stop_name":"POST AT 3791 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522977,41.686403 ]
	    },
	    "properties": {
	    "stop_id":"4585",
	    "stop_name":"MAIN OPP SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498353,41.686207 ]
	    },
	    "properties": {
	    "stop_id":"4590",
	    "stop_name":"COWESSETT CORNERS STOP & SHOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.567145,41.685948 ]
	    },
	    "properties": {
	    "stop_id":"4595",
	    "stop_name":"S MAIN NS WOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398111,41.686606 ]
	    },
	    "properties": {
	    "stop_id":"4600",
	    "stop_name":"OAKLAND BEACH NS SUBURBAN PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521554,41.690245 ]
	    },
	    "properties": {
	    "stop_id":"4610",
	    "stop_name":"MAIN NS BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.262122,41.687811 ]
	    },
	    "properties": {
	    "stop_id":"4615",
	    "stop_name":"METACOM OPP CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522418,41.687673 ]
	    },
	    "properties": {
	    "stop_id":"4620",
	    "stop_name":"MAIN NS NESTOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.26227,41.687968 ]
	    },
	    "properties": {
	    "stop_id":"4625",
	    "stop_name":"METACOM NS CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398312,41.6881 ]
	    },
	    "properties": {
	    "stop_id":"4630",
	    "stop_name":"OAKLAND BEACH FS MOHAWK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279133,41.688169 ]
	    },
	    "properties": {
	    "stop_id":"4635",
	    "stop_name":"HOPE AT COLT STATE PARK ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279005,41.688558 ]
	    },
	    "properties": {
	    "stop_id":"4640",
	    "stop_name":"HOPE FS COLT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455842,41.688813 ]
	    },
	    "properties": {
	    "stop_id":"4645",
	    "stop_name":"POST NS SHENADOAH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398102,41.688743 ]
	    },
	    "properties": {
	    "stop_id":"4655",
	    "stop_name":"OAKLAND BEACH AT 742 OAKLAND BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455735,41.689012 ]
	    },
	    "properties": {
	    "stop_id":"4660",
	    "stop_name":"POST OPP SHENANDOAH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.566786,41.688296 ]
	    },
	    "properties": {
	    "stop_id":"4670",
	    "stop_name":"S MAIN NS CADY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521956,41.688976 ]
	    },
	    "properties": {
	    "stop_id":"4685",
	    "stop_name":"MAIN OPP MANCHESTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.566594,41.689758 ]
	    },
	    "properties": {
	    "stop_id":"4690",
	    "stop_name":"S MAIN FS PARKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.262715,41.689828 ]
	    },
	    "properties": {
	    "stop_id":"4705",
	    "stop_name":"METACOM AT 529 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.262748,41.690513 ]
	    },
	    "properties": {
	    "stop_id":"4715",
	    "stop_name":"METACOM AT 532 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521039,41.692572 ]
	    },
	    "properties": {
	    "stop_id":"4720",
	    "stop_name":"MAIN AT 1527 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.56613,41.690328 ]
	    },
	    "properties": {
	    "stop_id":"4725",
	    "stop_name":"MAIN OPP SHOPPERS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398289,41.690668 ]
	    },
	    "properties": {
	    "stop_id":"4730",
	    "stop_name":"OAKLAND BEACH NS HAZARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.565979,41.690463 ]
	    },
	    "properties": {
	    "stop_id":"4735",
	    "stop_name":"MAIN OPP SOUTH MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456256,41.691445 ]
	    },
	    "properties": {
	    "stop_id":"4740",
	    "stop_name":"POST NS CLYDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561842,41.690526 ]
	    },
	    "properties": {
	    "stop_id":"4750",
	    "stop_name":"MAIN AT 1070 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.563884,41.690834 ]
	    },
	    "properties": {
	    "stop_id":"4755",
	    "stop_name":"MAIN NS HOLDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.559267,41.690692 ]
	    },
	    "properties": {
	    "stop_id":"4760",
	    "stop_name":"WASHINGTON OPP SANDY BOTTOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456403,41.690778 ]
	    },
	    "properties": {
	    "stop_id":"4765",
	    "stop_name":"POST FS ROBIN HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.558884,41.690739 ]
	    },
	    "properties": {
	    "stop_id":"4770",
	    "stop_name":"MAIN FS SANDY BOTTOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398071,41.691568 ]
	    },
	    "properties": {
	    "stop_id":"4775",
	    "stop_name":"OAKLAND BEACH NS KENWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279345,41.691727 ]
	    },
	    "properties": {
	    "stop_id":"4780",
	    "stop_name":"HOPE NS FALES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279198,41.691884 ]
	    },
	    "properties": {
	    "stop_id":"4785",
	    "stop_name":"HOPE AT DEFIANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521088,41.69137 ]
	    },
	    "properties": {
	    "stop_id":"4790",
	    "stop_name":"MAIN AT 1548 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.556284,41.692389 ]
	    },
	    "properties": {
	    "stop_id":"4795",
	    "stop_name":"WASHINGTON NS KNOTTY OAK RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.5564,41.692124 ]
	    },
	    "properties": {
	    "stop_id":"4800",
	    "stop_name":"WASHINGTON FS KNOTTY OAK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521744,41.694891 ]
	    },
	    "properties": {
	    "stop_id":"4805",
	    "stop_name":"MAIN OPP ROCHS PRODUCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.263219,41.692669 ]
	    },
	    "properties": {
	    "stop_id":"4810",
	    "stop_name":"METACOM NS PAGANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.263347,41.692721 ]
	    },
	    "properties": {
	    "stop_id":"4815",
	    "stop_name":"METACOM OPP PAGANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39833,41.692523 ]
	    },
	    "properties": {
	    "stop_id":"4820",
	    "stop_name":"OAKLAND BEACH NS COBURN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501198,41.691726 ]
	    },
	    "properties": {
	    "stop_id":"4825",
	    "stop_name":"QUAKER LANE OPP KENT COUNTY COURTHOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521019,41.692819 ]
	    },
	    "properties": {
	    "stop_id":"4840",
	    "stop_name":"MAIN AT FOP CLUB HOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561758,41.690608 ]
	    },
	    "properties": {
	    "stop_id":"4850",
	    "stop_name":"MAIN AT 1050 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398233,41.693341 ]
	    },
	    "properties": {
	    "stop_id":"4855",
	    "stop_name":"OAKLAND BEACH FS HOLT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279288,41.69344 ]
	    },
	    "properties": {
	    "stop_id":"4860",
	    "stop_name":"HOPE AT SEABRA MARKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456414,41.693621 ]
	    },
	    "properties": {
	    "stop_id":"4865",
	    "stop_name":"POST NS BRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.555149,41.693005 ]
	    },
	    "properties": {
	    "stop_id":"4870",
	    "stop_name":"WASHINGTON AT 770 WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279421,41.694019 ]
	    },
	    "properties": {
	    "stop_id":"4875",
	    "stop_name":"HOPE FS MULBERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.553476,41.694176 ]
	    },
	    "properties": {
	    "stop_id":"4880",
	    "stop_name":"WASHINGTON NS CONTENTMENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.553473,41.694091 ]
	    },
	    "properties": {
	    "stop_id":"4890",
	    "stop_name":"WASHINGTON FS MAPLEDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.550978,41.694798 ]
	    },
	    "properties": {
	    "stop_id":"4895",
	    "stop_name":"WASHINGTON AT 699 WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522072,41.697014 ]
	    },
	    "properties": {
	    "stop_id":"4900",
	    "stop_name":"MAIN NS WEST WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279411,41.695248 ]
	    },
	    "properties": {
	    "stop_id":"4905",
	    "stop_name":"HOPE AT BRISTOL COUNTY MEDICAL CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427334,41.695186 ]
	    },
	    "properties": {
	    "stop_id":"4915",
	    "stop_name":"BUTTONWOODS AT BUTTONWOODS TERRACE PLAZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.536985,41.695368 ]
	    },
	    "properties": {
	    "stop_id":"4920",
	    "stop_name":"WASHINGTON FS PULASKI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.538929,41.695304 ]
	    },
	    "properties": {
	    "stop_id":"4925",
	    "stop_name":"WASHINGTON OPP MACARTHUR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398478,41.695729 ]
	    },
	    "properties": {
	    "stop_id":"4935",
	    "stop_name":"OAKLAND BEACH OPP PINEHURST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379216,41.695292 ]
	    },
	    "properties": {
	    "stop_id":"4940",
	    "stop_name":"WARWICK NECK BETWEEN BARTON & MEADOWVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456644,41.693735 ]
	    },
	    "properties": {
	    "stop_id":"4945",
	    "stop_name":"POST OPP BRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.542022,41.69644 ]
	    },
	    "properties": {
	    "stop_id":"4955",
	    "stop_name":"WASHINGTON FS EDWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52164,41.694764 ]
	    },
	    "properties": {
	    "stop_id":"4960",
	    "stop_name":"MAIN AT ROCHS PRODUCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.533665,41.695503 ]
	    },
	    "properties": {
	    "stop_id":"4965",
	    "stop_name":"WASHINGTON OPP READ"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279547,41.695457 ]
	    },
	    "properties": {
	    "stop_id":"4970",
	    "stop_name":"HOPE OPP 1185 HOPE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427557,41.695325 ]
	    },
	    "properties": {
	    "stop_id":"4975",
	    "stop_name":"BUTTONWOODS AT 417 BUTTONWOODS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398637,41.695417 ]
	    },
	    "properties": {
	    "stop_id":"4980",
	    "stop_name":"OAKLAND BEACH OPP ORMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458744,41.696122 ]
	    },
	    "properties": {
	    "stop_id":"4990",
	    "stop_name":"POST AT 3414 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.263805,41.694723 ]
	    },
	    "properties": {
	    "stop_id":"5000",
	    "stop_name":"METACOM AT 591 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.263486,41.694162 ]
	    },
	    "properties": {
	    "stop_id":"5005",
	    "stop_name":"METACOM NS GOODING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.547673,41.696006 ]
	    },
	    "properties": {
	    "stop_id":"5015",
	    "stop_name":"WASHINGTON NS LAUREL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.547689,41.696105 ]
	    },
	    "properties": {
	    "stop_id":"5020",
	    "stop_name":"WASHINGTON OPP LAUREL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4281,41.696307 ]
	    },
	    "properties": {
	    "stop_id":"5025",
	    "stop_name":"BUTTONWOODS FS LONG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.546976,41.696796 ]
	    },
	    "properties": {
	    "stop_id":"5035",
	    "stop_name":"WASHINGTON OPP ANTHONY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.531988,41.696373 ]
	    },
	    "properties": {
	    "stop_id":"5040",
	    "stop_name":"WASHINGTON OPP ANDREWS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522202,41.697854 ]
	    },
	    "properties": {
	    "stop_id":"5045",
	    "stop_name":"MAIN AT 1445 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.543219,41.697092 ]
	    },
	    "properties": {
	    "stop_id":"5055",
	    "stop_name":"WASHINGTON OPP HAZARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.543988,41.697381 ]
	    },
	    "properties": {
	    "stop_id":"5060",
	    "stop_name":"WASHINGTON FS FAIRVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279678,41.697287 ]
	    },
	    "properties": {
	    "stop_id":"5065",
	    "stop_name":"HOPE NS GIBSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279503,41.697283 ]
	    },
	    "properties": {
	    "stop_id":"5070",
	    "stop_name":"HOPE OPP GIBSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379252,41.696548 ]
	    },
	    "properties": {
	    "stop_id":"5075",
	    "stop_name":"WARWICK NECK NS CROSSROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428494,41.697346 ]
	    },
	    "properties": {
	    "stop_id":"5080",
	    "stop_name":"BUTTONWOODS NS KEELEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473905,41.697456 ]
	    },
	    "properties": {
	    "stop_id":"5085",
	    "stop_name":"RT 117 PARK & RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.534341,41.695601 ]
	    },
	    "properties": {
	    "stop_id":"5090",
	    "stop_name":"WASHINGTON OPP 117 WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42881,41.697632 ]
	    },
	    "properties": {
	    "stop_id":"5095",
	    "stop_name":"BUTTONWOODS OPP KEELEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379623,41.697909 ]
	    },
	    "properties": {
	    "stop_id":"5105",
	    "stop_name":"WARWICK NECK FS STUDLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522307,41.698841 ]
	    },
	    "properties": {
	    "stop_id":"5110",
	    "stop_name":"MAIN AT 1425 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46491,41.698509 ]
	    },
	    "properties": {
	    "stop_id":"5115",
	    "stop_name":"TOLLGATE AT 40 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37976,41.698329 ]
	    },
	    "properties": {
	    "stop_id":"5120",
	    "stop_name":"WARWICK NECK FS STUDLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459684,41.698098 ]
	    },
	    "properties": {
	    "stop_id":"5130",
	    "stop_name":"POST NS CENTREVILLE (APPONAUG 4 CORNERS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459964,41.698342 ]
	    },
	    "properties": {
	    "stop_id":"5140",
	    "stop_name":"POST FS CENTREVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398677,41.698303 ]
	    },
	    "properties": {
	    "stop_id":"5145",
	    "stop_name":"OAKLAND BEACH OPP LIMESTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522187,41.698326 ]
	    },
	    "properties": {
	    "stop_id":"5155",
	    "stop_name":"MAIN NS EPWORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462507,41.698347 ]
	    },
	    "properties": {
	    "stop_id":"5160",
	    "stop_name":"CENTERVILLE AT BURGER KING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279608,41.699134 ]
	    },
	    "properties": {
	    "stop_id":"5165",
	    "stop_name":"HOPE OPP JEFFERSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458542,41.698861 ]
	    },
	    "properties": {
	    "stop_id":"5170",
	    "stop_name":"POST OPP WARWICK CITY HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429546,41.698982 ]
	    },
	    "properties": {
	    "stop_id":"5175",
	    "stop_name":"BUTTONWOODS FS NOYLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449838,41.699183 ]
	    },
	    "properties": {
	    "stop_id":"5180",
	    "stop_name":"WEST SHORE OPP VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449497,41.699374 ]
	    },
	    "properties": {
	    "stop_id":"5185",
	    "stop_name":"WEST SHORE NS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.27977,41.699005 ]
	    },
	    "properties": {
	    "stop_id":"5200",
	    "stop_name":"HOPE NS JEFFERSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467716,41.700128 ]
	    },
	    "properties": {
	    "stop_id":"5205",
	    "stop_name":"TOLLGATE OPP EMILY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455888,41.699238 ]
	    },
	    "properties": {
	    "stop_id":"5210",
	    "stop_name":"POST AT 3210 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.264753,41.69946 ]
	    },
	    "properties": {
	    "stop_id":"5220",
	    "stop_name":"METACOM OPP KICKEMUIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.264613,41.699537 ]
	    },
	    "properties": {
	    "stop_id":"5225",
	    "stop_name":"METACOM FS KICKEMUIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399098,41.699761 ]
	    },
	    "properties": {
	    "stop_id":"5230",
	    "stop_name":"OAKLAND BEACH NS GORDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44742,41.699664 ]
	    },
	    "properties": {
	    "stop_id":"5235",
	    "stop_name":"WEST SHORE FS GEORGE ARDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444769,41.699973 ]
	    },
	    "properties": {
	    "stop_id":"5245",
	    "stop_name":"WEST SHORE OPP GREELEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467062,41.699988 ]
	    },
	    "properties": {
	    "stop_id":"5250",
	    "stop_name":"TOLLGATE NS EMILY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522642,41.70002 ]
	    },
	    "properties": {
	    "stop_id":"5255",
	    "stop_name":"MAIN AT 1387 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445133,41.700034 ]
	    },
	    "properties": {
	    "stop_id":"5260",
	    "stop_name":"WEST SHORE NS TOURTELOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443073,41.700242 ]
	    },
	    "properties": {
	    "stop_id":"5270",
	    "stop_name":"WEST SHORE AT 3388 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398897,41.700132 ]
	    },
	    "properties": {
	    "stop_id":"5275",
	    "stop_name":"OAKLAND BEACH NS INDIANA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529316,41.699953 ]
	    },
	    "properties": {
	    "stop_id":"5280",
	    "stop_name":"WASHINGTON NS EAST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376072,41.70114 ]
	    },
	    "properties": {
	    "stop_id":"5285",
	    "stop_name":"SAMUEL GORTON NS PALMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4434,41.700329 ]
	    },
	    "properties": {
	    "stop_id":"5290",
	    "stop_name":"WEST SHORE AT 3395 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378615,41.700527 ]
	    },
	    "properties": {
	    "stop_id":"5295",
	    "stop_name":"SAMUEL GORTON AT 407 SAMUEL GORTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528729,41.700377 ]
	    },
	    "properties": {
	    "stop_id":"5300",
	    "stop_name":"WASHINGTON NS BAKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440683,41.700625 ]
	    },
	    "properties": {
	    "stop_id":"5305",
	    "stop_name":"WEST SHORE OPP NORMANDY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440927,41.700688 ]
	    },
	    "properties": {
	    "stop_id":"5310",
	    "stop_name":"WEST SHORE NS GROVELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438047,41.701146 ]
	    },
	    "properties": {
	    "stop_id":"5320",
	    "stop_name":"WEST SHORE FS WESLEYAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47049,41.701102 ]
	    },
	    "properties": {
	    "stop_id":"5325",
	    "stop_name":"TOLLGATE AT 215 TOLLGATE RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471762,41.701448 ]
	    },
	    "properties": {
	    "stop_id":"5330",
	    "stop_name":"TOLLGATE AT 250 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374482,41.703579 ]
	    },
	    "properties": {
	    "stop_id":"5340",
	    "stop_name":"LONGMEADOW NS ELMDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376478,41.701133 ]
	    },
	    "properties": {
	    "stop_id":"5345",
	    "stop_name":"SAMUEL GORTON AT 375 SAMUEL GORTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430173,41.701012 ]
	    },
	    "properties": {
	    "stop_id":"5350",
	    "stop_name":"BUTTONWOODS NS WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435132,41.701573 ]
	    },
	    "properties": {
	    "stop_id":"5355",
	    "stop_name":"WEST SHORE NS BARBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438382,41.700969 ]
	    },
	    "properties": {
	    "stop_id":"5360",
	    "stop_name":"WEST SHORE AT 3238 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398886,41.702799 ]
	    },
	    "properties": {
	    "stop_id":"5370",
	    "stop_name":"OAKLAND BEACH NS VICTORY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.279912,41.70153 ]
	    },
	    "properties": {
	    "stop_id":"5380",
	    "stop_name":"HOPE FS COLONIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435868,41.701374 ]
	    },
	    "properties": {
	    "stop_id":"5385",
	    "stop_name":"WEST SHORE OPP 3161 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454479,41.701861 ]
	    },
	    "properties": {
	    "stop_id":"5395",
	    "stop_name":"POST FS KENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.27979,41.701969 ]
	    },
	    "properties": {
	    "stop_id":"5415",
	    "stop_name":"HOPE OPP COLONIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432911,41.701937 ]
	    },
	    "properties": {
	    "stop_id":"5420",
	    "stop_name":"WEST SHORE OPP WEST SHORE TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43268,41.701892 ]
	    },
	    "properties": {
	    "stop_id":"5425",
	    "stop_name":"WEST SHORE AT WEST SHORE TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429374,41.702422 ]
	    },
	    "properties": {
	    "stop_id":"5426",
	    "stop_name":"WEST SHORE NS MCARTHER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265092,41.701483 ]
	    },
	    "properties": {
	    "stop_id":"5430",
	    "stop_name":"METACOM AT 663 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265283,41.701873 ]
	    },
	    "properties": {
	    "stop_id":"5445",
	    "stop_name":"METACOM AT METACOM CONDOMINIUMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430931,41.70226 ]
	    },
	    "properties": {
	    "stop_id":"5450",
	    "stop_name":"WEST SHORE FS CITY PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522586,41.700112 ]
	    },
	    "properties": {
	    "stop_id":"5485",
	    "stop_name":"MAIN OPP 1383 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428779,41.702633 ]
	    },
	    "properties": {
	    "stop_id":"5495",
	    "stop_name":"WEST SHORE AT BANK OF RI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398785,41.702611 ]
	    },
	    "properties": {
	    "stop_id":"5500",
	    "stop_name":"OAKLAND BEACH OPP VICTORY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4747,41.702768 ]
	    },
	    "properties": {
	    "stop_id":"5505",
	    "stop_name":"TOLLGATE FS CRAIG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427156,41.702789 ]
	    },
	    "properties": {
	    "stop_id":"5510",
	    "stop_name":"WEST SHORE FS MYSTIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454346,41.703473 ]
	    },
	    "properties": {
	    "stop_id":"5525",
	    "stop_name":"POST OPP WINSLOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427365,41.702867 ]
	    },
	    "properties": {
	    "stop_id":"5530",
	    "stop_name":"WEST SHORE FS MODENA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.525835,41.703036 ]
	    },
	    "properties": {
	    "stop_id":"5540",
	    "stop_name":"WASHINGTON NS CRAWFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425852,41.703012 ]
	    },
	    "properties": {
	    "stop_id":"5545",
	    "stop_name":"WEST SHORE FS KERRILYN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42484,41.70325 ]
	    },
	    "properties": {
	    "stop_id":"5570",
	    "stop_name":"WEST SHORE FS WHITE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423023,41.703449 ]
	    },
	    "properties": {
	    "stop_id":"5580",
	    "stop_name":"WEST SHORE NS SUNNY COVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45416,41.703425 ]
	    },
	    "properties": {
	    "stop_id":"5585",
	    "stop_name":"POST NS WINSLOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42154,41.703761 ]
	    },
	    "properties": {
	    "stop_id":"5595",
	    "stop_name":"WEST SHORE FS MOCASSIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475256,41.70312 ]
	    },
	    "properties": {
	    "stop_id":"5610",
	    "stop_name":"TOLLGATE AT 330 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453491,41.704925 ]
	    },
	    "properties": {
	    "stop_id":"5615",
	    "stop_name":"POST OPP CREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280157,41.703748 ]
	    },
	    "properties": {
	    "stop_id":"5620",
	    "stop_name":"HOPE NS SULLIVAN LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280007,41.704476 ]
	    },
	    "properties": {
	    "stop_id":"5635",
	    "stop_name":"HOPE FS TUPELO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477304,41.704075 ]
	    },
	    "properties": {
	    "stop_id":"5645",
	    "stop_name":"TOLLGATE AT 430 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.524196,41.704546 ]
	    },
	    "properties": {
	    "stop_id":"5655",
	    "stop_name":"MAIN NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280307,41.706327 ]
	    },
	    "properties": {
	    "stop_id":"5660",
	    "stop_name":"HOPE NS SOUTH LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419202,41.704704 ]
	    },
	    "properties": {
	    "stop_id":"5670",
	    "stop_name":"WEST SHORE AT NEWPORT CREAMERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265841,41.705309 ]
	    },
	    "properties": {
	    "stop_id":"5680",
	    "stop_name":"METACOM NS TUPELO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418987,41.705048 ]
	    },
	    "properties": {
	    "stop_id":"5690",
	    "stop_name":"WEST SHORE AT DUNKIN DONUTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398308,41.705329 ]
	    },
	    "properties": {
	    "stop_id":"5695",
	    "stop_name":"OAKLAND BEACH AT BISHOP HENDRICKEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398463,41.705567 ]
	    },
	    "properties": {
	    "stop_id":"5710",
	    "stop_name":"OAKLAND BEACH NS STANFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479111,41.705063 ]
	    },
	    "properties": {
	    "stop_id":"5715",
	    "stop_name":"TOLLGATE OPP KENT HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.265946,41.705007 ]
	    },
	    "properties": {
	    "stop_id":"5720",
	    "stop_name":"METACOM FS TUPELO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478663,41.704925 ]
	    },
	    "properties": {
	    "stop_id":"5740",
	    "stop_name":"TOLLGATE AT 470 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523498,41.705896 ]
	    },
	    "properties": {
	    "stop_id":"5750",
	    "stop_name":"MAIN OPP 1200 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418246,41.70628 ]
	    },
	    "properties": {
	    "stop_id":"5760",
	    "stop_name":"STRAWBERRY FIELD FS ELMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417437,41.706591 ]
	    },
	    "properties": {
	    "stop_id":"5765",
	    "stop_name":"ALFRED AT WHARF SEAFOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452108,41.706969 ]
	    },
	    "properties": {
	    "stop_id":"5770",
	    "stop_name":"POST NS MYRTLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415947,41.706581 ]
	    },
	    "properties": {
	    "stop_id":"5780",
	    "stop_name":"SANDY LANE NS CLORANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481785,41.706365 ]
	    },
	    "properties": {
	    "stop_id":"5785",
	    "stop_name":"TOLLGATE FS HILARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280164,41.707064 ]
	    },
	    "properties": {
	    "stop_id":"5800",
	    "stop_name":"HOPE FS ECHO FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414096,41.70729 ]
	    },
	    "properties": {
	    "stop_id":"5805",
	    "stop_name":"SANDY LANE OPP TREMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48185,41.706483 ]
	    },
	    "properties": {
	    "stop_id":"5810",
	    "stop_name":"TOLLGATE OPP HILARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483268,41.707184 ]
	    },
	    "properties": {
	    "stop_id":"5820",
	    "stop_name":"TOLLGATE NS COMMONWEALTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414412,41.707076 ]
	    },
	    "properties": {
	    "stop_id":"5825",
	    "stop_name":"SANDY LANE NS TREMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419417,41.707386 ]
	    },
	    "properties": {
	    "stop_id":"5830",
	    "stop_name":"STRAWBERRY FIELD OPP TURNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419311,41.707206 ]
	    },
	    "properties": {
	    "stop_id":"5835",
	    "stop_name":"STRAWBERRY FIELD NS LAKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451533,41.707471 ]
	    },
	    "properties": {
	    "stop_id":"5840",
	    "stop_name":"POST OPP VAUGHAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522455,41.70783 ]
	    },
	    "properties": {
	    "stop_id":"5845",
	    "stop_name":"MAIN FS PROVIDENCE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522589,41.707944 ]
	    },
	    "properties": {
	    "stop_id":"5865",
	    "stop_name":"MAIN AT 1125 MAIN ST (CVS PHARMACY)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412647,41.707827 ]
	    },
	    "properties": {
	    "stop_id":"5870",
	    "stop_name":"SANDY LANE AT ARMY RESERVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412629,41.707764 ]
	    },
	    "properties": {
	    "stop_id":"5875",
	    "stop_name":"SANDY LANE OPP ARMY RESERVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.484467,41.708401 ]
	    },
	    "properties": {
	    "stop_id":"5880",
	    "stop_name":"COMMONWEALTH FS TOLLGATE RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.266637,41.708382 ]
	    },
	    "properties": {
	    "stop_id":"5885",
	    "stop_name":"METACOM NS SAN FRANCISCO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.266459,41.708179 ]
	    },
	    "properties": {
	    "stop_id":"5890",
	    "stop_name":"METACOM NS SAN FRANCISCO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280292,41.709006 ]
	    },
	    "properties": {
	    "stop_id":"5895",
	    "stop_name":"HOPE NS ELM FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450704,41.708961 ]
	    },
	    "properties": {
	    "stop_id":"5915",
	    "stop_name":"POST NS POTTERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.484494,41.708271 ]
	    },
	    "properties": {
	    "stop_id":"5930",
	    "stop_name":"COMMONWEALTH AT 400 COMMONWEALTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406928,41.709785 ]
	    },
	    "properties": {
	    "stop_id":"5935",
	    "stop_name":"SANDY LANE NS TRENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409619,41.708941 ]
	    },
	    "properties": {
	    "stop_id":"5940",
	    "stop_name":"SANDY LANE OPP TRENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422599,41.709197 ]
	    },
	    "properties": {
	    "stop_id":"5950",
	    "stop_name":"STRAWBERRY FIELD NS HANOVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407386,41.709698 ]
	    },
	    "properties": {
	    "stop_id":"5975",
	    "stop_name":"SANDY LANE FS CEDAR SWAMP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398393,41.710077 ]
	    },
	    "properties": {
	    "stop_id":"5980",
	    "stop_name":"WARWICK OPP STOP&SHOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449525,41.710686 ]
	    },
	    "properties": {
	    "stop_id":"5985",
	    "stop_name":"POST FS CHAPMANS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523058,41.710708 ]
	    },
	    "properties": {
	    "stop_id":"5990",
	    "stop_name":"MAIN NS POTTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398002,41.707645 ]
	    },
	    "properties": {
	    "stop_id":"5995",
	    "stop_name":"WARWICK OPP WAGUAGONET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522977,41.710563 ]
	    },
	    "properties": {
	    "stop_id":"6000",
	    "stop_name":"MAIN OPP YOUNGS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.492384,41.710109 ]
	    },
	    "properties": {
	    "stop_id":"6005",
	    "stop_name":"TOLLGATE OPP SENIOR CITY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440749,41.710375 ]
	    },
	    "properties": {
	    "stop_id":"6010",
	    "stop_name":"MAIN AVE NS GROVELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440121,41.710357 ]
	    },
	    "properties": {
	    "stop_id":"6015",
	    "stop_name":"MAIN AVE OPP GROVELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449579,41.710285 ]
	    },
	    "properties": {
	    "stop_id":"6020",
	    "stop_name":"POST OPP HILLARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405275,41.710364 ]
	    },
	    "properties": {
	    "stop_id":"6025",
	    "stop_name":"SANDY LANE OPP CRANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441963,41.710531 ]
	    },
	    "properties": {
	    "stop_id":"6030",
	    "stop_name":"MAIN AVE NS GERTRUDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405581,41.710384 ]
	    },
	    "properties": {
	    "stop_id":"6035",
	    "stop_name":"SANDY LANE FS CRANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425012,41.710519 ]
	    },
	    "properties": {
	    "stop_id":"6040",
	    "stop_name":"STRAWBERRY FIELD NS ENDICOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280451,41.709518 ]
	    },
	    "properties": {
	    "stop_id":"6045",
	    "stop_name":"HOPE NS MAPLE SHADE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.28039,41.710798 ]
	    },
	    "properties": {
	    "stop_id":"6050",
	    "stop_name":"HOPE FS ELMWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441921,41.710651 ]
	    },
	    "properties": {
	    "stop_id":"6055",
	    "stop_name":"MAIN AVE NS EARL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402858,41.711325 ]
	    },
	    "properties": {
	    "stop_id":"6075",
	    "stop_name":"SANDY LANE NS SOCIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523363,41.711997 ]
	    },
	    "properties": {
	    "stop_id":"6080",
	    "stop_name":"MAIN NS WALKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444632,41.711023 ]
	    },
	    "properties": {
	    "stop_id":"6095",
	    "stop_name":"MAIN AVE NS MORSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444294,41.710862 ]
	    },
	    "properties": {
	    "stop_id":"6100",
	    "stop_name":"MAIN AVE NS GORHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403488,41.710975 ]
	    },
	    "properties": {
	    "stop_id":"6105",
	    "stop_name":"SANDY LANE OPP SOCIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49498,41.710649 ]
	    },
	    "properties": {
	    "stop_id":"6110",
	    "stop_name":"TOLLGATE AT 997 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399998,41.712348 ]
	    },
	    "properties": {
	    "stop_id":"6125",
	    "stop_name":"SANDY LANE FS CALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.495083,41.710697 ]
	    },
	    "properties": {
	    "stop_id":"6140",
	    "stop_name":"TOLLGATE AT 979 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.497923,41.711141 ]
	    },
	    "properties": {
	    "stop_id":"6145",
	    "stop_name":"TOLLGATE AT 1060  TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.497845,41.711288 ]
	    },
	    "properties": {
	    "stop_id":"6150",
	    "stop_name":"TOLLGATE OPP 1060 TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502384,41.711405 ]
	    },
	    "properties": {
	    "stop_id":"6160",
	    "stop_name":"PROVIDENCE FS NEW LONDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427162,41.711727 ]
	    },
	    "properties": {
	    "stop_id":"6165",
	    "stop_name":"STRAWBERRY FIELD OPP INMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.503065,41.711692 ]
	    },
	    "properties": {
	    "stop_id":"6170",
	    "stop_name":"PROVIDENCE AT 329 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500104,41.711854 ]
	    },
	    "properties": {
	    "stop_id":"6175",
	    "stop_name":"PROVIDENCE OPP NEWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280523,41.710666 ]
	    },
	    "properties": {
	    "stop_id":"6180",
	    "stop_name":"HOPE OPP ELMWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500341,41.711842 ]
	    },
	    "properties": {
	    "stop_id":"6185",
	    "stop_name":"PROVIDENCE OPP TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504414,41.712131 ]
	    },
	    "properties": {
	    "stop_id":"6195",
	    "stop_name":"PROVIDENCE AT 320 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52376,41.713415 ]
	    },
	    "properties": {
	    "stop_id":"6200",
	    "stop_name":"MAIN FS BRAYTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448791,41.712329 ]
	    },
	    "properties": {
	    "stop_id":"6205",
	    "stop_name":"JEFFERSON BLVD NS GILLMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39906,41.711716 ]
	    },
	    "properties": {
	    "stop_id":"6210",
	    "stop_name":"WARWICK FS SANDY LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44871,41.7121 ]
	    },
	    "properties": {
	    "stop_id":"6220",
	    "stop_name":"JEFFERSON BLVD OPP GILLMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398828,41.712104 ]
	    },
	    "properties": {
	    "stop_id":"6225",
	    "stop_name":"WARWICK NS SANDY LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.267532,41.712441 ]
	    },
	    "properties": {
	    "stop_id":"6235",
	    "stop_name":"METACOM FS JAMESON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.267313,41.71244 ]
	    },
	    "properties": {
	    "stop_id":"6245",
	    "stop_name":"METACOM AT 810 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450192,41.712533 ]
	    },
	    "properties": {
	    "stop_id":"6255",
	    "stop_name":"GREENWOOD COMMUNITY CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507041,41.713198 ]
	    },
	    "properties": {
	    "stop_id":"6275",
	    "stop_name":"PROVIDENCE AT 268 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504433,41.712057 ]
	    },
	    "properties": {
	    "stop_id":"6280",
	    "stop_name":"PROVIDENCE OPP 322 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429346,41.712949 ]
	    },
	    "properties": {
	    "stop_id":"6285",
	    "stop_name":"STRAWBERRY FIELD AT 333 STRAWBERRY FIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.484852,41.712263 ]
	    },
	    "properties": {
	    "stop_id":"6295",
	    "stop_name":"COMMONWEALTH - TRUDEAU CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429532,41.712933 ]
	    },
	    "properties": {
	    "stop_id":"6300",
	    "stop_name":"STRAWBERRY FIELD FS BURGESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523863,41.713604 ]
	    },
	    "properties": {
	    "stop_id":"6305",
	    "stop_name":"MAIN OPP BRAYTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380329,41.713219 ]
	    },
	    "properties": {
	    "stop_id":"6310",
	    "stop_name":"CHURCH NS WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379755,41.713251 ]
	    },
	    "properties": {
	    "stop_id":"6315",
	    "stop_name":"WEST SHORE NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380524,41.713481 ]
	    },
	    "properties": {
	    "stop_id":"6320",
	    "stop_name":"CHURCH FS ALPINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481354,41.713418 ]
	    },
	    "properties": {
	    "stop_id":"6335",
	    "stop_name":"CCRI (WARWICK CAMPUS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43112,41.713774 ]
	    },
	    "properties": {
	    "stop_id":"6340",
	    "stop_name":"STRAWBERRY FIELD NS CARNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280653,41.713608 ]
	    },
	    "properties": {
	    "stop_id":"6345",
	    "stop_name":"MAIN NS FATIMA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448385,41.713408 ]
	    },
	    "properties": {
	    "stop_id":"6360",
	    "stop_name":"JEFFERSON BLVD FS ECHO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.50966,41.713913 ]
	    },
	    "properties": {
	    "stop_id":"6365",
	    "stop_name":"PROVIDENCE AT 230 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448069,41.71384 ]
	    },
	    "properties": {
	    "stop_id":"6370",
	    "stop_name":"JEFFERSON BLVD OPP ECHO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.508292,41.713615 ]
	    },
	    "properties": {
	    "stop_id":"6375",
	    "stop_name":"PROVIDENCE FS TANGLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509907,41.71386 ]
	    },
	    "properties": {
	    "stop_id":"6380",
	    "stop_name":"PROVIDENCE AT 229 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517833,41.713795 ]
	    },
	    "properties": {
	    "stop_id":"6385",
	    "stop_name":"E MAIN FS ELM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.496245,41.71419 ]
	    },
	    "properties": {
	    "stop_id":"6390",
	    "stop_name":"PROVIDENCE AT 516 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4462,41.713526 ]
	    },
	    "properties": {
	    "stop_id":"6405",
	    "stop_name":"POST NS GREENE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511547,41.714047 ]
	    },
	    "properties": {
	    "stop_id":"6410",
	    "stop_name":"PROVIDENCE OPP 199 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280747,41.713405 ]
	    },
	    "properties": {
	    "stop_id":"6415",
	    "stop_name":"MAIN FS BAGY WRINKLE COVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.496285,41.713998 ]
	    },
	    "properties": {
	    "stop_id":"6420",
	    "stop_name":"PROVIDENCE AT 519 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51165,41.713972 ]
	    },
	    "properties": {
	    "stop_id":"6425",
	    "stop_name":"PROVIDENCE OPP VFW POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.519124,41.71389 ]
	    },
	    "properties": {
	    "stop_id":"6430",
	    "stop_name":"E MAIN OPP CROSS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.515226,41.714564 ]
	    },
	    "properties": {
	    "stop_id":"6435",
	    "stop_name":"PROVIDENCE NS HAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.515137,41.714488 ]
	    },
	    "properties": {
	    "stop_id":"6440",
	    "stop_name":"PROVIDENCE OPP 186 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517663,41.713899 ]
	    },
	    "properties": {
	    "stop_id":"6460",
	    "stop_name":"PROVIDENCE FS JUNIOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520529,41.713903 ]
	    },
	    "properties": {
	    "stop_id":"6465",
	    "stop_name":"E MAIN NS BRIDGE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52144,41.714355 ]
	    },
	    "properties": {
	    "stop_id":"6485",
	    "stop_name":"E MAIN AT BRAYTON FOUNDRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377552,41.714596 ]
	    },
	    "properties": {
	    "stop_id":"6495",
	    "stop_name":"WEST SHORE FS DAMON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.267979,41.714704 ]
	    },
	    "properties": {
	    "stop_id":"6505",
	    "stop_name":"METACOM NS RIDGEWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.267816,41.714677 ]
	    },
	    "properties": {
	    "stop_id":"6510",
	    "stop_name":"METACOM OPP RIDGEWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377327,41.714578 ]
	    },
	    "properties": {
	    "stop_id":"6520",
	    "stop_name":"WEST SHORE FS TIDEWATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383251,41.715147 ]
	    },
	    "properties": {
	    "stop_id":"6525",
	    "stop_name":"CHURCH NS HOWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445874,41.7149 ]
	    },
	    "properties": {
	    "stop_id":"6540",
	    "stop_name":"POST OPP BAYWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488668,41.713221 ]
	    },
	    "properties": {
	    "stop_id":"6545",
	    "stop_name":"BALD HILL AT 920 BALD HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523159,41.715206 ]
	    },
	    "properties": {
	    "stop_id":"6565",
	    "stop_name":"E MAIN NS MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383616,41.715493 ]
	    },
	    "properties": {
	    "stop_id":"6575",
	    "stop_name":"CHURCH OPP NASH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523747,41.715661 ]
	    },
	    "properties": {
	    "stop_id":"6580",
	    "stop_name":"MAIN NS MAPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.495049,41.71569 ]
	    },
	    "properties": {
	    "stop_id":"6585",
	    "stop_name":"PROVIDENCE NS BURNS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375908,41.7156 ]
	    },
	    "properties": {
	    "stop_id":"6610",
	    "stop_name":"WEST SHORE OPP ECONOMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489125,41.712906 ]
	    },
	    "properties": {
	    "stop_id":"6620",
	    "stop_name":"BALD HILL OPP 1000 BALD HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494787,41.715813 ]
	    },
	    "properties": {
	    "stop_id":"6630",
	    "stop_name":"PROVIDENCE AT 567 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.38513,41.716537 ]
	    },
	    "properties": {
	    "stop_id":"6635",
	    "stop_name":"CHURCH OPP AQUARIUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523508,41.71606 ]
	    },
	    "properties": {
	    "stop_id":"6640",
	    "stop_name":"MAIN AT 948 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488179,41.714426 ]
	    },
	    "properties": {
	    "stop_id":"6645",
	    "stop_name":"BALD HILL AT 886 BALD HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.384962,41.716291 ]
	    },
	    "properties": {
	    "stop_id":"6650",
	    "stop_name":"CHURCH NS BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.268473,41.717006 ]
	    },
	    "properties": {
	    "stop_id":"6660",
	    "stop_name":"METACOM OPP LAUREL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.268238,41.716756 ]
	    },
	    "properties": {
	    "stop_id":"6665",
	    "stop_name":"METACOM NS LAUREL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281013,41.71646 ]
	    },
	    "properties": {
	    "stop_id":"6670",
	    "stop_name":"MAIN FS LOCUST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488542,41.714127 ]
	    },
	    "properties": {
	    "stop_id":"6675",
	    "stop_name":"BALD HILL AT DUNKIN DONUTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444802,41.716286 ]
	    },
	    "properties": {
	    "stop_id":"6680",
	    "stop_name":"POST AT 2426 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280784,41.715818 ]
	    },
	    "properties": {
	    "stop_id":"6690",
	    "stop_name":"MAIN NS SEYMOUR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40082,41.717156 ]
	    },
	    "properties": {
	    "stop_id":"6695",
	    "stop_name":"WARWICK FS LINDY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493542,41.717198 ]
	    },
	    "properties": {
	    "stop_id":"6700",
	    "stop_name":"PROVIDENCE AT O'DONNELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375613,41.716768 ]
	    },
	    "properties": {
	    "stop_id":"6705",
	    "stop_name":"WEST SHORE NS BUSH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400312,41.71689 ]
	    },
	    "properties": {
	    "stop_id":"6710",
	    "stop_name":"WARWICK OPP AMSTERDAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493878,41.717084 ]
	    },
	    "properties": {
	    "stop_id":"6715",
	    "stop_name":"PROVIDENCE NS GAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486945,41.716532 ]
	    },
	    "properties": {
	    "stop_id":"6720",
	    "stop_name":"BALD HILL AT 790 BALD HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523874,41.717862 ]
	    },
	    "properties": {
	    "stop_id":"6725",
	    "stop_name":"MAIN OPP 914 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487455,41.716375 ]
	    },
	    "properties": {
	    "stop_id":"6730",
	    "stop_name":"BALD HILL AT 797 BALD HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523731,41.717726 ]
	    },
	    "properties": {
	    "stop_id":"6735",
	    "stop_name":"MAIN FS CLYDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375812,41.717375 ]
	    },
	    "properties": {
	    "stop_id":"6740",
	    "stop_name":"WEST SHORE FS MORRIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443416,41.718531 ]
	    },
	    "properties": {
	    "stop_id":"6745",
	    "stop_name":"POST AT 2332 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447132,41.717416 ]
	    },
	    "properties": {
	    "stop_id":"6750",
	    "stop_name":"JEFFERSON BLVD OPP THRIFT STORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447028,41.716901 ]
	    },
	    "properties": {
	    "stop_id":"6755",
	    "stop_name":"JEFFERSON BLVD AT BAKERY OUTLET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386385,41.717228 ]
	    },
	    "properties": {
	    "stop_id":"6760",
	    "stop_name":"CHURCH AT 234 CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443808,41.718221 ]
	    },
	    "properties": {
	    "stop_id":"6765",
	    "stop_name":"POST NS ELAINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402154,41.718554 ]
	    },
	    "properties": {
	    "stop_id":"6770",
	    "stop_name":"WARWICK NS GREYLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280932,41.718257 ]
	    },
	    "properties": {
	    "stop_id":"6775",
	    "stop_name":"MAIN FS ALMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281076,41.717994 ]
	    },
	    "properties": {
	    "stop_id":"6780",
	    "stop_name":"MAIN NS BRADFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401908,41.718528 ]
	    },
	    "properties": {
	    "stop_id":"6785",
	    "stop_name":"WARWICK OPP GREYLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463652,41.718284 ]
	    },
	    "properties": {
	    "stop_id":"6790",
	    "stop_name":"GREENWICH AVE NS ROME"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.268787,41.718418 ]
	    },
	    "properties": {
	    "stop_id":"6795",
	    "stop_name":"METACOM AT 611 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388532,41.718554 ]
	    },
	    "properties": {
	    "stop_id":"6800",
	    "stop_name":"CHURCH NS NEW BRITAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.268632,41.71855 ]
	    },
	    "properties": {
	    "stop_id":"6805",
	    "stop_name":"METACOM AT 622 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.524759,41.719088 ]
	    },
	    "properties": {
	    "stop_id":"6810",
	    "stop_name":"MAIN AT 900 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376261,41.718267 ]
	    },
	    "properties": {
	    "stop_id":"6815",
	    "stop_name":"WEST SHORE AT 1026 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388016,41.718316 ]
	    },
	    "properties": {
	    "stop_id":"6820",
	    "stop_name":"CHURCH NS OVERBROOK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486082,41.718389 ]
	    },
	    "properties": {
	    "stop_id":"6830",
	    "stop_name":"BALD HILL AT 733 BALD HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376557,41.718403 ]
	    },
	    "properties": {
	    "stop_id":"6845",
	    "stop_name":"WEST SHORE OPP STOKES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.525521,41.719594 ]
	    },
	    "properties": {
	    "stop_id":"6850",
	    "stop_name":"MAIN AT 885 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48338,41.720455 ]
	    },
	    "properties": {
	    "stop_id":"6855",
	    "stop_name":"BALD HILL FS RT 113"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391359,41.719548 ]
	    },
	    "properties": {
	    "stop_id":"6860",
	    "stop_name":"CHURCH FS KENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402233,41.719627 ]
	    },
	    "properties": {
	    "stop_id":"6865",
	    "stop_name":"CHURCH FS WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40262,41.719048 ]
	    },
	    "properties": {
	    "stop_id":"6870",
	    "stop_name":"WARWICK NS BRENARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402118,41.719736 ]
	    },
	    "properties": {
	    "stop_id":"6875",
	    "stop_name":"CHURCH NS WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491642,41.719401 ]
	    },
	    "properties": {
	    "stop_id":"6880",
	    "stop_name":"PROVIDENCE NS MARKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446465,41.719553 ]
	    },
	    "properties": {
	    "stop_id":"6885",
	    "stop_name":"JEFFERSON BLVD FS WILLIAMSBURG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491897,41.719109 ]
	    },
	    "properties": {
	    "stop_id":"6890",
	    "stop_name":"PROVIDENCE AT 690 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403183,41.719898 ]
	    },
	    "properties": {
	    "stop_id":"6895",
	    "stop_name":"WARWICK AT FRIENDLYS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482554,41.7196 ]
	    },
	    "properties": {
	    "stop_id":"6900",
	    "stop_name":"RHODE ISLAND MALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281019,41.719704 ]
	    },
	    "properties": {
	    "stop_id":"6905",
	    "stop_name":"MAIN NS DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399727,41.720034 ]
	    },
	    "properties": {
	    "stop_id":"6915",
	    "stop_name":"CHURCH AT 642 CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393944,41.720272 ]
	    },
	    "properties": {
	    "stop_id":"6925",
	    "stop_name":"CHURCH OPP KILLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.526091,41.720042 ]
	    },
	    "properties": {
	    "stop_id":"6930",
	    "stop_name":"MAIN NS WAKEFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39544,41.720443 ]
	    },
	    "properties": {
	    "stop_id":"6935",
	    "stop_name":"CHURCH OPP OLD HOMESTEAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378002,41.720204 ]
	    },
	    "properties": {
	    "stop_id":"6945",
	    "stop_name":"WEST SHORE NS WINTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281122,41.718919 ]
	    },
	    "properties": {
	    "stop_id":"6950",
	    "stop_name":"MAIN OPP COOMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397144,41.720488 ]
	    },
	    "properties": {
	    "stop_id":"6955",
	    "stop_name":"CHURCH FS BUGBEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464537,41.719972 ]
	    },
	    "properties": {
	    "stop_id":"6960",
	    "stop_name":"GREENWICH AVE FS NAPLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397473,41.720526 ]
	    },
	    "properties": {
	    "stop_id":"6965",
	    "stop_name":"CHURCH OPP BUGBEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.268981,41.720395 ]
	    },
	    "properties": {
	    "stop_id":"6970",
	    "stop_name":"METACOM AT 598 METACOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.269229,41.720752 ]
	    },
	    "properties": {
	    "stop_id":"6980",
	    "stop_name":"METACOM OPP PATTERSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.527946,41.720787 ]
	    },
	    "properties": {
	    "stop_id":"6985",
	    "stop_name":"MAIN AT 800 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442125,41.720607 ]
	    },
	    "properties": {
	    "stop_id":"6995",
	    "stop_name":"POST AT 2248 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529899,41.720934 ]
	    },
	    "properties": {
	    "stop_id":"7000",
	    "stop_name":"MAIN OPP 780 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441825,41.721547 ]
	    },
	    "properties": {
	    "stop_id":"7005",
	    "stop_name":"POST OPP 2222 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378498,41.721168 ]
	    },
	    "properties": {
	    "stop_id":"7010",
	    "stop_name":"WEST SHORE FS TROY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281292,41.721494 ]
	    },
	    "properties": {
	    "stop_id":"7015",
	    "stop_name":"MAIN NS BRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404078,41.721325 ]
	    },
	    "properties": {
	    "stop_id":"7020",
	    "stop_name":"WARWICK NS YACATAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445834,41.721344 ]
	    },
	    "properties": {
	    "stop_id":"7025",
	    "stop_name":"JEFFERSON BLVD OPP 1000 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403808,41.721269 ]
	    },
	    "properties": {
	    "stop_id":"7035",
	    "stop_name":"WARWICK NS VERNON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52872,41.72135 ]
	    },
	    "properties": {
	    "stop_id":"7045",
	    "stop_name":"HIGHLAND NS PARKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.532199,41.721637 ]
	    },
	    "properties": {
	    "stop_id":"7050",
	    "stop_name":"HIGHLAND FS PLEASANT (PHENIX HOTEL)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.490985,41.721262 ]
	    },
	    "properties": {
	    "stop_id":"7055",
	    "stop_name":"PROVIDENCE NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491214,41.722621 ]
	    },
	    "properties": {
	    "stop_id":"7060",
	    "stop_name":"PROVIDENCE AT 798 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281162,41.721949 ]
	    },
	    "properties": {
	    "stop_id":"7065",
	    "stop_name":"MAIN FS VERNON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465792,41.721011 ]
	    },
	    "properties": {
	    "stop_id":"7070",
	    "stop_name":"GREENWICH AT 555 GREENWICH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.474838,41.721933 ]
	    },
	    "properties": {
	    "stop_id":"7075",
	    "stop_name":"WARWICK MALL OPP THEATRES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380289,41.722467 ]
	    },
	    "properties": {
	    "stop_id":"7095",
	    "stop_name":"WEST SHORE OPP WOODBURY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.26955,41.723149 ]
	    },
	    "properties": {
	    "stop_id":"7115",
	    "stop_name":"METACOM OPP BEE JAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468532,41.723331 ]
	    },
	    "properties": {
	    "stop_id":"7120",
	    "stop_name":"LAMBERT LIND FS SHALOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.269754,41.723326 ]
	    },
	    "properties": {
	    "stop_id":"7125",
	    "stop_name":"METACOM NS BEE JAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404694,41.723529 ]
	    },
	    "properties": {
	    "stop_id":"7135",
	    "stop_name":"WARWICK NS STANMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.382381,41.723778 ]
	    },
	    "properties": {
	    "stop_id":"7145",
	    "stop_name":"WEST SHORE AT 760 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469428,41.723667 ]
	    },
	    "properties": {
	    "stop_id":"7165",
	    "stop_name":"GREENWICH AT LUTHERAN CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439835,41.724855 ]
	    },
	    "properties": {
	    "stop_id":"7170",
	    "stop_name":"POST AT RADISSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491273,41.723743 ]
	    },
	    "properties": {
	    "stop_id":"7180",
	    "stop_name":"PROVIDENCE NS WAKEFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281416,41.723139 ]
	    },
	    "properties": {
	    "stop_id":"7195",
	    "stop_name":"MAIN FS HAILE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491402,41.724163 ]
	    },
	    "properties": {
	    "stop_id":"7200",
	    "stop_name":"PROVIDENCE FS WAKEFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404864,41.724753 ]
	    },
	    "properties": {
	    "stop_id":"7205",
	    "stop_name":"WARWICK OPP EDGEHILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386332,41.726062 ]
	    },
	    "properties": {
	    "stop_id":"7215",
	    "stop_name":"WEST SHORE AT 635 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471803,41.725103 ]
	    },
	    "properties": {
	    "stop_id":"7225",
	    "stop_name":"GREENWICH OPP GREENWICH APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471628,41.725114 ]
	    },
	    "properties": {
	    "stop_id":"7230",
	    "stop_name":"LAMBERT LIND NS GREENWICH VILLAGE APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444538,41.72485 ]
	    },
	    "properties": {
	    "stop_id":"7235",
	    "stop_name":"JEFFERSON BLVD NS BROWNELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.382405,41.723957 ]
	    },
	    "properties": {
	    "stop_id":"7245",
	    "stop_name":"WEST SHORE NS ALLARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405353,41.725769 ]
	    },
	    "properties": {
	    "stop_id":"7250",
	    "stop_name":"WARWICK OPP ROSEMERE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436997,41.725802 ]
	    },
	    "properties": {
	    "stop_id":"7265",
	    "stop_name":"TF GREEN AIRPORT (ARRIVALS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.269934,41.725045 ]
	    },
	    "properties": {
	    "stop_id":"7270",
	    "stop_name":"METACOM NS LIBBY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383911,41.724921 ]
	    },
	    "properties": {
	    "stop_id":"7280",
	    "stop_name":"WEST SHORE FS ROYAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281563,41.725731 ]
	    },
	    "properties": {
	    "stop_id":"7285",
	    "stop_name":"MAIN FS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280706,41.725695 ]
	    },
	    "properties": {
	    "stop_id":"7300",
	    "stop_name":"WARREN PARK N RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388244,41.727065 ]
	    },
	    "properties": {
	    "stop_id":"7305",
	    "stop_name":"WEST SHORE OPP CAMBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438901,41.726764 ]
	    },
	    "properties": {
	    "stop_id":"7315",
	    "stop_name":"POST AT SKY BRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491104,41.726101 ]
	    },
	    "properties": {
	    "stop_id":"7325",
	    "stop_name":"PROVIDENCE OPP OAKLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49125,41.726094 ]
	    },
	    "properties": {
	    "stop_id":"7330",
	    "stop_name":"PROVIDENCE OPP PONTIAC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387868,41.726996 ]
	    },
	    "properties": {
	    "stop_id":"7340",
	    "stop_name":"WEST SHORE NS CAMBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405829,41.727463 ]
	    },
	    "properties": {
	    "stop_id":"7345",
	    "stop_name":"WARWICK OPP LYNDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390676,41.728161 ]
	    },
	    "properties": {
	    "stop_id":"7350",
	    "stop_name":"WEST SHORE NS LINBROOK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475554,41.727227 ]
	    },
	    "properties": {
	    "stop_id":"7355",
	    "stop_name":"LAMBERT LIND AT MACYS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478501,41.727505 ]
	    },
	    "properties": {
	    "stop_id":"7360",
	    "stop_name":"WEST NATICK OPP FESSENDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445794,41.720883 ]
	    },
	    "properties": {
	    "stop_id":"7365",
	    "stop_name":"JEFFERSON BLVD OPP 931 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489796,41.727632 ]
	    },
	    "properties": {
	    "stop_id":"7370",
	    "stop_name":"PROVIDENCE OPP ALDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405694,41.727656 ]
	    },
	    "properties": {
	    "stop_id":"7375",
	    "stop_name":"WARWICK BETWEEN DAYTON & LYNDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480408,41.725782 ]
	    },
	    "properties": {
	    "stop_id":"7380",
	    "stop_name":"BALD HILL AT WARWICK COMMONS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443624,41.727256 ]
	    },
	    "properties": {
	    "stop_id":"7385",
	    "stop_name":"JEFFERSON BLVD AT LEVITON MFG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477831,41.727678 ]
	    },
	    "properties": {
	    "stop_id":"7390",
	    "stop_name":"WEST NATICK NS FESSENDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281861,41.727733 ]
	    },
	    "properties": {
	    "stop_id":"7395",
	    "stop_name":"MAIN NS GREENE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475982,41.727932 ]
	    },
	    "properties": {
	    "stop_id":"7410",
	    "stop_name":"LAMBERT LIND FS MESSER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476358,41.727897 ]
	    },
	    "properties": {
	    "stop_id":"7415",
	    "stop_name":"LAMBERT LIND OPP MESSER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389916,41.727957 ]
	    },
	    "properties": {
	    "stop_id":"7420",
	    "stop_name":"WEST SHORE AT 515 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443196,41.728409 ]
	    },
	    "properties": {
	    "stop_id":"7430",
	    "stop_name":"JEFFERSON BLVD FS THURBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.28223,41.728577 ]
	    },
	    "properties": {
	    "stop_id":"7435",
	    "stop_name":"MAIN NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476797,41.73007 ]
	    },
	    "properties": {
	    "stop_id":"7440",
	    "stop_name":"LAMBERT LIND AT D'ANGELO'S"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391317,41.728531 ]
	    },
	    "properties": {
	    "stop_id":"7445",
	    "stop_name":"WEST SHORE AT 456 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406021,41.729318 ]
	    },
	    "properties": {
	    "stop_id":"7450",
	    "stop_name":"WARWICK FS DIXIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.282253,41.729294 ]
	    },
	    "properties": {
	    "stop_id":"7465",
	    "stop_name":"MAIN NS JOYCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488014,41.729538 ]
	    },
	    "properties": {
	    "stop_id":"7490",
	    "stop_name":"PROVIDENCE OPP MARYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476974,41.729408 ]
	    },
	    "properties": {
	    "stop_id":"7495",
	    "stop_name":"LAMBERT LIND NS GREBLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487978,41.729721 ]
	    },
	    "properties": {
	    "stop_id":"7500",
	    "stop_name":"PROVIDENCE NS MARYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394684,41.729879 ]
	    },
	    "properties": {
	    "stop_id":"7505",
	    "stop_name":"WEST SHORE FS CIRCUIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.282474,41.73032 ]
	    },
	    "properties": {
	    "stop_id":"7520",
	    "stop_name":"MAIN NS CHILD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406395,41.730023 ]
	    },
	    "properties": {
	    "stop_id":"7525",
	    "stop_name":"WARWICK OPP GLENDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396271,41.730567 ]
	    },
	    "properties": {
	    "stop_id":"7555",
	    "stop_name":"WEST SHORE AT 314 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436705,41.731449 ]
	    },
	    "properties": {
	    "stop_id":"7560",
	    "stop_name":"POST NS AIRPORT RD (opposite Earlham Way)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442304,41.73053 ]
	    },
	    "properties": {
	    "stop_id":"7570",
	    "stop_name":"JEFFERSON BLVD OPP 639 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397531,41.730993 ]
	    },
	    "properties": {
	    "stop_id":"7580",
	    "stop_name":"WEST SHORE FS GLENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406451,41.731342 ]
	    },
	    "properties": {
	    "stop_id":"7585",
	    "stop_name":"WARWICK FS MAGNOLIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.282789,41.731164 ]
	    },
	    "properties": {
	    "stop_id":"7595",
	    "stop_name":"MAIN NS MILLER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442128,41.731359 ]
	    },
	    "properties": {
	    "stop_id":"7600",
	    "stop_name":"JEFFERSON BLVD NS QUIMBY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398145,41.731424 ]
	    },
	    "properties": {
	    "stop_id":"7605",
	    "stop_name":"WEST SHORE NS TWIN OAK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.485713,41.732218 ]
	    },
	    "properties": {
	    "stop_id":"7610",
	    "stop_name":"NEW LONDON NS SOUTHVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477057,41.731764 ]
	    },
	    "properties": {
	    "stop_id":"7620",
	    "stop_name":"OAKLAWN OPP GREENWICH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476797,41.731375 ]
	    },
	    "properties": {
	    "stop_id":"7625",
	    "stop_name":"LAMBERT LIND NS GREENWICH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406741,41.732719 ]
	    },
	    "properties": {
	    "stop_id":"7640",
	    "stop_name":"WARWICK AT 1600 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399931,41.732033 ]
	    },
	    "properties": {
	    "stop_id":"7645",
	    "stop_name":"WEST SHORE AT 199 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.282959,41.732349 ]
	    },
	    "properties": {
	    "stop_id":"7650",
	    "stop_name":"MAIN FS WOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436698,41.732384 ]
	    },
	    "properties": {
	    "stop_id":"7660",
	    "stop_name":"POST BETWEEN GUILFORD & AIRPORT RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.283046,41.732407 ]
	    },
	    "properties": {
	    "stop_id":"7665",
	    "stop_name":"MAIN NS LIBERTY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400523,41.732495 ]
	    },
	    "properties": {
	    "stop_id":"7670",
	    "stop_name":"WEST SHORE OPP DELWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441581,41.732582 ]
	    },
	    "properties": {
	    "stop_id":"7680",
	    "stop_name":"JEFFERSON BLVD OPP 555 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48571,41.731984 ]
	    },
	    "properties": {
	    "stop_id":"7685",
	    "stop_name":"NEW LONDON OPP SOUTHVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441609,41.732704 ]
	    },
	    "properties": {
	    "stop_id":"7690",
	    "stop_name":"JEFFERSON BLVD AT 555 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4848,41.732899 ]
	    },
	    "properties": {
	    "stop_id":"7695",
	    "stop_name":"NEW LONDON AT 1400 NEW LONDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477142,41.732949 ]
	    },
	    "properties": {
	    "stop_id":"7710",
	    "stop_name":"OAKLAWN FS BATEMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477327,41.732892 ]
	    },
	    "properties": {
	    "stop_id":"7715",
	    "stop_name":"OAKLAWN OPP BATEMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407737,41.735061 ]
	    },
	    "properties": {
	    "stop_id":"7725",
	    "stop_name":"WARWICK MIDBLOCK AIRPORT RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403867,41.733464 ]
	    },
	    "properties": {
	    "stop_id":"7735",
	    "stop_name":"WEST SHORE AT 109 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404553,41.733627 ]
	    },
	    "properties": {
	    "stop_id":"7745",
	    "stop_name":"WEST SHORE AT 50 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405847,41.733466 ]
	    },
	    "properties": {
	    "stop_id":"7750",
	    "stop_name":"WEST SHORE AT 27 WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483112,41.73453 ]
	    },
	    "properties": {
	    "stop_id":"7755",
	    "stop_name":"NEW LONDON OPP WARFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476916,41.73401 ]
	    },
	    "properties": {
	    "stop_id":"7760",
	    "stop_name":"MAYFIELD FS OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407268,41.734492 ]
	    },
	    "properties": {
	    "stop_id":"7765",
	    "stop_name":"WARWICK AT 1543 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476787,41.734141 ]
	    },
	    "properties": {
	    "stop_id":"7770",
	    "stop_name":"MAYFIELD NS OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48297,41.734679 ]
	    },
	    "properties": {
	    "stop_id":"7775",
	    "stop_name":"NEW LONDON NS WARFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.283849,41.73453 ]
	    },
	    "properties": {
	    "stop_id":"7785",
	    "stop_name":"MAIN OPP WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440943,41.734326 ]
	    },
	    "properties": {
	    "stop_id":"7795",
	    "stop_name":"JEFFERSON BLVD OPP CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472391,41.734379 ]
	    },
	    "properties": {
	    "stop_id":"7800",
	    "stop_name":"MAYFIELD AT WOODHAVEN APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477651,41.735007 ]
	    },
	    "properties": {
	    "stop_id":"7805",
	    "stop_name":"OAKLAWN NS OAK HILL DR (DEL'S LEMONADE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.283941,41.734464 ]
	    },
	    "properties": {
	    "stop_id":"7810",
	    "stop_name":"MAIN FS WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.470499,41.734487 ]
	    },
	    "properties": {
	    "stop_id":"7825",
	    "stop_name":"MAYFIELD OPP LAURA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468006,41.735206 ]
	    },
	    "properties": {
	    "stop_id":"7841",
	    "stop_name":"EAST OPP BLAIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468402,41.735065 ]
	    },
	    "properties": {
	    "stop_id":"7845",
	    "stop_name":"EAST OPP MAYFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435014,41.735357 ]
	    },
	    "properties": {
	    "stop_id":"7850",
	    "stop_name":"POST AT BARDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477747,41.734557 ]
	    },
	    "properties": {
	    "stop_id":"7855",
	    "stop_name":"OAKLAWN AT 1279 OAKLAWN AVE (WALGREENS PHARMACY)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440718,41.735387 ]
	    },
	    "properties": {
	    "stop_id":"7860",
	    "stop_name":"JEFFERSON BLVD AT 443 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.285126,41.735412 ]
	    },
	    "properties": {
	    "stop_id":"7865",
	    "stop_name":"MAIN FS WATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.285058,41.735433 ]
	    },
	    "properties": {
	    "stop_id":"7870",
	    "stop_name":"MAIN OPP WATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435261,41.73552 ]
	    },
	    "properties": {
	    "stop_id":"7880",
	    "stop_name":"POST OPP BARDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.301674,41.736085 ]
	    },
	    "properties": {
	    "stop_id":"7885",
	    "stop_name":"COUNTY AT 132 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30093,41.736259 ]
	    },
	    "properties": {
	    "stop_id":"7890",
	    "stop_name":"COUNTY FS JOYCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466604,41.73634 ]
	    },
	    "properties": {
	    "stop_id":"7900",
	    "stop_name":"EAST AT BICKNELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.298384,41.736436 ]
	    },
	    "properties": {
	    "stop_id":"7905",
	    "stop_name":"COUNTY OPP POLICE COVE PARK N RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.28672,41.736627 ]
	    },
	    "properties": {
	    "stop_id":"7910",
	    "stop_name":"MAIN ST AT SAMSONITE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407941,41.736385 ]
	    },
	    "properties": {
	    "stop_id":"7915",
	    "stop_name":"WARWICK NS SQUANTUM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408151,41.736677 ]
	    },
	    "properties": {
	    "stop_id":"7920",
	    "stop_name":"WARWICK FS SQUANTUM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440274,41.736482 ]
	    },
	    "properties": {
	    "stop_id":"7925",
	    "stop_name":"JEFFERSON BLVD FS SERVICE AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.303819,41.736692 ]
	    },
	    "properties": {
	    "stop_id":"7930",
	    "stop_name":"COUNTY NS BOSWORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.293358,41.737019 ]
	    },
	    "properties": {
	    "stop_id":"7945",
	    "stop_name":"COUNTY NS NEW MEADOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439999,41.73692 ]
	    },
	    "properties": {
	    "stop_id":"7950",
	    "stop_name":"JEFFERSON BLVD AT 380 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.28691,41.736848 ]
	    },
	    "properties": {
	    "stop_id":"7955",
	    "stop_name":"MAIN NS CRESCENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.293348,41.736931 ]
	    },
	    "properties": {
	    "stop_id":"7960",
	    "stop_name":"COUNTY AT 66 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465851,41.73677 ]
	    },
	    "properties": {
	    "stop_id":"7965",
	    "stop_name":"EAST AT ZENITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477866,41.736759 ]
	    },
	    "properties": {
	    "stop_id":"7980",
	    "stop_name":"OAKLAWN AT 1210 OAKLAWN AVE (HARUKI RESTAURANT)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.290969,41.737221 ]
	    },
	    "properties": {
	    "stop_id":"7985",
	    "stop_name":"COUNTY AT 15 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.290972,41.737268 ]
	    },
	    "properties": {
	    "stop_id":"7990",
	    "stop_name":"COUNTY FS SOWAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.304154,41.737508 ]
	    },
	    "properties": {
	    "stop_id":"7995",
	    "stop_name":"COUNTY OPP BARRINGTON SHOPPING CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.305868,41.738247 ]
	    },
	    "properties": {
	    "stop_id":"8010",
	    "stop_name":"COUNTY AT 230 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462593,41.739264 ]
	    },
	    "properties": {
	    "stop_id":"8020",
	    "stop_name":"EAST NS FOSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439529,41.738203 ]
	    },
	    "properties": {
	    "stop_id":"8025",
	    "stop_name":"JEFFERSON BLVD OPP BAY STATE AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.305735,41.738388 ]
	    },
	    "properties": {
	    "stop_id":"8030",
	    "stop_name":"COUNTY AT 230 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439628,41.738297 ]
	    },
	    "properties": {
	    "stop_id":"8035",
	    "stop_name":"JEFFERSON BLVD FS BAY STATE AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408084,41.73857 ]
	    },
	    "properties": {
	    "stop_id":"8040",
	    "stop_name":"WARWICK FS MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433326,41.738468 ]
	    },
	    "properties": {
	    "stop_id":"8045",
	    "stop_name":"POST NS LINCOLN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43356,41.73851 ]
	    },
	    "properties": {
	    "stop_id":"8050",
	    "stop_name":"POST FS LINCOLN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478586,41.739019 ]
	    },
	    "properties": {
	    "stop_id":"8060",
	    "stop_name":"OAKLAWN AT OLD SPRING TURNAROUND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462698,41.739063 ]
	    },
	    "properties": {
	    "stop_id":"8065",
	    "stop_name":"EAST FS FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408267,41.738603 ]
	    },
	    "properties": {
	    "stop_id":"8070",
	    "stop_name":"WARWICK OPP MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478446,41.739119 ]
	    },
	    "properties": {
	    "stop_id":"8075",
	    "stop_name":"OAKLAWN OPP OLD SPRING TURNAROUND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439126,41.73923 ]
	    },
	    "properties": {
	    "stop_id":"8085",
	    "stop_name":"JEFFERSON BLVD OPP 303 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308163,41.739947 ]
	    },
	    "properties": {
	    "stop_id":"8095",
	    "stop_name":"COUNTY NS MAPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439109,41.73985 ]
	    },
	    "properties": {
	    "stop_id":"8105",
	    "stop_name":"JEFFERSON BLVD NS VERMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461082,41.740836 ]
	    },
	    "properties": {
	    "stop_id":"8125",
	    "stop_name":"HOWARD NS PONTIAC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438469,41.740972 ]
	    },
	    "properties": {
	    "stop_id":"8135",
	    "stop_name":"JEFFERSON BLVD AT 222 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40808,41.74084 ]
	    },
	    "properties": {
	    "stop_id":"8140",
	    "stop_name":"WARWICK AT 1309 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438565,41.741113 ]
	    },
	    "properties": {
	    "stop_id":"8145",
	    "stop_name":"JEFFERSON BLVD AT 245 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407827,41.741137 ]
	    },
	    "properties": {
	    "stop_id":"8150",
	    "stop_name":"WARWICK NS NAMQUID"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.310257,41.741874 ]
	    },
	    "properties": {
	    "stop_id":"8160",
	    "stop_name":"COUNTY AT 308 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.309984,41.74189 ]
	    },
	    "properties": {
	    "stop_id":"8175",
	    "stop_name":"COUNTY OPP BODY NATURAL FITNESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479138,41.741462 ]
	    },
	    "properties": {
	    "stop_id":"8185",
	    "stop_name":"OAKLAWN FS WESTBROOK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.312185,41.742842 ]
	    },
	    "properties": {
	    "stop_id":"8200",
	    "stop_name":"COUNTY OPP HILLTOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.314383,41.744088 ]
	    },
	    "properties": {
	    "stop_id":"8205",
	    "stop_name":"COUNTY OPP 361 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479285,41.743513 ]
	    },
	    "properties": {
	    "stop_id":"8210",
	    "stop_name":"OAKLAWN OPP WEINORAMA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463464,41.743173 ]
	    },
	    "properties": {
	    "stop_id":"8215",
	    "stop_name":"HOWARD NS WEST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437656,41.743314 ]
	    },
	    "properties": {
	    "stop_id":"8225",
	    "stop_name":"JEFFERSON BLVD OPP LINCOLN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437983,41.742723 ]
	    },
	    "properties": {
	    "stop_id":"8230",
	    "stop_name":"JEFFERSON BLVD FS LINCOLN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479379,41.743516 ]
	    },
	    "properties": {
	    "stop_id":"8235",
	    "stop_name":"OAKLAWN AT WEINORAMA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407144,41.743716 ]
	    },
	    "properties": {
	    "stop_id":"8245",
	    "stop_name":"WARWICK FS MIANONOMO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464708,41.744719 ]
	    },
	    "properties": {
	    "stop_id":"8250",
	    "stop_name":"HOWARD NS REGAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456681,41.743764 ]
	    },
	    "properties": {
	    "stop_id":"8255",
	    "stop_name":"PONTIAC OPP KENNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456612,41.74358 ]
	    },
	    "properties": {
	    "stop_id":"8265",
	    "stop_name":"PONTIAC NS KENNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407211,41.744087 ]
	    },
	    "properties": {
	    "stop_id":"8270",
	    "stop_name":"WARWICK NS SCRANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479324,41.744942 ]
	    },
	    "properties": {
	    "stop_id":"8275",
	    "stop_name":"OAKLAWN OPP SCENIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428405,41.744552 ]
	    },
	    "properties": {
	    "stop_id":"8280",
	    "stop_name":"POST NS ETHAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479131,41.744962 ]
	    },
	    "properties": {
	    "stop_id":"8285",
	    "stop_name":"OAKLAWN OPP CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428289,41.744846 ]
	    },
	    "properties": {
	    "stop_id":"8290",
	    "stop_name":"POST BETWEEN ELM & CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406247,41.745766 ]
	    },
	    "properties": {
	    "stop_id":"8295",
	    "stop_name":"WARWICK OPP 1106 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406061,41.745201 ]
	    },
	    "properties": {
	    "stop_id":"8300",
	    "stop_name":"NARRAGANSETT PKWAY NS WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405759,41.745178 ]
	    },
	    "properties": {
	    "stop_id":"8305",
	    "stop_name":"NARRAGANSETT PKWAY NS STODDARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403912,41.745468 ]
	    },
	    "properties": {
	    "stop_id":"8330",
	    "stop_name":"NARRAGANSETT PKWAY FS CREAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436699,41.745755 ]
	    },
	    "properties": {
	    "stop_id":"8345",
	    "stop_name":"JEFFERSON BLVD AT 100 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401843,41.745874 ]
	    },
	    "properties": {
	    "stop_id":"8355",
	    "stop_name":"NARRAGANSETT PKWAY OPP THOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436824,41.745985 ]
	    },
	    "properties": {
	    "stop_id":"8365",
	    "stop_name":"JEFFERSON BLVD OPP 100 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399959,41.746093 ]
	    },
	    "properties": {
	    "stop_id":"8370",
	    "stop_name":"NARRAGANSETT PKWAY NS KENDALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399377,41.74628 ]
	    },
	    "properties": {
	    "stop_id":"8375",
	    "stop_name":"NARRAGANSETT PKWAY OPP KENDELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424225,41.747596 ]
	    },
	    "properties": {
	    "stop_id":"8380",
	    "stop_name":"POST BETWEEN WELFARE & MAJESTIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.316552,41.746637 ]
	    },
	    "properties": {
	    "stop_id":"8385",
	    "stop_name":"COUNTY FS LINCOLN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42602,41.746699 ]
	    },
	    "properties": {
	    "stop_id":"8390",
	    "stop_name":"POST BETWEEN PETTACONSETT & NORWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453756,41.746956 ]
	    },
	    "properties": {
	    "stop_id":"8395",
	    "stop_name":"PONTIAC FS SLATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397355,41.746504 ]
	    },
	    "properties": {
	    "stop_id":"8400",
	    "stop_name":"NARRAGANSETT PKWAY NS ELKS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397125,41.746632 ]
	    },
	    "properties": {
	    "stop_id":"8405",
	    "stop_name":"NARRAGANSETT PKWAY OPP ELKS LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478865,41.746699 ]
	    },
	    "properties": {
	    "stop_id":"8410",
	    "stop_name":"OAKLAWN NS BRAYTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466493,41.746653 ]
	    },
	    "properties": {
	    "stop_id":"8415",
	    "stop_name":"HOWARD NS CHERRYDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466552,41.746576 ]
	    },
	    "properties": {
	    "stop_id":"8420",
	    "stop_name":"HOWARD OPP CHERRYDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.316588,41.746469 ]
	    },
	    "properties": {
	    "stop_id":"8425",
	    "stop_name":"COUNTY NS LINCOLN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395409,41.746818 ]
	    },
	    "properties": {
	    "stop_id":"8445",
	    "stop_name":"NARRAGANSETT PKWAY NS SPRING GREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468295,41.747932 ]
	    },
	    "properties": {
	    "stop_id":"8455",
	    "stop_name":"NEW LONDON FS HOWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478947,41.747205 ]
	    },
	    "properties": {
	    "stop_id":"8460",
	    "stop_name":"OAKLAWN NS WILBUR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394657,41.747017 ]
	    },
	    "properties": {
	    "stop_id":"8465",
	    "stop_name":"NARRAGANSETT PKWAY NS SPRING GREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453681,41.747365 ]
	    },
	    "properties": {
	    "stop_id":"8475",
	    "stop_name":"PONTIAC AT CNG PUMP STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46872,41.747883 ]
	    },
	    "properties": {
	    "stop_id":"8485",
	    "stop_name":"NEW LONDON NS GARDEN HILLS PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467083,41.748219 ]
	    },
	    "properties": {
	    "stop_id":"8510",
	    "stop_name":"TRAFFIC TRIBUNAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.31803,41.747975 ]
	    },
	    "properties": {
	    "stop_id":"8520",
	    "stop_name":"BARRINGTON PARK N RIDE (WHITE CHURCH)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317928,41.748065 ]
	    },
	    "properties": {
	    "stop_id":"8530",
	    "stop_name":"BARRINGTON PARK N RIDE (WHITE CHURCH)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391115,41.74857 ]
	    },
	    "properties": {
	    "stop_id":"8545",
	    "stop_name":"NARRAGANSETT PKWAY NS HOWIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391009,41.74873 ]
	    },
	    "properties": {
	    "stop_id":"8550",
	    "stop_name":"NARRAGANSETT PKWAY FS HOWIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423346,41.748343 ]
	    },
	    "properties": {
	    "stop_id":"8555",
	    "stop_name":"POST NS HARRINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404619,41.748264 ]
	    },
	    "properties": {
	    "stop_id":"8565",
	    "stop_name":"WARWICK NS N. COUNTRY CLUB"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404853,41.748172 ]
	    },
	    "properties": {
	    "stop_id":"8570",
	    "stop_name":"WARWICK AT 1015 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478429,41.748647 ]
	    },
	    "properties": {
	    "stop_id":"8575",
	    "stop_name":"OAKLAWN NS WEAVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387351,41.74874 ]
	    },
	    "properties": {
	    "stop_id":"8585",
	    "stop_name":"NARRAGANSETT PKWAY FS PARKSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319331,41.74936 ]
	    },
	    "properties": {
	    "stop_id":"8590",
	    "stop_name":"COUNTY NS FEDERAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388053,41.748823 ]
	    },
	    "properties": {
	    "stop_id":"8600",
	    "stop_name":"NARRAGANSETT PKWAY FS N ALVIRA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43576,41.748899 ]
	    },
	    "properties": {
	    "stop_id":"8610",
	    "stop_name":"JEFFERSON BLVD NS MAPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422972,41.749567 ]
	    },
	    "properties": {
	    "stop_id":"8615",
	    "stop_name":"ELMWOOD NS POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42277,41.74951 ]
	    },
	    "properties": {
	    "stop_id":"8630",
	    "stop_name":"ELMWOOD FS POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435583,41.749018 ]
	    },
	    "properties": {
	    "stop_id":"8635",
	    "stop_name":"JEFFERSON BLVD FS SARGENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.385099,41.748791 ]
	    },
	    "properties": {
	    "stop_id":"8640",
	    "stop_name":"NARRAGANSETT PKWAY OPP CARRIE BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.384603,41.748869 ]
	    },
	    "properties": {
	    "stop_id":"8645",
	    "stop_name":"NARRAGANSETT PKWAY NS CARRIE BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421014,41.749695 ]
	    },
	    "properties": {
	    "stop_id":"8665",
	    "stop_name":"POST OPP ROSEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46739,41.749307 ]
	    },
	    "properties": {
	    "stop_id":"8670",
	    "stop_name":"NEW LONDON AT NATIONAL GUARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404095,41.750778 ]
	    },
	    "properties": {
	    "stop_id":"8680",
	    "stop_name":"WARWICK OPP URBAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383476,41.75011 ]
	    },
	    "properties": {
	    "stop_id":"8695",
	    "stop_name":"NARRAGANSETT PKWAY NS COUNTRY CLUB"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477815,41.750455 ]
	    },
	    "properties": {
	    "stop_id":"8700",
	    "stop_name":"OAKLAWN NS MILES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383664,41.750534 ]
	    },
	    "properties": {
	    "stop_id":"8705",
	    "stop_name":"NARRAGANSETT PKWAY NS COUNTRY CLUB"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435047,41.75085 ]
	    },
	    "properties": {
	    "stop_id":"8710",
	    "stop_name":"JEFFERSON BLVD NS CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47786,41.750739 ]
	    },
	    "properties": {
	    "stop_id":"8720",
	    "stop_name":"OAKLAWN OPP MILES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434989,41.750595 ]
	    },
	    "properties": {
	    "stop_id":"8745",
	    "stop_name":"JEFFERSON BLVD FS CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.321692,41.751983 ]
	    },
	    "properties": {
	    "stop_id":"8750",
	    "stop_name":"COUNTY AT 509 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417281,41.751686 ]
	    },
	    "properties": {
	    "stop_id":"8765",
	    "stop_name":"POST AT 901 POST RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435568,41.752742 ]
	    },
	    "properties": {
	    "stop_id":"8770",
	    "stop_name":"JEFFERSON BLVD NS CYPRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383611,41.752268 ]
	    },
	    "properties": {
	    "stop_id":"8775",
	    "stop_name":"NARRAGANSETT PKWAY OPP GILOOLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451527,41.751645 ]
	    },
	    "properties": {
	    "stop_id":"8780",
	    "stop_name":"PONTIAC NS SOCKANOSSET CROSS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383744,41.752466 ]
	    },
	    "properties": {
	    "stop_id":"8785",
	    "stop_name":"NARRAGANSETT PKWAY NS GILLOOLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41634,41.752245 ]
	    },
	    "properties": {
	    "stop_id":"8805",
	    "stop_name":"POST FS FAIRFAX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477277,41.752349 ]
	    },
	    "properties": {
	    "stop_id":"8810",
	    "stop_name":"OAKLAWN FS GARDEN HILLS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423164,41.751899 ]
	    },
	    "properties": {
	    "stop_id":"8815",
	    "stop_name":"ELMWOOD NS SIXTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435241,41.752645 ]
	    },
	    "properties": {
	    "stop_id":"8820",
	    "stop_name":"JEFFERSON BLVD NS JEFFERSON PARK RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477299,41.75282 ]
	    },
	    "properties": {
	    "stop_id":"8830",
	    "stop_name":"OAKLAWN AT 741 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.324051,41.752442 ]
	    },
	    "properties": {
	    "stop_id":"8835",
	    "stop_name":"COUNTY FS MANNING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450327,41.753023 ]
	    },
	    "properties": {
	    "stop_id":"8840",
	    "stop_name":"PONTIAC OPP 1150 PONTIAC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415349,41.75306 ]
	    },
	    "properties": {
	    "stop_id":"8845",
	    "stop_name":"POST FS RELPH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423686,41.753867 ]
	    },
	    "properties": {
	    "stop_id":"8850",
	    "stop_name":"ELMWOOD NS FIFTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449001,41.753586 ]
	    },
	    "properties": {
	    "stop_id":"8870",
	    "stop_name":"PONTIAC FS PETTACONSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476735,41.754045 ]
	    },
	    "properties": {
	    "stop_id":"8880",
	    "stop_name":"OAKLAWN NS BLOSSOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449005,41.753719 ]
	    },
	    "properties": {
	    "stop_id":"8895",
	    "stop_name":"PONTIAC OPP PETTACONSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.385485,41.754092 ]
	    },
	    "properties": {
	    "stop_id":"8900",
	    "stop_name":"NARRAGANSETT PKWAY OPP BENTLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.385454,41.753943 ]
	    },
	    "properties": {
	    "stop_id":"8905",
	    "stop_name":"NARRAGANSETT PKWAY NS BENTLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414324,41.753601 ]
	    },
	    "properties": {
	    "stop_id":"8915",
	    "stop_name":"POST NS WALMART ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413367,41.754462 ]
	    },
	    "properties": {
	    "stop_id":"8925",
	    "stop_name":"POST FS PALM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404236,41.754677 ]
	    },
	    "properties": {
	    "stop_id":"8950",
	    "stop_name":"WARWICK NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412218,41.755079 ]
	    },
	    "properties": {
	    "stop_id":"8955",
	    "stop_name":"POST OPP CHAMBLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387961,41.755464 ]
	    },
	    "properties": {
	    "stop_id":"8980",
	    "stop_name":"NARRAGANSETT PKWAY FS NAUSHON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387681,41.755303 ]
	    },
	    "properties": {
	    "stop_id":"8985",
	    "stop_name":"NARR PKWAY FS 400 NARRAGANSETT PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404535,41.75598 ]
	    },
	    "properties": {
	    "stop_id":"9015",
	    "stop_name":"WARWICK NS ATLANTIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41187,41.755458 ]
	    },
	    "properties": {
	    "stop_id":"9020",
	    "stop_name":"POST FS SPOFFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424124,41.756267 ]
	    },
	    "properties": {
	    "stop_id":"9025",
	    "stop_name":"ELMWOOD MIDBLOCK 1884 ELMWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476041,41.755696 ]
	    },
	    "properties": {
	    "stop_id":"9040",
	    "stop_name":"OAKLAWN AT655 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475669,41.756101 ]
	    },
	    "properties": {
	    "stop_id":"9050",
	    "stop_name":"OAKLAWN AT 630 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388744,41.756822 ]
	    },
	    "properties": {
	    "stop_id":"9065",
	    "stop_name":"NARRAGANSETT PKWAY NS CONONCHET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388619,41.75675 ]
	    },
	    "properties": {
	    "stop_id":"9070",
	    "stop_name":"NARRAGANSETT PKWAY FS LONGWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424644,41.75972 ]
	    },
	    "properties": {
	    "stop_id":"9075",
	    "stop_name":"ELMWOOD N S 2ND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457899,41.757339 ]
	    },
	    "properties": {
	    "stop_id":"9090",
	    "stop_name":"MIDWAY FS SOCKANOSSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.326199,41.754475 ]
	    },
	    "properties": {
	    "stop_id":"9095",
	    "stop_name":"WAMPANOAG AT EAST BAY CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424035,41.756897 ]
	    },
	    "properties": {
	    "stop_id":"9100",
	    "stop_name":"ELMWOOD NS THIRD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409506,41.756977 ]
	    },
	    "properties": {
	    "stop_id":"9105",
	    "stop_name":"POST OPP TENNYSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409403,41.757155 ]
	    },
	    "properties": {
	    "stop_id":"9110",
	    "stop_name":"POST NS TENNYSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445425,41.757572 ]
	    },
	    "properties": {
	    "stop_id":"9125",
	    "stop_name":"PONTIAC AT 988 PONTIAC AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445458,41.75764 ]
	    },
	    "properties": {
	    "stop_id":"9130",
	    "stop_name":"PONTIAC AT 995 PONTIAC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.474514,41.758023 ]
	    },
	    "properties": {
	    "stop_id":"9145",
	    "stop_name":"OAKLAWN FS FREEHOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.358289,41.758095 ]
	    },
	    "properties": {
	    "stop_id":"9150",
	    "stop_name":"CRESCENT VIEW OPP PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389176,41.758541 ]
	    },
	    "properties": {
	    "stop_id":"9155",
	    "stop_name":"NARRAGANSETT PKWAY FS MANCHESTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458543,41.756967 ]
	    },
	    "properties": {
	    "stop_id":"9165",
	    "stop_name":"MIDWAY OPP SOCKANOSSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456923,41.757945 ]
	    },
	    "properties": {
	    "stop_id":"9170",
	    "stop_name":"MIDWAY BEHIND OFFICE MAX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.357948,41.758254 ]
	    },
	    "properties": {
	    "stop_id":"9175",
	    "stop_name":"CRESCENT VIEW NS PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.474523,41.758341 ]
	    },
	    "properties": {
	    "stop_id":"9180",
	    "stop_name":"OAKLAWN NS SHERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.3566,41.758365 ]
	    },
	    "properties": {
	    "stop_id":"9190",
	    "stop_name":"CRESCENT VIEW NS CAROUSEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359866,41.758468 ]
	    },
	    "properties": {
	    "stop_id":"9195",
	    "stop_name":"BULLOCKS POINT FS CRESCENT VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407304,41.758677 ]
	    },
	    "properties": {
	    "stop_id":"9225",
	    "stop_name":"POST FS HOLMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35543,41.758632 ]
	    },
	    "properties": {
	    "stop_id":"9240",
	    "stop_name":"CRESCENT VIEW FS BEACON PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42437,41.758798 ]
	    },
	    "properties": {
	    "stop_id":"9245",
	    "stop_name":"ELMWOOD NS SECOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360118,41.758776 ]
	    },
	    "properties": {
	    "stop_id":"9255",
	    "stop_name":"BULLOCKS POINT FS BEACON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44443,41.758777 ]
	    },
	    "properties": {
	    "stop_id":"9275",
	    "stop_name":"PONTIAC NS CAPUANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.351402,41.759568 ]
	    },
	    "properties": {
	    "stop_id":"9285",
	    "stop_name":"CRESCENT VIEW NS CLAIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347859,41.75945 ]
	    },
	    "properties": {
	    "stop_id":"9300",
	    "stop_name":"CRESCENT VIEW BETWEEN PECK & PLANET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47401,41.759745 ]
	    },
	    "properties": {
	    "stop_id":"9315",
	    "stop_name":"OAKLAWN NS FERNBROOK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348909,41.75971 ]
	    },
	    "properties": {
	    "stop_id":"9320",
	    "stop_name":"CRESCENT VIEW AT ALDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473771,41.759978 ]
	    },
	    "properties": {
	    "stop_id":"9325",
	    "stop_name":"OAKLAWN FS FERNBROOK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404624,41.760089 ]
	    },
	    "properties": {
	    "stop_id":"9330",
	    "stop_name":"WARWICK NS POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389483,41.760364 ]
	    },
	    "properties": {
	    "stop_id":"9335",
	    "stop_name":"NARRAGANSETT PKWAY NS BAYSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405378,41.759978 ]
	    },
	    "properties": {
	    "stop_id":"9340",
	    "stop_name":"POST FS FROST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.343641,41.759567 ]
	    },
	    "properties": {
	    "stop_id":"9345",
	    "stop_name":"WILLETT AVE AT SHAW S MARKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442922,41.760252 ]
	    },
	    "properties": {
	    "stop_id":"9350",
	    "stop_name":"PONTIAC NS GARDEN CITY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404868,41.760744 ]
	    },
	    "properties": {
	    "stop_id":"9355",
	    "stop_name":"WARWICK AT 557 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404671,41.761041 ]
	    },
	    "properties": {
	    "stop_id":"9360",
	    "stop_name":"WARWICK OPP SCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360235,41.760741 ]
	    },
	    "properties": {
	    "stop_id":"9365",
	    "stop_name":"BULLOCKS POINT AT OLDHAM ELEMENTARY SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.323314,41.760222 ]
	    },
	    "properties": {
	    "stop_id":"9370",
	    "stop_name":"WAMPANOAG OPP PRIMROSE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360271,41.759975 ]
	    },
	    "properties": {
	    "stop_id":"9380",
	    "stop_name":"BULLOCKS POINT OPP SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.323947,41.760193 ]
	    },
	    "properties": {
	    "stop_id":"9385",
	    "stop_name":"WAMPANOAG FS PRIMROSE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424955,41.761009 ]
	    },
	    "properties": {
	    "stop_id":"9390",
	    "stop_name":"ELMWOOD FS 1ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458729,41.761606 ]
	    },
	    "properties": {
	    "stop_id":"9400",
	    "stop_name":"HILLSIDE FS CHIPOTLE GRILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456737,41.76072 ]
	    },
	    "properties": {
	    "stop_id":"9410",
	    "stop_name":"MIDWAY FS CYPRESS DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389585,41.761545 ]
	    },
	    "properties": {
	    "stop_id":"9415",
	    "stop_name":"NARRAGANSETT PKWAY FS SPRING GARDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473667,41.761128 ]
	    },
	    "properties": {
	    "stop_id":"9420",
	    "stop_name":"OAKLAWN NS MERIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424754,41.761008 ]
	    },
	    "properties": {
	    "stop_id":"9440",
	    "stop_name":"ELMWOOD NS FIRST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473851,41.761491 ]
	    },
	    "properties": {
	    "stop_id":"9465",
	    "stop_name":"OAKLAWN NS WILLISTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457992,41.762062 ]
	    },
	    "properties": {
	    "stop_id":"9475",
	    "stop_name":"HILLSIDE AT JOSEPH A BANKS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360583,41.7618 ]
	    },
	    "properties": {
	    "stop_id":"9480",
	    "stop_name":"BULLOCKS POINT NS BATES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389821,41.762532 ]
	    },
	    "properties": {
	    "stop_id":"9495",
	    "stop_name":"NARRAGANSETT PKWAY FS EAST VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424996,41.762387 ]
	    },
	    "properties": {
	    "stop_id":"9515",
	    "stop_name":"ELMWOOD FS WELLINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42518,41.762368 ]
	    },
	    "properties": {
	    "stop_id":"9535",
	    "stop_name":"ELMWOOD NS WELLINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442412,41.762712 ]
	    },
	    "properties": {
	    "stop_id":"9540",
	    "stop_name":"PONTIAC OPP HERSEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44193,41.763181 ]
	    },
	    "properties": {
	    "stop_id":"9560",
	    "stop_name":"PONTIAC FS EUSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404837,41.763379 ]
	    },
	    "properties": {
	    "stop_id":"9570",
	    "stop_name":"WARWICK AT 468 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473729,41.762917 ]
	    },
	    "properties": {
	    "stop_id":"9585",
	    "stop_name":"OAKLAWN OPP 435 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473786,41.762949 ]
	    },
	    "properties": {
	    "stop_id":"9590",
	    "stop_name":"OAKLAWN AT 435 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45841,41.764559 ]
	    },
	    "properties": {
	    "stop_id":"9606",
	    "stop_name":"HILLSIDE OPP CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360652,41.763351 ]
	    },
	    "properties": {
	    "stop_id":"9615",
	    "stop_name":"BULLOCKS POINT NS SHERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.321775,41.761503 ]
	    },
	    "properties": {
	    "stop_id":"9625",
	    "stop_name":"WAMPANOAG AT POLE 23"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360859,41.763579 ]
	    },
	    "properties": {
	    "stop_id":"9630",
	    "stop_name":"BULLOCKS POINT NS SHERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404907,41.764529 ]
	    },
	    "properties": {
	    "stop_id":"9640",
	    "stop_name":"WARWICK FS QUINTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405113,41.764266 ]
	    },
	    "properties": {
	    "stop_id":"9650",
	    "stop_name":"WARWICK FS LAURA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425574,41.764814 ]
	    },
	    "properties": {
	    "stop_id":"9680",
	    "stop_name":"ELMWOOD NS 3RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425423,41.764837 ]
	    },
	    "properties": {
	    "stop_id":"9695",
	    "stop_name":"ELMWOOD BETWEEN 2ND & 3RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361069,41.76518 ]
	    },
	    "properties": {
	    "stop_id":"9705",
	    "stop_name":"BULLOCKS POINT NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.321269,41.764594 ]
	    },
	    "properties": {
	    "stop_id":"9715",
	    "stop_name":"WAMPANOAG NS PINE TOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.320995,41.76482 ]
	    },
	    "properties": {
	    "stop_id":"9720",
	    "stop_name":"WAMPANOAG AT POLE 35"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390992,41.765972 ]
	    },
	    "properties": {
	    "stop_id":"9755",
	    "stop_name":"BROAD FS TUCKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472096,41.766002 ]
	    },
	    "properties": {
	    "stop_id":"9765",
	    "stop_name":"OAKLAWN AT 330 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458405,41.766139 ]
	    },
	    "properties": {
	    "stop_id":"9770",
	    "stop_name":"RESERVOIR NS GARDEN CITY DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440423,41.766565 ]
	    },
	    "properties": {
	    "stop_id":"9785",
	    "stop_name":"PONTIAC OPP KEITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47176,41.766859 ]
	    },
	    "properties": {
	    "stop_id":"9800",
	    "stop_name":"OAKLAWN NS DEAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425,41.76663 ]
	    },
	    "properties": {
	    "stop_id":"9805",
	    "stop_name":"ELMWOOD OPP BEDSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471507,41.767319 ]
	    },
	    "properties": {
	    "stop_id":"9815",
	    "stop_name":"Oaklawn NS Tupelo Hill"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405216,41.766583 ]
	    },
	    "properties": {
	    "stop_id":"9820",
	    "stop_name":"WARWICK NS SHOLES WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405103,41.76731 ]
	    },
	    "properties": {
	    "stop_id":"9830",
	    "stop_name":"WARWICK OPP WOBURN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457859,41.766702 ]
	    },
	    "properties": {
	    "stop_id":"9835",
	    "stop_name":"RESERVOIR FS WOODBRIDGE (CHELO'S)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361148,41.767999 ]
	    },
	    "properties": {
	    "stop_id":"9850",
	    "stop_name":"BULLOCKS POINT AT 396 BULLOCKS POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424802,41.76774 ]
	    },
	    "properties": {
	    "stop_id":"9855",
	    "stop_name":"ELMWOOD OPP CARMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391888,41.767874 ]
	    },
	    "properties": {
	    "stop_id":"9865",
	    "stop_name":"BROAD FS RHODES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361189,41.767695 ]
	    },
	    "properties": {
	    "stop_id":"9870",
	    "stop_name":"BULLOCKS POINT NS NORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391892,41.768027 ]
	    },
	    "properties": {
	    "stop_id":"9875",
	    "stop_name":"BROAD FS CIRCUIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405144,41.768675 ]
	    },
	    "properties": {
	    "stop_id":"9880",
	    "stop_name":"WARWICK FS DARTMOOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424512,41.768171 ]
	    },
	    "properties": {
	    "stop_id":"9895",
	    "stop_name":"ELMWOOD BETWEEN CARMAN &  SHARON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439197,41.76838 ]
	    },
	    "properties": {
	    "stop_id":"9900",
	    "stop_name":"PONTIAC NS ROCKLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455966,41.768399 ]
	    },
	    "properties": {
	    "stop_id":"9905",
	    "stop_name":"RESERVOIR AT 1200 RESERVOIR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456161,41.768368 ]
	    },
	    "properties": {
	    "stop_id":"9910",
	    "stop_name":"RESERVOIR FS COULTERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455112,41.769468 ]
	    },
	    "properties": {
	    "stop_id":"9955",
	    "stop_name":"RESERVOIR NS RANGELY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361589,41.770921 ]
	    },
	    "properties": {
	    "stop_id":"9960",
	    "stop_name":"BULLOCKS POINT NS LINCOLN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.470379,41.769993 ]
	    },
	    "properties": {
	    "stop_id":"9970",
	    "stop_name":"OAKLAWN FS RALLS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40541,41.769615 ]
	    },
	    "properties": {
	    "stop_id":"9980",
	    "stop_name":"WARWICK AT STOP&SHOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438628,41.769384 ]
	    },
	    "properties": {
	    "stop_id":"9990",
	    "stop_name":"PONTIAC FS FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452731,41.771809 ]
	    },
	    "properties": {
	    "stop_id":"9995",
	    "stop_name":"RESERVOIR OPP MCDONALDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.470381,41.770389 ]
	    },
	    "properties": {
	    "stop_id":"10005",
	    "stop_name":"OAKLAWN NS OAKLAWN MANOR DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423505,41.770958 ]
	    },
	    "properties": {
	    "stop_id":"10030",
	    "stop_name":"ELMWOOD OPP JOB LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405261,41.77115 ]
	    },
	    "properties": {
	    "stop_id":"10045",
	    "stop_name":"WARWICK AT 222 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423531,41.771058 ]
	    },
	    "properties": {
	    "stop_id":"10055",
	    "stop_name":"ELMWOOD MIDBLOCK PRICERITE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394366,41.771177 ]
	    },
	    "properties": {
	    "stop_id":"10075",
	    "stop_name":"BROAD NS BERWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.324882,41.77183 ]
	    },
	    "properties": {
	    "stop_id":"10085",
	    "stop_name":"WAMPANOAG OPP ARGYLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39581,41.772294 ]
	    },
	    "properties": {
	    "stop_id":"10105",
	    "stop_name":"BROAD OPP GLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451308,41.773259 ]
	    },
	    "properties": {
	    "stop_id":"10120",
	    "stop_name":"RESERVOIR NS BRIDGETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395991,41.772516 ]
	    },
	    "properties": {
	    "stop_id":"10145",
	    "stop_name":"BROAD NS ROSEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436972,41.771694 ]
	    },
	    "properties": {
	    "stop_id":"10155",
	    "stop_name":"PONTIAC FS COLONIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436888,41.772174 ]
	    },
	    "properties": {
	    "stop_id":"10190",
	    "stop_name":"PONTIAC BETWEEN HODSELL & COLONIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.362886,41.772703 ]
	    },
	    "properties": {
	    "stop_id":"10215",
	    "stop_name":"BULLOCKS POINT FS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469073,41.772876 ]
	    },
	    "properties": {
	    "stop_id":"10220",
	    "stop_name":"OAKLAWN NS WOODSTOCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.322601,41.766917 ]
	    },
	    "properties": {
	    "stop_id":"10230",
	    "stop_name":"WAMPANOAG AT 1689 WAMPANOAG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404296,41.772651 ]
	    },
	    "properties": {
	    "stop_id":"10240",
	    "stop_name":"WARWICK FS 174 WARWICK AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469168,41.77294 ]
	    },
	    "properties": {
	    "stop_id":"10250",
	    "stop_name":"OAKLAWN AT 101 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403845,41.773554 ]
	    },
	    "properties": {
	    "stop_id":"10260",
	    "stop_name":"WARWICK NS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.326417,41.77426 ]
	    },
	    "properties": {
	    "stop_id":"10300",
	    "stop_name":"WAMPANOAG AT 1472 WAMPANOAG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452812,41.771824 ]
	    },
	    "properties": {
	    "stop_id":"10310",
	    "stop_name":"RESERVOIR AT MCDONALDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422757,41.773009 ]
	    },
	    "properties": {
	    "stop_id":"10315",
	    "stop_name":"ELMWOOD OPP OSSCO BOLT N SCREW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.325534,41.772461 ]
	    },
	    "properties": {
	    "stop_id":"10320",
	    "stop_name":"WAMPANOAG FS PRESIDENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403046,41.774248 ]
	    },
	    "properties": {
	    "stop_id":"10335",
	    "stop_name":"WARWICK AT 118 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422585,41.773656 ]
	    },
	    "properties": {
	    "stop_id":"10345",
	    "stop_name":"ELMWOOD FS FENNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437338,41.77404 ]
	    },
	    "properties": {
	    "stop_id":"10360",
	    "stop_name":"PONTIAC FS WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468484,41.774543 ]
	    },
	    "properties": {
	    "stop_id":"10370",
	    "stop_name":"OAKLAWN OPP ROYALE APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43724,41.774304 ]
	    },
	    "properties": {
	    "stop_id":"10380",
	    "stop_name":"PONTIAC AT CITGO GAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398444,41.774878 ]
	    },
	    "properties": {
	    "stop_id":"10390",
	    "stop_name":"BROAD FS SHAW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397891,41.77399 ]
	    },
	    "properties": {
	    "stop_id":"10395",
	    "stop_name":"BROAD FS MOORLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449806,41.774767 ]
	    },
	    "properties": {
	    "stop_id":"10405",
	    "stop_name":"RESERVOIR NS NOWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450366,41.774401 ]
	    },
	    "properties": {
	    "stop_id":"10415",
	    "stop_name":"RESERVOIR AT 1001 RESERVOIR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399418,41.776124 ]
	    },
	    "properties": {
	    "stop_id":"10440",
	    "stop_name":"BROAD AT LIBRARY ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40198,41.775662 ]
	    },
	    "properties": {
	    "stop_id":"10455",
	    "stop_name":"WARWICK FS VILLA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4023,41.775538 ]
	    },
	    "properties": {
	    "stop_id":"10460",
	    "stop_name":"WARWICK FS VILLA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468533,41.775349 ]
	    },
	    "properties": {
	    "stop_id":"10465",
	    "stop_name":"OAKLAWN AT 55 OAKLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44903,41.775656 ]
	    },
	    "properties": {
	    "stop_id":"10470",
	    "stop_name":"RESERVOIR NS VIKING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448014,41.776263 ]
	    },
	    "properties": {
	    "stop_id":"10475",
	    "stop_name":"RESERVOIR AT HEMALIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421745,41.775981 ]
	    },
	    "properties": {
	    "stop_id":"10525",
	    "stop_name":"ELMWOOD FS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447648,41.776643 ]
	    },
	    "properties": {
	    "stop_id":"10530",
	    "stop_name":"RESERVOIR NS LOCKMERE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421381,41.776593 ]
	    },
	    "properties": {
	    "stop_id":"10540",
	    "stop_name":"ELMWOOD NS HATHAWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4364,41.7771 ]
	    },
	    "properties": {
	    "stop_id":"10565",
	    "stop_name":"ROLFE FS AUBURN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.328304,41.775831 ]
	    },
	    "properties": {
	    "stop_id":"10570",
	    "stop_name":"WAMPANOAG AT 1375 WAMPANOAG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.328889,41.776974 ]
	    },
	    "properties": {
	    "stop_id":"10585",
	    "stop_name":"WAMPANOAG NS MOHAWK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421015,41.77819 ]
	    },
	    "properties": {
	    "stop_id":"10620",
	    "stop_name":"ELMWOOD NS SPOONER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40078,41.777483 ]
	    },
	    "properties": {
	    "stop_id":"10630",
	    "stop_name":"WARWICK NS BARTLETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445905,41.777784 ]
	    },
	    "properties": {
	    "stop_id":"10640",
	    "stop_name":"RESERVOIR NS AUBURN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435852,41.778294 ]
	    },
	    "properties": {
	    "stop_id":"10660",
	    "stop_name":"ROLFE NS PARK AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400615,41.777419 ]
	    },
	    "properties": {
	    "stop_id":"10665",
	    "stop_name":"WARWICK NS BARTLETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399879,41.778068 ]
	    },
	    "properties": {
	    "stop_id":"10685",
	    "stop_name":"NORWOOD FS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399938,41.778233 ]
	    },
	    "properties": {
	    "stop_id":"10690",
	    "stop_name":"NORWOOD NS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445688,41.778049 ]
	    },
	    "properties": {
	    "stop_id":"10695",
	    "stop_name":"RESERVOIR NS RIVERFARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400369,41.77822 ]
	    },
	    "properties": {
	    "stop_id":"10700",
	    "stop_name":"BROAD FS NORWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466972,41.778666 ]
	    },
	    "properties": {
	    "stop_id":"10735",
	    "stop_name":"CRANSTON OPP UXBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436012,41.778477 ]
	    },
	    "properties": {
	    "stop_id":"10740",
	    "stop_name":"ROLFE FS PONTIAC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467164,41.778337 ]
	    },
	    "properties": {
	    "stop_id":"10750",
	    "stop_name":"CRANSTON NS UXBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396304,41.778719 ]
	    },
	    "properties": {
	    "stop_id":"10755",
	    "stop_name":"NORWOOD NS PAWTUXET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396365,41.778881 ]
	    },
	    "properties": {
	    "stop_id":"10765",
	    "stop_name":"NORWOOD FS PAWTUXET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435361,41.779282 ]
	    },
	    "properties": {
	    "stop_id":"10770",
	    "stop_name":"PONTIAC NS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43527,41.779214 ]
	    },
	    "properties": {
	    "stop_id":"10780",
	    "stop_name":"PONTIAC FS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363255,41.777732 ]
	    },
	    "properties": {
	    "stop_id":"10786",
	    "stop_name":"BULLOCKS POINT AT STONEGATE CONDOMINIUMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394174,41.779127 ]
	    },
	    "properties": {
	    "stop_id":"10790",
	    "stop_name":"NORWOOD AT 90 NORWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420499,41.778997 ]
	    },
	    "properties": {
	    "stop_id":"10810",
	    "stop_name":"ELMWOOD FS SAWYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400849,41.780539 ]
	    },
	    "properties": {
	    "stop_id":"10815",
	    "stop_name":"BROAD FS WHEELER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443218,41.779834 ]
	    },
	    "properties": {
	    "stop_id":"10830",
	    "stop_name":"RESERVOIR NS CALAMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.333061,41.779631 ]
	    },
	    "properties": {
	    "stop_id":"10840",
	    "stop_name":"WAMPANOAG FS FORBES SQUARE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.333227,41.780064 ]
	    },
	    "properties": {
	    "stop_id":"10845",
	    "stop_name":"WAMPANOAG AT WHJJ TRANSMITTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443198,41.779722 ]
	    },
	    "properties": {
	    "stop_id":"10850",
	    "stop_name":"RESERVOIR NS BLAISDELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465558,41.780466 ]
	    },
	    "properties": {
	    "stop_id":"10875",
	    "stop_name":"CRANSTON AT 1790 CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465711,41.780305 ]
	    },
	    "properties": {
	    "stop_id":"10880",
	    "stop_name":"CRANSTON NS VERVENNA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393323,41.780595 ]
	    },
	    "properties": {
	    "stop_id":"10885",
	    "stop_name":"NARRAGANSETT BLVD NS GRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393224,41.781004 ]
	    },
	    "properties": {
	    "stop_id":"10890",
	    "stop_name":"NARRAGANSETT BLVD FS GRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400749,41.780383 ]
	    },
	    "properties": {
	    "stop_id":"10900",
	    "stop_name":"BROAD NS WHEELER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420329,41.779811 ]
	    },
	    "properties": {
	    "stop_id":"10910",
	    "stop_name":"ELMWOODNS DIXON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363188,41.7809 ]
	    },
	    "properties": {
	    "stop_id":"10920",
	    "stop_name":"PAWTUCKET AT BANK OF AMERICA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441687,41.781008 ]
	    },
	    "properties": {
	    "stop_id":"10925",
	    "stop_name":"RESERVOIR FS LEYDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419596,41.781444 ]
	    },
	    "properties": {
	    "stop_id":"10930",
	    "stop_name":"ELMWOOD FS MCKINLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441624,41.780884 ]
	    },
	    "properties": {
	    "stop_id":"10935",
	    "stop_name":"RESERVOIR NS NORFOLK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431801,41.781261 ]
	    },
	    "properties": {
	    "stop_id":"10940",
	    "stop_name":"PONTIAC OPP MAURAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432553,41.780955 ]
	    },
	    "properties": {
	    "stop_id":"10950",
	    "stop_name":"PONTIAC NS BECKWITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363474,41.781871 ]
	    },
	    "properties": {
	    "stop_id":"10955",
	    "stop_name":"PAWTUCKET NS INDUSTRIAL CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440159,41.781909 ]
	    },
	    "properties": {
	    "stop_id":"10975",
	    "stop_name":"RESERVOIR NS HIGH SCHOOL AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419648,41.781914 ]
	    },
	    "properties": {
	    "stop_id":"10985",
	    "stop_name":"ELMWOOD FS WHITNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464849,41.782621 ]
	    },
	    "properties": {
	    "stop_id":"10990",
	    "stop_name":"CRANSTON OPP 1755 CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439453,41.782551 ]
	    },
	    "properties": {
	    "stop_id":"11005",
	    "stop_name":"RESERVOIR NS LAMBERT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464866,41.782962 ]
	    },
	    "properties": {
	    "stop_id":"11015",
	    "stop_name":"CRANSTON NS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401083,41.782913 ]
	    },
	    "properties": {
	    "stop_id":"11022",
	    "stop_name":"BROAD NS ARMINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363446,41.7832 ]
	    },
	    "properties": {
	    "stop_id":"11030",
	    "stop_name":"PAWTUCKET AT CONTRACTORS SUPPLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464606,41.783535 ]
	    },
	    "properties": {
	    "stop_id":"11035",
	    "stop_name":"CRANSTON FS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438533,41.783257 ]
	    },
	    "properties": {
	    "stop_id":"11040",
	    "stop_name":"RESERVOIR NS LEGION WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39426,41.783425 ]
	    },
	    "properties": {
	    "stop_id":"11045",
	    "stop_name":"NARRAGANSETT BLVD NS ARMINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394186,41.783962 ]
	    },
	    "properties": {
	    "stop_id":"11060",
	    "stop_name":"NARRAGANSETT BLVD NS NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43697,41.784189 ]
	    },
	    "properties": {
	    "stop_id":"11065",
	    "stop_name":"RESERVOIR NS BECKWITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43755,41.783931 ]
	    },
	    "properties": {
	    "stop_id":"11070",
	    "stop_name":"RESERVOIR NS BURNSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418774,41.784095 ]
	    },
	    "properties": {
	    "stop_id":"11075",
	    "stop_name":"ELMWOOD OPP CARLISLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418934,41.784114 ]
	    },
	    "properties": {
	    "stop_id":"11080",
	    "stop_name":"ELMWOOD NS CARLISLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43119,41.784438 ]
	    },
	    "properties": {
	    "stop_id":"11085",
	    "stop_name":"PONTIAC OPP BRANDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464312,41.784454 ]
	    },
	    "properties": {
	    "stop_id":"11095",
	    "stop_name":"CRANSTON NS AMERICA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401188,41.783106 ]
	    },
	    "properties": {
	    "stop_id":"11100",
	    "stop_name":"BROAD OPP ARMINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363563,41.782986 ]
	    },
	    "properties": {
	    "stop_id":"11110",
	    "stop_name":"PAWTUCKET AVE OPP 3348 PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464431,41.784433 ]
	    },
	    "properties": {
	    "stop_id":"11115",
	    "stop_name":"CRANSTON NS KNIGHT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457036,41.784509 ]
	    },
	    "properties": {
	    "stop_id":"11135",
	    "stop_name":"DYER FS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436273,41.784861 ]
	    },
	    "properties": {
	    "stop_id":"11150",
	    "stop_name":"RESERVOIR NS WILLIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43109,41.784589 ]
	    },
	    "properties": {
	    "stop_id":"11155",
	    "stop_name":"PONTIAC FS BRANDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435549,41.785147 ]
	    },
	    "properties": {
	    "stop_id":"11170",
	    "stop_name":"RESERVOIR FS PRESTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457126,41.784574 ]
	    },
	    "properties": {
	    "stop_id":"11185",
	    "stop_name":"DYER FS POCASSET VILLAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51558,41.785283 ]
	    },
	    "properties": {
	    "stop_id":"11195",
	    "stop_name":"AMFLEX NS COMSTOCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394861,41.785919 ]
	    },
	    "properties": {
	    "stop_id":"11210",
	    "stop_name":"NARRAGANSETT BLVD FS HARBORSIDE BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363887,41.786067 ]
	    },
	    "properties": {
	    "stop_id":"11220",
	    "stop_name":"PAWTUCKET FS WHEELER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435146,41.78565 ]
	    },
	    "properties": {
	    "stop_id":"11225",
	    "stop_name":"RESERVOIR NS CARLETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401616,41.785574 ]
	    },
	    "properties": {
	    "stop_id":"11230",
	    "stop_name":"BROAD FS MONTGOMERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401675,41.786141 ]
	    },
	    "properties": {
	    "stop_id":"11240",
	    "stop_name":"BROAD FS MONTGOMERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41963,41.785939 ]
	    },
	    "properties": {
	    "stop_id":"11250",
	    "stop_name":"ELMWOOD AT ROGER WILLIAMS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419669,41.78641 ]
	    },
	    "properties": {
	    "stop_id":"11255",
	    "stop_name":"ELMWOOD AT ROGER WILLIAMS PARK ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46389,41.78606 ]
	    },
	    "properties": {
	    "stop_id":"11260",
	    "stop_name":"CRANSTON NS MASSACHUSETTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509791,41.786386 ]
	    },
	    "properties": {
	    "stop_id":"11265",
	    "stop_name":"SAILOR WAY NS AMFLEX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463868,41.786423 ]
	    },
	    "properties": {
	    "stop_id":"11270",
	    "stop_name":"CRANSTON NS MATTHEWSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395084,41.78604 ]
	    },
	    "properties": {
	    "stop_id":"11275",
	    "stop_name":"NARRAGANSETT BLVD FS MONTGOMERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364138,41.786644 ]
	    },
	    "properties": {
	    "stop_id":"11285",
	    "stop_name":"PAWTUCKET OPP VILLAGE GREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455994,41.787501 ]
	    },
	    "properties": {
	    "stop_id":"11290",
	    "stop_name":"DYER AT 870 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456034,41.786545 ]
	    },
	    "properties": {
	    "stop_id":"11295",
	    "stop_name":"DYER AT 881 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431435,41.787531 ]
	    },
	    "properties": {
	    "stop_id":"11310",
	    "stop_name":"PONTIAC FS RUTHERGLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431645,41.78614 ]
	    },
	    "properties": {
	    "stop_id":"11330",
	    "stop_name":"PONTIAC NS RICHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403042,41.78957 ]
	    },
	    "properties": {
	    "stop_id":"11335",
	    "stop_name":"EDDY NS MORTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.336598,41.790814 ]
	    },
	    "properties": {
	    "stop_id":"11340",
	    "stop_name":"WAMPANOAG OPP 600 WAMPANOAG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402504,41.787739 ]
	    },
	    "properties": {
	    "stop_id":"11350",
	    "stop_name":"EDDY NS VERMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395527,41.787848 ]
	    },
	    "properties": {
	    "stop_id":"11355",
	    "stop_name":"NARRAGANSETT BLVD NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.333351,41.786215 ]
	    },
	    "properties": {
	    "stop_id":"11360",
	    "stop_name":"WAMPANOAG AT UTILITY POLE 87 1/2"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4567,41.789009 ]
	    },
	    "properties": {
	    "stop_id":"11375",
	    "stop_name":"DYER AT 830 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463237,41.788113 ]
	    },
	    "properties": {
	    "stop_id":"11385",
	    "stop_name":"CRANSTON NS BATCHELLOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463148,41.788074 ]
	    },
	    "properties": {
	    "stop_id":"11395",
	    "stop_name":"CRANSTON OPP BATCHELLOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431467,41.787815 ]
	    },
	    "properties": {
	    "stop_id":"11400",
	    "stop_name":"PONTIAC FS RESERVOIR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402563,41.788375 ]
	    },
	    "properties": {
	    "stop_id":"11420",
	    "stop_name":"EDDY FS CALIFORNIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364326,41.788205 ]
	    },
	    "properties": {
	    "stop_id":"11435",
	    "stop_name":"PAWTUCKET OPP WATER VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364873,41.78927 ]
	    },
	    "properties": {
	    "stop_id":"11440",
	    "stop_name":"PAWTUCKET OPP BAYVIEW SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507889,41.788703 ]
	    },
	    "properties": {
	    "stop_id":"11465",
	    "stop_name":"PLAINFIELD FS SAILOR WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.333269,41.789554 ]
	    },
	    "properties": {
	    "stop_id":"11485",
	    "stop_name":"WAMPANOAG AT MOBIL GAS STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429915,41.789245 ]
	    },
	    "properties": {
	    "stop_id":"11490",
	    "stop_name":"RESERVOIR NS ROGER WILLIAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504541,41.78918 ]
	    },
	    "properties": {
	    "stop_id":"11495",
	    "stop_name":"PLAINFIELD NS SIMMONSVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421333,41.789451 ]
	    },
	    "properties": {
	    "stop_id":"11510",
	    "stop_name":"ELMWOOD FS CADILLAC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462335,41.789736 ]
	    },
	    "properties": {
	    "stop_id":"11515",
	    "stop_name":"CRANSTON NS HAVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462614,41.789386 ]
	    },
	    "properties": {
	    "stop_id":"11520",
	    "stop_name":"CRANSTON OPP VALLONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421644,41.789447 ]
	    },
	    "properties": {
	    "stop_id":"11530",
	    "stop_name":"ELMWOOD FS HEMPSTEAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404727,41.789596 ]
	    },
	    "properties": {
	    "stop_id":"11535",
	    "stop_name":"CARR STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430208,41.789266 ]
	    },
	    "properties": {
	    "stop_id":"11540",
	    "stop_name":"RESERVOIR OPP ROGER WILLIAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364829,41.789583 ]
	    },
	    "properties": {
	    "stop_id":"11550",
	    "stop_name":"PAWTUCKET AT BAYVIEW SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396096,41.789667 ]
	    },
	    "properties": {
	    "stop_id":"11555",
	    "stop_name":"ALLENS AT 934 ALLENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459942,41.789832 ]
	    },
	    "properties": {
	    "stop_id":"11570",
	    "stop_name":"CRANSTON FS FLORIDA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403085,41.790143 ]
	    },
	    "properties": {
	    "stop_id":"11575",
	    "stop_name":"EDDY BETWEEN CAROLINA & NEW YORK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46045,41.790013 ]
	    },
	    "properties": {
	    "stop_id":"11590",
	    "stop_name":"CRANSTON OPP FLORIDA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456549,41.790502 ]
	    },
	    "properties": {
	    "stop_id":"11610",
	    "stop_name":"CRANSTON NS DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456557,41.790429 ]
	    },
	    "properties": {
	    "stop_id":"11615",
	    "stop_name":"CRANSTON NS BYRON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501118,41.789674 ]
	    },
	    "properties": {
	    "stop_id":"11620",
	    "stop_name":"PLAINFIELD NS INDEPENDENCE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454114,41.790749 ]
	    },
	    "properties": {
	    "stop_id":"11650",
	    "stop_name":"CRANSTON NS VICTORIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429027,41.790413 ]
	    },
	    "properties": {
	    "stop_id":"11655",
	    "stop_name":"RESERVOIR OPP DELMAR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453,41.790909 ]
	    },
	    "properties": {
	    "stop_id":"11660",
	    "stop_name":"CRANSTON NS STANDISH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453278,41.790766 ]
	    },
	    "properties": {
	    "stop_id":"11670",
	    "stop_name":"CRANSTON NS STANDISH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39683,41.791906 ]
	    },
	    "properties": {
	    "stop_id":"11680",
	    "stop_name":"ALLENS NS GEORGIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452052,41.791463 ]
	    },
	    "properties": {
	    "stop_id":"11695",
	    "stop_name":"CRANSTON NS GANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356338,41.790121 ]
	    },
	    "properties": {
	    "stop_id":"11700",
	    "stop_name":"CITIZENS OPERATIONS CTR - E PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.344402,41.791481 ]
	    },
	    "properties": {
	    "stop_id":"11715",
	    "stop_name":"WAMPANOAG OPP GATES OF HEAVEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396178,41.789285 ]
	    },
	    "properties": {
	    "stop_id":"11720",
	    "stop_name":"ALLENS FS CALIFORNIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422788,41.792051 ]
	    },
	    "properties": {
	    "stop_id":"11725",
	    "stop_name":"ELMWOOD OPP RIPTA HQ"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.496822,41.791098 ]
	    },
	    "properties": {
	    "stop_id":"11730",
	    "stop_name":"PLAINFIELD FS NARDOLILLO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.496814,41.79101 ]
	    },
	    "properties": {
	    "stop_id":"11735",
	    "stop_name":"PLAINFIELD OPP NARDOLILLO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422911,41.79186 ]
	    },
	    "properties": {
	    "stop_id":"11740",
	    "stop_name":"ELMWOOD OPP THACKERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451882,41.791435 ]
	    },
	    "properties": {
	    "stop_id":"11745",
	    "stop_name":"CRANSTON AT 1260 CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494008,41.791482 ]
	    },
	    "properties": {
	    "stop_id":"11750",
	    "stop_name":"PLAINFIELD FS CLAIBORNE PELL MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489921,41.791451 ]
	    },
	    "properties": {
	    "stop_id":"11760",
	    "stop_name":"PLAINFIELD FS PLAINFIELD CIR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365686,41.791767 ]
	    },
	    "properties": {
	    "stop_id":"11770",
	    "stop_name":"PAWTUCKET NS BOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49178,41.791554 ]
	    },
	    "properties": {
	    "stop_id":"11775",
	    "stop_name":"PLAINFIELD FS BLUE JAY WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427989,41.791778 ]
	    },
	    "properties": {
	    "stop_id":"11780",
	    "stop_name":"RESERVOIR FS ARDOENE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403495,41.791868 ]
	    },
	    "properties": {
	    "stop_id":"11810",
	    "stop_name":"EDDY BETWEEN CHAPMAN & TORONTO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354429,41.791094 ]
	    },
	    "properties": {
	    "stop_id":"11815",
	    "stop_name":"CITIZENS WAY NS TRIPPS LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.336213,41.791103 ]
	    },
	    "properties": {
	    "stop_id":"11820",
	    "stop_name":"WAMPANOAG AT 610 WAMPANOAG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354289,41.79134 ]
	    },
	    "properties": {
	    "stop_id":"11825",
	    "stop_name":"TRIPPS LN NS ORCHARD VIEW MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428113,41.791913 ]
	    },
	    "properties": {
	    "stop_id":"11835",
	    "stop_name":"RESERVOIR NS ARDOENE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451251,41.792529 ]
	    },
	    "properties": {
	    "stop_id":"11840",
	    "stop_name":"CRANSTON FS HOWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365233,41.792408 ]
	    },
	    "properties": {
	    "stop_id":"11860",
	    "stop_name":"PAWTUCKET AT 3044 PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488421,41.792526 ]
	    },
	    "properties": {
	    "stop_id":"11865",
	    "stop_name":"PLAINFIELD FS PEZZULO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397217,41.792374 ]
	    },
	    "properties": {
	    "stop_id":"11870",
	    "stop_name":"ALLENS NS GEORGIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353956,41.792115 ]
	    },
	    "properties": {
	    "stop_id":"11875",
	    "stop_name":"TRIPPS LN OPP MADELINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40721,41.792248 ]
	    },
	    "properties": {
	    "stop_id":"11880",
	    "stop_name":"ROGER WILLIAMS PARK (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451188,41.792959 ]
	    },
	    "properties": {
	    "stop_id":"11885",
	    "stop_name":"CRANSTON NS PURITAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408311,41.792973 ]
	    },
	    "properties": {
	    "stop_id":"11890",
	    "stop_name":"ROGER WILLIAMS PARK (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423731,41.793371 ]
	    },
	    "properties": {
	    "stop_id":"11900",
	    "stop_name":"ELMWOOD OPP WARRINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486798,41.793702 ]
	    },
	    "properties": {
	    "stop_id":"11910",
	    "stop_name":"PLAINFIELD AT 1469 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423633,41.793509 ]
	    },
	    "properties": {
	    "stop_id":"11925",
	    "stop_name":"ELMWOOD FS WARRINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.344223,41.791919 ]
	    },
	    "properties": {
	    "stop_id":"11930",
	    "stop_name":"WAMPANOAG AT GATES OF HEAVEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404099,41.79339 ]
	    },
	    "properties": {
	    "stop_id":"11945",
	    "stop_name":"EDDY NS JOHNSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486724,41.793604 ]
	    },
	    "properties": {
	    "stop_id":"11950",
	    "stop_name":"PLAINFIELD AT YEOMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426624,41.794317 ]
	    },
	    "properties": {
	    "stop_id":"11960",
	    "stop_name":"RESERVOIR FS NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427014,41.793697 ]
	    },
	    "properties": {
	    "stop_id":"11965",
	    "stop_name":"RESERVOIR NS ALGONQUIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353347,41.794193 ]
	    },
	    "properties": {
	    "stop_id":"11970",
	    "stop_name":"TRIPPS LN AT 15 TRIPPS LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397702,41.79395 ]
	    },
	    "properties": {
	    "stop_id":"11975",
	    "stop_name":"ALLENS NS BAKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.416191,41.794165 ]
	    },
	    "properties": {
	    "stop_id":"11985",
	    "stop_name":"CADILLAC OPP RODMAN (COLONY HOUSE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450399,41.794085 ]
	    },
	    "properties": {
	    "stop_id":"11990",
	    "stop_name":"CRANSTON OPP BURNHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364684,41.79412 ]
	    },
	    "properties": {
	    "stop_id":"12005",
	    "stop_name":"PAWTUCKET OPP MOUNTAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353405,41.794662 ]
	    },
	    "properties": {
	    "stop_id":"12015",
	    "stop_name":"TRIPPS LN OPP CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364651,41.794619 ]
	    },
	    "properties": {
	    "stop_id":"12020",
	    "stop_name":"PAWTUCKET NS MOUNTAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410082,41.794612 ]
	    },
	    "properties": {
	    "stop_id":"12045",
	    "stop_name":"BROAD AT PRAIRIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397665,41.794334 ]
	    },
	    "properties": {
	    "stop_id":"12050",
	    "stop_name":"ALLENS OPP ELLENFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39822,41.795271 ]
	    },
	    "properties": {
	    "stop_id":"12055",
	    "stop_name":"ALLENS NS ERNEST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449655,41.795076 ]
	    },
	    "properties": {
	    "stop_id":"12065",
	    "stop_name":"CRANSTON OPP 1141 CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411875,41.79591 ]
	    },
	    "properties": {
	    "stop_id":"12070",
	    "stop_name":"EARLY STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483732,41.795452 ]
	    },
	    "properties": {
	    "stop_id":"12075",
	    "stop_name":"PLAINFIELD OPP MILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424775,41.795236 ]
	    },
	    "properties": {
	    "stop_id":"12090",
	    "stop_name":"ELMWOOD OPP LENOX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452884,41.795443 ]
	    },
	    "properties": {
	    "stop_id":"12095",
	    "stop_name":"CHESTNUT HILL FS LAUREL HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424457,41.795032 ]
	    },
	    "properties": {
	    "stop_id":"12105",
	    "stop_name":"ELMWOOD NS LENOX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352944,41.795715 ]
	    },
	    "properties": {
	    "stop_id":"12110",
	    "stop_name":"TRIPPS LN NS WAMPANOAG TRAIL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353166,41.795579 ]
	    },
	    "properties": {
	    "stop_id":"12115",
	    "stop_name":"TRIPPS LN FS WAMPANOAG TRAIL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457319,41.795706 ]
	    },
	    "properties": {
	    "stop_id":"12120",
	    "stop_name":"DYER NS CHESTNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457567,41.795912 ]
	    },
	    "properties": {
	    "stop_id":"12125",
	    "stop_name":"DYER OPP CHESTNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411475,41.795695 ]
	    },
	    "properties": {
	    "stop_id":"12135",
	    "stop_name":"BROAD FS EARLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449511,41.795713 ]
	    },
	    "properties": {
	    "stop_id":"12140",
	    "stop_name":"CRANSTON FS SENECA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426094,41.796895 ]
	    },
	    "properties": {
	    "stop_id":"12150",
	    "stop_name":"RESERVOIR AT ONE RESERVOIR AVENUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425953,41.796262 ]
	    },
	    "properties": {
	    "stop_id":"12155",
	    "stop_name":"RESERVOIR FS ADELAIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45254,41.796106 ]
	    },
	    "properties": {
	    "stop_id":"12165",
	    "stop_name":"LAUREL HILL NS LOOKOUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448413,41.797367 ]
	    },
	    "properties": {
	    "stop_id":"12170",
	    "stop_name":"CRANSTON AT 1070 CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455352,41.796028 ]
	    },
	    "properties": {
	    "stop_id":"12180",
	    "stop_name":"CHESTNUT HILL AT 122 CHESTNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483153,41.795865 ]
	    },
	    "properties": {
	    "stop_id":"12185",
	    "stop_name":"PLAINFIELD FS ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482101,41.796183 ]
	    },
	    "properties": {
	    "stop_id":"12210",
	    "stop_name":"PLAINFIELD NS CLEMENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363978,41.796186 ]
	    },
	    "properties": {
	    "stop_id":"12230",
	    "stop_name":"PAWTUCKET NS IVAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42933,41.795244 ]
	    },
	    "properties": {
	    "stop_id":"12245",
	    "stop_name":"ALVAREZ SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425474,41.796616 ]
	    },
	    "properties": {
	    "stop_id":"12265",
	    "stop_name":"ELMWOOD NS ATLANTIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480483,41.796639 ]
	    },
	    "properties": {
	    "stop_id":"12275",
	    "stop_name":"PLAINFIELD AT 1350 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479772,41.796928 ]
	    },
	    "properties": {
	    "stop_id":"12320",
	    "stop_name":"PLAINFIELD OPP FLETCHER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398597,41.796985 ]
	    },
	    "properties": {
	    "stop_id":"12325",
	    "stop_name":"ALLENS FS 642 ALLENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400451,41.80056 ]
	    },
	    "properties": {
	    "stop_id":"12335",
	    "stop_name":"ALLENS OPP I-95N ON RAMP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478887,41.79729 ]
	    },
	    "properties": {
	    "stop_id":"12355",
	    "stop_name":"PLAINFIELD OPP SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363713,41.797494 ]
	    },
	    "properties": {
	    "stop_id":"12365",
	    "stop_name":"PAWTUCKET NS HEATH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405053,41.797295 ]
	    },
	    "properties": {
	    "stop_id":"12370",
	    "stop_name":"EDDY NS PAVILION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405205,41.797334 ]
	    },
	    "properties": {
	    "stop_id":"12385",
	    "stop_name":"EDDY FS PAVILION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457671,41.797626 ]
	    },
	    "properties": {
	    "stop_id":"12395",
	    "stop_name":"DYER AT 562 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425834,41.797604 ]
	    },
	    "properties": {
	    "stop_id":"12400",
	    "stop_name":"ELMWOOD NS ONTARIO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4578,41.79775 ]
	    },
	    "properties": {
	    "stop_id":"12410",
	    "stop_name":"DYER AT 565 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448587,41.797434 ]
	    },
	    "properties": {
	    "stop_id":"12415",
	    "stop_name":"CRANSTON FS DOVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363434,41.79773 ]
	    },
	    "properties": {
	    "stop_id":"12435",
	    "stop_name":"PAWTUCKET NS WAMPANOAG TRL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475836,41.798046 ]
	    },
	    "properties": {
	    "stop_id":"12450",
	    "stop_name":"PLAINFIELD AT 1244 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47596,41.798144 ]
	    },
	    "properties": {
	    "stop_id":"12475",
	    "stop_name":"PLAINFIELD NS POCASSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414778,41.798394 ]
	    },
	    "properties": {
	    "stop_id":"12480",
	    "stop_name":"THURBERS AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405528,41.799083 ]
	    },
	    "properties": {
	    "stop_id":"12495",
	    "stop_name":"EDDY OPP APPLEGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405678,41.799188 ]
	    },
	    "properties": {
	    "stop_id":"12500",
	    "stop_name":"EDDY NS APPLEGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457947,41.798721 ]
	    },
	    "properties": {
	    "stop_id":"12545",
	    "stop_name":"DYER OPP ELWYN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452277,41.798532 ]
	    },
	    "properties": {
	    "stop_id":"12560",
	    "stop_name":"LAUREL HILL FS ELWYN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40102,41.801888 ]
	    },
	    "properties": {
	    "stop_id":"12570",
	    "stop_name":"ALLENS AT LEHIGH METALS CORP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473367,41.798657 ]
	    },
	    "properties": {
	    "stop_id":"12575",
	    "stop_name":"PLAINFIELD AT 1192 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443918,41.795586 ]
	    },
	    "properties": {
	    "stop_id":"12580",
	    "stop_name":"GARFIELD AVE AT STOP & SHOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441739,41.800858 ]
	    },
	    "properties": {
	    "stop_id":"12581",
	    "stop_name":"GARFIELD NS GIBBS PKING LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444103,41.795793 ]
	    },
	    "properties": {
	    "stop_id":"12582",
	    "stop_name":"GARFIELD AVE AT LOWES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414635,41.798155 ]
	    },
	    "properties": {
	    "stop_id":"12590",
	    "stop_name":"THURBERS AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.362926,41.799178 ]
	    },
	    "properties": {
	    "stop_id":"12605",
	    "stop_name":"PAWTUCKET OPP VINCENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42633,41.799313 ]
	    },
	    "properties": {
	    "stop_id":"12625",
	    "stop_name":"ELMWOOD OPP REDWING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363072,41.799153 ]
	    },
	    "properties": {
	    "stop_id":"12630",
	    "stop_name":"PAWTUCKET NS VINCENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412233,41.799406 ]
	    },
	    "properties": {
	    "stop_id":"12635",
	    "stop_name":"PRAIRIE FS COLFAX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447661,41.799234 ]
	    },
	    "properties": {
	    "stop_id":"12645",
	    "stop_name":"CRANSTON FS MCCABE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472077,41.799552 ]
	    },
	    "properties": {
	    "stop_id":"12660",
	    "stop_name":"PLAINFIELD FS STIMPSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446954,41.799857 ]
	    },
	    "properties": {
	    "stop_id":"12670",
	    "stop_name":"CRANSTON OPP BIRCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405954,41.800199 ]
	    },
	    "properties": {
	    "stop_id":"12680",
	    "stop_name":"EDDY NS THURBERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452296,41.799644 ]
	    },
	    "properties": {
	    "stop_id":"12685",
	    "stop_name":"LAUREL HILL FS GLADSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405944,41.80067 ]
	    },
	    "properties": {
	    "stop_id":"12690",
	    "stop_name":"EDDY FS THURBERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446991,41.800111 ]
	    },
	    "properties": {
	    "stop_id":"12695",
	    "stop_name":"CRANSTON NS BIRCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417112,41.800125 ]
	    },
	    "properties": {
	    "stop_id":"12720",
	    "stop_name":"ONTARIO STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412133,41.799416 ]
	    },
	    "properties": {
	    "stop_id":"12725",
	    "stop_name":"PRAIRIE NS COLFAX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452139,41.800281 ]
	    },
	    "properties": {
	    "stop_id":"12735",
	    "stop_name":"LAUREL HILL NS ARGYLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441511,41.800871 ]
	    },
	    "properties": {
	    "stop_id":"12750",
	    "stop_name":"GARFIELD OPP SANFORD BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441904,41.802491 ]
	    },
	    "properties": {
	    "stop_id":"12760",
	    "stop_name":"GARFIELD FS CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442373,41.803025 ]
	    },
	    "properties": {
	    "stop_id":"12763",
	    "stop_name":"CRANSTON OPP GARFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417589,41.800621 ]
	    },
	    "properties": {
	    "stop_id":"12770",
	    "stop_name":"ONTARIO STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.470076,41.800672 ]
	    },
	    "properties": {
	    "stop_id":"12775",
	    "stop_name":"PLAINFIELD AT EVANS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452015,41.801306 ]
	    },
	    "properties": {
	    "stop_id":"12795",
	    "stop_name":"LAUREL HILL FS WALES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426316,41.801019 ]
	    },
	    "properties": {
	    "stop_id":"12800",
	    "stop_name":"ELMWOOD OPP HAWTHORNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452132,41.801522 ]
	    },
	    "properties": {
	    "stop_id":"12805",
	    "stop_name":"LAUREL HILL FS BRACKEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445533,41.801453 ]
	    },
	    "properties": {
	    "stop_id":"12815",
	    "stop_name":"CRANSTON FS WHIPPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36207,41.801658 ]
	    },
	    "properties": {
	    "stop_id":"12820",
	    "stop_name":"PAWTUCKET FS HOWLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458355,41.801704 ]
	    },
	    "properties": {
	    "stop_id":"12850",
	    "stop_name":"DYER OPP 448 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445526,41.80167 ]
	    },
	    "properties": {
	    "stop_id":"12855",
	    "stop_name":"CRANSTON FS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413219,41.801901 ]
	    },
	    "properties": {
	    "stop_id":"12860",
	    "stop_name":"PRAIRIE FS OXFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.362073,41.801931 ]
	    },
	    "properties": {
	    "stop_id":"12885",
	    "stop_name":"PAWTUCKET NS UNITY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469323,41.80206 ]
	    },
	    "properties": {
	    "stop_id":"12895",
	    "stop_name":"PLAINFIELD FS MORGAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401741,41.803494 ]
	    },
	    "properties": {
	    "stop_id":"12905",
	    "stop_name":"ALLENS NS WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400272,41.800844 ]
	    },
	    "properties": {
	    "stop_id":"12910",
	    "stop_name":"ALLENS AT I-95N ON RAMP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46898,41.802245 ]
	    },
	    "properties": {
	    "stop_id":"12915",
	    "stop_name":"PLAINFIELD OPP MORGAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406597,41.802396 ]
	    },
	    "properties": {
	    "stop_id":"12930",
	    "stop_name":"EDDY FS ASHMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40639,41.802353 ]
	    },
	    "properties": {
	    "stop_id":"12935",
	    "stop_name":"EDDY OPP ASHMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452027,41.803201 ]
	    },
	    "properties": {
	    "stop_id":"12950",
	    "stop_name":"LAUREL HILL FS MAPLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.3741,41.802889 ]
	    },
	    "properties": {
	    "stop_id":"12960",
	    "stop_name":"S BROADWAY OPP MARTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451955,41.80302 ]
	    },
	    "properties": {
	    "stop_id":"12965",
	    "stop_name":"LAUREL HILL FS HEATHER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442741,41.802805 ]
	    },
	    "properties": {
	    "stop_id":"12995",
	    "stop_name":"CRANSTON NS GARFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440087,41.803322 ]
	    },
	    "properties": {
	    "stop_id":"13025",
	    "stop_name":"CRANSTON FS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425915,41.80327 ]
	    },
	    "properties": {
	    "stop_id":"13035",
	    "stop_name":"ELMWOOD NS BURNETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425615,41.803575 ]
	    },
	    "properties": {
	    "stop_id":"13050",
	    "stop_name":"ELMWOOD AT MAWNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413975,41.80376 ]
	    },
	    "properties": {
	    "stop_id":"13060",
	    "stop_name":"PRAIRIE AT 384 PRAIRIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414088,41.803738 ]
	    },
	    "properties": {
	    "stop_id":"13075",
	    "stop_name":"PRAIRIE FS POTTERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.343008,41.803879 ]
	    },
	    "properties": {
	    "stop_id":"13080",
	    "stop_name":"CATAMORE NS JORDAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419327,41.804199 ]
	    },
	    "properties": {
	    "stop_id":"13085",
	    "stop_name":"PUBLIC STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.344855,41.80397 ]
	    },
	    "properties": {
	    "stop_id":"13095",
	    "stop_name":"EVERGREEN FS JORDAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361246,41.803833 ]
	    },
	    "properties": {
	    "stop_id":"13100",
	    "stop_name":"PAWTUCKET NS WALMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466949,41.804632 ]
	    },
	    "properties": {
	    "stop_id":"13105",
	    "stop_name":"PLAINFIELD OPP 983 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402348,41.804909 ]
	    },
	    "properties": {
	    "stop_id":"13110",
	    "stop_name":"ALLENS AT 307 ALLENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451888,41.804054 ]
	    },
	    "properties": {
	    "stop_id":"13120",
	    "stop_name":"LAUREL HILL NS WAKEFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400865,41.80218 ]
	    },
	    "properties": {
	    "stop_id":"13125",
	    "stop_name":"ALLENS NS LEHIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361387,41.803994 ]
	    },
	    "properties": {
	    "stop_id":"13130",
	    "stop_name":"PAWTUCKET OPP WALMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419455,41.804919 ]
	    },
	    "properties": {
	    "stop_id":"13135",
	    "stop_name":"PUBLIC STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438753,41.804276 ]
	    },
	    "properties": {
	    "stop_id":"13145",
	    "stop_name":"CRANSTON FS ANTHONY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425304,41.804723 ]
	    },
	    "properties": {
	    "stop_id":"13160",
	    "stop_name":"ELMWOOD AT MOORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466664,41.804646 ]
	    },
	    "properties": {
	    "stop_id":"13165",
	    "stop_name":"PLAINFIELD NS COOLIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452037,41.805059 ]
	    },
	    "properties": {
	    "stop_id":"13175",
	    "stop_name":"LAUREL HILL NS FARMINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458218,41.804305 ]
	    },
	    "properties": {
	    "stop_id":"13180",
	    "stop_name":"DYER OPP MICA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373294,41.804984 ]
	    },
	    "properties": {
	    "stop_id":"13225",
	    "stop_name":"S BROADWAY FS RIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37324,41.805508 ]
	    },
	    "properties": {
	    "stop_id":"13235",
	    "stop_name":"S BROADWAY OPP LEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360785,41.805683 ]
	    },
	    "properties": {
	    "stop_id":"13240",
	    "stop_name":"PAWTUCKET NS BRIGHTRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414616,41.805225 ]
	    },
	    "properties": {
	    "stop_id":"13245",
	    "stop_name":"PRAIRIE AT SARATOGA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407118,41.805486 ]
	    },
	    "properties": {
	    "stop_id":"13250",
	    "stop_name":"EDDY FS SHERBURNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36055,41.805916 ]
	    },
	    "properties": {
	    "stop_id":"13265",
	    "stop_name":"PAWTUCKET NS GARDINER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437373,41.805457 ]
	    },
	    "properties": {
	    "stop_id":"13270",
	    "stop_name":"CRANSTON NS BENEDICT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436928,41.805672 ]
	    },
	    "properties": {
	    "stop_id":"13290",
	    "stop_name":"CRANSTON NS WADSWORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465501,41.805528 ]
	    },
	    "properties": {
	    "stop_id":"13295",
	    "stop_name":"PLAINFIELD OPP 928 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457618,41.805593 ]
	    },
	    "properties": {
	    "stop_id":"13310",
	    "stop_name":"POCASSET NS ALTO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407087,41.80474 ]
	    },
	    "properties": {
	    "stop_id":"13340",
	    "stop_name":"EDDY FS TRASK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451876,41.806311 ]
	    },
	    "properties": {
	    "stop_id":"13345",
	    "stop_name":"UNION AT 429 UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450046,41.806285 ]
	    },
	    "properties": {
	    "stop_id":"13355",
	    "stop_name":"UNION NS TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452174,41.805877 ]
	    },
	    "properties": {
	    "stop_id":"13360",
	    "stop_name":"LAUREL HILL NS UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450167,41.806182 ]
	    },
	    "properties": {
	    "stop_id":"13365",
	    "stop_name":"UNION NS TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457106,41.806442 ]
	    },
	    "properties": {
	    "stop_id":"13370",
	    "stop_name":"POCASSET NS UNION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420772,41.809151 ]
	    },
	    "properties": {
	    "stop_id":"13385",
	    "stop_name":"PARKIS AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42475,41.807089 ]
	    },
	    "properties": {
	    "stop_id":"13405",
	    "stop_name":"ELMWOOD NS PLENTY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447699,41.806766 ]
	    },
	    "properties": {
	    "stop_id":"13415",
	    "stop_name":"UNION NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447386,41.806914 ]
	    },
	    "properties": {
	    "stop_id":"13425",
	    "stop_name":"UNION NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401474,41.8035 ]
	    },
	    "properties": {
	    "stop_id":"13430",
	    "stop_name":"ALLENS FS WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372493,41.807274 ]
	    },
	    "properties": {
	    "stop_id":"13435",
	    "stop_name":"S BROADWAY OPP 1253 S BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46413,41.80694 ]
	    },
	    "properties": {
	    "stop_id":"13450",
	    "stop_name":"PLAINFIELD NS FARMINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420011,41.806588 ]
	    },
	    "properties": {
	    "stop_id":"13455",
	    "stop_name":"PLENTY STREET - SAINT JOSEPH'S HOSPITAL (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372641,41.807195 ]
	    },
	    "properties": {
	    "stop_id":"13460",
	    "stop_name":"S BROADWAY FS SETH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435477,41.807254 ]
	    },
	    "properties": {
	    "stop_id":"13470",
	    "stop_name":"CRANSTON FS LINWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435524,41.807316 ]
	    },
	    "properties": {
	    "stop_id":"13475",
	    "stop_name":"CRANSTON NS LINWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445845,41.807256 ]
	    },
	    "properties": {
	    "stop_id":"13480",
	    "stop_name":"UNION OPP PRISCILLA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403527,41.807548 ]
	    },
	    "properties": {
	    "stop_id":"13485",
	    "stop_name":"ALLENS NS CHEATERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407268,41.807605 ]
	    },
	    "properties": {
	    "stop_id":"13495",
	    "stop_name":"EDDY NS PUBLIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406924,41.807479 ]
	    },
	    "properties": {
	    "stop_id":"13500",
	    "stop_name":"PUBLIC NS EDDY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445713,41.807379 ]
	    },
	    "properties": {
	    "stop_id":"13505",
	    "stop_name":"UNION NS PRISCILLA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.341934,41.807772 ]
	    },
	    "properties": {
	    "stop_id":"13515",
	    "stop_name":"WARREN FS HIGHLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456358,41.807621 ]
	    },
	    "properties": {
	    "stop_id":"13525",
	    "stop_name":"POCASSET NS SOPHIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.342212,41.807773 ]
	    },
	    "properties": {
	    "stop_id":"13535",
	    "stop_name":"WARREN NS HIGHLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412881,41.807713 ]
	    },
	    "properties": {
	    "stop_id":"13550",
	    "stop_name":"CCRI (PROVIDENCE CAMPUS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456389,41.807373 ]
	    },
	    "properties": {
	    "stop_id":"13555",
	    "stop_name":"POCASSET OPP SOPHIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403114,41.807239 ]
	    },
	    "properties": {
	    "stop_id":"13565",
	    "stop_name":"ALLENS OPP 253 ALLENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463385,41.808222 ]
	    },
	    "properties": {
	    "stop_id":"13575",
	    "stop_name":"PLAINFIELD OPP 861 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442975,41.808006 ]
	    },
	    "properties": {
	    "stop_id":"13585",
	    "stop_name":"UNION OPP CUMERFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359835,41.807923 ]
	    },
	    "properties": {
	    "stop_id":"13595",
	    "stop_name":"PAWTUCKET NS RICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359956,41.808174 ]
	    },
	    "properties": {
	    "stop_id":"13600",
	    "stop_name":"PAWTUCKET NS HILLSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442276,41.808316 ]
	    },
	    "properties": {
	    "stop_id":"13610",
	    "stop_name":"UNION NS ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372187,41.80855 ]
	    },
	    "properties": {
	    "stop_id":"13620",
	    "stop_name":"S BROADWAY FS FORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434516,41.808463 ]
	    },
	    "properties": {
	    "stop_id":"13635",
	    "stop_name":"CRANSTON NS WAVERLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372168,41.808281 ]
	    },
	    "properties": {
	    "stop_id":"13645",
	    "stop_name":"S BROADWAY OPP 1149 S BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411755,41.808646 ]
	    },
	    "properties": {
	    "stop_id":"13650",
	    "stop_name":"STANIFORD NS WILLARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455476,41.808845 ]
	    },
	    "properties": {
	    "stop_id":"13665",
	    "stop_name":"POCASSET OPP WESTERLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434045,41.808843 ]
	    },
	    "properties": {
	    "stop_id":"13685",
	    "stop_name":"CRANSTON NS BELLVUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439278,41.808999 ]
	    },
	    "properties": {
	    "stop_id":"13695",
	    "stop_name":"UNION FS LINWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439533,41.809027 ]
	    },
	    "properties": {
	    "stop_id":"13700",
	    "stop_name":"UNION OPP LINWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.341579,41.808921 ]
	    },
	    "properties": {
	    "stop_id":"13705",
	    "stop_name":"WATERMAN OPP STATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420871,41.809033 ]
	    },
	    "properties": {
	    "stop_id":"13710",
	    "stop_name":"PARKIS AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.341738,41.809076 ]
	    },
	    "properties": {
	    "stop_id":"13715",
	    "stop_name":"WATERMAN FS STATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455093,41.809133 ]
	    },
	    "properties": {
	    "stop_id":"13735",
	    "stop_name":"POCASSET OPP DANIEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359261,41.810115 ]
	    },
	    "properties": {
	    "stop_id":"13765",
	    "stop_name":"PAWTUCKET OPP BALDWIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.343842,41.809778 ]
	    },
	    "properties": {
	    "stop_id":"13770",
	    "stop_name":"WATERMAN OPP 990 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423752,41.810158 ]
	    },
	    "properties": {
	    "stop_id":"13795",
	    "stop_name":"ELMWOOD FS W. FRIENDSHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438424,41.809927 ]
	    },
	    "properties": {
	    "stop_id":"13805",
	    "stop_name":"ELLERY NS WAVERLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463352,41.808629 ]
	    },
	    "properties": {
	    "stop_id":"13825",
	    "stop_name":"PLAINFIELD AT 825 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407272,41.810248 ]
	    },
	    "properties": {
	    "stop_id":"13830",
	    "stop_name":"EDDY NS BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407147,41.809932 ]
	    },
	    "properties": {
	    "stop_id":"13835",
	    "stop_name":"EDDY NS BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432991,41.810143 ]
	    },
	    "properties": {
	    "stop_id":"13840",
	    "stop_name":"CRANSTON NS FORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412821,41.809862 ]
	    },
	    "properties": {
	    "stop_id":"13850",
	    "stop_name":"GAY NS DUDLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454263,41.810392 ]
	    },
	    "properties": {
	    "stop_id":"13855",
	    "stop_name":"POSCASSET OPP BARROWS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432698,41.810344 ]
	    },
	    "properties": {
	    "stop_id":"13860",
	    "stop_name":"CRANSTON NS SUPERIOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.34438,41.810119 ]
	    },
	    "properties": {
	    "stop_id":"13865",
	    "stop_name":"WATERMAN OPP 991 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43821,41.810338 ]
	    },
	    "properties": {
	    "stop_id":"13870",
	    "stop_name":"ELLERY NS ROSEDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453906,41.81094 ]
	    },
	    "properties": {
	    "stop_id":"13880",
	    "stop_name":"POCASSET NS LAUREL HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423075,41.811208 ]
	    },
	    "properties": {
	    "stop_id":"13885",
	    "stop_name":"ELMWOOD OPP WILSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432132,41.81095 ]
	    },
	    "properties": {
	    "stop_id":"13895",
	    "stop_name":"CRANSTON OPP HOLLIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.358924,41.810603 ]
	    },
	    "properties": {
	    "stop_id":"13900",
	    "stop_name":"PAWTUCKET NS WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.358543,41.811621 ]
	    },
	    "properties": {
	    "stop_id":"13902",
	    "stop_name":"PAWTUCKET FS WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.358835,41.811674 ]
	    },
	    "properties": {
	    "stop_id":"13903",
	    "stop_name":"PAWTUCKET NS WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347138,41.811061 ]
	    },
	    "properties": {
	    "stop_id":"13905",
	    "stop_name":"WATERMAN FS ROCKAWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452779,41.811143 ]
	    },
	    "properties": {
	    "stop_id":"13915",
	    "stop_name":"POCASSET AT 128 POCASSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.346566,41.810947 ]
	    },
	    "properties": {
	    "stop_id":"13920",
	    "stop_name":"WATERMAN AT 900 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462464,41.810247 ]
	    },
	    "properties": {
	    "stop_id":"13945",
	    "stop_name":"PLAINFIELD OPP 752 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349166,41.812134 ]
	    },
	    "properties": {
	    "stop_id":"13960",
	    "stop_name":"WATERMAN AT 865 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438074,41.811966 ]
	    },
	    "properties": {
	    "stop_id":"14000",
	    "stop_name":"CHAPIN NS ELLERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406978,41.812032 ]
	    },
	    "properties": {
	    "stop_id":"14005",
	    "stop_name":"EDDY OPP RHODE ISLAND HOSPITAL ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408833,41.811741 ]
	    },
	    "properties": {
	    "stop_id":"14010",
	    "stop_name":"RHODE ISLAND HOSPITAL (FRONT DOOR)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431153,41.811763 ]
	    },
	    "properties": {
	    "stop_id":"14015",
	    "stop_name":"CRANSTON NS CHAPIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435778,41.811765 ]
	    },
	    "properties": {
	    "stop_id":"14025",
	    "stop_name":"CHAPIN NS MESSER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431544,41.81196 ]
	    },
	    "properties": {
	    "stop_id":"14030",
	    "stop_name":"CHAPIN FS PARADE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40713,41.811967 ]
	    },
	    "properties": {
	    "stop_id":"14035",
	    "stop_name":"EDDY FS BORDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43448,41.811829 ]
	    },
	    "properties": {
	    "stop_id":"14040",
	    "stop_name":"CHAPIN OPP SYCAMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434478,41.811925 ]
	    },
	    "properties": {
	    "stop_id":"14055",
	    "stop_name":"CHAPIN FS SYCAMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431541,41.811885 ]
	    },
	    "properties": {
	    "stop_id":"14060",
	    "stop_name":"CHAPIN NS PARADE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450322,41.81177 ]
	    },
	    "properties": {
	    "stop_id":"14070",
	    "stop_name":"POCASSET NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430928,41.812058 ]
	    },
	    "properties": {
	    "stop_id":"14105",
	    "stop_name":"CRANSTON NS PARADE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460957,41.812396 ]
	    },
	    "properties": {
	    "stop_id":"14120",
	    "stop_name":"PLAINFIELD OPP SANFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422221,41.812445 ]
	    },
	    "properties": {
	    "stop_id":"14125",
	    "stop_name":"ELMWOOD NS BRIDGHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460281,41.812355 ]
	    },
	    "properties": {
	    "stop_id":"14130",
	    "stop_name":"PLAINFIELD NS DANIEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.34963,41.81252 ]
	    },
	    "properties": {
	    "stop_id":"14135",
	    "stop_name":"WATERMAN NS COMMERCIAL WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422375,41.812529 ]
	    },
	    "properties": {
	    "stop_id":"14140",
	    "stop_name":"ELMWOOD FS BRIDGHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349748,41.812847 ]
	    },
	    "properties": {
	    "stop_id":"14150",
	    "stop_name":"COMMERCIAL WAY NS WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449736,41.812302 ]
	    },
	    "properties": {
	    "stop_id":"14155",
	    "stop_name":"POCASSET NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449389,41.812436 ]
	    },
	    "properties": {
	    "stop_id":"14160",
	    "stop_name":"POCASSET OPP DUNFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429919,41.812525 ]
	    },
	    "properties": {
	    "stop_id":"14175",
	    "stop_name":"CRANSTON FS DEXTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457673,41.812829 ]
	    },
	    "properties": {
	    "stop_id":"14205",
	    "stop_name":"PLAINFIELD OPP MERINO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41512,41.81293 ]
	    },
	    "properties": {
	    "stop_id":"14210",
	    "stop_name":"PRAIRIE NS PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347795,41.815669 ]
	    },
	    "properties": {
	    "stop_id":"14220",
	    "stop_name":"COMMERCIAL WAY OPP J MEDERIOS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428786,41.812981 ]
	    },
	    "properties": {
	    "stop_id":"14230",
	    "stop_name":"CRANSTON NS HARRISON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456955,41.813097 ]
	    },
	    "properties": {
	    "stop_id":"14235",
	    "stop_name":"PLAINFIELD AT 549 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428887,41.813018 ]
	    },
	    "properties": {
	    "stop_id":"14255",
	    "stop_name":"CRANSTON OPP HARRISON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454278,41.813287 ]
	    },
	    "properties": {
	    "stop_id":"14300",
	    "stop_name":"PLAINFIELD FS RYE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453266,41.813579 ]
	    },
	    "properties": {
	    "stop_id":"14305",
	    "stop_name":"PLAINFIELD AT 445 PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452358,41.813531 ]
	    },
	    "properties": {
	    "stop_id":"14310",
	    "stop_name":"PLAINFIELD OPP DEWEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.358049,41.812999 ]
	    },
	    "properties": {
	    "stop_id":"14320",
	    "stop_name":"PAWTUCKET OPP 2289 PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35796,41.813987 ]
	    },
	    "properties": {
	    "stop_id":"14330",
	    "stop_name":"PAWTUCKET NS GROSVENOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450968,41.81361 ]
	    },
	    "properties": {
	    "stop_id":"14345",
	    "stop_name":"PLAINFIELD NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447647,41.813941 ]
	    },
	    "properties": {
	    "stop_id":"14350",
	    "stop_name":"POCASSET FS POCASSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450636,41.813759 ]
	    },
	    "properties": {
	    "stop_id":"14355",
	    "stop_name":"PLAINFIELD NS WEBSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447588,41.814089 ]
	    },
	    "properties": {
	    "stop_id":"14360",
	    "stop_name":"PLAINFIELD NS POCASSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421527,41.813509 ]
	    },
	    "properties": {
	    "stop_id":"14365",
	    "stop_name":"TRINITY SQUARE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421667,41.813773 ]
	    },
	    "properties": {
	    "stop_id":"14380",
	    "stop_name":"BROAD OPP SOMERSET (MCDONALDS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427515,41.813761 ]
	    },
	    "properties": {
	    "stop_id":"14385",
	    "stop_name":"CRANSTON FS BRIDGHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348969,41.813942 ]
	    },
	    "properties": {
	    "stop_id":"14395",
	    "stop_name":"COMMERCIAL WAY OPP POLE 4"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371889,41.814053 ]
	    },
	    "properties": {
	    "stop_id":"14415",
	    "stop_name":"WARREN NS FRASER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372559,41.814364 ]
	    },
	    "properties": {
	    "stop_id":"14420",
	    "stop_name":"WARREN NS S SHARON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425921,41.814466 ]
	    },
	    "properties": {
	    "stop_id":"14435",
	    "stop_name":"CRANSTON NS DODGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414069,41.814759 ]
	    },
	    "properties": {
	    "stop_id":"14441",
	    "stop_name":"POINT BETWEEN BEACON & PLAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42589,41.814661 ]
	    },
	    "properties": {
	    "stop_id":"14450",
	    "stop_name":"CRANSTON OPP DODGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374109,41.814765 ]
	    },
	    "properties": {
	    "stop_id":"14460",
	    "stop_name":"WARREN NS BERKELEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374393,41.814951 ]
	    },
	    "properties": {
	    "stop_id":"14465",
	    "stop_name":"WARREN  NS CARPENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446447,41.814851 ]
	    },
	    "properties": {
	    "stop_id":"14470",
	    "stop_name":"PLAINFIELD NS PILSUDSKI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422399,41.817075 ]
	    },
	    "properties": {
	    "stop_id":"14475",
	    "stop_name":"CRANSTON NS WESTMINSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347529,41.818322 ]
	    },
	    "properties": {
	    "stop_id":"14480",
	    "stop_name":"COMMERCIAL WAY FS NES RENTALS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347427,41.815782 ]
	    },
	    "properties": {
	    "stop_id":"14485",
	    "stop_name":"COMMERCIAL WAY FS J MEDERIOS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376591,41.815628 ]
	    },
	    "properties": {
	    "stop_id":"14515",
	    "stop_name":"WARREN NS TENTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420822,41.815197 ]
	    },
	    "properties": {
	    "stop_id":"14520",
	    "stop_name":"BROAD FS LOCKWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376568,41.815713 ]
	    },
	    "properties": {
	    "stop_id":"14525",
	    "stop_name":"WARREN AT 184 WARREN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437746,41.815766 ]
	    },
	    "properties": {
	    "stop_id":"14535",
	    "stop_name":"WESTMINSTER MIDBLOCK RT 10"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437951,41.815878 ]
	    },
	    "properties": {
	    "stop_id":"14540",
	    "stop_name":"WESTMINSTER MIDBLOCK RT 10"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378111,41.816149 ]
	    },
	    "properties": {
	    "stop_id":"14560",
	    "stop_name":"WARREN OPP S PHILLIPS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.357159,41.815481 ]
	    },
	    "properties": {
	    "stop_id":"14575",
	    "stop_name":"PAWTUCKET NS WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440086,41.816214 ]
	    },
	    "properties": {
	    "stop_id":"14580",
	    "stop_name":"WESTMINSTER NS SVC RD 3"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435295,41.816186 ]
	    },
	    "properties": {
	    "stop_id":"14590",
	    "stop_name":"WESTMINSTER NS BAINBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.346487,41.816458 ]
	    },
	    "properties": {
	    "stop_id":"14600",
	    "stop_name":"COMMERCIAL WAY AT 60 COMMERCIAL WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44433,41.816474 ]
	    },
	    "properties": {
	    "stop_id":"14610",
	    "stop_name":"PLAINFIELD OPP DIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433215,41.816356 ]
	    },
	    "properties": {
	    "stop_id":"14615",
	    "stop_name":"WESTMINSTER FS PARADE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356541,41.816824 ]
	    },
	    "properties": {
	    "stop_id":"14620",
	    "stop_name":"PAWTUCKET NS WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356389,41.816907 ]
	    },
	    "properties": {
	    "stop_id":"14625",
	    "stop_name":"PAWTUCKET FS WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378666,41.816458 ]
	    },
	    "properties": {
	    "stop_id":"14630",
	    "stop_name":"WARREN OPP SEVENTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432617,41.816517 ]
	    },
	    "properties": {
	    "stop_id":"14645",
	    "stop_name":"WESTMINSTER FS ALMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431786,41.816516 ]
	    },
	    "properties": {
	    "stop_id":"14650",
	    "stop_name":"WESTMINSTER NS DEXTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442574,41.816644 ]
	    },
	    "properties": {
	    "stop_id":"14655",
	    "stop_name":"WESTMINSTER FS MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379797,41.816709 ]
	    },
	    "properties": {
	    "stop_id":"14660",
	    "stop_name":"WARREN NS SICTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4428,41.816805 ]
	    },
	    "properties": {
	    "stop_id":"14670",
	    "stop_name":"WESTMINSTER NS MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440687,41.816779 ]
	    },
	    "properties": {
	    "stop_id":"14675",
	    "stop_name":"BROADWAY FS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429657,41.816749 ]
	    },
	    "properties": {
	    "stop_id":"14685",
	    "stop_name":"WESTMINSTER NS HAMMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430215,41.816785 ]
	    },
	    "properties": {
	    "stop_id":"14690",
	    "stop_name":"WESTMINSTER OPP HARRISON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44544,41.81692 ]
	    },
	    "properties": {
	    "stop_id":"14700",
	    "stop_name":"HARTFORD FS WESTMINSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440865,41.816938 ]
	    },
	    "properties": {
	    "stop_id":"14715",
	    "stop_name":"BROADWAY NS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406611,41.81624 ]
	    },
	    "properties": {
	    "stop_id":"14720",
	    "stop_name":"EDDY FS POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42779,41.817044 ]
	    },
	    "properties": {
	    "stop_id":"14725",
	    "stop_name":"WESTMINSTER NS BRIDGHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347106,41.817974 ]
	    },
	    "properties": {
	    "stop_id":"14750",
	    "stop_name":"COMMERCIAL WAY AT 70 COMMERCIAL WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4182,41.817503 ]
	    },
	    "properties": {
	    "stop_id":"14760",
	    "stop_name":"CAHIR FS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422604,41.817062 ]
	    },
	    "properties": {
	    "stop_id":"14775",
	    "stop_name":"CRANSTON FS WESTMINSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42618,41.81721 ]
	    },
	    "properties": {
	    "stop_id":"14780",
	    "stop_name":"WESTMINSTER NS KNIGHT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41769,41.817143 ]
	    },
	    "properties": {
	    "stop_id":"14785",
	    "stop_name":"BROAD NS CAHIR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.38098,41.81716 ]
	    },
	    "properties": {
	    "stop_id":"14790",
	    "stop_name":"WARREN OPP POTTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425997,41.817116 ]
	    },
	    "properties": {
	    "stop_id":"14800",
	    "stop_name":"WESTMINSTER OPP KNIGHT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446418,41.816909 ]
	    },
	    "properties": {
	    "stop_id":"14805",
	    "stop_name":"HARTFORD NS POST OFFICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422182,41.817334 ]
	    },
	    "properties": {
	    "stop_id":"14815",
	    "stop_name":"WESTMINSTER FS WINTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417347,41.817128 ]
	    },
	    "properties": {
	    "stop_id":"14825",
	    "stop_name":"BROAD NS SVC RD 7"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446046,41.816926 ]
	    },
	    "properties": {
	    "stop_id":"14830",
	    "stop_name":"HARTFORD OPP POST OFFICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422866,41.817288 ]
	    },
	    "properties": {
	    "stop_id":"14835",
	    "stop_name":"WESTMINSTER NS CRANSTON ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450863,41.817339 ]
	    },
	    "properties": {
	    "stop_id":"14840",
	    "stop_name":"HARTFORD NS ETNA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423302,41.817399 ]
	    },
	    "properties": {
	    "stop_id":"14845",
	    "stop_name":"WESTMINSTER AT CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450732,41.817397 ]
	    },
	    "properties": {
	    "stop_id":"14860",
	    "stop_name":"HARTFORD OPP ETNA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452245,41.817522 ]
	    },
	    "properties": {
	    "stop_id":"14865",
	    "stop_name":"HARTFORD AT 267 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451634,41.817397 ]
	    },
	    "properties": {
	    "stop_id":"14870",
	    "stop_name":"HARTFORD OPP BARRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.34868,41.820324 ]
	    },
	    "properties": {
	    "stop_id":"14875",
	    "stop_name":"COMMERCIAL WAY AT 89 COMMERICAL WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453833,41.817615 ]
	    },
	    "properties": {
	    "stop_id":"14885",
	    "stop_name":"HARTFORD FS BODELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453762,41.817683 ]
	    },
	    "properties": {
	    "stop_id":"14890",
	    "stop_name":"HARTFORD NS BODELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444894,41.818117 ]
	    },
	    "properties": {
	    "stop_id":"14910",
	    "stop_name":"MANTON OPP DELAINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44444,41.81787 ]
	    },
	    "properties": {
	    "stop_id":"14920",
	    "stop_name":"MANTON NS DELAINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421282,41.81782 ]
	    },
	    "properties": {
	    "stop_id":"14925",
	    "stop_name":"WESTMINSTER AT PROVIDENCE SCHOOL DEPT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43657,41.818008 ]
	    },
	    "properties": {
	    "stop_id":"14930",
	    "stop_name":"BROADWAY FS BARTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455281,41.817971 ]
	    },
	    "properties": {
	    "stop_id":"14935",
	    "stop_name":"HARTFORD OPP LAUREL HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436811,41.818148 ]
	    },
	    "properties": {
	    "stop_id":"14940",
	    "stop_name":"BROADWAY NS BARTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348848,41.820285 ]
	    },
	    "properties": {
	    "stop_id":"14945",
	    "stop_name":"COMMERCIAL WAY AT 95 COMMERCIAL WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421032,41.817797 ]
	    },
	    "properties": {
	    "stop_id":"14950",
	    "stop_name":"WESTMINSTER OPP PROV SCHOOL DEPT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415945,41.818274 ]
	    },
	    "properties": {
	    "stop_id":"14965",
	    "stop_name":"BROAD OPP FENNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455688,41.817974 ]
	    },
	    "properties": {
	    "stop_id":"14970",
	    "stop_name":"HARTFORD FS LAUREL HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456736,41.818294 ]
	    },
	    "properties": {
	    "stop_id":"14975",
	    "stop_name":"HARTFORD NS FLOWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457531,41.818354 ]
	    },
	    "properties": {
	    "stop_id":"14985",
	    "stop_name":"HARTFORD NS IDA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435321,41.818357 ]
	    },
	    "properties": {
	    "stop_id":"14995",
	    "stop_name":"BROADWAY NS TOBEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419261,41.818588 ]
	    },
	    "properties": {
	    "stop_id":"15000",
	    "stop_name":"WESTMINSTER NS SVC RD 7"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435333,41.818477 ]
	    },
	    "properties": {
	    "stop_id":"15010",
	    "stop_name":"BROADWAY FS TOBEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457761,41.81846 ]
	    },
	    "properties": {
	    "stop_id":"15015",
	    "stop_name":"HARTFORD NS MATSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459209,41.81862 ]
	    },
	    "properties": {
	    "stop_id":"15020",
	    "stop_name":"HARTFORD NS MERINO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415767,41.818517 ]
	    },
	    "properties": {
	    "stop_id":"15025",
	    "stop_name":"BROAD NS FENNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408142,41.820038 ]
	    },
	    "properties": {
	    "stop_id":"15040",
	    "stop_name":"EDDY NS SHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430609,41.819438 ]
	    },
	    "properties": {
	    "stop_id":"15045",
	    "stop_name":"BROADWAY FS COURTLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459939,41.81877 ]
	    },
	    "properties": {
	    "stop_id":"15050",
	    "stop_name":"HARTFORD OPP 482 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461962,41.819007 ]
	    },
	    "properties": {
	    "stop_id":"15055",
	    "stop_name":"HARTFORD NS PETTEYS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433246,41.818961 ]
	    },
	    "properties": {
	    "stop_id":"15060",
	    "stop_name":"BROADWAY NS ALMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461937,41.819076 ]
	    },
	    "properties": {
	    "stop_id":"15075",
	    "stop_name":"HARTFORD NS BOWLETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463699,41.819251 ]
	    },
	    "properties": {
	    "stop_id":"15080",
	    "stop_name":"HARTFORD NS ELIZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464132,41.819383 ]
	    },
	    "properties": {
	    "stop_id":"15090",
	    "stop_name":"HARTFORD NS OPHELIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475019,41.819279 ]
	    },
	    "properties": {
	    "stop_id":"15100",
	    "stop_name":"HARTFORD NS WINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355933,41.818529 ]
	    },
	    "properties": {
	    "stop_id":"15110",
	    "stop_name":"PAWTUCKET OPP EAST PROVIDENCE HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36681,41.819568 ]
	    },
	    "properties": {
	    "stop_id":"15115",
	    "stop_name":"WATERMAN FS GURNEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356384,41.820568 ]
	    },
	    "properties": {
	    "stop_id":"15120",
	    "stop_name":"PAWTUCKET FS EAST PROVIDENCE HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465607,41.819496 ]
	    },
	    "properties": {
	    "stop_id":"15135",
	    "stop_name":"HARTFORD NS SPRINGFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446089,41.819356 ]
	    },
	    "properties": {
	    "stop_id":"15145",
	    "stop_name":"MANTON NS ALEPPO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379222,41.819685 ]
	    },
	    "properties": {
	    "stop_id":"15150",
	    "stop_name":"TAUNTON FS POTTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363824,41.819445 ]
	    },
	    "properties": {
	    "stop_id":"15180",
	    "stop_name":"HALL AT 56 HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465274,41.819566 ]
	    },
	    "properties": {
	    "stop_id":"15185",
	    "stop_name":"HARTFORD NS KING PHILIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475507,41.81947 ]
	    },
	    "properties": {
	    "stop_id":"15205",
	    "stop_name":"HARTFORD NS S WILLIAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377591,41.819787 ]
	    },
	    "properties": {
	    "stop_id":"15215",
	    "stop_name":"TAUNTON AVE / GROVE AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41446,41.819912 ]
	    },
	    "properties": {
	    "stop_id":"15230",
	    "stop_name":"BROAD NS CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37378,41.81966 ]
	    },
	    "properties": {
	    "stop_id":"15235",
	    "stop_name":"TAUNTON AT 175 TAUNTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374223,41.819762 ]
	    },
	    "properties": {
	    "stop_id":"15240",
	    "stop_name":"TAUNTON OPP GROSVENOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37607,41.819758 ]
	    },
	    "properties": {
	    "stop_id":"15245",
	    "stop_name":"TAUNTON NS IVY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372029,41.819653 ]
	    },
	    "properties": {
	    "stop_id":"15250",
	    "stop_name":"TAUNTON OPP ALICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466931,41.819849 ]
	    },
	    "properties": {
	    "stop_id":"15260",
	    "stop_name":"HARTFORD NS MIDDLETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395911,41.819577 ]
	    },
	    "properties": {
	    "stop_id":"15265",
	    "stop_name":"WICKENDEN NS HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395844,41.81971 ]
	    },
	    "properties": {
	    "stop_id":"15270",
	    "stop_name":"WICKENDEN FS HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469889,41.819955 ]
	    },
	    "properties": {
	    "stop_id":"15275",
	    "stop_name":"HARTFORD FS KILLINGLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.369337,41.819912 ]
	    },
	    "properties": {
	    "stop_id":"15280",
	    "stop_name":"TAUNTON OPP RUSSELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418431,41.819906 ]
	    },
	    "properties": {
	    "stop_id":"15285",
	    "stop_name":"E FRANKLIN NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428401,41.819965 ]
	    },
	    "properties": {
	    "stop_id":"15290",
	    "stop_name":"BROADWAY NS VINTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44669,41.819867 ]
	    },
	    "properties": {
	    "stop_id":"15295",
	    "stop_name":"MANTON OPP JULIAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472222,41.819476 ]
	    },
	    "properties": {
	    "stop_id":"15300",
	    "stop_name":"HARTFORD NS PHILIPS ANGELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429695,41.819787 ]
	    },
	    "properties": {
	    "stop_id":"15305",
	    "stop_name":"BROADWAY FS KNIGHT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371724,41.81972 ]
	    },
	    "properties": {
	    "stop_id":"15310",
	    "stop_name":"TAUNTON FS JOHN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468852,41.820062 ]
	    },
	    "properties": {
	    "stop_id":"15335",
	    "stop_name":"HARTFORD NS KILLINGLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394342,41.820086 ]
	    },
	    "properties": {
	    "stop_id":"15355",
	    "stop_name":"WICKENDEN FS EAST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417817,41.820902 ]
	    },
	    "properties": {
	    "stop_id":"15360",
	    "stop_name":"WASHINGTON OPP JACKSON WALKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394353,41.820194 ]
	    },
	    "properties": {
	    "stop_id":"15365",
	    "stop_name":"WICKENDEN NS EAST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392136,41.820179 ]
	    },
	    "properties": {
	    "stop_id":"15385",
	    "stop_name":"WICKENDEN NS IVES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427737,41.820262 ]
	    },
	    "properties": {
	    "stop_id":"15395",
	    "stop_name":"BROADWAY NS VINTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391853,41.820313 ]
	    },
	    "properties": {
	    "stop_id":"15410",
	    "stop_name":"GOVERNOR NS WICKENDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.370629,41.821085 ]
	    },
	    "properties": {
	    "stop_id":"15430",
	    "stop_name":"JOHN NS RUSSELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479681,41.820638 ]
	    },
	    "properties": {
	    "stop_id":"15440",
	    "stop_name":"HARTFORD AT 956 HARTFORD AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36904,41.820837 ]
	    },
	    "properties": {
	    "stop_id":"15455",
	    "stop_name":"WATERMAN AT 314 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365674,41.820599 ]
	    },
	    "properties": {
	    "stop_id":"15460",
	    "stop_name":"TAUNTON OPP CORA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425917,41.820572 ]
	    },
	    "properties": {
	    "stop_id":"15475",
	    "stop_name":"BROADWAY NS BATTEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480976,41.821078 ]
	    },
	    "properties": {
	    "stop_id":"15495",
	    "stop_name":"HARTFORD AT 985 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403662,41.820944 ]
	    },
	    "properties": {
	    "stop_id":"15500",
	    "stop_name":"S MAIN FS JAMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404565,41.820642 ]
	    },
	    "properties": {
	    "stop_id":"15505",
	    "stop_name":"S WATER AT JAMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482108,41.82138 ]
	    },
	    "properties": {
	    "stop_id":"15530",
	    "stop_name":"HARTFORD AT 994 HARTFORD AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356603,41.820549 ]
	    },
	    "properties": {
	    "stop_id":"15540",
	    "stop_name":"PAWTUCKET NS SHOPPERS TOWN MALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424365,41.820898 ]
	    },
	    "properties": {
	    "stop_id":"15560",
	    "stop_name":"BROADWAY NS PALLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.362275,41.820979 ]
	    },
	    "properties": {
	    "stop_id":"15565",
	    "stop_name":"TAUNTON OPP GOLDSMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415397,41.821 ]
	    },
	    "properties": {
	    "stop_id":"15575",
	    "stop_name":"EMPIRE OPP WESTMINSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361796,41.821198 ]
	    },
	    "properties": {
	    "stop_id":"15580",
	    "stop_name":"TAUNTON NS GOLDSMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359918,41.821466 ]
	    },
	    "properties": {
	    "stop_id":"15600",
	    "stop_name":"TAUNTON AT 525 TAUNTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417253,41.821125 ]
	    },
	    "properties": {
	    "stop_id":"15610",
	    "stop_name":"WASHINGTON NS GREENE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417161,41.821392 ]
	    },
	    "properties": {
	    "stop_id":"15615",
	    "stop_name":"WASHINGTON NS GREENE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421772,41.821525 ]
	    },
	    "properties": {
	    "stop_id":"15625",
	    "stop_name":"BROADWAY FS BRADFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359551,41.821389 ]
	    },
	    "properties": {
	    "stop_id":"15630",
	    "stop_name":"TAUNTON AT SHOPPERS TOWN MALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422239,41.821588 ]
	    },
	    "properties": {
	    "stop_id":"15650",
	    "stop_name":"BROADWAY NS DEAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486154,41.822291 ]
	    },
	    "properties": {
	    "stop_id":"15670",
	    "stop_name":"HARTFORD AT TRI TOWN HEALTH CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483927,41.82196 ]
	    },
	    "properties": {
	    "stop_id":"15680",
	    "stop_name":"HARTFORD OPP BORDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.669228,41.825537 ]
	    },
	    "properties": {
	    "stop_id":"15685",
	    "stop_name":"DANIELSON PIKE NS 102"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.663517,41.815824 ]
	    },
	    "properties": {
	    "stop_id":"15686",
	    "stop_name":"chopmist hill fire station"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392084,41.821796 ]
	    },
	    "properties": {
	    "stop_id":"15690",
	    "stop_name":"IVES NS E TRANSIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391907,41.821559 ]
	    },
	    "properties": {
	    "stop_id":"15700",
	    "stop_name":"IVES NS E TRANSIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354719,41.821973 ]
	    },
	    "properties": {
	    "stop_id":"15705",
	    "stop_name":"TAUNTON OPP ELMWOOD DEALERSHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354756,41.821829 ]
	    },
	    "properties": {
	    "stop_id":"15710",
	    "stop_name":"TAUNTON AT ELMWOOD DODGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418845,41.822647 ]
	    },
	    "properties": {
	    "stop_id":"15730",
	    "stop_name":"ATWELLS NS BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405838,41.821996 ]
	    },
	    "properties": {
	    "stop_id":"15735",
	    "stop_name":"S WATER OPP POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35141,41.822326 ]
	    },
	    "properties": {
	    "stop_id":"15740",
	    "stop_name":"TAUNTON AVE OPP PARK & RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486691,41.822457 ]
	    },
	    "properties": {
	    "stop_id":"15750",
	    "stop_name":"HARTFORD NS DIX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405121,41.822355 ]
	    },
	    "properties": {
	    "stop_id":"15755",
	    "stop_name":"S MAIN NS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.351121,41.822505 ]
	    },
	    "properties": {
	    "stop_id":"15765",
	    "stop_name":"TAUNTON AT PARK & RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419121,41.822323 ]
	    },
	    "properties": {
	    "stop_id":"15770",
	    "stop_name":"BROADWAY NS SVC RD 8"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449704,41.82232 ]
	    },
	    "properties": {
	    "stop_id":"15790",
	    "stop_name":"MANTON AT 283 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448834,41.821774 ]
	    },
	    "properties": {
	    "stop_id":"15805",
	    "stop_name":"MANTON NS POPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349334,41.822059 ]
	    },
	    "properties": {
	    "stop_id":"15810",
	    "stop_name":"COMMERCIAL WAY NS TAUNTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410316,41.822472 ]
	    },
	    "properties": {
	    "stop_id":"15815",
	    "stop_name":"DORRANCE NS PINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417834,41.822903 ]
	    },
	    "properties": {
	    "stop_id":"15825",
	    "stop_name":"SABIN OPP EMPIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349499,41.822338 ]
	    },
	    "properties": {
	    "stop_id":"15835",
	    "stop_name":"COMMERCIAL WAY FS TAUNTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49858,41.823024 ]
	    },
	    "properties": {
	    "stop_id":"15840",
	    "stop_name":"ATWOOD AT 1481 ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488537,41.82272 ]
	    },
	    "properties": {
	    "stop_id":"15850",
	    "stop_name":"HARTFORD FS WILSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41138,41.822625 ]
	    },
	    "properties": {
	    "stop_id":"15880",
	    "stop_name":"WEYBOSSET OPP EDDY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418845,41.822821 ]
	    },
	    "properties": {
	    "stop_id":"15895",
	    "stop_name":"ATWELLS FS BROADWAY (HOLIDAY INN)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.490534,41.823054 ]
	    },
	    "properties": {
	    "stop_id":"15935",
	    "stop_name":"HARTFORD FS DALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450725,41.823165 ]
	    },
	    "properties": {
	    "stop_id":"15940",
	    "stop_name":"MANTON AT 323 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450845,41.823098 ]
	    },
	    "properties": {
	    "stop_id":"15945",
	    "stop_name":"MANTON FS PANAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392098,41.822965 ]
	    },
	    "properties": {
	    "stop_id":"15950",
	    "stop_name":"IVES NS WILLIAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373506,41.8232 ]
	    },
	    "properties": {
	    "stop_id":"15955",
	    "stop_name":"WATERMAN NS JAMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48987,41.823066 ]
	    },
	    "properties": {
	    "stop_id":"15960",
	    "stop_name":"HARTFORD NS TARA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373396,41.823275 ]
	    },
	    "properties": {
	    "stop_id":"15975",
	    "stop_name":"WATERMAN FS JAMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421134,41.823123 ]
	    },
	    "properties": {
	    "stop_id":"15985",
	    "stop_name":"ATWELLS OPP ENTERPRISE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406731,41.82302 ]
	    },
	    "properties": {
	    "stop_id":"15990",
	    "stop_name":"S WATER BETWEEN PACKET & PLANET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414706,41.823118 ]
	    },
	    "properties": {
	    "stop_id":"16000",
	    "stop_name":"WASHINGTON NS MATHEWSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366292,41.823806 ]
	    },
	    "properties": {
	    "stop_id":"16005",
	    "stop_name":"N BROADWAY FS MOWRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494639,41.823057 ]
	    },
	    "properties": {
	    "stop_id":"16015",
	    "stop_name":"HARTFORD AVE OPP 1305 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498882,41.823204 ]
	    },
	    "properties": {
	    "stop_id":"16020",
	    "stop_name":"ATWOOD NS 1478 ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421234,41.823285 ]
	    },
	    "properties": {
	    "stop_id":"16025",
	    "stop_name":"ATWELLS FS ENTERPRISE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.416802,41.823682 ]
	    },
	    "properties": {
	    "stop_id":"16035",
	    "stop_name":"SABIN MIDBLOCK RI CONVENTION CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424852,41.823453 ]
	    },
	    "properties": {
	    "stop_id":"16045",
	    "stop_name":"ATWELLS NS ALBRO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.416081,41.824328 ]
	    },
	    "properties": {
	    "stop_id":"16090",
	    "stop_name":"SABIN NS MATHEWSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42285,41.823379 ]
	    },
	    "properties": {
	    "stop_id":"16095",
	    "stop_name":"ATWELLS FS PEQUOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427024,41.823558 ]
	    },
	    "properties": {
	    "stop_id":"16105",
	    "stop_name":"ATWELLS NS DEPASQUALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424812,41.8235 ]
	    },
	    "properties": {
	    "stop_id":"16110",
	    "stop_name":"ATWELLS FS DEAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.497234,41.823618 ]
	    },
	    "properties": {
	    "stop_id":"16115",
	    "stop_name":"HARTFORD AT 1357 HARTFORD AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.497747,41.823624 ]
	    },
	    "properties": {
	    "stop_id":"16120",
	    "stop_name":"HARTFORD FS ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410117,41.823586 ]
	    },
	    "properties": {
	    "stop_id":"16125",
	    "stop_name":"WEYBOSSET FS PECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427013,41.823678 ]
	    },
	    "properties": {
	    "stop_id":"16155",
	    "stop_name":"ATWELLS OPP DEPASQUALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366641,41.823602 ]
	    },
	    "properties": {
	    "stop_id":"16165",
	    "stop_name":"N BROADWAY OPP MOWRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429522,41.823759 ]
	    },
	    "properties": {
	    "stop_id":"16175",
	    "stop_name":"ATWELLS NS SUTTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429172,41.823833 ]
	    },
	    "properties": {
	    "stop_id":"16195",
	    "stop_name":"ATWELLS NS SUTTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452376,41.824243 ]
	    },
	    "properties": {
	    "stop_id":"16200",
	    "stop_name":"MANTON AT 375 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431226,41.823864 ]
	    },
	    "properties": {
	    "stop_id":"16205",
	    "stop_name":"ATWELLS NS AMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423252,41.823281 ]
	    },
	    "properties": {
	    "stop_id":"16210",
	    "stop_name":"ATWELLS NS BOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430266,41.823913 ]
	    },
	    "properties": {
	    "stop_id":"16235",
	    "stop_name":"ATWELLS NS HEWITT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432963,41.824027 ]
	    },
	    "properties": {
	    "stop_id":"16240",
	    "stop_name":"ATWELLS NS KNIGHT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432431,41.824089 ]
	    },
	    "properties": {
	    "stop_id":"16250",
	    "stop_name":"ATWELLS OPP KNIGHT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354217,41.824735 ]
	    },
	    "properties": {
	    "stop_id":"16255",
	    "stop_name":"PAWTUCKET NS OFFICE PKWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431226,41.82398 ]
	    },
	    "properties": {
	    "stop_id":"16275",
	    "stop_name":"ATWELLS FS AMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452449,41.82441 ]
	    },
	    "properties": {
	    "stop_id":"16295",
	    "stop_name":"MANTON NS LYNCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40739,41.823968 ]
	    },
	    "properties": {
	    "stop_id":"16310",
	    "stop_name":"S WATER FS CRAWFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392268,41.824063 ]
	    },
	    "properties": {
	    "stop_id":"16335",
	    "stop_name":"IVES NS PRESTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438853,41.824491 ]
	    },
	    "properties": {
	    "stop_id":"16355",
	    "stop_name":"ATWELLS FS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436244,41.824569 ]
	    },
	    "properties": {
	    "stop_id":"16370",
	    "stop_name":"ATWELLS FS EAGLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409645,41.824554 ]
	    },
	    "properties": {
	    "stop_id":"16385",
	    "stop_name":"WEYBOSSET NS POST OFFICE CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376823,41.825202 ]
	    },
	    "properties": {
	    "stop_id":"16395",
	    "stop_name":"WATERMAN OPP SUMMIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411583,41.824733 ]
	    },
	    "properties": {
	    "stop_id":"16400",
	    "stop_name":"KENNEDY PLAZA (STOP B)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441245,41.8246 ]
	    },
	    "properties": {
	    "stop_id":"16405",
	    "stop_name":"ATWELLS AT 740 ATWELLS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365655,41.824986 ]
	    },
	    "properties": {
	    "stop_id":"16425",
	    "stop_name":"N BROADWAY NS BLANCHE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411348,41.824887 ]
	    },
	    "properties": {
	    "stop_id":"16435",
	    "stop_name":"KENNEDY PLAZA (STOP C)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406197,41.823572 ]
	    },
	    "properties": {
	    "stop_id":"16445",
	    "stop_name":"S MAIN AT SUPERIOR COURT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365828,41.824958 ]
	    },
	    "properties": {
	    "stop_id":"16460",
	    "stop_name":"N BROADWAY AT 645 N BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453874,41.825035 ]
	    },
	    "properties": {
	    "stop_id":"16465",
	    "stop_name":"MANTON FS SALMON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411823,41.825012 ]
	    },
	    "properties": {
	    "stop_id":"16475",
	    "stop_name":"KENNEDY PLAZA (STOP G)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377191,41.825279 ]
	    },
	    "properties": {
	    "stop_id":"16480",
	    "stop_name":"WATERMAN NS SUMMIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411042,41.825109 ]
	    },
	    "properties": {
	    "stop_id":"16485",
	    "stop_name":"KENNEDY PLAZA (STOP D)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453887,41.825122 ]
	    },
	    "properties": {
	    "stop_id":"16510",
	    "stop_name":"MANTON OPP SALMON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41233,41.82472 ]
	    },
	    "properties": {
	    "stop_id":"16520",
	    "stop_name":"WASHINGTON ST AT KENNEDY PLAZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41155,41.825212 ]
	    },
	    "properties": {
	    "stop_id":"16525",
	    "stop_name":"KENNEDY PLAZA (STOP H)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408538,41.824436 ]
	    },
	    "properties": {
	    "stop_id":"16530",
	    "stop_name":"MEMORIAL FS WESTMINSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410869,41.825233 ]
	    },
	    "properties": {
	    "stop_id":"16555",
	    "stop_name":"KENNEDY PLAZA (STOP E)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455794,41.825615 ]
	    },
	    "properties": {
	    "stop_id":"16565",
	    "stop_name":"MANTON OPP 470 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412413,41.825123 ]
	    },
	    "properties": {
	    "stop_id":"16585",
	    "stop_name":"KENNEDY PLAZA (STOP V)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411262,41.825407 ]
	    },
	    "properties": {
	    "stop_id":"16590",
	    "stop_name":"KENNEDY PLAZA (STOP I)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407003,41.824609 ]
	    },
	    "properties": {
	    "stop_id":"16595",
	    "stop_name":"S MAIN FS HOPKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39257,41.82589 ]
	    },
	    "properties": {
	    "stop_id":"16610",
	    "stop_name":"IVES FS E GEORGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392637,41.825767 ]
	    },
	    "properties": {
	    "stop_id":"16620",
	    "stop_name":"IVES NS E GEORGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411076,41.825537 ]
	    },
	    "properties": {
	    "stop_id":"16630",
	    "stop_name":"KENNEDY PLAZA (STOP J)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456278,41.825608 ]
	    },
	    "properties": {
	    "stop_id":"16640",
	    "stop_name":"MANTON AT 470 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386757,41.825724 ]
	    },
	    "properties": {
	    "stop_id":"16645",
	    "stop_name":"EAST SIDE MARKET PLACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458565,41.826005 ]
	    },
	    "properties": {
	    "stop_id":"16690",
	    "stop_name":"MANTON NS GLENBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458792,41.826121 ]
	    },
	    "properties": {
	    "stop_id":"16710",
	    "stop_name":"MANTON NS RARITAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412244,41.825999 ]
	    },
	    "properties": {
	    "stop_id":"16720",
	    "stop_name":"KENNEDY PLAZA (STOP X)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411773,41.826684 ]
	    },
	    "properties": {
	    "stop_id":"16745",
	    "stop_name":"EXCHANGE NS MEMORIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391654,41.826401 ]
	    },
	    "properties": {
	    "stop_id":"16770",
	    "stop_name":"PITMAN BETWEEN GANO & IVES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41272,41.826555 ]
	    },
	    "properties": {
	    "stop_id":"16775",
	    "stop_name":"MEMORIAL NS EXCHANGE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460367,41.826622 ]
	    },
	    "properties": {
	    "stop_id":"16785",
	    "stop_name":"MANTON AT 588 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391316,41.826516 ]
	    },
	    "properties": {
	    "stop_id":"16795",
	    "stop_name":"PITMAN BETWEEN GANO & IVES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.38987,41.826527 ]
	    },
	    "properties": {
	    "stop_id":"16810",
	    "stop_name":"PITMAN FS GANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408552,41.826743 ]
	    },
	    "properties": {
	    "stop_id":"16820",
	    "stop_name":"S MAIN NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389881,41.826648 ]
	    },
	    "properties": {
	    "stop_id":"16825",
	    "stop_name":"PITMAN NS GANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388113,41.826687 ]
	    },
	    "properties": {
	    "stop_id":"16830",
	    "stop_name":"PITMAN FS WAYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411257,41.826496 ]
	    },
	    "properties": {
	    "stop_id":"16835",
	    "stop_name":"STEEPLE FS MEMORIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388019,41.826799 ]
	    },
	    "properties": {
	    "stop_id":"16845",
	    "stop_name":"PITMAN NS WAYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408541,41.82678 ]
	    },
	    "properties": {
	    "stop_id":"16855",
	    "stop_name":"TUNNEL FS S MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.639317,41.826722 ]
	    },
	    "properties": {
	    "stop_id":"16860",
	    "stop_name":"DANIELSON PIKE OPP ST MARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375701,41.827277 ]
	    },
	    "properties": {
	    "stop_id":"16870",
	    "stop_name":"MASSASOIT FS SUTTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460933,41.827152 ]
	    },
	    "properties": {
	    "stop_id":"16875",
	    "stop_name":"MANTON AT 610 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376149,41.82719 ]
	    },
	    "properties": {
	    "stop_id":"16885",
	    "stop_name":"MASSASOIT OPP SUTTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408585,41.826842 ]
	    },
	    "properties": {
	    "stop_id":"16890",
	    "stop_name":"TUNNEL NS S MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40971,41.828988 ]
	    },
	    "properties": {
	    "stop_id":"16900",
	    "stop_name":"N MAIN NS N COURT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400864,41.827607 ]
	    },
	    "properties": {
	    "stop_id":"16905",
	    "stop_name":"TUNNEL NS THAYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460842,41.827182 ]
	    },
	    "properties": {
	    "stop_id":"16910",
	    "stop_name":"MANTON OPP 600 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.639343,41.826873 ]
	    },
	    "properties": {
	    "stop_id":"16920",
	    "stop_name":"DANIELSON PIKE NS ST MARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352674,41.827539 ]
	    },
	    "properties": {
	    "stop_id":"16925",
	    "stop_name":"PAWTUCKET AVE OPP BASEBALL FIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352527,41.827778 ]
	    },
	    "properties": {
	    "stop_id":"16930",
	    "stop_name":"PAWTUCKET AT BASEBALL FIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415248,41.827694 ]
	    },
	    "properties": {
	    "stop_id":"16940",
	    "stop_name":"FRANCIS FS FINANCE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.647668,41.827734 ]
	    },
	    "properties": {
	    "stop_id":"16960",
	    "stop_name":"DANIELSON PIKE NS SUDDARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.653399,41.827387 ]
	    },
	    "properties": {
	    "stop_id":"16961",
	    "stop_name":"DANIELSON PIKE FS 857 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397452,41.827592 ]
	    },
	    "properties": {
	    "stop_id":"16970",
	    "stop_name":"WATERMAN NS HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.660897,41.825904 ]
	    },
	    "properties": {
	    "stop_id":"16973",
	    "stop_name":"DANIELSON PIKE AT 945 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.653096,41.827255 ]
	    },
	    "properties": {
	    "stop_id":"16974",
	    "stop_name":"DANIELSON PIKE AT 864 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.647185,41.827703 ]
	    },
	    "properties": {
	    "stop_id":"16975",
	    "stop_name":"DANIELSON PIKE NS SUDDARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393764,41.827639 ]
	    },
	    "properties": {
	    "stop_id":"17000",
	    "stop_name":"WATERMAN FS GOVERNOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46177,41.828184 ]
	    },
	    "properties": {
	    "stop_id":"17005",
	    "stop_name":"MANTON AT 652 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415344,41.828484 ]
	    },
	    "properties": {
	    "stop_id":"17040",
	    "stop_name":"PROVIDENCE PLACE MALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400886,41.827682 ]
	    },
	    "properties": {
	    "stop_id":"17045",
	    "stop_name":"TUNNEL FS THAYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.385365,41.827997 ]
	    },
	    "properties": {
	    "stop_id":"17050",
	    "stop_name":"WATERMAN FS BUTLER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390443,41.82823 ]
	    },
	    "properties": {
	    "stop_id":"17055",
	    "stop_name":"WATERMAN FS GANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363605,41.827463 ]
	    },
	    "properties": {
	    "stop_id":"17070",
	    "stop_name":"N BROADWAY FS DEWEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.362798,41.829778 ]
	    },
	    "properties": {
	    "stop_id":"17075",
	    "stop_name":"N BROADWAY FS MASSASOIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449185,41.8286 ]
	    },
	    "properties": {
	    "stop_id":"17080",
	    "stop_name":"MT PLEASANT NS CHAUCER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398382,41.828357 ]
	    },
	    "properties": {
	    "stop_id":"17085",
	    "stop_name":"ANGELL AT PRESCOTT LIBRARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383009,41.827568 ]
	    },
	    "properties": {
	    "stop_id":"17095",
	    "stop_name":"WATERMAN NS HENDERSON BRIDGE [ON-RAMP]"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397302,41.828462 ]
	    },
	    "properties": {
	    "stop_id":"17100",
	    "stop_name":"ANGELL NS HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388171,41.828519 ]
	    },
	    "properties": {
	    "stop_id":"17105",
	    "stop_name":"WATERMAN FS WAYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399446,41.828286 ]
	    },
	    "properties": {
	    "stop_id":"17120",
	    "stop_name":"BROOK FS ANGELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371558,41.828758 ]
	    },
	    "properties": {
	    "stop_id":"17125",
	    "stop_name":"MASSASOIT NS HENDERSON BRIDGE [ON-RAMP]"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388232,41.828921 ]
	    },
	    "properties": {
	    "stop_id":"17135",
	    "stop_name":"WAYLAND FS WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.3523,41.829091 ]
	    },
	    "properties": {
	    "stop_id":"17145",
	    "stop_name":"PAWTUCKET OPP CENTRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.351978,41.829941 ]
	    },
	    "properties": {
	    "stop_id":"17155",
	    "stop_name":"PAWTUCKET NS CENTRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462849,41.829355 ]
	    },
	    "properties": {
	    "stop_id":"17165",
	    "stop_name":"MANTON OPP BALTIMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393025,41.829218 ]
	    },
	    "properties": {
	    "stop_id":"17170",
	    "stop_name":"ANGELL OPP IVES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462606,41.829257 ]
	    },
	    "properties": {
	    "stop_id":"17180",
	    "stop_name":"MANTON NS BALTIMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383528,41.829247 ]
	    },
	    "properties": {
	    "stop_id":"17185",
	    "stop_name":"S ANGELL AT 120 S ANGELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400855,41.82922 ]
	    },
	    "properties": {
	    "stop_id":"17190",
	    "stop_name":"THAYER NS MEETING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.385298,41.829588 ]
	    },
	    "properties": {
	    "stop_id":"17215",
	    "stop_name":"S ANGELL FS BUTLER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46083,41.829305 ]
	    },
	    "properties": {
	    "stop_id":"17220",
	    "stop_name":"LEANDER - HILLCREST APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.362679,41.829784 ]
	    },
	    "properties": {
	    "stop_id":"17235",
	    "stop_name":"N BROADWAY NS ROSEMERE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363296,41.828413 ]
	    },
	    "properties": {
	    "stop_id":"17250",
	    "stop_name":"N BROADWAY NS MERRILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387948,41.829991 ]
	    },
	    "properties": {
	    "stop_id":"17255",
	    "stop_name":"WAYLAND NS S ANGELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41384,41.829338 ]
	    },
	    "properties": {
	    "stop_id":"17265",
	    "stop_name":"GASPEE ST AT TRAIN STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412641,41.83081 ]
	    },
	    "properties": {
	    "stop_id":"17266",
	    "stop_name":"GASPEE NS SMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41391,41.829413 ]
	    },
	    "properties": {
	    "stop_id":"17270",
	    "stop_name":"GASPEE ST OPP TRAIN STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.53711,41.829486 ]
	    },
	    "properties": {
	    "stop_id":"17275",
	    "stop_name":"HARTFORD NS RESERVOIR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410301,41.830783 ]
	    },
	    "properties": {
	    "stop_id":"17280",
	    "stop_name":"N MAIN NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388391,41.830134 ]
	    },
	    "properties": {
	    "stop_id":"17285",
	    "stop_name":"ANGELL FS WAYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389833,41.829826 ]
	    },
	    "properties": {
	    "stop_id":"17290",
	    "stop_name":"ANGELL FS ELMGROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.628416,41.830654 ]
	    },
	    "properties": {
	    "stop_id":"17295",
	    "stop_name":"DANIELSON PIKE AT 575 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.545336,41.83186 ]
	    },
	    "properties": {
	    "stop_id":"17300",
	    "stop_name":"HARTFORD FS CORONA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.627772,41.830547 ]
	    },
	    "properties": {
	    "stop_id":"17315",
	    "stop_name":"DANIELSON PIKE OPP 493 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449494,41.830615 ]
	    },
	    "properties": {
	    "stop_id":"17325",
	    "stop_name":"MT PLEASANT NS BEAUFORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.530992,41.830358 ]
	    },
	    "properties": {
	    "stop_id":"17330",
	    "stop_name":"HARTFORD FS BELFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463688,41.831596 ]
	    },
	    "properties": {
	    "stop_id":"17355",
	    "stop_name":"MANTON NS MANTON CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528791,41.830777 ]
	    },
	    "properties": {
	    "stop_id":"17360",
	    "stop_name":"HARTFORD AT TRINITY CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361503,41.831398 ]
	    },
	    "properties": {
	    "stop_id":"17385",
	    "stop_name":"N BROADWAY NS DUNBAR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361974,41.831072 ]
	    },
	    "properties": {
	    "stop_id":"17390",
	    "stop_name":"N BROADWAY NS MEACOMET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411328,41.83098 ]
	    },
	    "properties": {
	    "stop_id":"17400",
	    "stop_name":"CANAL FS SMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.531539,41.82999 ]
	    },
	    "properties": {
	    "stop_id":"17405",
	    "stop_name":"HARTFORD AT POLE 39"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.54323,41.8312 ]
	    },
	    "properties": {
	    "stop_id":"17420",
	    "stop_name":"HARTFORD NS EARHART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399804,41.831154 ]
	    },
	    "properties": {
	    "stop_id":"17425",
	    "stop_name":"BROOK NS HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401104,41.831181 ]
	    },
	    "properties": {
	    "stop_id":"17430",
	    "stop_name":"THAYER NS BOWEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463795,41.831021 ]
	    },
	    "properties": {
	    "stop_id":"17435",
	    "stop_name":"MANTON AT 770 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.617023,41.831399 ]
	    },
	    "properties": {
	    "stop_id":"17440",
	    "stop_name":"DANIELSON PIKE OPP 449 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413401,41.83236 ]
	    },
	    "properties": {
	    "stop_id":"17460",
	    "stop_name":"STATE NS SMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.61191,41.831784 ]
	    },
	    "properties": {
	    "stop_id":"17480",
	    "stop_name":"DANIELSON PIKE NS ELMDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.6041,41.831913 ]
	    },
	    "properties": {
	    "stop_id":"17485",
	    "stop_name":"DANIELSON PIKE AT STATE POLICE COMPLEX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.606475,41.831301 ]
	    },
	    "properties": {
	    "stop_id":"17486",
	    "stop_name":"DANIELSON PIKE FS BATTY MEETINHOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414471,41.831619 ]
	    },
	    "properties": {
	    "stop_id":"17490",
	    "stop_name":"SMITH NS GASPEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434433,41.832758 ]
	    },
	    "properties": {
	    "stop_id":"17500",
	    "stop_name":"CHALKSTONE AT VA HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.615514,41.831522 ]
	    },
	    "properties": {
	    "stop_id":"17505",
	    "stop_name":"DANIELSON PIKE NS DEXTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.600777,41.832656 ]
	    },
	    "properties": {
	    "stop_id":"17510",
	    "stop_name":"DANIELSON PIKE NS 272 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.583625,41.831747 ]
	    },
	    "properties": {
	    "stop_id":"17515",
	    "stop_name":"DANIELSON PIKE NS SHOLLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.616911,41.831575 ]
	    },
	    "properties": {
	    "stop_id":"17520",
	    "stop_name":"DANIELSON PIKE AT 449 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.532747,41.829666 ]
	    },
	    "properties": {
	    "stop_id":"17530",
	    "stop_name":"HARTFORD AT 263 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414078,41.831788 ]
	    },
	    "properties": {
	    "stop_id":"17535",
	    "stop_name":"SMITH FS GASPEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4166,41.831809 ]
	    },
	    "properties": {
	    "stop_id":"17540",
	    "stop_name":"SMITH FS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.583935,41.83183 ]
	    },
	    "properties": {
	    "stop_id":"17545",
	    "stop_name":"DANIELSON PIKE OPP SHOLLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.611727,41.831959 ]
	    },
	    "properties": {
	    "stop_id":"17555",
	    "stop_name":"DANIELSON PIKE FS ROCKLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.615239,41.831698 ]
	    },
	    "properties": {
	    "stop_id":"17556",
	    "stop_name":"DANIELSON PIKE NS 443 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41562,41.831882 ]
	    },
	    "properties": {
	    "stop_id":"17560",
	    "stop_name":"SMITH NS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360764,41.832609 ]
	    },
	    "properties": {
	    "stop_id":"17565",
	    "stop_name":"N BROADWAY OPP CENTRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349919,41.831912 ]
	    },
	    "properties": {
	    "stop_id":"17575",
	    "stop_name":"PAWTUCKET NS DROWNE PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.588693,41.832353 ]
	    },
	    "properties": {
	    "stop_id":"17580",
	    "stop_name":"DANIELSON PIKE AT 155 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.604018,41.831776 ]
	    },
	    "properties": {
	    "stop_id":"17590",
	    "stop_name":"DANIELSON PIKE OPP STATE POLICE COMPLEX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.606525,41.831125 ]
	    },
	    "properties": {
	    "stop_id":"17595",
	    "stop_name":"DANIELSON PIKE S BETSY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348411,41.832702 ]
	    },
	    "properties": {
	    "stop_id":"17600",
	    "stop_name":"PAWTUCKET NS BLYTHE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455393,41.832088 ]
	    },
	    "properties": {
	    "stop_id":"17620",
	    "stop_name":"CHALKSTONE FS SISSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.578733,41.833946 ]
	    },
	    "properties": {
	    "stop_id":"17625",
	    "stop_name":"DANIELSON PIKE AT SCITUATE HARDWARE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441828,41.83227 ]
	    },
	    "properties": {
	    "stop_id":"17635",
	    "stop_name":"CHALKSTONE NS BERLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455446,41.832259 ]
	    },
	    "properties": {
	    "stop_id":"17645",
	    "stop_name":"CHALKSTONE OPP SISSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441486,41.832315 ]
	    },
	    "properties": {
	    "stop_id":"17655",
	    "stop_name":"CHALKSTONE NS BERLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442899,41.832347 ]
	    },
	    "properties": {
	    "stop_id":"17660",
	    "stop_name":"CHALKSTONE FS CANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453315,41.832303 ]
	    },
	    "properties": {
	    "stop_id":"17665",
	    "stop_name":"CHALKSTONE NS GRAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419608,41.832823 ]
	    },
	    "properties": {
	    "stop_id":"17670",
	    "stop_name":"SMITH OPP COMMON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453766,41.832389 ]
	    },
	    "properties": {
	    "stop_id":"17675",
	    "stop_name":"CHALKSTONE OPP ALDINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444936,41.832494 ]
	    },
	    "properties": {
	    "stop_id":"17685",
	    "stop_name":"CHALKSTONE NS ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443711,41.832339 ]
	    },
	    "properties": {
	    "stop_id":"17690",
	    "stop_name":"CHALKSTONE FS ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444113,41.832421 ]
	    },
	    "properties": {
	    "stop_id":"17695",
	    "stop_name":"CHALKSTONE NS ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.534848,41.829387 ]
	    },
	    "properties": {
	    "stop_id":"17700",
	    "stop_name":"HARTFORD AT 265 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.601287,41.832747 ]
	    },
	    "properties": {
	    "stop_id":"17705",
	    "stop_name":"DANIELSON PIKE MIDBLOCK SPRINGBROOK RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452042,41.832432 ]
	    },
	    "properties": {
	    "stop_id":"17710",
	    "stop_name":"CHALKSTONE OPP STANDISH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452021,41.832546 ]
	    },
	    "properties": {
	    "stop_id":"17715",
	    "stop_name":"CHALKSTONE NS STANDISH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446578,41.832744 ]
	    },
	    "properties": {
	    "stop_id":"17720",
	    "stop_name":"CHALKSTONE NS LAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451079,41.832642 ]
	    },
	    "properties": {
	    "stop_id":"17725",
	    "stop_name":"CHALKSTONE NS WINTHROP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439621,41.832372 ]
	    },
	    "properties": {
	    "stop_id":"17730",
	    "stop_name":"CHALKSTONE NS HAROLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442337,41.832363 ]
	    },
	    "properties": {
	    "stop_id":"17745",
	    "stop_name":"CHALKSTONE NS BERLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449341,41.832802 ]
	    },
	    "properties": {
	    "stop_id":"17750",
	    "stop_name":"CHALKSTONE NS MT PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.582295,41.832232 ]
	    },
	    "properties": {
	    "stop_id":"17760",
	    "stop_name":"DANIELSON PIKE MIDBLOCK INSTITUTE LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458571,41.832865 ]
	    },
	    "properties": {
	    "stop_id":"17765",
	    "stop_name":"CHALKSTONE NS HILLCREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.591366,41.832869 ]
	    },
	    "properties": {
	    "stop_id":"17770",
	    "stop_name":"DANIELSON PIKE FS N SCITUATE FIRE DEPT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465879,41.832444 ]
	    },
	    "properties": {
	    "stop_id":"17775",
	    "stop_name":"STOP&SHOP (MANTON AVENUE - PROVIDENCE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446591,41.832696 ]
	    },
	    "properties": {
	    "stop_id":"17780",
	    "stop_name":"CHALKSTONE OPP LAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.549487,41.832796 ]
	    },
	    "properties": {
	    "stop_id":"17790",
	    "stop_name":"HARTFORD FS BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450299,41.83262 ]
	    },
	    "properties": {
	    "stop_id":"17795",
	    "stop_name":"CHALKSTONE NS MT PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458629,41.833012 ]
	    },
	    "properties": {
	    "stop_id":"17805",
	    "stop_name":"CHALKSTONE OPP HILLCREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43837,41.832747 ]
	    },
	    "properties": {
	    "stop_id":"17810",
	    "stop_name":"CHALKSTONE NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419433,41.832855 ]
	    },
	    "properties": {
	    "stop_id":"17825",
	    "stop_name":"SMITH FS COMMON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472251,41.833024 ]
	    },
	    "properties": {
	    "stop_id":"17830",
	    "stop_name":"GREENVILLE OPP 30 GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.537558,41.82932 ]
	    },
	    "properties": {
	    "stop_id":"17835",
	    "stop_name":"HARTFORD MIDBLOCK PENDLETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400831,41.832911 ]
	    },
	    "properties": {
	    "stop_id":"17845",
	    "stop_name":"HOPE OPP BARNES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4709,41.832699 ]
	    },
	    "properties": {
	    "stop_id":"17850",
	    "stop_name":"GREENVILLE NS TRAVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40132,41.832729 ]
	    },
	    "properties": {
	    "stop_id":"17855",
	    "stop_name":"THAYER OPP 373 THAYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460647,41.83314 ]
	    },
	    "properties": {
	    "stop_id":"17860",
	    "stop_name":"CHALKSTONE NS HARMONY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348261,41.832772 ]
	    },
	    "properties": {
	    "stop_id":"17870",
	    "stop_name":"PAWTUCKET NS BARBARA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469905,41.833235 ]
	    },
	    "properties": {
	    "stop_id":"17875",
	    "stop_name":"MANTON AT 989 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462892,41.832836 ]
	    },
	    "properties": {
	    "stop_id":"17885",
	    "stop_name":"CHALKSTONE AT 1632 CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465879,41.833496 ]
	    },
	    "properties": {
	    "stop_id":"17890",
	    "stop_name":"MANTON OPP 871 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473695,41.833143 ]
	    },
	    "properties": {
	    "stop_id":"17905",
	    "stop_name":"GREENVILLE OPP LEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46161,41.833088 ]
	    },
	    "properties": {
	    "stop_id":"17910",
	    "stop_name":"CHALKSTONE FS OBADIAH BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.545366,41.831646 ]
	    },
	    "properties": {
	    "stop_id":"17920",
	    "stop_name":"HARTFORD OPP CORONA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437422,41.83296 ]
	    },
	    "properties": {
	    "stop_id":"17925",
	    "stop_name":"CHALKSTONE FS FERN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413928,41.833821 ]
	    },
	    "properties": {
	    "stop_id":"17936",
	    "stop_name":"STATE FS ORMS (STATE OFFICES)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435494,41.833677 ]
	    },
	    "properties": {
	    "stop_id":"17940",
	    "stop_name":"CHALKSTONE OPP ROGER WILLIAMS HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469827,41.833152 ]
	    },
	    "properties": {
	    "stop_id":"17945",
	    "stop_name":"MANTON OPP 985 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.553351,41.833069 ]
	    },
	    "properties": {
	    "stop_id":"17950",
	    "stop_name":"HARTFORD NS PINE GROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.553395,41.833226 ]
	    },
	    "properties": {
	    "stop_id":"17960",
	    "stop_name":"HARTFORD FS PINE GROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46797,41.834493 ]
	    },
	    "properties": {
	    "stop_id":"17965",
	    "stop_name":" FRUIT HILL FS HUBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475164,41.833524 ]
	    },
	    "properties": {
	    "stop_id":"17970",
	    "stop_name":"GREENVILLE OPP CECIL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421251,41.833524 ]
	    },
	    "properties": {
	    "stop_id":"17975",
	    "stop_name":"SMITH NS ORMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463577,41.833231 ]
	    },
	    "properties": {
	    "stop_id":"17980",
	    "stop_name":"CHALKSTONE AT 1644 CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390444,41.833322 ]
	    },
	    "properties": {
	    "stop_id":"17985",
	    "stop_name":"ELMGROVE NS UNIVERSITY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465913,41.833592 ]
	    },
	    "properties": {
	    "stop_id":"17990",
	    "stop_name":"MANTON AT 883 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434638,41.834024 ]
	    },
	    "properties": {
	    "stop_id":"18000",
	    "stop_name":"CHALKSTONE AT ROGER WILLIAMS HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47474,41.833518 ]
	    },
	    "properties": {
	    "stop_id":"18005",
	    "stop_name":"GREENVILLE AT 63 GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46876,41.833615 ]
	    },
	    "properties": {
	    "stop_id":"18010",
	    "stop_name":"MANTON AT 954 MANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422479,41.833921 ]
	    },
	    "properties": {
	    "stop_id":"18015",
	    "stop_name":"SMITH NS ORMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.558359,41.833562 ]
	    },
	    "properties": {
	    "stop_id":"18025",
	    "stop_name":"HARTFORD FS 2741 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348302,41.834781 ]
	    },
	    "properties": {
	    "stop_id":"18030",
	    "stop_name":"PAWTUCKET NS GREENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.578835,41.834091 ]
	    },
	    "properties": {
	    "stop_id":"18045",
	    "stop_name":"DANIELSON PIKE FS 33 DANIELSON PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468478,41.833822 ]
	    },
	    "properties": {
	    "stop_id":"18050",
	    "stop_name":"MANTON NS WESTCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450068,41.833483 ]
	    },
	    "properties": {
	    "stop_id":"18060",
	    "stop_name":"MT PLEASANT AT 260 MT PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.573381,41.835254 ]
	    },
	    "properties": {
	    "stop_id":"18065",
	    "stop_name":"DANIELSON PIKE AT SCITUATE VILLAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.558573,41.833394 ]
	    },
	    "properties": {
	    "stop_id":"18070",
	    "stop_name":"HARTFORD AT 2650 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401252,41.834601 ]
	    },
	    "properties": {
	    "stop_id":"18080",
	    "stop_name":"HOPE NS ALUMNI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43265,41.833881 ]
	    },
	    "properties": {
	    "stop_id":"18085",
	    "stop_name":"CHALKSTONE NS GARFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424672,41.834771 ]
	    },
	    "properties": {
	    "stop_id":"18090",
	    "stop_name":"SMITH FS DUKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432265,41.833828 ]
	    },
	    "properties": {
	    "stop_id":"18095",
	    "stop_name":"CHALKSTONE FS GARFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423805,41.834573 ]
	    },
	    "properties": {
	    "stop_id":"18100",
	    "stop_name":"SMITH FS NOLAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429822,41.83424 ]
	    },
	    "properties": {
	    "stop_id":"18105",
	    "stop_name":"CHALKSTONE FS RAYMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46802,41.834257 ]
	    },
	    "properties": {
	    "stop_id":"18110",
	    "stop_name":"FRUIT HILL NS HUBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411274,41.83445 ]
	    },
	    "properties": {
	    "stop_id":"18125",
	    "stop_name":"CHARLES NS ORMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411442,41.834473 ]
	    },
	    "properties": {
	    "stop_id":"18135",
	    "stop_name":"CHARLES FS ORMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478231,41.835545 ]
	    },
	    "properties": {
	    "stop_id":"18140",
	    "stop_name":"GREENVILLE OPP 150 GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561031,41.833889 ]
	    },
	    "properties": {
	    "stop_id":"18145",
	    "stop_name":"HARTFORD AT 2525 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561531,41.834193 ]
	    },
	    "properties": {
	    "stop_id":"18150",
	    "stop_name":"HARTFORD OPP 2828 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429202,41.834443 ]
	    },
	    "properties": {
	    "stop_id":"18160",
	    "stop_name":"CHALKSTONE OPP AYRAULT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360766,41.834062 ]
	    },
	    "properties": {
	    "stop_id":"18165",
	    "stop_name":"ROGER WILLIAMS AT 20 ROGER WILLIAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477192,41.834937 ]
	    },
	    "properties": {
	    "stop_id":"18180",
	    "stop_name":"GREENVILLE OPP BECKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347977,41.834184 ]
	    },
	    "properties": {
	    "stop_id":"18185",
	    "stop_name":"PAWTUCKET OPP ELMSGATE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427876,41.834641 ]
	    },
	    "properties": {
	    "stop_id":"18195",
	    "stop_name":"CHALKSTONE NS ZONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450288,41.835299 ]
	    },
	    "properties": {
	    "stop_id":"18200",
	    "stop_name":"MT PLEASANT NS BOLTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.563091,41.834322 ]
	    },
	    "properties": {
	    "stop_id":"18215",
	    "stop_name":"HARTFORD NS BISHOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417096,41.835028 ]
	    },
	    "properties": {
	    "stop_id":"18225",
	    "stop_name":"DOUGLAS NS ORMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417229,41.835152 ]
	    },
	    "properties": {
	    "stop_id":"18235",
	    "stop_name":"DOUGLAS OPP GODDARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.566916,41.834999 ]
	    },
	    "properties": {
	    "stop_id":"18240",
	    "stop_name":"HARTFORD FS HOPKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426047,41.835088 ]
	    },
	    "properties": {
	    "stop_id":"18245",
	    "stop_name":"CHALKSTONE NS BATH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425976,41.835295 ]
	    },
	    "properties": {
	    "stop_id":"18250",
	    "stop_name":"SMITH NS CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391098,41.835144 ]
	    },
	    "properties": {
	    "stop_id":"18255",
	    "stop_name":"ELMGROVE NS PRESIDENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426411,41.835092 ]
	    },
	    "properties": {
	    "stop_id":"18260",
	    "stop_name":"CHALKSTONE FS SMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.567538,41.834815 ]
	    },
	    "properties": {
	    "stop_id":"18280",
	    "stop_name":"HARTFORD OPP 525 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450488,41.835316 ]
	    },
	    "properties": {
	    "stop_id":"18285",
	    "stop_name":"MT PLEASANT AT 318 MT PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401204,41.83665 ]
	    },
	    "properties": {
	    "stop_id":"18290",
	    "stop_name":"HOPE NS CARRINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425689,41.83534 ]
	    },
	    "properties": {
	    "stop_id":"18295",
	    "stop_name":"SMITH FS CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48031,41.836459 ]
	    },
	    "properties": {
	    "stop_id":"18315",
	    "stop_name":"GREENVILLE AT 177 GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.570322,41.835058 ]
	    },
	    "properties": {
	    "stop_id":"18320",
	    "stop_name":"HARTFORD OPP RIDGEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361073,41.83427 ]
	    },
	    "properties": {
	    "stop_id":"18325",
	    "stop_name":"ROGER WILLIAMS NS N BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348332,41.835437 ]
	    },
	    "properties": {
	    "stop_id":"18330",
	    "stop_name":"PAWTUCKET NS MILLER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348702,41.836683 ]
	    },
	    "properties": {
	    "stop_id":"18335",
	    "stop_name":"PAWTUCKET AT 1315 PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.573208,41.835483 ]
	    },
	    "properties": {
	    "stop_id":"18340",
	    "stop_name":"HARTFORD OPP SCITUATE VILLAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419132,41.83584 ]
	    },
	    "properties": {
	    "stop_id":"18345",
	    "stop_name":"DOUGLAS NS BERNON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479796,41.836153 ]
	    },
	    "properties": {
	    "stop_id":"18360",
	    "stop_name":"GREENVILLE OPP 177 GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419255,41.835966 ]
	    },
	    "properties": {
	    "stop_id":"18380",
	    "stop_name":"DOUGLAS NS CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412642,41.836689 ]
	    },
	    "properties": {
	    "stop_id":"18390",
	    "stop_name":"CHARLES 201 CHARLES MATHEMATICAL SOCIETY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42148,41.836811 ]
	    },
	    "properties": {
	    "stop_id":"18395",
	    "stop_name":"DOUGLAS NS CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361812,41.8369 ]
	    },
	    "properties": {
	    "stop_id":"18405",
	    "stop_name":"ROGER WILLIAMS NS DALTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428763,41.836091 ]
	    },
	    "properties": {
	    "stop_id":"18410",
	    "stop_name":"SMITH FS FREDERICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469346,41.836937 ]
	    },
	    "properties": {
	    "stop_id":"18435",
	    "stop_name":"WOONASQUATUCKET NS KLONDIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481022,41.836587 ]
	    },
	    "properties": {
	    "stop_id":"18440",
	    "stop_name":"GREENVILLE OPP 203 GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409504,41.836882 ]
	    },
	    "properties": {
	    "stop_id":"18445",
	    "stop_name":"UNIVERSITY HEIGHTS (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40066,41.837758 ]
	    },
	    "properties": {
	    "stop_id":"18455",
	    "stop_name":"HOPE FS HOWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409882,41.83706 ]
	    },
	    "properties": {
	    "stop_id":"18470",
	    "stop_name":"UNIVERSITY HEIGHTS (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421833,41.837097 ]
	    },
	    "properties": {
	    "stop_id":"18475",
	    "stop_name":"DOUGLAS OPP CRIMEA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361801,41.837333 ]
	    },
	    "properties": {
	    "stop_id":"18480",
	    "stop_name":"ROGER WILLIAMS NS WILSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433655,41.837602 ]
	    },
	    "properties": {
	    "stop_id":"18485",
	    "stop_name":"SMITH NS MAUDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423169,41.837494 ]
	    },
	    "properties": {
	    "stop_id":"18505",
	    "stop_name":"DOUGLAS NS CANDACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433385,41.837618 ]
	    },
	    "properties": {
	    "stop_id":"18510",
	    "stop_name":"SMITH OPP MAUDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401111,41.83668 ]
	    },
	    "properties": {
	    "stop_id":"18525",
	    "stop_name":"HOPE S CARRINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402779,41.835663 ]
	    },
	    "properties": {
	    "stop_id":"18526",
	    "stop_name":"OLNEY AT HOPE HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391875,41.837719 ]
	    },
	    "properties": {
	    "stop_id":"18530",
	    "stop_name":"ELMGROVE NS FREEMAN PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483247,41.838901 ]
	    },
	    "properties": {
	    "stop_id":"18550",
	    "stop_name":"GREENVILLE OPP LYMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349408,41.839787 ]
	    },
	    "properties": {
	    "stop_id":"18555",
	    "stop_name":"PAWTUCKET OPP KENTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348845,41.837689 ]
	    },
	    "properties": {
	    "stop_id":"18565",
	    "stop_name":"PAWTUCKET NS ST MICHAELS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475585,41.840636 ]
	    },
	    "properties": {
	    "stop_id":"18585",
	    "stop_name":"WOONASQUATUCKET OPP JOHN E FOGARTY CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404259,41.839043 ]
	    },
	    "properties": {
	    "stop_id":"18590",
	    "stop_name":"CAMP NS DOYLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43567,41.838665 ]
	    },
	    "properties": {
	    "stop_id":"18600",
	    "stop_name":"SMITH NS HILLTOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404099,41.83907 ]
	    },
	    "properties": {
	    "stop_id":"18605",
	    "stop_name":"CAMP FS DOYLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409008,41.83902 ]
	    },
	    "properties": {
	    "stop_id":"18615",
	    "stop_name":"CHARLESGATE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400201,41.838627 ]
	    },
	    "properties": {
	    "stop_id":"18625",
	    "stop_name":"HOPE FS DOYLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409442,41.838843 ]
	    },
	    "properties": {
	    "stop_id":"18635",
	    "stop_name":"CHARLESGATE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473023,41.839057 ]
	    },
	    "properties": {
	    "stop_id":"18655",
	    "stop_name":"WOONASQUATUCKET FS METCALF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476577,41.842475 ]
	    },
	    "properties": {
	    "stop_id":"18665",
	    "stop_name":"WOONASQUATUCKET OPP 264 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360174,41.838852 ]
	    },
	    "properties": {
	    "stop_id":"18670",
	    "stop_name":"WILSON NS WASHBURN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360133,41.838749 ]
	    },
	    "properties": {
	    "stop_id":"18685",
	    "stop_name":"WILSON FS ROGER WILLIAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.484537,41.840176 ]
	    },
	    "properties": {
	    "stop_id":"18690",
	    "stop_name":"GEORGE WATERMAN OPP SHERIDAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399802,41.839229 ]
	    },
	    "properties": {
	    "stop_id":"18695",
	    "stop_name":"HOPE NS OBSERVATORY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425569,41.838989 ]
	    },
	    "properties": {
	    "stop_id":"18710",
	    "stop_name":"DOUGLAS FS CHAD BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426036,41.839523 ]
	    },
	    "properties": {
	    "stop_id":"18715",
	    "stop_name":"DOUGLAS FS CHAD BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452546,41.839935 ]
	    },
	    "properties": {
	    "stop_id":"18720",
	    "stop_name":"MT PLEASANT HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45255,41.841146 ]
	    },
	    "properties": {
	    "stop_id":"18721",
	    "stop_name":"MT PLEASANT AT MT PLEASANT HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451427,41.838434 ]
	    },
	    "properties": {
	    "stop_id":"18725",
	    "stop_name":"MT PLEASANT NS WHITFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437866,41.839593 ]
	    },
	    "properties": {
	    "stop_id":"18730",
	    "stop_name":"SMITH NS WYNDAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403915,41.840158 ]
	    },
	    "properties": {
	    "stop_id":"18735",
	    "stop_name":"CAMP NS PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349283,41.839588 ]
	    },
	    "properties": {
	    "stop_id":"18750",
	    "stop_name":"PAWTUCKET NS KENTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.416041,41.839416 ]
	    },
	    "properties": {
	    "stop_id":"18760",
	    "stop_name":"CHARLES NS W RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.416199,41.839318 ]
	    },
	    "properties": {
	    "stop_id":"18780",
	    "stop_name":"CHARLES FS W RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417458,41.841156 ]
	    },
	    "properties": {
	    "stop_id":"18795",
	    "stop_name":"CHARLES OPP ADMIRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475666,41.840668 ]
	    },
	    "properties": {
	    "stop_id":"18800",
	    "stop_name":"WOONASQUATUCKET AT JOHN E FOGERTY CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.357855,41.840126 ]
	    },
	    "properties": {
	    "stop_id":"18805",
	    "stop_name":"WILSON OPP DUNCAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.357615,41.840242 ]
	    },
	    "properties": {
	    "stop_id":"18830",
	    "stop_name":"WILSON AT ELM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420054,41.840946 ]
	    },
	    "properties": {
	    "stop_id":"18835",
	    "stop_name":"ADMIRAL NS FILMORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.485484,41.842436 ]
	    },
	    "properties": {
	    "stop_id":"18845",
	    "stop_name":"GEORGE WATERMAN OPP 95 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48448,41.840358 ]
	    },
	    "properties": {
	    "stop_id":"18850",
	    "stop_name":"GEORGE WATERMAN AT 33 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440223,41.840617 ]
	    },
	    "properties": {
	    "stop_id":"18855",
	    "stop_name":"SMITH NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426922,41.840421 ]
	    },
	    "properties": {
	    "stop_id":"18860",
	    "stop_name":"DOUGLAS OPP SUFFOLK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399289,41.840526 ]
	    },
	    "properties": {
	    "stop_id":"18870",
	    "stop_name":"HOPE NS MOUNT HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398944,41.840939 ]
	    },
	    "properties": {
	    "stop_id":"18885",
	    "stop_name":"HOPE NS CYPRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427199,41.840884 ]
	    },
	    "properties": {
	    "stop_id":"18895",
	    "stop_name":"DOUGLAS NS EATON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349551,41.840855 ]
	    },
	    "properties": {
	    "stop_id":"18905",
	    "stop_name":"PAWTUCKET NS NEWMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403338,41.841193 ]
	    },
	    "properties": {
	    "stop_id":"18910",
	    "stop_name":"CAMP NS LOCUST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453265,41.841651 ]
	    },
	    "properties": {
	    "stop_id":"18920",
	    "stop_name":"COLLEGE NS MT PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35142,41.844337 ]
	    },
	    "properties": {
	    "stop_id":"18930",
	    "stop_name":"PAWTUCKET OPP ST MARGARET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392595,41.84225 ]
	    },
	    "properties": {
	    "stop_id":"18935",
	    "stop_name":"ELMGROVE FS SESSIONS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403215,41.841568 ]
	    },
	    "properties": {
	    "stop_id":"18940",
	    "stop_name":"CAMP NS LOCUST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443553,41.841854 ]
	    },
	    "properties": {
	    "stop_id":"18965",
	    "stop_name":"SMITH NS JASTRAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443266,41.841845 ]
	    },
	    "properties": {
	    "stop_id":"18975",
	    "stop_name":"SMITH NS JASTRAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432814,41.846774 ]
	    },
	    "properties": {
	    "stop_id":"18990",
	    "stop_name":"ADMIRAL NS HUXLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460627,41.841629 ]
	    },
	    "properties": {
	    "stop_id":"18995",
	    "stop_name":"RHODE ISLAND COLLEGE (ROBERTS HALL)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432772,41.846816 ]
	    },
	    "properties": {
	    "stop_id":"19000",
	    "stop_name":"ADMIRAL FS HUXLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477039,41.84425 ]
	    },
	    "properties": {
	    "stop_id":"19005",
	    "stop_name":"WOONASQUATUCKET AT 311 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476361,41.842038 ]
	    },
	    "properties": {
	    "stop_id":"19010",
	    "stop_name":"WOONASQUATUCKET OPP LYMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421437,41.842341 ]
	    },
	    "properties": {
	    "stop_id":"19030",
	    "stop_name":"ADMIRAL NS CLARKSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356914,41.841998 ]
	    },
	    "properties": {
	    "stop_id":"19055",
	    "stop_name":"WILSON NS GREENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427513,41.841765 ]
	    },
	    "properties": {
	    "stop_id":"19060",
	    "stop_name":"DOUGLAS OPP BERKSHIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402742,41.842328 ]
	    },
	    "properties": {
	    "stop_id":"19065",
	    "stop_name":"CAMP FS CYPRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407565,41.842258 ]
	    },
	    "properties": {
	    "stop_id":"19070",
	    "stop_name":"NORTH BURIAL GROUND (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445407,41.842653 ]
	    },
	    "properties": {
	    "stop_id":"19080",
	    "stop_name":"SMITH NS ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407408,41.843117 ]
	    },
	    "properties": {
	    "stop_id":"19095",
	    "stop_name":"NORTH BURIAL GROUND (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356757,41.842657 ]
	    },
	    "properties": {
	    "stop_id":"19100",
	    "stop_name":"WILSON NS GREENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427539,41.84217 ]
	    },
	    "properties": {
	    "stop_id":"19105",
	    "stop_name":"DOUGLAS AT 434 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.485546,41.84354 ]
	    },
	    "properties": {
	    "stop_id":"19115",
	    "stop_name":"GEORGE WATERMAN OPP 116 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422195,41.842837 ]
	    },
	    "properties": {
	    "stop_id":"19140",
	    "stop_name":"ADMIRAL NS PUMGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486604,41.845319 ]
	    },
	    "properties": {
	    "stop_id":"19155",
	    "stop_name":"GEORGE WATERMAN OPP RICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402499,41.843134 ]
	    },
	    "properties": {
	    "stop_id":"19170",
	    "stop_name":"CAMP NS ABBOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477189,41.843355 ]
	    },
	    "properties": {
	    "stop_id":"19175",
	    "stop_name":"WOONASQUATUCKET OPP 297 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421929,41.8427 ]
	    },
	    "properties": {
	    "stop_id":"19190",
	    "stop_name":"ADMIRAL NS SUFFOLK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448061,41.843809 ]
	    },
	    "properties": {
	    "stop_id":"19205",
	    "stop_name":"SMITH OPP MODENA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427754,41.843526 ]
	    },
	    "properties": {
	    "stop_id":"19210",
	    "stop_name":"DOUGLAS NS MOWRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427919,41.843721 ]
	    },
	    "properties": {
	    "stop_id":"19215",
	    "stop_name":"DOUGLAS NS MOWRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397749,41.843539 ]
	    },
	    "properties": {
	    "stop_id":"19220",
	    "stop_name":"HOPE FS ELGIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402134,41.843929 ]
	    },
	    "properties": {
	    "stop_id":"19230",
	    "stop_name":"CAMP NS FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449407,41.844676 ]
	    },
	    "properties": {
	    "stop_id":"19235",
	    "stop_name":"SMITH OPP HILARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433159,41.844135 ]
	    },
	    "properties": {
	    "stop_id":"19240",
	    "stop_name":"HUXLEY AT PC ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.381404,41.843352 ]
	    },
	    "properties": {
	    "stop_id":"19245",
	    "stop_name":"BUTLER HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423846,41.844284 ]
	    },
	    "properties": {
	    "stop_id":"19250",
	    "stop_name":"ADMIRAL NS BERKSHIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453609,41.845538 ]
	    },
	    "properties": {
	    "stop_id":"19260",
	    "stop_name":"MT PLEASANT AT ST AUGUSTINES SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423584,41.844161 ]
	    },
	    "properties": {
	    "stop_id":"19300",
	    "stop_name":"ADMIRAL NS BERKSHIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355861,41.844787 ]
	    },
	    "properties": {
	    "stop_id":"19315",
	    "stop_name":"WILSON NS HAMMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477059,41.846578 ]
	    },
	    "properties": {
	    "stop_id":"19320",
	    "stop_name":"WOONASQUATUCKET AT 387 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419029,41.845635 ]
	    },
	    "properties": {
	    "stop_id":"19340",
	    "stop_name":"CHARLES OPP 403 CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486679,41.846664 ]
	    },
	    "properties": {
	    "stop_id":"19345",
	    "stop_name":"GEORGE WATERMAN AT 225 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449997,41.844881 ]
	    },
	    "properties": {
	    "stop_id":"19350",
	    "stop_name":"SMITH NS HILARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418898,41.84566 ]
	    },
	    "properties": {
	    "stop_id":"19365",
	    "stop_name":"CHARLES FS SILVER SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424973,41.845059 ]
	    },
	    "properties": {
	    "stop_id":"19370",
	    "stop_name":"270 ADMIRAL ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426076,41.84543 ]
	    },
	    "properties": {
	    "stop_id":"19380",
	    "stop_name":"ADMIRAL FS LONGMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426126,41.845382 ]
	    },
	    "properties": {
	    "stop_id":"19395",
	    "stop_name":"ADMIRAL FS NEWCOMB"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397022,41.845026 ]
	    },
	    "properties": {
	    "stop_id":"19400",
	    "stop_name":"HOPE FS DANA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401215,41.845721 ]
	    },
	    "properties": {
	    "stop_id":"19410",
	    "stop_name":"CAMP FS WOODBINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396533,41.845789 ]
	    },
	    "properties": {
	    "stop_id":"19415",
	    "stop_name":"HOPE FS LEWIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428624,41.845258 ]
	    },
	    "properties": {
	    "stop_id":"19420",
	    "stop_name":"DOUGLAS OPP COGGESHALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391385,41.846153 ]
	    },
	    "properties": {
	    "stop_id":"19425",
	    "stop_name":"ELMGROVE NS ROCHAMBEAU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426692,41.845583 ]
	    },
	    "properties": {
	    "stop_id":"19430",
	    "stop_name":"ADMIRAL OPP 318 ADMIRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40123,41.845889 ]
	    },
	    "properties": {
	    "stop_id":"19445",
	    "stop_name":"CAMP FS LANCASTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417675,41.845685 ]
	    },
	    "properties": {
	    "stop_id":"19450",
	    "stop_name":"SILVER SPRING OPP WALMART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428758,41.845668 ]
	    },
	    "properties": {
	    "stop_id":"19455",
	    "stop_name":"DOUGLAS NS ADMIRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387306,41.845541 ]
	    },
	    "properties": {
	    "stop_id":"19460",
	    "stop_name":"ROCHAMBEAU NS BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427642,41.845724 ]
	    },
	    "properties": {
	    "stop_id":"19475",
	    "stop_name":"ADMIRAL OPP TAPPAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430314,41.846281 ]
	    },
	    "properties": {
	    "stop_id":"19490",
	    "stop_name":"ADMIRAL NS GRAPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452022,41.846114 ]
	    },
	    "properties": {
	    "stop_id":"19495",
	    "stop_name":"SMITH FS OLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428064,41.845894 ]
	    },
	    "properties": {
	    "stop_id":"19505",
	    "stop_name":"ADMIRAL NS HAWKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389364,41.845872 ]
	    },
	    "properties": {
	    "stop_id":"19520",
	    "stop_name":"ROCHAMBEAU NS COLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386708,41.846121 ]
	    },
	    "properties": {
	    "stop_id":"19530",
	    "stop_name":"BLACKSTONE FS ROCHAMBEAU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40159,41.84654 ]
	    },
	    "properties": {
	    "stop_id":"19535",
	    "stop_name":"ROCHAMBEAU FS CAMP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477204,41.846661 ]
	    },
	    "properties": {
	    "stop_id":"19540",
	    "stop_name":"WOONASQUATUCKET OPP INTERVALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415412,41.847325 ]
	    },
	    "properties": {
	    "stop_id":"19545",
	    "stop_name":"SILVER SPRING AT 130 SILVER SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383373,41.845879 ]
	    },
	    "properties": {
	    "stop_id":"19550",
	    "stop_name":"BUTLER HOSPITAL ACCESS RD FS BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402652,41.846534 ]
	    },
	    "properties": {
	    "stop_id":"19555",
	    "stop_name":"ROCHAMBEAU OPP 62 ROCHAMBEAU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477001,41.846297 ]
	    },
	    "properties": {
	    "stop_id":"19560",
	    "stop_name":"WOONASQUATUCKET NS ZIPPORAH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419375,41.84681 ]
	    },
	    "properties": {
	    "stop_id":"19565",
	    "stop_name":"CHARLES NS LOMBARDI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431747,41.846633 ]
	    },
	    "properties": {
	    "stop_id":"19570",
	    "stop_name":"ADMIRAL NS DANTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404623,41.846679 ]
	    },
	    "properties": {
	    "stop_id":"19575",
	    "stop_name":"ROCHAMBEAU FS N MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419364,41.847072 ]
	    },
	    "properties": {
	    "stop_id":"19585",
	    "stop_name":"CHARLES OPP 469 CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48664,41.849028 ]
	    },
	    "properties": {
	    "stop_id":"19590",
	    "stop_name":"GEORGE WATERMAN NS GARNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405405,41.846576 ]
	    },
	    "properties": {
	    "stop_id":"19595",
	    "stop_name":"ROCHAMBEAU AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383297,41.845932 ]
	    },
	    "properties": {
	    "stop_id":"19605",
	    "stop_name":"BUTLER HOSPITAL ACCESS RD NS BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40255,41.84663 ]
	    },
	    "properties": {
	    "stop_id":"19610",
	    "stop_name":"ROCHAMBEAU AT 62 ROCHAMBEAU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405064,41.846622 ]
	    },
	    "properties": {
	    "stop_id":"19615",
	    "stop_name":"ROCHAMBEAU AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453197,41.846793 ]
	    },
	    "properties": {
	    "stop_id":"19625",
	    "stop_name":"SMITH NS LONGWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486811,41.84846 ]
	    },
	    "properties": {
	    "stop_id":"19630",
	    "stop_name":"GEORGE WATERMAN OPP VINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429811,41.846827 ]
	    },
	    "properties": {
	    "stop_id":"19635",
	    "stop_name":"DOUGLAS FS CORINA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396237,41.846691 ]
	    },
	    "properties": {
	    "stop_id":"19655",
	    "stop_name":"HOPE FS ROCHAMBEAU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354199,41.846784 ]
	    },
	    "properties": {
	    "stop_id":"19660",
	    "stop_name":"WILSON NS PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454208,41.847151 ]
	    },
	    "properties": {
	    "stop_id":"19680",
	    "stop_name":"SMITH OPP BRIGHTWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455068,41.847652 ]
	    },
	    "properties": {
	    "stop_id":"19685",
	    "stop_name":"SMITH OPP MT PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430196,41.847023 ]
	    },
	    "properties": {
	    "stop_id":"19695",
	    "stop_name":"DOUGLAS OPP 623 DOUGLAS AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414796,41.847729 ]
	    },
	    "properties": {
	    "stop_id":"19700",
	    "stop_name":"SILVER SPRING NS BRANCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479841,41.850635 ]
	    },
	    "properties": {
	    "stop_id":"19710",
	    "stop_name":"WOONASQUATUCKET AT 463 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386777,41.847884 ]
	    },
	    "properties": {
	    "stop_id":"19725",
	    "stop_name":"BLACKSTONE AT SWAN PT CEMETARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387336,41.847545 ]
	    },
	    "properties": {
	    "stop_id":"19735",
	    "stop_name":"BLACKSTONE AT 420 BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404364,41.84824 ]
	    },
	    "properties": {
	    "stop_id":"19755",
	    "stop_name":"N MAIN OPP DEXTERDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432029,41.848785 ]
	    },
	    "properties": {
	    "stop_id":"19760",
	    "stop_name":"DOUGLAS FS MESSINA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432435,41.848951 ]
	    },
	    "properties": {
	    "stop_id":"19765",
	    "stop_name":"DOUGLAS FS DAMON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486801,41.850068 ]
	    },
	    "properties": {
	    "stop_id":"19770",
	    "stop_name":"GEORGE WATERMAN NS ALLENDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458167,41.848859 ]
	    },
	    "properties": {
	    "stop_id":"19780",
	    "stop_name":"SMITH FS HIGH SERVICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478662,41.848909 ]
	    },
	    "properties": {
	    "stop_id":"19785",
	    "stop_name":"WOONASQUATUCKET NS ROCKWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414138,41.848711 ]
	    },
	    "properties": {
	    "stop_id":"19790",
	    "stop_name":"SILVER SPRING OPP ASHTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480901,41.852413 ]
	    },
	    "properties": {
	    "stop_id":"19800",
	    "stop_name":"WOONASQUATUCKET AT 545 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414263,41.848645 ]
	    },
	    "properties": {
	    "stop_id":"19805",
	    "stop_name":"SILVER SPRING FS ASHTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387392,41.848629 ]
	    },
	    "properties": {
	    "stop_id":"19810",
	    "stop_name":"BLACKSTONE FS HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386864,41.850485 ]
	    },
	    "properties": {
	    "stop_id":"19815",
	    "stop_name":"BLACKSTONE AT POLE 105"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395349,41.848469 ]
	    },
	    "properties": {
	    "stop_id":"19825",
	    "stop_name":"HOPE FS LAURISTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394863,41.849209 ]
	    },
	    "properties": {
	    "stop_id":"19830",
	    "stop_name":"HOPE FS LAURISTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486622,41.850399 ]
	    },
	    "properties": {
	    "stop_id":"19845",
	    "stop_name":"GEORGE WATERMAN NS 311 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460309,41.849683 ]
	    },
	    "properties": {
	    "stop_id":"19850",
	    "stop_name":"SMITH FS WELLESLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44042,41.849828 ]
	    },
	    "properties": {
	    "stop_id":"19855",
	    "stop_name":"ADMIRAL NS SEAMANS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403588,41.849464 ]
	    },
	    "properties": {
	    "stop_id":"19860",
	    "stop_name":"N MAIN AT 1052 N MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439287,41.849323 ]
	    },
	    "properties": {
	    "stop_id":"19865",
	    "stop_name":"ADMIRAL NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354419,41.84847 ]
	    },
	    "properties": {
	    "stop_id":"19870",
	    "stop_name":"NEWPORT NS ELMWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354503,41.849187 ]
	    },
	    "properties": {
	    "stop_id":"19875",
	    "stop_name":"NEWPORT OPP ELMWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433109,41.849658 ]
	    },
	    "properties": {
	    "stop_id":"19880",
	    "stop_name":"DOUGLAS FS SHERWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460466,41.849621 ]
	    },
	    "properties": {
	    "stop_id":"19885",
	    "stop_name":"SMITH OPP WELLESLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413536,41.849999 ]
	    },
	    "properties": {
	    "stop_id":"19900",
	    "stop_name":"SILVER SPRING NS GRAFTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387436,41.85 ]
	    },
	    "properties": {
	    "stop_id":"19905",
	    "stop_name":"BLACKSTONE FS HARWICH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402151,41.851356 ]
	    },
	    "properties": {
	    "stop_id":"19915",
	    "stop_name":"THIRD STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439771,41.849607 ]
	    },
	    "properties": {
	    "stop_id":"19920",
	    "stop_name":"ADMIRAL NS CRANDALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419874,41.849999 ]
	    },
	    "properties": {
	    "stop_id":"19925",
	    "stop_name":"CHARLES NS BRANCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387072,41.85142 ]
	    },
	    "properties": {
	    "stop_id":"19930",
	    "stop_name":"BLACKSTONE AT POLE 107"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420061,41.850187 ]
	    },
	    "properties": {
	    "stop_id":"19935",
	    "stop_name":"CHARLES FS BRANCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4404,41.849776 ]
	    },
	    "properties": {
	    "stop_id":"19940",
	    "stop_name":"ADMIRAL NS ZELLA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432987,41.849456 ]
	    },
	    "properties": {
	    "stop_id":"19945",
	    "stop_name":"DOUGLAS OPP SHERWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480143,41.850788 ]
	    },
	    "properties": {
	    "stop_id":"19950",
	    "stop_name":"WOONASQUATUCKET OPP 511 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487702,41.852944 ]
	    },
	    "properties": {
	    "stop_id":"19955",
	    "stop_name":"GEORGE WATERMAN AT FAMILY AUTO SALES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434419,41.850683 ]
	    },
	    "properties": {
	    "stop_id":"19965",
	    "stop_name":"DOUGLAS NS EASTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462538,41.8505 ]
	    },
	    "properties": {
	    "stop_id":"19970",
	    "stop_name":"SMITH NS HOMEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434127,41.850532 ]
	    },
	    "properties": {
	    "stop_id":"19975",
	    "stop_name":"DOUGLAS OPP VEAZIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48732,41.852619 ]
	    },
	    "properties": {
	    "stop_id":"19980",
	    "stop_name":"GEORGE WATERMAN OPP MILTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462697,41.850727 ]
	    },
	    "properties": {
	    "stop_id":"19985",
	    "stop_name":"SMITH NS LOOKOUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402838,41.850704 ]
	    },
	    "properties": {
	    "stop_id":"19995",
	    "stop_name":"N MAIN OPP 2ND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39401,41.851161 ]
	    },
	    "properties": {
	    "stop_id":"20000",
	    "stop_name":"HOPE FS OVERHILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480935,41.852328 ]
	    },
	    "properties": {
	    "stop_id":"20010",
	    "stop_name":"WOONASQUATUCKET AT 542 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393934,41.851099 ]
	    },
	    "properties": {
	    "stop_id":"20015",
	    "stop_name":"HOPE NS OVERHILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442809,41.850648 ]
	    },
	    "properties": {
	    "stop_id":"20020",
	    "stop_name":"ADMIRAL FS SHARON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442831,41.850713 ]
	    },
	    "properties": {
	    "stop_id":"20030",
	    "stop_name":"ADMIRAL NS PHEBE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354331,41.851535 ]
	    },
	    "properties": {
	    "stop_id":"20055",
	    "stop_name":"NEWPORT OPP VISTA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420141,41.850917 ]
	    },
	    "properties": {
	    "stop_id":"20065",
	    "stop_name":"CHARLES BETWEEN BRANCH & HAWKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413034,41.85141 ]
	    },
	    "properties": {
	    "stop_id":"20085",
	    "stop_name":"SILVER SPRING NS FELIX MURANDO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444787,41.851727 ]
	    },
	    "properties": {
	    "stop_id":"20090",
	    "stop_name":"ADMIRAL NS MIDDLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354411,41.852612 ]
	    },
	    "properties": {
	    "stop_id":"20095",
	    "stop_name":"NEWPORT NS ROGER WILLIAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413024,41.85198 ]
	    },
	    "properties": {
	    "stop_id":"20105",
	    "stop_name":"SILVER SPRING NS NORTHROP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435683,41.851827 ]
	    },
	    "properties": {
	    "stop_id":"20115",
	    "stop_name":"DOUGLAS AT 860 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445418,41.85217 ]
	    },
	    "properties": {
	    "stop_id":"20120",
	    "stop_name":"ADMIRAL FS WINONA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466026,41.852264 ]
	    },
	    "properties": {
	    "stop_id":"20125",
	    "stop_name":"SMITH OPP TURCONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48191,41.85461 ]
	    },
	    "properties": {
	    "stop_id":"20135",
	    "stop_name":"WOONASQUATUCKET OPP STEVENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.466114,41.852407 ]
	    },
	    "properties": {
	    "stop_id":"20150",
	    "stop_name":"SMITH FS TURCONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488097,41.854204 ]
	    },
	    "properties": {
	    "stop_id":"20155",
	    "stop_name":"GEORGE WATERMAN OPP BRADFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445388,41.852269 ]
	    },
	    "properties": {
	    "stop_id":"20160",
	    "stop_name":"ADMIRAL OPP WINONA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488457,41.85466 ]
	    },
	    "properties": {
	    "stop_id":"20175",
	    "stop_name":"GEORGE WATERMAN NS GANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436778,41.852565 ]
	    },
	    "properties": {
	    "stop_id":"20180",
	    "stop_name":"DOUGLAS NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437912,41.853241 ]
	    },
	    "properties": {
	    "stop_id":"20185",
	    "stop_name":"DOUGLAS OPP CONCANNON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412502,41.853443 ]
	    },
	    "properties": {
	    "stop_id":"20195",
	    "stop_name":"SILVER SPRING OPP LEDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420385,41.852709 ]
	    },
	    "properties": {
	    "stop_id":"20215",
	    "stop_name":"CHARLES FS NAHANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412534,41.853691 ]
	    },
	    "properties": {
	    "stop_id":"20220",
	    "stop_name":"SILVER SPRING NS LEDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446185,41.853383 ]
	    },
	    "properties": {
	    "stop_id":"20235",
	    "stop_name":"ADMIRAL FS GENERAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482314,41.855439 ]
	    },
	    "properties": {
	    "stop_id":"20245",
	    "stop_name":"WOONASQUATUCKET NS GEORGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39269,41.853601 ]
	    },
	    "properties": {
	    "stop_id":"20250",
	    "stop_name":"HOPE FS NORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437849,41.853277 ]
	    },
	    "properties": {
	    "stop_id":"20255",
	    "stop_name":"DOUGLAS AT 933 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427839,41.853538 ]
	    },
	    "properties": {
	    "stop_id":"20260",
	    "stop_name":"BRANCH NS WOODWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420345,41.853219 ]
	    },
	    "properties": {
	    "stop_id":"20275",
	    "stop_name":"CHARLES FS LEDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392814,41.853718 ]
	    },
	    "properties": {
	    "stop_id":"20280",
	    "stop_name":"HOPE NS 9TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489295,41.856528 ]
	    },
	    "properties": {
	    "stop_id":"20285",
	    "stop_name":"GEORGE WATERMAN NS AMBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438833,41.853818 ]
	    },
	    "properties": {
	    "stop_id":"20290",
	    "stop_name":"DOUGLAS NS SEAMANS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428987,41.853815 ]
	    },
	    "properties": {
	    "stop_id":"20295",
	    "stop_name":"BRANCH FS VANDEWATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438825,41.853902 ]
	    },
	    "properties": {
	    "stop_id":"20300",
	    "stop_name":"DOUGLAS NS SEAMANS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468828,41.854195 ]
	    },
	    "properties": {
	    "stop_id":"20305",
	    "stop_name":"SMITH NS LANTANGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44627,41.853375 ]
	    },
	    "properties": {
	    "stop_id":"20320",
	    "stop_name":"ADMIRAL NS WANSKUCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.470645,41.854331 ]
	    },
	    "properties": {
	    "stop_id":"20330",
	    "stop_name":"SMITH NS WHIPPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439664,41.854374 ]
	    },
	    "properties": {
	    "stop_id":"20335",
	    "stop_name":"DOUGLAS OPP HENRIETTA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.470695,41.854448 ]
	    },
	    "properties": {
	    "stop_id":"20345",
	    "stop_name":"SMITH OPP WHIPPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431619,41.854418 ]
	    },
	    "properties": {
	    "stop_id":"20350",
	    "stop_name":"BRANCH OPP HUGO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430806,41.854116 ]
	    },
	    "properties": {
	    "stop_id":"20360",
	    "stop_name":"BRANCH OPP 725 BRANCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420856,41.855558 ]
	    },
	    "properties": {
	    "stop_id":"20370",
	    "stop_name":"CHARLES OPP AMBOY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473291,41.854556 ]
	    },
	    "properties": {
	    "stop_id":"20380",
	    "stop_name":"SMITH FS ATLANTIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354448,41.854926 ]
	    },
	    "properties": {
	    "stop_id":"20385",
	    "stop_name":"NEWPORT OPP TAYLOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390621,41.85789 ]
	    },
	    "properties": {
	    "stop_id":"20390",
	    "stop_name":"EAST AVE FS LAFAYETTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47353,41.85471 ]
	    },
	    "properties": {
	    "stop_id":"20395",
	    "stop_name":"SMITH NS GAINER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434352,41.854626 ]
	    },
	    "properties": {
	    "stop_id":"20400",
	    "stop_name":"BRANCH FS VEAZIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434604,41.854749 ]
	    },
	    "properties": {
	    "stop_id":"20420",
	    "stop_name":"BRANCH NS VEAZIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482068,41.854698 ]
	    },
	    "properties": {
	    "stop_id":"20430",
	    "stop_name":"WOONASQUATUCKET FS STEVENS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482683,41.856344 ]
	    },
	    "properties": {
	    "stop_id":"20435",
	    "stop_name":"WOONASQUATUCKET AT 649 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476828,41.855185 ]
	    },
	    "properties": {
	    "stop_id":"20445",
	    "stop_name":"SMITH NS FENWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438082,41.855137 ]
	    },
	    "properties": {
	    "stop_id":"20465",
	    "stop_name":"BRANCH NS 971 BRANCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438558,41.855083 ]
	    },
	    "properties": {
	    "stop_id":"20470",
	    "stop_name":"BRANCH AT 962 BRANCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400234,41.854789 ]
	    },
	    "properties": {
	    "stop_id":"20475",
	    "stop_name":"NINTH STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411225,41.855719 ]
	    },
	    "properties": {
	    "stop_id":"20480",
	    "stop_name":"SILVER SPRING NS SWIFT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476757,41.855285 ]
	    },
	    "properties": {
	    "stop_id":"20490",
	    "stop_name":"SMITH OPP FENWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458544,41.855898 ]
	    },
	    "properties": {
	    "stop_id":"20505",
	    "stop_name":"HIGH SERVICE NS FATIMA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354399,41.855793 ]
	    },
	    "properties": {
	    "stop_id":"20515",
	    "stop_name":"NEWPORT OPP NEW RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41138,41.855303 ]
	    },
	    "properties": {
	    "stop_id":"20525",
	    "stop_name":"SILVER SPRING OPP SWIFT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447559,41.855335 ]
	    },
	    "properties": {
	    "stop_id":"20530",
	    "stop_name":"SMITHFIELD FS SHAWS MARKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400502,41.85492 ]
	    },
	    "properties": {
	    "stop_id":"20535",
	    "stop_name":"NINTH STREET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441595,41.855742 ]
	    },
	    "properties": {
	    "stop_id":"20540",
	    "stop_name":"DOUGLAS OPP LUBEC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44187,41.855799 ]
	    },
	    "properties": {
	    "stop_id":"20545",
	    "stop_name":"DOUGLAS NS LUBEC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47874,41.855788 ]
	    },
	    "properties": {
	    "stop_id":"20555",
	    "stop_name":"SMITH FS FERNCLIFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478705,41.855859 ]
	    },
	    "properties": {
	    "stop_id":"20560",
	    "stop_name":"SMITH NS FERNCLIFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489386,41.857548 ]
	    },
	    "properties": {
	    "stop_id":"20565",
	    "stop_name":"GEORGE WATERMAN NS SWAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42066,41.855286 ]
	    },
	    "properties": {
	    "stop_id":"20575",
	    "stop_name":"CHARLES NS AMBOY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450736,41.85618 ]
	    },
	    "properties": {
	    "stop_id":"20600",
	    "stop_name":"SMITHFIELD OPP PALOU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40008,41.855833 ]
	    },
	    "properties": {
	    "stop_id":"20610",
	    "stop_name":"N MAIN FS ANN MARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391505,41.856289 ]
	    },
	    "properties": {
	    "stop_id":"20615",
	    "stop_name":"HOPE NS CHACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450231,41.856235 ]
	    },
	    "properties": {
	    "stop_id":"20620",
	    "stop_name":"SMITHFIELD NS PALOU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442671,41.856398 ]
	    },
	    "properties": {
	    "stop_id":"20625",
	    "stop_name":"DOUGLAS AT 1115 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458739,41.856103 ]
	    },
	    "properties": {
	    "stop_id":"20640",
	    "stop_name":"HIGH SERVICE AT FATIMA HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446988,41.856124 ]
	    },
	    "properties": {
	    "stop_id":"20665",
	    "stop_name":"SHAW S MARKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489594,41.857311 ]
	    },
	    "properties": {
	    "stop_id":"20670",
	    "stop_name":"GEORGE WATERMAN OPP 503 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460974,41.857461 ]
	    },
	    "properties": {
	    "stop_id":"20675",
	    "stop_name":"HIGH SERVICE NS STANLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421048,41.857093 ]
	    },
	    "properties": {
	    "stop_id":"20685",
	    "stop_name":"CHARLES OPP HOGAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482333,41.856789 ]
	    },
	    "properties": {
	    "stop_id":"20720",
	    "stop_name":"SMITH NS WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45424,41.857239 ]
	    },
	    "properties": {
	    "stop_id":"20725",
	    "stop_name":"SMITHFIELD OPP SALEM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483634,41.857211 ]
	    },
	    "properties": {
	    "stop_id":"20730",
	    "stop_name":"SMITH NS STEERE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454393,41.857443 ]
	    },
	    "properties": {
	    "stop_id":"20740",
	    "stop_name":"SMITHFIELD NS SALEM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444422,41.857435 ]
	    },
	    "properties": {
	    "stop_id":"20745",
	    "stop_name":"DOUGLAS OPP 1159 DOUGLAS AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444125,41.857353 ]
	    },
	    "properties": {
	    "stop_id":"20750",
	    "stop_name":"DOUGLAS AT 1159 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390713,41.857854 ]
	    },
	    "properties": {
	    "stop_id":"20755",
	    "stop_name":"EAST AVE NS LAFAYETTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488833,41.859184 ]
	    },
	    "properties": {
	    "stop_id":"20760",
	    "stop_name":"GEORGE WATERMAN OPP 338 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482428,41.856732 ]
	    },
	    "properties": {
	    "stop_id":"20770",
	    "stop_name":"SMITH OPP CENTERDALE BYPASS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457513,41.85834 ]
	    },
	    "properties": {
	    "stop_id":"20780",
	    "stop_name":"SMITHFIELD AT 250 SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398398,41.858436 ]
	    },
	    "properties": {
	    "stop_id":"20785",
	    "stop_name":"PAWTUCKET FS PIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410817,41.858634 ]
	    },
	    "properties": {
	    "stop_id":"20795",
	    "stop_name":"SILVER SPRING NS COLFAX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457223,41.858346 ]
	    },
	    "properties": {
	    "stop_id":"20815",
	    "stop_name":"SMITHFIELD OPP 250 SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481666,41.858415 ]
	    },
	    "properties": {
	    "stop_id":"20830",
	    "stop_name":"MINERAL SPRING OPP SWEET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354537,41.857929 ]
	    },
	    "properties": {
	    "stop_id":"20835",
	    "stop_name":"NEWPORT NS VERMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482404,41.858375 ]
	    },
	    "properties": {
	    "stop_id":"20840",
	    "stop_name":"MINERAL SPRING FS THOMAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.485611,41.858174 ]
	    },
	    "properties": {
	    "stop_id":"20845",
	    "stop_name":"SMITH AT 2048 SMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446224,41.858762 ]
	    },
	    "properties": {
	    "stop_id":"20850",
	    "stop_name":"DOUGLAS OPP SHAW'S ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479988,41.858715 ]
	    },
	    "properties": {
	    "stop_id":"20860",
	    "stop_name":"MINERAL SPRING OPP JOSLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.350541,41.858248 ]
	    },
	    "properties": {
	    "stop_id":"20865",
	    "stop_name":"NARRAGANSETT PARK NS BALLYS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421744,41.859401 ]
	    },
	    "properties": {
	    "stop_id":"20870",
	    "stop_name":"CHARLES FS RAPHAEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411327,41.860128 ]
	    },
	    "properties": {
	    "stop_id":"20875",
	    "stop_name":"SMITHFIELD NS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480512,41.858739 ]
	    },
	    "properties": {
	    "stop_id":"20880",
	    "stop_name":"MINERAL SPRING FS JOSLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421988,41.859615 ]
	    },
	    "properties": {
	    "stop_id":"20885",
	    "stop_name":"CHARLES FS LEO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477677,41.858989 ]
	    },
	    "properties": {
	    "stop_id":"20900",
	    "stop_name":"MINERAL SPRING OPP BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478657,41.858908 ]
	    },
	    "properties": {
	    "stop_id":"20910",
	    "stop_name":"MINERAL SPRING OPP 2148 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39887,41.859039 ]
	    },
	    "properties": {
	    "stop_id":"20915",
	    "stop_name":"GRENVILLE STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397663,41.859412 ]
	    },
	    "properties": {
	    "stop_id":"20920",
	    "stop_name":"PAWTUCKET NS CARVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476351,41.859251 ]
	    },
	    "properties": {
	    "stop_id":"20930",
	    "stop_name":"MINERAL SPRING NS S BROOKSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489235,41.858502 ]
	    },
	    "properties": {
	    "stop_id":"20935",
	    "stop_name":"GEORGE WATERMAN AT 536 GEORGE WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475921,41.859366 ]
	    },
	    "properties": {
	    "stop_id":"20940",
	    "stop_name":"MINERAL SPRING NS BROOKSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354598,41.860066 ]
	    },
	    "properties": {
	    "stop_id":"20950",
	    "stop_name":"NEWPORT AT 24 NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389264,41.860628 ]
	    },
	    "properties": {
	    "stop_id":"20960",
	    "stop_name":"EAST AVE FS PROGRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.474257,41.859418 ]
	    },
	    "properties": {
	    "stop_id":"20965",
	    "stop_name":"MINERAL SPRING FS RAYMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4741,41.859581 ]
	    },
	    "properties": {
	    "stop_id":"20970",
	    "stop_name":"MINERAL SPRING NS REYNOLDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447797,41.859728 ]
	    },
	    "properties": {
	    "stop_id":"20975",
	    "stop_name":"DOUGLAS FS CUSHING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472921,41.859574 ]
	    },
	    "properties": {
	    "stop_id":"20980",
	    "stop_name":"MINERAL SPRING NS S PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472044,41.859803 ]
	    },
	    "properties": {
	    "stop_id":"20990",
	    "stop_name":"MINERAL SPRING FS CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486228,41.859477 ]
	    },
	    "properties": {
	    "stop_id":"21000",
	    "stop_name":"WATERMAN NS CENTERDALE BYPASS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389806,41.859782 ]
	    },
	    "properties": {
	    "stop_id":"21005",
	    "stop_name":"EAST AVE NS GLENWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411856,41.86241 ]
	    },
	    "properties": {
	    "stop_id":"21010",
	    "stop_name":"SMITHFIELD AT 126 SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471001,41.859781 ]
	    },
	    "properties": {
	    "stop_id":"21030",
	    "stop_name":"MINERAL SPRING OPP MCGUIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47075,41.859975 ]
	    },
	    "properties": {
	    "stop_id":"21045",
	    "stop_name":"MINERAL SPRING NS MCGUIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354398,41.861232 ]
	    },
	    "properties": {
	    "stop_id":"21050",
	    "stop_name":"NEWPORT FS BEVERAGE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.358905,41.860842 ]
	    },
	    "properties": {
	    "stop_id":"21055",
	    "stop_name":"BEVERAGE HILL NS DEWEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367665,41.860747 ]
	    },
	    "properties": {
	    "stop_id":"21060",
	    "stop_name":"BEVERAGE HILL NS PROSPECT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371019,41.860658 ]
	    },
	    "properties": {
	    "stop_id":"21065",
	    "stop_name":"BEVERAGE HILL NS CHARLETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356386,41.860876 ]
	    },
	    "properties": {
	    "stop_id":"21070",
	    "stop_name":"BEVERAGE HILL FS WOODHAVEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355289,41.8609 ]
	    },
	    "properties": {
	    "stop_id":"21075",
	    "stop_name":"BEVERAGE HILL NS WILLISTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367446,41.860699 ]
	    },
	    "properties": {
	    "stop_id":"21080",
	    "stop_name":"BEVERAGE HILL NS DODGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361213,41.860838 ]
	    },
	    "properties": {
	    "stop_id":"21090",
	    "stop_name":"BEVERAGE HILL AT 368 BEVERAGE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398996,41.858771 ]
	    },
	    "properties": {
	    "stop_id":"21095",
	    "stop_name":"GRENVILLE STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469188,41.861199 ]
	    },
	    "properties": {
	    "stop_id":"21100",
	    "stop_name":"SUNSET AND BOURNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395842,41.861257 ]
	    },
	    "properties": {
	    "stop_id":"21110",
	    "stop_name":"PAWTUCKET NS DARTMOUTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468757,41.860168 ]
	    },
	    "properties": {
	    "stop_id":"21115",
	    "stop_name":"MINERAL SPRING OPP SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464644,41.861043 ]
	    },
	    "properties": {
	    "stop_id":"21120",
	    "stop_name":"MINERAL SPRING OPP 1860 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465257,41.860827 ]
	    },
	    "properties": {
	    "stop_id":"21125",
	    "stop_name":"MINERAL SPRING OPP MARILYN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449599,41.860992 ]
	    },
	    "properties": {
	    "stop_id":"21130",
	    "stop_name":"DOUGLAS AT 1307 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487048,41.860972 ]
	    },
	    "properties": {
	    "stop_id":"21140",
	    "stop_name":"WATERMAN OPP HELEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486917,41.861016 ]
	    },
	    "properties": {
	    "stop_id":"21155",
	    "stop_name":"WATERMAN NS HELEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461965,41.861537 ]
	    },
	    "properties": {
	    "stop_id":"21160",
	    "stop_name":"MINERAL SPRING MIDBLOCK SMITHFIELD RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46187,41.861493 ]
	    },
	    "properties": {
	    "stop_id":"21195",
	    "stop_name":"MINERAL SPRING AT 1830 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422653,41.86192 ]
	    },
	    "properties": {
	    "stop_id":"21200",
	    "stop_name":"CHARLES NS BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459147,41.862053 ]
	    },
	    "properties": {
	    "stop_id":"21205",
	    "stop_name":"MINERAL SPRING NS HAWTHORNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.422846,41.861825 ]
	    },
	    "properties": {
	    "stop_id":"21215",
	    "stop_name":"CHARLES FS ROOSEVELT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411707,41.862238 ]
	    },
	    "properties": {
	    "stop_id":"21225",
	    "stop_name":"SMITHFIELD OPP 114 SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368721,41.861143 ]
	    },
	    "properties": {
	    "stop_id":"21235",
	    "stop_name":"PROSPECT FS BEVERAGE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457557,41.862233 ]
	    },
	    "properties": {
	    "stop_id":"21240",
	    "stop_name":"MINERAL SPRING AT 1800 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451225,41.861987 ]
	    },
	    "properties": {
	    "stop_id":"21245",
	    "stop_name":"DOUGLAS FS SALEM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399278,41.863 ]
	    },
	    "properties": {
	    "stop_id":"21250",
	    "stop_name":"HOPE ARTISTE VILLAGE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457578,41.862372 ]
	    },
	    "properties": {
	    "stop_id":"21270",
	    "stop_name":"MINERAL SPRING NS TIMBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39916,41.862648 ]
	    },
	    "properties": {
	    "stop_id":"21290",
	    "stop_name":"HOPE ARTISTE VILLAGE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453914,41.863029 ]
	    },
	    "properties": {
	    "stop_id":"21295",
	    "stop_name":"MINERAL SPRING AT 1704 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388231,41.862704 ]
	    },
	    "properties": {
	    "stop_id":"21300",
	    "stop_name":"EAST AVE OPP SAYLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39414,41.863153 ]
	    },
	    "properties": {
	    "stop_id":"21305",
	    "stop_name":"PAWTUCKET NS WALTHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487981,41.862861 ]
	    },
	    "properties": {
	    "stop_id":"21310",
	    "stop_name":"WATERMAN OPP SAWIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455111,41.862895 ]
	    },
	    "properties": {
	    "stop_id":"21315",
	    "stop_name":"MINERAL SPRING FS ANDOVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452038,41.863477 ]
	    },
	    "properties": {
	    "stop_id":"21320",
	    "stop_name":"MINERAL SPRING FS DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48792,41.862898 ]
	    },
	    "properties": {
	    "stop_id":"21330",
	    "stop_name":"WATERMAN NS SAWIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388099,41.863202 ]
	    },
	    "properties": {
	    "stop_id":"21335",
	    "stop_name":"EAST AVE NS SAYLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452688,41.862969 ]
	    },
	    "properties": {
	    "stop_id":"21340",
	    "stop_name":"DOUGLAS FS MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42331,41.863292 ]
	    },
	    "properties": {
	    "stop_id":"21345",
	    "stop_name":"CHARLES FS HURDIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450503,41.863974 ]
	    },
	    "properties": {
	    "stop_id":"21350",
	    "stop_name":"MINERAL SPRING FS LEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423222,41.863427 ]
	    },
	    "properties": {
	    "stop_id":"21355",
	    "stop_name":"CHARLES NS MACARI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452419,41.862981 ]
	    },
	    "properties": {
	    "stop_id":"21360",
	    "stop_name":"DOUGLAS NS MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.369841,41.862149 ]
	    },
	    "properties": {
	    "stop_id":"21375",
	    "stop_name":"PROSPECT AT 560 PROSPECT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393321,41.864217 ]
	    },
	    "properties": {
	    "stop_id":"21380",
	    "stop_name":"PAWTUCKET NS ANTHONY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412144,41.864033 ]
	    },
	    "properties": {
	    "stop_id":"21385",
	    "stop_name":"SMITHFIELD OPP PIAVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412297,41.864124 ]
	    },
	    "properties": {
	    "stop_id":"21390",
	    "stop_name":"SMITHFIELD NS PIAVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392707,41.864747 ]
	    },
	    "properties": {
	    "stop_id":"21395",
	    "stop_name":"PAWTUCKET NS SAYLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45484,41.864542 ]
	    },
	    "properties": {
	    "stop_id":"21435",
	    "stop_name":"DOUGLAS AT 1445 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455455,41.86481 ]
	    },
	    "properties": {
	    "stop_id":"21445",
	    "stop_name":"DOUGLAS OPP AMELIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399179,41.865187 ]
	    },
	    "properties": {
	    "stop_id":"21450",
	    "stop_name":"SAYLES AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39929,41.8651 ]
	    },
	    "properties": {
	    "stop_id":"21455",
	    "stop_name":"SAYLES AVENUE (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.370773,41.863071 ]
	    },
	    "properties": {
	    "stop_id":"21460",
	    "stop_name":"PROSPECT AT 500 PROSPECT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392198,41.865414 ]
	    },
	    "properties": {
	    "stop_id":"21465",
	    "stop_name":"PAWTUCKET NS BOUTWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.3873,41.865317 ]
	    },
	    "properties": {
	    "stop_id":"21475",
	    "stop_name":"EAST AVE NS MANNING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443295,41.865769 ]
	    },
	    "properties": {
	    "stop_id":"21495",
	    "stop_name":"MINERAL SPRING NS DAVID"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445561,41.865146 ]
	    },
	    "properties": {
	    "stop_id":"21500",
	    "stop_name":"MINERAL SPRING NS COLEMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488699,41.864272 ]
	    },
	    "properties": {
	    "stop_id":"21510",
	    "stop_name":"WATERMAN FS 146A WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456875,41.865724 ]
	    },
	    "properties": {
	    "stop_id":"21520",
	    "stop_name":"DOUGLAS AT 1500 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372424,41.864627 ]
	    },
	    "properties": {
	    "stop_id":"21530",
	    "stop_name":"PROSPECT NS RHODE ISLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391551,41.866 ]
	    },
	    "properties": {
	    "stop_id":"21545",
	    "stop_name":"PAWTUCKET FS DUNNELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424406,41.866278 ]
	    },
	    "properties": {
	    "stop_id":"21550",
	    "stop_name":"CHARLES FS OBED"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39122,41.866528 ]
	    },
	    "properties": {
	    "stop_id":"21555",
	    "stop_name":"PAWTUCKET NS KNOWLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441789,41.866281 ]
	    },
	    "properties": {
	    "stop_id":"21560",
	    "stop_name":"MINERAL SPRING OPP POPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49031,41.866381 ]
	    },
	    "properties": {
	    "stop_id":"21565",
	    "stop_name":"WATERMAN NS GREYSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424347,41.866506 ]
	    },
	    "properties": {
	    "stop_id":"21570",
	    "stop_name":"CHARLES NS OBED"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442137,41.86632 ]
	    },
	    "properties": {
	    "stop_id":"21575",
	    "stop_name":"MINERAL SPRING FS POPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45827,41.866769 ]
	    },
	    "properties": {
	    "stop_id":"21585",
	    "stop_name":"DOUGLAS OPP FITZHUGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458267,41.866642 ]
	    },
	    "properties": {
	    "stop_id":"21590",
	    "stop_name":"DOUGLAS PIKE FS FITZHUGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439761,41.866923 ]
	    },
	    "properties": {
	    "stop_id":"21610",
	    "stop_name":"MINERAL SPRING AT 1388 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440243,41.866935 ]
	    },
	    "properties": {
	    "stop_id":"21615",
	    "stop_name":"MINERAL SPRING NS WOODWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375285,41.867512 ]
	    },
	    "properties": {
	    "stop_id":"21630",
	    "stop_name":"PROSPECT NS LINWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390231,41.867401 ]
	    },
	    "properties": {
	    "stop_id":"21635",
	    "stop_name":"PAWTUCKET NS WALDO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390039,41.867806 ]
	    },
	    "properties": {
	    "stop_id":"21640",
	    "stop_name":"PAWTUCKET OPP WALDO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437307,41.867635 ]
	    },
	    "properties": {
	    "stop_id":"21645",
	    "stop_name":"MINERAL SPRING OPP 1350 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387099,41.86817 ]
	    },
	    "properties": {
	    "stop_id":"21650",
	    "stop_name":"EAST AVE FS HARVEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436269,41.867772 ]
	    },
	    "properties": {
	    "stop_id":"21655",
	    "stop_name":"MINERAL SPRING FS PALM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379187,41.869403 ]
	    },
	    "properties": {
	    "stop_id":"21665",
	    "stop_name":"SCHOOL OPP ROSEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425087,41.868037 ]
	    },
	    "properties": {
	    "stop_id":"21670",
	    "stop_name":"CHARLES FS MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.38725,41.867824 ]
	    },
	    "properties": {
	    "stop_id":"21695",
	    "stop_name":"EAST AVE OPP HARVEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434107,41.868302 ]
	    },
	    "properties": {
	    "stop_id":"21705",
	    "stop_name":"MINERAL SPRING AT 1243 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424994,41.868187 ]
	    },
	    "properties": {
	    "stop_id":"21720",
	    "stop_name":"CHARLES NS MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424397,41.868593 ]
	    },
	    "properties": {
	    "stop_id":"21735",
	    "stop_name":"MINERAL SPRING OPP CLEVELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.38862,41.869358 ]
	    },
	    "properties": {
	    "stop_id":"21740",
	    "stop_name":"PAWTUCKET AT 171 PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432721,41.86844 ]
	    },
	    "properties": {
	    "stop_id":"21745",
	    "stop_name":"MINERAL SPRING NS IVAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491574,41.868089 ]
	    },
	    "properties": {
	    "stop_id":"21750",
	    "stop_name":"WATERMAN FS ADAMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375984,41.868306 ]
	    },
	    "properties": {
	    "stop_id":"21760",
	    "stop_name":"PROSPECT FS ENGLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434629,41.868329 ]
	    },
	    "properties": {
	    "stop_id":"21765",
	    "stop_name":"MINERAL SPRING OPP ELENA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432724,41.868582 ]
	    },
	    "properties": {
	    "stop_id":"21770",
	    "stop_name":"MINERAL SPRING OPP IVAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424064,41.868856 ]
	    },
	    "properties": {
	    "stop_id":"21780",
	    "stop_name":"MINERAL SPRING FS CLEVELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412983,41.867488 ]
	    },
	    "properties": {
	    "stop_id":"21805",
	    "stop_name":"SMITHFIELD FS NATHANIEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42195,41.869348 ]
	    },
	    "properties": {
	    "stop_id":"21810",
	    "stop_name":"MINERAL SPRING FS CAMPBELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46163,41.869025 ]
	    },
	    "properties": {
	    "stop_id":"21815",
	    "stop_name":"DOUGLAS NS TANGLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412897,41.867452 ]
	    },
	    "properties": {
	    "stop_id":"21820",
	    "stop_name":"SMITHFIELD OPP GROSVENOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397408,41.869395 ]
	    },
	    "properties": {
	    "stop_id":"21830",
	    "stop_name":"WHITMAN STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.532351,41.868633 ]
	    },
	    "properties": {
	    "stop_id":"21835",
	    "stop_name":"STOP&SHOP (PUTNAM PIKE - SMITHFIELD)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420053,41.86969 ]
	    },
	    "properties": {
	    "stop_id":"21840",
	    "stop_name":"MINERAL SPRING NS DORA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354295,41.870848 ]
	    },
	    "properties": {
	    "stop_id":"21845",
	    "stop_name":"NEWPORT NS EDENDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388527,41.869321 ]
	    },
	    "properties": {
	    "stop_id":"21850",
	    "stop_name":"PAWTUCKET NS RANDALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420146,41.869755 ]
	    },
	    "properties": {
	    "stop_id":"21855",
	    "stop_name":"MINERAL SPRING FS DORMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49272,41.869702 ]
	    },
	    "properties": {
	    "stop_id":"21860",
	    "stop_name":"WATERMAN NS GLADSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46133,41.868965 ]
	    },
	    "properties": {
	    "stop_id":"21865",
	    "stop_name":"DOUGLAS OPP TANGLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397015,41.869718 ]
	    },
	    "properties": {
	    "stop_id":"21870",
	    "stop_name":"WHITMAN STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364709,41.870389 ]
	    },
	    "properties": {
	    "stop_id":"21880",
	    "stop_name":"COLUMBUS NS YORK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367298,41.870488 ]
	    },
	    "properties": {
	    "stop_id":"21885",
	    "stop_name":"COLUMBUS NS MEMORIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417104,41.870386 ]
	    },
	    "properties": {
	    "stop_id":"21900",
	    "stop_name":"MINERAL SPRING FS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528222,41.870076 ]
	    },
	    "properties": {
	    "stop_id":"21930",
	    "stop_name":"PUTNAM PIKE OPP TACO BELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.535354,41.870127 ]
	    },
	    "properties": {
	    "stop_id":"21940",
	    "stop_name":"PUTNAM PIKE AT 458 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387646,41.871099 ]
	    },
	    "properties": {
	    "stop_id":"21945",
	    "stop_name":"GEORGE OPP DELANY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.53166,41.870177 ]
	    },
	    "properties": {
	    "stop_id":"21950",
	    "stop_name":"PUTNAM PIKE NS SANDERSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425691,41.869493 ]
	    },
	    "properties": {
	    "stop_id":"21960",
	    "stop_name":"CHARLES AT 1090 CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.539093,41.870086 ]
	    },
	    "properties": {
	    "stop_id":"21965",
	    "stop_name":"PUTNAM PIKE OPP DANECROFT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426353,41.87053 ]
	    },
	    "properties": {
	    "stop_id":"21985",
	    "stop_name":"CHARLES NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367138,41.870543 ]
	    },
	    "properties": {
	    "stop_id":"21990",
	    "stop_name":"COLUMBUS OPP MEMORIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.541834,41.870201 ]
	    },
	    "properties": {
	    "stop_id":"21995",
	    "stop_name":"PUTNAM PIKE NS MAPLECREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417255,41.870453 ]
	    },
	    "properties": {
	    "stop_id":"22000",
	    "stop_name":"MINERAL SPRING NS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.534791,41.870292 ]
	    },
	    "properties": {
	    "stop_id":"22005",
	    "stop_name":"PUTNAM PIKE OPP 458 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368968,41.870803 ]
	    },
	    "properties": {
	    "stop_id":"22015",
	    "stop_name":"COLUMBUS NS HAZARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.54171,41.870316 ]
	    },
	    "properties": {
	    "stop_id":"22020",
	    "stop_name":"PUTNAM PIKE OPP MAPLECREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380073,41.870652 ]
	    },
	    "properties": {
	    "stop_id":"22025",
	    "stop_name":"SCHOOL OPP POND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.531431,41.8703 ]
	    },
	    "properties": {
	    "stop_id":"22030",
	    "stop_name":"PUTNAM PIKE FS SANDERSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529326,41.870358 ]
	    },
	    "properties": {
	    "stop_id":"22040",
	    "stop_name":"PUTNAM PIKE AT APPLE VALLEY MALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.545237,41.870336 ]
	    },
	    "properties": {
	    "stop_id":"22045",
	    "stop_name":"PUTNAM PIKE NS CRESTVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413589,41.870641 ]
	    },
	    "properties": {
	    "stop_id":"22050",
	    "stop_name":"SMITHFIELD FS W LAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463736,41.870681 ]
	    },
	    "properties": {
	    "stop_id":"22060",
	    "stop_name":"DOUGLAS OPP WENSCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.369374,41.871036 ]
	    },
	    "properties": {
	    "stop_id":"22065",
	    "stop_name":"COLUMBUS OPP ORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493638,41.870975 ]
	    },
	    "properties": {
	    "stop_id":"22070",
	    "stop_name":"WATERMAN NS MINORU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415943,41.870785 ]
	    },
	    "properties": {
	    "stop_id":"22075",
	    "stop_name":"MINERAL SPRING FS OVERLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414095,41.871113 ]
	    },
	    "properties": {
	    "stop_id":"22080",
	    "stop_name":"MINERAL SPRING NS SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42756,41.871354 ]
	    },
	    "properties": {
	    "stop_id":"22090",
	    "stop_name":"CHARLES OPP GILLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.54997,41.870853 ]
	    },
	    "properties": {
	    "stop_id":"22095",
	    "stop_name":"PUTNAM PIKE AT 566 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427501,41.871445 ]
	    },
	    "properties": {
	    "stop_id":"22115",
	    "stop_name":"CHARLES NS GILLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387978,41.870819 ]
	    },
	    "properties": {
	    "stop_id":"22120",
	    "stop_name":"GEORGE NS PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410519,41.871987 ]
	    },
	    "properties": {
	    "stop_id":"22135",
	    "stop_name":"MINERAL SPRING NS FAIRLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.549715,41.870961 ]
	    },
	    "properties": {
	    "stop_id":"22150",
	    "stop_name":"PUTNAM PIKE NS PLEASANT VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.552788,41.871352 ]
	    },
	    "properties": {
	    "stop_id":"22155",
	    "stop_name":"PUTNAM PIKE NS SMITH AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.552353,41.871426 ]
	    },
	    "properties": {
	    "stop_id":"22170",
	    "stop_name":"PUTNAM PIKE AT 595 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464101,41.870849 ]
	    },
	    "properties": {
	    "stop_id":"22180",
	    "stop_name":"DOUGLAS NS WENSCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377067,41.869531 ]
	    },
	    "properties": {
	    "stop_id":"22190",
	    "stop_name":"PROSPECT OPP CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.38732,41.874083 ]
	    },
	    "properties": {
	    "stop_id":"22200",
	    "stop_name":"GEORGE FS CEDAR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410744,41.872075 ]
	    },
	    "properties": {
	    "stop_id":"22205",
	    "stop_name":"MINERAL SPRING FS FAIRLAWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429205,41.872255 ]
	    },
	    "properties": {
	    "stop_id":"22210",
	    "stop_name":"CHARLES OPP BORAH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429157,41.87231 ]
	    },
	    "properties": {
	    "stop_id":"22215",
	    "stop_name":"CHARLES NS BORAH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387816,41.87189 ]
	    },
	    "properties": {
	    "stop_id":"22220",
	    "stop_name":"GEORGE FS GRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494324,41.872356 ]
	    },
	    "properties": {
	    "stop_id":"22230",
	    "stop_name":"WATERMAN OPP ARNOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371444,41.87196 ]
	    },
	    "properties": {
	    "stop_id":"22235",
	    "stop_name":"COLUMBUS FS POND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4944,41.872289 ]
	    },
	    "properties": {
	    "stop_id":"22240",
	    "stop_name":"WATERMAN NS ARNOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419134,41.872917 ]
	    },
	    "properties": {
	    "stop_id":"22265",
	    "stop_name":"POWER NS ANDERTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407059,41.873001 ]
	    },
	    "properties": {
	    "stop_id":"22280",
	    "stop_name":"MINERAL SPRING OPP 545 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407017,41.872948 ]
	    },
	    "properties": {
	    "stop_id":"22285",
	    "stop_name":"MINERAL SPRING AT 560 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379358,41.872127 ]
	    },
	    "properties": {
	    "stop_id":"22290",
	    "stop_name":"PROSPECT FS MEADOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.558747,41.873668 ]
	    },
	    "properties": {
	    "stop_id":"22310",
	    "stop_name":"PUTNAM PIKE AT ST PHILLIPS SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.558677,41.873744 ]
	    },
	    "properties": {
	    "stop_id":"22320",
	    "stop_name":"PUTNAM PIKE OPP ST PHILLIPS SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419204,41.872633 ]
	    },
	    "properties": {
	    "stop_id":"22325",
	    "stop_name":"POWER FS ANDERTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40214,41.873768 ]
	    },
	    "properties": {
	    "stop_id":"22345",
	    "stop_name":"MINERAL SPRING at 400 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.495504,41.873587 ]
	    },
	    "properties": {
	    "stop_id":"22360",
	    "stop_name":"WATERMAN NS CAMP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402044,41.873876 ]
	    },
	    "properties": {
	    "stop_id":"22380",
	    "stop_name":"MINERAL SPRING FS HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419175,41.873817 ]
	    },
	    "properties": {
	    "stop_id":"22400",
	    "stop_name":"POWER NS ORIOLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.3999,41.874123 ]
	    },
	    "properties": {
	    "stop_id":"22405",
	    "stop_name":"MINERAL SPRING OPP HICKS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400294,41.874233 ]
	    },
	    "properties": {
	    "stop_id":"22425",
	    "stop_name":"MINERAL SPRING AT SAMUEL SLATER SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.495685,41.873859 ]
	    },
	    "properties": {
	    "stop_id":"22445",
	    "stop_name":"WATERMAN OPP 304 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378356,41.873915 ]
	    },
	    "properties": {
	    "stop_id":"22450",
	    "stop_name":"SUMMIT NS DIVISION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419317,41.87483 ]
	    },
	    "properties": {
	    "stop_id":"22465",
	    "stop_name":"POWER FS OAKDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504445,41.874759 ]
	    },
	    "properties": {
	    "stop_id":"22470",
	    "stop_name":"ESMOND NS PENBRYN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396269,41.874846 ]
	    },
	    "properties": {
	    "stop_id":"22475",
	    "stop_name":"MINERAL SPRING NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396122,41.874762 ]
	    },
	    "properties": {
	    "stop_id":"22480",
	    "stop_name":"MINERAL SPRING FS BAGLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.562504,41.874683 ]
	    },
	    "properties": {
	    "stop_id":"22485",
	    "stop_name":"PUTNAM PIKE NS ARTHUR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433898,41.875303 ]
	    },
	    "properties": {
	    "stop_id":"22495",
	    "stop_name":"CHARLES OPP MINER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392386,41.875006 ]
	    },
	    "properties": {
	    "stop_id":"22500",
	    "stop_name":"COLLYER PARK (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.562163,41.874687 ]
	    },
	    "properties": {
	    "stop_id":"22505",
	    "stop_name":"PUTNAM PIKE OPP ARTHUR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433942,41.875292 ]
	    },
	    "properties": {
	    "stop_id":"22510",
	    "stop_name":"CHARLES NS MINER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386907,41.875143 ]
	    },
	    "properties": {
	    "stop_id":"22535",
	    "stop_name":"GEORGE NS EAST AVE EXT."
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39196,41.875442 ]
	    },
	    "properties": {
	    "stop_id":"22540",
	    "stop_name":"MINERAL SPRING NS MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391695,41.875571 ]
	    },
	    "properties": {
	    "stop_id":"22545",
	    "stop_name":"MINERAL SPRING FS MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.343218,41.876221 ]
	    },
	    "properties": {
	    "stop_id":"22585",
	    "stop_name":"ARMISTICE NS BROOKDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.34545,41.87664 ]
	    },
	    "properties": {
	    "stop_id":"22590",
	    "stop_name":"ARMISTICE NS FELSMERE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418842,41.876283 ]
	    },
	    "properties": {
	    "stop_id":"22600",
	    "stop_name":"POWER NS CHANDLER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504356,41.874753 ]
	    },
	    "properties": {
	    "stop_id":"22605",
	    "stop_name":"ESMOND FS HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418618,41.876422 ]
	    },
	    "properties": {
	    "stop_id":"22610",
	    "stop_name":"POWER FS CHANDLER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.503248,41.876284 ]
	    },
	    "properties": {
	    "stop_id":"22615",
	    "stop_name":"ESMOND NS THORNTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37902,41.87663 ]
	    },
	    "properties": {
	    "stop_id":"22645",
	    "stop_name":"WALCOTT FS SUMMIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401585,41.876919 ]
	    },
	    "properties": {
	    "stop_id":"22650",
	    "stop_name":"WEEDEN NS HANCOCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.346205,41.876948 ]
	    },
	    "properties": {
	    "stop_id":"22655",
	    "stop_name":"ARMISTICE FS DAGGETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401574,41.876993 ]
	    },
	    "properties": {
	    "stop_id":"22665",
	    "stop_name":"WEEDEN NS STURMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377349,41.876934 ]
	    },
	    "properties": {
	    "stop_id":"22670",
	    "stop_name":"WALCOTT NS ARLINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405481,41.877156 ]
	    },
	    "properties": {
	    "stop_id":"22680",
	    "stop_name":"WEEDEN OPP MOSHASSUCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.348098,41.877304 ]
	    },
	    "properties": {
	    "stop_id":"22685",
	    "stop_name":"ARMISTICE AT 664 ARMISTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40454,41.877102 ]
	    },
	    "properties": {
	    "stop_id":"22695",
	    "stop_name":"WEEDEN NS LEONARD JENARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388464,41.876842 ]
	    },
	    "properties": {
	    "stop_id":"22720",
	    "stop_name":"MAIN FS COMMERCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37719,41.87705 ]
	    },
	    "properties": {
	    "stop_id":"22725",
	    "stop_name":"WALCOTT FS GROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.384578,41.876682 ]
	    },
	    "properties": {
	    "stop_id":"22745",
	    "stop_name":"EAST AVE EXT NS MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37626,41.8772 ]
	    },
	    "properties": {
	    "stop_id":"22750",
	    "stop_name":"WALCOTT FS MAYNARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349764,41.877486 ]
	    },
	    "properties": {
	    "stop_id":"22760",
	    "stop_name":"ARMISTICE NS SLATER PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383417,41.877298 ]
	    },
	    "properties": {
	    "stop_id":"22765",
	    "stop_name":"PAWTUCKET TRANSIT CTR (TRANSIT CTR SIDE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410348,41.877669 ]
	    },
	    "properties": {
	    "stop_id":"22780",
	    "stop_name":"WEEDEN OPP RESERVOIR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498835,41.876455 ]
	    },
	    "properties": {
	    "stop_id":"22785",
	    "stop_name":"WATERMAN AVE OPP BENNY'S MAIN OFFICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.350005,41.877678 ]
	    },
	    "properties": {
	    "stop_id":"22790",
	    "stop_name":"ARMISTICE FS ORIENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.571859,41.877892 ]
	    },
	    "properties": {
	    "stop_id":"22795",
	    "stop_name":"PUTNAM PIKE FS W GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408858,41.877574 ]
	    },
	    "properties": {
	    "stop_id":"22805",
	    "stop_name":"WEEDEN NS HAZEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.570921,41.877571 ]
	    },
	    "properties": {
	    "stop_id":"22810",
	    "stop_name":"PUTNAM PIKE NS W GREENVILLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.351963,41.877931 ]
	    },
	    "properties": {
	    "stop_id":"22815",
	    "stop_name":"ARMISTICE NS GREENSLITT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.351962,41.878077 ]
	    },
	    "properties": {
	    "stop_id":"22820",
	    "stop_name":"ARMISTICE NS MALVERN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.580512,41.882515 ]
	    },
	    "properties": {
	    "stop_id":"22825",
	    "stop_name":"PUTNAM PIKE OPP WINDY HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412352,41.878054 ]
	    },
	    "properties": {
	    "stop_id":"22835",
	    "stop_name":"WEEDEN NS ST LUKES CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.577826,41.880603 ]
	    },
	    "properties": {
	    "stop_id":"22840",
	    "stop_name":"PUTNAM PIKE NS 735 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410969,41.877792 ]
	    },
	    "properties": {
	    "stop_id":"22850",
	    "stop_name":"WEEDEN NS JANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354075,41.878306 ]
	    },
	    "properties": {
	    "stop_id":"22855",
	    "stop_name":"ARMISTICE FS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414679,41.878608 ]
	    },
	    "properties": {
	    "stop_id":"22880",
	    "stop_name":"WEEDEN FS SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353689,41.878437 ]
	    },
	    "properties": {
	    "stop_id":"22885",
	    "stop_name":"ARMISTICE NS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354333,41.879648 ]
	    },
	    "properties": {
	    "stop_id":"22895",
	    "stop_name":"NEWPORT AT 872 NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417417,41.878361 ]
	    },
	    "properties": {
	    "stop_id":"22905",
	    "stop_name":"WEEDEN NS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414834,41.878676 ]
	    },
	    "properties": {
	    "stop_id":"22910",
	    "stop_name":"WEEDEN NS SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354089,41.881863 ]
	    },
	    "properties": {
	    "stop_id":"22915",
	    "stop_name":"NEWPORT NS CARTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355321,41.878732 ]
	    },
	    "properties": {
	    "stop_id":"22925",
	    "stop_name":"ARMISTICE FS LITTLEFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435484,41.878537 ]
	    },
	    "properties": {
	    "stop_id":"22930",
	    "stop_name":"RT 246 OPP WOODWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500896,41.87821 ]
	    },
	    "properties": {
	    "stop_id":"22935",
	    "stop_name":"WATERMAN OPP 349 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501095,41.878565 ]
	    },
	    "properties": {
	    "stop_id":"22945",
	    "stop_name":"WATERMAN OPP ESMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.357135,41.878918 ]
	    },
	    "properties": {
	    "stop_id":"22950",
	    "stop_name":"ARMISTICE NS BLOOMFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387495,41.878393 ]
	    },
	    "properties": {
	    "stop_id":"22955",
	    "stop_name":"DEXTER NS BAYLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435553,41.878403 ]
	    },
	    "properties": {
	    "stop_id":"22960",
	    "stop_name":"RT 246 FS WOODWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388846,41.879854 ]
	    },
	    "properties": {
	    "stop_id":"22965",
	    "stop_name":"DEXTER OPP ANDREW FERLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388262,41.87851 ]
	    },
	    "properties": {
	    "stop_id":"22970",
	    "stop_name":"GOFF NS DEXTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372425,41.8791 ]
	    },
	    "properties": {
	    "stop_id":"22980",
	    "stop_name":"ARMISTICE NS N BEND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372465,41.879033 ]
	    },
	    "properties": {
	    "stop_id":"22981",
	    "stop_name":"ARMISTICE FS WALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.357044,41.879073 ]
	    },
	    "properties": {
	    "stop_id":"22990",
	    "stop_name":"ARMISTICE NS PERRIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371181,41.879326 ]
	    },
	    "properties": {
	    "stop_id":"22995",
	    "stop_name":"ARMISTICE NS ASHTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.370735,41.879519 ]
	    },
	    "properties": {
	    "stop_id":"23000",
	    "stop_name":"ARMISTICE OPP ASHTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360209,41.879563 ]
	    },
	    "properties": {
	    "stop_id":"23005",
	    "stop_name":"ARMISTICE NS ROSEMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359097,41.87952 ]
	    },
	    "properties": {
	    "stop_id":"23015",
	    "stop_name":"ARMISTICE NS BOOTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386566,41.880283 ]
	    },
	    "properties": {
	    "stop_id":"23020",
	    "stop_name":"BROAD NS GOFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386345,41.880101 ]
	    },
	    "properties": {
	    "stop_id":"23030",
	    "stop_name":"BROAD FS EXCHANGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.369401,41.879768 ]
	    },
	    "properties": {
	    "stop_id":"23035",
	    "stop_name":"ARMISTICE FS SCHOEFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36965,41.879811 ]
	    },
	    "properties": {
	    "stop_id":"23050",
	    "stop_name":"ARMISTICE OPP SCHOFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360328,41.879729 ]
	    },
	    "properties": {
	    "stop_id":"23055",
	    "stop_name":"ARMISTICE FS ROSEMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386718,41.879593 ]
	    },
	    "properties": {
	    "stop_id":"23070",
	    "stop_name":"GOFF FS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.382599,41.8791 ]
	    },
	    "properties": {
	    "stop_id":"23075",
	    "stop_name":"ROOSEVELT OPP CITY HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368329,41.88002 ]
	    },
	    "properties": {
	    "stop_id":"23090",
	    "stop_name":"ARMISTICE AT 209 ARMISTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399788,41.877767 ]
	    },
	    "properties": {
	    "stop_id":"23100",
	    "stop_name":"LONSDALE FS WEEDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383472,41.879818 ]
	    },
	    "properties": {
	    "stop_id":"23125",
	    "stop_name":"EXCHANGE FS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.384874,41.879959 ]
	    },
	    "properties": {
	    "stop_id":"23130",
	    "stop_name":"EXCHANGE NS MONTGOMERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367845,41.88025 ]
	    },
	    "properties": {
	    "stop_id":"23145",
	    "stop_name":"ARMISTICE OPP 209 ARMISTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383717,41.879979 ]
	    },
	    "properties": {
	    "stop_id":"23150",
	    "stop_name":"EXCHANGE NS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363851,41.880381 ]
	    },
	    "properties": {
	    "stop_id":"23160",
	    "stop_name":"ARMISTICE FS ALDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365972,41.880592 ]
	    },
	    "properties": {
	    "stop_id":"23165",
	    "stop_name":"ARMISTICE OPP 270 ARMISTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366218,41.880634 ]
	    },
	    "properties": {
	    "stop_id":"23170",
	    "stop_name":"ARMISTICE FS GEORGE BENNETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390929,41.88144 ]
	    },
	    "properties": {
	    "stop_id":"23215",
	    "stop_name":"DEXTER NS BARTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377789,41.881816 ]
	    },
	    "properties": {
	    "stop_id":"23220",
	    "stop_name":"BROADWAY NS BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472373,41.878174 ]
	    },
	    "properties": {
	    "stop_id":"23225",
	    "stop_name":"DOUGLAS PIKE OPP 80 DOUGLAS PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392294,41.882671 ]
	    },
	    "properties": {
	    "stop_id":"23250",
	    "stop_name":"DEXTER OPP CONGRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386555,41.882687 ]
	    },
	    "properties": {
	    "stop_id":"23270",
	    "stop_name":"BROAD FS BARTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438806,41.884246 ]
	    },
	    "properties": {
	    "stop_id":"23280",
	    "stop_name":"RT 246 FS COBBLE HILL RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400228,41.884381 ]
	    },
	    "properties": {
	    "stop_id":"23285",
	    "stop_name":"LONSDALE NS RAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.439123,41.884601 ]
	    },
	    "properties": {
	    "stop_id":"23290",
	    "stop_name":"RT 246 FS KENDALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378611,41.880154 ]
	    },
	    "properties": {
	    "stop_id":"23295",
	    "stop_name":"BROADWAY NS EXCHANGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394152,41.884125 ]
	    },
	    "properties": {
	    "stop_id":"23320",
	    "stop_name":"DEXTER FS CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354244,41.881937 ]
	    },
	    "properties": {
	    "stop_id":"23325",
	    "stop_name":"NEWPORT FS CARTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377023,41.883436 ]
	    },
	    "properties": {
	    "stop_id":"23330",
	    "stop_name":"BROADWAY AT 340 BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.394616,41.88477 ]
	    },
	    "properties": {
	    "stop_id":"23335",
	    "stop_name":"DEXTER NS RAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386952,41.884229 ]
	    },
	    "properties": {
	    "stop_id":"23345",
	    "stop_name":"BROAD NS CLAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401212,41.885977 ]
	    },
	    "properties": {
	    "stop_id":"23355",
	    "stop_name":"LONSDALE NS PARKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354061,41.884819 ]
	    },
	    "properties": {
	    "stop_id":"23370",
	    "stop_name":"NEWPORT NS SWEET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386823,41.884483 ]
	    },
	    "properties": {
	    "stop_id":"23375",
	    "stop_name":"BROAD NS JENKS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395316,41.885114 ]
	    },
	    "properties": {
	    "stop_id":"23410",
	    "stop_name":"DEXTER AT SPARKYS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396107,41.885794 ]
	    },
	    "properties": {
	    "stop_id":"23445",
	    "stop_name":"DEXTER NS RICHARDSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365929,41.885408 ]
	    },
	    "properties": {
	    "stop_id":"23450",
	    "stop_name":"CENTRAL BETWEEN FREEMAN & KENYON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.584248,41.884631 ]
	    },
	    "properties": {
	    "stop_id":"23455",
	    "stop_name":"PUTNAM PIKE AT 66 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356538,41.887311 ]
	    },
	    "properties": {
	    "stop_id":"23460",
	    "stop_name":"CENTRAL FS TWEED"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36156,41.886124 ]
	    },
	    "properties": {
	    "stop_id":"23470",
	    "stop_name":"CENTRAL NS YORK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363992,41.88568 ]
	    },
	    "properties": {
	    "stop_id":"23475",
	    "stop_name":"CENTRAL NS MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354047,41.887451 ]
	    },
	    "properties": {
	    "stop_id":"23480",
	    "stop_name":"NEWPORT NS CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376176,41.885099 ]
	    },
	    "properties": {
	    "stop_id":"23485",
	    "stop_name":"BROADWAY FS LAUREL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.584426,41.884828 ]
	    },
	    "properties": {
	    "stop_id":"23490",
	    "stop_name":"PUTNAM PIKE OPP LAKESIDE MOTEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375936,41.885107 ]
	    },
	    "properties": {
	    "stop_id":"23495",
	    "stop_name":"BROADWAY OPP LAUREL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361456,41.886306 ]
	    },
	    "properties": {
	    "stop_id":"23505",
	    "stop_name":"CENTRAL NS HARDING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.38722,41.886722 ]
	    },
	    "properties": {
	    "stop_id":"23510",
	    "stop_name":"BROAD OPP PACIFIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387056,41.886579 ]
	    },
	    "properties": {
	    "stop_id":"23530",
	    "stop_name":"BROAD NS PACIFIC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397433,41.887238 ]
	    },
	    "properties": {
	    "stop_id":"23540",
	    "stop_name":"DEXTER NS COWDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.358979,41.886854 ]
	    },
	    "properties": {
	    "stop_id":"23545",
	    "stop_name":"CENTRAL NS MAKIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375201,41.8868 ]
	    },
	    "properties": {
	    "stop_id":"23555",
	    "stop_name":"BROADWAY FS WOODBINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397865,41.88757 ]
	    },
	    "properties": {
	    "stop_id":"23560",
	    "stop_name":"DEXTER NS HEDLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375162,41.886645 ]
	    },
	    "properties": {
	    "stop_id":"23565",
	    "stop_name":"BROADWAY NS WOODBINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354203,41.885713 ]
	    },
	    "properties": {
	    "stop_id":"23575",
	    "stop_name":"NEWPORT NS ROBINSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356493,41.887476 ]
	    },
	    "properties": {
	    "stop_id":"23585",
	    "stop_name":"CENTRAL NS TWEED"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.59616,41.887686 ]
	    },
	    "properties": {
	    "stop_id":"23590",
	    "stop_name":"PUTNAM PIKE OPP 199 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352052,41.888413 ]
	    },
	    "properties": {
	    "stop_id":"23600",
	    "stop_name":"CENTRAL FS GRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354455,41.887832 ]
	    },
	    "properties": {
	    "stop_id":"23610",
	    "stop_name":"CENTRAL NS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374291,41.888453 ]
	    },
	    "properties": {
	    "stop_id":"23620",
	    "stop_name":"BROADWAY OPP LILAC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387199,41.888514 ]
	    },
	    "properties": {
	    "stop_id":"23625",
	    "stop_name":"BROAD FS SACRED HEART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401974,41.888861 ]
	    },
	    "properties": {
	    "stop_id":"23635",
	    "stop_name":"LONSDALE NS WEST HUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440696,41.887547 ]
	    },
	    "properties": {
	    "stop_id":"23640",
	    "stop_name":"RT 246 FS TWIN RIVER CASINO, LOUISQUISSET ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399273,41.888798 ]
	    },
	    "properties": {
	    "stop_id":"23645",
	    "stop_name":"DEXTER NS CROSSMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.595583,41.887603 ]
	    },
	    "properties": {
	    "stop_id":"23650",
	    "stop_name":"PUTNAM PIKE AT 185 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349708,41.888965 ]
	    },
	    "properties": {
	    "stop_id":"23655",
	    "stop_name":"CENTRAL NS LIVERPOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387343,41.888235 ]
	    },
	    "properties": {
	    "stop_id":"23660",
	    "stop_name":"BROAD OPP SACRED HEART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447213,41.887 ]
	    },
	    "properties": {
	    "stop_id":"23665",
	    "stop_name":"TWIN RIVER CASINO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352024,41.88852 ]
	    },
	    "properties": {
	    "stop_id":"23670",
	    "stop_name":"CENTRAL NS GRAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40044,41.889718 ]
	    },
	    "properties": {
	    "stop_id":"23685",
	    "stop_name":"DEXTER NS W HUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.347534,41.889467 ]
	    },
	    "properties": {
	    "stop_id":"23690",
	    "stop_name":"CENTRAL NS DAGGETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374518,41.888203 ]
	    },
	    "properties": {
	    "stop_id":"23695",
	    "stop_name":"BROADWAY OPP MARGARET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400477,41.889817 ]
	    },
	    "properties": {
	    "stop_id":"23700",
	    "stop_name":"DEXTER FS W HUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.34907,41.889245 ]
	    },
	    "properties": {
	    "stop_id":"23705",
	    "stop_name":"CENTRAL NS DRAPER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.344859,41.890122 ]
	    },
	    "properties": {
	    "stop_id":"23715",
	    "stop_name":"CENTRAL OPP FARNUM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.346532,41.889855 ]
	    },
	    "properties": {
	    "stop_id":"23735",
	    "stop_name":"CENTRAL NS CLARNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373403,41.890043 ]
	    },
	    "properties": {
	    "stop_id":"23740",
	    "stop_name":"BROADWAY NS EAST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373398,41.89039 ]
	    },
	    "properties": {
	    "stop_id":"23745",
	    "stop_name":"BROADWAY FS EAST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.344476,41.890344 ]
	    },
	    "properties": {
	    "stop_id":"23750",
	    "stop_name":"CENTRAL FS BRADLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387483,41.891385 ]
	    },
	    "properties": {
	    "stop_id":"23760",
	    "stop_name":"BROAD NS COWDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.612363,41.895079 ]
	    },
	    "properties": {
	    "stop_id":"23765",
	    "stop_name":"PUTNAM PIKE AT HARMONY MARKET PLACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402567,41.891464 ]
	    },
	    "properties": {
	    "stop_id":"23775",
	    "stop_name":"LONSDALE AT RANDOM HOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404086,41.894072 ]
	    },
	    "properties": {
	    "stop_id":"23790",
	    "stop_name":"LONSDALE OPP RICHLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372363,41.89208 ]
	    },
	    "properties": {
	    "stop_id":"23800",
	    "stop_name":"BROADWAY NS GEORGE BENNETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35768,41.892344 ]
	    },
	    "properties": {
	    "stop_id":"23850",
	    "stop_name":"BENEFIT NS COTTAGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361997,41.892502 ]
	    },
	    "properties": {
	    "stop_id":"23860",
	    "stop_name":"BENEFIT OPP ADIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387737,41.893566 ]
	    },
	    "properties": {
	    "stop_id":"23865",
	    "stop_name":"BROAD AT 995 BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35787,41.892446 ]
	    },
	    "properties": {
	    "stop_id":"23870",
	    "stop_name":"BENEFIT NS EMORY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364545,41.892541 ]
	    },
	    "properties": {
	    "stop_id":"23875",
	    "stop_name":"BENEFIT NS MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368042,41.892604 ]
	    },
	    "properties": {
	    "stop_id":"23890",
	    "stop_name":"BENEFIT NS BATES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402634,41.891324 ]
	    },
	    "properties": {
	    "stop_id":"23915",
	    "stop_name":"LONSDALE OPP 991 LONSDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.370851,41.892639 ]
	    },
	    "properties": {
	    "stop_id":"23920",
	    "stop_name":"BENEFIT FS BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371491,41.89273 ]
	    },
	    "properties": {
	    "stop_id":"23935",
	    "stop_name":"BENEFIT NS BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368124,41.892695 ]
	    },
	    "properties": {
	    "stop_id":"23945",
	    "stop_name":"BENEFIT FS BATES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366148,41.892666 ]
	    },
	    "properties": {
	    "stop_id":"23950",
	    "stop_name":"BENEFIT OPP 121 BENEFIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368646,41.892691 ]
	    },
	    "properties": {
	    "stop_id":"23955",
	    "stop_name":"BENEFIT OPP 71 BENEFIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403394,41.893176 ]
	    },
	    "properties": {
	    "stop_id":"23970",
	    "stop_name":"LONSDALE OPP BINFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387902,41.893481 ]
	    },
	    "properties": {
	    "stop_id":"23975",
	    "stop_name":"BROAD AT 100 BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446767,41.893911 ]
	    },
	    "properties": {
	    "stop_id":"23985",
	    "stop_name":"RT 246 NS TWIN RIVER RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440832,41.887861 ]
	    },
	    "properties": {
	    "stop_id":"23995",
	    "stop_name":"RT 246 NS 1575 OLD LOUISQUISSET (state police)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404033,41.894087 ]
	    },
	    "properties": {
	    "stop_id":"24015",
	    "stop_name":"LONSDALE NS RICHLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.617391,41.896207 ]
	    },
	    "properties": {
	    "stop_id":"24040",
	    "stop_name":"PUTNAM PIKE NS ABSALONA HILL RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488886,41.889111 ]
	    },
	    "properties": {
	    "stop_id":"24045",
	    "stop_name":"DOUGLAS PIKE NS WHIPPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.629107,41.897236 ]
	    },
	    "properties": {
	    "stop_id":"24060",
	    "stop_name":"PUTNAM PIKE NS GENTLEMAN FARMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.617496,41.896106 ]
	    },
	    "properties": {
	    "stop_id":"24065",
	    "stop_name":"PUTNAM PIKE OPP ABSALONA HILL RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388278,41.896559 ]
	    },
	    "properties": {
	    "stop_id":"24075",
	    "stop_name":"BROAD NS HUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388387,41.896049 ]
	    },
	    "properties": {
	    "stop_id":"24080",
	    "stop_name":"BROAD AT 1190 BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449495,41.896497 ]
	    },
	    "properties": {
	    "stop_id":"24090",
	    "stop_name":"RT 246 OPP CHASE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389125,41.898552 ]
	    },
	    "properties": {
	    "stop_id":"24120",
	    "stop_name":"BROAD FS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453397,41.899562 ]
	    },
	    "properties": {
	    "stop_id":"24155",
	    "stop_name":"CCRI (LINCOLN CAMPUS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450685,41.899194 ]
	    },
	    "properties": {
	    "stop_id":"24180",
	    "stop_name":"RT 246 FS ANNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390954,41.90106 ]
	    },
	    "properties": {
	    "stop_id":"24205",
	    "stop_name":"BROAD OPP CURRIER PLAYLOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455802,41.902856 ]
	    },
	    "properties": {
	    "stop_id":"24215",
	    "stop_name":"JENCKES HILL OPP DAVIES VOCATIONAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455809,41.902816 ]
	    },
	    "properties": {
	    "stop_id":"24216",
	    "stop_name":"JENCKES HILL AT DAVIES VOCATIONAL ENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391447,41.902407 ]
	    },
	    "properties": {
	    "stop_id":"24220",
	    "stop_name":"BROAD NS CHAPEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451108,41.90146 ]
	    },
	    "properties": {
	    "stop_id":"24225",
	    "stop_name":"RT 246 FS JENCKES HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450957,41.901297 ]
	    },
	    "properties": {
	    "stop_id":"24230",
	    "stop_name":"RT 246 NS BREAKNECK HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.629654,41.897502 ]
	    },
	    "properties": {
	    "stop_id":"24285",
	    "stop_name":"PUTNAM PIKE OPP GENTLEMENS FARMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392141,41.904349 ]
	    },
	    "properties": {
	    "stop_id":"24290",
	    "stop_name":"BROAD OPP 232 BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.647324,41.904951 ]
	    },
	    "properties": {
	    "stop_id":"24295",
	    "stop_name":"PUTNAM PIKE OPP PINEWOOD PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.635914,41.903629 ]
	    },
	    "properties": {
	    "stop_id":"24310",
	    "stop_name":"PUTNAM PIKE NS PINEWOOD PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.650989,41.9051 ]
	    },
	    "properties": {
	    "stop_id":"24320",
	    "stop_name":"PUTNAM PIKE FS LEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.651517,41.905213 ]
	    },
	    "properties": {
	    "stop_id":"24330",
	    "stop_name":"PUTNAM PIKE AT 895 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390929,41.900568 ]
	    },
	    "properties": {
	    "stop_id":"24350",
	    "stop_name":"BROAD NS LUSITANIA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.39307,41.90694 ]
	    },
	    "properties": {
	    "stop_id":"24385",
	    "stop_name":"BROAD NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391516,41.902339 ]
	    },
	    "properties": {
	    "stop_id":"24405",
	    "stop_name":"BROAD AT 126 BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.666637,41.907594 ]
	    },
	    "properties": {
	    "stop_id":"24410",
	    "stop_name":"PUTNAM PIKE AT CVS PHARMACY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392181,41.90412 ]
	    },
	    "properties": {
	    "stop_id":"24415",
	    "stop_name":"BROAD NS MAPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.667703,41.908684 ]
	    },
	    "properties": {
	    "stop_id":"24430",
	    "stop_name":"PUTNAM PIKE FS CHESTNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393731,41.90834 ]
	    },
	    "properties": {
	    "stop_id":"24435",
	    "stop_name":"BROAD NS LAFAYETTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.669082,41.912789 ]
	    },
	    "properties": {
	    "stop_id":"24440",
	    "stop_name":"PUTNAM PIKE FS DOUGLAS HOOK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.668357,41.910062 ]
	    },
	    "properties": {
	    "stop_id":"24445",
	    "stop_name":"PUTNAM PIKE OPP 1109 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395007,41.910292 ]
	    },
	    "properties": {
	    "stop_id":"24455",
	    "stop_name":"BROAD NS FOREST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395834,41.911788 ]
	    },
	    "properties": {
	    "stop_id":"24480",
	    "stop_name":"BROAD NS DEXTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396272,41.91231 ]
	    },
	    "properties": {
	    "stop_id":"24485",
	    "stop_name":"BROAD OPP BOWEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403344,41.912111 ]
	    },
	    "properties": {
	    "stop_id":"24495",
	    "stop_name":"MENDON NS ANN & HOPE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405715,41.913653 ]
	    },
	    "properties": {
	    "stop_id":"24496",
	    "stop_name":"STOP&SHOP (MENDON ROAD - CUMBERLAND)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403343,41.912798 ]
	    },
	    "properties": {
	    "stop_id":"24500",
	    "stop_name":"MENDON FS ANN & HOPE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398204,41.914092 ]
	    },
	    "properties": {
	    "stop_id":"24520",
	    "stop_name":"BROAD FS CUMBERLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.398349,41.914021 ]
	    },
	    "properties": {
	    "stop_id":"24535",
	    "stop_name":"BROAD FS ANN & HOPE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399755,41.91362 ]
	    },
	    "properties": {
	    "stop_id":"24540",
	    "stop_name":"ANN & HOPE WAY FS MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40399,41.914498 ]
	    },
	    "properties": {
	    "stop_id":"24555",
	    "stop_name":"MENDON NS RR TRACKS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404758,41.915773 ]
	    },
	    "properties": {
	    "stop_id":"24565",
	    "stop_name":"MENDON NS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404687,41.915921 ]
	    },
	    "properties": {
	    "stop_id":"24570",
	    "stop_name":"MENDON NS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407389,41.919153 ]
	    },
	    "properties": {
	    "stop_id":"24595",
	    "stop_name":"MENDON FS DORR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408541,41.92016 ]
	    },
	    "properties": {
	    "stop_id":"24605",
	    "stop_name":"MENDON NS MARSHALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481141,41.923841 ]
	    },
	    "properties": {
	    "stop_id":"24641",
	    "stop_name":"POWDER HILL OPP CROWNMARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.539059,41.921526 ]
	    },
	    "properties": {
	    "stop_id":"24645",
	    "stop_name":"BRYANT UNIVERSITY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415003,41.92537 ]
	    },
	    "properties": {
	    "stop_id":"24675",
	    "stop_name":"MENDON FS SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420064,41.927933 ]
	    },
	    "properties": {
	    "stop_id":"24680",
	    "stop_name":"MENDON OPP CUSHING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413344,41.92475 ]
	    },
	    "properties": {
	    "stop_id":"24685",
	    "stop_name":"MENDON FS RIVERVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423273,41.930227 ]
	    },
	    "properties": {
	    "stop_id":"24690",
	    "stop_name":"MENDON NS MARTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423162,41.930237 ]
	    },
	    "properties": {
	    "stop_id":"24695",
	    "stop_name":"MENDON FS MARTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482607,41.930964 ]
	    },
	    "properties": {
	    "stop_id":"24705",
	    "stop_name":"ALBION AT VERIZON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426265,41.932459 ]
	    },
	    "properties": {
	    "stop_id":"24710",
	    "stop_name":"MENDON NS RYAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428944,41.935403 ]
	    },
	    "properties": {
	    "stop_id":"24720",
	    "stop_name":"MENDON NS ASHTON PK WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.465415,41.934608 ]
	    },
	    "properties": {
	    "stop_id":"24725",
	    "stop_name":"RT 116 OPP BLACKSTONE VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449804,41.934529 ]
	    },
	    "properties": {
	    "stop_id":"24730",
	    "stop_name":"RT 116 FS RT 126"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457868,41.934558 ]
	    },
	    "properties": {
	    "stop_id":"24735",
	    "stop_name":"RT 116 FS BLACKSTONE VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450929,41.934657 ]
	    },
	    "properties": {
	    "stop_id":"24740",
	    "stop_name":"RT 116 FS OLD RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473838,41.934961 ]
	    },
	    "properties": {
	    "stop_id":"24745",
	    "stop_name":"RT 116 FS WAKE ROBIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481668,41.934336 ]
	    },
	    "properties": {
	    "stop_id":"24755",
	    "stop_name":"ALBION OPP CROSS COMPANY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481817,41.934278 ]
	    },
	    "properties": {
	    "stop_id":"24756",
	    "stop_name":"ALBION AT CROSS COMPANY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443966,41.936207 ]
	    },
	    "properties": {
	    "stop_id":"24770",
	    "stop_name":"BANK OF AMERICA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429522,41.937356 ]
	    },
	    "properties": {
	    "stop_id":"24775",
	    "stop_name":"MENDON NS STORE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461828,41.939404 ]
	    },
	    "properties": {
	    "stop_id":"24785",
	    "stop_name":"20 BLACKSTONE VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.476323,41.937541 ]
	    },
	    "properties": {
	    "stop_id":"24810",
	    "stop_name":"LINCOLN MALL BETWEEN MARSHALLS & 5 BELOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.430899,41.938764 ]
	    },
	    "properties": {
	    "stop_id":"24815",
	    "stop_name":"MENDON NS SCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464583,41.936452 ]
	    },
	    "properties": {
	    "stop_id":"24820",
	    "stop_name":"10 AMICA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.658163,41.942859 ]
	    },
	    "properties": {
	    "stop_id":"24840",
	    "stop_name":"LAPHAM FARM NS VICTORY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.648949,41.947761 ]
	    },
	    "properties": {
	    "stop_id":"24870",
	    "stop_name":"VICTORY HWAY NS SANDHILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.657526,41.943199 ]
	    },
	    "properties": {
	    "stop_id":"24875",
	    "stop_name":"VICTORY HWAY NS LAPHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.649344,41.951837 ]
	    },
	    "properties": {
	    "stop_id":"24945",
	    "stop_name":"VICTORY HWY AT 919 VICTORY HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.70219,41.95712 ]
	    },
	    "properties": {
	    "stop_id":"24972",
	    "stop_name":"BRIDGEWAY NS SAYLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.659908,41.958838 ]
	    },
	    "properties": {
	    "stop_id":"24985",
	    "stop_name":"CENTRAL NS CORRIE LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.65894,41.958644 ]
	    },
	    "properties": {
	    "stop_id":"24990",
	    "stop_name":"CENTRAL NS CORRIE LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.699877,41.960612 ]
	    },
	    "properties": {
	    "stop_id":"24995",
	    "stop_name":"MAIN FS ELM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.700104,41.960348 ]
	    },
	    "properties": {
	    "stop_id":"25010",
	    "stop_name":"MAIN OPP ELM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.671261,41.962265 ]
	    },
	    "properties": {
	    "stop_id":"25030",
	    "stop_name":"CENTRAL AT 73 CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.66346,41.961143 ]
	    },
	    "properties": {
	    "stop_id":"25035",
	    "stop_name":"CENTRAL FS LYNNE LN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.678861,41.96673 ]
	    },
	    "properties": {
	    "stop_id":"25085",
	    "stop_name":"CHAPEL FS MAIN ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.690851,41.966934 ]
	    },
	    "properties": {
	    "stop_id":"25100",
	    "stop_name":"CHAPEL OPP CHUM BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.691109,41.966879 ]
	    },
	    "properties": {
	    "stop_id":"25102",
	    "stop_name":"CHAPEL OPP 67 CHAPEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.678843,41.96634 ]
	    },
	    "properties": {
	    "stop_id":"25110",
	    "stop_name":"CHAPEL NS MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.682526,41.967568 ]
	    },
	    "properties": {
	    "stop_id":"25125",
	    "stop_name":"CHAPEL NS FOSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49383,41.960172 ]
	    },
	    "properties": {
	    "stop_id":"25275",
	    "stop_name":"RT 146 FS SAYLES HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507966,41.97107 ]
	    },
	    "properties": {
	    "stop_id":"25300",
	    "stop_name":"RT 146A FS OLD SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513779,41.980816 ]
	    },
	    "properties": {
	    "stop_id":"25315",
	    "stop_name":"RT 146A NS RAYMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509449,41.972282 ]
	    },
	    "properties": {
	    "stop_id":"25320",
	    "stop_name":"RT 146A AT 435 146A"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51482,41.98277 ]
	    },
	    "properties": {
	    "stop_id":"25335",
	    "stop_name":"RT 146A NS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513978,41.980802 ]
	    },
	    "properties": {
	    "stop_id":"25340",
	    "stop_name":"RT 146A AT 63 EDDY DOWLING HWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516304,41.983247 ]
	    },
	    "properties": {
	    "stop_id":"25350",
	    "stop_name":"RT 146A NS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522391,41.98602 ]
	    },
	    "properties": {
	    "stop_id":"25405",
	    "stop_name":"PROVIDENCE NS RT 146A"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521376,41.991273 ]
	    },
	    "properties": {
	    "stop_id":"25540",
	    "stop_name":"PROVIDENCE FS BALLOU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521259,41.993655 ]
	    },
	    "properties": {
	    "stop_id":"25600",
	    "stop_name":"PROVIDENCE NS VOSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.5212,41.993788 ]
	    },
	    "properties": {
	    "stop_id":"25605",
	    "stop_name":"PROVIDENCE NS COLLINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52235,41.996 ]
	    },
	    "properties": {
	    "stop_id":"25690",
	    "stop_name":"PROVIDENCE NS S MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522405,41.996581 ]
	    },
	    "properties": {
	    "stop_id":"25695",
	    "stop_name":"S MAIN opp BUXTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521445,41.996936 ]
	    },
	    "properties": {
	    "stop_id":"25705",
	    "stop_name":"S MAIN OPP 307 S MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51987,41.997802 ]
	    },
	    "properties": {
	    "stop_id":"25735",
	    "stop_name":"S MAIN OPP SOUTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.5194,41.998143 ]
	    },
	    "properties": {
	    "stop_id":"25750",
	    "stop_name":"S MAIN FS EAST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.518433,41.998712 ]
	    },
	    "properties": {
	    "stop_id":"25760",
	    "stop_name":"S MAIN FS FRONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513985,42.000101 ]
	    },
	    "properties": {
	    "stop_id":"25885",
	    "stop_name":"BERNON OPP ALLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481251,41.92373 ]
	    },
	    "properties": {
	    "stop_id":"26000",
	    "stop_name":"POWDER HILL FS CROWNMARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513395,42.00309 ]
	    },
	    "properties": {
	    "stop_id":"26015",
	    "stop_name":"MAIN FS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479773,41.916646 ]
	    },
	    "properties": {
	    "stop_id":"26020",
	    "stop_name":"POWDER HILL NS JENCKES HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511595,42.003986 ]
	    },
	    "properties": {
	    "stop_id":"26155",
	    "stop_name":"CLINTON AT 113 CLINTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42918,41.836193 ]
	    },
	    "properties": {
	    "stop_id":"26910",
	    "stop_name":"SMITH OPP FREDERICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431184,41.836661 ]
	    },
	    "properties": {
	    "stop_id":"26915",
	    "stop_name":"SMITH NS PEMBROKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.468409,41.854253 ]
	    },
	    "properties": {
	    "stop_id":"26970",
	    "stop_name":"SMITH NS SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.50184,41.87796 ]
	    },
	    "properties": {
	    "stop_id":"27045",
	    "stop_name":"ESMOND NS WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486127,41.859573 ]
	    },
	    "properties": {
	    "stop_id":"27050",
	    "stop_name":"WATERMAN FS BYPASS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488596,41.864322 ]
	    },
	    "properties": {
	    "stop_id":"27055",
	    "stop_name":"WATERMAN OPP GREYSTONE FABRICS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489571,41.865513 ]
	    },
	    "properties": {
	    "stop_id":"27060",
	    "stop_name":"WATERMAN OPP WHITEHALL APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491316,41.867925 ]
	    },
	    "properties": {
	    "stop_id":"27065",
	    "stop_name":"WATERMAN FS NELSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.492694,41.869816 ]
	    },
	    "properties": {
	    "stop_id":"27070",
	    "stop_name":"WATERMAN FS GLADSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493446,41.870879 ]
	    },
	    "properties": {
	    "stop_id":"27075",
	    "stop_name":"WATERMAN OPP MINORU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498987,41.876368 ]
	    },
	    "properties": {
	    "stop_id":"27105",
	    "stop_name":"WATERMAN NS BENNYS MAIN OFFICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.496877,41.874684 ]
	    },
	    "properties": {
	    "stop_id":"27115",
	    "stop_name":"WATERMAN NS 316 WATERMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45623,41.848016 ]
	    },
	    "properties": {
	    "stop_id":"27125",
	    "stop_name":"SMITH OPP CAPITAL VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438354,41.839673 ]
	    },
	    "properties": {
	    "stop_id":"27140",
	    "stop_name":"SMITH NS WYNDHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431335,41.836561 ]
	    },
	    "properties": {
	    "stop_id":"27150",
	    "stop_name":"SMITH OPP PEMBROKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501983,41.877916 ]
	    },
	    "properties": {
	    "stop_id":"27155",
	    "stop_name":"ESMOND OPP 2 ESMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417832,41.841544 ]
	    },
	    "properties": {
	    "stop_id":"27190",
	    "stop_name":"CHARLES OPP 356 CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399299,41.797995 ]
	    },
	    "properties": {
	    "stop_id":"27200",
	    "stop_name":"ALLENS OPP MOTIVA ENTERPRISES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.393398,41.779476 ]
	    },
	    "properties": {
	    "stop_id":"27210",
	    "stop_name":"NORWOOD FS NARRAGANSETT BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437505,41.730161 ]
	    },
	    "properties": {
	    "stop_id":"27215",
	    "stop_name":"POST FS ELKLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438487,41.727772 ]
	    },
	    "properties": {
	    "stop_id":"27220",
	    "stop_name":"POST FS ALHAMBRA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459086,41.696412 ]
	    },
	    "properties": {
	    "stop_id":"27225",
	    "stop_name":"POST AT 3399 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448835,41.669111 ]
	    },
	    "properties": {
	    "stop_id":"27230",
	    "stop_name":"POST NS HESPER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448544,41.82569 ]
	    },
	    "properties": {
	    "stop_id":"27235",
	    "stop_name":"MT PLEASANT OPP MONTROSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449162,41.829562 ]
	    },
	    "properties": {
	    "stop_id":"27245",
	    "stop_name":"MT PLEASANT NS DOVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449416,41.831004 ]
	    },
	    "properties": {
	    "stop_id":"27250",
	    "stop_name":"MT PLEASANT NS ROANOKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449658,41.832538 ]
	    },
	    "properties": {
	    "stop_id":"27255",
	    "stop_name":"MT PLEASANT NS CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453986,41.841759 ]
	    },
	    "properties": {
	    "stop_id":"27260",
	    "stop_name":"COLLEGE FS MT PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395923,41.86129 ]
	    },
	    "properties": {
	    "stop_id":"28170",
	    "stop_name":"PAWTUCKET OPP DARTMOUTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522165,41.995453 ]
	    },
	    "properties": {
	    "stop_id":"28605",
	    "stop_name":"PROVIDENCE NS COE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.519611,41.984544 ]
	    },
	    "properties": {
	    "stop_id":"28610",
	    "stop_name":"RT 146A NS WHITE PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421325,41.857529 ]
	    },
	    "properties": {
	    "stop_id":"28620",
	    "stop_name":"CHARLES BETWEEN SMART & DOROTHY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306211,41.457661 ]
	    },
	    "properties": {
	    "stop_id":"29060",
	    "stop_name":"BELLEVUE FS LAKEVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.308268,41.45567 ]
	    },
	    "properties": {
	    "stop_id":"29070",
	    "stop_name":"BELLEVUE FS LEDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30616,41.457595 ]
	    },
	    "properties": {
	    "stop_id":"29075",
	    "stop_name":"BELLEVUE NS LAKEVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.510485,41.37899 ]
	    },
	    "properties": {
	    "stop_id":"29120",
	    "stop_name":"GREAT ISLAND RD AT FERRY TERMINAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498739,41.37416 ]
	    },
	    "properties": {
	    "stop_id":"29140",
	    "stop_name":"SAND HILL COVE OPP ROGER WHEELER BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498932,41.37405 ]
	    },
	    "properties": {
	    "stop_id":"29141",
	    "stop_name":"SAND HILL COVE AT ROGER WHEELER BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475734,41.389111 ]
	    },
	    "properties": {
	    "stop_id":"29145",
	    "stop_name":"OCEAN FS DESANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47348,41.39026 ]
	    },
	    "properties": {
	    "stop_id":"29146",
	    "stop_name":"OCEAN AT SCARBOROUGH BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45707,41.790191 ]
	    },
	    "properties": {
	    "stop_id":"29190",
	    "stop_name":"DYER NS CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455072,41.795858 ]
	    },
	    "properties": {
	    "stop_id":"29215",
	    "stop_name":"CHESTNUT HILL AT 116 CHESTNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45248,41.795549 ]
	    },
	    "properties": {
	    "stop_id":"29220",
	    "stop_name":"LAUREL HILL FS CHESTNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457664,41.792871 ]
	    },
	    "properties": {
	    "stop_id":"29225",
	    "stop_name":"DYER AT 711 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45716,41.790019 ]
	    },
	    "properties": {
	    "stop_id":"29235",
	    "stop_name":"DYER FS CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448757,41.801635 ]
	    },
	    "properties": {
	    "stop_id":"29570",
	    "stop_name":"JENNINGS MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397948,41.8875 ]
	    },
	    "properties": {
	    "stop_id":"29600",
	    "stop_name":"DEXTER NS COWDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377351,41.867494 ]
	    },
	    "properties": {
	    "stop_id":"29610",
	    "stop_name":"SCHOOL OPP ENGLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376619,41.866668 ]
	    },
	    "properties": {
	    "stop_id":"29615",
	    "stop_name":"SCHOOL AT RIVERVIEW TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375562,41.86448 ]
	    },
	    "properties": {
	    "stop_id":"29620",
	    "stop_name":"SCHOOL AT BOYS & GIRLS CLUB"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375103,41.862257 ]
	    },
	    "properties": {
	    "stop_id":"29625",
	    "stop_name":"SCHOOL OPP MARYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373443,41.860623 ]
	    },
	    "properties": {
	    "stop_id":"29630",
	    "stop_name":"BEVERAGE HILL AT SLATER DYE CO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372077,41.860645 ]
	    },
	    "properties": {
	    "stop_id":"29635",
	    "stop_name":"BEVERAGE HILL OPP RIDCO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363589,41.860815 ]
	    },
	    "properties": {
	    "stop_id":"29640",
	    "stop_name":"BEVERAGE HILL OPP GEORGE BENNETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444274,41.805093 ]
	    },
	    "properties": {
	    "stop_id":"29655",
	    "stop_name":"PRESIDENTIAL PLACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44898,41.800816 ]
	    },
	    "properties": {
	    "stop_id":"29675",
	    "stop_name":"ARLINGTON MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445235,41.799341 ]
	    },
	    "properties": {
	    "stop_id":"29680",
	    "stop_name":"HARRIS HOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451123,41.792664 ]
	    },
	    "properties": {
	    "stop_id":"29685",
	    "stop_name":"DEVAN MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444699,41.82493 ]
	    },
	    "properties": {
	    "stop_id":"30105",
	    "stop_name":"ATWELLS OPP JULIAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446993,41.825092 ]
	    },
	    "properties": {
	    "stop_id":"30110",
	    "stop_name":"ATWELLS FS CARLETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44676,41.82491 ]
	    },
	    "properties": {
	    "stop_id":"30115",
	    "stop_name":"ATWELLS NS CARLETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444243,41.824797 ]
	    },
	    "properties": {
	    "stop_id":"30120",
	    "stop_name":"ATWELLS NS PUTNAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419563,41.817947 ]
	    },
	    "properties": {
	    "stop_id":"30126",
	    "stop_name":"CAHIR FS WESTMINSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367365,41.888327 ]
	    },
	    "properties": {
	    "stop_id":"30175",
	    "stop_name":"STOP&SHOP (COTTAGE STREET - PAWTUCKET)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354121,41.893028 ]
	    },
	    "properties": {
	    "stop_id":"30190",
	    "stop_name":"NEWPORT NS CHARPENTIER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354139,41.891071 ]
	    },
	    "properties": {
	    "stop_id":"30195",
	    "stop_name":"NEWPORT NS LEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354134,41.889748 ]
	    },
	    "properties": {
	    "stop_id":"30200",
	    "stop_name":"NEWPORT NS BUCKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354325,41.877319 ]
	    },
	    "properties": {
	    "stop_id":"30205",
	    "stop_name":"NEWPORT FS ARMISTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354352,41.874412 ]
	    },
	    "properties": {
	    "stop_id":"30210",
	    "stop_name":"NEWPORT OPP LANNI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354397,41.872986 ]
	    },
	    "properties": {
	    "stop_id":"30215",
	    "stop_name":"NEWPORT AT 596 NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354432,41.870415 ]
	    },
	    "properties": {
	    "stop_id":"30220",
	    "stop_name":"NEWPORT NS COLUMBUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354474,41.866519 ]
	    },
	    "properties": {
	    "stop_id":"30235",
	    "stop_name":"NEWPORT NS PARKVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354508,41.863476 ]
	    },
	    "properties": {
	    "stop_id":"30240",
	    "stop_name":"NEWPORT AT 176 NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354524,41.861856 ]
	    },
	    "properties": {
	    "stop_id":"30245",
	    "stop_name":"NEWPORT NS BEVERAGE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354388,41.863789 ]
	    },
	    "properties": {
	    "stop_id":"30250",
	    "stop_name":"NEWPORT AT 191 NEWPORT AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354252,41.872736 ]
	    },
	    "properties": {
	    "stop_id":"30255",
	    "stop_name":"NEWPORT AT 585 NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354244,41.875665 ]
	    },
	    "properties": {
	    "stop_id":"30260",
	    "stop_name":"NEWPORT AT 701 NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354182,41.878133 ]
	    },
	    "properties": {
	    "stop_id":"30265",
	    "stop_name":"NEWPORT NS ARMISTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354164,41.879482 ]
	    },
	    "properties": {
	    "stop_id":"30270",
	    "stop_name":"NEWPORT NS CRESCENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354019,41.891748 ]
	    },
	    "properties": {
	    "stop_id":"30280",
	    "stop_name":"NEWPORT NS BENEFIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353984,41.893496 ]
	    },
	    "properties": {
	    "stop_id":"30285",
	    "stop_name":"NEWPORT FS CUSHMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.530861,41.924434 ]
	    },
	    "properties": {
	    "stop_id":"30295",
	    "stop_name":"PARENTE'S RESTAURANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.519108,41.915765 ]
	    },
	    "properties": {
	    "stop_id":"30300",
	    "stop_name":"DOUGLAS PIKE FS WASHINGTON HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517703,41.914106 ]
	    },
	    "properties": {
	    "stop_id":"30305",
	    "stop_name":"DOUGLAS PIKE OPP HAMPTON INN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493176,41.959758 ]
	    },
	    "properties": {
	    "stop_id":"30315",
	    "stop_name":"RT 146 AT 1148 EDDIE DOWLING HWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489529,41.561053 ]
	    },
	    "properties": {
	    "stop_id":"30320",
	    "stop_name":"RT 4 FS OAK HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.560814,41.503928 ]
	    },
	    "properties": {
	    "stop_id":"30325",
	    "stop_name":"RT 2 NS PLEASANT VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516586,41.573863 ]
	    },
	    "properties": {
	    "stop_id":"30335",
	    "stop_name":"RT 2 OPP BALD HILL GARDEN CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376437,41.871395 ]
	    },
	    "properties": {
	    "stop_id":"30350",
	    "stop_name":"MEMORIAL HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376384,41.871524 ]
	    },
	    "properties": {
	    "stop_id":"30352",
	    "stop_name":"MEMORIAL HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420397,41.850559 ]
	    },
	    "properties": {
	    "stop_id":"30410",
	    "stop_name":"BRANCH FS CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421659,41.851082 ]
	    },
	    "properties": {
	    "stop_id":"30415",
	    "stop_name":"BRANCH FS HAWKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424057,41.852122 ]
	    },
	    "properties": {
	    "stop_id":"30420",
	    "stop_name":"BRANCH NS OPPER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424367,41.852163 ]
	    },
	    "properties": {
	    "stop_id":"30435",
	    "stop_name":"BRANCH FS LANGDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421721,41.851028 ]
	    },
	    "properties": {
	    "stop_id":"30440",
	    "stop_name":"BRANCH NS HAWKINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48779,41.954068 ]
	    },
	    "properties": {
	    "stop_id":"30445",
	    "stop_name":"RT 146 AT HONDA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.50328,41.967571 ]
	    },
	    "properties": {
	    "stop_id":"30455",
	    "stop_name":"RT 146 NS 146N [ON-RAMP]"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516838,41.983509 ]
	    },
	    "properties": {
	    "stop_id":"30460",
	    "stop_name":"RT 146A FS PARK AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.519521,41.984681 ]
	    },
	    "properties": {
	    "stop_id":"30465",
	    "stop_name":"RT 146A OPP WHITE PARKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52209,41.986757 ]
	    },
	    "properties": {
	    "stop_id":"30470",
	    "stop_name":"PROVIDENCE FS FABIEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521727,41.988884 ]
	    },
	    "properties": {
	    "stop_id":"30475",
	    "stop_name":"PROVIDENCE NS PIEDMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521467,41.990022 ]
	    },
	    "properties": {
	    "stop_id":"30480",
	    "stop_name":"PROVIDENCE AT 480 PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521278,41.991221 ]
	    },
	    "properties": {
	    "stop_id":"30485",
	    "stop_name":"PROVIDENCE NS BALLOU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520976,41.992711 ]
	    },
	    "properties": {
	    "stop_id":"30490",
	    "stop_name":"PROVIDENCE NS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522196,41.919062 ]
	    },
	    "properties": {
	    "stop_id":"40010",
	    "stop_name":"DOUGLAS PIKE NS DECOTIS FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.532057,41.996647 ]
	    },
	    "properties": {
	    "stop_id":"50000",
	    "stop_name":"MEMORIAL AT MEMORIAL COURT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.532826,41.997183 ]
	    },
	    "properties": {
	    "stop_id":"50005",
	    "stop_name":"MEMORIAL NS BOURDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.533026,41.998104 ]
	    },
	    "properties": {
	    "stop_id":"50010",
	    "stop_name":"MASON OPP 10TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.532874,42.000652 ]
	    },
	    "properties": {
	    "stop_id":"50020",
	    "stop_name":"FAIRMOUNT FS 9TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.531029,42.001057 ]
	    },
	    "properties": {
	    "stop_id":"50025",
	    "stop_name":"FAIRMOUNT NS 6TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529429,42.001352 ]
	    },
	    "properties": {
	    "stop_id":"50030",
	    "stop_name":"FAIRMOUNT FS 5TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528376,42.001593 ]
	    },
	    "properties": {
	    "stop_id":"50035",
	    "stop_name":"FAIRMOUNT FS 4TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.527377,42.003147 ]
	    },
	    "properties": {
	    "stop_id":"50040",
	    "stop_name":"SECOND FS CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528058,42.004927 ]
	    },
	    "properties": {
	    "stop_id":"50045",
	    "stop_name":"SECOND AT 525 SECOND ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528139,42.006383 ]
	    },
	    "properties": {
	    "stop_id":"50055",
	    "stop_name":"SECOND NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.527245,42.006678 ]
	    },
	    "properties": {
	    "stop_id":"50060",
	    "stop_name":"RIVER FS 2ND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523894,42.00487 ]
	    },
	    "properties": {
	    "stop_id":"50065",
	    "stop_name":"RIVER OPP BLACKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520467,42.004491 ]
	    },
	    "properties": {
	    "stop_id":"50070",
	    "stop_name":"VERRY OPP YMCA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517853,42.004529 ]
	    },
	    "properties": {
	    "stop_id":"50075",
	    "stop_name":"RAILROAD NS ARNOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.515452,42.004061 ]
	    },
	    "properties": {
	    "stop_id":"50080",
	    "stop_name":"RAILROAD OPP 147 RAILROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511139,42.001195 ]
	    },
	    "properties": {
	    "stop_id":"50085",
	    "stop_name":"FRONT ST AT 100 FRONT ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509648,42.005575 ]
	    },
	    "properties": {
	    "stop_id":"50090",
	    "stop_name":"CLINTON FS VETS PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507343,42.006388 ]
	    },
	    "properties": {
	    "stop_id":"50095",
	    "stop_name":"CLINTON AT STRIPMALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504596,42.007385 ]
	    },
	    "properties": {
	    "stop_id":"50105",
	    "stop_name":"CLINTON AT KENNEDY MANOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502326,42.00754 ]
	    },
	    "properties": {
	    "stop_id":"50110",
	    "stop_name":"CUMBERLAND FS CLINTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501622,42.006909 ]
	    },
	    "properties": {
	    "stop_id":"50115",
	    "stop_name":"CUMBERLAND OPP LOCUST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500929,42.00635 ]
	    },
	    "properties": {
	    "stop_id":"50120",
	    "stop_name":"CUMBERLAND FS KENDRICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.496682,42.005211 ]
	    },
	    "properties": {
	    "stop_id":"50125",
	    "stop_name":"CASS OPP DULUDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49366,42.006881 ]
	    },
	    "properties": {
	    "stop_id":"50130",
	    "stop_name":"SWEET OPP STANLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493129,42.007752 ]
	    },
	    "properties": {
	    "stop_id":"50135",
	    "stop_name":"ELM MIDBLOCK HEBERT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491322,42.008049 ]
	    },
	    "properties": {
	    "stop_id":"50140",
	    "stop_name":"ELM NS FLORIDA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.490144,42.009056 ]
	    },
	    "properties": {
	    "stop_id":"50145",
	    "stop_name":"ROBINSON OPP 632 ROBINSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488921,42.009248 ]
	    },
	    "properties": {
	    "stop_id":"50150",
	    "stop_name":"ROBINSON AT 715 ROBINSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487805,42.01072 ]
	    },
	    "properties": {
	    "stop_id":"50155",
	    "stop_name":"MORIN HEIGHTS AT 263 MORIN HEIGHTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488135,42.012994 ]
	    },
	    "properties": {
	    "stop_id":"50160",
	    "stop_name":"LINDEN NS HAYES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487136,42.015316 ]
	    },
	    "properties": {
	    "stop_id":"50165",
	    "stop_name":"LINDEN NS DIAMOND HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.484439,42.015691 ]
	    },
	    "properties": {
	    "stop_id":"50170",
	    "stop_name":"DIAMOND HILL AT CROWN COURT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477596,42.01679 ]
	    },
	    "properties": {
	    "stop_id":"50190",
	    "stop_name":"WALNUT HILL (SAVERS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478893,42.016935 ]
	    },
	    "properties": {
	    "stop_id":"50195",
	    "stop_name":"WALNUT HILL (SHAWS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47813,42.015673 ]
	    },
	    "properties": {
	    "stop_id":"50200",
	    "stop_name":"DIAMOND HILL OPP WALNUT HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475386,42.015424 ]
	    },
	    "properties": {
	    "stop_id":"50205",
	    "stop_name":"DIAMOND HILL AT CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471245,42.016942 ]
	    },
	    "properties": {
	    "stop_id":"50215",
	    "stop_name":"DIAMOND HILL (PRICERITE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472633,42.016037 ]
	    },
	    "properties": {
	    "stop_id":"50220",
	    "stop_name":"DIAMOND HILL (DOLLAR TREE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472045,42.015216 ]
	    },
	    "properties": {
	    "stop_id":"50290",
	    "stop_name":"DIAMOND HILL AT DIAMOND HILL PLAZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483534,42.015779 ]
	    },
	    "properties": {
	    "stop_id":"50305",
	    "stop_name":"DIAMOND HILL AT 1240 DIAMOND HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.484791,42.015797 ]
	    },
	    "properties": {
	    "stop_id":"50310",
	    "stop_name":"DIAMOND HILL OPP CROWN COURT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487202,42.015479 ]
	    },
	    "properties": {
	    "stop_id":"50315",
	    "stop_name":"LINDEN FS DIAMOND HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488304,42.012879 ]
	    },
	    "properties": {
	    "stop_id":"50320",
	    "stop_name":"LINDEN NS FALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487879,42.01068 ]
	    },
	    "properties": {
	    "stop_id":"50325",
	    "stop_name":"MORIN HEIGHTS OPP 263 MORIN HEIGHTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489406,42.009112 ]
	    },
	    "properties": {
	    "stop_id":"50330",
	    "stop_name":"ROBINSON AT BLDG 16"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491414,42.008121 ]
	    },
	    "properties": {
	    "stop_id":"50335",
	    "stop_name":"ELM NS COTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.492933,42.007905 ]
	    },
	    "properties": {
	    "stop_id":"50340",
	    "stop_name":"ELM FS HEBERT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493716,42.007009 ]
	    },
	    "properties": {
	    "stop_id":"50345",
	    "stop_name":"SWEET FS STANLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494748,42.005533 ]
	    },
	    "properties": {
	    "stop_id":"50350",
	    "stop_name":"CASS OPP 219 CASS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.497039,42.005287 ]
	    },
	    "properties": {
	    "stop_id":"50355",
	    "stop_name":"CASS NS MAILLOUX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500861,42.00649 ]
	    },
	    "properties": {
	    "stop_id":"50360",
	    "stop_name":"CUMBERLAND NS LOCUST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502568,42.007908 ]
	    },
	    "properties": {
	    "stop_id":"50365",
	    "stop_name":"CUMBERLAND NS CLINTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504218,42.008804 ]
	    },
	    "properties": {
	    "stop_id":"50370",
	    "stop_name":"SOCIAL FS CUMBERLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507615,42.008158 ]
	    },
	    "properties": {
	    "stop_id":"50380",
	    "stop_name":"SOCIAL AT BEAUCHEMIM LUMBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509765,42.007467 ]
	    },
	    "properties": {
	    "stop_id":"50385",
	    "stop_name":"SOCIAL NS POND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511309,42.006559 ]
	    },
	    "properties": {
	    "stop_id":"50390",
	    "stop_name":"SOCIAL OPP POST OFFICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528315,42.00168 ]
	    },
	    "properties": {
	    "stop_id":"50435",
	    "stop_name":"FAIRMOUNT NS 4TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529665,42.0014 ]
	    },
	    "properties": {
	    "stop_id":"50440",
	    "stop_name":"FAIRMOUNT OPP 5TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.53097,42.001133 ]
	    },
	    "properties": {
	    "stop_id":"50445",
	    "stop_name":"FAIRMOUNT AT 573 FAIRMOUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.533089,42.000499 ]
	    },
	    "properties": {
	    "stop_id":"50450",
	    "stop_name":"NINTH FS FAIRMOUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.532942,41.998198 ]
	    },
	    "properties": {
	    "stop_id":"50451",
	    "stop_name":"MASON NS 10TH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.53278,41.999709 ]
	    },
	    "properties": {
	    "stop_id":"50455",
	    "stop_name":"NINTH NS CHAPEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.533223,41.997716 ]
	    },
	    "properties": {
	    "stop_id":"50456",
	    "stop_name":"BOURDON NS MEMORIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.432809,41.846027 ]
	    },
	    "properties": {
	    "stop_id":"50475",
	    "stop_name":"HUXLEY FS ADMIRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520313,41.555552 ]
	    },
	    "properties": {
	    "stop_id":"50480",
	    "stop_name":"RT 2 OPP 40 S COUNTY TRL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.534215,41.545867 ]
	    },
	    "properties": {
	    "stop_id":"50485",
	    "stop_name":"RT 2 OPP VETERANS CEMETARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419447,41.819197 ]
	    },
	    "properties": {
	    "stop_id":"50490",
	    "stop_name":"W FRANKLIN NS WESTMINSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457766,41.798494 ]
	    },
	    "properties": {
	    "stop_id":"50495",
	    "stop_name":"DYER AT 546 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387351,41.865502 ]
	    },
	    "properties": {
	    "stop_id":"50610",
	    "stop_name":"EAST AVE OPP MANNING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371855,41.706665 ]
	    },
	    "properties": {
	    "stop_id":"50620",
	    "stop_name":"DRAPER OPP SUNRISE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.534237,41.545923 ]
	    },
	    "properties": {
	    "stop_id":"50630",
	    "stop_name":"RT 2 NS RI VETERANS MEMORIAL CEMETERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.553896,41.521709 ]
	    },
	    "properties": {
	    "stop_id":"50635",
	    "stop_name":"RT 2 OPP YAWGOO VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561119,41.503871 ]
	    },
	    "properties": {
	    "stop_id":"50640",
	    "stop_name":"RT 2 AT 2081 S COUNTY TRL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.569591,41.495404 ]
	    },
	    "properties": {
	    "stop_id":"50645",
	    "stop_name":"RT 2 NS WAITES CORNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.573104,41.493119 ]
	    },
	    "properties": {
	    "stop_id":"50650",
	    "stop_name":"RT 2 NS RT 138"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.567539,41.488602 ]
	    },
	    "properties": {
	    "stop_id":"50655",
	    "stop_name":"KINGSTOWN FS W KINGSTON PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561865,41.485173 ]
	    },
	    "properties": {
	    "stop_id":"50665",
	    "stop_name":"KINGSTOWN NS FAIRGROUNDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.555325,41.483611 ]
	    },
	    "properties": {
	    "stop_id":"50675",
	    "stop_name":"KINGSTOWN FS WATSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.552351,41.483126 ]
	    },
	    "properties": {
	    "stop_id":"50680",
	    "stop_name":"KINGSTOWN NS TLC COFFEE ROASTERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.540456,41.482704 ]
	    },
	    "properties": {
	    "stop_id":"50685",
	    "stop_name":"KINGSTOWN OPP W INDEPENDENCE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.538198,41.482359 ]
	    },
	    "properties": {
	    "stop_id":"50690",
	    "stop_name":"KINGSTOWN OPP RYAN CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.549827,41.482103 ]
	    },
	    "properties": {
	    "stop_id":"50720",
	    "stop_name":"KINGSTOWN NS PLAINS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.555632,41.483848 ]
	    },
	    "properties": {
	    "stop_id":"50725",
	    "stop_name":"KINGSTOWN OPP WATSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561195,41.485132 ]
	    },
	    "properties": {
	    "stop_id":"50735",
	    "stop_name":"KINGSTOWN NS FAIRGROUNDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.567559,41.488822 ]
	    },
	    "properties": {
	    "stop_id":"50740",
	    "stop_name":"KINGSTOWN OPP W KINGSTON PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.572194,41.493514 ]
	    },
	    "properties": {
	    "stop_id":"50750",
	    "stop_name":"RT 2 FS RT 138"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.563931,41.499017 ]
	    },
	    "properties": {
	    "stop_id":"50755",
	    "stop_name":"RT 2 OPP BARBERS POND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.556856,41.511206 ]
	    },
	    "properties": {
	    "stop_id":"50760",
	    "stop_name":"RT 2 NS WOLF ROCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.551301,41.526621 ]
	    },
	    "properties": {
	    "stop_id":"50765",
	    "stop_name":"RT 2 OPP OAK HARBOUR SHOPPING PLAZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.543068,41.536083 ]
	    },
	    "properties": {
	    "stop_id":"50770",
	    "stop_name":"RT 2 NS LIBERTY HILL OFFICE PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.518094,41.558881 ]
	    },
	    "properties": {
	    "stop_id":"50775",
	    "stop_name":"RT 2 NS DRYBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516674,41.571381 ]
	    },
	    "properties": {
	    "stop_id":"50780",
	    "stop_name":"RT 2 FS BEACON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.523451,41.71213 ]
	    },
	    "properties": {
	    "stop_id":"50790",
	    "stop_name":"MAIN NS KENYON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.546474,41.697191 ]
	    },
	    "properties": {
	    "stop_id":"50795",
	    "stop_name":"WASHINGTON NS BOSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.568823,41.682314 ]
	    },
	    "properties": {
	    "stop_id":"50800",
	    "stop_name":"S MAIN OPP HOPKINS HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522654,41.709374 ]
	    },
	    "properties": {
	    "stop_id":"50805",
	    "stop_name":"MAIN OPP BRADLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456653,41.76063 ]
	    },
	    "properties": {
	    "stop_id":"50815",
	    "stop_name":"MIDWAY NS CYPRESS DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.581181,41.679115 ]
	    },
	    "properties": {
	    "stop_id":"50825",
	    "stop_name":"TIOGUE AT 1145 TIOGUE AVE (BURGER KING)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471741,42.015852 ]
	    },
	    "properties": {
	    "stop_id":"50830",
	    "stop_name":"DIAMOND HILL (MCDONALDS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387349,41.875907 ]
	    },
	    "properties": {
	    "stop_id":"51005",
	    "stop_name":"PARK PLACE NS CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387516,41.874358 ]
	    },
	    "properties": {
	    "stop_id":"51010",
	    "stop_name":"GEORGE NS HARRISON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.315709,41.745521 ]
	    },
	    "properties": {
	    "stop_id":"51025",
	    "stop_name":"COUNTY NS 395 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.312346,41.742787 ]
	    },
	    "properties": {
	    "stop_id":"51030",
	    "stop_name":"COUNTY NS HILLTOP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.298415,41.736528 ]
	    },
	    "properties": {
	    "stop_id":"51055",
	    "stop_name":"COUNTY FS POLICE COVE PARK N RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.314358,41.744247 ]
	    },
	    "properties": {
	    "stop_id":"51060",
	    "stop_name":"COUNTY AT 361 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.315566,41.745539 ]
	    },
	    "properties": {
	    "stop_id":"51070",
	    "stop_name":"COUNTY OPP 395 COUNTY RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462781,41.742584 ]
	    },
	    "properties": {
	    "stop_id":"51085",
	    "stop_name":"HOWARD OPP 16 HOWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.670493,41.921284 ]
	    },
	    "properties": {
	    "stop_id":"51095",
	    "stop_name":"RT 102 OPP PINE MEADOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.671686,41.916273 ]
	    },
	    "properties": {
	    "stop_id":"51105",
	    "stop_name":"RT 102 NS RT 44"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.660513,41.906556 ]
	    },
	    "properties": {
	    "stop_id":"51110",
	    "stop_name":"PUTNAM PIKE AT DUNKIN DONUTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.654335,41.905391 ]
	    },
	    "properties": {
	    "stop_id":"51115",
	    "stop_name":"PUTNAM PIKE OPP HIGHLAND LAKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.65204,41.955001 ]
	    },
	    "properties": {
	    "stop_id":"51120",
	    "stop_name":"CENTRAL NS VICTORY HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.55481,41.872687 ]
	    },
	    "properties": {
	    "stop_id":"51125",
	    "stop_name":"PUTNAM PIKE FS AUSTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.654512,41.905499 ]
	    },
	    "properties": {
	    "stop_id":"51140",
	    "stop_name":"PUTNAM PIKE FS HIGHLAND LAKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.671487,41.916165 ]
	    },
	    "properties": {
	    "stop_id":"51145",
	    "stop_name":"RT 102 FS RT 44"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412824,41.826819 ]
	    },
	    "properties": {
	    "stop_id":"51165",
	    "stop_name":"MEMORIAL FS EXCHANGE ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418165,41.870866 ]
	    },
	    "properties": {
	    "stop_id":"55070",
	    "stop_name":"POWER FS ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373944,41.704108 ]
	    },
	    "properties": {
	    "stop_id":"55195",
	    "stop_name":"LONGMEADOW OPP DRAPER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406928,41.732445 ]
	    },
	    "properties": {
	    "stop_id":"55215",
	    "stop_name":"WARWICK OPP NINIGRET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445306,41.8159 ]
	    },
	    "properties": {
	    "stop_id":"55235",
	    "stop_name":"PLAINFIELD FS SVC RD 1"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.482183,41.796294 ]
	    },
	    "properties": {
	    "stop_id":"55240",
	    "stop_name":"PLAINFIELD OPP CLEMENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509403,41.787772 ]
	    },
	    "properties": {
	    "stop_id":"55255",
	    "stop_name":"SAILOR WAY FS PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511674,41.786166 ]
	    },
	    "properties": {
	    "stop_id":"55260",
	    "stop_name":"AMFLEX FS NINETY-NINE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456321,41.788007 ]
	    },
	    "properties": {
	    "stop_id":"55265",
	    "stop_name":"DYER NS INDUSTRIAL RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461998,41.810902 ]
	    },
	    "properties": {
	    "stop_id":"55285",
	    "stop_name":"PLAINFIELD OPP NEUTACONKANUT REC CTR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438114,41.728117 ]
	    },
	    "properties": {
	    "stop_id":"55290",
	    "stop_name":"POST OPP ALHAMBRA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402047,41.912542 ]
	    },
	    "properties": {
	    "stop_id":"55295",
	    "stop_name":"ANN & HOPE WAY NS MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402078,41.912411 ]
	    },
	    "properties": {
	    "stop_id":"55305",
	    "stop_name":"ANN & HOPE WAY FS MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399637,41.913594 ]
	    },
	    "properties": {
	    "stop_id":"55310",
	    "stop_name":"ANN & HOPE WAY NS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389098,41.898355 ]
	    },
	    "properties": {
	    "stop_id":"55315",
	    "stop_name":"BROAD OPP HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391864,41.875198 ]
	    },
	    "properties": {
	    "stop_id":"55320",
	    "stop_name":"COLLYER PARK (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395277,41.871678 ]
	    },
	    "properties": {
	    "stop_id":"55325",
	    "stop_name":"PEARL STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494735,41.605485 ]
	    },
	    "properties": {
	    "stop_id":"55340",
	    "stop_name":"RT 2 AT AIM HIGH ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498572,41.593612 ]
	    },
	    "properties": {
	    "stop_id":"55345",
	    "stop_name":"RT 2 FS STONY LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489664,41.560208 ]
	    },
	    "properties": {
	    "stop_id":"55350",
	    "stop_name":"RT 4 FS OAK HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.497542,41.594657 ]
	    },
	    "properties": {
	    "stop_id":"55360",
	    "stop_name":"RT 2 FS STONY LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494507,41.605465 ]
	    },
	    "properties": {
	    "stop_id":"55365",
	    "stop_name":"RT 2 OPP AIM HIGH ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418304,41.843714 ]
	    },
	    "properties": {
	    "stop_id":"55385",
	    "stop_name":"CHARLES OPP 400 CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.41959,41.84867 ]
	    },
	    "properties": {
	    "stop_id":"55390",
	    "stop_name":"CHARLES OPP ESEK HOPKINS MIDDLE SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412326,41.836123 ]
	    },
	    "properties": {
	    "stop_id":"55405",
	    "stop_name":"CHARLES FS MOBIL GAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516289,41.788141 ]
	    },
	    "properties": {
	    "stop_id":"55500",
	    "stop_name":"COMSTOCK NS PLEASANT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.515483,41.78091 ]
	    },
	    "properties": {
	    "stop_id":"55505",
	    "stop_name":"COMSTOCK NS SCITUATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488344,41.778754 ]
	    },
	    "properties": {
	    "stop_id":"55510",
	    "stop_name":"SCITUATE AT SCITUATE VISTA DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488221,41.778828 ]
	    },
	    "properties": {
	    "stop_id":"55515",
	    "stop_name":"SCITUATE OPP SCITUATE VISTA APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.515307,41.781364 ]
	    },
	    "properties": {
	    "stop_id":"55520",
	    "stop_name":"COMSTOCK FS SCITUATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516042,41.78798 ]
	    },
	    "properties": {
	    "stop_id":"55525",
	    "stop_name":"COMSTOCK OPP PLAINFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475602,41.880355 ]
	    },
	    "properties": {
	    "stop_id":"55530",
	    "stop_name":"DOUGLAS PIKE AT 151 DOUGLAS PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480733,41.883826 ]
	    },
	    "properties": {
	    "stop_id":"55535",
	    "stop_name":"DOUGLAS PIKE OPP RAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489098,41.889398 ]
	    },
	    "properties": {
	    "stop_id":"55540",
	    "stop_name":"DOUGLAS PIKE AT 373 DOUGLAS PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.495878,41.894534 ]
	    },
	    "properties": {
	    "stop_id":"55545",
	    "stop_name":"DOUGLAS PIKE NS MAUREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504516,41.902175 ]
	    },
	    "properties": {
	    "stop_id":"55550",
	    "stop_name":"DOUGLAS PIKE FS LIMEROCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51594,41.912553 ]
	    },
	    "properties": {
	    "stop_id":"55555",
	    "stop_name":"DOUGLAS PIKE NS THURBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.519133,41.916099 ]
	    },
	    "properties": {
	    "stop_id":"55560",
	    "stop_name":"DOUGLAS PIKE NS WASHINGTON HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522507,41.918979 ]
	    },
	    "properties": {
	    "stop_id":"55565",
	    "stop_name":"DOUGLAS PIKE NS WASHINGTON HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.504868,41.902231 ]
	    },
	    "properties": {
	    "stop_id":"55570",
	    "stop_name":"DOUGLAS PIKE NS LIMEROCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48001,41.883202 ]
	    },
	    "properties": {
	    "stop_id":"55575",
	    "stop_name":"DOUGLAS PIKE AT 206 DOUGLAS PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475576,41.880199 ]
	    },
	    "properties": {
	    "stop_id":"55580",
	    "stop_name":"DOUGLAS PIKE NS TWIN RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.472922,41.878437 ]
	    },
	    "properties": {
	    "stop_id":"55585",
	    "stop_name":"DOUGLAS PIKE AT 80 DOUGLAS PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478209,41.736739 ]
	    },
	    "properties": {
	    "stop_id":"55640",
	    "stop_name":"OAKLAWN AT 1195 OAKLAWN AVE (CVS PHARMACY)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456403,41.841578 ]
	    },
	    "properties": {
	    "stop_id":"55645",
	    "stop_name":"COLLEGE NS COLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456924,41.841379 ]
	    },
	    "properties": {
	    "stop_id":"55660",
	    "stop_name":"COLLEGE OPP COLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.469527,41.837151 ]
	    },
	    "properties": {
	    "stop_id":"55685",
	    "stop_name":"WOONASQUATUCKET NS ARDWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471581,41.83834 ]
	    },
	    "properties": {
	    "stop_id":"55690",
	    "stop_name":"WOONASQUATUCKET OPP TAG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473274,41.839262 ]
	    },
	    "properties": {
	    "stop_id":"55695",
	    "stop_name":"WOONASQUATUCKET AT 129 WOONASQUATUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.483207,41.838971 ]
	    },
	    "properties": {
	    "stop_id":"55710",
	    "stop_name":"GREENVILLE FS LYMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477048,41.844624 ]
	    },
	    "properties": {
	    "stop_id":"55720",
	    "stop_name":"WOONASQUATUCKET OPP HUMBERT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424375,41.821039 ]
	    },
	    "properties": {
	    "stop_id":"55735",
	    "stop_name":"BROADWAY FS PALLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461687,41.698653 ]
	    },
	    "properties": {
	    "stop_id":"55745",
	    "stop_name":"CENTREVILLE FS VETERANS MEMORIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36347,41.775562 ]
	    },
	    "properties": {
	    "stop_id":"55780",
	    "stop_name":"BULLOCKS POINT OPP 100 BULLOCKS POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363209,41.77284 ]
	    },
	    "properties": {
	    "stop_id":"55785",
	    "stop_name":"BULLOCKS POINT NS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360851,41.764708 ]
	    },
	    "properties": {
	    "stop_id":"55800",
	    "stop_name":"BULLOCKS POINT NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363246,41.775474 ]
	    },
	    "properties": {
	    "stop_id":"55805",
	    "stop_name":"BULLOCKS POINT AT 110 BULLOCKS POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.363138,41.777805 ]
	    },
	    "properties": {
	    "stop_id":"55810",
	    "stop_name":"BULLOCKS POINT FS WILLETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35821,41.821727 ]
	    },
	    "properties": {
	    "stop_id":"55815",
	    "stop_name":"TAUNTON AVE OPP SHOPPERS TOWN MALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354338,41.867777 ]
	    },
	    "properties": {
	    "stop_id":"55825",
	    "stop_name":"NEWPORT AT FIRE DEPARTMENT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354187,41.847342 ]
	    },
	    "properties": {
	    "stop_id":"55835",
	    "stop_name":"PAWTUCKET OPP BOWEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.350034,41.841804 ]
	    },
	    "properties": {
	    "stop_id":"55840",
	    "stop_name":"PAWTUCKET FS NEWMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.351166,41.843997 ]
	    },
	    "properties": {
	    "stop_id":"55845",
	    "stop_name":"PAWTUCKET AT ST MARGARET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352643,41.846205 ]
	    },
	    "properties": {
	    "stop_id":"55850",
	    "stop_name":"PAWTUCKET NS WEEDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354238,41.847534 ]
	    },
	    "properties": {
	    "stop_id":"55855",
	    "stop_name":"PAWTUCKET FS BOWEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364807,41.860694 ]
	    },
	    "properties": {
	    "stop_id":"55860",
	    "stop_name":"BEVERAGE HILL NS FRED"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361443,41.86076 ]
	    },
	    "properties": {
	    "stop_id":"55865",
	    "stop_name":"BEVERAGE HILL NS GLEN MEADOWS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359149,41.860789 ]
	    },
	    "properties": {
	    "stop_id":"55870",
	    "stop_name":"BEVERAGE HILL NS GREEN LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356567,41.86083 ]
	    },
	    "properties": {
	    "stop_id":"55875",
	    "stop_name":"BEVERAGE HILL NS JONES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355163,41.860835 ]
	    },
	    "properties": {
	    "stop_id":"55880",
	    "stop_name":"BEVERAGE HILL NS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352984,41.84634 ]
	    },
	    "properties": {
	    "stop_id":"55885",
	    "stop_name":"PAWTUCKET OPP WEEDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391836,41.845001 ]
	    },
	    "properties": {
	    "stop_id":"55895",
	    "stop_name":"ELMGROVE NS WOODBURY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397735,41.843407 ]
	    },
	    "properties": {
	    "stop_id":"55900",
	    "stop_name":"HOPE NS 616 HOPE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400872,41.846162 ]
	    },
	    "properties": {
	    "stop_id":"55910",
	    "stop_name":"CAMP FS LANCASTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402091,41.844522 ]
	    },
	    "properties": {
	    "stop_id":"55920",
	    "stop_name":"CAMP NS GRANDVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.515817,42.001143 ]
	    },
	    "properties": {
	    "stop_id":"55930",
	    "stop_name":"MAIN BETWEEN ASCENSION & ARNOLD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517546,42.000997 ]
	    },
	    "properties": {
	    "stop_id":"55935",
	    "stop_name":"RIVER FS SAYLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517927,42.002701 ]
	    },
	    "properties": {
	    "stop_id":"55940",
	    "stop_name":"RIVER OPP 252 RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520338,42.003663 ]
	    },
	    "properties": {
	    "stop_id":"55945",
	    "stop_name":"RIVER OPP CANAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417518,41.84563 ]
	    },
	    "properties": {
	    "stop_id":"55955",
	    "stop_name":"SILVER SPRING AT WALMART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418006,41.870834 ]
	    },
	    "properties": {
	    "stop_id":"55965",
	    "stop_name":"POWER NS PRENTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400046,41.879887 ]
	    },
	    "properties": {
	    "stop_id":"55975",
	    "stop_name":"LONSDALE OPP PALM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400213,41.882872 ]
	    },
	    "properties": {
	    "stop_id":"55980",
	    "stop_name":"LONSDALE FS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.386129,41.879656 ]
	    },
	    "properties": {
	    "stop_id":"55990",
	    "stop_name":"EXCHANGE FS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.388256,41.879482 ]
	    },
	    "properties": {
	    "stop_id":"55995",
	    "stop_name":"DEXTER FS GOFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399207,41.889012 ]
	    },
	    "properties": {
	    "stop_id":"56000",
	    "stop_name":"DEXTER NS SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40356,41.906501 ]
	    },
	    "properties": {
	    "stop_id":"56030",
	    "stop_name":"LONSDALE NS FRONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400778,41.88526 ]
	    },
	    "properties": {
	    "stop_id":"56035",
	    "stop_name":"LONSDALE NS ORCHARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40033,41.883147 ]
	    },
	    "properties": {
	    "stop_id":"56045",
	    "stop_name":"LONSDALE NS BARBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400207,41.880909 ]
	    },
	    "properties": {
	    "stop_id":"56050",
	    "stop_name":"LONSDALE OPP PRICERITE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390332,41.88111 ]
	    },
	    "properties": {
	    "stop_id":"56065",
	    "stop_name":"DEXTER NS DEXTER CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414163,41.871169 ]
	    },
	    "properties": {
	    "stop_id":"56070",
	    "stop_name":"MINERAL SPRING FS SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.396942,41.874626 ]
	    },
	    "properties": {
	    "stop_id":"56075",
	    "stop_name":"MINERAL SPRING NS SLATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404722,41.895565 ]
	    },
	    "properties": {
	    "stop_id":"56090",
	    "stop_name":"LONSDALE OPP 1158 LONSDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404341,41.897558 ]
	    },
	    "properties": {
	    "stop_id":"56100",
	    "stop_name":"LONSDALE NS VALLEY VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404915,41.89964 ]
	    },
	    "properties": {
	    "stop_id":"56105",
	    "stop_name":"LONSDALE MIDBLOCK EDGEHILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404272,41.904067 ]
	    },
	    "properties": {
	    "stop_id":"56110",
	    "stop_name":"LONSDALE AT 1501 LONSDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403002,41.908364 ]
	    },
	    "properties": {
	    "stop_id":"56120",
	    "stop_name":"MENDON FS LONSDALE SCHOOL ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405973,41.917496 ]
	    },
	    "properties": {
	    "stop_id":"56125",
	    "stop_name":"MENDON NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408738,41.920471 ]
	    },
	    "properties": {
	    "stop_id":"56130",
	    "stop_name":"MENDON FS MARSHALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410403,41.92199 ]
	    },
	    "properties": {
	    "stop_id":"56135",
	    "stop_name":"MENDON OPP 300 MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411703,41.923203 ]
	    },
	    "properties": {
	    "stop_id":"56140",
	    "stop_name":"MENDON AT 593 MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426692,41.933402 ]
	    },
	    "properties": {
	    "stop_id":"56145",
	    "stop_name":"MENDON NS ORA MURPHY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.428919,41.935743 ]
	    },
	    "properties": {
	    "stop_id":"56150",
	    "stop_name":"MENDON FS ASHTON PKWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.429393,41.937368 ]
	    },
	    "properties": {
	    "stop_id":"56160",
	    "stop_name":"MENDON NS ANGELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43624,41.937086 ]
	    },
	    "properties": {
	    "stop_id":"56165",
	    "stop_name":"RT 116 FS BLACKSTONE RIVER STATE PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459804,41.934651 ]
	    },
	    "properties": {
	    "stop_id":"56170",
	    "stop_name":"RT 116 AT 640 G WASHINGTON HWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477274,41.935065 ]
	    },
	    "properties": {
	    "stop_id":"56175",
	    "stop_name":"RT 116 OPP LINCOLN MALL ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473729,41.935131 ]
	    },
	    "properties": {
	    "stop_id":"56176",
	    "stop_name":"RT 116 NS WAKE ROBIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48271,41.931028 ]
	    },
	    "properties": {
	    "stop_id":"56185",
	    "stop_name":"ALBION OPP VERIZON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444902,41.934859 ]
	    },
	    "properties": {
	    "stop_id":"56195",
	    "stop_name":"RT 116 NS 695 G WASHINGTON HWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44045,41.935639 ]
	    },
	    "properties": {
	    "stop_id":"56200",
	    "stop_name":"RT 116 FS BANK OF AMERICA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436053,41.936992 ]
	    },
	    "properties": {
	    "stop_id":"56205",
	    "stop_name":"RT 116 OPP BLACKSTONE RIVER PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431456,41.939034 ]
	    },
	    "properties": {
	    "stop_id":"56215",
	    "stop_name":"MENDON FS SCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427038,41.933622 ]
	    },
	    "properties": {
	    "stop_id":"56225",
	    "stop_name":"MENDON OPP ORA MURPHY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417666,41.926677 ]
	    },
	    "properties": {
	    "stop_id":"56235",
	    "stop_name":"MENDON NS HUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411534,41.92289 ]
	    },
	    "properties": {
	    "stop_id":"56240",
	    "stop_name":"MENDON AT BERKELEY COMMONS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406891,41.918385 ]
	    },
	    "properties": {
	    "stop_id":"56245",
	    "stop_name":"MENDON FS MARSHALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40595,41.917285 ]
	    },
	    "properties": {
	    "stop_id":"56250",
	    "stop_name":"MENDON FS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403952,41.913851 ]
	    },
	    "properties": {
	    "stop_id":"56255",
	    "stop_name":"MENDON FS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402687,41.909929 ]
	    },
	    "properties": {
	    "stop_id":"56260",
	    "stop_name":"LONSDALE NS COOK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403197,41.90828 ]
	    },
	    "properties": {
	    "stop_id":"56265",
	    "stop_name":"LONDALE NS LONSDALE SCHOOL ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40316,41.892702 ]
	    },
	    "properties": {
	    "stop_id":"56270",
	    "stop_name":"LONSDALE NS TUCKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380754,41.875954 ]
	    },
	    "properties": {
	    "stop_id":"56275",
	    "stop_name":"MAIN NS WALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364033,41.885529 ]
	    },
	    "properties": {
	    "stop_id":"56310",
	    "stop_name":"CENTRAL FS MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366046,41.885281 ]
	    },
	    "properties": {
	    "stop_id":"56311",
	    "stop_name":"CENTRAL FS FREEMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.350611,41.888859 ]
	    },
	    "properties": {
	    "stop_id":"56335",
	    "stop_name":"CENTRAL FS CHASE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374677,41.871852 ]
	    },
	    "properties": {
	    "stop_id":"56435",
	    "stop_name":"POND NS YOUNG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375136,41.871823 ]
	    },
	    "properties": {
	    "stop_id":"56475",
	    "stop_name":"POND NS BREWSTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377013,41.871546 ]
	    },
	    "properties": {
	    "stop_id":"56480",
	    "stop_name":"SUMMIT FS POND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377781,41.873056 ]
	    },
	    "properties": {
	    "stop_id":"56485",
	    "stop_name":"SUMMIT FS MEADOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37625,41.877129 ]
	    },
	    "properties": {
	    "stop_id":"56495",
	    "stop_name":"WALCOTT NS MAYNARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375125,41.877299 ]
	    },
	    "properties": {
	    "stop_id":"56500",
	    "stop_name":"WALCOTT FS FRENCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37428,41.87749 ]
	    },
	    "properties": {
	    "stop_id":"56505",
	    "stop_name":"WALCOTT NS DENVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364101,41.88027 ]
	    },
	    "properties": {
	    "stop_id":"56515",
	    "stop_name":"ARMISTICE FS GEORGE BENNETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355252,41.878543 ]
	    },
	    "properties": {
	    "stop_id":"56525",
	    "stop_name":"ARMISTICE NS LITTLEFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.342971,41.875741 ]
	    },
	    "properties": {
	    "stop_id":"56530",
	    "stop_name":"ARMISTICE NS PARKSIDE AVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377645,41.876971 ]
	    },
	    "properties": {
	    "stop_id":"56560",
	    "stop_name":"WALCOTT NS UNDERWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.496296,41.894696 ]
	    },
	    "properties": {
	    "stop_id":"56565",
	    "stop_name":"DOUGLAS PIKE OPP MAUREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433021,41.844565 ]
	    },
	    "properties": {
	    "stop_id":"56590",
	    "stop_name":"HUXLEY OPP VENTURA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459545,41.858106 ]
	    },
	    "properties": {
	    "stop_id":"56605",
	    "stop_name":"SMITHFIELD OPP COLONIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460079,41.857988 ]
	    },
	    "properties": {
	    "stop_id":"56615",
	    "stop_name":"SMITHFIELD NS COLONIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448176,41.864503 ]
	    },
	    "properties": {
	    "stop_id":"56655",
	    "stop_name":"MINERAL SPRING NS MARTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460143,41.861765 ]
	    },
	    "properties": {
	    "stop_id":"56660",
	    "stop_name":"MINERAL SPRING AT N PROV HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455398,41.862684 ]
	    },
	    "properties": {
	    "stop_id":"56665",
	    "stop_name":"MINERAL SPRING AT 1720 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450261,41.863896 ]
	    },
	    "properties": {
	    "stop_id":"56670",
	    "stop_name":"MINERAL SPRING AT 1624 MINERAL SPRING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448501,41.864306 ]
	    },
	    "properties": {
	    "stop_id":"56675",
	    "stop_name":"MINERAL SPRING FS CHANANGO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445263,41.865142 ]
	    },
	    "properties": {
	    "stop_id":"56680",
	    "stop_name":"MINERAL SPRING NS FRIENDSHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438127,41.867326 ]
	    },
	    "properties": {
	    "stop_id":"56685",
	    "stop_name":"MINERAL SPRING FS IRVING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425611,41.86961 ]
	    },
	    "properties": {
	    "stop_id":"56690",
	    "stop_name":"CHARLES AT 1105 CHARLES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.515791,42.000982 ]
	    },
	    "properties": {
	    "stop_id":"56695",
	    "stop_name":"MAIN OPP 32 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52181,41.988948 ]
	    },
	    "properties": {
	    "stop_id":"56700",
	    "stop_name":"PROVIDENCE BETWEEN AVENUE B & PIEDMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.320415,41.498628 ]
	    },
	    "properties": {
	    "stop_id":"56705",
	    "stop_name":"SECOND OPP 103 SECOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.320205,41.496743 ]
	    },
	    "properties": {
	    "stop_id":"56710",
	    "stop_name":"SECOND NS PINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319751,41.493479 ]
	    },
	    "properties": {
	    "stop_id":"56720",
	    "stop_name":"SECOND NS POPLAR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.31948,41.491483 ]
	    },
	    "properties": {
	    "stop_id":"56725",
	    "stop_name":"SECOND NS MARSH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306319,41.456229 ]
	    },
	    "properties": {
	    "stop_id":"56750",
	    "stop_name":"BELLEVUE FS ROUGH POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306377,41.456126 ]
	    },
	    "properties": {
	    "stop_id":"56760",
	    "stop_name":"BELLEVUE OPP ROUGH POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313804,41.514639 ]
	    },
	    "properties": {
	    "stop_id":"56765",
	    "stop_name":"GIRARD AT 120 GIRARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.299852,41.51945 ]
	    },
	    "properties": {
	    "stop_id":"56775",
	    "stop_name":"W MAIN OPP MAPLEWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313785,41.514804 ]
	    },
	    "properties": {
	    "stop_id":"56785",
	    "stop_name":"GIRARD NS LEAL TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.307871,41.509727 ]
	    },
	    "properties": {
	    "stop_id":"56795",
	    "stop_name":"HILLSIDE OPP EISENHOWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30038,41.517555 ]
	    },
	    "properties": {
	    "stop_id":"56805",
	    "stop_name":"W MAIN BETWEEN ROCKWOOD & E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246093,41.630229 ]
	    },
	    "properties": {
	    "stop_id":"56830",
	    "stop_name":"BOYDS LANE NS OLD BOYDS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.297398,41.5178 ]
	    },
	    "properties": {
	    "stop_id":"56835",
	    "stop_name":"E MAIN AT 94 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.25503,41.628566 ]
	    },
	    "properties": {
	    "stop_id":"56840",
	    "stop_name":"BRISTOL FERRY AT 502 BRISTOL FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.283983,41.565399 ]
	    },
	    "properties": {
	    "stop_id":"56845",
	    "stop_name":"W MAIN FS BAYVIEW APTS ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.786295,41.423398 ]
	    },
	    "properties": {
	    "stop_id":"56880",
	    "stop_name":"RT 3 NS RT 216"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.783669,41.427378 ]
	    },
	    "properties": {
	    "stop_id":"56885",
	    "stop_name":"RT 3 OPP MAXSON HILL RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.802549,41.394876 ]
	    },
	    "properties": {
	    "stop_id":"56890",
	    "stop_name":"RT 3 FS MILROSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.514626,41.576487 ]
	    },
	    "properties": {
	    "stop_id":"56910",
	    "stop_name":"RT 2 AT 1675 TEN ROD RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.555077,41.517724 ]
	    },
	    "properties": {
	    "stop_id":"56915",
	    "stop_name":"RT 2 FS RAYMOND POTTER LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.556922,41.511531 ]
	    },
	    "properties": {
	    "stop_id":"56920",
	    "stop_name":"RT 2 OPP WOLF ROCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.50934,41.462061 ]
	    },
	    "properties": {
	    "stop_id":"56930",
	    "stop_name":"KINGSTOWN FS CURTIS CORNER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.505427,41.45427 ]
	    },
	    "properties": {
	    "stop_id":"56945",
	    "stop_name":"KINGSTOWN AT 1436 KINGSTOWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502939,41.444983 ]
	    },
	    "properties": {
	    "stop_id":"56950",
	    "stop_name":"HIGH FS ALLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.498711,41.43888 ]
	    },
	    "properties": {
	    "stop_id":"56965",
	    "stop_name":"MAIN OPP 313 MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.495915,41.440712 ]
	    },
	    "properties": {
	    "stop_id":"56970",
	    "stop_name":"MAIN NS WOODRUFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486962,41.441673 ]
	    },
	    "properties": {
	    "stop_id":"56975",
	    "stop_name":"OLD TOWER HILL OPP JOB LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480964,41.429183 ]
	    },
	    "properties": {
	    "stop_id":"56980",
	    "stop_name":"POINT JUDITH NS SALT POND PLAZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481529,41.421664 ]
	    },
	    "properties": {
	    "stop_id":"56990",
	    "stop_name":"POINT JUDITH FS SUNNYBROOK FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479815,41.417617 ]
	    },
	    "properties": {
	    "stop_id":"56995",
	    "stop_name":"POINT JUDITH OPP OLD POINT JUDITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478398,41.412123 ]
	    },
	    "properties": {
	    "stop_id":"57000",
	    "stop_name":"POINT JUDITH FS FODDERING FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479576,41.402838 ]
	    },
	    "properties": {
	    "stop_id":"57005",
	    "stop_name":"POINT JUDITH FS PALM BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479989,41.39929 ]
	    },
	    "properties": {
	    "stop_id":"57010",
	    "stop_name":"POINT JUDITH FS MARTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471463,41.392075 ]
	    },
	    "properties": {
	    "stop_id":"57025",
	    "stop_name":"BURNSIDE NS OCEAN RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477278,41.386992 ]
	    },
	    "properties": {
	    "stop_id":"57030",
	    "stop_name":"OCEAN FS GREENBRIER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477978,41.386461 ]
	    },
	    "properties": {
	    "stop_id":"57035",
	    "stop_name":"KNOWLESWAY FS OCEAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480056,41.386962 ]
	    },
	    "properties": {
	    "stop_id":"57040",
	    "stop_name":"KNOWLESWAY FS LONGVIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481944,41.387318 ]
	    },
	    "properties": {
	    "stop_id":"57045",
	    "stop_name":"KNOWLESWAY NS ERIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.485034,41.387825 ]
	    },
	    "properties": {
	    "stop_id":"57050",
	    "stop_name":"KNOWLESWAY FS COFFEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4858,41.387328 ]
	    },
	    "properties": {
	    "stop_id":"57055",
	    "stop_name":"POINT JUDITH FS KNOWLESWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486581,41.38534 ]
	    },
	    "properties": {
	    "stop_id":"57060",
	    "stop_name":"POINT JUDITH NS SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488065,41.38088 ]
	    },
	    "properties": {
	    "stop_id":"57065",
	    "stop_name":"POINT JUDITH FS SEALEA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491027,41.375016 ]
	    },
	    "properties": {
	    "stop_id":"57075",
	    "stop_name":"SAND HILL COVE FS HEMLOCK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49244,41.374395 ]
	    },
	    "properties": {
	    "stop_id":"57080",
	    "stop_name":"SAND HILL COVE NS CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.49507,41.372935 ]
	    },
	    "properties": {
	    "stop_id":"57085",
	    "stop_name":"SAND HILL COVE NS SALTAIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.497062,41.44073 ]
	    },
	    "properties": {
	    "stop_id":"57105",
	    "stop_name":"MAIN NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502026,41.438122 ]
	    },
	    "properties": {
	    "stop_id":"57115",
	    "stop_name":"HIGH OPP 50 HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502244,41.44168 ]
	    },
	    "properties": {
	    "stop_id":"57120",
	    "stop_name":"HIGH OPP 180 HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500687,41.451399 ]
	    },
	    "properties": {
	    "stop_id":"57125",
	    "stop_name":"KINGSTOWN FS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.554945,41.5175 ]
	    },
	    "properties": {
	    "stop_id":"57135",
	    "stop_name":"RT 2 AT 710 S COUNTY TRL (WOLF ROCK VETERINARY)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.553816,41.521521 ]
	    },
	    "properties": {
	    "stop_id":"57136",
	    "stop_name":"RT 2 NS YAWGOO VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517419,41.565093 ]
	    },
	    "properties": {
	    "stop_id":"57140",
	    "stop_name":"RT 2 OPP SHARTNER FARMS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366979,41.884979 ]
	    },
	    "properties": {
	    "stop_id":"57145",
	    "stop_name":"G BENNET FS CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373633,41.872174 ]
	    },
	    "properties": {
	    "stop_id":"57165",
	    "stop_name":"POND FS ARCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378397,41.874168 ]
	    },
	    "properties": {
	    "stop_id":"57170",
	    "stop_name":"SUMMIT NS JOHNSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379077,41.876297 ]
	    },
	    "properties": {
	    "stop_id":"57180",
	    "stop_name":"SUMMIT NS WALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366903,41.885084 ]
	    },
	    "properties": {
	    "stop_id":"57185",
	    "stop_name":"G BENNET NS CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.379095,41.875863 ]
	    },
	    "properties": {
	    "stop_id":"57190",
	    "stop_name":"SUMMIT FS WALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511961,41.37764 ]
	    },
	    "properties": {
	    "stop_id":"57195",
	    "stop_name":"GREAT ISLAND RD AT COAST GUARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.495313,41.372687 ]
	    },
	    "properties": {
	    "stop_id":"57200",
	    "stop_name":"SAND HILL COVE NS STANTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.493059,41.373951 ]
	    },
	    "properties": {
	    "stop_id":"57205",
	    "stop_name":"SAND HILL COVE NS CHESTNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.490104,41.375094 ]
	    },
	    "properties": {
	    "stop_id":"57210",
	    "stop_name":"SAND HILL COVE OPP 21 SAND HILL COVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488519,41.375682 ]
	    },
	    "properties": {
	    "stop_id":"57215",
	    "stop_name":"POINT JUDITH OPP SALTAIRE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.488229,41.378492 ]
	    },
	    "properties": {
	    "stop_id":"57220",
	    "stop_name":"POINT JUDITH FS SCHOONER COVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.487498,41.381458 ]
	    },
	    "properties": {
	    "stop_id":"57225",
	    "stop_name":"POINT JUDITH AT USAR CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48627,41.38523 ]
	    },
	    "properties": {
	    "stop_id":"57230",
	    "stop_name":"POINT JUDITH OPP SUNSET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.485485,41.387555 ]
	    },
	    "properties": {
	    "stop_id":"57235",
	    "stop_name":"POINT JUDITH NS KNOWLESWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48454,41.387579 ]
	    },
	    "properties": {
	    "stop_id":"57240",
	    "stop_name":"KNOWLESWAY OPP COFFEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.477948,41.386333 ]
	    },
	    "properties": {
	    "stop_id":"57250",
	    "stop_name":"KNOWLESWAY NS OCEAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47659,41.387521 ]
	    },
	    "properties": {
	    "stop_id":"57255",
	    "stop_name":"OCEAN OPP GREENBRIER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471978,41.391049 ]
	    },
	    "properties": {
	    "stop_id":"57260",
	    "stop_name":"OCEAN MIDBLOCK BURNSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4742,41.393182 ]
	    },
	    "properties": {
	    "stop_id":"57270",
	    "stop_name":"BURNSIDE OPP DESANO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481578,41.394456 ]
	    },
	    "properties": {
	    "stop_id":"57280",
	    "stop_name":"BURNSIDE NS POINT JUDITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.481227,41.396264 ]
	    },
	    "properties": {
	    "stop_id":"57285",
	    "stop_name":"POINT JUDITH OPP GULF GAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479569,41.399781 ]
	    },
	    "properties": {
	    "stop_id":"57290",
	    "stop_name":"POINT JUDITH FS LINDSLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479052,41.404 ]
	    },
	    "properties": {
	    "stop_id":"57295",
	    "stop_name":"POINT JUDITH FS MANNING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.478158,41.413023 ]
	    },
	    "properties": {
	    "stop_id":"57300",
	    "stop_name":"POINT JUDITH FS WINDERMERE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.479115,41.417035 ]
	    },
	    "properties": {
	    "stop_id":"57305",
	    "stop_name":"POINT JUDITH NS OLD POINT JUDITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480895,41.425895 ]
	    },
	    "properties": {
	    "stop_id":"57315",
	    "stop_name":"POINT JUDITH FS WESTMORELAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480742,41.429192 ]
	    },
	    "properties": {
	    "stop_id":"57320",
	    "stop_name":"POINT JUDITH AT 90 POINT JUDITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374766,41.50085 ]
	    },
	    "properties": {
	    "stop_id":"57405",
	    "stop_name":"NORTH AT 83 NORTH RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.36939,41.496246 ]
	    },
	    "properties": {
	    "stop_id":"57510",
	    "stop_name":"NARRAGANSETT NS GREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374074,41.496233 ]
	    },
	    "properties": {
	    "stop_id":"57520",
	    "stop_name":"NARRAGANSETT AT 92 NARRAGANSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374606,41.50072 ]
	    },
	    "properties": {
	    "stop_id":"57525",
	    "stop_name":"NORTH OPP 79 NORTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37488,41.5258 ]
	    },
	    "properties": {
	    "stop_id":"57526",
	    "stop_name":"NORTH RD FS TASHTASSUC"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456956,41.494629 ]
	    },
	    "properties": {
	    "stop_id":"57530",
	    "stop_name":"RT 138 NS RT 1"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456021,41.494559 ]
	    },
	    "properties": {
	    "stop_id":"57535",
	    "stop_name":"BRIDGETOWN FS RT 1"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44662,41.48869 ]
	    },
	    "properties": {
	    "stop_id":"57540",
	    "stop_name":"BRIDGETOWN FS RIVERSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445921,41.49033 ]
	    },
	    "properties": {
	    "stop_id":"57555",
	    "stop_name":"BRIDGETOWN AT 130 BRIDGETOWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449408,41.488291 ]
	    },
	    "properties": {
	    "stop_id":"57560",
	    "stop_name":"BRIDGETOWN NS WALMSLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458699,41.494603 ]
	    },
	    "properties": {
	    "stop_id":"57565",
	    "stop_name":"RT 138 AT 61 MOORESVILLE RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376341,41.499648 ]
	    },
	    "properties": {
	    "stop_id":"57575",
	    "stop_name":"JAMESTOWN HOUSING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353617,41.888024 ]
	    },
	    "properties": {
	    "stop_id":"57660",
	    "stop_name":"CENTRAL FS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.344334,41.891425 ]
	    },
	    "properties": {
	    "stop_id":"57665",
	    "stop_name":"BRADLEY NS BENEFIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372897,41.87767 ]
	    },
	    "properties": {
	    "stop_id":"57670",
	    "stop_name":"WALCOTT NS NORTH BEND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372851,41.878109 ]
	    },
	    "properties": {
	    "stop_id":"57675",
	    "stop_name":"NORTH BEND FS WALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353627,41.888115 ]
	    },
	    "properties": {
	    "stop_id":"57680",
	    "stop_name":"CENTRAL NS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.37297,41.878161 ]
	    },
	    "properties": {
	    "stop_id":"57685",
	    "stop_name":"NORTH BEND NS WALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375563,41.877327 ]
	    },
	    "properties": {
	    "stop_id":"57690",
	    "stop_name":"WALCOTT FS WALNUT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365174,41.870446 ]
	    },
	    "properties": {
	    "stop_id":"57705",
	    "stop_name":"COLUMBUS OPP YORK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364443,41.874799 ]
	    },
	    "properties": {
	    "stop_id":"57710",
	    "stop_name":"G BENNET OPP DIVISION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364618,41.879991 ]
	    },
	    "properties": {
	    "stop_id":"57715",
	    "stop_name":"G BENNET NS ARMISTICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.524209,41.704356 ]
	    },
	    "properties": {
	    "stop_id":"57730",
	    "stop_name":"MAIN NS ST MARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.524081,41.703443 ]
	    },
	    "properties": {
	    "stop_id":"57740",
	    "stop_name":"MAIN FS WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.319378,41.506826 ]
	    },
	    "properties": {
	    "stop_id":"57760",
	    "stop_name":"ADM KALBFUS AT ROLLING GREEN APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30297,41.518513 ]
	    },
	    "properties": {
	    "stop_id":"57840",
	    "stop_name":"CODDINGTON OPP LANDINGS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30153,41.518492 ]
	    },
	    "properties": {
	    "stop_id":"57865",
	    "stop_name":"CODDINGTON NS THE LANDINGS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313613,41.51835 ]
	    },
	    "properties": {
	    "stop_id":"57870",
	    "stop_name":"CODDINGTON OPP CCRI ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.312216,41.489445 ]
	    },
	    "properties": {
	    "stop_id":"57905",
	    "stop_name":"TOURO OPP DIVISION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.315268,41.489473 ]
	    },
	    "properties": {
	    "stop_id":"57915",
	    "stop_name":"THAMES FS WASHINGTON SQ"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.315153,41.48838 ]
	    },
	    "properties": {
	    "stop_id":"57920",
	    "stop_name":"THAMES OPP MARY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378397,41.877392 ]
	    },
	    "properties": {
	    "stop_id":"58040",
	    "stop_name":"UNDERWOOD FS WALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.378151,41.878526 ]
	    },
	    "properties": {
	    "stop_id":"58045",
	    "stop_name":"UNDERWOOD NS GROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389531,41.84606 ]
	    },
	    "properties": {
	    "stop_id":"58050",
	    "stop_name":"ROCHAMBEAU OPP 405 ROCHAMBEAU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391926,41.845182 ]
	    },
	    "properties": {
	    "stop_id":"58060",
	    "stop_name":"ELMGROVE OPP 311 ELMGROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392696,41.842002 ]
	    },
	    "properties": {
	    "stop_id":"58070",
	    "stop_name":"ELMGROVE OPP JEWISH CENTET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392572,41.840439 ]
	    },
	    "properties": {
	    "stop_id":"58105",
	    "stop_name":"ELMGROVE OPP 341 ELMGROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392045,41.837813 ]
	    },
	    "properties": {
	    "stop_id":"58110",
	    "stop_name":"ELMGROVE AT POLE 58"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391099,41.834888 ]
	    },
	    "properties": {
	    "stop_id":"58120",
	    "stop_name":"ELMGROVE AT 152 ELMGROVE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.306561,41.462432 ]
	    },
	    "properties": {
	    "stop_id":"58135",
	    "stop_name":"BELLEVUE AT MARBLE HOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447293,41.605668 ]
	    },
	    "properties": {
	    "stop_id":"58140",
	    "stop_name":"GATE RD FS SAMS CIRCLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.31302,41.51735 ]
	    },
	    "properties": {
	    "stop_id":"58145",
	    "stop_name":"CCRI (NEWPORT CAMPUS)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.406907,41.817337 ]
	    },
	    "properties": {
	    "stop_id":"58150",
	    "stop_name":"EDDY FS SOUTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405174,41.759989 ]
	    },
	    "properties": {
	    "stop_id":"58165",
	    "stop_name":"POST AT 446 POST RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407176,41.80784 ]
	    },
	    "properties": {
	    "stop_id":"58175",
	    "stop_name":"EDDY FS EUDORA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404782,41.759719 ]
	    },
	    "properties": {
	    "stop_id":"58180",
	    "stop_name":"WARWICK OPP HARDING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399323,41.713487 ]
	    },
	    "properties": {
	    "stop_id":"58185",
	    "stop_name":"WARWICK AT 2323 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380565,41.699613 ]
	    },
	    "properties": {
	    "stop_id":"58205",
	    "stop_name":"SAMUEL GORTON OPP STEPHANIE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374193,41.709558 ]
	    },
	    "properties": {
	    "stop_id":"58220",
	    "stop_name":"DRAPER NS WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397882,41.709644 ]
	    },
	    "properties": {
	    "stop_id":"58230",
	    "stop_name":"WARWICK OPP 2485 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405843,41.746041 ]
	    },
	    "properties": {
	    "stop_id":"58235",
	    "stop_name":"WARWICK NS DAWSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403953,41.751061 ]
	    },
	    "properties": {
	    "stop_id":"58240",
	    "stop_name":"WARWICK FS URBAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404418,41.75742 ]
	    },
	    "properties": {
	    "stop_id":"58245",
	    "stop_name":"WARWICK AT 706 WARWICK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.416497,41.816815 ]
	    },
	    "properties": {
	    "stop_id":"58250",
	    "stop_name":"W FRANKLIN AT CROSSROADS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412539,41.800081 ]
	    },
	    "properties": {
	    "stop_id":"58260",
	    "stop_name":"PRAIRIE NS GALLUP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.447807,41.715019 ]
	    },
	    "properties": {
	    "stop_id":"58290",
	    "stop_name":"JEFFERSON BLVD NS ECHO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427855,41.71199 ]
	    },
	    "properties": {
	    "stop_id":"58295",
	    "stop_name":"STRAWBERRY FIELD FS EVERGLADE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43048,41.701628 ]
	    },
	    "properties": {
	    "stop_id":"58300",
	    "stop_name":"BUTTONWOODS FS WEST SHORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.566021,41.875902 ]
	    },
	    "properties": {
	    "stop_id":"58315",
	    "stop_name":"PUTNAM PIKE OPP 668 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.568604,41.87664 ]
	    },
	    "properties": {
	    "stop_id":"58320",
	    "stop_name":"PUTNAM PIKE AT 711 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.660221,41.906576 ]
	    },
	    "properties": {
	    "stop_id":"58325",
	    "stop_name":"PUTNAM PIKE OPP DUNKIN DONUTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.668163,41.910059 ]
	    },
	    "properties": {
	    "stop_id":"58330",
	    "stop_name":"PUTNAM PIKE OPP RADIO TOWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.655121,41.944144 ]
	    },
	    "properties": {
	    "stop_id":"58335",
	    "stop_name":"VICTORY HWY AT 545 VICTORY HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.648367,41.949892 ]
	    },
	    "properties": {
	    "stop_id":"58340",
	    "stop_name":"VICTORY HWY AT 849 VICTORY HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.649122,41.951463 ]
	    },
	    "properties": {
	    "stop_id":"58345",
	    "stop_name":"VICTORY HWY OPP 908 VICTORY HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.656284,41.957761 ]
	    },
	    "properties": {
	    "stop_id":"58350",
	    "stop_name":"CENTRAL AT 520 CENTRAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.676945,41.96592 ]
	    },
	    "properties": {
	    "stop_id":"58360",
	    "stop_name":"MAIN NS CHAPEL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.687459,41.968535 ]
	    },
	    "properties": {
	    "stop_id":"58365",
	    "stop_name":"CHAPEL AT SUNOCO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.701371,41.958762 ]
	    },
	    "properties": {
	    "stop_id":"58370",
	    "stop_name":"MAIN OPP ALBEE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.647124,41.904888 ]
	    },
	    "properties": {
	    "stop_id":"58385",
	    "stop_name":"PUTNAM PIKE NS TERRY LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.587248,41.885595 ]
	    },
	    "properties": {
	    "stop_id":"58390",
	    "stop_name":"PUTNAM PIKE NS LAKE HARMONY DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.568805,41.876675 ]
	    },
	    "properties": {
	    "stop_id":"58395",
	    "stop_name":"PUTNAM PIKE NS VERNON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420668,41.815221 ]
	    },
	    "properties": {
	    "stop_id":"58415",
	    "stop_name":"BROAD NS LOCKWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458461,41.764947 ]
	    },
	    "properties": {
	    "stop_id":"58420",
	    "stop_name":"HILLSIDE FS GARDEN CITY DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456792,41.759674 ]
	    },
	    "properties": {
	    "stop_id":"58425",
	    "stop_name":"MIDWAY AT 150 MIDWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.486959,41.730763 ]
	    },
	    "properties": {
	    "stop_id":"58440",
	    "stop_name":"PROVIDENCE FS ENFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.537398,41.695476 ]
	    },
	    "properties": {
	    "stop_id":"58460",
	    "stop_name":"WASHINGTON OPP PULASKI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.575939,41.67998 ]
	    },
	    "properties": {
	    "stop_id":"58465",
	    "stop_name":"TIOGUE FS S MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458247,41.695466 ]
	    },
	    "properties": {
	    "stop_id":"58495",
	    "stop_name":"POST AT 3445 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448136,41.672066 ]
	    },
	    "properties": {
	    "stop_id":"58505",
	    "stop_name":"POST AT 4365 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461408,41.570773 ]
	    },
	    "properties": {
	    "stop_id":"58525",
	    "stop_name":"POST OPP 130 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461813,41.5689 ]
	    },
	    "properties": {
	    "stop_id":"58530",
	    "stop_name":"POST AT 209 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463028,41.567268 ]
	    },
	    "properties": {
	    "stop_id":"58535",
	    "stop_name":"POST AT ST BERNARD CHURCH ENTRANCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.456948,41.56766 ]
	    },
	    "properties": {
	    "stop_id":"58540",
	    "stop_name":"PHILLIPS OPP BOONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440993,41.552471 ]
	    },
	    "properties": {
	    "stop_id":"58550",
	    "stop_name":"BOSTON NECK OPP WALDRON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437921,41.490068 ]
	    },
	    "properties": {
	    "stop_id":"58555",
	    "stop_name":"BOSTON NECK AT 1174 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436697,41.481007 ]
	    },
	    "properties": {
	    "stop_id":"58560",
	    "stop_name":"BOSTON NECK FS WAMPUM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460175,41.433229 ]
	    },
	    "properties": {
	    "stop_id":"58565",
	    "stop_name":"NARRAGANSETT NS CASWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317134,41.49905 ]
	    },
	    "properties": {
	    "stop_id":"58575",
	    "stop_name":"FAREWELL FS LONG LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.316665,41.495458 ]
	    },
	    "properties": {
	    "stop_id":"58580",
	    "stop_name":"FAREWELL FS AMERICAS CUP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.317011,41.499304 ]
	    },
	    "properties": {
	    "stop_id":"58590",
	    "stop_name":"FAREWELL OPP 10 FAREWELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.43666,41.482333 ]
	    },
	    "properties": {
	    "stop_id":"58595",
	    "stop_name":"BOSTON NECK OPP 1024 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437797,41.490535 ]
	    },
	    "properties": {
	    "stop_id":"58600",
	    "stop_name":"BOSTON NECK AT 1183 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423987,41.52004 ]
	    },
	    "properties": {
	    "stop_id":"58605",
	    "stop_name":"BOSTON NECK NS HIGHLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451154,41.567761 ]
	    },
	    "properties": {
	    "stop_id":"58615",
	    "stop_name":"BOSTON NECK NS OAKLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.457368,41.567581 ]
	    },
	    "properties": {
	    "stop_id":"58620",
	    "stop_name":"PHILLIPS FS BOONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45957,41.566431 ]
	    },
	    "properties": {
	    "stop_id":"58625",
	    "stop_name":"PHILLIPS AT 225 PHILLIPS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462854,41.566251 ]
	    },
	    "properties": {
	    "stop_id":"58630",
	    "stop_name":"PHILLIPS AT 319 PHILLIPS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462796,41.56741 ]
	    },
	    "properties": {
	    "stop_id":"58635",
	    "stop_name":"POST OPP ST BERNARD CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461316,41.569225 ]
	    },
	    "properties": {
	    "stop_id":"58640",
	    "stop_name":"POST OPP 185 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461269,41.571069 ]
	    },
	    "properties": {
	    "stop_id":"58645",
	    "stop_name":"POST AT 130 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455525,41.606905 ]
	    },
	    "properties": {
	    "stop_id":"58650",
	    "stop_name":"POST NS NEWCOMB"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452475,41.706135 ]
	    },
	    "properties": {
	    "stop_id":"58660",
	    "stop_name":"POST OPP GILLAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.512646,41.377025 ]
	    },
	    "properties": {
	    "stop_id":"58670",
	    "stop_name":"GREAT ISLAND RD AT SALTY BRINE BEACH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522269,42.003727 ]
	    },
	    "properties": {
	    "stop_id":"58760",
	    "stop_name":"FAIRMOUNT OPP WATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.525703,42.002245 ]
	    },
	    "properties": {
	    "stop_id":"58765",
	    "stop_name":"FAIRMOUNT NS 1ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412969,41.795952 ]
	    },
	    "properties": {
	    "stop_id":"58770",
	    "stop_name":"SACKETT FS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383849,41.878166 ]
	    },
	    "properties": {
	    "stop_id":"58775",
	    "stop_name":"HIGH ST OPP SUMMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.506158,41.90353 ]
	    },
	    "properties": {
	    "stop_id":"58780",
	    "stop_name":"DOUGLAS PIKE NS HARRIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.521002,41.918251 ]
	    },
	    "properties": {
	    "stop_id":"58785",
	    "stop_name":"DOUGLAS PIKE FS WASHINGTON HWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.531622,41.927506 ]
	    },
	    "properties": {
	    "stop_id":"58790",
	    "stop_name":"FIDELITY CIRCLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.516108,41.912419 ]
	    },
	    "properties": {
	    "stop_id":"58795",
	    "stop_name":"DOUGLAS PIKE FS THURBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418284,41.843288 ]
	    },
	    "properties": {
	    "stop_id":"58800",
	    "stop_name":"CHARLES NS HOME DEPOT PARKING LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356792,41.823281 ]
	    },
	    "properties": {
	    "stop_id":"58815",
	    "stop_name":"STOP&SHOP (PAWTUCKET AVENUE - EAST PROVIDENCE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.243512,41.627897 ]
	    },
	    "properties": {
	    "stop_id":"58830",
	    "stop_name":"BOYDS LANE NS RTE. 24"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.242904,41.628178 ]
	    },
	    "properties": {
	    "stop_id":"58831",
	    "stop_name":"PORTSMOUTH PARK & RIDE LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424045,41.49198 ]
	    },
	    "properties": {
	    "stop_id":"58845",
	    "stop_name":"PIER RD FS SOUTH FERRY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420198,41.807041 ]
	    },
	    "properties": {
	    "stop_id":"58870",
	    "stop_name":"PLENTY STREET - SAINT JOSEPH'S HOSPITAL (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.390903,41.766131 ]
	    },
	    "properties": {
	    "stop_id":"58880",
	    "stop_name":"BROAD FS SHELTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392363,41.823765 ]
	    },
	    "properties": {
	    "stop_id":"58910",
	    "stop_name":"IVES NS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418087,41.822479 ]
	    },
	    "properties": {
	    "stop_id":"58930",
	    "stop_name":"BROADWAY OPP ATWELLS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455128,41.656041 ]
	    },
	    "properties": {
	    "stop_id":"58935",
	    "stop_name":"FIRST FS CLIFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.475118,41.938687 ]
	    },
	    "properties": {
	    "stop_id":"58940",
	    "stop_name":"LINCOLN MALL PARK & RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.47835,41.937684 ]
	    },
	    "properties": {
	    "stop_id":"58945",
	    "stop_name":"LINCOLN MALL AT TARGET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414734,41.8052 ]
	    },
	    "properties": {
	    "stop_id":"58980",
	    "stop_name":"PRAIRIE OPP SARATOGA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412814,41.789272 ]
	    },
	    "properties": {
	    "stop_id":"58985",
	    "stop_name":"HAWTHORNE FS TENNIS COURTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415001,41.789967 ]
	    },
	    "properties": {
	    "stop_id":"58990",
	    "stop_name":"ROGER WILLIAMS ZOO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412454,41.789422 ]
	    },
	    "properties": {
	    "stop_id":"58995",
	    "stop_name":"HAWTHORNE OPP TENNIS COURTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410733,41.796153 ]
	    },
	    "properties": {
	    "stop_id":"59005",
	    "stop_name":"PRAIRIE AT ROGER WILLIAMS HOMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411652,41.806343 ]
	    },
	    "properties": {
	    "stop_id":"59015",
	    "stop_name":"PILGRIM AT THE MET SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412416,41.815844 ]
	    },
	    "properties": {
	    "stop_id":"59025",
	    "stop_name":"E FRANKLIN NS BASSETT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415516,41.81762 ]
	    },
	    "properties": {
	    "stop_id":"59030",
	    "stop_name":"E FRANKLIN NS BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44334,41.727592 ]
	    },
	    "properties": {
	    "stop_id":"59035",
	    "stop_name":"JEFFERSON BLVD AT TRAIN STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383354,41.877144 ]
	    },
	    "properties": {
	    "stop_id":"59060",
	    "stop_name":"PAWTUCKET TRANSIT CTR (SLATER MILL SIDE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401935,41.851027 ]
	    },
	    "properties": {
	    "stop_id":"59065",
	    "stop_name":"THIRD FS N MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.397983,41.852517 ]
	    },
	    "properties": {
	    "stop_id":"59075",
	    "stop_name":"MIRIAM HOSPITAL (SEVENTH ST)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40171,41.851007 ]
	    },
	    "properties": {
	    "stop_id":"59080",
	    "stop_name":"THIRD OPP MIRIAM EMPLOYEES LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417933,41.819155 ]
	    },
	    "properties": {
	    "stop_id":"59105",
	    "stop_name":"WESTMINSTER NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44491,41.832548 ]
	    },
	    "properties": {
	    "stop_id":"59120",
	    "stop_name":"CHALKSTONE FS ACADEMY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423416,41.752121 ]
	    },
	    "properties": {
	    "stop_id":"59140",
	    "stop_name":"ELMWOOD NS SIXTH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434829,41.824476 ]
	    },
	    "properties": {
	    "stop_id":"59145",
	    "stop_name":"ATWELLS NS HARRIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.434662,41.824335 ]
	    },
	    "properties": {
	    "stop_id":"59150",
	    "stop_name":"ATWELLS FS HARRIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463264,41.833117 ]
	    },
	    "properties": {
	    "stop_id":"59155",
	    "stop_name":"CHALKSTONE OPP 1644 CHALKSTONE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387362,41.829994 ]
	    },
	    "properties": {
	    "stop_id":"59165",
	    "stop_name":"S ANGELL NS WAYLAND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400801,41.817599 ]
	    },
	    "properties": {
	    "stop_id":"59170",
	    "stop_name":"S MAIN FS PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423681,41.754764 ]
	    },
	    "properties": {
	    "stop_id":"59175",
	    "stop_name":"ELMWOOD NS WARWICK ANIMAL HOSPITAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.420039,41.780305 ]
	    },
	    "properties": {
	    "stop_id":"59180",
	    "stop_name":"ELMWOOD BETWEEN DIXON & HAMLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.474319,41.726486 ]
	    },
	    "properties": {
	    "stop_id":"59190",
	    "stop_name":"LAMBERT LIND OPP GREENWICH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460502,41.74101 ]
	    },
	    "properties": {
	    "stop_id":"59195",
	    "stop_name":"PONTIAC FS HOWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.464652,41.744465 ]
	    },
	    "properties": {
	    "stop_id":"59210",
	    "stop_name":"HOWARD AT LATHAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.431523,41.786229 ]
	    },
	    "properties": {
	    "stop_id":"59215",
	    "stop_name":"PONTIAC FS PAINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436481,41.776585 ]
	    },
	    "properties": {
	    "stop_id":"59220",
	    "stop_name":"ROLFE OPP POST OFFICE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40342,41.790803 ]
	    },
	    "properties": {
	    "stop_id":"59225",
	    "stop_name":"EDDY NS BROOM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355922,41.819091 ]
	    },
	    "properties": {
	    "stop_id":"59240",
	    "stop_name":"PAWTUCKET AT EAST PROVIDENCE HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407455,41.825244 ]
	    },
	    "properties": {
	    "stop_id":"59250",
	    "stop_name":"S MAIN AT COUNTY COURT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.392475,41.841097 ]
	    },
	    "properties": {
	    "stop_id":"59265",
	    "stop_name":"ELMGROVE NS SESSIONS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.314548,41.507589 ]
	    },
	    "properties": {
	    "stop_id":"59270",
	    "stop_name":"ADM KALBFUS OPP HALSEY (WASTE MANAGEMENT)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.296706,41.523669 ]
	    },
	    "properties": {
	    "stop_id":"59275",
	    "stop_name":"VALLEY OPP KNIGHTS OF COLUMBUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29239,41.537851 ]
	    },
	    "properties": {
	    "stop_id":"59280",
	    "stop_name":"BROWNS LANE NS BENNYS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.314415,41.507396 ]
	    },
	    "properties": {
	    "stop_id":"59300",
	    "stop_name":"ADM KALBFUS FS HALSEY (WASTE MANAGEMENT)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.310314,41.516098 ]
	    },
	    "properties": {
	    "stop_id":"59305",
	    "stop_name":"MAPLE NS HILLSIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.291717,41.545411 ]
	    },
	    "properties": {
	    "stop_id":"59310",
	    "stop_name":"W MAIN OPP MARSHALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.254179,41.630733 ]
	    },
	    "properties": {
	    "stop_id":"59315",
	    "stop_name":"BRISTOL FERRY FS BARKERS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278565,41.676121 ]
	    },
	    "properties": {
	    "stop_id":"59320",
	    "stop_name":"HOPE OPP THAMES"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.281443,41.72529 ]
	    },
	    "properties": {
	    "stop_id":"59325",
	    "stop_name":"MAIN NS FRANKLIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423961,41.810152 ]
	    },
	    "properties": {
	    "stop_id":"59350",
	    "stop_name":"ELMWOOD NS W FRIENDSHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.539261,41.490876 ]
	    },
	    "properties": {
	    "stop_id":"59400",
	    "stop_name":"PLAINS ROAD LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.537089,41.489133 ]
	    },
	    "properties": {
	    "stop_id":"59401",
	    "stop_name":"WEST ALUMNI FS PLAINS RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.534422,41.491384 ]
	    },
	    "properties": {
	    "stop_id":"59405",
	    "stop_name":"FLAGG AT 210 FLAGG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.530479,41.490837 ]
	    },
	    "properties": {
	    "stop_id":"59410",
	    "stop_name":"FLAGG AT GARRAHY HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528192,41.490615 ]
	    },
	    "properties": {
	    "stop_id":"59415",
	    "stop_name":"FLAGG AT 120 FLAGG"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.526244,41.490434 ]
	    },
	    "properties": {
	    "stop_id":"59420",
	    "stop_name":"FLAGG AT COASTAL INSTITUTE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.52513,41.488481 ]
	    },
	    "properties": {
	    "stop_id":"59530",
	    "stop_name":"EAST ALUMNI FS UPPER COLLEGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.526591,41.488527 ]
	    },
	    "properties": {
	    "stop_id":"59535",
	    "stop_name":"EAST ALUMNI NS GREENHOUSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.529297,41.488241 ]
	    },
	    "properties": {
	    "stop_id":"59540",
	    "stop_name":"WEST ALUMNI AT RODMAN HALL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.531555,41.488525 ]
	    },
	    "properties": {
	    "stop_id":"59545",
	    "stop_name":"WEST ALUMNI NS HEATHMAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246083,41.613134 ]
	    },
	    "properties": {
	    "stop_id":"59565",
	    "stop_name":"E MAIN AT 3111 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.246262,41.613063 ]
	    },
	    "properties": {
	    "stop_id":"59570",
	    "stop_name":"E MAIN AT  3104 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252703,41.59449 ]
	    },
	    "properties": {
	    "stop_id":"59575",
	    "stop_name":"E MAIN AT HENRY DAVIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.252322,41.585395 ]
	    },
	    "properties": {
	    "stop_id":"59580",
	    "stop_name":"E MAIN NS CROSSINGS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.26772,41.536076 ]
	    },
	    "properties": {
	    "stop_id":"59585",
	    "stop_name":"E MAIN AT SLATE HILL FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.26378,41.69551 ]
	    },
	    "properties": {
	    "stop_id":"59600",
	    "stop_name":"METACOM FS GOODING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414732,41.815452 ]
	    },
	    "properties": {
	    "stop_id":"59605",
	    "stop_name":"W FRANKLIN NS MAPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410806,41.796019 ]
	    },
	    "properties": {
	    "stop_id":"59610",
	    "stop_name":"PRAIRIE NS EARLY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412507,41.800354 ]
	    },
	    "properties": {
	    "stop_id":"59615",
	    "stop_name":"PRAIRIE FS GALLUP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.333883,41.786522 ]
	    },
	    "properties": {
	    "stop_id":"59620",
	    "stop_name":"WAMPANOAG OPP MOBIL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.334701,41.782808 ]
	    },
	    "properties": {
	    "stop_id":"59630",
	    "stop_name":"WAMPANOAG AT FORBES FIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.280395,41.70765 ]
	    },
	    "properties": {
	    "stop_id":"59635",
	    "stop_name":"HOPE AT NORTH FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.29173,41.543405 ]
	    },
	    "properties": {
	    "stop_id":"59645",
	    "stop_name":"W MAIN  FS OXBOW APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.278768,41.524296 ]
	    },
	    "properties": {
	    "stop_id":"59660",
	    "stop_name":"E MAIN NS JOHNSON TERRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.267747,41.535829 ]
	    },
	    "properties": {
	    "stop_id":"59665",
	    "stop_name":"E MAIN OPP ATE HILL FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.251736,41.577073 ]
	    },
	    "properties": {
	    "stop_id":"59670",
	    "stop_name":"E MAIN AT 1641 E MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.249988,41.600324 ]
	    },
	    "properties": {
	    "stop_id":"59675",
	    "stop_name":"E MAIN NS TURNPIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.547438,41.532703 ]
	    },
	    "properties": {
	    "stop_id":"59700",
	    "stop_name":"RT 2 OPP FIRST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.549706,41.52936 ]
	    },
	    "properties": {
	    "stop_id":"59705",
	    "stop_name":"RT 2 AT WOLF ROCK MEADOWS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561731,41.502773 ]
	    },
	    "properties": {
	    "stop_id":"59710",
	    "stop_name":"RT 2 AT 2115 S COUNTY TRL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511559,41.466329 ]
	    },
	    "properties": {
	    "stop_id":"59715",
	    "stop_name":"KINGSTOWN NS ALLISONS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.510084,41.463467 ]
	    },
	    "properties": {
	    "stop_id":"59720",
	    "stop_name":"KINGSTOWN NS SOUTH KINGSTOWN PUBLIC SAFETY COMPLEX"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.511238,41.465889 ]
	    },
	    "properties": {
	    "stop_id":"59730",
	    "stop_name":"KINGSTOWN NS ALLISONS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.514533,41.471041 ]
	    },
	    "properties": {
	    "stop_id":"59735",
	    "stop_name":"KINGSTOWN FS WEST WIND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.5154,41.472122 ]
	    },
	    "properties": {
	    "stop_id":"59740",
	    "stop_name":"KINGSTOWN NS EAST FARM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.520653,41.479637 ]
	    },
	    "properties": {
	    "stop_id":"59745",
	    "stop_name":"KINGSTOWN NS ROUTE 138"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.553139,41.483402 ]
	    },
	    "properties": {
	    "stop_id":"59750",
	    "stop_name":"KINGSTOWN AT MOBIL GAS STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480017,41.418393 ]
	    },
	    "properties": {
	    "stop_id":"59755",
	    "stop_name":"POINT JUDITH AT 290 POINT JUDITH RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.561589,41.502655 ]
	    },
	    "properties": {
	    "stop_id":"59760",
	    "stop_name":"RT 2 OPP KINGSTON REHAB CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.549498,41.529316 ]
	    },
	    "properties": {
	    "stop_id":"59765",
	    "stop_name":"RT 2 AT 535 SOUTH COUNTY TRL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.547286,41.53249 ]
	    },
	    "properties": {
	    "stop_id":"59770",
	    "stop_name":"RT 2 FS FIRST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.528892,41.550027 ]
	    },
	    "properties": {
	    "stop_id":"59775",
	    "stop_name":"RT 2 OPP EXETER ANIMAL SHELTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.519225,41.55617 ]
	    },
	    "properties": {
	    "stop_id":"59780",
	    "stop_name":"RT 2 AT LIVING HOPE CHURCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.513278,41.576532 ]
	    },
	    "properties": {
	    "stop_id":"59785",
	    "stop_name":"RT 2 FS PLAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507602,41.578836 ]
	    },
	    "properties": {
	    "stop_id":"59790",
	    "stop_name":"RT 2 NS AUTUMN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387778,41.872535 ]
	    },
	    "properties": {
	    "stop_id":"59800",
	    "stop_name":"GEORGE BETWEEN MARRIN AND GRACE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.45738,41.792126 ]
	    },
	    "properties": {
	    "stop_id":"59815",
	    "stop_name":"DYER AT 738 DYER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452351,41.797181 ]
	    },
	    "properties": {
	    "stop_id":"59825",
	    "stop_name":"LAUREL HILL OPP CLIFF"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500456,41.789297 ]
	    },
	    "properties": {
	    "stop_id":"59830",
	    "stop_name":"WALMART SVC RD OPP CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448919,41.828119 ]
	    },
	    "properties": {
	    "stop_id":"59860",
	    "stop_name":"MT PLEASANT FS POMONA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451892,41.839769 ]
	    },
	    "properties": {
	    "stop_id":"59865",
	    "stop_name":"MT PLEASANT AT OUR LADY OF PROVIDENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448766,41.825508 ]
	    },
	    "properties": {
	    "stop_id":"59875",
	    "stop_name":"MT PLEASANT NS ATWELLS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.446662,41.893973 ]
	    },
	    "properties": {
	    "stop_id":"59880",
	    "stop_name":"RT 246 FS TWIN RIVER RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.418404,41.87019 ]
	    },
	    "properties": {
	    "stop_id":"59895",
	    "stop_name":"MINERAL SPRING FS POWER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509396,41.972961 ]
	    },
	    "properties": {
	    "stop_id":"59900",
	    "stop_name":"RT 146A OPP 435 RT 146A"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.499027,41.787535 ]
	    },
	    "properties": {
	    "stop_id":"59915",
	    "stop_name":"WALMART CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500793,41.789003 ]
	    },
	    "properties": {
	    "stop_id":"59920",
	    "stop_name":"WALMART SVC RD FS CITIZENS BANK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.391503,41.76735 ]
	    },
	    "properties": {
	    "stop_id":"59950",
	    "stop_name":"BROAD OPP 2131 BROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435008,41.751614 ]
	    },
	    "properties": {
	    "stop_id":"59960",
	    "stop_name":"JEFFERSON BLVD AT 51 JEFFERSON BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399093,41.713389 ]
	    },
	    "properties": {
	    "stop_id":"59975",
	    "stop_name":"WARWICK AT KNIGHTS OF COLUMBUS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.669337,41.927198 ]
	    },
	    "properties": {
	    "stop_id":"59990",
	    "stop_name":"RT 102 NS CROSS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.670556,41.921386 ]
	    },
	    "properties": {
	    "stop_id":"59995",
	    "stop_name":"RT 102 AT 56 RT 102"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.602171,41.890302 ]
	    },
	    "properties": {
	    "stop_id":"60000",
	    "stop_name":"PUTNAM PIKE AT 208 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.575233,41.879105 ]
	    },
	    "properties": {
	    "stop_id":"60005",
	    "stop_name":"PUTNAME PIKE AT 120 PUTNAME PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.566254,41.875868 ]
	    },
	    "properties": {
	    "stop_id":"60010",
	    "stop_name":"PUTNAM PIKE AT CORY'S"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471647,41.819668 ]
	    },
	    "properties": {
	    "stop_id":"60015",
	    "stop_name":"HARTFORD AT 807 HARTFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.500056,41.820704 ]
	    },
	    "properties": {
	    "stop_id":"60020",
	    "stop_name":"STOP&SHOP (COMMERCE WAY - JOHNSTON)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.387265,41.845893 ]
	    },
	    "properties": {
	    "stop_id":"60025",
	    "stop_name":"BLACKSTONE NS ROCHAMBEAU"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.389706,41.830869 ]
	    },
	    "properties": {
	    "stop_id":"60030",
	    "stop_name":"ELMGROVE NS ADELPHI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402964,41.838741 ]
	    },
	    "properties": {
	    "stop_id":"60035",
	    "stop_name":"DOYLE OPP 132 DOYLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.399525,41.828925 ]
	    },
	    "properties": {
	    "stop_id":"60040",
	    "stop_name":"BROOK NS MEETING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.383548,41.818492 ]
	    },
	    "properties": {
	    "stop_id":"60045",
	    "stop_name":"VALLEY NS WATERFRONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354392,41.857951 ]
	    },
	    "properties": {
	    "stop_id":"60060",
	    "stop_name":"NEWPORT NS NARRAGANSETT PK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354423,41.85909 ]
	    },
	    "properties": {
	    "stop_id":"60065",
	    "stop_name":"NEWPORT AT TACO BELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373207,41.865379 ]
	    },
	    "properties": {
	    "stop_id":"60070",
	    "stop_name":"PROSPECT NS TALCOTT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353063,41.85823 ]
	    },
	    "properties": {
	    "stop_id":"60075",
	    "stop_name":"NARRAGANSETT PARK NS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380381,41.87982 ]
	    },
	    "properties": {
	    "stop_id":"60080",
	    "stop_name":"EXCHANGE AT TOLMAN HIGH SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.42384,41.522243 ]
	    },
	    "properties": {
	    "stop_id":"60085",
	    "stop_name":"BOSTON NECK FS SNUFF MILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424093,41.519246 ]
	    },
	    "properties": {
	    "stop_id":"60090",
	    "stop_name":"BOSTON NECK OPP 2080 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.494287,42.005499 ]
	    },
	    "properties": {
	    "stop_id":"60095",
	    "stop_name":"CASS AT 255 CASS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.480701,41.935196 ]
	    },
	    "properties": {
	    "stop_id":"60115",
	    "stop_name":"RT 116 FS ALBION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.518439,41.983986 ]
	    },
	    "properties": {
	    "stop_id":"60125",
	    "stop_name":"RT 146A OPP N SMITHFIELD POLICE STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.554862,41.87263 ]
	    },
	    "properties": {
	    "stop_id":"60135",
	    "stop_name":"PUTNAM PIKE AT 590 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.574405,41.878917 ]
	    },
	    "properties": {
	    "stop_id":"60140",
	    "stop_name":"PUTNAM PIKE OPP 781 PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.57946,41.881989 ]
	    },
	    "properties": {
	    "stop_id":"60145",
	    "stop_name":"PUTNAM PIKE AT POWDER MILL CREAMERY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.669426,41.926548 ]
	    },
	    "properties": {
	    "stop_id":"60150",
	    "stop_name":"RT 102 OPP CROSS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.688117,41.968196 ]
	    },
	    "properties": {
	    "stop_id":"60155",
	    "stop_name":"CHAPEL FS RAILROAD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.448852,41.855964 ]
	    },
	    "properties": {
	    "stop_id":"60165",
	    "stop_name":"SMITHFIELD OPP CUSHING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517687,41.914343 ]
	    },
	    "properties": {
	    "stop_id":"60170",
	    "stop_name":"DOUGLAS PIKE AT HAMPTON INN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.506482,41.90367 ]
	    },
	    "properties": {
	    "stop_id":"60175",
	    "stop_name":"DOUGLAS PIKE NS HARRIS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.470121,41.875535 ]
	    },
	    "properties": {
	    "stop_id":"60180",
	    "stop_name":"DOUGLAS PIKE AT 40 DOUGLAS PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.460157,41.867997 ]
	    },
	    "properties": {
	    "stop_id":"60185",
	    "stop_name":"DOUGLAS AT 1576 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.450354,41.861408 ]
	    },
	    "properties": {
	    "stop_id":"60190",
	    "stop_name":"DOUGLAS AT 1328 DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.506905,41.976634 ]
	    },
	    "properties": {
	    "stop_id":"60200",
	    "stop_name":"WALMART NORTH SMITHFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411016,41.858631 ]
	    },
	    "properties": {
	    "stop_id":"60220",
	    "stop_name":"SILVER SPRING AT BURGER KING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.345995,41.891577 ]
	    },
	    "properties": {
	    "stop_id":"60235",
	    "stop_name":"BENEFIT AT THURBER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.551339,41.694719 ]
	    },
	    "properties": {
	    "stop_id":"70170",
	    "stop_name":"WASHINGTON AT 704 WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.548936,41.695071 ]
	    },
	    "properties": {
	    "stop_id":"70175",
	    "stop_name":"WASHINGTON AT 676 WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.527613,41.70137 ]
	    },
	    "properties": {
	    "stop_id":"70180",
	    "stop_name":"WASHINGTON AT 203 WASHINGTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491094,41.709979 ]
	    },
	    "properties": {
	    "stop_id":"70185",
	    "stop_name":"TOLLGATE FS BALD HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.489565,41.711117 ]
	    },
	    "properties": {
	    "stop_id":"70190",
	    "stop_name":"BALD HILL FS TOLLGATE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.384242,41.721733 ]
	    },
	    "properties": {
	    "stop_id":"70195",
	    "stop_name":"BEACH AT CHURCH CENTER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51781,41.684619 ]
	    },
	    "properties": {
	    "stop_id":"70200",
	    "stop_name":"COWESETT OPP LONSDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.449669,41.605977 ]
	    },
	    "properties": {
	    "stop_id":"70205",
	    "stop_name":"GATE RD AT IAFRATE WAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4512,41.605776 ]
	    },
	    "properties": {
	    "stop_id":"70210",
	    "stop_name":"GATE RD AT KOHLS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462826,41.566098 ]
	    },
	    "properties": {
	    "stop_id":"70220",
	    "stop_name":"PHILLIPS AT 320 PHILLIPS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459563,41.566277 ]
	    },
	    "properties": {
	    "stop_id":"70225",
	    "stop_name":"PHILLIPS AT 226 PHILLIPS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442568,41.453452 ]
	    },
	    "properties": {
	    "stop_id":"70230",
	    "stop_name":"BOSTON NECK NS MIDDLEBRIDGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458111,41.433942 ]
	    },
	    "properties": {
	    "stop_id":"70235",
	    "stop_name":"NARRAGANSETT FS BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458382,41.433819 ]
	    },
	    "properties": {
	    "stop_id":"70240",
	    "stop_name":"NARRAGANSETT NS BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435997,41.458251 ]
	    },
	    "properties": {
	    "stop_id":"70245",
	    "stop_name":"BOSTON NECK OPP OLD BOSTON NECK (NORTH)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.433813,41.460581 ]
	    },
	    "properties": {
	    "stop_id":"70250",
	    "stop_name":"BOSTON NECK NS ANAWAN CLIFFS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435673,41.477688 ]
	    },
	    "properties": {
	    "stop_id":"70255",
	    "stop_name":"BOSTON NECK AT 939 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.437523,41.488253 ]
	    },
	    "properties": {
	    "stop_id":"70260",
	    "stop_name":"BOSTON NECK AT 1141 BOSTON NECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.427848,41.530429 ]
	    },
	    "properties": {
	    "stop_id":"70265",
	    "stop_name":"BOSTON NECK OPP RT 138W [ON-RAMP]"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.453315,41.568592 ]
	    },
	    "properties": {
	    "stop_id":"70270",
	    "stop_name":"BOSTON NECK NS ELAM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.455232,41.568193 ]
	    },
	    "properties": {
	    "stop_id":"70275",
	    "stop_name":"BOSTON NECK AT WICKFORD ELEM SCHOOL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462008,41.572984 ]
	    },
	    "properties": {
	    "stop_id":"70280",
	    "stop_name":"POST OPP 55 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.462496,41.628944 ]
	    },
	    "properties": {
	    "stop_id":"70285",
	    "stop_name":"POST AT 6188 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44869,41.669085 ]
	    },
	    "properties": {
	    "stop_id":"70290",
	    "stop_name":"POST AT 4474 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.454682,41.686995 ]
	    },
	    "properties": {
	    "stop_id":"70300",
	    "stop_name":"POST AT 3775 POST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401616,41.834589 ]
	    },
	    "properties": {
	    "stop_id":"70310",
	    "stop_name":"HOPE FS ALUMNI"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401007,41.830319 ]
	    },
	    "properties": {
	    "stop_id":"70315",
	    "stop_name":"THAYER NS CUSHING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.702677,41.956493 ]
	    },
	    "properties": {
	    "stop_id":"70330",
	    "stop_name":"SAYLES FS BRIDGEWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353221,41.860748 ]
	    },
	    "properties": {
	    "stop_id":"70340",
	    "stop_name":"BEVERAGE HILL OPP 650 BEVERAGE HILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35138,41.860797 ]
	    },
	    "properties": {
	    "stop_id":"70345",
	    "stop_name":"BEVERAGE HILL OPP LANGDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.350069,41.860824 ]
	    },
	    "properties": {
	    "stop_id":"70350",
	    "stop_name":"BEVERAGE HILL NS NARRAGANSETT PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.443406,41.865851 ]
	    },
	    "properties": {
	    "stop_id":"70370",
	    "stop_name":"MINERAL SPRING OPP DAVID"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.452344,41.863517 ]
	    },
	    "properties": {
	    "stop_id":"70375",
	    "stop_name":"MINERAL SPRING NS DOUGLAS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.4841,41.857976 ]
	    },
	    "properties": {
	    "stop_id":"70380",
	    "stop_name":"MINERAL SPRING FS SMITH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.505268,41.872973 ]
	    },
	    "properties": {
	    "stop_id":"70385",
	    "stop_name":"ESMOND AT 65A ESMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507404,41.86898 ]
	    },
	    "properties": {
	    "stop_id":"70390",
	    "stop_name":"ESMOND NS PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517828,41.873345 ]
	    },
	    "properties": {
	    "stop_id":"70395",
	    "stop_name":"SMITHFIELD CROSSING AT HALLMARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.517122,41.874074 ]
	    },
	    "properties": {
	    "stop_id":"70400",
	    "stop_name":"SMITHFIELD CROSSING AT BARNES & NOBLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507212,41.869098 ]
	    },
	    "properties": {
	    "stop_id":"70405",
	    "stop_name":"ESMOND FS PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.505071,41.873408 ]
	    },
	    "properties": {
	    "stop_id":"70410",
	    "stop_name":"ESMOND AT 56 ESMOND"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.458462,41.764538 ]
	    },
	    "properties": {
	    "stop_id":"70415",
	    "stop_name":"HILLSIDE AT 14 HILLSIDE RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.502088,41.452814 ]
	    },
	    "properties": {
	    "stop_id":"70425",
	    "stop_name":"KINGSTOWN OPP KERSEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.48094,41.430868 ]
	    },
	    "properties": {
	    "stop_id":"70430",
	    "stop_name":"SOUTH PIER NS LAMBERT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501118,41.688096 ]
	    },
	    "properties": {
	    "stop_id":"70435",
	    "stop_name":"QUAKER LAND FS OLD CARRIIAGE RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.402567,41.910228 ]
	    },
	    "properties": {
	    "stop_id":"70445",
	    "stop_name":"MENDON OPP 1748 OLD MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414618,41.925321 ]
	    },
	    "properties": {
	    "stop_id":"70450",
	    "stop_name":"MENDON FS OLD MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.417356,41.926602 ]
	    },
	    "properties": {
	    "stop_id":"70455",
	    "stop_name":"MENDON OPP HUNT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.419741,41.927803 ]
	    },
	    "properties": {
	    "stop_id":"70460",
	    "stop_name":"MENDON NS CUSHING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.421022,41.92894 ]
	    },
	    "properties": {
	    "stop_id":"70465",
	    "stop_name":"MENDON NS WHIPPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.44074,41.935815 ]
	    },
	    "properties": {
	    "stop_id":"70470",
	    "stop_name":"RT 116 NS PAULINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.445251,41.935053 ]
	    },
	    "properties": {
	    "stop_id":"70475",
	    "stop_name":"RT 116 OPP 695 G WASHINGTON HWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.409838,41.92135 ]
	    },
	    "properties": {
	    "stop_id":"70480",
	    "stop_name":"MENDON FS 500 MENDON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.403679,41.906553 ]
	    },
	    "properties": {
	    "stop_id":"70485",
	    "stop_name":"LONSDALE FS FRONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404339,41.904189 ]
	    },
	    "properties": {
	    "stop_id":"70490",
	    "stop_name":"LONSDALE OPP 1501 LONSDALE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405045,41.899664 ]
	    },
	    "properties": {
	    "stop_id":"70500",
	    "stop_name":"LONSDALE NS EDGEHILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404428,41.897677 ]
	    },
	    "properties": {
	    "stop_id":"70505",
	    "stop_name":"LONSDALE FS VALLEY VIEW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404855,41.895661 ]
	    },
	    "properties": {
	    "stop_id":"70510",
	    "stop_name":"LONSDALE NS WALKER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.491828,41.581093 ]
	    },
	    "properties": {
	    "stop_id":"70540",
	    "stop_name":"WICKFORD TRAIN STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356883,41.89273 ]
	    },
	    "properties": {
	    "stop_id":"70545",
	    "stop_name":"COTTAGE NS BENEFIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.356521,41.892714 ]
	    },
	    "properties": {
	    "stop_id":"70590",
	    "stop_name":"COTTAGE FS BENEFIT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355053,41.893609 ]
	    },
	    "properties": {
	    "stop_id":"70595",
	    "stop_name":"COTTAGE NS NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425462,41.526983 ]
	    },
	    "properties": {
	    "stop_id":"70600",
	    "stop_name":"RT 1A & RT 138 PARK&RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.492707,41.611768 ]
	    },
	    "properties": {
	    "stop_id":"70670",
	    "stop_name":"RT 2 & RT 4 PARK&RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436868,41.852531 ]
	    },
	    "properties": {
	    "stop_id":"70700",
	    "stop_name":"DOUGLAS FS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.534554,41.869415 ]
	    },
	    "properties": {
	    "stop_id":"70800",
	    "stop_name":"COMMERCE NS PUTNAM PIKE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.442886,41.795262 ]
	    },
	    "properties": {
	    "stop_id":"70805",
	    "stop_name":"STOP&SHOP (GARFIELD STREET - CRANSTON)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.370703,41.813161 ]
	    },
	    "properties": {
	    "stop_id":"70810",
	    "stop_name":"S BROADWAY FS WINSOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.367331,41.801464 ]
	    },
	    "properties": {
	    "stop_id":"70815",
	    "stop_name":"MARTIN OPP ANGELL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359453,41.797289 ]
	    },
	    "properties": {
	    "stop_id":"70820",
	    "stop_name":"WAMPANOAG NS BUCK THORNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353412,41.795855 ]
	    },
	    "properties": {
	    "stop_id":"70825",
	    "stop_name":"WAMPANOAG FS GARDEN DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.357025,41.796644 ]
	    },
	    "properties": {
	    "stop_id":"70830",
	    "stop_name":"WAMPANOAG OPP GARDEN DR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.359184,41.797319 ]
	    },
	    "properties": {
	    "stop_id":"70835",
	    "stop_name":"WAMPANOAG OPP BUCK THORNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366587,41.801433 ]
	    },
	    "properties": {
	    "stop_id":"70840",
	    "stop_name":"MARTIN FS PAWTUCKET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368737,41.801833 ]
	    },
	    "properties": {
	    "stop_id":"70845",
	    "stop_name":"MARTIN OPP DODGE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373629,41.803891 ]
	    },
	    "properties": {
	    "stop_id":"70850",
	    "stop_name":"S BROADWAY FS MARTIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371738,41.809701 ]
	    },
	    "properties": {
	    "stop_id":"70855",
	    "stop_name":"S BROADWAY NS BELMONT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.370659,41.812959 ]
	    },
	    "properties": {
	    "stop_id":"70860",
	    "stop_name":"S BROADWAY NS WINSOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438596,41.824615 ]
	    },
	    "properties": {
	    "stop_id":"70870",
	    "stop_name":"ATWELLS NS VALLEY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.512968,41.82741 ]
	    },
	    "properties": {
	    "stop_id":"70875",
	    "stop_name":"HARTFORD FS I-295"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.501826,41.824461 ]
	    },
	    "properties": {
	    "stop_id":"70880",
	    "stop_name":"HARTFORD NS ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.51275,41.82764 ]
	    },
	    "properties": {
	    "stop_id":"70885",
	    "stop_name":"HARTFORD AT I-295"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401158,41.819201 ]
	    },
	    "properties": {
	    "stop_id":"70890",
	    "stop_name":"S MAIN FS WICKENDEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.341948,41.87474 ]
	    },
	    "properties": {
	    "stop_id":"70895",
	    "stop_name":"ARMISTICE OPP SLATER PARK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444622,41.816184 ]
	    },
	    "properties": {
	    "stop_id":"71000",
	    "stop_name":"PLAINFIELD FS ATWOOD ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.586487,42.005421 ]
	    },
	    "properties": {
	    "stop_id":"71005",
	    "stop_name":"BRIGIDO MARKET PARK AND RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.579405,42.000417 ]
	    },
	    "properties": {
	    "stop_id":"71010",
	    "stop_name":"NORTH MAIN NS MAIN ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.578839,42.000581 ]
	    },
	    "properties": {
	    "stop_id":"71015",
	    "stop_name":"MAIN ST  NS NORTH MAIN ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.548918,41.998782 ]
	    },
	    "properties": {
	    "stop_id":"71020",
	    "stop_name":"GREAT RD AT 594 GREAT RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.548727,41.998782 ]
	    },
	    "properties": {
	    "stop_id":"71025",
	    "stop_name":"GREAT RD AT 601 GREAT RD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.451401,41.845875 ]
	    },
	    "properties": {
	    "stop_id":"71030",
	    "stop_name":"SMITH NS GENTIAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.441364,41.8409 ]
	    },
	    "properties": {
	    "stop_id":"71040",
	    "stop_name":"SMITH NS RIVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424379,41.771346 ]
	    },
	    "properties": {
	    "stop_id":"71045",
	    "stop_name":"JOB LOT PLAZA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375479,41.81524 ]
	    },
	    "properties": {
	    "stop_id":"71050",
	    "stop_name":"WARREN FS LYON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.368743,41.813348 ]
	    },
	    "properties": {
	    "stop_id":"71055",
	    "stop_name":"WARREN FS BROADWAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.365961,41.812854 ]
	    },
	    "properties": {
	    "stop_id":"71060",
	    "stop_name":"WARREN FS SLOCUM"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.362527,41.811983 ]
	    },
	    "properties": {
	    "stop_id":"71065",
	    "stop_name":"WARREN FS BROWN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.360703,41.811515 ]
	    },
	    "properties": {
	    "stop_id":"71070",
	    "stop_name":"WARREN NS S ROSE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.361278,41.811724 ]
	    },
	    "properties": {
	    "stop_id":"71075",
	    "stop_name":"WARREN FS S SPRUCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.364463,41.812572 ]
	    },
	    "properties": {
	    "stop_id":"71080",
	    "stop_name":"WARREN FS HIGH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.366938,41.813125 ]
	    },
	    "properties": {
	    "stop_id":"71085",
	    "stop_name":"WARREN OPP DONNELY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463573,41.783104 ]
	    },
	    "properties": {
	    "stop_id":"71095",
	    "stop_name":"PARK NS CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467035,41.781995 ]
	    },
	    "properties": {
	    "stop_id":"71100",
	    "stop_name":"PHENIX NS GREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471744,41.781071 ]
	    },
	    "properties": {
	    "stop_id":"71105",
	    "stop_name":"PHENIX NS ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473959,41.780763 ]
	    },
	    "properties": {
	    "stop_id":"71115",
	    "stop_name":"PHENIX OPP PRESTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.471772,41.780978 ]
	    },
	    "properties": {
	    "stop_id":"71120",
	    "stop_name":"PHENIX FS ATWOOD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.467021,41.781931 ]
	    },
	    "properties": {
	    "stop_id":"71125",
	    "stop_name":"PHENIX OPP GREEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.463546,41.78304 ]
	    },
	    "properties": {
	    "stop_id":"71130",
	    "stop_name":"PARK FS CRANSTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.459967,41.783589 ]
	    },
	    "properties": {
	    "stop_id":"71135",
	    "stop_name":"PARK FS PALMER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.473986,41.781562 ]
	    },
	    "properties": {
	    "stop_id":"71140",
	    "stop_name":"STOP&SHOP (ATWOOD AVENUE - CRANSTON)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.46085,41.740849 ]
	    },
	    "properties": {
	    "stop_id":"71145",
	    "stop_name":"PONTIAC NS HOWARD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404503,41.78949 ]
	    },
	    "properties": {
	    "stop_id":"72000",
	    "stop_name":"CARR STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.415389,41.821076 ]
	    },
	    "properties": {
	    "stop_id":"72005",
	    "stop_name":"WESTMINSTER STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413073,41.828283 ]
	    },
	    "properties": {
	    "stop_id":"72010",
	    "stop_name":"PROVIDENCE STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412841,41.828623 ]
	    },
	    "properties": {
	    "stop_id":"72015",
	    "stop_name":"PROVIDENCE STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410829,41.828711 ]
	    },
	    "properties": {
	    "stop_id":"72020",
	    "stop_name":"ROGER WILLIAMS NATIONAL MEMORIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.395046,41.871802 ]
	    },
	    "properties": {
	    "stop_id":"72025",
	    "stop_name":"PEARL STREET (R-LINE)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.414454,41.82323 ]
	    },
	    "properties": {
	    "stop_id":"72100",
	    "stop_name":"WASHINGTON NS CLEMENCE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.380799,41.879768 ]
	    },
	    "properties": {
	    "stop_id":"72110",
	    "stop_name":"EXCHANGE NS EXCHANGE CT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355571,41.898928 ]
	    },
	    "properties": {
	    "stop_id":"72125",
	    "stop_name":"S ATTLEBORO TRAIN STATION"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.404063,41.767348 ]
	    },
	    "properties": {
	    "stop_id":"72130",
	    "stop_name":"WARWICK AVE SHAWS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.186834,41.643331 ]
	    },
	    "properties": {
	    "stop_id":"72135",
	    "stop_name":"FISH RD PARK & RIDE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412085,41.82484 ]
	    },
	    "properties": {
	    "stop_id":"72155",
	    "stop_name":"KENNEDY PLAZA (STOP F)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.412597,41.825465 ]
	    },
	    "properties": {
	    "stop_id":"72160",
	    "stop_name":"KENNEDY PLAZA (STOP W)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411967,41.825971 ]
	    },
	    "properties": {
	    "stop_id":"72165",
	    "stop_name":"KENNEDY PLAZA (STOP Y)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411791,41.82603 ]
	    },
	    "properties": {
	    "stop_id":"72170",
	    "stop_name":"KENNEDY PLAZA (STOP Z)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411896,41.824672 ]
	    },
	    "properties": {
	    "stop_id":"72175",
	    "stop_name":"KENNEDY PLAZA (STOP A)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374706,41.498149 ]
	    },
	    "properties": {
	    "stop_id":"72180",
	    "stop_name":"NORTH NS WATSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.5935,41.672631 ]
	    },
	    "properties": {
	    "stop_id":"72185",
	    "stop_name":"WOODLAND NS GOLDFINCH"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.535733,41.482201 ]
	    },
	    "properties": {
	    "stop_id":"72190",
	    "stop_name":"KINGSTOWN OPP GRADUATE VILLAGE APTS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354344,41.894953 ]
	    },
	    "properties": {
	    "stop_id":"72210",
	    "stop_name":"NEWPORT NS DAWSON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.355883,41.893252 ]
	    },
	    "properties": {
	    "stop_id":"72215",
	    "stop_name":"COTTAGE NS COUNTY ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.354223,41.895751 ]
	    },
	    "properties": {
	    "stop_id":"72220",
	    "stop_name":"NEWPORT NS MILL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424877,41.807309 ]
	    },
	    "properties": {
	    "stop_id":"72230",
	    "stop_name":"ELMWOOD FS HANOVER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425529,41.804831 ]
	    },
	    "properties": {
	    "stop_id":"72240",
	    "stop_name":"ELMWOOD OPP MOORE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.426567,41.800859 ]
	    },
	    "properties": {
	    "stop_id":"72250",
	    "stop_name":"ELMWOOD NS HAWTHORNE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.424544,41.794744 ]
	    },
	    "properties": {
	    "stop_id":"72260",
	    "stop_name":"ELMWOOD AT 635 ELMWOOD (FURNACE & DUCT SUPPLY CO.)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.425183,41.805262 ]
	    },
	    "properties": {
	    "stop_id":"72270",
	    "stop_name":"ELMWOOD NS PRINCETON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.35369,41.898866 ]
	    },
	    "properties": {
	    "stop_id":"72300",
	    "stop_name":"MARKET BASKET SOUTH ATTLEBORO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.438239,41.755179 ]
	    },
	    "properties": {
	    "stop_id":"72305",
	    "stop_name":"JEFFERSON BLVD NS CYPRESS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40232,41.857002 ]
	    },
	    "properties": {
	    "stop_id":"72310",
	    "stop_name":"COLLYER AT JOB LOT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.440336,41.816212 ]
	    },
	    "properties": {
	    "stop_id":"72330",
	    "stop_name":"WESTMINSTER AT 1834 WESTMINSTER ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.578416,42.000829 ]
	    },
	    "properties": {
	    "stop_id":"72335",
	    "stop_name":"GREENE ST NS SCHOOL ST"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40687,41.817536 ]
	    },
	    "properties": {
	    "stop_id":"72340",
	    "stop_name":"EDDY FS POINT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.407885,41.819252 ]
	    },
	    "properties": {
	    "stop_id":"72345",
	    "stop_name":"EDDY OPP SHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.410831,41.823029 ]
	    },
	    "properties": {
	    "stop_id":"72350",
	    "stop_name":"DORRANCE FS PINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408182,41.823316 ]
	    },
	    "properties": {
	    "stop_id":"72355",
	    "stop_name":"DYER FS FRIENDSHIP"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.485495,41.842952 ]
	    },
	    "properties": {
	    "stop_id":"72360",
	    "stop_name":"GEORGE WATERMEN FS ARMENTO"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.461752,41.756357 ]
	    },
	    "properties": {
	    "stop_id":"72365",
	    "stop_name":"NEW LONDON FS CHAPEL VIEW BLVD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.313584,41.51407 ]
	    },
	    "properties": {
	    "stop_id":"72370",
	    "stop_name":"MET SCHOOL NEWPORT"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.508929,41.979707 ]
	    },
	    "properties": {
	    "stop_id":"72380",
	    "stop_name":"DOWLING VILLAGE BLVD AT SLEEPY'S"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.512433,41.980639 ]
	    },
	    "properties": {
	    "stop_id":"72385",
	    "stop_name":"DOWLING VILLAGE BLVD @ LANDMARK MED"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.512371,41.980413 ]
	    },
	    "properties": {
	    "stop_id":"72390",
	    "stop_name":"DOWLING VILLAGE @ CVS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.509141,41.979554 ]
	    },
	    "properties": {
	    "stop_id":"72395",
	    "stop_name":"DOWLING VILLAGE & EDDIE DOWLING"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.507058,41.97645 ]
	    },
	    "properties": {
	    "stop_id":"72400",
	    "stop_name":"DOWLING VILLAGE OPP WALMART"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.505392,42.007887 ]
	    },
	    "properties": {
	    "stop_id":"72410",
	    "stop_name":"JOHN CUMMINGS NS SOCIAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.340129,41.873902 ]
	    },
	    "properties": {
	    "stop_id":"72425",
	    "stop_name":"ARMISTICE OPP ALEXANDER MCGREGOR"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.522106,41.870043 ]
	    },
	    "properties": {
	    "stop_id":"72430",
	    "stop_name":"PUTNAM PIKE OPP LEVI LANE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.353224,41.826065 ]
	    },
	    "properties": {
	    "stop_id":"72435",
	    "stop_name":"PAWTUCKET OPP OFFICE PKWY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.663297,41.815873 ]
	    },
	    "properties": {
	    "stop_id":"72445",
	    "stop_name":"CHOPMIST HILL FIRE STA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436924,41.848438 ]
	    },
	    "properties": {
	    "stop_id":"72450",
	    "stop_name":"ADMIRAL FS HEREFORD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.435412,41.847718 ]
	    },
	    "properties": {
	    "stop_id":"72455",
	    "stop_name":"ADMIRAL AT CARTERET"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.377756,41.881566 ]
	    },
	    "properties": {
	    "stop_id":"72460",
	    "stop_name":"BROADWAY FS MAY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.376714,41.883679 ]
	    },
	    "properties": {
	    "stop_id":"72465",
	    "stop_name":"BROADWAY DFS ALLEN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371295,41.705996 ]
	    },
	    "properties": {
	    "stop_id":"72470",
	    "stop_name":"TIDEWATER FS LONGMEADOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373265,41.708385 ]
	    },
	    "properties": {
	    "stop_id":"72475",
	    "stop_name":"TIDEWATER FS EHIPPLE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374942,41.7114 ]
	    },
	    "properties": {
	    "stop_id":"72480",
	    "stop_name":"TIDEWATER FS RIVER VUE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.374858,41.71093 ]
	    },
	    "properties": {
	    "stop_id":"72485",
	    "stop_name":"TIDEWATER NS WEBB"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.372983,41.707886 ]
	    },
	    "properties": {
	    "stop_id":"72490",
	    "stop_name":"TIDEWATER NS CLARA"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.371054,41.705465 ]
	    },
	    "properties": {
	    "stop_id":"72495",
	    "stop_name":"TIDEWATER NS LONGMEADOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.373742,41.704298 ]
	    },
	    "properties": {
	    "stop_id":"72500",
	    "stop_name":"LONGMEADOW NS DRAPER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.423284,41.837661 ]
	    },
	    "properties": {
	    "stop_id":"72505",
	    "stop_name":"DOUGLAS FS MANSFIELD"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.400208,41.81698 ]
	    },
	    "properties": {
	    "stop_id":"72510",
	    "stop_name":"1A NS MAIN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411571,41.822617 ]
	    },
	    "properties": {
	    "stop_id":"72520",
	    "stop_name":"WEYBOSSET FS EDDY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.413148,41.820912 ]
	    },
	    "properties": {
	    "stop_id":"72525",
	    "stop_name":"WEYBOSSET NS SNOW"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.322655,41.795428 ]
	    },
	    "properties": {
	    "stop_id":"72530",
	    "stop_name":"SEEKONK SQUARE (COMMERCE WAY - SEEKONK)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.375085,41.819968 ]
	    },
	    "properties": {
	    "stop_id":"72535",
	    "stop_name":"JAMES FS TAUNTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.349167,41.794488 ]
	    },
	    "properties": {
	    "stop_id":"72540",
	    "stop_name":"WAMPANOAG FS AMARAL"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.352418,41.795641 ]
	    },
	    "properties": {
	    "stop_id":"72550",
	    "stop_name":"WAMPANOAG FS TRIPPS"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.331974,41.788883 ]
	    },
	    "properties": {
	    "stop_id":"72555",
	    "stop_name":"RIVER FS MINK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.339646,41.804855 ]
	    },
	    "properties": {
	    "stop_id":"72560",
	    "stop_name":"HIGHLAND AT STATE LINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.344999,41.806426 ]
	    },
	    "properties": {
	    "stop_id":"72565",
	    "stop_name":"EVERGREEN OPP HATTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.345096,41.806558 ]
	    },
	    "properties": {
	    "stop_id":"72570",
	    "stop_name":"EVERGREEN NS HATTON"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.345048,41.803813 ]
	    },
	    "properties": {
	    "stop_id":"72575",
	    "stop_name":"EVERGREEN NS JORDAN"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.339726,41.804656 ]
	    },
	    "properties": {
	    "stop_id":"72580",
	    "stop_name":"HIGHLAND AT RI/MA STATE LINE"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405611,41.817111 ]
	    },
	    "properties": {
	    "stop_id":"72585",
	    "stop_name":"POINT FS EDDY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.40113,41.818819 ]
	    },
	    "properties": {
	    "stop_id":"72590",
	    "stop_name":"WICKENDEN FS S WATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.408365,41.822657 ]
	    },
	    "properties": {
	    "stop_id":"72600",
	    "stop_name":"DYER NS PECK"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.401659,41.818866 ]
	    },
	    "properties": {
	    "stop_id":"72605",
	    "stop_name":"WICKENDEN NS S WATER"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.405724,41.817223 ]
	    },
	    "properties": {
	    "stop_id":"72610",
	    "stop_name":"POINT NS EDDY"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.30827,41.455761 ]
	    },
	    "properties": {
	    "stop_id":"72700",
	    "stop_name":"BELLEVUE AT LEDGE (drop off only)"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.444103,41.795793 ]
	    },
	    "properties": {
	    "stop_id":"place_brpa",
	    "stop_name":"brewery parkade"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.411571,41.825054 ]
	    },
	    "properties": {
	    "stop_id":"place_kepl",
	    "stop_name":"kennedy plaza - providence"
	    }
	  },
	  {
	    "type": "Feature",
	    "geometry": {
	       "type": "Point",
	       "coordinates":  [ -71.436812,41.72573 ]
	    },
	    "properties": {
	    "stop_id":"place_tfgr",
	    "stop_name":"t.f. green airport"
	    }
	  }
	]
	}
}