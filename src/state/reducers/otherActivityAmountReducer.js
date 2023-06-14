const reducer = (state=0,action) => {
  if(action.type === 'addOtherActivityAmount'){
    return state+action.payload;
  }
  else if(action.type === 'removeOtherActivityAmount'){
    return state-action.payload;
  }
  else{
    return state;
  }
}

export default reducer;