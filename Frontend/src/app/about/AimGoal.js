'use client';
import { motion } from 'framer-motion';

export default function MissionVisionSection() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group p-10 rounded-[40px] bg-neutral-900 border border-neutral-800 hover:border-[#FF4F5A]/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#FF4F5A]/5 blur-3xl rounded-full group-hover:bg-[#FF4F5A]/10 transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#FF4F5A]/10 flex items-center justify-center text-[#FF4F5A] mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">Our <span className="text-[#FF4F5A]">Mission</span></h3>
              <p className="text-neutral-400 text-lg font-medium leading-relaxed">
                We aim to revolutionize fitness tracking by delivering smart, user-centric solutions
                that motivate people to live healthier, stronger lives through precision and consistency.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group p-10 rounded-[40px] bg-neutral-900 border border-neutral-800 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase">Our <span className="text-white">Vision</span></h3>
              <p className="text-neutral-400 text-lg font-medium leading-relaxed">
                To become the most trusted global fitness companion by blending cutting-edge
                technology with personal wellness goals, making elite fitness accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}