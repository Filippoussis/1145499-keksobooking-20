'use strict';

var NUMBER_ADS = 8;

var Price = {
  MIN: 1000,
  MAX: 10000,
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

var ADDRESSES = [
  '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
  '102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō',
  'Chiyoda-ku, Tōkyō-to 102-0091',
  '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
  '102-0094 Tōkyō-to, Chiyoda-ku, Kioichō, 3',
  '102-0081 Tōkyō-to, Chiyoda-ku, Yonbanchō, 5−6',
  'Chiyoda-ku, Tōkyō-to 102-0082',
  '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4',
];

var TYPES = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalo': 'Бунгало',
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

var FEATURES = {
  'wifi': 'wifi',
  'dishwasher': 'dishwasher',
  'parking': 'parking',
  'washer': 'washer',
  'elevator': 'elevator',
  'conditioner': 'conditioner',
};

var X = {
  MIN: 0,
  MAX: 1200,
};

var Y = {
  MIN: 130,
  MAX: 630,
};

var Pin = {
  WIDTH: 50,
  HEIGHT: 70,
};

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

var getAvatar = function (index) {
  return 'img/avatars/user0' + ++index + '.png';
};

var getElementFromArray = function (array, index) {
  return array[index];
};

var getRandomElementFromArray = function (array, min, max) {
  return array[getRandomBetween(min, max)];
};

/**
  * случайный ключ из диапазона ключей объекта через преобразование его в массив
  * @param {object} obj - исходный объект
  * @param {number} min - 0 индекс массива
  * @param {number} max - значение последнего индекса массива
  * @return {string} случайный ключ
  */

var getRandomKeyOfObject = function (obj, min, max) {
  return Object.keys(obj).slice()[getRandomBetween(min, max)];
};

/**
  * случайной длины массив преобразованный из ключей исходного объекта
  * @param {object} obj - исходный объект
  * @param {number} min - 0 индекс массива
  * @param {number} max - значение последнего индекса массива
  * @return {array} случайной длины массив
  */

var getRandomArrayFromObject = function (obj, min, max) {
  return Object.keys(obj).slice(getRandomBetween(min, max));
};

var getRandomArray = function (data, min, max) {
  return data.slice(getRandomBetween(min, max));
};

var generateDataAd = function (index) {
  return {
    author: {
      avatar: getAvatar(index),
    },
    offer: {
      title: getElementFromArray(TITLES, index),
      address: getElementFromArray(ADDRESSES, index),
      price: Math.round(getRandomBetween(Price.MIN, Price.MAX) / 100) * 100,
      type: getRandomKeyOfObject(TYPES, 0, Object.keys(TYPES).length - 1),
      rooms: getRandomBetween(Rooms.MIN, Rooms.MAX),
      guests: getRandomBetween(Guests.MIN, Guests.MAX),
      checkin: getRandomElementFromArray(CHECKIN_OUTS, 0, CHECKIN_OUTS.length - 1),
      checkout: getRandomElementFromArray(CHECKIN_OUTS, 0, CHECKIN_OUTS.length - 1),
      features: getRandomArrayFromObject(FEATURES, 0, Object.keys(FEATURES).length - 1),
      description: getElementFromArray(DESCRIPTIONS, index),
      photos: getRandomArray(PHOTOS, 0, PHOTOS.length - 1),
    },
    location: {
      x: getRandomBetween(X.MIN, X.MAX),
      y: getRandomBetween(Y.MIN, Y.MAX),
    },
  };
};

var generateDataAds = function (adsLength, ad) {
  var ads = [];
  for (var i = 0; i < adsLength; i++) {
    ads.push(ad(i));
  }

  return ads;
};

var dataAds = generateDataAds(NUMBER_ADS, generateDataAd);

var pinTemplate = document.querySelector('#pin').content;

var renderPin = function (ad) {
  var pin = pinTemplate.cloneNode(true);
  pin.querySelector('.map__pin').style.left = ad.location.x - Pin.WIDTH / 2 + 'px';
  pin.querySelector('.map__pin').style.top = ad.location.y - Pin.HEIGHT + 'px';
  pin.querySelector('.map__pin img').src = ad.author.avatar;
  pin.querySelector('.map__pin img').alt = ad.offer.title;

  return pin;
};

var pinFragment = document.createDocumentFragment();

dataAds.forEach(function (ad) {
  pinFragment.append(renderPin(ad));
});

var mapPins = document.querySelector('.map__pins');
mapPins.append(pinFragment);

var cardFeatureTemplate = document.querySelector('#card-feature').content;

var getCardFeature = function (feature) {
  var cardFeature = cardFeatureTemplate.cloneNode(true);
  cardFeature.querySelector('.popup__feature').classList.add('popup__feature--' + feature);

  return cardFeature;
};

var getCardFeatures = function (ad) {
  var cardFeatureFragment = document.createDocumentFragment();

  (ad.offer.features).forEach(function (feature) {
    cardFeatureFragment.append(getCardFeature(FEATURES[feature]));
  });

  return cardFeatureFragment;
};

var cardPhotoTemplate = document.querySelector('#card-photo').content;

var getCardPhoto = function (photo) {
  var cardPhoto = cardPhotoTemplate.cloneNode(true);
  cardPhoto.querySelector('.popup__photo').src = photo;

  return cardPhoto;
};

var getCardPhotos = function (ad) {
  var cardPhotoFragment = document.createDocumentFragment();
  (ad.offer.photos).forEach(function (photo) {
    cardPhotoFragment.append(getCardPhoto(photo));
  });

  return cardPhotoFragment;
};

var cardTemplate = document.querySelector('#card').content;

var renderCard = function (ad) {
  var card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__title').textContent = ad.offer.title;
  card.querySelector('.popup__text--address').textContent = ad.offer.address;
  card.querySelector('.popup__text--price').textContent = ad.offer.price + '\u20BD/ночь';
  card.querySelector('.popup__type').textContent = TYPES[ad.offer.type];
  card.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ',' + ' выезд до ' + ad.offer.checkout;
  card.querySelector('.popup__features').append(getCardFeatures(ad));
  card.querySelector('.popup__description').textContent = ad.offer.description;
  card.querySelector('.popup__photos').append(getCardPhotos(ad));
  card.querySelector('.popup__avatar').src = ad.author.avatar;

  return card;
};

var cardFragment = document.createDocumentFragment();
cardFragment.append(renderCard(dataAds[0]));

var mapFiltersContainer = document.querySelector('.map__filters-container');
mapFiltersContainer.before(cardFragment);

document.querySelector('.map').classList.remove('map--faded');
