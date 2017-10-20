import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

import { fetchStockDataSuccess, fetchStockDataFailure } from '../actions/fetch-stock-data';

/**
 * fetchStockData
 * @param {object} action FETCH_STOCK_DATA_REQUEST action with an array
 *                        of stock symbols as payload.
 * @returns {object} Iterator
 */
export function* fetchStockData(action) {
  try {
    const symbolsString = action.payload.join(',');
    const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbolsString}&types=price`;
    const stockData = yield axios.get(url);

    yield put(fetchStockDataSuccess(stockData.data));
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