const { Model, DataTypes } = require('sequelize');

const sequelize = require('../../config/connection');

class User extends Model {};

User.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: false,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;