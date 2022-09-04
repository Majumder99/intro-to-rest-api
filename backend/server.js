const { application } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/goalRoutes");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
