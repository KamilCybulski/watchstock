export default (state, action) => {
  switch (action.type) {
    case 'LOAD_SYMBOLS':
      return {
        ...state,
        stockSymbols: action.payload,
      };

    default:
      return { ...state };
  }
};
