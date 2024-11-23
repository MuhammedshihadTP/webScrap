const express = require('express');
const router = express.Router();
const insightController = require('../controllers/insightController');
const { validateDomain } = require('../validators/insightValidator');


router.post('/insights', validateDomain, insightController.createInsight);
router.get('/insights', insightController.getAllInsights);
router.delete('/insights/:id', insightController.deleteInsight);
router.patch('/insights/:id/favorite', insightController.toggleFavorite);

module.exports = router;
