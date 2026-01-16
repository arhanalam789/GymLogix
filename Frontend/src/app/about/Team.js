'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const team = [
    {
      name: 'Arhan Alam',
      role: 'Founder & CEO',
      image: '/ceo.jpeg',
      desc: 'Arhan is a passionate innovator who started GymLogix with a vision to make fitness tracking smart and accessible.',
    },
    {
      name: 'Sneha Verma',
      role: 'CTO',
      image: '/cto.jpeg',
      desc: 'Sneha leads our tech team with expertise in AI integrations and scalable apps.',
    },
    {
      name: 'Rohan Kapoor',
      role: 'Head of Marketing',
      image: '/mh.jpeg',
      desc: 'Rohan drives campaigns that connect users with innovative wellness solutions.',
    },
    {
      name: 'Ananya Rao',
      role: 'Lead Developer',
      image: '/ld.jpeg',
      desc: 'Ananya specializes in React and backend services powering GymLogix.',
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#FF4F5A] text-xs font-black uppercase tracking-[0.3em] mb-4 block">The Architects</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">MEET THE <span className="text-[#FF4F5A]">TEAM</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 hover:border-[#FF4F5A]/40 transition-all duration-500 text-center flex flex-col items-center"
            >
              <div className="relative w-32 h-32 mb-6 rounded-3xl overflow-hidden border-2 border-neutral-800 group-hover:border-[#FF4F5A]/50 transition-colors duration-500 shadow-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black tracking-tight group-hover:text-[#FF4F5A] transition-colors">{member.name}</h3>
                <p className="text-[#FF4F5A] text-[10px] font-black uppercase tracking-[0.2em]">{member.role}</p>
              </div>

              <div className="mt-6 w-full h-px bg-neutral-800"></div>

              <p className="mt-6 text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                {member.desc}
              </p>

              {/* Decorative Accent */}
              <div className="absolute top-4 right-4 text-neutral-800 group-hover:text-[#FF4F5A]/20 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}