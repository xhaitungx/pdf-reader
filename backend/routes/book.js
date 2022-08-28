const Book = require("../models/BookModel");
const BookCommonController = require("../controllers/BookCommonController");
const router = require("express").Router();

router.get('/', BookCommonController.show);
router.get('/:id', BookCommonController.detail);
router.post('/', BookCommonController.create);

// router.put('/:id',BookCommonController.update);
// router.delete('/:id',BookCommonController.delete);

module.exports = router;
