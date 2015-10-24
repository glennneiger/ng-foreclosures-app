App.filter("realEstateType", [
  function() {
    var TYPES_MAP = {
      "RES": "Residential",
      "COM": "Commercial",
      "IND": "Industrial",
      "AGR": "Agriculture",
      "SP": "Special - purpose"
    };

    return function(typeCode) {
      return TYPES_MAP[typeCode];
    };
  }
]);
