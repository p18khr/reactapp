const reducer = (state="",action)=>{
    if(action.type === 'addOtherNameFreq'){
       return action.payload;
    }
    else{
       return state;
    }
}

export default reducer;