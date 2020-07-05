'use strict';

(function () {

  var MAX_NUMBER_PINS = 5;

  var StartPositionMainPin = {
    TOP: '375px',
    LEFT: '570px',
  };

  var PinSize = {
    MAIN_WIDTH: 65,
    MAIN_HEIGHT: 65,
    MAIN_TAIL_HEIGHT: 22,
    SIMILAR_WIDTH: 50,
    SIMILAR_HEIGHT: 70,
  };

  var minPrice = {
    'bungalo': '0',
    'flat': '1000',
    'house': '5000',
    'palace': '10000',
  };

  var TYPES = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalo: 'Бунгало',
  };

  var Rooms = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['100'],
  };

  window.data = {
    MAX_NUMBER_PINS: MAX_NUMBER_PINS,
    StartPositionMainPin: StartPositionMainPin,
    PinSize: PinSize,
    minPrice: minPrice,
    TYPES: TYPES,
    Rooms: Rooms,
  };

})();
