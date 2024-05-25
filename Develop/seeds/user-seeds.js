const { User } = require('../models');

const userData = [
    {
        username: 'PaulSherrill17',
        password: 'car234car234',
        email: 'pauldsherrill@yahoo.com'
    },
    {
        username: 'PaulMoadibAtreides21',
        password: 'lisanalgaib21',
        email: 'sherrillpaul21@gmail.com'
    },
    {
        username: 'FeydRautha33',
        password: 'welldoneatreides57',
        email: 'pauldsherrill@yahoo.com'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
