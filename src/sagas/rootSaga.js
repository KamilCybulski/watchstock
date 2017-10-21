import { all } from 'redux-saga/effects';

import watchFetchStockData from './fetch-stock-data';
import watchAddStockSymbol from './add-stock-symbol';
import watchRemoveStockSymbol from './remove-stock-symbol';

/**
 * rootSaga
 * @returns {object} Iterator
 */
export default function* rootSaga() {
  yield all([
    watchFetchStockData(),
    watchAddStockSymbol(),
    watchRemoveStockSymbol(),
  ]);
}
