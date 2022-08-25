const mongoose = require("mongoose");

const getBooks = (req, res) => {
  const { userID } = req.body;
};

const getBookByID = (req, res) => {
  const { userID, bookID } = req.body;
};
exports.module = { getBooks };
