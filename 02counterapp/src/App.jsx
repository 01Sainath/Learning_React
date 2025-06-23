import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(0);

  function calculate(ele){
    ele.id == "+"?setCount(count+1):setCount(count-1);
  }
  return (
    <>
      <h2>Counter</h2>
      Value: {count}
      <button onClick={(e)=>calculate(e.target)} id="+">+</button>
      <button onClick={(e)=>calculate(e.target)} id="-">-</button> 
    </>
  )
}

export default App
