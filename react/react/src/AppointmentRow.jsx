function AppointmentRow({ appointment }) {
    
    return (
        <>
        <p>{appointment.name} - {appointment.department} - {appointment.status}</p>
       
        
        </>
    );
}

export default AppointmentRow 