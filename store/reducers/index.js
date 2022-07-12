import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserReducer from "./UserReducer";

const reducers = {
  counterStore: CounterReducer,
  userStore: UserReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
