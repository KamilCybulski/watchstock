/**
 * loadSymbols
 * @param {array} symbols Array of stock symbols (strings).
 * @returns {object} Redux action
 */
export default function loadSymbols(symbols) {
  return {
    type: 'LOAD_SYMBOLS',
    payload: symbols,
  };
}
