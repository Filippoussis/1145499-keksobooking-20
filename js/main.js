'use strict';

(function () {

  var mainForm = document.querySelector('.ad-form');
  var mapFilter = document.querySelector('.map__filters');

  window.move.startPosition();
  window.form.startValueAddress();

  window.form.activate(mainForm, false);
  window.form.activate(mapFilter, false);

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
