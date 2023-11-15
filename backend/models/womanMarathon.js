const mongoose = require('mongoose')

const womanMarathonSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true

    },
    Nationality: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Event: {
        type: String,
        required: true
    },
    Source: {
        type: String,
        required: true
    },
    Notes: {
        type: String
    }
}) 

module.exports = mongoose.model('womanMarathon', womanMarathonSchema)