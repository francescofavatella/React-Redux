import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { appReducers, postReducers } from "./component/app/reducers";

const rootReducer = combineReducers({
  appReducers,
  postReducers
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
