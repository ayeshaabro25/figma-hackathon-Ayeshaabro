import React from "react";

const NeuralUniverse: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-10 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-[704px] flex justify-center">
        <img
          src="/images/nueral-universe.jpg" 
          alt="Neural Universe"
          className="rounded-lg object-cover w-full md:w-[704px] h-auto md:h-[682px]"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10 text-center md:text-left">
        <h3 className="uppercase text-sm text-gray-500 mb-2">Summer 2020</h3>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Part of the Neural Universe
        </h2>
        <p className="text-gray-700 mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
          <button className="bg-green-500 text-white font-medium py-2 px-6 rounded hover:bg-green-600 transition-all">
            BUY NOW
          </button>
          <button className="border border-gray-300 text-gray-900 font-medium py-2 px-6 rounded hover:bg-gray-100 transition-all">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NeuralUniverse;
