function route(app) {
  app.use("/book", require("./book"));
  app.use("/translate", require("./translate"));
}

module.exports = route;
