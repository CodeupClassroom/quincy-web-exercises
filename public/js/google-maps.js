"use strict";
(function() {
  function doSomeThingWithGeodingResults(results, status) {
    // Check for a successful result
    if (status == google.maps.GeocoderStatus.OK) {

      console.log('Geocoding finished!');
      console.log(results, status);

      var ul = document.getElementById('results');

      results.forEach(function(result) {
        // Create lat and long for our marker position
        var position = result.geometry.location;

        // Add the marker to our existing map
        var marker = new google.maps.Marker({
          position: position,
          map: map
        });

        // create a list item and append it to the results ul
        var listItem = '<li>' + result.formatted_address + '</li>';
        ul.innerHTML += listItem;
      });

      // Recenter the map over the address
      map.setCenter(results[0].geometry.location);

    } else {
      // Show an error message with the status if our request fails
      alert("Geocoding was not successful - STATUS: " + status);
    }
  }

  // this needs to exist on our html page and have a height and a width
  var mapElement = document.getElementById('map');

  var mapOptions = {
    // Set the zoom level
    zoom: 3,

    // This sets the center of the map at our location
    center: {
      lat:  29.426791,
      lng: -98.489602
    },
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  var map = new google.maps.Map(mapElement, mapOptions);

  var geocoder = new google.maps.Geocoder();

  var geocoderOptions = {
    address: prompt('What location would you like to search for?'),
  };

  console.log('Before geocoding.');

  // referencing a function defined ahead of time
  geocoder.geocode(geocoderOptions, doSomeThingWithGeodingResults);

  console.log('This code comes after the geocoding request!');


})();
