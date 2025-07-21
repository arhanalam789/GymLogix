'use client';
import Link from 'next/link';

export default function GuestPage() {
  return (
    <div className="relative min-h-screen text-white flex flex-col justify-center items-center px-4 text-center">
      
      <div className="absolute inset-0 -z-10">
        <img
          src="/s1.jpg" 
          alt="Fitness Motivation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

     
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Unlock Your True Potential with GymLogix
      </h1>
      <p className="text-lg mb-8 max-w-xl">
        Track workouts, set goals, and crush your fitness journey. Log in to access personalized services.
      </p>
      <Link href="/login">
        <button className="bg-[#FF4F5A] px-6 py-3 rounded-md text-white font-semibold">
          Login to Continue
        </button>
      </Link>
    </div>
  );
}
