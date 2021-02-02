const express = require("express");
const app = express();
const vendorRegistrationRoute = require('./routes/vendorRegistrationRoute')
const vendorRequestRoute = require('./routes/vendorRequestRoute')
const authRoute = require('./routes/authRoute')
const userRoute = require('./routes/userRoute')
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')
const sequelize = require("./database/connection");
require("dotenv").config()

app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoute)
app.use('/api', userRoute)
app.use('/api', vendorRegistrationRoute)
app.use('/api', vendorRequestRoute)


sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
