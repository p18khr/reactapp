const reducer = (state = [], action) => {
  // if (action.type === "addActivity") {
  //   if (state.length != 0) {
  //     for (let i = 0; i < state.length; i++) {
  //       if (state[i].id === action.payload) {
  //         state[i].count === state[i].count + 1;
  //         return state;
  //       }
  //     }
  //   }
  //     return state.push(...state,[{ id: action.payload, count: 1 }]);

  // } else if (action.type === "removeActivity") {
  //   if (state.length != 0) {
  //     for (let i = 0; i < state.length; i++) {
  //       if (state[i].id === action.payload) {
  //         state[i].count === state[i].count - 1;
  //         return state;
  //       }
  //     }
  //   }
  //   return state;
  // }

  if (action.type === "addArray") {
    return action.payload;
  } else {
    return state;
  }
};

export default reducer;
