import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  let str = [...s1];
  let str2 = s2;
  let count = 0;
  for (let el of str) {
    if (str2.includes(el)) {
      count++;
      str2 = deleteEl(el, str2)
    } else {
      continue;
    }
  }
  function deleteEl(el, word) {
    let regexp =  new RegExp(el);
    return word.replace(regexp, str => str = "");
  }
  return count;
}
