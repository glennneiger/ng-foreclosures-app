App.controller("MapSearchViewController", [
  "$scope",
  "realEstatesRepository",
  "realEstatesSrv",
  function($scope, realEstatesRepository, realEstatesSrv) {

    realEstatesRepository.getAll(function(realEstatesJson) {
      console.log('loaded', realEstatesJson);

      // TODO: implement realEstatesSrv
      //realEstatesSrv.setAll(realEstatesJson);
    });

    $scope.realEstatesSrv = realEstatesSrv;
  }
]);
