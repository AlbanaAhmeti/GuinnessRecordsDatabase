import { useState , useEffect } from "react"
import { getAll } from "./services/womanMarathon"
import './womenM.css';
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
            <tr>
                <td>{participant.fullName}</td>
                <td>{participant.Nationality}</td>
                <td>{participant.Date}</td>
                <td>{participant.Time}</td>
                <td>{participant.Event}</td>
                <td>{participant.Source}</td>
                <td>{participant.Notes}</td>
            </tr>                 
        )
    }
    
    return(
        <div className="main">
            <div className="title">
                <h4>Marathon Records for Women</h4>
            </div>
            <table class="table table-hover">
                <thead class="thead-light" style={{"background-color": "#5F9EA0"}}>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Event/Place</th>
                        <th scope="col">Source</th>
                        <th scope="col">Notes</th>
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