/*!
 *  Grove 3.3.6-v1
 *
 *  Copyright 2015 HackerThemes
 *  http://hackerthemes.com
 *
 */

var map;

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(53.545989,9.961596),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    backgroundColor: "#e8e8e8",
    draggable: false
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);