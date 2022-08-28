const router = require("express").Router();

function route(app) {
  app.use("/book", require("./book"));
  app.use("/translate", require("./translate"));
}
// router.use("/book", require("./book"));

module.exports = route;
