"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foodItems = [
  { name: "Paneer", protein: "18g", calories: "265 kcal", tag: "Veg" },
  { name: "Chicken Breast", protein: "31g", calories: "165 kcal", tag: "Non-Veg" },
  { name: "Tofu", protein: "15g", calories: "144 kcal", tag: "Veg" },
  { name: "Boiled Egg", protein: "6g", calories: "78 kcal", tag: "Non-Veg" },
  { name: "Lentils", protein: "9g", calories: "230 kcal", tag: "Veg" },
  { name: "Fish", protein: "22g", calories: "206 kcal", tag: "Non-Veg" },
  { name: "Chickpeas", protein: "19g", calories: "364 kcal", tag: "Veg" },
  { name: "Greek Yogurt", protein: "10g", calories: "59 kcal", tag: "Veg" },
];

export default function KnowYourProtein() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!weight || isNaN(weight)) {
      return;
    }

    const weightNum = parseFloat(weight);
    const proteinMin = (1.6 * weightNum).toFixed(1);
    const proteinMax = (2.2 * weightNum).toFixed(1);
    const maintenanceCalories = (33 * weightNum).toFixed(0);

    setResult({
      proteinMin,
      proteinMax,
      maintenanceCalories,
    });
  };

  return (
    <section className="bg-black text-white px-6 py-12 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Know Your <span className="text-[#FF4F5A]">Protein Intake</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Calculate your daily requirements and discover high-protein fuel for your transformation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-3xl relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 text-[#FF4F5A] transform group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>

            <form onSubmit={handleCalculate} className="relative z-10 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 block">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 75"
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 block">
                    Height (cm) <span className="text-neutral-700 italic text-[10px] ml-1">(Optional)</span>
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 180"
                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF4F5A] hover:bg-[#ff6b74] text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 active:scale-95 transition-all text-sm uppercase tracking-widest mt-4"
              >
                Calculate Now
              </button>
            </form>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-8 pt-8 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800/50">
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="text-[#FF4F5A]">🔋</span> Recommended Protein
                    </p>
                    <p className="text-2xl font-black text-white">
                      {result.proteinMin}g - {result.proteinMax}g
                    </p>
                    <p className="text-[10px] text-neutral-600 mt-1">Grams per day</p>
                  </div>
                  <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800/50">
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="text-[#FF4F5A]">🔥</span> Maintenance
                    </p>
                    <p className="text-2xl font-black text-white">
                      {result.maintenanceCalories}
                    </p>
                    <p className="text-[10px] text-neutral-600 mt-1">Kcal per day</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Food Items Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold tracking-tight uppercase tracking-[0.1em] text-neutral-400">
                High Protein <span className="text-white">Fuels</span>
              </h3>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4F5A]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 h-[420px] overflow-y-auto pr-2 custom-scrollbar">
              {foodItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl hover:border-[#FF4F5A]/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-white group-hover:text-[#FF4F5A] transition-colors line-clamp-1">{item.name}</h4>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${item.tag === 'Veg' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                      }`}>
                      {item.tag}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-neutral-500 font-medium">Protein</span>
                      <span className="text-white font-bold">{item.protein}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-neutral-500 font-medium">Calories</span>
                      <span className="text-neutral-200">{item.calories}</span>
                    </div>
                  </div>
                  <div className="mt-3 w-full h-1 bg-neutral-950 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-neutral-700 group-hover:bg-[#FF4F5A] transition-all duration-500"
                      style={{ width: `${Math.min(parseInt(item.protein) * 3, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pro Tip */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex flex-col md:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z" />
            </svg>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            <span className="text-white font-bold block mb-1">Coach's Advice:</span>
            Consistent protein intake is the foundation of muscle repair. Aim for 4-5 protein-rich meals spread throughout the day for optimal absorption and satiety.
          </p>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1f1f1f;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </section>
  );
}
