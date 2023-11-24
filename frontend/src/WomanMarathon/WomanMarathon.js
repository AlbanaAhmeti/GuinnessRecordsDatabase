import { useState , useEffect } from "react";
import { getAll } from "../services/womanMarathon";
import { Link } from 'react-router-dom';
import "../css/womenM.css";
import DeleteWomanMarathon from "./DeleteWomanMarathon";

const WomanMarathon = ()=> {
    const [participants, setParticipants] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        getAll().then(res => {
            setParticipants(res.data)
        }).catch(err => {
            setError(err.message)
        })
    },[])   

    const getParticipants = (participant) => {
        return (
            <tr key={participant._id}>
                <td>{participant.fullName}</td>
                <td>{participant.Nationality}</td>
                <td>{participant.Date}</td>
                <td>{participant.Time}</td>
                <td>{participant.Event}</td>
                <td>{participant.Source}</td>
                <td>{participant.Notes}</td>
                <td>
                    <button type="button" className="editButton btn btn-info">
                        <Link to={`/womanMarathon/${participant._id}`}><p>Edit</p></Link>
                    </button>
                    <DeleteWomanMarathon id={participant._id} />
                </td>  
            </tr>                 
        )
    }
    
    return(
        <div className="main">
            <div className="title">
                <h4>Marathon Records for Women</h4>
            </div>
            <table className="table table-hover">
                <thead  style={{backgroundColor: "#5F9EA0"}}>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Event/Place</th>
                        <th scope="col">Source</th>
                        <th scope="col">Notes</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    participants.map(getParticipants)
                    }
                    
                </tbody>
            </table>           
        </div>
    )
}
export default WomanMarathon