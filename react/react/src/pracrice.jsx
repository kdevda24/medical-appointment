import { useState } from "react";

function SpreadSyntax() {
    const [numbers, setNumbers] = useState([1,2,3])
    return (
        <>
        <p>{numbers.join(", ")}</p>
        <button onClick={() => {
            setNumbers([...numbers, numbers.length+1])
        }}>
            add
        </button>
        </>
    );
}


export default SpreadSyntax