import { createStore, combineReducers } from "redux";
import loginReducer from "./loginReducer";
import elementsReducer from "./elementsReducer";

let reducers = combineReducers({ 
   loginPage : loginReducer,
   elements : elementsReducer
});

let store = createStore(reducers);

export default store;