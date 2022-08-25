const Book = require("../../models/BookModel");

const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("getting book");
  const { bookId } = req.body;
  Book.findById(bookId).then((result) => res.status(200).json({ result }));
});

router.post("/get-book", (req, res) => {
  console.log("getting book");
  const { bookId } = req.body;
  Book.findById(bookId).then((result) => {
    res.status(200).json({ result });
  });
});

router.post("/", (req, res) => {
  Book.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
});

module.exports = router;
