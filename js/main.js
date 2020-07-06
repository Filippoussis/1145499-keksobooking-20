'use strict';

(function () {

  var mainForm = document.querySelector('.ad-form');
  var mapFilter = document.querySelector('.map__filters');

  window.form.setStartValueAddress();

  window.form.activate(mainForm, false);
  window.form.activate(mapFilter, false);

  window.valid.checkRoomsAndGuests();
  window.valid.checkTimeInOut();
  window.valid.checkMinPriceOnTypeHouse();

  var getPins = function () {
    window.backend.load(window.load.success, window.error.on);
  };

  window.main = {
    getPins: getPins,
  };

})();
