'use strict';

(function () {

  var mainForm = document.querySelector('.ad-form');
  var numberRooms = mainForm.querySelector('#room_number');
  var numberGuests = mainForm.querySelector('#capacity');

  /**
   * валидация формы по полям Количество комнат / Количество гостей
   */
  var checkRoomsAndGuests = function () {
    numberRooms.addEventListener('change', function () {
      numberRooms.setCustomValidity('');
      if (!window.data.Rooms[numberRooms.value].includes(numberGuests.value)) {
        numberRooms.setCustomValidity('Количество комнат должно быть больше или равно количеству гостей, а 100 комнат - не для гостей');
      }
      numberRooms.reportValidity();
    });

    numberGuests.addEventListener('change', function () {
      numberGuests.setCustomValidity('');
      if (!window.data.Rooms[numberRooms.value].includes(numberGuests.value)) {
        numberGuests.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат, а не гостям - 100 комнат');
      }
      numberGuests.reportValidity();
    });
  };

  /**
   * валидация формы по полям Время заезда / выезда
   */
  var checkTimeInOut = function () {
    var timeIn = mainForm.querySelector('#timein');
    var timeOut = mainForm.querySelector('#timeout');

    timeIn.addEventListener('change', function () {
      timeOut.value = timeIn.value;
    });

    timeOut.addEventListener('change', function () {
      timeIn.value = timeOut.value;
    });
  };

  /**
   * валидация формы по полям Тип жилья / Минимальная стоимость
   */
  var checkMinPriceOnTypeHouse = function () {
    var typeHouse = mainForm.querySelector('#type');
    var minPriceHouse = mainForm.querySelector('#price');

    typeHouse.addEventListener('change', function () {
      var minPriceValue = window.data.minPrice[typeHouse.value];
      minPriceHouse.min = minPriceValue;
      minPriceHouse.placeholder = minPriceValue;
    });
  };

  window.valid = {
    checkRoomsAndGuests: checkRoomsAndGuests,
    checkTimeInOut: checkTimeInOut,
    checkMinPriceOnTypeHouse: checkMinPriceOnTypeHouse,
  };

})();
