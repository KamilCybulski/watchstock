export const addStockSymbolRequest = symbol => ({
  type: 'ADD_STOCK_SYMBOL_REQUEST',
  payload: symbol,
});

export const addStockSymbolSuccess = () => ({
  type: 'ADD_STOCK_SYMBOL_SUCCESS',
});

export const addStockSymbolFailure = () => ({
  type: 'ADD_STOCK_SYMBOL_FAILRUE',
});

