import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import { fetchStockDataSuccess, fetchStockDataFailure } from '../actions/fetch-stock-data';

/**
 * fetchStockData
 * @param {object} action FETCH_STOCK_DATA_REQUEST action with an array
 *                        of stock symbols as payload.
 * Fetch stock data (based on symbols in action.payload) from iex api.
 * @returns {object} Iterator
 */
export function* fetchStockData(action) {
  try {
    if (action.payload.length === 0) {
      yield put(fetchStockDataSuccess({}));
    } else {
      const symbolsString = action.payload.join(',');
      const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbolsString}&types=company,chart&range=1y`;
      const stockData = yield call(axios.get, url);

      yield put(fetchStockDataSuccess(stockData.data));
    }
  } catch (e) {
    yield put(fetchStockDataFailure(e.message));
  }
}

/**
 * watchFetchStockData
 * Watch for FETCH_STOCK_DATA_REQUEST actions and call fetchStockData function
 * @returns {object} Iterator
 */
export default function* watchFetchStockData() {
  yield takeEvery('FETCH_STOCK_DATA_REQUEST', fetchStockData);
}
