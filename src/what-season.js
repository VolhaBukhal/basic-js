import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let seasons = ['winter', 'spring', 'summer', 'autumn'];
  debugger;
  if (arguments.length === 0 ) {
    return 'Unable to determine the time of year!';
  }  else if ( !Date.parse(date) || (typeof date.getMonth !== 'function')  ) {
    throw new Error("Invalid date!");
  } 

  let month = date.getMonth();
  if ( [11, 0, 1].includes(month) ) {
    return seasons[0];
  } else if ( [2, 3, 4].includes(month) ) {
    return seasons[1];
  } else if ( [5, 6, 7].includes(month) ) {
    return seasons[2];
  } else {
    return seasons[3];
  }
}
