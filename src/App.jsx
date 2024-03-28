import { useState } from 'react'
import './App.css'
import Jsbasico from './jsbasico'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1> Meu projeto </h1>
      <p>meu projeto em Reacte Vite</p>
      <br />
      <Jsbasico />
    </div>
  )
}

export default App
