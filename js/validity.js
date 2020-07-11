'use strict';

(function () {

  var MAIN_FORM = document.querySelector('.ad-form');

  var Count = {
    ROOMS: MAIN_FORM.querySelector('#room_number'),
    GUESTS: MAIN_FORM.querySelector('#capacity'),
  };

  var Time = {
    IN: MAIN_FORM.querySelector('#timein'),
    OUT: MAIN_FORM.querySelector('#timeout'),
  };

  var House = {
    TYPE: MAIN_FORM.querySelector('#type'),
    PRICE: MAIN_FORM.querySelector('#price'),
  };

  var roomsAndGuests = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['100'],
  };

  var housesAndPrices = {
    'bungalo': '0',
    'flat': '1000',
    'house': '5000',
    'palace': '10000',
  };

  /**
   * валидация формы по полям Количество комнат / Количество гостей
   */
  var checkRoomsAndGuests = function () {
    Count.ROOMS.addEventListener('change', function () {
      Count.ROOMS.setCustomValidity('');
      if (!roomsAndGuests[Count.ROOMS.value].includes(Count.GUESTS.value)) {
        Count.ROOMS.setCustomValidity('Количество комнат должно быть больше или равно количеству гостей, а 100 комнат - не для гостей');
      } else {
        Count.GUESTS.setCustomValidity('');
      }
      Count.ROOMS.reportValidity();
    });

    Count.GUESTS.addEventListener('change', function () {
      Count.GUESTS.setCustomValidity('');
      if (!roomsAndGuests[Count.ROOMS.value].includes(Count.GUESTS.value)) {
        Count.GUESTS.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат, а не гостям - 100 комнат');
      } else {
        Count.ROOMS.setCustomValidity('');
      }
      Count.GUESTS.reportValidity();
    });
  };

  /**
   * валидация формы по полям Время заезда / выезда
   */
  var checkTimeInOut = function () {
    Time.IN.addEventListener('change', function () {
      Time.OUT.value = Time.IN.value;
    });

    Time.OUT.addEventListener('change', function () {
      Time.IN.value = Time.OUT.value;
    });
  };

  /**
   * валидация формы по полям Тип жилья / Минимальная стоимость
   */
  var checkMinPriceOnTypeHouse = function () {
    House.TYPE.addEventListener('change', function () {
      var minPriceValue = housesAndPrices[House.TYPE.value];
      House.PRICE.min = minPriceValue;
      House.PRICE.placeholder = minPriceValue;
    });
  };

  /**
   * сброс placeholder до дефолтного значения
   */
  var resetMinPriceOnTypeHouse = function () {
    House.PRICE.placeholder = housesAndPrices[House.TYPE.value];
  };

  window.validity = {
    checkRoomsAndGuests: checkRoomsAndGuests,
    checkTimeInOut: checkTimeInOut,
    checkMinPriceOnTypeHouse: checkMinPriceOnTypeHouse,
    reset: resetMinPriceOnTypeHouse,
  };

})();
