import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let repeatTimes = options.repeatTimes || null;
  let separator = options.separator || '+';
  let addition = options.addition || null;
  let additionRepeatTimes = options.additionRepeatTimes || null;
  let additionSeparator = addition ? (options.additionSeparator || '|') : null;

  let bigAddition = '';
  if (addition) {
    bigAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator)
  }
  let strChunk = str + bigAddition;
  let result = Array(repeatTimes).fill(strChunk).join(separator)
  return result
}
