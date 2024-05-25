const { Post } = require('../models');

const postData = [
    {
        title: 'Paul Sherrill Post 1',
        text: 'This is my first post',
        date: '5/24/24',
        comment_id: [1, 2],
        user_id: 1,
    },
    {
        title: 'Paul Sherrill Post 2',
        text: 'This is my second post',
        date: '5/25/24',
        comment_id: [3],
        user_id: 1,
    },
    {
        title: 'Lisan al Gaibs Post 1',
        text: 'MY NAME IS PAUL MOADIB ATREIDES DUKE OF AARRAKIS UNDER THE BLUE SEA OR SOMETHING!',
        date: '5/21/24',
        user_id: 2,
    },
    {
        title: 'Lisan al Gaibs Post 2',
        text: 'YOU MOTHERS TOLD YOU ABOUT MY COMING',
        date: '5/21/24',
        user_id: 2,
    },
    {
        title: 'Feyds Post 1',
        text: 'Im here Atreides',
        date: '5/24/24',
        comment_id: [4],
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
