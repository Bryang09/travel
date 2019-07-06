const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  roomsAvailable: {
    type: Number,
    required: true
  },
  roomsTotal: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
