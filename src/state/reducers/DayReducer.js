const reducer = (state=1,action) =>{
   if(action.type==='Days'){
       return action.payload;
   }
   else{
    return state;
   }
}

export default reducer;