
// const initialState = {
//   count: null,
//   number: Math.floor(Math.random() * 101),
//   message: '',
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'GUESS_NUMBER':
//       if (action.payload > state.number) {
//         return { ...state, message: 'Не правильно берите ниже' };
//       } else if (action.payload < state.number) {
//         return { ...state, message: 'Не правильно берите выше' };
//       } else {
//         return { ...state, message: 'Поздравляем вы отгадали число' };
//       }
//     case 'RESTART':
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default reducer
const initialState = {
  count: null,
  number: Math.floor(Math.random() * 101),
  message: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GUESS_NUMBER':
      if (action.payload > state.number) {
        return { ...state, message: 'Не правильно берите ниже' };
      } else if (action.payload < state.number) {
        return { ...state, message: 'Не правильно берите выше' };
      } else {
        return { ...state, message: 'Поздравляем, вы отгадали число' };
      }
    case 'RESTART':
      return action.payload;
    }
  }
  export default reducer
