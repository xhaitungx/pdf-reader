const TranslateUtils = require("../utils/TranslateUtils");

module.exports = {
  translate: function (req, res) {
    const text = req.body.text.trim();
    if (text.trim().split(" ").length === 1)
      TranslateUtils.wordTranslator(text, res);
    else TranslateUtils.sentenceTranslator(text, res);
  },
};
