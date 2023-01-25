import { useState } from "react";
import './FruitListUl.css'

function FruitListUl ({ fruits }) {
    // const [fruits, setFruits] = useState(fruitList);

    // function filterRedFruits () {
    //     const redFruitsList = fruits.filter(fruit => fruit.color === 'red');

    //     setFruits(redFruitsList);
    // }

    return (
        <ul className="fruit__list">
        {fruits.map(fruit => {
            return (
                <li>{fruit.name}</li>
            )
        })}
    </ul>
    )
}
 
export default FruitListUl