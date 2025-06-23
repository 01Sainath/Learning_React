import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  const obj1 = {
    name: "Sainath",
    surname: "Ibitwar"
  } 
  const obj2 = {
    name: "Shilpa",
    surname: "Sanap"
  } 

  return (
    <>
      <Card title="Card 1" obj={obj1}/>
      <Card title="Card 2" obj={obj2}/>
    </>
  )
}

export default App
