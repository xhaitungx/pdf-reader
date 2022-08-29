const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    notes: [{ type: Schema.Types.ObjectId, ref: "Note" }],
    vocabularies: [{ type: Schema.Types.ObjectId, ref: "Vocabulary" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
