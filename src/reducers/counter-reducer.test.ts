import {
  changeMaxValueAC,
  changeMinValueAC,
  changeStatusAC,
  counterReducer, incrementCounterValueAC,
  InitialStateType, resetCounterValueAC
} from "./counter-reducer";

let state: InitialStateType

beforeEach(() => {
  const state = {
    counter: 0,
    values: {
      minValue: 0,
      maxValue: 5
    },
    errors: {
      minInputError: false,
      maxInputError: false
    },
    status: 'counter'
  }
})

test('counter status should be changed', () => {

  const result = counterReducer(state, changeStatusAC('error'))

  expect(result.status).toBe('error')
})

test('counter values should be changed', () => {

  const result1 = counterReducer(state, changeMinValueAC(3))
  const result2 = counterReducer(state, changeMaxValueAC(10))

  expect(result1.values.minValue).toBe(3)
  expect(result2.values.maxValue).toBe(10)
})

test('counter displaying value should be reset to given value', () => {

  const result = counterReducer(state, resetCounterValueAC())

  expect(result.counter).toBe(2)
})

test('counter displaying value should be increment by 1', () => {

  const result = counterReducer(state, incrementCounterValueAC())

  expect(result.counter).toBe(1)
})