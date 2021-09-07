import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import film from "./Reducer/film";
import auth from "./Reducer/auth";
import user from "./Reducer/user";
const rootReducer = combineReducers({
  film,
  auth,
  user,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
