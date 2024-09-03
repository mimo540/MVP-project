const Nutrition = require('../models/Nutrition');

// Log nutrition intake
exports.logNutrition = async (req, res) => {
  const { food, calories, date } = req.body;

  try {
    const newNutrition = new Nutrition({ food, calories, date });
    await newNutrition.save();
    res.status(201).json(newNutrition);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
