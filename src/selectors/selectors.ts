import {StateType} from "../reduxStore/store";
import {InitialStateType, StatusType} from "../reducers/counter-reducer";

export const errorSelector = (state: StateType): StatusType => state.counterData.status

export const  stateSelector = (state: StateType): InitialStateType => state.counterData