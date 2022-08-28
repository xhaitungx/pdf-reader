var express = require("express"),
  mongoose = require("mongoose"),
  route = require("./routes"),
  cors = require("cors"),
  bodyParser = require("body-parser");

app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000 }));
require("dotenv").config();
route(app);

const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) =>
    app.listen(PORT, () => {
      console.log("App running on port: " + PORT);
    })
  )
  .catch((err) => console.log(err));
