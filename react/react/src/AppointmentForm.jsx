import { useState } from "react";


function AppointmentForm() {
    const [name, setName] = useState("");
    
    return (
        <>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <p>{name}</p>

            <button onClick={() => {
                setName("") 
            }}> Submit </button>
        </>
    );
}


export default AppointmentForm