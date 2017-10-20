export const fetchStockDataRequest = symbols => ({
  type: 'FETCH_STOCK_DATA_REQUEST',
  payload: symbols,
});

export const fetchStockDataSuccess = data => ({
  type: 'FETCH_STOCK_DATA_SUCCESS',
  payload: data,
});

export const fetchStockDataFailure = err => ({
  type: 'FETCH_STOCK_DATA_FAILURE',
  payload: err,
});

