export const addStockSymbolRequest = (symbol, currentSymbols) => ({
  type: 'ADD_STOCK_SYMBOL_REQUEST',
  symbol,
  currentSymbols,
});

export const addStockSymbolSuccess = () => ({
  type: 'ADD_STOCK_SYMBOL_SUCCESS',
});

export const addStockSymbolFailureDB = () => ({
  type: 'ADD_STOCK_SYMBOL_FAILURE_DB_ERROR',
});

export const addStockSymbolFailureInvalid = () => ({
  type: 'ADD_STOCK_SYMBOL_FAILURE_SYMBOL_INVALID',
});

