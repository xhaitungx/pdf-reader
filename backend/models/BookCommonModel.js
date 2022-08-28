const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookCommonSchema = mongoose.Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "User" },
    softDelete: Boolean,
    name: String,
    md5: String,
    cover: Buffer,
  },
  { timestamps: true }
);

const BookCommon = mongoose.model("BookCommon", bookCommonSchema);

module.exports = BookCommon;
