import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RandomNumber from './components/Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RandomNumber />
    </div>
  )
}

export default App
