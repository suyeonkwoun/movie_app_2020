var mongoose = require("mongoose");
const { string } = require("prop-types");
// Define schema
var Schema = mongoose.Schema;

var Comment = new Schema(
  {
    user: { type: Number },
    comment: { type: String },
  },
  { collection: "comment" }
);

// Compile model from schema
module.exports = mongoose.model("Comment", Comment);
