'use strict';

window.form = (function () {

  var mainForm = document.querySelector('.ad-form');
  var numberRooms = mainForm.querySelector('#room_number');
  var capacity = mainForm.querySelector('#capacity');

  numberRooms.addEventListener('change', function () {
    capacity.setCustomValidity('');
    if (Number(numberRooms.value) < Number(capacity.value)) {
      numberRooms.setCustomValidity('Количество комнат должно быть больше или равно количеству гостей');
    } else if (Number(numberRooms.value) === 100 && Number(capacity.value) !== 0) {
      numberRooms.setCustomValidity('100 комнат не предназначены для гостей');
    } else if (Number(numberRooms.value) !== 100 && Number(capacity.value) === 0) {
      numberRooms.setCustomValidity('Комнаты предназначены только для гостей');
    } else {
      numberRooms.setCustomValidity('');
    }
    numberRooms.reportValidity();
  });

  capacity.addEventListener('change', function () {
    numberRooms.setCustomValidity('');
    if (Number(capacity.value) > Number(numberRooms.value)) {
      capacity.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат');
    } else if (Number(capacity.value) === 0 && Number(numberRooms.value) !== 100) {
      capacity.setCustomValidity('Не для гостей предназначены 100 комнат');
    } else if (Number(capacity.value) !== 0 && Number(numberRooms.value) === 100) {
      capacity.setCustomValidity('Гостям не предназначены 100 комнат');
    } else {
      capacity.setCustomValidity('');
    }
    capacity.reportValidity();
  });

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

  var changeMinPriceOnTypeHouse = function () {
    var typeHouse = mainForm.querySelector('#type');
    var minPriceHouse = mainForm.querySelector('#price');

    typeHouse.addEventListener('change', function () {
      var minPriceValue = window.mocks.minPrice[typeHouse.value];
      minPriceHouse.min = minPriceValue;
      minPriceHouse.placeholder = minPriceValue;
    });
  };

  changeMinPriceOnTypeHouse();

})();
