import React, {ComponentPropsWithoutRef} from "react";
import style from './Button.module.css'

type ButtonPropsType = {
  using?: string
} & ComponentPropsWithoutRef<'button'>

export const Button = ({using, children,  ...rest}: ButtonPropsType) => {

  const buttonClassName = rest.disabled
    ? `${style.button} ${style.disable}`
    : using === 'counter'
      ? `${style.button} ${style.aqua}`
      : using === 'instruction'
        ? `${style.button} ${style.orange}`
        : `${style.button}`

  return (
    <button
      className={buttonClassName}
      {...rest}
    >{children}
    </button>
  )
}