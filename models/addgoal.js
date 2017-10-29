
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newGoalSchema = new Schema({

    title: String,
    subject: String,
    body: String,
    motivation: String,
    fbauth: Number,
    completed: Boolean
    
})


const newGoal = mongoose.model("newGoal", newGoalSchema);


module.exports = newGoal;