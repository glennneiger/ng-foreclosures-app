App.factory("RealEstate", [
  function() {
    var MILLISECONDS_IN_YEAR = 365 * 24 * 60 * 60;

    var RealEstate = function(attributes) {
      this._attrs = attributes;
    };

    RealEstate.prototype.getAge = function() {
      var diff = Date.now() - Date.parse(this._attrs.builtAt);
      return diff / MILLISECONDS_IN_YEAR;
    };

    return RealEstate;
  }
]);
