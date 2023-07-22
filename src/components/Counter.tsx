import React from 'react';
import style from "./Counter.module.css";
import {Button} from "./Button";
import {DisplayCounter} from "./DisplayCounter";
import {useDispatch, useSelector} from "react-redux";
import {incrementCounterValueAC, resetCounterValueAC} from "../reducers/counter-reducer";
import {stateSelector} from "../selectors/selectors";


export const Counter = () => {

  const dispatch = useDispatch()

  const state = useSelector(stateSelector)

  const increment = () => {
    dispatch(incrementCounterValueAC())
  }

  const reset = () => {
    dispatch(resetCounterValueAC())
  }

  return (
    <div className={style.counter}>
      <div className={style.contentWrapper}>
        <DisplayCounter/>
        <div className={style.buttonsArea}>
          <Button
            using={'counter'}
            disabled={state.counter === state.values.maxValue || state.status !== 'counter'}
            onClick={increment}
          >ADD
          </Button>
          <Button
            using={'counter'}
            disabled={state.counter === state.values.minValue || state.status !== 'counter' }
            onClick={reset}
          >RESET
          </Button>
        </div>
      </div>
    </div>
  );
};
