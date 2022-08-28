const router = require("express").Router();
const TranslateController = require("../controllers/TranslateController");
router.post("/word-translate", TranslateController.word);

router.post("/sentence-translate", TranslateController.sentence);

module.exports = router;
