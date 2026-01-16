'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WorkoutCategories() {
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBodyParts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          {
            headers: {
              'X-RapidAPI-Key': 'fa44eb9504msh21cf4cd75b902fep1b82f7jsn3bd2d7de3911',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            },
          }
        );
        if (!res.ok) throw new Error('Failed to fetch body parts');
        const data = await res.json();
        setBodyParts(data);
        if (data.length > 0 && !selectedBodyPart) {
          setSelectedBodyPart(data[0]);
        }
      } catch (err) {
        console.error('Error fetching body parts:', err);
        setError('Connection failed. Please check your API key.');
      } finally {
        setLoading(false);
      }
    };

    fetchBodyParts();
  }, [selectedBodyPart]);

  useEffect(() => {
    if (!selectedBodyPart) return;

    const fetchExercises = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          {
            headers: {
              'X-RapidAPI-Key': 'fa44eb9504msh21cf4cd75b902fep1b82f7jsn3bd2d7de3911',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            },
          }
        );
        if (!res.ok) throw new Error('Failed to fetch exercises');
        const data = await res.json();
        setExercises(data.slice(0, 10));
      } catch (err) {
        console.error('Error fetching exercises:', err);
        setError('Failed to load exercises.');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [selectedBodyPart]);

  return (
    <section className="bg-black text-white px-6 py-12 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            Workout <span className="text-[#FF4F5A]">Categories</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Explore targeted exercises curated for specific muscle groups to optimize your training.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 h-auto">
          {bodyParts.map((part, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedBodyPart(part)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${selectedBodyPart === part
                ? 'bg-[#FF4F5A] border-[#FF4F5A] text-white shadow-lg shadow-red-900/20 active:scale-95'
                : 'bg-neutral-900 border-neutral-800 text-neutral-500 hover:border-neutral-700 hover:text-white'
                }`}
            >
              {part}
            </button>
          ))}
        </div>

        {/* Status Messages */}
        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        {/* Exercises Grid */}
        <div className="relative min-h-[400px]">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-[#FF4F5A] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBodyPart}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {exercises.map((ex, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl hover:border-[#FF4F5A]/30 transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 bg-[#FF4F5A] rounded-bl-3xl transform translate-x-1 translate-y--1 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4 capitalize leading-tight group-hover:text-[#FF4F5A] transition-colors">
                        {ex.name}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-sm text-neutral-400">
                          <span className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-300">🎯</span>
                          <span className="font-medium">Target:</span>
                          <span className="text-neutral-200 capitalize">{ex.target}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-400">
                          <span className="w-5 h-5 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-300">🛠</span>
                          <span className="font-medium">Equipment:</span>
                          <span className="text-neutral-200 capitalize">{ex.equipment}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
                        <div className="p-2 bg-neutral-950 rounded-lg text-center">
                          <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Sets</p>
                          <p className="text-lg font-bold text-white">3</p>
                        </div>
                        <div className="p-2 bg-neutral-950 rounded-lg text-center">
                          <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Reps</p>
                          <p className="text-lg font-bold text-white">10-12</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Footer Guidance */}
        {!loading && selectedBodyPart && (
          <div className="mt-12 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-[#FF4F5A]/10 flex items-center justify-center text-[#FF4F5A] shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-neutral-400 text-sm italic leading-relaxed">
              If you&apos;re an <span className="text-white font-bold">advanced athlete</span>, choose any 3 exercises. If you&apos;re a <span className="text-white font-bold">beginner</span>, go for 5 exercises using a weight that brings you close to failure in 10-12 reps.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
