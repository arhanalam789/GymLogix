'use client';

export default function OurHistory() {
  const timeline = [
    { year: '2020', event: 'GymLogix was founded in Mumbai, India.' },
    { year: '2022', event: 'Launched our first app-based workout tracker.' },
    { year: '2023', event: 'Expanded to 5 cities and partnered with gyms.' },
    { year: '2024', event: 'Integrated with wearable tech and APIs.' },
    { year: '2025', event: 'Reached over 1 lakh active users across India.' },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our History</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From a humble start in 2020 to becoming a trusted fitness companion for thousands, our journey is shaped by passion, innovation, and consistency.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="bg-[#2563EB] text-white font-semibold px-5 py-2 rounded-full w-24 text-center text-sm">
              {item.year}
            </div>
            <div className="bg-white text-black px-6 py-4 rounded-md shadow-md w-full text-sm sm:text-base">
              {item.event}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
