import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();
//Redux  - Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//Redux  - function Action

function buyCake() {
  return {
    type: BUY_CAKE
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM
  };
}

//reducer
//(previousState, action)=>newState

const initialCakeState = {
  numOfCake: 10
};
const initialIceCreamState = {
  numOfIceCream: 20
};
//Redux  - Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1
      };

    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      };
    default:
      return state;
  }
};

//combine reducers
const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});
//Redux  - Store
const store = createStore(rootReducers, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
