export default (state, action) => {
  switch (action.type) {
    case 'LOAD_PRICES_FULFILLED':
      return {
        ...state,
        prices: action.payload,
      };

    case 'LOAD_PRICES_REJECTED':
      return {
        ...state,
        errorOnLoadingPrices: 'Ooops, looks like something went wrong while fetching the stock prices. Please try reloading the application',
      };

    default:
      return { ...state };
  }
};
