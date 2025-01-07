import React from "react";
import Image from "next/image";

const FeaturedPosts: React.FC = () => {
  const posts = [
    { title: "Post 1", image: "/images/post1.jpg" },
    { title: "Post 2", image: "/images/post2.jpg" },
    { title: "Post 3", image: "/images/post3.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Posts</h2>
        <p className="text-lg mb-8">
          Trying to resolve the conflict between the two measure realms of
          classical physics: Newtonian and Mechanics
        </p>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[606px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={328} // Fixed width
                  height={606} // Fixed height
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
