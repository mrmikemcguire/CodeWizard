var difficulty;
var d = document.getElementById("difficulty");

function $(id)
	{
   	return document.getElementById(id);
	}

var you = {};
var map = {};

function setDiff1()
    {
    difficulty = 7;
    }

function setDiff2()
    {
    difficulty = 8;
    }

function setDiff3()
    {
    difficulty = 9;
    }

function setDiff4()
    {
    difficulty = 10;
    }

function setDiff5()
    {
    difficulty = 11;
    }


function getLoc() 
	{
    var latitude = (Math.random() * 4) + 37;
    var longitude = (Math.random() * -7) - 102; 

	var mygps = navigator.geolocation;
	mygps.getCurrentPosition(function(position)
		{
		var mylatitude = position.coords.latitude;
		var mylongitude = position.coords.longitude;

        function distance(lat1, lon1, lat2, lon2) 
	{
	var R = 6371;
	var a = 
	 0.5 - Math.cos((lat2 - lat1) * Math.PI / 180)/2 + 
	 Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
	 (1 - Math.cos((lon2 - lon1) * Math.PI / 180))/2;
	return R * 2 * Math.asin(Math.sqrt(a));
	}
        
		var distance = distance(mylatitude, mylongitude, latitude, longitude);
        distance = Math.round(distance);
		jQuery("#buttons").replaceWith("<h3>Miles from your current location:</h3>");
        jQuery("#mileage").append(distance);
		});

	var gps = navigator.geolocation;
	gps.getCurrentPosition(function(position)
		{
		var latLng = new google.maps.LatLng(latitude, longitude);
		var opts = {zoom:difficulty, center:latLng, mapTypeId: google.maps.MapTypeId.ROADMAP};
		map = new google.maps.Map($("map_canvas"), opts);
		you = new google.maps.Marker(
				{
				position: latLng,
				map: map,
				title: "Your current location"
				});
		var infowindow = new google.maps.InfoWindow(
			{
			map: map,
			position: latLng,
			content: 'Where is this?'
			});
		});
	}

function distance(lat1, lon1, lat2, lon2) 
	{
	var R = 6371;
	var a = 
	 0.5 - Math.cos((lat2 - lat1) * Math.PI / 180)/2 + 
	 Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
	 (1 - Math.cos((lon2 - lon1) * Math.PI / 180))/2;
	return R * 2 * Math.asin(Math.sqrt(a));
	}

       