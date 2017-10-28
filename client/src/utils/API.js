import axios from "axios";

export default {
  // Gets all users
  findFbId: function(id) {
    return axios.post("/api/goals/" + id);
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/goals/" + id);
  },
  // Deletes the book with the given id
  deleteUsers: function(id) {
    return axios.delete("/api/goals/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/goals", userData);
  }
};
