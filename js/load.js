'use strict';

(function () {

  var housingType = document.querySelector('#housing-type');
  housingType.addEventListener('change', function () {
    updatePins();
  });

  var ads = [];


  var updatePins = function () {
    if (housingType.value !== 'any') {
      window.pin.render(ads.slice().filter(function (ad) {
        return ad.offer.type === housingType.value;
      }));
    } else {
      window.pin.render(ads);
    }
  };

  var onSuccess = function (data) {
    ads = data;
    window.pin.render(ads);
  };

  window.load = {
    success: onSuccess,
    updatePins: updatePins,
  };

})();
