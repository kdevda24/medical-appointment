import { useParams } from "react-router-dom";

function AppointmentDetail() {

    const { id } = useParams();

    return <h1>Viewing appointment {id}</h1>;
}


export default AppointmentDetail;