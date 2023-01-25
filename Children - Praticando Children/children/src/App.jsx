import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='App__div'>
        <Card children='Children 1'/>
        <Card children='Children 2'/>
        <Card children='Children 3'/>
      </div>
    </div>
  )
}

export default App
