const Workout = require('../models/Workout');

// Get all workouts
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Log a workout
exports.logWorkout = async (req, res) => {
  const { type, duration, date } = req.body;

  try {
    const newWorkout = new Workout({ type, duration, date });
    await newWorkout.save();
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
