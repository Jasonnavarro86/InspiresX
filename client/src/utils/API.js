import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/goals");
  },
  //locates users login FaceBook id
  findFbId: function(id) {
    return axios.post("/api/goals/" + id);
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/goals/" + id);
  },
  // Deletes the user with the given id
  deleteUsers: function(id) {
    return axios.delete("/api/goals/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/goals", userData);
  },
  saveNewGoal: function(userData) {
    return axios.post("/api/goals/add/newgoal", userData);
  },
  updateUserGoal: function(userData) {
    return axios.post("/api/goals/add/newgoal/update", userData);
  }
};
