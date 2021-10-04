import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  debugger;
  let str = String(n)
  .split('')
  .map( i => Number(i));
  str = str.reduce((a, b) => a + b);
  str = String(str);
  if(str.length === 1) {
    return Number(str);
  } else {
    return getSumOfDigits(str)
  }
}
