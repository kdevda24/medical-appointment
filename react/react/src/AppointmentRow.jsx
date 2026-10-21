import { Link } from 'react-router-dom';

function AppointmentRow(props) {
    const { appointment } = props

    return (
        <div>
            <p>
                {appointment.name} - {appointment.department} - {appointment.status}
                <Link to={`/appointments/${appointment.id}`}>View</Link>
            </p>



        </div>
    );
}

export default AppointmentRow 