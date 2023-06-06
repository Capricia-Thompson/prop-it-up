import { useState } from "react";

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [state, setState] = useState({ 'age': age })
    const addYear = () => {
        setState({
            age: state.age + 1
        })
    }
    return (
        <div>
            <h1>{lastName},{firstName}</h1>
            <p>Age: {state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={addYear}>Happy Birthday {firstName}!</button>
        </div>
    )
}

export default PersonCard;