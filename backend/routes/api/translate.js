const router = require("express").Router();
const translate = require("@vitalets/google-translate-api");

router.post("/word-translate", (req, res) => {
  let { word } = req.body;
  translate(text, { from: "en", to: "vi" })
    .then((result) => {
      res.status(200).json({ result: result.text });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Hệ thống không ổn định, hãy thử lại sau" });
    });
});

router.post("/sentence-translate", (req, res) => {
  let { sentence } = req.body;
  translate(text, { from: "en", to: "vi" })
    .then((result) => {
      res.status(200).json({ result: result.text });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ errorMessage: "Hệ thống không ổn định, hãy thử lại sau" });
    });
});

module.exports = router;
