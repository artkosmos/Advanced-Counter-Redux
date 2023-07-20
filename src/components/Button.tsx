import React from "react";
import style from './Button.module.css'
import {useDispatch} from "react-redux";

type ButtonPropsType = {
  using?: string
  children: string
  disabled: boolean
  callBack: () => void
}

export const Button = ({using, children, disabled, callBack}: ButtonPropsType) => {

  const dispatch = useDispatch()

  const onClickHandler = () => {
    callBack()
  }

  return (
    <button
      className={disabled
        ? `${style.button} ${style.disable}`
        : using === 'counter'
          ? `${style.button} ${style.aqua}`
          : using === 'instruction'
            ? `${style.button} ${style.orange}`
            : `${style.button}`
      }
      onClick={onClickHandler}
      disabled={disabled}
    >{children}
    </button>
  )
}