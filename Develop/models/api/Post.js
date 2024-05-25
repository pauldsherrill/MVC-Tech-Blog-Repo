const { Model, DataTypes } = require('sequelize');

class Post extends Model {};

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment_id: {
            references: {
                key: 'id',
                model: 'comment'
            }
        },
        user_id: {
            references: {
                key: 'id',
                model: 'user'
            }
        },
    },
    {
        freezeTableName: false,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;