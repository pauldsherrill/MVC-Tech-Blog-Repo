const { Comment } = require("../models");

const commentData = [
  {
    text: "Comment on RandomUser1 Post 1",
    post_id: 1,
    user_id: 2,
  },
  {
    text: "Comment on RandomUser1 Post 1",
    post_id: 1,
    user_id: 3,
  },
  {
    text: "Comment on RandomUser2 Post 1",
    post_id: 3,
    user_id: 3,
  },
  {
    text: "Comment on RandomUser3 Post 1",
    post_id: 5,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
