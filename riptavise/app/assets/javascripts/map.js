// TODO: Create a map variable
var map;
var markers = [];
// TODO: Complete the following function to initialize the map
function initMap() {
// TODO: use a constructor to create a new map JS object. You can use the coordinates
// we used, 40.7413549, -73.99802439999996 or your own!
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.7001, lng: -71.4162},
		zoom: 10
	});

	var stops = [
 {
   "stop_id": "5",
   "stop_name": "WESTERLY TOWN HALL",
   "latitude": 41.377,
   "longitude": -71.829771
 },
 {
   "stop_id": "10",
   "stop_name": "GROVE NS WILCOX",
   "latitude": 41.378328,
   "longitude": -71.82668
 },
 {
   "stop_id": "20",
   "stop_name": "WESTERLY RAILROAD STATION",
   "latitude": 41.381108,
   "longitude": -71.829808
 },
 {
   "stop_id": "25",
   "stop_name": "HIGH FS GROVE",
   "latitude": 41.381038,
   "longitude": -71.82572
 },
 {
   "stop_id": "50",
   "stop_name": "BOON OPP PERKINS",
   "latitude": 41.424357,
   "longitude": -71.46062
 },
 {
   "stop_id": "55",
   "stop_name": "BOON FS PERKINS",
   "latitude": 41.424363,
   "longitude": -71.460504
 },
 {
   "stop_id": "60",
   "stop_name": "S PIER OPP SUMMER",
   "latitude": 41.424339,
   "longitude": -71.461892
 },
 {
   "stop_id": "65",
   "stop_name": "S PIER FS SUMMER",
   "latitude": 41.424602,
   "longitude": -71.462071
 },
 {
   "stop_id": "75",
   "stop_name": "S PIER NS FRANK LOW",
   "latitude": 41.425304,
   "longitude": -71.464052
 },
 {
   "stop_id": "80",
   "stop_name": "S PIER NS FRANK LOW",
   "latitude": 41.425305,
   "longitude": -71.463625
 },
 {
   "stop_id": "85",
   "stop_name": "BOON NS CONGDON",
   "latitude": 41.425489,
   "longitude": -71.459991
 },
 {
   "stop_id": "90",
   "stop_name": "BOON NS CONGDON",
   "latitude": 41.425519,
   "longitude": -71.460099
 },
 {
   "stop_id": "95",
   "stop_name": "S PIER OPP 172 S PIER",
   "latitude": 41.426203,
   "longitude": -71.467536
 },
 {
   "stop_id": "110",
   "stop_name": "BOON AT 126 BOON",
   "latitude": 41.427019,
   "longitude": -71.459391
 },
 {
   "stop_id": "115",
   "stop_name": "S PIER FS 172 S PIER",
   "latitude": 41.426116,
   "longitude": -71.467565
 },
 {
   "stop_id": "120",
   "stop_name": "BOON FS RODMAN",
   "latitude": 41.427138,
   "longitude": -71.45946
 },
 {
   "stop_id": "125",
   "stop_name": "S PIER AT NARRAGANSETT MIDDLE SCHOOL",
   "latitude": 41.427791,
   "longitude": -71.472088
 },
 {
   "stop_id": "130",
   "stop_name": "SALT POND SHOPPING PLAZA (STOP&SHOP)",
   "latitude": 41.428327,
   "longitude": -71.483315
 },
 {
   "stop_id": "135",
   "stop_name": "BOON NS CENTRAL",
   "latitude": 41.42863,
   "longitude": -71.458762
 },
 {
   "stop_id": "140",
   "stop_name": "BOON NS CENTRAL",
   "latitude": 41.429057,
   "longitude": -71.458806
 },
 {
   "stop_id": "150",
   "stop_name": "S PIER OPP NARRAGANSETT MIDDLE SCHOOL",
   "latitude": 41.42755,
   "longitude": -71.471847
 },
 {
   "stop_id": "155",
   "stop_name": "S PIER NS LAKEWOOD",
   "latitude": 41.42984,
   "longitude": -71.47616
 },
 {
   "stop_id": "170",
   "stop_name": "S PIER OPP AVICE",
   "latitude": 41.430334,
   "longitude": -71.479041
 },
 {
   "stop_id": "185",
   "stop_name": "KINGSTOWN AT LIBRARY",
   "latitude": 41.431188,
   "longitude": -71.460005
 },
 {
   "stop_id": "190",
   "stop_name": "KINGSTOWN FS CASWELL",
   "latitude": 41.431088,
   "longitude": -71.460146
 },
 {
   "stop_id": "250",
   "stop_name": "BOSTON NECK AT TOWN BEACH SOUTH PAVILION",
   "latitude": 41.435122,
   "longitude": -71.456388
 },
 {
   "stop_id": "255",
   "stop_name": "BOSTON NECK - NORTH BEACH SOUTH PAVILION",
   "latitude": 41.435296,
   "longitude": -71.456552
 },
 {
   "stop_id": "290",
   "stop_name": "BOSTON NECK AT NARR TOWN BEACH NORTH LOT",
   "latitude": 41.43684,
   "longitude": -71.454786
 },
 {
   "stop_id": "295",
   "stop_name": "BOSTON NECK - NORTH BEACH ENTRANCE",
   "latitude": 41.437274,
   "longitude": -71.454592
 },
 {
   "stop_id": "300",
   "stop_name": "BOSTON NECK OPP WOOD",
   "latitude": 41.440814,
   "longitude": -71.450822
 },
 {
   "stop_id": "305",
   "stop_name": "BOSTON NECK - NORTH BEACH CABANAS GATE 7",
   "latitude": 41.438177,
   "longitude": -71.453131
 },
 {
   "stop_id": "310",
   "stop_name": "MAIN AT 399 MAIN",
   "latitude": 41.437288,
   "longitude": -71.501033
 },
 {
   "stop_id": "315",
   "stop_name": "MAIN AT 396 MAIN",
   "latitude": 41.437213,
   "longitude": -71.500964
 },
 {
   "stop_id": "335",
   "stop_name": "MAIN OPP 249-255 MAIN",
   "latitude": 41.440297,
   "longitude": -71.49728
 },
 {
   "stop_id": "340",
   "stop_name": "MAIN OPP ROBINSON",
   "latitude": 41.438867,
   "longitude": -71.498868
 },
 {
   "stop_id": "370",
   "stop_name": "MAIN OPP CLEVELAND",
   "latitude": 41.440945,
   "longitude": -71.493886
 },
 {
   "stop_id": "375",
   "stop_name": "MAIN NS CHAPPELL",
   "latitude": 41.441236,
   "longitude": -71.490843
 },
 {
   "stop_id": "380",
   "stop_name": "BOSTON NECK FS WOOD",
   "latitude": 41.440426,
   "longitude": -71.451033
 },
 {
   "stop_id": "390",
   "stop_name": "MAIN FS COLUMBIA",
   "latitude": 41.440837,
   "longitude": -71.49579
 },
 {
   "stop_id": "395",
   "stop_name": "MAIN FS CLEVELAND",
   "latitude": 41.440996,
   "longitude": -71.494115
 },
 {
   "stop_id": "405",
   "stop_name": "MAIN NS HOLLEY",
   "latitude": 41.441449,
   "longitude": -71.489655
 },
 {
   "stop_id": "415",
   "stop_name": "MAIN NS RT 108",
   "latitude": 41.441356,
   "longitude": -71.489258
 },
 {
   "stop_id": "425",
   "stop_name": "OLD TOWER HILL NS RT 108",
   "latitude": 41.441867,
   "longitude": -71.486656
 },
 {
   "stop_id": "430",
   "stop_name": "OLD TOWER HILL FS NARRAGANSETT",
   "latitude": 41.441923,
   "longitude": -71.484458
 },
 {
   "stop_id": "435",
   "stop_name": "OLD TOWER HILL NS KELLY WAY",
   "latitude": 41.442563,
   "longitude": -71.480573
 },
 {
   "stop_id": "440",
   "stop_name": "OLD TOWER HILL OPP CHAMBER OF COMMERCE",
   "latitude": 41.44239,
   "longitude": -71.480569
 },
 {
   "stop_id": "445",
   "stop_name": "HIGH AT 180 HIGH",
   "latitude": 41.441832,
   "longitude": -71.502313
 },
 {
   "stop_id": "450",
   "stop_name": "BOSTON NECK OPP STARR DR W",
   "latitude": 41.444056,
   "longitude": -71.450569
 },
 {
   "stop_id": "455",
   "stop_name": "WAKEFIELD MALL",
   "latitude": 41.443701,
   "longitude": -71.483301
 },
 {
   "stop_id": "460",
   "stop_name": "BOSTON NECK FS CASTLE",
   "latitude": 41.446304,
   "longitude": -71.451148
 },
 {
   "stop_id": "465",
   "stop_name": "BOSTON NECK NS STARR DR WEST",
   "latitude": 41.444039,
   "longitude": -71.450734
 },
 {
   "stop_id": "475",
   "stop_name": "HIGH FS TUCKER",
   "latitude": 41.445317,
   "longitude": -71.502806
 },
 {
   "stop_id": "480",
   "stop_name": "BOSTON NECK NS CASTLE",
   "latitude": 41.446272,
   "longitude": -71.451315
 },
 {
   "stop_id": "485",
   "stop_name": "HIGH FS OAKDELL",
   "latitude": 41.446838,
   "longitude": -71.502613
 },
 {
   "stop_id": "495",
   "stop_name": "RT 1 OPP WAKEFIELD MEADOWS",
   "latitude": 41.449051,
   "longitude": -71.472449
 },
 {
   "stop_id": "500",
   "stop_name": "BOSTON NECK FS STARR",
   "latitude": 41.447528,
   "longitude": -71.451146
 },
 {
   "stop_id": "505",
   "stop_name": "HIGH NS CHURCH",
   "latitude": 41.449313,
   "longitude": -71.501386
 },
 {
   "stop_id": "520",
   "stop_name": "RT 1 FS HAMPTON",
   "latitude": 41.448753,
   "longitude": -71.47328
 },
 {
   "stop_id": "525",
   "stop_name": "BOSTON NECK OPP 483 BOSTON NECK",
   "latitude": 41.455159,
   "longitude": -71.440324
 },
 {
   "stop_id": "535",
   "stop_name": "ASHAWAY PARK & RIDE (HOPKINTON)",
   "latitude": 41.450174,
   "longitude": -71.78608
 },
 {
   "stop_id": "540",
   "stop_name": "HIGH FS RT 108",
   "latitude": 41.450552,
   "longitude": -71.500738
 },
 {
   "stop_id": "545",
   "stop_name": "HIGH NS RT 108",
   "latitude": 41.4506,
   "longitude": -71.500577
 },
 {
   "stop_id": "550",
   "stop_name": "KINGSTOWN NS KERSEY RD",
   "latitude": 41.452806,
   "longitude": -71.501864
 },
 {
   "stop_id": "560",
   "stop_name": "BOSTON NECK FS OLD BOSTON NECK",
   "latitude": 41.453323,
   "longitude": -71.442541
 },
 {
   "stop_id": "565",
   "stop_name": "BOSTON NECK NS OLD BOSTON NECK",
   "latitude": 41.458531,
   "longitude": -71.43584
 },
 {
   "stop_id": "570",
   "stop_name": "KINGSTOWN OPP 1428 KINGSTOWN RD",
   "latitude": 41.454184,
   "longitude": -71.505059
 },
 {
   "stop_id": "585",
   "stop_name": "KINGSTOWN NS MEADOWBROOK WAY",
   "latitude": 41.45675,
   "longitude": -71.508331
 },
 {
   "stop_id": "595",
   "stop_name": "KINGSTOWN NS SAMUEL RODMAN",
   "latitude": 41.459516,
   "longitude": -71.508756
 },
 {
   "stop_id": "605",
   "stop_name": "BELLEVUE OPP MARBLE HOUSE",
   "latitude": 41.46253,
   "longitude": -71.306669
 },
 {
   "stop_id": "615",
   "stop_name": "KINGSTOWN NS SAUGUATUCKET",
   "latitude": 41.462169,
   "longitude": -71.509323
 },
 {
   "stop_id": "630",
   "stop_name": "BOSTON NECK AT 483 BOSTON NECK",
   "latitude": 41.454983,
   "longitude": -71.440326
 },
 {
   "stop_id": "635",
   "stop_name": "BOSTON NECK OPP ANAWAN CLIFF",
   "latitude": 41.461219,
   "longitude": -71.433642
 },
 {
   "stop_id": "640",
   "stop_name": "BOSTON NECK OPP HILLVIEW",
   "latitude": 41.464374,
   "longitude": -71.432912
 },
 {
   "stop_id": "645",
   "stop_name": "BOSTON NECK AT 750 BOSTON NECK",
   "latitude": 41.46719,
   "longitude": -71.433588
 },
 {
   "stop_id": "650",
   "stop_name": "BELLEVUE OPP 541 BELLEVUE",
   "latitude": 41.465772,
   "longitude": -71.306883
 },
 {
   "stop_id": "655",
   "stop_name": "BELLEVUE OPP ROSECLIFF",
   "latitude": 41.465496,
   "longitude": -71.306933
 },
 {
   "stop_id": "665",
   "stop_name": "BOSTON NECK NS WEST BAY",
   "latitude": 41.469251,
   "longitude": -71.433902
 },
 {
   "stop_id": "670",
   "stop_name": "KINGSTOWN NS GREENWOOD",
   "latitude": 41.467617,
   "longitude": -71.512248
 },
 {
   "stop_id": "685",
   "stop_name": "KINGSTOWN OPP GREENWOOD",
   "latitude": 41.467638,
   "longitude": -71.512128
 },
 {
   "stop_id": "730",
   "stop_name": "RUGGLES OPP STONEACRE",
   "latitude": 41.468123,
   "longitude": -71.305747
 },
 {
   "stop_id": "735",
   "stop_name": "RUGGLES OPP 204 RUGGLES",
   "latitude": 41.468284,
   "longitude": -71.304332
 },
 {
   "stop_id": "740",
   "stop_name": "RUGGLES AT STONEACRE HOUSE",
   "latitude": 41.468206,
   "longitude": -71.30565
 },
 {
   "stop_id": "745",
   "stop_name": "RUGGLES AT WETMORE",
   "latitude": 41.468379,
   "longitude": -71.302933
 },
 {
   "stop_id": "750",
   "stop_name": "RUGGLES OPP CAREY MANSION",
   "latitude": 41.468328,
   "longitude": -71.304343
 },
 {
   "stop_id": "755",
   "stop_name": "RUGGLES OPP WETMORE",
   "latitude": 41.46851,
   "longitude": -71.302897
 },
 {
   "stop_id": "760",
   "stop_name": "RUGGLES NS OCHRE POINT",
   "latitude": 41.468628,
   "longitude": -71.299664
 },
 {
   "stop_id": "775",
   "stop_name": "OCHRE POINT NS RUGGLES",
   "latitude": 41.468826,
   "longitude": -71.299495
 },
 {
   "stop_id": "780",
   "stop_name": "BOSTON NECK FS MARIAN",
   "latitude": 41.473036,
   "longitude": -71.434068
 },
 {
   "stop_id": "785",
   "stop_name": "BOSTON NECK NS BROWNING",
   "latitude": 41.467493,
   "longitude": -71.433526
 },
 {
   "stop_id": "790",
   "stop_name": "OCHRE POINT NS VICTORIA",
   "latitude": 41.469948,
   "longitude": -71.299707
 },
 {
   "stop_id": "805",
   "stop_name": "KINGSTOWN NS ROLENS",
   "latitude": 41.469874,
   "longitude": -71.513576
 },
 {
   "stop_id": "815",
   "stop_name": "KINGSTOWN OPP ROLENS",
   "latitude": 41.46997,
   "longitude": -71.513763
 },
 {
   "stop_id": "820",
   "stop_name": "OCHRE POINT NS OHARE CENTER",
   "latitude": 41.470592,
   "longitude": -71.29975
 },
 {
   "stop_id": "830",
   "stop_name": "OCHRE POINT OPP OHARE CENTER",
   "latitude": 41.470963,
   "longitude": -71.299939
 },
 {
   "stop_id": "845",
   "stop_name": "OCHRE PONT OPP MCAULEY HALL",
   "latitude": 41.472293,
   "longitude": -71.300172
 },
 {
   "stop_id": "850",
   "stop_name": "OCHRE PONT AT MCAULEY HALL",
   "latitude": 41.472223,
   "longitude": -71.300024
 },
 {
   "stop_id": "875",
   "stop_name": "OCHRE POINT AT LEROY",
   "latitude": 41.473046,
   "longitude": -71.300161
 },
 {
   "stop_id": "880",
   "stop_name": "OCHRE POINT NS LEROY",
   "latitude": 41.473187,
   "longitude": -71.300316
 },
 {
   "stop_id": "885",
   "stop_name": "BOSTON NECK OPP MARIAN",
   "latitude": 41.4731,
   "longitude": -71.433888
 },
 {
   "stop_id": "890",
   "stop_name": "BOSTON NECK AT 904 BOSTON NECK",
   "latitude": 41.475633,
   "longitude": -71.435242
 },
 {
   "stop_id": "905",
   "stop_name": "KINGSTOWN NS WESTWIND",
   "latitude": 41.47106,
   "longitude": -71.51468
 },
 {
   "stop_id": "910",
   "stop_name": "OCHRE POINT NS WEBSTER",
   "latitude": 41.474144,
   "longitude": -71.300124
 },
 {
   "stop_id": "915",
   "stop_name": "OCHRE POINT NS WEBSTER",
   "latitude": 41.474556,
   "longitude": -71.300226
 },
 {
   "stop_id": "925",
   "stop_name": "KINGSTOWN OPP WAYSIDE",
   "latitude": 41.474617,
   "longitude": -71.517515
 },
 {
   "stop_id": "935",
   "stop_name": "KINGSTOWN OPP EAST FARM",
   "latitude": 41.472152,
   "longitude": -71.51562
 },
 {
   "stop_id": "940",
   "stop_name": "BELLEVUE NS NARRAGANSETT",
   "latitude": 41.475496,
   "longitude": -71.307904
 },
 {
   "stop_id": "950",
   "stop_name": "NARRAGANSETT NS BELLEVUE",
   "latitude": 41.475348,
   "longitude": -71.307231
 },
 {
   "stop_id": "955",
   "stop_name": "OCHRE POINT NS NARRAGANSETT",
   "latitude": 41.475545,
   "longitude": -71.300055
 },
 {
   "stop_id": "965",
   "stop_name": "NARRAGANSETT AVE OPP NEWPORT HALL",
   "latitude": 41.475517,
   "longitude": -71.302747
 },
 {
   "stop_id": "970",
   "stop_name": "NARRAGANSETT AT CHEPSTOW HOUSE",
   "latitude": 41.475495,
   "longitude": -71.304955
 },
 {
   "stop_id": "975",
   "stop_name": "BOSTON NECK NS EMERY",
   "latitude": 41.478025,
   "longitude": -71.435953
 },
 {
   "stop_id": "980",
   "stop_name": "BOSTON NECK AT 909 BOSTON NECK",
   "latitude": 41.475666,
   "longitude": -71.435073
 },
 {
   "stop_id": "985",
   "stop_name": "NARRAGANSETT AT NARRAGANSETT HALL",
   "latitude": 41.475598,
   "longitude": -71.302763
 },
 {
   "stop_id": "1010",
   "stop_name": "BELLEVUE FS DIXON",
   "latitude": 41.477153,
   "longitude": -71.308055
 },
 {
   "stop_id": "1030",
   "stop_name": "KINGSTOWN AT 2327 KINGSTOWN RD",
   "latitude": 41.476133,
   "longitude": -71.518739
 },
 {
   "stop_id": "1035",
   "stop_name": "KINGSTOWN FS WAYSIDE",
   "latitude": 41.474451,
   "longitude": -71.517491
 },
 {
   "stop_id": "1040",
   "stop_name": "BELLEVUE NS PERRY",
   "latitude": 41.479251,
   "longitude": -71.308596
 },
 {
   "stop_id": "1055",
   "stop_name": "BOSTON NECK OPP CONANICUS",
   "latitude": 41.479319,
   "longitude": -71.436179
 },
 {
   "stop_id": "1060",
   "stop_name": "BOSTON NECK NS CONANICUS",
   "latitude": 41.479532,
   "longitude": -71.436402
 },
 {
   "stop_id": "1070",
   "stop_name": "KINGSTOWN AT 2318 KINGSTOWN",
   "latitude": 41.475945,
   "longitude": -71.518724
 },
 {
   "stop_id": "1075",
   "stop_name": "KINGSTOWN FS NORTH RD",
   "latitude": 41.480003,
   "longitude": -71.522949
 },
 {
   "stop_id": "1080",
   "stop_name": "KINGSTOWN FS RT 138",
   "latitude": 41.479607,
   "longitude": -71.520794
 },
 {
   "stop_id": "1085",
   "stop_name": "KINGSTOWN AT 2579 KINGSTOWN RD",
   "latitude": 41.480197,
   "longitude": -71.524366
 },
 {
   "stop_id": "1095",
   "stop_name": "BELLEVUE FS BOWERY",
   "latitude": 41.480894,
   "longitude": -71.308547
 },
 {
   "stop_id": "1100",
   "stop_name": "BELLEVUE FS E BOWERY",
   "latitude": 41.481051,
   "longitude": -71.308429
 },
 {
   "stop_id": "1120",
   "stop_name": "UPPER COLLEGE NS RT 138",
   "latitude": 41.48119,
   "longitude": -71.525551
 },
 {
   "stop_id": "1125",
   "stop_name": "KINGSTOWN AT GRAD VILLAGE APTS",
   "latitude": 41.482005,
   "longitude": -71.535882
 },
 {
   "stop_id": "1140",
   "stop_name": "LOWER COLLEGE NS BAYBERRY",
   "latitude": 41.482182,
   "longitude": -71.529691
 },
 {
   "stop_id": "1145",
   "stop_name": "BELLEVUE OPP TENNIS HALL OF FAME",
   "latitude": 41.482559,
   "longitude": -71.308563
 },
 {
   "stop_id": "1150",
   "stop_name": "BELLEVUE AT TENNIS HALL OF FAME",
   "latitude": 41.48295,
   "longitude": -71.308448
 },
 {
   "stop_id": "1155",
   "stop_name": "LOWER COLLEGE OPP ST AUGUSTINES CHURCH",
   "latitude": 41.481905,
   "longitude": -71.529871
 },
 {
   "stop_id": "1165",
   "stop_name": "BOSTON NECK NS MOUNTVIEW",
   "latitude": 41.483023,
   "longitude": -71.436962
 },
 {
   "stop_id": "1175",
   "stop_name": "KINGSTOWN FS W INDEPENDENCE",
   "latitude": 41.482871,
   "longitude": -71.540778
 },
 {
   "stop_id": "1180",
   "stop_name": "UPPER COLLEGE NS CAMPUS",
   "latitude": 41.482731,
   "longitude": -71.525703
 },
 {
   "stop_id": "1185",
   "stop_name": "UPPER COLLEGE FS CAMPUS",
   "latitude": 41.482725,
   "longitude": -71.525816
 },
 {
   "stop_id": "1190",
   "stop_name": "CAMPUS AT COLLEGE OF PHARMACY",
   "latitude": 41.483487,
   "longitude": -71.528164
 },
 {
   "stop_id": "1205",
   "stop_name": "KINGSTOWN NS WAITES CORNER",
   "latitude": 41.482979,
   "longitude": -71.551555
 },
 {
   "stop_id": "1210",
   "stop_name": "BELLEVUE FS DOWNING",
   "latitude": 41.485734,
   "longitude": -71.308748
 },
 {
   "stop_id": "1215",
   "stop_name": "BELLEVUE FS PELHAM",
   "latitude": 41.485142,
   "longitude": -71.308774
 },
 {
   "stop_id": "1225",
   "stop_name": "URI STUDENT UNION",
   "latitude": 41.484315,
   "longitude": -71.529311
 },
 {
   "stop_id": "1230",
   "stop_name": "KINGSTON RAILROAD STATION",
   "latitude": 41.484102,
   "longitude": -71.560243
 },
 {
   "stop_id": "1245",
   "stop_name": "BOSTON NECK OPP GARDENIA",
   "latitude": 41.485199,
   "longitude": -71.437187
 },
 {
   "stop_id": "1250",
   "stop_name": "BOSTON NECK FS GARDENIA",
   "latitude": 41.485433,
   "longitude": -71.437117
 },
 {
   "stop_id": "1295",
   "stop_name": "BOSTON NECK OPP 1141 BOSTON NECK",
   "latitude": 41.488035,
   "longitude": -71.437646
 },
 {
   "stop_id": "1300",
   "stop_name": "BELLEVUE NS CHURCH",
   "latitude": 41.487185,
   "longitude": -71.309318
 },
 {
   "stop_id": "1305",
   "stop_name": "BELLEVUE NS ZION",
   "latitude": 41.487638,
   "longitude": -71.309422
 },
 {
   "stop_id": "1315",
   "stop_name": "TOURO NS HIGH",
   "latitude": 41.488671,
   "longitude": -71.311134
 },
 {
   "stop_id": "1330",
   "stop_name": "TOURO NS TOURO CT",
   "latitude": 41.489805,
   "longitude": -71.314371
 },
 {
   "stop_id": "1340",
   "stop_name": "MARLBOROUGH NS THAMES",
   "latitude": 41.490822,
   "longitude": -71.315476
 },
 {
   "stop_id": "1345",
   "stop_name": "MARLBOROUGH OPP DUKE",
   "latitude": 41.49095,
   "longitude": -71.315198
 },
 {
   "stop_id": "1365",
   "stop_name": "MARLBOROUGH NS FAREWELL",
   "latitude": 41.491325,
   "longitude": -71.313491
 },
 {
   "stop_id": "1370",
   "stop_name": "MARLBOROUGH FS BROADWAY",
   "latitude": 41.491412,
   "longitude": -71.31281
 },
 {
   "stop_id": "1375",
   "stop_name": "NEWPORT CITY HALL",
   "latitude": 41.491852,
   "longitude": -71.311566
 },
 {
   "stop_id": "1380",
   "stop_name": "GATEWAY CENTER AT 60 BUS BERTH",
   "latitude": 41.491412,
   "longitude": -71.317804
 },
 {
   "stop_id": "1381",
   "stop_name": "GATEWAY CENTER AT TROLLEY STOP",
   "latitude": 41.491752,
   "longitude": -71.317621
 },
 {
   "stop_id": "1382",
   "stop_name": "GATEWAY CENTER AT 63 BUS BERTH",
   "latitude": 41.491053,
   "longitude": -71.318003
 },
 {
   "stop_id": "1383",
   "stop_name": "GATEWAY CENTER AT 64 BUS BERTH",
   "latitude": 41.491485,
   "longitude": -71.317772
 },
 {
   "stop_id": "1384",
   "stop_name": "GATEWAY CENTER AT 14 BUS BERTH",
   "latitude": 41.491545,
   "longitude": -71.31775
 },
 {
   "stop_id": "1395",
   "stop_name": "BOSTON NECK FS S FERRY",
   "latitude": 41.492364,
   "longitude": -71.437984
 },
 {
   "stop_id": "1400",
   "stop_name": "BOSTON NECK NS BRIDGETOWN",
   "latitude": 41.492409,
   "longitude": -71.43815
 },
 {
   "stop_id": "1420",
   "stop_name": "THIRD FS BRIDGE",
   "latitude": 41.492298,
   "longitude": -71.318642
 },
 {
   "stop_id": "1430",
   "stop_name": "BROADWAY BETWEEN COLLINS & MANN",
   "latitude": 41.492751,
   "longitude": -71.310805
 },
 {
   "stop_id": "1435",
   "stop_name": "BROADWAY FS AYRAULT",
   "latitude": 41.493536,
   "longitude": -71.309679
 },
 {
   "stop_id": "1450",
   "stop_name": "BOSTON LAKE NS EDGEWATER RD",
   "latitude": 41.494846,
   "longitude": -71.437896
 },
 {
   "stop_id": "1455",
   "stop_name": "BOSTON NECK OPP EDGEWATER",
   "latitude": 41.494793,
   "longitude": -71.437764
 },
 {
   "stop_id": "1460",
   "stop_name": "TOWER HILL PARK N RIDE",
   "latitude": 41.495043,
   "longitude": -71.456464
 },
 {
   "stop_id": "1465",
   "stop_name": "THIRD AT WALNUT",
   "latitude": 41.49467,
   "longitude": -71.318955
 },
 {
   "stop_id": "1475",
   "stop_name": "BROADWAY NS CRANSTON",
   "latitude": 41.49503,
   "longitude": -71.308822
 },
 {
   "stop_id": "1480",
   "stop_name": "BROADWAY NS EQUALITY PARK",
   "latitude": 41.494471,
   "longitude": -71.30915
 },
 {
   "stop_id": "1495",
   "stop_name": "NARRAGANSETT FS HOWLAND",
   "latitude": 41.496192,
   "longitude": -71.371722
 },
 {
   "stop_id": "1505",
   "stop_name": "NORTH NS AT 1 NORTH RD",
   "latitude": 41.496551,
   "longitude": -71.374702
 },
 {
   "stop_id": "1510",
   "stop_name": "BROADWAY NS CLINTON",
   "latitude": 41.496347,
   "longitude": -71.308343
 },
 {
   "stop_id": "1515",
   "stop_name": "NARRAGANSETT AT 20 NARRAGANSETT",
   "latitude": 41.49637,
   "longitude": -71.368745
 },
 {
   "stop_id": "1520",
   "stop_name": "NARRAGANSETT FS GRINNELL",
   "latitude": 41.496315,
   "longitude": -71.371732
 },
 {
   "stop_id": "1525",
   "stop_name": "NARRAGANSETT FS E SHORE RD",
   "latitude": 41.496382,
   "longitude": -71.367405
 },
 {
   "stop_id": "1526",
   "stop_name": "CONANICUS FS NARRAGANSETT",
   "latitude": 41.496595,
   "longitude": -71.367009
 },
 {
   "stop_id": "1530",
   "stop_name": "THIRD NS LASALLE",
   "latitude": 41.497507,
   "longitude": -71.319305
 },
 {
   "stop_id": "1535",
   "stop_name": "BOSTON NECK FS BANFIELD",
   "latitude": 41.497986,
   "longitude": -71.4363
 },
 {
   "stop_id": "1540",
   "stop_name": "BROADWAY NS FRIENDSHIP",
   "latitude": 41.49799,
   "longitude": -71.30734
 },
 {
   "stop_id": "1545",
   "stop_name": "BOSTON NECK NS PETTAQUAMSCUTT LAKE",
   "latitude": 41.497967,
   "longitude": -71.436521
 },
 {
   "stop_id": "1555",
   "stop_name": "BROADWAY OPP FRIENDSHIP",
   "latitude": 41.498142,
   "longitude": -71.30741
 },
 {
   "stop_id": "1565",
   "stop_name": "NORTH NS VALLEY",
   "latitude": 41.498233,
   "longitude": -71.374589
 },
 {
   "stop_id": "1575",
   "stop_name": "CONANICUS FS KNOWLES",
   "latitude": 41.496757,
   "longitude": -71.367143
 },
 {
   "stop_id": "1590",
   "stop_name": "BROADWAY NS SUMMER",
   "latitude": 41.499798,
   "longitude": -71.306406
 },
 {
   "stop_id": "1595",
   "stop_name": "BROADWAY NS GIBBS",
   "latitude": 41.499862,
   "longitude": -71.306139
 },
 {
   "stop_id": "1600",
   "stop_name": "THIRD FS CYPRESS",
   "latitude": 41.499988,
   "longitude": -71.319747
 },
 {
   "stop_id": "1605",
   "stop_name": "THIRD OPP CYPRESS",
   "latitude": 41.500429,
   "longitude": -71.319726
 },
 {
   "stop_id": "1610",
   "stop_name": "BOSTON NECK OPP RIVERDELL",
   "latitude": 41.500947,
   "longitude": -71.433596
 },
 {
   "stop_id": "1615",
   "stop_name": "BOSTON NECK NS RIVERDELL",
   "latitude": 41.500993,
   "longitude": -71.433797
 },
 {
   "stop_id": "1625",
   "stop_name": "BROADWAY NS BROOKS",
   "latitude": 41.501178,
   "longitude": -71.305113
 },
 {
   "stop_id": "1635",
   "stop_name": "BROADWAY NS GREEN",
   "latitude": 41.501871,
   "longitude": -71.30471
 },
 {
   "stop_id": "1645",
   "stop_name": "THIRD AT BAYSIDE VILLAGE",
   "latitude": 41.501716,
   "longitude": -71.319844
 },
 {
   "stop_id": "1650",
   "stop_name": "THIRD OPP BAYSIDE VILLAGE",
   "latitude": 41.501766,
   "longitude": -71.320017
 },
 {
   "stop_id": "1660",
   "stop_name": "BOSTON NECK NS INDIAN TRAIL",
   "latitude": 41.502256,
   "longitude": -71.43213
 },
 {
   "stop_id": "1665",
   "stop_name": "BROADWAY NS COUNTY",
   "latitude": 41.502906,
   "longitude": -71.303693
 },
 {
   "stop_id": "1670",
   "stop_name": "BROADWAY NS THURSTON",
   "latitude": 41.503163,
   "longitude": -71.303639
 },
 {
   "stop_id": "1685",
   "stop_name": "RT 1 NS WALMSLEY LN",
   "latitude": 41.50376,
   "longitude": -71.45929
 },
 {
   "stop_id": "1695",
   "stop_name": "THIRD OPP DYERS GATE",
   "latitude": 41.503582,
   "longitude": -71.320243
 },
 {
   "stop_id": "1705",
   "stop_name": "BROADWAY NS VERNON",
   "latitude": 41.503961,
   "longitude": -71.302835
 },
 {
   "stop_id": "1715",
   "stop_name": "THIRD OPP NAVAL HEALTH CLINIC",
   "latitude": 41.504382,
   "longitude": -71.320194
 },
 {
   "stop_id": "1720",
   "stop_name": "BROADWAY OPP CANONICUS",
   "latitude": 41.505017,
   "longitude": -71.301968
 },
 {
   "stop_id": "1725",
   "stop_name": "BOSTON NECK FS MINER",
   "latitude": 41.504953,
   "longitude": -71.428414
 },
 {
   "stop_id": "1730",
   "stop_name": "BOSTON NECK NS MINER",
   "latitude": 41.505015,
   "longitude": -71.42862
 },
 {
   "stop_id": "1735",
   "stop_name": "BROADWAY NS CANONICUS",
   "latitude": 41.505043,
   "longitude": -71.302186
 },
 {
   "stop_id": "1745",
   "stop_name": "CONANICUS NS MT HOPE",
   "latitude": 41.504757,
   "longitude": -71.364472
 },
 {
   "stop_id": "1755",
   "stop_name": "ADM KALBFUS AT AT ADMIRAL'S GATE",
   "latitude": 41.506695,
   "longitude": -71.319325
 },
 {
   "stop_id": "1760",
   "stop_name": "ADMIRAL KALBUS NS ROWLAND",
   "latitude": 41.50619,
   "longitude": -71.302662
 },
 {
   "stop_id": "1770",
   "stop_name": "ADM KALBFUS OPP ROWLAND",
   "latitude": 41.506187,
   "longitude": -71.302274
 },
 {
   "stop_id": "1775",
   "stop_name": "CONNELL HWAY AT NEWPORT TIRE",
   "latitude": 41.507682,
   "longitude": -71.317696
 },
 {
   "stop_id": "1776",
   "stop_name": "CONANICUS NS MT HOPE AVE",
   "latitude": 41.50488,
   "longitude": -71.364623
 },
 {
   "stop_id": "1777",
   "stop_name": "EAST SHORE NS FREEBODY (RI TURNPIKE AUTHORITY)",
   "latitude": 41.5111,
   "longitude": -71.36526
 },
 {
   "stop_id": "1780",
   "stop_name": "ADM KALBFUS NS SAGAMORE",
   "latitude": 41.506806,
   "longitude": -71.304989
 },
 {
   "stop_id": "1810",
   "stop_name": "ADM KALBFUS AT NEWPORT GRAND",
   "latitude": 41.507618,
   "longitude": -71.313161
 },
 {
   "stop_id": "1820",
   "stop_name": "W MAIN NS DUDLEY",
   "latitude": 41.507228,
   "longitude": -71.301742
 },
 {
   "stop_id": "1830",
   "stop_name": "ADM KALBFUS OPP NEWPORT GRAND",
   "latitude": 41.507898,
   "longitude": -71.312605
 },
 {
   "stop_id": "1835",
   "stop_name": "CONNELL HWAY OPP NISSAN VOLVO",
   "latitude": 41.508102,
   "longitude": -71.317583
 },
 {
   "stop_id": "1850",
   "stop_name": "GIRARD NS ADM KALBFUS",
   "latitude": 41.508148,
   "longitude": -71.311638
 },
 {
   "stop_id": "1860",
   "stop_name": "GIRARD NS SUNSET",
   "latitude": 41.51296,
   "longitude": -71.31328
 },
 {
   "stop_id": "1865",
   "stop_name": "CONNELL  HWAY AT NEWPORT ADULTS VIDEO",
   "latitude": 41.511545,
   "longitude": -71.318059
 },
 {
   "stop_id": "1870",
   "stop_name": "NEWPORT TOWNE CENTER (LAUNDROMAT)",
   "latitude": 41.511926,
   "longitude": -71.317415
 },
 {
   "stop_id": "1875",
   "stop_name": "BOSTON NECK NS FERRY",
   "latitude": 41.507607,
   "longitude": -71.42496
 },
 {
   "stop_id": "1880",
   "stop_name": "BOSTON NECK FS FERRY",
   "latitude": 41.507661,
   "longitude": -71.425119
 },
 {
   "stop_id": "1890",
   "stop_name": "NEWPORT TOWNE CENTER (WALMART)",
   "latitude": 41.510625,
   "longitude": -71.316887
 },
 {
   "stop_id": "1895",
   "stop_name": "NEWPORT TOWNE CENTER (STOP&SHOP)",
   "latitude": 41.508474,
   "longitude": -71.31643
 },
 {
   "stop_id": "1900",
   "stop_name": "W MAIN AT RODEWAY INN",
   "latitude": 41.506577,
   "longitude": -71.301524
 },
 {
   "stop_id": "1905",
   "stop_name": "HILLSIDE NS EISENHOWER",
   "latitude": 41.509678,
   "longitude": -71.307751
 },
 {
   "stop_id": "1915",
   "stop_name": "HILLSIDE NS BEACON",
   "latitude": 41.511967,
   "longitude": -71.308767
 },
 {
   "stop_id": "1920",
   "stop_name": "W MAIN NS STOCKTON",
   "latitude": 41.509392,
   "longitude": -71.301921
 },
 {
   "stop_id": "1940",
   "stop_name": "W MAIN FS ROSEDALE",
   "latitude": 41.511214,
   "longitude": -71.302368
 },
 {
   "stop_id": "1945",
   "stop_name": "WYOMING PARK & RIDE (RICHMOND)",
   "latitude": 41.511973,
   "longitude": -71.689832
 },
 {
   "stop_id": "1955",
   "stop_name": "W MAIN AT 211 W MAIN",
   "latitude": 41.511411,
   "longitude": -71.302233
 },
 {
   "stop_id": "1975",
   "stop_name": "HILLSIDE OPP SGT GREENE",
   "latitude": 41.51288,
   "longitude": -71.309615
 },
 {
   "stop_id": "1976",
   "stop_name": "HILLSIDE OPP 218 HILLSIDE",
   "latitude": 41.514642,
   "longitude": -71.309741
 },
 {
   "stop_id": "1980",
   "stop_name": "W MAIN FS BEACON",
   "latitude": 41.513742,
   "longitude": -71.301747
 },
 {
   "stop_id": "1990",
   "stop_name": "W MAIN FS BEACON",
   "latitude": 41.513881,
   "longitude": -71.301579
 },
 {
   "stop_id": "2005",
   "stop_name": "HILLSIDE AT 216 HILLSIDE",
   "latitude": 41.514646,
   "longitude": -71.309865
 },
 {
   "stop_id": "2010",
   "stop_name": "GIRARD FS FESTIVAL FIELD APTS",
   "latitude": 41.511682,
   "longitude": -71.313096
 },
 {
   "stop_id": "2015",
   "stop_name": "W MAIN AT MOBIL STATION",
   "latitude": 41.515144,
   "longitude": -71.301354
 },
 {
   "stop_id": "2020",
   "stop_name": "CONNELL HWAY NS MAPLE",
   "latitude": 41.515053,
   "longitude": -71.316041
 },
 {
   "stop_id": "2025",
   "stop_name": "CONNELL OPP HILLMART",
   "latitude": 41.515038,
   "longitude": -71.316217
 },
 {
   "stop_id": "2035",
   "stop_name": "W MAIN FS SMYTHE",
   "latitude": 41.51556,
   "longitude": -71.30103
 },
 {
   "stop_id": "2045",
   "stop_name": "HILLSIDE NS MAPLE",
   "latitude": 41.515906,
   "longitude": -71.309734
 },
 {
   "stop_id": "2055",
   "stop_name": "MAPLE NS JOHN CHAFFEE BLVD",
   "latitude": 41.515894,
   "longitude": -71.312682
 },
 {
   "stop_id": "2060",
   "stop_name": "MAPLE AT HEAD START CENTER",
   "latitude": 41.516108,
   "longitude": -71.312361
 },
 {
   "stop_id": "2065",
   "stop_name": "BOSTON NECK OPP CHARLOTTE",
   "latitude": 41.516748,
   "longitude": -71.423412
 },
 {
   "stop_id": "2070",
   "stop_name": "BOSTON NECK FS CHARLOTTE",
   "latitude": 41.516702,
   "longitude": -71.42324
 },
 {
   "stop_id": "2075",
   "stop_name": "W MAIN AT BANK OF NEWPORT",
   "latitude": 41.517222,
   "longitude": -71.300606
 },
 {
   "stop_id": "2080",
   "stop_name": "E MAIN OPP NEWPORT MART",
   "latitude": 41.517093,
   "longitude": -71.299326
 },
 {
   "stop_id": "2085",
   "stop_name": "E MAIN AT NEWPORT MARKET",
   "latitude": 41.517257,
   "longitude": -71.299285
 },
 {
   "stop_id": "2090",
   "stop_name": "CODDINGTON NS JOHN CHAFEE BLVD",
   "latitude": 41.518131,
   "longitude": -71.313698
 },
 {
   "stop_id": "2100",
   "stop_name": "E MAIN OPP 114 E MAIN",
   "latitude": 41.517743,
   "longitude": -71.297004
 },
 {
   "stop_id": "2105",
   "stop_name": "CODDINGTON NS W MAIN",
   "latitude": 41.518233,
   "longitude": -71.300648
 },
 {
   "stop_id": "2125",
   "stop_name": "E MAIN AT SHELL GAS",
   "latitude": 41.518568,
   "longitude": -71.294068
 },
 {
   "stop_id": "2140",
   "stop_name": "CODDINGTON OPP HARBOR BASE INN",
   "latitude": 41.519375,
   "longitude": -71.311716
 },
 {
   "stop_id": "2145",
   "stop_name": "CODDINGTON NS NIAGRA",
   "latitude": 41.518598,
   "longitude": -71.30307
 },
 {
   "stop_id": "2150",
   "stop_name": "CODDINGTON NS JONES",
   "latitude": 41.518765,
   "longitude": -71.304618
 },
 {
   "stop_id": "2155",
   "stop_name": "CODDINGTON NS SHERMAN",
   "latitude": 41.518855,
   "longitude": -71.306072
 },
 {
   "stop_id": "2165",
   "stop_name": "CODDINGTON AT BAYVIEW PARK",
   "latitude": 41.519018,
   "longitude": -71.307398
 },
 {
   "stop_id": "2170",
   "stop_name": "CODDINGTON OPP SHERMAN",
   "latitude": 41.519007,
   "longitude": -71.305795
 },
 {
   "stop_id": "2175",
   "stop_name": "CODDINGTON AT RIPTA GARAGE",
   "latitude": 41.519275,
   "longitude": -71.309746
 },
 {
   "stop_id": "2180",
   "stop_name": "CODDINGTON OPP BAYVIEW TRAILER PARK",
   "latitude": 41.519162,
   "longitude": -71.307064
 },
 {
   "stop_id": "2185",
   "stop_name": "E MAIN NS VALLEY",
   "latitude": 41.5191,
   "longitude": -71.293092
 },
 {
   "stop_id": "2195",
   "stop_name": "W MAIN NS MAPLEWOOD",
   "latitude": 41.519281,
   "longitude": -71.299718
 },
 {
   "stop_id": "2200",
   "stop_name": "CODDINGTON OPP RIPTA GARAGE",
   "latitude": 41.519474,
   "longitude": -71.309638
 },
 {
   "stop_id": "2205",
   "stop_name": "E MAIN NS ENTERPRISE DR",
   "latitude": 41.519548,
   "longitude": -71.290906
 },
 {
   "stop_id": "2210",
   "stop_name": "E MAIN FS ENTERPRISE",
   "latitude": 41.519676,
   "longitude": -71.291209
 },
 {
   "stop_id": "2215",
   "stop_name": "E MAIN AT 351 E MAIN",
   "latitude": 41.520224,
   "longitude": -71.288675
 },
 {
   "stop_id": "2230",
   "stop_name": "VALLEY OPP CHESTNUT HILL",
   "latitude": 41.520791,
   "longitude": -71.294159
 },
 {
   "stop_id": "2235",
   "stop_name": "W MAIN NS OAKWOOD",
   "latitude": 41.521651,
   "longitude": -71.298915
 },
 {
   "stop_id": "2240",
   "stop_name": "E MAIN NS FOREST",
   "latitude": 41.521046,
   "longitude": -71.285532
 },
 {
   "stop_id": "2245",
   "stop_name": "BOSTON NECK FS HOMESTEAD",
   "latitude": 41.521254,
   "longitude": -71.424046
 },
 {
   "stop_id": "2250",
   "stop_name": "BOSTON NECK OPP SNUFF MILL",
   "latitude": 41.52242,
   "longitude": -71.423628
 },
 {
   "stop_id": "2255",
   "stop_name": "E MAIN NS FOREST",
   "latitude": 41.521104,
   "longitude": -71.285845
 },
 {
   "stop_id": "2260",
   "stop_name": "RT 1 AT 2299 TOWER HILL",
   "latitude": 41.51492,
   "longitude": -71.461385
 },
 {
   "stop_id": "2265",
   "stop_name": "E MAIN NS AQUIDNECK",
   "latitude": 41.521684,
   "longitude": -71.283372
 },
 {
   "stop_id": "2270",
   "stop_name": "E MAIN FS AQUIDNECK",
   "latitude": 41.521665,
   "longitude": -71.28407
 },
 {
   "stop_id": "2275",
   "stop_name": "RT 1 FS SHERMANTOWN",
   "latitude": 41.52401,
   "longitude": -71.4648
 },
 {
   "stop_id": "2280",
   "stop_name": "VALLEY OPP NAPA AUTO",
   "latitude": 41.521838,
   "longitude": -71.29474
 },
 {
   "stop_id": "2285",
   "stop_name": "E MAIN AT 644 E MAIN",
   "latitude": 41.52421,
   "longitude": -71.279173
 },
 {
   "stop_id": "2290",
   "stop_name": "E MAIN FS WYATT",
   "latitude": 41.52286,
   "longitude": -71.281137
 },
 {
   "stop_id": "2295",
   "stop_name": "W MAIN AT MIDDLETOWN PUBLIC LIBRARY",
   "latitude": 41.521907,
   "longitude": -71.299019
 },
 {
   "stop_id": "2300",
   "stop_name": "W MAIN NS VALLEY",
   "latitude": 41.523402,
   "longitude": -71.298232
 },
 {
   "stop_id": "2305",
   "stop_name": "VALLEY NS W MAIN",
   "latitude": 41.523824,
   "longitude": -71.297541
 },
 {
   "stop_id": "2310",
   "stop_name": "W MAIN OPP VALLEY",
   "latitude": 41.52402,
   "longitude": -71.298223
 },
 {
   "stop_id": "2315",
   "stop_name": "W MAIN FS WOOLSEY",
   "latitude": 41.524878,
   "longitude": -71.29768
 },
 {
   "stop_id": "2320",
   "stop_name": "BOSTON NECK OPP 1865 BOSTON NECK",
   "latitude": 41.524558,
   "longitude": -71.423991
 },
 {
   "stop_id": "2325",
   "stop_name": "BOSTON NECK NS BARBERS HEIGHTS",
   "latitude": 41.524298,
   "longitude": -71.424082
 },
 {
   "stop_id": "2335",
   "stop_name": "W MAIN NS CHASES",
   "latitude": 41.525923,
   "longitude": -71.297526
 },
 {
   "stop_id": "2340",
   "stop_name": "E MAIN NS TURNER",
   "latitude": 41.52588,
   "longitude": -71.276159
 },
 {
   "stop_id": "2345",
   "stop_name": "E MAIN OPP TURNER",
   "latitude": 41.526101,
   "longitude": -71.276117
 },
 {
   "stop_id": "2360",
   "stop_name": "RT 1A & RT 138 PARK&RIDE (curbside)",
   "latitude": 41.526992,
   "longitude": -71.425556
 },
 {
   "stop_id": "2361",
   "stop_name": "TASHTASSUCK FS HELM",
   "latitude": 41.525592,
   "longitude": -71.385276
 },
 {
   "stop_id": "2365",
   "stop_name": "W MAIN AT ALL SAINTS ACADEMY",
   "latitude": 41.527304,
   "longitude": -71.296415
 },
 {
   "stop_id": "2370",
   "stop_name": "BOSTON NECK NS RT-138 WEST [ON-RAMP]",
   "latitude": 41.530551,
   "longitude": -71.428171
 },
 {
   "stop_id": "2380",
   "stop_name": "NUWC GATE 17",
   "latitude": 41.529203,
   "longitude": -71.307644
 },
 {
   "stop_id": "2385",
   "stop_name": "W MAIN AT 936 W MAIN",
   "latitude": 41.528018,
   "longitude": -71.296217
 },
 {
   "stop_id": "2390",
   "stop_name": "E MAIN OPP CHAVES GARDENS",
   "latitude": 41.530294,
   "longitude": -71.272856
 },
 {
   "stop_id": "2395",
   "stop_name": "E MAIN NS MEADOW LN",
   "latitude": 41.529703,
   "longitude": -71.273136
 },
 {
   "stop_id": "2405",
   "stop_name": "W MAIN AT 999 W MAIN (PLAZA)",
   "latitude": 41.529581,
   "longitude": -71.294749
 },
 {
   "stop_id": "2410",
   "stop_name": "W MAIN OPP 999 W MAIN",
   "latitude": 41.529655,
   "longitude": -71.294937
 },
 {
   "stop_id": "2415",
   "stop_name": "W MAIN NS FOREST",
   "latitude": 41.530666,
   "longitude": -71.293986
 },
 {
   "stop_id": "2425",
   "stop_name": "W MAIN OPP FOREST",
   "latitude": 41.53102,
   "longitude": -71.293965
 },
 {
   "stop_id": "2430",
   "stop_name": "E MAIN NS OLIPHANT",
   "latitude": 41.53186,
   "longitude": -71.271331
 },
 {
   "stop_id": "2435",
   "stop_name": "E MAIN NS OLIPHANT",
   "latitude": 41.532157,
   "longitude": -71.271246
 },
 {
   "stop_id": "2440",
   "stop_name": "W MAIN NS VANICEK",
   "latitude": 41.532627,
   "longitude": -71.293429
 },
 {
   "stop_id": "2445",
   "stop_name": "W MAIN AT CARDI'S FURNITURE",
   "latitude": 41.533073,
   "longitude": -71.29307
 },
 {
   "stop_id": "2455",
   "stop_name": "W MAIN NS BRIGHT IDEAS",
   "latitude": 41.534933,
   "longitude": -71.292692
 },
 {
   "stop_id": "2460",
   "stop_name": "W MAIN AT MIDDLETOWN SQUARE PLAZA",
   "latitude": 41.534557,
   "longitude": -71.292583
 },
 {
   "stop_id": "2470",
   "stop_name": "W MAIN NS BROWNS LANE SHOPPING CTR",
   "latitude": 41.53788,
   "longitude": -71.291856
 },
 {
   "stop_id": "2475",
   "stop_name": "STOP&SHOP (WEST MAIN ROAD - MIDDLETOWN)",
   "latitude": 41.536636,
   "longitude": -71.293336
 },
 {
   "stop_id": "2480",
   "stop_name": "W MAIN AT 1397 W MAIN",
   "latitude": 41.537387,
   "longitude": -71.291786
 },
 {
   "stop_id": "2490",
   "stop_name": "RT 1 NS SHADY LEA",
   "latitude": 41.538606,
   "longitude": -71.468498
 },
 {
   "stop_id": "2495",
   "stop_name": "E MAIN OPP MITCHELL",
   "latitude": 41.538183,
   "longitude": -71.265849
 },
 {
   "stop_id": "2500",
   "stop_name": "E MAIN NS MITCHELLS",
   "latitude": 41.537955,
   "longitude": -71.265797
 },
 {
   "stop_id": "2505",
   "stop_name": "BOSTON NECK OPP GILBERT STUART RD",
   "latitude": 41.538758,
   "longitude": -71.438657
 },
 {
   "stop_id": "2510",
   "stop_name": "BOSTON NECK NS GILBERT STUART RD",
   "latitude": 41.538893,
   "longitude": -71.438993
 },
 {
   "stop_id": "2515",
   "stop_name": "W MAIN OPP 1522 W MAIN",
   "latitude": 41.539573,
   "longitude": -71.291406
 },
 {
   "stop_id": "2520",
   "stop_name": "W MAIN NS SQUANTUM",
   "latitude": 41.540951,
   "longitude": -71.291684
 },
 {
   "stop_id": "2525",
   "stop_name": "E MAIN NS WOODLAND",
   "latitude": 41.541306,
   "longitude": -71.263527
 },
 {
   "stop_id": "2530",
   "stop_name": "E MAIN OPP RANDALL",
   "latitude": 41.540815,
   "longitude": -71.264004
 },
 {
   "stop_id": "2535",
   "stop_name": "W MAIN OPP SQUANTUM",
   "latitude": 41.540978,
   "longitude": -71.291483
 },
 {
   "stop_id": "2540",
   "stop_name": "E MAIN FS PAQUINS LN",
   "latitude": 41.544789,
   "longitude": -71.261351
 },
 {
   "stop_id": "2545",
   "stop_name": "E MAIN FS SELINA",
   "latitude": 41.545417,
   "longitude": -71.260693
 },
 {
   "stop_id": "2550",
   "stop_name": "W MAIN NS THELMA",
   "latitude": 41.543549,
   "longitude": -71.29165
 },
 {
   "stop_id": "2555",
   "stop_name": "BOSTON NECK FS WEAVER (southern intersection)",
   "latitude": 41.543739,
   "longitude": -71.441227
 },
 {
   "stop_id": "2560",
   "stop_name": "BOSTON NECK OPP WEAVER",
   "latitude": 41.54407,
   "longitude": -71.441132
 },
 {
   "stop_id": "2565",
   "stop_name": "W MAIN FS MARSHALL",
   "latitude": 41.545131,
   "longitude": -71.291846
 },
 {
   "stop_id": "2570",
   "stop_name": "OXBOW APTS",
   "latitude": 41.543701,
   "longitude": -71.292799
 },
 {
   "stop_id": "2575",
   "stop_name": "E MAIN AT AQUIDNECK CHRISTIAN ACADEMY",
   "latitude": 41.546435,
   "longitude": -71.259947
 },
 {
   "stop_id": "2585",
   "stop_name": "RT 4 FS W ALLENTON",
   "latitude": 41.545561,
   "longitude": -71.477161
 },
 {
   "stop_id": "2595",
   "stop_name": "W MAIN AT 1776 W MAIN",
   "latitude": 41.546547,
   "longitude": -71.292033
 },
 {
   "stop_id": "2600",
   "stop_name": "W MAIN AT 1761 W MAIN",
   "latitude": 41.546223,
   "longitude": -71.291778
 },
 {
   "stop_id": "2605",
   "stop_name": "W MAIN NS GREEN LANE",
   "latitude": 41.548501,
   "longitude": -71.29217
 },
 {
   "stop_id": "2610",
   "stop_name": "BOSTON NECK FS WEAVER & HAMILTON ALLENTON RD",
   "latitude": 41.548185,
   "longitude": -71.441464
 },
 {
   "stop_id": "2615",
   "stop_name": "BOSTON NECK NS SALISBURY",
   "latitude": 41.548244,
   "longitude": -71.441313
 },
 {
   "stop_id": "2620",
   "stop_name": "W MAIN NS PASTURE FARMS",
   "latitude": 41.54818,
   "longitude": -71.291973
 },
 {
   "stop_id": "2625",
   "stop_name": "E MAIN NS SANDY POINT",
   "latitude": 41.550809,
   "longitude": -71.25766
 },
 {
   "stop_id": "2630",
   "stop_name": "E MAIN OPP SANDY PT",
   "latitude": 41.550787,
   "longitude": -71.257789
 },
 {
   "stop_id": "2640",
   "stop_name": "BOSTON NECK NS WALDRON",
   "latitude": 41.552523,
   "longitude": -71.44077
 },
 {
   "stop_id": "2650",
   "stop_name": "BOSTON NECK OPP EARL",
   "latitude": 41.55469,
   "longitude": -71.441097
 },
 {
   "stop_id": "2660",
   "stop_name": "BOSTON NECK OPP DUCK COVE",
   "latitude": 41.557389,
   "longitude": -71.443037
 },
 {
   "stop_id": "2665",
   "stop_name": "E MAIN NS UNION",
   "latitude": 41.558025,
   "longitude": -71.25534
 },
 {
   "stop_id": "2670",
   "stop_name": "E MAIN AT 880 E MAIN",
   "latitude": 41.558492,
   "longitude": -71.255379
 },
 {
   "stop_id": "2675",
   "stop_name": "BOSTON NECK FS EARLE",
   "latitude": 41.554835,
   "longitude": -71.440886
 },
 {
   "stop_id": "2680",
   "stop_name": "BOSTON NECK AT 429 BOSTON NECK",
   "latitude": 41.558566,
   "longitude": -71.443893
 },
 {
   "stop_id": "2685",
   "stop_name": "W MAIN NS UNION",
   "latitude": 41.558869,
   "longitude": -71.287668
 },
 {
   "stop_id": "2695",
   "stop_name": "BOSTON NECK FS DUCK COVE",
   "latitude": 41.557597,
   "longitude": -71.442932
 },
 {
   "stop_id": "2700",
   "stop_name": "BOSTON NECK AT 392 BOSTON NECK",
   "latitude": 41.559494,
   "longitude": -71.444361
 },
 {
   "stop_id": "2705",
   "stop_name": "BOSTON NECK NS FAIRWAY",
   "latitude": 41.560442,
   "longitude": -71.445238
 },
 {
   "stop_id": "2710",
   "stop_name": "W MAIL OPP MAIL COACH",
   "latitude": 41.560639,
   "longitude": -71.286754
 },
 {
   "stop_id": "2715",
   "stop_name": "E MAIN NS GLEN",
   "latitude": 41.561009,
   "longitude": -71.25419
 },
 {
   "stop_id": "2720",
   "stop_name": "BOSTON NECK OPP 270 BOSTON NECK",
   "latitude": 41.562044,
   "longitude": -71.446391
 },
 {
   "stop_id": "2725",
   "stop_name": "BOSTON NECK FS BEACH",
   "latitude": 41.565576,
   "longitude": -71.448756
 },
 {
   "stop_id": "2730",
   "stop_name": "BOSTON NECK AT 270 BOSTON NECK",
   "latitude": 41.562423,
   "longitude": -71.446428
 },
 {
   "stop_id": "2735",
   "stop_name": "W MAIN AT 2243 W MAIN",
   "latitude": 41.562712,
   "longitude": -71.286128
 },
 {
   "stop_id": "2740",
   "stop_name": "E MAIN OPP GLEN RD",
   "latitude": 41.561224,
   "longitude": -71.254288
 },
 {
   "stop_id": "2745",
   "stop_name": "BOSTON NECK OPP REYNOLDS",
   "latitude": 41.56659,
   "longitude": -71.449903
 },
 {
   "stop_id": "2750",
   "stop_name": "BOSTON NECK NS BEACH",
   "latitude": 41.565429,
   "longitude": -71.448489
 },
 {
   "stop_id": "2755",
   "stop_name": "W MAIN OPP 2243 W MAIN",
   "latitude": 41.562254,
   "longitude": -71.286129
 },
 {
   "stop_id": "2760",
   "stop_name": "BAYVIEW APARTMENTS",
   "latitude": 41.565974,
   "longitude": -71.284734
 },
 {
   "stop_id": "2765",
   "stop_name": "BOSTON NECK NS REYNOLDS",
   "latitude": 41.566631,
   "longitude": -71.449809
 },
 {
   "stop_id": "2770",
   "stop_name": "E MAIN NS EYLER",
   "latitude": 41.568236,
   "longitude": -71.251127
 },
 {
   "stop_id": "2775",
   "stop_name": "E MAIN NS BEAUPRE",
   "latitude": 41.565429,
   "longitude": -71.25262
 },
 {
   "stop_id": "2780",
   "stop_name": "BOSTON NECK AT 45 BOSTON NECK",
   "latitude": 41.567678,
   "longitude": -71.451148
 },
 {
   "stop_id": "2785",
   "stop_name": "W MAIN FS RAYTHEON ENTRANCE",
   "latitude": 41.56988,
   "longitude": -71.277513
 },
 {
   "stop_id": "2810",
   "stop_name": "W MAIN OPP RAYTHEON",
   "latitude": 41.570219,
   "longitude": -71.276863
 },
 {
   "stop_id": "2815",
   "stop_name": "PHILLIPS AT 84 PHILLIPS",
   "latitude": 41.568111,
   "longitude": -71.454952
 },
 {
   "stop_id": "2850",
   "stop_name": "RT 4 NS LAFAYETTE",
   "latitude": 41.57158,
   "longitude": -71.49305
 },
 {
   "stop_id": "2870",
   "stop_name": "E MAIN NS MCCORRIE",
   "latitude": 41.572289,
   "longitude": -71.250954
 },
 {
   "stop_id": "2875",
   "stop_name": "E MAIN OPP MCCORRIE",
   "latitude": 41.57263,
   "longitude": -71.251185
 },
 {
   "stop_id": "2890",
   "stop_name": "W MAIN OPP SCOTTY DR",
   "latitude": 41.575695,
   "longitude": -71.271663
 },
 {
   "stop_id": "2900",
   "stop_name": "POST FS SUMMIT VIEW",
   "latitude": 41.572506,
   "longitude": -71.462092
 },
 {
   "stop_id": "2910",
   "stop_name": "E MAIN OPP MARTENS",
   "latitude": 41.575163,
   "longitude": -71.251429
 },
 {
   "stop_id": "2915",
   "stop_name": "W MAIN NS JOHN",
   "latitude": 41.575644,
   "longitude": -71.271918
 },
 {
   "stop_id": "2920",
   "stop_name": "POST OPP JUNIPER",
   "latitude": 41.575557,
   "longitude": -71.461085
 },
 {
   "stop_id": "2925",
   "stop_name": "POST NS JUNIPER",
   "latitude": 41.575742,
   "longitude": -71.461147
 },
 {
   "stop_id": "2930",
   "stop_name": "W MAIN OPP STRINGHAM",
   "latitude": 41.577688,
   "longitude": -71.270929
 },
 {
   "stop_id": "2935",
   "stop_name": "POST NS INTREPID",
   "latitude": 41.577911,
   "longitude": -71.460353
 },
 {
   "stop_id": "2940",
   "stop_name": "W MAIN AT 1575 W MAIN",
   "latitude": 41.577411,
   "longitude": -71.271286
 },
 {
   "stop_id": "2945",
   "stop_name": "POST FS INTREPID",
   "latitude": 41.577687,
   "longitude": -71.460236
 },
 {
   "stop_id": "2950",
   "stop_name": "W MAIN NS MILL",
   "latitude": 41.57916,
   "longitude": -71.270422
 },
 {
   "stop_id": "2960",
   "stop_name": "E MAIN FS SHERWOOD",
   "latitude": 41.578243,
   "longitude": -71.251991
 },
 {
   "stop_id": "2965",
   "stop_name": "W MAIN OPP MILL",
   "latitude": 41.579202,
   "longitude": -71.270591
 },
 {
   "stop_id": "2970",
   "stop_name": "E MAIN NS MARVEL",
   "latitude": 41.574725,
   "longitude": -71.251519
 },
 {
   "stop_id": "2975",
   "stop_name": "E MAIN NS FAIRVIEW",
   "latitude": 41.579942,
   "longitude": -71.252284
 },
 {
   "stop_id": "2980",
   "stop_name": "RT 2 AT BALD HILL GARDEN CTR",
   "latitude": 41.574248,
   "longitude": -71.516335
 },
 {
   "stop_id": "2995",
   "stop_name": "RT 2 FS HOME DEPOT ENTRANCE",
   "latitude": 41.584437,
   "longitude": -71.500866
 },
 {
   "stop_id": "29966",
   "stop_name": "RT 2 NS HOME DEPOT ENTRANCE",
   "latitude": 41.584441,
   "longitude": -71.500986
 },
 {
   "stop_id": "3000",
   "stop_name": "E MAIN BETWEEN ETHEL & PINE TREE",
   "latitude": 41.583748,
   "longitude": -71.252218
 },
 {
   "stop_id": "3005",
   "stop_name": "E MAIN AT 1944 E MAIN",
   "latitude": 41.583889,
   "longitude": -71.252424
 },
 {
   "stop_id": "3010",
   "stop_name": "POST NS HULING",
   "latitude": 41.58539,
   "longitude": -71.458818
 },
 {
   "stop_id": "3020",
   "stop_name": "E MAIN AT 2050 E MAIN",
   "latitude": 41.587071,
   "longitude": -71.252806
 },
 {
   "stop_id": "3030",
   "stop_name": "W MAIN OPP MELVILLE ELEMENTARY",
   "latitude": 41.583198,
   "longitude": -71.269433
 },
 {
   "stop_id": "3035",
   "stop_name": "E MAIN FS LEPES",
   "latitude": 41.585827,
   "longitude": -71.252207
 },
 {
   "stop_id": "3040",
   "stop_name": "POST OPP 7805 POST",
   "latitude": 41.585783,
   "longitude": -71.458554
 },
 {
   "stop_id": "3045",
   "stop_name": "POST OPP 7760 POST",
   "latitude": 41.586855,
   "longitude": -71.45845
 },
 {
   "stop_id": "3055",
   "stop_name": "W MAIN NS BRADFORD",
   "latitude": 41.583362,
   "longitude": -71.269629
 },
 {
   "stop_id": "3060",
   "stop_name": "POST AT 7708 POST",
   "latitude": 41.588263,
   "longitude": -71.457887
 },
 {
   "stop_id": "3070",
   "stop_name": "W MAIN FS KING CHARLES",
   "latitude": 41.59131,
   "longitude": -71.266769
 },
 {
   "stop_id": "3075",
   "stop_name": "W MAIN NS KING CHARLES",
   "latitude": 41.591357,
   "longitude": -71.266927
 },
 {
   "stop_id": "3080",
   "stop_name": "POST NS OAKDALE",
   "latitude": 41.590047,
   "longitude": -71.457417
 },
 {
   "stop_id": "3085",
   "stop_name": "POST NS OAKDALE",
   "latitude": 41.59032,
   "longitude": -71.457545
 },
 {
   "stop_id": "3090",
   "stop_name": "E MAIN NS SEA MEADOW",
   "latitude": 41.587144,
   "longitude": -71.252631
 },
 {
   "stop_id": "3095",
   "stop_name": "E MAIN ND HEDLY",
   "latitude": 41.59042,
   "longitude": -71.253728
 },
 {
   "stop_id": "3100",
   "stop_name": "E MAIN AT PORTSMOUTH POLICE HQ",
   "latitude": 41.592158,
   "longitude": -71.253521
 },
 {
   "stop_id": "3105",
   "stop_name": "E MAIN NS HEDLY",
   "latitude": 41.590066,
   "longitude": -71.253504
 },
 {
   "stop_id": "3110",
   "stop_name": "POST AT 1540 POST",
   "latitude": 41.592592,
   "longitude": -71.456677
 },
 {
   "stop_id": "3115",
   "stop_name": "POST OPP 7540 POST",
   "latitude": 41.592667,
   "longitude": -71.456803
 },
 {
   "stop_id": "3120",
   "stop_name": "W MAIN OPP HEDLY",
   "latitude": 41.594099,
   "longitude": -71.264963
 },
 {
   "stop_id": "3130",
   "stop_name": "POST AT 7440 POST",
   "latitude": 41.595082,
   "longitude": -71.455897
 },
 {
   "stop_id": "3145",
   "stop_name": "E MAIN AT RITE AID",
   "latitude": 41.596872,
   "longitude": -71.251729
 },
 {
   "stop_id": "3150",
   "stop_name": "E MAIN AT 2451 E MAIN",
   "latitude": 41.596877,
   "longitude": -71.251507
 },
 {
   "stop_id": "3155",
   "stop_name": "POST FS CAMP",
   "latitude": 41.5976,
   "longitude": -71.455157
 },
 {
   "stop_id": "3170",
   "stop_name": "POST AT 7260 POST",
   "latitude": 41.599779,
   "longitude": -71.454724
 },
 {
   "stop_id": "3175",
   "stop_name": "E MAIN AT 2588 E MAIN",
   "latitude": 41.600347,
   "longitude": -71.250171
 },
 {
   "stop_id": "3180",
   "stop_name": "POST AT 7277 POST",
   "latitude": 41.60079,
   "longitude": -71.454867
 },
 {
   "stop_id": "3185",
   "stop_name": "E MAIN FS TURNPIKE",
   "latitude": 41.601115,
   "longitude": -71.249393
 },
 {
   "stop_id": "3190",
   "stop_name": "E MAIN FS FREEBORN",
   "latitude": 41.601241,
   "longitude": -71.249489
 },
 {
   "stop_id": "3195",
   "stop_name": "E MAIN NS CHURCH LN",
   "latitude": 41.6019,
   "longitude": -71.248235
 },
 {
   "stop_id": "3210",
   "stop_name": "W MAIN FS FREEBORN",
   "latitude": 41.604163,
   "longitude": -71.258605
 },
 {
   "stop_id": "3215",
   "stop_name": "E MAIN AT 2708 E MAIN",
   "latitude": 41.602887,
   "longitude": -71.247628
 },
 {
   "stop_id": "3225",
   "stop_name": "E MAIN NS POWER",
   "latitude": 41.606115,
   "longitude": -71.247038
 },
 {
   "stop_id": "3230",
   "stop_name": "E MAIN OPP POWER",
   "latitude": 41.606127,
   "longitude": -71.247176
 },
 {
   "stop_id": "3235",
   "stop_name": "RT 2 & RT 4 PARK&RIDE (curbside)",
   "latitude": 41.611758,
   "longitude": -71.492429
 },
 {
   "stop_id": "3250",
   "stop_name": "POST NS DEVILS FOOT",
   "latitude": 41.607345,
   "longitude": -71.455929
 },
 {
   "stop_id": "3265",
   "stop_name": "W MAIN OPP FREEBORN",
   "latitude": 41.604075,
   "longitude": -71.258807
 },
 {
   "stop_id": "3280",
   "stop_name": "E MAIN NS VILLAGE WAY",
   "latitude": 41.610542,
   "longitude": -71.246461
 },
 {
   "stop_id": "3285",
   "stop_name": "W MAIN OPP 372 W MAIN",
   "latitude": 41.605575,
   "longitude": -71.25901
 },
 {
   "stop_id": "3290",
   "stop_name": "E MAIN OPP VILLAGE WAY",
   "latitude": 41.610829,
   "longitude": -71.246584
 },
 {
   "stop_id": "3295",
   "stop_name": "POST AT 6851 POST",
   "latitude": 41.611184,
   "longitude": -71.457249
 },
 {
   "stop_id": "3300",
   "stop_name": "POST NS 6946 POST",
   "latitude": 41.608966,
   "longitude": -71.456226
 },
 {
   "stop_id": "3310",
   "stop_name": "RT 2 NS WAITES CORNER",
   "latitude": 41.495237,
   "longitude": -71.569583
 },
 {
   "stop_id": "3315",
   "stop_name": "W MAIN OPP ANSELMO",
   "latitude": 41.611053,
   "longitude": -71.260148
 },
 {
   "stop_id": "3320",
   "stop_name": "W MAIN OPP WILLOW LN",
   "latitude": 41.613465,
   "longitude": -71.258178
 },
 {
   "stop_id": "3325",
   "stop_name": "POST NS KING PHILLIP",
   "latitude": 41.614106,
   "longitude": -71.457702
 },
 {
   "stop_id": "3330",
   "stop_name": "W MAIN NS WILLOW",
   "latitude": 41.61356,
   "longitude": -71.258247
 },
 {
   "stop_id": "3335",
   "stop_name": "POST AT 6854 POST",
   "latitude": 41.611386,
   "longitude": -71.457048
 },
 {
   "stop_id": "3340",
   "stop_name": "E MAIN OPP SPRAGUE",
   "latitude": 41.614854,
   "longitude": -71.245837
 },
 {
   "stop_id": "3345",
   "stop_name": "E MAIN AT 3124 E MAIN",
   "latitude": 41.613898,
   "longitude": -71.246113
 },
 {
   "stop_id": "3355",
   "stop_name": "E MAIN OPP IRVING GAS",
   "latitude": 41.617523,
   "longitude": -71.246125
 },
 {
   "stop_id": "3360",
   "stop_name": "BRISTOL FERRY FS SPRAGUE",
   "latitude": 41.615384,
   "longitude": -71.256218
 },
 {
   "stop_id": "3370",
   "stop_name": "E MAIN OPP 3281 E MAIN",
   "latitude": 41.617327,
   "longitude": -71.246244
 },
 {
   "stop_id": "3375",
   "stop_name": "POST FS KINGSTOWN PLAZA ENTRANCE",
   "latitude": 41.616003,
   "longitude": -71.457993
 },
 {
   "stop_id": "3380",
   "stop_name": "POST NS CHADSEY",
   "latitude": 41.61389,
   "longitude": -71.457551
 },
 {
   "stop_id": "3385",
   "stop_name": "BRISTOL FERRY FS BROWNELL",
   "latitude": 41.618021,
   "longitude": -71.256829
 },
 {
   "stop_id": "3400",
   "stop_name": "POST AT 6669 POST",
   "latitude": 41.616754,
   "longitude": -71.457783
 },
 {
   "stop_id": "3415",
   "stop_name": "E MAIN NS PARK",
   "latitude": 41.620046,
   "longitude": -71.245345
 },
 {
   "stop_id": "3420",
   "stop_name": "E MAIN FS BASIN",
   "latitude": 41.62006,
   "longitude": -71.245481
 },
 {
   "stop_id": "3430",
   "stop_name": "POST AT KINGSTOWN MOTEL",
   "latitude": 41.620094,
   "longitude": -71.458086
 },
 {
   "stop_id": "3435",
   "stop_name": "POST OPP PEACHTREE",
   "latitude": 41.621529,
   "longitude": -71.458508
 },
 {
   "stop_id": "3440",
   "stop_name": "POST FS PEACHTREE",
   "latitude": 41.621954,
   "longitude": -71.458258
 },
 {
   "stop_id": "3445",
   "stop_name": "E MAIN NS ECHO",
   "latitude": 41.621496,
   "longitude": -71.244826
 },
 {
   "stop_id": "3450",
   "stop_name": "E MAIN OPP 66 E MAIN",
   "latitude": 41.621968,
   "longitude": -71.244379
 },
 {
   "stop_id": "3455",
   "stop_name": "BRISTOL FERRY OPP CORY CT",
   "latitude": 41.619745,
   "longitude": -71.256794
 },
 {
   "stop_id": "3460",
   "stop_name": "BRISTOL FERRY NS BROWNELL",
   "latitude": 41.617924,
   "longitude": -71.256983
 },
 {
   "stop_id": "3465",
   "stop_name": "BRISTOL FERRY FS CORY CT",
   "latitude": 41.619542,
   "longitude": -71.256959
 },
 {
   "stop_id": "3470",
   "stop_name": "E MAIN FS FOUNDERS",
   "latitude": 41.623382,
   "longitude": -71.243862
 },
 {
   "stop_id": "3475",
   "stop_name": "E MAIN OPP FOUNDERS",
   "latitude": 41.623309,
   "longitude": -71.243716
 },
 {
   "stop_id": "3485",
   "stop_name": "BRISTOL FERRY OPP SCHOONER",
   "latitude": 41.621112,
   "longitude": -71.256892
 },
 {
   "stop_id": "3490",
   "stop_name": "BRISTOL FERRY OPP BOTELHO",
   "latitude": 41.624208,
   "longitude": -71.256236
 },
 {
   "stop_id": "3495",
   "stop_name": "POST OPP MEMORIAL CEMETARY",
   "latitude": 41.624623,
   "longitude": -71.459199
 },
 {
   "stop_id": "3505",
   "stop_name": "E MAIN OPP SUNSET",
   "latitude": 41.625488,
   "longitude": -71.242659
 },
 {
   "stop_id": "3510",
   "stop_name": "E MAIN FS SUNSET",
   "latitude": 41.625436,
   "longitude": -71.242934
 },
 {
   "stop_id": "3515",
   "stop_name": "BRISTOL FERRY AT 309 BRISTOL FERRY",
   "latitude": 41.623391,
   "longitude": -71.256264
 },
 {
   "stop_id": "3520",
   "stop_name": "BRISTOL FERRY FS MITCHELL",
   "latitude": 41.626572,
   "longitude": -71.255615
 },
 {
   "stop_id": "3525",
   "stop_name": "POST OPP ESSEX",
   "latitude": 41.627417,
   "longitude": -71.461362
 },
 {
   "stop_id": "3530",
   "stop_name": "POST NS ESSEX",
   "latitude": 41.627133,
   "longitude": -71.460971
 },
 {
   "stop_id": "3535",
   "stop_name": "BRISTOL FERRY AT 531 BRISTOL FERRY",
   "latitude": 41.628846,
   "longitude": -71.254782
 },
 {
   "stop_id": "3545",
   "stop_name": "BOYDS LANE OPP OLD BOYDS",
   "latitude": 41.630135,
   "longitude": -71.245619
 },
 {
   "stop_id": "3550",
   "stop_name": "BOYDS LANE FS RTE. 24",
   "latitude": 41.627633,
   "longitude": -71.243603
 },
 {
   "stop_id": "3555",
   "stop_name": "POST AT 6145 POST",
   "latitude": 41.62958,
   "longitude": -71.46335
 },
 {
   "stop_id": "3560",
   "stop_name": "POST FS AUSTIN",
   "latitude": 41.630653,
   "longitude": -71.464234
 },
 {
   "stop_id": "3565",
   "stop_name": "BOYDS LANE OPP LINDA",
   "latitude": 41.631401,
   "longitude": -71.249659
 },
 {
   "stop_id": "3570",
   "stop_name": "BOYDS LANE FS BRISTOL FERRY",
   "latitude": 41.632202,
   "longitude": -71.252939
 },
 {
   "stop_id": "3575",
   "stop_name": "BRISTOL FERRY NS PORTERS",
   "latitude": 41.630756,
   "longitude": -71.254268
 },
 {
   "stop_id": "3580",
   "stop_name": "BRISTOL FERRY FS SHORELINE TERRACE",
   "latitude": 41.631742,
   "longitude": -71.253824
 },
 {
   "stop_id": "3585",
   "stop_name": "POST AT 6000 POST",
   "latitude": 41.63205,
   "longitude": -71.46607
 },
 {
   "stop_id": "3595",
   "stop_name": "POST OPP JT'S BUILDING SUPPLY",
   "latitude": 41.63225,
   "longitude": -71.466835
 },
 {
   "stop_id": "3600",
   "stop_name": "POST OPP FRANKLIN",
   "latitude": 41.635455,
   "longitude": -71.467982
 },
 {
   "stop_id": "3605",
   "stop_name": "POST NS FRENCHTOWN",
   "latitude": 41.633667,
   "longitude": -71.468373
 },
 {
   "stop_id": "3610",
   "stop_name": "POST FS 5804 POST",
   "latitude": 41.637661,
   "longitude": -71.468383
 },
 {
   "stop_id": "3615",
   "stop_name": "POST NS FRANKLIN",
   "latitude": 41.63559,
   "longitude": -71.46826
 },
 {
   "stop_id": "3620",
   "stop_name": "POST AT 5805 POST",
   "latitude": 41.637543,
   "longitude": -71.468649
 },
 {
   "stop_id": "3630",
   "stop_name": "POST AT 5732 POST",
   "latitude": 41.639642,
   "longitude": -71.468654
 },
 {
   "stop_id": "3635",
   "stop_name": "POST FS VICTORY",
   "latitude": 41.643157,
   "longitude": -71.46582
 },
 {
   "stop_id": "3637",
   "stop_name": "POST FS GRANDVIEW",
   "latitude": 41.639686,
   "longitude": -71.468924
 },
 {
   "stop_id": "3640",
   "stop_name": "POST NS OVERFIELD",
   "latitude": 41.645987,
   "longitude": -71.463324
 },
 {
   "stop_id": "3642",
   "stop_name": "POST AT 5627 POST",
   "latitude": 41.641866,
   "longitude": -71.467425
 },
 {
   "stop_id": "3645",
   "stop_name": "POST NS S PIERCE",
   "latitude": 41.642591,
   "longitude": -71.466082
 },
 {
   "stop_id": "3650",
   "stop_name": "POST FS CROSSWAYS",
   "latitude": 41.647525,
   "longitude": -71.461489
 },
 {
   "stop_id": "3655",
   "stop_name": "POST FS OVERFIELD",
   "latitude": 41.64589,
   "longitude": -71.463222
 },
 {
   "stop_id": "3660",
   "stop_name": "FERRY RD FS LOW LN",
   "latitude": 41.647682,
   "longitude": -71.26214
 },
 {
   "stop_id": "3665",
   "stop_name": "POST NS 5329 POST",
   "latitude": 41.648469,
   "longitude": -71.459995
 },
 {
   "stop_id": "3670",
   "stop_name": "FERRY RD AT ROGER WILLIAMS UNIV",
   "latitude": 41.647994,
   "longitude": -71.261906
 },
 {
   "stop_id": "3675",
   "stop_name": "POST NS FORGE",
   "latitude": 41.6484,
   "longitude": -71.45979
 },
 {
   "stop_id": "3690",
   "stop_name": "MAIN OPP 1001 MAIN",
   "latitude": 41.650908,
   "longitude": -71.457277
 },
 {
   "stop_id": "3695",
   "stop_name": "MAIN FS 1003 MAIN",
   "latitude": 41.650827,
   "longitude": -71.457636
 },
 {
   "stop_id": "3715",
   "stop_name": "MAIN FS SIXTH",
   "latitude": 41.652498,
   "longitude": -71.455939
 },
 {
   "stop_id": "3720",
   "stop_name": "MAIN NS SIXTH",
   "latitude": 41.652498,
   "longitude": -71.456194
 },
 {
   "stop_id": "3725",
   "stop_name": "FERRY RD NS AMBROSE",
   "latitude": 41.653555,
   "longitude": -71.264463
 },
 {
   "stop_id": "3730",
   "stop_name": "FERRY OPP AMBROSE",
   "latitude": 41.653477,
   "longitude": -71.264526
 },
 {
   "stop_id": "3740",
   "stop_name": "MAIN NS THIRD",
   "latitude": 41.654247,
   "longitude": -71.454834
 },
 {
   "stop_id": "3745",
   "stop_name": "MAIN NS THIRD",
   "latitude": 41.654053,
   "longitude": -71.454768
 },
 {
   "stop_id": "3750",
   "stop_name": "FERRY RD FS SIDNEY",
   "latitude": 41.655351,
   "longitude": -71.265123
 },
 {
   "stop_id": "3755",
   "stop_name": "FERRY OPP SIDNEY",
   "latitude": 41.655229,
   "longitude": -71.265166
 },
 {
   "stop_id": "3760",
   "stop_name": "MAIN AT 640 MAIN",
   "latitude": 41.655663,
   "longitude": -71.45357
 },
 {
   "stop_id": "3765",
   "stop_name": "MAIN NS FIRST",
   "latitude": 41.655687,
   "longitude": -71.453711
 },
 {
   "stop_id": "3775",
   "stop_name": "FIRST OPP CLIFF",
   "latitude": 41.65591,
   "longitude": -71.455198
 },
 {
   "stop_id": "3800",
   "stop_name": "MAIN FS VINE",
   "latitude": 41.656561,
   "longitude": -71.452678
 },
 {
   "stop_id": "3805",
   "stop_name": "MAIN OPP BRIDGE",
   "latitude": 41.65688,
   "longitude": -71.452515
 },
 {
   "stop_id": "3810",
   "stop_name": "EXIT 7 PARK 'N' RIDE (WEST GREENWICH)",
   "latitude": 41.656876,
   "longitude": -71.551366
 },
 {
   "stop_id": "3815",
   "stop_name": "FERRY AT 133 FERRY RD",
   "latitude": 41.65738,
   "longitude": -71.265976
 },
 {
   "stop_id": "3820",
   "stop_name": "FERRY RD NS GRISWOLD",
   "latitude": 41.657236,
   "longitude": -71.265835
 },
 {
   "stop_id": "3835",
   "stop_name": "MAIN NS UNION",
   "latitude": 41.657862,
   "longitude": -71.451207
 },
 {
   "stop_id": "3840",
   "stop_name": "MAIN OPP UNION",
   "latitude": 41.657919,
   "longitude": -71.451392
 },
 {
   "stop_id": "3855",
   "stop_name": "METACOM NS GRISWOLD",
   "latitude": 41.65903,
   "longitude": -71.258745
 },
 {
   "stop_id": "3860",
   "stop_name": "MAIN FS LONDON",
   "latitude": 41.658912,
   "longitude": -71.450137
 },
 {
   "stop_id": "3865",
   "stop_name": "FERRY RD NS FAIRVIEW",
   "latitude": 41.659269,
   "longitude": -71.266562
 },
 {
   "stop_id": "3870",
   "stop_name": "METACOM NS GRISWOLD",
   "latitude": 41.659357,
   "longitude": -71.258791
 },
 {
   "stop_id": "3885",
   "stop_name": "MAIN NS PIERCE",
   "latitude": 41.658974,
   "longitude": -71.450268
 },
 {
   "stop_id": "3890",
   "stop_name": "MAIN FS QUEEN",
   "latitude": 41.660847,
   "longitude": -71.449877
 },
 {
   "stop_id": "3900",
   "stop_name": "HOPE NS 10 HOPE ST",
   "latitude": 41.660493,
   "longitude": -71.26801
 },
 {
   "stop_id": "3910",
   "stop_name": "HOPE OPP HIGH",
   "latitude": 41.661275,
   "longitude": -71.270375
 },
 {
   "stop_id": "3915",
   "stop_name": "HOPE NS HIGH",
   "latitude": 41.661259,
   "longitude": -71.270113
 },
 {
   "stop_id": "3920",
   "stop_name": "MAIN FS CHURCH",
   "latitude": 41.661607,
   "longitude": -71.450069
 },
 {
   "stop_id": "3930",
   "stop_name": "MAIN FS CHURCH",
   "latitude": 41.66175,
   "longitude": -71.449917
 },
 {
   "stop_id": "3975",
   "stop_name": "METACOM AT 205 METACOM",
   "latitude": 41.662644,
   "longitude": -71.25708
 },
 {
   "stop_id": "3980",
   "stop_name": "METACOM OPP 205 METACOM",
   "latitude": 41.662479,
   "longitude": -71.257001
 },
 {
   "stop_id": "4015",
   "stop_name": "MAIN FS POST",
   "latitude": 41.663729,
   "longitude": -71.450203
 },
 {
   "stop_id": "4020",
   "stop_name": "HOPE FS BURTON",
   "latitude": 41.664018,
   "longitude": -71.273609
 },
 {
   "stop_id": "4025",
   "stop_name": "MAIN NS DIVISION",
   "latitude": 41.663764,
   "longitude": -71.45002
 },
 {
   "stop_id": "4030",
   "stop_name": "HOPE OPP BURTON",
   "latitude": 41.663975,
   "longitude": -71.273758
 },
 {
   "stop_id": "4035",
   "stop_name": "POST FS LADD",
   "latitude": 41.66539,
   "longitude": -71.450107
 },
 {
   "stop_id": "4040",
   "stop_name": "HOPE NS UNION",
   "latitude": 41.665457,
   "longitude": -71.274621
 },
 {
   "stop_id": "4045",
   "stop_name": "METACOM NS WOODLAWN",
   "latitude": 41.665677,
   "longitude": -71.257471
 },
 {
   "stop_id": "4050",
   "stop_name": "METACOM FS WOODLAWN",
   "latitude": 41.665922,
   "longitude": -71.257361
 },
 {
   "stop_id": "4055",
   "stop_name": "POST AT 4575 POST",
   "latitude": 41.666283,
   "longitude": -71.450005
 },
 {
   "stop_id": "4060",
   "stop_name": "HOPE NS CONSTITUTION",
   "latitude": 41.667033,
   "longitude": -71.275187
 },
 {
   "stop_id": "4065",
   "stop_name": "HOPE FS UNION",
   "latitude": 41.66539,
   "longitude": -71.274712
 },
 {
   "stop_id": "4070",
   "stop_name": "POST OPP COREY",
   "latitude": 41.667295,
   "longitude": -71.449485
 },
 {
   "stop_id": "4085",
   "stop_name": "HOPE NS CHURCH",
   "latitude": 41.668694,
   "longitude": -71.275826
 },
 {
   "stop_id": "4090",
   "stop_name": "HOPE NS CHURCH",
   "latitude": 41.668831,
   "longitude": -71.27602
 },
 {
   "stop_id": "4095",
   "stop_name": "HOPE NS STATE",
   "latitude": 41.670306,
   "longitude": -71.276445
 },
 {
   "stop_id": "4100",
   "stop_name": "HOPE NS STATE",
   "latitude": 41.670508,
   "longitude": -71.276669
 },
 {
   "stop_id": "4105",
   "stop_name": "POST NS BAY VIEW",
   "latitude": 41.670154,
   "longitude": -71.448286
 },
 {
   "stop_id": "4115",
   "stop_name": "METACOM FS MT HOPE",
   "latitude": 41.670746,
   "longitude": -71.258519
 },
 {
   "stop_id": "4120",
   "stop_name": "METACOM OPP MT HOPE",
   "latitude": 41.670884,
   "longitude": -71.258409
 },
 {
   "stop_id": "4130",
   "stop_name": "HOPE AT 573 HOPE ST",
   "latitude": 41.672162,
   "longitude": -71.277277
 },
 {
   "stop_id": "4135",
   "stop_name": "POST AT 4372 POST",
   "latitude": 41.672056,
   "longitude": -71.447974
 },
 {
   "stop_id": "4140",
   "stop_name": "WOODLAND AT 210 WOODLAND MANOR",
   "latitude": 41.672429,
   "longitude": -71.591296
 },
 {
   "stop_id": "4150",
   "stop_name": "METACOM FS WOBURN",
   "latitude": 41.672632,
   "longitude": -71.258946
 },
 {
   "stop_id": "4160",
   "stop_name": "METACOM NS TOWER",
   "latitude": 41.673363,
   "longitude": -71.25896
 },
 {
   "stop_id": "4175",
   "stop_name": "HOPE NS FRANKLIN",
   "latitude": 41.673613,
   "longitude": -71.277663
 },
 {
   "stop_id": "4180",
   "stop_name": "HOPE NS FRANKLIN",
   "latitude": 41.673858,
   "longitude": -71.277862
 },
 {
   "stop_id": "4190",
   "stop_name": "WOODLAND MANOR",
   "latitude": 41.673582,
   "longitude": -71.594275
 },
 {
   "stop_id": "4195",
   "stop_name": "WOODTHRUSH OPP GOLDFINCH",
   "latitude": 41.67446,
   "longitude": -71.591534
 },
 {
   "stop_id": "4200",
   "stop_name": "POST FS WOLVERSTONE",
   "latitude": 41.674528,
   "longitude": -71.448218
 },
 {
   "stop_id": "4205",
   "stop_name": "POST NS WOLVERSTONE",
   "latitude": 41.674469,
   "longitude": -71.448359
 },
 {
   "stop_id": "4215",
   "stop_name": "HOPE NS OLIVER",
   "latitude": 41.675257,
   "longitude": -71.278255
 },
 {
   "stop_id": "4220",
   "stop_name": "HOPE AT 711 HOPE ST",
   "latitude": 41.674894,
   "longitude": -71.27822
 },
 {
   "stop_id": "4230",
   "stop_name": "METACOM AT 370 METACOM",
   "latitude": 41.676217,
   "longitude": -71.259564
 },
 {
   "stop_id": "4235",
   "stop_name": "TIOGUE AT 1395 TIOGUE",
   "latitude": 41.675236,
   "longitude": -71.592809
 },
 {
   "stop_id": "4240",
   "stop_name": "HOPE FS WASHINGTON",
   "latitude": 41.677398,
   "longitude": -71.278625
 },
 {
   "stop_id": "4250",
   "stop_name": "HOPE NS WASHINGTON",
   "latitude": 41.677305,
   "longitude": -71.278791
 },
 {
   "stop_id": "4255",
   "stop_name": "POST FS NEPTUNE",
   "latitude": 41.676845,
   "longitude": -71.448458
 },
 {
   "stop_id": "4260",
   "stop_name": "POST AT HIGHPOINT",
   "latitude": 41.676913,
   "longitude": -71.448622
 },
 {
   "stop_id": "4265",
   "stop_name": "METACOM FS FRANKLIN",
   "latitude": 41.676732,
   "longitude": -71.259808
 },
 {
   "stop_id": "4275",
   "stop_name": "NOOSENECK OPP WISTERIA",
   "latitude": 41.6779,
   "longitude": -71.588267
 },
 {
   "stop_id": "4290",
   "stop_name": "TIOGUE FS WISTERIA",
   "latitude": 41.677895,
   "longitude": -71.588632
 },
 {
   "stop_id": "4295",
   "stop_name": "1193 TIOGUE",
   "latitude": 41.67887,
   "longitude": -71.585379
 },
 {
   "stop_id": "4300",
   "stop_name": "TIOGUE AT 1072 TIOGUE",
   "latitude": 41.679127,
   "longitude": -71.579319
 },
 {
   "stop_id": "4305",
   "stop_name": "HOPE NS SILVER CREEK MANOR",
   "latitude": 41.679288,
   "longitude": -71.27855
 },
 {
   "stop_id": "4310",
   "stop_name": "HOPE AT 837 HOPE ST",
   "latitude": 41.679251,
   "longitude": -71.278734
 },
 {
   "stop_id": "4315",
   "stop_name": "METACOM NS HOPEWORTH",
   "latitude": 41.680805,
   "longitude": -71.260513
 },
 {
   "stop_id": "4325",
   "stop_name": "TIOGUE OPP 1100 TIOGUE AVE (MCDONALD'S)",
   "latitude": 41.679195,
   "longitude": -71.579574
 },
 {
   "stop_id": "4330",
   "stop_name": "METACOM NS BAYVIEW",
   "latitude": 41.679963,
   "longitude": -71.260486
 },
 {
   "stop_id": "4335",
   "stop_name": "POST FS CRESTWOOD",
   "latitude": 41.679097,
   "longitude": -71.449273
 },
 {
   "stop_id": "4345",
   "stop_name": "TIOGUE - JOBLOT",
   "latitude": 41.680522,
   "longitude": -71.582986
 },
 {
   "stop_id": "4346",
   "stop_name": "TIOGUE OPP JOBLOT",
   "latitude": 41.678893,
   "longitude": -71.583607
 },
 {
   "stop_id": "4350",
   "stop_name": "POST AT 4100 POST",
   "latitude": 41.679114,
   "longitude": -71.449123
 },
 {
   "stop_id": "4360",
   "stop_name": "S MAIN FS LOWELL",
   "latitude": 41.680398,
   "longitude": -71.574417
 },
 {
   "stop_id": "4365",
   "stop_name": "S MAIN OPP NAPA AUTO",
   "latitude": 41.680537,
   "longitude": -71.573586
 },
 {
   "stop_id": "4370",
   "stop_name": "POST AT 4042 POST",
   "latitude": 41.680679,
   "longitude": -71.449817
 },
 {
   "stop_id": "4375",
   "stop_name": "HOPE AT 889 HOPE ST",
   "latitude": 41.681233,
   "longitude": -71.278813
 },
 {
   "stop_id": "4380",
   "stop_name": "METACOM OPP ACADEMY",
   "latitude": 41.681696,
   "longitude": -71.260868
 },
 {
   "stop_id": "4385",
   "stop_name": "S MAIN OPP IAN",
   "latitude": 41.681041,
   "longitude": -71.571584
 },
 {
   "stop_id": "4395",
   "stop_name": "HOPE NS HILLSIDE",
   "latitude": 41.681267,
   "longitude": -71.278668
 },
 {
   "stop_id": "4400",
   "stop_name": "POST OPP 4060 POST",
   "latitude": 41.680266,
   "longitude": -71.449851
 },
 {
   "stop_id": "4420",
   "stop_name": "S MAIN NS HOPKINS HILL",
   "latitude": 41.682147,
   "longitude": -71.568912
 },
 {
   "stop_id": "4435",
   "stop_name": "POST FS HIGHLAND",
   "latitude": 41.682586,
   "longitude": -71.451006
 },
 {
   "stop_id": "4440",
   "stop_name": "POST OPP HIGHLAND",
   "latitude": 41.68282,
   "longitude": -71.450953
 },
 {
   "stop_id": "4445",
   "stop_name": "HOPE OPP SHEFFIELD",
   "latitude": 41.683127,
   "longitude": -71.278884
 },
 {
   "stop_id": "4450",
   "stop_name": "HOPE OPP USHER TER",
   "latitude": 41.682845,
   "longitude": -71.278758
 },
 {
   "stop_id": "4460",
   "stop_name": "S MAIN OPP RATHBUN",
   "latitude": 41.683521,
   "longitude": -71.567778
 },
 {
   "stop_id": "4465",
   "stop_name": "POST NS ISLAND VIEW",
   "latitude": 41.684262,
   "longitude": -71.452354
 },
 {
   "stop_id": "4470",
   "stop_name": "COWESETT NS ASHTON",
   "latitude": 41.684489,
   "longitude": -71.520432
 },
 {
   "stop_id": "4475",
   "stop_name": "MAIN FS COWESETT",
   "latitude": 41.685069,
   "longitude": -71.523411
 },
 {
   "stop_id": "4480",
   "stop_name": "COWESSET FS CHURCH",
   "latitude": 41.684544,
   "longitude": -71.520431
 },
 {
   "stop_id": "4485",
   "stop_name": "COWESETT OPP DOUNETOS",
   "latitude": 41.684617,
   "longitude": -71.516388
 },
 {
   "stop_id": "4495",
   "stop_name": "S MAIN OPP MANOR",
   "latitude": 41.684236,
   "longitude": -71.567541
 },
 {
   "stop_id": "4500",
   "stop_name": "POST FS VALENTINE",
   "latitude": 41.685612,
   "longitude": -71.453747
 },
 {
   "stop_id": "4505",
   "stop_name": "METACOM OPP 467 METACOM",
   "latitude": 41.684929,
   "longitude": -71.261429
 },
 {
   "stop_id": "4510",
   "stop_name": "METACOM OPP VETERANS HOME",
   "latitude": 41.685189,
   "longitude": -71.261669
 },
 {
   "stop_id": "4515",
   "stop_name": "COWESETT OPP 242 COWESETT",
   "latitude": 41.684817,
   "longitude": -71.509016
 },
 {
   "stop_id": "4525",
   "stop_name": "COWESETT OPP HIGHVIEW",
   "latitude": 41.684709,
   "longitude": -71.513772
 },
 {
   "stop_id": "4530",
   "stop_name": "COWESETT NS TINA",
   "latitude": 41.684882,
   "longitude": -71.506237
 },
 {
   "stop_id": "4535",
   "stop_name": "COWESETT OPP 328 COWESETT",
   "latitude": 41.684951,
   "longitude": -71.502908
 },
 {
   "stop_id": "4540",
   "stop_name": "COWESSET OPP HOLLOW CIRCLE",
   "latitude": 41.684756,
   "longitude": -71.514106
 },
 {
   "stop_id": "4545",
   "stop_name": "HOPE FS VANTAGE PT",
   "latitude": 41.68518,
   "longitude": -71.278928
 },
 {
   "stop_id": "4550",
   "stop_name": "COWESETT AT 328 COWESETT",
   "latitude": 41.68501,
   "longitude": -71.503179
 },
 {
   "stop_id": "4555",
   "stop_name": "S MAIN NS STONE",
   "latitude": 41.685943,
   "longitude": -71.567241
 },
 {
   "stop_id": "4560",
   "stop_name": "COWESETT AT 250 COWESETT",
   "latitude": 41.684908,
   "longitude": -71.508437
 },
 {
   "stop_id": "4570",
   "stop_name": "HOPE AT BENJAMIN CHURCH SENIOR CTR",
   "latitude": 41.685491,
   "longitude": -71.278854
 },
 {
   "stop_id": "4575",
   "stop_name": "POST OPP COWESETT",
   "latitude": 41.685728,
   "longitude": -71.453689
 },
 {
   "stop_id": "4580",
   "stop_name": "POST AT 3791 POST",
   "latitude": 41.686872,
   "longitude": -71.454709
 },
 {
   "stop_id": "4585",
   "stop_name": "MAIN OPP SCHOOL",
   "latitude": 41.686403,
   "longitude": -71.522977
 },
 {
   "stop_id": "4590",
   "stop_name": "COWESSETT CORNERS STOP & SHOP",
   "latitude": 41.686207,
   "longitude": -71.498353
 },
 {
   "stop_id": "4595",
   "stop_name": "S MAIN NS WOOD",
   "latitude": 41.685948,
   "longitude": -71.567145
 },
 {
   "stop_id": "4600",
   "stop_name": "OAKLAND BEACH NS SUBURBAN PKWAY",
   "latitude": 41.686606,
   "longitude": -71.398111
 },
 {
   "stop_id": "4610",
   "stop_name": "MAIN NS BROWN",
   "latitude": 41.690245,
   "longitude": -71.521554
 },
 {
   "stop_id": "4615",
   "stop_name": "METACOM OPP CHESTNUT",
   "latitude": 41.687811,
   "longitude": -71.262122
 },
 {
   "stop_id": "4620",
   "stop_name": "MAIN NS NESTOR",
   "latitude": 41.687673,
   "longitude": -71.522418
 },
 {
   "stop_id": "4625",
   "stop_name": "METACOM NS CHESTNUT",
   "latitude": 41.687968,
   "longitude": -71.26227
 },
 {
   "stop_id": "4630",
   "stop_name": "OAKLAND BEACH FS MOHAWK",
   "latitude": 41.6881,
   "longitude": -71.398312
 },
 {
   "stop_id": "4635",
   "stop_name": "HOPE AT COLT STATE PARK ENTRANCE",
   "latitude": 41.688169,
   "longitude": -71.279133
 },
 {
   "stop_id": "4640",
   "stop_name": "HOPE FS COLT",
   "latitude": 41.688558,
   "longitude": -71.279005
 },
 {
   "stop_id": "4645",
   "stop_name": "POST NS SHENADOAH",
   "latitude": 41.688813,
   "longitude": -71.455842
 },
 {
   "stop_id": "4655",
   "stop_name": "OAKLAND BEACH AT 742 OAKLAND BEACH",
   "latitude": 41.688743,
   "longitude": -71.398102
 },
 {
   "stop_id": "4660",
   "stop_name": "POST OPP SHENANDOAH",
   "latitude": 41.689012,
   "longitude": -71.455735
 },
 {
   "stop_id": "4670",
   "stop_name": "S MAIN NS CADY",
   "latitude": 41.688296,
   "longitude": -71.566786
 },
 {
   "stop_id": "4685",
   "stop_name": "MAIN OPP MANCHESTER",
   "latitude": 41.688976,
   "longitude": -71.521956
 },
 {
   "stop_id": "4690",
   "stop_name": "S MAIN FS PARKER",
   "latitude": 41.689758,
   "longitude": -71.566594
 },
 {
   "stop_id": "4705",
   "stop_name": "METACOM AT 529 METACOM",
   "latitude": 41.689828,
   "longitude": -71.262715
 },
 {
   "stop_id": "4715",
   "stop_name": "METACOM AT 532 METACOM",
   "latitude": 41.690513,
   "longitude": -71.262748
 },
 {
   "stop_id": "4720",
   "stop_name": "MAIN AT 1527 MAIN",
   "latitude": 41.692572,
   "longitude": -71.521039
 },
 {
   "stop_id": "4725",
   "stop_name": "MAIN OPP SHOPPERS PARK",
   "latitude": 41.690328,
   "longitude": -71.56613
 },
 {
   "stop_id": "4730",
   "stop_name": "OAKLAND BEACH NS HAZARD",
   "latitude": 41.690668,
   "longitude": -71.398289
 },
 {
   "stop_id": "4735",
   "stop_name": "MAIN OPP SOUTH MAIN",
   "latitude": 41.690463,
   "longitude": -71.565979
 },
 {
   "stop_id": "4740",
   "stop_name": "POST NS CLYDE",
   "latitude": 41.691445,
   "longitude": -71.456256
 },
 {
   "stop_id": "4750",
   "stop_name": "MAIN AT 1070 MAIN",
   "latitude": 41.690526,
   "longitude": -71.561842
 },
 {
   "stop_id": "4755",
   "stop_name": "MAIN NS HOLDEN",
   "latitude": 41.690834,
   "longitude": -71.563884
 },
 {
   "stop_id": "4760",
   "stop_name": "WASHINGTON OPP SANDY BOTTOM",
   "latitude": 41.690692,
   "longitude": -71.559267
 },
 {
   "stop_id": "4765",
   "stop_name": "POST FS ROBIN HILL",
   "latitude": 41.690778,
   "longitude": -71.456403
 },
 {
   "stop_id": "4770",
   "stop_name": "MAIN FS SANDY BOTTOM",
   "latitude": 41.690739,
   "longitude": -71.558884
 },
 {
   "stop_id": "4775",
   "stop_name": "OAKLAND BEACH NS KENWAY",
   "latitude": 41.691568,
   "longitude": -71.398071
 },
 {
   "stop_id": "4780",
   "stop_name": "HOPE NS FALES",
   "latitude": 41.691727,
   "longitude": -71.279345
 },
 {
   "stop_id": "4785",
   "stop_name": "HOPE AT DEFIANCE",
   "latitude": 41.691884,
   "longitude": -71.279198
 },
 {
   "stop_id": "4790",
   "stop_name": "MAIN AT 1548 MAIN",
   "latitude": 41.69137,
   "longitude": -71.521088
 },
 {
   "stop_id": "4795",
   "stop_name": "WASHINGTON NS KNOTTY OAK RD",
   "latitude": 41.692389,
   "longitude": -71.556284
 },
 {
   "stop_id": "4800",
   "stop_name": "WASHINGTON FS KNOTTY OAK",
   "latitude": 41.692124,
   "longitude": -71.5564
 },
 {
   "stop_id": "4805",
   "stop_name": "MAIN OPP ROCHS PRODUCE",
   "latitude": 41.694891,
   "longitude": -71.521744
 },
 {
   "stop_id": "4810",
   "stop_name": "METACOM NS PAGANO",
   "latitude": 41.692669,
   "longitude": -71.263219
 },
 {
   "stop_id": "4815",
   "stop_name": "METACOM OPP PAGANO",
   "latitude": 41.692721,
   "longitude": -71.263347
 },
 {
   "stop_id": "4820",
   "stop_name": "OAKLAND BEACH NS COBURN",
   "latitude": 41.692523,
   "longitude": -71.39833
 },
 {
   "stop_id": "4825",
   "stop_name": "QUAKER LANE OPP KENT COUNTY COURTHOUSE",
   "latitude": 41.691726,
   "longitude": -71.501198
 },
 {
   "stop_id": "4840",
   "stop_name": "MAIN AT FOP CLUB HOUSE",
   "latitude": 41.692819,
   "longitude": -71.521019
 },
 {
   "stop_id": "4850",
   "stop_name": "MAIN AT 1050 MAIN",
   "latitude": 41.690608,
   "longitude": -71.561758
 },
 {
   "stop_id": "4855",
   "stop_name": "OAKLAND BEACH FS HOLT",
   "latitude": 41.693341,
   "longitude": -71.398233
 },
 {
   "stop_id": "4860",
   "stop_name": "HOPE AT SEABRA MARKET",
   "latitude": 41.69344,
   "longitude": -71.279288
 },
 {
   "stop_id": "4865",
   "stop_name": "POST NS BRAND",
   "latitude": 41.693621,
   "longitude": -71.456414
 },
 {
   "stop_id": "4870",
   "stop_name": "WASHINGTON AT 770 WASHINGTON",
   "latitude": 41.693005,
   "longitude": -71.555149
 },
 {
   "stop_id": "4875",
   "stop_name": "HOPE FS MULBERRY",
   "latitude": 41.694019,
   "longitude": -71.279421
 },
 {
   "stop_id": "4880",
   "stop_name": "WASHINGTON NS CONTENTMENT",
   "latitude": 41.694176,
   "longitude": -71.553476
 },
 {
   "stop_id": "4890",
   "stop_name": "WASHINGTON FS MAPLEDALE",
   "latitude": 41.694091,
   "longitude": -71.553473
 },
 {
   "stop_id": "4895",
   "stop_name": "WASHINGTON AT 699 WASHINGTON",
   "latitude": 41.694798,
   "longitude": -71.550978
 },
 {
   "stop_id": "4900",
   "stop_name": "MAIN NS WEST WARWICK",
   "latitude": 41.697014,
   "longitude": -71.522072
 },
 {
   "stop_id": "4905",
   "stop_name": "HOPE AT BRISTOL COUNTY MEDICAL CTR",
   "latitude": 41.695248,
   "longitude": -71.279411
 },
 {
   "stop_id": "4915",
   "stop_name": "BUTTONWOODS AT BUTTONWOODS TERRACE PLAZA",
   "latitude": 41.695186,
   "longitude": -71.427334
 },
 {
   "stop_id": "4920",
   "stop_name": "WASHINGTON FS PULASKI",
   "latitude": 41.695368,
   "longitude": -71.536985
 },
 {
   "stop_id": "4925",
   "stop_name": "WASHINGTON OPP MACARTHUR",
   "latitude": 41.695304,
   "longitude": -71.538929
 },
 {
   "stop_id": "4935",
   "stop_name": "OAKLAND BEACH OPP PINEHURST",
   "latitude": 41.695729,
   "longitude": -71.398478
 },
 {
   "stop_id": "4940",
   "stop_name": "WARWICK NECK BETWEEN BARTON & MEADOWVIEW",
   "latitude": 41.695292,
   "longitude": -71.379216
 },
 {
   "stop_id": "4945",
   "stop_name": "POST OPP BRAND",
   "latitude": 41.693735,
   "longitude": -71.456644
 },
 {
   "stop_id": "4955",
   "stop_name": "WASHINGTON FS EDWARD",
   "latitude": 41.69644,
   "longitude": -71.542022
 },
 {
   "stop_id": "4960",
   "stop_name": "MAIN AT ROCHS PRODUCE",
   "latitude": 41.694764,
   "longitude": -71.52164
 },
 {
   "stop_id": "4965",
   "stop_name": "WASHINGTON OPP READ",
   "latitude": 41.695503,
   "longitude": -71.533665
 },
 {
   "stop_id": "4970",
   "stop_name": "HOPE OPP 1185 HOPE ST",
   "latitude": 41.695457,
   "longitude": -71.279547
 },
 {
   "stop_id": "4975",
   "stop_name": "BUTTONWOODS AT 417 BUTTONWOODS",
   "latitude": 41.695325,
   "longitude": -71.427557
 },
 {
   "stop_id": "4980",
   "stop_name": "OAKLAND BEACH OPP ORMS",
   "latitude": 41.695417,
   "longitude": -71.398637
 },
 {
   "stop_id": "4990",
   "stop_name": "POST AT 3414 POST",
   "latitude": 41.696122,
   "longitude": -71.458744
 },
 {
   "stop_id": "5000",
   "stop_name": "METACOM AT 591 METACOM",
   "latitude": 41.694723,
   "longitude": -71.263805
 },
 {
   "stop_id": "5005",
   "stop_name": "METACOM NS GOODING",
   "latitude": 41.694162,
   "longitude": -71.263486
 },
 {
   "stop_id": "5015",
   "stop_name": "WASHINGTON NS LAUREL",
   "latitude": 41.696006,
   "longitude": -71.547673
 },
 {
   "stop_id": "5020",
   "stop_name": "WASHINGTON OPP LAUREL",
   "latitude": 41.696105,
   "longitude": -71.547689
 },
 {
   "stop_id": "5025",
   "stop_name": "BUTTONWOODS FS LONG",
   "latitude": 41.696307,
   "longitude": -71.4281
 },
 {
   "stop_id": "5035",
   "stop_name": "WASHINGTON OPP ANTHONY",
   "latitude": 41.696796,
   "longitude": -71.546976
 },
 {
   "stop_id": "5040",
   "stop_name": "WASHINGTON OPP ANDREWS",
   "latitude": 41.696373,
   "longitude": -71.531988
 },
 {
   "stop_id": "5045",
   "stop_name": "MAIN AT 1445 MAIN",
   "latitude": 41.697854,
   "longitude": -71.522202
 },
 {
   "stop_id": "5055",
   "stop_name": "WASHINGTON OPP HAZARD",
   "latitude": 41.697092,
   "longitude": -71.543219
 },
 {
   "stop_id": "5060",
   "stop_name": "WASHINGTON FS FAIRVIEW",
   "latitude": 41.697381,
   "longitude": -71.543988
 },
 {
   "stop_id": "5065",
   "stop_name": "HOPE NS GIBSON",
   "latitude": 41.697287,
   "longitude": -71.279678
 },
 {
   "stop_id": "5070",
   "stop_name": "HOPE OPP GIBSON",
   "latitude": 41.697283,
   "longitude": -71.279503
 },
 {
   "stop_id": "5075",
   "stop_name": "WARWICK NECK NS CROSSROAD",
   "latitude": 41.696548,
   "longitude": -71.379252
 },
 {
   "stop_id": "5080",
   "stop_name": "BUTTONWOODS NS KEELEY",
   "latitude": 41.697346,
   "longitude": -71.428494
 },
 {
   "stop_id": "5085",
   "stop_name": "RT 117 PARK & RIDE",
   "latitude": 41.697456,
   "longitude": -71.473905
 },
 {
   "stop_id": "5090",
   "stop_name": "WASHINGTON OPP 117 WASHINGTON",
   "latitude": 41.695601,
   "longitude": -71.534341
 },
 {
   "stop_id": "5095",
   "stop_name": "BUTTONWOODS OPP KEELEY",
   "latitude": 41.697632,
   "longitude": -71.42881
 },
 {
   "stop_id": "5105",
   "stop_name": "WARWICK NECK FS STUDLEY",
   "latitude": 41.697909,
   "longitude": -71.379623
 },
 {
   "stop_id": "5110",
   "stop_name": "MAIN AT 1425 MAIN",
   "latitude": 41.698841,
   "longitude": -71.522307
 },
 {
   "stop_id": "5115",
   "stop_name": "TOLLGATE AT 40 TOLLGATE",
   "latitude": 41.698509,
   "longitude": -71.46491
 },
 {
   "stop_id": "5120",
   "stop_name": "WARWICK NECK FS STUDLEY",
   "latitude": 41.698329,
   "longitude": -71.37976
 },
 {
   "stop_id": "5130",
   "stop_name": "POST NS CENTREVILLE (APPONAUG 4 CORNERS)",
   "latitude": 41.698098,
   "longitude": -71.459684
 },
 {
   "stop_id": "5140",
   "stop_name": "POST FS CENTREVILLE",
   "latitude": 41.698342,
   "longitude": -71.459964
 },
 {
   "stop_id": "5145",
   "stop_name": "OAKLAND BEACH OPP LIMESTONE",
   "latitude": 41.698303,
   "longitude": -71.398677
 },
 {
   "stop_id": "5155",
   "stop_name": "MAIN NS EPWORTH",
   "latitude": 41.698326,
   "longitude": -71.522187
 },
 {
   "stop_id": "5160",
   "stop_name": "CENTERVILLE AT BURGER KING",
   "latitude": 41.698347,
   "longitude": -71.462507
 },
 {
   "stop_id": "5165",
   "stop_name": "HOPE OPP JEFFERSON",
   "latitude": 41.699134,
   "longitude": -71.279608
 },
 {
   "stop_id": "5170",
   "stop_name": "POST OPP WARWICK CITY HALL",
   "latitude": 41.698861,
   "longitude": -71.458542
 },
 {
   "stop_id": "5175",
   "stop_name": "BUTTONWOODS FS NOYLES",
   "latitude": 41.698982,
   "longitude": -71.429546
 },
 {
   "stop_id": "5180",
   "stop_name": "WEST SHORE OPP VALLEY",
   "latitude": 41.699183,
   "longitude": -71.449838
 },
 {
   "stop_id": "5185",
   "stop_name": "WEST SHORE NS VALLEY",
   "latitude": 41.699374,
   "longitude": -71.449497
 },
 {
   "stop_id": "5200",
   "stop_name": "HOPE NS JEFFERSON",
   "latitude": 41.699005,
   "longitude": -71.27977
 },
 {
   "stop_id": "5205",
   "stop_name": "TOLLGATE OPP EMILY",
   "latitude": 41.700128,
   "longitude": -71.467716
 },
 {
   "stop_id": "5210",
   "stop_name": "POST AT 3210 POST",
   "latitude": 41.699238,
   "longitude": -71.455888
 },
 {
   "stop_id": "5220",
   "stop_name": "METACOM OPP KICKEMUIT",
   "latitude": 41.69946,
   "longitude": -71.264753
 },
 {
   "stop_id": "5225",
   "stop_name": "METACOM FS KICKEMUIT",
   "latitude": 41.699537,
   "longitude": -71.264613
 },
 {
   "stop_id": "5230",
   "stop_name": "OAKLAND BEACH NS GORDON",
   "latitude": 41.699761,
   "longitude": -71.399098
 },
 {
   "stop_id": "5235",
   "stop_name": "WEST SHORE FS GEORGE ARDEN",
   "latitude": 41.699664,
   "longitude": -71.44742
 },
 {
   "stop_id": "5245",
   "stop_name": "WEST SHORE OPP GREELEY",
   "latitude": 41.699973,
   "longitude": -71.444769
 },
 {
   "stop_id": "5250",
   "stop_name": "TOLLGATE NS EMILY",
   "latitude": 41.699988,
   "longitude": -71.467062
 },
 {
   "stop_id": "5255",
   "stop_name": "MAIN AT 1387 MAIN",
   "latitude": 41.70002,
   "longitude": -71.522642
 },
 {
   "stop_id": "5260",
   "stop_name": "WEST SHORE NS TOURTELOTT",
   "latitude": 41.700034,
   "longitude": -71.445133
 },
 {
   "stop_id": "5270",
   "stop_name": "WEST SHORE AT 3388 WEST SHORE",
   "latitude": 41.700242,
   "longitude": -71.443073
 },
 {
   "stop_id": "5275",
   "stop_name": "OAKLAND BEACH NS INDIANA",
   "latitude": 41.700132,
   "longitude": -71.398897
 },
 {
   "stop_id": "5280",
   "stop_name": "WASHINGTON NS EAST",
   "latitude": 41.699953,
   "longitude": -71.529316
 },
 {
   "stop_id": "5285",
   "stop_name": "SAMUEL GORTON NS PALMER",
   "latitude": 41.70114,
   "longitude": -71.376072
 },
 {
   "stop_id": "5290",
   "stop_name": "WEST SHORE AT 3395 WEST SHORE",
   "latitude": 41.700329,
   "longitude": -71.4434
 },
 {
   "stop_id": "5295",
   "stop_name": "SAMUEL GORTON AT 407 SAMUEL GORTON",
   "latitude": 41.700527,
   "longitude": -71.378615
 },
 {
   "stop_id": "5300",
   "stop_name": "WASHINGTON NS BAKER",
   "latitude": 41.700377,
   "longitude": -71.528729
 },
 {
   "stop_id": "5305",
   "stop_name": "WEST SHORE OPP NORMANDY",
   "latitude": 41.700625,
   "longitude": -71.440683
 },
 {
   "stop_id": "5310",
   "stop_name": "WEST SHORE NS GROVELAND",
   "latitude": 41.700688,
   "longitude": -71.440927
 },
 {
   "stop_id": "5320",
   "stop_name": "WEST SHORE FS WESLEYAN",
   "latitude": 41.701146,
   "longitude": -71.438047
 },
 {
   "stop_id": "5325",
   "stop_name": "TOLLGATE AT 215 TOLLGATE RD",
   "latitude": 41.701102,
   "longitude": -71.47049
 },
 {
   "stop_id": "5330",
   "stop_name": "TOLLGATE AT 250 TOLLGATE",
   "latitude": 41.701448,
   "longitude": -71.471762
 },
 {
   "stop_id": "5340",
   "stop_name": "LONGMEADOW NS ELMDALE",
   "latitude": 41.703579,
   "longitude": -71.374482
 },
 {
   "stop_id": "5345",
   "stop_name": "SAMUEL GORTON AT 375 SAMUEL GORTON",
   "latitude": 41.701133,
   "longitude": -71.376478
 },
 {
   "stop_id": "5350",
   "stop_name": "BUTTONWOODS NS WEST SHORE",
   "latitude": 41.701012,
   "longitude": -71.430173
 },
 {
   "stop_id": "5355",
   "stop_name": "WEST SHORE NS BARBER",
   "latitude": 41.701573,
   "longitude": -71.435132
 },
 {
   "stop_id": "5360",
   "stop_name": "WEST SHORE AT 3238 WEST SHORE",
   "latitude": 41.700969,
   "longitude": -71.438382
 },
 {
   "stop_id": "5370",
   "stop_name": "OAKLAND BEACH NS VICTORY",
   "latitude": 41.702799,
   "longitude": -71.398886
 },
 {
   "stop_id": "5380",
   "stop_name": "HOPE FS COLONIAL",
   "latitude": 41.70153,
   "longitude": -71.279912
 },
 {
   "stop_id": "5385",
   "stop_name": "WEST SHORE OPP 3161 WEST SHORE",
   "latitude": 41.701374,
   "longitude": -71.435868
 },
 {
   "stop_id": "5395",
   "stop_name": "POST FS KENT",
   "latitude": 41.701861,
   "longitude": -71.454479
 },
 {
   "stop_id": "5415",
   "stop_name": "HOPE OPP COLONIAL",
   "latitude": 41.701969,
   "longitude": -71.27979
 },
 {
   "stop_id": "5420",
   "stop_name": "WEST SHORE OPP WEST SHORE TERRACE",
   "latitude": 41.701937,
   "longitude": -71.432911
 },
 {
   "stop_id": "5425",
   "stop_name": "WEST SHORE AT WEST SHORE TERRACE",
   "latitude": 41.701892,
   "longitude": -71.43268
 },
 {
   "stop_id": "5426",
   "stop_name": "WEST SHORE NS MCARTHER",
   "latitude": 41.702422,
   "longitude": -71.429374
 },
 {
   "stop_id": "5430",
   "stop_name": "METACOM AT 663 METACOM",
   "latitude": 41.701483,
   "longitude": -71.265092
 },
 {
   "stop_id": "5445",
   "stop_name": "METACOM AT METACOM CONDOMINIUMS",
   "latitude": 41.701873,
   "longitude": -71.265283
 },
 {
   "stop_id": "5450",
   "stop_name": "WEST SHORE FS CITY PARK",
   "latitude": 41.70226,
   "longitude": -71.430931
 },
 {
   "stop_id": "5485",
   "stop_name": "MAIN OPP 1383 MAIN",
   "latitude": 41.700112,
   "longitude": -71.522586
 },
 {
   "stop_id": "5495",
   "stop_name": "WEST SHORE AT BANK OF RI",
   "latitude": 41.702633,
   "longitude": -71.428779
 },
 {
   "stop_id": "5500",
   "stop_name": "OAKLAND BEACH OPP VICTORY",
   "latitude": 41.702611,
   "longitude": -71.398785
 },
 {
   "stop_id": "5505",
   "stop_name": "TOLLGATE FS CRAIG",
   "latitude": 41.702768,
   "longitude": -71.4747
 },
 {
   "stop_id": "5510",
   "stop_name": "WEST SHORE FS MYSTIC",
   "latitude": 41.702789,
   "longitude": -71.427156
 },
 {
   "stop_id": "5525",
   "stop_name": "POST OPP WINSLOW",
   "latitude": 41.703473,
   "longitude": -71.454346
 },
 {
   "stop_id": "5530",
   "stop_name": "WEST SHORE FS MODENA",
   "latitude": 41.702867,
   "longitude": -71.427365
 },
 {
   "stop_id": "5540",
   "stop_name": "WASHINGTON NS CRAWFORD",
   "latitude": 41.703036,
   "longitude": -71.525835
 },
 {
   "stop_id": "5545",
   "stop_name": "WEST SHORE FS KERRILYN",
   "latitude": 41.703012,
   "longitude": -71.425852
 },
 {
   "stop_id": "5570",
   "stop_name": "WEST SHORE FS WHITE",
   "latitude": 41.70325,
   "longitude": -71.42484
 },
 {
   "stop_id": "5580",
   "stop_name": "WEST SHORE NS SUNNY COVE",
   "latitude": 41.703449,
   "longitude": -71.423023
 },
 {
   "stop_id": "5585",
   "stop_name": "POST NS WINSLOW",
   "latitude": 41.703425,
   "longitude": -71.45416
 },
 {
   "stop_id": "5595",
   "stop_name": "WEST SHORE FS MOCASSIN",
   "latitude": 41.703761,
   "longitude": -71.42154
 },
 {
   "stop_id": "5610",
   "stop_name": "TOLLGATE AT 330 TOLLGATE",
   "latitude": 41.70312,
   "longitude": -71.475256
 },
 {
   "stop_id": "5615",
   "stop_name": "POST OPP CREST",
   "latitude": 41.704925,
   "longitude": -71.453491
 },
 {
   "stop_id": "5620",
   "stop_name": "HOPE NS SULLIVAN LANE",
   "latitude": 41.703748,
   "longitude": -71.280157
 },
 {
   "stop_id": "5635",
   "stop_name": "HOPE FS TUPELO",
   "latitude": 41.704476,
   "longitude": -71.280007
 },
 {
   "stop_id": "5645",
   "stop_name": "TOLLGATE AT 430 TOLLGATE",
   "latitude": 41.704075,
   "longitude": -71.477304
 },
 {
   "stop_id": "5655",
   "stop_name": "MAIN NS WASHINGTON",
   "latitude": 41.704546,
   "longitude": -71.524196
 },
 {
   "stop_id": "5660",
   "stop_name": "HOPE NS SOUTH LANE",
   "latitude": 41.706327,
   "longitude": -71.280307
 },
 {
   "stop_id": "5670",
   "stop_name": "WEST SHORE AT NEWPORT CREAMERY",
   "latitude": 41.704704,
   "longitude": -71.419202
 },
 {
   "stop_id": "5680",
   "stop_name": "METACOM NS TUPELO",
   "latitude": 41.705309,
   "longitude": -71.265841
 },
 {
   "stop_id": "5690",
   "stop_name": "WEST SHORE AT DUNKIN DONUTS",
   "latitude": 41.705048,
   "longitude": -71.418987
 },
 {
   "stop_id": "5695",
   "stop_name": "OAKLAND BEACH AT BISHOP HENDRICKEN",
   "latitude": 41.705329,
   "longitude": -71.398308
 },
 {
   "stop_id": "5710",
   "stop_name": "OAKLAND BEACH NS STANFIELD",
   "latitude": 41.705567,
   "longitude": -71.398463
 },
 {
   "stop_id": "5715",
   "stop_name": "TOLLGATE OPP KENT HOSPITAL",
   "latitude": 41.705063,
   "longitude": -71.479111
 },
 {
   "stop_id": "5720",
   "stop_name": "METACOM FS TUPELO",
   "latitude": 41.705007,
   "longitude": -71.265946
 },
 {
   "stop_id": "5740",
   "stop_name": "TOLLGATE AT 470 TOLLGATE",
   "latitude": 41.704925,
   "longitude": -71.478663
 },
 {
   "stop_id": "5750",
   "stop_name": "MAIN OPP 1200 MAIN",
   "latitude": 41.705896,
   "longitude": -71.523498
 },
 {
   "stop_id": "5760",
   "stop_name": "STRAWBERRY FIELD FS ELMORE",
   "latitude": 41.70628,
   "longitude": -71.418246
 },
 {
   "stop_id": "5765",
   "stop_name": "ALFRED AT WHARF SEAFOOD",
   "latitude": 41.706591,
   "longitude": -71.417437
 },
 {
   "stop_id": "5770",
   "stop_name": "POST NS MYRTLE",
   "latitude": 41.706969,
   "longitude": -71.452108
 },
 {
   "stop_id": "5780",
   "stop_name": "SANDY LANE NS CLORANE",
   "latitude": 41.706581,
   "longitude": -71.415947
 },
 {
   "stop_id": "5785",
   "stop_name": "TOLLGATE FS HILARY",
   "latitude": 41.706365,
   "longitude": -71.481785
 },
 {
   "stop_id": "5800",
   "stop_name": "HOPE FS ECHO FARM",
   "latitude": 41.707064,
   "longitude": -71.280164
 },
 {
   "stop_id": "5805",
   "stop_name": "SANDY LANE OPP TREMONT",
   "latitude": 41.70729,
   "longitude": -71.414096
 },
 {
   "stop_id": "5810",
   "stop_name": "TOLLGATE OPP HILARY",
   "latitude": 41.706483,
   "longitude": -71.48185
 },
 {
   "stop_id": "5820",
   "stop_name": "TOLLGATE NS COMMONWEALTH",
   "latitude": 41.707184,
   "longitude": -71.483268
 },
 {
   "stop_id": "5825",
   "stop_name": "SANDY LANE NS TREMONT",
   "latitude": 41.707076,
   "longitude": -71.414412
 },
 {
   "stop_id": "5830",
   "stop_name": "STRAWBERRY FIELD OPP TURNER",
   "latitude": 41.707386,
   "longitude": -71.419417
 },
 {
   "stop_id": "5835",
   "stop_name": "STRAWBERRY FIELD NS LAKE",
   "latitude": 41.707206,
   "longitude": -71.419311
 },
 {
   "stop_id": "5840",
   "stop_name": "POST OPP VAUGHAN",
   "latitude": 41.707471,
   "longitude": -71.451533
 },
 {
   "stop_id": "5845",
   "stop_name": "MAIN FS PROVIDENCE ST",
   "latitude": 41.70783,
   "longitude": -71.522455
 },
 {
   "stop_id": "5865",
   "stop_name": "MAIN AT 1125 MAIN ST (CVS PHARMACY)",
   "latitude": 41.707944,
   "longitude": -71.522589
 },
 {
   "stop_id": "5870",
   "stop_name": "SANDY LANE AT ARMY RESERVE",
   "latitude": 41.707827,
   "longitude": -71.412647
 },
 {
   "stop_id": "5875",
   "stop_name": "SANDY LANE OPP ARMY RESERVE",
   "latitude": 41.707764,
   "longitude": -71.412629
 },
 {
   "stop_id": "5880",
   "stop_name": "COMMONWEALTH FS TOLLGATE RD",
   "latitude": 41.708401,
   "longitude": -71.484467
 },
 {
   "stop_id": "5885",
   "stop_name": "METACOM NS SAN FRANCISCO",
   "latitude": 41.708382,
   "longitude": -71.266637
 },
 {
   "stop_id": "5890",
   "stop_name": "METACOM NS SAN FRANCISCO",
   "latitude": 41.708179,
   "longitude": -71.266459
 },
 {
   "stop_id": "5895",
   "stop_name": "HOPE NS ELM FARM",
   "latitude": 41.709006,
   "longitude": -71.280292
 },
 {
   "stop_id": "5915",
   "stop_name": "POST NS POTTERS",
   "latitude": 41.708961,
   "longitude": -71.450704
 },
 {
   "stop_id": "5930",
   "stop_name": "COMMONWEALTH AT 400 COMMONWEALTH",
   "latitude": 41.708271,
   "longitude": -71.484494
 },
 {
   "stop_id": "5935",
   "stop_name": "SANDY LANE NS TRENT",
   "latitude": 41.709785,
   "longitude": -71.406928
 },
 {
   "stop_id": "5940",
   "stop_name": "SANDY LANE OPP TRENT",
   "latitude": 41.708941,
   "longitude": -71.409619
 },
 {
   "stop_id": "5950",
   "stop_name": "STRAWBERRY FIELD NS HANOVER",
   "latitude": 41.709197,
   "longitude": -71.422599
 },
 {
   "stop_id": "5975",
   "stop_name": "SANDY LANE FS CEDAR SWAMP",
   "latitude": 41.709698,
   "longitude": -71.407386
 },
 {
   "stop_id": "5980",
   "stop_name": "WARWICK OPP STOP&SHOP",
   "latitude": 41.710077,
   "longitude": -71.398393
 },
 {
   "stop_id": "5985",
   "stop_name": "POST FS CHAPMANS",
   "latitude": 41.710686,
   "longitude": -71.449525
 },
 {
   "stop_id": "5990",
   "stop_name": "MAIN NS POTTER",
   "latitude": 41.710708,
   "longitude": -71.523058
 },
 {
   "stop_id": "5995",
   "stop_name": "WARWICK OPP WAGUAGONET",
   "latitude": 41.707645,
   "longitude": -71.398002
 },
 {
   "stop_id": "6000",
   "stop_name": "MAIN OPP YOUNGS",
   "latitude": 41.710563,
   "longitude": -71.522977
 },
 {
   "stop_id": "6005",
   "stop_name": "TOLLGATE OPP SENIOR CITY RD",
   "latitude": 41.710109,
   "longitude": -71.492384
 },
 {
   "stop_id": "6010",
   "stop_name": "MAIN AVE NS GROVELAND",
   "latitude": 41.710375,
   "longitude": -71.440749
 },
 {
   "stop_id": "6015",
   "stop_name": "MAIN AVE OPP GROVELAND",
   "latitude": 41.710357,
   "longitude": -71.440121
 },
 {
   "stop_id": "6020",
   "stop_name": "POST OPP HILLARD",
   "latitude": 41.710285,
   "longitude": -71.449579
 },
 {
   "stop_id": "6025",
   "stop_name": "SANDY LANE OPP CRANE",
   "latitude": 41.710364,
   "longitude": -71.405275
 },
 {
   "stop_id": "6030",
   "stop_name": "MAIN AVE NS GERTRUDE",
   "latitude": 41.710531,
   "longitude": -71.441963
 },
 {
   "stop_id": "6035",
   "stop_name": "SANDY LANE FS CRANE",
   "latitude": 41.710384,
   "longitude": -71.405581
 },
 {
   "stop_id": "6040",
   "stop_name": "STRAWBERRY FIELD NS ENDICOTT",
   "latitude": 41.710519,
   "longitude": -71.425012
 },
 {
   "stop_id": "6045",
   "stop_name": "HOPE NS MAPLE SHADE",
   "latitude": 41.709518,
   "longitude": -71.280451
 },
 {
   "stop_id": "6050",
   "stop_name": "HOPE FS ELMWOOD",
   "latitude": 41.710798,
   "longitude": -71.28039
 },
 {
   "stop_id": "6055",
   "stop_name": "MAIN AVE NS EARL",
   "latitude": 41.710651,
   "longitude": -71.441921
 },
 {
   "stop_id": "6075",
   "stop_name": "SANDY LANE NS SOCIAL",
   "latitude": 41.711325,
   "longitude": -71.402858
 },
 {
   "stop_id": "6080",
   "stop_name": "MAIN NS WALKER",
   "latitude": 41.711997,
   "longitude": -71.523363
 },
 {
   "stop_id": "6095",
   "stop_name": "MAIN AVE NS MORSE",
   "latitude": 41.711023,
   "longitude": -71.444632
 },
 {
   "stop_id": "6100",
   "stop_name": "MAIN AVE NS GORHAM",
   "latitude": 41.710862,
   "longitude": -71.444294
 },
 {
   "stop_id": "6105",
   "stop_name": "SANDY LANE OPP SOCIAL",
   "latitude": 41.710975,
   "longitude": -71.403488
 },
 {
   "stop_id": "6110",
   "stop_name": "TOLLGATE AT 997 TOLLGATE",
   "latitude": 41.710649,
   "longitude": -71.49498
 },
 {
   "stop_id": "6125",
   "stop_name": "SANDY LANE FS CALL",
   "latitude": 41.712348,
   "longitude": -71.399998
 },
 {
   "stop_id": "6140",
   "stop_name": "TOLLGATE AT 979 TOLLGATE",
   "latitude": 41.710697,
   "longitude": -71.495083
 },
 {
   "stop_id": "6145",
   "stop_name": "TOLLGATE AT 1060  TOLLGATE",
   "latitude": 41.711141,
   "longitude": -71.497923
 },
 {
   "stop_id": "6150",
   "stop_name": "TOLLGATE OPP 1060 TOLLGATE",
   "latitude": 41.711288,
   "longitude": -71.497845
 },
 {
   "stop_id": "6160",
   "stop_name": "PROVIDENCE FS NEW LONDON",
   "latitude": 41.711405,
   "longitude": -71.502384
 },
 {
   "stop_id": "6165",
   "stop_name": "STRAWBERRY FIELD OPP INMAN",
   "latitude": 41.711727,
   "longitude": -71.427162
 },
 {
   "stop_id": "6170",
   "stop_name": "PROVIDENCE AT 329 PROVIDENCE",
   "latitude": 41.711692,
   "longitude": -71.503065
 },
 {
   "stop_id": "6175",
   "stop_name": "PROVIDENCE OPP NEWELL",
   "latitude": 41.711854,
   "longitude": -71.500104
 },
 {
   "stop_id": "6180",
   "stop_name": "HOPE OPP ELMWOOD",
   "latitude": 41.710666,
   "longitude": -71.280523
 },
 {
   "stop_id": "6185",
   "stop_name": "PROVIDENCE OPP TOLLGATE",
   "latitude": 41.711842,
   "longitude": -71.500341
 },
 {
   "stop_id": "6195",
   "stop_name": "PROVIDENCE AT 320 PROVIDENCE",
   "latitude": 41.712131,
   "longitude": -71.504414
 },
 {
   "stop_id": "6200",
   "stop_name": "MAIN FS BRAYTON",
   "latitude": 41.713415,
   "longitude": -71.52376
 },
 {
   "stop_id": "6205",
   "stop_name": "JEFFERSON BLVD NS GILLMORE",
   "latitude": 41.712329,
   "longitude": -71.448791
 },
 {
   "stop_id": "6210",
   "stop_name": "WARWICK FS SANDY LANE",
   "latitude": 41.711716,
   "longitude": -71.39906
 },
 {
   "stop_id": "6220",
   "stop_name": "JEFFERSON BLVD OPP GILLMORE",
   "latitude": 41.7121,
   "longitude": -71.44871
 },
 {
   "stop_id": "6225",
   "stop_name": "WARWICK NS SANDY LANE",
   "latitude": 41.712104,
   "longitude": -71.398828
 },
 {
   "stop_id": "6235",
   "stop_name": "METACOM FS JAMESON",
   "latitude": 41.712441,
   "longitude": -71.267532
 },
 {
   "stop_id": "6245",
   "stop_name": "METACOM AT 810 METACOM",
   "latitude": 41.71244,
   "longitude": -71.267313
 },
 {
   "stop_id": "6255",
   "stop_name": "GREENWOOD COMMUNITY CHURCH",
   "latitude": 41.712533,
   "longitude": -71.450192
 },
 {
   "stop_id": "6275",
   "stop_name": "PROVIDENCE AT 268 PROVIDENCE",
   "latitude": 41.713198,
   "longitude": -71.507041
 },
 {
   "stop_id": "6280",
   "stop_name": "PROVIDENCE OPP 322 PROVIDENCE",
   "latitude": 41.712057,
   "longitude": -71.504433
 },
 {
   "stop_id": "6285",
   "stop_name": "STRAWBERRY FIELD AT 333 STRAWBERRY FIELD",
   "latitude": 41.712949,
   "longitude": -71.429346
 },
 {
   "stop_id": "6295",
   "stop_name": "COMMONWEALTH - TRUDEAU CENTER",
   "latitude": 41.712263,
   "longitude": -71.484852
 },
 {
   "stop_id": "6300",
   "stop_name": "STRAWBERRY FIELD FS BURGESS",
   "latitude": 41.712933,
   "longitude": -71.429532
 },
 {
   "stop_id": "6305",
   "stop_name": "MAIN OPP BRAYTON",
   "latitude": 41.713604,
   "longitude": -71.523863
 },
 {
   "stop_id": "6310",
   "stop_name": "CHURCH NS WEST SHORE",
   "latitude": 41.713219,
   "longitude": -71.380329
 },
 {
   "stop_id": "6315",
   "stop_name": "WEST SHORE NS CHURCH",
   "latitude": 41.713251,
   "longitude": -71.379755
 },
 {
   "stop_id": "6320",
   "stop_name": "CHURCH FS ALPINE",
   "latitude": 41.713481,
   "longitude": -71.380524
 },
 {
   "stop_id": "6335",
   "stop_name": "CCRI (WARWICK CAMPUS)",
   "latitude": 41.713418,
   "longitude": -71.481354
 },
 {
   "stop_id": "6340",
   "stop_name": "STRAWBERRY FIELD NS CARNEY",
   "latitude": 41.713774,
   "longitude": -71.43112
 },
 {
   "stop_id": "6345",
   "stop_name": "MAIN NS FATIMA",
   "latitude": 41.713608,
   "longitude": -71.280653
 },
 {
   "stop_id": "6360",
   "stop_name": "JEFFERSON BLVD FS ECHO",
   "latitude": 41.713408,
   "longitude": -71.448385
 },
 {
   "stop_id": "6365",
   "stop_name": "PROVIDENCE AT 230 PROVIDENCE",
   "latitude": 41.713913,
   "longitude": -71.50966
 },
 {
   "stop_id": "6370",
   "stop_name": "JEFFERSON BLVD OPP ECHO",
   "latitude": 41.71384,
   "longitude": -71.448069
 },
 {
   "stop_id": "6375",
   "stop_name": "PROVIDENCE FS TANGLEWOOD",
   "latitude": 41.713615,
   "longitude": -71.508292
 },
 {
   "stop_id": "6380",
   "stop_name": "PROVIDENCE AT 229 PROVIDENCE",
   "latitude": 41.71386,
   "longitude": -71.509907
 },
 {
   "stop_id": "6385",
   "stop_name": "E MAIN FS ELM",
   "latitude": 41.713795,
   "longitude": -71.517833
 },
 {
   "stop_id": "6390",
   "stop_name": "PROVIDENCE AT 516 PROVIDENCE",
   "latitude": 41.71419,
   "longitude": -71.496245
 },
 {
   "stop_id": "6405",
   "stop_name": "POST NS GREENE",
   "latitude": 41.713526,
   "longitude": -71.4462
 },
 {
   "stop_id": "6410",
   "stop_name": "PROVIDENCE OPP 199 PROVIDENCE",
   "latitude": 41.714047,
   "longitude": -71.511547
 },
 {
   "stop_id": "6415",
   "stop_name": "MAIN FS BAGY WRINKLE COVE",
   "latitude": 41.713405,
   "longitude": -71.280747
 },
 {
   "stop_id": "6420",
   "stop_name": "PROVIDENCE AT 519 PROVIDENCE",
   "latitude": 41.713998,
   "longitude": -71.496285
 },
 {
   "stop_id": "6425",
   "stop_name": "PROVIDENCE OPP VFW POST",
   "latitude": 41.713972,
   "longitude": -71.51165
 },
 {
   "stop_id": "6430",
   "stop_name": "E MAIN OPP CROSS",
   "latitude": 41.71389,
   "longitude": -71.519124
 },
 {
   "stop_id": "6435",
   "stop_name": "PROVIDENCE NS HAY",
   "latitude": 41.714564,
   "longitude": -71.515226
 },
 {
   "stop_id": "6440",
   "stop_name": "PROVIDENCE OPP 186 PROVIDENCE",
   "latitude": 41.714488,
   "longitude": -71.515137
 },
 {
   "stop_id": "6460",
   "stop_name": "PROVIDENCE FS JUNIOR",
   "latitude": 41.713899,
   "longitude": -71.517663
 },
 {
   "stop_id": "6465",
   "stop_name": "E MAIN NS BRIDGE ST",
   "latitude": 41.713903,
   "longitude": -71.520529
 },
 {
   "stop_id": "6485",
   "stop_name": "E MAIN AT BRAYTON FOUNDRY",
   "latitude": 41.714355,
   "longitude": -71.52144
 },
 {
   "stop_id": "6495",
   "stop_name": "WEST SHORE FS DAMON",
   "latitude": 41.714596,
   "longitude": -71.377552
 },
 {
   "stop_id": "6505",
   "stop_name": "METACOM NS RIDGEWAY",
   "latitude": 41.714704,
   "longitude": -71.267979
 },
 {
   "stop_id": "6510",
   "stop_name": "METACOM OPP RIDGEWAY",
   "latitude": 41.714677,
   "longitude": -71.267816
 },
 {
   "stop_id": "6520",
   "stop_name": "WEST SHORE FS TIDEWATER",
   "latitude": 41.714578,
   "longitude": -71.377327
 },
 {
   "stop_id": "6525",
   "stop_name": "CHURCH NS HOWARD",
   "latitude": 41.715147,
   "longitude": -71.383251
 },
 {
   "stop_id": "6540",
   "stop_name": "POST OPP BAYWOOD",
   "latitude": 41.7149,
   "longitude": -71.445874
 },
 {
   "stop_id": "6545",
   "stop_name": "BALD HILL AT 920 BALD HILL",
   "latitude": 41.713221,
   "longitude": -71.488668
 },
 {
   "stop_id": "6565",
   "stop_name": "E MAIN NS MAIN",
   "latitude": 41.715206,
   "longitude": -71.523159
 },
 {
   "stop_id": "6575",
   "stop_name": "CHURCH OPP NASH",
   "latitude": 41.715493,
   "longitude": -71.383616
 },
 {
   "stop_id": "6580",
   "stop_name": "MAIN NS MAPLE",
   "latitude": 41.715661,
   "longitude": -71.523747
 },
 {
   "stop_id": "6585",
   "stop_name": "PROVIDENCE NS BURNS",
   "latitude": 41.71569,
   "longitude": -71.495049
 },
 {
   "stop_id": "6610",
   "stop_name": "WEST SHORE OPP ECONOMY",
   "latitude": 41.7156,
   "longitude": -71.375908
 },
 {
   "stop_id": "6620",
   "stop_name": "BALD HILL OPP 1000 BALD HILL",
   "latitude": 41.712906,
   "longitude": -71.489125
 },
 {
   "stop_id": "6630",
   "stop_name": "PROVIDENCE AT 567 PROVIDENCE",
   "latitude": 41.715813,
   "longitude": -71.494787
 },
 {
   "stop_id": "6635",
   "stop_name": "CHURCH OPP AQUARIUS",
   "latitude": 41.716537,
   "longitude": -71.38513
 },
 {
   "stop_id": "6640",
   "stop_name": "MAIN AT 948 MAIN",
   "latitude": 41.71606,
   "longitude": -71.523508
 },
 {
   "stop_id": "6645",
   "stop_name": "BALD HILL AT 886 BALD HILL",
   "latitude": 41.714426,
   "longitude": -71.488179
 },
 {
   "stop_id": "6650",
   "stop_name": "CHURCH NS BEACH",
   "latitude": 41.716291,
   "longitude": -71.384962
 },
 {
   "stop_id": "6660",
   "stop_name": "METACOM OPP LAUREL",
   "latitude": 41.717006,
   "longitude": -71.268473
 },
 {
   "stop_id": "6665",
   "stop_name": "METACOM NS LAUREL",
   "latitude": 41.716756,
   "longitude": -71.268238
 },
 {
   "stop_id": "6670",
   "stop_name": "MAIN FS LOCUST",
   "latitude": 41.71646,
   "longitude": -71.281013
 },
 {
   "stop_id": "6675",
   "stop_name": "BALD HILL AT DUNKIN DONUTS",
   "latitude": 41.714127,
   "longitude": -71.488542
 },
 {
   "stop_id": "6680",
   "stop_name": "POST AT 2426 POST",
   "latitude": 41.716286,
   "longitude": -71.444802
 },
 {
   "stop_id": "6690",
   "stop_name": "MAIN NS SEYMOUR",
   "latitude": 41.715818,
   "longitude": -71.280784
 },
 {
   "stop_id": "6695",
   "stop_name": "WARWICK FS LINDY",
   "latitude": 41.717156,
   "longitude": -71.40082
 },
 {
   "stop_id": "6700",
   "stop_name": "PROVIDENCE AT O'DONNELL",
   "latitude": 41.717198,
   "longitude": -71.493542
 },
 {
   "stop_id": "6705",
   "stop_name": "WEST SHORE NS BUSH",
   "latitude": 41.716768,
   "longitude": -71.375613
 },
 {
   "stop_id": "6710",
   "stop_name": "WARWICK OPP AMSTERDAM",
   "latitude": 41.71689,
   "longitude": -71.400312
 },
 {
   "stop_id": "6715",
   "stop_name": "PROVIDENCE NS GAGE",
   "latitude": 41.717084,
   "longitude": -71.493878
 },
 {
   "stop_id": "6720",
   "stop_name": "BALD HILL AT 790 BALD HILL",
   "latitude": 41.716532,
   "longitude": -71.486945
 },
 {
   "stop_id": "6725",
   "stop_name": "MAIN OPP 914 MAIN",
   "latitude": 41.717862,
   "longitude": -71.523874
 },
 {
   "stop_id": "6730",
   "stop_name": "BALD HILL AT 797 BALD HILL",
   "latitude": 41.716375,
   "longitude": -71.487455
 },
 {
   "stop_id": "6735",
   "stop_name": "MAIN FS CLYDE",
   "latitude": 41.717726,
   "longitude": -71.523731
 },
 {
   "stop_id": "6740",
   "stop_name": "WEST SHORE FS MORRIS",
   "latitude": 41.717375,
   "longitude": -71.375812
 },
 {
   "stop_id": "6745",
   "stop_name": "POST AT 2332 POST",
   "latitude": 41.718531,
   "longitude": -71.443416
 },
 {
   "stop_id": "6750",
   "stop_name": "JEFFERSON BLVD OPP THRIFT STORE",
   "latitude": 41.717416,
   "longitude": -71.447132
 },
 {
   "stop_id": "6755",
   "stop_name": "JEFFERSON BLVD AT BAKERY OUTLET",
   "latitude": 41.716901,
   "longitude": -71.447028
 },
 {
   "stop_id": "6760",
   "stop_name": "CHURCH AT 234 CHURCH",
   "latitude": 41.717228,
   "longitude": -71.386385
 },
 {
   "stop_id": "6765",
   "stop_name": "POST NS ELAINE",
   "latitude": 41.718221,
   "longitude": -71.443808
 },
 {
   "stop_id": "6770",
   "stop_name": "WARWICK NS GREYLAWN",
   "latitude": 41.718554,
   "longitude": -71.402154
 },
 {
   "stop_id": "6775",
   "stop_name": "MAIN FS ALMY",
   "latitude": 41.718257,
   "longitude": -71.280932
 },
 {
   "stop_id": "6780",
   "stop_name": "MAIN NS BRADFORD",
   "latitude": 41.717994,
   "longitude": -71.281076
 },
 {
   "stop_id": "6785",
   "stop_name": "WARWICK OPP GREYLAWN",
   "latitude": 41.718528,
   "longitude": -71.401908
 },
 {
   "stop_id": "6790",
   "stop_name": "GREENWICH AVE NS ROME",
   "latitude": 41.718284,
   "longitude": -71.463652
 },
 {
   "stop_id": "6795",
   "stop_name": "METACOM AT 611 METACOM",
   "latitude": 41.718418,
   "longitude": -71.268787
 },
 {
   "stop_id": "6800",
   "stop_name": "CHURCH NS NEW BRITAIN",
   "latitude": 41.718554,
   "longitude": -71.388532
 },
 {
   "stop_id": "6805",
   "stop_name": "METACOM AT 622 METACOM",
   "latitude": 41.71855,
   "longitude": -71.268632
 },
 {
   "stop_id": "6810",
   "stop_name": "MAIN AT 900 MAIN",
   "latitude": 41.719088,
   "longitude": -71.524759
 },
 {
   "stop_id": "6815",
   "stop_name": "WEST SHORE AT 1026 WEST SHORE",
   "latitude": 41.718267,
   "longitude": -71.376261
 },
 {
   "stop_id": "6820",
   "stop_name": "CHURCH NS OVERBROOK",
   "latitude": 41.718316,
   "longitude": -71.388016
 },
 {
   "stop_id": "6830",
   "stop_name": "BALD HILL AT 733 BALD HILL",
   "latitude": 41.718389,
   "longitude": -71.486082
 },
 {
   "stop_id": "6845",
   "stop_name": "WEST SHORE OPP STOKES",
   "latitude": 41.718403,
   "longitude": -71.376557
 },
 {
   "stop_id": "6850",
   "stop_name": "MAIN AT 885 MAIN",
   "latitude": 41.719594,
   "longitude": -71.525521
 },
 {
   "stop_id": "6855",
   "stop_name": "BALD HILL FS RT 113",
   "latitude": 41.720455,
   "longitude": -71.48338
 },
 {
   "stop_id": "6860",
   "stop_name": "CHURCH FS KENWOOD",
   "latitude": 41.719548,
   "longitude": -71.391359
 },
 {
   "stop_id": "6865",
   "stop_name": "CHURCH FS WARWICK",
   "latitude": 41.719627,
   "longitude": -71.402233
 },
 {
   "stop_id": "6870",
   "stop_name": "WARWICK NS BRENARD",
   "latitude": 41.719048,
   "longitude": -71.40262
 },
 {
   "stop_id": "6875",
   "stop_name": "CHURCH NS WARWICK",
   "latitude": 41.719736,
   "longitude": -71.402118
 },
 {
   "stop_id": "6880",
   "stop_name": "PROVIDENCE NS MARKET",
   "latitude": 41.719401,
   "longitude": -71.491642
 },
 {
   "stop_id": "6885",
   "stop_name": "JEFFERSON BLVD FS WILLIAMSBURG",
   "latitude": 41.719553,
   "longitude": -71.446465
 },
 {
   "stop_id": "6890",
   "stop_name": "PROVIDENCE AT 690 PROVIDENCE",
   "latitude": 41.719109,
   "longitude": -71.491897
 },
 {
   "stop_id": "6895",
   "stop_name": "WARWICK AT FRIENDLYS",
   "latitude": 41.719898,
   "longitude": -71.403183
 },
 {
   "stop_id": "6900",
   "stop_name": "RHODE ISLAND MALL",
   "latitude": 41.7196,
   "longitude": -71.482554
 },
 {
   "stop_id": "6905",
   "stop_name": "MAIN NS DYER",
   "latitude": 41.719704,
   "longitude": -71.281019
 },
 {
   "stop_id": "6915",
   "stop_name": "CHURCH AT 642 CHURCH",
   "latitude": 41.720034,
   "longitude": -71.399727
 },
 {
   "stop_id": "6925",
   "stop_name": "CHURCH OPP KILLEY",
   "latitude": 41.720272,
   "longitude": -71.393944
 },
 {
   "stop_id": "6930",
   "stop_name": "MAIN NS WAKEFIELD",
   "latitude": 41.720042,
   "longitude": -71.526091
 },
 {
   "stop_id": "6935",
   "stop_name": "CHURCH OPP OLD HOMESTEAD",
   "latitude": 41.720443,
   "longitude": -71.39544
 },
 {
   "stop_id": "6945",
   "stop_name": "WEST SHORE NS WINTER",
   "latitude": 41.720204,
   "longitude": -71.378002
 },
 {
   "stop_id": "6950",
   "stop_name": "MAIN OPP COOMER",
   "latitude": 41.718919,
   "longitude": -71.281122
 },
 {
   "stop_id": "6955",
   "stop_name": "CHURCH FS BUGBEE",
   "latitude": 41.720488,
   "longitude": -71.397144
 },
 {
   "stop_id": "6960",
   "stop_name": "GREENWICH AVE FS NAPLES",
   "latitude": 41.719972,
   "longitude": -71.464537
 },
 {
   "stop_id": "6965",
   "stop_name": "CHURCH OPP BUGBEE",
   "latitude": 41.720526,
   "longitude": -71.397473
 },
 {
   "stop_id": "6970",
   "stop_name": "METACOM AT 598 METACOM",
   "latitude": 41.720395,
   "longitude": -71.268981
 },
 {
   "stop_id": "6980",
   "stop_name": "METACOM OPP PATTERSON",
   "latitude": 41.720752,
   "longitude": -71.269229
 },
 {
   "stop_id": "6985",
   "stop_name": "MAIN AT 800 MAIN",
   "latitude": 41.720787,
   "longitude": -71.527946
 },
 {
   "stop_id": "6995",
   "stop_name": "POST AT 2248 POST",
   "latitude": 41.720607,
   "longitude": -71.442125
 },
 {
   "stop_id": "7000",
   "stop_name": "MAIN OPP 780 MAIN",
   "latitude": 41.720934,
   "longitude": -71.529899
 },
 {
   "stop_id": "7005",
   "stop_name": "POST OPP 2222 POST",
   "latitude": 41.721547,
   "longitude": -71.441825
 },
 {
   "stop_id": "7010",
   "stop_name": "WEST SHORE FS TROY",
   "latitude": 41.721168,
   "longitude": -71.378498
 },
 {
   "stop_id": "7015",
   "stop_name": "MAIN NS BRIDGE",
   "latitude": 41.721494,
   "longitude": -71.281292
 },
 {
   "stop_id": "7020",
   "stop_name": "WARWICK NS YACATAN",
   "latitude": 41.721325,
   "longitude": -71.404078
 },
 {
   "stop_id": "7025",
   "stop_name": "JEFFERSON BLVD OPP 1000 JEFFERSON BLVD",
   "latitude": 41.721344,
   "longitude": -71.445834
 },
 {
   "stop_id": "7035",
   "stop_name": "WARWICK NS VERNON",
   "latitude": 41.721269,
   "longitude": -71.403808
 },
 {
   "stop_id": "7045",
   "stop_name": "HIGHLAND NS PARKER",
   "latitude": 41.72135,
   "longitude": -71.52872
 },
 {
   "stop_id": "7050",
   "stop_name": "HIGHLAND FS PLEASANT (PHENIX HOTEL)",
   "latitude": 41.721637,
   "longitude": -71.532199
 },
 {
   "stop_id": "7055",
   "stop_name": "PROVIDENCE NS RIVER",
   "latitude": 41.721262,
   "longitude": -71.490985
 },
 {
   "stop_id": "7060",
   "stop_name": "PROVIDENCE AT 798 PROVIDENCE",
   "latitude": 41.722621,
   "longitude": -71.491214
 },
 {
   "stop_id": "7065",
   "stop_name": "MAIN FS VERNON",
   "latitude": 41.721949,
   "longitude": -71.281162
 },
 {
   "stop_id": "7070",
   "stop_name": "GREENWICH AT 555 GREENWICH",
   "latitude": 41.721011,
   "longitude": -71.465792
 },
 {
   "stop_id": "7075",
   "stop_name": "WARWICK MALL OPP THEATRES",
   "latitude": 41.721933,
   "longitude": -71.474838
 },
 {
   "stop_id": "7095",
   "stop_name": "WEST SHORE OPP WOODBURY",
   "latitude": 41.722467,
   "longitude": -71.380289
 },
 {
   "stop_id": "7115",
   "stop_name": "METACOM OPP BEE JAY",
   "latitude": 41.723149,
   "longitude": -71.26955
 },
 {
   "stop_id": "7120",
   "stop_name": "LAMBERT LIND FS SHALOM",
   "latitude": 41.723331,
   "longitude": -71.468532
 },
 {
   "stop_id": "7125",
   "stop_name": "METACOM NS BEE JAY",
   "latitude": 41.723326,
   "longitude": -71.269754
 },
 {
   "stop_id": "7135",
   "stop_name": "WARWICK NS STANMORE",
   "latitude": 41.723529,
   "longitude": -71.404694
 },
 {
   "stop_id": "7145",
   "stop_name": "WEST SHORE AT 760 WEST SHORE",
   "latitude": 41.723778,
   "longitude": -71.382381
 },
 {
   "stop_id": "7165",
   "stop_name": "GREENWICH AT LUTHERAN CHURCH",
   "latitude": 41.723667,
   "longitude": -71.469428
 },
 {
   "stop_id": "7170",
   "stop_name": "POST AT RADISSON",
   "latitude": 41.724855,
   "longitude": -71.439835
 },
 {
   "stop_id": "7180",
   "stop_name": "PROVIDENCE NS WAKEFIELD",
   "latitude": 41.723743,
   "longitude": -71.491273
 },
 {
   "stop_id": "7195",
   "stop_name": "MAIN FS HAILE",
   "latitude": 41.723139,
   "longitude": -71.281416
 },
 {
   "stop_id": "7200",
   "stop_name": "PROVIDENCE FS WAKEFIELD",
   "latitude": 41.724163,
   "longitude": -71.491402
 },
 {
   "stop_id": "7205",
   "stop_name": "WARWICK OPP EDGEHILL",
   "latitude": 41.724753,
   "longitude": -71.404864
 },
 {
   "stop_id": "7215",
   "stop_name": "WEST SHORE AT 635 WEST SHORE",
   "latitude": 41.726062,
   "longitude": -71.386332
 },
 {
   "stop_id": "7225",
   "stop_name": "GREENWICH OPP GREENWICH APTS",
   "latitude": 41.725103,
   "longitude": -71.471803
 },
 {
   "stop_id": "7230",
   "stop_name": "LAMBERT LIND NS GREENWICH VILLAGE APTS",
   "latitude": 41.725114,
   "longitude": -71.471628
 },
 {
   "stop_id": "7235",
   "stop_name": "JEFFERSON BLVD NS BROWNELL",
   "latitude": 41.72485,
   "longitude": -71.444538
 },
 {
   "stop_id": "7245",
   "stop_name": "WEST SHORE NS ALLARD",
   "latitude": 41.723957,
   "longitude": -71.382405
 },
 {
   "stop_id": "7250",
   "stop_name": "WARWICK OPP ROSEMERE",
   "latitude": 41.725769,
   "longitude": -71.405353
 },
 {
   "stop_id": "7265",
   "stop_name": "TF GREEN AIRPORT (ARRIVALS)",
   "latitude": 41.725802,
   "longitude": -71.436997
 },
 {
   "stop_id": "7270",
   "stop_name": "METACOM NS LIBBY",
   "latitude": 41.725045,
   "longitude": -71.269934
 },
 {
   "stop_id": "7280",
   "stop_name": "WEST SHORE FS ROYAL",
   "latitude": 41.724921,
   "longitude": -71.383911
 },
 {
   "stop_id": "7285",
   "stop_name": "MAIN FS FRANKLIN",
   "latitude": 41.725731,
   "longitude": -71.281563
 },
 {
   "stop_id": "7300",
   "stop_name": "WARREN PARK N RIDE",
   "latitude": 41.725695,
   "longitude": -71.280706
 },
 {
   "stop_id": "7305",
   "stop_name": "WEST SHORE OPP CAMBRIDGE",
   "latitude": 41.727065,
   "longitude": -71.388244
 },
 {
   "stop_id": "7315",
   "stop_name": "POST AT SKY BRIDGE",
   "latitude": 41.726764,
   "longitude": -71.438901
 },
 {
   "stop_id": "7325",
   "stop_name": "PROVIDENCE OPP OAKLAND",
   "latitude": 41.726101,
   "longitude": -71.491104
 },
 {
   "stop_id": "7330",
   "stop_name": "PROVIDENCE OPP PONTIAC",
   "latitude": 41.726094,
   "longitude": -71.49125
 },
 {
   "stop_id": "7340",
   "stop_name": "WEST SHORE NS CAMBRIDGE",
   "latitude": 41.726996,
   "longitude": -71.387868
 },
 {
   "stop_id": "7345",
   "stop_name": "WARWICK OPP LYNDALE",
   "latitude": 41.727463,
   "longitude": -71.405829
 },
 {
   "stop_id": "7350",
   "stop_name": "WEST SHORE NS LINBROOK",
   "latitude": 41.728161,
   "longitude": -71.390676
 },
 {
   "stop_id": "7355",
   "stop_name": "LAMBERT LIND AT MACYS",
   "latitude": 41.727227,
   "longitude": -71.475554
 },
 {
   "stop_id": "7360",
   "stop_name": "WEST NATICK OPP FESSENDEN",
   "latitude": 41.727505,
   "longitude": -71.478501
 },
 {
   "stop_id": "7365",
   "stop_name": "JEFFERSON BLVD OPP 931 JEFFERSON BLVD",
   "latitude": 41.720883,
   "longitude": -71.445794
 },
 {
   "stop_id": "7370",
   "stop_name": "PROVIDENCE OPP ALDEN",
   "latitude": 41.727632,
   "longitude": -71.489796
 },
 {
   "stop_id": "7375",
   "stop_name": "WARWICK BETWEEN DAYTON & LYNDALE",
   "latitude": 41.727656,
   "longitude": -71.405694
 },
 {
   "stop_id": "7380",
   "stop_name": "BALD HILL AT WARWICK COMMONS",
   "latitude": 41.725782,
   "longitude": -71.480408
 },
 {
   "stop_id": "7385",
   "stop_name": "JEFFERSON BLVD AT LEVITON MFG",
   "latitude": 41.727256,
   "longitude": -71.443624
 },
 {
   "stop_id": "7390",
   "stop_name": "WEST NATICK NS FESSENDEN",
   "latitude": 41.727678,
   "longitude": -71.477831
 },
 {
   "stop_id": "7395",
   "stop_name": "MAIN NS GREENE",
   "latitude": 41.727733,
   "longitude": -71.281861
 },
 {
   "stop_id": "7410",
   "stop_name": "LAMBERT LIND FS MESSER",
   "latitude": 41.727932,
   "longitude": -71.475982
 },
 {
   "stop_id": "7415",
   "stop_name": "LAMBERT LIND OPP MESSER",
   "latitude": 41.727897,
   "longitude": -71.476358
 },
 {
   "stop_id": "7420",
   "stop_name": "WEST SHORE AT 515 WEST SHORE",
   "latitude": 41.727957,
   "longitude": -71.389916
 },
 {
   "stop_id": "7430",
   "stop_name": "JEFFERSON BLVD FS THURBER",
   "latitude": 41.728409,
   "longitude": -71.443196
 },
 {
   "stop_id": "7435",
   "stop_name": "MAIN NS WASHINGTON",
   "latitude": 41.728577,
   "longitude": -71.28223
 },
 {
   "stop_id": "7440",
   "stop_name": "LAMBERT LIND AT D'ANGELO'S",
   "latitude": 41.73007,
   "longitude": -71.476797
 },
 {
   "stop_id": "7445",
   "stop_name": "WEST SHORE AT 456 WEST SHORE",
   "latitude": 41.728531,
   "longitude": -71.391317
 },
 {
   "stop_id": "7450",
   "stop_name": "WARWICK FS DIXIE",
   "latitude": 41.729318,
   "longitude": -71.406021
 },
 {
   "stop_id": "7465",
   "stop_name": "MAIN NS JOYCE",
   "latitude": 41.729294,
   "longitude": -71.282253
 },
 {
   "stop_id": "7490",
   "stop_name": "PROVIDENCE OPP MARYLAND",
   "latitude": 41.729538,
   "longitude": -71.488014
 },
 {
   "stop_id": "7495",
   "stop_name": "LAMBERT LIND NS GREBLE",
   "latitude": 41.729408,
   "longitude": -71.476974
 },
 {
   "stop_id": "7500",
   "stop_name": "PROVIDENCE NS MARYLAND",
   "latitude": 41.729721,
   "longitude": -71.487978
 },
 {
   "stop_id": "7505",
   "stop_name": "WEST SHORE FS CIRCUIT",
   "latitude": 41.729879,
   "longitude": -71.394684
 },
 {
   "stop_id": "7520",
   "stop_name": "MAIN NS CHILD",
   "latitude": 41.73032,
   "longitude": -71.282474
 },
 {
   "stop_id": "7525",
   "stop_name": "WARWICK OPP GLENDALE",
   "latitude": 41.730023,
   "longitude": -71.406395
 },
 {
   "stop_id": "7555",
   "stop_name": "WEST SHORE AT 314 WEST SHORE",
   "latitude": 41.730567,
   "longitude": -71.396271
 },
 {
   "stop_id": "7560",
   "stop_name": "POST NS AIRPORT RD (opposite Earlham Way)",
   "latitude": 41.731449,
   "longitude": -71.436705
 },
 {
   "stop_id": "7570",
   "stop_name": "JEFFERSON BLVD OPP 639 JEFFERSON BLVD",
   "latitude": 41.73053,
   "longitude": -71.442304
 },
 {
   "stop_id": "7580",
   "stop_name": "WEST SHORE FS GLENWOOD",
   "latitude": 41.730993,
   "longitude": -71.397531
 },
 {
   "stop_id": "7585",
   "stop_name": "WARWICK FS MAGNOLIA",
   "latitude": 41.731342,
   "longitude": -71.406451
 },
 {
   "stop_id": "7595",
   "stop_name": "MAIN NS MILLER",
   "latitude": 41.731164,
   "longitude": -71.282789
 },
 {
   "stop_id": "7600",
   "stop_name": "JEFFERSON BLVD NS QUIMBY",
   "latitude": 41.731359,
   "longitude": -71.442128
 },
 {
   "stop_id": "7605",
   "stop_name": "WEST SHORE NS TWIN OAK",
   "latitude": 41.731424,
   "longitude": -71.398145
 },
 {
   "stop_id": "7610",
   "stop_name": "NEW LONDON NS SOUTHVIEW",
   "latitude": 41.732218,
   "longitude": -71.485713
 },
 {
   "stop_id": "7620",
   "stop_name": "OAKLAWN OPP GREENWICH",
   "latitude": 41.731764,
   "longitude": -71.477057
 },
 {
   "stop_id": "7625",
   "stop_name": "LAMBERT LIND NS GREENWICH",
   "latitude": 41.731375,
   "longitude": -71.476797
 },
 {
   "stop_id": "7640",
   "stop_name": "WARWICK AT 1600 WARWICK",
   "latitude": 41.732719,
   "longitude": -71.406741
 },
 {
   "stop_id": "7645",
   "stop_name": "WEST SHORE AT 199 WEST SHORE",
   "latitude": 41.732033,
   "longitude": -71.399931
 },
 {
   "stop_id": "7650",
   "stop_name": "MAIN FS WOOD",
   "latitude": 41.732349,
   "longitude": -71.282959
 },
 {
   "stop_id": "7660",
   "stop_name": "POST BETWEEN GUILFORD & AIRPORT RD",
   "latitude": 41.732384,
   "longitude": -71.436698
 },
 {
   "stop_id": "7665",
   "stop_name": "MAIN NS LIBERTY",
   "latitude": 41.732407,
   "longitude": -71.283046
 },
 {
   "stop_id": "7670",
   "stop_name": "WEST SHORE OPP DELWOOD",
   "latitude": 41.732495,
   "longitude": -71.400523
 },
 {
   "stop_id": "7680",
   "stop_name": "JEFFERSON BLVD OPP 555 JEFFERSON BLVD",
   "latitude": 41.732582,
   "longitude": -71.441581
 },
 {
   "stop_id": "7685",
   "stop_name": "NEW LONDON OPP SOUTHVIEW",
   "latitude": 41.731984,
   "longitude": -71.48571
 },
 {
   "stop_id": "7690",
   "stop_name": "JEFFERSON BLVD AT 555 JEFFERSON BLVD",
   "latitude": 41.732704,
   "longitude": -71.441609
 },
 {
   "stop_id": "7695",
   "stop_name": "NEW LONDON AT 1400 NEW LONDON",
   "latitude": 41.732899,
   "longitude": -71.4848
 },
 {
   "stop_id": "7710",
   "stop_name": "OAKLAWN FS BATEMAN",
   "latitude": 41.732949,
   "longitude": -71.477142
 },
 {
   "stop_id": "7715",
   "stop_name": "OAKLAWN OPP BATEMAN",
   "latitude": 41.732892,
   "longitude": -71.477327
 },
 {
   "stop_id": "7725",
   "stop_name": "WARWICK MIDBLOCK AIRPORT RD",
   "latitude": 41.735061,
   "longitude": -71.407737
 },
 {
   "stop_id": "7735",
   "stop_name": "WEST SHORE AT 109 WEST SHORE",
   "latitude": 41.733464,
   "longitude": -71.403867
 },
 {
   "stop_id": "7745",
   "stop_name": "WEST SHORE AT 50 WEST SHORE",
   "latitude": 41.733627,
   "longitude": -71.404553
 },
 {
   "stop_id": "7750",
   "stop_name": "WEST SHORE AT 27 WEST SHORE",
   "latitude": 41.733466,
   "longitude": -71.405847
 },
 {
   "stop_id": "7755",
   "stop_name": "NEW LONDON OPP WARFIELD",
   "latitude": 41.73453,
   "longitude": -71.483112
 },
 {
   "stop_id": "7760",
   "stop_name": "MAYFIELD FS OAKLAWN",
   "latitude": 41.73401,
   "longitude": -71.476916
 },
 {
   "stop_id": "7765",
   "stop_name": "WARWICK AT 1543 WARWICK",
   "latitude": 41.734492,
   "longitude": -71.407268
 },
 {
   "stop_id": "7770",
   "stop_name": "MAYFIELD NS OAKLAWN",
   "latitude": 41.734141,
   "longitude": -71.476787
 },
 {
   "stop_id": "7775",
   "stop_name": "NEW LONDON NS WARFIELD",
   "latitude": 41.734679,
   "longitude": -71.48297
 },
 {
   "stop_id": "7785",
   "stop_name": "MAIN OPP WARREN",
   "latitude": 41.73453,
   "longitude": -71.283849
 },
 {
   "stop_id": "7795",
   "stop_name": "JEFFERSON BLVD OPP CITIZENS BANK",
   "latitude": 41.734326,
   "longitude": -71.440943
 },
 {
   "stop_id": "7800",
   "stop_name": "MAYFIELD AT WOODHAVEN APTS",
   "latitude": 41.734379,
   "longitude": -71.472391
 },
 {
   "stop_id": "7805",
   "stop_name": "OAKLAWN NS OAK HILL DR (DEL'S LEMONADE)",
   "latitude": 41.735007,
   "longitude": -71.477651
 },
 {
   "stop_id": "7810",
   "stop_name": "MAIN FS WARREN",
   "latitude": 41.734464,
   "longitude": -71.283941
 },
 {
   "stop_id": "7825",
   "stop_name": "MAYFIELD OPP LAURA",
   "latitude": 41.734487,
   "longitude": -71.470499
 },
 {
   "stop_id": "7841",
   "stop_name": "EAST OPP BLAIS",
   "latitude": 41.735206,
   "longitude": -71.468006
 },
 {
   "stop_id": "7845",
   "stop_name": "EAST OPP MAYFIELD",
   "latitude": 41.735065,
   "longitude": -71.468402
 },
 {
   "stop_id": "7850",
   "stop_name": "POST AT BARDEN",
   "latitude": 41.735357,
   "longitude": -71.435014
 },
 {
   "stop_id": "7855",
   "stop_name": "OAKLAWN AT 1279 OAKLAWN AVE (WALGREENS PHARMACY)",
   "latitude": 41.734557,
   "longitude": -71.477747
 },
 {
   "stop_id": "7860",
   "stop_name": "JEFFERSON BLVD AT 443 JEFFERSON BLVD",
   "latitude": 41.735387,
   "longitude": -71.440718
 },
 {
   "stop_id": "7865",
   "stop_name": "MAIN FS WATER",
   "latitude": 41.735412,
   "longitude": -71.285126
 },
 {
   "stop_id": "7870",
   "stop_name": "MAIN OPP WATER",
   "latitude": 41.735433,
   "longitude": -71.285058
 },
 {
   "stop_id": "7880",
   "stop_name": "POST OPP BARDEN",
   "latitude": 41.73552,
   "longitude": -71.435261
 },
 {
   "stop_id": "7885",
   "stop_name": "COUNTY AT 132 COUNTY RD",
   "latitude": 41.736085,
   "longitude": -71.301674
 },
 {
   "stop_id": "7890",
   "stop_name": "COUNTY FS JOYCE",
   "latitude": 41.736259,
   "longitude": -71.30093
 },
 {
   "stop_id": "7900",
   "stop_name": "EAST AT BICKNELL",
   "latitude": 41.73634,
   "longitude": -71.466604
 },
 {
   "stop_id": "7905",
   "stop_name": "COUNTY OPP POLICE COVE PARK N RIDE",
   "latitude": 41.736436,
   "longitude": -71.298384
 },
 {
   "stop_id": "7910",
   "stop_name": "MAIN ST AT SAMSONITE",
   "latitude": 41.736627,
   "longitude": -71.28672
 },
 {
   "stop_id": "7915",
   "stop_name": "WARWICK NS SQUANTUM",
   "latitude": 41.736385,
   "longitude": -71.407941
 },
 {
   "stop_id": "7920",
   "stop_name": "WARWICK FS SQUANTUM",
   "latitude": 41.736677,
   "longitude": -71.408151
 },
 {
   "stop_id": "7925",
   "stop_name": "JEFFERSON BLVD FS SERVICE AVE",
   "latitude": 41.736482,
   "longitude": -71.440274
 },
 {
   "stop_id": "7930",
   "stop_name": "COUNTY NS BOSWORTH",
   "latitude": 41.736692,
   "longitude": -71.303819
 },
 {
   "stop_id": "7945",
   "stop_name": "COUNTY NS NEW MEADOW",
   "latitude": 41.737019,
   "longitude": -71.293358
 },
 {
   "stop_id": "7950",
   "stop_name": "JEFFERSON BLVD AT 380 JEFFERSON BLVD",
   "latitude": 41.73692,
   "longitude": -71.439999
 },
 {
   "stop_id": "7955",
   "stop_name": "MAIN NS CRESCENT",
   "latitude": 41.736848,
   "longitude": -71.28691
 },
 {
   "stop_id": "7960",
   "stop_name": "COUNTY AT 66 COUNTY RD",
   "latitude": 41.736931,
   "longitude": -71.293348
 },
 {
   "stop_id": "7965",
   "stop_name": "EAST AT ZENITH",
   "latitude": 41.73677,
   "longitude": -71.465851
 },
 {
   "stop_id": "7980",
   "stop_name": "OAKLAWN AT 1210 OAKLAWN AVE (HARUKI RESTAURANT)",
   "latitude": 41.736759,
   "longitude": -71.477866
 },
 {
   "stop_id": "7985",
   "stop_name": "COUNTY AT 15 COUNTY RD",
   "latitude": 41.737221,
   "longitude": -71.290969
 },
 {
   "stop_id": "7990",
   "stop_name": "COUNTY FS SOWAMS",
   "latitude": 41.737268,
   "longitude": -71.290972
 },
 {
   "stop_id": "7995",
   "stop_name": "COUNTY OPP BARRINGTON SHOPPING CTR",
   "latitude": 41.737508,
   "longitude": -71.304154
 },
 {
   "stop_id": "8010",
   "stop_name": "COUNTY AT 230 COUNTY RD",
   "latitude": 41.738247,
   "longitude": -71.305868
 },
 {
   "stop_id": "8020",
   "stop_name": "EAST NS FOSTER",
   "latitude": 41.739264,
   "longitude": -71.462593
 },
 {
   "stop_id": "8025",
   "stop_name": "JEFFERSON BLVD OPP BAY STATE AVE",
   "latitude": 41.738203,
   "longitude": -71.439529
 },
 {
   "stop_id": "8030",
   "stop_name": "COUNTY AT 230 COUNTY RD",
   "latitude": 41.738388,
   "longitude": -71.305735
 },
 {
   "stop_id": "8035",
   "stop_name": "JEFFERSON BLVD FS BAY STATE AVE",
   "latitude": 41.738297,
   "longitude": -71.439628
 },
 {
   "stop_id": "8040",
   "stop_name": "WARWICK FS MANOR",
   "latitude": 41.73857,
   "longitude": -71.408084
 },
 {
   "stop_id": "8045",
   "stop_name": "POST NS LINCOLN",
   "latitude": 41.738468,
   "longitude": -71.433326
 },
 {
   "stop_id": "8050",
   "stop_name": "POST FS LINCOLN",
   "latitude": 41.73851,
   "longitude": -71.43356
 },
 {
   "stop_id": "8060",
   "stop_name": "OAKLAWN AT OLD SPRING TURNAROUND",
   "latitude": 41.739019,
   "longitude": -71.478586
 },
 {
   "stop_id": "8065",
   "stop_name": "EAST FS FOREST",
   "latitude": 41.739063,
   "longitude": -71.462698
 },
 {
   "stop_id": "8070",
   "stop_name": "WARWICK OPP MANOR",
   "latitude": 41.738603,
   "longitude": -71.408267
 },
 {
   "stop_id": "8075",
   "stop_name": "OAKLAWN OPP OLD SPRING TURNAROUND",
   "latitude": 41.739119,
   "longitude": -71.478446
 },
 {
   "stop_id": "8085",
   "stop_name": "JEFFERSON BLVD OPP 303 JEFFERSON BLVD",
   "latitude": 41.73923,
   "longitude": -71.439126
 },
 {
   "stop_id": "8095",
   "stop_name": "COUNTY NS MAPLE",
   "latitude": 41.739947,
   "longitude": -71.308163
 },
 {
   "stop_id": "8105",
   "stop_name": "JEFFERSON BLVD NS VERMONT",
   "latitude": 41.73985,
   "longitude": -71.439109
 },
 {
   "stop_id": "8125",
   "stop_name": "HOWARD NS PONTIAC",
   "latitude": 41.740836,
   "longitude": -71.461082
 },
 {
   "stop_id": "8135",
   "stop_name": "JEFFERSON BLVD AT 222 JEFFERSON BLVD",
   "latitude": 41.740972,
   "longitude": -71.438469
 },
 {
   "stop_id": "8140",
   "stop_name": "WARWICK AT 1309 WARWICK",
   "latitude": 41.74084,
   "longitude": -71.40808
 },
 {
   "stop_id": "8145",
   "stop_name": "JEFFERSON BLVD AT 245 JEFFERSON BLVD",
   "latitude": 41.741113,
   "longitude": -71.438565
 },
 {
   "stop_id": "8150",
   "stop_name": "WARWICK NS NAMQUID",
   "latitude": 41.741137,
   "longitude": -71.407827
 },
 {
   "stop_id": "8160",
   "stop_name": "COUNTY AT 308 COUNTY RD",
   "latitude": 41.741874,
   "longitude": -71.310257
 },
 {
   "stop_id": "8175",
   "stop_name": "COUNTY OPP BODY NATURAL FITNESS",
   "latitude": 41.74189,
   "longitude": -71.309984
 },
 {
   "stop_id": "8185",
   "stop_name": "OAKLAWN FS WESTBROOK",
   "latitude": 41.741462,
   "longitude": -71.479138
 },
 {
   "stop_id": "8200",
   "stop_name": "COUNTY OPP HILLTOP",
   "latitude": 41.742842,
   "longitude": -71.312185
 },
 {
   "stop_id": "8205",
   "stop_name": "COUNTY OPP 361 COUNTY RD",
   "latitude": 41.744088,
   "longitude": -71.314383
 },
 {
   "stop_id": "8210",
   "stop_name": "OAKLAWN OPP WEINORAMA",
   "latitude": 41.743513,
   "longitude": -71.479285
 },
 {
   "stop_id": "8215",
   "stop_name": "HOWARD NS WEST",
   "latitude": 41.743173,
   "longitude": -71.463464
 },
 {
   "stop_id": "8225",
   "stop_name": "JEFFERSON BLVD OPP LINCOLN",
   "latitude": 41.743314,
   "longitude": -71.437656
 },
 {
   "stop_id": "8230",
   "stop_name": "JEFFERSON BLVD FS LINCOLN",
   "latitude": 41.742723,
   "longitude": -71.437983
 },
 {
   "stop_id": "8235",
   "stop_name": "OAKLAWN AT WEINORAMA",
   "latitude": 41.743516,
   "longitude": -71.479379
 },
 {
   "stop_id": "8245",
   "stop_name": "WARWICK FS MIANONOMO",
   "latitude": 41.743716,
   "longitude": -71.407144
 },
 {
   "stop_id": "8250",
   "stop_name": "HOWARD NS REGAN",
   "latitude": 41.744719,
   "longitude": -71.464708
 },
 {
   "stop_id": "8255",
   "stop_name": "PONTIAC OPP KENNEY",
   "latitude": 41.743764,
   "longitude": -71.456681
 },
 {
   "stop_id": "8265",
   "stop_name": "PONTIAC NS KENNEY",
   "latitude": 41.74358,
   "longitude": -71.456612
 },
 {
   "stop_id": "8270",
   "stop_name": "WARWICK NS SCRANTON",
   "latitude": 41.744087,
   "longitude": -71.407211
 },
 {
   "stop_id": "8275",
   "stop_name": "OAKLAWN OPP SCENIC",
   "latitude": 41.744942,
   "longitude": -71.479324
 },
 {
   "stop_id": "8280",
   "stop_name": "POST NS ETHAN",
   "latitude": 41.744552,
   "longitude": -71.428405
 },
 {
   "stop_id": "8285",
   "stop_name": "OAKLAWN OPP CITIZENS BANK",
   "latitude": 41.744962,
   "longitude": -71.479131
 },
 {
   "stop_id": "8290",
   "stop_name": "POST BETWEEN ELM & CHESTNUT",
   "latitude": 41.744846,
   "longitude": -71.428289
 },
 {
   "stop_id": "8295",
   "stop_name": "WARWICK OPP 1106 WARWICK",
   "latitude": 41.745766,
   "longitude": -71.406247
 },
 {
   "stop_id": "8300",
   "stop_name": "NARRAGANSETT PKWAY NS WARWICK",
   "latitude": 41.745201,
   "longitude": -71.406061
 },
 {
   "stop_id": "8305",
   "stop_name": "NARRAGANSETT PKWAY NS STODDARD",
   "latitude": 41.745178,
   "longitude": -71.405759
 },
 {
   "stop_id": "8330",
   "stop_name": "NARRAGANSETT PKWAY FS CREAD",
   "latitude": 41.745468,
   "longitude": -71.403912
 },
 {
   "stop_id": "8345",
   "stop_name": "JEFFERSON BLVD AT 100 JEFFERSON BLVD",
   "latitude": 41.745755,
   "longitude": -71.436699
 },
 {
   "stop_id": "8355",
   "stop_name": "NARRAGANSETT PKWAY OPP THOR",
   "latitude": 41.745874,
   "longitude": -71.401843
 },
 {
   "stop_id": "8365",
   "stop_name": "JEFFERSON BLVD OPP 100 JEFFERSON BLVD",
   "latitude": 41.745985,
   "longitude": -71.436824
 },
 {
   "stop_id": "8370",
   "stop_name": "NARRAGANSETT PKWAY NS KENDALL",
   "latitude": 41.746093,
   "longitude": -71.399959
 },
 {
   "stop_id": "8375",
   "stop_name": "NARRAGANSETT PKWAY OPP KENDELL",
   "latitude": 41.74628,
   "longitude": -71.399377
 },
 {
   "stop_id": "8380",
   "stop_name": "POST BETWEEN WELFARE & MAJESTIC",
   "latitude": 41.747596,
   "longitude": -71.424225
 },
 {
   "stop_id": "8385",
   "stop_name": "COUNTY FS LINCOLN",
   "latitude": 41.746637,
   "longitude": -71.316552
 },
 {
   "stop_id": "8390",
   "stop_name": "POST BETWEEN PETTACONSETT & NORWOOD",
   "latitude": 41.746699,
   "longitude": -71.42602
 },
 {
   "stop_id": "8395",
   "stop_name": "PONTIAC FS SLATER",
   "latitude": 41.746956,
   "longitude": -71.453756
 },
 {
   "stop_id": "8400",
   "stop_name": "NARRAGANSETT PKWAY NS ELKS",
   "latitude": 41.746504,
   "longitude": -71.397355
 },
 {
   "stop_id": "8405",
   "stop_name": "NARRAGANSETT PKWAY OPP ELKS LANE",
   "latitude": 41.746632,
   "longitude": -71.397125
 },
 {
   "stop_id": "8410",
   "stop_name": "OAKLAWN NS BRAYTON",
   "latitude": 41.746699,
   "longitude": -71.478865
 },
 {
   "stop_id": "8415",
   "stop_name": "HOWARD NS CHERRYDALE",
   "latitude": 41.746653,
   "longitude": -71.466493
 },
 {
   "stop_id": "8420",
   "stop_name": "HOWARD OPP CHERRYDALE",
   "latitude": 41.746576,
   "longitude": -71.466552
 },
 {
   "stop_id": "8425",
   "stop_name": "COUNTY NS LINCOLN",
   "latitude": 41.746469,
   "longitude": -71.316588
 },
 {
   "stop_id": "8445",
   "stop_name": "NARRAGANSETT PKWAY NS SPRING GREEN",
   "latitude": 41.746818,
   "longitude": -71.395409
 },
 {
   "stop_id": "8455",
   "stop_name": "NEW LONDON FS HOWARD",
   "latitude": 41.747932,
   "longitude": -71.468295
 },
 {
   "stop_id": "8460",
   "stop_name": "OAKLAWN NS WILBUR",
   "latitude": 41.747205,
   "longitude": -71.478947
 },
 {
   "stop_id": "8465",
   "stop_name": "NARRAGANSETT PKWAY NS SPRING GREEN",
   "latitude": 41.747017,
   "longitude": -71.394657
 },
 {
   "stop_id": "8475",
   "stop_name": "PONTIAC AT CNG PUMP STATION",
   "latitude": 41.747365,
   "longitude": -71.453681
 },
 {
   "stop_id": "8485",
   "stop_name": "NEW LONDON NS GARDEN HILLS PKWAY",
   "latitude": 41.747883,
   "longitude": -71.46872
 },
 {
   "stop_id": "8510",
   "stop_name": "TRAFFIC TRIBUNAL",
   "latitude": 41.748219,
   "longitude": -71.467083
 },
 {
   "stop_id": "8520",
   "stop_name": "BARRINGTON PARK N RIDE (WHITE CHURCH)",
   "latitude": 41.747975,
   "longitude": -71.31803
 },
 {
   "stop_id": "8530",
   "stop_name": "BARRINGTON PARK N RIDE (WHITE CHURCH)",
   "latitude": 41.748065,
   "longitude": -71.317928
 },
 {
   "stop_id": "8545",
   "stop_name": "NARRAGANSETT PKWAY NS HOWIE",
   "latitude": 41.74857,
   "longitude": -71.391115
 },
 {
   "stop_id": "8550",
   "stop_name": "NARRAGANSETT PKWAY FS HOWIE",
   "latitude": 41.74873,
   "longitude": -71.391009
 },
 {
   "stop_id": "8555",
   "stop_name": "POST NS HARRINGTON",
   "latitude": 41.748343,
   "longitude": -71.423346
 },
 {
   "stop_id": "8565",
   "stop_name": "WARWICK NS N. COUNTRY CLUB",
   "latitude": 41.748264,
   "longitude": -71.404619
 },
 {
   "stop_id": "8570",
   "stop_name": "WARWICK AT 1015 WARWICK",
   "latitude": 41.748172,
   "longitude": -71.404853
 },
 {
   "stop_id": "8575",
   "stop_name": "OAKLAWN NS WEAVER",
   "latitude": 41.748647,
   "longitude": -71.478429
 },
 {
   "stop_id": "8585",
   "stop_name": "NARRAGANSETT PKWAY FS PARKSIDE",
   "latitude": 41.74874,
   "longitude": -71.387351
 },
 {
   "stop_id": "8590",
   "stop_name": "COUNTY NS FEDERAL",
   "latitude": 41.74936,
   "longitude": -71.319331
 },
 {
   "stop_id": "8600",
   "stop_name": "NARRAGANSETT PKWAY FS N ALVIRA",
   "latitude": 41.748823,
   "longitude": -71.388053
 },
 {
   "stop_id": "8610",
   "stop_name": "JEFFERSON BLVD NS MAPLE",
   "latitude": 41.748899,
   "longitude": -71.43576
 },
 {
   "stop_id": "8615",
   "stop_name": "ELMWOOD NS POST",
   "latitude": 41.749567,
   "longitude": -71.422972
 },
 {
   "stop_id": "8630",
   "stop_name": "ELMWOOD FS POST",
   "latitude": 41.74951,
   "longitude": -71.42277
 },
 {
   "stop_id": "8635",
   "stop_name": "JEFFERSON BLVD FS SARGENT",
   "latitude": 41.749018,
   "longitude": -71.435583
 },
 {
   "stop_id": "8640",
   "stop_name": "NARRAGANSETT PKWAY OPP CARRIE BROWN",
   "latitude": 41.748791,
   "longitude": -71.385099
 },
 {
   "stop_id": "8645",
   "stop_name": "NARRAGANSETT PKWAY NS CARRIE BROWN",
   "latitude": 41.748869,
   "longitude": -71.384603
 },
 {
   "stop_id": "8665",
   "stop_name": "POST OPP ROSEWOOD",
   "latitude": 41.749695,
   "longitude": -71.421014
 },
 {
   "stop_id": "8670",
   "stop_name": "NEW LONDON AT NATIONAL GUARD",
   "latitude": 41.749307,
   "longitude": -71.46739
 },
 {
   "stop_id": "8680",
   "stop_name": "WARWICK OPP URBAN",
   "latitude": 41.750778,
   "longitude": -71.404095
 },
 {
   "stop_id": "8695",
   "stop_name": "NARRAGANSETT PKWAY NS COUNTRY CLUB",
   "latitude": 41.75011,
   "longitude": -71.383476
 },
 {
   "stop_id": "8700",
   "stop_name": "OAKLAWN NS MILES",
   "latitude": 41.750455,
   "longitude": -71.477815
 },
 {
   "stop_id": "8705",
   "stop_name": "NARRAGANSETT PKWAY NS COUNTRY CLUB",
   "latitude": 41.750534,
   "longitude": -71.383664
 },
 {
   "stop_id": "8710",
   "stop_name": "JEFFERSON BLVD NS CHESTNUT",
   "latitude": 41.75085,
   "longitude": -71.435047
 },
 {
   "stop_id": "8720",
   "stop_name": "OAKLAWN OPP MILES",
   "latitude": 41.750739,
   "longitude": -71.47786
 },
 {
   "stop_id": "8745",
   "stop_name": "JEFFERSON BLVD FS CHESTNUT",
   "latitude": 41.750595,
   "longitude": -71.434989
 },
 {
   "stop_id": "8750",
   "stop_name": "COUNTY AT 509 COUNTY RD",
   "latitude": 41.751983,
   "longitude": -71.321692
 },
 {
   "stop_id": "8765",
   "stop_name": "POST AT 901 POST RD",
   "latitude": 41.751686,
   "longitude": -71.417281
 },
 {
   "stop_id": "8770",
   "stop_name": "JEFFERSON BLVD NS CYPRESS",
   "latitude": 41.752742,
   "longitude": -71.435568
 },
 {
   "stop_id": "8775",
   "stop_name": "NARRAGANSETT PKWAY OPP GILOOLY",
   "latitude": 41.752268,
   "longitude": -71.383611
 },
 {
   "stop_id": "8780",
   "stop_name": "PONTIAC NS SOCKANOSSET CROSS",
   "latitude": 41.751645,
   "longitude": -71.451527
 },
 {
   "stop_id": "8785",
   "stop_name": "NARRAGANSETT PKWAY NS GILLOOLY",
   "latitude": 41.752466,
   "longitude": -71.383744
 },
 {
   "stop_id": "8805",
   "stop_name": "POST FS FAIRFAX",
   "latitude": 41.752245,
   "longitude": -71.41634
 },
 {
   "stop_id": "8810",
   "stop_name": "OAKLAWN FS GARDEN HILLS",
   "latitude": 41.752349,
   "longitude": -71.477277
 },
 {
   "stop_id": "8815",
   "stop_name": "ELMWOOD NS SIXTH",
   "latitude": 41.751899,
   "longitude": -71.423164
 },
 {
   "stop_id": "8820",
   "stop_name": "JEFFERSON BLVD NS JEFFERSON PARK RD",
   "latitude": 41.752645,
   "longitude": -71.435241
 },
 {
   "stop_id": "8830",
   "stop_name": "OAKLAWN AT 741 OAKLAWN",
   "latitude": 41.75282,
   "longitude": -71.477299
 },
 {
   "stop_id": "8835",
   "stop_name": "COUNTY FS MANNING",
   "latitude": 41.752442,
   "longitude": -71.324051
 },
 {
   "stop_id": "8840",
   "stop_name": "PONTIAC OPP 1150 PONTIAC",
   "latitude": 41.753023,
   "longitude": -71.450327
 },
 {
   "stop_id": "8845",
   "stop_name": "POST FS RELPH",
   "latitude": 41.75306,
   "longitude": -71.415349
 },
 {
   "stop_id": "8850",
   "stop_name": "ELMWOOD NS FIFTH",
   "latitude": 41.753867,
   "longitude": -71.423686
 },
 {
   "stop_id": "8870",
   "stop_name": "PONTIAC FS PETTACONSETT",
   "latitude": 41.753586,
   "longitude": -71.449001
 },
 {
   "stop_id": "8880",
   "stop_name": "OAKLAWN NS BLOSSOM",
   "latitude": 41.754045,
   "longitude": -71.476735
 },
 {
   "stop_id": "8895",
   "stop_name": "PONTIAC OPP PETTACONSETT",
   "latitude": 41.753719,
   "longitude": -71.449005
 },
 {
   "stop_id": "8900",
   "stop_name": "NARRAGANSETT PKWAY OPP BENTLEY",
   "latitude": 41.754092,
   "longitude": -71.385485
 },
 {
   "stop_id": "8905",
   "stop_name": "NARRAGANSETT PKWAY NS BENTLEY",
   "latitude": 41.753943,
   "longitude": -71.385454
 },
 {
   "stop_id": "8915",
   "stop_name": "POST NS WALMART ENTRANCE",
   "latitude": 41.753601,
   "longitude": -71.414324
 },
 {
   "stop_id": "8925",
   "stop_name": "POST FS PALM",
   "latitude": 41.754462,
   "longitude": -71.413367
 },
 {
   "stop_id": "8950",
   "stop_name": "WARWICK NS WASHINGTON",
   "latitude": 41.754677,
   "longitude": -71.404236
 },
 {
   "stop_id": "8955",
   "stop_name": "POST OPP CHAMBLY",
   "latitude": 41.755079,
   "longitude": -71.412218
 },
 {
   "stop_id": "8980",
   "stop_name": "NARRAGANSETT PKWAY FS NAUSHON",
   "latitude": 41.755464,
   "longitude": -71.387961
 },
 {
   "stop_id": "8985",
   "stop_name": "NARR PKWAY FS 400 NARRAGANSETT PKWAY",
   "latitude": 41.755303,
   "longitude": -71.387681
 },
 {
   "stop_id": "9015",
   "stop_name": "WARWICK NS ATLANTIC",
   "latitude": 41.75598,
   "longitude": -71.404535
 },
 {
   "stop_id": "9020",
   "stop_name": "POST FS SPOFFORD",
   "latitude": 41.755458,
   "longitude": -71.41187
 },
 {
   "stop_id": "9025",
   "stop_name": "ELMWOOD MIDBLOCK 1884 ELMWOOD",
   "latitude": 41.756267,
   "longitude": -71.424124
 },
 {
   "stop_id": "9040",
   "stop_name": "OAKLAWN AT655 OAKLAWN",
   "latitude": 41.755696,
   "longitude": -71.476041
 },
 {
   "stop_id": "9050",
   "stop_name": "OAKLAWN AT 630 OAKLAWN",
   "latitude": 41.756101,
   "longitude": -71.475669
 },
 {
   "stop_id": "9065",
   "stop_name": "NARRAGANSETT PKWAY NS CONONCHET",
   "latitude": 41.756822,
   "longitude": -71.388744
 },
 {
   "stop_id": "9070",
   "stop_name": "NARRAGANSETT PKWAY FS LONGWOOD",
   "latitude": 41.75675,
   "longitude": -71.388619
 },
 {
   "stop_id": "9075",
   "stop_name": "ELMWOOD N S 2ND",
   "latitude": 41.75972,
   "longitude": -71.424644
 },
 {
   "stop_id": "9090",
   "stop_name": "MIDWAY FS SOCKANOSSETT",
   "latitude": 41.757339,
   "longitude": -71.457899
 },
 {
   "stop_id": "9095",
   "stop_name": "WAMPANOAG AT EAST BAY CTR",
   "latitude": 41.754475,
   "longitude": -71.326199
 },
 {
   "stop_id": "9100",
   "stop_name": "ELMWOOD NS THIRD",
   "latitude": 41.756897,
   "longitude": -71.424035
 },
 {
   "stop_id": "9105",
   "stop_name": "POST OPP TENNYSON",
   "latitude": 41.756977,
   "longitude": -71.409506
 },
 {
   "stop_id": "9110",
   "stop_name": "POST NS TENNYSON",
   "latitude": 41.757155,
   "longitude": -71.409403
 },
 {
   "stop_id": "9125",
   "stop_name": "PONTIAC AT 988 PONTIAC AVE",
   "latitude": 41.757572,
   "longitude": -71.445425
 },
 {
   "stop_id": "9130",
   "stop_name": "PONTIAC AT 995 PONTIAC",
   "latitude": 41.75764,
   "longitude": -71.445458
 },
 {
   "stop_id": "9145",
   "stop_name": "OAKLAWN FS FREEHOLD",
   "latitude": 41.758023,
   "longitude": -71.474514
 },
 {
   "stop_id": "9150",
   "stop_name": "CRESCENT VIEW OPP PROVIDENCE",
   "latitude": 41.758095,
   "longitude": -71.358289
 },
 {
   "stop_id": "9155",
   "stop_name": "NARRAGANSETT PKWAY FS MANCHESTER",
   "latitude": 41.758541,
   "longitude": -71.389176
 },
 {
   "stop_id": "9165",
   "stop_name": "MIDWAY OPP SOCKANOSSETT",
   "latitude": 41.756967,
   "longitude": -71.458543
 },
 {
   "stop_id": "9170",
   "stop_name": "MIDWAY BEHIND OFFICE MAX",
   "latitude": 41.757945,
   "longitude": -71.456923
 },
 {
   "stop_id": "9175",
   "stop_name": "CRESCENT VIEW NS PROVIDENCE",
   "latitude": 41.758254,
   "longitude": -71.357948
 },
 {
   "stop_id": "9180",
   "stop_name": "OAKLAWN NS SHERMAN",
   "latitude": 41.758341,
   "longitude": -71.474523
 },
 {
   "stop_id": "9190",
   "stop_name": "CRESCENT VIEW NS CAROUSEL",
   "latitude": 41.758365,
   "longitude": -71.3566
 },
 {
   "stop_id": "9195",
   "stop_name": "BULLOCKS POINT FS CRESCENT VIEW",
   "latitude": 41.758468,
   "longitude": -71.359866
 },
 {
   "stop_id": "9225",
   "stop_name": "POST FS HOLMES",
   "latitude": 41.758677,
   "longitude": -71.407304
 },
 {
   "stop_id": "9240",
   "stop_name": "CRESCENT VIEW FS BEACON PARK",
   "latitude": 41.758632,
   "longitude": -71.35543
 },
 {
   "stop_id": "9245",
   "stop_name": "ELMWOOD NS SECOND",
   "latitude": 41.758798,
   "longitude": -71.42437
 },
 {
   "stop_id": "9255",
   "stop_name": "BULLOCKS POINT FS BEACON",
   "latitude": 41.758776,
   "longitude": -71.360118
 },
 {
   "stop_id": "9275",
   "stop_name": "PONTIAC NS CAPUANO",
   "latitude": 41.758777,
   "longitude": -71.44443
 },
 {
   "stop_id": "9285",
   "stop_name": "CRESCENT VIEW NS CLAIRE",
   "latitude": 41.759568,
   "longitude": -71.351402
 },
 {
   "stop_id": "9300",
   "stop_name": "CRESCENT VIEW BETWEEN PECK & PLANET",
   "latitude": 41.75945,
   "longitude": -71.347859
 },
 {
   "stop_id": "9315",
   "stop_name": "OAKLAWN NS FERNBROOK",
   "latitude": 41.759745,
   "longitude": -71.47401
 },
 {
   "stop_id": "9320",
   "stop_name": "CRESCENT VIEW AT ALDEN",
   "latitude": 41.75971,
   "longitude": -71.348909
 },
 {
   "stop_id": "9325",
   "stop_name": "OAKLAWN FS FERNBROOK",
   "latitude": 41.759978,
   "longitude": -71.473771
 },
 {
   "stop_id": "9330",
   "stop_name": "WARWICK NS POST",
   "latitude": 41.760089,
   "longitude": -71.404624
 },
 {
   "stop_id": "9335",
   "stop_name": "NARRAGANSETT PKWAY NS BAYSIDE",
   "latitude": 41.760364,
   "longitude": -71.389483
 },
 {
   "stop_id": "9340",
   "stop_name": "POST FS FROST",
   "latitude": 41.759978,
   "longitude": -71.405378
 },
 {
   "stop_id": "9345",
   "stop_name": "WILLETT AVE AT SHAW S MARKET",
   "latitude": 41.759567,
   "longitude": -71.343641
 },
 {
   "stop_id": "9350",
   "stop_name": "PONTIAC NS GARDEN CITY",
   "latitude": 41.760252,
   "longitude": -71.442922
 },
 {
   "stop_id": "9355",
   "stop_name": "WARWICK AT 557 WARWICK",
   "latitude": 41.760744,
   "longitude": -71.404868
 },
 {
   "stop_id": "9360",
   "stop_name": "WARWICK OPP SCOTT",
   "latitude": 41.761041,
   "longitude": -71.404671
 },
 {
   "stop_id": "9365",
   "stop_name": "BULLOCKS POINT AT OLDHAM ELEMENTARY SCHOOL",
   "latitude": 41.760741,
   "longitude": -71.360235
 },
 {
   "stop_id": "9370",
   "stop_name": "WAMPANOAG OPP PRIMROSE HILL",
   "latitude": 41.760222,
   "longitude": -71.323314
 },
 {
   "stop_id": "9380",
   "stop_name": "BULLOCKS POINT OPP SUNSET",
   "latitude": 41.759975,
   "longitude": -71.360271
 },
 {
   "stop_id": "9385",
   "stop_name": "WAMPANOAG FS PRIMROSE HILL",
   "latitude": 41.760193,
   "longitude": -71.323947
 },
 {
   "stop_id": "9390",
   "stop_name": "ELMWOOD FS 1ST",
   "latitude": 41.761009,
   "longitude": -71.424955
 },
 {
   "stop_id": "9400",
   "stop_name": "HILLSIDE FS CHIPOTLE GRILL",
   "latitude": 41.761606,
   "longitude": -71.458729
 },
 {
   "stop_id": "9410",
   "stop_name": "MIDWAY FS CYPRESS DR",
   "latitude": 41.76072,
   "longitude": -71.456737
 },
 {
   "stop_id": "9415",
   "stop_name": "NARRAGANSETT PKWAY FS SPRING GARDEN",
   "latitude": 41.761545,
   "longitude": -71.389585
 },
 {
   "stop_id": "9420",
   "stop_name": "OAKLAWN NS MERIT",
   "latitude": 41.761128,
   "longitude": -71.473667
 },
 {
   "stop_id": "9440",
   "stop_name": "ELMWOOD NS FIRST",
   "latitude": 41.761008,
   "longitude": -71.424754
 },
 {
   "stop_id": "9465",
   "stop_name": "OAKLAWN NS WILLISTON",
   "latitude": 41.761491,
   "longitude": -71.473851
 },
 {
   "stop_id": "9475",
   "stop_name": "HILLSIDE AT JOSEPH A BANKS",
   "latitude": 41.762062,
   "longitude": -71.457992
 },
 {
   "stop_id": "9480",
   "stop_name": "BULLOCKS POINT NS BATES",
   "latitude": 41.7618,
   "longitude": -71.360583
 },
 {
   "stop_id": "9495",
   "stop_name": "NARRAGANSETT PKWAY FS EAST VIEW",
   "latitude": 41.762532,
   "longitude": -71.389821
 },
 {
   "stop_id": "9515",
   "stop_name": "ELMWOOD FS WELLINGTON",
   "latitude": 41.762387,
   "longitude": -71.424996
 },
 {
   "stop_id": "9535",
   "stop_name": "ELMWOOD NS WELLINGTON",
   "latitude": 41.762368,
   "longitude": -71.42518
 },
 {
   "stop_id": "9540",
   "stop_name": "PONTIAC OPP HERSEY",
   "latitude": 41.762712,
   "longitude": -71.442412
 },
 {
   "stop_id": "9560",
   "stop_name": "PONTIAC FS EUSTON",
   "latitude": 41.763181,
   "longitude": -71.44193
 },
 {
   "stop_id": "9570",
   "stop_name": "WARWICK AT 468 WARWICK",
   "latitude": 41.763379,
   "longitude": -71.404837
 },
 {
   "stop_id": "9585",
   "stop_name": "OAKLAWN OPP 435 OAKLAWN",
   "latitude": 41.762917,
   "longitude": -71.473729
 },
 {
   "stop_id": "9590",
   "stop_name": "OAKLAWN AT 435 OAKLAWN",
   "latitude": 41.762949,
   "longitude": -71.473786
 },
 {
   "stop_id": "9606",
   "stop_name": "HILLSIDE OPP CITIZENS BANK",
   "latitude": 41.764559,
   "longitude": -71.45841
 },
 {
   "stop_id": "9615",
   "stop_name": "BULLOCKS POINT NS SHERMAN",
   "latitude": 41.763351,
   "longitude": -71.360652
 },
 {
   "stop_id": "9625",
   "stop_name": "WAMPANOAG AT POLE 23",
   "latitude": 41.761503,
   "longitude": -71.321775
 },
 {
   "stop_id": "9630",
   "stop_name": "BULLOCKS POINT NS SHERMAN",
   "latitude": 41.763579,
   "longitude": -71.360859
 },
 {
   "stop_id": "9640",
   "stop_name": "WARWICK FS QUINTON",
   "latitude": 41.764529,
   "longitude": -71.404907
 },
 {
   "stop_id": "9650",
   "stop_name": "WARWICK FS LAURA",
   "latitude": 41.764266,
   "longitude": -71.405113
 },
 {
   "stop_id": "9680",
   "stop_name": "ELMWOOD NS 3RD",
   "latitude": 41.764814,
   "longitude": -71.425574
 },
 {
   "stop_id": "9695",
   "stop_name": "ELMWOOD BETWEEN 2ND & 3RD",
   "latitude": 41.764837,
   "longitude": -71.425423
 },
 {
   "stop_id": "9705",
   "stop_name": "BULLOCKS POINT NS RIVER",
   "latitude": 41.76518,
   "longitude": -71.361069
 },
 {
   "stop_id": "9715",
   "stop_name": "WAMPANOAG NS PINE TOP",
   "latitude": 41.764594,
   "longitude": -71.321269
 },
 {
   "stop_id": "9720",
   "stop_name": "WAMPANOAG AT POLE 35",
   "latitude": 41.76482,
   "longitude": -71.320995
 },
 {
   "stop_id": "9755",
   "stop_name": "BROAD FS TUCKER",
   "latitude": 41.765972,
   "longitude": -71.390992
 },
 {
   "stop_id": "9765",
   "stop_name": "OAKLAWN AT 330 OAKLAWN",
   "latitude": 41.766002,
   "longitude": -71.472096
 },
 {
   "stop_id": "9770",
   "stop_name": "RESERVOIR NS GARDEN CITY DR",
   "latitude": 41.766139,
   "longitude": -71.458405
 },
 {
   "stop_id": "9785",
   "stop_name": "PONTIAC OPP KEITH",
   "latitude": 41.766565,
   "longitude": -71.440423
 },
 {
   "stop_id": "9800",
   "stop_name": "OAKLAWN NS DEAN",
   "latitude": 41.766859,
   "longitude": -71.47176
 },
 {
   "stop_id": "9805",
   "stop_name": "ELMWOOD OPP BEDSON",
   "latitude": 41.76663,
   "longitude": -71.425
 },
 {
   "stop_id": "9815",
   "stop_name": "Oaklawn NS Tupelo Hill",
   "latitude": 41.767319,
   "longitude": -71.471507
 },
 {
   "stop_id": "9820",
   "stop_name": "WARWICK NS SHOLES WAY",
   "latitude": 41.766583,
   "longitude": -71.405216
 },
 {
   "stop_id": "9830",
   "stop_name": "WARWICK OPP WOBURN",
   "latitude": 41.76731,
   "longitude": -71.405103
 },
 {
   "stop_id": "9835",
   "stop_name": "RESERVOIR FS WOODBRIDGE (CHELO'S)",
   "latitude": 41.766702,
   "longitude": -71.457859
 },
 {
   "stop_id": "9850",
   "stop_name": "BULLOCKS POINT AT 396 BULLOCKS POINT",
   "latitude": 41.767999,
   "longitude": -71.361148
 },
 {
   "stop_id": "9855",
   "stop_name": "ELMWOOD OPP CARMAN",
   "latitude": 41.76774,
   "longitude": -71.424802
 },
 {
   "stop_id": "9865",
   "stop_name": "BROAD FS RHODES",
   "latitude": 41.767874,
   "longitude": -71.391888
 },
 {
   "stop_id": "9870",
   "stop_name": "BULLOCKS POINT NS NORTH",
   "latitude": 41.767695,
   "longitude": -71.361189
 },
 {
   "stop_id": "9875",
   "stop_name": "BROAD FS CIRCUIT",
   "latitude": 41.768027,
   "longitude": -71.391892
 },
 {
   "stop_id": "9880",
   "stop_name": "WARWICK FS DARTMOOR",
   "latitude": 41.768675,
   "longitude": -71.405144
 },
 {
   "stop_id": "9895",
   "stop_name": "ELMWOOD BETWEEN CARMAN &  SHARON",
   "latitude": 41.768171,
   "longitude": -71.424512
 },
 {
   "stop_id": "9900",
   "stop_name": "PONTIAC NS ROCKLAND",
   "latitude": 41.76838,
   "longitude": -71.439197
 },
 {
   "stop_id": "9905",
   "stop_name": "RESERVOIR AT 1200 RESERVOIR",
   "latitude": 41.768399,
   "longitude": -71.455966
 },
 {
   "stop_id": "9910",
   "stop_name": "RESERVOIR FS COULTERS",
   "latitude": 41.768368,
   "longitude": -71.456161
 },
 {
   "stop_id": "9955",
   "stop_name": "RESERVOIR NS RANGELY",
   "latitude": 41.769468,
   "longitude": -71.455112
 },
 {
   "stop_id": "9960",
   "stop_name": "BULLOCKS POINT NS LINCOLN",
   "latitude": 41.770921,
   "longitude": -71.361589
 },
 {
   "stop_id": "9970",
   "stop_name": "OAKLAWN FS RALLS",
   "latitude": 41.769993,
   "longitude": -71.470379
 },
 {
   "stop_id": "9980",
   "stop_name": "WARWICK AT STOP&SHOP",
   "latitude": 41.769615,
   "longitude": -71.40541
 },
 {
   "stop_id": "9990",
   "stop_name": "PONTIAC FS FOREST",
   "latitude": 41.769384,
   "longitude": -71.438628
 },
 {
   "stop_id": "9995",
   "stop_name": "RESERVOIR OPP MCDONALDS",
   "latitude": 41.771809,
   "longitude": -71.452731
 },
 {
   "stop_id": "10005",
   "stop_name": "OAKLAWN NS OAKLAWN MANOR DR",
   "latitude": 41.770389,
   "longitude": -71.470381
 },
 {
   "stop_id": "10030",
   "stop_name": "ELMWOOD OPP JOB LOT",
   "latitude": 41.770958,
   "longitude": -71.423505
 },
 {
   "stop_id": "10045",
   "stop_name": "WARWICK AT 222 WARWICK",
   "latitude": 41.77115,
   "longitude": -71.405261
 },
 {
   "stop_id": "10055",
   "stop_name": "ELMWOOD MIDBLOCK PRICERITE",
   "latitude": 41.771058,
   "longitude": -71.423531
 },
 {
   "stop_id": "10075",
   "stop_name": "BROAD NS BERWICK",
   "latitude": 41.771177,
   "longitude": -71.394366
 },
 {
   "stop_id": "10085",
   "stop_name": "WAMPANOAG OPP ARGYLE",
   "latitude": 41.77183,
   "longitude": -71.324882
 },
 {
   "stop_id": "10105",
   "stop_name": "BROAD OPP GLEN",
   "latitude": 41.772294,
   "longitude": -71.39581
 },
 {
   "stop_id": "10120",
   "stop_name": "RESERVOIR NS BRIDGETON",
   "latitude": 41.773259,
   "longitude": -71.451308
 },
 {
   "stop_id": "10145",
   "stop_name": "BROAD NS ROSEWOOD",
   "latitude": 41.772516,
   "longitude": -71.395991
 },
 {
   "stop_id": "10155",
   "stop_name": "PONTIAC FS COLONIAL",
   "latitude": 41.771694,
   "longitude": -71.436972
 },
 {
   "stop_id": "10190",
   "stop_name": "PONTIAC BETWEEN HODSELL & COLONIAL",
   "latitude": 41.772174,
   "longitude": -71.436888
 },
 {
   "stop_id": "10215",
   "stop_name": "BULLOCKS POINT FS WASHINGTON",
   "latitude": 41.772703,
   "longitude": -71.362886
 },
 {
   "stop_id": "10220",
   "stop_name": "OAKLAWN NS WOODSTOCK",
   "latitude": 41.772876,
   "longitude": -71.469073
 },
 {
   "stop_id": "10230",
   "stop_name": "WAMPANOAG AT 1689 WAMPANOAG",
   "latitude": 41.766917,
   "longitude": -71.322601
 },
 {
   "stop_id": "10240",
   "stop_name": "WARWICK FS 174 WARWICK AVE",
   "latitude": 41.772651,
   "longitude": -71.404296
 },
 {
   "stop_id": "10250",
   "stop_name": "OAKLAWN AT 101 OAKLAWN",
   "latitude": 41.77294,
   "longitude": -71.469168
 },
 {
   "stop_id": "10260",
   "stop_name": "WARWICK NS PARK",
   "latitude": 41.773554,
   "longitude": -71.403845
 },
 {
   "stop_id": "10300",
   "stop_name": "WAMPANOAG AT 1472 WAMPANOAG",
   "latitude": 41.77426,
   "longitude": -71.326417
 },
 {
   "stop_id": "10310",
   "stop_name": "RESERVOIR AT MCDONALDS",
   "latitude": 41.771824,
   "longitude": -71.452812
 },
 {
   "stop_id": "10315",
   "stop_name": "ELMWOOD OPP OSSCO BOLT N SCREW",
   "latitude": 41.773009,
   "longitude": -71.422757
 },
 {
   "stop_id": "10320",
   "stop_name": "WAMPANOAG FS PRESIDENT",
   "latitude": 41.772461,
   "longitude": -71.325534
 },
 {
   "stop_id": "10335",
   "stop_name": "WARWICK AT 118 WARWICK",
   "latitude": 41.774248,
   "longitude": -71.403046
 },
 {
   "stop_id": "10345",
   "stop_name": "ELMWOOD FS FENNER",
   "latitude": 41.773656,
   "longitude": -71.422585
 },
 {
   "stop_id": "10360",
   "stop_name": "PONTIAC FS WATERMAN",
   "latitude": 41.77404,
   "longitude": -71.437338
 },
 {
   "stop_id": "10370",
   "stop_name": "OAKLAWN OPP ROYALE APTS",
   "latitude": 41.774543,
   "longitude": -71.468484
 },
 {
   "stop_id": "10380",
   "stop_name": "PONTIAC AT CITGO GAS",
   "latitude": 41.774304,
   "longitude": -71.43724
 },
 {
   "stop_id": "10390",
   "stop_name": "BROAD FS SHAW",
   "latitude": 41.774878,
   "longitude": -71.398444
 },
 {
   "stop_id": "10395",
   "stop_name": "BROAD FS MOORLAND",
   "latitude": 41.77399,
   "longitude": -71.397891
 },
 {
   "stop_id": "10405",
   "stop_name": "RESERVOIR NS NOWELL",
   "latitude": 41.774767,
   "longitude": -71.449806
 },
 {
   "stop_id": "10415",
   "stop_name": "RESERVOIR AT 1001 RESERVOIR",
   "latitude": 41.774401,
   "longitude": -71.450366
 },
 {
   "stop_id": "10440",
   "stop_name": "BROAD AT LIBRARY ENTRANCE",
   "latitude": 41.776124,
   "longitude": -71.399418
 },
 {
   "stop_id": "10455",
   "stop_name": "WARWICK FS VILLA",
   "latitude": 41.775662,
   "longitude": -71.40198
 },
 {
   "stop_id": "10460",
   "stop_name": "WARWICK FS VILLA",
   "latitude": 41.775538,
   "longitude": -71.4023
 },
 {
   "stop_id": "10465",
   "stop_name": "OAKLAWN AT 55 OAKLAWN",
   "latitude": 41.775349,
   "longitude": -71.468533
 },
 {
   "stop_id": "10470",
   "stop_name": "RESERVOIR NS VIKING",
   "latitude": 41.775656,
   "longitude": -71.44903
 },
 {
   "stop_id": "10475",
   "stop_name": "RESERVOIR AT HEMALIN",
   "latitude": 41.776263,
   "longitude": -71.448014
 },
 {
   "stop_id": "10525",
   "stop_name": "ELMWOOD FS PARK",
   "latitude": 41.775981,
   "longitude": -71.421745
 },
 {
   "stop_id": "10530",
   "stop_name": "RESERVOIR NS LOCKMERE",
   "latitude": 41.776643,
   "longitude": -71.447648
 },
 {
   "stop_id": "10540",
   "stop_name": "ELMWOOD NS HATHAWAY",
   "latitude": 41.776593,
   "longitude": -71.421381
 },
 {
   "stop_id": "10565",
   "stop_name": "ROLFE FS AUBURN",
   "latitude": 41.7771,
   "longitude": -71.4364
 },
 {
   "stop_id": "10570",
   "stop_name": "WAMPANOAG AT 1375 WAMPANOAG",
   "latitude": 41.775831,
   "longitude": -71.328304
 },
 {
   "stop_id": "10585",
   "stop_name": "WAMPANOAG NS MOHAWK",
   "latitude": 41.776974,
   "longitude": -71.328889
 },
 {
   "stop_id": "10620",
   "stop_name": "ELMWOOD NS SPOONER",
   "latitude": 41.77819,
   "longitude": -71.421015
 },
 {
   "stop_id": "10630",
   "stop_name": "WARWICK NS BARTLETT",
   "latitude": 41.777483,
   "longitude": -71.40078
 },
 {
   "stop_id": "10640",
   "stop_name": "RESERVOIR NS AUBURN",
   "latitude": 41.777784,
   "longitude": -71.445905
 },
 {
   "stop_id": "10660",
   "stop_name": "ROLFE NS PARK AVE",
   "latitude": 41.778294,
   "longitude": -71.435852
 },
 {
   "stop_id": "10665",
   "stop_name": "WARWICK NS BARTLETT",
   "latitude": 41.777419,
   "longitude": -71.400615
 },
 {
   "stop_id": "10685",
   "stop_name": "NORWOOD FS BROAD",
   "latitude": 41.778068,
   "longitude": -71.399879
 },
 {
   "stop_id": "10690",
   "stop_name": "NORWOOD NS BROAD",
   "latitude": 41.778233,
   "longitude": -71.399938
 },
 {
   "stop_id": "10695",
   "stop_name": "RESERVOIR NS RIVERFARM",
   "latitude": 41.778049,
   "longitude": -71.445688
 },
 {
   "stop_id": "10700",
   "stop_name": "BROAD FS NORWOOD",
   "latitude": 41.77822,
   "longitude": -71.400369
 },
 {
   "stop_id": "10735",
   "stop_name": "CRANSTON OPP UXBRIDGE",
   "latitude": 41.778666,
   "longitude": -71.466972
 },
 {
   "stop_id": "10740",
   "stop_name": "ROLFE FS PONTIAC",
   "latitude": 41.778477,
   "longitude": -71.436012
 },
 {
   "stop_id": "10750",
   "stop_name": "CRANSTON NS UXBRIDGE",
   "latitude": 41.778337,
   "longitude": -71.467164
 },
 {
   "stop_id": "10755",
   "stop_name": "NORWOOD NS PAWTUXET",
   "latitude": 41.778719,
   "longitude": -71.396304
 },
 {
   "stop_id": "10765",
   "stop_name": "NORWOOD FS PAWTUXET",
   "latitude": 41.778881,
   "longitude": -71.396365
 },
 {
   "stop_id": "10770",
   "stop_name": "PONTIAC NS PARK",
   "latitude": 41.779282,
   "longitude": -71.435361
 },
 {
   "stop_id": "10780",
   "stop_name": "PONTIAC FS PARK",
   "latitude": 41.779214,
   "longitude": -71.43527
 },
 {
   "stop_id": "10786",
   "stop_name": "BULLOCKS POINT AT STONEGATE CONDOMINIUMS",
   "latitude": 41.777732,
   "longitude": -71.363255
 },
 {
   "stop_id": "10790",
   "stop_name": "NORWOOD AT 90 NORWOOD",
   "latitude": 41.779127,
   "longitude": -71.394174
 },
 {
   "stop_id": "10810",
   "stop_name": "ELMWOOD FS SAWYER",
   "latitude": 41.778997,
   "longitude": -71.420499
 },
 {
   "stop_id": "10815",
   "stop_name": "BROAD FS WHEELER",
   "latitude": 41.780539,
   "longitude": -71.400849
 },
 {
   "stop_id": "10830",
   "stop_name": "RESERVOIR NS CALAMAN",
   "latitude": 41.779834,
   "longitude": -71.443218
 },
 {
   "stop_id": "10840",
   "stop_name": "WAMPANOAG FS FORBES SQUARE",
   "latitude": 41.779631,
   "longitude": -71.333061
 },
 {
   "stop_id": "10845",
   "stop_name": "WAMPANOAG AT WHJJ TRANSMITTER",
   "latitude": 41.780064,
   "longitude": -71.333227
 },
 {
   "stop_id": "10850",
   "stop_name": "RESERVOIR NS BLAISDELL",
   "latitude": 41.779722,
   "longitude": -71.443198
 },
 {
   "stop_id": "10875",
   "stop_name": "CRANSTON AT 1790 CRANSTON",
   "latitude": 41.780466,
   "longitude": -71.465558
 },
 {
   "stop_id": "10880",
   "stop_name": "CRANSTON NS VERVENNA",
   "latitude": 41.780305,
   "longitude": -71.465711
 },
 {
   "stop_id": "10885",
   "stop_name": "NARRAGANSETT BLVD NS GRAND",
   "latitude": 41.780595,
   "longitude": -71.393323
 },
 {
   "stop_id": "10890",
   "stop_name": "NARRAGANSETT BLVD FS GRAND",
   "latitude": 41.781004,
   "longitude": -71.393224
 },
 {
   "stop_id": "10900",
   "stop_name": "BROAD NS WHEELER",
   "latitude": 41.780383,
   "longitude": -71.400749
 },
 {
   "stop_id": "10910",
   "stop_name": "ELMWOODNS DIXON",
   "latitude": 41.779811,
   "longitude": -71.420329
 },
 {
   "stop_id": "10920",
   "stop_name": "PAWTUCKET AT BANK OF AMERICA",
   "latitude": 41.7809,
   "longitude": -71.363188
 },
 {
   "stop_id": "10925",
   "stop_name": "RESERVOIR FS LEYDEN",
   "latitude": 41.781008,
   "longitude": -71.441687
 },
 {
   "stop_id": "10930",
   "stop_name": "ELMWOOD FS MCKINLEY",
   "latitude": 41.781444,
   "longitude": -71.419596
 },
 {
   "stop_id": "10935",
   "stop_name": "RESERVOIR NS NORFOLK",
   "latitude": 41.780884,
   "longitude": -71.441624
 },
 {
   "stop_id": "10940",
   "stop_name": "PONTIAC OPP MAURAN",
   "latitude": 41.781261,
   "longitude": -71.431801
 },
 {
   "stop_id": "10950",
   "stop_name": "PONTIAC NS BECKWITH",
   "latitude": 41.780955,
   "longitude": -71.432553
 },
 {
   "stop_id": "10955",
   "stop_name": "PAWTUCKET NS INDUSTRIAL CT",
   "latitude": 41.781871,
   "longitude": -71.363474
 },
 {
   "stop_id": "10975",
   "stop_name": "RESERVOIR NS HIGH SCHOOL AVE",
   "latitude": 41.781909,
   "longitude": -71.440159
 },
 {
   "stop_id": "10985",
   "stop_name": "ELMWOOD FS WHITNEY",
   "latitude": 41.781914,
   "longitude": -71.419648
 },
 {
   "stop_id": "10990",
   "stop_name": "CRANSTON OPP 1755 CRANSTON",
   "latitude": 41.782621,
   "longitude": -71.464849
 },
 {
   "stop_id": "11005",
   "stop_name": "RESERVOIR NS LAMBERT",
   "latitude": 41.782551,
   "longitude": -71.439453
 },
 {
   "stop_id": "11015",
   "stop_name": "CRANSTON NS PARK",
   "latitude": 41.782962,
   "longitude": -71.464866
 },
 {
   "stop_id": "11022",
   "stop_name": "BROAD NS ARMINGTON",
   "latitude": 41.782913,
   "longitude": -71.401083
 },
 {
   "stop_id": "11030",
   "stop_name": "PAWTUCKET AT CONTRACTORS SUPPLY",
   "latitude": 41.7832,
   "longitude": -71.363446
 },
 {
   "stop_id": "11035",
   "stop_name": "CRANSTON FS PARK",
   "latitude": 41.783535,
   "longitude": -71.464606
 },
 {
   "stop_id": "11040",
   "stop_name": "RESERVOIR NS LEGION WAY",
   "latitude": 41.783257,
   "longitude": -71.438533
 },
 {
   "stop_id": "11045",
   "stop_name": "NARRAGANSETT BLVD NS ARMINGTON",
   "latitude": 41.783425,
   "longitude": -71.39426
 },
 {
   "stop_id": "11060",
   "stop_name": "NARRAGANSETT BLVD NS NARRAGANSETT",
   "latitude": 41.783962,
   "longitude": -71.394186
 },
 {
   "stop_id": "11065",
   "stop_name": "RESERVOIR NS BECKWITH",
   "latitude": 41.784189,
   "longitude": -71.43697
 },
 {
   "stop_id": "11070",
   "stop_name": "RESERVOIR NS BURNSIDE",
   "latitude": 41.783931,
   "longitude": -71.43755
 },
 {
   "stop_id": "11075",
   "stop_name": "ELMWOOD OPP CARLISLE",
   "latitude": 41.784095,
   "longitude": -71.418774
 },
 {
   "stop_id": "11080",
   "stop_name": "ELMWOOD NS CARLISLE",
   "latitude": 41.784114,
   "longitude": -71.418934
 },
 {
   "stop_id": "11085",
   "stop_name": "PONTIAC OPP BRANDON",
   "latitude": 41.784438,
   "longitude": -71.43119
 },
 {
   "stop_id": "11095",
   "stop_name": "CRANSTON NS AMERICA",
   "latitude": 41.784454,
   "longitude": -71.464312
 },
 {
   "stop_id": "11100",
   "stop_name": "BROAD OPP ARMINGTON",
   "latitude": 41.783106,
   "longitude": -71.401188
 },
 {
   "stop_id": "11110",
   "stop_name": "PAWTUCKET AVE OPP 3348 PAWTUCKET",
   "latitude": 41.782986,
   "longitude": -71.363563
 },
 {
   "stop_id": "11115",
   "stop_name": "CRANSTON NS KNIGHT",
   "latitude": 41.784433,
   "longitude": -71.464431
 },
 {
   "stop_id": "11135",
   "stop_name": "DYER FS PARK",
   "latitude": 41.784509,
   "longitude": -71.457036
 },
 {
   "stop_id": "11150",
   "stop_name": "RESERVOIR NS WILLIS",
   "latitude": 41.784861,
   "longitude": -71.436273
 },
 {
   "stop_id": "11155",
   "stop_name": "PONTIAC FS BRANDON",
   "latitude": 41.784589,
   "longitude": -71.43109
 },
 {
   "stop_id": "11170",
   "stop_name": "RESERVOIR FS PRESTON",
   "latitude": 41.785147,
   "longitude": -71.435549
 },
 {
   "stop_id": "11185",
   "stop_name": "DYER FS POCASSET VILLAGE",
   "latitude": 41.784574,
   "longitude": -71.457126
 },
 {
   "stop_id": "11195",
   "stop_name": "AMFLEX NS COMSTOCK",
   "latitude": 41.785283,
   "longitude": -71.51558
 },
 {
   "stop_id": "11210",
   "stop_name": "NARRAGANSETT BLVD FS HARBORSIDE BLVD",
   "latitude": 41.785919,
   "longitude": -71.394861
 },
 {
   "stop_id": "11220",
   "stop_name": "PAWTUCKET FS WHEELER",
   "latitude": 41.786067,
   "longitude": -71.363887
 },
 {
   "stop_id": "11225",
   "stop_name": "RESERVOIR NS CARLETON",
   "latitude": 41.78565,
   "longitude": -71.435146
 },
 {
   "stop_id": "11230",
   "stop_name": "BROAD FS MONTGOMERY",
   "latitude": 41.785574,
   "longitude": -71.401616
 },
 {
   "stop_id": "11240",
   "stop_name": "BROAD FS MONTGOMERY",
   "latitude": 41.786141,
   "longitude": -71.401675
 },
 {
   "stop_id": "11250",
   "stop_name": "ELMWOOD AT ROGER WILLIAMS PARK",
   "latitude": 41.785939,
   "longitude": -71.41963
 },
 {
   "stop_id": "11255",
   "stop_name": "ELMWOOD AT ROGER WILLIAMS PARK ENTRANCE",
   "latitude": 41.78641,
   "longitude": -71.419669
 },
 {
   "stop_id": "11260",
   "stop_name": "CRANSTON NS MASSACHUSETTS",
   "latitude": 41.78606,
   "longitude": -71.46389
 },
 {
   "stop_id": "11265",
   "stop_name": "SAILOR WAY NS AMFLEX",
   "latitude": 41.786386,
   "longitude": -71.509791
 },
 {
   "stop_id": "11270",
   "stop_name": "CRANSTON NS MATTHEWSON",
   "latitude": 41.786423,
   "longitude": -71.463868
 },
 {
   "stop_id": "11275",
   "stop_name": "NARRAGANSETT BLVD FS MONTGOMERY",
   "latitude": 41.78604,
   "longitude": -71.395084
 },
 {
   "stop_id": "11285",
   "stop_name": "PAWTUCKET OPP VILLAGE GREEN",
   "latitude": 41.786644,
   "longitude": -71.364138
 },
 {
   "stop_id": "11290",
   "stop_name": "DYER AT 870 DYER",
   "latitude": 41.787501,
   "longitude": -71.455994
 },
 {
   "stop_id": "11295",
   "stop_name": "DYER AT 881 DYER",
   "latitude": 41.786545,
   "longitude": -71.456034
 },
 {
   "stop_id": "11310",
   "stop_name": "PONTIAC FS RUTHERGLEN",
   "latitude": 41.787531,
   "longitude": -71.431435
 },
 {
   "stop_id": "11330",
   "stop_name": "PONTIAC NS RICHFIELD",
   "latitude": 41.78614,
   "longitude": -71.431645
 },
 {
   "stop_id": "11335",
   "stop_name": "EDDY NS MORTON",
   "latitude": 41.78957,
   "longitude": -71.403042
 },
 {
   "stop_id": "11340",
   "stop_name": "WAMPANOAG OPP 600 WAMPANOAG",
   "latitude": 41.790814,
   "longitude": -71.336598
 },
 {
   "stop_id": "11350",
   "stop_name": "EDDY NS VERMONT",
   "latitude": 41.787739,
   "longitude": -71.402504
 },
 {
   "stop_id": "11355",
   "stop_name": "NARRAGANSETT BLVD NS WASHINGTON",
   "latitude": 41.787848,
   "longitude": -71.395527
 },
 {
   "stop_id": "11360",
   "stop_name": "WAMPANOAG AT UTILITY POLE 87 1/2",
   "latitude": 41.786215,
   "longitude": -71.333351
 },
 {
   "stop_id": "11375",
   "stop_name": "DYER AT 830 DYER",
   "latitude": 41.789009,
   "longitude": -71.4567
 },
 {
   "stop_id": "11385",
   "stop_name": "CRANSTON NS BATCHELLOR",
   "latitude": 41.788113,
   "longitude": -71.463237
 },
 {
   "stop_id": "11395",
   "stop_name": "CRANSTON OPP BATCHELLOR",
   "latitude": 41.788074,
   "longitude": -71.463148
 },
 {
   "stop_id": "11400",
   "stop_name": "PONTIAC FS RESERVOIR",
   "latitude": 41.787815,
   "longitude": -71.431467
 },
 {
   "stop_id": "11420",
   "stop_name": "EDDY FS CALIFORNIA",
   "latitude": 41.788375,
   "longitude": -71.402563
 },
 {
   "stop_id": "11435",
   "stop_name": "PAWTUCKET OPP WATER VIEW",
   "latitude": 41.788205,
   "longitude": -71.364326
 },
 {
   "stop_id": "11440",
   "stop_name": "PAWTUCKET OPP BAYVIEW SCHOOL",
   "latitude": 41.78927,
   "longitude": -71.364873
 },
 {
   "stop_id": "11465",
   "stop_name": "PLAINFIELD FS SAILOR WAY",
   "latitude": 41.788703,
   "longitude": -71.507889
 },
 {
   "stop_id": "11485",
   "stop_name": "WAMPANOAG AT MOBIL GAS STATION",
   "latitude": 41.789554,
   "longitude": -71.333269
 },
 {
   "stop_id": "11490",
   "stop_name": "RESERVOIR NS ROGER WILLIAMS",
   "latitude": 41.789245,
   "longitude": -71.429915
 },
 {
   "stop_id": "11495",
   "stop_name": "PLAINFIELD NS SIMMONSVILLE",
   "latitude": 41.78918,
   "longitude": -71.504541
 },
 {
   "stop_id": "11510",
   "stop_name": "ELMWOOD FS CADILLAC",
   "latitude": 41.789451,
   "longitude": -71.421333
 },
 {
   "stop_id": "11515",
   "stop_name": "CRANSTON NS HAVE",
   "latitude": 41.789736,
   "longitude": -71.462335
 },
 {
   "stop_id": "11520",
   "stop_name": "CRANSTON OPP VALLONE",
   "latitude": 41.789386,
   "longitude": -71.462614
 },
 {
   "stop_id": "11530",
   "stop_name": "ELMWOOD FS HEMPSTEAD",
   "latitude": 41.789447,
   "longitude": -71.421644
 },
 {
   "stop_id": "11535",
   "stop_name": "CARR STREET (R-LINE)",
   "latitude": 41.789596,
   "longitude": -71.404727
 },
 {
   "stop_id": "11540",
   "stop_name": "RESERVOIR OPP ROGER WILLIAMS",
   "latitude": 41.789266,
   "longitude": -71.430208
 },
 {
   "stop_id": "11550",
   "stop_name": "PAWTUCKET AT BAYVIEW SCHOOL",
   "latitude": 41.789583,
   "longitude": -71.364829
 },
 {
   "stop_id": "11555",
   "stop_name": "ALLENS AT 934 ALLENS",
   "latitude": 41.789667,
   "longitude": -71.396096
 },
 {
   "stop_id": "11570",
   "stop_name": "CRANSTON FS FLORIDA",
   "latitude": 41.789832,
   "longitude": -71.459942
 },
 {
   "stop_id": "11575",
   "stop_name": "EDDY BETWEEN CAROLINA & NEW YORK",
   "latitude": 41.790143,
   "longitude": -71.403085
 },
 {
   "stop_id": "11590",
   "stop_name": "CRANSTON OPP FLORIDA",
   "latitude": 41.790013,
   "longitude": -71.46045
 },
 {
   "stop_id": "11610",
   "stop_name": "CRANSTON NS DYER",
   "latitude": 41.790502,
   "longitude": -71.456549
 },
 {
   "stop_id": "11615",
   "stop_name": "CRANSTON NS BYRON",
   "latitude": 41.790429,
   "longitude": -71.456557
 },
 {
   "stop_id": "11620",
   "stop_name": "PLAINFIELD NS INDEPENDENCE WAY",
   "latitude": 41.789674,
   "longitude": -71.501118
 },
 {
   "stop_id": "11650",
   "stop_name": "CRANSTON NS VICTORIA",
   "latitude": 41.790749,
   "longitude": -71.454114
 },
 {
   "stop_id": "11655",
   "stop_name": "RESERVOIR OPP DELMAR",
   "latitude": 41.790413,
   "longitude": -71.429027
 },
 {
   "stop_id": "11660",
   "stop_name": "CRANSTON NS STANDISH",
   "latitude": 41.790909,
   "longitude": -71.453
 },
 {
   "stop_id": "11670",
   "stop_name": "CRANSTON NS STANDISH",
   "latitude": 41.790766,
   "longitude": -71.453278
 },
 {
   "stop_id": "11680",
   "stop_name": "ALLENS NS GEORGIA",
   "latitude": 41.791906,
   "longitude": -71.39683
 },
 {
   "stop_id": "11695",
   "stop_name": "CRANSTON NS GANSETT",
   "latitude": 41.791463,
   "longitude": -71.452052
 },
 {
   "stop_id": "11700",
   "stop_name": "CITIZENS OPERATIONS CTR - E PROVIDENCE",
   "latitude": 41.790121,
   "longitude": -71.356338
 },
 {
   "stop_id": "11715",
   "stop_name": "WAMPANOAG OPP GATES OF HEAVEN",
   "latitude": 41.791481,
   "longitude": -71.344402
 },
 {
   "stop_id": "11720",
   "stop_name": "ALLENS FS CALIFORNIA",
   "latitude": 41.789285,
   "longitude": -71.396178
 },
 {
   "stop_id": "11725",
   "stop_name": "ELMWOOD OPP RIPTA HQ",
   "latitude": 41.792051,
   "longitude": -71.422788
 },
 {
   "stop_id": "11730",
   "stop_name": "PLAINFIELD FS NARDOLILLO",
   "latitude": 41.791098,
   "longitude": -71.496822
 },
 {
   "stop_id": "11735",
   "stop_name": "PLAINFIELD OPP NARDOLILLO",
   "latitude": 41.79101,
   "longitude": -71.496814
 },
 {
   "stop_id": "11740",
   "stop_name": "ELMWOOD OPP THACKERY",
   "latitude": 41.79186,
   "longitude": -71.422911
 },
 {
   "stop_id": "11745",
   "stop_name": "CRANSTON AT 1260 CRANSTON",
   "latitude": 41.791435,
   "longitude": -71.451882
 },
 {
   "stop_id": "11750",
   "stop_name": "PLAINFIELD FS CLAIBORNE PELL MANOR",
   "latitude": 41.791482,
   "longitude": -71.494008
 },
 {
   "stop_id": "11760",
   "stop_name": "PLAINFIELD FS PLAINFIELD CIR",
   "latitude": 41.791451,
   "longitude": -71.489921
 },
 {
   "stop_id": "11770",
   "stop_name": "PAWTUCKET NS BOND",
   "latitude": 41.791767,
   "longitude": -71.365686
 },
 {
   "stop_id": "11775",
   "stop_name": "PLAINFIELD FS BLUE JAY WAY",
   "latitude": 41.791554,
   "longitude": -71.49178
 },
 {
   "stop_id": "11780",
   "stop_name": "RESERVOIR FS ARDOENE",
   "latitude": 41.791778,
   "longitude": -71.427989
 },
 {
   "stop_id": "11810",
   "stop_name": "EDDY BETWEEN CHAPMAN & TORONTO",
   "latitude": 41.791868,
   "longitude": -71.403495
 },
 {
   "stop_id": "11815",
   "stop_name": "CITIZENS WAY NS TRIPPS LN",
   "latitude": 41.791094,
   "longitude": -71.354429
 },
 {
   "stop_id": "11820",
   "stop_name": "WAMPANOAG AT 610 WAMPANOAG",
   "latitude": 41.791103,
   "longitude": -71.336213
 },
 {
   "stop_id": "11825",
   "stop_name": "TRIPPS LN NS ORCHARD VIEW MANOR",
   "latitude": 41.79134,
   "longitude": -71.354289
 },
 {
   "stop_id": "11835",
   "stop_name": "RESERVOIR NS ARDOENE",
   "latitude": 41.791913,
   "longitude": -71.428113
 },
 {
   "stop_id": "11840",
   "stop_name": "CRANSTON FS HOWARD",
   "latitude": 41.792529,
   "longitude": -71.451251
 },
 {
   "stop_id": "11860",
   "stop_name": "PAWTUCKET AT 3044 PAWTUCKET",
   "latitude": 41.792408,
   "longitude": -71.365233
 },
 {
   "stop_id": "11865",
   "stop_name": "PLAINFIELD FS PEZZULO",
   "latitude": 41.792526,
   "longitude": -71.488421
 },
 {
   "stop_id": "11870",
   "stop_name": "ALLENS NS GEORGIA",
   "latitude": 41.792374,
   "longitude": -71.397217
 },
 {
   "stop_id": "11875",
   "stop_name": "TRIPPS LN OPP MADELINE",
   "latitude": 41.792115,
   "longitude": -71.353956
 },
 {
   "stop_id": "11880",
   "stop_name": "ROGER WILLIAMS PARK (R-LINE)",
   "latitude": 41.792248,
   "longitude": -71.40721
 },
 {
   "stop_id": "11885",
   "stop_name": "CRANSTON NS PURITAN",
   "latitude": 41.792959,
   "longitude": -71.451188
 },
 {
   "stop_id": "11890",
   "stop_name": "ROGER WILLIAMS PARK (R-LINE)",
   "latitude": 41.792973,
   "longitude": -71.408311
 },
 {
   "stop_id": "11900",
   "stop_name": "ELMWOOD OPP WARRINGTON",
   "latitude": 41.793371,
   "longitude": -71.423731
 },
 {
   "stop_id": "11910",
   "stop_name": "PLAINFIELD AT 1469 PLAINFIELD",
   "latitude": 41.793702,
   "longitude": -71.486798
 },
 {
   "stop_id": "11925",
   "stop_name": "ELMWOOD FS WARRINGTON",
   "latitude": 41.793509,
   "longitude": -71.423633
 },
 {
   "stop_id": "11930",
   "stop_name": "WAMPANOAG AT GATES OF HEAVEN",
   "latitude": 41.791919,
   "longitude": -71.344223
 },
 {
   "stop_id": "11945",
   "stop_name": "EDDY NS JOHNSON",
   "latitude": 41.79339,
   "longitude": -71.404099
 },
 {
   "stop_id": "11950",
   "stop_name": "PLAINFIELD AT YEOMAN",
   "latitude": 41.793604,
   "longitude": -71.486724
 },
 {
   "stop_id": "11960",
   "stop_name": "RESERVOIR FS NARRAGANSETT",
   "latitude": 41.794317,
   "longitude": -71.426624
 },
 {
   "stop_id": "11965",
   "stop_name": "RESERVOIR NS ALGONQUIN",
   "latitude": 41.793697,
   "longitude": -71.427014
 },
 {
   "stop_id": "11970",
   "stop_name": "TRIPPS LN AT 15 TRIPPS LANE",
   "latitude": 41.794193,
   "longitude": -71.353347
 },
 {
   "stop_id": "11975",
   "stop_name": "ALLENS NS BAKER",
   "latitude": 41.79395,
   "longitude": -71.397702
 },
 {
   "stop_id": "11985",
   "stop_name": "CADILLAC OPP RODMAN (COLONY HOUSE)",
   "latitude": 41.794165,
   "longitude": -71.416191
 },
 {
   "stop_id": "11990",
   "stop_name": "CRANSTON OPP BURNHAM",
   "latitude": 41.794085,
   "longitude": -71.450399
 },
 {
   "stop_id": "12005",
   "stop_name": "PAWTUCKET OPP MOUNTAIN",
   "latitude": 41.79412,
   "longitude": -71.364684
 },
 {
   "stop_id": "12015",
   "stop_name": "TRIPPS LN OPP CITIZENS BANK",
   "latitude": 41.794662,
   "longitude": -71.353405
 },
 {
   "stop_id": "12020",
   "stop_name": "PAWTUCKET NS MOUNTAIN",
   "latitude": 41.794619,
   "longitude": -71.364651
 },
 {
   "stop_id": "12045",
   "stop_name": "BROAD AT PRAIRIE",
   "latitude": 41.794612,
   "longitude": -71.410082
 },
 {
   "stop_id": "12050",
   "stop_name": "ALLENS OPP ELLENFIELD",
   "latitude": 41.794334,
   "longitude": -71.397665
 },
 {
   "stop_id": "12055",
   "stop_name": "ALLENS NS ERNEST",
   "latitude": 41.795271,
   "longitude": -71.39822
 },
 {
   "stop_id": "12065",
   "stop_name": "CRANSTON OPP 1141 CRANSTON",
   "latitude": 41.795076,
   "longitude": -71.449655
 },
 {
   "stop_id": "12070",
   "stop_name": "EARLY STREET (R-LINE)",
   "latitude": 41.79591,
   "longitude": -71.411875
 },
 {
   "stop_id": "12075",
   "stop_name": "PLAINFIELD OPP MILL",
   "latitude": 41.795452,
   "longitude": -71.483732
 },
 {
   "stop_id": "12090",
   "stop_name": "ELMWOOD OPP LENOX",
   "latitude": 41.795236,
   "longitude": -71.424775
 },
 {
   "stop_id": "12095",
   "stop_name": "CHESTNUT HILL FS LAUREL HILL",
   "latitude": 41.795443,
   "longitude": -71.452884
 },
 {
   "stop_id": "12105",
   "stop_name": "ELMWOOD NS LENOX",
   "latitude": 41.795032,
   "longitude": -71.424457
 },
 {
   "stop_id": "12110",
   "stop_name": "TRIPPS LN NS WAMPANOAG TRAIL",
   "latitude": 41.795715,
   "longitude": -71.352944
 },
 {
   "stop_id": "12115",
   "stop_name": "TRIPPS LN FS WAMPANOAG TRAIL",
   "latitude": 41.795579,
   "longitude": -71.353166
 },
 {
   "stop_id": "12120",
   "stop_name": "DYER NS CHESTNUT HILL",
   "latitude": 41.795706,
   "longitude": -71.457319
 },
 {
   "stop_id": "12125",
   "stop_name": "DYER OPP CHESTNUT HILL",
   "latitude": 41.795912,
   "longitude": -71.457567
 },
 {
   "stop_id": "12135",
   "stop_name": "BROAD FS EARLY",
   "latitude": 41.795695,
   "longitude": -71.411475
 },
 {
   "stop_id": "12140",
   "stop_name": "CRANSTON FS SENECA",
   "latitude": 41.795713,
   "longitude": -71.449511
 },
 {
   "stop_id": "12150",
   "stop_name": "RESERVOIR AT ONE RESERVOIR AVENUE",
   "latitude": 41.796895,
   "longitude": -71.426094
 },
 {
   "stop_id": "12155",
   "stop_name": "RESERVOIR FS ADELAIDE",
   "latitude": 41.796262,
   "longitude": -71.425953
 },
 {
   "stop_id": "12165",
   "stop_name": "LAUREL HILL NS LOOKOUT",
   "latitude": 41.796106,
   "longitude": -71.45254
 },
 {
   "stop_id": "12170",
   "stop_name": "CRANSTON AT 1070 CRANSTON",
   "latitude": 41.797367,
   "longitude": -71.448413
 },
 {
   "stop_id": "12180",
   "stop_name": "CHESTNUT HILL AT 122 CHESTNUT HILL",
   "latitude": 41.796028,
   "longitude": -71.455352
 },
 {
   "stop_id": "12185",
   "stop_name": "PLAINFIELD FS ATWOOD",
   "latitude": 41.795865,
   "longitude": -71.483153
 },
 {
   "stop_id": "12210",
   "stop_name": "PLAINFIELD NS CLEMENCE",
   "latitude": 41.796183,
   "longitude": -71.482101
 },
 {
   "stop_id": "12230",
   "stop_name": "PAWTUCKET NS IVAN",
   "latitude": 41.796186,
   "longitude": -71.363978
 },
 {
   "stop_id": "12245",
   "stop_name": "ALVAREZ SCHOOL",
   "latitude": 41.795244,
   "longitude": -71.42933
 },
 {
   "stop_id": "12265",
   "stop_name": "ELMWOOD NS ATLANTIC",
   "latitude": 41.796616,
   "longitude": -71.425474
 },
 {
   "stop_id": "12275",
   "stop_name": "PLAINFIELD AT 1350 PLAINFIELD",
   "latitude": 41.796639,
   "longitude": -71.480483
 },
 {
   "stop_id": "12320",
   "stop_name": "PLAINFIELD OPP FLETCHER",
   "latitude": 41.796928,
   "longitude": -71.479772
 },
 {
   "stop_id": "12325",
   "stop_name": "ALLENS FS 642 ALLENS",
   "latitude": 41.796985,
   "longitude": -71.398597
 },
 {
   "stop_id": "12335",
   "stop_name": "ALLENS OPP I-95N ON RAMP",
   "latitude": 41.80056,
   "longitude": -71.400451
 },
 {
   "stop_id": "12355",
   "stop_name": "PLAINFIELD OPP SCHOOL",
   "latitude": 41.79729,
   "longitude": -71.478887
 },
 {
   "stop_id": "12365",
   "stop_name": "PAWTUCKET NS HEATH",
   "latitude": 41.797494,
   "longitude": -71.363713
 },
 {
   "stop_id": "12370",
   "stop_name": "EDDY NS PAVILION",
   "latitude": 41.797295,
   "longitude": -71.405053
 },
 {
   "stop_id": "12385",
   "stop_name": "EDDY FS PAVILION",
   "latitude": 41.797334,
   "longitude": -71.405205
 },
 {
   "stop_id": "12395",
   "stop_name": "DYER AT 562 DYER",
   "latitude": 41.797626,
   "longitude": -71.457671
 },
 {
   "stop_id": "12400",
   "stop_name": "ELMWOOD NS ONTARIO",
   "latitude": 41.797604,
   "longitude": -71.425834
 },
 {
   "stop_id": "12410",
   "stop_name": "DYER AT 565 DYER",
   "latitude": 41.79775,
   "longitude": -71.4578
 },
 {
   "stop_id": "12415",
   "stop_name": "CRANSTON FS DOVER",
   "latitude": 41.797434,
   "longitude": -71.448587
 },
 {
   "stop_id": "12435",
   "stop_name": "PAWTUCKET NS WAMPANOAG TRL",
   "latitude": 41.79773,
   "longitude": -71.363434
 },
 {
   "stop_id": "12450",
   "stop_name": "PLAINFIELD AT 1244 PLAINFIELD",
   "latitude": 41.798046,
   "longitude": -71.475836
 },
 {
   "stop_id": "12475",
   "stop_name": "PLAINFIELD NS POCASSET",
   "latitude": 41.798144,
   "longitude": -71.47596
 },
 {
   "stop_id": "12480",
   "stop_name": "THURBERS AVENUE (R-LINE)",
   "latitude": 41.798394,
   "longitude": -71.414778
 },
 {
   "stop_id": "12495",
   "stop_name": "EDDY OPP APPLEGATE",
   "latitude": 41.799083,
   "longitude": -71.405528
 },
 {
   "stop_id": "12500",
   "stop_name": "EDDY NS APPLEGATE",
   "latitude": 41.799188,
   "longitude": -71.405678
 },
 {
   "stop_id": "12545",
   "stop_name": "DYER OPP ELWYN",
   "latitude": 41.798721,
   "longitude": -71.457947
 },
 {
   "stop_id": "12560",
   "stop_name": "LAUREL HILL FS ELWYN",
   "latitude": 41.798532,
   "longitude": -71.452277
 },
 {
   "stop_id": "12570",
   "stop_name": "ALLENS AT LEHIGH METALS CORP",
   "latitude": 41.801888,
   "longitude": -71.40102
 },
 {
   "stop_id": "12575",
   "stop_name": "PLAINFIELD AT 1192 PLAINFIELD",
   "latitude": 41.798657,
   "longitude": -71.473367
 },
 {
   "stop_id": "12580",
   "stop_name": "GARFIELD AVE AT STOP & SHOP",
   "latitude": 41.795586,
   "longitude": -71.443918
 },
 {
   "stop_id": "12581",
   "stop_name": "GARFIELD NS GIBBS PKING LOT",
   "latitude": 41.800858,
   "longitude": -71.441739
 },
 {
   "stop_id": "12582",
   "stop_name": "GARFIELD AVE AT LOWES",
   "latitude": 41.795793,
   "longitude": -71.444103
 },
 {
   "stop_id": "12590",
   "stop_name": "THURBERS AVENUE (R-LINE)",
   "latitude": 41.798155,
   "longitude": -71.414635
 },
 {
   "stop_id": "12605",
   "stop_name": "PAWTUCKET OPP VINCENT",
   "latitude": 41.799178,
   "longitude": -71.362926
 },
 {
   "stop_id": "12625",
   "stop_name": "ELMWOOD OPP REDWING",
   "latitude": 41.799313,
   "longitude": -71.42633
 },
 {
   "stop_id": "12630",
   "stop_name": "PAWTUCKET NS VINCENT",
   "latitude": 41.799153,
   "longitude": -71.363072
 },
 {
   "stop_id": "12635",
   "stop_name": "PRAIRIE FS COLFAX",
   "latitude": 41.799406,
   "longitude": -71.412233
 },
 {
   "stop_id": "12645",
   "stop_name": "CRANSTON FS MCCABE",
   "latitude": 41.799234,
   "longitude": -71.447661
 },
 {
   "stop_id": "12660",
   "stop_name": "PLAINFIELD FS STIMPSON",
   "latitude": 41.799552,
   "longitude": -71.472077
 },
 {
   "stop_id": "12670",
   "stop_name": "CRANSTON OPP BIRCH",
   "latitude": 41.799857,
   "longitude": -71.446954
 },
 {
   "stop_id": "12680",
   "stop_name": "EDDY NS THURBERS",
   "latitude": 41.800199,
   "longitude": -71.405954
 },
 {
   "stop_id": "12685",
   "stop_name": "LAUREL HILL FS GLADSTONE",
   "latitude": 41.799644,
   "longitude": -71.452296
 },
 {
   "stop_id": "12690",
   "stop_name": "EDDY FS THURBERS",
   "latitude": 41.80067,
   "longitude": -71.405944
 },
 {
   "stop_id": "12695",
   "stop_name": "CRANSTON NS BIRCH",
   "latitude": 41.800111,
   "longitude": -71.446991
 },
 {
   "stop_id": "12720",
   "stop_name": "ONTARIO STREET (R-LINE)",
   "latitude": 41.800125,
   "longitude": -71.417112
 },
 {
   "stop_id": "12725",
   "stop_name": "PRAIRIE NS COLFAX",
   "latitude": 41.799416,
   "longitude": -71.412133
 },
 {
   "stop_id": "12735",
   "stop_name": "LAUREL HILL NS ARGYLE",
   "latitude": 41.800281,
   "longitude": -71.452139
 },
 {
   "stop_id": "12750",
   "stop_name": "GARFIELD OPP SANFORD BROWN",
   "latitude": 41.800871,
   "longitude": -71.441511
 },
 {
   "stop_id": "12760",
   "stop_name": "GARFIELD FS CRANSTON",
   "latitude": 41.802491,
   "longitude": -71.441904
 },
 {
   "stop_id": "12763",
   "stop_name": "CRANSTON OPP GARFIELD",
   "latitude": 41.803025,
   "longitude": -71.442373
 },
 {
   "stop_id": "12770",
   "stop_name": "ONTARIO STREET (R-LINE)",
   "latitude": 41.800621,
   "longitude": -71.417589
 },
 {
   "stop_id": "12775",
   "stop_name": "PLAINFIELD AT EVANS",
   "latitude": 41.800672,
   "longitude": -71.470076
 },
 {
   "stop_id": "12795",
   "stop_name": "LAUREL HILL FS WALES",
   "latitude": 41.801306,
   "longitude": -71.452015
 },
 {
   "stop_id": "12800",
   "stop_name": "ELMWOOD OPP HAWTHORNE",
   "latitude": 41.801019,
   "longitude": -71.426316
 },
 {
   "stop_id": "12805",
   "stop_name": "LAUREL HILL FS BRACKEN",
   "latitude": 41.801522,
   "longitude": -71.452132
 },
 {
   "stop_id": "12815",
   "stop_name": "CRANSTON FS WHIPPLE",
   "latitude": 41.801453,
   "longitude": -71.445533
 },
 {
   "stop_id": "12820",
   "stop_name": "PAWTUCKET FS HOWLAND",
   "latitude": 41.801658,
   "longitude": -71.36207
 },
 {
   "stop_id": "12850",
   "stop_name": "DYER OPP 448 DYER",
   "latitude": 41.801704,
   "longitude": -71.458355
 },
 {
   "stop_id": "12855",
   "stop_name": "CRANSTON FS WEBSTER",
   "latitude": 41.80167,
   "longitude": -71.445526
 },
 {
   "stop_id": "12860",
   "stop_name": "PRAIRIE FS OXFORD",
   "latitude": 41.801901,
   "longitude": -71.413219
 },
 {
   "stop_id": "12885",
   "stop_name": "PAWTUCKET NS UNITY",
   "latitude": 41.801931,
   "longitude": -71.362073
 },
 {
   "stop_id": "12895",
   "stop_name": "PLAINFIELD FS MORGAN",
   "latitude": 41.80206,
   "longitude": -71.469323
 },
 {
   "stop_id": "12905",
   "stop_name": "ALLENS NS WARREN",
   "latitude": 41.803494,
   "longitude": -71.401741
 },
 {
   "stop_id": "12910",
   "stop_name": "ALLENS AT I-95N ON RAMP",
   "latitude": 41.800844,
   "longitude": -71.400272
 },
 {
   "stop_id": "12915",
   "stop_name": "PLAINFIELD OPP MORGAN",
   "latitude": 41.802245,
   "longitude": -71.46898
 },
 {
   "stop_id": "12930",
   "stop_name": "EDDY FS ASHMONT",
   "latitude": 41.802396,
   "longitude": -71.406597
 },
 {
   "stop_id": "12935",
   "stop_name": "EDDY OPP ASHMONT",
   "latitude": 41.802353,
   "longitude": -71.40639
 },
 {
   "stop_id": "12950",
   "stop_name": "LAUREL HILL FS MAPLEWOOD",
   "latitude": 41.803201,
   "longitude": -71.452027
 },
 {
   "stop_id": "12960",
   "stop_name": "S BROADWAY OPP MARTIN",
   "latitude": 41.802889,
   "longitude": -71.3741
 },
 {
   "stop_id": "12965",
   "stop_name": "LAUREL HILL FS HEATHER",
   "latitude": 41.80302,
   "longitude": -71.451955
 },
 {
   "stop_id": "12995",
   "stop_name": "CRANSTON NS GARFIELD",
   "latitude": 41.802805,
   "longitude": -71.442741
 },
 {
   "stop_id": "13025",
   "stop_name": "CRANSTON FS WASHINGTON",
   "latitude": 41.803322,
   "longitude": -71.440087
 },
 {
   "stop_id": "13035",
   "stop_name": "ELMWOOD NS BURNETT",
   "latitude": 41.80327,
   "longitude": -71.425915
 },
 {
   "stop_id": "13050",
   "stop_name": "ELMWOOD AT MAWNEY",
   "latitude": 41.803575,
   "longitude": -71.425615
 },
 {
   "stop_id": "13060",
   "stop_name": "PRAIRIE AT 384 PRAIRIE",
   "latitude": 41.80376,
   "longitude": -71.413975
 },
 {
   "stop_id": "13075",
   "stop_name": "PRAIRIE FS POTTERS",
   "latitude": 41.803738,
   "longitude": -71.414088
 },
 {
   "stop_id": "13080",
   "stop_name": "CATAMORE NS JORDAN",
   "latitude": 41.803879,
   "longitude": -71.343008
 },
 {
   "stop_id": "13085",
   "stop_name": "PUBLIC STREET (R-LINE)",
   "latitude": 41.804199,
   "longitude": -71.419327
 },
 {
   "stop_id": "13095",
   "stop_name": "EVERGREEN FS JORDAN",
   "latitude": 41.80397,
   "longitude": -71.344855
 },
 {
   "stop_id": "13100",
   "stop_name": "PAWTUCKET NS WALMER",
   "latitude": 41.803833,
   "longitude": -71.361246
 },
 {
   "stop_id": "13105",
   "stop_name": "PLAINFIELD OPP 983 PLAINFIELD",
   "latitude": 41.804632,
   "longitude": -71.466949
 },
 {
   "stop_id": "13110",
   "stop_name": "ALLENS AT 307 ALLENS",
   "latitude": 41.804909,
   "longitude": -71.402348
 },
 {
   "stop_id": "13120",
   "stop_name": "LAUREL HILL NS WAKEFIELD",
   "latitude": 41.804054,
   "longitude": -71.451888
 },
 {
   "stop_id": "13125",
   "stop_name": "ALLENS NS LEHIGH",
   "latitude": 41.80218,
   "longitude": -71.400865
 },
 {
   "stop_id": "13130",
   "stop_name": "PAWTUCKET OPP WALMER",
   "latitude": 41.803994,
   "longitude": -71.361387
 },
 {
   "stop_id": "13135",
   "stop_name": "PUBLIC STREET (R-LINE)",
   "latitude": 41.804919,
   "longitude": -71.419455
 },
 {
   "stop_id": "13145",
   "stop_name": "CRANSTON FS ANTHONY",
   "latitude": 41.804276,
   "longitude": -71.438753
 },
 {
   "stop_id": "13160",
   "stop_name": "ELMWOOD AT MOORE",
   "latitude": 41.804723,
   "longitude": -71.425304
 },
 {
   "stop_id": "13165",
   "stop_name": "PLAINFIELD NS COOLIDGE",
   "latitude": 41.804646,
   "longitude": -71.466664
 },
 {
   "stop_id": "13175",
   "stop_name": "LAUREL HILL NS FARMINGTON",
   "latitude": 41.805059,
   "longitude": -71.452037
 },
 {
   "stop_id": "13180",
   "stop_name": "DYER OPP MICA",
   "latitude": 41.804305,
   "longitude": -71.458218
 },
 {
   "stop_id": "13225",
   "stop_name": "S BROADWAY FS RIDGE",
   "latitude": 41.804984,
   "longitude": -71.373294
 },
 {
   "stop_id": "13235",
   "stop_name": "S BROADWAY OPP LEE",
   "latitude": 41.805508,
   "longitude": -71.37324
 },
 {
   "stop_id": "13240",
   "stop_name": "PAWTUCKET NS BRIGHTRIDGE",
   "latitude": 41.805683,
   "longitude": -71.360785
 },
 {
   "stop_id": "13245",
   "stop_name": "PRAIRIE AT SARATOGA",
   "latitude": 41.805225,
   "longitude": -71.414616
 },
 {
   "stop_id": "13250",
   "stop_name": "EDDY FS SHERBURNE",
   "latitude": 41.805486,
   "longitude": -71.407118
 },
 {
   "stop_id": "13265",
   "stop_name": "PAWTUCKET NS GARDINER",
   "latitude": 41.805916,
   "longitude": -71.36055
 },
 {
   "stop_id": "13270",
   "stop_name": "CRANSTON NS BENEDICT",
   "latitude": 41.805457,
   "longitude": -71.437373
 },
 {
   "stop_id": "13290",
   "stop_name": "CRANSTON NS WADSWORTH",
   "latitude": 41.805672,
   "longitude": -71.436928
 },
 {
   "stop_id": "13295",
   "stop_name": "PLAINFIELD OPP 928 PLAINFIELD",
   "latitude": 41.805528,
   "longitude": -71.465501
 },
 {
   "stop_id": "13310",
   "stop_name": "POCASSET NS ALTO",
   "latitude": 41.805593,
   "longitude": -71.457618
 },
 {
   "stop_id": "13340",
   "stop_name": "EDDY FS TRASK",
   "latitude": 41.80474,
   "longitude": -71.407087
 },
 {
   "stop_id": "13345",
   "stop_name": "UNION AT 429 UNION",
   "latitude": 41.806311,
   "longitude": -71.451876
 },
 {
   "stop_id": "13355",
   "stop_name": "UNION NS TERRACE",
   "latitude": 41.806285,
   "longitude": -71.450046
 },
 {
   "stop_id": "13360",
   "stop_name": "LAUREL HILL NS UNION",
   "latitude": 41.805877,
   "longitude": -71.452174
 },
 {
   "stop_id": "13365",
   "stop_name": "UNION NS TERRACE",
   "latitude": 41.806182,
   "longitude": -71.450167
 },
 {
   "stop_id": "13370",
   "stop_name": "POCASSET NS UNION",
   "latitude": 41.806442,
   "longitude": -71.457106
 },
 {
   "stop_id": "13385",
   "stop_name": "PARKIS AVENUE (R-LINE)",
   "latitude": 41.809151,
   "longitude": -71.420772
 },
 {
   "stop_id": "13405",
   "stop_name": "ELMWOOD NS PLENTY",
   "latitude": 41.807089,
   "longitude": -71.42475
 },
 {
   "stop_id": "13415",
   "stop_name": "UNION NS WEBSTER",
   "latitude": 41.806766,
   "longitude": -71.447699
 },
 {
   "stop_id": "13425",
   "stop_name": "UNION NS WEBSTER",
   "latitude": 41.806914,
   "longitude": -71.447386
 },
 {
   "stop_id": "13430",
   "stop_name": "ALLENS FS WARREN",
   "latitude": 41.8035,
   "longitude": -71.401474
 },
 {
   "stop_id": "13435",
   "stop_name": "S BROADWAY OPP 1253 S BROADWAY",
   "latitude": 41.807274,
   "longitude": -71.372493
 },
 {
   "stop_id": "13450",
   "stop_name": "PLAINFIELD NS FARMINGTON",
   "latitude": 41.80694,
   "longitude": -71.46413
 },
 {
   "stop_id": "13455",
   "stop_name": "PLENTY STREET - SAINT JOSEPH'S HOSPITAL (R-LINE)",
   "latitude": 41.806588,
   "longitude": -71.420011
 },
 {
   "stop_id": "13460",
   "stop_name": "S BROADWAY FS SETH",
   "latitude": 41.807195,
   "longitude": -71.372641
 },
 {
   "stop_id": "13470",
   "stop_name": "CRANSTON FS LINWOOD",
   "latitude": 41.807254,
   "longitude": -71.435477
 },
 {
   "stop_id": "13475",
   "stop_name": "CRANSTON NS LINWOOD",
   "latitude": 41.807316,
   "longitude": -71.435524
 },
 {
   "stop_id": "13480",
   "stop_name": "UNION OPP PRISCILLA",
   "latitude": 41.807256,
   "longitude": -71.445845
 },
 {
   "stop_id": "13485",
   "stop_name": "ALLENS NS CHEATERS",
   "latitude": 41.807548,
   "longitude": -71.403527
 },
 {
   "stop_id": "13495",
   "stop_name": "EDDY NS PUBLIC",
   "latitude": 41.807605,
   "longitude": -71.407268
 },
 {
   "stop_id": "13500",
   "stop_name": "PUBLIC NS EDDY",
   "latitude": 41.807479,
   "longitude": -71.406924
 },
 {
   "stop_id": "13505",
   "stop_name": "UNION NS PRISCILLA",
   "latitude": 41.807379,
   "longitude": -71.445713
 },
 {
   "stop_id": "13515",
   "stop_name": "WARREN FS HIGHLAND",
   "latitude": 41.807772,
   "longitude": -71.341934
 },
 {
   "stop_id": "13525",
   "stop_name": "POCASSET NS SOPHIA",
   "latitude": 41.807621,
   "longitude": -71.456358
 },
 {
   "stop_id": "13535",
   "stop_name": "WARREN NS HIGHLAND",
   "latitude": 41.807773,
   "longitude": -71.342212
 },
 {
   "stop_id": "13550",
   "stop_name": "CCRI (PROVIDENCE CAMPUS)",
   "latitude": 41.807713,
   "longitude": -71.412881
 },
 {
   "stop_id": "13555",
   "stop_name": "POCASSET OPP SOPHIA",
   "latitude": 41.807373,
   "longitude": -71.456389
 },
 {
   "stop_id": "13565",
   "stop_name": "ALLENS OPP 253 ALLENS",
   "latitude": 41.807239,
   "longitude": -71.403114
 },
 {
   "stop_id": "13575",
   "stop_name": "PLAINFIELD OPP 861 PLAINFIELD",
   "latitude": 41.808222,
   "longitude": -71.463385
 },
 {
   "stop_id": "13585",
   "stop_name": "UNION OPP CUMERFORD",
   "latitude": 41.808006,
   "longitude": -71.442975
 },
 {
   "stop_id": "13595",
   "stop_name": "PAWTUCKET NS RICE",
   "latitude": 41.807923,
   "longitude": -71.359835
 },
 {
   "stop_id": "13600",
   "stop_name": "PAWTUCKET NS HILLSIDE",
   "latitude": 41.808174,
   "longitude": -71.359956
 },
 {
   "stop_id": "13610",
   "stop_name": "UNION NS ATWOOD",
   "latitude": 41.808316,
   "longitude": -71.442276
 },
 {
   "stop_id": "13620",
   "stop_name": "S BROADWAY FS FORT",
   "latitude": 41.80855,
   "longitude": -71.372187
 },
 {
   "stop_id": "13635",
   "stop_name": "CRANSTON NS WAVERLY",
   "latitude": 41.808463,
   "longitude": -71.434516
 },
 {
   "stop_id": "13645",
   "stop_name": "S BROADWAY OPP 1149 S BROADWAY",
   "latitude": 41.808281,
   "longitude": -71.372168
 },
 {
   "stop_id": "13650",
   "stop_name": "STANIFORD NS WILLARD",
   "latitude": 41.808646,
   "longitude": -71.411755
 },
 {
   "stop_id": "13665",
   "stop_name": "POCASSET OPP WESTERLY",
   "latitude": 41.808845,
   "longitude": -71.455476
 },
 {
   "stop_id": "13685",
   "stop_name": "CRANSTON NS BELLVUE",
   "latitude": 41.808843,
   "longitude": -71.434045
 },
 {
   "stop_id": "13695",
   "stop_name": "UNION FS LINWOOD",
   "latitude": 41.808999,
   "longitude": -71.439278
 },
 {
   "stop_id": "13700",
   "stop_name": "UNION OPP LINWOOD",
   "latitude": 41.809027,
   "longitude": -71.439533
 },
 {
   "stop_id": "13705",
   "stop_name": "WATERMAN OPP STATE",
   "latitude": 41.808921,
   "longitude": -71.341579
 },
 {
   "stop_id": "13710",
   "stop_name": "PARKIS AVENUE (R-LINE)",
   "latitude": 41.809033,
   "longitude": -71.420871
 },
 {
   "stop_id": "13715",
   "stop_name": "WATERMAN FS STATE",
   "latitude": 41.809076,
   "longitude": -71.341738
 },
 {
   "stop_id": "13735",
   "stop_name": "POCASSET OPP DANIEL",
   "latitude": 41.809133,
   "longitude": -71.455093
 },
 {
   "stop_id": "13765",
   "stop_name": "PAWTUCKET OPP BALDWIN",
   "latitude": 41.810115,
   "longitude": -71.359261
 },
 {
   "stop_id": "13770",
   "stop_name": "WATERMAN OPP 990 WATERMAN",
   "latitude": 41.809778,
   "longitude": -71.343842
 },
 {
   "stop_id": "13795",
   "stop_name": "ELMWOOD FS W. FRIENDSHIP",
   "latitude": 41.810158,
   "longitude": -71.423752
 },
 {
   "stop_id": "13805",
   "stop_name": "ELLERY NS WAVERLY",
   "latitude": 41.809927,
   "longitude": -71.438424
 },
 {
   "stop_id": "13825",
   "stop_name": "PLAINFIELD AT 825 PLAINFIELD",
   "latitude": 41.808629,
   "longitude": -71.463352
 },
 {
   "stop_id": "13830",
   "stop_name": "EDDY NS BLACKSTONE",
   "latitude": 41.810248,
   "longitude": -71.407272
 },
 {
   "stop_id": "13835",
   "stop_name": "EDDY NS BLACKSTONE",
   "latitude": 41.809932,
   "longitude": -71.407147
 },
 {
   "stop_id": "13840",
   "stop_name": "CRANSTON NS FORD",
   "latitude": 41.810143,
   "longitude": -71.432991
 },
 {
   "stop_id": "13850",
   "stop_name": "GAY NS DUDLEY",
   "latitude": 41.809862,
   "longitude": -71.412821
 },
 {
   "stop_id": "13855",
   "stop_name": "POSCASSET OPP BARROWS",
   "latitude": 41.810392,
   "longitude": -71.454263
 },
 {
   "stop_id": "13860",
   "stop_name": "CRANSTON NS SUPERIOR",
   "latitude": 41.810344,
   "longitude": -71.432698
 },
 {
   "stop_id": "13865",
   "stop_name": "WATERMAN OPP 991 WATERMAN",
   "latitude": 41.810119,
   "longitude": -71.34438
 },
 {
   "stop_id": "13870",
   "stop_name": "ELLERY NS ROSEDALE",
   "latitude": 41.810338,
   "longitude": -71.43821
 },
 {
   "stop_id": "13880",
   "stop_name": "POCASSET NS LAUREL HILL",
   "latitude": 41.81094,
   "longitude": -71.453906
 },
 {
   "stop_id": "13885",
   "stop_name": "ELMWOOD OPP WILSON",
   "latitude": 41.811208,
   "longitude": -71.423075
 },
 {
   "stop_id": "13895",
   "stop_name": "CRANSTON OPP HOLLIS",
   "latitude": 41.81095,
   "longitude": -71.432132
 },
 {
   "stop_id": "13900",
   "stop_name": "PAWTUCKET NS WARREN",
   "latitude": 41.810603,
   "longitude": -71.358924
 },
 {
   "stop_id": "13902",
   "stop_name": "PAWTUCKET FS WARREN",
   "latitude": 41.811621,
   "longitude": -71.358543
 },
 {
   "stop_id": "13903",
   "stop_name": "PAWTUCKET NS WARREN",
   "latitude": 41.811674,
   "longitude": -71.358835
 },
 {
   "stop_id": "13905",
   "stop_name": "WATERMAN FS ROCKAWAY",
   "latitude": 41.811061,
   "longitude": -71.347138
 },
 {
   "stop_id": "13915",
   "stop_name": "POCASSET AT 128 POCASSET",
   "latitude": 41.811143,
   "longitude": -71.452779
 },
 {
   "stop_id": "13920",
   "stop_name": "WATERMAN AT 900 WATERMAN",
   "latitude": 41.810947,
   "longitude": -71.346566
 },
 {
   "stop_id": "13945",
   "stop_name": "PLAINFIELD OPP 752 PLAINFIELD",
   "latitude": 41.810247,
   "longitude": -71.462464
 },
 {
   "stop_id": "13960",
   "stop_name": "WATERMAN AT 865 WATERMAN",
   "latitude": 41.812134,
   "longitude": -71.349166
 },
 {
   "stop_id": "14000",
   "stop_name": "CHAPIN NS ELLERY",
   "latitude": 41.811966,
   "longitude": -71.438074
 },
 {
   "stop_id": "14005",
   "stop_name": "EDDY OPP RHODE ISLAND HOSPITAL ENTRANCE",
   "latitude": 41.812032,
   "longitude": -71.406978
 },
 {
   "stop_id": "14010",
   "stop_name": "RHODE ISLAND HOSPITAL (FRONT DOOR)",
   "latitude": 41.811741,
   "longitude": -71.408833
 },
 {
   "stop_id": "14015",
   "stop_name": "CRANSTON NS CHAPIN",
   "latitude": 41.811763,
   "longitude": -71.431153
 },
 {
   "stop_id": "14025",
   "stop_name": "CHAPIN NS MESSER",
   "latitude": 41.811765,
   "longitude": -71.435778
 },
 {
   "stop_id": "14030",
   "stop_name": "CHAPIN FS PARADE",
   "latitude": 41.81196,
   "longitude": -71.431544
 },
 {
   "stop_id": "14035",
   "stop_name": "EDDY FS BORDEN",
   "latitude": 41.811967,
   "longitude": -71.40713
 },
 {
   "stop_id": "14040",
   "stop_name": "CHAPIN OPP SYCAMORE",
   "latitude": 41.811829,
   "longitude": -71.43448
 },
 {
   "stop_id": "14055",
   "stop_name": "CHAPIN FS SYCAMORE",
   "latitude": 41.811925,
   "longitude": -71.434478
 },
 {
   "stop_id": "14060",
   "stop_name": "CHAPIN NS PARADE",
   "latitude": 41.811885,
   "longitude": -71.431541
 },
 {
   "stop_id": "14070",
   "stop_name": "POCASSET NS WEBSTER",
   "latitude": 41.81177,
   "longitude": -71.450322
 },
 {
   "stop_id": "14105",
   "stop_name": "CRANSTON NS PARADE",
   "latitude": 41.812058,
   "longitude": -71.430928
 },
 {
   "stop_id": "14120",
   "stop_name": "PLAINFIELD OPP SANFORD",
   "latitude": 41.812396,
   "longitude": -71.460957
 },
 {
   "stop_id": "14125",
   "stop_name": "ELMWOOD NS BRIDGHAM",
   "latitude": 41.812445,
   "longitude": -71.422221
 },
 {
   "stop_id": "14130",
   "stop_name": "PLAINFIELD NS DANIEL",
   "latitude": 41.812355,
   "longitude": -71.460281
 },
 {
   "stop_id": "14135",
   "stop_name": "WATERMAN NS COMMERCIAL WAY",
   "latitude": 41.81252,
   "longitude": -71.34963
 },
 {
   "stop_id": "14140",
   "stop_name": "ELMWOOD FS BRIDGHAM",
   "latitude": 41.812529,
   "longitude": -71.422375
 },
 {
   "stop_id": "14150",
   "stop_name": "COMMERCIAL WAY NS WATERMAN",
   "latitude": 41.812847,
   "longitude": -71.349748
 },
 {
   "stop_id": "14155",
   "stop_name": "POCASSET NS WEBSTER",
   "latitude": 41.812302,
   "longitude": -71.449736
 },
 {
   "stop_id": "14160",
   "stop_name": "POCASSET OPP DUNFORD",
   "latitude": 41.812436,
   "longitude": -71.449389
 },
 {
   "stop_id": "14175",
   "stop_name": "CRANSTON FS DEXTER",
   "latitude": 41.812525,
   "longitude": -71.429919
 },
 {
   "stop_id": "14205",
   "stop_name": "PLAINFIELD OPP MERINO",
   "latitude": 41.812829,
   "longitude": -71.457673
 },
 {
   "stop_id": "14210",
   "stop_name": "PRAIRIE NS PROVIDENCE",
   "latitude": 41.81293,
   "longitude": -71.41512
 },
 {
   "stop_id": "14220",
   "stop_name": "COMMERCIAL WAY OPP J MEDERIOS",
   "latitude": 41.815669,
   "longitude": -71.347795
 },
 {
   "stop_id": "14230",
   "stop_name": "CRANSTON NS HARRISON",
   "latitude": 41.812981,
   "longitude": -71.428786
 },
 {
   "stop_id": "14235",
   "stop_name": "PLAINFIELD AT 549 PLAINFIELD",
   "latitude": 41.813097,
   "longitude": -71.456955
 },
 {
   "stop_id": "14255",
   "stop_name": "CRANSTON OPP HARRISON",
   "latitude": 41.813018,
   "longitude": -71.428887
 },
 {
   "stop_id": "14300",
   "stop_name": "PLAINFIELD FS RYE",
   "latitude": 41.813287,
   "longitude": -71.454278
 },
 {
   "stop_id": "14305",
   "stop_name": "PLAINFIELD AT 445 PLAINFIELD",
   "latitude": 41.813579,
   "longitude": -71.453266
 },
 {
   "stop_id": "14310",
   "stop_name": "PLAINFIELD OPP DEWEY",
   "latitude": 41.813531,
   "longitude": -71.452358
 },
 {
   "stop_id": "14320",
   "stop_name": "PAWTUCKET OPP 2289 PAWTUCKET",
   "latitude": 41.812999,
   "longitude": -71.358049
 },
 {
   "stop_id": "14330",
   "stop_name": "PAWTUCKET NS GROSVENOR",
   "latitude": 41.813987,
   "longitude": -71.35796
 },
 {
   "stop_id": "14345",
   "stop_name": "PLAINFIELD NS WEBSTER",
   "latitude": 41.81361,
   "longitude": -71.450968
 },
 {
   "stop_id": "14350",
   "stop_name": "POCASSET FS POCASSET",
   "latitude": 41.813941,
   "longitude": -71.447647
 },
 {
   "stop_id": "14355",
   "stop_name": "PLAINFIELD NS WEBSTER",
   "latitude": 41.813759,
   "longitude": -71.450636
 },
 {
   "stop_id": "14360",
   "stop_name": "PLAINFIELD NS POCASSET",
   "latitude": 41.814089,
   "longitude": -71.447588
 },
 {
   "stop_id": "14365",
   "stop_name": "TRINITY SQUARE",
   "latitude": 41.813509,
   "longitude": -71.421527
 },
 {
   "stop_id": "14380",
   "stop_name": "BROAD OPP SOMERSET (MCDONALDS)",
   "latitude": 41.813773,
   "longitude": -71.421667
 },
 {
   "stop_id": "14385",
   "stop_name": "CRANSTON FS BRIDGHAM",
   "latitude": 41.813761,
   "longitude": -71.427515
 },
 {
   "stop_id": "14395",
   "stop_name": "COMMERCIAL WAY OPP POLE 4",
   "latitude": 41.813942,
   "longitude": -71.348969
 },
 {
   "stop_id": "14415",
   "stop_name": "WARREN NS FRASER",
   "latitude": 41.814053,
   "longitude": -71.371889
 },
 {
   "stop_id": "14420",
   "stop_name": "WARREN NS S SHARON",
   "latitude": 41.814364,
   "longitude": -71.372559
 },
 {
   "stop_id": "14435",
   "stop_name": "CRANSTON NS DODGE",
   "latitude": 41.814466,
   "longitude": -71.425921
 },
 {
   "stop_id": "14441",
   "stop_name": "POINT BETWEEN BEACON & PLAIN",
   "latitude": 41.814759,
   "longitude": -71.414069
 },
 {
   "stop_id": "14450",
   "stop_name": "CRANSTON OPP DODGE",
   "latitude": 41.814661,
   "longitude": -71.42589
 },
 {
   "stop_id": "14460",
   "stop_name": "WARREN NS BERKELEY",
   "latitude": 41.814765,
   "longitude": -71.374109
 },
 {
   "stop_id": "14465",
   "stop_name": "WARREN  NS CARPENTER",
   "latitude": 41.814951,
   "longitude": -71.374393
 },
 {
   "stop_id": "14470",
   "stop_name": "PLAINFIELD NS PILSUDSKI",
   "latitude": 41.814851,
   "longitude": -71.446447
 },
 {
   "stop_id": "14475",
   "stop_name": "CRANSTON NS WESTMINSTER",
   "latitude": 41.817075,
   "longitude": -71.422399
 },
 {
   "stop_id": "14480",
   "stop_name": "COMMERCIAL WAY FS NES RENTALS",
   "latitude": 41.818322,
   "longitude": -71.347529
 },
 {
   "stop_id": "14485",
   "stop_name": "COMMERCIAL WAY FS J MEDERIOS",
   "latitude": 41.815782,
   "longitude": -71.347427
 },
 {
   "stop_id": "14515",
   "stop_name": "WARREN NS TENTH",
   "latitude": 41.815628,
   "longitude": -71.376591
 },
 {
   "stop_id": "14520",
   "stop_name": "BROAD FS LOCKWOOD",
   "latitude": 41.815197,
   "longitude": -71.420822
 },
 {
   "stop_id": "14525",
   "stop_name": "WARREN AT 184 WARREN",
   "latitude": 41.815713,
   "longitude": -71.376568
 },
 {
   "stop_id": "14535",
   "stop_name": "WESTMINSTER MIDBLOCK RT 10",
   "latitude": 41.815766,
   "longitude": -71.437746
 },
 {
   "stop_id": "14540",
   "stop_name": "WESTMINSTER MIDBLOCK RT 10",
   "latitude": 41.815878,
   "longitude": -71.437951
 },
 {
   "stop_id": "14560",
   "stop_name": "WARREN OPP S PHILLIPS",
   "latitude": 41.816149,
   "longitude": -71.378111
 },
 {
   "stop_id": "14575",
   "stop_name": "PAWTUCKET NS WATERMAN",
   "latitude": 41.815481,
   "longitude": -71.357159
 },
 {
   "stop_id": "14580",
   "stop_name": "WESTMINSTER NS SVC RD 3",
   "latitude": 41.816214,
   "longitude": -71.440086
 },
 {
   "stop_id": "14590",
   "stop_name": "WESTMINSTER NS BAINBRIDGE",
   "latitude": 41.816186,
   "longitude": -71.435295
 },
 {
   "stop_id": "14600",
   "stop_name": "COMMERCIAL WAY AT 60 COMMERCIAL WAY",
   "latitude": 41.816458,
   "longitude": -71.346487
 },
 {
   "stop_id": "14610",
   "stop_name": "PLAINFIELD OPP DIKE",
   "latitude": 41.816474,
   "longitude": -71.44433
 },
 {
   "stop_id": "14615",
   "stop_name": "WESTMINSTER FS PARADE",
   "latitude": 41.816356,
   "longitude": -71.433215
 },
 {
   "stop_id": "14620",
   "stop_name": "PAWTUCKET NS WATERMAN",
   "latitude": 41.816824,
   "longitude": -71.356541
 },
 {
   "stop_id": "14625",
   "stop_name": "PAWTUCKET FS WATERMAN",
   "latitude": 41.816907,
   "longitude": -71.356389
 },
 {
   "stop_id": "14630",
   "stop_name": "WARREN OPP SEVENTH",
   "latitude": 41.816458,
   "longitude": -71.378666
 },
 {
   "stop_id": "14645",
   "stop_name": "WESTMINSTER FS ALMY",
   "latitude": 41.816517,
   "longitude": -71.432617
 },
 {
   "stop_id": "14650",
   "stop_name": "WESTMINSTER NS DEXTER",
   "latitude": 41.816516,
   "longitude": -71.431786
 },
 {
   "stop_id": "14655",
   "stop_name": "WESTMINSTER FS MANTON",
   "latitude": 41.816644,
   "longitude": -71.442574
 },
 {
   "stop_id": "14660",
   "stop_name": "WARREN NS SICTH",
   "latitude": 41.816709,
   "longitude": -71.379797
 },
 {
   "stop_id": "14670",
   "stop_name": "WESTMINSTER NS MANTON",
   "latitude": 41.816805,
   "longitude": -71.4428
 },
 {
   "stop_id": "14675",
   "stop_name": "BROADWAY FS VALLEY",
   "latitude": 41.816779,
   "longitude": -71.440687
 },
 {
   "stop_id": "14685",
   "stop_name": "WESTMINSTER NS HAMMOND",
   "latitude": 41.816749,
   "longitude": -71.429657
 },
 {
   "stop_id": "14690",
   "stop_name": "WESTMINSTER OPP HARRISON",
   "latitude": 41.816785,
   "longitude": -71.430215
 },
 {
   "stop_id": "14700",
   "stop_name": "HARTFORD FS WESTMINSTER",
   "latitude": 41.81692,
   "longitude": -71.44544
 },
 {
   "stop_id": "14715",
   "stop_name": "BROADWAY NS VALLEY",
   "latitude": 41.816938,
   "longitude": -71.440865
 },
 {
   "stop_id": "14720",
   "stop_name": "EDDY FS POINT",
   "latitude": 41.81624,
   "longitude": -71.406611
 },
 {
   "stop_id": "14725",
   "stop_name": "WESTMINSTER NS BRIDGHAM",
   "latitude": 41.817044,
   "longitude": -71.42779
 },
 {
   "stop_id": "14750",
   "stop_name": "COMMERCIAL WAY AT 70 COMMERCIAL WAY",
   "latitude": 41.817974,
   "longitude": -71.347106
 },
 {
   "stop_id": "14760",
   "stop_name": "CAHIR FS BROAD",
   "latitude": 41.817503,
   "longitude": -71.4182
 },
 {
   "stop_id": "14775",
   "stop_name": "CRANSTON FS WESTMINSTER",
   "latitude": 41.817062,
   "longitude": -71.422604
 },
 {
   "stop_id": "14780",
   "stop_name": "WESTMINSTER NS KNIGHT",
   "latitude": 41.81721,
   "longitude": -71.42618
 },
 {
   "stop_id": "14785",
   "stop_name": "BROAD NS CAHIR",
   "latitude": 41.817143,
   "longitude": -71.41769
 },
 {
   "stop_id": "14790",
   "stop_name": "WARREN OPP POTTER",
   "latitude": 41.81716,
   "longitude": -71.38098
 },
 {
   "stop_id": "14800",
   "stop_name": "WESTMINSTER OPP KNIGHT",
   "latitude": 41.817116,
   "longitude": -71.425997
 },
 {
   "stop_id": "14805",
   "stop_name": "HARTFORD NS POST OFFICE",
   "latitude": 41.816909,
   "longitude": -71.446418
 },
 {
   "stop_id": "14815",
   "stop_name": "WESTMINSTER FS WINTER",
   "latitude": 41.817334,
   "longitude": -71.422182
 },
 {
   "stop_id": "14825",
   "stop_name": "BROAD NS SVC RD 7",
   "latitude": 41.817128,
   "longitude": -71.417347
 },
 {
   "stop_id": "14830",
   "stop_name": "HARTFORD OPP POST OFFICE",
   "latitude": 41.816926,
   "longitude": -71.446046
 },
 {
   "stop_id": "14835",
   "stop_name": "WESTMINSTER NS CRANSTON ST",
   "latitude": 41.817288,
   "longitude": -71.422866
 },
 {
   "stop_id": "14840",
   "stop_name": "HARTFORD NS ETNA",
   "latitude": 41.817339,
   "longitude": -71.450863
 },
 {
   "stop_id": "14845",
   "stop_name": "WESTMINSTER AT CITIZENS BANK",
   "latitude": 41.817399,
   "longitude": -71.423302
 },
 {
   "stop_id": "14860",
   "stop_name": "HARTFORD OPP ETNA",
   "latitude": 41.817397,
   "longitude": -71.450732
 },
 {
   "stop_id": "14865",
   "stop_name": "HARTFORD AT 267 HARTFORD",
   "latitude": 41.817522,
   "longitude": -71.452245
 },
 {
   "stop_id": "14870",
   "stop_name": "HARTFORD OPP BARRY",
   "latitude": 41.817397,
   "longitude": -71.451634
 },
 {
   "stop_id": "14875",
   "stop_name": "COMMERCIAL WAY AT 89 COMMERICAL WAY",
   "latitude": 41.820324,
   "longitude": -71.34868
 },
 {
   "stop_id": "14885",
   "stop_name": "HARTFORD FS BODELL",
   "latitude": 41.817615,
   "longitude": -71.453833
 },
 {
   "stop_id": "14890",
   "stop_name": "HARTFORD NS BODELL",
   "latitude": 41.817683,
   "longitude": -71.453762
 },
 {
   "stop_id": "14910",
   "stop_name": "MANTON OPP DELAINE",
   "latitude": 41.818117,
   "longitude": -71.444894
 },
 {
   "stop_id": "14920",
   "stop_name": "MANTON NS DELAINE",
   "latitude": 41.81787,
   "longitude": -71.44444
 },
 {
   "stop_id": "14925",
   "stop_name": "WESTMINSTER AT PROVIDENCE SCHOOL DEPT",
   "latitude": 41.81782,
   "longitude": -71.421282
 },
 {
   "stop_id": "14930",
   "stop_name": "BROADWAY FS BARTON",
   "latitude": 41.818008,
   "longitude": -71.43657
 },
 {
   "stop_id": "14935",
   "stop_name": "HARTFORD OPP LAUREL HILL",
   "latitude": 41.817971,
   "longitude": -71.455281
 },
 {
   "stop_id": "14940",
   "stop_name": "BROADWAY NS BARTON",
   "latitude": 41.818148,
   "longitude": -71.436811
 },
 {
   "stop_id": "14945",
   "stop_name": "COMMERCIAL WAY AT 95 COMMERCIAL WAY",
   "latitude": 41.820285,
   "longitude": -71.348848
 },
 {
   "stop_id": "14950",
   "stop_name": "WESTMINSTER OPP PROV SCHOOL DEPT",
   "latitude": 41.817797,
   "longitude": -71.421032
 },
 {
   "stop_id": "14965",
   "stop_name": "BROAD OPP FENNER",
   "latitude": 41.818274,
   "longitude": -71.415945
 },
 {
   "stop_id": "14970",
   "stop_name": "HARTFORD FS LAUREL HILL",
   "latitude": 41.817974,
   "longitude": -71.455688
 },
 {
   "stop_id": "14975",
   "stop_name": "HARTFORD NS FLOWER",
   "latitude": 41.818294,
   "longitude": -71.456736
 },
 {
   "stop_id": "14985",
   "stop_name": "HARTFORD NS IDA",
   "latitude": 41.818354,
   "longitude": -71.457531
 },
 {
   "stop_id": "14995",
   "stop_name": "BROADWAY NS TOBEY",
   "latitude": 41.818357,
   "longitude": -71.435321
 },
 {
   "stop_id": "15000",
   "stop_name": "WESTMINSTER NS SVC RD 7",
   "latitude": 41.818588,
   "longitude": -71.419261
 },
 {
   "stop_id": "15010",
   "stop_name": "BROADWAY FS TOBEY",
   "latitude": 41.818477,
   "longitude": -71.435333
 },
 {
   "stop_id": "15015",
   "stop_name": "HARTFORD NS MATSON",
   "latitude": 41.81846,
   "longitude": -71.457761
 },
 {
   "stop_id": "15020",
   "stop_name": "HARTFORD NS MERINO",
   "latitude": 41.81862,
   "longitude": -71.459209
 },
 {
   "stop_id": "15025",
   "stop_name": "BROAD NS FENNER",
   "latitude": 41.818517,
   "longitude": -71.415767
 },
 {
   "stop_id": "15040",
   "stop_name": "EDDY NS SHIP",
   "latitude": 41.820038,
   "longitude": -71.408142
 },
 {
   "stop_id": "15045",
   "stop_name": "BROADWAY FS COURTLAND",
   "latitude": 41.819438,
   "longitude": -71.430609
 },
 {
   "stop_id": "15050",
   "stop_name": "HARTFORD OPP 482 HARTFORD",
   "latitude": 41.81877,
   "longitude": -71.459939
 },
 {
   "stop_id": "15055",
   "stop_name": "HARTFORD NS PETTEYS",
   "latitude": 41.819007,
   "longitude": -71.461962
 },
 {
   "stop_id": "15060",
   "stop_name": "BROADWAY NS ALMY",
   "latitude": 41.818961,
   "longitude": -71.433246
 },
 {
   "stop_id": "15075",
   "stop_name": "HARTFORD NS BOWLETT",
   "latitude": 41.819076,
   "longitude": -71.461937
 },
 {
   "stop_id": "15080",
   "stop_name": "HARTFORD NS ELIZA",
   "latitude": 41.819251,
   "longitude": -71.463699
 },
 {
   "stop_id": "15090",
   "stop_name": "HARTFORD NS OPHELIA",
   "latitude": 41.819383,
   "longitude": -71.464132
 },
 {
   "stop_id": "15100",
   "stop_name": "HARTFORD NS WINFIELD",
   "latitude": 41.819279,
   "longitude": -71.475019
 },
 {
   "stop_id": "15110",
   "stop_name": "PAWTUCKET OPP EAST PROVIDENCE HIGH SCHOOL",
   "latitude": 41.818529,
   "longitude": -71.355933
 },
 {
   "stop_id": "15115",
   "stop_name": "WATERMAN FS GURNEY",
   "latitude": 41.819568,
   "longitude": -71.36681
 },
 {
   "stop_id": "15120",
   "stop_name": "PAWTUCKET FS EAST PROVIDENCE HIGH SCHOOL",
   "latitude": 41.820568,
   "longitude": -71.356384
 },
 {
   "stop_id": "15135",
   "stop_name": "HARTFORD NS SPRINGFIELD",
   "latitude": 41.819496,
   "longitude": -71.465607
 },
 {
   "stop_id": "15145",
   "stop_name": "MANTON NS ALEPPO",
   "latitude": 41.819356,
   "longitude": -71.446089
 },
 {
   "stop_id": "15150",
   "stop_name": "TAUNTON FS POTTER",
   "latitude": 41.819685,
   "longitude": -71.379222
 },
 {
   "stop_id": "15180",
   "stop_name": "HALL AT 56 HALL",
   "latitude": 41.819445,
   "longitude": -71.363824
 },
 {
   "stop_id": "15185",
   "stop_name": "HARTFORD NS KING PHILIP",
   "latitude": 41.819566,
   "longitude": -71.465274
 },
 {
   "stop_id": "15205",
   "stop_name": "HARTFORD NS S WILLIAMS",
   "latitude": 41.81947,
   "longitude": -71.475507
 },
 {
   "stop_id": "15215",
   "stop_name": "TAUNTON AVE / GROVE AVE",
   "latitude": 41.819787,
   "longitude": -71.377591
 },
 {
   "stop_id": "15230",
   "stop_name": "BROAD NS CHESTNUT",
   "latitude": 41.819912,
   "longitude": -71.41446
 },
 {
   "stop_id": "15235",
   "stop_name": "TAUNTON AT 175 TAUNTON",
   "latitude": 41.81966,
   "longitude": -71.37378
 },
 {
   "stop_id": "15240",
   "stop_name": "TAUNTON OPP GROSVENOR",
   "latitude": 41.819762,
   "longitude": -71.374223
 },
 {
   "stop_id": "15245",
   "stop_name": "TAUNTON NS IVY",
   "latitude": 41.819758,
   "longitude": -71.37607
 },
 {
   "stop_id": "15250",
   "stop_name": "TAUNTON OPP ALICE",
   "latitude": 41.819653,
   "longitude": -71.372029
 },
 {
   "stop_id": "15260",
   "stop_name": "HARTFORD NS MIDDLETON",
   "latitude": 41.819849,
   "longitude": -71.466931
 },
 {
   "stop_id": "15265",
   "stop_name": "WICKENDEN NS HOPE",
   "latitude": 41.819577,
   "longitude": -71.395911
 },
 {
   "stop_id": "15270",
   "stop_name": "WICKENDEN FS HOPE",
   "latitude": 41.81971,
   "longitude": -71.395844
 },
 {
   "stop_id": "15275",
   "stop_name": "HARTFORD FS KILLINGLY",
   "latitude": 41.819955,
   "longitude": -71.469889
 },
 {
   "stop_id": "15280",
   "stop_name": "TAUNTON OPP RUSSELL",
   "latitude": 41.819912,
   "longitude": -71.369337
 },
 {
   "stop_id": "15285",
   "stop_name": "E FRANKLIN NS WASHINGTON",
   "latitude": 41.819906,
   "longitude": -71.418431
 },
 {
   "stop_id": "15290",
   "stop_name": "BROADWAY NS VINTON",
   "latitude": 41.819965,
   "longitude": -71.428401
 },
 {
   "stop_id": "15295",
   "stop_name": "MANTON OPP JULIAN",
   "latitude": 41.819867,
   "longitude": -71.44669
 },
 {
   "stop_id": "15300",
   "stop_name": "HARTFORD NS PHILIPS ANGELL",
   "latitude": 41.819476,
   "longitude": -71.472222
 },
 {
   "stop_id": "15305",
   "stop_name": "BROADWAY FS KNIGHT",
   "latitude": 41.819787,
   "longitude": -71.429695
 },
 {
   "stop_id": "15310",
   "stop_name": "TAUNTON FS JOHN",
   "latitude": 41.81972,
   "longitude": -71.371724
 },
 {
   "stop_id": "15335",
   "stop_name": "HARTFORD NS KILLINGLY",
   "latitude": 41.820062,
   "longitude": -71.468852
 },
 {
   "stop_id": "15355",
   "stop_name": "WICKENDEN FS EAST",
   "latitude": 41.820086,
   "longitude": -71.394342
 },
 {
   "stop_id": "15360",
   "stop_name": "WASHINGTON OPP JACKSON WALKWAY",
   "latitude": 41.820902,
   "longitude": -71.417817
 },
 {
   "stop_id": "15365",
   "stop_name": "WICKENDEN NS EAST",
   "latitude": 41.820194,
   "longitude": -71.394353
 },
 {
   "stop_id": "15385",
   "stop_name": "WICKENDEN NS IVES",
   "latitude": 41.820179,
   "longitude": -71.392136
 },
 {
   "stop_id": "15395",
   "stop_name": "BROADWAY NS VINTON",
   "latitude": 41.820262,
   "longitude": -71.427737
 },
 {
   "stop_id": "15410",
   "stop_name": "GOVERNOR NS WICKENDEN",
   "latitude": 41.820313,
   "longitude": -71.391853
 },
 {
   "stop_id": "15430",
   "stop_name": "JOHN NS RUSSELL",
   "latitude": 41.821085,
   "longitude": -71.370629
 },
 {
   "stop_id": "15440",
   "stop_name": "HARTFORD AT 956 HARTFORD AVE",
   "latitude": 41.820638,
   "longitude": -71.479681
 },
 {
   "stop_id": "15455",
   "stop_name": "WATERMAN AT 314 WATERMAN",
   "latitude": 41.820837,
   "longitude": -71.36904
 },
 {
   "stop_id": "15460",
   "stop_name": "TAUNTON OPP CORA",
   "latitude": 41.820599,
   "longitude": -71.365674
 },
 {
   "stop_id": "15475",
   "stop_name": "BROADWAY NS BATTEY",
   "latitude": 41.820572,
   "longitude": -71.425917
 },
 {
   "stop_id": "15495",
   "stop_name": "HARTFORD AT 985 HARTFORD",
   "latitude": 41.821078,
   "longitude": -71.480976
 },
 {
   "stop_id": "15500",
   "stop_name": "S MAIN FS JAMES",
   "latitude": 41.820944,
   "longitude": -71.403662
 },
 {
   "stop_id": "15505",
   "stop_name": "S WATER AT JAMES",
   "latitude": 41.820642,
   "longitude": -71.404565
 },
 {
   "stop_id": "15530",
   "stop_name": "HARTFORD AT 994 HARTFORD AVE",
   "latitude": 41.82138,
   "longitude": -71.482108
 },
 {
   "stop_id": "15540",
   "stop_name": "PAWTUCKET NS SHOPPERS TOWN MALL",
   "latitude": 41.820549,
   "longitude": -71.356603
 },
 {
   "stop_id": "15560",
   "stop_name": "BROADWAY NS PALLAS",
   "latitude": 41.820898,
   "longitude": -71.424365
 },
 {
   "stop_id": "15565",
   "stop_name": "TAUNTON OPP GOLDSMITH",
   "latitude": 41.820979,
   "longitude": -71.362275
 },
 {
   "stop_id": "15575",
   "stop_name": "EMPIRE OPP WESTMINSTER",
   "latitude": 41.821,
   "longitude": -71.415397
 },
 {
   "stop_id": "15580",
   "stop_name": "TAUNTON NS GOLDSMITH",
   "latitude": 41.821198,
   "longitude": -71.361796
 },
 {
   "stop_id": "15600",
   "stop_name": "TAUNTON AT 525 TAUNTON",
   "latitude": 41.821466,
   "longitude": -71.359918
 },
 {
   "stop_id": "15610",
   "stop_name": "WASHINGTON NS GREENE",
   "latitude": 41.821125,
   "longitude": -71.417253
 },
 {
   "stop_id": "15615",
   "stop_name": "WASHINGTON NS GREENE",
   "latitude": 41.821392,
   "longitude": -71.417161
 },
 {
   "stop_id": "15625",
   "stop_name": "BROADWAY FS BRADFORD",
   "latitude": 41.821525,
   "longitude": -71.421772
 },
 {
   "stop_id": "15630",
   "stop_name": "TAUNTON AT SHOPPERS TOWN MALL",
   "latitude": 41.821389,
   "longitude": -71.359551
 },
 {
   "stop_id": "15650",
   "stop_name": "BROADWAY NS DEAN",
   "latitude": 41.821588,
   "longitude": -71.422239
 },
 {
   "stop_id": "15670",
   "stop_name": "HARTFORD AT TRI TOWN HEALTH CTR",
   "latitude": 41.822291,
   "longitude": -71.486154
 },
 {
   "stop_id": "15680",
   "stop_name": "HARTFORD OPP BORDEN",
   "latitude": 41.82196,
   "longitude": -71.483927
 },
 {
   "stop_id": "15685",
   "stop_name": "DANIELSON PIKE NS 102",
   "latitude": 41.825537,
   "longitude": -71.669228
 },
 {
   "stop_id": "15686",
   "stop_name": "chopmist hill fire station",
   "latitude": 41.815824,
   "longitude": -71.663517
 },
 {
   "stop_id": "15690",
   "stop_name": "IVES NS E TRANSIT",
   "latitude": 41.821796,
   "longitude": -71.392084
 },
 {
   "stop_id": "15700",
   "stop_name": "IVES NS E TRANSIT",
   "latitude": 41.821559,
   "longitude": -71.391907
 },
 {
   "stop_id": "15705",
   "stop_name": "TAUNTON OPP ELMWOOD DEALERSHIP",
   "latitude": 41.821973,
   "longitude": -71.354719
 },
 {
   "stop_id": "15710",
   "stop_name": "TAUNTON AT ELMWOOD DODGE",
   "latitude": 41.821829,
   "longitude": -71.354756
 },
 {
   "stop_id": "15730",
   "stop_name": "ATWELLS NS BROADWAY",
   "latitude": 41.822647,
   "longitude": -71.418845
 },
 {
   "stop_id": "15735",
   "stop_name": "S WATER OPP POWER",
   "latitude": 41.821996,
   "longitude": -71.405838
 },
 {
   "stop_id": "15740",
   "stop_name": "TAUNTON AVE OPP PARK & RIDE",
   "latitude": 41.822326,
   "longitude": -71.35141
 },
 {
   "stop_id": "15750",
   "stop_name": "HARTFORD NS DIX",
   "latitude": 41.822457,
   "longitude": -71.486691
 },
 {
   "stop_id": "15755",
   "stop_name": "S MAIN NS POWER",
   "latitude": 41.822355,
   "longitude": -71.405121
 },
 {
   "stop_id": "15765",
   "stop_name": "TAUNTON AT PARK & RIDE",
   "latitude": 41.822505,
   "longitude": -71.351121
 },
 {
   "stop_id": "15770",
   "stop_name": "BROADWAY NS SVC RD 8",
   "latitude": 41.822323,
   "longitude": -71.419121
 },
 {
   "stop_id": "15790",
   "stop_name": "MANTON AT 283 MANTON",
   "latitude": 41.82232,
   "longitude": -71.449704
 },
 {
   "stop_id": "15805",
   "stop_name": "MANTON NS POPE",
   "latitude": 41.821774,
   "longitude": -71.448834
 },
 {
   "stop_id": "15810",
   "stop_name": "COMMERCIAL WAY NS TAUNTON",
   "latitude": 41.822059,
   "longitude": -71.349334
 },
 {
   "stop_id": "15815",
   "stop_name": "DORRANCE NS PINE",
   "latitude": 41.822472,
   "longitude": -71.410316
 },
 {
   "stop_id": "15825",
   "stop_name": "SABIN OPP EMPIRE",
   "latitude": 41.822903,
   "longitude": -71.417834
 },
 {
   "stop_id": "15835",
   "stop_name": "COMMERCIAL WAY FS TAUNTON",
   "latitude": 41.822338,
   "longitude": -71.349499
 },
 {
   "stop_id": "15840",
   "stop_name": "ATWOOD AT 1481 ATWOOD",
   "latitude": 41.823024,
   "longitude": -71.49858
 },
 {
   "stop_id": "15850",
   "stop_name": "HARTFORD FS WILSON",
   "latitude": 41.82272,
   "longitude": -71.488537
 },
 {
   "stop_id": "15880",
   "stop_name": "WEYBOSSET OPP EDDY",
   "latitude": 41.822625,
   "longitude": -71.41138
 },
 {
   "stop_id": "15895",
   "stop_name": "ATWELLS FS BROADWAY (HOLIDAY INN)",
   "latitude": 41.822821,
   "longitude": -71.418845
 },
 {
   "stop_id": "15935",
   "stop_name": "HARTFORD FS DALE",
   "latitude": 41.823054,
   "longitude": -71.490534
 },
 {
   "stop_id": "15940",
   "stop_name": "MANTON AT 323 MANTON",
   "latitude": 41.823165,
   "longitude": -71.450725
 },
 {
   "stop_id": "15945",
   "stop_name": "MANTON FS PANAY",
   "latitude": 41.823098,
   "longitude": -71.450845
 },
 {
   "stop_id": "15950",
   "stop_name": "IVES NS WILLIAMS",
   "latitude": 41.822965,
   "longitude": -71.392098
 },
 {
   "stop_id": "15955",
   "stop_name": "WATERMAN NS JAMES",
   "latitude": 41.8232,
   "longitude": -71.373506
 },
 {
   "stop_id": "15960",
   "stop_name": "HARTFORD NS TARA",
   "latitude": 41.823066,
   "longitude": -71.48987
 },
 {
   "stop_id": "15975",
   "stop_name": "WATERMAN FS JAMES",
   "latitude": 41.823275,
   "longitude": -71.373396
 },
 {
   "stop_id": "15985",
   "stop_name": "ATWELLS OPP ENTERPRISE",
   "latitude": 41.823123,
   "longitude": -71.421134
 },
 {
   "stop_id": "15990",
   "stop_name": "S WATER BETWEEN PACKET & PLANET",
   "latitude": 41.82302,
   "longitude": -71.406731
 },
 {
   "stop_id": "16000",
   "stop_name": "WASHINGTON NS MATHEWSON",
   "latitude": 41.823118,
   "longitude": -71.414706
 },
 {
   "stop_id": "16005",
   "stop_name": "N BROADWAY FS MOWRY",
   "latitude": 41.823806,
   "longitude": -71.366292
 },
 {
   "stop_id": "16015",
   "stop_name": "HARTFORD AVE OPP 1305 HARTFORD",
   "latitude": 41.823057,
   "longitude": -71.494639
 },
 {
   "stop_id": "16020",
   "stop_name": "ATWOOD NS 1478 ATWOOD",
   "latitude": 41.823204,
   "longitude": -71.498882
 },
 {
   "stop_id": "16025",
   "stop_name": "ATWELLS FS ENTERPRISE",
   "latitude": 41.823285,
   "longitude": -71.421234
 },
 {
   "stop_id": "16035",
   "stop_name": "SABIN MIDBLOCK RI CONVENTION CTR",
   "latitude": 41.823682,
   "longitude": -71.416802
 },
 {
   "stop_id": "16045",
   "stop_name": "ATWELLS NS ALBRO",
   "latitude": 41.823453,
   "longitude": -71.424852
 },
 {
   "stop_id": "16090",
   "stop_name": "SABIN NS MATHEWSON",
   "latitude": 41.824328,
   "longitude": -71.416081
 },
 {
   "stop_id": "16095",
   "stop_name": "ATWELLS FS PEQUOT",
   "latitude": 41.823379,
   "longitude": -71.42285
 },
 {
   "stop_id": "16105",
   "stop_name": "ATWELLS NS DEPASQUALE",
   "latitude": 41.823558,
   "longitude": -71.427024
 },
 {
   "stop_id": "16110",
   "stop_name": "ATWELLS FS DEAN",
   "latitude": 41.8235,
   "longitude": -71.424812
 },
 {
   "stop_id": "16115",
   "stop_name": "HARTFORD AT 1357 HARTFORD AVE",
   "latitude": 41.823618,
   "longitude": -71.497234
 },
 {
   "stop_id": "16120",
   "stop_name": "HARTFORD FS ATWOOD",
   "latitude": 41.823624,
   "longitude": -71.497747
 },
 {
   "stop_id": "16125",
   "stop_name": "WEYBOSSET FS PECK",
   "latitude": 41.823586,
   "longitude": -71.410117
 },
 {
   "stop_id": "16155",
   "stop_name": "ATWELLS OPP DEPASQUALE",
   "latitude": 41.823678,
   "longitude": -71.427013
 },
 {
   "stop_id": "16165",
   "stop_name": "N BROADWAY OPP MOWRY",
   "latitude": 41.823602,
   "longitude": -71.366641
 },
 {
   "stop_id": "16175",
   "stop_name": "ATWELLS NS SUTTON",
   "latitude": 41.823759,
   "longitude": -71.429522
 },
 {
   "stop_id": "16195",
   "stop_name": "ATWELLS NS SUTTON",
   "latitude": 41.823833,
   "longitude": -71.429172
 },
 {
   "stop_id": "16200",
   "stop_name": "MANTON AT 375 MANTON",
   "latitude": 41.824243,
   "longitude": -71.452376
 },
 {
   "stop_id": "16205",
   "stop_name": "ATWELLS NS AMES",
   "latitude": 41.823864,
   "longitude": -71.431226
 },
 {
   "stop_id": "16210",
   "stop_name": "ATWELLS NS BOND",
   "latitude": 41.823281,
   "longitude": -71.423252
 },
 {
   "stop_id": "16235",
   "stop_name": "ATWELLS NS HEWITT",
   "latitude": 41.823913,
   "longitude": -71.430266
 },
 {
   "stop_id": "16240",
   "stop_name": "ATWELLS NS KNIGHT",
   "latitude": 41.824027,
   "longitude": -71.432963
 },
 {
   "stop_id": "16250",
   "stop_name": "ATWELLS OPP KNIGHT",
   "latitude": 41.824089,
   "longitude": -71.432431
 },
 {
   "stop_id": "16255",
   "stop_name": "PAWTUCKET NS OFFICE PKWY",
   "latitude": 41.824735,
   "longitude": -71.354217
 },
 {
   "stop_id": "16275",
   "stop_name": "ATWELLS FS AMES",
   "latitude": 41.82398,
   "longitude": -71.431226
 },
 {
   "stop_id": "16295",
   "stop_name": "MANTON NS LYNCH",
   "latitude": 41.82441,
   "longitude": -71.452449
 },
 {
   "stop_id": "16310",
   "stop_name": "S WATER FS CRAWFORD",
   "latitude": 41.823968,
   "longitude": -71.40739
 },
 {
   "stop_id": "16335",
   "stop_name": "IVES NS PRESTON",
   "latitude": 41.824063,
   "longitude": -71.392268
 },
 {
   "stop_id": "16355",
   "stop_name": "ATWELLS FS VALLEY",
   "latitude": 41.824491,
   "longitude": -71.438853
 },
 {
   "stop_id": "16370",
   "stop_name": "ATWELLS FS EAGLE",
   "latitude": 41.824569,
   "longitude": -71.436244
 },
 {
   "stop_id": "16385",
   "stop_name": "WEYBOSSET NS POST OFFICE CT",
   "latitude": 41.824554,
   "longitude": -71.409645
 },
 {
   "stop_id": "16395",
   "stop_name": "WATERMAN OPP SUMMIT",
   "latitude": 41.825202,
   "longitude": -71.376823
 },
 {
   "stop_id": "16400",
   "stop_name": "KENNEDY PLAZA (STOP B)",
   "latitude": 41.824733,
   "longitude": -71.411583
 },
 {
   "stop_id": "16405",
   "stop_name": "ATWELLS AT 740 ATWELLS",
   "latitude": 41.8246,
   "longitude": -71.441245
 },
 {
   "stop_id": "16425",
   "stop_name": "N BROADWAY NS BLANCHE",
   "latitude": 41.824986,
   "longitude": -71.365655
 },
 {
   "stop_id": "16435",
   "stop_name": "KENNEDY PLAZA (STOP C)",
   "latitude": 41.824887,
   "longitude": -71.411348
 },
 {
   "stop_id": "16445",
   "stop_name": "S MAIN AT SUPERIOR COURT",
   "latitude": 41.823572,
   "longitude": -71.406197
 },
 {
   "stop_id": "16460",
   "stop_name": "N BROADWAY AT 645 N BROADWAY",
   "latitude": 41.824958,
   "longitude": -71.365828
 },
 {
   "stop_id": "16465",
   "stop_name": "MANTON FS SALMON",
   "latitude": 41.825035,
   "longitude": -71.453874
 },
 {
   "stop_id": "16475",
   "stop_name": "KENNEDY PLAZA (STOP G)",
   "latitude": 41.825012,
   "longitude": -71.411823
 },
 {
   "stop_id": "16480",
   "stop_name": "WATERMAN NS SUMMIT",
   "latitude": 41.825279,
   "longitude": -71.377191
 },
 {
   "stop_id": "16485",
   "stop_name": "KENNEDY PLAZA (STOP D)",
   "latitude": 41.825109,
   "longitude": -71.411042
 },
 {
   "stop_id": "16510",
   "stop_name": "MANTON OPP SALMON",
   "latitude": 41.825122,
   "longitude": -71.453887
 },
 {
   "stop_id": "16520",
   "stop_name": "WASHINGTON ST AT KENNEDY PLAZA",
   "latitude": 41.82472,
   "longitude": -71.41233
 },
 {
   "stop_id": "16525",
   "stop_name": "KENNEDY PLAZA (STOP H)",
   "latitude": 41.825212,
   "longitude": -71.41155
 },
 {
   "stop_id": "16530",
   "stop_name": "MEMORIAL FS WESTMINSTER",
   "latitude": 41.824436,
   "longitude": -71.408538
 },
 {
   "stop_id": "16555",
   "stop_name": "KENNEDY PLAZA (STOP E)",
   "latitude": 41.825233,
   "longitude": -71.410869
 },
 {
   "stop_id": "16565",
   "stop_name": "MANTON OPP 470 MANTON",
   "latitude": 41.825615,
   "longitude": -71.455794
 },
 {
   "stop_id": "16585",
   "stop_name": "KENNEDY PLAZA (STOP V)",
   "latitude": 41.825123,
   "longitude": -71.412413
 },
 {
   "stop_id": "16590",
   "stop_name": "KENNEDY PLAZA (STOP I)",
   "latitude": 41.825407,
   "longitude": -71.411262
 },
 {
   "stop_id": "16595",
   "stop_name": "S MAIN FS HOPKINS",
   "latitude": 41.824609,
   "longitude": -71.407003
 },
 {
   "stop_id": "16610",
   "stop_name": "IVES FS E GEORGE",
   "latitude": 41.82589,
   "longitude": -71.39257
 },
 {
   "stop_id": "16620",
   "stop_name": "IVES NS E GEORGE",
   "latitude": 41.825767,
   "longitude": -71.392637
 },
 {
   "stop_id": "16630",
   "stop_name": "KENNEDY PLAZA (STOP J)",
   "latitude": 41.825537,
   "longitude": -71.411076
 },
 {
   "stop_id": "16640",
   "stop_name": "MANTON AT 470 MANTON",
   "latitude": 41.825608,
   "longitude": -71.456278
 },
 {
   "stop_id": "16645",
   "stop_name": "EAST SIDE MARKET PLACE",
   "latitude": 41.825724,
   "longitude": -71.386757
 },
 {
   "stop_id": "16690",
   "stop_name": "MANTON NS GLENBRIDGE",
   "latitude": 41.826005,
   "longitude": -71.458565
 },
 {
   "stop_id": "16710",
   "stop_name": "MANTON NS RARITAN",
   "latitude": 41.826121,
   "longitude": -71.458792
 },
 {
   "stop_id": "16720",
   "stop_name": "KENNEDY PLAZA (STOP X)",
   "latitude": 41.825999,
   "longitude": -71.412244
 },
 {
   "stop_id": "16745",
   "stop_name": "EXCHANGE NS MEMORIAL",
   "latitude": 41.826684,
   "longitude": -71.411773
 },
 {
   "stop_id": "16770",
   "stop_name": "PITMAN BETWEEN GANO & IVES",
   "latitude": 41.826401,
   "longitude": -71.391654
 },
 {
   "stop_id": "16775",
   "stop_name": "MEMORIAL NS EXCHANGE ST",
   "latitude": 41.826555,
   "longitude": -71.41272
 },
 {
   "stop_id": "16785",
   "stop_name": "MANTON AT 588 MANTON",
   "latitude": 41.826622,
   "longitude": -71.460367
 },
 {
   "stop_id": "16795",
   "stop_name": "PITMAN BETWEEN GANO & IVES",
   "latitude": 41.826516,
   "longitude": -71.391316
 },
 {
   "stop_id": "16810",
   "stop_name": "PITMAN FS GANO",
   "latitude": 41.826527,
   "longitude": -71.38987
 },
 {
   "stop_id": "16820",
   "stop_name": "S MAIN NS WASHINGTON",
   "latitude": 41.826743,
   "longitude": -71.408552
 },
 {
   "stop_id": "16825",
   "stop_name": "PITMAN NS GANO",
   "latitude": 41.826648,
   "longitude": -71.389881
 },
 {
   "stop_id": "16830",
   "stop_name": "PITMAN FS WAYLAND",
   "latitude": 41.826687,
   "longitude": -71.388113
 },
 {
   "stop_id": "16835",
   "stop_name": "STEEPLE FS MEMORIAL",
   "latitude": 41.826496,
   "longitude": -71.411257
 },
 {
   "stop_id": "16845",
   "stop_name": "PITMAN NS WAYLAND",
   "latitude": 41.826799,
   "longitude": -71.388019
 },
 {
   "stop_id": "16855",
   "stop_name": "TUNNEL FS S MAIN",
   "latitude": 41.82678,
   "longitude": -71.408541
 },
 {
   "stop_id": "16860",
   "stop_name": "DANIELSON PIKE OPP ST MARY",
   "latitude": 41.826722,
   "longitude": -71.639317
 },
 {
   "stop_id": "16870",
   "stop_name": "MASSASOIT FS SUTTON",
   "latitude": 41.827277,
   "longitude": -71.375701
 },
 {
   "stop_id": "16875",
   "stop_name": "MANTON AT 610 MANTON",
   "latitude": 41.827152,
   "longitude": -71.460933
 },
 {
   "stop_id": "16885",
   "stop_name": "MASSASOIT OPP SUTTON",
   "latitude": 41.82719,
   "longitude": -71.376149
 },
 {
   "stop_id": "16890",
   "stop_name": "TUNNEL NS S MAIN",
   "latitude": 41.826842,
   "longitude": -71.408585
 },
 {
   "stop_id": "16900",
   "stop_name": "N MAIN NS N COURT",
   "latitude": 41.828988,
   "longitude": -71.40971
 },
 {
   "stop_id": "16905",
   "stop_name": "TUNNEL NS THAYER",
   "latitude": 41.827607,
   "longitude": -71.400864
 },
 {
   "stop_id": "16910",
   "stop_name": "MANTON OPP 600 MANTON",
   "latitude": 41.827182,
   "longitude": -71.460842
 },
 {
   "stop_id": "16920",
   "stop_name": "DANIELSON PIKE NS ST MARY",
   "latitude": 41.826873,
   "longitude": -71.639343
 },
 {
   "stop_id": "16925",
   "stop_name": "PAWTUCKET AVE OPP BASEBALL FIELD",
   "latitude": 41.827539,
   "longitude": -71.352674
 },
 {
   "stop_id": "16930",
   "stop_name": "PAWTUCKET AT BASEBALL FIELD",
   "latitude": 41.827778,
   "longitude": -71.352527
 },
 {
   "stop_id": "16940",
   "stop_name": "FRANCIS FS FINANCE WAY",
   "latitude": 41.827694,
   "longitude": -71.415248
 },
 {
   "stop_id": "16960",
   "stop_name": "DANIELSON PIKE NS SUDDARD",
   "latitude": 41.827734,
   "longitude": -71.647668
 },
 {
   "stop_id": "16961",
   "stop_name": "DANIELSON PIKE FS 857 DANIELSON PIKE",
   "latitude": 41.827387,
   "longitude": -71.653399
 },
 {
   "stop_id": "16970",
   "stop_name": "WATERMAN NS HOPE",
   "latitude": 41.827592,
   "longitude": -71.397452
 },
 {
   "stop_id": "16973",
   "stop_name": "DANIELSON PIKE AT 945 DANIELSON PIKE",
   "latitude": 41.825904,
   "longitude": -71.660897
 },
 {
   "stop_id": "16974",
   "stop_name": "DANIELSON PIKE AT 864 DANIELSON PIKE",
   "latitude": 41.827255,
   "longitude": -71.653096
 },
 {
   "stop_id": "16975",
   "stop_name": "DANIELSON PIKE NS SUDDARD",
   "latitude": 41.827703,
   "longitude": -71.647185
 },
 {
   "stop_id": "17000",
   "stop_name": "WATERMAN FS GOVERNOR",
   "latitude": 41.827639,
   "longitude": -71.393764
 },
 {
   "stop_id": "17005",
   "stop_name": "MANTON AT 652 MANTON",
   "latitude": 41.828184,
   "longitude": -71.46177
 },
 {
   "stop_id": "17040",
   "stop_name": "PROVIDENCE PLACE MALL",
   "latitude": 41.828484,
   "longitude": -71.415344
 },
 {
   "stop_id": "17045",
   "stop_name": "TUNNEL FS THAYER",
   "latitude": 41.827682,
   "longitude": -71.400886
 },
 {
   "stop_id": "17050",
   "stop_name": "WATERMAN FS BUTLER",
   "latitude": 41.827997,
   "longitude": -71.385365
 },
 {
   "stop_id": "17055",
   "stop_name": "WATERMAN FS GANO",
   "latitude": 41.82823,
   "longitude": -71.390443
 },
 {
   "stop_id": "17070",
   "stop_name": "N BROADWAY FS DEWEY",
   "latitude": 41.827463,
   "longitude": -71.363605
 },
 {
   "stop_id": "17075",
   "stop_name": "N BROADWAY FS MASSASOIT",
   "latitude": 41.829778,
   "longitude": -71.362798
 },
 {
   "stop_id": "17080",
   "stop_name": "MT PLEASANT NS CHAUCER",
   "latitude": 41.8286,
   "longitude": -71.449185
 },
 {
   "stop_id": "17085",
   "stop_name": "ANGELL AT PRESCOTT LIBRARY",
   "latitude": 41.828357,
   "longitude": -71.398382
 },
 {
   "stop_id": "17095",
   "stop_name": "WATERMAN NS HENDERSON BRIDGE [ON-RAMP]",
   "latitude": 41.827568,
   "longitude": -71.383009
 },
 {
   "stop_id": "17100",
   "stop_name": "ANGELL NS HOPE",
   "latitude": 41.828462,
   "longitude": -71.397302
 },
 {
   "stop_id": "17105",
   "stop_name": "WATERMAN FS WAYLAND",
   "latitude": 41.828519,
   "longitude": -71.388171
 },
 {
   "stop_id": "17120",
   "stop_name": "BROOK FS ANGELL",
   "latitude": 41.828286,
   "longitude": -71.399446
 },
 {
   "stop_id": "17125",
   "stop_name": "MASSASOIT NS HENDERSON BRIDGE [ON-RAMP]",
   "latitude": 41.828758,
   "longitude": -71.371558
 },
 {
   "stop_id": "17135",
   "stop_name": "WAYLAND FS WATERMAN",
   "latitude": 41.828921,
   "longitude": -71.388232
 },
 {
   "stop_id": "17145",
   "stop_name": "PAWTUCKET OPP CENTRE",
   "latitude": 41.829091,
   "longitude": -71.3523
 },
 {
   "stop_id": "17155",
   "stop_name": "PAWTUCKET NS CENTRE",
   "latitude": 41.829941,
   "longitude": -71.351978
 },
 {
   "stop_id": "17165",
   "stop_name": "MANTON OPP BALTIMORE",
   "latitude": 41.829355,
   "longitude": -71.462849
 },
 {
   "stop_id": "17170",
   "stop_name": "ANGELL OPP IVES",
   "latitude": 41.829218,
   "longitude": -71.393025
 },
 {
   "stop_id": "17180",
   "stop_name": "MANTON NS BALTIMORE",
   "latitude": 41.829257,
   "longitude": -71.462606
 },
 {
   "stop_id": "17185",
   "stop_name": "S ANGELL AT 120 S ANGELL",
   "latitude": 41.829247,
   "longitude": -71.383528
 },
 {
   "stop_id": "17190",
   "stop_name": "THAYER NS MEETING",
   "latitude": 41.82922,
   "longitude": -71.400855
 },
 {
   "stop_id": "17215",
   "stop_name": "S ANGELL FS BUTLER",
   "latitude": 41.829588,
   "longitude": -71.385298
 },
 {
   "stop_id": "17220",
   "stop_name": "LEANDER - HILLCREST APTS",
   "latitude": 41.829305,
   "longitude": -71.46083
 },
 {
   "stop_id": "17235",
   "stop_name": "N BROADWAY NS ROSEMERE",
   "latitude": 41.829784,
   "longitude": -71.362679
 },
 {
   "stop_id": "17250",
   "stop_name": "N BROADWAY NS MERRILL",
   "latitude": 41.828413,
   "longitude": -71.363296
 },
 {
   "stop_id": "17255",
   "stop_name": "WAYLAND NS S ANGELL",
   "latitude": 41.829991,
   "longitude": -71.387948
 },
 {
   "stop_id": "17265",
   "stop_name": "GASPEE ST AT TRAIN STATION",
   "latitude": 41.829338,
   "longitude": -71.41384
 },
 {
   "stop_id": "17266",
   "stop_name": "GASPEE NS SMITH",
   "latitude": 41.83081,
   "longitude": -71.412641
 },
 {
   "stop_id": "17270",
   "stop_name": "GASPEE ST OPP TRAIN STATION",
   "latitude": 41.829413,
   "longitude": -71.41391
 },
 {
   "stop_id": "17275",
   "stop_name": "HARTFORD NS RESERVOIR",
   "latitude": 41.829486,
   "longitude": -71.53711
 },
 {
   "stop_id": "17280",
   "stop_name": "N MAIN NS CHURCH",
   "latitude": 41.830783,
   "longitude": -71.410301
 },
 {
   "stop_id": "17285",
   "stop_name": "ANGELL FS WAYLAND",
   "latitude": 41.830134,
   "longitude": -71.388391
 },
 {
   "stop_id": "17290",
   "stop_name": "ANGELL FS ELMGROVE",
   "latitude": 41.829826,
   "longitude": -71.389833
 },
 {
   "stop_id": "17295",
   "stop_name": "DANIELSON PIKE AT 575 DANIELSON PIKE",
   "latitude": 41.830654,
   "longitude": -71.628416
 },
 {
   "stop_id": "17300",
   "stop_name": "HARTFORD FS CORONA",
   "latitude": 41.83186,
   "longitude": -71.545336
 },
 {
   "stop_id": "17315",
   "stop_name": "DANIELSON PIKE OPP 493 DANIELSON PIKE",
   "latitude": 41.830547,
   "longitude": -71.627772
 },
 {
   "stop_id": "17325",
   "stop_name": "MT PLEASANT NS BEAUFORT",
   "latitude": 41.830615,
   "longitude": -71.449494
 },
 {
   "stop_id": "17330",
   "stop_name": "HARTFORD FS BELFIELD",
   "latitude": 41.830358,
   "longitude": -71.530992
 },
 {
   "stop_id": "17355",
   "stop_name": "MANTON NS MANTON CT",
   "latitude": 41.831596,
   "longitude": -71.463688
 },
 {
   "stop_id": "17360",
   "stop_name": "HARTFORD AT TRINITY CHURCH",
   "latitude": 41.830777,
   "longitude": -71.528791
 },
 {
   "stop_id": "17385",
   "stop_name": "N BROADWAY NS DUNBAR",
   "latitude": 41.831398,
   "longitude": -71.361503
 },
 {
   "stop_id": "17390",
   "stop_name": "N BROADWAY NS MEACOMET",
   "latitude": 41.831072,
   "longitude": -71.361974
 },
 {
   "stop_id": "17400",
   "stop_name": "CANAL FS SMITH",
   "latitude": 41.83098,
   "longitude": -71.411328
 },
 {
   "stop_id": "17405",
   "stop_name": "HARTFORD AT POLE 39",
   "latitude": 41.82999,
   "longitude": -71.531539
 },
 {
   "stop_id": "17420",
   "stop_name": "HARTFORD NS EARHART",
   "latitude": 41.8312,
   "longitude": -71.54323
 },
 {
   "stop_id": "17425",
   "stop_name": "BROOK NS HOPE",
   "latitude": 41.831154,
   "longitude": -71.399804
 },
 {
   "stop_id": "17430",
   "stop_name": "THAYER NS BOWEN",
   "latitude": 41.831181,
   "longitude": -71.401104
 },
 {
   "stop_id": "17435",
   "stop_name": "MANTON AT 770 MANTON",
   "latitude": 41.831021,
   "longitude": -71.463795
 },
 {
   "stop_id": "17440",
   "stop_name": "DANIELSON PIKE OPP 449 DANIELSON PIKE",
   "latitude": 41.831399,
   "longitude": -71.617023
 },
 {
   "stop_id": "17460",
   "stop_name": "STATE NS SMITH",
   "latitude": 41.83236,
   "longitude": -71.413401
 },
 {
   "stop_id": "17480",
   "stop_name": "DANIELSON PIKE NS ELMDALE",
   "latitude": 41.831784,
   "longitude": -71.61191
 },
 {
   "stop_id": "17485",
   "stop_name": "DANIELSON PIKE AT STATE POLICE COMPLEX",
   "latitude": 41.831913,
   "longitude": -71.6041
 },
 {
   "stop_id": "17486",
   "stop_name": "DANIELSON PIKE FS BATTY MEETINHOUSE",
   "latitude": 41.831301,
   "longitude": -71.606475
 },
 {
   "stop_id": "17490",
   "stop_name": "SMITH NS GASPEE",
   "latitude": 41.831619,
   "longitude": -71.414471
 },
 {
   "stop_id": "17500",
   "stop_name": "CHALKSTONE AT VA HOSPITAL",
   "latitude": 41.832758,
   "longitude": -71.434433
 },
 {
   "stop_id": "17505",
   "stop_name": "DANIELSON PIKE NS DEXTER",
   "latitude": 41.831522,
   "longitude": -71.615514
 },
 {
   "stop_id": "17510",
   "stop_name": "DANIELSON PIKE NS 272 DANIELSON PIKE",
   "latitude": 41.832656,
   "longitude": -71.600777
 },
 {
   "stop_id": "17515",
   "stop_name": "DANIELSON PIKE NS SHOLLES",
   "latitude": 41.831747,
   "longitude": -71.583625
 },
 {
   "stop_id": "17520",
   "stop_name": "DANIELSON PIKE AT 449 DANIELSON PIKE",
   "latitude": 41.831575,
   "longitude": -71.616911
 },
 {
   "stop_id": "17530",
   "stop_name": "HARTFORD AT 263 HARTFORD",
   "latitude": 41.829666,
   "longitude": -71.532747
 },
 {
   "stop_id": "17535",
   "stop_name": "SMITH FS GASPEE",
   "latitude": 41.831788,
   "longitude": -71.414078
 },
 {
   "stop_id": "17540",
   "stop_name": "SMITH FS PARK",
   "latitude": 41.831809,
   "longitude": -71.4166
 },
 {
   "stop_id": "17545",
   "stop_name": "DANIELSON PIKE OPP SHOLLES",
   "latitude": 41.83183,
   "longitude": -71.583935
 },
 {
   "stop_id": "17555",
   "stop_name": "DANIELSON PIKE FS ROCKLAND",
   "latitude": 41.831959,
   "longitude": -71.611727
 },
 {
   "stop_id": "17556",
   "stop_name": "DANIELSON PIKE NS 443 DANIELSON PIKE",
   "latitude": 41.831698,
   "longitude": -71.615239
 },
 {
   "stop_id": "17560",
   "stop_name": "SMITH NS PARK",
   "latitude": 41.831882,
   "longitude": -71.41562
 },
 {
   "stop_id": "17565",
   "stop_name": "N BROADWAY OPP CENTRE",
   "latitude": 41.832609,
   "longitude": -71.360764
 },
 {
   "stop_id": "17575",
   "stop_name": "PAWTUCKET NS DROWNE PKWAY",
   "latitude": 41.831912,
   "longitude": -71.349919
 },
 {
   "stop_id": "17580",
   "stop_name": "DANIELSON PIKE AT 155 DANIELSON PIKE",
   "latitude": 41.832353,
   "longitude": -71.588693
 },
 {
   "stop_id": "17590",
   "stop_name": "DANIELSON PIKE OPP STATE POLICE COMPLEX",
   "latitude": 41.831776,
   "longitude": -71.604018
 },
 {
   "stop_id": "17595",
   "stop_name": "DANIELSON PIKE S BETSY",
   "latitude": 41.831125,
   "longitude": -71.606525
 },
 {
   "stop_id": "17600",
   "stop_name": "PAWTUCKET NS BLYTHE",
   "latitude": 41.832702,
   "longitude": -71.348411
 },
 {
   "stop_id": "17620",
   "stop_name": "CHALKSTONE FS SISSON",
   "latitude": 41.832088,
   "longitude": -71.455393
 },
 {
   "stop_id": "17625",
   "stop_name": "DANIELSON PIKE AT SCITUATE HARDWARE",
   "latitude": 41.833946,
   "longitude": -71.578733
 },
 {
   "stop_id": "17635",
   "stop_name": "CHALKSTONE NS BERLIN",
   "latitude": 41.83227,
   "longitude": -71.441828
 },
 {
   "stop_id": "17645",
   "stop_name": "CHALKSTONE OPP SISSON",
   "latitude": 41.832259,
   "longitude": -71.455446
 },
 {
   "stop_id": "17655",
   "stop_name": "CHALKSTONE NS BERLIN",
   "latitude": 41.832315,
   "longitude": -71.441486
 },
 {
   "stop_id": "17660",
   "stop_name": "CHALKSTONE FS CANTON",
   "latitude": 41.832347,
   "longitude": -71.442899
 },
 {
   "stop_id": "17665",
   "stop_name": "CHALKSTONE NS GRAY",
   "latitude": 41.832303,
   "longitude": -71.453315
 },
 {
   "stop_id": "17670",
   "stop_name": "SMITH OPP COMMON",
   "latitude": 41.832823,
   "longitude": -71.419608
 },
 {
   "stop_id": "17675",
   "stop_name": "CHALKSTONE OPP ALDINE",
   "latitude": 41.832389,
   "longitude": -71.453766
 },
 {
   "stop_id": "17685",
   "stop_name": "CHALKSTONE NS ACADEMY",
   "latitude": 41.832494,
   "longitude": -71.444936
 },
 {
   "stop_id": "17690",
   "stop_name": "CHALKSTONE FS ACADEMY",
   "latitude": 41.832339,
   "longitude": -71.443711
 },
 {
   "stop_id": "17695",
   "stop_name": "CHALKSTONE NS ACADEMY",
   "latitude": 41.832421,
   "longitude": -71.444113
 },
 {
   "stop_id": "17700",
   "stop_name": "HARTFORD AT 265 HARTFORD",
   "latitude": 41.829387,
   "longitude": -71.534848
 },
 {
   "stop_id": "17705",
   "stop_name": "DANIELSON PIKE MIDBLOCK SPRINGBROOK RD",
   "latitude": 41.832747,
   "longitude": -71.601287
 },
 {
   "stop_id": "17710",
   "stop_name": "CHALKSTONE OPP STANDISH",
   "latitude": 41.832432,
   "longitude": -71.452042
 },
 {
   "stop_id": "17715",
   "stop_name": "CHALKSTONE NS STANDISH",
   "latitude": 41.832546,
   "longitude": -71.452021
 },
 {
   "stop_id": "17720",
   "stop_name": "CHALKSTONE NS LAWN",
   "latitude": 41.832744,
   "longitude": -71.446578
 },
 {
   "stop_id": "17725",
   "stop_name": "CHALKSTONE NS WINTHROP",
   "latitude": 41.832642,
   "longitude": -71.451079
 },
 {
   "stop_id": "17730",
   "stop_name": "CHALKSTONE NS HAROLD",
   "latitude": 41.832372,
   "longitude": -71.439621
 },
 {
   "stop_id": "17745",
   "stop_name": "CHALKSTONE NS BERLIN",
   "latitude": 41.832363,
   "longitude": -71.442337
 },
 {
   "stop_id": "17750",
   "stop_name": "CHALKSTONE NS MT PLEASANT",
   "latitude": 41.832802,
   "longitude": -71.449341
 },
 {
   "stop_id": "17760",
   "stop_name": "DANIELSON PIKE MIDBLOCK INSTITUTE LANE",
   "latitude": 41.832232,
   "longitude": -71.582295
 },
 {
   "stop_id": "17765",
   "stop_name": "CHALKSTONE NS HILLCREST",
   "latitude": 41.832865,
   "longitude": -71.458571
 },
 {
   "stop_id": "17770",
   "stop_name": "DANIELSON PIKE FS N SCITUATE FIRE DEPT",
   "latitude": 41.832869,
   "longitude": -71.591366
 },
 {
   "stop_id": "17775",
   "stop_name": "STOP&SHOP (MANTON AVENUE - PROVIDENCE)",
   "latitude": 41.832444,
   "longitude": -71.465879
 },
 {
   "stop_id": "17780",
   "stop_name": "CHALKSTONE OPP LAWN",
   "latitude": 41.832696,
   "longitude": -71.446591
 },
 {
   "stop_id": "17790",
   "stop_name": "HARTFORD FS BROWN",
   "latitude": 41.832796,
   "longitude": -71.549487
 },
 {
   "stop_id": "17795",
   "stop_name": "CHALKSTONE NS MT PLEASANT",
   "latitude": 41.83262,
   "longitude": -71.450299
 },
 {
   "stop_id": "17805",
   "stop_name": "CHALKSTONE OPP HILLCREST",
   "latitude": 41.833012,
   "longitude": -71.458629
 },
 {
   "stop_id": "17810",
   "stop_name": "CHALKSTONE NS RIVER",
   "latitude": 41.832747,
   "longitude": -71.43837
 },
 {
   "stop_id": "17825",
   "stop_name": "SMITH FS COMMON",
   "latitude": 41.832855,
   "longitude": -71.419433
 },
 {
   "stop_id": "17830",
   "stop_name": "GREENVILLE OPP 30 GREENVILLE",
   "latitude": 41.833024,
   "longitude": -71.472251
 },
 {
   "stop_id": "17835",
   "stop_name": "HARTFORD MIDBLOCK PENDLETON",
   "latitude": 41.82932,
   "longitude": -71.537558
 },
 {
   "stop_id": "17845",
   "stop_name": "HOPE OPP BARNES",
   "latitude": 41.832911,
   "longitude": -71.400831
 },
 {
   "stop_id": "17850",
   "stop_name": "GREENVILLE NS TRAVER",
   "latitude": 41.832699,
   "longitude": -71.4709
 },
 {
   "stop_id": "17855",
   "stop_name": "THAYER OPP 373 THAYER",
   "latitude": 41.832729,
   "longitude": -71.40132
 },
 {
   "stop_id": "17860",
   "stop_name": "CHALKSTONE NS HARMONY",
   "latitude": 41.83314,
   "longitude": -71.460647
 },
 {
   "stop_id": "17870",
   "stop_name": "PAWTUCKET NS BARBARA",
   "latitude": 41.832772,
   "longitude": -71.348261
 },
 {
   "stop_id": "17875",
   "stop_name": "MANTON AT 989 MANTON",
   "latitude": 41.833235,
   "longitude": -71.469905
 },
 {
   "stop_id": "17885",
   "stop_name": "CHALKSTONE AT 1632 CHALKSTONE",
   "latitude": 41.832836,
   "longitude": -71.462892
 },
 {
   "stop_id": "17890",
   "stop_name": "MANTON OPP 871 MANTON",
   "latitude": 41.833496,
   "longitude": -71.465879
 },
 {
   "stop_id": "17905",
   "stop_name": "GREENVILLE OPP LEE",
   "latitude": 41.833143,
   "longitude": -71.473695
 },
 {
   "stop_id": "17910",
   "stop_name": "CHALKSTONE FS OBADIAH BROWN",
   "latitude": 41.833088,
   "longitude": -71.46161
 },
 {
   "stop_id": "17920",
   "stop_name": "HARTFORD OPP CORONA",
   "latitude": 41.831646,
   "longitude": -71.545366
 },
 {
   "stop_id": "17925",
   "stop_name": "CHALKSTONE FS FERN",
   "latitude": 41.83296,
   "longitude": -71.437422
 },
 {
   "stop_id": "17936",
   "stop_name": "STATE FS ORMS (STATE OFFICES)",
   "latitude": 41.833821,
   "longitude": -71.413928
 },
 {
   "stop_id": "17940",
   "stop_name": "CHALKSTONE OPP ROGER WILLIAMS HOSPITAL",
   "latitude": 41.833677,
   "longitude": -71.435494
 },
 {
   "stop_id": "17945",
   "stop_name": "MANTON OPP 985 MANTON",
   "latitude": 41.833152,
   "longitude": -71.469827
 },
 {
   "stop_id": "17950",
   "stop_name": "HARTFORD NS PINE GROVE",
   "latitude": 41.833069,
   "longitude": -71.553351
 },
 {
   "stop_id": "17960",
   "stop_name": "HARTFORD FS PINE GROVE",
   "latitude": 41.833226,
   "longitude": -71.553395
 },
 {
   "stop_id": "17965",
   "stop_name": " FRUIT HILL FS HUBER",
   "latitude": 41.834493,
   "longitude": -71.46797
 },
 {
   "stop_id": "17970",
   "stop_name": "GREENVILLE OPP CECIL",
   "latitude": 41.833524,
   "longitude": -71.475164
 },
 {
   "stop_id": "17975",
   "stop_name": "SMITH NS ORMS",
   "latitude": 41.833524,
   "longitude": -71.421251
 },
 {
   "stop_id": "17980",
   "stop_name": "CHALKSTONE AT 1644 CHALKSTONE",
   "latitude": 41.833231,
   "longitude": -71.463577
 },
 {
   "stop_id": "17985",
   "stop_name": "ELMGROVE NS UNIVERSITY",
   "latitude": 41.833322,
   "longitude": -71.390444
 },
 {
   "stop_id": "17990",
   "stop_name": "MANTON AT 883 MANTON",
   "latitude": 41.833592,
   "longitude": -71.465913
 },
 {
   "stop_id": "18000",
   "stop_name": "CHALKSTONE AT ROGER WILLIAMS HOSPITAL",
   "latitude": 41.834024,
   "longitude": -71.434638
 },
 {
   "stop_id": "18005",
   "stop_name": "GREENVILLE AT 63 GREENVILLE",
   "latitude": 41.833518,
   "longitude": -71.47474
 },
 {
   "stop_id": "18010",
   "stop_name": "MANTON AT 954 MANTON",
   "latitude": 41.833615,
   "longitude": -71.46876
 },
 {
   "stop_id": "18015",
   "stop_name": "SMITH NS ORMS",
   "latitude": 41.833921,
   "longitude": -71.422479
 },
 {
   "stop_id": "18025",
   "stop_name": "HARTFORD FS 2741 HARTFORD",
   "latitude": 41.833562,
   "longitude": -71.558359
 },
 {
   "stop_id": "18030",
   "stop_name": "PAWTUCKET NS GREENWOOD",
   "latitude": 41.834781,
   "longitude": -71.348302
 },
 {
   "stop_id": "18045",
   "stop_name": "DANIELSON PIKE FS 33 DANIELSON PIKE",
   "latitude": 41.834091,
   "longitude": -71.578835
 },
 {
   "stop_id": "18050",
   "stop_name": "MANTON NS WESTCOTT",
   "latitude": 41.833822,
   "longitude": -71.468478
 },
 {
   "stop_id": "18060",
   "stop_name": "MT PLEASANT AT 260 MT PLEASANT",
   "latitude": 41.833483,
   "longitude": -71.450068
 },
 {
   "stop_id": "18065",
   "stop_name": "DANIELSON PIKE AT SCITUATE VILLAGE",
   "latitude": 41.835254,
   "longitude": -71.573381
 },
 {
   "stop_id": "18070",
   "stop_name": "HARTFORD AT 2650 HARTFORD",
   "latitude": 41.833394,
   "longitude": -71.558573
 },
 {
   "stop_id": "18080",
   "stop_name": "HOPE NS ALUMNI",
   "latitude": 41.834601,
   "longitude": -71.401252
 },
 {
   "stop_id": "18085",
   "stop_name": "CHALKSTONE NS GARFIELD",
   "latitude": 41.833881,
   "longitude": -71.43265
 },
 {
   "stop_id": "18090",
   "stop_name": "SMITH FS DUKE",
   "latitude": 41.834771,
   "longitude": -71.424672
 },
 {
   "stop_id": "18095",
   "stop_name": "CHALKSTONE FS GARFIELD",
   "latitude": 41.833828,
   "longitude": -71.432265
 },
 {
   "stop_id": "18100",
   "stop_name": "SMITH FS NOLAN",
   "latitude": 41.834573,
   "longitude": -71.423805
 },
 {
   "stop_id": "18105",
   "stop_name": "CHALKSTONE FS RAYMOND",
   "latitude": 41.83424,
   "longitude": -71.429822
 },
 {
   "stop_id": "18110",
   "stop_name": "FRUIT HILL NS HUBER",
   "latitude": 41.834257,
   "longitude": -71.46802
 },
 {
   "stop_id": "18125",
   "stop_name": "CHARLES NS ORMS",
   "latitude": 41.83445,
   "longitude": -71.411274
 },
 {
   "stop_id": "18135",
   "stop_name": "CHARLES FS ORMS",
   "latitude": 41.834473,
   "longitude": -71.411442
 },
 {
   "stop_id": "18140",
   "stop_name": "GREENVILLE OPP 150 GREENVILLE",
   "latitude": 41.835545,
   "longitude": -71.478231
 },
 {
   "stop_id": "18145",
   "stop_name": "HARTFORD AT 2525 HARTFORD",
   "latitude": 41.833889,
   "longitude": -71.561031
 },
 {
   "stop_id": "18150",
   "stop_name": "HARTFORD OPP 2828 HARTFORD",
   "latitude": 41.834193,
   "longitude": -71.561531
 },
 {
   "stop_id": "18160",
   "stop_name": "CHALKSTONE OPP AYRAULT",
   "latitude": 41.834443,
   "longitude": -71.429202
 },
 {
   "stop_id": "18165",
   "stop_name": "ROGER WILLIAMS AT 20 ROGER WILLIAMS",
   "latitude": 41.834062,
   "longitude": -71.360766
 },
 {
   "stop_id": "18180",
   "stop_name": "GREENVILLE OPP BECKER",
   "latitude": 41.834937,
   "longitude": -71.477192
 },
 {
   "stop_id": "18185",
   "stop_name": "PAWTUCKET OPP ELMSGATE WAY",
   "latitude": 41.834184,
   "longitude": -71.347977
 },
 {
   "stop_id": "18195",
   "stop_name": "CHALKSTONE NS ZONE",
   "latitude": 41.834641,
   "longitude": -71.427876
 },
 {
   "stop_id": "18200",
   "stop_name": "MT PLEASANT NS BOLTON",
   "latitude": 41.835299,
   "longitude": -71.450288
 },
 {
   "stop_id": "18215",
   "stop_name": "HARTFORD NS BISHOP",
   "latitude": 41.834322,
   "longitude": -71.563091
 },
 {
   "stop_id": "18225",
   "stop_name": "DOUGLAS NS ORMS",
   "latitude": 41.835028,
   "longitude": -71.417096
 },
 {
   "stop_id": "18235",
   "stop_name": "DOUGLAS OPP GODDARD",
   "latitude": 41.835152,
   "longitude": -71.417229
 },
 {
   "stop_id": "18240",
   "stop_name": "HARTFORD FS HOPKINS",
   "latitude": 41.834999,
   "longitude": -71.566916
 },
 {
   "stop_id": "18245",
   "stop_name": "CHALKSTONE NS BATH",
   "latitude": 41.835088,
   "longitude": -71.426047
 },
 {
   "stop_id": "18250",
   "stop_name": "SMITH NS CHALKSTONE",
   "latitude": 41.835295,
   "longitude": -71.425976
 },
 {
   "stop_id": "18255",
   "stop_name": "ELMGROVE NS PRESIDENT",
   "latitude": 41.835144,
   "longitude": -71.391098
 },
 {
   "stop_id": "18260",
   "stop_name": "CHALKSTONE FS SMITH",
   "latitude": 41.835092,
   "longitude": -71.426411
 },
 {
   "stop_id": "18280",
   "stop_name": "HARTFORD OPP 525 HARTFORD",
   "latitude": 41.834815,
   "longitude": -71.567538
 },
 {
   "stop_id": "18285",
   "stop_name": "MT PLEASANT AT 318 MT PLEASANT",
   "latitude": 41.835316,
   "longitude": -71.450488
 },
 {
   "stop_id": "18290",
   "stop_name": "HOPE NS CARRINGTON",
   "latitude": 41.83665,
   "longitude": -71.401204
 },
 {
   "stop_id": "18295",
   "stop_name": "SMITH FS CHALKSTONE",
   "latitude": 41.83534,
   "longitude": -71.425689
 },
 {
   "stop_id": "18315",
   "stop_name": "GREENVILLE AT 177 GREENVILLE",
   "latitude": 41.836459,
   "longitude": -71.48031
 },
 {
   "stop_id": "18320",
   "stop_name": "HARTFORD OPP RIDGEWOOD",
   "latitude": 41.835058,
   "longitude": -71.570322
 },
 {
   "stop_id": "18325",
   "stop_name": "ROGER WILLIAMS NS N BROADWAY",
   "latitude": 41.83427,
   "longitude": -71.361073
 },
 {
   "stop_id": "18330",
   "stop_name": "PAWTUCKET NS MILLER",
   "latitude": 41.835437,
   "longitude": -71.348332
 },
 {
   "stop_id": "18335",
   "stop_name": "PAWTUCKET AT 1315 PAWTUCKET",
   "latitude": 41.836683,
   "longitude": -71.348702
 },
 {
   "stop_id": "18340",
   "stop_name": "HARTFORD OPP SCITUATE VILLAGE",
   "latitude": 41.835483,
   "longitude": -71.573208
 },
 {
   "stop_id": "18345",
   "stop_name": "DOUGLAS NS BERNON",
   "latitude": 41.83584,
   "longitude": -71.419132
 },
 {
   "stop_id": "18360",
   "stop_name": "GREENVILLE OPP 177 GREENVILLE",
   "latitude": 41.836153,
   "longitude": -71.479796
 },
 {
   "stop_id": "18380",
   "stop_name": "DOUGLAS NS CHALKSTONE",
   "latitude": 41.835966,
   "longitude": -71.419255
 },
 {
   "stop_id": "18390",
   "stop_name": "CHARLES 201 CHARLES MATHEMATICAL SOCIETY",
   "latitude": 41.836689,
   "longitude": -71.412642
 },
 {
   "stop_id": "18395",
   "stop_name": "DOUGLAS NS CHALKSTONE",
   "latitude": 41.836811,
   "longitude": -71.42148
 },
 {
   "stop_id": "18405",
   "stop_name": "ROGER WILLIAMS NS DALTON",
   "latitude": 41.8369,
   "longitude": -71.361812
 },
 {
   "stop_id": "18410",
   "stop_name": "SMITH FS FREDERICK",
   "latitude": 41.836091,
   "longitude": -71.428763
 },
 {
   "stop_id": "18435",
   "stop_name": "WOONASQUATUCKET NS KLONDIKE",
   "latitude": 41.836937,
   "longitude": -71.469346
 },
 {
   "stop_id": "18440",
   "stop_name": "GREENVILLE OPP 203 GREENVILLE",
   "latitude": 41.836587,
   "longitude": -71.481022
 },
 {
   "stop_id": "18445",
   "stop_name": "UNIVERSITY HEIGHTS (R-LINE)",
   "latitude": 41.836882,
   "longitude": -71.409504
 },
 {
   "stop_id": "18455",
   "stop_name": "HOPE FS HOWELL",
   "latitude": 41.837758,
   "longitude": -71.40066
 },
 {
   "stop_id": "18470",
   "stop_name": "UNIVERSITY HEIGHTS (R-LINE)",
   "latitude": 41.83706,
   "longitude": -71.409882
 },
 {
   "stop_id": "18475",
   "stop_name": "DOUGLAS OPP CRIMEA",
   "latitude": 41.837097,
   "longitude": -71.421833
 },
 {
   "stop_id": "18480",
   "stop_name": "ROGER WILLIAMS NS WILSON",
   "latitude": 41.837333,
   "longitude": -71.361801
 },
 {
   "stop_id": "18485",
   "stop_name": "SMITH NS MAUDE",
   "latitude": 41.837602,
   "longitude": -71.433655
 },
 {
   "stop_id": "18505",
   "stop_name": "DOUGLAS NS CANDACE",
   "latitude": 41.837494,
   "longitude": -71.423169
 },
 {
   "stop_id": "18510",
   "stop_name": "SMITH OPP MAUDE",
   "latitude": 41.837618,
   "longitude": -71.433385
 },
 {
   "stop_id": "18525",
   "stop_name": "HOPE S CARRINGTON",
   "latitude": 41.83668,
   "longitude": -71.401111
 },
 {
   "stop_id": "18526",
   "stop_name": "OLNEY AT HOPE HIGH SCHOOL",
   "latitude": 41.835663,
   "longitude": -71.402779
 },
 {
   "stop_id": "18530",
   "stop_name": "ELMGROVE NS FREEMAN PKWAY",
   "latitude": 41.837719,
   "longitude": -71.391875
 },
 {
   "stop_id": "18550",
   "stop_name": "GREENVILLE OPP LYMAN",
   "latitude": 41.838901,
   "longitude": -71.483247
 },
 {
   "stop_id": "18555",
   "stop_name": "PAWTUCKET OPP KENTON",
   "latitude": 41.839787,
   "longitude": -71.349408
 },
 {
   "stop_id": "18565",
   "stop_name": "PAWTUCKET NS ST MICHAELS",
   "latitude": 41.837689,
   "longitude": -71.348845
 },
 {
   "stop_id": "18585",
   "stop_name": "WOONASQUATUCKET OPP JOHN E FOGARTY CTR",
   "latitude": 41.840636,
   "longitude": -71.475585
 },
 {
   "stop_id": "18590",
   "stop_name": "CAMP NS DOYLE",
   "latitude": 41.839043,
   "longitude": -71.404259
 },
 {
   "stop_id": "18600",
   "stop_name": "SMITH NS HILLTOP",
   "latitude": 41.838665,
   "longitude": -71.43567
 },
 {
   "stop_id": "18605",
   "stop_name": "CAMP FS DOYLE",
   "latitude": 41.83907,
   "longitude": -71.404099
 },
 {
   "stop_id": "18615",
   "stop_name": "CHARLESGATE (R-LINE)",
   "latitude": 41.83902,
   "longitude": -71.409008
 },
 {
   "stop_id": "18625",
   "stop_name": "HOPE FS DOYLE",
   "latitude": 41.838627,
   "longitude": -71.400201
 },
 {
   "stop_id": "18635",
   "stop_name": "CHARLESGATE (R-LINE)",
   "latitude": 41.838843,
   "longitude": -71.409442
 },
 {
   "stop_id": "18655",
   "stop_name": "WOONASQUATUCKET FS METCALF",
   "latitude": 41.839057,
   "longitude": -71.473023
 },
 {
   "stop_id": "18665",
   "stop_name": "WOONASQUATUCKET OPP 264 WOONASQUATUCKET",
   "latitude": 41.842475,
   "longitude": -71.476577
 },
 {
   "stop_id": "18670",
   "stop_name": "WILSON NS WASHBURN",
   "latitude": 41.838852,
   "longitude": -71.360174
 },
 {
   "stop_id": "18685",
   "stop_name": "WILSON FS ROGER WILLIAMS",
   "latitude": 41.838749,
   "longitude": -71.360133
 },
 {
   "stop_id": "18690",
   "stop_name": "GEORGE WATERMAN OPP SHERIDAN",
   "latitude": 41.840176,
   "longitude": -71.484537
 },
 {
   "stop_id": "18695",
   "stop_name": "HOPE NS OBSERVATORY",
   "latitude": 41.839229,
   "longitude": -71.399802
 },
 {
   "stop_id": "18710",
   "stop_name": "DOUGLAS FS CHAD BROWN",
   "latitude": 41.838989,
   "longitude": -71.425569
 },
 {
   "stop_id": "18715",
   "stop_name": "DOUGLAS FS CHAD BROWN",
   "latitude": 41.839523,
   "longitude": -71.426036
 },
 {
   "stop_id": "18720",
   "stop_name": "MT PLEASANT HIGH SCHOOL",
   "latitude": 41.839935,
   "longitude": -71.452546
 },
 {
   "stop_id": "18721",
   "stop_name": "MT PLEASANT AT MT PLEASANT HIGH SCHOOL",
   "latitude": 41.841146,
   "longitude": -71.45255
 },
 {
   "stop_id": "18725",
   "stop_name": "MT PLEASANT NS WHITFORD",
   "latitude": 41.838434,
   "longitude": -71.451427
 },
 {
   "stop_id": "18730",
   "stop_name": "SMITH NS WYNDAM",
   "latitude": 41.839593,
   "longitude": -71.437866
 },
 {
   "stop_id": "18735",
   "stop_name": "CAMP NS PLEASANT",
   "latitude": 41.840158,
   "longitude": -71.403915
 },
 {
   "stop_id": "18750",
   "stop_name": "PAWTUCKET NS KENTON",
   "latitude": 41.839588,
   "longitude": -71.349283
 },
 {
   "stop_id": "18760",
   "stop_name": "CHARLES NS W RIVER",
   "latitude": 41.839416,
   "longitude": -71.416041
 },
 {
   "stop_id": "18780",
   "stop_name": "CHARLES FS W RIVER",
   "latitude": 41.839318,
   "longitude": -71.416199
 },
 {
   "stop_id": "18795",
   "stop_name": "CHARLES OPP ADMIRAL",
   "latitude": 41.841156,
   "longitude": -71.417458
 },
 {
   "stop_id": "18800",
   "stop_name": "WOONASQUATUCKET AT JOHN E FOGERTY CTR",
   "latitude": 41.840668,
   "longitude": -71.475666
 },
 {
   "stop_id": "18805",
   "stop_name": "WILSON OPP DUNCAN",
   "latitude": 41.840126,
   "longitude": -71.357855
 },
 {
   "stop_id": "18830",
   "stop_name": "WILSON AT ELM",
   "latitude": 41.840242,
   "longitude": -71.357615
 },
 {
   "stop_id": "18835",
   "stop_name": "ADMIRAL NS FILMORE",
   "latitude": 41.840946,
   "longitude": -71.420054
 },
 {
   "stop_id": "18845",
   "stop_name": "GEORGE WATERMAN OPP 95 GEORGE WATERMAN",
   "latitude": 41.842436,
   "longitude": -71.485484
 },
 {
   "stop_id": "18850",
   "stop_name": "GEORGE WATERMAN AT 33 GEORGE WATERMAN",
   "latitude": 41.840358,
   "longitude": -71.48448
 },
 {
   "stop_id": "18855",
   "stop_name": "SMITH NS RIVER",
   "latitude": 41.840617,
   "longitude": -71.440223
 },
 {
   "stop_id": "18860",
   "stop_name": "DOUGLAS OPP SUFFOLK",
   "latitude": 41.840421,
   "longitude": -71.426922
 },
 {
   "stop_id": "18870",
   "stop_name": "HOPE NS MOUNT HOPE",
   "latitude": 41.840526,
   "longitude": -71.399289
 },
 {
   "stop_id": "18885",
   "stop_name": "HOPE NS CYPRESS",
   "latitude": 41.840939,
   "longitude": -71.398944
 },
 {
   "stop_id": "18895",
   "stop_name": "DOUGLAS NS EATON",
   "latitude": 41.840884,
   "longitude": -71.427199
 },
 {
   "stop_id": "18905",
   "stop_name": "PAWTUCKET NS NEWMAN",
   "latitude": 41.840855,
   "longitude": -71.349551
 },
 {
   "stop_id": "18910",
   "stop_name": "CAMP NS LOCUST",
   "latitude": 41.841193,
   "longitude": -71.403338
 },
 {
   "stop_id": "18920",
   "stop_name": "COLLEGE NS MT PLEASANT",
   "latitude": 41.841651,
   "longitude": -71.453265
 },
 {
   "stop_id": "18930",
   "stop_name": "PAWTUCKET OPP ST MARGARET",
   "latitude": 41.844337,
   "longitude": -71.35142
 },
 {
   "stop_id": "18935",
   "stop_name": "ELMGROVE FS SESSIONS",
   "latitude": 41.84225,
   "longitude": -71.392595
 },
 {
   "stop_id": "18940",
   "stop_name": "CAMP NS LOCUST",
   "latitude": 41.841568,
   "longitude": -71.403215
 },
 {
   "stop_id": "18965",
   "stop_name": "SMITH NS JASTRAM",
   "latitude": 41.841854,
   "longitude": -71.443553
 },
 {
   "stop_id": "18975",
   "stop_name": "SMITH NS JASTRAM",
   "latitude": 41.841845,
   "longitude": -71.443266
 },
 {
   "stop_id": "18990",
   "stop_name": "ADMIRAL NS HUXLEY",
   "latitude": 41.846774,
   "longitude": -71.432814
 },
 {
   "stop_id": "18995",
   "stop_name": "RHODE ISLAND COLLEGE (ROBERTS HALL)",
   "latitude": 41.841629,
   "longitude": -71.460627
 },
 {
   "stop_id": "19000",
   "stop_name": "ADMIRAL FS HUXLEY",
   "latitude": 41.846816,
   "longitude": -71.432772
 },
 {
   "stop_id": "19005",
   "stop_name": "WOONASQUATUCKET AT 311 WOONASQUATUCKET",
   "latitude": 41.84425,
   "longitude": -71.477039
 },
 {
   "stop_id": "19010",
   "stop_name": "WOONASQUATUCKET OPP LYMAN",
   "latitude": 41.842038,
   "longitude": -71.476361
 },
 {
   "stop_id": "19030",
   "stop_name": "ADMIRAL NS CLARKSON",
   "latitude": 41.842341,
   "longitude": -71.421437
 },
 {
   "stop_id": "19055",
   "stop_name": "WILSON NS GREENWOOD",
   "latitude": 41.841998,
   "longitude": -71.356914
 },
 {
   "stop_id": "19060",
   "stop_name": "DOUGLAS OPP BERKSHIRE",
   "latitude": 41.841765,
   "longitude": -71.427513
 },
 {
   "stop_id": "19065",
   "stop_name": "CAMP FS CYPRESS",
   "latitude": 41.842328,
   "longitude": -71.402742
 },
 {
   "stop_id": "19070",
   "stop_name": "NORTH BURIAL GROUND (R-LINE)",
   "latitude": 41.842258,
   "longitude": -71.407565
 },
 {
   "stop_id": "19080",
   "stop_name": "SMITH NS ACADEMY",
   "latitude": 41.842653,
   "longitude": -71.445407
 },
 {
   "stop_id": "19095",
   "stop_name": "NORTH BURIAL GROUND (R-LINE)",
   "latitude": 41.843117,
   "longitude": -71.407408
 },
 {
   "stop_id": "19100",
   "stop_name": "WILSON NS GREENWOOD",
   "latitude": 41.842657,
   "longitude": -71.356757
 },
 {
   "stop_id": "19105",
   "stop_name": "DOUGLAS AT 434 DOUGLAS",
   "latitude": 41.84217,
   "longitude": -71.427539
 },
 {
   "stop_id": "19115",
   "stop_name": "GEORGE WATERMAN OPP 116 GEORGE WATERMAN",
   "latitude": 41.84354,
   "longitude": -71.485546
 },
 {
   "stop_id": "19140",
   "stop_name": "ADMIRAL NS PUMGANSETT",
   "latitude": 41.842837,
   "longitude": -71.422195
 },
 {
   "stop_id": "19155",
   "stop_name": "GEORGE WATERMAN OPP RICE",
   "latitude": 41.845319,
   "longitude": -71.486604
 },
 {
   "stop_id": "19170",
   "stop_name": "CAMP NS ABBOTT",
   "latitude": 41.843134,
   "longitude": -71.402499
 },
 {
   "stop_id": "19175",
   "stop_name": "WOONASQUATUCKET OPP 297 WOONASQUATUCKET",
   "latitude": 41.843355,
   "longitude": -71.477189
 },
 {
   "stop_id": "19190",
   "stop_name": "ADMIRAL NS SUFFOLK",
   "latitude": 41.8427,
   "longitude": -71.421929
 },
 {
   "stop_id": "19205",
   "stop_name": "SMITH OPP MODENA",
   "latitude": 41.843809,
   "longitude": -71.448061
 },
 {
   "stop_id": "19210",
   "stop_name": "DOUGLAS NS MOWRY",
   "latitude": 41.843526,
   "longitude": -71.427754
 },
 {
   "stop_id": "19215",
   "stop_name": "DOUGLAS NS MOWRY",
   "latitude": 41.843721,
   "longitude": -71.427919
 },
 {
   "stop_id": "19220",
   "stop_name": "HOPE FS ELGIN",
   "latitude": 41.843539,
   "longitude": -71.397749
 },
 {
   "stop_id": "19230",
   "stop_name": "CAMP NS FOREST",
   "latitude": 41.843929,
   "longitude": -71.402134
 },
 {
   "stop_id": "19235",
   "stop_name": "SMITH OPP HILARY",
   "latitude": 41.844676,
   "longitude": -71.449407
 },
 {
   "stop_id": "19240",
   "stop_name": "HUXLEY AT PC ENTRANCE",
   "latitude": 41.844135,
   "longitude": -71.433159
 },
 {
   "stop_id": "19245",
   "stop_name": "BUTLER HOSPITAL",
   "latitude": 41.843352,
   "longitude": -71.381404
 },
 {
   "stop_id": "19250",
   "stop_name": "ADMIRAL NS BERKSHIRE",
   "latitude": 41.844284,
   "longitude": -71.423846
 },
 {
   "stop_id": "19260",
   "stop_name": "MT PLEASANT AT ST AUGUSTINES SCHOOL",
   "latitude": 41.845538,
   "longitude": -71.453609
 },
 {
   "stop_id": "19300",
   "stop_name": "ADMIRAL NS BERKSHIRE",
   "latitude": 41.844161,
   "longitude": -71.423584
 },
 {
   "stop_id": "19315",
   "stop_name": "WILSON NS HAMMOND",
   "latitude": 41.844787,
   "longitude": -71.355861
 },
 {
   "stop_id": "19320",
   "stop_name": "WOONASQUATUCKET AT 387 WOONASQUATUCKET",
   "latitude": 41.846578,
   "longitude": -71.477059
 },
 {
   "stop_id": "19340",
   "stop_name": "CHARLES OPP 403 CHARLES",
   "latitude": 41.845635,
   "longitude": -71.419029
 },
 {
   "stop_id": "19345",
   "stop_name": "GEORGE WATERMAN AT 225 GEORGE WATERMAN",
   "latitude": 41.846664,
   "longitude": -71.486679
 },
 {
   "stop_id": "19350",
   "stop_name": "SMITH NS HILARY",
   "latitude": 41.844881,
   "longitude": -71.449997
 },
 {
   "stop_id": "19365",
   "stop_name": "CHARLES FS SILVER SPRING",
   "latitude": 41.84566,
   "longitude": -71.418898
 },
 {
   "stop_id": "19370",
   "stop_name": "270 ADMIRAL ST",
   "latitude": 41.845059,
   "longitude": -71.424973
 },
 {
   "stop_id": "19380",
   "stop_name": "ADMIRAL FS LONGMONT",
   "latitude": 41.84543,
   "longitude": -71.426076
 },
 {
   "stop_id": "19395",
   "stop_name": "ADMIRAL FS NEWCOMB",
   "latitude": 41.845382,
   "longitude": -71.426126
 },
 {
   "stop_id": "19400",
   "stop_name": "HOPE FS DANA",
   "latitude": 41.845026,
   "longitude": -71.397022
 },
 {
   "stop_id": "19410",
   "stop_name": "CAMP FS WOODBINE",
   "latitude": 41.845721,
   "longitude": -71.401215
 },
 {
   "stop_id": "19415",
   "stop_name": "HOPE FS LEWIS",
   "latitude": 41.845789,
   "longitude": -71.396533
 },
 {
   "stop_id": "19420",
   "stop_name": "DOUGLAS OPP COGGESHALL",
   "latitude": 41.845258,
   "longitude": -71.428624
 },
 {
   "stop_id": "19425",
   "stop_name": "ELMGROVE NS ROCHAMBEAU",
   "latitude": 41.846153,
   "longitude": -71.391385
 },
 {
   "stop_id": "19430",
   "stop_name": "ADMIRAL OPP 318 ADMIRAL",
   "latitude": 41.845583,
   "longitude": -71.426692
 },
 {
   "stop_id": "19445",
   "stop_name": "CAMP FS LANCASTER",
   "latitude": 41.845889,
   "longitude": -71.40123
 },
 {
   "stop_id": "19450",
   "stop_name": "SILVER SPRING OPP WALMART",
   "latitude": 41.845685,
   "longitude": -71.417675
 },
 {
   "stop_id": "19455",
   "stop_name": "DOUGLAS NS ADMIRAL",
   "latitude": 41.845668,
   "longitude": -71.428758
 },
 {
   "stop_id": "19460",
   "stop_name": "ROCHAMBEAU NS BLACKSTONE",
   "latitude": 41.845541,
   "longitude": -71.387306
 },
 {
   "stop_id": "19475",
   "stop_name": "ADMIRAL OPP TAPPAN",
   "latitude": 41.845724,
   "longitude": -71.427642
 },
 {
   "stop_id": "19490",
   "stop_name": "ADMIRAL NS GRAPE",
   "latitude": 41.846281,
   "longitude": -71.430314
 },
 {
   "stop_id": "19495",
   "stop_name": "SMITH FS OLD",
   "latitude": 41.846114,
   "longitude": -71.452022
 },
 {
   "stop_id": "19505",
   "stop_name": "ADMIRAL NS HAWKINS",
   "latitude": 41.845894,
   "longitude": -71.428064
 },
 {
   "stop_id": "19520",
   "stop_name": "ROCHAMBEAU NS COLE",
   "latitude": 41.845872,
   "longitude": -71.389364
 },
 {
   "stop_id": "19530",
   "stop_name": "BLACKSTONE FS ROCHAMBEAU",
   "latitude": 41.846121,
   "longitude": -71.386708
 },
 {
   "stop_id": "19535",
   "stop_name": "ROCHAMBEAU FS CAMP",
   "latitude": 41.84654,
   "longitude": -71.40159
 },
 {
   "stop_id": "19540",
   "stop_name": "WOONASQUATUCKET OPP INTERVALE",
   "latitude": 41.846661,
   "longitude": -71.477204
 },
 {
   "stop_id": "19545",
   "stop_name": "SILVER SPRING AT 130 SILVER SPRING",
   "latitude": 41.847325,
   "longitude": -71.415412
 },
 {
   "stop_id": "19550",
   "stop_name": "BUTLER HOSPITAL ACCESS RD FS BLACKSTONE",
   "latitude": 41.845879,
   "longitude": -71.383373
 },
 {
   "stop_id": "19555",
   "stop_name": "ROCHAMBEAU OPP 62 ROCHAMBEAU",
   "latitude": 41.846534,
   "longitude": -71.402652
 },
 {
   "stop_id": "19560",
   "stop_name": "WOONASQUATUCKET NS ZIPPORAH",
   "latitude": 41.846297,
   "longitude": -71.477001
 },
 {
   "stop_id": "19565",
   "stop_name": "CHARLES NS LOMBARDI",
   "latitude": 41.84681,
   "longitude": -71.419375
 },
 {
   "stop_id": "19570",
   "stop_name": "ADMIRAL NS DANTE",
   "latitude": 41.846633,
   "longitude": -71.431747
 },
 {
   "stop_id": "19575",
   "stop_name": "ROCHAMBEAU FS N MAIN",
   "latitude": 41.846679,
   "longitude": -71.404623
 },
 {
   "stop_id": "19585",
   "stop_name": "CHARLES OPP 469 CHARLES",
   "latitude": 41.847072,
   "longitude": -71.419364
 },
 {
   "stop_id": "19590",
   "stop_name": "GEORGE WATERMAN NS GARNER",
   "latitude": 41.849028,
   "longitude": -71.48664
 },
 {
   "stop_id": "19595",
   "stop_name": "ROCHAMBEAU AVENUE (R-LINE)",
   "latitude": 41.846576,
   "longitude": -71.405405
 },
 {
   "stop_id": "19605",
   "stop_name": "BUTLER HOSPITAL ACCESS RD NS BLACKSTONE",
   "latitude": 41.845932,
   "longitude": -71.383297
 },
 {
   "stop_id": "19610",
   "stop_name": "ROCHAMBEAU AT 62 ROCHAMBEAU",
   "latitude": 41.84663,
   "longitude": -71.40255
 },
 {
   "stop_id": "19615",
   "stop_name": "ROCHAMBEAU AVENUE (R-LINE)",
   "latitude": 41.846622,
   "longitude": -71.405064
 },
 {
   "stop_id": "19625",
   "stop_name": "SMITH NS LONGWOOD",
   "latitude": 41.846793,
   "longitude": -71.453197
 },
 {
   "stop_id": "19630",
   "stop_name": "GEORGE WATERMAN OPP VINE",
   "latitude": 41.84846,
   "longitude": -71.486811
 },
 {
   "stop_id": "19635",
   "stop_name": "DOUGLAS FS CORINA",
   "latitude": 41.846827,
   "longitude": -71.429811
 },
 {
   "stop_id": "19655",
   "stop_name": "HOPE FS ROCHAMBEAU",
   "latitude": 41.846691,
   "longitude": -71.396237
 },
 {
   "stop_id": "19660",
   "stop_name": "WILSON NS PAWTUCKET",
   "latitude": 41.846784,
   "longitude": -71.354199
 },
 {
   "stop_id": "19680",
   "stop_name": "SMITH OPP BRIGHTWOOD",
   "latitude": 41.847151,
   "longitude": -71.454208
 },
 {
   "stop_id": "19685",
   "stop_name": "SMITH OPP MT PLEASANT",
   "latitude": 41.847652,
   "longitude": -71.455068
 },
 {
   "stop_id": "19695",
   "stop_name": "DOUGLAS OPP 623 DOUGLAS AVE",
   "latitude": 41.847023,
   "longitude": -71.430196
 },
 {
   "stop_id": "19700",
   "stop_name": "SILVER SPRING NS BRANCH",
   "latitude": 41.847729,
   "longitude": -71.414796
 },
 {
   "stop_id": "19710",
   "stop_name": "WOONASQUATUCKET AT 463 WOONASQUATUCKET",
   "latitude": 41.850635,
   "longitude": -71.479841
 },
 {
   "stop_id": "19725",
   "stop_name": "BLACKSTONE AT SWAN PT CEMETARY",
   "latitude": 41.847884,
   "longitude": -71.386777
 },
 {
   "stop_id": "19735",
   "stop_name": "BLACKSTONE AT 420 BLACKSTONE",
   "latitude": 41.847545,
   "longitude": -71.387336
 },
 {
   "stop_id": "19755",
   "stop_name": "N MAIN OPP DEXTERDALE",
   "latitude": 41.84824,
   "longitude": -71.404364
 },
 {
   "stop_id": "19760",
   "stop_name": "DOUGLAS FS MESSINA",
   "latitude": 41.848785,
   "longitude": -71.432029
 },
 {
   "stop_id": "19765",
   "stop_name": "DOUGLAS FS DAMON",
   "latitude": 41.848951,
   "longitude": -71.432435
 },
 {
   "stop_id": "19770",
   "stop_name": "GEORGE WATERMAN NS ALLENDALE",
   "latitude": 41.850068,
   "longitude": -71.486801
 },
 {
   "stop_id": "19780",
   "stop_name": "SMITH FS HIGH SERVICE",
   "latitude": 41.848859,
   "longitude": -71.458167
 },
 {
   "stop_id": "19785",
   "stop_name": "WOONASQUATUCKET NS ROCKWELL",
   "latitude": 41.848909,
   "longitude": -71.478662
 },
 {
   "stop_id": "19790",
   "stop_name": "SILVER SPRING OPP ASHTON",
   "latitude": 41.848711,
   "longitude": -71.414138
 },
 {
   "stop_id": "19800",
   "stop_name": "WOONASQUATUCKET AT 545 WOONASQUATUCKET",
   "latitude": 41.852413,
   "longitude": -71.480901
 },
 {
   "stop_id": "19805",
   "stop_name": "SILVER SPRING FS ASHTON",
   "latitude": 41.848645,
   "longitude": -71.414263
 },
 {
   "stop_id": "19810",
   "stop_name": "BLACKSTONE FS HARTFORD",
   "latitude": 41.848629,
   "longitude": -71.387392
 },
 {
   "stop_id": "19815",
   "stop_name": "BLACKSTONE AT POLE 105",
   "latitude": 41.850485,
   "longitude": -71.386864
 },
 {
   "stop_id": "19825",
   "stop_name": "HOPE FS LAURISTON",
   "latitude": 41.848469,
   "longitude": -71.395349
 },
 {
   "stop_id": "19830",
   "stop_name": "HOPE FS LAURISTON",
   "latitude": 41.849209,
   "longitude": -71.394863
 },
 {
   "stop_id": "19845",
   "stop_name": "GEORGE WATERMAN NS 311 GEORGE WATERMAN",
   "latitude": 41.850399,
   "longitude": -71.486622
 },
 {
   "stop_id": "19850",
   "stop_name": "SMITH FS WELLESLEY",
   "latitude": 41.849683,
   "longitude": -71.460309
 },
 {
   "stop_id": "19855",
   "stop_name": "ADMIRAL NS SEAMANS",
   "latitude": 41.849828,
   "longitude": -71.44042
 },
 {
   "stop_id": "19860",
   "stop_name": "N MAIN AT 1052 N MAIN",
   "latitude": 41.849464,
   "longitude": -71.403588
 },
 {
   "stop_id": "19865",
   "stop_name": "ADMIRAL NS RIVER",
   "latitude": 41.849323,
   "longitude": -71.439287
 },
 {
   "stop_id": "19870",
   "stop_name": "NEWPORT NS ELMWOOD",
   "latitude": 41.84847,
   "longitude": -71.354419
 },
 {
   "stop_id": "19875",
   "stop_name": "NEWPORT OPP ELMWOOD",
   "latitude": 41.849187,
   "longitude": -71.354503
 },
 {
   "stop_id": "19880",
   "stop_name": "DOUGLAS FS SHERWOOD",
   "latitude": 41.849658,
   "longitude": -71.433109
 },
 {
   "stop_id": "19885",
   "stop_name": "SMITH OPP WELLESLEY",
   "latitude": 41.849621,
   "longitude": -71.460466
 },
 {
   "stop_id": "19900",
   "stop_name": "SILVER SPRING NS GRAFTON",
   "latitude": 41.849999,
   "longitude": -71.413536
 },
 {
   "stop_id": "19905",
   "stop_name": "BLACKSTONE FS HARWICH",
   "latitude": 41.85,
   "longitude": -71.387436
 },
 {
   "stop_id": "19915",
   "stop_name": "THIRD STREET (R-LINE)",
   "latitude": 41.851356,
   "longitude": -71.402151
 },
 {
   "stop_id": "19920",
   "stop_name": "ADMIRAL NS CRANDALL",
   "latitude": 41.849607,
   "longitude": -71.439771
 },
 {
   "stop_id": "19925",
   "stop_name": "CHARLES NS BRANCH",
   "latitude": 41.849999,
   "longitude": -71.419874
 },
 {
   "stop_id": "19930",
   "stop_name": "BLACKSTONE AT POLE 107",
   "latitude": 41.85142,
   "longitude": -71.387072
 },
 {
   "stop_id": "19935",
   "stop_name": "CHARLES FS BRANCH",
   "latitude": 41.850187,
   "longitude": -71.420061
 },
 {
   "stop_id": "19940",
   "stop_name": "ADMIRAL NS ZELLA",
   "latitude": 41.849776,
   "longitude": -71.4404
 },
 {
   "stop_id": "19945",
   "stop_name": "DOUGLAS OPP SHERWOOD",
   "latitude": 41.849456,
   "longitude": -71.432987
 },
 {
   "stop_id": "19950",
   "stop_name": "WOONASQUATUCKET OPP 511 WOONASQUATUCKET",
   "latitude": 41.850788,
   "longitude": -71.480143
 },
 {
   "stop_id": "19955",
   "stop_name": "GEORGE WATERMAN AT FAMILY AUTO SALES",
   "latitude": 41.852944,
   "longitude": -71.487702
 },
 {
   "stop_id": "19965",
   "stop_name": "DOUGLAS NS EASTON",
   "latitude": 41.850683,
   "longitude": -71.434419
 },
 {
   "stop_id": "19970",
   "stop_name": "SMITH NS HOMEWOOD",
   "latitude": 41.8505,
   "longitude": -71.462538
 },
 {
   "stop_id": "19975",
   "stop_name": "DOUGLAS OPP VEAZIE",
   "latitude": 41.850532,
   "longitude": -71.434127
 },
 {
   "stop_id": "19980",
   "stop_name": "GEORGE WATERMAN OPP MILTON",
   "latitude": 41.852619,
   "longitude": -71.48732
 },
 {
   "stop_id": "19985",
   "stop_name": "SMITH NS LOOKOUT",
   "latitude": 41.850727,
   "longitude": -71.462697
 },
 {
   "stop_id": "19995",
   "stop_name": "N MAIN OPP 2ND",
   "latitude": 41.850704,
   "longitude": -71.402838
 },
 {
   "stop_id": "20000",
   "stop_name": "HOPE FS OVERHILL",
   "latitude": 41.851161,
   "longitude": -71.39401
 },
 {
   "stop_id": "20010",
   "stop_name": "WOONASQUATUCKET AT 542 WOONASQUATUCKET",
   "latitude": 41.852328,
   "longitude": -71.480935
 },
 {
   "stop_id": "20015",
   "stop_name": "HOPE NS OVERHILL",
   "latitude": 41.851099,
   "longitude": -71.393934
 },
 {
   "stop_id": "20020",
   "stop_name": "ADMIRAL FS SHARON",
   "latitude": 41.850648,
   "longitude": -71.442809
 },
 {
   "stop_id": "20030",
   "stop_name": "ADMIRAL NS PHEBE",
   "latitude": 41.850713,
   "longitude": -71.442831
 },
 {
   "stop_id": "20055",
   "stop_name": "NEWPORT OPP VISTA",
   "latitude": 41.851535,
   "longitude": -71.354331
 },
 {
   "stop_id": "20065",
   "stop_name": "CHARLES BETWEEN BRANCH & HAWKINS",
   "latitude": 41.850917,
   "longitude": -71.420141
 },
 {
   "stop_id": "20085",
   "stop_name": "SILVER SPRING NS FELIX MURANDO",
   "latitude": 41.85141,
   "longitude": -71.413034
 },
 {
   "stop_id": "20090",
   "stop_name": "ADMIRAL NS MIDDLE",
   "latitude": 41.851727,
   "longitude": -71.444787
 },
 {
   "stop_id": "20095",
   "stop_name": "NEWPORT NS ROGER WILLIAMS",
   "latitude": 41.852612,
   "longitude": -71.354411
 },
 {
   "stop_id": "20105",
   "stop_name": "SILVER SPRING NS NORTHROP",
   "latitude": 41.85198,
   "longitude": -71.413024
 },
 {
   "stop_id": "20115",
   "stop_name": "DOUGLAS AT 860 DOUGLAS",
   "latitude": 41.851827,
   "longitude": -71.435683
 },
 {
   "stop_id": "20120",
   "stop_name": "ADMIRAL FS WINONA",
   "latitude": 41.85217,
   "longitude": -71.445418
 },
 {
   "stop_id": "20125",
   "stop_name": "SMITH OPP TURCONE",
   "latitude": 41.852264,
   "longitude": -71.466026
 },
 {
   "stop_id": "20135",
   "stop_name": "WOONASQUATUCKET OPP STEVENS",
   "latitude": 41.85461,
   "longitude": -71.48191
 },
 {
   "stop_id": "20150",
   "stop_name": "SMITH FS TURCONE",
   "latitude": 41.852407,
   "longitude": -71.466114
 },
 {
   "stop_id": "20155",
   "stop_name": "GEORGE WATERMAN OPP BRADFORD",
   "latitude": 41.854204,
   "longitude": -71.488097
 },
 {
   "stop_id": "20160",
   "stop_name": "ADMIRAL OPP WINONA",
   "latitude": 41.852269,
   "longitude": -71.445388
 },
 {
   "stop_id": "20175",
   "stop_name": "GEORGE WATERMAN NS GANO",
   "latitude": 41.85466,
   "longitude": -71.488457
 },
 {
   "stop_id": "20180",
   "stop_name": "DOUGLAS NS RIVER",
   "latitude": 41.852565,
   "longitude": -71.436778
 },
 {
   "stop_id": "20185",
   "stop_name": "DOUGLAS OPP CONCANNON",
   "latitude": 41.853241,
   "longitude": -71.437912
 },
 {
   "stop_id": "20195",
   "stop_name": "SILVER SPRING OPP LEDGE",
   "latitude": 41.853443,
   "longitude": -71.412502
 },
 {
   "stop_id": "20215",
   "stop_name": "CHARLES FS NAHANT",
   "latitude": 41.852709,
   "longitude": -71.420385
 },
 {
   "stop_id": "20220",
   "stop_name": "SILVER SPRING NS LEDGE",
   "latitude": 41.853691,
   "longitude": -71.412534
 },
 {
   "stop_id": "20235",
   "stop_name": "ADMIRAL FS GENERAL",
   "latitude": 41.853383,
   "longitude": -71.446185
 },
 {
   "stop_id": "20245",
   "stop_name": "WOONASQUATUCKET NS GEORGE",
   "latitude": 41.855439,
   "longitude": -71.482314
 },
 {
   "stop_id": "20250",
   "stop_name": "HOPE FS NORTH",
   "latitude": 41.853601,
   "longitude": -71.39269
 },
 {
   "stop_id": "20255",
   "stop_name": "DOUGLAS AT 933 DOUGLAS",
   "latitude": 41.853277,
   "longitude": -71.437849
 },
 {
   "stop_id": "20260",
   "stop_name": "BRANCH NS WOODWARD",
   "latitude": 41.853538,
   "longitude": -71.427839
 },
 {
   "stop_id": "20275",
   "stop_name": "CHARLES FS LEDGE",
   "latitude": 41.853219,
   "longitude": -71.420345
 },
 {
   "stop_id": "20280",
   "stop_name": "HOPE NS 9TH",
   "latitude": 41.853718,
   "longitude": -71.392814
 },
 {
   "stop_id": "20285",
   "stop_name": "GEORGE WATERMAN NS AMBER",
   "latitude": 41.856528,
   "longitude": -71.489295
 },
 {
   "stop_id": "20290",
   "stop_name": "DOUGLAS NS SEAMANS",
   "latitude": 41.853818,
   "longitude": -71.438833
 },
 {
   "stop_id": "20295",
   "stop_name": "BRANCH FS VANDEWATER",
   "latitude": 41.853815,
   "longitude": -71.428987
 },
 {
   "stop_id": "20300",
   "stop_name": "DOUGLAS NS SEAMANS",
   "latitude": 41.853902,
   "longitude": -71.438825
 },
 {
   "stop_id": "20305",
   "stop_name": "SMITH NS LANTANGE",
   "latitude": 41.854195,
   "longitude": -71.468828
 },
 {
   "stop_id": "20320",
   "stop_name": "ADMIRAL NS WANSKUCK",
   "latitude": 41.853375,
   "longitude": -71.44627
 },
 {
   "stop_id": "20330",
   "stop_name": "SMITH NS WHIPPLE",
   "latitude": 41.854331,
   "longitude": -71.470645
 },
 {
   "stop_id": "20335",
   "stop_name": "DOUGLAS OPP HENRIETTA",
   "latitude": 41.854374,
   "longitude": -71.439664
 },
 {
   "stop_id": "20345",
   "stop_name": "SMITH OPP WHIPPLE",
   "latitude": 41.854448,
   "longitude": -71.470695
 },
 {
   "stop_id": "20350",
   "stop_name": "BRANCH OPP HUGO",
   "latitude": 41.854418,
   "longitude": -71.431619
 },
 {
   "stop_id": "20360",
   "stop_name": "BRANCH OPP 725 BRANCH",
   "latitude": 41.854116,
   "longitude": -71.430806
 },
 {
   "stop_id": "20370",
   "stop_name": "CHARLES OPP AMBOY",
   "latitude": 41.855558,
   "longitude": -71.420856
 },
 {
   "stop_id": "20380",
   "stop_name": "SMITH FS ATLANTIC",
   "latitude": 41.854556,
   "longitude": -71.473291
 },
 {
   "stop_id": "20385",
   "stop_name": "NEWPORT OPP TAYLOR",
   "latitude": 41.854926,
   "longitude": -71.354448
 },
 {
   "stop_id": "20390",
   "stop_name": "EAST AVE FS LAFAYETTE",
   "latitude": 41.85789,
   "longitude": -71.390621
 },
 {
   "stop_id": "20395",
   "stop_name": "SMITH NS GAINER",
   "latitude": 41.85471,
   "longitude": -71.47353
 },
 {
   "stop_id": "20400",
   "stop_name": "BRANCH FS VEAZIE",
   "latitude": 41.854626,
   "longitude": -71.434352
 },
 {
   "stop_id": "20420",
   "stop_name": "BRANCH NS VEAZIE",
   "latitude": 41.854749,
   "longitude": -71.434604
 },
 {
   "stop_id": "20430",
   "stop_name": "WOONASQUATUCKET FS STEVENS",
   "latitude": 41.854698,
   "longitude": -71.482068
 },
 {
   "stop_id": "20435",
   "stop_name": "WOONASQUATUCKET AT 649 WOONASQUATUCKET",
   "latitude": 41.856344,
   "longitude": -71.482683
 },
 {
   "stop_id": "20445",
   "stop_name": "SMITH NS FENWAY",
   "latitude": 41.855185,
   "longitude": -71.476828
 },
 {
   "stop_id": "20465",
   "stop_name": "BRANCH NS 971 BRANCH",
   "latitude": 41.855137,
   "longitude": -71.438082
 },
 {
   "stop_id": "20470",
   "stop_name": "BRANCH AT 962 BRANCH",
   "latitude": 41.855083,
   "longitude": -71.438558
 },
 {
   "stop_id": "20475",
   "stop_name": "NINTH STREET (R-LINE)",
   "latitude": 41.854789,
   "longitude": -71.400234
 },
 {
   "stop_id": "20480",
   "stop_name": "SILVER SPRING NS SWIFT",
   "latitude": 41.855719,
   "longitude": -71.411225
 },
 {
   "stop_id": "20490",
   "stop_name": "SMITH OPP FENWAY",
   "latitude": 41.855285,
   "longitude": -71.476757
 },
 {
   "stop_id": "20505",
   "stop_name": "HIGH SERVICE NS FATIMA",
   "latitude": 41.855898,
   "longitude": -71.458544
 },
 {
   "stop_id": "20515",
   "stop_name": "NEWPORT OPP NEW RD",
   "latitude": 41.855793,
   "longitude": -71.354399
 },
 {
   "stop_id": "20525",
   "stop_name": "SILVER SPRING OPP SWIFT",
   "latitude": 41.855303,
   "longitude": -71.41138
 },
 {
   "stop_id": "20530",
   "stop_name": "SMITHFIELD FS SHAWS MARKET",
   "latitude": 41.855335,
   "longitude": -71.447559
 },
 {
   "stop_id": "20535",
   "stop_name": "NINTH STREET",
   "latitude": 41.85492,
   "longitude": -71.400502
 },
 {
   "stop_id": "20540",
   "stop_name": "DOUGLAS OPP LUBEC",
   "latitude": 41.855742,
   "longitude": -71.441595
 },
 {
   "stop_id": "20545",
   "stop_name": "DOUGLAS NS LUBEC",
   "latitude": 41.855799,
   "longitude": -71.44187
 },
 {
   "stop_id": "20555",
   "stop_name": "SMITH FS FERNCLIFF",
   "latitude": 41.855788,
   "longitude": -71.47874
 },
 {
   "stop_id": "20560",
   "stop_name": "SMITH NS FERNCLIFF",
   "latitude": 41.855859,
   "longitude": -71.478705
 },
 {
   "stop_id": "20565",
   "stop_name": "GEORGE WATERMAN NS SWAN",
   "latitude": 41.857548,
   "longitude": -71.489386
 },
 {
   "stop_id": "20575",
   "stop_name": "CHARLES NS AMBOY",
   "latitude": 41.855286,
   "longitude": -71.42066
 },
 {
   "stop_id": "20600",
   "stop_name": "SMITHFIELD OPP PALOU",
   "latitude": 41.85618,
   "longitude": -71.450736
 },
 {
   "stop_id": "20610",
   "stop_name": "N MAIN FS ANN MARY",
   "latitude": 41.855833,
   "longitude": -71.40008
 },
 {
   "stop_id": "20615",
   "stop_name": "HOPE NS CHACE",
   "latitude": 41.856289,
   "longitude": -71.391505
 },
 {
   "stop_id": "20620",
   "stop_name": "SMITHFIELD NS PALOU",
   "latitude": 41.856235,
   "longitude": -71.450231
 },
 {
   "stop_id": "20625",
   "stop_name": "DOUGLAS AT 1115 DOUGLAS",
   "latitude": 41.856398,
   "longitude": -71.442671
 },
 {
   "stop_id": "20640",
   "stop_name": "HIGH SERVICE AT FATIMA HOSPITAL",
   "latitude": 41.856103,
   "longitude": -71.458739
 },
 {
   "stop_id": "20665",
   "stop_name": "SHAW S MARKET",
   "latitude": 41.856124,
   "longitude": -71.446988
 },
 {
   "stop_id": "20670",
   "stop_name": "GEORGE WATERMAN OPP 503 GEORGE WATERMAN",
   "latitude": 41.857311,
   "longitude": -71.489594
 },
 {
   "stop_id": "20675",
   "stop_name": "HIGH SERVICE NS STANLEY",
   "latitude": 41.857461,
   "longitude": -71.460974
 },
 {
   "stop_id": "20685",
   "stop_name": "CHARLES OPP HOGAN",
   "latitude": 41.857093,
   "longitude": -71.421048
 },
 {
   "stop_id": "20720",
   "stop_name": "SMITH NS WOONASQUATUCKET",
   "latitude": 41.856789,
   "longitude": -71.482333
 },
 {
   "stop_id": "20725",
   "stop_name": "SMITHFIELD OPP SALEM",
   "latitude": 41.857239,
   "longitude": -71.45424
 },
 {
   "stop_id": "20730",
   "stop_name": "SMITH NS STEERE",
   "latitude": 41.857211,
   "longitude": -71.483634
 },
 {
   "stop_id": "20740",
   "stop_name": "SMITHFIELD NS SALEM",
   "latitude": 41.857443,
   "longitude": -71.454393
 },
 {
   "stop_id": "20745",
   "stop_name": "DOUGLAS OPP 1159 DOUGLAS AVE",
   "latitude": 41.857435,
   "longitude": -71.444422
 },
 {
   "stop_id": "20750",
   "stop_name": "DOUGLAS AT 1159 DOUGLAS",
   "latitude": 41.857353,
   "longitude": -71.444125
 },
 {
   "stop_id": "20755",
   "stop_name": "EAST AVE NS LAFAYETTE",
   "latitude": 41.857854,
   "longitude": -71.390713
 },
 {
   "stop_id": "20760",
   "stop_name": "GEORGE WATERMAN OPP 338 GEORGE WATERMAN",
   "latitude": 41.859184,
   "longitude": -71.488833
 },
 {
   "stop_id": "20770",
   "stop_name": "SMITH OPP CENTERDALE BYPASS",
   "latitude": 41.856732,
   "longitude": -71.482428
 },
 {
   "stop_id": "20780",
   "stop_name": "SMITHFIELD AT 250 SMITHFIELD",
   "latitude": 41.85834,
   "longitude": -71.457513
 },
 {
   "stop_id": "20785",
   "stop_name": "PAWTUCKET FS PIDGE",
   "latitude": 41.858436,
   "longitude": -71.398398
 },
 {
   "stop_id": "20795",
   "stop_name": "SILVER SPRING NS COLFAX",
   "latitude": 41.858634,
   "longitude": -71.410817
 },
 {
   "stop_id": "20815",
   "stop_name": "SMITHFIELD OPP 250 SMITHFIELD",
   "latitude": 41.858346,
   "longitude": -71.457223
 },
 {
   "stop_id": "20830",
   "stop_name": "MINERAL SPRING OPP SWEET",
   "latitude": 41.858415,
   "longitude": -71.481666
 },
 {
   "stop_id": "20835",
   "stop_name": "NEWPORT NS VERMONT",
   "latitude": 41.857929,
   "longitude": -71.354537
 },
 {
   "stop_id": "20840",
   "stop_name": "MINERAL SPRING FS THOMAS",
   "latitude": 41.858375,
   "longitude": -71.482404
 },
 {
   "stop_id": "20845",
   "stop_name": "SMITH AT 2048 SMITH",
   "latitude": 41.858174,
   "longitude": -71.485611
 },
 {
   "stop_id": "20850",
   "stop_name": "DOUGLAS OPP SHAW'S ENTRANCE",
   "latitude": 41.858762,
   "longitude": -71.446224
 },
 {
   "stop_id": "20860",
   "stop_name": "MINERAL SPRING OPP JOSLIN",
   "latitude": 41.858715,
   "longitude": -71.479988
 },
 {
   "stop_id": "20865",
   "stop_name": "NARRAGANSETT PARK NS BALLYS",
   "latitude": 41.858248,
   "longitude": -71.350541
 },
 {
   "stop_id": "20870",
   "stop_name": "CHARLES FS RAPHAEL",
   "latitude": 41.859401,
   "longitude": -71.421744
 },
 {
   "stop_id": "20875",
   "stop_name": "SMITHFIELD NS POWER",
   "latitude": 41.860128,
   "longitude": -71.411327
 },
 {
   "stop_id": "20880",
   "stop_name": "MINERAL SPRING FS JOSLIN",
   "latitude": 41.858739,
   "longitude": -71.480512
 },
 {
   "stop_id": "20885",
   "stop_name": "CHARLES FS LEO",
   "latitude": 41.859615,
   "longitude": -71.421988
 },
 {
   "stop_id": "20900",
   "stop_name": "MINERAL SPRING OPP BROWN",
   "latitude": 41.858989,
   "longitude": -71.477677
 },
 {
   "stop_id": "20910",
   "stop_name": "MINERAL SPRING OPP 2148 MINERAL SPRING",
   "latitude": 41.858908,
   "longitude": -71.478657
 },
 {
   "stop_id": "20915",
   "stop_name": "GRENVILLE STREET (R-LINE)",
   "latitude": 41.859039,
   "longitude": -71.39887
 },
 {
   "stop_id": "20920",
   "stop_name": "PAWTUCKET NS CARVER",
   "latitude": 41.859412,
   "longitude": -71.397663
 },
 {
   "stop_id": "20930",
   "stop_name": "MINERAL SPRING NS S BROOKSIDE",
   "latitude": 41.859251,
   "longitude": -71.476351
 },
 {
   "stop_id": "20935",
   "stop_name": "GEORGE WATERMAN AT 536 GEORGE WATERMAN",
   "latitude": 41.858502,
   "longitude": -71.489235
 },
 {
   "stop_id": "20940",
   "stop_name": "MINERAL SPRING NS BROOKSIDE",
   "latitude": 41.859366,
   "longitude": -71.475921
 },
 {
   "stop_id": "20950",
   "stop_name": "NEWPORT AT 24 NEWPORT",
   "latitude": 41.860066,
   "longitude": -71.354598
 },
 {
   "stop_id": "20960",
   "stop_name": "EAST AVE FS PROGRESS",
   "latitude": 41.860628,
   "longitude": -71.389264
 },
 {
   "stop_id": "20965",
   "stop_name": "MINERAL SPRING FS RAYMOND",
   "latitude": 41.859418,
   "longitude": -71.474257
 },
 {
   "stop_id": "20970",
   "stop_name": "MINERAL SPRING NS REYNOLDS",
   "latitude": 41.859581,
   "longitude": -71.4741
 },
 {
   "stop_id": "20975",
   "stop_name": "DOUGLAS FS CUSHING",
   "latitude": 41.859728,
   "longitude": -71.447797
 },
 {
   "stop_id": "20980",
   "stop_name": "MINERAL SPRING NS S PLEASANT",
   "latitude": 41.859574,
   "longitude": -71.472921
 },
 {
   "stop_id": "20990",
   "stop_name": "MINERAL SPRING FS CENTRAL",
   "latitude": 41.859803,
   "longitude": -71.472044
 },
 {
   "stop_id": "21000",
   "stop_name": "WATERMAN NS CENTERDALE BYPASS",
   "latitude": 41.859477,
   "longitude": -71.486228
 },
 {
   "stop_id": "21005",
   "stop_name": "EAST AVE NS GLENWOOD",
   "latitude": 41.859782,
   "longitude": -71.389806
 },
 {
   "stop_id": "21010",
   "stop_name": "SMITHFIELD AT 126 SMITHFIELD",
   "latitude": 41.86241,
   "longitude": -71.411856
 },
 {
   "stop_id": "21030",
   "stop_name": "MINERAL SPRING OPP MCGUIRE",
   "latitude": 41.859781,
   "longitude": -71.471001
 },
 {
   "stop_id": "21045",
   "stop_name": "MINERAL SPRING NS MCGUIRE",
   "latitude": 41.859975,
   "longitude": -71.47075
 },
 {
   "stop_id": "21050",
   "stop_name": "NEWPORT FS BEVERAGE HILL",
   "latitude": 41.861232,
   "longitude": -71.354398
 },
 {
   "stop_id": "21055",
   "stop_name": "BEVERAGE HILL NS DEWEY",
   "latitude": 41.860842,
   "longitude": -71.358905
 },
 {
   "stop_id": "21060",
   "stop_name": "BEVERAGE HILL NS PROSPECT",
   "latitude": 41.860747,
   "longitude": -71.367665
 },
 {
   "stop_id": "21065",
   "stop_name": "BEVERAGE HILL NS CHARLETON",
   "latitude": 41.860658,
   "longitude": -71.371019
 },
 {
   "stop_id": "21070",
   "stop_name": "BEVERAGE HILL FS WOODHAVEN",
   "latitude": 41.860876,
   "longitude": -71.356386
 },
 {
   "stop_id": "21075",
   "stop_name": "BEVERAGE HILL NS WILLISTON",
   "latitude": 41.8609,
   "longitude": -71.355289
 },
 {
   "stop_id": "21080",
   "stop_name": "BEVERAGE HILL NS DODGE",
   "latitude": 41.860699,
   "longitude": -71.367446
 },
 {
   "stop_id": "21090",
   "stop_name": "BEVERAGE HILL AT 368 BEVERAGE HILL",
   "latitude": 41.860838,
   "longitude": -71.361213
 },
 {
   "stop_id": "21095",
   "stop_name": "GRENVILLE STREET (R-LINE)",
   "latitude": 41.858771,
   "longitude": -71.398996
 },
 {
   "stop_id": "21100",
   "stop_name": "SUNSET AND BOURNE",
   "latitude": 41.861199,
   "longitude": -71.469188
 },
 {
   "stop_id": "21110",
   "stop_name": "PAWTUCKET NS DARTMOUTH",
   "latitude": 41.861257,
   "longitude": -71.395842
 },
 {
   "stop_id": "21115",
   "stop_name": "MINERAL SPRING OPP SUNSET",
   "latitude": 41.860168,
   "longitude": -71.468757
 },
 {
   "stop_id": "21120",
   "stop_name": "MINERAL SPRING OPP 1860 MINERAL SPRING",
   "latitude": 41.861043,
   "longitude": -71.464644
 },
 {
   "stop_id": "21125",
   "stop_name": "MINERAL SPRING OPP MARILYN",
   "latitude": 41.860827,
   "longitude": -71.465257
 },
 {
   "stop_id": "21130",
   "stop_name": "DOUGLAS AT 1307 DOUGLAS",
   "latitude": 41.860992,
   "longitude": -71.449599
 },
 {
   "stop_id": "21140",
   "stop_name": "WATERMAN OPP HELEN",
   "latitude": 41.860972,
   "longitude": -71.487048
 },
 {
   "stop_id": "21155",
   "stop_name": "WATERMAN NS HELEN",
   "latitude": 41.861016,
   "longitude": -71.486917
 },
 {
   "stop_id": "21160",
   "stop_name": "MINERAL SPRING MIDBLOCK SMITHFIELD RD",
   "latitude": 41.861537,
   "longitude": -71.461965
 },
 {
   "stop_id": "21195",
   "stop_name": "MINERAL SPRING AT 1830 MINERAL SPRING",
   "latitude": 41.861493,
   "longitude": -71.46187
 },
 {
   "stop_id": "21200",
   "stop_name": "CHARLES NS BROWN",
   "latitude": 41.86192,
   "longitude": -71.422653
 },
 {
   "stop_id": "21205",
   "stop_name": "MINERAL SPRING NS HAWTHORNE",
   "latitude": 41.862053,
   "longitude": -71.459147
 },
 {
   "stop_id": "21215",
   "stop_name": "CHARLES FS ROOSEVELT",
   "latitude": 41.861825,
   "longitude": -71.422846
 },
 {
   "stop_id": "21225",
   "stop_name": "SMITHFIELD OPP 114 SMITHFIELD",
   "latitude": 41.862238,
   "longitude": -71.411707
 },
 {
   "stop_id": "21235",
   "stop_name": "PROSPECT FS BEVERAGE HILL",
   "latitude": 41.861143,
   "longitude": -71.368721
 },
 {
   "stop_id": "21240",
   "stop_name": "MINERAL SPRING AT 1800 MINERAL SPRING",
   "latitude": 41.862233,
   "longitude": -71.457557
 },
 {
   "stop_id": "21245",
   "stop_name": "DOUGLAS FS SALEM",
   "latitude": 41.861987,
   "longitude": -71.451225
 },
 {
   "stop_id": "21250",
   "stop_name": "HOPE ARTISTE VILLAGE (R-LINE)",
   "latitude": 41.863,
   "longitude": -71.399278
 },
 {
   "stop_id": "21270",
   "stop_name": "MINERAL SPRING NS TIMBER",
   "latitude": 41.862372,
   "longitude": -71.457578
 },
 {
   "stop_id": "21290",
   "stop_name": "HOPE ARTISTE VILLAGE (R-LINE)",
   "latitude": 41.862648,
   "longitude": -71.39916
 },
 {
   "stop_id": "21295",
   "stop_name": "MINERAL SPRING AT 1704 MINERAL SPRING",
   "latitude": 41.863029,
   "longitude": -71.453914
 },
 {
   "stop_id": "21300",
   "stop_name": "EAST AVE OPP SAYLES",
   "latitude": 41.862704,
   "longitude": -71.388231
 },
 {
   "stop_id": "21305",
   "stop_name": "PAWTUCKET NS WALTHAM",
   "latitude": 41.863153,
   "longitude": -71.39414
 },
 {
   "stop_id": "21310",
   "stop_name": "WATERMAN OPP SAWIN",
   "latitude": 41.862861,
   "longitude": -71.487981
 },
 {
   "stop_id": "21315",
   "stop_name": "MINERAL SPRING FS ANDOVER",
   "latitude": 41.862895,
   "longitude": -71.455111
 },
 {
   "stop_id": "21320",
   "stop_name": "MINERAL SPRING FS DOUGLAS",
   "latitude": 41.863477,
   "longitude": -71.452038
 },
 {
   "stop_id": "21330",
   "stop_name": "WATERMAN NS SAWIN",
   "latitude": 41.862898,
   "longitude": -71.48792
 },
 {
   "stop_id": "21335",
   "stop_name": "EAST AVE NS SAYLES",
   "latitude": 41.863202,
   "longitude": -71.388099
 },
 {
   "stop_id": "21340",
   "stop_name": "DOUGLAS FS MINERAL SPRING",
   "latitude": 41.862969,
   "longitude": -71.452688
 },
 {
   "stop_id": "21345",
   "stop_name": "CHARLES FS HURDIS",
   "latitude": 41.863292,
   "longitude": -71.42331
 },
 {
   "stop_id": "21350",
   "stop_name": "MINERAL SPRING FS LEE",
   "latitude": 41.863974,
   "longitude": -71.450503
 },
 {
   "stop_id": "21355",
   "stop_name": "CHARLES NS MACARI",
   "latitude": 41.863427,
   "longitude": -71.423222
 },
 {
   "stop_id": "21360",
   "stop_name": "DOUGLAS NS MINERAL SPRING",
   "latitude": 41.862981,
   "longitude": -71.452419
 },
 {
   "stop_id": "21375",
   "stop_name": "PROSPECT AT 560 PROSPECT",
   "latitude": 41.862149,
   "longitude": -71.369841
 },
 {
   "stop_id": "21380",
   "stop_name": "PAWTUCKET NS ANTHONY",
   "latitude": 41.864217,
   "longitude": -71.393321
 },
 {
   "stop_id": "21385",
   "stop_name": "SMITHFIELD OPP PIAVE",
   "latitude": 41.864033,
   "longitude": -71.412144
 },
 {
   "stop_id": "21390",
   "stop_name": "SMITHFIELD NS PIAVE",
   "latitude": 41.864124,
   "longitude": -71.412297
 },
 {
   "stop_id": "21395",
   "stop_name": "PAWTUCKET NS SAYLES",
   "latitude": 41.864747,
   "longitude": -71.392707
 },
 {
   "stop_id": "21435",
   "stop_name": "DOUGLAS AT 1445 DOUGLAS",
   "latitude": 41.864542,
   "longitude": -71.45484
 },
 {
   "stop_id": "21445",
   "stop_name": "DOUGLAS OPP AMELIA",
   "latitude": 41.86481,
   "longitude": -71.455455
 },
 {
   "stop_id": "21450",
   "stop_name": "SAYLES AVENUE (R-LINE)",
   "latitude": 41.865187,
   "longitude": -71.399179
 },
 {
   "stop_id": "21455",
   "stop_name": "SAYLES AVENUE (R-LINE)",
   "latitude": 41.8651,
   "longitude": -71.39929
 },
 {
   "stop_id": "21460",
   "stop_name": "PROSPECT AT 500 PROSPECT",
   "latitude": 41.863071,
   "longitude": -71.370773
 },
 {
   "stop_id": "21465",
   "stop_name": "PAWTUCKET NS BOUTWELL",
   "latitude": 41.865414,
   "longitude": -71.392198
 },
 {
   "stop_id": "21475",
   "stop_name": "EAST AVE NS MANNING",
   "latitude": 41.865317,
   "longitude": -71.3873
 },
 {
   "stop_id": "21495",
   "stop_name": "MINERAL SPRING NS DAVID",
   "latitude": 41.865769,
   "longitude": -71.443295
 },
 {
   "stop_id": "21500",
   "stop_name": "MINERAL SPRING NS COLEMAN",
   "latitude": 41.865146,
   "longitude": -71.445561
 },
 {
   "stop_id": "21510",
   "stop_name": "WATERMAN FS 146A WATERMAN",
   "latitude": 41.864272,
   "longitude": -71.488699
 },
 {
   "stop_id": "21520",
   "stop_name": "DOUGLAS AT 1500 DOUGLAS",
   "latitude": 41.865724,
   "longitude": -71.456875
 },
 {
   "stop_id": "21530",
   "stop_name": "PROSPECT NS RHODE ISLAND",
   "latitude": 41.864627,
   "longitude": -71.372424
 },
 {
   "stop_id": "21545",
   "stop_name": "PAWTUCKET FS DUNNELL",
   "latitude": 41.866,
   "longitude": -71.391551
 },
 {
   "stop_id": "21550",
   "stop_name": "CHARLES FS OBED",
   "latitude": 41.866278,
   "longitude": -71.424406
 },
 {
   "stop_id": "21555",
   "stop_name": "PAWTUCKET NS KNOWLES",
   "latitude": 41.866528,
   "longitude": -71.39122
 },
 {
   "stop_id": "21560",
   "stop_name": "MINERAL SPRING OPP POPE",
   "latitude": 41.866281,
   "longitude": -71.441789
 },
 {
   "stop_id": "21565",
   "stop_name": "WATERMAN NS GREYSTONE",
   "latitude": 41.866381,
   "longitude": -71.49031
 },
 {
   "stop_id": "21570",
   "stop_name": "CHARLES NS OBED",
   "latitude": 41.866506,
   "longitude": -71.424347
 },
 {
   "stop_id": "21575",
   "stop_name": "MINERAL SPRING FS POPE",
   "latitude": 41.86632,
   "longitude": -71.442137
 },
 {
   "stop_id": "21585",
   "stop_name": "DOUGLAS OPP FITZHUGH",
   "latitude": 41.866769,
   "longitude": -71.45827
 },
 {
   "stop_id": "21590",
   "stop_name": "DOUGLAS PIKE FS FITZHUGH",
   "latitude": 41.866642,
   "longitude": -71.458267
 },
 {
   "stop_id": "21610",
   "stop_name": "MINERAL SPRING AT 1388 MINERAL SPRING",
   "latitude": 41.866923,
   "longitude": -71.439761
 },
 {
   "stop_id": "21615",
   "stop_name": "MINERAL SPRING NS WOODWARD",
   "latitude": 41.866935,
   "longitude": -71.440243
 },
 {
   "stop_id": "21630",
   "stop_name": "PROSPECT NS LINWOOD",
   "latitude": 41.867512,
   "longitude": -71.375285
 },
 {
   "stop_id": "21635",
   "stop_name": "PAWTUCKET NS WALDO",
   "latitude": 41.867401,
   "longitude": -71.390231
 },
 {
   "stop_id": "21640",
   "stop_name": "PAWTUCKET OPP WALDO",
   "latitude": 41.867806,
   "longitude": -71.390039
 },
 {
   "stop_id": "21645",
   "stop_name": "MINERAL SPRING OPP 1350 MINERAL SPRING",
   "latitude": 41.867635,
   "longitude": -71.437307
 },
 {
   "stop_id": "21650",
   "stop_name": "EAST AVE FS HARVEY",
   "latitude": 41.86817,
   "longitude": -71.387099
 },
 {
   "stop_id": "21655",
   "stop_name": "MINERAL SPRING FS PALM",
   "latitude": 41.867772,
   "longitude": -71.436269
 },
 {
   "stop_id": "21665",
   "stop_name": "SCHOOL OPP ROSEWOOD",
   "latitude": 41.869403,
   "longitude": -71.379187
 },
 {
   "stop_id": "21670",
   "stop_name": "CHARLES FS MINERAL SPRING",
   "latitude": 41.868037,
   "longitude": -71.425087
 },
 {
   "stop_id": "21695",
   "stop_name": "EAST AVE OPP HARVEY",
   "latitude": 41.867824,
   "longitude": -71.38725
 },
 {
   "stop_id": "21705",
   "stop_name": "MINERAL SPRING AT 1243 MINERAL SPRING",
   "latitude": 41.868302,
   "longitude": -71.434107
 },
 {
   "stop_id": "21720",
   "stop_name": "CHARLES NS MINERAL SPRING",
   "latitude": 41.868187,
   "longitude": -71.424994
 },
 {
   "stop_id": "21735",
   "stop_name": "MINERAL SPRING OPP CLEVELAND",
   "latitude": 41.868593,
   "longitude": -71.424397
 },
 {
   "stop_id": "21740",
   "stop_name": "PAWTUCKET AT 171 PAWTUCKET",
   "latitude": 41.869358,
   "longitude": -71.38862
 },
 {
   "stop_id": "21745",
   "stop_name": "MINERAL SPRING NS IVAN",
   "latitude": 41.86844,
   "longitude": -71.432721
 },
 {
   "stop_id": "21750",
   "stop_name": "WATERMAN FS ADAMS",
   "latitude": 41.868089,
   "longitude": -71.491574
 },
 {
   "stop_id": "21760",
   "stop_name": "PROSPECT FS ENGLEWOOD",
   "latitude": 41.868306,
   "longitude": -71.375984
 },
 {
   "stop_id": "21765",
   "stop_name": "MINERAL SPRING OPP ELENA",
   "latitude": 41.868329,
   "longitude": -71.434629
 },
 {
   "stop_id": "21770",
   "stop_name": "MINERAL SPRING OPP IVAN",
   "latitude": 41.868582,
   "longitude": -71.432724
 },
 {
   "stop_id": "21780",
   "stop_name": "MINERAL SPRING FS CLEVELAND",
   "latitude": 41.868856,
   "longitude": -71.424064
 },
 {
   "stop_id": "21805",
   "stop_name": "SMITHFIELD FS NATHANIEL",
   "latitude": 41.867488,
   "longitude": -71.412983
 },
 {
   "stop_id": "21810",
   "stop_name": "MINERAL SPRING FS CAMPBELL",
   "latitude": 41.869348,
   "longitude": -71.42195
 },
 {
   "stop_id": "21815",
   "stop_name": "DOUGLAS NS TANGLEWOOD",
   "latitude": 41.869025,
   "longitude": -71.46163
 },
 {
   "stop_id": "21820",
   "stop_name": "SMITHFIELD OPP GROSVENOR",
   "latitude": 41.867452,
   "longitude": -71.412897
 },
 {
   "stop_id": "21830",
   "stop_name": "WHITMAN STREET (R-LINE)",
   "latitude": 41.869395,
   "longitude": -71.397408
 },
 {
   "stop_id": "21835",
   "stop_name": "STOP&SHOP (PUTNAM PIKE - SMITHFIELD)",
   "latitude": 41.868633,
   "longitude": -71.532351
 },
 {
   "stop_id": "21840",
   "stop_name": "MINERAL SPRING NS DORA",
   "latitude": 41.86969,
   "longitude": -71.420053
 },
 {
   "stop_id": "21845",
   "stop_name": "NEWPORT NS EDENDALE",
   "latitude": 41.870848,
   "longitude": -71.354295
 },
 {
   "stop_id": "21850",
   "stop_name": "PAWTUCKET NS RANDALL",
   "latitude": 41.869321,
   "longitude": -71.388527
 },
 {
   "stop_id": "21855",
   "stop_name": "MINERAL SPRING FS DORMAN",
   "latitude": 41.869755,
   "longitude": -71.420146
 },
 {
   "stop_id": "21860",
   "stop_name": "WATERMAN NS GLADSTONE",
   "latitude": 41.869702,
   "longitude": -71.49272
 },
 {
   "stop_id": "21865",
   "stop_name": "DOUGLAS OPP TANGLEWOOD",
   "latitude": 41.868965,
   "longitude": -71.46133
 },
 {
   "stop_id": "21870",
   "stop_name": "WHITMAN STREET (R-LINE)",
   "latitude": 41.869718,
   "longitude": -71.397015
 },
 {
   "stop_id": "21880",
   "stop_name": "COLUMBUS NS YORK",
   "latitude": 41.870389,
   "longitude": -71.364709
 },
 {
   "stop_id": "21885",
   "stop_name": "COLUMBUS NS MEMORIAL",
   "latitude": 41.870488,
   "longitude": -71.367298
 },
 {
   "stop_id": "21900",
   "stop_name": "MINERAL SPRING FS POWER",
   "latitude": 41.870386,
   "longitude": -71.417104
 },
 {
   "stop_id": "21930",
   "stop_name": "PUTNAM PIKE OPP TACO BELL",
   "latitude": 41.870076,
   "longitude": -71.528222
 },
 {
   "stop_id": "21940",
   "stop_name": "PUTNAM PIKE AT 458 PUTNAM PIKE",
   "latitude": 41.870127,
   "longitude": -71.535354
 },
 {
   "stop_id": "21945",
   "stop_name": "GEORGE OPP DELANY",
   "latitude": 41.871099,
   "longitude": -71.387646
 },
 {
   "stop_id": "21950",
   "stop_name": "PUTNAM PIKE NS SANDERSON",
   "latitude": 41.870177,
   "longitude": -71.53166
 },
 {
   "stop_id": "21960",
   "stop_name": "CHARLES AT 1090 CHARLES",
   "latitude": 41.869493,
   "longitude": -71.425691
 },
 {
   "stop_id": "21965",
   "stop_name": "PUTNAM PIKE OPP DANECROFT",
   "latitude": 41.870086,
   "longitude": -71.539093
 },
 {
   "stop_id": "21985",
   "stop_name": "CHARLES NS FRANKLIN",
   "latitude": 41.87053,
   "longitude": -71.426353
 },
 {
   "stop_id": "21990",
   "stop_name": "COLUMBUS OPP MEMORIAL",
   "latitude": 41.870543,
   "longitude": -71.367138
 },
 {
   "stop_id": "21995",
   "stop_name": "PUTNAM PIKE NS MAPLECREST",
   "latitude": 41.870201,
   "longitude": -71.541834
 },
 {
   "stop_id": "22000",
   "stop_name": "MINERAL SPRING NS POWER",
   "latitude": 41.870453,
   "longitude": -71.417255
 },
 {
   "stop_id": "22005",
   "stop_name": "PUTNAM PIKE OPP 458 PUTNAM PIKE",
   "latitude": 41.870292,
   "longitude": -71.534791
 },
 {
   "stop_id": "22015",
   "stop_name": "COLUMBUS NS HAZARD",
   "latitude": 41.870803,
   "longitude": -71.368968
 },
 {
   "stop_id": "22020",
   "stop_name": "PUTNAM PIKE OPP MAPLECREST",
   "latitude": 41.870316,
   "longitude": -71.54171
 },
 {
   "stop_id": "22025",
   "stop_name": "SCHOOL OPP POND",
   "latitude": 41.870652,
   "longitude": -71.380073
 },
 {
   "stop_id": "22030",
   "stop_name": "PUTNAM PIKE FS SANDERSON",
   "latitude": 41.8703,
   "longitude": -71.531431
 },
 {
   "stop_id": "22040",
   "stop_name": "PUTNAM PIKE AT APPLE VALLEY MALL",
   "latitude": 41.870358,
   "longitude": -71.529326
 },
 {
   "stop_id": "22045",
   "stop_name": "PUTNAM PIKE NS CRESTVIEW",
   "latitude": 41.870336,
   "longitude": -71.545237
 },
 {
   "stop_id": "22050",
   "stop_name": "SMITHFIELD FS W LAWN",
   "latitude": 41.870641,
   "longitude": -71.413589
 },
 {
   "stop_id": "22060",
   "stop_name": "DOUGLAS OPP WENSCOTT",
   "latitude": 41.870681,
   "longitude": -71.463736
 },
 {
   "stop_id": "22065",
   "stop_name": "COLUMBUS OPP ORTH",
   "latitude": 41.871036,
   "longitude": -71.369374
 },
 {
   "stop_id": "22070",
   "stop_name": "WATERMAN NS MINORU",
   "latitude": 41.870975,
   "longitude": -71.493638
 },
 {
   "stop_id": "22075",
   "stop_name": "MINERAL SPRING FS OVERLAND",
   "latitude": 41.870785,
   "longitude": -71.415943
 },
 {
   "stop_id": "22080",
   "stop_name": "MINERAL SPRING NS SMITHFIELD",
   "latitude": 41.871113,
   "longitude": -71.414095
 },
 {
   "stop_id": "22090",
   "stop_name": "CHARLES OPP GILLEN",
   "latitude": 41.871354,
   "longitude": -71.42756
 },
 {
   "stop_id": "22095",
   "stop_name": "PUTNAM PIKE AT 566 PUTNAM PIKE",
   "latitude": 41.870853,
   "longitude": -71.54997
 },
 {
   "stop_id": "22115",
   "stop_name": "CHARLES NS GILLEN",
   "latitude": 41.871445,
   "longitude": -71.427501
 },
 {
   "stop_id": "22120",
   "stop_name": "GEORGE NS PAWTUCKET",
   "latitude": 41.870819,
   "longitude": -71.387978
 },
 {
   "stop_id": "22135",
   "stop_name": "MINERAL SPRING NS FAIRLAWN",
   "latitude": 41.871987,
   "longitude": -71.410519
 },
 {
   "stop_id": "22150",
   "stop_name": "PUTNAM PIKE NS PLEASANT VIEW",
   "latitude": 41.870961,
   "longitude": -71.549715
 },
 {
   "stop_id": "22155",
   "stop_name": "PUTNAM PIKE NS SMITH AVE",
   "latitude": 41.871352,
   "longitude": -71.552788
 },
 {
   "stop_id": "22170",
   "stop_name": "PUTNAM PIKE AT 595 PUTNAM PIKE",
   "latitude": 41.871426,
   "longitude": -71.552353
 },
 {
   "stop_id": "22180",
   "stop_name": "DOUGLAS NS WENSCOTT",
   "latitude": 41.870849,
   "longitude": -71.464101
 },
 {
   "stop_id": "22190",
   "stop_name": "PROSPECT OPP CHESTNUT",
   "latitude": 41.869531,
   "longitude": -71.377067
 },
 {
   "stop_id": "22200",
   "stop_name": "GEORGE FS CEDAR",
   "latitude": 41.874083,
   "longitude": -71.38732
 },
 {
   "stop_id": "22205",
   "stop_name": "MINERAL SPRING FS FAIRLAWN",
   "latitude": 41.872075,
   "longitude": -71.410744
 },
 {
   "stop_id": "22210",
   "stop_name": "CHARLES OPP BORAH",
   "latitude": 41.872255,
   "longitude": -71.429205
 },
 {
   "stop_id": "22215",
   "stop_name": "CHARLES NS BORAH",
   "latitude": 41.87231,
   "longitude": -71.429157
 },
 {
   "stop_id": "22220",
   "stop_name": "GEORGE FS GRACE",
   "latitude": 41.87189,
   "longitude": -71.387816
 },
 {
   "stop_id": "22230",
   "stop_name": "WATERMAN OPP ARNOLD",
   "latitude": 41.872356,
   "longitude": -71.494324
 },
 {
   "stop_id": "22235",
   "stop_name": "COLUMBUS FS POND",
   "latitude": 41.87196,
   "longitude": -71.371444
 },
 {
   "stop_id": "22240",
   "stop_name": "WATERMAN NS ARNOLD",
   "latitude": 41.872289,
   "longitude": -71.4944
 },
 {
   "stop_id": "22265",
   "stop_name": "POWER NS ANDERTON",
   "latitude": 41.872917,
   "longitude": -71.419134
 },
 {
   "stop_id": "22280",
   "stop_name": "MINERAL SPRING OPP 545 MINERAL SPRING",
   "latitude": 41.873001,
   "longitude": -71.407059
 },
 {
   "stop_id": "22285",
   "stop_name": "MINERAL SPRING AT 560 MINERAL SPRING",
   "latitude": 41.872948,
   "longitude": -71.407017
 },
 {
   "stop_id": "22290",
   "stop_name": "PROSPECT FS MEADOW",
   "latitude": 41.872127,
   "longitude": -71.379358
 },
 {
   "stop_id": "22310",
   "stop_name": "PUTNAM PIKE AT ST PHILLIPS SCHOOL",
   "latitude": 41.873668,
   "longitude": -71.558747
 },
 {
   "stop_id": "22320",
   "stop_name": "PUTNAM PIKE OPP ST PHILLIPS SCHOOL",
   "latitude": 41.873744,
   "longitude": -71.558677
 },
 {
   "stop_id": "22325",
   "stop_name": "POWER FS ANDERTON",
   "latitude": 41.872633,
   "longitude": -71.419204
 },
 {
   "stop_id": "22345",
   "stop_name": "MINERAL SPRING at 400 MINERAL SPRING",
   "latitude": 41.873768,
   "longitude": -71.40214
 },
 {
   "stop_id": "22360",
   "stop_name": "WATERMAN NS CAMP",
   "latitude": 41.873587,
   "longitude": -71.495504
 },
 {
   "stop_id": "22380",
   "stop_name": "MINERAL SPRING FS HOPE",
   "latitude": 41.873876,
   "longitude": -71.402044
 },
 {
   "stop_id": "22400",
   "stop_name": "POWER NS ORIOLE",
   "latitude": 41.873817,
   "longitude": -71.419175
 },
 {
   "stop_id": "22405",
   "stop_name": "MINERAL SPRING OPP HICKS",
   "latitude": 41.874123,
   "longitude": -71.3999
 },
 {
   "stop_id": "22425",
   "stop_name": "MINERAL SPRING AT SAMUEL SLATER SCHOOL",
   "latitude": 41.874233,
   "longitude": -71.400294
 },
 {
   "stop_id": "22445",
   "stop_name": "WATERMAN OPP 304 WATERMAN",
   "latitude": 41.873859,
   "longitude": -71.495685
 },
 {
   "stop_id": "22450",
   "stop_name": "SUMMIT NS DIVISION",
   "latitude": 41.873915,
   "longitude": -71.378356
 },
 {
   "stop_id": "22465",
   "stop_name": "POWER FS OAKDALE",
   "latitude": 41.87483,
   "longitude": -71.419317
 },
 {
   "stop_id": "22470",
   "stop_name": "ESMOND NS PENBRYN",
   "latitude": 41.874759,
   "longitude": -71.504445
 },
 {
   "stop_id": "22475",
   "stop_name": "MINERAL SPRING NS FRANKLIN",
   "latitude": 41.874846,
   "longitude": -71.396269
 },
 {
   "stop_id": "22480",
   "stop_name": "MINERAL SPRING FS BAGLEY",
   "latitude": 41.874762,
   "longitude": -71.396122
 },
 {
   "stop_id": "22485",
   "stop_name": "PUTNAM PIKE NS ARTHUR",
   "latitude": 41.874683,
   "longitude": -71.562504
 },
 {
   "stop_id": "22495",
   "stop_name": "CHARLES OPP MINER",
   "latitude": 41.875303,
   "longitude": -71.433898
 },
 {
   "stop_id": "22500",
   "stop_name": "COLLYER PARK (R-LINE)",
   "latitude": 41.875006,
   "longitude": -71.392386
 },
 {
   "stop_id": "22505",
   "stop_name": "PUTNAM PIKE OPP ARTHUR",
   "latitude": 41.874687,
   "longitude": -71.562163
 },
 {
   "stop_id": "22510",
   "stop_name": "CHARLES NS MINER",
   "latitude": 41.875292,
   "longitude": -71.433942
 },
 {
   "stop_id": "22535",
   "stop_name": "GEORGE NS EAST AVE EXT.",
   "latitude": 41.875143,
   "longitude": -71.386907
 },
 {
   "stop_id": "22540",
   "stop_name": "MINERAL SPRING NS MAIN",
   "latitude": 41.875442,
   "longitude": -71.39196
 },
 {
   "stop_id": "22545",
   "stop_name": "MINERAL SPRING FS MAIN",
   "latitude": 41.875571,
   "longitude": -71.391695
 },
 {
   "stop_id": "22585",
   "stop_name": "ARMISTICE NS BROOKDALE",
   "latitude": 41.876221,
   "longitude": -71.343218
 },
 {
   "stop_id": "22590",
   "stop_name": "ARMISTICE NS FELSMERE",
   "latitude": 41.87664,
   "longitude": -71.34545
 },
 {
   "stop_id": "22600",
   "stop_name": "POWER NS CHANDLER",
   "latitude": 41.876283,
   "longitude": -71.418842
 },
 {
   "stop_id": "22605",
   "stop_name": "ESMOND FS HILL",
   "latitude": 41.874753,
   "longitude": -71.504356
 },
 {
   "stop_id": "22610",
   "stop_name": "POWER FS CHANDLER",
   "latitude": 41.876422,
   "longitude": -71.418618
 },
 {
   "stop_id": "22615",
   "stop_name": "ESMOND NS THORNTON",
   "latitude": 41.876284,
   "longitude": -71.503248
 },
 {
   "stop_id": "22645",
   "stop_name": "WALCOTT FS SUMMIT",
   "latitude": 41.87663,
   "longitude": -71.37902
 },
 {
   "stop_id": "22650",
   "stop_name": "WEEDEN NS HANCOCK",
   "latitude": 41.876919,
   "longitude": -71.401585
 },
 {
   "stop_id": "22655",
   "stop_name": "ARMISTICE FS DAGGETT",
   "latitude": 41.876948,
   "longitude": -71.346205
 },
 {
   "stop_id": "22665",
   "stop_name": "WEEDEN NS STURMAN",
   "latitude": 41.876993,
   "longitude": -71.401574
 },
 {
   "stop_id": "22670",
   "stop_name": "WALCOTT NS ARLINGTON",
   "latitude": 41.876934,
   "longitude": -71.377349
 },
 {
   "stop_id": "22680",
   "stop_name": "WEEDEN OPP MOSHASSUCK",
   "latitude": 41.877156,
   "longitude": -71.405481
 },
 {
   "stop_id": "22685",
   "stop_name": "ARMISTICE AT 664 ARMISTICE",
   "latitude": 41.877304,
   "longitude": -71.348098
 },
 {
   "stop_id": "22695",
   "stop_name": "WEEDEN NS LEONARD JENARD",
   "latitude": 41.877102,
   "longitude": -71.40454
 },
 {
   "stop_id": "22720",
   "stop_name": "MAIN FS COMMERCE",
   "latitude": 41.876842,
   "longitude": -71.388464
 },
 {
   "stop_id": "22725",
   "stop_name": "WALCOTT FS GROVE",
   "latitude": 41.87705,
   "longitude": -71.37719
 },
 {
   "stop_id": "22745",
   "stop_name": "EAST AVE EXT NS MAIN",
   "latitude": 41.876682,
   "longitude": -71.384578
 },
 {
   "stop_id": "22750",
   "stop_name": "WALCOTT FS MAYNARD",
   "latitude": 41.8772,
   "longitude": -71.37626
 },
 {
   "stop_id": "22760",
   "stop_name": "ARMISTICE NS SLATER PARK",
   "latitude": 41.877486,
   "longitude": -71.349764
 },
 {
   "stop_id": "22765",
   "stop_name": "PAWTUCKET TRANSIT CTR (TRANSIT CTR SIDE)",
   "latitude": 41.877298,
   "longitude": -71.383417
 },
 {
   "stop_id": "22780",
   "stop_name": "WEEDEN OPP RESERVOIR",
   "latitude": 41.877669,
   "longitude": -71.410348
 },
 {
   "stop_id": "22785",
   "stop_name": "WATERMAN AVE OPP BENNY'S MAIN OFFICE",
   "latitude": 41.876455,
   "longitude": -71.498835
 },
 {
   "stop_id": "22790",
   "stop_name": "ARMISTICE FS ORIENT",
   "latitude": 41.877678,
   "longitude": -71.350005
 },
 {
   "stop_id": "22795",
   "stop_name": "PUTNAM PIKE FS W GREENVILLE",
   "latitude": 41.877892,
   "longitude": -71.571859
 },
 {
   "stop_id": "22805",
   "stop_name": "WEEDEN NS HAZEL",
   "latitude": 41.877574,
   "longitude": -71.408858
 },
 {
   "stop_id": "22810",
   "stop_name": "PUTNAM PIKE NS W GREENVILLE",
   "latitude": 41.877571,
   "longitude": -71.570921
 },
 {
   "stop_id": "22815",
   "stop_name": "ARMISTICE NS GREENSLITT",
   "latitude": 41.877931,
   "longitude": -71.351963
 },
 {
   "stop_id": "22820",
   "stop_name": "ARMISTICE NS MALVERN",
   "latitude": 41.878077,
   "longitude": -71.351962
 },
 {
   "stop_id": "22825",
   "stop_name": "PUTNAM PIKE OPP WINDY HILL",
   "latitude": 41.882515,
   "longitude": -71.580512
 },
 {
   "stop_id": "22835",
   "stop_name": "WEEDEN NS ST LUKES CHURCH",
   "latitude": 41.878054,
   "longitude": -71.412352
 },
 {
   "stop_id": "22840",
   "stop_name": "PUTNAM PIKE NS 735 PUTNAM PIKE",
   "latitude": 41.880603,
   "longitude": -71.577826
 },
 {
   "stop_id": "22850",
   "stop_name": "WEEDEN NS JANE",
   "latitude": 41.877792,
   "longitude": -71.410969
 },
 {
   "stop_id": "22855",
   "stop_name": "ARMISTICE FS NEWPORT",
   "latitude": 41.878306,
   "longitude": -71.354075
 },
 {
   "stop_id": "22880",
   "stop_name": "WEEDEN FS SMITHFIELD",
   "latitude": 41.878608,
   "longitude": -71.414679
 },
 {
   "stop_id": "22885",
   "stop_name": "ARMISTICE NS NEWPORT",
   "latitude": 41.878437,
   "longitude": -71.353689
 },
 {
   "stop_id": "22895",
   "stop_name": "NEWPORT AT 872 NEWPORT",
   "latitude": 41.879648,
   "longitude": -71.354333
 },
 {
   "stop_id": "22905",
   "stop_name": "WEEDEN NS POWER",
   "latitude": 41.878361,
   "longitude": -71.417417
 },
 {
   "stop_id": "22910",
   "stop_name": "WEEDEN NS SMITHFIELD",
   "latitude": 41.878676,
   "longitude": -71.414834
 },
 {
   "stop_id": "22915",
   "stop_name": "NEWPORT NS CARTER",
   "latitude": 41.881863,
   "longitude": -71.354089
 },
 {
   "stop_id": "22925",
   "stop_name": "ARMISTICE FS LITTLEFIELD",
   "latitude": 41.878732,
   "longitude": -71.355321
 },
 {
   "stop_id": "22930",
   "stop_name": "RT 246 OPP WOODWARD",
   "latitude": 41.878537,
   "longitude": -71.435484
 },
 {
   "stop_id": "22935",
   "stop_name": "WATERMAN OPP 349 WATERMAN",
   "latitude": 41.87821,
   "longitude": -71.500896
 },
 {
   "stop_id": "22945",
   "stop_name": "WATERMAN OPP ESMOND",
   "latitude": 41.878565,
   "longitude": -71.501095
 },
 {
   "stop_id": "22950",
   "stop_name": "ARMISTICE NS BLOOMFIELD",
   "latitude": 41.878918,
   "longitude": -71.357135
 },
 {
   "stop_id": "22955",
   "stop_name": "DEXTER NS BAYLEY",
   "latitude": 41.878393,
   "longitude": -71.387495
 },
 {
   "stop_id": "22960",
   "stop_name": "RT 246 FS WOODWARD",
   "latitude": 41.878403,
   "longitude": -71.435553
 },
 {
   "stop_id": "22965",
   "stop_name": "DEXTER OPP ANDREW FERLAND",
   "latitude": 41.879854,
   "longitude": -71.388846
 },
 {
   "stop_id": "22970",
   "stop_name": "GOFF NS DEXTER",
   "latitude": 41.87851,
   "longitude": -71.388262
 },
 {
   "stop_id": "22980",
   "stop_name": "ARMISTICE NS N BEND",
   "latitude": 41.8791,
   "longitude": -71.372425
 },
 {
   "stop_id": "22981",
   "stop_name": "ARMISTICE FS WALCOTT",
   "latitude": 41.879033,
   "longitude": -71.372465
 },
 {
   "stop_id": "22990",
   "stop_name": "ARMISTICE NS PERRIN",
   "latitude": 41.879073,
   "longitude": -71.357044
 },
 {
   "stop_id": "22995",
   "stop_name": "ARMISTICE NS ASHTON",
   "latitude": 41.879326,
   "longitude": -71.371181
 },
 {
   "stop_id": "23000",
   "stop_name": "ARMISTICE OPP ASHTON",
   "latitude": 41.879519,
   "longitude": -71.370735
 },
 {
   "stop_id": "23005",
   "stop_name": "ARMISTICE NS ROSEMONT",
   "latitude": 41.879563,
   "longitude": -71.360209
 },
 {
   "stop_id": "23015",
   "stop_name": "ARMISTICE NS BOOTH",
   "latitude": 41.87952,
   "longitude": -71.359097
 },
 {
   "stop_id": "23020",
   "stop_name": "BROAD NS GOFF",
   "latitude": 41.880283,
   "longitude": -71.386566
 },
 {
   "stop_id": "23030",
   "stop_name": "BROAD FS EXCHANGE",
   "latitude": 41.880101,
   "longitude": -71.386345
 },
 {
   "stop_id": "23035",
   "stop_name": "ARMISTICE FS SCHOEFIELD",
   "latitude": 41.879768,
   "longitude": -71.369401
 },
 {
   "stop_id": "23050",
   "stop_name": "ARMISTICE OPP SCHOFIELD",
   "latitude": 41.879811,
   "longitude": -71.36965
 },
 {
   "stop_id": "23055",
   "stop_name": "ARMISTICE FS ROSEMONT",
   "latitude": 41.879729,
   "longitude": -71.360328
 },
 {
   "stop_id": "23070",
   "stop_name": "GOFF FS BROAD",
   "latitude": 41.879593,
   "longitude": -71.386718
 },
 {
   "stop_id": "23075",
   "stop_name": "ROOSEVELT OPP CITY HALL",
   "latitude": 41.8791,
   "longitude": -71.382599
 },
 {
   "stop_id": "23090",
   "stop_name": "ARMISTICE AT 209 ARMISTICE",
   "latitude": 41.88002,
   "longitude": -71.368329
 },
 {
   "stop_id": "23100",
   "stop_name": "LONSDALE FS WEEDEN",
   "latitude": 41.877767,
   "longitude": -71.399788
 },
 {
   "stop_id": "23125",
   "stop_name": "EXCHANGE FS HIGH",
   "latitude": 41.879818,
   "longitude": -71.383472
 },
 {
   "stop_id": "23130",
   "stop_name": "EXCHANGE NS MONTGOMERY",
   "latitude": 41.879959,
   "longitude": -71.384874
 },
 {
   "stop_id": "23145",
   "stop_name": "ARMISTICE OPP 209 ARMISTICE",
   "latitude": 41.88025,
   "longitude": -71.367845
 },
 {
   "stop_id": "23150",
   "stop_name": "EXCHANGE NS HIGH",
   "latitude": 41.879979,
   "longitude": -71.383717
 },
 {
   "stop_id": "23160",
   "stop_name": "ARMISTICE FS ALDEN",
   "latitude": 41.880381,
   "longitude": -71.363851
 },
 {
   "stop_id": "23165",
   "stop_name": "ARMISTICE OPP 270 ARMISTICE",
   "latitude": 41.880592,
   "longitude": -71.365972
 },
 {
   "stop_id": "23170",
   "stop_name": "ARMISTICE FS GEORGE BENNETT",
   "latitude": 41.880634,
   "longitude": -71.366218
 },
 {
   "stop_id": "23215",
   "stop_name": "DEXTER NS BARTON",
   "latitude": 41.88144,
   "longitude": -71.390929
 },
 {
   "stop_id": "23220",
   "stop_name": "BROADWAY NS BLACKSTONE",
   "latitude": 41.881816,
   "longitude": -71.377789
 },
 {
   "stop_id": "23225",
   "stop_name": "DOUGLAS PIKE OPP 80 DOUGLAS PIKE",
   "latitude": 41.878174,
   "longitude": -71.472373
 },
 {
   "stop_id": "23250",
   "stop_name": "DEXTER OPP CONGRESS",
   "latitude": 41.882671,
   "longitude": -71.392294
 },
 {
   "stop_id": "23270",
   "stop_name": "BROAD FS BARTON",
   "latitude": 41.882687,
   "longitude": -71.386555
 },
 {
   "stop_id": "23280",
   "stop_name": "RT 246 FS COBBLE HILL RD",
   "latitude": 41.884246,
   "longitude": -71.438806
 },
 {
   "stop_id": "23285",
   "stop_name": "LONSDALE NS RAND",
   "latitude": 41.884381,
   "longitude": -71.400228
 },
 {
   "stop_id": "23290",
   "stop_name": "RT 246 FS KENDALL",
   "latitude": 41.884601,
   "longitude": -71.439123
 },
 {
   "stop_id": "23295",
   "stop_name": "BROADWAY NS EXCHANGE",
   "latitude": 41.880154,
   "longitude": -71.378611
 },
 {
   "stop_id": "23320",
   "stop_name": "DEXTER FS CENTRAL",
   "latitude": 41.884125,
   "longitude": -71.394152
 },
 {
   "stop_id": "23325",
   "stop_name": "NEWPORT FS CARTER",
   "latitude": 41.881937,
   "longitude": -71.354244
 },
 {
   "stop_id": "23330",
   "stop_name": "BROADWAY AT 340 BROADWAY",
   "latitude": 41.883436,
   "longitude": -71.377023
 },
 {
   "stop_id": "23335",
   "stop_name": "DEXTER NS RAND",
   "latitude": 41.88477,
   "longitude": -71.394616
 },
 {
   "stop_id": "23345",
   "stop_name": "BROAD NS CLAY",
   "latitude": 41.884229,
   "longitude": -71.386952
 },
 {
   "stop_id": "23355",
   "stop_name": "LONSDALE NS PARKER",
   "latitude": 41.885977,
   "longitude": -71.401212
 },
 {
   "stop_id": "23370",
   "stop_name": "NEWPORT NS SWEET",
   "latitude": 41.884819,
   "longitude": -71.354061
 },
 {
   "stop_id": "23375",
   "stop_name": "BROAD NS JENKS",
   "latitude": 41.884483,
   "longitude": -71.386823
 },
 {
   "stop_id": "23410",
   "stop_name": "DEXTER AT SPARKYS",
   "latitude": 41.885114,
   "longitude": -71.395316
 },
 {
   "stop_id": "23445",
   "stop_name": "DEXTER NS RICHARDSON",
   "latitude": 41.885794,
   "longitude": -71.396107
 },
 {
   "stop_id": "23450",
   "stop_name": "CENTRAL BETWEEN FREEMAN & KENYON",
   "latitude": 41.885408,
   "longitude": -71.365929
 },
 {
   "stop_id": "23455",
   "stop_name": "PUTNAM PIKE AT 66 PUTNAM PIKE",
   "latitude": 41.884631,
   "longitude": -71.584248
 },
 {
   "stop_id": "23460",
   "stop_name": "CENTRAL FS TWEED",
   "latitude": 41.887311,
   "longitude": -71.356538
 },
 {
   "stop_id": "23470",
   "stop_name": "CENTRAL NS YORK",
   "latitude": 41.886124,
   "longitude": -71.36156
 },
 {
   "stop_id": "23475",
   "stop_name": "CENTRAL NS MENDON",
   "latitude": 41.88568,
   "longitude": -71.363992
 },
 {
   "stop_id": "23480",
   "stop_name": "NEWPORT NS CENTRAL",
   "latitude": 41.887451,
   "longitude": -71.354047
 },
 {
   "stop_id": "23485",
   "stop_name": "BROADWAY FS LAUREL",
   "latitude": 41.885099,
   "longitude": -71.376176
 },
 {
   "stop_id": "23490",
   "stop_name": "PUTNAM PIKE OPP LAKESIDE MOTEL",
   "latitude": 41.884828,
   "longitude": -71.584426
 },
 {
   "stop_id": "23495",
   "stop_name": "BROADWAY OPP LAUREL",
   "latitude": 41.885107,
   "longitude": -71.375936
 },
 {
   "stop_id": "23505",
   "stop_name": "CENTRAL NS HARDING",
   "latitude": 41.886306,
   "longitude": -71.361456
 },
 {
   "stop_id": "23510",
   "stop_name": "BROAD OPP PACIFIC",
   "latitude": 41.886722,
   "longitude": -71.38722
 },
 {
   "stop_id": "23530",
   "stop_name": "BROAD NS PACIFIC",
   "latitude": 41.886579,
   "longitude": -71.387056
 },
 {
   "stop_id": "23540",
   "stop_name": "DEXTER NS COWDEN",
   "latitude": 41.887238,
   "longitude": -71.397433
 },
 {
   "stop_id": "23545",
   "stop_name": "CENTRAL NS MAKIN",
   "latitude": 41.886854,
   "longitude": -71.358979
 },
 {
   "stop_id": "23555",
   "stop_name": "BROADWAY FS WOODBINE",
   "latitude": 41.8868,
   "longitude": -71.375201
 },
 {
   "stop_id": "23560",
   "stop_name": "DEXTER NS HEDLY",
   "latitude": 41.88757,
   "longitude": -71.397865
 },
 {
   "stop_id": "23565",
   "stop_name": "BROADWAY NS WOODBINE",
   "latitude": 41.886645,
   "longitude": -71.375162
 },
 {
   "stop_id": "23575",
   "stop_name": "NEWPORT NS ROBINSON",
   "latitude": 41.885713,
   "longitude": -71.354203
 },
 {
   "stop_id": "23585",
   "stop_name": "CENTRAL NS TWEED",
   "latitude": 41.887476,
   "longitude": -71.356493
 },
 {
   "stop_id": "23590",
   "stop_name": "PUTNAM PIKE OPP 199 PUTNAM PIKE",
   "latitude": 41.887686,
   "longitude": -71.59616
 },
 {
   "stop_id": "23600",
   "stop_name": "CENTRAL FS GRAND",
   "latitude": 41.888413,
   "longitude": -71.352052
 },
 {
   "stop_id": "23610",
   "stop_name": "CENTRAL NS NEWPORT",
   "latitude": 41.887832,
   "longitude": -71.354455
 },
 {
   "stop_id": "23620",
   "stop_name": "BROADWAY OPP LILAC",
   "latitude": 41.888453,
   "longitude": -71.374291
 },
 {
   "stop_id": "23625",
   "stop_name": "BROAD FS SACRED HEART",
   "latitude": 41.888514,
   "longitude": -71.387199
 },
 {
   "stop_id": "23635",
   "stop_name": "LONSDALE NS WEST HUNT",
   "latitude": 41.888861,
   "longitude": -71.401974
 },
 {
   "stop_id": "23640",
   "stop_name": "RT 246 FS TWIN RIVER CASINO, LOUISQUISSET ENTRANCE",
   "latitude": 41.887547,
   "longitude": -71.440696
 },
 {
   "stop_id": "23645",
   "stop_name": "DEXTER NS CROSSMAN",
   "latitude": 41.888798,
   "longitude": -71.399273
 },
 {
   "stop_id": "23650",
   "stop_name": "PUTNAM PIKE AT 185 PUTNAM PIKE",
   "latitude": 41.887603,
   "longitude": -71.595583
 },
 {
   "stop_id": "23655",
   "stop_name": "CENTRAL NS LIVERPOOL",
   "latitude": 41.888965,
   "longitude": -71.349708
 },
 {
   "stop_id": "23660",
   "stop_name": "BROAD OPP SACRED HEART",
   "latitude": 41.888235,
   "longitude": -71.387343
 },
 {
   "stop_id": "23665",
   "stop_name": "TWIN RIVER CASINO",
   "latitude": 41.887,
   "longitude": -71.447213
 },
 {
   "stop_id": "23670",
   "stop_name": "CENTRAL NS GRAND",
   "latitude": 41.88852,
   "longitude": -71.352024
 },
 {
   "stop_id": "23685",
   "stop_name": "DEXTER NS W HUNT",
   "latitude": 41.889718,
   "longitude": -71.40044
 },
 {
   "stop_id": "23690",
   "stop_name": "CENTRAL NS DAGGETT",
   "latitude": 41.889467,
   "longitude": -71.347534
 },
 {
   "stop_id": "23695",
   "stop_name": "BROADWAY OPP MARGARET",
   "latitude": 41.888203,
   "longitude": -71.374518
 },
 {
   "stop_id": "23700",
   "stop_name": "DEXTER FS W HUNT",
   "latitude": 41.889817,
   "longitude": -71.400477
 },
 {
   "stop_id": "23705",
   "stop_name": "CENTRAL NS DRAPER",
   "latitude": 41.889245,
   "longitude": -71.34907
 },
 {
   "stop_id": "23715",
   "stop_name": "CENTRAL OPP FARNUM",
   "latitude": 41.890122,
   "longitude": -71.344859
 },
 {
   "stop_id": "23735",
   "stop_name": "CENTRAL NS CLARNER",
   "latitude": 41.889855,
   "longitude": -71.346532
 },
 {
   "stop_id": "23740",
   "stop_name": "BROADWAY NS EAST",
   "latitude": 41.890043,
   "longitude": -71.373403
 },
 {
   "stop_id": "23745",
   "stop_name": "BROADWAY FS EAST",
   "latitude": 41.89039,
   "longitude": -71.373398
 },
 {
   "stop_id": "23750",
   "stop_name": "CENTRAL FS BRADLEY",
   "latitude": 41.890344,
   "longitude": -71.344476
 },
 {
   "stop_id": "23760",
   "stop_name": "BROAD NS COWDEN",
   "latitude": 41.891385,
   "longitude": -71.387483
 },
 {
   "stop_id": "23765",
   "stop_name": "PUTNAM PIKE AT HARMONY MARKET PLACE",
   "latitude": 41.895079,
   "longitude": -71.612363
 },
 {
   "stop_id": "23775",
   "stop_name": "LONSDALE AT RANDOM HOUSE",
   "latitude": 41.891464,
   "longitude": -71.402567
 },
 {
   "stop_id": "23790",
   "stop_name": "LONSDALE OPP RICHLAND",
   "latitude": 41.894072,
   "longitude": -71.404086
 },
 {
   "stop_id": "23800",
   "stop_name": "BROADWAY NS GEORGE BENNETT",
   "latitude": 41.89208,
   "longitude": -71.372363
 },
 {
   "stop_id": "23850",
   "stop_name": "BENEFIT NS COTTAGE",
   "latitude": 41.892344,
   "longitude": -71.35768
 },
 {
   "stop_id": "23860",
   "stop_name": "BENEFIT OPP ADIN",
   "latitude": 41.892502,
   "longitude": -71.361997
 },
 {
   "stop_id": "23865",
   "stop_name": "BROAD AT 995 BROAD",
   "latitude": 41.893566,
   "longitude": -71.387737
 },
 {
   "stop_id": "23870",
   "stop_name": "BENEFIT NS EMORY",
   "latitude": 41.892446,
   "longitude": -71.35787
 },
 {
   "stop_id": "23875",
   "stop_name": "BENEFIT NS MENDON",
   "latitude": 41.892541,
   "longitude": -71.364545
 },
 {
   "stop_id": "23890",
   "stop_name": "BENEFIT NS BATES",
   "latitude": 41.892604,
   "longitude": -71.368042
 },
 {
   "stop_id": "23915",
   "stop_name": "LONSDALE OPP 991 LONSDALE",
   "latitude": 41.891324,
   "longitude": -71.402634
 },
 {
   "stop_id": "23920",
   "stop_name": "BENEFIT FS BROADWAY",
   "latitude": 41.892639,
   "longitude": -71.370851
 },
 {
   "stop_id": "23935",
   "stop_name": "BENEFIT NS BROADWAY",
   "latitude": 41.89273,
   "longitude": -71.371491
 },
 {
   "stop_id": "23945",
   "stop_name": "BENEFIT FS BATES",
   "latitude": 41.892695,
   "longitude": -71.368124
 },
 {
   "stop_id": "23950",
   "stop_name": "BENEFIT OPP 121 BENEFIT",
   "latitude": 41.892666,
   "longitude": -71.366148
 },
 {
   "stop_id": "23955",
   "stop_name": "BENEFIT OPP 71 BENEFIT",
   "latitude": 41.892691,
   "longitude": -71.368646
 },
 {
   "stop_id": "23970",
   "stop_name": "LONSDALE OPP BINFORD",
   "latitude": 41.893176,
   "longitude": -71.403394
 },
 {
   "stop_id": "23975",
   "stop_name": "BROAD AT 100 BROAD",
   "latitude": 41.893481,
   "longitude": -71.387902
 },
 {
   "stop_id": "23985",
   "stop_name": "RT 246 NS TWIN RIVER RD",
   "latitude": 41.893911,
   "longitude": -71.446767
 },
 {
   "stop_id": "23995",
   "stop_name": "RT 246 NS 1575 OLD LOUISQUISSET (state police)",
   "latitude": 41.887861,
   "longitude": -71.440832
 },
 {
   "stop_id": "24015",
   "stop_name": "LONSDALE NS RICHLAND",
   "latitude": 41.894087,
   "longitude": -71.404033
 },
 {
   "stop_id": "24040",
   "stop_name": "PUTNAM PIKE NS ABSALONA HILL RD",
   "latitude": 41.896207,
   "longitude": -71.617391
 },
 {
   "stop_id": "24045",
   "stop_name": "DOUGLAS PIKE NS WHIPPLE",
   "latitude": 41.889111,
   "longitude": -71.488886
 },
 {
   "stop_id": "24060",
   "stop_name": "PUTNAM PIKE NS GENTLEMAN FARMER",
   "latitude": 41.897236,
   "longitude": -71.629107
 },
 {
   "stop_id": "24065",
   "stop_name": "PUTNAM PIKE OPP ABSALONA HILL RD",
   "latitude": 41.896106,
   "longitude": -71.617496
 },
 {
   "stop_id": "24075",
   "stop_name": "BROAD NS HUNT",
   "latitude": 41.896559,
   "longitude": -71.388278
 },
 {
   "stop_id": "24080",
   "stop_name": "BROAD AT 1190 BROAD",
   "latitude": 41.896049,
   "longitude": -71.388387
 },
 {
   "stop_id": "24090",
   "stop_name": "RT 246 OPP CHASE",
   "latitude": 41.896497,
   "longitude": -71.449495
 },
 {
   "stop_id": "24120",
   "stop_name": "BROAD FS HIGH",
   "latitude": 41.898552,
   "longitude": -71.389125
 },
 {
   "stop_id": "24155",
   "stop_name": "CCRI (LINCOLN CAMPUS)",
   "latitude": 41.899562,
   "longitude": -71.453397
 },
 {
   "stop_id": "24180",
   "stop_name": "RT 246 FS ANNE",
   "latitude": 41.899194,
   "longitude": -71.450685
 },
 {
   "stop_id": "24205",
   "stop_name": "BROAD OPP CURRIER PLAYLOT",
   "latitude": 41.90106,
   "longitude": -71.390954
 },
 {
   "stop_id": "24215",
   "stop_name": "JENCKES HILL OPP DAVIES VOCATIONAL",
   "latitude": 41.902856,
   "longitude": -71.455802
 },
 {
   "stop_id": "24216",
   "stop_name": "JENCKES HILL AT DAVIES VOCATIONAL ENT",
   "latitude": 41.902816,
   "longitude": -71.455809
 },
 {
   "stop_id": "24220",
   "stop_name": "BROAD NS CHAPEL",
   "latitude": 41.902407,
   "longitude": -71.391447
 },
 {
   "stop_id": "24225",
   "stop_name": "RT 246 FS JENCKES HILL",
   "latitude": 41.90146,
   "longitude": -71.451108
 },
 {
   "stop_id": "24230",
   "stop_name": "RT 246 NS BREAKNECK HILL",
   "latitude": 41.901297,
   "longitude": -71.450957
 },
 {
   "stop_id": "24285",
   "stop_name": "PUTNAM PIKE OPP GENTLEMENS FARMER",
   "latitude": 41.897502,
   "longitude": -71.629654
 },
 {
   "stop_id": "24290",
   "stop_name": "BROAD OPP 232 BROAD",
   "latitude": 41.904349,
   "longitude": -71.392141
 },
 {
   "stop_id": "24295",
   "stop_name": "PUTNAM PIKE OPP PINEWOOD PARK",
   "latitude": 41.904951,
   "longitude": -71.647324
 },
 {
   "stop_id": "24310",
   "stop_name": "PUTNAM PIKE NS PINEWOOD PARK",
   "latitude": 41.903629,
   "longitude": -71.635914
 },
 {
   "stop_id": "24320",
   "stop_name": "PUTNAM PIKE FS LEE",
   "latitude": 41.9051,
   "longitude": -71.650989
 },
 {
   "stop_id": "24330",
   "stop_name": "PUTNAM PIKE AT 895 PUTNAM PIKE",
   "latitude": 41.905213,
   "longitude": -71.651517
 },
 {
   "stop_id": "24350",
   "stop_name": "BROAD NS LUSITANIA",
   "latitude": 41.900568,
   "longitude": -71.390929
 },
 {
   "stop_id": "24385",
   "stop_name": "BROAD NS CHURCH",
   "latitude": 41.90694,
   "longitude": -71.39307
 },
 {
   "stop_id": "24405",
   "stop_name": "BROAD AT 126 BROAD",
   "latitude": 41.902339,
   "longitude": -71.391516
 },
 {
   "stop_id": "24410",
   "stop_name": "PUTNAM PIKE AT CVS PHARMACY",
   "latitude": 41.907594,
   "longitude": -71.666637
 },
 {
   "stop_id": "24415",
   "stop_name": "BROAD NS MAPLE",
   "latitude": 41.90412,
   "longitude": -71.392181
 },
 {
   "stop_id": "24430",
   "stop_name": "PUTNAM PIKE FS CHESTNUT HILL",
   "latitude": 41.908684,
   "longitude": -71.667703
 },
 {
   "stop_id": "24435",
   "stop_name": "BROAD NS LAFAYETTE",
   "latitude": 41.90834,
   "longitude": -71.393731
 },
 {
   "stop_id": "24440",
   "stop_name": "PUTNAM PIKE FS DOUGLAS HOOK",
   "latitude": 41.912789,
   "longitude": -71.669082
 },
 {
   "stop_id": "24445",
   "stop_name": "PUTNAM PIKE OPP 1109 PUTNAM PIKE",
   "latitude": 41.910062,
   "longitude": -71.668357
 },
 {
   "stop_id": "24455",
   "stop_name": "BROAD NS FOREST",
   "latitude": 41.910292,
   "longitude": -71.395007
 },
 {
   "stop_id": "24480",
   "stop_name": "BROAD NS DEXTER",
   "latitude": 41.911788,
   "longitude": -71.395834
 },
 {
   "stop_id": "24485",
   "stop_name": "BROAD OPP BOWEN",
   "latitude": 41.91231,
   "longitude": -71.396272
 },
 {
   "stop_id": "24495",
   "stop_name": "MENDON NS ANN & HOPE WAY",
   "latitude": 41.912111,
   "longitude": -71.403344
 },
 {
   "stop_id": "24496",
   "stop_name": "STOP&SHOP (MENDON ROAD - CUMBERLAND)",
   "latitude": 41.913653,
   "longitude": -71.405715
 },
 {
   "stop_id": "24500",
   "stop_name": "MENDON FS ANN & HOPE WAY",
   "latitude": 41.912798,
   "longitude": -71.403343
 },
 {
   "stop_id": "24520",
   "stop_name": "BROAD FS CUMBERLAND",
   "latitude": 41.914092,
   "longitude": -71.398204
 },
 {
   "stop_id": "24535",
   "stop_name": "BROAD FS ANN & HOPE WAY",
   "latitude": 41.914021,
   "longitude": -71.398349
 },
 {
   "stop_id": "24540",
   "stop_name": "ANN & HOPE WAY FS MAIN",
   "latitude": 41.91362,
   "longitude": -71.399755
 },
 {
   "stop_id": "24555",
   "stop_name": "MENDON NS RR TRACKS",
   "latitude": 41.914498,
   "longitude": -71.40399
 },
 {
   "stop_id": "24565",
   "stop_name": "MENDON NS BROAD",
   "latitude": 41.915773,
   "longitude": -71.404758
 },
 {
   "stop_id": "24570",
   "stop_name": "MENDON NS BROAD",
   "latitude": 41.915921,
   "longitude": -71.404687
 },
 {
   "stop_id": "24595",
   "stop_name": "MENDON FS DORR",
   "latitude": 41.919153,
   "longitude": -71.407389
 },
 {
   "stop_id": "24605",
   "stop_name": "MENDON NS MARSHALL",
   "latitude": 41.92016,
   "longitude": -71.408541
 },
 {
   "stop_id": "24641",
   "stop_name": "POWDER HILL OPP CROWNMARD",
   "latitude": 41.923841,
   "longitude": -71.481141
 },
 {
   "stop_id": "24645",
   "stop_name": "BRYANT UNIVERSITY",
   "latitude": 41.921526,
   "longitude": -71.539059
 },
 {
   "stop_id": "24675",
   "stop_name": "MENDON FS SUNSET",
   "latitude": 41.92537,
   "longitude": -71.415003
 },
 {
   "stop_id": "24680",
   "stop_name": "MENDON OPP CUSHING",
   "latitude": 41.927933,
   "longitude": -71.420064
 },
 {
   "stop_id": "24685",
   "stop_name": "MENDON FS RIVERVIEW",
   "latitude": 41.92475,
   "longitude": -71.413344
 },
 {
   "stop_id": "24690",
   "stop_name": "MENDON NS MARTIN",
   "latitude": 41.930227,
   "longitude": -71.423273
 },
 {
   "stop_id": "24695",
   "stop_name": "MENDON FS MARTIN",
   "latitude": 41.930237,
   "longitude": -71.423162
 },
 {
   "stop_id": "24705",
   "stop_name": "ALBION AT VERIZON",
   "latitude": 41.930964,
   "longitude": -71.482607
 },
 {
   "stop_id": "24710",
   "stop_name": "MENDON NS RYAN",
   "latitude": 41.932459,
   "longitude": -71.426265
 },
 {
   "stop_id": "24720",
   "stop_name": "MENDON NS ASHTON PK WAY",
   "latitude": 41.935403,
   "longitude": -71.428944
 },
 {
   "stop_id": "24725",
   "stop_name": "RT 116 OPP BLACKSTONE VALLEY",
   "latitude": 41.934608,
   "longitude": -71.465415
 },
 {
   "stop_id": "24730",
   "stop_name": "RT 116 FS RT 126",
   "latitude": 41.934529,
   "longitude": -71.449804
 },
 {
   "stop_id": "24735",
   "stop_name": "RT 116 FS BLACKSTONE VALLEY",
   "latitude": 41.934558,
   "longitude": -71.457868
 },
 {
   "stop_id": "24740",
   "stop_name": "RT 116 FS OLD RIVER",
   "latitude": 41.934657,
   "longitude": -71.450929
 },
 {
   "stop_id": "24745",
   "stop_name": "RT 116 FS WAKE ROBIN",
   "latitude": 41.934961,
   "longitude": -71.473838
 },
 {
   "stop_id": "24755",
   "stop_name": "ALBION OPP CROSS COMPANY",
   "latitude": 41.934336,
   "longitude": -71.481668
 },
 {
   "stop_id": "24756",
   "stop_name": "ALBION AT CROSS COMPANY",
   "latitude": 41.934278,
   "longitude": -71.481817
 },
 {
   "stop_id": "24770",
   "stop_name": "BANK OF AMERICA",
   "latitude": 41.936207,
   "longitude": -71.443966
 },
 {
   "stop_id": "24775",
   "stop_name": "MENDON NS STORE HILL",
   "latitude": 41.937356,
   "longitude": -71.429522
 },
 {
   "stop_id": "24785",
   "stop_name": "20 BLACKSTONE VALLEY",
   "latitude": 41.939404,
   "longitude": -71.461828
 },
 {
   "stop_id": "24810",
   "stop_name": "LINCOLN MALL BETWEEN MARSHALLS & 5 BELOW",
   "latitude": 41.937541,
   "longitude": -71.476323
 },
 {
   "stop_id": "24815",
   "stop_name": "MENDON NS SCOTT",
   "latitude": 41.938764,
   "longitude": -71.430899
 },
 {
   "stop_id": "24820",
   "stop_name": "10 AMICA",
   "latitude": 41.936452,
   "longitude": -71.464583
 },
 {
   "stop_id": "24840",
   "stop_name": "LAPHAM FARM NS VICTORY",
   "latitude": 41.942859,
   "longitude": -71.658163
 },
 {
   "stop_id": "24870",
   "stop_name": "VICTORY HWAY NS SANDHILL",
   "latitude": 41.947761,
   "longitude": -71.648949
 },
 {
   "stop_id": "24875",
   "stop_name": "VICTORY HWAY NS LAPHAM",
   "latitude": 41.943199,
   "longitude": -71.657526
 },
 {
   "stop_id": "24945",
   "stop_name": "VICTORY HWY AT 919 VICTORY HWY",
   "latitude": 41.951837,
   "longitude": -71.649344
 },
 {
   "stop_id": "24972",
   "stop_name": "BRIDGEWAY NS SAYLES",
   "latitude": 41.95712,
   "longitude": -71.70219
 },
 {
   "stop_id": "24985",
   "stop_name": "CENTRAL NS CORRIE LANE",
   "latitude": 41.958838,
   "longitude": -71.659908
 },
 {
   "stop_id": "24990",
   "stop_name": "CENTRAL NS CORRIE LANE",
   "latitude": 41.958644,
   "longitude": -71.65894
 },
 {
   "stop_id": "24995",
   "stop_name": "MAIN FS ELM",
   "latitude": 41.960612,
   "longitude": -71.699877
 },
 {
   "stop_id": "25010",
   "stop_name": "MAIN OPP ELM",
   "latitude": 41.960348,
   "longitude": -71.700104
 },
 {
   "stop_id": "25030",
   "stop_name": "CENTRAL AT 73 CENTRAL",
   "latitude": 41.962265,
   "longitude": -71.671261
 },
 {
   "stop_id": "25035",
   "stop_name": "CENTRAL FS LYNNE LN",
   "latitude": 41.961143,
   "longitude": -71.66346
 },
 {
   "stop_id": "25085",
   "stop_name": "CHAPEL FS MAIN ST",
   "latitude": 41.96673,
   "longitude": -71.678861
 },
 {
   "stop_id": "25100",
   "stop_name": "CHAPEL OPP CHUM BLVD",
   "latitude": 41.966934,
   "longitude": -71.690851
 },
 {
   "stop_id": "25102",
   "stop_name": "CHAPEL OPP 67 CHAPEL",
   "latitude": 41.966879,
   "longitude": -71.691109
 },
 {
   "stop_id": "25110",
   "stop_name": "CHAPEL NS MAIN",
   "latitude": 41.96634,
   "longitude": -71.678843
 },
 {
   "stop_id": "25125",
   "stop_name": "CHAPEL NS FOSTER",
   "latitude": 41.967568,
   "longitude": -71.682526
 },
 {
   "stop_id": "25275",
   "stop_name": "RT 146 FS SAYLES HILL",
   "latitude": 41.960172,
   "longitude": -71.49383
 },
 {
   "stop_id": "25300",
   "stop_name": "RT 146A FS OLD SMITHFIELD",
   "latitude": 41.97107,
   "longitude": -71.507966
 },
 {
   "stop_id": "25315",
   "stop_name": "RT 146A NS RAYMOND",
   "latitude": 41.980816,
   "longitude": -71.513779
 },
 {
   "stop_id": "25320",
   "stop_name": "RT 146A AT 435 146A",
   "latitude": 41.972282,
   "longitude": -71.509449
 },
 {
   "stop_id": "25335",
   "stop_name": "RT 146A NS PARK",
   "latitude": 41.98277,
   "longitude": -71.51482
 },
 {
   "stop_id": "25340",
   "stop_name": "RT 146A AT 63 EDDY DOWLING HWAY",
   "latitude": 41.980802,
   "longitude": -71.513978
 },
 {
   "stop_id": "25350",
   "stop_name": "RT 146A NS PARK",
   "latitude": 41.983247,
   "longitude": -71.516304
 },
 {
   "stop_id": "25405",
   "stop_name": "PROVIDENCE NS RT 146A",
   "latitude": 41.98602,
   "longitude": -71.522391
 },
 {
   "stop_id": "25540",
   "stop_name": "PROVIDENCE FS BALLOU",
   "latitude": 41.991273,
   "longitude": -71.521376
 },
 {
   "stop_id": "25600",
   "stop_name": "PROVIDENCE NS VOSE",
   "latitude": 41.993655,
   "longitude": -71.521259
 },
 {
   "stop_id": "25605",
   "stop_name": "PROVIDENCE NS COLLINS",
   "latitude": 41.993788,
   "longitude": -71.5212
 },
 {
   "stop_id": "25690",
   "stop_name": "PROVIDENCE NS S MAIN",
   "latitude": 41.996,
   "longitude": -71.52235
 },
 {
   "stop_id": "25695",
   "stop_name": "S MAIN opp BUXTON",
   "latitude": 41.996581,
   "longitude": -71.522405
 },
 {
   "stop_id": "25705",
   "stop_name": "S MAIN OPP 307 S MAIN",
   "latitude": 41.996936,
   "longitude": -71.521445
 },
 {
   "stop_id": "25735",
   "stop_name": "S MAIN OPP SOUTH",
   "latitude": 41.997802,
   "longitude": -71.51987
 },
 {
   "stop_id": "25750",
   "stop_name": "S MAIN FS EAST",
   "latitude": 41.998143,
   "longitude": -71.5194
 },
 {
   "stop_id": "25760",
   "stop_name": "S MAIN FS FRONT",
   "latitude": 41.998712,
   "longitude": -71.518433
 },
 {
   "stop_id": "25885",
   "stop_name": "BERNON OPP ALLEN",
   "latitude": 42.000101,
   "longitude": -71.513985
 },
 {
   "stop_id": "26000",
   "stop_name": "POWDER HILL FS CROWNMARK",
   "latitude": 41.92373,
   "longitude": -71.481251
 },
 {
   "stop_id": "26015",
   "stop_name": "MAIN FS HIGH",
   "latitude": 42.00309,
   "longitude": -71.513395
 },
 {
   "stop_id": "26020",
   "stop_name": "POWDER HILL NS JENCKES HILL",
   "latitude": 41.916646,
   "longitude": -71.479773
 },
 {
   "stop_id": "26155",
   "stop_name": "CLINTON AT 113 CLINTON",
   "latitude": 42.003986,
   "longitude": -71.511595
 },
 {
   "stop_id": "26910",
   "stop_name": "SMITH OPP FREDERICK",
   "latitude": 41.836193,
   "longitude": -71.42918
 },
 {
   "stop_id": "26915",
   "stop_name": "SMITH NS PEMBROKE",
   "latitude": 41.836661,
   "longitude": -71.431184
 },
 {
   "stop_id": "26970",
   "stop_name": "SMITH NS SUNSET",
   "latitude": 41.854253,
   "longitude": -71.468409
 },
 {
   "stop_id": "27045",
   "stop_name": "ESMOND NS WATERMAN",
   "latitude": 41.87796,
   "longitude": -71.50184
 },
 {
   "stop_id": "27050",
   "stop_name": "WATERMAN FS BYPASS",
   "latitude": 41.859573,
   "longitude": -71.486127
 },
 {
   "stop_id": "27055",
   "stop_name": "WATERMAN OPP GREYSTONE FABRICS",
   "latitude": 41.864322,
   "longitude": -71.488596
 },
 {
   "stop_id": "27060",
   "stop_name": "WATERMAN OPP WHITEHALL APTS",
   "latitude": 41.865513,
   "longitude": -71.489571
 },
 {
   "stop_id": "27065",
   "stop_name": "WATERMAN FS NELSON",
   "latitude": 41.867925,
   "longitude": -71.491316
 },
 {
   "stop_id": "27070",
   "stop_name": "WATERMAN FS GLADSTONE",
   "latitude": 41.869816,
   "longitude": -71.492694
 },
 {
   "stop_id": "27075",
   "stop_name": "WATERMAN OPP MINORU",
   "latitude": 41.870879,
   "longitude": -71.493446
 },
 {
   "stop_id": "27105",
   "stop_name": "WATERMAN NS BENNYS MAIN OFFICE",
   "latitude": 41.876368,
   "longitude": -71.498987
 },
 {
   "stop_id": "27115",
   "stop_name": "WATERMAN NS 316 WATERMAN",
   "latitude": 41.874684,
   "longitude": -71.496877
 },
 {
   "stop_id": "27125",
   "stop_name": "SMITH OPP CAPITAL VIEW",
   "latitude": 41.848016,
   "longitude": -71.45623
 },
 {
   "stop_id": "27140",
   "stop_name": "SMITH NS WYNDHAM",
   "latitude": 41.839673,
   "longitude": -71.438354
 },
 {
   "stop_id": "27150",
   "stop_name": "SMITH OPP PEMBROKE",
   "latitude": 41.836561,
   "longitude": -71.431335
 },
 {
   "stop_id": "27155",
   "stop_name": "ESMOND OPP 2 ESMOND",
   "latitude": 41.877916,
   "longitude": -71.501983
 },
 {
   "stop_id": "27190",
   "stop_name": "CHARLES OPP 356 CHARLES",
   "latitude": 41.841544,
   "longitude": -71.417832
 },
 {
   "stop_id": "27200",
   "stop_name": "ALLENS OPP MOTIVA ENTERPRISES",
   "latitude": 41.797995,
   "longitude": -71.399299
 },
 {
   "stop_id": "27210",
   "stop_name": "NORWOOD FS NARRAGANSETT BLVD",
   "latitude": 41.779476,
   "longitude": -71.393398
 },
 {
   "stop_id": "27215",
   "stop_name": "POST FS ELKLAND",
   "latitude": 41.730161,
   "longitude": -71.437505
 },
 {
   "stop_id": "27220",
   "stop_name": "POST FS ALHAMBRA",
   "latitude": 41.727772,
   "longitude": -71.438487
 },
 {
   "stop_id": "27225",
   "stop_name": "POST AT 3399 POST",
   "latitude": 41.696412,
   "longitude": -71.459086
 },
 {
   "stop_id": "27230",
   "stop_name": "POST NS HESPER",
   "latitude": 41.669111,
   "longitude": -71.448835
 },
 {
   "stop_id": "27235",
   "stop_name": "MT PLEASANT OPP MONTROSE",
   "latitude": 41.82569,
   "longitude": -71.448544
 },
 {
   "stop_id": "27245",
   "stop_name": "MT PLEASANT NS DOVER",
   "latitude": 41.829562,
   "longitude": -71.449162
 },
 {
   "stop_id": "27250",
   "stop_name": "MT PLEASANT NS ROANOKE",
   "latitude": 41.831004,
   "longitude": -71.449416
 },
 {
   "stop_id": "27255",
   "stop_name": "MT PLEASANT NS CHALKSTONE",
   "latitude": 41.832538,
   "longitude": -71.449658
 },
 {
   "stop_id": "27260",
   "stop_name": "COLLEGE FS MT PLEASANT",
   "latitude": 41.841759,
   "longitude": -71.453986
 },
 {
   "stop_id": "28170",
   "stop_name": "PAWTUCKET OPP DARTMOUTH",
   "latitude": 41.86129,
   "longitude": -71.395923
 },
 {
   "stop_id": "28605",
   "stop_name": "PROVIDENCE NS COE",
   "latitude": 41.995453,
   "longitude": -71.522165
 },
 {
   "stop_id": "28610",
   "stop_name": "RT 146A NS WHITE PKWAY",
   "latitude": 41.984544,
   "longitude": -71.519611
 },
 {
   "stop_id": "28620",
   "stop_name": "CHARLES BETWEEN SMART & DOROTHY",
   "latitude": 41.857529,
   "longitude": -71.421325
 },
 {
   "stop_id": "29060",
   "stop_name": "BELLEVUE FS LAKEVIEW",
   "latitude": 41.457661,
   "longitude": -71.306211
 },
 {
   "stop_id": "29070",
   "stop_name": "BELLEVUE FS LEDGE",
   "latitude": 41.45567,
   "longitude": -71.308268
 },
 {
   "stop_id": "29075",
   "stop_name": "BELLEVUE NS LAKEVIEW",
   "latitude": 41.457595,
   "longitude": -71.30616
 },
 {
   "stop_id": "29120",
   "stop_name": "GREAT ISLAND RD AT FERRY TERMINAL",
   "latitude": 41.37899,
   "longitude": -71.510485
 },
 {
   "stop_id": "29140",
   "stop_name": "SAND HILL COVE OPP ROGER WHEELER BEACH",
   "latitude": 41.37416,
   "longitude": -71.498739
 },
 {
   "stop_id": "29141",
   "stop_name": "SAND HILL COVE AT ROGER WHEELER BEACH",
   "latitude": 41.37405,
   "longitude": -71.498932
 },
 {
   "stop_id": "29145",
   "stop_name": "OCEAN FS DESANO",
   "latitude": 41.389111,
   "longitude": -71.475734
 },
 {
   "stop_id": "29146",
   "stop_name": "OCEAN AT SCARBOROUGH BEACH",
   "latitude": 41.39026,
   "longitude": -71.47348
 },
 {
   "stop_id": "29190",
   "stop_name": "DYER NS CRANSTON",
   "latitude": 41.790191,
   "longitude": -71.45707
 },
 {
   "stop_id": "29215",
   "stop_name": "CHESTNUT HILL AT 116 CHESTNUT HILL",
   "latitude": 41.795858,
   "longitude": -71.455072
 },
 {
   "stop_id": "29220",
   "stop_name": "LAUREL HILL FS CHESTNUT HILL",
   "latitude": 41.795549,
   "longitude": -71.45248
 },
 {
   "stop_id": "29225",
   "stop_name": "DYER AT 711 DYER",
   "latitude": 41.792871,
   "longitude": -71.457664
 },
 {
   "stop_id": "29235",
   "stop_name": "DYER FS CRANSTON",
   "latitude": 41.790019,
   "longitude": -71.45716
 },
 {
   "stop_id": "29570",
   "stop_name": "JENNINGS MANOR",
   "latitude": 41.801635,
   "longitude": -71.448757
 },
 {
   "stop_id": "29600",
   "stop_name": "DEXTER NS COWDEN",
   "latitude": 41.8875,
   "longitude": -71.397948
 },
 {
   "stop_id": "29610",
   "stop_name": "SCHOOL OPP ENGLEWOOD",
   "latitude": 41.867494,
   "longitude": -71.377351
 },
 {
   "stop_id": "29615",
   "stop_name": "SCHOOL AT RIVERVIEW TERRACE",
   "latitude": 41.866668,
   "longitude": -71.376619
 },
 {
   "stop_id": "29620",
   "stop_name": "SCHOOL AT BOYS & GIRLS CLUB",
   "latitude": 41.86448,
   "longitude": -71.375562
 },
 {
   "stop_id": "29625",
   "stop_name": "SCHOOL OPP MARYLAND",
   "latitude": 41.862257,
   "longitude": -71.375103
 },
 {
   "stop_id": "29630",
   "stop_name": "BEVERAGE HILL AT SLATER DYE CO",
   "latitude": 41.860623,
   "longitude": -71.373443
 },
 {
   "stop_id": "29635",
   "stop_name": "BEVERAGE HILL OPP RIDCO",
   "latitude": 41.860645,
   "longitude": -71.372077
 },
 {
   "stop_id": "29640",
   "stop_name": "BEVERAGE HILL OPP GEORGE BENNETT",
   "latitude": 41.860815,
   "longitude": -71.363589
 },
 {
   "stop_id": "29655",
   "stop_name": "PRESIDENTIAL PLACE",
   "latitude": 41.805093,
   "longitude": -71.444274
 },
 {
   "stop_id": "29675",
   "stop_name": "ARLINGTON MANOR",
   "latitude": 41.800816,
   "longitude": -71.44898
 },
 {
   "stop_id": "29680",
   "stop_name": "HARRIS HOUSE",
   "latitude": 41.799341,
   "longitude": -71.445235
 },
 {
   "stop_id": "29685",
   "stop_name": "DEVAN MANOR",
   "latitude": 41.792664,
   "longitude": -71.451123
 },
 {
   "stop_id": "30105",
   "stop_name": "ATWELLS OPP JULIAN",
   "latitude": 41.82493,
   "longitude": -71.444699
 },
 {
   "stop_id": "30110",
   "stop_name": "ATWELLS FS CARLETON",
   "latitude": 41.825092,
   "longitude": -71.446993
 },
 {
   "stop_id": "30115",
   "stop_name": "ATWELLS NS CARLETON",
   "latitude": 41.82491,
   "longitude": -71.44676
 },
 {
   "stop_id": "30120",
   "stop_name": "ATWELLS NS PUTNAM",
   "latitude": 41.824797,
   "longitude": -71.444243
 },
 {
   "stop_id": "30126",
   "stop_name": "CAHIR FS WESTMINSTER",
   "latitude": 41.817947,
   "longitude": -71.419563
 },
 {
   "stop_id": "30175",
   "stop_name": "STOP&SHOP (COTTAGE STREET - PAWTUCKET)",
   "latitude": 41.888327,
   "longitude": -71.367365
 },
 {
   "stop_id": "30190",
   "stop_name": "NEWPORT NS CHARPENTIER",
   "latitude": 41.893028,
   "longitude": -71.354121
 },
 {
   "stop_id": "30195",
   "stop_name": "NEWPORT NS LEE",
   "latitude": 41.891071,
   "longitude": -71.354139
 },
 {
   "stop_id": "30200",
   "stop_name": "NEWPORT NS BUCKLIN",
   "latitude": 41.889748,
   "longitude": -71.354134
 },
 {
   "stop_id": "30205",
   "stop_name": "NEWPORT FS ARMISTICE",
   "latitude": 41.877319,
   "longitude": -71.354325
 },
 {
   "stop_id": "30210",
   "stop_name": "NEWPORT OPP LANNI",
   "latitude": 41.874412,
   "longitude": -71.354352
 },
 {
   "stop_id": "30215",
   "stop_name": "NEWPORT AT 596 NEWPORT",
   "latitude": 41.872986,
   "longitude": -71.354397
 },
 {
   "stop_id": "30220",
   "stop_name": "NEWPORT NS COLUMBUS",
   "latitude": 41.870415,
   "longitude": -71.354432
 },
 {
   "stop_id": "30235",
   "stop_name": "NEWPORT NS PARKVIEW",
   "latitude": 41.866519,
   "longitude": -71.354474
 },
 {
   "stop_id": "30240",
   "stop_name": "NEWPORT AT 176 NEWPORT",
   "latitude": 41.863476,
   "longitude": -71.354508
 },
 {
   "stop_id": "30245",
   "stop_name": "NEWPORT NS BEVERAGE HILL",
   "latitude": 41.861856,
   "longitude": -71.354524
 },
 {
   "stop_id": "30250",
   "stop_name": "NEWPORT AT 191 NEWPORT AVE",
   "latitude": 41.863789,
   "longitude": -71.354388
 },
 {
   "stop_id": "30255",
   "stop_name": "NEWPORT AT 585 NEWPORT",
   "latitude": 41.872736,
   "longitude": -71.354252
 },
 {
   "stop_id": "30260",
   "stop_name": "NEWPORT AT 701 NEWPORT",
   "latitude": 41.875665,
   "longitude": -71.354244
 },
 {
   "stop_id": "30265",
   "stop_name": "NEWPORT NS ARMISTICE",
   "latitude": 41.878133,
   "longitude": -71.354182
 },
 {
   "stop_id": "30270",
   "stop_name": "NEWPORT NS CRESCENT",
   "latitude": 41.879482,
   "longitude": -71.354164
 },
 {
   "stop_id": "30280",
   "stop_name": "NEWPORT NS BENEFIT",
   "latitude": 41.891748,
   "longitude": -71.354019
 },
 {
   "stop_id": "30285",
   "stop_name": "NEWPORT FS CUSHMAN",
   "latitude": 41.893496,
   "longitude": -71.353984
 },
 {
   "stop_id": "30295",
   "stop_name": "PARENTE'S RESTAURANT",
   "latitude": 41.924434,
   "longitude": -71.530861
 },
 {
   "stop_id": "30300",
   "stop_name": "DOUGLAS PIKE FS WASHINGTON HWY",
   "latitude": 41.915765,
   "longitude": -71.519108
 },
 {
   "stop_id": "30305",
   "stop_name": "DOUGLAS PIKE OPP HAMPTON INN",
   "latitude": 41.914106,
   "longitude": -71.517703
 },
 {
   "stop_id": "30315",
   "stop_name": "RT 146 AT 1148 EDDIE DOWLING HWAY",
   "latitude": 41.959758,
   "longitude": -71.493176
 },
 {
   "stop_id": "30320",
   "stop_name": "RT 4 FS OAK HILL",
   "latitude": 41.561053,
   "longitude": -71.489529
 },
 {
   "stop_id": "30325",
   "stop_name": "RT 2 NS PLEASANT VIEW",
   "latitude": 41.503928,
   "longitude": -71.560814
 },
 {
   "stop_id": "30335",
   "stop_name": "RT 2 OPP BALD HILL GARDEN CTR",
   "latitude": 41.573863,
   "longitude": -71.516586
 },
 {
   "stop_id": "30350",
   "stop_name": "MEMORIAL HOSPITAL",
   "latitude": 41.871395,
   "longitude": -71.376437
 },
 {
   "stop_id": "30352",
   "stop_name": "MEMORIAL HOSPITAL",
   "latitude": 41.871524,
   "longitude": -71.376384
 },
 {
   "stop_id": "30410",
   "stop_name": "BRANCH FS CHARLES",
   "latitude": 41.850559,
   "longitude": -71.420397
 },
 {
   "stop_id": "30415",
   "stop_name": "BRANCH FS HAWKINS",
   "latitude": 41.851082,
   "longitude": -71.421659
 },
 {
   "stop_id": "30420",
   "stop_name": "BRANCH NS OPPER",
   "latitude": 41.852122,
   "longitude": -71.424057
 },
 {
   "stop_id": "30435",
   "stop_name": "BRANCH FS LANGDON",
   "latitude": 41.852163,
   "longitude": -71.424367
 },
 {
   "stop_id": "30440",
   "stop_name": "BRANCH NS HAWKINS",
   "latitude": 41.851028,
   "longitude": -71.421721
 },
 {
   "stop_id": "30445",
   "stop_name": "RT 146 AT HONDA",
   "latitude": 41.954068,
   "longitude": -71.48779
 },
 {
   "stop_id": "30455",
   "stop_name": "RT 146 NS 146N [ON-RAMP]",
   "latitude": 41.967571,
   "longitude": -71.50328
 },
 {
   "stop_id": "30460",
   "stop_name": "RT 146A FS PARK AVE",
   "latitude": 41.983509,
   "longitude": -71.516838
 },
 {
   "stop_id": "30465",
   "stop_name": "RT 146A OPP WHITE PARKWAY",
   "latitude": 41.984681,
   "longitude": -71.519521
 },
 {
   "stop_id": "30470",
   "stop_name": "PROVIDENCE FS FABIEN",
   "latitude": 41.986757,
   "longitude": -71.52209
 },
 {
   "stop_id": "30475",
   "stop_name": "PROVIDENCE NS PIEDMONT",
   "latitude": 41.988884,
   "longitude": -71.521727
 },
 {
   "stop_id": "30480",
   "stop_name": "PROVIDENCE AT 480 PROVIDENCE",
   "latitude": 41.990022,
   "longitude": -71.521467
 },
 {
   "stop_id": "30485",
   "stop_name": "PROVIDENCE NS BALLOU",
   "latitude": 41.991221,
   "longitude": -71.521278
 },
 {
   "stop_id": "30490",
   "stop_name": "PROVIDENCE NS BROAD",
   "latitude": 41.992711,
   "longitude": -71.520976
 },
 {
   "stop_id": "40010",
   "stop_name": "DOUGLAS PIKE NS DECOTIS FARM",
   "latitude": 41.919062,
   "longitude": -71.522196
 },
 {
   "stop_id": "50000",
   "stop_name": "MEMORIAL AT MEMORIAL COURT",
   "latitude": 41.996647,
   "longitude": -71.532057
 },
 {
   "stop_id": "50005",
   "stop_name": "MEMORIAL NS BOURDON",
   "latitude": 41.997183,
   "longitude": -71.532826
 },
 {
   "stop_id": "50010",
   "stop_name": "MASON OPP 10TH",
   "latitude": 41.998104,
   "longitude": -71.533026
 },
 {
   "stop_id": "50020",
   "stop_name": "FAIRMOUNT FS 9TH",
   "latitude": 42.000652,
   "longitude": -71.532874
 },
 {
   "stop_id": "50025",
   "stop_name": "FAIRMOUNT NS 6TH",
   "latitude": 42.001057,
   "longitude": -71.531029
 },
 {
   "stop_id": "50030",
   "stop_name": "FAIRMOUNT FS 5TH",
   "latitude": 42.001352,
   "longitude": -71.529429
 },
 {
   "stop_id": "50035",
   "stop_name": "FAIRMOUNT FS 4TH",
   "latitude": 42.001593,
   "longitude": -71.528376
 },
 {
   "stop_id": "50040",
   "stop_name": "SECOND FS CHESTNUT",
   "latitude": 42.003147,
   "longitude": -71.527377
 },
 {
   "stop_id": "50045",
   "stop_name": "SECOND AT 525 SECOND ST",
   "latitude": 42.004927,
   "longitude": -71.528058
 },
 {
   "stop_id": "50055",
   "stop_name": "SECOND NS RIVER",
   "latitude": 42.006383,
   "longitude": -71.528139
 },
 {
   "stop_id": "50060",
   "stop_name": "RIVER FS 2ND",
   "latitude": 42.006678,
   "longitude": -71.527245
 },
 {
   "stop_id": "50065",
   "stop_name": "RIVER OPP BLACKSTONE",
   "latitude": 42.00487,
   "longitude": -71.523894
 },
 {
   "stop_id": "50070",
   "stop_name": "VERRY OPP YMCA",
   "latitude": 42.004491,
   "longitude": -71.520467
 },
 {
   "stop_id": "50075",
   "stop_name": "RAILROAD NS ARNOLD",
   "latitude": 42.004529,
   "longitude": -71.517853
 },
 {
   "stop_id": "50080",
   "stop_name": "RAILROAD OPP 147 RAILROAD",
   "latitude": 42.004061,
   "longitude": -71.515452
 },
 {
   "stop_id": "50085",
   "stop_name": "FRONT ST AT 100 FRONT ST",
   "latitude": 42.001195,
   "longitude": -71.511139
 },
 {
   "stop_id": "50090",
   "stop_name": "CLINTON FS VETS PKWAY",
   "latitude": 42.005575,
   "longitude": -71.509648
 },
 {
   "stop_id": "50095",
   "stop_name": "CLINTON AT STRIPMALL",
   "latitude": 42.006388,
   "longitude": -71.507343
 },
 {
   "stop_id": "50105",
   "stop_name": "CLINTON AT KENNEDY MANOR",
   "latitude": 42.007385,
   "longitude": -71.504596
 },
 {
   "stop_id": "50110",
   "stop_name": "CUMBERLAND FS CLINTON",
   "latitude": 42.00754,
   "longitude": -71.502326
 },
 {
   "stop_id": "50115",
   "stop_name": "CUMBERLAND OPP LOCUST",
   "latitude": 42.006909,
   "longitude": -71.501622
 },
 {
   "stop_id": "50120",
   "stop_name": "CUMBERLAND FS KENDRICK",
   "latitude": 42.00635,
   "longitude": -71.500929
 },
 {
   "stop_id": "50125",
   "stop_name": "CASS OPP DULUDE",
   "latitude": 42.005211,
   "longitude": -71.496682
 },
 {
   "stop_id": "50130",
   "stop_name": "SWEET OPP STANLEY",
   "latitude": 42.006881,
   "longitude": -71.49366
 },
 {
   "stop_id": "50135",
   "stop_name": "ELM MIDBLOCK HEBERT",
   "latitude": 42.007752,
   "longitude": -71.493129
 },
 {
   "stop_id": "50140",
   "stop_name": "ELM NS FLORIDA",
   "latitude": 42.008049,
   "longitude": -71.491322
 },
 {
   "stop_id": "50145",
   "stop_name": "ROBINSON OPP 632 ROBINSON",
   "latitude": 42.009056,
   "longitude": -71.490144
 },
 {
   "stop_id": "50150",
   "stop_name": "ROBINSON AT 715 ROBINSON",
   "latitude": 42.009248,
   "longitude": -71.488921
 },
 {
   "stop_id": "50155",
   "stop_name": "MORIN HEIGHTS AT 263 MORIN HEIGHTS",
   "latitude": 42.01072,
   "longitude": -71.487805
 },
 {
   "stop_id": "50160",
   "stop_name": "LINDEN NS HAYES",
   "latitude": 42.012994,
   "longitude": -71.488135
 },
 {
   "stop_id": "50165",
   "stop_name": "LINDEN NS DIAMOND HILL",
   "latitude": 42.015316,
   "longitude": -71.487136
 },
 {
   "stop_id": "50170",
   "stop_name": "DIAMOND HILL AT CROWN COURT",
   "latitude": 42.015691,
   "longitude": -71.484439
 },
 {
   "stop_id": "50190",
   "stop_name": "WALNUT HILL (SAVERS)",
   "latitude": 42.01679,
   "longitude": -71.477596
 },
 {
   "stop_id": "50195",
   "stop_name": "WALNUT HILL (SHAWS)",
   "latitude": 42.016935,
   "longitude": -71.478893
 },
 {
   "stop_id": "50200",
   "stop_name": "DIAMOND HILL OPP WALNUT HILL",
   "latitude": 42.015673,
   "longitude": -71.47813
 },
 {
   "stop_id": "50205",
   "stop_name": "DIAMOND HILL AT CITIZENS BANK",
   "latitude": 42.015424,
   "longitude": -71.475386
 },
 {
   "stop_id": "50215",
   "stop_name": "DIAMOND HILL (PRICERITE)",
   "latitude": 42.016942,
   "longitude": -71.471245
 },
 {
   "stop_id": "50220",
   "stop_name": "DIAMOND HILL (DOLLAR TREE)",
   "latitude": 42.016037,
   "longitude": -71.472633
 },
 {
   "stop_id": "50290",
   "stop_name": "DIAMOND HILL AT DIAMOND HILL PLAZA",
   "latitude": 42.015216,
   "longitude": -71.472045
 },
 {
   "stop_id": "50305",
   "stop_name": "DIAMOND HILL AT 1240 DIAMOND HILL",
   "latitude": 42.015779,
   "longitude": -71.483534
 },
 {
   "stop_id": "50310",
   "stop_name": "DIAMOND HILL OPP CROWN COURT",
   "latitude": 42.015797,
   "longitude": -71.484791
 },
 {
   "stop_id": "50315",
   "stop_name": "LINDEN FS DIAMOND HILL",
   "latitude": 42.015479,
   "longitude": -71.487202
 },
 {
   "stop_id": "50320",
   "stop_name": "LINDEN NS FALL",
   "latitude": 42.012879,
   "longitude": -71.488304
 },
 {
   "stop_id": "50325",
   "stop_name": "MORIN HEIGHTS OPP 263 MORIN HEIGHTS",
   "latitude": 42.01068,
   "longitude": -71.487879
 },
 {
   "stop_id": "50330",
   "stop_name": "ROBINSON AT BLDG 16",
   "latitude": 42.009112,
   "longitude": -71.489406
 },
 {
   "stop_id": "50335",
   "stop_name": "ELM NS COTE",
   "latitude": 42.008121,
   "longitude": -71.491414
 },
 {
   "stop_id": "50340",
   "stop_name": "ELM FS HEBERT",
   "latitude": 42.007905,
   "longitude": -71.492933
 },
 {
   "stop_id": "50345",
   "stop_name": "SWEET FS STANLEY",
   "latitude": 42.007009,
   "longitude": -71.493716
 },
 {
   "stop_id": "50350",
   "stop_name": "CASS OPP 219 CASS",
   "latitude": 42.005533,
   "longitude": -71.494748
 },
 {
   "stop_id": "50355",
   "stop_name": "CASS NS MAILLOUX",
   "latitude": 42.005287,
   "longitude": -71.497039
 },
 {
   "stop_id": "50360",
   "stop_name": "CUMBERLAND NS LOCUST",
   "latitude": 42.00649,
   "longitude": -71.500861
 },
 {
   "stop_id": "50365",
   "stop_name": "CUMBERLAND NS CLINTON",
   "latitude": 42.007908,
   "longitude": -71.502568
 },
 {
   "stop_id": "50370",
   "stop_name": "SOCIAL FS CUMBERLAND",
   "latitude": 42.008804,
   "longitude": -71.504218
 },
 {
   "stop_id": "50380",
   "stop_name": "SOCIAL AT BEAUCHEMIM LUMBER",
   "latitude": 42.008158,
   "longitude": -71.507615
 },
 {
   "stop_id": "50385",
   "stop_name": "SOCIAL NS POND",
   "latitude": 42.007467,
   "longitude": -71.509765
 },
 {
   "stop_id": "50390",
   "stop_name": "SOCIAL OPP POST OFFICE",
   "latitude": 42.006559,
   "longitude": -71.511309
 },
 {
   "stop_id": "50435",
   "stop_name": "FAIRMOUNT NS 4TH",
   "latitude": 42.00168,
   "longitude": -71.528315
 },
 {
   "stop_id": "50440",
   "stop_name": "FAIRMOUNT OPP 5TH",
   "latitude": 42.0014,
   "longitude": -71.529665
 },
 {
   "stop_id": "50445",
   "stop_name": "FAIRMOUNT AT 573 FAIRMOUNT",
   "latitude": 42.001133,
   "longitude": -71.53097
 },
 {
   "stop_id": "50450",
   "stop_name": "NINTH FS FAIRMOUNT",
   "latitude": 42.000499,
   "longitude": -71.533089
 },
 {
   "stop_id": "50451",
   "stop_name": "MASON NS 10TH",
   "latitude": 41.998198,
   "longitude": -71.532942
 },
 {
   "stop_id": "50455",
   "stop_name": "NINTH NS CHAPEL",
   "latitude": 41.999709,
   "longitude": -71.53278
 },
 {
   "stop_id": "50456",
   "stop_name": "BOURDON NS MEMORIAL",
   "latitude": 41.997716,
   "longitude": -71.533223
 },
 {
   "stop_id": "50475",
   "stop_name": "HUXLEY FS ADMIRAL",
   "latitude": 41.846027,
   "longitude": -71.432809
 },
 {
   "stop_id": "50480",
   "stop_name": "RT 2 OPP 40 S COUNTY TRL",
   "latitude": 41.555552,
   "longitude": -71.520313
 },
 {
   "stop_id": "50485",
   "stop_name": "RT 2 OPP VETERANS CEMETARY",
   "latitude": 41.545867,
   "longitude": -71.534215
 },
 {
   "stop_id": "50490",
   "stop_name": "W FRANKLIN NS WESTMINSTER",
   "latitude": 41.819197,
   "longitude": -71.419447
 },
 {
   "stop_id": "50495",
   "stop_name": "DYER AT 546 DYER",
   "latitude": 41.798494,
   "longitude": -71.457766
 },
 {
   "stop_id": "50610",
   "stop_name": "EAST AVE OPP MANNING",
   "latitude": 41.865502,
   "longitude": -71.387351
 },
 {
   "stop_id": "50620",
   "stop_name": "DRAPER OPP SUNRISE",
   "latitude": 41.706665,
   "longitude": -71.371855
 },
 {
   "stop_id": "50630",
   "stop_name": "RT 2 NS RI VETERANS MEMORIAL CEMETERY",
   "latitude": 41.545923,
   "longitude": -71.534237
 },
 {
   "stop_id": "50635",
   "stop_name": "RT 2 OPP YAWGOO VALLEY",
   "latitude": 41.521709,
   "longitude": -71.553896
 },
 {
   "stop_id": "50640",
   "stop_name": "RT 2 AT 2081 S COUNTY TRL",
   "latitude": 41.503871,
   "longitude": -71.561119
 },
 {
   "stop_id": "50645",
   "stop_name": "RT 2 NS WAITES CORNER",
   "latitude": 41.495404,
   "longitude": -71.569591
 },
 {
   "stop_id": "50650",
   "stop_name": "RT 2 NS RT 138",
   "latitude": 41.493119,
   "longitude": -71.573104
 },
 {
   "stop_id": "50655",
   "stop_name": "KINGSTOWN FS W KINGSTON PARK",
   "latitude": 41.488602,
   "longitude": -71.567539
 },
 {
   "stop_id": "50665",
   "stop_name": "KINGSTOWN NS FAIRGROUNDS",
   "latitude": 41.485173,
   "longitude": -71.561865
 },
 {
   "stop_id": "50675",
   "stop_name": "KINGSTOWN FS WATSON",
   "latitude": 41.483611,
   "longitude": -71.555325
 },
 {
   "stop_id": "50680",
   "stop_name": "KINGSTOWN NS TLC COFFEE ROASTERS",
   "latitude": 41.483126,
   "longitude": -71.552351
 },
 {
   "stop_id": "50685",
   "stop_name": "KINGSTOWN OPP W INDEPENDENCE WAY",
   "latitude": 41.482704,
   "longitude": -71.540456
 },
 {
   "stop_id": "50690",
   "stop_name": "KINGSTOWN OPP RYAN CENTER",
   "latitude": 41.482359,
   "longitude": -71.538198
 },
 {
   "stop_id": "50720",
   "stop_name": "KINGSTOWN NS PLAINS",
   "latitude": 41.482103,
   "longitude": -71.549827
 },
 {
   "stop_id": "50725",
   "stop_name": "KINGSTOWN OPP WATSON",
   "latitude": 41.483848,
   "longitude": -71.555632
 },
 {
   "stop_id": "50735",
   "stop_name": "KINGSTOWN NS FAIRGROUNDS",
   "latitude": 41.485132,
   "longitude": -71.561195
 },
 {
   "stop_id": "50740",
   "stop_name": "KINGSTOWN OPP W KINGSTON PARK",
   "latitude": 41.488822,
   "longitude": -71.567559
 },
 {
   "stop_id": "50750",
   "stop_name": "RT 2 FS RT 138",
   "latitude": 41.493514,
   "longitude": -71.572194
 },
 {
   "stop_id": "50755",
   "stop_name": "RT 2 OPP BARBERS POND",
   "latitude": 41.499017,
   "longitude": -71.563931
 },
 {
   "stop_id": "50760",
   "stop_name": "RT 2 NS WOLF ROCK",
   "latitude": 41.511206,
   "longitude": -71.556856
 },
 {
   "stop_id": "50765",
   "stop_name": "RT 2 OPP OAK HARBOUR SHOPPING PLAZA",
   "latitude": 41.526621,
   "longitude": -71.551301
 },
 {
   "stop_id": "50770",
   "stop_name": "RT 2 NS LIBERTY HILL OFFICE PARK",
   "latitude": 41.536083,
   "longitude": -71.543068
 },
 {
   "stop_id": "50775",
   "stop_name": "RT 2 NS DRYBRIDGE",
   "latitude": 41.558881,
   "longitude": -71.518094
 },
 {
   "stop_id": "50780",
   "stop_name": "RT 2 FS BEACON",
   "latitude": 41.571381,
   "longitude": -71.516674
 },
 {
   "stop_id": "50790",
   "stop_name": "MAIN NS KENYON",
   "latitude": 41.71213,
   "longitude": -71.523451
 },
 {
   "stop_id": "50795",
   "stop_name": "WASHINGTON NS BOSTON",
   "latitude": 41.697191,
   "longitude": -71.546474
 },
 {
   "stop_id": "50800",
   "stop_name": "S MAIN OPP HOPKINS HILL",
   "latitude": 41.682314,
   "longitude": -71.568823
 },
 {
   "stop_id": "50805",
   "stop_name": "MAIN OPP BRADLEY",
   "latitude": 41.709374,
   "longitude": -71.522654
 },
 {
   "stop_id": "50815",
   "stop_name": "MIDWAY NS CYPRESS DR",
   "latitude": 41.76063,
   "longitude": -71.456653
 },
 {
   "stop_id": "50825",
   "stop_name": "TIOGUE AT 1145 TIOGUE AVE (BURGER KING)",
   "latitude": 41.679115,
   "longitude": -71.581181
 },
 {
   "stop_id": "50830",
   "stop_name": "DIAMOND HILL (MCDONALDS)",
   "latitude": 42.015852,
   "longitude": -71.471741
 },
 {
   "stop_id": "51005",
   "stop_name": "PARK PLACE NS CHURCH",
   "latitude": 41.875907,
   "longitude": -71.387349
 },
 {
   "stop_id": "51010",
   "stop_name": "GEORGE NS HARRISON",
   "latitude": 41.874358,
   "longitude": -71.387516
 },
 {
   "stop_id": "51025",
   "stop_name": "COUNTY NS 395 COUNTY RD",
   "latitude": 41.745521,
   "longitude": -71.315709
 },
 {
   "stop_id": "51030",
   "stop_name": "COUNTY NS HILLTOP",
   "latitude": 41.742787,
   "longitude": -71.312346
 },
 {
   "stop_id": "51055",
   "stop_name": "COUNTY FS POLICE COVE PARK N RIDE",
   "latitude": 41.736528,
   "longitude": -71.298415
 },
 {
   "stop_id": "51060",
   "stop_name": "COUNTY AT 361 COUNTY RD",
   "latitude": 41.744247,
   "longitude": -71.314358
 },
 {
   "stop_id": "51070",
   "stop_name": "COUNTY OPP 395 COUNTY RD",
   "latitude": 41.745539,
   "longitude": -71.315566
 },
 {
   "stop_id": "51085",
   "stop_name": "HOWARD OPP 16 HOWARD",
   "latitude": 41.742584,
   "longitude": -71.462781
 },
 {
   "stop_id": "51095",
   "stop_name": "RT 102 OPP PINE MEADOW",
   "latitude": 41.921284,
   "longitude": -71.670493
 },
 {
   "stop_id": "51105",
   "stop_name": "RT 102 NS RT 44",
   "latitude": 41.916273,
   "longitude": -71.671686
 },
 {
   "stop_id": "51110",
   "stop_name": "PUTNAM PIKE AT DUNKIN DONUTS",
   "latitude": 41.906556,
   "longitude": -71.660513
 },
 {
   "stop_id": "51115",
   "stop_name": "PUTNAM PIKE OPP HIGHLAND LAKE",
   "latitude": 41.905391,
   "longitude": -71.654335
 },
 {
   "stop_id": "51120",
   "stop_name": "CENTRAL NS VICTORY HWY",
   "latitude": 41.955001,
   "longitude": -71.65204
 },
 {
   "stop_id": "51125",
   "stop_name": "PUTNAM PIKE FS AUSTIN",
   "latitude": 41.872687,
   "longitude": -71.55481
 },
 {
   "stop_id": "51140",
   "stop_name": "PUTNAM PIKE FS HIGHLAND LAKE",
   "latitude": 41.905499,
   "longitude": -71.654512
 },
 {
   "stop_id": "51145",
   "stop_name": "RT 102 FS RT 44",
   "latitude": 41.916165,
   "longitude": -71.671487
 },
 {
   "stop_id": "51165",
   "stop_name": "MEMORIAL FS EXCHANGE ST",
   "latitude": 41.826819,
   "longitude": -71.412824
 },
 {
   "stop_id": "55070",
   "stop_name": "POWER FS ATWOOD",
   "latitude": 41.870866,
   "longitude": -71.418165
 },
 {
   "stop_id": "55195",
   "stop_name": "LONGMEADOW OPP DRAPER",
   "latitude": 41.704108,
   "longitude": -71.373944
 },
 {
   "stop_id": "55215",
   "stop_name": "WARWICK OPP NINIGRET",
   "latitude": 41.732445,
   "longitude": -71.406928
 },
 {
   "stop_id": "55235",
   "stop_name": "PLAINFIELD FS SVC RD 1",
   "latitude": 41.8159,
   "longitude": -71.445306
 },
 {
   "stop_id": "55240",
   "stop_name": "PLAINFIELD OPP CLEMENCE",
   "latitude": 41.796294,
   "longitude": -71.482183
 },
 {
   "stop_id": "55255",
   "stop_name": "SAILOR WAY FS PLAINFIELD",
   "latitude": 41.787772,
   "longitude": -71.509403
 },
 {
   "stop_id": "55260",
   "stop_name": "AMFLEX FS NINETY-NINE WAY",
   "latitude": 41.786166,
   "longitude": -71.511674
 },
 {
   "stop_id": "55265",
   "stop_name": "DYER NS INDUSTRIAL RD",
   "latitude": 41.788007,
   "longitude": -71.456321
 },
 {
   "stop_id": "55285",
   "stop_name": "PLAINFIELD OPP NEUTACONKANUT REC CTR",
   "latitude": 41.810902,
   "longitude": -71.461998
 },
 {
   "stop_id": "55290",
   "stop_name": "POST OPP ALHAMBRA",
   "latitude": 41.728117,
   "longitude": -71.438114
 },
 {
   "stop_id": "55295",
   "stop_name": "ANN & HOPE WAY NS MENDON",
   "latitude": 41.912542,
   "longitude": -71.402047
 },
 {
   "stop_id": "55305",
   "stop_name": "ANN & HOPE WAY FS MENDON",
   "latitude": 41.912411,
   "longitude": -71.402078
 },
 {
   "stop_id": "55310",
   "stop_name": "ANN & HOPE WAY NS BROAD",
   "latitude": 41.913594,
   "longitude": -71.399637
 },
 {
   "stop_id": "55315",
   "stop_name": "BROAD OPP HIGH",
   "latitude": 41.898355,
   "longitude": -71.389098
 },
 {
   "stop_id": "55320",
   "stop_name": "COLLYER PARK (R-LINE)",
   "latitude": 41.875198,
   "longitude": -71.391864
 },
 {
   "stop_id": "55325",
   "stop_name": "PEARL STREET (R-LINE)",
   "latitude": 41.871678,
   "longitude": -71.395277
 },
 {
   "stop_id": "55340",
   "stop_name": "RT 2 AT AIM HIGH ACADEMY",
   "latitude": 41.605485,
   "longitude": -71.494735
 },
 {
   "stop_id": "55345",
   "stop_name": "RT 2 FS STONY LANE",
   "latitude": 41.593612,
   "longitude": -71.498572
 },
 {
   "stop_id": "55350",
   "stop_name": "RT 4 FS OAK HILL",
   "latitude": 41.560208,
   "longitude": -71.489664
 },
 {
   "stop_id": "55360",
   "stop_name": "RT 2 FS STONY LANE",
   "latitude": 41.594657,
   "longitude": -71.497542
 },
 {
   "stop_id": "55365",
   "stop_name": "RT 2 OPP AIM HIGH ACADEMY",
   "latitude": 41.605465,
   "longitude": -71.494507
 },
 {
   "stop_id": "55385",
   "stop_name": "CHARLES OPP 400 CHARLES",
   "latitude": 41.843714,
   "longitude": -71.418304
 },
 {
   "stop_id": "55390",
   "stop_name": "CHARLES OPP ESEK HOPKINS MIDDLE SCHOOL",
   "latitude": 41.84867,
   "longitude": -71.41959
 },
 {
   "stop_id": "55405",
   "stop_name": "CHARLES FS MOBIL GAS",
   "latitude": 41.836123,
   "longitude": -71.412326
 },
 {
   "stop_id": "55500",
   "stop_name": "COMSTOCK NS PLEASANT",
   "latitude": 41.788141,
   "longitude": -71.516289
 },
 {
   "stop_id": "55505",
   "stop_name": "COMSTOCK NS SCITUATE",
   "latitude": 41.78091,
   "longitude": -71.515483
 },
 {
   "stop_id": "55510",
   "stop_name": "SCITUATE AT SCITUATE VISTA DR",
   "latitude": 41.778754,
   "longitude": -71.488344
 },
 {
   "stop_id": "55515",
   "stop_name": "SCITUATE OPP SCITUATE VISTA APTS",
   "latitude": 41.778828,
   "longitude": -71.488221
 },
 {
   "stop_id": "55520",
   "stop_name": "COMSTOCK FS SCITUATE",
   "latitude": 41.781364,
   "longitude": -71.515307
 },
 {
   "stop_id": "55525",
   "stop_name": "COMSTOCK OPP PLAINFIELD",
   "latitude": 41.78798,
   "longitude": -71.516042
 },
 {
   "stop_id": "55530",
   "stop_name": "DOUGLAS PIKE AT 151 DOUGLAS PIKE",
   "latitude": 41.880355,
   "longitude": -71.475602
 },
 {
   "stop_id": "55535",
   "stop_name": "DOUGLAS PIKE OPP RAY",
   "latitude": 41.883826,
   "longitude": -71.480733
 },
 {
   "stop_id": "55540",
   "stop_name": "DOUGLAS PIKE AT 373 DOUGLAS PIKE",
   "latitude": 41.889398,
   "longitude": -71.489098
 },
 {
   "stop_id": "55545",
   "stop_name": "DOUGLAS PIKE NS MAUREEN",
   "latitude": 41.894534,
   "longitude": -71.495878
 },
 {
   "stop_id": "55550",
   "stop_name": "DOUGLAS PIKE FS LIMEROCK",
   "latitude": 41.902175,
   "longitude": -71.504516
 },
 {
   "stop_id": "55555",
   "stop_name": "DOUGLAS PIKE NS THURBER",
   "latitude": 41.912553,
   "longitude": -71.51594
 },
 {
   "stop_id": "55560",
   "stop_name": "DOUGLAS PIKE NS WASHINGTON HWY",
   "latitude": 41.916099,
   "longitude": -71.519133
 },
 {
   "stop_id": "55565",
   "stop_name": "DOUGLAS PIKE NS WASHINGTON HWY",
   "latitude": 41.918979,
   "longitude": -71.522507
 },
 {
   "stop_id": "55570",
   "stop_name": "DOUGLAS PIKE NS LIMEROCK",
   "latitude": 41.902231,
   "longitude": -71.504868
 },
 {
   "stop_id": "55575",
   "stop_name": "DOUGLAS PIKE AT 206 DOUGLAS PIKE",
   "latitude": 41.883202,
   "longitude": -71.48001
 },
 {
   "stop_id": "55580",
   "stop_name": "DOUGLAS PIKE NS TWIN RIVER",
   "latitude": 41.880199,
   "longitude": -71.475576
 },
 {
   "stop_id": "55585",
   "stop_name": "DOUGLAS PIKE AT 80 DOUGLAS PIKE",
   "latitude": 41.878437,
   "longitude": -71.472922
 },
 {
   "stop_id": "55640",
   "stop_name": "OAKLAWN AT 1195 OAKLAWN AVE (CVS PHARMACY)",
   "latitude": 41.736739,
   "longitude": -71.478209
 },
 {
   "stop_id": "55645",
   "stop_name": "COLLEGE NS COLE",
   "latitude": 41.841578,
   "longitude": -71.456403
 },
 {
   "stop_id": "55660",
   "stop_name": "COLLEGE OPP COLE",
   "latitude": 41.841379,
   "longitude": -71.456924
 },
 {
   "stop_id": "55685",
   "stop_name": "WOONASQUATUCKET NS ARDWICK",
   "latitude": 41.837151,
   "longitude": -71.469527
 },
 {
   "stop_id": "55690",
   "stop_name": "WOONASQUATUCKET OPP TAG",
   "latitude": 41.83834,
   "longitude": -71.471581
 },
 {
   "stop_id": "55695",
   "stop_name": "WOONASQUATUCKET AT 129 WOONASQUATUCKET",
   "latitude": 41.839262,
   "longitude": -71.473274
 },
 {
   "stop_id": "55710",
   "stop_name": "GREENVILLE FS LYMAN",
   "latitude": 41.838971,
   "longitude": -71.483207
 },
 {
   "stop_id": "55720",
   "stop_name": "WOONASQUATUCKET OPP HUMBERT",
   "latitude": 41.844624,
   "longitude": -71.477048
 },
 {
   "stop_id": "55735",
   "stop_name": "BROADWAY FS PALLAS",
   "latitude": 41.821039,
   "longitude": -71.424375
 },
 {
   "stop_id": "55745",
   "stop_name": "CENTREVILLE FS VETERANS MEMORIAL",
   "latitude": 41.698653,
   "longitude": -71.461687
 },
 {
   "stop_id": "55780",
   "stop_name": "BULLOCKS POINT OPP 100 BULLOCKS POINT",
   "latitude": 41.775562,
   "longitude": -71.36347
 },
 {
   "stop_id": "55785",
   "stop_name": "BULLOCKS POINT NS WASHINGTON",
   "latitude": 41.77284,
   "longitude": -71.363209
 },
 {
   "stop_id": "55800",
   "stop_name": "BULLOCKS POINT NS RIVER",
   "latitude": 41.764708,
   "longitude": -71.360851
 },
 {
   "stop_id": "55805",
   "stop_name": "BULLOCKS POINT AT 110 BULLOCKS POINT",
   "latitude": 41.775474,
   "longitude": -71.363246
 },
 {
   "stop_id": "55810",
   "stop_name": "BULLOCKS POINT FS WILLETT",
   "latitude": 41.777805,
   "longitude": -71.363138
 },
 {
   "stop_id": "55815",
   "stop_name": "TAUNTON AVE OPP SHOPPERS TOWN MALL",
   "latitude": 41.821727,
   "longitude": -71.35821
 },
 {
   "stop_id": "55825",
   "stop_name": "NEWPORT AT FIRE DEPARTMENT",
   "latitude": 41.867777,
   "longitude": -71.354338
 },
 {
   "stop_id": "55835",
   "stop_name": "PAWTUCKET OPP BOWEN",
   "latitude": 41.847342,
   "longitude": -71.354187
 },
 {
   "stop_id": "55840",
   "stop_name": "PAWTUCKET FS NEWMAN",
   "latitude": 41.841804,
   "longitude": -71.350034
 },
 {
   "stop_id": "55845",
   "stop_name": "PAWTUCKET AT ST MARGARET",
   "latitude": 41.843997,
   "longitude": -71.351166
 },
 {
   "stop_id": "55850",
   "stop_name": "PAWTUCKET NS WEEDEN",
   "latitude": 41.846205,
   "longitude": -71.352643
 },
 {
   "stop_id": "55855",
   "stop_name": "PAWTUCKET FS BOWEN",
   "latitude": 41.847534,
   "longitude": -71.354238
 },
 {
   "stop_id": "55860",
   "stop_name": "BEVERAGE HILL NS FRED",
   "latitude": 41.860694,
   "longitude": -71.364807
 },
 {
   "stop_id": "55865",
   "stop_name": "BEVERAGE HILL NS GLEN MEADOWS",
   "latitude": 41.86076,
   "longitude": -71.361443
 },
 {
   "stop_id": "55870",
   "stop_name": "BEVERAGE HILL NS GREEN LANE",
   "latitude": 41.860789,
   "longitude": -71.359149
 },
 {
   "stop_id": "55875",
   "stop_name": "BEVERAGE HILL NS JONES",
   "latitude": 41.86083,
   "longitude": -71.356567
 },
 {
   "stop_id": "55880",
   "stop_name": "BEVERAGE HILL NS NEWPORT",
   "latitude": 41.860835,
   "longitude": -71.355163
 },
 {
   "stop_id": "55885",
   "stop_name": "PAWTUCKET OPP WEEDEN",
   "latitude": 41.84634,
   "longitude": -71.352984
 },
 {
   "stop_id": "55895",
   "stop_name": "ELMGROVE NS WOODBURY",
   "latitude": 41.845001,
   "longitude": -71.391836
 },
 {
   "stop_id": "55900",
   "stop_name": "HOPE NS 616 HOPE",
   "latitude": 41.843407,
   "longitude": -71.397735
 },
 {
   "stop_id": "55910",
   "stop_name": "CAMP FS LANCASTER",
   "latitude": 41.846162,
   "longitude": -71.400872
 },
 {
   "stop_id": "55920",
   "stop_name": "CAMP NS GRANDVIEW",
   "latitude": 41.844522,
   "longitude": -71.402091
 },
 {
   "stop_id": "55930",
   "stop_name": "MAIN BETWEEN ASCENSION & ARNOLD",
   "latitude": 42.001143,
   "longitude": -71.515817
 },
 {
   "stop_id": "55935",
   "stop_name": "RIVER FS SAYLES",
   "latitude": 42.000997,
   "longitude": -71.517546
 },
 {
   "stop_id": "55940",
   "stop_name": "RIVER OPP 252 RIVER",
   "latitude": 42.002701,
   "longitude": -71.517927
 },
 {
   "stop_id": "55945",
   "stop_name": "RIVER OPP CANAL",
   "latitude": 42.003663,
   "longitude": -71.520338
 },
 {
   "stop_id": "55955",
   "stop_name": "SILVER SPRING AT WALMART",
   "latitude": 41.84563,
   "longitude": -71.417518
 },
 {
   "stop_id": "55965",
   "stop_name": "POWER NS PRENTICE",
   "latitude": 41.870834,
   "longitude": -71.418006
 },
 {
   "stop_id": "55975",
   "stop_name": "LONSDALE OPP PALM",
   "latitude": 41.879887,
   "longitude": -71.400046
 },
 {
   "stop_id": "55980",
   "stop_name": "LONSDALE FS PARK",
   "latitude": 41.882872,
   "longitude": -71.400213
 },
 {
   "stop_id": "55990",
   "stop_name": "EXCHANGE FS BROAD",
   "latitude": 41.879656,
   "longitude": -71.386129
 },
 {
   "stop_id": "55995",
   "stop_name": "DEXTER FS GOFF",
   "latitude": 41.879482,
   "longitude": -71.388256
 },
 {
   "stop_id": "56000",
   "stop_name": "DEXTER NS SCHOOL",
   "latitude": 41.889012,
   "longitude": -71.399207
 },
 {
   "stop_id": "56030",
   "stop_name": "LONSDALE NS FRONT",
   "latitude": 41.906501,
   "longitude": -71.40356
 },
 {
   "stop_id": "56035",
   "stop_name": "LONSDALE NS ORCHARD",
   "latitude": 41.88526,
   "longitude": -71.400778
 },
 {
   "stop_id": "56045",
   "stop_name": "LONSDALE NS BARBER",
   "latitude": 41.883147,
   "longitude": -71.40033
 },
 {
   "stop_id": "56050",
   "stop_name": "LONSDALE OPP PRICERITE",
   "latitude": 41.880909,
   "longitude": -71.400207
 },
 {
   "stop_id": "56065",
   "stop_name": "DEXTER NS DEXTER CT",
   "latitude": 41.88111,
   "longitude": -71.390332
 },
 {
   "stop_id": "56070",
   "stop_name": "MINERAL SPRING FS SMITHFIELD",
   "latitude": 41.871169,
   "longitude": -71.414163
 },
 {
   "stop_id": "56075",
   "stop_name": "MINERAL SPRING NS SLATER",
   "latitude": 41.874626,
   "longitude": -71.396942
 },
 {
   "stop_id": "56090",
   "stop_name": "LONSDALE OPP 1158 LONSDALE",
   "latitude": 41.895565,
   "longitude": -71.404722
 },
 {
   "stop_id": "56100",
   "stop_name": "LONSDALE NS VALLEY VIEW",
   "latitude": 41.897558,
   "longitude": -71.404341
 },
 {
   "stop_id": "56105",
   "stop_name": "LONSDALE MIDBLOCK EDGEHILL",
   "latitude": 41.89964,
   "longitude": -71.404915
 },
 {
   "stop_id": "56110",
   "stop_name": "LONSDALE AT 1501 LONSDALE",
   "latitude": 41.904067,
   "longitude": -71.404272
 },
 {
   "stop_id": "56120",
   "stop_name": "MENDON FS LONSDALE SCHOOL ST",
   "latitude": 41.908364,
   "longitude": -71.403002
 },
 {
   "stop_id": "56125",
   "stop_name": "MENDON NS FRANKLIN",
   "latitude": 41.917496,
   "longitude": -71.405973
 },
 {
   "stop_id": "56130",
   "stop_name": "MENDON FS MARSHALL",
   "latitude": 41.920471,
   "longitude": -71.408738
 },
 {
   "stop_id": "56135",
   "stop_name": "MENDON OPP 300 MENDON",
   "latitude": 41.92199,
   "longitude": -71.410403
 },
 {
   "stop_id": "56140",
   "stop_name": "MENDON AT 593 MENDON",
   "latitude": 41.923203,
   "longitude": -71.411703
 },
 {
   "stop_id": "56145",
   "stop_name": "MENDON NS ORA MURPHY",
   "latitude": 41.933402,
   "longitude": -71.426692
 },
 {
   "stop_id": "56150",
   "stop_name": "MENDON FS ASHTON PKWAY",
   "latitude": 41.935743,
   "longitude": -71.428919
 },
 {
   "stop_id": "56160",
   "stop_name": "MENDON NS ANGELL",
   "latitude": 41.937368,
   "longitude": -71.429393
 },
 {
   "stop_id": "56165",
   "stop_name": "RT 116 FS BLACKSTONE RIVER STATE PARK",
   "latitude": 41.937086,
   "longitude": -71.43624
 },
 {
   "stop_id": "56170",
   "stop_name": "RT 116 AT 640 G WASHINGTON HWAY",
   "latitude": 41.934651,
   "longitude": -71.459804
 },
 {
   "stop_id": "56175",
   "stop_name": "RT 116 OPP LINCOLN MALL ENTRANCE",
   "latitude": 41.935065,
   "longitude": -71.477274
 },
 {
   "stop_id": "56176",
   "stop_name": "RT 116 NS WAKE ROBIN",
   "latitude": 41.935131,
   "longitude": -71.473729
 },
 {
   "stop_id": "56185",
   "stop_name": "ALBION OPP VERIZON",
   "latitude": 41.931028,
   "longitude": -71.48271
 },
 {
   "stop_id": "56195",
   "stop_name": "RT 116 NS 695 G WASHINGTON HWAY",
   "latitude": 41.934859,
   "longitude": -71.444902
 },
 {
   "stop_id": "56200",
   "stop_name": "RT 116 FS BANK OF AMERICA",
   "latitude": 41.935639,
   "longitude": -71.44045
 },
 {
   "stop_id": "56205",
   "stop_name": "RT 116 OPP BLACKSTONE RIVER PARK",
   "latitude": 41.936992,
   "longitude": -71.436053
 },
 {
   "stop_id": "56215",
   "stop_name": "MENDON FS SCOTT",
   "latitude": 41.939034,
   "longitude": -71.431456
 },
 {
   "stop_id": "56225",
   "stop_name": "MENDON OPP ORA MURPHY",
   "latitude": 41.933622,
   "longitude": -71.427038
 },
 {
   "stop_id": "56235",
   "stop_name": "MENDON NS HUNT",
   "latitude": 41.926677,
   "longitude": -71.417666
 },
 {
   "stop_id": "56240",
   "stop_name": "MENDON AT BERKELEY COMMONS",
   "latitude": 41.92289,
   "longitude": -71.411534
 },
 {
   "stop_id": "56245",
   "stop_name": "MENDON FS MARSHALL",
   "latitude": 41.918385,
   "longitude": -71.406891
 },
 {
   "stop_id": "56250",
   "stop_name": "MENDON FS FRANKLIN",
   "latitude": 41.917285,
   "longitude": -71.40595
 },
 {
   "stop_id": "56255",
   "stop_name": "MENDON FS BROAD",
   "latitude": 41.913851,
   "longitude": -71.403952
 },
 {
   "stop_id": "56260",
   "stop_name": "LONSDALE NS COOK",
   "latitude": 41.909929,
   "longitude": -71.402687
 },
 {
   "stop_id": "56265",
   "stop_name": "LONDALE NS LONSDALE SCHOOL ST",
   "latitude": 41.90828,
   "longitude": -71.403197
 },
 {
   "stop_id": "56270",
   "stop_name": "LONSDALE NS TUCKER",
   "latitude": 41.892702,
   "longitude": -71.40316
 },
 {
   "stop_id": "56275",
   "stop_name": "MAIN NS WALCOTT",
   "latitude": 41.875954,
   "longitude": -71.380754
 },
 {
   "stop_id": "56310",
   "stop_name": "CENTRAL FS MENDON",
   "latitude": 41.885529,
   "longitude": -71.364033
 },
 {
   "stop_id": "56311",
   "stop_name": "CENTRAL FS FREEMAN",
   "latitude": 41.885281,
   "longitude": -71.366046
 },
 {
   "stop_id": "56335",
   "stop_name": "CENTRAL FS CHASE",
   "latitude": 41.888859,
   "longitude": -71.350611
 },
 {
   "stop_id": "56435",
   "stop_name": "POND NS YOUNG",
   "latitude": 41.871852,
   "longitude": -71.374677
 },
 {
   "stop_id": "56475",
   "stop_name": "POND NS BREWSTER",
   "latitude": 41.871823,
   "longitude": -71.375136
 },
 {
   "stop_id": "56480",
   "stop_name": "SUMMIT FS POND",
   "latitude": 41.871546,
   "longitude": -71.377013
 },
 {
   "stop_id": "56485",
   "stop_name": "SUMMIT FS MEADOW",
   "latitude": 41.873056,
   "longitude": -71.377781
 },
 {
   "stop_id": "56495",
   "stop_name": "WALCOTT NS MAYNARD",
   "latitude": 41.877129,
   "longitude": -71.37625
 },
 {
   "stop_id": "56500",
   "stop_name": "WALCOTT FS FRENCH",
   "latitude": 41.877299,
   "longitude": -71.375125
 },
 {
   "stop_id": "56505",
   "stop_name": "WALCOTT NS DENVER",
   "latitude": 41.87749,
   "longitude": -71.37428
 },
 {
   "stop_id": "56515",
   "stop_name": "ARMISTICE FS GEORGE BENNETT",
   "latitude": 41.88027,
   "longitude": -71.364101
 },
 {
   "stop_id": "56525",
   "stop_name": "ARMISTICE NS LITTLEFIELD",
   "latitude": 41.878543,
   "longitude": -71.355252
 },
 {
   "stop_id": "56530",
   "stop_name": "ARMISTICE NS PARKSIDE AVE",
   "latitude": 41.875741,
   "longitude": -71.342971
 },
 {
   "stop_id": "56560",
   "stop_name": "WALCOTT NS UNDERWOOD",
   "latitude": 41.876971,
   "longitude": -71.377645
 },
 {
   "stop_id": "56565",
   "stop_name": "DOUGLAS PIKE OPP MAUREEN",
   "latitude": 41.894696,
   "longitude": -71.496296
 },
 {
   "stop_id": "56590",
   "stop_name": "HUXLEY OPP VENTURA",
   "latitude": 41.844565,
   "longitude": -71.433021
 },
 {
   "stop_id": "56605",
   "stop_name": "SMITHFIELD OPP COLONIAL",
   "latitude": 41.858106,
   "longitude": -71.459545
 },
 {
   "stop_id": "56615",
   "stop_name": "SMITHFIELD NS COLONIAL",
   "latitude": 41.857988,
   "longitude": -71.460079
 },
 {
   "stop_id": "56655",
   "stop_name": "MINERAL SPRING NS MARTIN",
   "latitude": 41.864503,
   "longitude": -71.448176
 },
 {
   "stop_id": "56660",
   "stop_name": "MINERAL SPRING AT N PROV HIGH SCHOOL",
   "latitude": 41.861765,
   "longitude": -71.460143
 },
 {
   "stop_id": "56665",
   "stop_name": "MINERAL SPRING AT 1720 MINERAL SPRING",
   "latitude": 41.862684,
   "longitude": -71.455398
 },
 {
   "stop_id": "56670",
   "stop_name": "MINERAL SPRING AT 1624 MINERAL SPRING",
   "latitude": 41.863896,
   "longitude": -71.450261
 },
 {
   "stop_id": "56675",
   "stop_name": "MINERAL SPRING FS CHANANGO",
   "latitude": 41.864306,
   "longitude": -71.448501
 },
 {
   "stop_id": "56680",
   "stop_name": "MINERAL SPRING NS FRIENDSHIP",
   "latitude": 41.865142,
   "longitude": -71.445263
 },
 {
   "stop_id": "56685",
   "stop_name": "MINERAL SPRING FS IRVING",
   "latitude": 41.867326,
   "longitude": -71.438127
 },
 {
   "stop_id": "56690",
   "stop_name": "CHARLES AT 1105 CHARLES",
   "latitude": 41.86961,
   "longitude": -71.425611
 },
 {
   "stop_id": "56695",
   "stop_name": "MAIN OPP 32 MAIN",
   "latitude": 42.000982,
   "longitude": -71.515791
 },
 {
   "stop_id": "56700",
   "stop_name": "PROVIDENCE BETWEEN AVENUE B & PIEDMONT",
   "latitude": 41.988948,
   "longitude": -71.52181
 },
 {
   "stop_id": "56705",
   "stop_name": "SECOND OPP 103 SECOND",
   "latitude": 41.498628,
   "longitude": -71.320415
 },
 {
   "stop_id": "56710",
   "stop_name": "SECOND NS PINE",
   "latitude": 41.496743,
   "longitude": -71.320205
 },
 {
   "stop_id": "56720",
   "stop_name": "SECOND NS POPLAR",
   "latitude": 41.493479,
   "longitude": -71.319751
 },
 {
   "stop_id": "56725",
   "stop_name": "SECOND NS MARSH",
   "latitude": 41.491483,
   "longitude": -71.31948
 },
 {
   "stop_id": "56750",
   "stop_name": "BELLEVUE FS ROUGH POINT",
   "latitude": 41.456229,
   "longitude": -71.306319
 },
 {
   "stop_id": "56760",
   "stop_name": "BELLEVUE OPP ROUGH POINT",
   "latitude": 41.456126,
   "longitude": -71.306377
 },
 {
   "stop_id": "56765",
   "stop_name": "GIRARD AT 120 GIRARD",
   "latitude": 41.514639,
   "longitude": -71.313804
 },
 {
   "stop_id": "56775",
   "stop_name": "W MAIN OPP MAPLEWOOD",
   "latitude": 41.51945,
   "longitude": -71.299852
 },
 {
   "stop_id": "56785",
   "stop_name": "GIRARD NS LEAL TERRACE",
   "latitude": 41.514804,
   "longitude": -71.313785
 },
 {
   "stop_id": "56795",
   "stop_name": "HILLSIDE OPP EISENHOWER",
   "latitude": 41.509727,
   "longitude": -71.307871
 },
 {
   "stop_id": "56805",
   "stop_name": "W MAIN BETWEEN ROCKWOOD & E MAIN",
   "latitude": 41.517555,
   "longitude": -71.30038
 },
 {
   "stop_id": "56830",
   "stop_name": "BOYDS LANE NS OLD BOYDS",
   "latitude": 41.630229,
   "longitude": -71.246093
 },
 {
   "stop_id": "56835",
   "stop_name": "E MAIN AT 94 E MAIN",
   "latitude": 41.5178,
   "longitude": -71.297398
 },
 {
   "stop_id": "56840",
   "stop_name": "BRISTOL FERRY AT 502 BRISTOL FERRY",
   "latitude": 41.628566,
   "longitude": -71.25503
 },
 {
   "stop_id": "56845",
   "stop_name": "W MAIN FS BAYVIEW APTS ENTRANCE",
   "latitude": 41.565399,
   "longitude": -71.283983
 },
 {
   "stop_id": "56880",
   "stop_name": "RT 3 NS RT 216",
   "latitude": 41.423398,
   "longitude": -71.786295
 },
 {
   "stop_id": "56885",
   "stop_name": "RT 3 OPP MAXSON HILL RD",
   "latitude": 41.427378,
   "longitude": -71.783669
 },
 {
   "stop_id": "56890",
   "stop_name": "RT 3 FS MILROSE",
   "latitude": 41.394876,
   "longitude": -71.802549
 },
 {
   "stop_id": "56910",
   "stop_name": "RT 2 AT 1675 TEN ROD RD",
   "latitude": 41.576487,
   "longitude": -71.514626
 },
 {
   "stop_id": "56915",
   "stop_name": "RT 2 FS RAYMOND POTTER LANE",
   "latitude": 41.517724,
   "longitude": -71.555077
 },
 {
   "stop_id": "56920",
   "stop_name": "RT 2 OPP WOLF ROCK",
   "latitude": 41.511531,
   "longitude": -71.556922
 },
 {
   "stop_id": "56930",
   "stop_name": "KINGSTOWN FS CURTIS CORNER",
   "latitude": 41.462061,
   "longitude": -71.50934
 },
 {
   "stop_id": "56945",
   "stop_name": "KINGSTOWN AT 1436 KINGSTOWN",
   "latitude": 41.45427,
   "longitude": -71.505427
 },
 {
   "stop_id": "56950",
   "stop_name": "HIGH FS ALLEN",
   "latitude": 41.444983,
   "longitude": -71.502939
 },
 {
   "stop_id": "56965",
   "stop_name": "MAIN OPP 313 MAIN",
   "latitude": 41.43888,
   "longitude": -71.498711
 },
 {
   "stop_id": "56970",
   "stop_name": "MAIN NS WOODRUFF",
   "latitude": 41.440712,
   "longitude": -71.495915
 },
 {
   "stop_id": "56975",
   "stop_name": "OLD TOWER HILL OPP JOB LOT",
   "latitude": 41.441673,
   "longitude": -71.486962
 },
 {
   "stop_id": "56980",
   "stop_name": "POINT JUDITH NS SALT POND PLAZA",
   "latitude": 41.429183,
   "longitude": -71.480964
 },
 {
   "stop_id": "56990",
   "stop_name": "POINT JUDITH FS SUNNYBROOK FARM",
   "latitude": 41.421664,
   "longitude": -71.481529
 },
 {
   "stop_id": "56995",
   "stop_name": "POINT JUDITH OPP OLD POINT JUDITH",
   "latitude": 41.417617,
   "longitude": -71.479815
 },
 {
   "stop_id": "57000",
   "stop_name": "POINT JUDITH FS FODDERING FARM",
   "latitude": 41.412123,
   "longitude": -71.478398
 },
 {
   "stop_id": "57005",
   "stop_name": "POINT JUDITH FS PALM BEACH",
   "latitude": 41.402838,
   "longitude": -71.479576
 },
 {
   "stop_id": "57010",
   "stop_name": "POINT JUDITH FS MARTIN",
   "latitude": 41.39929,
   "longitude": -71.479989
 },
 {
   "stop_id": "57025",
   "stop_name": "BURNSIDE NS OCEAN RD",
   "latitude": 41.392075,
   "longitude": -71.471463
 },
 {
   "stop_id": "57030",
   "stop_name": "OCEAN FS GREENBRIER",
   "latitude": 41.386992,
   "longitude": -71.477278
 },
 {
   "stop_id": "57035",
   "stop_name": "KNOWLESWAY FS OCEAN",
   "latitude": 41.386461,
   "longitude": -71.477978
 },
 {
   "stop_id": "57040",
   "stop_name": "KNOWLESWAY FS LONGVIEW",
   "latitude": 41.386962,
   "longitude": -71.480056
 },
 {
   "stop_id": "57045",
   "stop_name": "KNOWLESWAY NS ERIE",
   "latitude": 41.387318,
   "longitude": -71.481944
 },
 {
   "stop_id": "57050",
   "stop_name": "KNOWLESWAY FS COFFEY",
   "latitude": 41.387825,
   "longitude": -71.485034
 },
 {
   "stop_id": "57055",
   "stop_name": "POINT JUDITH FS KNOWLESWAY",
   "latitude": 41.387328,
   "longitude": -71.4858
 },
 {
   "stop_id": "57060",
   "stop_name": "POINT JUDITH NS SUNSET",
   "latitude": 41.38534,
   "longitude": -71.486581
 },
 {
   "stop_id": "57065",
   "stop_name": "POINT JUDITH FS SEALEA",
   "latitude": 41.38088,
   "longitude": -71.488065
 },
 {
   "stop_id": "57075",
   "stop_name": "SAND HILL COVE FS HEMLOCK",
   "latitude": 41.375016,
   "longitude": -71.491027
 },
 {
   "stop_id": "57080",
   "stop_name": "SAND HILL COVE NS CHESTNUT",
   "latitude": 41.374395,
   "longitude": -71.49244
 },
 {
   "stop_id": "57085",
   "stop_name": "SAND HILL COVE NS SALTAIRE",
   "latitude": 41.372935,
   "longitude": -71.49507
 },
 {
   "stop_id": "57105",
   "stop_name": "MAIN NS RIVER",
   "latitude": 41.44073,
   "longitude": -71.497062
 },
 {
   "stop_id": "57115",
   "stop_name": "HIGH OPP 50 HIGH",
   "latitude": 41.438122,
   "longitude": -71.502026
 },
 {
   "stop_id": "57120",
   "stop_name": "HIGH OPP 180 HIGH",
   "latitude": 41.44168,
   "longitude": -71.502244
 },
 {
   "stop_id": "57125",
   "stop_name": "KINGSTOWN FS HIGH",
   "latitude": 41.451399,
   "longitude": -71.500687
 },
 {
   "stop_id": "57135",
   "stop_name": "RT 2 AT 710 S COUNTY TRL (WOLF ROCK VETERINARY)",
   "latitude": 41.5175,
   "longitude": -71.554945
 },
 {
   "stop_id": "57136",
   "stop_name": "RT 2 NS YAWGOO VALLEY",
   "latitude": 41.521521,
   "longitude": -71.553816
 },
 {
   "stop_id": "57140",
   "stop_name": "RT 2 OPP SHARTNER FARMS",
   "latitude": 41.565093,
   "longitude": -71.517419
 },
 {
   "stop_id": "57145",
   "stop_name": "G BENNET FS CENTRAL",
   "latitude": 41.884979,
   "longitude": -71.366979
 },
 {
   "stop_id": "57165",
   "stop_name": "POND FS ARCH",
   "latitude": 41.872174,
   "longitude": -71.373633
 },
 {
   "stop_id": "57170",
   "stop_name": "SUMMIT NS JOHNSON",
   "latitude": 41.874168,
   "longitude": -71.378397
 },
 {
   "stop_id": "57180",
   "stop_name": "SUMMIT NS WALCOTT",
   "latitude": 41.876297,
   "longitude": -71.379077
 },
 {
   "stop_id": "57185",
   "stop_name": "G BENNET NS CENTRAL",
   "latitude": 41.885084,
   "longitude": -71.366903
 },
 {
   "stop_id": "57190",
   "stop_name": "SUMMIT FS WALCOTT",
   "latitude": 41.875863,
   "longitude": -71.379095
 },
 {
   "stop_id": "57195",
   "stop_name": "GREAT ISLAND RD AT COAST GUARD",
   "latitude": 41.37764,
   "longitude": -71.511961
 },
 {
   "stop_id": "57200",
   "stop_name": "SAND HILL COVE NS STANTON",
   "latitude": 41.372687,
   "longitude": -71.495313
 },
 {
   "stop_id": "57205",
   "stop_name": "SAND HILL COVE NS CHESTNUT",
   "latitude": 41.373951,
   "longitude": -71.493059
 },
 {
   "stop_id": "57210",
   "stop_name": "SAND HILL COVE OPP 21 SAND HILL COVE",
   "latitude": 41.375094,
   "longitude": -71.490104
 },
 {
   "stop_id": "57215",
   "stop_name": "POINT JUDITH OPP SALTAIRE",
   "latitude": 41.375682,
   "longitude": -71.488519
 },
 {
   "stop_id": "57220",
   "stop_name": "POINT JUDITH FS SCHOONER COVE",
   "latitude": 41.378492,
   "longitude": -71.488229
 },
 {
   "stop_id": "57225",
   "stop_name": "POINT JUDITH AT USAR CENTER",
   "latitude": 41.381458,
   "longitude": -71.487498
 },
 {
   "stop_id": "57230",
   "stop_name": "POINT JUDITH OPP SUNSET",
   "latitude": 41.38523,
   "longitude": -71.48627
 },
 {
   "stop_id": "57235",
   "stop_name": "POINT JUDITH NS KNOWLESWAY",
   "latitude": 41.387555,
   "longitude": -71.485485
 },
 {
   "stop_id": "57240",
   "stop_name": "KNOWLESWAY OPP COFFEY",
   "latitude": 41.387579,
   "longitude": -71.48454
 },
 {
   "stop_id": "57250",
   "stop_name": "KNOWLESWAY NS OCEAN",
   "latitude": 41.386333,
   "longitude": -71.477948
 },
 {
   "stop_id": "57255",
   "stop_name": "OCEAN OPP GREENBRIER",
   "latitude": 41.387521,
   "longitude": -71.47659
 },
 {
   "stop_id": "57260",
   "stop_name": "OCEAN MIDBLOCK BURNSIDE",
   "latitude": 41.391049,
   "longitude": -71.471978
 },
 {
   "stop_id": "57270",
   "stop_name": "BURNSIDE OPP DESANO",
   "latitude": 41.393182,
   "longitude": -71.4742
 },
 {
   "stop_id": "57280",
   "stop_name": "BURNSIDE NS POINT JUDITH",
   "latitude": 41.394456,
   "longitude": -71.481578
 },
 {
   "stop_id": "57285",
   "stop_name": "POINT JUDITH OPP GULF GAS",
   "latitude": 41.396264,
   "longitude": -71.481227
 },
 {
   "stop_id": "57290",
   "stop_name": "POINT JUDITH FS LINDSLEY",
   "latitude": 41.399781,
   "longitude": -71.479569
 },
 {
   "stop_id": "57295",
   "stop_name": "POINT JUDITH FS MANNING",
   "latitude": 41.404,
   "longitude": -71.479052
 },
 {
   "stop_id": "57300",
   "stop_name": "POINT JUDITH FS WINDERMERE",
   "latitude": 41.413023,
   "longitude": -71.478158
 },
 {
   "stop_id": "57305",
   "stop_name": "POINT JUDITH NS OLD POINT JUDITH",
   "latitude": 41.417035,
   "longitude": -71.479115
 },
 {
   "stop_id": "57315",
   "stop_name": "POINT JUDITH FS WESTMORELAND",
   "latitude": 41.425895,
   "longitude": -71.480895
 },
 {
   "stop_id": "57320",
   "stop_name": "POINT JUDITH AT 90 POINT JUDITH",
   "latitude": 41.429192,
   "longitude": -71.480742
 },
 {
   "stop_id": "57405",
   "stop_name": "NORTH AT 83 NORTH RD",
   "latitude": 41.50085,
   "longitude": -71.374766
 },
 {
   "stop_id": "57510",
   "stop_name": "NARRAGANSETT NS GREEN",
   "latitude": 41.496246,
   "longitude": -71.36939
 },
 {
   "stop_id": "57520",
   "stop_name": "NARRAGANSETT AT 92 NARRAGANSETT",
   "latitude": 41.496233,
   "longitude": -71.374074
 },
 {
   "stop_id": "57525",
   "stop_name": "NORTH OPP 79 NORTH",
   "latitude": 41.50072,
   "longitude": -71.374606
 },
 {
   "stop_id": "57526",
   "stop_name": "NORTH RD FS TASHTASSUC",
   "latitude": 41.5258,
   "longitude": -71.37488
 },
 {
   "stop_id": "57530",
   "stop_name": "RT 138 NS RT 1",
   "latitude": 41.494629,
   "longitude": -71.456956
 },
 {
   "stop_id": "57535",
   "stop_name": "BRIDGETOWN FS RT 1",
   "latitude": 41.494559,
   "longitude": -71.456021
 },
 {
   "stop_id": "57540",
   "stop_name": "BRIDGETOWN FS RIVERSIDE",
   "latitude": 41.48869,
   "longitude": -71.44662
 },
 {
   "stop_id": "57555",
   "stop_name": "BRIDGETOWN AT 130 BRIDGETOWN",
   "latitude": 41.49033,
   "longitude": -71.445921
 },
 {
   "stop_id": "57560",
   "stop_name": "BRIDGETOWN NS WALMSLEY",
   "latitude": 41.488291,
   "longitude": -71.449408
 },
 {
   "stop_id": "57565",
   "stop_name": "RT 138 AT 61 MOORESVILLE RD",
   "latitude": 41.494603,
   "longitude": -71.458699
 },
 {
   "stop_id": "57575",
   "stop_name": "JAMESTOWN HOUSING",
   "latitude": 41.499648,
   "longitude": -71.376341
 },
 {
   "stop_id": "57660",
   "stop_name": "CENTRAL FS NEWPORT",
   "latitude": 41.888024,
   "longitude": -71.353617
 },
 {
   "stop_id": "57665",
   "stop_name": "BRADLEY NS BENEFIT",
   "latitude": 41.891425,
   "longitude": -71.344334
 },
 {
   "stop_id": "57670",
   "stop_name": "WALCOTT NS NORTH BEND",
   "latitude": 41.87767,
   "longitude": -71.372897
 },
 {
   "stop_id": "57675",
   "stop_name": "NORTH BEND FS WALCOTT",
   "latitude": 41.878109,
   "longitude": -71.372851
 },
 {
   "stop_id": "57680",
   "stop_name": "CENTRAL NS NEWPORT",
   "latitude": 41.888115,
   "longitude": -71.353627
 },
 {
   "stop_id": "57685",
   "stop_name": "NORTH BEND NS WALCOTT",
   "latitude": 41.878161,
   "longitude": -71.37297
 },
 {
   "stop_id": "57690",
   "stop_name": "WALCOTT FS WALNUT",
   "latitude": 41.877327,
   "longitude": -71.375563
 },
 {
   "stop_id": "57705",
   "stop_name": "COLUMBUS OPP YORK",
   "latitude": 41.870446,
   "longitude": -71.365174
 },
 {
   "stop_id": "57710",
   "stop_name": "G BENNET OPP DIVISION",
   "latitude": 41.874799,
   "longitude": -71.364443
 },
 {
   "stop_id": "57715",
   "stop_name": "G BENNET NS ARMISTICE",
   "latitude": 41.879991,
   "longitude": -71.364618
 },
 {
   "stop_id": "57730",
   "stop_name": "MAIN NS ST MARY",
   "latitude": 41.704356,
   "longitude": -71.524209
 },
 {
   "stop_id": "57740",
   "stop_name": "MAIN FS WASHINGTON",
   "latitude": 41.703443,
   "longitude": -71.524081
 },
 {
   "stop_id": "57760",
   "stop_name": "ADM KALBFUS AT ROLLING GREEN APTS",
   "latitude": 41.506826,
   "longitude": -71.319378
 },
 {
   "stop_id": "57840",
   "stop_name": "CODDINGTON OPP LANDINGS",
   "latitude": 41.518513,
   "longitude": -71.30297
 },
 {
   "stop_id": "57865",
   "stop_name": "CODDINGTON NS THE LANDINGS",
   "latitude": 41.518492,
   "longitude": -71.30153
 },
 {
   "stop_id": "57870",
   "stop_name": "CODDINGTON OPP CCRI ENTRANCE",
   "latitude": 41.51835,
   "longitude": -71.313613
 },
 {
   "stop_id": "57905",
   "stop_name": "TOURO OPP DIVISION",
   "latitude": 41.489445,
   "longitude": -71.312216
 },
 {
   "stop_id": "57915",
   "stop_name": "THAMES FS WASHINGTON SQ",
   "latitude": 41.489473,
   "longitude": -71.315268
 },
 {
   "stop_id": "57920",
   "stop_name": "THAMES OPP MARY",
   "latitude": 41.48838,
   "longitude": -71.315153
 },
 {
   "stop_id": "58040",
   "stop_name": "UNDERWOOD FS WALCOTT",
   "latitude": 41.877392,
   "longitude": -71.378397
 },
 {
   "stop_id": "58045",
   "stop_name": "UNDERWOOD NS GROVE",
   "latitude": 41.878526,
   "longitude": -71.378151
 },
 {
   "stop_id": "58050",
   "stop_name": "ROCHAMBEAU OPP 405 ROCHAMBEAU",
   "latitude": 41.84606,
   "longitude": -71.389531
 },
 {
   "stop_id": "58060",
   "stop_name": "ELMGROVE OPP 311 ELMGROVE",
   "latitude": 41.845182,
   "longitude": -71.391926
 },
 {
   "stop_id": "58070",
   "stop_name": "ELMGROVE OPP JEWISH CENTET",
   "latitude": 41.842002,
   "longitude": -71.392696
 },
 {
   "stop_id": "58105",
   "stop_name": "ELMGROVE OPP 341 ELMGROVE",
   "latitude": 41.840439,
   "longitude": -71.392572
 },
 {
   "stop_id": "58110",
   "stop_name": "ELMGROVE AT POLE 58",
   "latitude": 41.837813,
   "longitude": -71.392045
 },
 {
   "stop_id": "58120",
   "stop_name": "ELMGROVE AT 152 ELMGROVE",
   "latitude": 41.834888,
   "longitude": -71.391099
 },
 {
   "stop_id": "58135",
   "stop_name": "BELLEVUE AT MARBLE HOUSE",
   "latitude": 41.462432,
   "longitude": -71.306561
 },
 {
   "stop_id": "58140",
   "stop_name": "GATE RD FS SAMS CIRCLE",
   "latitude": 41.605668,
   "longitude": -71.447293
 },
 {
   "stop_id": "58145",
   "stop_name": "CCRI (NEWPORT CAMPUS)",
   "latitude": 41.51735,
   "longitude": -71.31302
 },
 {
   "stop_id": "58150",
   "stop_name": "EDDY FS SOUTH",
   "latitude": 41.817337,
   "longitude": -71.406907
 },
 {
   "stop_id": "58165",
   "stop_name": "POST AT 446 POST RD",
   "latitude": 41.759989,
   "longitude": -71.405174
 },
 {
   "stop_id": "58175",
   "stop_name": "EDDY FS EUDORA",
   "latitude": 41.80784,
   "longitude": -71.407176
 },
 {
   "stop_id": "58180",
   "stop_name": "WARWICK OPP HARDING",
   "latitude": 41.759719,
   "longitude": -71.404782
 },
 {
   "stop_id": "58185",
   "stop_name": "WARWICK AT 2323 WARWICK",
   "latitude": 41.713487,
   "longitude": -71.399323
 },
 {
   "stop_id": "58205",
   "stop_name": "SAMUEL GORTON OPP STEPHANIE",
   "latitude": 41.699613,
   "longitude": -71.380565
 },
 {
   "stop_id": "58220",
   "stop_name": "DRAPER NS WEST SHORE",
   "latitude": 41.709558,
   "longitude": -71.374193
 },
 {
   "stop_id": "58230",
   "stop_name": "WARWICK OPP 2485 WARWICK",
   "latitude": 41.709644,
   "longitude": -71.397882
 },
 {
   "stop_id": "58235",
   "stop_name": "WARWICK NS DAWSON",
   "latitude": 41.746041,
   "longitude": -71.405843
 },
 {
   "stop_id": "58240",
   "stop_name": "WARWICK FS URBAN",
   "latitude": 41.751061,
   "longitude": -71.403953
 },
 {
   "stop_id": "58245",
   "stop_name": "WARWICK AT 706 WARWICK",
   "latitude": 41.75742,
   "longitude": -71.404418
 },
 {
   "stop_id": "58250",
   "stop_name": "W FRANKLIN AT CROSSROADS",
   "latitude": 41.816815,
   "longitude": -71.416497
 },
 {
   "stop_id": "58260",
   "stop_name": "PRAIRIE NS GALLUP",
   "latitude": 41.800081,
   "longitude": -71.412539
 },
 {
   "stop_id": "58290",
   "stop_name": "JEFFERSON BLVD NS ECHO",
   "latitude": 41.715019,
   "longitude": -71.447807
 },
 {
   "stop_id": "58295",
   "stop_name": "STRAWBERRY FIELD FS EVERGLADE",
   "latitude": 41.71199,
   "longitude": -71.427855
 },
 {
   "stop_id": "58300",
   "stop_name": "BUTTONWOODS FS WEST SHORE",
   "latitude": 41.701628,
   "longitude": -71.43048
 },
 {
   "stop_id": "58315",
   "stop_name": "PUTNAM PIKE OPP 668 PUTNAM PIKE",
   "latitude": 41.875902,
   "longitude": -71.566021
 },
 {
   "stop_id": "58320",
   "stop_name": "PUTNAM PIKE AT 711 PUTNAM PIKE",
   "latitude": 41.87664,
   "longitude": -71.568604
 },
 {
   "stop_id": "58325",
   "stop_name": "PUTNAM PIKE OPP DUNKIN DONUTS",
   "latitude": 41.906576,
   "longitude": -71.660221
 },
 {
   "stop_id": "58330",
   "stop_name": "PUTNAM PIKE OPP RADIO TOWER",
   "latitude": 41.910059,
   "longitude": -71.668163
 },
 {
   "stop_id": "58335",
   "stop_name": "VICTORY HWY AT 545 VICTORY HWY",
   "latitude": 41.944144,
   "longitude": -71.655121
 },
 {
   "stop_id": "58340",
   "stop_name": "VICTORY HWY AT 849 VICTORY HWY",
   "latitude": 41.949892,
   "longitude": -71.648367
 },
 {
   "stop_id": "58345",
   "stop_name": "VICTORY HWY OPP 908 VICTORY HWY",
   "latitude": 41.951463,
   "longitude": -71.649122
 },
 {
   "stop_id": "58350",
   "stop_name": "CENTRAL AT 520 CENTRAL",
   "latitude": 41.957761,
   "longitude": -71.656284
 },
 {
   "stop_id": "58360",
   "stop_name": "MAIN NS CHAPEL",
   "latitude": 41.96592,
   "longitude": -71.676945
 },
 {
   "stop_id": "58365",
   "stop_name": "CHAPEL AT SUNOCO",
   "latitude": 41.968535,
   "longitude": -71.687459
 },
 {
   "stop_id": "58370",
   "stop_name": "MAIN OPP ALBEE",
   "latitude": 41.958762,
   "longitude": -71.701371
 },
 {
   "stop_id": "58385",
   "stop_name": "PUTNAM PIKE NS TERRY LANE",
   "latitude": 41.904888,
   "longitude": -71.647124
 },
 {
   "stop_id": "58390",
   "stop_name": "PUTNAM PIKE NS LAKE HARMONY DR",
   "latitude": 41.885595,
   "longitude": -71.587248
 },
 {
   "stop_id": "58395",
   "stop_name": "PUTNAM PIKE NS VERNON",
   "latitude": 41.876675,
   "longitude": -71.568805
 },
 {
   "stop_id": "58415",
   "stop_name": "BROAD NS LOCKWOOD",
   "latitude": 41.815221,
   "longitude": -71.420668
 },
 {
   "stop_id": "58420",
   "stop_name": "HILLSIDE FS GARDEN CITY DR",
   "latitude": 41.764947,
   "longitude": -71.458461
 },
 {
   "stop_id": "58425",
   "stop_name": "MIDWAY AT 150 MIDWAY",
   "latitude": 41.759674,
   "longitude": -71.456792
 },
 {
   "stop_id": "58440",
   "stop_name": "PROVIDENCE FS ENFIELD",
   "latitude": 41.730763,
   "longitude": -71.486959
 },
 {
   "stop_id": "58460",
   "stop_name": "WASHINGTON OPP PULASKI",
   "latitude": 41.695476,
   "longitude": -71.537398
 },
 {
   "stop_id": "58465",
   "stop_name": "TIOGUE FS S MAIN",
   "latitude": 41.67998,
   "longitude": -71.575939
 },
 {
   "stop_id": "58495",
   "stop_name": "POST AT 3445 POST",
   "latitude": 41.695466,
   "longitude": -71.458247
 },
 {
   "stop_id": "58505",
   "stop_name": "POST AT 4365 POST",
   "latitude": 41.672066,
   "longitude": -71.448136
 },
 {
   "stop_id": "58525",
   "stop_name": "POST OPP 130 POST",
   "latitude": 41.570773,
   "longitude": -71.461408
 },
 {
   "stop_id": "58530",
   "stop_name": "POST AT 209 POST",
   "latitude": 41.5689,
   "longitude": -71.461813
 },
 {
   "stop_id": "58535",
   "stop_name": "POST AT ST BERNARD CHURCH ENTRANCE",
   "latitude": 41.567268,
   "longitude": -71.463028
 },
 {
   "stop_id": "58540",
   "stop_name": "PHILLIPS OPP BOONE",
   "latitude": 41.56766,
   "longitude": -71.456948
 },
 {
   "stop_id": "58550",
   "stop_name": "BOSTON NECK OPP WALDRON",
   "latitude": 41.552471,
   "longitude": -71.440993
 },
 {
   "stop_id": "58555",
   "stop_name": "BOSTON NECK AT 1174 BOSTON NECK",
   "latitude": 41.490068,
   "longitude": -71.437921
 },
 {
   "stop_id": "58560",
   "stop_name": "BOSTON NECK FS WAMPUM",
   "latitude": 41.481007,
   "longitude": -71.436697
 },
 {
   "stop_id": "58565",
   "stop_name": "NARRAGANSETT NS CASWELL",
   "latitude": 41.433229,
   "longitude": -71.460175
 },
 {
   "stop_id": "58575",
   "stop_name": "FAREWELL FS LONG LANE",
   "latitude": 41.49905,
   "longitude": -71.317134
 },
 {
   "stop_id": "58580",
   "stop_name": "FAREWELL FS AMERICAS CUP",
   "latitude": 41.495458,
   "longitude": -71.316665
 },
 {
   "stop_id": "58590",
   "stop_name": "FAREWELL OPP 10 FAREWELL",
   "latitude": 41.499304,
   "longitude": -71.317011
 },
 {
   "stop_id": "58595",
   "stop_name": "BOSTON NECK OPP 1024 BOSTON NECK",
   "latitude": 41.482333,
   "longitude": -71.43666
 },
 {
   "stop_id": "58600",
   "stop_name": "BOSTON NECK AT 1183 BOSTON NECK",
   "latitude": 41.490535,
   "longitude": -71.437797
 },
 {
   "stop_id": "58605",
   "stop_name": "BOSTON NECK NS HIGHLAND",
   "latitude": 41.52004,
   "longitude": -71.423987
 },
 {
   "stop_id": "58615",
   "stop_name": "BOSTON NECK NS OAKLAND",
   "latitude": 41.567761,
   "longitude": -71.451154
 },
 {
   "stop_id": "58620",
   "stop_name": "PHILLIPS FS BOONE",
   "latitude": 41.567581,
   "longitude": -71.457368
 },
 {
   "stop_id": "58625",
   "stop_name": "PHILLIPS AT 225 PHILLIPS",
   "latitude": 41.566431,
   "longitude": -71.45957
 },
 {
   "stop_id": "58630",
   "stop_name": "PHILLIPS AT 319 PHILLIPS",
   "latitude": 41.566251,
   "longitude": -71.462854
 },
 {
   "stop_id": "58635",
   "stop_name": "POST OPP ST BERNARD CHURCH",
   "latitude": 41.56741,
   "longitude": -71.462796
 },
 {
   "stop_id": "58640",
   "stop_name": "POST OPP 185 POST",
   "latitude": 41.569225,
   "longitude": -71.461316
 },
 {
   "stop_id": "58645",
   "stop_name": "POST AT 130 POST",
   "latitude": 41.571069,
   "longitude": -71.461269
 },
 {
   "stop_id": "58650",
   "stop_name": "POST NS NEWCOMB",
   "latitude": 41.606905,
   "longitude": -71.455525
 },
 {
   "stop_id": "58660",
   "stop_name": "POST OPP GILLAN",
   "latitude": 41.706135,
   "longitude": -71.452475
 },
 {
   "stop_id": "58670",
   "stop_name": "GREAT ISLAND RD AT SALTY BRINE BEACH",
   "latitude": 41.377025,
   "longitude": -71.512646
 },
 {
   "stop_id": "58760",
   "stop_name": "FAIRMOUNT OPP WATER",
   "latitude": 42.003727,
   "longitude": -71.522269
 },
 {
   "stop_id": "58765",
   "stop_name": "FAIRMOUNT NS 1ST",
   "latitude": 42.002245,
   "longitude": -71.525703
 },
 {
   "stop_id": "58770",
   "stop_name": "SACKETT FS BROAD",
   "latitude": 41.795952,
   "longitude": -71.412969
 },
 {
   "stop_id": "58775",
   "stop_name": "HIGH ST OPP SUMMER",
   "latitude": 41.878166,
   "longitude": -71.383849
 },
 {
   "stop_id": "58780",
   "stop_name": "DOUGLAS PIKE NS HARRIS",
   "latitude": 41.90353,
   "longitude": -71.506158
 },
 {
   "stop_id": "58785",
   "stop_name": "DOUGLAS PIKE FS WASHINGTON HWY",
   "latitude": 41.918251,
   "longitude": -71.521002
 },
 {
   "stop_id": "58790",
   "stop_name": "FIDELITY CIRCLE",
   "latitude": 41.927506,
   "longitude": -71.531622
 },
 {
   "stop_id": "58795",
   "stop_name": "DOUGLAS PIKE FS THURBER",
   "latitude": 41.912419,
   "longitude": -71.516108
 },
 {
   "stop_id": "58800",
   "stop_name": "CHARLES NS HOME DEPOT PARKING LOT",
   "latitude": 41.843288,
   "longitude": -71.418284
 },
 {
   "stop_id": "58815",
   "stop_name": "STOP&SHOP (PAWTUCKET AVENUE - EAST PROVIDENCE)",
   "latitude": 41.823281,
   "longitude": -71.356792
 },
 {
   "stop_id": "58830",
   "stop_name": "BOYDS LANE NS RTE. 24",
   "latitude": 41.627897,
   "longitude": -71.243512
 },
 {
   "stop_id": "58831",
   "stop_name": "PORTSMOUTH PARK & RIDE LOT",
   "latitude": 41.628178,
   "longitude": -71.242904
 },
 {
   "stop_id": "58845",
   "stop_name": "PIER RD FS SOUTH FERRY",
   "latitude": 41.49198,
   "longitude": -71.424045
 },
 {
   "stop_id": "58870",
   "stop_name": "PLENTY STREET - SAINT JOSEPH'S HOSPITAL (R-LINE)",
   "latitude": 41.807041,
   "longitude": -71.420198
 },
 {
   "stop_id": "58880",
   "stop_name": "BROAD FS SHELTON",
   "latitude": 41.766131,
   "longitude": -71.390903
 },
 {
   "stop_id": "58910",
   "stop_name": "IVES NS POWER",
   "latitude": 41.823765,
   "longitude": -71.392363
 },
 {
   "stop_id": "58930",
   "stop_name": "BROADWAY OPP ATWELLS",
   "latitude": 41.822479,
   "longitude": -71.418087
 },
 {
   "stop_id": "58935",
   "stop_name": "FIRST FS CLIFF",
   "latitude": 41.656041,
   "longitude": -71.455128
 },
 {
   "stop_id": "58940",
   "stop_name": "LINCOLN MALL PARK & RIDE",
   "latitude": 41.938687,
   "longitude": -71.475118
 },
 {
   "stop_id": "58945",
   "stop_name": "LINCOLN MALL AT TARGET",
   "latitude": 41.937684,
   "longitude": -71.47835
 },
 {
   "stop_id": "58980",
   "stop_name": "PRAIRIE OPP SARATOGA",
   "latitude": 41.8052,
   "longitude": -71.414734
 },
 {
   "stop_id": "58985",
   "stop_name": "HAWTHORNE FS TENNIS COURTS",
   "latitude": 41.789272,
   "longitude": -71.412814
 },
 {
   "stop_id": "58990",
   "stop_name": "ROGER WILLIAMS ZOO",
   "latitude": 41.789967,
   "longitude": -71.415001
 },
 {
   "stop_id": "58995",
   "stop_name": "HAWTHORNE OPP TENNIS COURTS",
   "latitude": 41.789422,
   "longitude": -71.412454
 },
 {
   "stop_id": "59005",
   "stop_name": "PRAIRIE AT ROGER WILLIAMS HOMES",
   "latitude": 41.796153,
   "longitude": -71.410733
 },
 {
   "stop_id": "59015",
   "stop_name": "PILGRIM AT THE MET SCHOOL",
   "latitude": 41.806343,
   "longitude": -71.411652
 },
 {
   "stop_id": "59025",
   "stop_name": "E FRANKLIN NS BASSETT",
   "latitude": 41.815844,
   "longitude": -71.412416
 },
 {
   "stop_id": "59030",
   "stop_name": "E FRANKLIN NS BROAD",
   "latitude": 41.81762,
   "longitude": -71.415516
 },
 {
   "stop_id": "59035",
   "stop_name": "JEFFERSON BLVD AT TRAIN STATION",
   "latitude": 41.727592,
   "longitude": -71.44334
 },
 {
   "stop_id": "59060",
   "stop_name": "PAWTUCKET TRANSIT CTR (SLATER MILL SIDE)",
   "latitude": 41.877144,
   "longitude": -71.383354
 },
 {
   "stop_id": "59065",
   "stop_name": "THIRD FS N MAIN",
   "latitude": 41.851027,
   "longitude": -71.401935
 },
 {
   "stop_id": "59075",
   "stop_name": "MIRIAM HOSPITAL (SEVENTH ST)",
   "latitude": 41.852517,
   "longitude": -71.397983
 },
 {
   "stop_id": "59080",
   "stop_name": "THIRD OPP MIRIAM EMPLOYEES LOT",
   "latitude": 41.851007,
   "longitude": -71.40171
 },
 {
   "stop_id": "59105",
   "stop_name": "WESTMINSTER NS FRANKLIN",
   "latitude": 41.819155,
   "longitude": -71.417933
 },
 {
   "stop_id": "59120",
   "stop_name": "CHALKSTONE FS ACADEMY",
   "latitude": 41.832548,
   "longitude": -71.44491
 },
 {
   "stop_id": "59140",
   "stop_name": "ELMWOOD NS SIXTH",
   "latitude": 41.752121,
   "longitude": -71.423416
 },
 {
   "stop_id": "59145",
   "stop_name": "ATWELLS NS HARRIS",
   "latitude": 41.824476,
   "longitude": -71.434829
 },
 {
   "stop_id": "59150",
   "stop_name": "ATWELLS FS HARRIS",
   "latitude": 41.824335,
   "longitude": -71.434662
 },
 {
   "stop_id": "59155",
   "stop_name": "CHALKSTONE OPP 1644 CHALKSTONE",
   "latitude": 41.833117,
   "longitude": -71.463264
 },
 {
   "stop_id": "59165",
   "stop_name": "S ANGELL NS WAYLAND",
   "latitude": 41.829994,
   "longitude": -71.387362
 },
 {
   "stop_id": "59170",
   "stop_name": "S MAIN FS PARK",
   "latitude": 41.817599,
   "longitude": -71.400801
 },
 {
   "stop_id": "59175",
   "stop_name": "ELMWOOD NS WARWICK ANIMAL HOSPITAL",
   "latitude": 41.754764,
   "longitude": -71.423681
 },
 {
   "stop_id": "59180",
   "stop_name": "ELMWOOD BETWEEN DIXON & HAMLIN",
   "latitude": 41.780305,
   "longitude": -71.420039
 },
 {
   "stop_id": "59190",
   "stop_name": "LAMBERT LIND OPP GREENWICH",
   "latitude": 41.726486,
   "longitude": -71.474319
 },
 {
   "stop_id": "59195",
   "stop_name": "PONTIAC FS HOWARD",
   "latitude": 41.74101,
   "longitude": -71.460502
 },
 {
   "stop_id": "59210",
   "stop_name": "HOWARD AT LATHAM",
   "latitude": 41.744465,
   "longitude": -71.464652
 },
 {
   "stop_id": "59215",
   "stop_name": "PONTIAC FS PAINE",
   "latitude": 41.786229,
   "longitude": -71.431523
 },
 {
   "stop_id": "59220",
   "stop_name": "ROLFE OPP POST OFFICE",
   "latitude": 41.776585,
   "longitude": -71.436481
 },
 {
   "stop_id": "59225",
   "stop_name": "EDDY NS BROOM",
   "latitude": 41.790803,
   "longitude": -71.40342
 },
 {
   "stop_id": "59240",
   "stop_name": "PAWTUCKET AT EAST PROVIDENCE HIGH SCHOOL",
   "latitude": 41.819091,
   "longitude": -71.355922
 },
 {
   "stop_id": "59250",
   "stop_name": "S MAIN AT COUNTY COURT",
   "latitude": 41.825244,
   "longitude": -71.407455
 },
 {
   "stop_id": "59265",
   "stop_name": "ELMGROVE NS SESSIONS",
   "latitude": 41.841097,
   "longitude": -71.392475
 },
 {
   "stop_id": "59270",
   "stop_name": "ADM KALBFUS OPP HALSEY (WASTE MANAGEMENT)",
   "latitude": 41.507589,
   "longitude": -71.314548
 },
 {
   "stop_id": "59275",
   "stop_name": "VALLEY OPP KNIGHTS OF COLUMBUS",
   "latitude": 41.523669,
   "longitude": -71.296706
 },
 {
   "stop_id": "59280",
   "stop_name": "BROWNS LANE NS BENNYS",
   "latitude": 41.537851,
   "longitude": -71.29239
 },
 {
   "stop_id": "59300",
   "stop_name": "ADM KALBFUS FS HALSEY (WASTE MANAGEMENT)",
   "latitude": 41.507396,
   "longitude": -71.314415
 },
 {
   "stop_id": "59305",
   "stop_name": "MAPLE NS HILLSIDE",
   "latitude": 41.516098,
   "longitude": -71.310314
 },
 {
   "stop_id": "59310",
   "stop_name": "W MAIN OPP MARSHALL",
   "latitude": 41.545411,
   "longitude": -71.291717
 },
 {
   "stop_id": "59315",
   "stop_name": "BRISTOL FERRY FS BARKERS",
   "latitude": 41.630733,
   "longitude": -71.254179
 },
 {
   "stop_id": "59320",
   "stop_name": "HOPE OPP THAMES",
   "latitude": 41.676121,
   "longitude": -71.278565
 },
 {
   "stop_id": "59325",
   "stop_name": "MAIN NS FRANKLIN",
   "latitude": 41.72529,
   "longitude": -71.281443
 },
 {
   "stop_id": "59350",
   "stop_name": "ELMWOOD NS W FRIENDSHIP",
   "latitude": 41.810152,
   "longitude": -71.423961
 },
 {
   "stop_id": "59400",
   "stop_name": "PLAINS ROAD LOT",
   "latitude": 41.490876,
   "longitude": -71.539261
 },
 {
   "stop_id": "59401",
   "stop_name": "WEST ALUMNI FS PLAINS RD",
   "latitude": 41.489133,
   "longitude": -71.537089
 },
 {
   "stop_id": "59405",
   "stop_name": "FLAGG AT 210 FLAGG",
   "latitude": 41.491384,
   "longitude": -71.534422
 },
 {
   "stop_id": "59410",
   "stop_name": "FLAGG AT GARRAHY HALL",
   "latitude": 41.490837,
   "longitude": -71.530479
 },
 {
   "stop_id": "59415",
   "stop_name": "FLAGG AT 120 FLAGG",
   "latitude": 41.490615,
   "longitude": -71.528192
 },
 {
   "stop_id": "59420",
   "stop_name": "FLAGG AT COASTAL INSTITUTE",
   "latitude": 41.490434,
   "longitude": -71.526244
 },
 {
   "stop_id": "59530",
   "stop_name": "EAST ALUMNI FS UPPER COLLEGE",
   "latitude": 41.488481,
   "longitude": -71.52513
 },
 {
   "stop_id": "59535",
   "stop_name": "EAST ALUMNI NS GREENHOUSE",
   "latitude": 41.488527,
   "longitude": -71.526591
 },
 {
   "stop_id": "59540",
   "stop_name": "WEST ALUMNI AT RODMAN HALL",
   "latitude": 41.488241,
   "longitude": -71.529297
 },
 {
   "stop_id": "59545",
   "stop_name": "WEST ALUMNI NS HEATHMAN",
   "latitude": 41.488525,
   "longitude": -71.531555
 },
 {
   "stop_id": "59565",
   "stop_name": "E MAIN AT 3111 E MAIN",
   "latitude": 41.613134,
   "longitude": -71.246083
 },
 {
   "stop_id": "59570",
   "stop_name": "E MAIN AT  3104 E MAIN",
   "latitude": 41.613063,
   "longitude": -71.246262
 },
 {
   "stop_id": "59575",
   "stop_name": "E MAIN AT HENRY DAVIS",
   "latitude": 41.59449,
   "longitude": -71.252703
 },
 {
   "stop_id": "59580",
   "stop_name": "E MAIN NS CROSSINGS",
   "latitude": 41.585395,
   "longitude": -71.252322
 },
 {
   "stop_id": "59585",
   "stop_name": "E MAIN AT SLATE HILL FARM",
   "latitude": 41.536076,
   "longitude": -71.26772
 },
 {
   "stop_id": "59600",
   "stop_name": "METACOM FS GOODING",
   "latitude": 41.69551,
   "longitude": -71.26378
 },
 {
   "stop_id": "59605",
   "stop_name": "W FRANKLIN NS MAPLE",
   "latitude": 41.815452,
   "longitude": -71.414732
 },
 {
   "stop_id": "59610",
   "stop_name": "PRAIRIE NS EARLY",
   "latitude": 41.796019,
   "longitude": -71.410806
 },
 {
   "stop_id": "59615",
   "stop_name": "PRAIRIE FS GALLUP",
   "latitude": 41.800354,
   "longitude": -71.412507
 },
 {
   "stop_id": "59620",
   "stop_name": "WAMPANOAG OPP MOBIL",
   "latitude": 41.786522,
   "longitude": -71.333883
 },
 {
   "stop_id": "59630",
   "stop_name": "WAMPANOAG AT FORBES FIELD",
   "latitude": 41.782808,
   "longitude": -71.334701
 },
 {
   "stop_id": "59635",
   "stop_name": "HOPE AT NORTH FARM",
   "latitude": 41.70765,
   "longitude": -71.280395
 },
 {
   "stop_id": "59645",
   "stop_name": "W MAIN  FS OXBOW APTS",
   "latitude": 41.543405,
   "longitude": -71.29173
 },
 {
   "stop_id": "59660",
   "stop_name": "E MAIN NS JOHNSON TERRACE",
   "latitude": 41.524296,
   "longitude": -71.278768
 },
 {
   "stop_id": "59665",
   "stop_name": "E MAIN OPP ATE HILL FARM",
   "latitude": 41.535829,
   "longitude": -71.267747
 },
 {
   "stop_id": "59670",
   "stop_name": "E MAIN AT 1641 E MAIN",
   "latitude": 41.577073,
   "longitude": -71.251736
 },
 {
   "stop_id": "59675",
   "stop_name": "E MAIN NS TURNPIKE",
   "latitude": 41.600324,
   "longitude": -71.249988
 },
 {
   "stop_id": "59700",
   "stop_name": "RT 2 OPP FIRST",
   "latitude": 41.532703,
   "longitude": -71.547438
 },
 {
   "stop_id": "59705",
   "stop_name": "RT 2 AT WOLF ROCK MEADOWS",
   "latitude": 41.52936,
   "longitude": -71.549706
 },
 {
   "stop_id": "59710",
   "stop_name": "RT 2 AT 2115 S COUNTY TRL",
   "latitude": 41.502773,
   "longitude": -71.561731
 },
 {
   "stop_id": "59715",
   "stop_name": "KINGSTOWN NS ALLISONS",
   "latitude": 41.466329,
   "longitude": -71.511559
 },
 {
   "stop_id": "59720",
   "stop_name": "KINGSTOWN NS SOUTH KINGSTOWN PUBLIC SAFETY COMPLEX",
   "latitude": 41.463467,
   "longitude": -71.510084
 },
 {
   "stop_id": "59730",
   "stop_name": "KINGSTOWN NS ALLISONS",
   "latitude": 41.465889,
   "longitude": -71.511238
 },
 {
   "stop_id": "59735",
   "stop_name": "KINGSTOWN FS WEST WIND",
   "latitude": 41.471041,
   "longitude": -71.514533
 },
 {
   "stop_id": "59740",
   "stop_name": "KINGSTOWN NS EAST FARM",
   "latitude": 41.472122,
   "longitude": -71.5154
 },
 {
   "stop_id": "59745",
   "stop_name": "KINGSTOWN NS ROUTE 138",
   "latitude": 41.479637,
   "longitude": -71.520653
 },
 {
   "stop_id": "59750",
   "stop_name": "KINGSTOWN AT MOBIL GAS STATION",
   "latitude": 41.483402,
   "longitude": -71.553139
 },
 {
   "stop_id": "59755",
   "stop_name": "POINT JUDITH AT 290 POINT JUDITH RD",
   "latitude": 41.418393,
   "longitude": -71.480017
 },
 {
   "stop_id": "59760",
   "stop_name": "RT 2 OPP KINGSTON REHAB CENTER",
   "latitude": 41.502655,
   "longitude": -71.561589
 },
 {
   "stop_id": "59765",
   "stop_name": "RT 2 AT 535 SOUTH COUNTY TRL",
   "latitude": 41.529316,
   "longitude": -71.549498
 },
 {
   "stop_id": "59770",
   "stop_name": "RT 2 FS FIRST",
   "latitude": 41.53249,
   "longitude": -71.547286
 },
 {
   "stop_id": "59775",
   "stop_name": "RT 2 OPP EXETER ANIMAL SHELTER",
   "latitude": 41.550027,
   "longitude": -71.528892
 },
 {
   "stop_id": "59780",
   "stop_name": "RT 2 AT LIVING HOPE CHURCH",
   "latitude": 41.55617,
   "longitude": -71.519225
 },
 {
   "stop_id": "59785",
   "stop_name": "RT 2 FS PLAIN",
   "latitude": 41.576532,
   "longitude": -71.513278
 },
 {
   "stop_id": "59790",
   "stop_name": "RT 2 NS AUTUMN",
   "latitude": 41.578836,
   "longitude": -71.507602
 },
 {
   "stop_id": "59800",
   "stop_name": "GEORGE BETWEEN MARRIN AND GRACE",
   "latitude": 41.872535,
   "longitude": -71.387778
 },
 {
   "stop_id": "59815",
   "stop_name": "DYER AT 738 DYER",
   "latitude": 41.792126,
   "longitude": -71.45738
 },
 {
   "stop_id": "59825",
   "stop_name": "LAUREL HILL OPP CLIFF",
   "latitude": 41.797181,
   "longitude": -71.452351
 },
 {
   "stop_id": "59830",
   "stop_name": "WALMART SVC RD OPP CITIZENS BANK",
   "latitude": 41.789297,
   "longitude": -71.500456
 },
 {
   "stop_id": "59860",
   "stop_name": "MT PLEASANT FS POMONA",
   "latitude": 41.828119,
   "longitude": -71.448919
 },
 {
   "stop_id": "59865",
   "stop_name": "MT PLEASANT AT OUR LADY OF PROVIDENCE",
   "latitude": 41.839769,
   "longitude": -71.451892
 },
 {
   "stop_id": "59875",
   "stop_name": "MT PLEASANT NS ATWELLS",
   "latitude": 41.825508,
   "longitude": -71.448766
 },
 {
   "stop_id": "59880",
   "stop_name": "RT 246 FS TWIN RIVER RD",
   "latitude": 41.893973,
   "longitude": -71.446662
 },
 {
   "stop_id": "59895",
   "stop_name": "MINERAL SPRING FS POWER",
   "latitude": 41.87019,
   "longitude": -71.418404
 },
 {
   "stop_id": "59900",
   "stop_name": "RT 146A OPP 435 RT 146A",
   "latitude": 41.972961,
   "longitude": -71.509396
 },
 {
   "stop_id": "59915",
   "stop_name": "WALMART CRANSTON",
   "latitude": 41.787535,
   "longitude": -71.499027
 },
 {
   "stop_id": "59920",
   "stop_name": "WALMART SVC RD FS CITIZENS BANK",
   "latitude": 41.789003,
   "longitude": -71.500793
 },
 {
   "stop_id": "59950",
   "stop_name": "BROAD OPP 2131 BROAD",
   "latitude": 41.76735,
   "longitude": -71.391503
 },
 {
   "stop_id": "59960",
   "stop_name": "JEFFERSON BLVD AT 51 JEFFERSON BLVD",
   "latitude": 41.751614,
   "longitude": -71.435008
 },
 {
   "stop_id": "59975",
   "stop_name": "WARWICK AT KNIGHTS OF COLUMBUS",
   "latitude": 41.713389,
   "longitude": -71.399093
 },
 {
   "stop_id": "59990",
   "stop_name": "RT 102 NS CROSS",
   "latitude": 41.927198,
   "longitude": -71.669337
 },
 {
   "stop_id": "59995",
   "stop_name": "RT 102 AT 56 RT 102",
   "latitude": 41.921386,
   "longitude": -71.670556
 },
 {
   "stop_id": "60000",
   "stop_name": "PUTNAM PIKE AT 208 PUTNAM PIKE",
   "latitude": 41.890302,
   "longitude": -71.602171
 },
 {
   "stop_id": "60005",
   "stop_name": "PUTNAME PIKE AT 120 PUTNAME PIKE",
   "latitude": 41.879105,
   "longitude": -71.575233
 },
 {
   "stop_id": "60010",
   "stop_name": "PUTNAM PIKE AT CORY'S",
   "latitude": 41.875868,
   "longitude": -71.566254
 },
 {
   "stop_id": "60015",
   "stop_name": "HARTFORD AT 807 HARTFORD",
   "latitude": 41.819668,
   "longitude": -71.471647
 },
 {
   "stop_id": "60020",
   "stop_name": "STOP&SHOP (COMMERCE WAY - JOHNSTON)",
   "latitude": 41.820704,
   "longitude": -71.500056
 },
 {
   "stop_id": "60025",
   "stop_name": "BLACKSTONE NS ROCHAMBEAU",
   "latitude": 41.845893,
   "longitude": -71.387265
 },
 {
   "stop_id": "60030",
   "stop_name": "ELMGROVE NS ADELPHI",
   "latitude": 41.830869,
   "longitude": -71.389706
 },
 {
   "stop_id": "60035",
   "stop_name": "DOYLE OPP 132 DOYLE",
   "latitude": 41.838741,
   "longitude": -71.402964
 },
 {
   "stop_id": "60040",
   "stop_name": "BROOK NS MEETING",
   "latitude": 41.828925,
   "longitude": -71.399525
 },
 {
   "stop_id": "60045",
   "stop_name": "VALLEY NS WATERFRONT",
   "latitude": 41.818492,
   "longitude": -71.383548
 },
 {
   "stop_id": "60060",
   "stop_name": "NEWPORT NS NARRAGANSETT PK",
   "latitude": 41.857951,
   "longitude": -71.354392
 },
 {
   "stop_id": "60065",
   "stop_name": "NEWPORT AT TACO BELL",
   "latitude": 41.85909,
   "longitude": -71.354423
 },
 {
   "stop_id": "60070",
   "stop_name": "PROSPECT NS TALCOTT",
   "latitude": 41.865379,
   "longitude": -71.373207
 },
 {
   "stop_id": "60075",
   "stop_name": "NARRAGANSETT PARK NS NEWPORT",
   "latitude": 41.85823,
   "longitude": -71.353063
 },
 {
   "stop_id": "60080",
   "stop_name": "EXCHANGE AT TOLMAN HIGH SCHOOL",
   "latitude": 41.87982,
   "longitude": -71.380381
 },
 {
   "stop_id": "60085",
   "stop_name": "BOSTON NECK FS SNUFF MILL",
   "latitude": 41.522243,
   "longitude": -71.42384
 },
 {
   "stop_id": "60090",
   "stop_name": "BOSTON NECK OPP 2080 BOSTON NECK",
   "latitude": 41.519246,
   "longitude": -71.424093
 },
 {
   "stop_id": "60095",
   "stop_name": "CASS AT 255 CASS",
   "latitude": 42.005499,
   "longitude": -71.494287
 },
 {
   "stop_id": "60115",
   "stop_name": "RT 116 FS ALBION",
   "latitude": 41.935196,
   "longitude": -71.480701
 },
 {
   "stop_id": "60125",
   "stop_name": "RT 146A OPP N SMITHFIELD POLICE STATION",
   "latitude": 41.983986,
   "longitude": -71.518439
 },
 {
   "stop_id": "60135",
   "stop_name": "PUTNAM PIKE AT 590 PUTNAM PIKE",
   "latitude": 41.87263,
   "longitude": -71.554862
 },
 {
   "stop_id": "60140",
   "stop_name": "PUTNAM PIKE OPP 781 PUTNAM PIKE",
   "latitude": 41.878917,
   "longitude": -71.574405
 },
 {
   "stop_id": "60145",
   "stop_name": "PUTNAM PIKE AT POWDER MILL CREAMERY",
   "latitude": 41.881989,
   "longitude": -71.57946
 },
 {
   "stop_id": "60150",
   "stop_name": "RT 102 OPP CROSS",
   "latitude": 41.926548,
   "longitude": -71.669426
 },
 {
   "stop_id": "60155",
   "stop_name": "CHAPEL FS RAILROAD",
   "latitude": 41.968196,
   "longitude": -71.688117
 },
 {
   "stop_id": "60165",
   "stop_name": "SMITHFIELD OPP CUSHING",
   "latitude": 41.855964,
   "longitude": -71.448852
 },
 {
   "stop_id": "60170",
   "stop_name": "DOUGLAS PIKE AT HAMPTON INN",
   "latitude": 41.914343,
   "longitude": -71.517687
 },
 {
   "stop_id": "60175",
   "stop_name": "DOUGLAS PIKE NS HARRIS",
   "latitude": 41.90367,
   "longitude": -71.506482
 },
 {
   "stop_id": "60180",
   "stop_name": "DOUGLAS PIKE AT 40 DOUGLAS PIKE",
   "latitude": 41.875535,
   "longitude": -71.470121
 },
 {
   "stop_id": "60185",
   "stop_name": "DOUGLAS AT 1576 DOUGLAS",
   "latitude": 41.867997,
   "longitude": -71.460157
 },
 {
   "stop_id": "60190",
   "stop_name": "DOUGLAS AT 1328 DOUGLAS",
   "latitude": 41.861408,
   "longitude": -71.450354
 },
 {
   "stop_id": "60200",
   "stop_name": "WALMART NORTH SMITHFIELD",
   "latitude": 41.976634,
   "longitude": -71.506905
 },
 {
   "stop_id": "60220",
   "stop_name": "SILVER SPRING AT BURGER KING",
   "latitude": 41.858631,
   "longitude": -71.411016
 },
 {
   "stop_id": "60235",
   "stop_name": "BENEFIT AT THURBER",
   "latitude": 41.891577,
   "longitude": -71.345995
 },
 {
   "stop_id": "70170",
   "stop_name": "WASHINGTON AT 704 WASHINGTON",
   "latitude": 41.694719,
   "longitude": -71.551339
 },
 {
   "stop_id": "70175",
   "stop_name": "WASHINGTON AT 676 WASHINGTON",
   "latitude": 41.695071,
   "longitude": -71.548936
 },
 {
   "stop_id": "70180",
   "stop_name": "WASHINGTON AT 203 WASHINGTON",
   "latitude": 41.70137,
   "longitude": -71.527613
 },
 {
   "stop_id": "70185",
   "stop_name": "TOLLGATE FS BALD HILL",
   "latitude": 41.709979,
   "longitude": -71.491094
 },
 {
   "stop_id": "70190",
   "stop_name": "BALD HILL FS TOLLGATE",
   "latitude": 41.711117,
   "longitude": -71.489565
 },
 {
   "stop_id": "70195",
   "stop_name": "BEACH AT CHURCH CENTER",
   "latitude": 41.721733,
   "longitude": -71.384242
 },
 {
   "stop_id": "70200",
   "stop_name": "COWESETT OPP LONSDALE",
   "latitude": 41.684619,
   "longitude": -71.51781
 },
 {
   "stop_id": "70205",
   "stop_name": "GATE RD AT IAFRATE WAY",
   "latitude": 41.605977,
   "longitude": -71.449669
 },
 {
   "stop_id": "70210",
   "stop_name": "GATE RD AT KOHLS",
   "latitude": 41.605776,
   "longitude": -71.4512
 },
 {
   "stop_id": "70220",
   "stop_name": "PHILLIPS AT 320 PHILLIPS",
   "latitude": 41.566098,
   "longitude": -71.462826
 },
 {
   "stop_id": "70225",
   "stop_name": "PHILLIPS AT 226 PHILLIPS",
   "latitude": 41.566277,
   "longitude": -71.459563
 },
 {
   "stop_id": "70230",
   "stop_name": "BOSTON NECK NS MIDDLEBRIDGE",
   "latitude": 41.453452,
   "longitude": -71.442568
 },
 {
   "stop_id": "70235",
   "stop_name": "NARRAGANSETT FS BOSTON NECK",
   "latitude": 41.433942,
   "longitude": -71.458111
 },
 {
   "stop_id": "70240",
   "stop_name": "NARRAGANSETT NS BOSTON NECK",
   "latitude": 41.433819,
   "longitude": -71.458382
 },
 {
   "stop_id": "70245",
   "stop_name": "BOSTON NECK OPP OLD BOSTON NECK (NORTH)",
   "latitude": 41.458251,
   "longitude": -71.435997
 },
 {
   "stop_id": "70250",
   "stop_name": "BOSTON NECK NS ANAWAN CLIFFS",
   "latitude": 41.460581,
   "longitude": -71.433813
 },
 {
   "stop_id": "70255",
   "stop_name": "BOSTON NECK AT 939 BOSTON NECK",
   "latitude": 41.477688,
   "longitude": -71.435673
 },
 {
   "stop_id": "70260",
   "stop_name": "BOSTON NECK AT 1141 BOSTON NECK",
   "latitude": 41.488253,
   "longitude": -71.437523
 },
 {
   "stop_id": "70265",
   "stop_name": "BOSTON NECK OPP RT 138W [ON-RAMP]",
   "latitude": 41.530429,
   "longitude": -71.427848
 },
 {
   "stop_id": "70270",
   "stop_name": "BOSTON NECK NS ELAM",
   "latitude": 41.568592,
   "longitude": -71.453315
 },
 {
   "stop_id": "70275",
   "stop_name": "BOSTON NECK AT WICKFORD ELEM SCHOOL",
   "latitude": 41.568193,
   "longitude": -71.455232
 },
 {
   "stop_id": "70280",
   "stop_name": "POST OPP 55 POST",
   "latitude": 41.572984,
   "longitude": -71.462008
 },
 {
   "stop_id": "70285",
   "stop_name": "POST AT 6188 POST",
   "latitude": 41.628944,
   "longitude": -71.462496
 },
 {
   "stop_id": "70290",
   "stop_name": "POST AT 4474 POST",
   "latitude": 41.669085,
   "longitude": -71.44869
 },
 {
   "stop_id": "70300",
   "stop_name": "POST AT 3775 POST",
   "latitude": 41.686995,
   "longitude": -71.454682
 },
 {
   "stop_id": "70310",
   "stop_name": "HOPE FS ALUMNI",
   "latitude": 41.834589,
   "longitude": -71.401616
 },
 {
   "stop_id": "70315",
   "stop_name": "THAYER NS CUSHING",
   "latitude": 41.830319,
   "longitude": -71.401007
 },
 {
   "stop_id": "70330",
   "stop_name": "SAYLES FS BRIDGEWAY",
   "latitude": 41.956493,
   "longitude": -71.702677
 },
 {
   "stop_id": "70340",
   "stop_name": "BEVERAGE HILL OPP 650 BEVERAGE HILL",
   "latitude": 41.860748,
   "longitude": -71.353221
 },
 {
   "stop_id": "70345",
   "stop_name": "BEVERAGE HILL OPP LANGDON",
   "latitude": 41.860797,
   "longitude": -71.35138
 },
 {
   "stop_id": "70350",
   "stop_name": "BEVERAGE HILL NS NARRAGANSETT PARK",
   "latitude": 41.860824,
   "longitude": -71.350069
 },
 {
   "stop_id": "70370",
   "stop_name": "MINERAL SPRING OPP DAVID",
   "latitude": 41.865851,
   "longitude": -71.443406
 },
 {
   "stop_id": "70375",
   "stop_name": "MINERAL SPRING NS DOUGLAS",
   "latitude": 41.863517,
   "longitude": -71.452344
 },
 {
   "stop_id": "70380",
   "stop_name": "MINERAL SPRING FS SMITH",
   "latitude": 41.857976,
   "longitude": -71.4841
 },
 {
   "stop_id": "70385",
   "stop_name": "ESMOND AT 65A ESMOND",
   "latitude": 41.872973,
   "longitude": -71.505268
 },
 {
   "stop_id": "70390",
   "stop_name": "ESMOND NS PUTNAM PIKE",
   "latitude": 41.86898,
   "longitude": -71.507404
 },
 {
   "stop_id": "70395",
   "stop_name": "SMITHFIELD CROSSING AT HALLMARK",
   "latitude": 41.873345,
   "longitude": -71.517828
 },
 {
   "stop_id": "70400",
   "stop_name": "SMITHFIELD CROSSING AT BARNES & NOBLE",
   "latitude": 41.874074,
   "longitude": -71.517122
 },
 {
   "stop_id": "70405",
   "stop_name": "ESMOND FS PUTNAM PIKE",
   "latitude": 41.869098,
   "longitude": -71.507212
 },
 {
   "stop_id": "70410",
   "stop_name": "ESMOND AT 56 ESMOND",
   "latitude": 41.873408,
   "longitude": -71.505071
 },
 {
   "stop_id": "70415",
   "stop_name": "HILLSIDE AT 14 HILLSIDE RD",
   "latitude": 41.764538,
   "longitude": -71.458462
 },
 {
   "stop_id": "70425",
   "stop_name": "KINGSTOWN OPP KERSEY",
   "latitude": 41.452814,
   "longitude": -71.502088
 },
 {
   "stop_id": "70430",
   "stop_name": "SOUTH PIER NS LAMBERT",
   "latitude": 41.430868,
   "longitude": -71.48094
 },
 {
   "stop_id": "70435",
   "stop_name": "QUAKER LAND FS OLD CARRIIAGE RD",
   "latitude": 41.688096,
   "longitude": -71.501118
 },
 {
   "stop_id": "70445",
   "stop_name": "MENDON OPP 1748 OLD MENDON",
   "latitude": 41.910228,
   "longitude": -71.402567
 },
 {
   "stop_id": "70450",
   "stop_name": "MENDON FS OLD MENDON",
   "latitude": 41.925321,
   "longitude": -71.414618
 },
 {
   "stop_id": "70455",
   "stop_name": "MENDON OPP HUNT",
   "latitude": 41.926602,
   "longitude": -71.417356
 },
 {
   "stop_id": "70460",
   "stop_name": "MENDON NS CUSHING",
   "latitude": 41.927803,
   "longitude": -71.419741
 },
 {
   "stop_id": "70465",
   "stop_name": "MENDON NS WHIPPLE",
   "latitude": 41.92894,
   "longitude": -71.421022
 },
 {
   "stop_id": "70470",
   "stop_name": "RT 116 NS PAULINE",
   "latitude": 41.935815,
   "longitude": -71.44074
 },
 {
   "stop_id": "70475",
   "stop_name": "RT 116 OPP 695 G WASHINGTON HWAY",
   "latitude": 41.935053,
   "longitude": -71.445251
 },
 {
   "stop_id": "70480",
   "stop_name": "MENDON FS 500 MENDON",
   "latitude": 41.92135,
   "longitude": -71.409838
 },
 {
   "stop_id": "70485",
   "stop_name": "LONSDALE FS FRONT",
   "latitude": 41.906553,
   "longitude": -71.403679
 },
 {
   "stop_id": "70490",
   "stop_name": "LONSDALE OPP 1501 LONSDALE",
   "latitude": 41.904189,
   "longitude": -71.404339
 },
 {
   "stop_id": "70500",
   "stop_name": "LONSDALE NS EDGEHILL",
   "latitude": 41.899664,
   "longitude": -71.405045
 },
 {
   "stop_id": "70505",
   "stop_name": "LONSDALE FS VALLEY VIEW",
   "latitude": 41.897677,
   "longitude": -71.404428
 },
 {
   "stop_id": "70510",
   "stop_name": "LONSDALE NS WALKER",
   "latitude": 41.895661,
   "longitude": -71.404855
 },
 {
   "stop_id": "70540",
   "stop_name": "WICKFORD TRAIN STATION",
   "latitude": 41.581093,
   "longitude": -71.491828
 },
 {
   "stop_id": "70545",
   "stop_name": "COTTAGE NS BENEFIT",
   "latitude": 41.89273,
   "longitude": -71.356883
 },
 {
   "stop_id": "70590",
   "stop_name": "COTTAGE FS BENEFIT",
   "latitude": 41.892714,
   "longitude": -71.356521
 },
 {
   "stop_id": "70595",
   "stop_name": "COTTAGE NS NEWPORT",
   "latitude": 41.893609,
   "longitude": -71.355053
 },
 {
   "stop_id": "70600",
   "stop_name": "RT 1A & RT 138 PARK&RIDE",
   "latitude": 41.526983,
   "longitude": -71.425462
 },
 {
   "stop_id": "70670",
   "stop_name": "RT 2 & RT 4 PARK&RIDE",
   "latitude": 41.611768,
   "longitude": -71.492707
 },
 {
   "stop_id": "70700",
   "stop_name": "DOUGLAS FS RIVER",
   "latitude": 41.852531,
   "longitude": -71.436868
 },
 {
   "stop_id": "70800",
   "stop_name": "COMMERCE NS PUTNAM PIKE",
   "latitude": 41.869415,
   "longitude": -71.534554
 },
 {
   "stop_id": "70805",
   "stop_name": "STOP&SHOP (GARFIELD STREET - CRANSTON)",
   "latitude": 41.795262,
   "longitude": -71.442886
 },
 {
   "stop_id": "70810",
   "stop_name": "S BROADWAY FS WINSOR",
   "latitude": 41.813161,
   "longitude": -71.370703
 },
 {
   "stop_id": "70815",
   "stop_name": "MARTIN OPP ANGELL",
   "latitude": 41.801464,
   "longitude": -71.367331
 },
 {
   "stop_id": "70820",
   "stop_name": "WAMPANOAG NS BUCK THORNE",
   "latitude": 41.797289,
   "longitude": -71.359453
 },
 {
   "stop_id": "70825",
   "stop_name": "WAMPANOAG FS GARDEN DR",
   "latitude": 41.795855,
   "longitude": -71.353412
 },
 {
   "stop_id": "70830",
   "stop_name": "WAMPANOAG OPP GARDEN DR",
   "latitude": 41.796644,
   "longitude": -71.357025
 },
 {
   "stop_id": "70835",
   "stop_name": "WAMPANOAG OPP BUCK THORNE",
   "latitude": 41.797319,
   "longitude": -71.359184
 },
 {
   "stop_id": "70840",
   "stop_name": "MARTIN FS PAWTUCKET",
   "latitude": 41.801433,
   "longitude": -71.366587
 },
 {
   "stop_id": "70845",
   "stop_name": "MARTIN OPP DODGE",
   "latitude": 41.801833,
   "longitude": -71.368737
 },
 {
   "stop_id": "70850",
   "stop_name": "S BROADWAY FS MARTIN",
   "latitude": 41.803891,
   "longitude": -71.373629
 },
 {
   "stop_id": "70855",
   "stop_name": "S BROADWAY NS BELMONT",
   "latitude": 41.809701,
   "longitude": -71.371738
 },
 {
   "stop_id": "70860",
   "stop_name": "S BROADWAY NS WINSOR",
   "latitude": 41.812959,
   "longitude": -71.370659
 },
 {
   "stop_id": "70870",
   "stop_name": "ATWELLS NS VALLEY",
   "latitude": 41.824615,
   "longitude": -71.438596
 },
 {
   "stop_id": "70875",
   "stop_name": "HARTFORD FS I-295",
   "latitude": 41.82741,
   "longitude": -71.512968
 },
 {
   "stop_id": "70880",
   "stop_name": "HARTFORD NS ATWOOD",
   "latitude": 41.824461,
   "longitude": -71.501826
 },
 {
   "stop_id": "70885",
   "stop_name": "HARTFORD AT I-295",
   "latitude": 41.82764,
   "longitude": -71.51275
 },
 {
   "stop_id": "70890",
   "stop_name": "S MAIN FS WICKENDEN",
   "latitude": 41.819201,
   "longitude": -71.401158
 },
 {
   "stop_id": "70895",
   "stop_name": "ARMISTICE OPP SLATER PARK",
   "latitude": 41.87474,
   "longitude": -71.341948
 },
 {
   "stop_id": "71000",
   "stop_name": "PLAINFIELD FS ATWOOD ST",
   "latitude": 41.816184,
   "longitude": -71.444622
 },
 {
   "stop_id": "71005",
   "stop_name": "BRIGIDO MARKET PARK AND RIDE",
   "latitude": 42.005421,
   "longitude": -71.586487
 },
 {
   "stop_id": "71010",
   "stop_name": "NORTH MAIN NS MAIN ST",
   "latitude": 42.000417,
   "longitude": -71.579405
 },
 {
   "stop_id": "71015",
   "stop_name": "MAIN ST  NS NORTH MAIN ST",
   "latitude": 42.000581,
   "longitude": -71.578839
 },
 {
   "stop_id": "71020",
   "stop_name": "GREAT RD AT 594 GREAT RD",
   "latitude": 41.998782,
   "longitude": -71.548918
 },
 {
   "stop_id": "71025",
   "stop_name": "GREAT RD AT 601 GREAT RD",
   "latitude": 41.998782,
   "longitude": -71.548727
 },
 {
   "stop_id": "71030",
   "stop_name": "SMITH NS GENTIAN",
   "latitude": 41.845875,
   "longitude": -71.451401
 },
 {
   "stop_id": "71040",
   "stop_name": "SMITH NS RIVER",
   "latitude": 41.8409,
   "longitude": -71.441364
 },
 {
   "stop_id": "71045",
   "stop_name": "JOB LOT PLAZA",
   "latitude": 41.771346,
   "longitude": -71.424379
 },
 {
   "stop_id": "71050",
   "stop_name": "WARREN FS LYON",
   "latitude": 41.81524,
   "longitude": -71.375479
 },
 {
   "stop_id": "71055",
   "stop_name": "WARREN FS BROADWAY",
   "latitude": 41.813348,
   "longitude": -71.368743
 },
 {
   "stop_id": "71060",
   "stop_name": "WARREN FS SLOCUM",
   "latitude": 41.812854,
   "longitude": -71.365961
 },
 {
   "stop_id": "71065",
   "stop_name": "WARREN FS BROWN",
   "latitude": 41.811983,
   "longitude": -71.362527
 },
 {
   "stop_id": "71070",
   "stop_name": "WARREN NS S ROSE",
   "latitude": 41.811515,
   "longitude": -71.360703
 },
 {
   "stop_id": "71075",
   "stop_name": "WARREN FS S SPRUCE",
   "latitude": 41.811724,
   "longitude": -71.361278
 },
 {
   "stop_id": "71080",
   "stop_name": "WARREN FS HIGH",
   "latitude": 41.812572,
   "longitude": -71.364463
 },
 {
   "stop_id": "71085",
   "stop_name": "WARREN OPP DONNELY",
   "latitude": 41.813125,
   "longitude": -71.366938
 },
 {
   "stop_id": "71095",
   "stop_name": "PARK NS CRANSTON",
   "latitude": 41.783104,
   "longitude": -71.463573
 },
 {
   "stop_id": "71100",
   "stop_name": "PHENIX NS GREEN",
   "latitude": 41.781995,
   "longitude": -71.467035
 },
 {
   "stop_id": "71105",
   "stop_name": "PHENIX NS ATWOOD",
   "latitude": 41.781071,
   "longitude": -71.471744
 },
 {
   "stop_id": "71115",
   "stop_name": "PHENIX OPP PRESTON",
   "latitude": 41.780763,
   "longitude": -71.473959
 },
 {
   "stop_id": "71120",
   "stop_name": "PHENIX FS ATWOOD",
   "latitude": 41.780978,
   "longitude": -71.471772
 },
 {
   "stop_id": "71125",
   "stop_name": "PHENIX OPP GREEN",
   "latitude": 41.781931,
   "longitude": -71.467021
 },
 {
   "stop_id": "71130",
   "stop_name": "PARK FS CRANSTON",
   "latitude": 41.78304,
   "longitude": -71.463546
 },
 {
   "stop_id": "71135",
   "stop_name": "PARK FS PALMER",
   "latitude": 41.783589,
   "longitude": -71.459967
 },
 {
   "stop_id": "71140",
   "stop_name": "STOP&SHOP (ATWOOD AVENUE - CRANSTON)",
   "latitude": 41.781562,
   "longitude": -71.473986
 },
 {
   "stop_id": "71145",
   "stop_name": "PONTIAC NS HOWARD",
   "latitude": 41.740849,
   "longitude": -71.46085
 },
 {
   "stop_id": "72000",
   "stop_name": "CARR STREET (R-LINE)",
   "latitude": 41.78949,
   "longitude": -71.404503
 },
 {
   "stop_id": "72005",
   "stop_name": "WESTMINSTER STREET (R-LINE)",
   "latitude": 41.821076,
   "longitude": -71.415389
 },
 {
   "stop_id": "72010",
   "stop_name": "PROVIDENCE STATION",
   "latitude": 41.828283,
   "longitude": -71.413073
 },
 {
   "stop_id": "72015",
   "stop_name": "PROVIDENCE STATION",
   "latitude": 41.828623,
   "longitude": -71.412841
 },
 {
   "stop_id": "72020",
   "stop_name": "ROGER WILLIAMS NATIONAL MEMORIAL",
   "latitude": 41.828711,
   "longitude": -71.410829
 },
 {
   "stop_id": "72025",
   "stop_name": "PEARL STREET (R-LINE)",
   "latitude": 41.871802,
   "longitude": -71.395046
 },
 {
   "stop_id": "72100",
   "stop_name": "WASHINGTON NS CLEMENCE",
   "latitude": 41.82323,
   "longitude": -71.414454
 },
 {
   "stop_id": "72110",
   "stop_name": "EXCHANGE NS EXCHANGE CT",
   "latitude": 41.879768,
   "longitude": -71.380799
 },
 {
   "stop_id": "72125",
   "stop_name": "S ATTLEBORO TRAIN STATION",
   "latitude": 41.898928,
   "longitude": -71.355571
 },
 {
   "stop_id": "72130",
   "stop_name": "WARWICK AVE SHAWS",
   "latitude": 41.767348,
   "longitude": -71.404063
 },
 {
   "stop_id": "72135",
   "stop_name": "FISH RD PARK & RIDE",
   "latitude": 41.643331,
   "longitude": -71.186834
 },
 {
   "stop_id": "72155",
   "stop_name": "KENNEDY PLAZA (STOP F)",
   "latitude": 41.82484,
   "longitude": -71.412085
 },
 {
   "stop_id": "72160",
   "stop_name": "KENNEDY PLAZA (STOP W)",
   "latitude": 41.825465,
   "longitude": -71.412597
 },
 {
   "stop_id": "72165",
   "stop_name": "KENNEDY PLAZA (STOP Y)",
   "latitude": 41.825971,
   "longitude": -71.411967
 },
 {
   "stop_id": "72170",
   "stop_name": "KENNEDY PLAZA (STOP Z)",
   "latitude": 41.82603,
   "longitude": -71.411791
 },
 {
   "stop_id": "72175",
   "stop_name": "KENNEDY PLAZA (STOP A)",
   "latitude": 41.824672,
   "longitude": -71.411896
 },
 {
   "stop_id": "72180",
   "stop_name": "NORTH NS WATSON",
   "latitude": 41.498149,
   "longitude": -71.374706
 },
 {
   "stop_id": "72185",
   "stop_name": "WOODLAND NS GOLDFINCH",
   "latitude": 41.672631,
   "longitude": -71.5935
 },
 {
   "stop_id": "72190",
   "stop_name": "KINGSTOWN OPP GRADUATE VILLAGE APTS",
   "latitude": 41.482201,
   "longitude": -71.535733
 },
 {
   "stop_id": "72210",
   "stop_name": "NEWPORT NS DAWSON",
   "latitude": 41.894953,
   "longitude": -71.354344
 },
 {
   "stop_id": "72215",
   "stop_name": "COTTAGE NS COUNTY ST",
   "latitude": 41.893252,
   "longitude": -71.355883
 },
 {
   "stop_id": "72220",
   "stop_name": "NEWPORT NS MILL",
   "latitude": 41.895751,
   "longitude": -71.354223
 },
 {
   "stop_id": "72230",
   "stop_name": "ELMWOOD FS HANOVER",
   "latitude": 41.807309,
   "longitude": -71.424877
 },
 {
   "stop_id": "72240",
   "stop_name": "ELMWOOD OPP MOORE",
   "latitude": 41.804831,
   "longitude": -71.425529
 },
 {
   "stop_id": "72250",
   "stop_name": "ELMWOOD NS HAWTHORNE",
   "latitude": 41.800859,
   "longitude": -71.426567
 },
 {
   "stop_id": "72260",
   "stop_name": "ELMWOOD AT 635 ELMWOOD (FURNACE & DUCT SUPPLY CO.)",
   "latitude": 41.794744,
   "longitude": -71.424544
 },
 {
   "stop_id": "72270",
   "stop_name": "ELMWOOD NS PRINCETON",
   "latitude": 41.805262,
   "longitude": -71.425183
 },
 {
   "stop_id": "72300",
   "stop_name": "MARKET BASKET SOUTH ATTLEBORO",
   "latitude": 41.898866,
   "longitude": -71.35369
 },
 {
   "stop_id": "72305",
   "stop_name": "JEFFERSON BLVD NS CYPRESS",
   "latitude": 41.755179,
   "longitude": -71.438239
 },
 {
   "stop_id": "72310",
   "stop_name": "COLLYER AT JOB LOT",
   "latitude": 41.857002,
   "longitude": -71.40232
 },
 {
   "stop_id": "72330",
   "stop_name": "WESTMINSTER AT 1834 WESTMINSTER ST",
   "latitude": 41.816212,
   "longitude": -71.440336
 },
 {
   "stop_id": "72335",
   "stop_name": "GREENE ST NS SCHOOL ST",
   "latitude": 42.000829,
   "longitude": -71.578416
 },
 {
   "stop_id": "72340",
   "stop_name": "EDDY FS POINT",
   "latitude": 41.817536,
   "longitude": -71.40687
 },
 {
   "stop_id": "72345",
   "stop_name": "EDDY OPP SHIP",
   "latitude": 41.819252,
   "longitude": -71.407885
 },
 {
   "stop_id": "72350",
   "stop_name": "DORRANCE FS PINE",
   "latitude": 41.823029,
   "longitude": -71.410831
 },
 {
   "stop_id": "72355",
   "stop_name": "DYER FS FRIENDSHIP",
   "latitude": 41.823316,
   "longitude": -71.408182
 },
 {
   "stop_id": "72360",
   "stop_name": "GEORGE WATERMEN FS ARMENTO",
   "latitude": 41.842952,
   "longitude": -71.485495
 },
 {
   "stop_id": "72365",
   "stop_name": "NEW LONDON FS CHAPEL VIEW BLVD",
   "latitude": 41.756357,
   "longitude": -71.461752
 },
 {
   "stop_id": "72370",
   "stop_name": "MET SCHOOL NEWPORT",
   "latitude": 41.51407,
   "longitude": -71.313584
 },
 {
   "stop_id": "72380",
   "stop_name": "DOWLING VILLAGE BLVD AT SLEEPY'S",
   "latitude": 41.979707,
   "longitude": -71.508929
 },
 {
   "stop_id": "72385",
   "stop_name": "DOWLING VILLAGE BLVD @ LANDMARK MED",
   "latitude": 41.980639,
   "longitude": -71.512433
 },
 {
   "stop_id": "72390",
   "stop_name": "DOWLING VILLAGE @ CVS",
   "latitude": 41.980413,
   "longitude": -71.512371
 },
 {
   "stop_id": "72395",
   "stop_name": "DOWLING VILLAGE & EDDIE DOWLING",
   "latitude": 41.979554,
   "longitude": -71.509141
 },
 {
   "stop_id": "72400",
   "stop_name": "DOWLING VILLAGE OPP WALMART",
   "latitude": 41.97645,
   "longitude": -71.507058
 },
 {
   "stop_id": "72410",
   "stop_name": "JOHN CUMMINGS NS SOCIAL",
   "latitude": 42.007887,
   "longitude": -71.505392
 },
 {
   "stop_id": "72425",
   "stop_name": "ARMISTICE OPP ALEXANDER MCGREGOR",
   "latitude": 41.873902,
   "longitude": -71.340129
 },
 {
   "stop_id": "72430",
   "stop_name": "PUTNAM PIKE OPP LEVI LANE",
   "latitude": 41.870043,
   "longitude": -71.522106
 },
 {
   "stop_id": "72435",
   "stop_name": "PAWTUCKET OPP OFFICE PKWY",
   "latitude": 41.826065,
   "longitude": -71.353224
 },
 {
   "stop_id": "72445",
   "stop_name": "CHOPMIST HILL FIRE STA",
   "latitude": 41.815873,
   "longitude": -71.663297
 },
 {
   "stop_id": "72450",
   "stop_name": "ADMIRAL FS HEREFORD",
   "latitude": 41.848438,
   "longitude": -71.436924
 },
 {
   "stop_id": "72455",
   "stop_name": "ADMIRAL AT CARTERET",
   "latitude": 41.847718,
   "longitude": -71.435412
 },
 {
   "stop_id": "72460",
   "stop_name": "BROADWAY FS MAY",
   "latitude": 41.881566,
   "longitude": -71.377756
 },
 {
   "stop_id": "72465",
   "stop_name": "BROADWAY DFS ALLEN",
   "latitude": 41.883679,
   "longitude": -71.376714
 },
 {
   "stop_id": "72470",
   "stop_name": "TIDEWATER FS LONGMEADOW",
   "latitude": 41.705996,
   "longitude": -71.371295
 },
 {
   "stop_id": "72475",
   "stop_name": "TIDEWATER FS EHIPPLE",
   "latitude": 41.708385,
   "longitude": -71.373265
 },
 {
   "stop_id": "72480",
   "stop_name": "TIDEWATER FS RIVER VUE",
   "latitude": 41.7114,
   "longitude": -71.374942
 },
 {
   "stop_id": "72485",
   "stop_name": "TIDEWATER NS WEBB",
   "latitude": 41.71093,
   "longitude": -71.374858
 },
 {
   "stop_id": "72490",
   "stop_name": "TIDEWATER NS CLARA",
   "latitude": 41.707886,
   "longitude": -71.372983
 },
 {
   "stop_id": "72495",
   "stop_name": "TIDEWATER NS LONGMEADOW",
   "latitude": 41.705465,
   "longitude": -71.371054
 },
 {
   "stop_id": "72500",
   "stop_name": "LONGMEADOW NS DRAPER",
   "latitude": 41.704298,
   "longitude": -71.373742
 },
 {
   "stop_id": "72505",
   "stop_name": "DOUGLAS FS MANSFIELD",
   "latitude": 41.837661,
   "longitude": -71.423284
 },
 {
   "stop_id": "72510",
   "stop_name": "1A NS MAIN",
   "latitude": 41.81698,
   "longitude": -71.400208
 },
 {
   "stop_id": "72520",
   "stop_name": "WEYBOSSET FS EDDY",
   "latitude": 41.822617,
   "longitude": -71.411571
 },
 {
   "stop_id": "72525",
   "stop_name": "WEYBOSSET NS SNOW",
   "latitude": 41.820912,
   "longitude": -71.413148
 },
 {
   "stop_id": "72530",
   "stop_name": "SEEKONK SQUARE (COMMERCE WAY - SEEKONK)",
   "latitude": 41.795428,
   "longitude": -71.322655
 },
 {
   "stop_id": "72535",
   "stop_name": "JAMES FS TAUNTON",
   "latitude": 41.819968,
   "longitude": -71.375085
 },
 {
   "stop_id": "72540",
   "stop_name": "WAMPANOAG FS AMARAL",
   "latitude": 41.794488,
   "longitude": -71.349167
 },
 {
   "stop_id": "72550",
   "stop_name": "WAMPANOAG FS TRIPPS",
   "latitude": 41.795641,
   "longitude": -71.352418
 },
 {
   "stop_id": "72555",
   "stop_name": "RIVER FS MINK",
   "latitude": 41.788883,
   "longitude": -71.331974
 },
 {
   "stop_id": "72560",
   "stop_name": "HIGHLAND AT STATE LINE",
   "latitude": 41.804855,
   "longitude": -71.339646
 },
 {
   "stop_id": "72565",
   "stop_name": "EVERGREEN OPP HATTON",
   "latitude": 41.806426,
   "longitude": -71.344999
 },
 {
   "stop_id": "72570",
   "stop_name": "EVERGREEN NS HATTON",
   "latitude": 41.806558,
   "longitude": -71.345096
 },
 {
   "stop_id": "72575",
   "stop_name": "EVERGREEN NS JORDAN",
   "latitude": 41.803813,
   "longitude": -71.345048
 },
 {
   "stop_id": "72580",
   "stop_name": "HIGHLAND AT RI/MA STATE LINE",
   "latitude": 41.804656,
   "longitude": -71.339726
 },
 {
   "stop_id": "72585",
   "stop_name": "POINT FS EDDY",
   "latitude": 41.817111,
   "longitude": -71.405611
 },
 {
   "stop_id": "72590",
   "stop_name": "WICKENDEN FS S WATER",
   "latitude": 41.818819,
   "longitude": -71.40113
 },
 {
   "stop_id": "72600",
   "stop_name": "DYER NS PECK",
   "latitude": 41.822657,
   "longitude": -71.408365
 },
 {
   "stop_id": "72605",
   "stop_name": "WICKENDEN NS S WATER",
   "latitude": 41.818866,
   "longitude": -71.401659
 },
 {
   "stop_id": "72610",
   "stop_name": "POINT NS EDDY",
   "latitude": 41.817223,
   "longitude": -71.405724
 },
 {
   "stop_id": "72700",
   "stop_name": "BELLEVUE AT LEDGE (drop off only)",
   "latitude": 41.455761,
   "longitude": -71.30827
 },
 {
   "stop_id": "place_brpa",
   "stop_name": "brewery parkade",
   "latitude": 41.795793,
   "longitude": -71.444103
 },
 {
   "stop_id": "place_kepl",
   "stop_name": "kennedy plaza - providence",
   "latitude": 41.825054,
   "longitude": -71.411571
 },
 {
   "stop_id": "place_tfgr",
   "stop_name": "t.f. green airport",
   "latitude": 41.72573,
   "longitude": -71.436812
 }
];
	var largeInfowindow = new google.maps.InfoWindow();
	for(var i = 0, len = stops.length; i < len; i++) {
		var marker = new google.maps.Marker({
    		position: {lat: stops[i].latitude, lng: stops[i].longitude},
    		map: map,
    		title: stops[i].stop_name + " " + stops[i].stop_id
  		});

  		markers.push(marker);
          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
          });
	}
	 document.getElementById('show-listings').addEventListener('click', showListings);
     document.getElementById('hide-listings').addEventListener('click', hideListings);
}


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

function showListings() {
        var bounds = new google.maps.LatLngBounds();
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
          bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
      }
// This function will loop through the listings and hide them all.
function hideListings() {
	for (var i = 0; i < markers.length; i++) {
 		markers[i].setMap(null);
	}
}
