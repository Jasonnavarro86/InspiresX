
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const newVentSchema = new Schema({

    title: String,
    body: String,
    note_id: Number,
    fbauth: Number,
    deleted: {type:Boolean, default:false}
  
    
})


const newVent = mongoose.model("newVent", newVentSchema);


module.exports = newVent;