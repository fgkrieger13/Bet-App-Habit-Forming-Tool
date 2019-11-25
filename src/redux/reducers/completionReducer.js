const completionReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_COMPLETION':
        return action.payload;
      default:
        return state;
    }
  };
  export default completionReducer;
  