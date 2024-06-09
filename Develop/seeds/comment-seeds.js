const { Comment } = require("../models");

const commentData = [
  {
    text: "Post 1 Comment 1 from RandomUser2",
    post_id: 1,
    user_id: 2,
  },
  {
    text: "Post 1 Comment 2 from RandomUser3",
    post_id: 1,
    user_id: 3,
  },
  {
    text: "Post 3 Comment 1 from RandomUser3",
    post_id: 3,
    user_id: 3,
  },
  {
    text: "Post 5 Comment 1 from RandomUser2",
    post_id: 5,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
