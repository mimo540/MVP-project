const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Workout', WorkoutSchema);
