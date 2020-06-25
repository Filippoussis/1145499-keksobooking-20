'use strict';

window.map = (function () {

  var map = document.querySelector('.map');
  var mainPin = map.querySelector('.map__pin--main');

  var mainForm = document.querySelector('.ad-form');
  var mapFilter = document.querySelector('.map__filters');

  var adFormAddress = mainForm.querySelector('#address');

  // здесь реализую фунцию метки при drag and drop
  adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.mocks.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.mocks.PinSize.MAIN_HEIGHT / 2);

  var addRemoveAttributeOnChildren = function (children, isAdd) {
    Array.from(children).forEach(function (child) {
      if (isAdd) {
        child.setAttribute('disabled', 'disabled');
      } else {
        child.removeAttribute('disabled');
      }
    });
  };

  var activatedForms = function (form, filter, isDisabled) {
    if (!isDisabled) {
      addRemoveAttributeOnChildren(form.children, true);
      addRemoveAttributeOnChildren(filter.children, true);
    } else {
      addRemoveAttributeOnChildren(form.children, false);
      addRemoveAttributeOnChildren(filter.children, false);
    }
  };

  activatedForms(mainForm, mapFilter, false);

  var onPressMainPin = function (evt) {
    if (evt.button === 0 || evt.key === 'Enter') {
      activateMode();
    }
  };

  var activateMode = function () {
    window.pin.renderPins(window.data.dataAds);
    activatedForms(mainForm, mapFilter, true);

    // здесь реализую фунцию метки drag and drop
    adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.mocks.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.mocks.PinSize.SIMILAR_HEIGHT);

    mainForm.classList.remove('ad-form--disabled');
    map.classList.remove('map--faded');

    mainPin.removeEventListener('mousedown', onPressMainPin);
    mainPin.removeEventListener('keydown', onPressMainPin);
  };

  mainPin.addEventListener('mousedown', onPressMainPin);
  mainPin.addEventListener('keydown', onPressMainPin);

})();
