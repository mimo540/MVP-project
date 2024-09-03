const express = require('express');
const router = express.Router();
const { logNutrition } = require('../controllers/nutritionController');

// Log nutrition intake
router.post('/', logNutrition);

module.exports = router;
