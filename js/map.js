'use strict';

(function () {

  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');

  var mainForm = document.querySelector('.ad-form');
  var mapFilter = document.querySelector('.map__filters');

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
    window.form.activate(mainForm, true);
    window.form.activate(mapFilter, true);
    mainForm.classList.remove('ad-form--disabled');
    map.classList.remove('map--faded');
  };

  /**
   * деактивирует карту
   */
  var deActivateMap = function () {
    mainForm.reset();
    window.pin.clear();
    window.card.clear();
    window.move.startPosition();
    window.form.startValueAddress();
    window.form.activate(mainForm, false);
    window.form.activate(mapFilter, false);
    mainForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
  };

  mainPin.addEventListener('mousedown', onMainPinGeneralButtonPress);
  mainPin.addEventListener('keydown', onMainPinEnterPress);

  window.map = {
    deActivate: deActivateMap,
  };

})();
