'use client';
/* eslint-disable react/no-unescaped-entities */

export default function AboutPage() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hs_about.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/70 z-0"></div>

    
      <div className="relative z-10 max-w-6xl w-full px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Fitness Journeys <br />
            <span className="text-[#FF4F5A]">One Rep at a Time</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            At GymLogix, we help you transform your fitness vision into reality.
            From smart workout tracking to goal setting and performance analytics — we&apos;ve got your back.
          </p>
        </div>

      
        <div className="hidden md:block text-center">
          <p className="text-xl italic text-gray-400">
            &quot;Fitness is not about being better than someone else… it&apos;s about being better than you used to be.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
