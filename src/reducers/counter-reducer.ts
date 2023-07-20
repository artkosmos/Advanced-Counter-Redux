export type InitialStateType = typeof initialState
export type ActionType =
  changeStatusACType
  | changeMinErrorACType
  | changeMaxErrorACType
  | changeMaxValueACType
  | changeMinValueACType
  | incrementCounterValueACType
  | resetCounterValueACType

const initialState = {
  counter: 0,
  values: {
    minValue: 0,
    maxValue: 5
  },
  errors: {
    minInputError: false,
    maxInputError: false
  },
  status: false
}

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case "CHANGE-STATUS":
      return {...state, status: action.payload.status}
    case "CHANGE-MAX-INPUT-ERROR":
      return {...state, errors: {...state.errors, maxInputError: action.payload.error}}
    case "CHANGE-MIN-INPUT-ERROR":
      return {...state, errors: {...state.errors, minInputError: action.payload.error}}
    case "CHANGE-MAX-INPUT-VALUE":
      return {...state, values: {...state.values, maxValue: action.payload.value}}
    case "CHANGE-MIN-INPUT-VALUE":
      return {...state, values: {...state.values, minValue: action.payload.value}}
    case "INCREMENT-COUNTER-VALUE":
      return {...state, counter: state.counter + 1}
    case "RESET-COUNTER-VALUE":
      return {...state, counter: action.payload.value}
    default:
      return state
  }
}

type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (status: boolean) => {
  return {
    type: 'CHANGE-STATUS',
    payload: {
      status
    }
  } as const
}

type changeMinErrorACType = ReturnType<typeof changeMinErrorAC>
export const changeMinErrorAC = (error: boolean) => {
  return {
    type: 'CHANGE-MIN-INPUT-ERROR',
    payload: {
      error
    }
  } as const
}

type changeMaxErrorACType = ReturnType<typeof changeMaxErrorAC>
export const changeMaxErrorAC = (error: boolean) => {
  return {
    type: 'CHANGE-MAX-INPUT-ERROR',
    payload: {
      error
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
    payload: {}
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