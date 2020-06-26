'use strict';

window.move = (function () {

  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');

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

      if (newX < 0) {
        newX = 0;
      }

      if (newX > map.offsetWidth - window.data.PinSize.MAIN_WIDTH) {
        newX = map.offsetWidth - window.data.PinSize.MAIN_WIDTH;
      }

      if (newY < 0) {
        newY = 0;
      }

      if (newY > map.offsetHeight - window.data.PinSize.MAIN_HEIGHT) {
        newY = map.offsetHeight - window.data.PinSize.MAIN_HEIGHT;
      }

      mainPin.style.top = newY + 'px';
      mainPin.style.left = newX + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
