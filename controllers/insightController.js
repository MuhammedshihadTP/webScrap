const insightService = require('../services/insightService');


exports.createInsight = async (req, res, next) => {
  try {
    const { domain } = req.body;
    const insight = await insightService.createInsight(domain);
    res.status(201).json(insight);
  } catch (error) {
    next(error);
  }
};


exports.getAllInsights = async (req, res, next) => {
  try {
    const insights = await insightService.getAllInsights();
    res.status(200).json(insights);
  } catch (error) {
    next(error);
  }
  
};


exports.deleteInsight = async (req, res, next) => {
  try {
    const { id } = req.params;
    await insightService.deleteInsight(id);
    res.status(200).json({ message: 'Insight deleted successfully' });
  } catch (error) {
    next(error);
  }
};


exports.toggleFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedInsight = await insightService.toggleFavorite(id);
    res.status(200).json(updatedInsight);
  } catch (error) {
    next(error);
  }
};
