const Book = require("../models/BookModel");
const BookController = require("../controllers/BookController");
const router = require("express").Router();

router.get("/", BookController.show);
router.get("/:id", BookController.detail);
router.post("/", BookController.create);

// router.put('/:id',BookController.update);
// router.delete('/:id',BookController.delete);

module.exports = router;
