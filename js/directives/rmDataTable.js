App.directive("rmDataTable", [
  function() {
    return {
      replace: true,
      restrict: "E",
      scope: {
        items: "=",
        selectedItem: "=",
        headers: "=",
        itemClick: "&"
      },
      templateUrl: "templates/rmDataTable.html"
    };
  }
]);
