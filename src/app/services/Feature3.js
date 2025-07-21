'use client';

import { useState } from 'react';

export default function SetGoals() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (!goalText.trim()) return;
    const newGoal = {
      id: Date.now(), 
      text: goalText,
      completed: false,
    };
    setGoals([newGoal, ...goals]);
    setGoalText('');
  };

  const toggleGoal = (id) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  return (
    <section className="bg-black text-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Set Your Fitness Goals</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={goalText}
          onChange={(e) => setGoalText(e.target.value)}
          placeholder="Enter your fitness goal..."
          className="flex-grow p-2 rounded bg-zinc-800 text-white border border-zinc-600 focus:outline-none"
        />
        <button
          onClick={addGoal}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300"
        >
          Add Goal
        </button>
      </div>

      {goals.length === 0 ? (
        <p className="text-gray-400">No goals added yet.</p>
      ) : (
        <ul className="space-y-3">
          {goals.map((goal, idx) => (
            <li
              key={goal.id ?? idx}
              onClick={() => toggleGoal(goal.id)}
              className={`p-3 rounded cursor-pointer transition ${
                goal.completed
                  ? 'bg-green-700 line-through text-gray-300'
                  : 'bg-zinc-700 hover:bg-zinc-600'
              }`}
            >
              {goal.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
