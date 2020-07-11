'use strict';

(function () {

  var MAX_NUMBER_PINS = 5;

  var MAP_PINS = document.querySelector('.map__pins');
  var PIN_TEMPLATE = document.querySelector('#pin').content;

  var SimilarPinSize = {
    WIDTH: 50,
    HEIGHT: 70,
  };

  /**
   * рендер метки объявления
   * @param {object} ad - объект карточки объявления
   * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
   */
  var renderPin = function (ad) {
    var pin = PIN_TEMPLATE.cloneNode(true);
    var mapPin = pin.querySelector('.map__pin');
    var mapPinImg = pin.querySelector('.map__pin img');
    mapPin.style.left = ad.location.x - SimilarPinSize.WIDTH / 2 + 'px';
    mapPin.style.top = ad.location.y - SimilarPinSize.HEIGHT + 'px';
    mapPinImg.src = ad.author.avatar;
    mapPinImg.alt = ad.offer.title;
    mapPin.addEventListener('click', function (evt) {
      evt.preventDefault();
      window.popup.open(ad);
    });

    return pin;
  };

  /**
   * рендер меток объявлений на странице
   * @param {Array} ads - массив объектов карточек объявлений
   */
  var renderPins = function (ads) {

    clearPins();
    window.card.clear();

    var pinFragment = document.createDocumentFragment();

    var numberPins = ads.length > MAX_NUMBER_PINS ? MAX_NUMBER_PINS : ads.length;

    ads.slice(0, numberPins).forEach(function (ad) {
      pinFragment.append(renderPin(ad));
    });

    MAP_PINS.append(pinFragment);
  };

  /**
   * удаление со страницы пинов за исключением главного
   */
  var clearPins = function () {
    var notMainPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    if (notMainPins) {
      notMainPins.forEach(function (pin) {
        pin.remove();
      });
    }
  };

  window.pin = {
    render: renderPins,
    clear: clearPins,
  };

})();
