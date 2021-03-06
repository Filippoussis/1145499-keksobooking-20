'use strict';

(function () {

  /**
   * закрывает popup
   */
  var closeCard = function () {
    var mapCard = document.querySelector('.map__card');
    mapCard.classList.add('hidden');
    document.removeEventListener('keydown', onCardEscPress);
  };

  /**
   * вызывает функцию при нажатии клавиши Enter
   * @param {Object} evt - объект хранит последнее событие
   */
  var onCardEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeCard();
    }
  };

  /**
   * функция открытия/закрытия popup
   * @param {Object} ad - объект карточки объявления
   */
  var openCard = function (ad) {
    var cardData = window.card.render(ad);
    var mapCard = document.querySelector('.map__card');
    var mapFiltersContainer = document.querySelector('.map__filters-container');

    if (!mapCard) {
      mapFiltersContainer.before(cardData);
    } else {
      mapCard.replaceWith(cardData);
    }

    var popupClose = document.querySelector('.popup__close');
    popupClose.addEventListener('click', function () {
      closeCard();
    });
    document.addEventListener('keydown', onCardEscPress);
  };

  window.popup = {
    open: openCard,
  };

})();
