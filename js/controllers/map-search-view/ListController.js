App.controller("ListController", [
  "$scope",
  "realEstatesSrv",
  function($scope, realEstatesSrv) {
    $scope.listHeaders = [
      {value: "street", text: "Ulica"},
      {value: "lat", text: "Szerokość geo."},
      {value: "lng", text: "Wysokość geo."},
      {value: "price", text: "Cena"},
    ];

    $scope.onRealEstateClick = function(realEstate) {
      realEstatesSrv.toggleSelected(realEstate);
    };
  }
]);
