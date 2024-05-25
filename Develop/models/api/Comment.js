const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection');

class Comment extends Model {};

Comment.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'post'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                key: 'id',
                model: 'user'
            }
        },
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;