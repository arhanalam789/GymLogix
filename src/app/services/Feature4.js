"use client";
import React, { useState } from "react";

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

  const handleCalculate = () => {
    if (!weight || isNaN(weight)) {
      alert("Please enter a valid weight.");
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
    <div className="p-6 bg-black text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Know Your Protein Intake</h1>

      
      <div className="bg-[#111] p-6 rounded-xl mb-6 w-full max-w-md shadow-lg">
        <label className="block mb-4">
          <span className="text-sm">Weight (kg) *</span>
          <input
            type="number"
            className="mt-1 w-full px-3 py-2 bg-[#1a1a1a] rounded-md text-white focus:outline-none"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Height (cm) <span className="text-gray-500">(optional)</span></span>
          <input
            type="number"
            className="mt-1 w-full px-3 py-2 bg-[#1a1a1a] rounded-md text-white focus:outline-none"
            placeholder="Enter your height (optional)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>

        <button
          onClick={handleCalculate}
          className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-300 transition"
        >
          Calculate
        </button>
      </div>

 
      {result && (
        <div className="bg-[#111] p-6 rounded-lg mb-6 w-full max-w-md text-center shadow-md">
          <p className="mb-2 text-lg font-medium">🔋 Protein: {result.proteinMin}g - {result.proteinMax}g / day</p>
          <p className="text-lg font-medium">🔥 Maintenance Calories: {result.maintenanceCalories} kcal / day</p>
        </div>
      )}

      
      <h2 className="text-2xl font-semibold mb-4 w-full text-left">High Protein Foods</h2>
      <div className="flex overflow-x-auto space-x-4 pb-2 w-full">
        {foodItems.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[160px] bg-[#1a1a1a] p-4 rounded-lg flex-shrink-0 shadow-inner"
          >
            <h3 className="text-md font-bold mb-1">{item.name}</h3>
            <p className="text-sm text-gray-300">Protein: {item.protein}</p>
            <p className="text-sm text-gray-300">Calories: {item.calories}</p>
            <span className="mt-2 inline-block text-xs text-gray-400 bg-[#222] px-2 py-1 rounded">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
