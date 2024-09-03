import React, { useState } from 'react';

function NutritionLog() {
  const [nutrition, setNutrition] = useState({
    food: '',
    calories: '',
    date: ''
  });

  const handleChange = (e) => {
    setNutrition({ ...nutrition, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to the backend
    console.log(nutrition);
  };

  return (
    <div>
      <h2>Log Nutrition</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Food:
          <input type="text" name="food" value={nutrition.food} onChange={handleChange} />
        </label>
        <br />
        <label>
          Calories:
          <input type="number" name="calories" value={nutrition.calories} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={nutrition.date} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Log Nutrition</button>
      </form>
    </div>
  );
}

export default NutritionLog;
