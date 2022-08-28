const sentenceTranslator = require("@vitalets/google-translate-api");
const translate = require("tratu-core");

module.exports = {
  word: async function (req, res) {
    let { text } = req.body;
    text = text.trim();
    const response = await translate(text)
      .then((result) => {
        res.status(200).json({ result: result.trim().split(`\n`) });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ errorMessage: "Hệ thống không ổn định, hãy thử lại sau" });
      });
  },
  sentence: function (req, res) {
    let { sentence } = req.body;
    sentenceTranslator(sentence, { from: "en", to: "vi" })
      .then((result) => {
        res.status(200).json({ result: result.text });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ errorMessage: "Hệ thống không ổn định, hãy thử lại sau" });
      });
  },
};
