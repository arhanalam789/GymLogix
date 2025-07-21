'use client';

import { useState } from 'react';

const splits = {
  'Bro Split': {
    Monday: 'Chest + Triceps',
    Tuesday: 'Back + Biceps',
    Wednesday: 'Legs + Shoulders',
    Thursday: 'Chest + Triceps',
    Friday: 'Back + Biceps',
    Saturday: 'Legs + Shoulders',
    Sunday: 'Rest',
  },
  'Push Pull Legs': {
    Monday: 'Push (Chest, Shoulder, Triceps)',
    Tuesday: 'Pull (Back, Biceps)',
    Wednesday: 'Legs',
    Thursday: 'Push (Chest, Shoulder, Triceps)',
    Friday: 'Pull (Back, Biceps)',
    Saturday: 'Legs',
    Sunday: 'Rest',
  },
  'Upper Lower': {
    Monday: 'Upper Body',
    Tuesday: 'Lower Body',
    Wednesday: 'Rest',
    Thursday: 'Upper Body',
    Friday: 'Lower Body',
    Saturday: 'Rest',
    Sunday: 'Rest',
  },
  'Full Body': {
    Monday: 'Full Body',
    Tuesday: 'Rest',
    Wednesday: 'Full Body',
    Thursday: 'Rest',
    Friday: 'Full Body',
    Saturday: 'Rest',
    Sunday: 'Rest',
  },
  PHUL: {
    Monday: 'Upper (Power)',
    Tuesday: 'Lower (Power)',
    Wednesday: 'Rest',
    Thursday: 'Upper (Hypertrophy)',
    Friday: 'Lower (Hypertrophy)',
    Saturday: 'Rest',
    Sunday: 'Rest',
  },
  'Arnold Split': {
    Monday: 'Chest + Back',
    Tuesday: 'Shoulders + Arms',
    Wednesday: 'Legs',
    Thursday: 'Chest + Back',
    Friday: 'Shoulders + Arms',
    Saturday: 'Legs',
    Sunday: 'Rest',
  },
};

export default function WorkoutSplitSelector() {
  const [selectedSplit, setSelectedSplit] = useState('Bro Split');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <section className="bg-black text-white p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Choose Your Workout Split</h2>

     
      <select
        value={selectedSplit}
        onChange={(e) => setSelectedSplit(e.target.value)}
        className="bg-zinc-800 border border-zinc-600 rounded px-4 py-2 mb-6"
      >
        {Object.keys(splits).map((split, idx) => (
          <option key={idx} value={split}>
            {split}
          </option>
        ))}
      </select>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {days.map((day) => (
          <div
            key={day}
            className="bg-zinc-800 p-4 rounded-lg shadow text-sm"
          >
            <strong className="text-base">{day}</strong>
            <p className="mt-1 text-zinc-300">{splits[selectedSplit][day]}</p>
          </div>
        ))}
      </div>

   
      <p className="mt-6 text-sm text-gray-400">
        After checking your weekly split, scroll down to view exercises for each day.
      </p>
    </section>
  );
}
