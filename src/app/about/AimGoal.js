'use client';

export default function MissionVisionSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Mission</h3>
            <p>
              We aim to revolutionize fitness tracking by delivering smart, user-centric solutions
              that motivate people to live healthier lives.
            </p>
          </div>
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Our Vision</h3>
            <p>
              To become the most trusted fitness companion by blending technology with personal wellness goals,
              making fitness accessible and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}