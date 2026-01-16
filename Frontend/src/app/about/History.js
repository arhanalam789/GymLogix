'use client';
import { motion } from 'framer-motion';

export default function OurHistory() {
  const timeline = [
    { year: '2020', event: 'GymLogix was founded in Mumbai, India.' },
    { year: '2022', event: 'Launched our first app-based workout tracker.' },
    { year: '2023', event: 'Expanded to 5 cities and partnered with gyms.' },
    { year: '2024', event: 'Integrated with wearable tech and APIs.' },
    { year: '2025', event: 'Reached over 1 lakh active users across India.' },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#FF4F5A] text-xs font-black uppercase tracking-[0.3em] mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">OUR <span className="text-[#FF4F5A]">HISTORY</span></h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            From a humble start in 2020 to becoming a trusted fitness companion for thousands,
            our journey is shaped by passion, innovation, and unwavering consistency.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF4F5A] via-neutral-800 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Year Badge */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#FF4F5A] -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,79,90,0.5)]"></div>

                <div className="ml-16 md:ml-0 md:w-1/2 flex flex-col items-start md:items-center">
                  <span className="text-3xl font-black text-[#FF4F5A] tracking-tighter mb-2">{item.year}</span>
                  <div className={`w-full p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-[#FF4F5A]/30 transition-all duration-300 shadow-xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                    <p className="text-neutral-300 font-medium leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
