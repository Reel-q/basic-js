const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count  = (arr) => {
    return arr.reduce((acc, current) => {
      return acc + (current === '^^' ? 1 : 0);
    }, 0);
  };

  let answer = 0;
  matrix.forEach(array => {
    answer += count(array);
  })
  
  return answer;
}

module.exports = {
  countCats
};
