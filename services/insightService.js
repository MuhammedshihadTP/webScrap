const Insight = require('../models/insightModel');
const scraper = require('../utils/scraper');

exports.createInsight = async (domain) => {
  const existing = await Insight.findOne({ domain });
  if (existing) return existing;

  const { wordCount, media } = await scraper.scrapeWebsite(domain);
  const insight = new Insight({ domain, wordCount, media });
  return await insight.save();
};

exports.getAllInsights = async () => {
  return await Insight.find().sort({ createdAt: -1 });
};

exports.deleteInsight = async (id) => {
  return await Insight.findByIdAndDelete(id);
};

exports.toggleFavorite = async (id) => {
  const insight = await Insight.findById(id);
  if (!insight) throw new Error('Insight not found');

  insight.isFavorite = !insight.isFavorite;
  return await insight.save();
};
