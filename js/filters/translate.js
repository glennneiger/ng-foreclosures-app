App.filter("translate", [
  function() {
    var TRANSLATIONS = {
      'realEstate.street': "Ulica",
      'realEstate.latitude': "Szerokosc",
      'realEstate.longitude': "Wysokosc",
      'realEstate.price': "Cena",
      'realEstate.type': "Typ",
      'realEstate.builtOn': "Data budowy"
    };

    return function(text) {
      if (text)
        return TRANSLATIONS[text];
      else
        return "";
    };
  }
]);
