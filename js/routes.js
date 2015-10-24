App.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    // TODO: add states:
    // data-table
    // google-map
    // map-search

    $stateProvider.state('dashboard', {
      url: "/",
      templateUrl: "views/dashboard-view.html",
      controller: "DashboardViewController"
    }).state('other', {
      url: "/other",
      templateUrl: "views/other-view.html",
      controller: "OtherViewController"
    });

  }
]);
