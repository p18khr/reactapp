const reducer = (state=0,action) =>{
    if(action.type==='addOtherActivity'){
        return state+1;
    }
    else if(action.type==='removeOtherActivity'){
        return state-1;
    }
    else{
     return state;
    }
 }
 
 export default reducer;