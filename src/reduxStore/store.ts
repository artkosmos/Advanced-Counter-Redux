import {Action, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../reducers/counter-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";

export type StateType = ReturnType<typeof rooReducer>

const rooReducer = combineReducers({
  counterData: counterReducer
})

export const store = legacy_createStore(rooReducer, applyMiddleware(thunk))

export type ThunkAppDispatch = ThunkDispatch<StateType, void, Action>

// alternative method with subscribe and createStore ( second parameter getFromLocalStorage )

// store.subscribe(() => saveToLocalStorage({
//   counterData: {...store.getState().counterData, counter: store.getState().counterData.values.minValue}
// }))