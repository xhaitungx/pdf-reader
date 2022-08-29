const Book = require("../models/BookModel");
let { connect } = require("../config/db");
module.exports = {
  show: function (req, res) {
    connect();
    res.status(200).json({
      message: "getBook",
    });
  },

  detail: function (req, res) {
    res.status(200).json({
      message: "detail book",
    });
  },

  create: function (req, res) {
    console.log("create");
  },

  update: function (req, res) {
    console.log("create");
  },
};
