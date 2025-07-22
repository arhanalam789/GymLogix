'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function FeatureCarousel() {
  const features = [
    {
      title: "Workout Categories",
      desc: "Organize your workouts by body part, equipment, or type for faster logging and smarter training.",
      image: "/img1.jpeg",
    },
    {
      title: "Set Fitness Goals",
      desc: "Track your progress toward muscle gain, weight loss, or endurance with measurable targets.",
      image: "/img2.jpeg",
    },
    {
      title: "Know Your Workout Split",
      desc: "Select from Push/Pull/Legs, Bro Split, or Upper/Lower Body — and follow a structured weekly plan.",
      image: "/s1.jpeg", 
    },
    {
      title: "Workout Reminders",
      desc: "Set daily or weekly reminders to help you build consistent workout habits.",
      image: "/img4.jpeg",
    },
    {
        title: "Know Your Protein Intake",
        desc: "Estimate your daily protein needs based on your body weight, height, and fitness goals — perfect for muscle growth and recovery.",
        image: "/img5.jpeg", 
      }
      ,
  ];

  return (
    <section className="bg-black w-full py-10 px-4">
      <h2 className="text-2xl text-white font-bold mb-6">Features You'll Love</h2>

      <div className="flex overflow-x-auto space-x-6 pb-4 pr-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="min-w-[270px] max-w-[270px] bg-[#1a1a1a] rounded-xl p-5 text-white flex-shrink-0 flex flex-col justify-between h-[420px]"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={240}
              height={160}
              className="rounded mb-4 w-full h-[160px] object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{feature.desc}</p>
            </div>

            <Link href="/services">
              <button className="bg-white text-black w-full py-2 rounded hover:bg-gray-300 transition">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
