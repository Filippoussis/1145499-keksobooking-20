'use strict';

window.popup = (function () {

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

  return {

    openCard: function (ad) {
      var cardData = window.card.renderCard(ad);
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
    },

  };

})();
