'use strict';

(function () {

  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');

  /**
   * перемещает Главный пин в стартовое положение
   */
  var setStartPositionMainPin = function () {
    mainPin.style.top = window.data.StartPositionMainPin.TOP;
    mainPin.style.left = window.data.StartPositionMainPin.LEFT;
    mainPin.style.transform = window.data.StartPositionMainPin.TRANSFORM;
  };

  mainPin.addEventListener('mousedown', function (evt) {
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

      var newX = mainPin.offsetLeft - shift.x;
      var newY = mainPin.offsetTop - shift.y;

      if (newX < -window.data.PinSize.MAIN_WIDTH / 2) {
        newX = -window.data.PinSize.MAIN_WIDTH / 2;
      }

      if (newX > map.offsetWidth - window.data.PinSize.MAIN_WIDTH / 2) {
        newX = map.offsetWidth - window.data.PinSize.MAIN_WIDTH / 2;
      }

      if (newY < window.data.LimitValuePositionPinOnMap.MIN_Y - window.data.totalHeightMainPin) {
        newY = window.data.LimitValuePositionPinOnMap.MIN_Y - window.data.totalHeightMainPin;
      }

      if (newY > window.data.LimitValuePositionPinOnMap.MAX_Y - window.data.totalHeightMainPin) {
        newY = window.data.LimitValuePositionPinOnMap.MAX_Y - window.data.totalHeightMainPin;
      }

      mainPin.style.top = newY + 'px';
      mainPin.style.left = newX + 'px';

      window.form.setCurrentValueAddress();
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      window.form.setCurrentValueAddress();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.move = {
    setStartPosition: setStartPositionMainPin,
  };

})();
