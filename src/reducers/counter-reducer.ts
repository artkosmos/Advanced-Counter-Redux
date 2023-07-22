export type InitialStateType = typeof initialState

export type ActionType =
  changeStatusACType
  | changeMaxValueACType
  | changeMinValueACType
  | incrementCounterValueACType
  | resetCounterValueACType

export type StatusType = 'setting'|'counter'|'error'

const initialState = {
  counter: 0,
  values: {
    minValue: 0,
    maxValue: 5
  },
  status: 'setting' as StatusType
}

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "CHANGE-STATUS":
      return {...state, status: action.payload.status}
    case "CHANGE-MAX-INPUT-VALUE":
      return {...state, values: {...state.values, maxValue: action.payload.value}}
    case "CHANGE-MIN-INPUT-VALUE":
      return {...state, values: {...state.values, minValue: action.payload.value}}
    case "INCREMENT-COUNTER-VALUE":
      return {...state, counter: state.counter + 1}
    case "RESET-COUNTER-VALUE":
      return {...state, counter: state.values.minValue}
    default:
      return state
  }
}

type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (status: StatusType) => {
  return {
    type: 'CHANGE-STATUS',
    payload: {
      status
    }
  } as const
}

type changeMinValueACType = ReturnType<typeof changeMinValueAC>
export const changeMinValueAC = (value: number) => {
  return {
    type: 'CHANGE-MIN-INPUT-VALUE',
    payload: {
      value
    }
  } as const
}

type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (value: number) => {
  return {
    type: 'CHANGE-MAX-INPUT-VALUE',
    payload: {
      value
    }
  } as const
}

type incrementCounterValueACType = ReturnType<typeof incrementCounterValueAC>
export const incrementCounterValueAC = () => {
  return {
    type: 'INCREMENT-COUNTER-VALUE',
  } as const
}

type resetCounterValueACType = ReturnType<typeof resetCounterValueAC>
export const resetCounterValueAC = (value: number) => {
  return {
    type: 'RESET-COUNTER-VALUE',
    payload: {
      value
    }
  } as const
}