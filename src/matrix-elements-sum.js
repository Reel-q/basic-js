const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const answerArr = [];

  matrix.forEach(array => {
    if (matrix.indexOf(array) ===  0) {
      array.forEach(item => {
        item > 0 ? answerArr.push(item) : item;
        // answerArr.push(item);
      });
    } else {
      let sda = matrix[matrix.indexOf(array) - 1];
      for (let i = 0; i < array.length; i++) {
        if (!(sda[i] === 0) &&  array[i] > 0) {
          answerArr.push(array[i]);
        }
      }
    }
  });

  return answerArr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

module.exports = {
  getMatrixElementsSum
};
