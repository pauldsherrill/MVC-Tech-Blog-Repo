const { Model, DataTypes } = require('sequelize');

class Comment extends Model {};

Comment.init(
    {
        id: {
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
            references: {
                key: 'id',
                model: 'post'
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
        modelName: 'comment'
    }
)

module.exports = Comment;