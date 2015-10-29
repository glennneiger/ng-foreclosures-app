describe("realEstatesSrv", function() {
  var realEstatesSrv;
  var realEstates;

  beforeEach(function() {
    realEstatesSrv = $h.$inject("realEstatesSrv");
    realEstates = [sinon.mock({}), sinon.mock({}), sinon.mock({})];
  });

  xdescribe("default values", function() {
    it("should have null realEstates property", function() {
      expect(realEstatesSrv.realEstates).toBeNull();
    });

    it("should have null selectedRealEstate property", function() {
      expect(realEstatesSrv.selectedRealEstate).toBeNull();
    });
  });

  xdescribe("setAll()", function() {

    beforeEach(function() {
      realEstatesSrv.setAll(realEstates);
    });

    it("should set realEstates property", function() {
      expect(realEstatesSrv.realEstates).toBe(realEstates);
    });
  });

  xdescribe("toggleSelected()", function() {
    var selected;

    beforeEach(function() {
      selected = realEstates[0];
      realEstatesSrv.toggleSelected(selected);
    });

    it("should set selectedRealEstate property", function() {
      expect(realEstatesSrv.selectedRealEstate).toBe(selected);
    });

    it("should set selectedRealEstate to null when called again with same realEstate", function() {
      realEstatesSrv.toggleSelected(selected);
      expect(realEstatesSrv.selectedRealEstate).toBeNull();
    });
  });

  xdescribe("isSelected()", function() {
    var selected;
    var other;

    beforeEach(function() {
      selected = realEstates[0];
      other = realEstates[1];
      realEstatesSrv.toggleSelected(selected);
    });

    it("should be true for selected realEstate", function() {
      expect(realEstatesSrv.isSelected(selected)).toBe(true);
    });

    it("should be false for any other not selected realEstate", function() {
      expect(realEstatesSrv.isSelected(other)).toBe(false);
    });
  });
});
