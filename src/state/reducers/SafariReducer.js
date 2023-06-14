const reducer = (state=0,action) =>{
    if(action.type==='addSafari'){
        return state+1;
    }
    else if(action.type==='removeSafari'){
        return state-1;
    }
    else{
     return state;
    }
 }
 
 export default reducer;