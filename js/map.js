'use strict';

(function () {

  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');

  var mainForm = document.querySelector('.ad-form');
  var mapFilter = document.querySelector('.map__filters');

  var adFormAddress = mainForm.querySelector('#address');
  adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.data.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.data.PinSize.MAIN_HEIGHT / 2);

  var getFormAddressValue = function () {
    adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.data.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.data.PinSize.MAIN_HEIGHT);
  };

  var popupFormSuccess = function () {
    var successTemplate = document.querySelector('#success').content;
    var success = successTemplate.cloneNode(true);
    var main = document.querySelector('main');
    main.append(success);

    var successShow = document.querySelector('.success');

    document.addEventListener('click', function () {
      successShow.remove();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        successShow.remove();
      }
    });
  };

  var popupFormError = function () {
    var successTemplate = document.querySelector('#error').content;
    var error = successTemplate.cloneNode(true);
    var main = document.querySelector('main');
    main.append(error);

    var errorShow = document.querySelector('.error');
    var errorButton = errorShow.querySelector('.error__button');

    document.addEventListener('click', function () {
      errorShow.remove();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        errorShow.remove();
      }
    });

    errorButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      errorShow.remove();
    });
  };

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
   * @param {HTMLElement} anyForm - DOM элемент
   * @param {Boolean} isDisabled - флаг, принимающий значение true или false
   */
  var activateForms = function (anyForm, isDisabled) {
    toggleAttributeOnChildren(anyForm, isDisabled);
  };

  activateForms(mainForm, true);
  activateForms(mapFilter, true);

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
    window.backend.load(window.pin.render, window.backend.renderError);
    activateForms(mainForm, false);
    activateForms(mapFilter, false);
    mainForm.classList.remove('ad-form--disabled');
    map.classList.remove('map--faded');
  };

  /**
   * активирует карту
   */
  var deActivateMap = function () {
    mainForm.reset();
    document.querySelectorAll('.map__pin:not(.map__pin--main)').forEach(function (pin) {
      pin.remove();
    });
    if (document.querySelector('.map__card')) {
      document.querySelector('.map__card').remove();
    }
    mainPin.style.top = window.data.StartPositionMainPin.TOP;
    mainPin.style.left = window.data.StartPositionMainPin.LEFT;
    getFormAddressValue();
    activateForms(mainForm, true);
    activateForms(mapFilter, true);
    mainForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
  };

  mainPin.addEventListener('mousedown', onMainPinGeneralButtonPress);
  mainPin.addEventListener('keydown', onMainPinEnterPress);

  var reset = mainForm.querySelector('.ad-form__reset');
  reset.addEventListener('click', function (evt) {
    evt.preventDefault();
    deActivateMap();
  });

  mainForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(mainForm), function () {
      deActivateMap();
      popupFormSuccess();
    }, popupFormError);
    evt.preventDefault();
  });

  window.map = {
    getFormAddressValue: getFormAddressValue,
  };

})();
