const Sequelize = require("sequelize");
const { User } = require('./User')

const sequelize = require("../database/connection");

const VendorRegistration = sequelize.define(
  "vendor_registration",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: Sequelize.DataTypes.INTEGER,
    supplierLocalName: Sequelize.DataTypes.STRING,
    supplierName: Sequelize.DataTypes.STRING,
    contactPerson: Sequelize.DataTypes.STRING,
    contactEmail: Sequelize.DataTypes.STRING,
    contactPhoneNumber: Sequelize.DataTypes.STRING,
    supplierFaxNumber: Sequelize.DataTypes.STRING,
    houseNumber: Sequelize.DataTypes.STRING,
    street: Sequelize.DataTypes.STRING,
    line2: Sequelize.DataTypes.STRING,
    line3: Sequelize.DataTypes.STRING,
    city: Sequelize.DataTypes.STRING,
    postalCode: Sequelize.DataTypes.INTEGER,
    country: Sequelize.DataTypes.STRING,
    region: Sequelize.DataTypes.STRING,
    taxIdType: Sequelize.DataTypes.STRING,
    taxIdNumber: Sequelize.DataTypes.STRING,
    primeCurrency: Sequelize.DataTypes.STRING,
    companyName: Sequelize.DataTypes.STRING,
    benificaryAddress: Sequelize.DataTypes.STRING,
    bankAccountName: Sequelize.DataTypes.STRING,
    bankAccountNumber: Sequelize.DataTypes.STRING,
    IBAN: Sequelize.DataTypes.STRING,
    bankName: Sequelize.DataTypes.STRING,
    bankNumber: Sequelize.DataTypes.STRING,
    branchName: Sequelize.DataTypes.STRING,
    bankAddress: Sequelize.DataTypes.STRING,
    bankSwiftCode: Sequelize.DataTypes.STRING,
    bankRoutingCode: Sequelize.DataTypes.STRING,
    one: Sequelize.DataTypes.STRING,
    two: Sequelize.DataTypes.STRING,
    three: Sequelize.DataTypes.STRING,
    four: Sequelize.DataTypes.STRING,
    five: Sequelize.DataTypes.STRING,
    six: Sequelize.DataTypes.STRING,
    seven: Sequelize.DataTypes.STRING,
    eight: Sequelize.DataTypes.STRING,
  },
  { timestamps: true }
);

User.hasMany(VendorRegistration)
VendorRegistration.belongsTo(User)

module.exports = { VendorRegistration };
