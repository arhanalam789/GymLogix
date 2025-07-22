'use client';

export default function BlogHero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/bloghero.jpeg')" }}
    >
     
      <div className="absolute inset-0 bg-black/70 z-0"></div>

     
      <div className="relative z-10 max-w-4xl w-full px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Our Blog
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Explore the latest trends, insights, and stories from our experts.
        </p>
      </div>
    </section>
  );
}
