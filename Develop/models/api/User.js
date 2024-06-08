const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../../config/connection");

class User extends Model {
  // Other class methods and properties can be defined here

  async checkPassword(password) {
    try {
      return await bcrypt.compare(password, this.password);
    } catch (error) {
      console.error("Error comparing passwords:", error);
      return false; // Return false in case of error
    }
  }
}

User.init(
  {
    id: {
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
      validate: {
        min: 6,
        max: 20,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
  }
);

module.exports = User;
