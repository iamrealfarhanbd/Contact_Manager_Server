require("dotenv").config({ path: "./config/config.env" });
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/db");

const auth = require("./middlewares/auth");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/contact"));
app.use("/api", require("./routes/csv"));

// server configurations.
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB();
  console.log(`server listening on port: ${PORT}`);
});
