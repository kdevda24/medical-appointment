import { useState } from "react";


function Button() {

    const [count, setCount] = useState(0);
    /* event handling */
    function handleClick() {
        console.log("Button was clicked");
        
    }
    //

    return (
        <>
        <p>{count}</p>
        <button className="reset" onClick={() => {
            setCount(0)
        }}>
            reset
        </button>

        <button className="test-me" onClick={() => {
            setCount(count + 1)
        }}>
            click me 
        </button>
        
        <button className="decrement" onClick={() => {
            setCount(count-1)
        }}>
            decrease
            
        </button>

            

        </>
    );
    
}


export default Button


