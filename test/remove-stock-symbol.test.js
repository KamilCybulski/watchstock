import firebase from 'firebase';
import { put } from 'redux-saga/effects';
import firebaseTestConfig from '../config/firebaseTestConfig';
import { removeStockSymbol } from '../src/sagas/remove-stock-symbol';
import {
  removeStockSymbolRequest,
  removeStockSymbolFailure,
  removeStockSymbolSuccess } from '../src/actions/remove-stock-symbol';

firebase.initializeApp(firebaseTestConfig);

describe('Action creators work as intended', () => {
  it('Request action', () => {
    expect(removeStockSymbolRequest('aapl')).toEqual({
      type: 'REMOVE_STOCK_SYMBOL_REQUEST',
      payload: 'aapl',
    });
  });

  it('Success action', () => {
    expect(removeStockSymbolSuccess()).toEqual({
      type: 'REMOVE_STOCK_SYMBOL_SUCCESS',
    });
  });

  it('Failure action', () => {
    expect(removeStockSymbolFailure()).toEqual({
      type: 'REMOVE_STOCK_SYMBOL_FAILURE',
    });
  });
});


describe('removeStockSymbol saga success', () => {
  const action = removeStockSymbolRequest('aapl');
  const gen = removeStockSymbol(action);

  it('Should call function to remove given symbol from firebase db', () => {
    expect(gen.next().value).toEqual(expect.objectContaining({
      CALL: expect.objectContaining({
        args: expect.arrayContaining(['value', expect.any(Function)]),
        context: expect.stringMatching('https://test-project-159e8.firebaseio.com/symbols'),
        fn: expect.any(Function),
      }),
    }));
  });

  it('Should dispatch a success action', () => {
    expect(gen.next().value).toEqual(put(removeStockSymbolSuccess()));
  });
});


describe('removeStockSymbol saga failure', () => {
  const action = removeStockSymbolRequest('aapl');
  const gen = removeStockSymbol(action);

  // Quickly call next() cause we don't care much about calling firebase API
  gen.next();

  it('Dispatches a failure action', () => {
    expect(gen.throw().value).toEqual(put(removeStockSymbolFailure()));
  });
});
