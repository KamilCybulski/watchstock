import reducer from '../src/reducers/reducer';
import changePeriodDisplayed from '../src/actions/change-period-displayed';
import {
  fetchStockDataFailure,
  fetchStockDataSuccess } from '../src/actions/fetch-stock-data';
import {
  addStockSymbolFailureDB,
  addStockSymbolFailureInvalid } from '../src/actions/add-stock-symbol';
import {
  clearAllErrors,
  symbolTrackedError } from '../src/actions/error-actions';

const state = {
  stocks: null,
  timePeriodDisplayed: 365,
  errors: {
    onStockDataFetch: false,
    onStockSymbolSave: false,
    stockDoesntExist: false,
    symbolAlreadyTracked: false,
  },
};

const stateWithErrors = {
  stocks: null,
  timePeriodDisplayed: 365,
  errors: {
    onStockDataFetch: true,
    onStockSymbolSave: true,
    stockDoesntExist: true,
    symbolAlreadyTracked: false,
  },
};

describe('Reducer', () => {
  it('CHANGE_TIME_PERIOD_DISPLAYED action', () => {
    expect(reducer(state, changePeriodDisplayed(7))).toEqual({
      stocks: null,
      timePeriodDisplayed: 7,
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: false,
        stockDoesntExist: false,
        symbolAlreadyTracked: false,
      },
    });
  });


  it('FETCH_STOCK_DATA_SUCCESS action', () => {
    expect(reducer(state, fetchStockDataSuccess('aaa'))).toEqual({
      stocks: 'aaa',
      timePeriodDisplayed: 365,
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: false,
        stockDoesntExist: false,
        symbolAlreadyTracked: false,
      },
    });
  });


  it('FETCH_STOCK_DATA_FAILURE action', () => {
    expect(reducer(state, fetchStockDataFailure('some error'))).toEqual({
      stocks: null,
      timePeriodDisplayed: 365,
      errors: {
        onStockDataFetch: true,
        onStockSymbolSave: false,
        stockDoesntExist: false,
        symbolAlreadyTracked: false,
      },
    });
  });


  it('ADD_STOCK_SYMBOL_FAILURE_DB_ERROR action', () => {
    expect(reducer(state, addStockSymbolFailureDB())).toEqual({
      stocks: null,
      timePeriodDisplayed: 365,
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: true,
        stockDoesntExist: false,
        symbolAlreadyTracked: false,
      },
    });
  });


  it('ADD_STOCK_SYMBOL_FAILURE_SYMBOL_INVALID action', () => {
    expect(reducer(state, addStockSymbolFailureInvalid())).toEqual({
      stocks: null,
      timePeriodDisplayed: 365,
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: false,
        stockDoesntExist: true,
        symbolAlreadyTracked: false,
      },
    });
  });


  it('CLEAR_ALL_ERRORS action', () => {
    expect(reducer(stateWithErrors, clearAllErrors())).toEqual({
      stocks: null,
      timePeriodDisplayed: 365,
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: false,
        stockDoesntExist: false,
        symbolAlreadyTracked: false,
      },
    });
  });


  it('SYMBOL_TRACKED_ERROR action', () => {
    expect(reducer(state, symbolTrackedError())).toEqual({
      stocks: null,
      timePeriodDisplayed: 365,
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: false,
        stockDoesntExist: false,
        symbolAlreadyTracked: true,
      },
    });
  });
});

