const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  name: String,
  content: Buffer,
});

const Book = mongoose.model("Product", BookSchema);

module.exports = Book;
