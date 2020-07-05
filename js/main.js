'use strict';

(function () {

  var getPins = function () {
    window.backend.load(window.load.success, window.error.on);
  };

  window.main = {
    getPins: getPins,
  };

})();
