const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let answerStr = '';

  answerStr += str + repeatWithSeparator(options['addition'] !== undefined ? options['addition'] : '', options['additionSeparator'] ? options['additionSeparator'] : '|', options['additionRepeatTimes']);

  function repeatWithSeparator(value, sep, repTimes) {
    const newStr = `${value}asd`.repeat(repTimes ? repTimes : 1);
    const splitStr = newStr.split('asd');
    splitStr.pop();

    return splitStr.join(sep);
  }

  return repeatWithSeparator(answerStr, options['separator'] ? options['separator'] : '+', options['repeatTimes']);
}

console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))

module.exports = {
  repeater
};
