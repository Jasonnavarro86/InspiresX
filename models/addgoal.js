
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newGoalSchema = new Schema({

    title: String,
    subject: String,
    body: String,
    motivation: String,
    fbauth: Number,
    quit: [{ type: Number, default: 0 }],
    feelquit: { type: Number, default: 0 },
    helplearn: { type: Number, default: 0 },
    helppush:{ type: Number, default: 0 },
    feelgood: { type: Number, default: 0 },
    feelgreat: { type: Number, default: 0 },
    completed: Boolean,
    date: { type: Date, default: Date.now },
    update: { type: Date, default: Date.now }
    
})


const newGoal = mongoose.model("newGoal", newGoalSchema);


module.exports = newGoal;