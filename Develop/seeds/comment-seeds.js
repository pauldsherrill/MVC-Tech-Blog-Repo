const { Comment } = require('../models');

const commentData = [
    {
        text: 'What up Paul',
        post_id: 1,
        user_id: 2,
    },
    {
        text: 'You the best',
        post_id: 1,
        user_id: 3,
    },
    {
        text: 'You suck',
        post_id: 3,
        user_id: 3,
    },
    {
        text: 'You a fake',
        post_id: 5,
        user_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;