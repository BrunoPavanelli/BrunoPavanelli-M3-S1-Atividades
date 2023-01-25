import { useState } from "react";
import FruitListUl from "../FruitListUl/FruitListUl.jsx";
import './FruitList.css'

function FruitList ({ fruitList }) {
    const fruitListTotalPrice = fruitList.reduce((accumulator, fruit) => accumulator + fruit.price, 0)

    const [fruits, setFruits] = useState(fruitList);
    const [counter, setCounter] = useState(fruitListTotalPrice);
    
    function filterRedFruits () {
        const redFruitsList = fruits.filter(fruit => fruit.color === 'red');
        const fruitListRedTotalPrice = redFruitsList.reduce((accumulator, fruit) => accumulator + fruit.price, 0);
        
        setFruits(redFruitsList)
        setCounter(fruitListRedTotalPrice);
    }
    return (
        <div className="component__fruit__list">
            <span>Preço Total: {counter}</span>
            <FruitListUl fruits={fruits}/>
            <button onClick={() => {
                if (counter < 9) {
                    setFruits(fruitList);
                    setCounter(fruitListTotalPrice);
                } else {
                    filterRedFruits();
                }
            }}>See Red Fruits</button>
        </div>
    )
}

export default FruitList