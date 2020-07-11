'use strict';

(function () {

  var TIMEOUT_IN_MS = 10000;

  var Url = {
    LOAD: 'https://javascript.pages.academy/keksobooking/data',
    SAVE: 'https://javascript.pages.academy/keksobooking',
  };

  var setXhr = function (xhr, onSuccess, onError) {
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

    setXhr(xhr, onSuccess, onError);

    xhr.open('GET', Url.LOAD);
    xhr.send();
  };

  var save = function (data, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    setXhr(xhr, onSuccess, onError);

    xhr.open('POST', Url.SAVE);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save,
  };

})();
