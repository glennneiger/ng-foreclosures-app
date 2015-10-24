App.controller("MapController", [
  "$scope",
  "realEstatesSrv",
  function($scope, realEstatesSrv) {

    $scope.$on("google-map:marker:click", function(event, realEstate) {
      realEstatesSrv.toggleSelected(realEstate);
    });

  }
]);
