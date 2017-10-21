import firebase from 'firebase';
import { put, takeEvery } from 'redux-saga/effects';
import {
  removeStockSymbolSuccess,
  removeStockSymbolFailure } from '../actions/remove-stock-symbol';

/**
 * removeStockSymbol
 * @param {object} action Action object with stock symbol as payload.
 * Remove provided stock symbol from the database.
 * @returns {object} Iterator
 */
function* removeStockSymbol(action) {
  try {
    const ref = firebase.database().ref('/symbols');
    yield ref.orderByValue()
      .equalTo(action.payload)
      .once('value', (snap) => {
        const target = Object.keys(snap.val())[0];
        ref.child(target).remove();
      });
    yield put(removeStockSymbolSuccess());
  } catch (e) {
    yield put(removeStockSymbolFailure());
  }
}

/**
 * watchRemoveStockSymbol
 * Watch for REMOVE_STOCK_SYMBOL_REQUEST action and call addStockSymbol
 * function.
 * @returns {object} Iterator
 */
export default function* watchRemoveStockSymbol() {
  yield takeEvery('REMOVE_STOCK_SYMBOL_REQUEST', removeStockSymbol);
}

