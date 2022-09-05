const Book = require("../models/BookModel");
const BookUtils = require("../utils/BookUtils");
const { connect } = require("../config/db");
module.exports = {
  show: async function (req, res) {
    connect();
    const books = await Book.find({}).select("-content");
    res.status(200).json({
      book: books,
    });
  },
  detail: async function (req, res) {
    connect();
    const bookID = req.params.id;
    const result = await Book.findById(bookID).then((result) => result);
    if (result)
      res.status(200).json({
        content: result.content,
      });
  },
  create: async function (req, res) {
    connect();
    const books = await BookUtils.isNotRepeat(
      req.files.files,
      req.files.length
    );
    BookUtils.createBook(books, res);
  },
  delete: function (req, res) {
    connect();
    const { id } = req.params;
    Book.findByIdAndDelete(id)
      .then((result) =>
        res.status(200).json({
          message: "Xóa sách thành công",
        })
      )
      .catch((err) =>
        res.status(404).json({
          message: "Xóa sách thất bại",
        })
      );
  },
  deleteAll: function (req, res) {
    connect();
    Book.deleteMany({})
      .then((result) =>
        res.status(200).json({
          message: "Xóa tất cả sách thành công",
        })
      )
      .catch((err) =>
        res.status(404).json({
          message: "Xóa tất cả sách thất bại",
        })
      );
  },
  update: function (req, res) {
    console.log("create");
  },
  softDelete: function (req, res) {
    connect();
    const { id } = req.params;
    Book.findByIdAndDelete(id)
      .then((result) =>
        res.status(200).json({
          message: "Xóa sách thành công",
        })
      )
      .catch((err) =>
        res.status(404).json({
          message: "Xóa sách thất bại",
        })
      );
  },
  softDeleteAll: function (req, res) {
    connect();
    const { id } = req.params;
    Book.findByIdAndDelete(id)
      .then((result) =>
        res.status(200).json({
          message: "Xóa sách thành công",
        })
      )
      .catch((err) =>
        res.status(404).json({
          message: "Xóa sách thất bại",
        })
      );
  },
};
