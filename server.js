const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./.env") });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;
const db = require("./db");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require("./routes/users");

// app.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
// });

app.use("/api/users", users(db));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
