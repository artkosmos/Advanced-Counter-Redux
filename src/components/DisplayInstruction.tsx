import style from "./DisplayInstruction.module.css";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {changeMaxValueAC, changeMinValueAC, changeStatusAC} from "../reducers/counter-reducer";
import {maxValueSelector, minValueSelector, stateSelector} from "../selectors/selectors";

export const DisplayInstruction = () => {

  const dispatch = useDispatch()

  const minValue = useSelector(minValueSelector)
  const maxValue = useSelector(maxValueSelector)
  const state = useSelector(stateSelector)

  console.log(state)

  const setMaxValue = (value: number) => {
    if(value <= minValue || value < 0) {
      dispatch(changeStatusAC('error'))
    } else {
      dispatch(changeStatusAC('setting'))
    }
    dispatch(changeMaxValueAC(value))
  }

  const setMinValue = (value: number) => {
    if(value >= maxValue || value < 0) {
      dispatch(changeStatusAC('error'))
    } else {
      dispatch(changeStatusAC('setting'))
    }
    dispatch(changeMinValueAC(value))

  }

  return (
    <div>
      <div className={style.instruction}>
        <div className={style.inputWrapper}>
          <div className={style.inputLine}>
            <span>max value:</span>
            <Input
              callBack={setMaxValue}
              value={maxValue}
            />
          </div>
          <div className={style.inputLine}>
            <span>min value:</span>
            <Input
              callBack={setMinValue}
              value={minValue}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

