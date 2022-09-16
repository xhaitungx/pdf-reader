const userController = require("../controllers/UserController");
const router = require("express").Router();

router.post("/", userController.create);
router.post("/login", userController.Login);

module.exports = router;
