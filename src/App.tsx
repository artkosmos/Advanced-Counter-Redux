import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getValueFromLocalStorageTC} from "./reducers/counter-reducer";
import {ThunkAppDispatch} from "./reduxStore/store";


export function App() {

  const dispatch = useDispatch<ThunkAppDispatch>()

  useEffect(() => {
    dispatch(getValueFromLocalStorageTC())
  }, [])

  return (
    <div className={s.mainContentWrapper}>
      <Counter/>
      <Instruction/>
    </div>
  )
}