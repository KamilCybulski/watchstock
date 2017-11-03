/**
 * @param {array} arr Array of things
 * @param {number} n An integer
 * @description Create a new array that contains n last elements of given array
 * @returns {array} New array
 */
export default (arr, n) => (
  n === 365
    ? arr
    : arr.slice(-n)
);
