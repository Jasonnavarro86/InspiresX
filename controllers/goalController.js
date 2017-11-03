const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Goal
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findFbId: function(req, res) {
    db.Goal
      .findOne({fbauth: req.params.id})
      .populate("newGoal")
    
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Goal
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Goal
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Goal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Goal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createNewGoal: function(req, res) {
    db.newGoal
      .create(req.body)
      .then(dbModel => {db.Goal.findOneAndUpdate({ fbauth : dbModel.fbauth}, { $push: { "newGoal": dbModel._id }} , { new: true }, function(err, data){res.json(data)}) })
      .catch(err => res.status(422).json(err));
  },
  updateUserGoal: function(req, res) {
    
    db.newGoal
      .findOneAndUpdate({ _id : req.body._id}, { $push: {  "chartLabels": req.body.key, "chartValues": req.body.val,"update": req.body.update }} , { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveVent: function(req, res) {
    db.newVent
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateVent: function(req, res) {
    db.newVent
      .findOneAndUpdate({ note_id: req.params.id }, { deleted: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  addVentToNote: function(req, res) {
    db.newGoal
      .findOneAndUpdate({ _id: req.body.noteId },{ $push: {  "vent": req.body._id}} , { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  populateVentId: function(req, res) {
    db.newGoal
      .findOne({_id: req.params.id})
      .populate("vent")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};