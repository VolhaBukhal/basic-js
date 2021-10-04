import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {

  debugger;

  let tempArr = arr.map(el => el !== -1); //false for -1
  let numberArr = arr.filter(el => el !== -1);

  function bubblesort(a) {
    for (let i = 0; i< a.length; i++) {
      for(let j = 0; j < a.length; j++) {
        let current = a[j];
        let next = a[j+1];
  
        if (next < current) {
          let temp = a[j];
          a[j] = next;
          a[j+1]= temp;
        }
      }
    }
    return a;
  } 

  let sortedNumber = bubblesort(numberArr);

  for(let i = tempArr.length -1; i >= 0; i--) {
    let cur = tempArr[i];
    let lastNumber = numberArr[numberArr.length - 1];
    if(cur) {
      cur = lastNumber;
      tempArr[i] = cur;
      numberArr.pop()
    } else {
      tempArr[i] = -1;
    }
  }
  return tempArr

}
