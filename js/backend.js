'use strict';

(function () {

  var Url = {
    LOAD: 'https://javascript.pages.academy/keksobooking/data',
    SAVE: 'https://javascript.pages.academy/keksobooking',
  };

  var TIMEOUT_IN_MS = 10000;

  var renderError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var xhrTemplate = function (xhr, onSuccess, onError) {
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      var error;
      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          break;
        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь не авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;
        default:
          error = 'Cтатус ответа: : ' + xhr.status + ' ' + xhr.statusText;
      }

      if (error) {
        onError(error);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = TIMEOUT_IN_MS;
  };

  var load = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhrTemplate(xhr, onSuccess, onError);

    xhr.open('GET', Url.LOAD);
    xhr.send();
  };

  var save = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhrTemplate(xhr, onSuccess, onError);

    xhr.open('POST', Url.SAVE);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save,
    renderError: renderError,
  };

})();
