App.controller("DataTableViewController", [
  "$scope",
  function($scope) {

    $scope.superHeroes = [
      {id: 100, name: "Batman", secretIdentity: "Bruce Wayne", universe: "DC"},
      {id: 101, name: "Superman", secretIdentity: "Clark Kent", universe: "DC"},
      {id: 102, name: "Spider-Man", secretIdentity: "Peter Parker", universe: "Marvel"},
      {id: 103, name: "Wolverine", secretIdentity: "Logan", universe: "Marvel"}
    ];

    $scope.tableHeaders = [
      {value: "universe", text: "Comic Universe"},
      {value: "name", text: "Hero Name"},
      {value: "secretIdentity", text: "True Identity"}
    ];

    $scope.onHeroClick = function(superHero) {
      console.log("clicked super hero", superHero);
      $scope.selectedHero = superHero;
    };
  }
]);
