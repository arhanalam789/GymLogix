'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "Top 3 Chest Exercises for Mass",
    description: "Build your pecs with these powerful compound lifts and isolation moves.",
    image: "/1.jpeg",
    author: "Rahul Singh",
    date: "Jan 12, 2026",
    tag: "Training"
  },
  {
    title: "Leg Day That Burns Fat",
    description: "Hit your quads, hamstrings, and glutes with these leg-blasting routines.",
    image: "/2.jpeg",
    author: "Sneha Verma",
    date: "Jan 10, 2026",
    tag: "Fat Loss"
  },
  {
    title: "Protein Myths Busted",
    description: "Are you taking too much protein? Find out what science says.",
    image: "/3.jpeg",
    author: "Aman Mehta",
    date: "Jan 08, 2026",
    tag: "Nutrition"
  },
  {
    title: "Back Workouts for Beginners",
    description: "Strengthen your lats and traps with these easy yet effective exercises.",
    image: "/4.jpeg",
    author: "Karan Patel",
    date: "Jan 05, 2026",
    tag: "Beginner"
  },
  {
    title: "Cardio or Weights for Fat Loss?",
    description: "Which one is better for shredding fat? Let's break it down.",
    image: "/5.jpeg",
    author: "Neha Sinha",
    date: "Jan 02, 2026",
    tag: "Fat Loss"
  },
  {
    title: "Home Workout Without Equipment",
    description: "No gym? No problem. Build strength using your bodyweight at home.",
    image: "/6.jpeg",
    author: "Arjun Kapoor",
    date: "Dec 28, 2025",
    tag: "At Home"
  },
  {
    title: "Meal Prep for Muscle Gain",
    description: "Plan your meals for gains without breaking the bank.",
    image: "/7.jpeg",
    author: "Tanvi Rathi",
    date: "Dec 25, 2025",
    tag: "Nutrition"
  },
  {
    title: "Avoid These 5 Gym Mistakes",
    description: "Common gym mistakes that slow your progress — and how to fix them.",
    image: "/8.jpeg",
    author: "Rohit Thakur",
    date: "Dec 20, 2025",
    tag: "Mistakes"
  },
  {
    title: "Importance of Rest Days",
    description: "Learn why recovery days are just as crucial as workout days.",
    image: "/9.jpeg",
    author: "Priya Desai",
    date: "Dec 15, 2025",
    tag: "Recovery"
  },
];

export default function BlogList() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16 gap-4">
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter">
            LATEST <span className="text-[#FF4F5A]">ARTICLES</span>
          </h2>
          <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-neutral-500">
            <span>Featured</span>
            <span className="text-neutral-800">/</span>
            <span className="text-neutral-300">Newest</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 border border-white/5 bg-neutral-900 group-hover:border-[#FF4F5A]/30 transition-all duration-500">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                <span className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[#FF4F5A] text-[10px] font-black uppercase tracking-widest z-10">
                  {post.tag}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-800"></span>
                  <span>{post.author}</span>
                </div>

                <h3 className="text-white text-2xl font-bold leading-tight group-hover:text-[#FF4F5A] transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2 font-medium">
                  {post.description}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-[#FF4F5A] transition-colors">
                    READ STORY
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-20 text-center">
          <button className="px-12 py-4 bg-neutral-900 border border-neutral-800 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-all active:scale-95">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
