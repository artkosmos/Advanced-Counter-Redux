import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../reducers/counter-reducer";

export type StateType = ReturnType<typeof rooReducer>

const rooReducer = combineReducers({
  counterData: counterReducer
})

export const store = legacy_createStore(rooReducer)