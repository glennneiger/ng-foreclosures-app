App.factory("GoogleMap", [
  function() {
    var gm = google.maps;

    var Marker = function(googleMarker, object) {
      this._marker = googleMarker;
      this._object = object;
    };

    Marker.prototype.on = function(eventName, listenerFn) {
      var that = this;
      this._marker.addListener(eventName, function() {
        listenerFn.call(that._marker, that._object)
      });
    };

    var GoogleMap = function(element, options) {
      this._map = new gm.Map(element[0], {
        center: {lat: 52.14, lng: 21.0},
        zoom: 6
      });
      this._markers = [];
      this._latLngs = [];
    };

    GoogleMap.prototype.addMarker = function(object) {
      var latLng = {lat: object.lat, lng: object.lng};
      this._latLngs.push(latLng);
      var marker = new gm.Marker({
        position: latLng,
        map: this._map,
        title: object.title
      });
      this._markers.push(marker);
      return new Marker(marker, object);
    };

    GoogleMap.prototype.fitMarkerBounds = function() {
      var lats = _(this._latLngs).pluck("lat");
      var lngs = _(this._latLngs).pluck("lng");
      var south = _(lats).min();
      var north = _(lats).max();
      var east = _(lngs).max();
      var west = _(lats).min();
      var bounds = new gm.LatLngBounds(new gm.LatLng(south, west), new gm.LatLng(north, east));
      this._map.fitBounds(bounds);
    };

    return GoogleMap;
  }
]);
