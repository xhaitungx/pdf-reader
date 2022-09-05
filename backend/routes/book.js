const Book = require("../models/BookModel");
const BookController = require("../controllers/BookController");
const router = require("express").Router();

router.get("/", BookController.show);
router.get("/:id", BookController.detail);
router.post("/", BookController.create);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);
router.delete("/", BookController.deleteAll);
router.delete("/soft-deleting", BookController.softDelete);
router.delete("/soft-deleting/:id", BookController.softDeleteAll);

module.exports = router;
