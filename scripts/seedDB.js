const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/users"
// );
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/weatherwatch"
);

const userSeed = [
  {
    username: "BobbyJones123",
    password: "bobbyspassword",
    // email: "B.Jones@gmail.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "WendySmith2018",
    password: "wendyspassword",
    // email: "W.Smith@gmail.com",
    userCreated: new Date(Date.now())
  },
  {
    username: "FranklinTempleton",
    password: "franklinspassword",
    // email: "F.Templeton@gmail.com",
    userCreated: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
