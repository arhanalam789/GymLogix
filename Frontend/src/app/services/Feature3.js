'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL } from '@/lib/config';

export default function SetGoals() {
  const [goalText, setGoalText] = useState('');
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGoals = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Please login again to manage your goals.');
      }
      console.log('Fetching goals with token:', token);
      const res = await fetch(`${API_URL}/api/goals`, {
        headers: {
          'x-auth-token': token
        }
      });
      console.log('Fetch response status:', res.status);
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(`Error ${res.status}: ${errorData.msg || 'Failed to fetch goals'}`);
      }
      const data = await res.json();
      console.log('Fetched data:', data);
      setGoals(data);
    } catch (err) {
      console.error('Fetch Goals Error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const addGoal = async (e) => {
    e.preventDefault();
    if (!goalText.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/api/goals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ text: goalText })
      });

      if (!res.ok) throw new Error('Failed to add goal');
      const newGoal = await res.json();
      setGoals([newGoal, ...goals]);
      setGoalText('');
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleGoal = async (id, completed) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/api/goals/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ completed: !completed })
      });

      if (!res.ok) throw new Error('Failed to update goal');
      const updatedGoal = await res.json();
      setGoals((prev) =>
        prev.map((goal) => (goal._id === id ? updatedGoal : goal))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteGoal = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_URL}/api/goals/${id}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': token
        }
      });

      if (!res.ok) throw new Error('Failed to delete goal');
      setGoals((prev) => prev.filter((goal) => goal._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="bg-black text-white px-6 py-12 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Set Your <span className="text-[#FF4F5A]">Fitness Goals</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Define your targets, track your progress, and stay focused on your journey.
            </p>
          </div>

          <form onSubmit={addGoal} className="flex-grow max-w-lg relative group">
            <input
              type="text"
              value={goalText}
              onChange={(e) => setGoalText(e.target.value)}
              placeholder="What is your next target?"
              className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-xl px-6 py-4 pr-32 focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all placeholder:text-neutral-600"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-[#FF4F5A] hover:bg-[#ff6b74] text-white px-6 rounded-lg font-bold transition-all active:scale-95 shadow-lg shadow-red-900/20"
            >
              Add Goal
            </button>
          </form>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-4 border-[#FF4F5A] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {goals.map((goal) => (
                <motion.div
                  key={goal._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 ${goal.completed
                    ? 'bg-neutral-900/20 border-green-500/20 opacity-70'
                    : 'bg-neutral-900 border-neutral-800 hover:border-white/20'
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      onClick={() => toggleGoal(goal._id, goal.completed)}
                      className="cursor-pointer flex-grow"
                    >
                      <h3 className={`text-xl font-bold leading-tight transition-all duration-300 ${goal.completed ? 'text-neutral-500 line-through' : 'text-white'
                        }`}>
                        {goal.text}
                      </h3>
                      <p className="text-xs text-neutral-600 mt-2 font-medium uppercase tracking-widest">
                        {new Date(goal.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => toggleGoal(goal._id, goal.completed)}
                        className={`p-2 rounded-lg transition-colors ${goal.completed
                          ? 'bg-green-500 text-white'
                          : 'bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700'
                          }`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteGoal(goal._id)}
                        className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-red-500 hover:bg-red-500/10 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {goals.length === 0 && (
              <div className="col-span-full border-2 border-dashed border-neutral-800 rounded-2xl py-20 flex flex-col items-center justify-center text-neutral-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <p className="text-lg font-medium">Ready to smash some targets?</p>
                <p className="text-sm">Enter your first goal above to get started.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
