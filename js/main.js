'use strict';

var MAX_ADS = 8;

var MIN_PRICE = 1;
var MAX_PRICE = 100000;

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
  'Тихая квартирка недалеко от метро',
];

var TYPES = [
  'palace',
  'flat',
  'house',
  'bungalo',
];

var MIN_INDEX_TYPES = 0;
var MAX_INDEX_TYPES = TYPES.length - 1;

var MIN_ROOMS = 1;
var MAX_ROOMS = 7;

var MIN_GUESTS = 1;
var MAX_GUESTS = 15;

var CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

var MIN_INDEX_CHECKINS = 0;
var MAX_INDEX_CHECKINS = CHECKINS.length - 1;

var CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

var MIN_INDEX_CHECKOUTS = 0;
var MAX_INDEX_CHECKOUTS = CHECKOUTS.length - 1;

var FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

var MIN_INDEX_FEATURES = 0;
var MAX_INDEX_FEATURES = FEATURES.length - 1;

var MIN_X = 0;
var MAX_X = 1200;

var MIN_Y = 130;
var MAX_Y = 160;

var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;

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

  ['https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_25_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_27_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_17_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_1_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_12_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/10000000/9160000/9151200/9151174/9151174_5_b.jpg'],

  ['https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/01488611-c1f9-4854-ad67-9f0ad3e857e6.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d976dd4b-2a7e-415a-a2a2-afc51caf8006.jpeg'],

  [],

  ['https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/5a29d708-9396-40bf-b002-92c5fdeb5c90.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/23e332cb-1379-4582-85ac-901d6c441635.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/1c859bbf-61d6-4295-b463-c1d0cbf62592.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/f5e66549-1940-4659-b27a-652f5c809231.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/11000000/10360000/10357700/10357605/10357605_30_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130219545024.jpg',
    'https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130215449816.jpg',
    'https://cdn.ostrovok.ru/t/x500/laterooms/hotelphotos/laterooms/274510/gallery/economy-apartment-shinjuku-tokyo-tokyo_040220130206399539.jpg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/69d53ff8-cd47-479d-8c9a-5170352aa169.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/19614107-a1da-4a0b-8a93-95107704a598.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/a97c72b9-e311-4a5a-863d-ea1e31ae9924.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/d2a52c68-e877-4902-be6d-c7f3cb198437.jpeg'],

  ['https://cdn.ostrovok.ru/t/x500/mec/hotels/5000000/4500000/4493700/4493658/4493658_17_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/b4/c6/b4c674087f12b74bc71fe073923ec744dfe1ed8f.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/1e/e8/1ee854db105a1f6bcd19ea62e1aa294724af7885.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/ca/9a/ca9ad256650553cdce9d8ff8baad93d4f17b9484.jpeg'],

  ['https://cdn.ostrovok.ru/t/x500/mec/a4/bb/a4bbfa3d98c0ddf60e95e610509dbede8160e40e.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/1000000/480000/470500/470466/470466_12_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/mec/hotels/1000000/480000/470500/470466/470466_17_b.jpg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/aa9f9334-acd2-46f7-ae6e-4ae039376ec6.jpeg'],

  ['https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/987935fb-633a-46b8-9b76-76af9f35c5e3.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/434b2eda-5af9-4b93-b97d-4e7514621ff1.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/fa9c3bba-a64a-4019-ab50-102bf6e5d691.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/f779d886-18a6-4ffb-b7c2-f5d4d0c8952a.jpeg'],

  ['https://cdn.ostrovok.ru/t/x500/mec/9b/6c/9b6cacd832ce9f3db3f17b3a2f368958710ce518.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/9c/5d/9c5dc5a6daf5353bb44b5696df1c1186c55173b9.jpeg',
    'https://cdn.ostrovok.ru/t/x500/mec/cd/c6/cdc6e4a1df6259cb54c75edb6ac351180b49b5ec.jpeg',
    'https://cdn.ostrovok.ru/t/x500/carsolize/images/hotels/abcedd44-bfbd-411d-9919-fa2ac82ef6b0.jpeg'],

];

var mapPins = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin').content;
var fragment = document.createDocumentFragment();

var getRandomBetween = function (min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getAvatar = function (index) {
  return 'img/avatars/user0' + ++index + '.png';
};

var getTitle = function (titles, index) {
  return titles[index];
};

var getAddress = function (addresses, index) {
  return addresses[index];
};

var getPrice = function (min, max) {
  return getRandomBetween(min, max);
};

var getType = function (types, min, max) {
  return types[getRandomBetween(min, max)];
};

var getRooms = function (min, max) {
  return getRandomBetween(min, max);
};

var getGuests = function (min, max) {
  return getRandomBetween(min, max);
};

var getCheckIn = function (checkins, min, max) {
  return checkins[getRandomBetween(min, max)];
};

var getCheckOut = function (checkouts, min, max) {
  return checkouts[getRandomBetween(min, max)];
};

var getFeatures = function (min, max) {
  var features = [];
  for (var i = 0; i < getRandomBetween(min, max); i++) {
    var originFeature = FEATURES[getRandomBetween(min, max)];
    if (features.includes(originFeature)) {
      continue;
    }
    features.push(originFeature);
  }
  return features;
};

var getLocationX = function (min, max) {
  return getRandomBetween(min, max);
};

var getLocationY = function (min, max) {
  return getRandomBetween(min, max);
};

var getDescription = function (descriptions, index) {
  return descriptions[index];
};

var getPhotos = function (collection, index) {
  return collection[index];
};

var getAd = function (avatar, title, titles, address, addresses, price, minPrice, maxPrice, type, types, minIndexTypes, maxIndexTypes, rooms, minRooms, maxRooms, guests, minGuests, maxGuests, checkin, checkins, minCheckIn, maxCheckIn, checkout, checkouts, minCheckOut, maxCheckOut, features, minFeatures, maxFeatures, x, minX, maxX, y, minY, maxY, description, descriptions, photos, collection, index) {
  return {
    author: {
      avatar: avatar(index),
    },
    offer: {
      title: title(titles, index),
      address: address(addresses, index),
      price: price(minPrice, maxPrice),
      type: type(types, minIndexTypes, maxIndexTypes),
      rooms: rooms(minRooms, maxRooms),
      guests: guests(minGuests, maxGuests),
      checkin: checkin(checkins, minCheckIn, maxCheckIn),
      checkout: checkout(checkouts, minCheckOut, maxCheckOut),
      features: features(minFeatures, maxFeatures),
      description: description(descriptions, index),
      photos: photos(collection, index),
    },
    location: {
      x: x(minX, maxX),
      y: y(minY, maxY),
    },
  };
};

var getAds = function (adsLength, ad, avatar, title, titles, address, addresses, price, min, max, type, types, minIndexTypes, maxIndexTypes, rooms, minRooms, maxRooms, guests, minGuests, maxGuests, checkin, checkins, minCheckIn, maxCheckIn, checkout, checkouts, minCheckOut, maxCheckOut, features, minFeatures, maxFeatures, x, minX, maxX, y, minY, maxY, description, descriptions, photos, collection) {
  var ads = [];
  for (var i = 0; i < adsLength; i++) {
    ads.push(ad(avatar, title, titles, address, addresses, price, min, max, type, types, minIndexTypes, maxIndexTypes, rooms, minRooms, maxRooms, guests, minGuests, maxGuests, checkin, checkins, minCheckIn, maxCheckIn, checkout, checkouts, minCheckOut, maxCheckOut, features, minFeatures, maxFeatures, x, minX, maxX, y, minY, maxY, description, descriptions, photos, collection, i));
  }

  return ads;
};

var ads = getAds(MAX_ADS, getAd, getAvatar, getTitle, TITLES, getAddress, ADDRESSES, getPrice, MIN_PRICE, MAX_PRICE, getType, TYPES, MIN_INDEX_TYPES, MAX_INDEX_TYPES, getRooms, MIN_ROOMS, MAX_ROOMS, getGuests, MIN_GUESTS, MAX_GUESTS, getCheckIn, CHECKINS, MIN_INDEX_CHECKINS, MAX_INDEX_CHECKINS, getCheckOut, CHECKOUTS, MIN_INDEX_CHECKOUTS, MAX_INDEX_CHECKOUTS, getFeatures, MIN_INDEX_FEATURES, MAX_INDEX_FEATURES, getLocationX, MIN_X, MAX_X, getLocationY, MIN_Y, MAX_Y, getDescription, DESCRIPTIONS, getPhotos, PHOTOS);

var renderAd = function (ad) {
  var pin = pinTemplate.cloneNode(true);
  pin.querySelector('.map__pin').style.left = ad.location.x - PIN_WIDTH / 2 + 'px';
  pin.querySelector('.map__pin').style.top = ad.location.y - PIN_HEIGHT + 'px';
  pin.querySelector('.map__pin img').src = ad.author.avatar;
  pin.querySelector('.map__pin img').alt = ad.offer.title;

  return pin;
};

ads.forEach(function (ad) {
  fragment.append(renderAd(ad));
});

mapPins.append(fragment);

document.querySelector('.map').classList.remove('map--faded');
