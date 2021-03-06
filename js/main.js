'use strict';

(function () {

  window.map.deActivate();

  window.move.setStartValueAddress();

  window.validity.checkRoomsAndGuests();
  window.validity.checkTimeInOut();
  window.validity.checkMinPriceOnTypeHouse();

  var getPins = function () {
    window.backend.load(window.filter, window.error);
  };

  window.main = {
    getPins: getPins,
  };

})();
