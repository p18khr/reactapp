const reducer = (state=2,action)=>{

    if(action.type === 'addAdultSafari'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;
