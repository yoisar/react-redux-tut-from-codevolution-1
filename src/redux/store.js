import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';

//debugger redux tools
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
const store = createStore(
  rootReducer,
  composeEnhacers(applyMiddleware(logger, thunk))
);

export default store;
