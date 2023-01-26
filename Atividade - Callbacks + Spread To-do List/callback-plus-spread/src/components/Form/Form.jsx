import { useState } from "react";

function Form ({addToDo}) {
    const [toDo, setToDo] = useState('');



    return (
        <form>
            <input type="text" placeholder="Digite Tarefa" onChange={(event) => {setToDo(event.target.value)}}/>
            <button type="submit" onClick={(event) => {
                event.preventDefault()
                addToDo(toDo)
                }}>Adicionar Tarefa</button>
        </form>
    )
}

export default Form