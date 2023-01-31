import {useState} from "react";
import {button} from 'react-bootstrap/Button';


function Count() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("")
    
    function incrementValue() {
        setCount((prevCount) => count + 2)
            if (count>=10) {
                setCount(10);
            }
            
    }


    function decrementValue() {
        setCount((prevCount) => count - 2);    
            if (count<=0) {
                setCount(0);
            }
    }

    
    function handleOnChange(e) {
        setInput((prevInput) => e.target.value)
        console.log(input)
    }

    return(
        <>
            <button variant="outline-success" onClick={decrementValue}>-</button>    
            <span>{count}</span>
            <button variant="secondary" onClick={incrementValue}>+</button>    
            <br />
            <input onChange={handleOnChange} value={input}></input>
        </>
    );
}

export default Count;