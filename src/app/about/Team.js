'use client';

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
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white text-black rounded-lg shadow-md p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-700">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}