import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import WelcomeMessage from './basic'
import Button from './Button'
import PatientsList from './Appointments'
import AppointmentForm from './AppointmentForm'
import SubmitForm from './FormSubmit'
import './App.css'
import AppointmentSubmit from './AppointmentFormSubmit'
import Example from '../useEffect/Basic'
import Home from "./Home"
import About from "./About"


function App() {
  

  return (
    <>
      {/* <WelcomeMessage name="Kanishk Devda" 
      number = "1"/>

      <Button /> */}

      {/* <PatientsList /> */}
      {/* <AppointmentForm /> */}
      {/* <SubmitForm /> */}
      {/* <AppointmentSubmit /> */}
      {/* <Example /> */}


      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/appointment">Appointment Form</Link>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/appointment" element={<AppointmentSubmit/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
