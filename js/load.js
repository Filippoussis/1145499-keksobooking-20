'use strict';

(function () {

  var FilterPrice = {
    MIN: 10000,
    MAX: 50000,
  };

  var ads = [];

  var mapFilters = document.querySelector('.map__filters');
  var housingType = document.querySelector('#housing-type');
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var housingPrice = document.querySelector('#housing-price');
  var housingFeatures = document.querySelector('#housing-features');

  mapFilters.addEventListener('change', window.debounce(function () {
    updatePins();
  }));

  /**
   * фильтрация пинов с последующей отрисовкой на странице пользователя
   */
  var updatePins = function () {

    var someFilters = ads.filter(function (ad) {
      if (housingType.value === 'any') {
        var type = true;
      } else {
        type = ad.offer.type === housingType.value;
      }

      if (housingRooms.value === 'any') {
        var rooms = true;
      } else {
        rooms = ad.offer.rooms === Number(housingRooms.value);
      }

      if (housingGuests.value === 'any') {
        var guests = true;
      } else {
        guests = ad.offer.guests === Number(housingGuests.value);
      }

      if (housingPrice.value === 'any') {
        var price = true;
      } else if (housingPrice.value === 'middle') {
        price = ad.offer.price >= FilterPrice.MIN && ad.offer.price <= FilterPrice.MAX;
      } else if (housingPrice.value === 'low') {
        price = ad.offer.price < FilterPrice.MIN;
      } else if (housingPrice.value === 'high') {
        price = ad.offer.price > FilterPrice.MAX;
      }

      var selectedCheckBoxes = housingFeatures.querySelectorAll('input[name="features"]:checked');

      var checkedValues = Array.from(selectedCheckBoxes).map(function (it) {
        return it.value;
      });

      var newArr = checkedValues.filter(function (it) {
        return ad.offer.features.includes(it);
      });

      if (!checkedValues.length) {
        var features = true;
      } else {
        features = newArr.length === checkedValues.length;
      }

      return type && rooms && guests && price && features;
    });

    window.pin.render(someFilters);
  };

  /**
   * полученние данных с сервера
   * @param {Array} data - данные с сервера
   */
  var onSuccess = function (data) {
    ads = data;
    window.pin.render(ads);
  };

  window.load = {
    success: onSuccess,
  };

})();
