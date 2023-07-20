import style from "./Instruction.module.css";
import {Button} from "./Button";
import {DisplayInstruction} from "./DisplayInstruction";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../reduxStore/store";
import {changeStatusAC, InitialStateType, resetCounterValueAC} from "../reducers/counter-reducer";


export const Instruction = () => {

  const dispatch = useDispatch()

  const state = useSelector<StateType, InitialStateType>(state => state.counterData)

  const setInstruction = () => {
    dispatch(resetCounterValueAC(state.values.minValue))
    dispatch(changeStatusAC(false))
  }

  const disabledCondition =
    state.values.maxValue === state.values.minValue
    || state.values.minValue > state.values.maxValue
    || state.values.maxValue < 0
    || state.values.minValue < 0
    || !state.status

  return (
    <div>
      <div className={style.instruction}>
        <div className={style.contentWrapper}>
          <DisplayInstruction/>
          <div className={style.buttonsArea}>
            <Button
              using={'instruction'}
              callBack={setInstruction}
              disabled={disabledCondition}
            >SET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
