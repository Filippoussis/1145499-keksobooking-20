'use strict';

(function () {

  var MAIN_FORM = document.querySelector('.ad-form');

  var Number = {
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

  var ROOMS_AND_GUESTS = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['100'],
  };

  var HOUSES_AND_PRICES = {
    'bungalo': '0',
    'flat': '1000',
    'house': '5000',
    'palace': '10000',
  };

  /**
   * валидация формы по полям Количество комнат / Количество гостей
   */
  var checkRoomsAndGuests = function () {
    Number.ROOMS.addEventListener('change', function () {
      Number.ROOMS.setCustomValidity('');
      if (!ROOMS_AND_GUESTS[Number.ROOMS.value].includes(Number.GUESTS.value)) {
        Number.ROOMS.setCustomValidity('Количество комнат должно быть больше или равно количеству гостей, а 100 комнат - не для гостей');
      } else {
        Number.GUESTS.setCustomValidity('');
      }
      Number.ROOMS.reportValidity();
    });

    Number.GUESTS.addEventListener('change', function () {
      Number.GUESTS.setCustomValidity('');
      if (!ROOMS_AND_GUESTS[Number.ROOMS.value].includes(Number.GUESTS.value)) {
        Number.GUESTS.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат, а не гостям - 100 комнат');
      } else {
        Number.ROOMS.setCustomValidity('');
      }
      Number.GUESTS.reportValidity();
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
      var minPriceValue = HOUSES_AND_PRICES[House.TYPE.value];
      House.PRICE.min = minPriceValue;
      House.PRICE.placeholder = minPriceValue;
    });
  };

  window.validity = {
    checkRoomsAndGuests: checkRoomsAndGuests,
    checkTimeInOut: checkTimeInOut,
    checkMinPriceOnTypeHouse: checkMinPriceOnTypeHouse,
  };

})();
