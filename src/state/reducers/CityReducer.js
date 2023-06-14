const reducer = (state = "", action) => {
    if (action.type === "cityName") {
      return action.payload;
    } else {
      return state;
    }
  };
  
  export default reducer;