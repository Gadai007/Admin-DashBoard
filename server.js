const express = require("express");
const app = express();
const vendorRegistrationRoute = require('./routes/vendorRegistrationRoute')
const vendorRequestRoute = require('./routes/vendorRequestRoute')
const PORT = process.env.PORT || 5000;
const sequelize = require("./database/connection");

app.use(express.urlencoded({ extended: false}))
app.use(express.json())


app.use('/api', vendorRegistrationRoute)
app.use('/api', vendorRequestRoute)


sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
