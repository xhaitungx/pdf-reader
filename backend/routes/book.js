const BookController = require("../controllers/BookController");
const router = require("express").Router();

router.post("/", BookController.create);
router.post("/books-list", BookController.show);
router.post("/book-detail", BookController.detail);
router.patch("/", BookController.update);
router.delete("/", BookController.softDelete);
router.delete("/hard-deleting", BookController.hardDelete);
router.delete("/delete-all", BookController.deleteAll);

module.exports = router;
