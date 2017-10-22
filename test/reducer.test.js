import reducer from '../src/reducers/reducer';
import {
  fetchStockDataFailure,
  fetchStockDataSuccess } from '../src/actions/fetch-stock-data';
import {
  addStockSymbolFailureDB,
  addStockSymbolFailureInvalid } from '../src/actions/add-stock-symbol';


const initialState = {
  stocks: Object.create(null),
  errors: {
    onStockDataFetch: false,
    onStockSymbolSave: false,
    stockDoesntExist: false,
  },
};

const makeNewState = action => reducer(initialState, action);


describe('Reducer:', () => {
  it('FETCH_STOCK_DATA_FAILURE action', () => {
    const action = fetchStockDataFailure('Error Here');
    const newState = makeNewState(action);

    expect(newState).toEqual({
      stocks: expect.objectContaining({}),
      errors: {
        onStockDataFetch: true,
        onStockSymbolSave: false,
        stockDoesntExist: false,
      },
    });
  });

  it('FETCH_STOCK_DATA_SUCCESS action', () => {
    const action = fetchStockDataSuccess('Some Data');
    const newState = makeNewState(action);

    expect(newState).toEqual({
      stocks: 'Some Data',
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: false,
        stockDoesntExist: false,
      },
    });
  });

  it('ADD_STOCK_SYMBOL_FAILURE_DB action', () => {
    const action = addStockSymbolFailureDB();
    const newState = makeNewState(action);

    expect(newState).toEqual({
      stocks: expect.objectContaining({}),
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: true,
        stockDoesntExist: false,
      },
    });
  });

  it('ADD_STOCK_SYMBOL_FAILURE_SYMBOL_INVALID action', () => {
    const action = addStockSymbolFailureInvalid();
    const newState = makeNewState(action);

    expect(newState).toEqual({
      stocks: expect.objectContaining({}),
      errors: {
        onStockDataFetch: false,
        onStockSymbolSave: false,
        stockDoesntExist: true,
      },
    });
  });
});

