const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const vocabularySchema = mongoose.Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    text: String,
    meaning: String,
    example: [String],
  },
  { timestamps: true }
);

const Vocabulary = mongoose.model("Vocabulary", vocabularySchema);

module.exports = Vocabulary;
