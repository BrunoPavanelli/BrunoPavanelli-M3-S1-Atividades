import { useState } from 'react'
import './RandomNumber.css'

function RandomNumber () {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

    function changeNumber () {
        setNumber(Math.floor(Math.random() * 100) + 1);
    }

    return (
        <div className="counter__div">
            <span>{number}</span>
            <button className="number__btn" onClick={changeNumber}>Criar novo numero</button>
        </div>
    )
}

export default RandomNumber