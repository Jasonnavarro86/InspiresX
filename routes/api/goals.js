const router = require("express").Router();
const goalController = require("../../controllers/goalController");

// Matches with "/api/goals"
router
  .route("/")
  .get(goalController.findAll)
  .post(goalController.create);
  
// Matches with "/api/goals/:id"
router
  .route("/:id")
  .get(goalController.findById)
  .put(goalController.update)
  .delete(goalController.remove)
  .post(goalController.findFbId);

  router
  .route("/add/newgoal")
  .get(goalController.findVideos)
  .post(goalController.createNewGoal)
  

  
  router
  .route("/add/newgoal/update")
  .put(goalController.updateUserGoal);

  router
  .route("/add/newgoal/update/vent")
  .post(goalController.saveVent);

  router
  .route("/add/newgoal/update/vent/:id")
  .post(goalController.updateVent);
  
  router
  .route("/add/newgoal/update/ventnote")
  .post(goalController.addVentToNote)
  
  router
  .route("/add/newgoal/update/vent/populate/:id")
  .post(goalController.populateVentId)

  router
  .route("/add/newgoal/update/vent/populate/modal/videos")
  .post(goalController.putVideos);
  
module.exports = router;
