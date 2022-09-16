const BookController = require("../controllers/BookController");
const router = require("express").Router();

router.post("/", BookController.create);
router.post("/books-list", BookController.show);
router.post("/book-detail", BookController.detail);
router.put("/:id", BookController.update);
router.delete("/:id", BookController.delete);
router.delete("/", BookController.deleteAll);
router.delete("/soft-deleting", BookController.softDelete);
router.delete("/soft-deleting/:id", BookController.softDeleteAll);

module.exports = router;
