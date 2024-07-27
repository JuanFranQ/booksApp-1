const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

const app = express();
app.use(bodyParser.json());
app.use("/api", bookRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database", error);
  });