import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { getOne, editOne } from "../services/womanMarathon";
import "../css/womenM.css";

const EditWomanMarathon = () => {
    const {id} = useParams();
    const [participant, setParticipant] = useState({});
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    // Fetch the paricipant
    useEffect(() => {
        const fetchParticipant = async () => {
          try {
            const response = await getOne(id);
            console.log("Participant data:", response.data);
            setParticipant(response.data);
          } catch (error) {
            setError(error.message);
          }
        };
        fetchParticipant();
      }, [id]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting participant data:", participant);
        try {
            await editOne(id, participant);
            navigate('/womanMarathon');
        } catch (error) {
            setError(error.message);
        }
    };

      return (
        <div className="container_edit">
          <div className="title_edit">
              <h4>Edit a Participant</h4>
          </div>
          <form onSubmit={handleSubmit}>
              <div className="form-group row">
                  <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
                  <div className="col-sm-10">
                  <input 
                      type="text"
                      className="form-control" 
                      id="fullName" 
                      placeholder="Full Name"
                      name="fullName"
                      value={participant?.fullName || ""}
                      onChange={(e) => setParticipant({...participant, fullName: e.target.value})} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="nationality" className="col-sm-2 col-form-label">Nationality</label>
                  <div className="col-sm-10">
                  <input type="text" 
                      className="form-control" 
                      id="nationality" 
                      placeholder="Nationality"
                      name="Nationality"
                      value={participant?.Nationality || ""}
                      onChange={(e) => setParticipant({...participant, Nationality: e.target.value})} />
                    </div>
               </div>
               <div className="form-group row">
                  <label htmlFor="Date" className="col-sm-2 col-form-label">Date</label>
                  <div className="col-sm-10">
                  <input type="text"
                      className="form-control" 
                      id="Date" 
                      placeholder="Date"
                      name="Date"
                      value={participant?.Date || ""}
                      onChange={(e) => setParticipant({...participant, Date: e.target.value})} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="Time" className="col-sm-2 col-form-label">Time</label>
                  <div className="col-sm-10">
                  <input type="text"
                      className="form-control" 
                      id="Time" 
                      placeholder="Time"
                      name="Time"
                      value={participant?.Time || ""}
                      onChange={(e) => setParticipant({...participant, Time: e.target.value})} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="Event" className="col-sm-2 col-form-label">Event/Place</label>
                  <div className="col-sm-10">
                  <input type="text"
                      className="form-control" 
                      id="Event" 
                      placeholder="Event/Place"
                      name="Event"
                      value={participant?.Event || ""}
                      onChange={(e) => setParticipant({...participant, Event: e.target.value})} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="Source" className="col-sm-2 col-form-label">Source</label>
                  <div className="col-sm-10">
                  <input type="text"
                      className="form-control" 
                      id="Source" 
                      placeholder="Source"
                      name="Source"
                      value={participant?.Source || ""}
                      onChange={(e) => setParticipant({...participant, Source: e.target.value})} />
                  </div>
              </div>
              <div className="form-group row">
                  <label htmlFor="Notes" className="col-sm-2 col-form-label">Notes</label>
                  <div className="col-sm-10">
                  <input type="text"
                      className="form-control" 
                      id="Notes" 
                      placeholder="Notes"
                      name="Notes"
                      value={participant?.Notes || ""}
                      onChange={(e) => setParticipant({...participant, Notes: e.target.value})} />
                  </div>
              </div>
               <div className="form-group row">
                  <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">Edit Record</button>
                  </div>
                </div>
           </form>
        </div>
      );
    };

    export default EditWomanMarathon;