const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const BookSchema = mongoose.Schema(
  {
    bookID: { type: Schema.Types.ObjectId, ref: "BookCommon" },
    name: String,
    content: Buffer,
    cfi: Object,
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
