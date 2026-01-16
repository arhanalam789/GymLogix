'use client';
import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Fixed Effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/bloghero.jpeg')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-1"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF4F5A]/50 to-transparent"></div>

      <div className="relative z-10 max-w-5xl w-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4F5A]/10 border border-[#FF4F5A]/20 text-[#FF4F5A] text-xs font-black uppercase tracking-[0.2em] mb-6">
            Insights & Stories
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white mb-8">
            ELEVATE YOUR <br />
            <span className="text-[#FF4F5A] drop-shadow-[0_0_15px_rgba(255,79,90,0.3)]">PERSPECTIVE</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Deep dives into training methodology, nutritional science, and the psychological edge
            needed for elite performance.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#FF4F5A] to-transparent"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-2"></div>
    </section>
  );
}
