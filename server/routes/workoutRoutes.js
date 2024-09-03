const express = require('express');
const router = express.Router();
const { getWorkouts, logWorkout } = require('../controllers/workoutController');

// Get all workouts
router.get('/', getWorkouts);

// Log a workout
router.post('/', logWorkout);

module.exports = router;
