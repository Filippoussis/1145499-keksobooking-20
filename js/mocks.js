'use strict';

window.mocks = (function () {

  return {
    Ads: {
      MIN: 1,
      MAX: 8,
    },

    TITLES: [
      'Уютное гнездышко для молодоженов',
      'Маленькая квартирка рядом с парком',
      'Небольшая лавочка в парке',
      'Императорский дворец в центре Токио',
      'Милейший чердачок',
      'Чёткая хата',
      'Стандартная квартира в центре',
      'Тихая квартирка недалеко от метро',
    ],

    Price: {
      MIN: 0,
      MAX: 1000000,
    },

    TYPES: {
      palace: 'Дворец',
      flat: 'Квартира',
      house: 'Дом',
      bungalo: 'Бунгало',
    },

    Rooms: {
      MIN: 1,
      MAX: 7,
    },

    Guests: {
      MIN: 1,
      MAX: 15,
    },

    CHECKIN_OUTS: [
      '12:00',
      '13:00',
      '14:00',
    ],

    FEATURES: [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner',
    ],

    DESCRIPTIONS: [
      'Великолепный таун-хауз в центре Токио. Подходит как туристам, так и бизнесменам. Дом полностью укомплектован и имеет свежий ремонт.',
      'Маленькая чистая квратира на краю парка. Без интернета, регистрации и СМС.',
      'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
      'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
      'Маленькая квартирка на чердаке. Для самых не требовательных.',
      'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
      'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.',
      'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
    ],

    PHOTOS: [
      'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
      'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
    ],

    Position: {
      MIN_X: 0,
      MAX_X: 1200,
      MIN_Y: 130,
      MAX_Y: 630,
    },

    PinSize: {
      MAIN_WIDTH: 65,
      MAIN_HEIGHT: 65,
      SIMILAR_WIDTH: 50,
      SIMILAR_HEIGHT: 70,
    },

  };

})();
