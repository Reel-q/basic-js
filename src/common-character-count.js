const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const stringsArr = [s1.split(''), s2.split('')];
  const commonCharsArr = [];
  stringsArr[0].forEach(item => {
    if (stringsArr[1].includes(item)) {
      commonCharsArr.push(item);
      stringsArr[1].splice(stringsArr[1].indexOf(item), 1);
    }
  })
  return commonCharsArr.length;
}

console.log(getCommonCharacterCount('', 'abc'));

module.exports = {
  getCommonCharacterCount
};
