const reducer = (state="",action)=>{
     if(action.type === 'addSafariNameFreq'){
        return action.payload;
     }
     else{
        return state;
     }
}

export default reducer;