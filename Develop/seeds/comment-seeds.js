const { Comment } = require('../models');

const commentData = [
    {
        text: 'What up Paul',
        date: '5/25/24',
        post_id: 1,
        user_id: 2,
    },
    {
        text: 'You the best',
        date: '5/26/24',
        post_id: 1,
        user_id: 3,
    },
    {
        text: 'You suck',
        date: '5/26/24',
        post_id: 3,
        user_id: 3,
    },
    {
        text: 'You a fake',
        date: '5/27/24',
        post_id: 5,
        user_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;