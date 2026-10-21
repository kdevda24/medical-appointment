import { useState, useEffect } from "react";
import AppointmentRow from "./AppointmentRow";
import { patientAppointments } from "./api";
import { fetchAppointments } from "./api";


function AppointmentSubmit() {
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await fetchAppointments();
                setAppointments(result)
            } catch (error) {
                console.log("error loading data", error.message);

            }
        }

        fetchData();

    }, []);





    return (
        <>

            {appointments.map((apple) => (
                <AppointmentRow key={apple.id} appointment={apple} />
            ))}


            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Select a Department</option>
                <option value="dermatology">Dermatology</option>
                <option value="cardiology">Cardiology</option>
                <option value="gastroenterology">Gastroenterology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
            </select>

            <button onClick={() => {
                if (name === "") {
                    return;
                }
                if (department === "") {
                    return;
                }
                setAppointments([...appointments, {
                    id: Date.now(), name: name,
                    department: department,
                    status: "Pending"
                }])
                setName("")
                setDepartment("")
            }}>Submit</button>

            <button onClick={() => {
                const lastId = appointments[appointments.length - 1].id
                setAppointments(appointments.filter((orange) => (orange.id !== lastId)))
            }}>
                Delete
            </button>
        </>
    );
}


export default AppointmentSubmit