'use strict';

(function () {

  var MAP = document.querySelector('.map');
  var MAIN_PIN = MAP.querySelector('.map__pin--main');
  var ADDRESS = document.querySelector('#address');

  var StartPositionMainPin = {
    TOP: '50%',
    LEFT: '50%',
    TRANSFORM: 'translate(-50%)'
  };

  var LimitValuePositionPinOnMap = {
    MIN_X: 0,
    MAX_X: 1200,
    MIN_Y: 130,
    MAX_Y: 630,
  };

  var PinSize = {
    MAIN_WIDTH: 62,
    MAIN_HEIGHT: 62,
    MAIN_TAIL_HEIGHT: 22,
    SIMILAR_WIDTH: 50,
    SIMILAR_HEIGHT: 70,
  };

  var totalHeightMainPin = PinSize.MAIN_HEIGHT + PinSize.MAIN_TAIL_HEIGHT;

  /**
   * перемещает Главный пин в стартовое положение
   */
  var setStartPositionMainPin = function () {
    MAIN_PIN.style.top = StartPositionMainPin.TOP;
    MAIN_PIN.style.left = StartPositionMainPin.LEFT;
    MAIN_PIN.style.transform = StartPositionMainPin.TRANSFORM;
  };

  /**
   * записывает стартовое значение координат Главного пина
   */
  var setStartValueAddress = function () {
    ADDRESS.value = '' + Math.round(parseInt(MAIN_PIN.style.left, 10) + PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(MAIN_PIN.style.top, 10) + PinSize.MAIN_HEIGHT / 2);
  };

  /**
   * записывает текущее значение координат Главного пина
   */
  var setCurrentValueAddress = function () {
    ADDRESS.value = '' + Math.round(parseInt(MAIN_PIN.style.left, 10) + PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(MAIN_PIN.style.top, 10) + totalHeightMainPin);
  };

  MAIN_PIN.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var newX = MAIN_PIN.offsetLeft - shift.x;
      var newY = MAIN_PIN.offsetTop - shift.y;

      if (newX < -PinSize.MAIN_WIDTH / 2) {
        newX = -PinSize.MAIN_WIDTH / 2;
      }

      if (newX > MAP.offsetWidth - PinSize.MAIN_WIDTH / 2) {
        newX = MAP.offsetWidth - PinSize.MAIN_WIDTH / 2;
      }

      if (newY < LimitValuePositionPinOnMap.MIN_Y - totalHeightMainPin) {
        newY = LimitValuePositionPinOnMap.MIN_Y - totalHeightMainPin;
      }

      if (newY > LimitValuePositionPinOnMap.MAX_Y - totalHeightMainPin) {
        newY = LimitValuePositionPinOnMap.MAX_Y - totalHeightMainPin;
      }

      MAIN_PIN.style.top = newY + 'px';
      MAIN_PIN.style.left = newX + 'px';

      setCurrentValueAddress();
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      setCurrentValueAddress();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.move = {
    setStartPosition: setStartPositionMainPin,
    setStartValueAddress: setStartValueAddress,
  };

})();
