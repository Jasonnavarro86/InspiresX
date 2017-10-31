
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newGoalSchema = new Schema({

    title: String,
    subject: String,
    body: String,
    motivation: String,
    fbauth: Number,
    quit: {type: Boolean, default: false},
 
    chartLabels:[],
    chartValues:[],
    completed: {type: Boolean, default: false},
    date: { type: Date, default: Date.now },
    update: [{ type: Date, default: Date.now }]
    
})


const newGoal = mongoose.model("newGoal", newGoalSchema);


module.exports = newGoal;