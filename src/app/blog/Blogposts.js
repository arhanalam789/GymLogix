const blogPosts = [
    {
      title: "Top 3 Chest Exercises for Mass",
      description: "Build your pecs with these powerful compound lifts and isolation moves.",
      image: "/1.jpg",
      author: "Rahul Singh",
    },
    {
      title: "Leg Day That Burns Fat",
      description: "Hit your quads, hamstrings, and glutes with these leg-blasting routines.",
      image: "/2.jpg",
      author: "Sneha Verma",
    },
    {
      title: "Protein Myths Busted",
      description: "Are you taking too much protein? Find out what science says.",
      image: "/3.jpg",
      author: "Aman Mehta",
    },
    {
      title: "Back Workouts for Beginners",
      description: "Strengthen your lats and traps with these easy yet effective exercises.",
      image: "/4.jpg",
      author: "Karan Patel",
    },
    {
      title: "Cardio or Weights for Fat Loss?",
      description: "Which one is better for shredding fat? Let's break it down.",
      image: "/5.jpg",
      author: "Neha Sinha",
    },
    {
      title: "Home Workout Without Equipment",
      description: "No gym? No problem. Build strength using your bodyweight at home.",
      image: "/6.jpg",
      author: "Arjun Kapoor",
    },
    {
      title: "Meal Prep for Muscle Gain",
      description: "Plan your meals for gains without breaking the bank.",
      image: "/7.jpg",
      author: "Tanvi Rathi",
    },
    {
      title: "Avoid These 5 Gym Mistakes",
      description: "Common gym mistakes that slow your progress — and how to fix them.",
      image: "/8.jpg",
      author: "Rohit Thakur",
    },
    {
      title: "Importance of Rest Days",
      description: "Learn why recovery days are just as crucial as workout days.",
      image: "/9.jpg",
      author: "Priya Desai",
    },
  ];
  
  export default function BlogList() {
    return (
      <section className="bg-black py-12 px-6">
        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Our Latest Articles
        </h2>
  
        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-lg shadow-md overflow-hidden min-w-[300px] max-w-[300px]"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{post.description}</p>
                  <p className="text-gray-500 text-xs mb-2">By {post.author}</p>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  