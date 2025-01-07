import React from "react";

const EditorsPick: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          EDITOR’S PICK
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {/* Item 1: Men */}
        <div className="relative group">
          <img
            src="/images/men.jpg"
            alt="Men"
            className="w-full h-auto object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md group-hover:bg-gray-100">
            MEN
          </button>
        </div>

        {/* Item 2: Women */}
        <div className="relative group">
          <img
            src="/images/woman.jpg"
            alt="Women"
            className="w-full h-auto object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md group-hover:bg-gray-100">
            WOMEN
          </button>
        </div>

        {/* Item 3: Accessories */}
        <div className="relative group">
          <img
            src="/images/accessories.jpg"
            alt="Accessories"
            className="w-full h-auto object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md group-hover:bg-gray-100">
            ACCESSORIES
          </button>
        </div>

        {/* Item 4: Kids */}
        <div className="relative group">
          <img
            src="/images/kids.jpg"
            alt="Kids"
            className="w-full h-auto object-cover rounded-lg"
          />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md group-hover:bg-gray-100">
            KIDS
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
