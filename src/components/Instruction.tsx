import style from "./Instruction.module.css";
import {Button} from "./Button";
import {DisplayInstruction} from "./DisplayInstruction";
import {useDispatch, useSelector} from "react-redux";
import {changeStatusAC, resetCounterValueAC} from "../reducers/counter-reducer";
import {statusSelector} from "../selectors/selectors";


export const Instruction = () => {

  const dispatch = useDispatch()

  const status = useSelector(statusSelector)

  const setInstruction = () => {
    dispatch(resetCounterValueAC())
    dispatch(changeStatusAC('counter'))
  }

  return (
    <div>
      <div className={style.instruction}>
        <div className={style.contentWrapper}>
          <DisplayInstruction/>
          <div className={style.buttonsArea}>
            <Button
              using={'instruction'}
              onClick={setInstruction}
              disabled={status === 'error' || status === 'counter'}
            >SET
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
