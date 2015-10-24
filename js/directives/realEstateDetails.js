App.directive("realEstateDetails", [
  function() {
    return {
      scope: {
        realEstate: "="
      },
      replace: true,
      templateUrl: "templates/real-estate-details.html"
    };
  }
]);
