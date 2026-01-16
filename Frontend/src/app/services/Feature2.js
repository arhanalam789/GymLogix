'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <section className="bg-black text-white px-6 py-12 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Choose Your <span className="text-[#FF4F5A]">Workout Split</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Select a training methodology that aligns with your goals and schedule.
            </p>
          </div>

          <div className="relative group min-w-[240px]">
            <label className="text-xs font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2 block">
              Selection
            </label>
            <select
              value={selectedSplit}
              onChange={(e) => setSelectedSplit(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all cursor-pointer font-medium"
            >
              {Object.keys(splits).map((split, idx) => (
                <option key={idx} value={split} className="bg-neutral-900">
                  {split}
                </option>
              ))}
            </select>
            <div className="absolute right-4 bottom-3.5 pointer-events-none text-neutral-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSplit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4"
          >
            {days.map((day) => {
              const workout = splits[selectedSplit][day];
              const isRest = workout === 'Rest';

              return (
                <div
                  key={day}
                  className={`relative group h-full p-5 rounded-2xl border transition-all duration-300 ${isRest
                      ? 'bg-neutral-900/40 border-neutral-800/50 opacity-60'
                      : 'bg-neutral-900 border-neutral-800 hover:border-[#FF4F5A]/50 hover:bg-neutral-800/50'
                    }`}
                >
                  {!isRest && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#FF4F5A] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}

                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${isRest ? 'text-neutral-500' : 'text-[#FF4F5A]'
                        }`}>
                        {day}
                      </span>
                      <h3 className={`text-lg font-bold leading-tight ${isRest ? 'text-neutral-400' : 'text-white'
                        }`}>
                        {workout}
                      </h3>
                    </div>

                    {!isRest && (
                      <div className="mt-8">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-[#FF4F5A] group-hover:text-white transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF4F5A]/10 flex items-center justify-center text-[#FF4F5A]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-white">Next Steps</h4>
              <p className="text-neutral-500 text-sm">Scroll down to view specific exercises for each day based on your selected split.</p>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-sm font-bold transition-colors">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}
