import React from "react";
import style from "./Display.module.css";
import {useSelector} from "react-redux";
import {stateSelector} from "../selectors/selectors";

export const DisplayCounter = () => {

  const state = useSelector(stateSelector)

  return (
    <div className={style.scoreboard}>
      {state.status === 'error'
        ? <span className={style.counterErrorMessage}>Choose correct values!</span>
        : state.status === 'setting'
          ? <span className={style.counterMessage}>Choose value and press SET</span>
          : <span className={state.counter === state.values.maxValue ? style.red : ''}>{state.counter}</span>}
    </div>
  )
}