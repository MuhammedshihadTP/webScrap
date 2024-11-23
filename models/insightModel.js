const mongoose = require('mongoose');

const insightSchema = new mongoose.Schema(
  {
    domain: { type: String, required: true, unique: true },
    wordCount: { type: Number, required: true },
    media: [{ type: String }],
    isFavorite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Insight', insightSchema);
