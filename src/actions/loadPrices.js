import axios from 'axios';

/**
 * loadSymbols
 * @param {object} symbols Object that contains symbols of stocks that app
 *                         keeps track of. They are stored in an object instrad
 *                         of array because of firebase's lack of support for
 *                         arrays. Each key is a unique id provided by firebase,
 *                         and each value is a stock symbol. They are coverted
 *                         into an array by the reducer.
 * Fetch the information about prices from iex api and populate action's
 * payload with it.
 * @returns {object} Redux action
 */
export default function loadPrices(symbols) {
  return {
    type: 'LOAD_PRICES',
    payload: axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${Object.values(symbols).join(',')}&types=price`)
      .then(res => res.data),
  };
}
