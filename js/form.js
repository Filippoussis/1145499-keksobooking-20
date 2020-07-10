'use strict';

(function () {

  var MAIN_FORM = document.querySelector('.ad-form');

  /**
   * функция появления и скрытия сообщения об Успехе при отправке формы на сервер
   */
  var showPopupFormOnSuccess = function () {
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
  var showPopupFormOnError = function () {
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

  var reset = MAIN_FORM.querySelector('.ad-form__reset');
  reset.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.map.deActivate();
  });

  MAIN_FORM.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(MAIN_FORM), function () {
      window.map.deActivate();
      showPopupFormOnSuccess();
    }, showPopupFormOnError);
    evt.preventDefault();
  });

  window.form = {
    activate: activateForm,
  };

})();
