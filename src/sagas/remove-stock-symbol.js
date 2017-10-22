import firebase from 'firebase';
import { put, takeEvery, call } from 'redux-saga/effects';
import {
  removeStockSymbolSuccess,
  removeStockSymbolFailure } from '../actions/remove-stock-symbol';

/**
 * removeStockSymbol
 * @param {object} action Action object with stock symbol as payload.
 * Remove provided stock symbol from the database.
 * @returns {object} Iterator
 */
export function* removeStockSymbol(action) {
  try {
    const newRef = firebase.database()
      .ref('/symbols')
      .orderByValue()
      .equalTo(action.payload);

    const callback = (snap) => {
      const target = Object.keys(snap.val())[0];
      firebase.database().ref('/symbols').child(target).remove();
    };

    yield call([newRef, 'once'], 'value', callback);
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

