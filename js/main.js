'use strict';

(function () {

  window.valid.roomsAndGuests();
  window.valid.timeInOut();
  window.valid.minPriceOnTypeHouse();

  var getPins = function () {
    window.backend.load(window.load.success, window.error.on);
  };

  window.main = {
    getPins: getPins,
  };

})();
