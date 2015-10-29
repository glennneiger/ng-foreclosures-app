describe("realEstatesSrv", function() {
  var realEstatesSrv;

  beforeEach(function() {
    realEstatesSrv = $h.$inject("realEstatesSrv");
  });

  describe("default values", function() {
    it("should have null realEstates property", function() {
      expect(realEstatesSrv.realEstates).toBeNull();
    });

    it("should return array 10 players", function() {
      expect(realEstatesSrv.selectedRealEstate).toBeNull();
    });
  });

  xdescribe("setAll()", function() {
    var realEstates;

    beforeEach(function() {
      realEstates = sinon.mock([]);
      realEstatesSrv.setAll();
    });

    it("should have null realEstates property", function() {
      expect(realEstatesSrv.realEstates).toBeNull();
    });

    it("should return array 10 players", function() {
      expect(realEstatesSrv.selectedRealEstate).toBeNull();
    });
  });
});
