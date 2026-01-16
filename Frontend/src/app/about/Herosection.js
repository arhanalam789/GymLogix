'use client';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Parallax-like scale effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hs_about.jpeg')",
        }}
      ></motion.div>

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-1"></div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-20 py-24 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-center max-w-4xl flex flex-col items-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4F5A]/10 border border-[#FF4F5A]/20 text-[#FF4F5A] text-xs font-black uppercase tracking-[0.2em]">
            The GymLogix Story
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
            EMPOWERING <br />
            <span className="text-[#FF4F5A] drop-shadow-[0_0_15px_rgba(255,79,90,0.3)]">TRANSFORMATION</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-medium leading-relaxed">
            We aren't just an app; we're a movement. At GymLogix, we bridge the gap between
            ambition and achievement through cutting-edge technology and human-centric design.
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-12 bg-[#FF4F5A]"></div>
            <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest italic">
              ESTABLISHED 2020 • MUMBAI, INDIA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
