import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[80vh]">
      {/* Full-Screen Image */}
      <div className="relative w-full h-full">
        <Image
          src="/images/carousel-item.jpg" // Replace with your actual image path
          alt="New Collection"
          layout="fill" // Fills the entire section
          objectFit="cover" // Keeps image's aspect ratio
          priority // Optimizes loading
        />

        {/* Shop Now Button with Exact Style */}
        <button
          className="absolute bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg shadow-md transition"
          style={{
            top: '76%', // Move the button a bit more down
            left: '13%', // Move the button a bit more to the left
            paddingTop: '15px',
            paddingRight: '40px',
            paddingBottom: '15px',
            paddingLeft: '40px',
            width: '255px', // Button width as per your input
            height: '70px', // Button height as per your input
            borderRadius: '5px',
            gap: '10px', // Button's internal spacing
            transform: 'translateY(-50%)', // Ensure proper vertical alignment
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
