'use strict';

(function () {

  var MAX_NUMBER_PINS = 5;

  var StartPositionMainPin = {
    TOP: '50%',
    LEFT: '50%',
    TRANSFORM: 'translate(-50%)'
  };

  var PinSize = {
    MAIN_WIDTH: 62,
    MAIN_HEIGHT: 62,
    MAIN_TAIL_HEIGHT: 22,
    SIMILAR_WIDTH: 50,
    SIMILAR_HEIGHT: 70,
  };

  var totalHeightMainPin = PinSize.MAIN_HEIGHT + PinSize.MAIN_TAIL_HEIGHT;

  var LimitValuePositionPinOnMap = {
    MIN_X: 0,
    MAX_X: 1200,
    MIN_Y: 130,
    MAX_Y: 630,
  };

  var TYPES = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalo: 'Бунгало',
  };

  window.data = {
    MAX_NUMBER_PINS: MAX_NUMBER_PINS,
    StartPositionMainPin: StartPositionMainPin,
    PinSize: PinSize,
    totalHeightMainPin: totalHeightMainPin,
    LimitValuePositionPinOnMap: LimitValuePositionPinOnMap,
    TYPES: TYPES,
  };

})();
