// import { useContext, useEffect } from "react"
// import AppContext from "../../contexts/AppContext"

// const {hotels,getHotels} = useContext(AppContext);



// const reducer = (state=hotels,action) =>{

//     useEffect(()=>{
//         getHotels();
//     })

//     if(action.type === 'sort'){
//         return hotels.sort((p1, p2) => {
//             if (p1.price < p2.price) return -1
//             if (p1.price > p2.price) return 1
//             return 0;
//           });
//     }
//     else if(action.type === 'reverse'){
//         return hotels.sort((p1, p2) => {
//             if (p1.price > p2.price) return -1;
//             if (p1.price < p2.price) return 1;
//             return 0;
//           });
//     }
//     else{
//         return state;
//     }
// }

// export default reducer;