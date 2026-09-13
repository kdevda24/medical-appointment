import { useState } from "react";

function SubmitForm() {
    const [items, setItems] = useState([{ id: 1, name: "First" }])
    
    return (
        <>
            {items.map((a) => (
                <p key={a.id}>{a.id} - {a.name}</p>
            ))}


            <button onClick={() => {
                setItems([...items, {id: 2, name: "second"}])
            }}>
                add item
            </button>
        
       
            
        </>

    );
}


export default SubmitForm