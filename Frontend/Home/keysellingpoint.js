'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function KeySellingPoints() {
  const sellingPoints = [
    {
      title: "Entire Workout History — Organized",
      desc: "Easily log your workouts by category like chest, legs, cardio, etc. Track sets, reps, duration, and notes — all in one precision-engineered dashboard.",
      image: "/11.jpeg",
      label: "Organization"
    },
    {
      title: "Set Goals That Actually Stick",
      desc: "Whether it's gaining muscle or burning fat, GymLogix lets you set fitness goals and tracks your progress step-by-step with metric-driven accuracy.",
      image: "/22.jpeg",
      label: "Advancement"
    },
    {
      title: "See Your Growth, Stay Motivated",
      desc: "Visualize progress with clean, high-fidelity graphs that show improvements in strength, consistency, and goal completion rates.",
      image: "/33.jpeg",
      label: "Visualization"
    },
    {
      title: "Never Miss a Workout Again",
      desc: "Set high-precision daily or weekly reminders to keep you consistent. GymLogix keeps you on track with automated routine prompts.",
      image: "/44.jpeg",
      label: "Discipline"
    }
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {sellingPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
          >
            {/* Split Content Section */}
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <span className="text-[#FF4F5A] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                {point.label}
              </span>
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                {point.title.split('—')[0]} <br />
                <span className="text-neutral-500">— {point.title.split('—')[1]}</span>
              </h3>
              <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                {point.desc}
              </p>

              <div className="pt-6 flex justify-center md:justify-start">
                <div className="h-1 w-20 bg-gradient-to-r from-[#FF4F5A] to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Split Image Section */}
            <div className="md:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF4F5A] to-white/10 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[32px] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                <Image
                  src={point.image}
                  alt={point.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Element */}
              <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 bg-[#FF4F5A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
