const reducer = (state = "", action) => {
    if (action.type === "parkName") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default reducer;