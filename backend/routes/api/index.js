const router = require("express").Router();
router.use("/translate", require("./translate"));
router.use("/book", require("./book"));

module.exports = router;
