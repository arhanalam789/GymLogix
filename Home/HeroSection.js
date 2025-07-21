'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const HeroSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

 
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ name, email, message });
   
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleClick = () => {
    router.push('/services');
  };

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/herosection.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black/70 z-0"></div>


      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
 
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Track. Improve. <br />
            <span className="text-red-500">Transform.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Log workouts, set goals, and stay motivated with smart progress tracking.
          </p>
          <button
            className="mt-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold shadow-md transition-colors duration-300"
            onClick={handleClick}
          >
            Explore Workouts
          </button>
        </div>

    
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-400 pb-4">
            Get in Touch
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-gray-200 text-black border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
              value={name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-200 text-black border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-gray-200 text-black border border-gray-300 rounded focus:ring-2 focus:ring-red-500 focus:outline-none"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 font-semibold transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;