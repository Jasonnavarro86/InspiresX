const router = require("express").Router();
const goalRoutes = require("./goals");

// User routes
router.use("/goals", goalRoutes);

module.exports = router;
