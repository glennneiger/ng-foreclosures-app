App.directive("googleMap", [
  "GoogleMap",
  function(GoogleMap) {

    // TODO: create map
    //var map = new GoogleMap(element);

    // TODO 2: add markers to map
    //var marker = map.createMarker(geoLocation);

    // TODO 3: handle marker click event - emit ng event
    //marker.on("click", function(geoLocation) {
    //});

    return {
      restrict: "E",
      replace: true
    };
  }
]);
