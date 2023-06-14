const reducer = (state = 0, action) => {
  if (action.type === "addDays") {
    return action.payload;
  } else {
    return state;
  }
};

export default reducer;
