'use strict';

(function () {

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
    card.querySelector('.popup__type').textContent = window.data.TYPES[ad.offer.type];
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

  window.card = {
    render: renderCard,
  };

})();
