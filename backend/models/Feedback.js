const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  category: {
    type: String,
    enum: ["Suggestion", "Bug", "Feature"],
    default: "Suggestion"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
