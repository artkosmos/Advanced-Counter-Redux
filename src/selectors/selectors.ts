import {StateType} from "../reduxStore/store";
import {InitialStateType, StatusType} from "../reducers/counter-reducer";

export const statusSelector = (state: StateType): StatusType => state.counterData.status
export const  stateSelector = (state: StateType): InitialStateType => state.counterData
export const  minValueSelector = (state: StateType): number => state.counterData.values.minValue
export const  maxValueSelector = (state: StateType): number => state.counterData.values.maxValue

