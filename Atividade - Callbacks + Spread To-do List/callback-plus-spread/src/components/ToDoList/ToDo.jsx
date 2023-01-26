import {v4 as uuid} from 'uuid';

function ToDo ({toDoList, handleToDo}) {
    return (
        <ul>
            {toDoList.map(toDo => 
            <div key={uuid()}>
                <li>{toDo}</li>
                <button onClick={() => handleToDo(toDo)}>Concluir Tarefa</button>
            </div>
            )}
        </ul>
    )
}

export default ToDo