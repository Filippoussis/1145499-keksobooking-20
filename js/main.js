'use strict';

(function () {

  window.map.deActivate();

  window.form.setStartValueAddress();

  window.validity.checkRoomsAndGuests();
  window.validity.checkTimeInOut();
  window.validity.checkMinPriceOnTypeHouse();

  var getPins = function () {
    window.backend.load(window.load, window.error);
  };

  window.main = {
    getPins: getPins,
  };

})();
