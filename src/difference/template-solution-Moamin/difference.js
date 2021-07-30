/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 *
 */

export const difference = (array = [], values = []) => {
  const newArr = []; // creating a new array for the resulted value
  array.forEach((item) => {
    if (!values.includes(item)) {
      // looping through the second array and comparing between the 2 arrays items
      newArr.push(item); // pushing the items of the 1st array and not included to the 2nd array to the new array
    }
  });
  return newArr;
};
