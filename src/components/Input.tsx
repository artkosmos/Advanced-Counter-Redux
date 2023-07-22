import {ChangeEvent, ComponentPropsWithoutRef} from 'react';
import style from './Input.module.css'
import {useSelector} from "react-redux";
import {statusSelector} from "../selectors/selectors";

type InputPropsType = {
  value: number
  callBack?: (value: number) => void
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Input = ({value, callBack, ...rest}: InputPropsType) => {

  const status = useSelector(statusSelector)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    callBack?.(Number(event.currentTarget.value))
  }

  const inputClassName = status === 'error' ? `${style.input} ${style.error}` : style.input

  return (
    <div className={style.inputWrapper}>
      <div className={style.inputLine}>
        <input
          type={'number'}
          value={value}
          onChange={onChangeHandler}
          className={inputClassName}
          {...rest}
        />
      </div>
    </div>
  )
}
