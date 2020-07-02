'use strict';

(function () {

  var StartPositionMainPin = {
    TOP: '375px',
    LEFT: '570px',
  };

  var PinSize = {
    MAIN_WIDTH: 65,
    MAIN_HEIGHT: 65,
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
    StartPositionMainPin: StartPositionMainPin,
    PinSize: PinSize,
    minPrice: minPrice,
    TYPES: TYPES,
    Rooms: Rooms,
  };

})();
