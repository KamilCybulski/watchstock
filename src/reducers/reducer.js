export default (state, action) => {
  switch (action.type) {
    case 'FETCH_STOCK_DATA_SUCCESS':
      return {
        ...state,
        stocks: action.payload,
      };

    case 'FETCH_STOCK_DATA_FAILURE':
      return {
        ...state,
        errors: {
          ...state.errors,
          onStockDataFetch: true,
        },
      };

    case 'ADD_STOCK_SYMBOL_FAILURE_DB_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          onStockSymbolSave: true,
        },
      };

    case 'ADD_STOCK_SYMBOL_FAILURE_SYMBOL_INVALID':
      return {
        ...state,
        errors: {
          ...state.errors,
          stockDoesntExist: true,
        },
      };

    default:
      return { ...state };
  }
};
