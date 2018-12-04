import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUserId: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Gets the user with the given username
  getUserUsername: function(username) {
    return axios.get("/api/users/" + username);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
