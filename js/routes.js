App.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    var CTRL_TEMPLATES_DIR = "views/";
    var ctrlTemplateUrl = function(url) {
      return CTRL_TEMPLATES_DIR + url + ".html";
    };

    $urlRouterProvider.otherwise("/");
    $stateProvider.state('data-table', {
      url: "/",
      templateUrl: ctrlTemplateUrl("data-table-view"),
      controller: "DataTableViewController"
    }).state('map-search', {
      url: "/map-search",
      templateUrl: ctrlTemplateUrl("map-search-view"),
      controller: "MapSearchViewController"
    }).state('datepicker', {
      url: "/datepicker",
      templateUrl: ctrlTemplateUrl("datepicker-view"),
      controller: "DatePickerViewController"
    }).state('google-map', {
      url: "/google-map",
      templateUrl: ctrlTemplateUrl("google-map-view"),
      controller: "GoogleMapViewController"
    });

  }
]);
