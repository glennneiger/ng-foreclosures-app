App.factory("realEstatesSrv", [
  function() {

    return {
      realEstates: null,
      selectedRealEstate: null,
      setAll: function(realEstates) {
        this.realEstates = realEstates;
      },
      toggleSelected: function(realEstate) {
        if (this.selectedRealEstate === realEstate)
          this.selectedRealEstate = null;
        else
          this.selectedRealEstate = realEstate;
      },
      isSelected: function(realEstate) {
        return this.selectedRealEstate === realEstate;
      }
    };
  }
]);
