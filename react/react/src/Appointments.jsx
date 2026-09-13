/* Rendering lists using keys */
function PatientsList() {
    const appointments = [
        { id: 1, name: "John Doe", status: "Confirmed" },
        { id: 2, name: "Sarah Lee", status: "Pending" },
        { id: 3, name: "Mike Chen", status: "Cancelled" },
      ];

        const items = appointments.map((item) => <p key={item.id}>{item.name} - {item.status === "Confirmed" ? "✅Confirmed" : item.status === "Pending" ? "⏳Pending" : item.status === "Cancelled" ? "❌Cancelled" : ""}</p>)
        
      
    return (
        <>
            {items}
       
        </>
    );
}


export default PatientsList