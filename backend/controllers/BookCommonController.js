const BookCommon = require("../models/BookCommonModel");

module.exports = {
  show: function (req, res) {
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
};
