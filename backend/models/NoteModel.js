const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const NoteSchema = mongoose.Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    bookID: { type: Schema.Types.ObjectId, ref: "BookCommon" },
    name: String,
    cfi: Object,
    range: Object,
    highlight: String,
    content: String,
    color: Number,
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
