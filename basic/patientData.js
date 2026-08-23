const patients = [
    {
      id: 1,
      name: "Aarav Sharma",
      age: 32,
      gender: "Male",
      email: "aarav.sharma@example.com",
      phone: "555-0101",
      bloodGroup: "O+",
      appointmentDate: "2026-08-25",
      reason: "General Checkup",
    },
    {
      id: 2,
      name: "Emily Carter",
      age: 27,
      gender: "Female",
      email: "emily.carter@example.com",
      phone: "555-0102",
      bloodGroup: "A+",
      appointmentDate: "2026-08-26",
      reason: "Headache and Fatigue",
    },
    {
      id: 3,
      name: "Daniel Kim",
      age: 45,
      gender: "Male",
      email: "daniel.kim@example.com",
      phone: "555-0103",
      bloodGroup: "B+",
      appointmentDate: "2026-08-28",
      reason: "Back Pain",
    },
  ];


//object destructuring
const { bloodGroup: bG, reason: r } = patients[0];
console.log(bG);
  

  function formatPatientName(patient) {

  }

  
  const facilities = [
    {
      id: 1,
      name: "City General Hospital",
      specialty: "Cardiology",
      location: "New York",
    },
    {
      id: 2,
      name: "Downtown Medical Center",
      specialty: "Dermatology",
      location: "New York",
    },
    {
      id: 3,
      name: "Sunrise Health Clinic",
      specialty: "Cardiology",
      location: "New Jersey",
    },
    {
      id: 4,
      name: "Green Valley Hospital",
      specialty: "Neurology",
      location: "New York",
    },
  ];
  

  const appointments = [
    {
      id: 1,
      patient: "Aarav Sharma",
      doctor: "Dr. Smith",
      status: "PENDING",
    },
    {
      id: 2,
      patient: "Emily Carter",
      doctor: "Dr. Johnson",
      status: "COMPLETED",
    },
    {
      id: 3,
      patient: "Daniel Kim",
      doctor: "Dr. Williams",
      status: "PENDING",
    },
    {
      id: 4,
      patient: "Sophia Lee",
      doctor: "Dr. Brown",
      status: "CANCELLED",
    },
  ];


  // console.log(appointments.filter((f) => f.status === "PENDING"));

  // console.log(appointments.map((app) => `${app.id} : ${app.patient} : ${app.doctor} : ${app.status}`));



  // const name = (a) => {
    
  //   return a;
  // }

  // console.log("kanishk");

  
  // spread syntax
  const extraApp = {
      id: 5,
      patient: "Kevin Hart",
      doctor: "Dr. Brown",
      status: "COMPLETED",
}
const newApp = [...appointments, extraApp];
console.log(newApp);


  
  
  