const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: String,
    password: String,
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
    notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
    vocabularies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vocabulary" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
