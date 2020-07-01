'use strict';

(function () {

  var Position = {
    MIN_X: 0,
    MAX_X: 1200,
    MIN_Y: 130,
    MAX_Y: 630,
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

  var Rooms = {
    '1': ['1'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '100': ['100'],
  };

  var numberSeriesOfAds = window.util.getArrayNaturalNumbers(window.mocks.Ads.MIN, window.mocks.Ads.MAX);

  /**
   * генерирует карточку объявления
   * @return {object} возвращает карточку объявления в виде объекта с заданными полями
   */
  var generateDataAd = function () {
    var positionX = window.util.getRandomBetween(Position.MIN_X, Position.MAX_X);
    var positionY = window.util.getRandomBetween(Position.MIN_Y, Position.MAX_Y);
    return {
      author: {
        avatar: 'img/avatars/user0' + numberSeriesOfAds.pop() + '.png',
      },
      offer: {
        title: window.util.getRandomElementFromArray(window.mocks.TITLES),
        address: '' + positionX + ', ' + positionY,
        price: Math.round(window.util.getRandomBetween(window.mocks.Price.MIN, window.mocks.Price.MAX) / 100) * 100,
        type: window.util.getRandomElementFromArray(Object.keys(window.mocks.TYPES)),
        rooms: window.util.getRandomBetween(window.mocks.Rooms.MIN, window.mocks.Rooms.MAX),
        guests: window.util.getRandomBetween(window.mocks.Guests.MIN, window.mocks.Guests.MAX),
        checkin: window.util.getRandomElementFromArray(window.mocks.CHECKIN_OUTS),
        checkout: window.util.getRandomElementFromArray(window.mocks.CHECKIN_OUTS),
        features: window.util.getRandomArray(window.mocks.FEATURES),
        description: window.util.getRandomElementFromArray(window.mocks.DESCRIPTIONS),
        photos: window.util.getRandomArray(window.mocks.PHOTOS),
      },
      location: {
        x: positionX,
        y: positionY,
      },
    };
  };

  /**
   * генерирует массив объектов карточек объявлений
   * @param {number} numberOfAds - количество карточек объявлений
   * @return {array} возвращает массив объектов карточек объявлений
   */
  var generateDataAds = function (numberOfAds) {
    var ads = [];
    for (var i = 0; i < numberOfAds; i++) {
      ads.push(generateDataAd());
    }

    return ads;
  };

  window.data = {
    generateDataAds: generateDataAds(window.mocks.Ads.MAX),
    PinSize: PinSize,
    minPrice: minPrice,
    Rooms: Rooms,
  };

})();
