const { Post } = require("../models");

const postData = [
  {
    title: "RandomUser1 Post 1",
    text: "This is my first post",
    user_id: 1,
  },
  {
    title: "RandomUser1 Post 2",
    text: "This is my second post",
    user_id: 1,
  },
  {
    title: "RandomUser2 Post 1",
    text: "This is my first post",
    user_id: 2,
  },
  {
    title: "RandomUser2 Post 2",
    text: "This is my second post",
    user_id: 2,
  },
  {
    title: "RandomUser3",
    text: "This is my first post",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
