const reducer = (state = "", action) => {
  if (action.type === "activityName") {
    return action.payload;
  } else {
    return state;
  }
};

export default reducer;