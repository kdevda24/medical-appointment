import { useState } from "react";
import AppointmentRow from "./AppointmentRow";


function AppointmentSubmit() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [appointments, setAppointments] = useState([{
        id: 1,
        name: "Sarah",
        department: "Dermatology",
        status: "Confirmed  "
    },
{
    id: 2,
    name: "Alice",
    department: "Dentist",
    status: "Pending"
}]);




    return (
        <>

        {appointments.map((apple) => (
            <AppointmentRow key={apple.id} appointment={apple}/>
        ))}
        

        <input
        value={name}
        onChange={(banana) => setName(banana.target.value)}
        />

        <select 
        value={department}
        onChange={(straw) => setDepartment(straw.target.value)}>
            <option value="select-dept">Select a Department</option>
            <option value="dermatology">Dermatology</option>
            <option value="cardiology">Cardiology</option>
            <option value="gastroenterology">Gastroenterology</option>
            <option value="neurology">Neurology</option>
            <option value="pediatrics">Pediatrics</option>
        </select>

        <button onClick={() => {
            if (department === "") {
                return;
            }
            setAppointments([...appointments, {id: Date.now(), name: name,
                department: department,
                status: "Pending"
            }])
            setName("")
            setDepartment("")
        }}>Submit</button>

        <button onClick={() => {
            const lastId = appointments[appointments.length-1].id
            setAppointments(appointments.filter((orange) => (orange.id !== lastId)))
        }}>
            Delete
        </button>
        </>
    );
}


export default AppointmentSubmit