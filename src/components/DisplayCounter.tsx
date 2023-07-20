import React from "react";
import style from "./Display.module.css";
import {useSelector} from "react-redux";
import {StateType} from "../reduxStore/store";
import {InitialStateType} from "../reducers/counter-reducer";

export const DisplayCounter = () => {

  const state = useSelector<StateType, InitialStateType>(state => state.counterData)

  return (
    <div className={style.scoreboard}>
      {state.errors.maxInputError || state.errors.minInputError
        ? <span className={style.counterErrorMessage}>Choose correct values!</span>
        : state.status
          ? <span className={style.counterMessage}>Choose value and press SET</span>
          : <span className={state.counter === state.values.maxValue ? style.red : ''}>{state.counter}</span>}
    </div>
  )
}