'use client';
import Image from 'next/image';

export default function KeySellingPoints() {
  const sellingPoints = [
    {
      title: "Your Entire Workout History — Organized",
      desc: "Easily log your workouts by category like chest, legs, cardio, etc. Track sets, reps, duration, and notes — all in one place.",
      image: "/11.jpeg", 
    },
    {
      title: "Set Goals That Actually Stick",
      desc: "Whether it's gaining muscle or burning fat, GymLogix lets you set fitness goals and tracks your progress step-by-step.",
      image: "/22.jpeg",     
    },
    {
      title: "See Your Growth, Stay Motivated",
      desc: "Visualize progress with clean graphs that show improvements in strength, workout consistency, and goal completion.",
      image: "/33.jpeg", 
    },
    {
      title: "Never Miss a Workout Again",
      desc: "Set daily or weekly reminders to keep you consistent. GymLogix keeps you on track with smart alerts and routine prompts.",
      image: "/44.jpeg", 
    }
  ];

  return (
    <section className="bg-black py-12 px-4 md:px-20 space-y-10">
      {sellingPoints.map((point, index) => (
        <div
          key={index}
          className="bg-[#1a1a1a] rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="md:w-2/3 text-white">
            <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
            <p className="text-gray-400">{point.desc}</p>
          </div>

          
<div className="md:w-1/3 flex justify-end">
  <Image
    src={point.image}
    alt={point.title}
    width={150}
    height={150}
    className="rounded-lg object-cover"
  />
</div>

        </div>
      ))}
    </section>
  );
}
