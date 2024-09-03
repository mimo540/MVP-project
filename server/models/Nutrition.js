const mongoose = require('mongoose');

const NutritionSchema = new mongoose.Schema({
  food: { type: String, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Nutrition', NutritionSchema);
