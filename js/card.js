'use strict';

(function () {

  var CARD_TEMPLATE = document.querySelector('#card').content;
  var PHOTO_TEMPLATE = CARD_TEMPLATE.querySelector('.popup__photo');

  var typeHouse = {
    palace: 'Дворец',
    flat: 'Квартира',
    house: 'Дом',
    bungalo: 'Бунгало',
  };

  /**
   * отрисовка фотографий объявления
   * @param {string} photo - строковый адрес картинки
   * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
   */
  var renderPhoto = function (photo) {
    var image = PHOTO_TEMPLATE.cloneNode(true);
    image.src = photo;

    return image;
  };

  /**
   * отрисовка карточки объявления
   * @param {object} ad - объект карточки объявления
   * @return {HTMLElement} возвращает кастомизированный HTMLElement на основе склонированного шаблона
   */
  var renderCard = function (ad) {
    var card = CARD_TEMPLATE.cloneNode(true);
    card.querySelector('.popup__title').textContent = ad.offer.title;
    card.querySelector('.popup__text--address').textContent = ad.offer.address;
    card.querySelector('.popup__text--price').textContent = ad.offer.price + '\u20BD/ночь';
    card.querySelector('.popup__type').textContent = typeHouse[ad.offer.type];
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

    ad.offer.photos.forEach(function (photo) {
      card.querySelector('.popup__photos').append(renderPhoto(photo));
    });

    if (!ad.offer.photos.length) {
      card.querySelector('.popup__photos').remove();
    } else {
      card.querySelector('.popup__photo').remove();
    }

    return card;
  };

  /**
   * удаление со страницы открытой карточки объявления
   */
  var clearCard = function () {
    if (document.querySelector('.map__card')) {
      document.querySelector('.map__card').remove();
    }
  };

  window.card = {
    render: renderCard,
    clear: clearCard,
  };

})();
