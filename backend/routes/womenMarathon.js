const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const womanMarathonModel = require('../models/womanMarathon')

//get all participants
router.get('/' , async (req,res) =>{
   try{
    const participants = await womanMarathonModel.find()
    res.json(participants)
   }catch(err){
    res.status(500).json({message: err.message})
   }
})
//get one specific participant
router.get('/:id' , async (req,res) =>{
   var id = new mongoose.Types.ObjectId(req.params.id)
   let p
   try{
    p = await womanMarathonModel.findById(id).exec()
    if(p == null){
        res.json({message: "Could not find the participant..."})
    }
   }catch(err){
    res.status(500).json({message: err.message})
   }
   res.json(p)
})
//delete one participant
router.delete('/:id' , async (req,res) =>{
    var id = new mongoose.Types.ObjectId(req.params.id)
    try{
        var p  = await womanMarathonModel.findByIdAndDelete(id)
        if(!p){
            res.json({message: "Participant not found..."})
        }
        res.status(200).json({message: 'Succesfully deleted record'})

    }catch(err){
        res.status(500).json({message: err.message})
    }
})
//Add one participant
router.post('/add', async (req, res) => {
    const { fullName, Nationality, Date, Time, Event, Source, Notes} = req.body;
  
    const p = new womanMarathonModel({
      fullName,
      Nationality, 
      Date, 
      Time, 
      Event, 
      Source, 
      Notes
    });  
    try {
      const newParticipant = await p.save();
      console.log('ok from server');
      res.status(201).json(newParticipant);  // Sending the newly created participant as a response
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
router.post('/update' , async (req, res) => {
    try {    
        const id = req.body.id; 
        const updatedData = {
          fullName: req.body.fullName,
          Nationality: req.body.Nationality, 
          Date: req.body.Date, 
          Time: req.body.Time, 
          Event: req.body.Event, 
          Source: req.body.Source, 
          Notes: req.body.Notes
        };
        const participant = await womanMarathonModel.findByIdAndUpdate(id, updatedData, { new: true }); 
        console.log(participant)   
        if (!participant) {
          return res.status(404).json({ message: "Participant not found..." });
        }   
        res.redirect('/womanMarathon');
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

//update one Participant
router.patch('/:id' , async (req,res) =>{
    var id = new mongoose.Types.ObjectId(req.params.id)
    const { fullName, Nationality, Date, Time, Event, Source, Notes} = req.body;
    try{
        var participant = await womanMarathonModel.findById(id).exec()
        if(!participant){
            res.status(404).json({message: "Participant not found..."})
        }
        participant.fullName = fullName
        participant.Nationality = Nationality
        participant.Date = Date
        participant.Time = Time
        participant.Event = Event
        participant.Source = Source
        participant.Notes = Notes

        var updatedParticipant = await participant.save()
        res.json(updatedParticipant)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})


module.exports = router;




