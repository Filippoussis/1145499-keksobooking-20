'use strict';

(function () {

  var pinTemplate = document.querySelector('#pin').content;

  /**
   * рендер метки объявления
   * @param {object} ad - объект карточки объявления
   * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
   */
  var renderPin = function (ad) {
    var pin = pinTemplate.cloneNode(true);
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
    var mapPins = document.querySelector('.map__pins');
    var pinFragment = document.createDocumentFragment();

    var takeNumber = ads.length > window.data.MAX_NUMBER_PINS ? window.data.MAX_NUMBER_PINS : ads.length;

    clearPins();
    window.card.clear();

    for (var i = 0; i < takeNumber; i++) {
      pinFragment.append(renderPin(ads[i]));
    }

    mapPins.append(pinFragment);
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
