function route(app) {
  app.use("/book", require("./book"));
  app.use("/translator", require("./translate"));
}

module.exports = route;
