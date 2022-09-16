function route(app) {
  app.use("/book", require("./book"));
  app.use("/translator", require("./translate"));
  app.use("/user",require("./user"))
}

module.exports = route;
