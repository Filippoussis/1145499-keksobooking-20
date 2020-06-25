'use strict';

window.data = (function () {

  var numberSeriesOfAds = window.util.getArrayNaturalNumbers(window.mocks.Ads.MIN, window.mocks.Ads.MAX);

  /**
   * генерирует карточку объявления
   * @return {object} возвращает карточку объявления в виде объекта с заданными полями
   */
  var generateDataAd = function () {
    var positionX = window.util.getRandomBetween(window.mocks.Position.MIN_X, window.mocks.Position.MAX_X);
    var positionY = window.util.getRandomBetween(window.mocks.Position.MIN_Y, window.mocks.Position.MAX_Y);
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

  return {
    dataAds: generateDataAds(window.mocks.Ads.MAX),
  };

})();
