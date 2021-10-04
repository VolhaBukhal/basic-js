import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  
  let arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    let cur = str[i];
    let next = str[i+1];
    if(next === cur) {
      count += 1;
    } else {
      if(count === 1) {
        arr.push(cur)
      }else {
        arr.push(`${count}${cur}`)
        count = 1;
      }
    }
  }
  return arr.join('');
}
