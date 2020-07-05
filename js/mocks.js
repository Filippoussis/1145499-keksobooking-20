'use strict';

(function () {

  var Ads = {
    MIN: 1,
    MAX: 8,
  };

  var TITLES = [
    'Уютное гнездышко для молодоженов',
    'Маленькая квартирка рядом с парком',
    'Небольшая лавочка в парке',
    'Императорский дворец в центре Токио',
    'Милейший чердачок',
    'Чёткая хата',
    'Стандартная квартира в центре',
    'Тихая квартирка недалеко от метро',
  ];

  var Price = {
    MIN: 0,
    MAX: 1000000,
  };

  var Rooms = {
    MIN: 1,
    MAX: 7,
  };

  var Guests = {
    MIN: 1,
    MAX: 15,
  };

  var CHECKIN_OUTS = [
    '12:00',
    '13:00',
    '14:00',
  ];

  var FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];

  var DESCRIPTIONS = [
    'Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.',
    'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
    'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
    'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
    'Маленькая квартирка на чердаке. Для самых не требовательных.',
    'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
    'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
    'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  ];

  var PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ];

  var numberSeriesOfAds = window.util.getArrayNaturalNumbers(Ads.MIN, Ads.MAX);

  /**
   * генерирует карточку объявления
   * @return {object} возвращает карточку объявления в виде объекта с заданными полями
   */
  var generateDataAd = function () {
    var positionX = window.util.getRandomBetween(window.data.LimitValuePositionPinOnMap.MIN_X, window.data.LimitValuePositionPinOnMap.MAX_X);
    var positionY = window.util.getRandomBetween(window.data.LimitValuePositionPinOnMap.MIN_Y, window.data.LimitValuePositionPinOnMap.MAX_Y);
    return {
      author: {
        avatar: 'img/avatars/user0' + numberSeriesOfAds.pop() + '.png',
      },
      offer: {
        title: window.util.getRandomElementFromArray(TITLES),
        address: '' + positionX + ', ' + positionY,
        price: Math.round(window.util.getRandomBetween(Price.MIN, Price.MAX) / 100) * 100,
        type: window.util.getRandomElementFromArray(Object.keys(window.data.TYPES)),
        rooms: window.util.getRandomBetween(Rooms.MIN, Rooms.MAX),
        guests: window.util.getRandomBetween(Guests.MIN, Guests.MAX),
        checkin: window.util.getRandomElementFromArray(CHECKIN_OUTS),
        checkout: window.util.getRandomElementFromArray(CHECKIN_OUTS),
        features: window.util.getRandomArray(FEATURES),
        description: window.util.getRandomElementFromArray(DESCRIPTIONS),
        photos: window.util.getRandomArray(PHOTOS),
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
  var generateAds = function (numberOfAds) {
    var ads = [];
    for (var i = 0; i < numberOfAds; i++) {
      ads.push(generateDataAd());
    }

    return ads;
  };

  window.mocks = {
    generateAds: generateAds(Ads.MAX),
  };

})();
