const reducer = (state=0,action)=>{

    if(action.type === 'addKid'){
        return action.payload;
    }
    else{
        return state;
    }
}

export default reducer;
