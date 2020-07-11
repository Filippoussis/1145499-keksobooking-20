'use strict';

(function () {

  var FILE_TYPES = ['jpg', 'jpeg', 'png'];

  var MAIN_FORM = document.querySelector('.ad-form');

  var Avatar = {
    UPLOAD: MAIN_FORM.querySelector('.ad-form__field input[name = avatar]'),
    PREVIEW: MAIN_FORM.querySelector('.ad-form-header__preview img'),
  };

  var House = {
    UPLOAD: MAIN_FORM.querySelector('.ad-form__upload input[name = images]'),
    PHOTO: MAIN_FORM.querySelector('.ad-form__photo'),
  };

  var createElement = function (node) {
    var image = document.createElement('img');
    image.style.width = '70px';
    image.style.height = '70px';
    node.append(image);

    return document.querySelector('.ad-form__photo img');
  };

  var imageReader = function (fileChooser, preview) {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  };

  Avatar.UPLOAD.addEventListener('change', function () {
    imageReader(Avatar.UPLOAD, Avatar.PREVIEW);
  });

  House.UPLOAD.addEventListener('change', function () {
    var PREVIEW = createElement(House.PHOTO);
    imageReader(House.UPLOAD, PREVIEW);
  });

})();
