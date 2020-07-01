'use strict';

(function () {

  var mainForm = document.querySelector('.ad-form');
  var numberRooms = mainForm.querySelector('#room_number');
  var capacity = mainForm.querySelector('#capacity');

  numberRooms.addEventListener('change', function () {
    numberRooms.setCustomValidity('');
    if (!window.data.Rooms[numberRooms.value].includes(capacity.value)) {
      numberRooms.setCustomValidity('Количество комнат должно быть больше или равно количеству гостей, а 100 комнат - не для гостей');
    }
    numberRooms.reportValidity();
  });

  capacity.addEventListener('change', function () {
    capacity.setCustomValidity('');
    if (!window.data.Rooms[numberRooms.value].includes(capacity.value)) {
      capacity.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат, а не гостям - 100 комнат');
    }
    capacity.reportValidity();
  });

  /**
    * добавляет обработчик событий на поле выбора времени заезда/выезда
    */
  var changeTimeInOut = function () {
    var timeIn = mainForm.querySelector('#timein');
    var timeOut = mainForm.querySelector('#timeout');

    timeIn.addEventListener('change', function () {
      timeOut.value = timeIn.value;
    });

    timeOut.addEventListener('change', function () {
      timeIn.value = timeOut.value;
    });
  };

  changeTimeInOut();

  /**
    * добавляет обработчик событий на поле выбора типа жилья
    */
  var changeMinPriceOnTypeHouse = function () {
    var typeHouse = mainForm.querySelector('#type');
    var minPriceHouse = mainForm.querySelector('#price');

    typeHouse.addEventListener('change', function () {
      var minPriceValue = window.data.minPrice[typeHouse.value];
      minPriceHouse.min = minPriceValue;
      minPriceHouse.placeholder = minPriceValue;
    });
  };

  changeMinPriceOnTypeHouse();

})();
