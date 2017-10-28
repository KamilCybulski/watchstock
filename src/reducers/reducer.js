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

    case 'CLEAR_ALL_ERRORS':
      return {
        ...state,
        errors: {
          onStockDataFetch: false,
          onStockSymbolSave: false,
          stockDoesntExist: false,
          symbolAlreadyTracked: false,
        },
      };

    case 'SYMBOL_TRACKED_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          symbolAlreadyTracked: true,
        },
      };

    default:
      return { ...state };
  }
};
