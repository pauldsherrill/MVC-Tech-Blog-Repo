const { Model, DataType } = require('sequelize');

class Post extends Model {};

Post.init(
    {
        title: {
            type: DataType.STRING,
            allowNull: false,
        },
        text: {
            type: DataType.STRING,
            allowNull: false,
        },
        user_id: {
            references: {
                key: 'id',
                model: 'user'
            }
        }
    },
    {
        freezeTableName: false,
        underscored: true,
        modelName: 'post'
    }
)