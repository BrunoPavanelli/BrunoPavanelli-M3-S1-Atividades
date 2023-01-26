import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form/Form';
import ToDo from './components/ToDoList/ToDo';

function App() {
  const [toDoList, setToDoList] = useState([]);

  function addToDo (newToDo) {
    setToDoList([...toDoList, newToDo]);
  }

  function handleToDo (toRemoveToDo) {
    const newToDoList = toDoList.filter(toDo => toDo !== toRemoveToDo);

    setToDoList(newToDoList);
  }

  return (
    <div className="App">
        <Form addToDo={addToDo} />
        <ToDo toDoList={toDoList} handleToDo={handleToDo}/>
    </div>
  )
}

export default App
