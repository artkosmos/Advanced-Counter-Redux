import {ChangeEvent} from 'react';
import style from './Input.module.css'
import {useDispatch} from "react-redux";
import {changeStatusAC} from "../reducers/counter-reducer";

type InputPropsType = {
  value: number
  callBack?: (value: number) => void
  inputError: boolean
}

export const Input = ({
                        value,
                        callBack,
                        inputError,
                      }: InputPropsType) => {

  const dispatch = useDispatch()

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    callBack?.(Number(event.currentTarget.value))
    dispatch(changeStatusAC(true))
  }

  const currentClassName = inputError ? `${style.input} ${style.error}` : style.input

  return (
    <div className={style.inputWrapper}>
      <div className={style.inputLine}>
        <input
          type={'number'}
          value={value}
          onChange={onChangeHandler}
          className={currentClassName}
        />
      </div>
      <div className={inputError ? `${style.errorMessage} ${style.active}` : style.errorMessage}>
        invalid value!
      </div>
    </div>
  )
}
