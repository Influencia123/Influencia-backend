const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;
db();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
