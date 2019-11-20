const betsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BETS':
        return action.payload;
      default:
        return state;
    }
  };
  export default betsReducer;
  