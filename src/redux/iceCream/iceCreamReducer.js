import { BUY_ICECREAM } from "./iceCreamTypes";

const intialState = {
  numbOfIceCream: 20
};
const iceCreamReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numbOfIceCream: state.numbOfIceCream - 1
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
