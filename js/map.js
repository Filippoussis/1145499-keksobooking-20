'use strict';

window.map = (function () {

  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');

  var mainForm = document.querySelector('.ad-form');
  var mapFilter = document.querySelector('.map__filters');

  var adFormAddress = mainForm.querySelector('#address');

  // здесь реализую фунцию метки при drag and drop
  adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.mocks.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.mocks.PinSize.MAIN_HEIGHT / 2);

  /**
    * добавляет/удаляет атрибут детям элемента
    * @param {HTMLCollection} children - коллекция DOM элементов
    * @param {Boolean} isAdd - флаг, принимающий значение true или false
    */
  var toggleAttributeOnChildren = function (children, isAdd) {
    Array.from(children).forEach(function (child) {
      if (isAdd) {
        child.setAttribute('disabled', 'disabled');
      } else {
        child.removeAttribute('disabled');
      }
    });
  };

  /**
    * активирует/деактивирует элементы форм
    * @param {HTMLElement} form - DOM элемент
    * @param {HTMLElement} filter - DOM элемент
    * @param {Boolean} isDisabled - флаг, принимающий значение true или false
    */
  var activateForms = function (form, filter, isDisabled) {
    if (!isDisabled) {
      toggleAttributeOnChildren(form.children, true);
      toggleAttributeOnChildren(filter.children, true);
    } else {
      toggleAttributeOnChildren(form.children, false);
      toggleAttributeOnChildren(filter.children, false);
    }
  };

  activateForms(mainForm, mapFilter, false);

  /**
    * вызывает функцию при нажатии клавиши Enter
    * @param {Object} evt - объект хранит последнее событие
    */
  var onMainPinEnterPress = function (evt) {
    if (evt.key === 'Enter') {
      activateMap();
    }
  };

  /**
    * вызывает функцию при нажатии главной кнопки на мыши
    * @param {Object} evt - объект хранит последнее событие
    */
  var onMainPinGeneralButtonPress = function (evt) {
    if (evt.button === 0) {
      activateMap();
    }
  };

  /**
    * активирует карту
    */
  var activateMap = function () {
    window.pin.renderPins(window.data.dataAds);
    activateForms(mainForm, mapFilter, true);

    // здесь реализую фунцию метки drag and drop
    adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.mocks.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.mocks.PinSize.SIMILAR_HEIGHT);

    mainForm.classList.remove('ad-form--disabled');
    map.classList.remove('map--faded');

    mainPin.removeEventListener('mousedown', onMainPinGeneralButtonPress);
    mainPin.removeEventListener('keydown', onMainPinEnterPress);
  };

  mainPin.addEventListener('mousedown', onMainPinGeneralButtonPress);
  mainPin.addEventListener('keydown', onMainPinEnterPress);

})();
