import style from "./DisplayInstruction.module.css";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../reduxStore/store";
import {changeMaxValueAC, changeMinValueAC, InitialStateType} from "../reducers/counter-reducer";

export const DisplayInstruction = () => {

  const dispatch = useDispatch()

  const state = useSelector<StateType, InitialStateType>(state => state.counterData)
  console.log(state)

  const setMaxValue = (value: number) => {
    dispatch(changeMaxValueAC(value))
  }

  const setMinValue = (value: number) => {
    dispatch(changeMinValueAC(value))
  }

  const inputErrorCondition =
    state.values.maxValue === state.values.minValue
    || state.values.minValue > state.values.maxValue
    || state.values.maxValue < 0
    || state.values.minValue < 0


  return (
    <div>
      <div className={style.instruction}>
        <div className={style.inputWrapper}>
          <Input
            callBack={setMaxValue}
            value={state.values.maxValue}
            inputError={inputErrorCondition}
          />
          <Input
            callBack={setMinValue}
            value={state.values.minValue}
            inputError={inputErrorCondition}
          />
        </div>
      </div>
    </div>
  )
}

