/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */

export const arrayIntersection = (array = [], values = []) => {
  let newArrayIntersected = [];
  if (!Array.isArray(array) || !Array.isArray(values)) {
    throw new TypeError('The arguments must be arrays');
  } else {
    newArrayIntersected = [...new Set(array.filter((x) => values.includes(x)))];
  }
  return newArrayIntersected;
};
