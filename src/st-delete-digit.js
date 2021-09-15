import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let arrNumbers = [];
  let str = n.toString();
  let arrStr = [...str];
  for(let i = 0; i < arrStr.length; i++) {
    let temp = [...str];
    temp.splice(i,1);
    arrNumbers.push(temp.join(''));

  }
  return Math.max(...arrNumbers);
}
