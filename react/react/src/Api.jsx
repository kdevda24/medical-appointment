export const patientAppointments = [{
    id: 1,
    name: "Sarah",
    department: "Dermatology",
    status: "Confirmed"
},
{
    id: 2,
    name: "Alexa",
    department: "Dentist",
    status: "Pending"
}]

export function fetchAppointments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(patientAppointments)
        }, 2000)
    })
}

