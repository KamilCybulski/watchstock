import { all } from 'redux-saga/effects';

import watchFetchStockData from './fetch-stock-data';

/**
 * rootSaga
 * @returns {object} Iterator
 */
export default function* rootSaga() {
  yield all([
    watchFetchStockData(),
  ]);
}
