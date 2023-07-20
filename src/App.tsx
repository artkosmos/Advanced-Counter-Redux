import s from './App.module.css';
import {Counter} from "./components/Counter";
import {Instruction} from "./components/Instruction";


function App() {


  // useEffect(() => {
  //   if (maxValue === minValue || minValue > maxValue) {
  //     setMaxInputError(true)
  //     setMinInputError(true)
  //   } else if (maxValue < 0) {
  //     setMaxInputError(true)
  //   } else if (minValue < 0) {
  //     setMinInputError(true)
  //   } else {
  //     setMaxInputError(false)
  //     setMinInputError(false)
  //   }
  // }, [minValue, maxValue])

  return (
    <div className={s.mainContentWrapper}>
      <Counter/>
      <Instruction/>
    </div>
  )
}

export default App;
