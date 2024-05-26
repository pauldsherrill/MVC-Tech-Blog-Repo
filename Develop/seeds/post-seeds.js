const { Post } = require('../models');

const postData = [
    {
        title: 'Paul Sherrill Post 1',
        text: 'This is my first post',
        user_id: 1,
    },
    {
        title: 'Paul Sherrill Post 2',
        text: 'This is my second post',
        user_id: 1,
    },
    {
        title: 'Lisan al Gaibs Post 1',
        text: 'MY NAME IS PAUL MOADIB ATREIDES DUKE OF AARRAKIS UNDER THE BLUE SEA OR SOMETHING!',
        user_id: 2,
    },
    {
        title: 'Lisan al Gaibs Post 2',
        text: 'YOU MOTHERS TOLD YOU ABOUT MY COMING',
        user_id: 2,
    },
    {
        title: 'Feyds Post 1',
        text: 'Im here Atreides',
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
