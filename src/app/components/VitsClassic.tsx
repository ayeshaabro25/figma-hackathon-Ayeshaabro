import React from "react";

const VitaClassicProduct: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-[#2B8A6D] h-screen">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left text-white">
        <h3 className="uppercase text-sm text-white mb-2">Summer 2020</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Vita Classic <br /> Product
        </h1>
        <p className="text-white text-sm mb-8 leading-relaxed">
          We know how large objects will act, We know how are objects will act,
          We know
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <span className="text-2xl font-bold">$16.48</span>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[600px] flex justify-center mt-8 md:mt-0">
        <img
          src="/images/vitaclassic.jpg" // Replace with your actual image path
          alt="Vita Classic Product"
          className="object-contain"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  );
};

export default VitaClassicProduct;
