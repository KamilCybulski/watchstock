export default (state, action) => {
  switch (action.type) {
    case 'LOAD_SYMBOLS':
      return {
        ...state,
        stockSymbols: Object.values(action.payload),
      };

    default:
      return { ...state };
  }
};
