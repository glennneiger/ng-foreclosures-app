App.filter("percentage", [
  "$filter",
  function($filter) {
    var SYMBOL = "%";
    var numberFilter = $filter("number");

    return function(text, fractionSize) {
      if (text)
        return numberFilter(text, fractionSize) + SYMBOL;
      else
        return SYMBOL;
    };
  }
]);
