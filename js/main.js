'use strict';

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
  MIN: 1000,
  MAX: 10000,
};

var TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalo: 'Бунгало',
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

var Position = {
  MIN_X: 0,
  MAX_X: 1200,
  MIN_Y: 130,
  MAX_Y: 630,
};

var Pin = {
  WIDTH: 50,
  HEIGHT: 70,
};

/**
 * случайное значение из диапазона
 * @param {number} min - минимальное значение
 * @param {number} max - максимальное значение
 * @return {number} случайное значение
 */
var getRandomBetween = function (min, max) {
  var random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

/**
 * массив последовательных натуральных чисел
 * @param {number} start - начальное значение натурального числа
 * @param {number} end - конечное значение натурального числа
 * @return {array} массив последовательных натуральных чисел
 */
var getArrayNaturalNumbers = function (start, end) {
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
};

/**
 * случайное значение из массива
 * @param {array} array - исходный массив значений
 * @return {*} случайное значение из массива
 */
var getRandomElementFromArray = function (array) {
  return array[getRandomBetween(0, array.length - 1)];
};

/**
 * массив случайной длины
 * @param {array} array - исходный массив значений
 * @return {array} массив случайной длины
 */
var getRandomArray = function (array) {
  return array.slice(getRandomBetween(0, array.length - 1));
};

var numberSeriesOfAds = getArrayNaturalNumbers(Ads.MIN, Ads.MAX);

/**
 * генерирует карточку объявления
 * @return {object} возвращает карточку объявления в виде объекта с заданными полями
 */
var generateDataAd = function () {
  var positionX = getRandomBetween(Position.MIN_X, Position.MAX_X);
  var positionY = getRandomBetween(Position.MIN_Y, Position.MAX_Y);
  return {
    author: {
      avatar: 'img/avatars/user0' + numberSeriesOfAds.pop() + '.png',
    },
    offer: {
      title: getRandomElementFromArray(TITLES),
      address: '' + positionX + ', ' + positionY + '',
      price: Math.round(getRandomBetween(Price.MIN, Price.MAX) / 100) * 100,
      type: getRandomElementFromArray(Object.keys(TYPES)),
      rooms: getRandomBetween(Rooms.MIN, Rooms.MAX),
      guests: getRandomBetween(Guests.MIN, Guests.MAX),
      checkin: getRandomElementFromArray(CHECKIN_OUTS),
      checkout: getRandomElementFromArray(CHECKIN_OUTS),
      features: getRandomArray(FEATURES),
      description: getRandomElementFromArray(DESCRIPTIONS),
      photos: getRandomElementFromArray(PHOTOS),
    },
    location: {
      x: positionX,
      y: positionY,
    },
  };
};

/**
 * генерирует массив объектов карточек объявлений
 * @return {array} возвращает массив объектов карточек объявлений
 */
var generateDataAds = function () {
  var ads = [];
  for (var i = 0; i < Ads.MAX; i++) {
    ads.push(generateDataAd());
  }

  return ads;
};

var pinTemplate = document.querySelector('#pin').content;

/**
 * кастомизация метки объявления
 * @param {object} ad - объект карточки объявления
 * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
 */
var renderPin = function (ad) {
  var pin = pinTemplate.cloneNode(true);
  pin.querySelector('.map__pin').style.left = ad.location.x - Pin.WIDTH / 2 + 'px';
  pin.querySelector('.map__pin').style.top = ad.location.y - Pin.HEIGHT + 'px';
  pin.querySelector('.map__pin img').src = ad.author.avatar;
  pin.querySelector('.map__pin img').alt = ad.offer.title;

  return pin;
};

var pinFragment = document.createDocumentFragment();

var dataAds = generateDataAds();

dataAds.forEach(function (ad) {
  pinFragment.append(renderPin(ad));
});

var mapPins = document.querySelector('.map__pins');
mapPins.append(pinFragment);

var cardTemplate = document.querySelector('#card').content;

var renderCard = function (ad) {
  var card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__title').textContent = ad.offer.title;
  card.querySelector('.popup__text--address').textContent = ad.offer.address;
  card.querySelector('.popup__text--price').textContent = ad.offer.price + '\u20BD/ночь';
  card.querySelector('.popup__type').textContent = TYPES[ad.offer.type];
  card.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ',' + ' выезд до ' + ad.offer.checkout;
  card.querySelectorAll('.popup__feature').forEach(function (featureElement) {
    if (!featureElement.className.split('--').find(function (item) {
      return ad.offer.features.includes(item);
    })) {
      featureElement.remove();
    }
  });
  card.querySelector('.popup__description').textContent = ad.offer.description;
  // card.querySelector('.popup__photos').append(getCardPhotos(ad));
  card.querySelector('.popup__avatar').src = ad.author.avatar;

  return card;
};

var cardFragment = document.createDocumentFragment();
cardFragment.append(renderCard(dataAds[0]));

var mapFiltersContainer = document.querySelector('.map__filters-container');
mapFiltersContainer.before(cardFragment);

document.querySelector('.map').classList.remove('map--faded');
