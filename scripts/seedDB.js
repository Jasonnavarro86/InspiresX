const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/userGoals",
  {
    useMongoClient: true
  }
);

const goalSeed = [
  
  {
    name: "test John Doe",
    body: "I want to finish school and earn a masters degree", 
    title: "Finish School",
    img: "https:avatars1.githubusercontent.com/u/28733244?s=400&u=ebe2e31590e192c16a5ac393cff060f145d764e7&v=4",
    btnClick: "feel good",
    date: new Date(Date.now()),
    update: new Date(Date.now())
    
  },
  
];

db.Goal
  .remove({})
  .then(() => db.Goal.collection.insertMany(goalSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
