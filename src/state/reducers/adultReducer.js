const reducer = (state=2,action)=>{

    if(action.type === 'addAdult'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;
