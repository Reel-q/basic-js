const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringN = String(n);
  let digitsArr = [];

  for (let i = 0; i < stringN.length; i ++) {
    const digit = +stringN.replace(stringN[i], '');
    digitsArr.push(digit);
  }

  return Math.max(...digitsArr);
}


module.exports = {
  deleteDigit
};
