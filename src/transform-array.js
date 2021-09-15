import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let newArr = [...arr];
  if (arr instanceof Array) {
    for(let i = 0; i< arr.length; i++) {
      let cur = arr[i];
      let next = arr[i+1];
      let prev = arr[i-1];
      if (cur === '--double-next') {
        if(next) {
          newArr.splice(i, 1, next);
        } else {
          newArr.splice(i, 1);
        }
      }
      if (cur === '--double-prev') {
        if (prev) {
          newArr.splice(i, 1, prev);
        } else {
          newArr.splice(i, 1);
        }
      }
      if (cur === '--discard-prev') {
        if (prev) {
          newArr.splice(i-1, 2);
        } else {
          newArr.splice(i, 1);
        }
      }
      if (cur === '--discard-next') {
        if(next) {
          newArr.splice(i, 2);
        } else {
          newArr.splice(i, 1);
        }
      }
    }
    return newArr;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

