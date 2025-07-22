'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Gus Fring',
    review: 'The app helped me track my workouts consistently. Love the goal feature!',
    image: '/gus.jpeg'
  },
  {
    name: 'Walter White',
    review: 'I started using GymLogix last month. The reminders are super helpful!',
    image: '/ww.jpeg'
  },
  {
    name: 'Vikram Joshi',
    review: 'Amazing app for gym enthusiasts. The exercise database is so vast!',
    image: '/jp.jpeg'
  },
  {
    name: 'Pooja Nair',
    review: 'The graphs helped me see my progress visually. Highly motivating!',
    image: '/users/user4.jpeg'
  },
  {
    name: 'Siddharth Rao',
    review: 'The app design is simple and intuitive. I use it daily!',
    image: '/users/user5.jpeg'
  },
  {
    name: 'Kavita Patel',
    review: 'Setting fitness goals has never been this easy. Great app!',
    image: '/users/user6.jpeg'
  },
  {
    name: 'Rohit Verma',
    review: 'I’m eating better and lifting smarter thanks to the Nutritionix API integration.',
    image: '/users/user7.jpeg'
  },
  {
    name: 'Neha Deshmukh',
    review: 'Tracking progress with charts keeps me accountable. Love it!',
    image: '/users/user8.jpeg'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Our Customers Say</h2>

        <div className="overflow-x-auto">
          <div className="flex gap-6 md:gap-8 px-1 md:px-4 min-w-max">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-black rounded-lg shadow-md p-6 min-w-[280px] max-w-sm flex-shrink-0"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-sm md:text-base italic mb-4">"{testimonial.review}"</p>
                <p className="text-center font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
