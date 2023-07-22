import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";


export function App() {

  return (
    <div className={s.mainContentWrapper}>
      <Counter/>
      <Instruction/>
    </div>
  )
}

