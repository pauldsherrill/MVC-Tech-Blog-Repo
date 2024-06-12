const { User } = require("../models");

const userData = [
  {
    username: "RandomUser1",
    email: "email1@email.com",
    password: "password1",
  },
  {
    username: "RandomUser2",
    email: "email2@email.com",
    password: "password2",
  },
  {
    username: "RandomUser3",
    email: "email3@email.com",
    password: "password3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
