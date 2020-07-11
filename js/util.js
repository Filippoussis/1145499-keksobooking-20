'use strict';

(function () {

  /**
   * случайное значение из диапазона
   * @param {number} min - минимальное значение
   * @param {number} max - максимальное значение
   * @return {number} случайное значение
   */
  var getRandomBetween = function (min, max) {
    var random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  };

  /**
   * массив последовательных натуральных чисел
   * @param {number} start - начальное значение натурального числа
   * @param {number} end - конечное значение натурального числа
   * @return {array} массив последовательных натуральных чисел
   */
  var getArrayNaturalNumbers = function (start, end) {
    var naturalNumbers = [];
    for (var i = start; i <= end; i++) {
      naturalNumbers.push(i);
    }

    return naturalNumbers;
  };

  /**
   * случайное значение из массива
   * @param {array} array - исходный массив значений
   * @return {*} случайное значение из массива
   */
  var getRandomElementFromArray = function (array) {
    return array[getRandomBetween(0, array.length - 1)];
  };

  /**
   * массив случайной длины
   * @param {array} array - исходный массив значений
   * @return {array} массив случайной длины
   */
  var getRandomArray = function (array) {
    return array.slice(getRandomBetween(0, array.length - 1));
  };

  window.util = {
    getRandomBetween: getRandomBetween,
    getArrayNaturalNumbers: getArrayNaturalNumbers,
    getRandomElementFromArray: getRandomElementFromArray,
    getRandomArray: getRandomArray,
  };

})();
