'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WorkoutCategories() {
  const [bodyParts, setBodyParts] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBodyParts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          {
            headers: {
              'X-RapidAPI-Key': 'fa44eb9504msh21cf4cd75b902fep1b82f7jsn3bd2d7de3911',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            },
          }
        );
        setBodyParts(res.data);
      } catch (err) {
        console.error('Error fetching body parts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBodyParts();
  }, []);

  useEffect(() => {
    if (!selectedBodyPart) return;

    const fetchExercises = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          {
            headers: {
              'X-RapidAPI-Key': 'fa44eb9504msh21cf4cd75b902fep1b82f7jsn3bd2d7de3911',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
            },
          }
        );
        setExercises(res.data.slice(0, 10)); 
      } catch (err) {
        console.error('Error fetching exercises:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [selectedBodyPart]);

  return (
    <section className="bg-[#0f0f0f] text-white p-6 rounded-xl shadow-md max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Workout Categories</h2>

     
      <div className="flex flex-wrap gap-3 mb-6">
        {bodyParts.map((part, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-full text-sm transition duration-200 ${
              selectedBodyPart === part
                ? 'bg-white text-black font-semibold'
                : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
            onClick={() => setSelectedBodyPart(part)}
          >
            {part}
          </button>
        ))}
      </div>

      
      {loading && (
        <p className="text-gray-400 text-sm italic">Loading exercises...</p>
      )}


      {!loading && selectedBodyPart && (
        <>
          <h3 className="text-xl font-semibold mb-4 capitalize">
            Exercises for{' '}
            <span className="text-yellow-400">{selectedBodyPart}</span>
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {exercises.map((ex, idx) => (
              <li
                key={idx}
                className="bg-zinc-800 p-4 rounded-lg shadow hover:bg-zinc-700 transition"
              >
                <p className="text-lg font-semibold mb-1 capitalize">
                  {ex.name}
                </p>
                <p className="text-sm text-gray-400">
                  🎯 Target: {ex.target}
                </p>
                <p className="text-sm text-gray-400">
                  🛠 Equipment: {ex.equipment}
                </p>
                <p>Sets: 3</p>
                <p>Reps: 10–12</p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm text-gray-400">
            {`If you're an `}
            <span className="text-white font-semibold">{`advanced athlete`}</span>
            {`, choose any `}
            <span className="text-white font-semibold">{`3 exercises`}</span>
            {`. If you're a `}
            <span className="text-white font-semibold">{`beginner`}</span>
            {`, go for `}
            <span className="text-white font-semibold">{`5 exercises`}</span>
            {` using a weight that brings you close to `}
            <span className="text-white font-semibold">{`failure in 10–12 reps`}</span>
            {`.`}
          </p>
        </>
      )}
    </section>
  );
}
