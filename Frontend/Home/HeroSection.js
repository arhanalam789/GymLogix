'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'loading', 'success', 'error'
  const router = useRouter();

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch("https://formspree.io/f/mzddddyb", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });
      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleclick = () => {
    router.push('/services');
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/herosection.jpeg"
          alt="Gym Background"
          fill
          priority
          className="object-cover object-center brightness-[0.4]"
          quality={90}
        />
      </motion.div>

      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-1"></div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4F5A]/10 border border-[#FF4F5A]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4F5A] animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF4F5A]">Evolve Every Day</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
            TRACK. IMPROVE. <br />
            <span className="text-[#FF4F5A] drop-shadow-[0_0_15px_rgba(255,79,90,0.3)]">TRANSFORM.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-xl font-medium leading-relaxed mx-auto lg:mx-0">
            Precision workout logging, strategic goal setting, and real-time performance analytics.
            The elite platform for your physical evolution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={handleclick}
              className="px-8 py-4 bg-[#FF4F5A] hover:bg-[#ff6b74] text-white font-black text-xs uppercase tracking-[0.2em] rounded-full shadow-lg shadow-red-900/20 active:scale-95 transition-all"
            >
              Explore Workouts
            </button>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full border border-white/10 backdrop-blur-md active:scale-95 transition-all"
            >
              Contact Coach
            </button>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-neutral-900/50 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF4F5A]/10 blur-3xl rounded-full group-hover:bg-[#FF4F5A]/20 transition-all duration-700"></div>

          <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase relative z-10">
            Secure Your <span className="text-[#FF4F5A]">Edge</span>
          </h2>

          <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Full Name</label>
              <input
                type="text"
                placeholder="John Wick"
                className="w-full p-4 rounded-2xl bg-black border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all placeholder:text-neutral-700 font-medium"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-4 rounded-2xl bg-black border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all placeholder:text-neutral-700 font-medium"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest ml-1">Message</label>
              <textarea
                placeholder="Tell us about your goals..."
                className="w-full p-4 rounded-2xl bg-black border border-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-[#FF4F5A]/50 focus:border-[#FF4F5A] transition-all placeholder:text-neutral-700 font-medium h-32 resize-none"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-[#FF4F5A] hover:text-white transition-all active:scale-95 text-xs uppercase tracking-[0.2em] group disabled:opacity-50"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Initiate Transmission
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-500 text-center text-xs font-black uppercase tracking-widest"
                >
                  🚀 Signal Received. We'll contact you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-center text-xs font-black uppercase tracking-widest"
                >
                  ❌ System Fault. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
