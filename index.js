const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

//Import file Only
const customerRoute = require("./src/routes/customerRoute");
const employeeRoute = require("./src/routes/employeeRoute");
const categoryRoute = require("./src/routes/categoryRoute");

//Route
app.use("/api", customerRoute);
app.use("/api", employeeRoute);
app.use("/api", categoryRoute);

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
