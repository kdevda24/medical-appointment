import { useState } from "react";

function AppointmentSubmit() {
    const [name, setName] = useState("");


    const [appointments, setAppointments] = useState([{
        id: 1,
        name: "Sarah",
        department: "Dermatology",
        status: "Confirmed"
    },
{
    id: 2,
    name: "Alice",
    department: "Dentist",
    status: "Pending"
}])



    return (
        <>
        {appointments.map((apple) => (
            <p key={apple.id}>{apple.name} - {apple.department} - {apple.status}</p>
        ))}

        <input
        value={name}
        onChange={(banana) => setName(banana.target.value)}
        />

        <button onClick={() => {
            setAppointments([...appointments, {id: 3, name: name,
                department: "dermatology",
                status: "Pending"
            }])
        }}>Submit</button>
        </>
    );
}


export default AppointmentSubmit