'use strict';

(function () {

  /**
   * полученние данных с сервера
   * @param {Array} data - данные с сервера
   */
  var onSuccess = function (data) {
    window.ads = data;
    window.pin.render(data);
  };

  window.load = {
    success: onSuccess,
  };

})();
