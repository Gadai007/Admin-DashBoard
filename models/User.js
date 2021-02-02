const Sequelize = require("sequelize");

const sequelize = require("../database/connection");

const bcrypt = require("bcrypt");

const User = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    password: Sequelize.DataTypes.STRING,
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  }
);

User.prototype.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = { User };
