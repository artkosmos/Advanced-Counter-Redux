import React from 'react';
import style from "./Counter.module.css";
import {Button} from "./Button";
import {DisplayCounter} from "./DisplayCounter";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../reduxStore/store";
import {incrementCounterValueAC, resetCounterValueAC} from "../reducers/counter-reducer";


export const Counter = () => {
  const selector = (state: StateType) => state.counterData
  const dispatch = useDispatch()

  const state = useSelector(selector)

  const increment = () => {
    dispatch(incrementCounterValueAC())
  }

  const reset = () => {
    dispatch(resetCounterValueAC(state.values.minValue))
  }

  return (
    <div className={style.counter}>
      <div className={style.contentWrapper}>
        <DisplayCounter/>
        <div className={style.buttonsArea}>
          <Button
            using={'counter'}
            disabled={state.counter === state.values.maxValue || state.status}
            callBack={increment}
          >ADD
          </Button>
          <Button
            using={'counter'}
            disabled={state.counter === state.values.minValue || state.status}
            callBack={reset}
          >RESET
          </Button>
        </div>
      </div>
    </div>
  );
};
