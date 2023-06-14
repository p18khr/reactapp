const reducer = (state=0,action) => {
  if (action.type === "addSafariAmount") {
    return state + action.payload;
  } else if (action.type === "removeSafariAmount") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
