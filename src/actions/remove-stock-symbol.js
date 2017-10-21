export const removeStockSymbolRequest = symbol => ({
  type: 'REMOVE_STOCK_SYMBOL_REQUEST',
  payload: symbol,
});


export const removeStockSymbolSuccess = () => ({
  type: 'REMOVE_STOCK_SYMBOL_SUCCESS',
});


export const removeStockSymbolFailure = () => ({
  type: 'REMOVE_STOCK_SYMBOL_FAILURE',
});
