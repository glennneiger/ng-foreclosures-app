App.factory("realEstatesRepository", [
  "$http",
  function($http) {
    function getAll(onFulfilled) {
      var deferred = $http({method: "GET", url: "server/realEstates.json"});
      deferred.success(function(realEstates) {
        _(realEstates).each(function(realEstate) {
          realEstate.builtAt = new Date(realEstate.builtAt);
        });
        onFulfilled(realEstates);
      });
      deferred.error(function(err) {
        console.error(err);
      });
      return deferred.promise;
    }

    return {
      getAll: getAll
    };
  }
]);
