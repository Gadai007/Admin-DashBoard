const Sequelize = require("sequelize");

const sequelize = require("../database/connection");

const VendorRequest = sequelize.define(
  "vendor_request",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    one: Sequelize.DataTypes.STRING,
    two: Sequelize.DataTypes.STRING,
    companyCode: Sequelize.DataTypes.STRING,
    supplierLocalName: Sequelize.DataTypes.STRING,
    supplierName: Sequelize.DataTypes.STRING,
    contact: Sequelize.DataTypes.STRING,
    supplierBank: Sequelize.DataTypes.STRING,
    verification: Sequelize.DataTypes.STRING,
    taxIdType: Sequelize.DataTypes.STRING,
    taxId: Sequelize.DataTypes.STRING,
    supplierType: Sequelize.DataTypes.STRING,
    supplierIndustry: Sequelize.DataTypes.STRING,
    supplierSetup: Sequelize.DataTypes.STRING,
    three: Sequelize.DataTypes.STRING,
    four: Sequelize.DataTypes.STRING,
    five: Sequelize.DataTypes.STRING,
    six: Sequelize.DataTypes.STRING,
    seven: Sequelize.DataTypes.STRING,
    additional: Sequelize.DataTypes.STRING,
  },
  { timestamps: true }
);

module.exports = { VendorRequest };
