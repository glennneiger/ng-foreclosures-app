// TODO 1: create map
//var map = new GoogleMap(element);

// TODO 2: add markers to map
//var marker = map.createMarker(geoLocation);

// TODO 3: handle marker click event - emit ng event
//marker.on("click", function(geoLocation) {
//});

// TODO 4: switch highlight on/off: marker.togglHighlight(true/false)


App.directive("googleMap", [
  "GoogleMap",
  function(GoogleMap) {

    return {
      restrict: "E",
      replace: true
    };

  }
]);
