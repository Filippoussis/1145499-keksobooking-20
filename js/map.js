'use strict';

(function () {

  var MAP = document.querySelector('.map');
  var MAIN_PIN = MAP.querySelector('.map__pin--main');
  var FILTERS = MAP.querySelector('.map__filters');
  var MAIN_FORM = document.querySelector('.ad-form');

  /**
   * вызывает функцию активации карты при нажатии клавиши Enter
   * @param {Object} evt - объект хранит последнее событие
   */
  var onMainPinEnterPress = function (evt) {
    if (evt.key === 'Enter') {
      activateMap();
    }
  };

  /**
   * вызывает функцию активации карты при нажатии главной кнопки на мыши
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
    window.main.getPins();
    window.form.activate(MAIN_FORM, true);
    window.form.activate(FILTERS, true);
    MAIN_FORM.classList.remove('ad-form--disabled');
    MAP.classList.remove('map--faded');
    MAIN_PIN.removeEventListener('mousedown', onMainPinGeneralButtonPress);
    MAIN_PIN.removeEventListener('keydown', onMainPinEnterPress);
  };

  /**
   * деактивирует карту
   */
  var deActivateMap = function () {
    MAIN_FORM.reset();
    FILTERS.reset();
    window.pin.clear();
    window.card.clear();
    window.move.setStartPosition();
    window.move.setStartValueAddress();
    window.form.activate(MAIN_FORM, false);
    window.form.activate(FILTERS, false);
    window.validity.reset();
    window.photo.reset();
    MAIN_FORM.classList.add('ad-form--disabled');
    MAP.classList.add('map--faded');
    MAIN_PIN.addEventListener('mousedown', onMainPinGeneralButtonPress);
    MAIN_PIN.addEventListener('keydown', onMainPinEnterPress);
  };

  window.map = {
    deActivate: deActivateMap,
  };

})();
