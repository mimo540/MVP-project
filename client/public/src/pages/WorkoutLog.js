import React, { useState } from 'react';

function WorkoutLog() {
  const [workout, setWorkout] = useState({
    type: '',
    duration: '',
    date: ''
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to the backend
    console.log(workout);
  };

  return (
    <div>
      <h2>Log a Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Workout Type:
          <input type="text" name="type" value={workout.type} onChange={handleChange} />
        </label>
        <br />
        <label>
          Duration (minutes):
          <input type="number" name="duration" value={workout.duration} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={workout.date} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Log Workout</button>
      </form>
    </div>
  );
}

export default WorkoutLog;
