'use strict';

(function () {

  var MAIN_FORM = document.querySelector('.ad-form');

  var Avatar = {
    UPLOAD: MAIN_FORM.querySelector('.ad-form__field input[name = avatar]'),
    PREVIEW: MAIN_FORM.querySelector('.ad-form-header__preview img'),
  };

  var House = {
    UPLOAD: MAIN_FORM.querySelector('.ad-form__upload input[name = images]'),
    PHOTO: MAIN_FORM.querySelector('.ad-form__photo'),
  };

  var FILE_TYPES = ['jpg', 'jpeg', 'png'];

  var ImageSize = {
    WIDTH: '70px',
    HEIGHT: '70px',
  };

  var createElement = function (node) {
    var image = document.createElement('img');
    image.style.width = ImageSize.WIDTH;
    image.style.height = ImageSize.HEIGHT;
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
