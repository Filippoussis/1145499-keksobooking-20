'use strict';

(function () {

  var mainForm = document.querySelector('.ad-form');
  var mainPin = document.querySelector('.map__pin--main');

  var adFormAddress = mainForm.querySelector('#address');

  /**
   * записывает стартовое значение координат Главного пина
   */
  var setStartValueAddress = function () {
    adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.data.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.data.PinSize.MAIN_HEIGHT / 2);
  };

  /**
   * записывает текущее значение координат Главного пина
   */
  var setCurrentValueAddress = function () {
    adFormAddress.value = '' + Math.round(parseInt(mainPin.style.left, 10) + window.data.PinSize.MAIN_WIDTH / 2) + ', ' + Math.round(parseInt(mainPin.style.top, 10) + window.data.totalHeightMainPin);
  };

  /**
   * функция появления и скрытия сообщения об Успехе при отправке формы на сервер
   */
  var popupFormSuccess = function () {
    var successTemplate = document.querySelector('#success').content;
    var success = successTemplate.cloneNode(true);
    var main = document.querySelector('main');
    main.append(success);

    var successShow = document.querySelector('.success');

    document.addEventListener('click', function () {
      successShow.remove();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        successShow.remove();
      }
    });
  };

  /**
   * функция появления и скрытия сообщения об Ошибке при отправке формы на сервер
   */
  var popupFormError = function () {
    var successTemplate = document.querySelector('#error').content;
    var error = successTemplate.cloneNode(true);
    var main = document.querySelector('main');
    main.append(error);

    var errorShow = document.querySelector('.error');
    var errorButton = errorShow.querySelector('.error__button');

    document.addEventListener('click', function () {
      errorShow.remove();
    });

    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        errorShow.remove();
      }
    });

    errorButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      errorShow.remove();
    });
  };

  /**
   * добавляет/удаляет атрибут детям элемента
   * @param {HTMLCollection} children - коллекция DOM элементов
   * @param {Boolean} isAdd - флаг, принимающий значение true или false
   */
  var activateForm = function (children, isAdd) {
    Array.from(children).forEach(function (child) {
      if (isAdd) {
        child.removeAttribute('disabled');
      } else {
        child.setAttribute('disabled', 'disabled');
      }
    });
  };

  var reset = mainForm.querySelector('.ad-form__reset');
  reset.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.map.deActivate();
  });

  mainForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(mainForm), function () {
      window.map.deActivate();
      popupFormSuccess();
    }, popupFormError);
    evt.preventDefault();
  });

  window.form = {
    setStartValueAddress: setStartValueAddress,
    setCurrentValueAddress: setCurrentValueAddress,
    activate: activateForm,
  };


})();
