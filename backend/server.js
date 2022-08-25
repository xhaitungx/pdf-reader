var express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser");

server = express();
server.use(cors());
server.use(express.json({ limit: "100mb" }));
// server.use(express.urlencoded({ limit: "100mb" }));
server.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000 }));
server.use(require("./routes"));
require("dotenv").config();
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) =>
    server.listen(PORT, () => {
      console.log("App running on port: " + PORT);
    })
  )
  .catch((err) => console.log(Error));
