import { useState } from "react";
import { useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        console.log("Component loaded", "Count:",count, "Name:",name);
        
    }, [count,name]);
    return (
        <>
        <p>Hello</p>
        {count}
        <button onClick={() => {
            setCount(count+1)
        }}>click me</button>
        <input 
        value={name}
        onChange={(e) => {
            setName(e.target.value)
        }}></input>
        </>
    );
}

export default Example