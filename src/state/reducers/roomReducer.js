const reducer = (state=1,action)=>{

    if(action.type === 'addRoom'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;
