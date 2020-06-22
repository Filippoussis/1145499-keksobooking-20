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
  MIN: 0,
  MAX: 1000000,
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

var PinSize = {
  MAIN_WIDTH: 65,
  MAIN_HEIGHT: 65,
  SIMILAR_WIDTH: 50,
  SIMILAR_HEIGHT: 70,
};

var MinPrice = {
  bungalo: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
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
      address: '' + positionX + ', ' + positionY,
      price: Math.round(getRandomBetween(Price.MIN, Price.MAX) / 100) * 100,
      type: getRandomElementFromArray(Object.keys(TYPES)),
      rooms: getRandomBetween(Rooms.MIN, Rooms.MAX),
      guests: getRandomBetween(Guests.MIN, Guests.MAX),
      checkin: getRandomElementFromArray(CHECKIN_OUTS),
      checkout: getRandomElementFromArray(CHECKIN_OUTS),
      features: getRandomArray(FEATURES),
      description: getRandomElementFromArray(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
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
  pin.querySelector('.map__pin').style.left = ad.location.x - PinSize.SIMILAR_WIDTH / 2 + 'px';
  pin.querySelector('.map__pin').style.top = ad.location.y - PinSize.SIMILAR_HEIGHT + 'px';
  pin.querySelector('.map__pin img').src = ad.author.avatar;
  pin.querySelector('.map__pin img').alt = ad.offer.title;

  return pin;
};

var dataAds = generateDataAds();

var renderPins = function (ads) {
  var mapPins = document.querySelector('.map__pins');
  var pinFragment = document.createDocumentFragment();
  ads.forEach(function (ad) {
    pinFragment.append(renderPin(ad));
  });
  mapPins.append(pinFragment);
};

var cardTemplate = document.querySelector('#card').content;
var photoTemplate = cardTemplate.querySelector('.popup__photo');

/**
 * отрисовка фотографий объявления
 * @param {object} ad - объект карточки объявления
 * @param {number} i - индекс элемента в массиве
 * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
 */
var renderPhotos = function (ad, i) {
  var photo = photoTemplate.cloneNode(true);

  photo.src = ad.offer.photos[i];

  return photo;
};

/**
 * отрисовка карточки объявления
 * @param {object} ad - объект карточки объявления
 * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
 */
var renderCard = function (ad) {
  var card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__title').textContent = ad.offer.title;
  card.querySelector('.popup__text--address').textContent = ad.offer.address;
  card.querySelector('.popup__text--price').textContent = ad.offer.price + '\u20BD/ночь';
  card.querySelector('.popup__type').textContent = TYPES[ad.offer.type];
  card.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
  card.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ',' + ' выезд до ' + ad.offer.checkout;
  card.querySelector('.popup__description').textContent = ad.offer.description;
  card.querySelector('.popup__avatar').src = ad.author.avatar;

  if (!ad.offer.features.length) {
    card.querySelector('.popup__features').remove();
  }

  card.querySelectorAll('.popup__feature').forEach(function (featureElement) {
    if (!featureElement.className.split('--').find(function (item) {
      return ad.offer.features.includes(item);
    })) {
      featureElement.remove();
    }
  });

  for (var i = 0; i < ad.offer.photos.length; i++) {
    card.querySelector('.popup__photos').append(renderPhotos(ad, i));
  }

  if (!ad.offer.photos.length) {
    card.querySelector('.popup__photos').remove();
  } else {
    card.querySelector('.popup__photo').remove();
  }

  return card;
};

// Глава 4. Обработка событий

var map = document.querySelector('.map');
var mainPin = map.querySelector('.map__pin--main');

var adForm = document.querySelector('.ad-form');

var adFormAddress = adForm.querySelector('#address');
adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + PinSize.MAIN_HEIGHT / 2);

var adFormHeader = adForm.querySelector('.ad-form-header');
adFormHeader.setAttribute('disabled', 'disabled');

var adFormElements = adForm.querySelectorAll('.ad-form__element');
adFormElements.forEach(function (el) {
  el.setAttribute('disabled', 'disabled');
});

var closeCard = function () {
  var mapCard = document.querySelector('.map__card');
  mapCard.classList.add('hidden');
  document.removeEventListener('keydown', onCardEscPress);
};

var onCardEscPress = function (evt) {
  if (evt.key === 'Escape') {
    closeCard();
  }
};

var openCard = function (ad) {
  var cardData = renderCard(ad);
  var mapCard = document.querySelector('.map__card');
  var mapFiltersContainer = document.querySelector('.map__filters-container');

  if (!mapCard) {
    mapFiltersContainer.before(cardData);
  } else {
    mapCard.replaceWith(cardData);
  }

  var popupClose = document.querySelector('.popup__close');
  popupClose.focus();
  popupClose.addEventListener('click', closeCard);
  document.addEventListener('keydown', onCardEscPress);
};

var ativatePins = function (ads) {
  var pins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  var addPressPinHandler = function (pin, ad) {
    pin.addEventListener('click', function (evt) {
      evt.preventDefault();
      openCard(ad);
    });
  };
  for (var i = 0; i < pins.length; i++) {
    addPressPinHandler(pins[i], ads[i]);
  }
};

var onPressMainPin = function (evt) {
  if (evt.button === 0 || evt.key === 'Enter') {
    activateMode();
  }
};

var activateMode = function () {
  renderPins(dataAds);
  ativatePins(dataAds);

  adForm.classList.remove('ad-form--disabled');
  adFormHeader.removeAttribute('disabled');
  adFormElements.forEach(function (el) {
    el.removeAttribute('disabled');
  });
  adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + PinSize.SIMILAR_HEIGHT);
  map.classList.remove('map--faded');
  mainPin.removeEventListener('mousedown', onPressMainPin);
  mainPin.removeEventListener('keydown', onPressMainPin);
};

mainPin.addEventListener('mousedown', onPressMainPin);
mainPin.addEventListener('keydown', onPressMainPin);

// Валидация

// комнаты/гости

var numberRooms = adForm.querySelector('#room_number');
var capacity = adForm.querySelector('#capacity');

numberRooms.addEventListener('change', function () {
  capacity.setCustomValidity('');
  if (Number(numberRooms.value) < Number(capacity.value)) {
    numberRooms.setCustomValidity('Количество комнат должно быть больше или равно количеству гостей');
  } else if (Number(numberRooms.value) === 100 && Number(capacity.value) !== 0) {
    numberRooms.setCustomValidity('100 комнат не предназначены для гостей');
  } else if (Number(numberRooms.value) !== 100 && Number(capacity.value) === 0) {
    numberRooms.setCustomValidity('Комнаты предназначены только для гостей');
  } else {
    numberRooms.setCustomValidity('');
  }
  numberRooms.reportValidity();
});

capacity.addEventListener('change', function () {
  numberRooms.setCustomValidity('');
  if (Number(capacity.value) > Number(numberRooms.value)) {
    capacity.setCustomValidity('Количество гостей должно быть меньше или равно количеству комнат');
  } else if (Number(capacity.value) === 0 && Number(numberRooms.value) !== 100) {
    capacity.setCustomValidity('Не для гостей предназначены 100 комнат');
  } else if (Number(capacity.value) !== 0 && Number(numberRooms.value) === 100) {
    capacity.setCustomValidity('Гостям не предназначены 100 комнат');
  } else {
    capacity.setCustomValidity('');
  }
  capacity.reportValidity();
});

// заезд/выезд

var timeIn = adForm.querySelector('#timein');
var timeOut = adForm.querySelector('#timeout');

timeIn.addEventListener('change', function () {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', function () {
  timeIn.value = timeOut.value;
});

// тип жилья/минимальная цена

var typeHouse = adForm.querySelector('#type');
var minPrice = adForm.querySelector('#price');

typeHouse.addEventListener('change', function () {
  var minPriceValue = MinPrice[typeHouse.value];
  minPrice.value = '';
  minPrice.min = minPriceValue;
  minPrice.placeholder = minPriceValue;
});
