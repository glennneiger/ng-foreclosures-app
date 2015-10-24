App.controller("DashboardViewController", [
  "$scope",
  function($scope) {

    $scope.views = [
      {url: "dashboard", name: "dashboard"},
      {url: "other", name: "other"},
      {url: "data-table", name: "data"},
      {url: "google-map", name: "google"},
      {url: "map-search", name: "map"}
    ];
  }
]);
