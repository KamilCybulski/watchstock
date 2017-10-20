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

    default:
      return { ...state };
  }
};
