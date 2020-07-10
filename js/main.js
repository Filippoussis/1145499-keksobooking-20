'use strict';

(function () {

  window.map.deActivate();

  window.form.setStartValueAddress();

  window.valid.checkRoomsAndGuests();
  window.valid.checkTimeInOut();
  window.valid.checkMinPriceOnTypeHouse();

  var getPins = function () {
    window.backend.load(window.load, window.error);
  };

  window.main = {
    getPins: getPins,
  };

})();
