const mongoose = require("mongoose");
const moment = require("moment");

const reactionSchema = new mongoose.Schema({
  reactionId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  reactionBody: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, format: moment().format("l") },
});

module.exports = reactionSchema;
