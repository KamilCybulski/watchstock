import firebase from 'firebase';
import { put, takeEvery } from 'redux-saga/effects';

import { addStockSymbolSuccess, addStockSymbolFailure } from '../actions/add-stock-symbol';


/**
 * addStockSymbol
 * @param {object} action ADD_STOCK_SYMBOL_REQUEST action, with single stock
 *                        symbol {string} as payload.
 * Add new stock symbol to the database
 * @returns {object} Iterator
 */
export function* addStockSymbol(action) {
  try {
    console.log('called yo!');
    const newRef = yield firebase.database().ref('/symbols').push();
    yield newRef.set(action.payload);
    yield put(addStockSymbolSuccess());
  } catch (e) {
    yield put(addStockSymbolFailure());
  }
}

/**
 * watchStockSymbol
 * Watch for ADD_STOCK_SYMBOL_REQUEST action and call addStockSymbol function.
 * @returns {object} Iterator
 */
export default function* watchAddStockSymbol() {
  yield takeEvery('ADD_STOCK_SYMBOL_REQUEST', addStockSymbol);
}
