import {
  changeCounterValueAC,
  changeMaxErrorAC,
  changeMaxValueAC,
  changeMinErrorAC, changeMinValueAC,
  changeStatusAC,
  counterReducer,
  InitialStateType
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
    status: false
  }
})

test('counter status should be changed', () => {

  const result = counterReducer(state, changeStatusAC(true))

  expect(result.status).toBe(true)
})

test('counter errors should be shown', () => {

  const result1 = counterReducer(state, changeMinErrorAC(true))
  const result2 = counterReducer(state, changeMaxErrorAC(true))

  expect(result1.errors.minInputError).toBe(true)
  expect(result2.errors.maxInputError).toBe(true)
})

test('counter values should be changed', () => {

  const result1 = counterReducer(state, changeMinValueAC(3))
  const result2 = counterReducer(state, changeMaxValueAC(10))

  expect(result1.values.minValue).toBe(3)
  expect(result2.values.maxValue).toBe(10)
})

test('counter displaying value should be changed', () => {

  const result = counterReducer(state, changeCounterValueAC(32))

  expect(result.counter).toBe(32)

})