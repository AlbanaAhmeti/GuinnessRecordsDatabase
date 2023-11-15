import React, { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import { addOne } from './services/womanMarathon';
const AddWomanMarathon = () => {

const [name, setName] = useState('');
const [nationality, setNationality] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [event, setEvent] = useState('');
const [source, setSource] = useState('');
const [notes, setNotes] = useState('');

const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addOne({ fullName: name, Nationality: nationality, Date: date, 
                      Time: time, Event: event, Source: source, Notes: notes });

      console.log('ok', response);
      
      setName('');
      setNationality('');
      setDate('');
      setTime('');
      setEvent('');
      setSource('');
      setNotes('');
    } catch (error) {
      console.log('error', error);
    }
    navigate('/womanMarathon');
  };
  return (
    <div className="container">
      <div className="title">
          <h4>Add a New World Record for Women in Marathons</h4>
      </div>
      <form onSubmit={handleSubmit}>
          <div className="form-group row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
              <div className="col-sm-10">
              <input type="text"
                  className="form-control" 
                  id="fullName" 
                  placeholder="Full Name"
                  name="fullName"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
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
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)} />
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)} />
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
                  value={time}
                  onChange={(e) => setTime(e.target.value)} />
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
                  value={event}
                  onChange={(e) => setEvent(e.target.value)} />
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
                  value={source}
                  onChange={(e) => setSource(e.target.value)} />
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
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)} />
              </div>
          </div>
           <div className="form-group row">
              <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Register Record</button>
              </div>
            </div>
       </form>
    </div>
  );
};
export default AddWomanMarathon;