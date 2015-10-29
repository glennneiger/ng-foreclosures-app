var $h = {};

beforeEach(function() {
  module('Ng-RealEstates-App', function($provide) {
    $h.$provide = $provide;
  });
});

beforeEach(function() {
  inject(function($httpBackend, $compile, $rootScope, $controller, $location, $injector, $timeout, $filter) {
    $h.$scope = $rootScope.$new();
    $h.$http = $httpBackend;
    $h.$location = $location;
    $h.$timeout = $timeout;
    $h.$filter = $filter;
    $h.$injector = $injector;

    $h.$compile = function(html, scope) {
      var linkFn = $compile(html);
      return linkFn($h.$scope);
    };

    var ctrlDefaultDependencies = {
      "$scope": $h.$scope
    };
    $h.$controller = function(id, dependencies) {
      $controller(id, _(ctrlDefaultDependencies).extend(dependencies || {}));
    };

    $h.$inject = function(name, dependencies) {
      for (var id in dependencies || {}) {
        var mock = dependencies[id];
        $h.$provide.value(id, mock);
      }
      return $h.$injector.get(name);
    };

    $h.$digest = function() {
      $h.$scope.$digest();
    };
    //$h.sandbox = sinon.sandbox.create();
  });

});

afterEach(function() {
  $h.$http.resetExpectations();
  $h.$http.verifyNoOutstandingExpectation();
});
