const User = require('./api/User');
const Post = require('./api/Post');
const Comment = require('./api/Comment');

// Every post belongs to a user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Every comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// A user has many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

//A user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// A post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

module.exports = {
    User,
    Post,
    Comment
};
  