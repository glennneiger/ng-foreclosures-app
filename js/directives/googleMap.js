App.directive("googleMap", [
  "GoogleMap",
  function(GoogleMap) {

    var link = function(scope, element) {
      var map = new GoogleMap(element);

      scope.$watch("markers", function() {
        if (scope.markers) {
          for (var i = 0; i < scope.markers.length; i++) {
            var object = scope.markers[i];
            var marker = map.addMarker(object);
            marker.on("click", function(obj) {
              scope.$emit("google-map:marker:click", obj);
              scope.$apply();
            });
          }
          //map.fitMarkerBounds();
        }
      });
    };

    return {
      scope: {
        markers: "="
      },
      restrict: "E",
      replace: true,
      link: link,
      templateUrl: "templates/googleMap.html"
    };
  }
]);
