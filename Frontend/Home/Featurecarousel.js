'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeatureCarousel() {
  const features = [
    {
      title: "Workout Categories",
      desc: "Organize your workouts by body part, equipment, or type for faster logging and smarter training.",
      image: "/img1.jpeg",
      tag: "Intelligence"
    },
    {
      title: "Set Fitness Goals",
      desc: "Track your progress toward muscle gain, weight loss, or endurance with measurable targets.",
      image: "/img2.jpeg",
      tag: "Consistency"
    },
    {
      title: "Know Your Workout Split",
      desc: "Select from Push/Pull/Legs, Bro Split, or Upper/Lower Body — and follow a structured weekly plan.",
      image: "/s1.jpeg",
      tag: "Strategy"
    },
    {
      title: "Workout Reminders",
      desc: "Set daily or weekly reminders to help you build consistent workout habits.",
      image: "/img4.jpeg",
      tag: "Discipline"
    },
    {
      title: "Know Your Protein Intake",
      desc: "Estimate your daily protein needs based on your body weight, height, and fitness goals.",
      image: "/img5.jpeg",
      tag: "Nutrition"
    }
  ];

  return (
    <section className="bg-black w-full py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-6"
        >
          <div className="space-y-4">
            <span className="text-[#FF4F5A] text-xs font-black uppercase tracking-[0.3em]">Core Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">FEATURES YOU'LL <span className="text-[#FF4F5A]">LOVE</span></h2>
          </div>
          <p className="text-neutral-500 font-medium max-w-sm">Every tool you need to optimize your physical performance, integrated into a single seamless experience.</p>
        </motion.div>

        <div className="flex overflow-x-auto space-x-6 pb-12 no-scrollbar custom-scrollbar">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-w-[320px] max-w-[320px] bg-neutral-900 border border-neutral-800 rounded-[32px] p-6 text-white flex-shrink-0 flex flex-col h-[500px] hover:border-[#FF4F5A]/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Glow Accent */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FF4F5A]/5 blur-3xl rounded-full group-hover:bg-[#FF4F5A]/10 transition-all duration-700"></div>

              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-8 border border-white/5">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[#FF4F5A] text-[9px] font-black uppercase tracking-widest">
                  {feature.tag}
                </span>
              </div>

              <div className="flex-grow space-y-4">
                <h3 className="text-2xl font-black tracking-tight group-hover:text-[#FF4F5A] transition-colors">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>

              <Link href="/services" className="mt-8 block">
                <button className="w-full bg-black text-white py-4 rounded-2xl border border-neutral-800 font-black text-[10px] uppercase tracking-widest hover:bg-[#FF4F5A] hover:border-[#FF4F5A] transition-all active:scale-95">
                  Explore Feature
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
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
