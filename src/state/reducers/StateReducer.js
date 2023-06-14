const reducer = (state = "", action) => {
    if (action.type === "stateName") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default reducer;