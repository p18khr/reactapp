const reducer = (state=2000,action)=>{
   if(action.type === 'addRooms'){
     return action.payload
   }
   else if(action.type === 'removeRooms'){
    return action.payload
   }
   else{
    return state;
   }
}

export default reducer;