import { useState } from 'react'
import './App.css'
import FruitList from './components/FruitList/FruitList'


function App() {
  const fruitList = [
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
] 
  return (
    <div className="App">
      <FruitList fruitList={fruitList}/>
    </div>
  )
}

export default App
