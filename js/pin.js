'use strict';

(function () {

  var MAX_NUMBER_PINS = 5;

  var MAP_PINS = document.querySelector('.map__pins');
  var PIN_TEMPLATE = document.querySelector('#pin').content;

  /**
   * рендер метки объявления
   * @param {object} ad - объект карточки объявления
   * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
   */
  var renderPin = function (ad) {
    var pin = PIN_TEMPLATE.cloneNode(true);
    pin.querySelector('.map__pin').style.left = ad.location.x - window.data.PinSize.SIMILAR_WIDTH / 2 + 'px';
    pin.querySelector('.map__pin').style.top = ad.location.y - window.data.PinSize.SIMILAR_HEIGHT + 'px';
    pin.querySelector('.map__pin img').src = ad.author.avatar;
    pin.querySelector('.map__pin img').alt = ad.offer.title;
    pin.querySelector('.map__pin').addEventListener('click', function (evt) {
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

    for (var i = 0; i < numberPins; i++) {
      pinFragment.append(renderPin(ads[i]));
    }

    MAP_PINS.append(pinFragment);
  };

  /**
   * удаление со страницы пинов за исключением главного
   */
  var clearPins = function () {
    if (document.querySelectorAll('.map__pin:not(.map__pin--main)')) {
      document.querySelectorAll('.map__pin:not(.map__pin--main)').forEach(function (pin) {
        pin.remove();
      });
    }
  };

  window.pin = {
    render: renderPins,
    clear: clearPins,
  };

})();
