/**
 * loadSymbols
 * @param {object} symbols Object that contains symbols of stocks that app
 *                         keeps track of. They are stored in an object instrad
 *                         of array because of firebase's lack of support for
 *                         arrays. Each key is a unique id provided by firebase,
 *                         and each value is a stock symbol. They are coverted
 *                         into an array by the reducer.
 * @returns {object} Redux action
 */
export default function loadSymbols(symbols) {
  return {
    type: 'LOAD_SYMBOLS',
    payload: symbols,
  };
}
