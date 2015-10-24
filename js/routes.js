App.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    var CTRL_TEMPLATES_DIR = "views/";
    var ctrlTemplateUrl = function(url) {
      return CTRL_TEMPLATES_DIR + url + ".html";
    };

    $urlRouterProvider.otherwise("/");
    $stateProvider.state('dashboard', {
      url: "/",
      templateUrl: ctrlTemplateUrl("dashboard-view"),
      controller: "DashboardViewController"
    }).state('other', {
      url: "/other",
      templateUrl: ctrlTemplateUrl("other-view"),
      controller: "OtherViewController"
    }).state('data-table', {
      url: "/data-table",
      templateUrl: ctrlTemplateUrl("data-table-view"),
      controller: "DataTableViewController"
    }).state('map-search', {
      url: "/map-search",
      templateUrl: ctrlTemplateUrl("map-search-view"),
      controller: "MapSearchViewController"
    }).state('google-map', {
      url: "/google-map",
      templateUrl: ctrlTemplateUrl("google-map-view"),
      controller: "GoogleMapViewController"
    });

  }
]);
