'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Gus Fring',
    review: 'The app helped me track my workouts consistently. The precision and consistency of the goal feature is unmatched in the industry.',
    image: '/gus.jpeg',
    role: 'Managing Director'
  },
  {
    name: 'Walter White',
    review: 'I started using GymLogix last month. The high-precision reminders are super helpful for maintaining a strict performance schedule.',
    image: '/ww.jpeg',
    role: 'High School Teacher'
  },
  {
    name: 'Vikram Joshi',
    review: 'Amazing app for gym enthusiasts. The exercise database is so vast and the integration with modern metrics is seamless.',
    image: '/jp.jpeg',
    role: 'Fitness Athlete'
  },
  {
    name: 'Pooja Nair',
    review: 'The high-fidelity graphs helped me see my progress visually. It transform the way I look at my training data.',
    image: '/users/user4.jpeg',
    role: 'Yoga Instructor'
  },
  {
    name: 'Siddharth Rao',
    review: 'The app design is sophisticated and intuitive. It feels like a premium tool for serious training. I use it daily!',
    image: '/users/user5.jpeg',
    role: 'Professional Swimmer'
  },
  {
    name: 'Kavita Patel',
    review: 'Setting fitness goals has never been this articulated and easy. GymLogix is the benchmark for fitness apps.',
    image: '/users/user6.jpeg',
    role: 'Marathon Runner'
  },
  {
    name: 'Rohit Verma',
    review: 'I’m lifting smarter thanks to the deep analytics and the ExerciseDB integration. The best tool in my arsenal.',
    image: '/users/user7.jpeg',
    role: 'Powerlifter'
  },
  {
    name: 'Neha Deshmukh',
    review: 'Tracking progress with clear, interactive charts keeps me accountable. This is elite performance tracking.',
    image: '/users/user8.jpeg',
    role: 'Health Blogger'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#FF4F5A] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">WHAT OUR <span className="text-[#FF4F5A]">COMMUNITY</span> SAYS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-[32px] hover:border-[#FF4F5A]/40 transition-all duration-500 group relative flex flex-col justify-between"
            >
              <div className="absolute top-8 right-8 text-neutral-800 group-hover:text-[#FF4F5A]/20 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.9124 14 15.017 13.1046 15.017 12V10C15.017 8.89543 15.9124 8 17.017 8H19.017V6H16.017C14.9124 6 14.017 5.10457 14.017 4V1L21.017 1V21H14.017Z" />
                </svg>
              </div>

              <div className="space-y-6">
                <p className="text-neutral-400 font-medium leading-relaxed italic relative z-10">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#FF4F5A]/50 transition-colors">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-white group-hover:text-[#FF4F5A] transition-colors">{testimonial.name}</h4>
                    <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
