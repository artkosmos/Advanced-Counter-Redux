import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../reducers/counter-reducer";
import {getFromLocalStorage, saveToLocalStorage} from "../localStorage/srorage";

export type StateType = ReturnType<typeof rooReducer>

const rooReducer = combineReducers({
  counterData: counterReducer
})

export const store = legacy_createStore(rooReducer, getFromLocalStorage())

store.subscribe(() => saveToLocalStorage({
  counterData: {...store.getState().counterData, counter: store.getState().counterData.values.minValue}
}))