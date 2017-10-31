const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  newGoal:[{
    type: Schema.Types.ObjectId,
    ref: "newGoal"}],
  img: String,
  email: String,
  btnClick: String,
  date: { type: Date, default: Date.now },
  update: { type: Date, default: Date.now },
  completed:{ type: Number, default: 0 },
  fbauth: Number
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;

